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
      top: dinamicTop + 'px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().modalContent)} ${contentStyles}`,
      style: otherStyles,
      ref: node,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvQmFsbC9CYWxsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9OYXZpZ2F0aW9uL0xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvTmF2aWdhdGlvbi9uYXZfZGF0YS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL1BTSWNvbnMvUFMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvU29jaWFsTWVkaWEvU01JY29ucy9TTS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9jb21tb24vSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9MYW5ndWFnZURyb3BDb25maWdzL2xhbmctY29uZmlncy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9MYW5ndWFnZURyb3AvTGFuZ3VhZ2VEcm9wLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkRHJvcC9Mb2dnZWREcm9wLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkV2FsbHBlci9Mb2dnZWRXYWxscGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Ecm9wZG93bk1lbnUvRHJvcGRvd24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9Mb2dpbkZvcm0vTG9naW5Gb3JtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0dldEVtYWlsQ29kZS9HZXRFbWFpbENvZGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1Jlc2V0UGFzc3dvcmQvR2V0RW1haWxDb2RlL2lucHV0X2NvbmZpZ3MuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9OZXdQYXNzd29yZC9OZXdQYXNzd29yZC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9TdWNjZXNzL1N1Y2Nlc3MuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1NvY2lhbE1lZGlhSWNvbnMvU29jaWFsTWVkaWFJY29ucy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vY29tbW9uL1Jlc2V0UGFzc3dvcmRMaW5rLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9jb21tb24vU3VibWl0LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9jb21tb24vVGl0bGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL2NvbW1vbi9Ub1JlZ2lzdGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dvL0xvZ28uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL05hdkJhci9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL05hdkJhci9OYXZCYXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL01vZGFscy9GYWNlYm9vay9GYWNlYm9vay5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvSW5zdGFncmFtL0luc3RhZ3JhbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvUGhvbmUvUGhvbmUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvTW9kYWxzL1RlbGVncmFtL1RlbGVncmFtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL01vZGFscy9WaWJlci9WaWJlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvV2F0c1VwL1dhdHNVcC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL0NvbnRhY3RzL0NvbnRhY3RzTW9kYWwuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9Db250YWN0cy9jb250YWN0c19kYXRhLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xheW91dHMvRXJyb3IuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9NYWluLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xheW91dHMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9XaXRob3V0UGhvdG8uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9sYXlvdXQtd3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL2VyLmxpYi5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi9waG9uZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi90cmlhbmdsZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9sZWZ0QmFsbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9tYXN0ZXJDYXJkLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvZm9vdGVyL3Zpc2EucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvY2xvc2VWZWN0b3IucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZW1haWwuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZmFjZWJvb2suc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvaW5zdGFncmFtLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3Bob25lLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3RlbGVncmFtLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3ZpYmVyLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9kcm9wZG93bl9saW5lcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9hcm0uc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZGV1LnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2VuLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2VzcC5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9mcmMuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvcnVzLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2Zvb3RiYWxsZXIuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4ucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZmFjZWJvb2suc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZ21haWwuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vc3VjY2Vzcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi90d2l0dGVyLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3ZrLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ28uc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvcmVnaXN0ZXIucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wZXJzb25hbC9iYWxsLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0JhbGwvQmFsbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL05hdmlnYXRpb24vTGlzdC9MaXN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvU29jaWFsTWVkaWEvUFNJY29ucy9QUy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL1NNSWNvbnMvU00ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL2NvbW1vbi9JY29uL0ljb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvQmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xhbmd1YWdlRHJvcC9MYW5ndWFnZURyb3AubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvQmFySXRlbXMvTG9nZ2VkL0xvZ2dlZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkRHJvcC9Mb2dnZWREcm9wLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xvZ2dlZC9Mb2dnZWRXYWxscGVyL0xvZ2dlZFdhbGxwZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvRHJvcGRvd25NZW51L0Ryb3Bkb3duLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luRm9ybS9Mb2dpbkZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0dldEVtYWlsQ29kZS9HZXRFbWFpbENvZGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9OZXdQYXNzd29yZC9OZXdQYXNzd29yZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL1N1Y2Nlc3MvU3VjY2Vzcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9Tb2NpYWxNZWRpYUljb25zL1NvY2lhbE1lZGlhSWNvbnMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9nby9Mb2dvLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvTmF2QmFyL0J1dHRvbi9CdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9OYXZCYXIvTmF2QmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvSWNvbi9JY29uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvTW9kYWxzL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvQ29udGFjdHMvQ29udGFjdHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG5cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWZhY2Vib29rLWxvZ2luXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbG9naW5cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdHdpdHRlci1sb2dpblwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJ5dXBcIiIsIndlYnBhY2s6Ly9mb290LWJldC9pZ25vcmVkfEM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXHByb2plY3RzXFxmb290LWJldFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkJhbGwiLCJzdHlsZXMiLCJiYWxsSWNvbiIsIkZvb3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiTGlzdCIsImxpc3RfaXRlbXMiLCJib3JkZXJzQWN0aXZlIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5IiwibWFwIiwiZWwiLCJsaW5rIiwibmFtZSIsIk1hdGgiLCJyYW5kb20iLCJOYXZpZ2F0aW9uIiwibmF2X2RhdGEiLCJpIiwiUFMiLCJpY29ucyIsInNyYyIsInZpc2EiLCJtYXN0ZXJDYXJkIiwibGFzdEVsZW1lbnQiLCJTTSIsInBob25lIiwidXJsIiwiZmFjZWJvb2siLCJ3YXRzdXAiLCJpbnN0YWdyYW0iLCJ2aWJlciIsInRlbGVncmFtIiwibGVuZ3RoIiwiU29jaWFsTWVkaWEiLCJJY29uIiwiY2xpY2siLCJlbGVtZW50cyIsIm90aGVyU3R5bGVzIiwiY2xhc3NlcyIsIndpZHRoIiwicGFkZGluZyIsIkJhciIsImJhcl9pdGVtcyIsImJhcl9pdGVtc19jb250Iiwic2hvd0xvZ2luTW9kYWwiLCJzZXRTaG93TG9naW5Nb2RhbCIsInVzZVN0YXRlIiwidXNlcl9pbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiQmFySXRlbXMiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsInJlZ2lzdHJhdGlvbl9wYXRoIiwibG9naW5Nb2RhbEhhbmRsZSIsInVzZXJMb2dnZWQiLCJsYW5nIiwibGFuZ3VhZ2VzVGl0bGUiLCJzZXRMYW5ndWFnZXNUaXRsZSIsImxhbmd1YWdlcyIsInVzZUVmZmVjdCIsIm5ld0xhbmciLCJsYW5ndWFnZXNfZGF0YSIsInNob3dEcm9wIiwic2V0U2hvd0Ryb3AiLCJjaGFuZ2VMYW5nVGl0bGUiLCJldmVudCIsImxhbmdfdGl0bGVfZGF0YSIsImZpbHRlciIsInRhcmdldCIsImNsYXNzTmFtZSIsInJlZ2lzdGVyX2ljb24iLCJsb2dpbl9pY29uIiwiZGlzcGxheSIsImNvbnRlbnRPblRpdGxlIiwiaWNvbiIsImNvbnRlbnRPbkRyb3AiLCJhcm1GbGFnIiwicnVzRmxhZyIsImVuRmxhZyIsImVzcEZsYWciLCJmcmNGbGFnIiwiZGV1RmxhZyIsIkxhbmd1YWdlRHJvcCIsIm9uQ2xvc2UiLCJkYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibm9kZSIsInVzZVJlZiIsImUiLCJjdXJyZW50IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiTG9nZ2VkIiwic2hvd1VzZXJEcm9wIiwic2V0U2hvd1VzZXJEcm9wIiwic2VsZWN0VXNlciIsInBob3RvIiwic2V0UGhvdG8iLCJ1c2VybmFtZSIsIkxvZ2dlZERyb3AiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiX2xvZ291dCIsImxvZ291dCIsInB1c2giLCJnb1RvUGVyc29uYWwiLCJ1c2VyRGVmYXVsdEljb24iLCJ0ZWxJY29uIiwidGVsZXBob25lIiwiTG9nZ2VkV2FsbHBlciIsImltZyIsImZ1bGxOYW1lIiwiZnVsbG5hbWUiLCJzZXRGdWxsbmFtZSIsImNvbG9yIiwidHJpYW5nbGUiLCJEcm9wZG93biIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wZG93biIsInNob3dDb250YWN0c01vZGFsIiwic2V0U2hvd0NvbnRhY3RzTW9kYWwiLCJidXR0b25zSW5Ib21lUGFnZSIsImlkIiwiZnJzdENvbnRlbnQiLCJocmVmIiwic2VjQ29udGVudCIsImJ1dHRvbnMiLCJkcm9wZG93bkxpbmVzIiwiTG9naW4iLCJvbk1vZGFsQ2xvc2UiLCJzaG93UmVzZXRQYXNzd29yZE1vZGFsIiwic2V0U2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCIsIkxvZ2luRm9ybSIsImhhbmRsZVJlc2V0UGFzc01vZGFsIiwiaGFuZGxlX3RvX3JlZ2lzdGVyX2NsaWNrIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3ZlcmZsb3ciLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImVtYWlsIiwicmVxdWlyZWQiLCJtYXRjaGVzIiwicGFzc3dvcmQiLCJtaW4iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInVzZUZvcm0iLCJtb2RlIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsInN1Ym1pdCIsInRva2VuIiwicmVxdWVzdCIsIkxPR0lOIiwic2V0Q29va2llIiwiR0VUX0FDQ09VTlRfSU5GTyIsImF1dGgiLCJlcnJvciIsInRvYXN0IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwidHlwZSIsIkZvcmdvdFBhc3N3b3JkIiwic2hvd0ZvcmdvdFBhc3NNbCIsInNldFNob3dGb3Jnb3RQYXNzTWwiLCJzaG93R2V0RW1haWxDb2RlTWwiLCJzZXRTaG93RW1haWxDb2RlTWwiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVyciIsIkdldEVtYWlsQ29kZSIsInNob3dOZXdQYXNzd29yZE1sIiwic2V0U2hvd05ld1Bhc3N3b3JkTWwiLCJudW0xIiwibnVtMiIsIm51bTMiLCJudW00IiwibnVtNSIsIm51bTYiLCJqdW1wIiwieCIsInZhbHVlIiwibmV4dFNpYmxpbmciLCJ0ZXN0IiwiZm9jdXMiLCJqdW1wQmFjayIsImNvZGUiLCJwcmV2aW91c1NpYmxpbmciLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhYyIsIlZFUklGWV9QQVNTV09SRF9SRVNFVCIsImhlYWRlcnMiLCJnZXRDb29raWUiLCJpbnB1dHMiLCJjbGFzcyIsInRyaW0iLCJtYXhMZW5ndGgiLCJOZXdQYXNzd29yZCIsInNob3dOZXdQYXNzTWwiLCJzZXRTaG93TmV3UGFzc01sIiwic2hvd1N1Y2Nlc3NNbCIsInNldFNob3dTdWNjZXNzTWwiLCJTRVRfTkVXX1BBU1NXT1JEIiwiU3VjY2VzcyIsInN1Y2Nlc3NJY29uIiwiaWNvblVybCIsImdtYWlsIiwidmsiLCJ0d2l0dGVyIiwicmVzcG9uc2VGYWNlYm9vayIsInJlc3BvbnNlR29vZ2xlIiwiVFdJVFRFUl9DT05TVU1FUl9LRVkiLCJUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCIsIlNvY2lhbE1lZGlhSWNvbnMiLCJWSyIsImluaXQiLCJhcGlJZCIsIm9uU29jaWFsTWVkaWFCdG5DbGljayIsImZhY2Vib29rTG9naW5CdG4iLCJnb29nbGVMb2dpbkJ0biIsIkF1dGgiLCJzZXNzaW9uIiwic3RhdHVzIiwidHdpdHRlckF1dGhIYW5kbGVyIiwiY3Vyc29yIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJSZXNldFBhc3N3b3JkTGluayIsImNvbnRlbnQiLCJTdWJtaXQiLCJUaXRsZSIsIlRvUmVnaXN0ZXIiLCJjb250YWluZXJfc3R5bGVzIiwiY29udGVudF9zdHlsZXMiLCJvciIsInJlZ2lzdGVyX3RleHRfc3R5bGVzIiwiTG9nbyIsImxvZ28iLCJIZWFkZXIiLCJtYWluc1BhZ2VzIiwiZm9vdGJhbGxlciIsIkJ1dHRvbiIsImNvbnRlbnRGcnN0UCIsImNvbnRlbnRTZWNQIiwiYWN0aXZlIiwiTmF2QmFyIiwiRmFjZWJvb2siLCJwYXJlbnQiLCJ0b3AiLCJjaGlsZHJlbiIsIm9mZnNldFRvcCIsInRleHQiLCJJbnN0YWdyYW0iLCJQaG9uZSIsIlRlbGVncmFtIiwiVmliZXIiLCJXYXRzVXAiLCJzaG93UGhvbmVNb2RhbCIsInNldFNob3dQaG9uZU1vZGFsIiwic2hvd0ZhY2Jvb2tNb2RhbCIsInNldFNob3dGYWNib29rTW9kYWwiLCJzaG93VGVsZWdyYW1Nb2RhbCIsInNldFNob3dUZWxlZ3JhbU1vZGFsIiwic2hvd1dhdHNVcE1vZGFsIiwic2V0U2hvd1dhdHNVcE1vZGFsIiwic2hvd0luc3RhZ3JhbU1vZGFsIiwic2V0U2hvd0luc3RhZ3JhbU1vZGFsIiwic2hvd1ZpYmVyTW9kYWwiLCJzZXRTaG93VmliZXJNb2RhbCIsInNvY2lhbE1lZGlhc1JlZiIsIndpbmRvdyIsInNjcm9sbFRvIiwibW9kYWxfY29udGVudHMiLCJDb250YWN0c01vZGFsIiwib3BlbmVkIiwiY2xvc2VWZWN0b3IiLCJjb250YWN0c19kYXRhIiwiSW5wdXRDb250YWluZXIiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib3RoZXIiLCJoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbiIsImJvZHkiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsImhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSIsIk1vZGFsIiwiY29udGFpbmVyU3R5bGVzIiwiY29udGVudFN0eWxlcyIsInBvcnRhbExvY2F0aW9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGluYW1pY1RvcCIsInNjcm9sbFkiLCJtb2RhbCIsImNyZWF0ZVBvcnRhbCIsImdldEVsZW1lbnRCeUlkIiwiRXJyb3IiLCJNYWluIiwiUmVnaXN0ZXJMYXlvdXQiLCJsYXlvdXRzIiwibWFpbiIsIndpdGhvdXRQaG90byIsIldpdGhvdXRQaG90byIsIlJlZ2lzdGVyIiwiTGF5b3V0V3JhcHBlciIsInByb3BzIiwiTGF5b3V0IiwibGF5b3V0IiwiaG9zdCIsImRlc3RpbmF0aW9uIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicnNsdiIsInJqY3QiLCJBdXRob3JpemF0aW9uIiwiYXhpb3MiLCJtZXRob2QiLCJ0aGVuIiwiY2F0Y2giLCJmaW5hbGx5IiwibmFtZUVRIiwiY2EiLCJjb29raWUiLCJzcGxpdCIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwicmVtb3ZlQ29va2llIiwiZGF5cyIsImV4cGlyZXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJBVVRIX1VSTCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJHRVRfTkVXUyIsIkdFVF9NQVRDSEVTIiwiR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkiLCJHRVRfUFJFRElDVElPTlMiLCJHRVRfRkVFREJBQ0siLCJHRVRfTUFUQ0hFU19CWV9UWVBFIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJhcyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIkxpbmsiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsImRlZmF1bHQiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJyZXNvbHZlIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwidG9VcHBlckNhc2UiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiZG9tYWluSXRlbXMiLCJob3N0bmFtZSIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSXRlbSIsInRvTG93ZXJDYXNlIiwiaXRlbSIsIl9pdGVtJGRvbWFpbiIsIl9pdGVtJGxvY2FsZXMiLCJkb21haW5Ib3N0bmFtZSIsImRvbWFpbiIsInNvbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWVQYXJ0cyIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJwYXRoTG93ZXIiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsIl90aGlzJGxvY2FsZXMiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3Iiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieSIsImRvY3VtZW50RWxlbWVudCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsInByb3RvY29sIiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyIsIk15QXBwIiwic3RvcmUiLCJwZXJzaXN0b3IiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzZXRTZXJ2ZXJDb250ZXh0IiwiX19hcHBXaXRoSTE4biIsIl9faTE4bkNvbmZpZyIsImlzTG9hZGVyIiwic2tpcEluaXRpYWxQcm9wcyIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJtYXRjaFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJtYXRjaElkIiwicmVkdWNlcnMiLCJzZXRNYXRjaElkIiwiYWN0aW9uIiwiYWN0aW9ucyIsImdldE1hdGNoSWQiLCJtYXRjaCIsInJlZHVjZXIiLCJ1c2VyU2xpY2UiLCJwZXJzaXN0Q29uZmlnIiwidmVyc2lvbiIsInN0b3JhZ2UiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsIm1hdGNoUmVkdWNlciIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJpZ25vcmVkQWN0aW9ucyIsIkZMVVNIIiwiUkVIWURSQVRFIiwiUEFVU0UiLCJQRVJTSVNUIiwiUFVSR0UiLCJwZXJzaXN0U3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQ0FySSwrREFBZ0IsQ0FBQyxvSkFBb0oseU9BQXlPLEU7Ozs7Ozs7Ozs7OztBQ0E5WSwrREFBZ0IsQ0FBQyxvSkFBb0oscVJBQXFSLEU7Ozs7Ozs7Ozs7QUNBMWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYW0vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3Avc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCAzIHwgMTYpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gT2JqZWN0LmtleXMobWFwKTsgfTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vbG9jYWxlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC8uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgYmFsbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZm9vdGVyL2xlZnRCYWxsLnBuZydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JhbGwubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFsbCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2JhbGxJY29uLnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJiYWxsLXBuZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF93aXRoX2JhbGx9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5GT09UPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5CRVQ8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyBCYWxsIH0gZnJvbSAnLi9CYWxsL0JhbGwnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi9OYXZpZ2F0aW9uL05hdmlnYXRpb24nXHJcbmltcG9ydCB7IFNvY2lhbE1lZGlhIH0gZnJvbSAnLi9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYSdcclxuLy8gaWNvblxyXG5pbXBvcnQgYmFsbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvYmFsbC5wbmcnXHJcblxyXG4vLyBUT0RPIGNsaWNrIGV2ZW50cyBvbiBpY29uc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEJhbGwgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICA8U29jaWFsTWVkaWEgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvcGVyc29uYWwnICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYWxsSWNvbi5zcmN9IGFsdD1cImJhbGwtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xpc3QubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0KHsgbGlzdF9pdGVtcyA9IFtdLCBib3JkZXJzQWN0aXZlIH0pIHtcclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiY29tbW9uXCIpLFxyXG4gICAgdHJhbnNsYXRpb25QYXRoID0gXCJmb290ZXIubmF2aWdhdGlvbi5cIixcclxuICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7Ym9yZGVyc0FjdGl2ZSAmJiBzdHlsZXMuYm9yZGVyc31gfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtsaXN0X2l0ZW1zLm1hcCgoZWwpID0+IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2VsLmxpbmt9IGtleT17TWF0aC5yYW5kb20oKX0+XHJcbiAgICAgICAgICAgIDxsaT57dHJhbnNsYXRlKGVsLm5hbWUpfTwvbGk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9MaXN0L0xpc3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzJ1xyXG4vLyBkYXRhc1xyXG5pbXBvcnQgeyBuYXZfZGF0YSB9IGZyb20gJy4vbmF2X2RhdGEnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdl9kYXRhLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RfaXRlbXM9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyc0FjdGl2ZT17aSA9PT0gMSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgY29uc3QgbmF2X2RhdGEgPSBbXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdwcmVkaWN0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvZ2FtZXMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZ2FtZXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy8nLFxyXG4gICAgICAgICAgICBuYW1lOiAnbmV3cydcclxuICAgICAgICB9ICAgXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL2Fib3V0VXMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnYWJvdXRVcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICBuYW1lOiAncGF5bWVudCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL3N0YXRpc3RpY3MnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbWF0Y2hTdGF0aXN0aWNzJ1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvcmVnaXN0cmF0aW9uJyxcclxuICAgICAgICAgICAgbmFtZTogJ3JlZ2lzdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvdGVzdGltb25pYWxzJyxcclxuICAgICAgICAgICAgbmFtZTogJ2ZlZWRiYWNrcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL3Rlcm1zLW9mLXVzZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICd0ZXJtcy1vZi11c2UnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy9wcml2YWN5LXBvbGljeScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdwcml2YWN5LXBvbGljeSdcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG5dXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUFMubW9kdWxlLnNjc3NcIjtcclxuLy8gaWNvbnNcclxuaW1wb3J0IHZpc2EgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci92aXNhLnBuZ1wiO1xyXG5pbXBvcnQgbWFzdGVyQ2FyZCBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvZm9vdGVyL21hc3RlckNhcmQucG5nXCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9jb21tb24vSWNvbi9JY29uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUFMoKSB7XHJcbiAgY29uc3QgLy8gY29uZmlnXHJcbiAgICBpY29ucyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICBzcmM6IHZpc2Euc3JjLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHNyYzogbWFzdGVyQ2FyZC5zcmMsXHJcbiAgICAgICAgbGFzdEVsZW1lbnQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHtpY29ucy5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgc3JjPXtlbC5zcmN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3N0eWxlcy5pY29uc31cclxuICAgICAgICAgICAgbGFzdEVsZW1lbnQ9e2VsLmxhc3RFbGVtZW50ICYmIGVsLmxhc3RFbGVtZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU00ubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCBwaG9uZSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvcGhvbmUuc3ZnJ1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2ZhY2Vib29rLnN2ZydcclxuaW1wb3J0IHRlbGVncmFtIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS90ZWxlZ3JhbS5zdmcnXHJcbmltcG9ydCB3YXRzdXAgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmcnXHJcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2luc3RhZ3JhbS5zdmcnXHJcbmltcG9ydCB2aWJlciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdmliZXIuc3ZnJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9jb21tb24vSWNvbi9JY29uJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTTSgpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIGNvbmZpZ1xyXG4gICAgICAgIGljb25zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHBob25lLnNyYyxcclxuICAgICAgICAgICAgICAgIHVybDogXCJ0ZWw6KzM0NjcyMzE0ODA4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiBmYWNlYm9vay5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLyVEMCU5RiVEMSU4MCVEMCVCRSVEMCVCMyVEMCVCRCVEMCVCRSVEMCVCNyVEMSU4Qi0lRDAlQkQlRDAlQjAtJUQwJUE0JUQxJTgzJUQxJTgyJUQwJUIxJUQwJUJFJUQwJUJCLTEwNDk0MTM0NzU3NzkxMy9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHdhdHN1cC5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9KzM0NjcyMzE0ODA4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiBpbnN0YWdyYW0uc3JjLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcHJvZ25venluYTU1MC8/dXRtX21lZGl1bT1jb3B5X2xpbmtcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHZpYmVyLnNyYyxcclxuICAgICAgICAgICAgICAgIHVybDogXCJ2aWJlcjovL2NoYXQ/bnVtYmVyPSszNDY3MjMxNDgwOFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogdGVsZWdyYW0uc3JjLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vdGVsZWdyYW0ubWUvZm9vdGJldDI0Y29tXCIsXHJcbiAgICAgICAgICAgICAgICBsYXN0RWxlbWVudDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29ucy5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17ZWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM9e2ljb25zLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50PXtlbC5sYXN0RWxlbWVudCAmJiBlbC5sYXN0RWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFNNIH0gZnJvbSAnLi9TTUljb25zL1NNJ1xyXG5pbXBvcnQgeyBQUyB9IGZyb20gJy4vUFNJY29ucy9QUydcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcydcclxuLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU29jaWFsTWVkaWEoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvblxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdmb290ZXIuc29jaWFsX21lZGlhX3BheW1hbnRzJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsX21lZGlhc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgnLlNNLnRpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U00gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBheW1lbnRfc3lzdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgnLlBTLnRpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UFMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ljb24ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJY29uKHtcclxuICAgIHNyYyxcclxuICAgIGNsaWNrID0gbnVsbCxcclxuICAgIGxhc3RFbGVtZW50ID0gZmFsc2UsXHJcbiAgICBlbGVtZW50cyxcclxuICAgIG90aGVyU3R5bGVzID0gbnVsbCxcclxuICAgIGNsYXNzZXMsXHJcbiAgICB1cmwgPSBcIlwiIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17ZWxlbWVudHMgPyB7IHdpZHRoOiBgJHsxMDAgLyBlbGVtZW50c30lYCB9IDogeyBwYWRkaW5nOiAnMCAxNXB4JyB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7bGFzdEVsZW1lbnQgPyBzdHlsZXMubGFzdF9lbGVtZW50IDogXCJcIn0gJHtjbGFzc2VzfWB9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgaWNvbnMtJHtzcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtvdGhlclN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFyLm1vZHVsZS5zY3NzJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgTG9naW4gfSBmcm9tICcuL0xvZ2luL0xvZ2luJ1xyXG5pbXBvcnQgeyBCYXJJdGVtcyB9IGZyb20gJy4vQmFySXRlbXMvQmFySXRlbXMnXHJcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuL0xvZ28vTG9nbydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd25NZW51L0Ryb3Bkb3duJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhcih7IGJhcl9pdGVtcywgYmFyX2l0ZW1zX2NvbnQgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIGxvZ2luIG1vZGFsIGNvbmZpZ3NcclxuICAgICAgICBbc2hvd0xvZ2luTW9kYWwsIHNldFNob3dMb2dpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICB1c2VyX2luZm8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlcilcclxuXHJcbiAgICBjb25zb2xlLmxvZyggdXNlcl9pbmZvICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmFyX2NvbnRhaW5lcn0gJHtiYXJfaXRlbXNfY29udH1gfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxCYXJJdGVtc1xyXG4gICAgICAgICAgICAgICAgdXNlckxvZ2dlZD17dXNlcl9pbmZvICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uPXt0cmFuc2xhdGUoJ3JlZ2lzdGVyJyl9XHJcbiAgICAgICAgICAgICAgICBsb2dpbj17dHJhbnNsYXRlKCdsb2dpbicpfVxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uX3BhdGg9Jy9yZWdpc3RyYXRpb24nXHJcbiAgICAgICAgICAgICAgICBsb2dpbk1vZGFsSGFuZGxlPXsoKSA9PiBzZXRTaG93TG9naW5Nb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgICAgIGJhcl9pdGVtcz17YmFyX2l0ZW1zfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7c2hvd0xvZ2luTW9kYWwgJiYgPExvZ2luIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0xvZ2luTW9kYWwoZmFsc2UpfSAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICcuL0xhbmd1YWdlRHJvcENvbmZpZ3MvbGFuZy1jb25maWdzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IHVzZXJfZGF0YSB9IGZyb20gJy9zcmMvdXNlci91c2VyJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFySXRlbXMubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBMYW5ndWFnZURyb3AgfSBmcm9tICcuL0xhbmd1YWdlRHJvcC9MYW5ndWFnZURyb3AnXHJcbmltcG9ydCB7IExvZ2dlZCB9IGZyb20gJy4vTG9nZ2VkL0xvZ2dlZCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IHJlZ2lzdGVyX2ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL3JlZ2lzdGVyLnBuZydcclxuaW1wb3J0IGxvZ2luX2ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luLnBuZydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gJy4uLy4uLy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSdcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhckl0ZW1zKHtcclxuICAgIHJlZ2lzdHJhdGlvbixcclxuICAgIGxvZ2luLFxyXG4gICAgcmVnaXN0cmF0aW9uX3BhdGgsXHJcbiAgICBsb2dpbk1vZGFsSGFuZGxlLFxyXG4gICAgYmFyX2l0ZW1zLFxyXG4gICAgdXNlckxvZ2dlZCB9KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgeyB0LCBsYW5nIH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyk7XHJcbiAgICAgICAgY29uc3QgW2xhbmd1YWdlc1RpdGxlLCBzZXRMYW5ndWFnZXNUaXRsZV0gPSB1c2VTdGF0ZShsYW5ndWFnZXNbMV0pO1xyXG4gICAgICAgIHVzZUVmZmVjdCggKCk9PntcclxuICAgICAgICAgICAgY29uc3QgbmV3TGFuZyA9IGxhbmd1YWdlcy5maW5kKCBlbCA9PiBlbC5sYW5nID09PSBsYW5nICk7XHJcbiAgICAgICAgICAgIGlmICggbmV3TGFuZyApIHtcclxuICAgICAgICAgICAgICAgIHNldExhbmd1YWdlc1RpdGxlKCBuZXdMYW5nICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbbGFuZ10gKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICBsYW5ndWFnZXNfZGF0YSA9IGxhbmd1YWdlcyxcclxuXHJcbiAgICAgICAgW3Nob3dEcm9wLCBzZXRTaG93RHJvcF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcblxyXG4gICAgICAgIGNoYW5nZUxhbmdUaXRsZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGFuZ190aXRsZV9kYXRhID0gbGFuZ3VhZ2VzX2RhdGEuZmlsdGVyKGVsID0+IGVsLmxhbmcgPT09IGV2ZW50LnRhcmdldC5jbGFzc05hbWUpXHJcbiAgICAgICAgICAgIHNldExhbmd1YWdlc1RpdGxlKGxhbmdfdGl0bGVfZGF0YVswXSlcclxuICAgICAgICAgICAgc2V0U2hvd0Ryb3AoZmFsc2UpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLmxhbmcuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJfaXRlbV9jb250YWluZXJ9ICR7YmFyX2l0ZW1zfSAke3JvdXRlci5wYXRobmFtZSAhPT0gJy8nID8gc3R5bGVzLmZvcl9tb2JpbGUgOiBudWxsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyTG9nZ2VkID8gPExvZ2dlZCAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRoX2J1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbl91cF9idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyZWdpc3RyYXRpb25fcGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVnaXN0ZXJfaWNvbi5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cmVnaXN0cmF0aW9uX3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25faW5fYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbk1vZGFsSGFuZGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ2luX2ljb24uc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ19idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sYW5nX2J1dHRvbl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3Nob3dEcm9wID8geyBkaXNwbGF5OiAnbm9uZScgfSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RHJvcCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoYCR7bGFuZ3VhZ2VzVGl0bGUuY29udGVudE9uVGl0bGV9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsYW5ndWFnZXNUaXRsZS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxhbmctZmxhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dEcm9wICYmIDxMYW5ndWFnZURyb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrPXtjaGFuZ2VMYW5nVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93RHJvcChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtsYW5ndWFnZXNfZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBmbGFnIGljb25zXHJcbmltcG9ydCBydXNGbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9ydXMucG5nJ1xyXG5pbXBvcnQgYXJtRmxhZyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvYXJtLnN2ZydcclxuaW1wb3J0IGVuRmxhZyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZW4uc3ZnJ1xyXG5pbXBvcnQgZXNwRmxhZyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZXNwLnN2ZydcclxuaW1wb3J0IGZyY0ZsYWcgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2ZyYy5zdmcnXHJcbmltcG9ydCBkZXVGbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9kZXUuc3ZnJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsYW5ndWFnZXMgPVxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFuZzogXCJhbVwiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ2FtLm9uVGl0bGUnLFxyXG4gICAgICAgICAgICBjb250ZW50T25Ecm9wOiAnYW0ub25Ecm9wJyxcclxuICAgICAgICAgICAgaWNvbjogYXJtRmxhZy5zcmMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhbmc6IFwicnNcIixcclxuICAgICAgICAgICAgY29udGVudE9uVGl0bGU6ICdycy5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ3JzLm9uRHJvcCcsXHJcbiAgICAgICAgICAgIGljb246IHJ1c0ZsYWcuc3JjLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImVuXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPblRpdGxlOiAnZW4ub25UaXRsZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPbkRyb3A6ICdlbi5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBlbkZsYWcuc3JjLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImVzcFwiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ2VzcC5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ2VzcC5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBlc3BGbGFnLnNyYyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFuZzogXCJmclwiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ2ZyYy5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ2ZyYy5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBmcmNGbGFnLnNyYyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFuZzogXCJkZXVcIixcclxuICAgICAgICAgICAgY29udGVudE9uVGl0bGU6ICdkZXUub25UaXRsZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPbkRyb3A6ICdkZXUub25Ecm9wJyxcclxuICAgICAgICAgICAgaWNvbjogZGV1RmxhZy5zcmMsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gY29tcG9uZXRuc1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xhbmd1YWdlRHJvcC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMYW5ndWFnZURyb3AoeyBvbkNsb3NlLCBjbGljaywgZGF0YSB9KSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIG5vZGUgPSB1c2VSZWYoKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUpIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5sYW5nLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgcmVmPXtub2RlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake3JvdXRlci5wYXRobmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17ZWwubGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaGFuZ2UtbGFuZy0ke2VsLmxhbmd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2VsLmxhbmd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShlbC5jb250ZW50T25Ecm9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtlbC5sYW5nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dnZWQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IExvZ2dlZERyb3AgfSBmcm9tICcuL0xvZ2dlZERyb3AvTG9nZ2VkRHJvcCc7XHJcbmltcG9ydCB7IExvZ2dlZFdhbGxwZXIgfSBmcm9tICcuL0xvZ2dlZFdhbGxwZXIvTG9nZ2VkV2FsbHBlcidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dnZWQoICkge1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICAvL2NoYW5nZSB1c2VyIGRyb3Bkb3duXHJcbiAgICAgICAgW3Nob3dVc2VyRHJvcCwgc2V0U2hvd1VzZXJEcm9wXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKTtcclxuICAgIGNvbnN0IFtwaG90byxzZXRQaG90b10gPSB1c2VTdGF0ZShkYXRhLnBob3RvKTtcclxuICAgIHVzZUVmZmVjdCAoKCk9PntcclxuICAgICAgICBzZXRQaG90byhkYXRhLnBob3RvKVxyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBzdHlsZT17c2hvd1VzZXJEcm9wID8geyBwYWRkaW5nOiAnMTcuNXB4IDAnIH0gOiBudWxsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHshc2hvd1VzZXJEcm9wID9cclxuICAgICAgICAgICAgICAgICAgICA8TG9nZ2VkV2FsbHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e3Bob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZT17ZGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHNldFNob3dVc2VyRHJvcCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2dlZERyb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1VzZXJEcm9wKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHVzZXJEZWZhdWx0SWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vdXNlckRlZmF1bHQucG5nJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBjb21wb25ldG5zXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9nZ2VkRHJvcC5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IHRlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvY29tbW9uL3Bob25lLnBuZydcclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9nZ2VkRHJvcCh7IG9uQ2xvc2UsIHVzZXIgfSkge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBub2RlID0gdXNlUmVmKCksXHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcblxyXG4gICAgICAgIGhhbmRsZUNsb3NlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlKSByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkNsb3NlKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdjb21tb25zLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgZnVuY3Rpb24gX2xvZ291dCgpIHtcclxuICAgICAgICBkaXNwYXRjaChsb2dvdXQoKSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9gKTtcclxuICAgIH0gICAgXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdvVG9QZXJzb25hbCAoKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9wZXJzb25hbGApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIHJlZj17bm9kZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcGhvdG9fbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17Z29Ub1BlcnNvbmFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9Jy9wZXJzb25hbCc+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIucGhvdG8gPz8gdXNlckRlZmF1bHRJY29uLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2dvVG9QZXJzb25hbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPScvcGVyc29uYWwnPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl90ZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVsSWNvbi5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLnRlbGVwaG9uZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nT3V0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9Pl9sb2dvdXQoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPnt0cmFuc2xhdGUoJ2xvZ091dCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuIiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2dlZFdhbGxwZXIubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCB0cmlhbmdsZSBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vdHJpYW5nbGUucG5nJ1xyXG5pbXBvcnQgdXNlckRlZmF1bHRJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2dlZFdhbGxwZXIoe1xyXG4gICAgaW1nLFxyXG4gICAgZnVsbE5hbWUsXHJcbiAgICBjbGlja1xyXG59KSB7XHJcbiAgICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcik7XHJcbiAgICBjb25zdCBbIHBob3RvLCBzZXRQaG90byBdID0gdXNlU3RhdGUoZGF0YS5waG90bylcclxuICAgIGNvbnN0IFsgZnVsbG5hbWUsIHNldEZ1bGxuYW1lIF0gPSB1c2VTdGF0ZShkYXRhLnVzZXJuYW1lKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0UGhvdG8oIGRhdGEucGhvdG8gKVxyXG4gICAgICAgIHNldEZ1bGxuYW1lKCBkYXRhLnVzZXJuYW1lIClcclxuICAgIH0sW2RhdGFdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX3Bob3RvfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcGVyc29uYWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bob3RvIHx8IHVzZXJEZWZhdWx0SWNvbi5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2Z1bGxuYW1lfSBpY29uYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGxuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0cmlhbmdsZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ0cmlhbmdsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ecm9wZG93bi5tb2R1bGUuc2Nzcyc7XHJcblxyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5cclxuLy9pbWdzXHJcbmltcG9ydCBkcm9wZG93bkxpbmVzIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9kcm9wZG93bl9saW5lcy5wbmcnO1xyXG5cclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENvbnRhY3RzTW9kYWwgZnJvbSAnLi4vLi4vLi4vUGFnZXMvQ29udGFjdHMvQ29udGFjdHNNb2RhbCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd24oKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgW3Nob3dEcm9wZG93biwgc2V0U2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbc2hvd0NvbnRhY3RzTW9kYWwsIHNldFNob3dDb250YWN0c01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5uYXZCYXIuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuXHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcblxyXG4gICAgICAgIG5vZGUgPSB1c2VSZWYoKSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZT8uY3VycmVudD8uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZSkgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKGZhbHNlKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJ1dHRvbnNJbkhvbWVQYWdlID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ21haW4nLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnbWFpbicpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnZ2FtZXMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnZ2FtZXMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvZ2FtZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnc3RhdGlzdGljcycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdzdGF0aXN0aWNzLmZycycpLFxyXG4gICAgICAgICAgICAgICAgc2VjQ29udGVudDogdHJhbnNsYXRlKCdzdGF0aXN0aWNzLnNlYycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9zdGF0aXN0aWNzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgncHJlZGljdGlvbi5mcnMnKSxcclxuICAgICAgICAgICAgICAgIHNlY0NvbnRlbnQ6IHRyYW5zbGF0ZSgncHJlZGljdGlvbi5zZWMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvcHJlZGljdGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICd0ZXN0aW1vbmlhbHMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgndGVzdGltb25pYWxzJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL3Rlc3RpbW9uaWFscydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdhYm91dFVzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ2Fib3V0VXMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvYWJvdXRVcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb250YWN0cycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdjb250YWN0cycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dDb250YWN0c01vZGFsKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBidXR0b25zID0gYnV0dG9uc0luSG9tZVBhZ2UuZmlsdGVyKGVsID0+IGVsLmlkICE9PSBcInN0YXRpc3RpY3NcIilcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3dufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9jaGVja30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZHJvcGRvd25MaW5lcy5zcmN9IGFsdD1cImRyb3AtY2hlY2staWNvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dEcm9wZG93bighc2hvd0Ryb3Bkb3duKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93RHJvcGRvd24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9tZW51fSByZWY9e25vZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nID8gYnV0dG9uc0luSG9tZVBhZ2UgOiBidXR0b25zKS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2VsLmhyZWYgPyBlbC5ocmVmIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VsLmNsaWNrICYmIGVsLmNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25fbGlzdF9pdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmZyc3RDb250ZW50fSB7ZWwuc2VjQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2hvd0NvbnRhY3RzTW9kYWwgJiZcclxuICAgICAgICAgICAgICAgIDxDb250YWN0c01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtzaG93Q29udGFjdHNNb2RhbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dDb250YWN0c01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgU29jaWFsTWVkaWFJY29ucyB9IGZyb20gJy4vU29jaWFsTWVkaWFJY29ucy9Tb2NpYWxNZWRpYUljb25zJ1xyXG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZCB9IGZyb20gJy4vUmVzZXRQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZCdcclxuaW1wb3J0IHsgTG9naW5Gb3JtIH0gZnJvbSAnLi9Mb2dpbkZvcm0vTG9naW5Gb3JtJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2luLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW4oeyBvbk1vZGFsQ2xvc2UgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgW3Nob3dMb2dpbk1vZGFsLCBzZXRTaG93TG9naW5Nb2RhbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCwgc2V0U2hvd1Jlc2V0UGFzc3dvcmRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzaG93UmVzZXRQYXNzd29yZE1vZGFsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dMb2dpbk1vZGFsICYmXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsTWVkaWFJY29ucyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5Gb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlc2V0UGFzc01vZGFsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dMb2dpbk1vZGFsKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Nob3dSZXNldFBhc3N3b3JkTW9kYWwgJiYgPEZvcmdvdFBhc3N3b3JkIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbmltcG9ydCB7IHJlcXVlc3QsIHNldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9lci5saWInO1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXRDb250YWluZXIgfSBmcm9tICcvY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lcidcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi9jb21tb24vVGl0bGUnXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRMaW5rIH0gZnJvbSAnLi4vY29tbW9uL1Jlc2V0UGFzc3dvcmRMaW5rJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBUb1JlZ2lzdGVyIH0gZnJvbSAnLi4vY29tbW9uL1RvUmVnaXN0ZXInXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2luRm9ybS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy91c2VyU2xpY2UnXHJcbmltcG9ydCB7IEdFVF9BQ0NPVU5UX0lORk8sIExPR0lOIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJztcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oeyBvbk1vZGFsQ2xvc2UsIGhhbmRsZVJlc2V0UGFzc01vZGFsIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3JlZ2lzdHJhdGlvbi5pbnB1dFBsYWNlSG9sZGVycy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICBoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xyXG4gICAgICAgICAgICBvbk1vZGFsQ2xvc2UoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2hlcygvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKClcclxuICAgICAgICAgICAgICAgIC5taW4oNilcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gb24gZm9ybSBzdWJtaXRcclxuICAgICAgICBzdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gKGF3YWl0IHJlcXVlc3QoIExPR0lOLCBkYXRhICkpLmRhdGE/LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoIGBhY2Nlc3MtdG9rZW5gLCB0b2tlbiwgMSApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9ICggYXdhaXQgcmVxdWVzdCggR0VUX0FDQ09VTlRfSU5GTywge30sIHthdXRoOiB0cnVlfSApICkuZGF0YT8uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luKHVzZXIpKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycm9yICkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QoIGVycm9yLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgYHVua25vd24gZXJyb3JgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlX3RvX3JlZ2lzdGVyX2NsaWNrKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLnRpdGxlJyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9eyghIWVycm9ycy5lbWFpbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyPXtyZWdpc3RlcignZW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKCdwYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9eyEhZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcj17cmVnaXN0ZXIoJ3Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJlc2V0UGFzc3dvcmRMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s9e2hhbmRsZVJlc2V0UGFzc01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnJlc2V0X3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLnJlc1Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0KCdoZWFkZXIubG9naW5Nb2RhbC5zdWJtaXQnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPFRvUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgIGhyZWY9Jy9yZWdpc3RyYXRpb24nXHJcbiAgICAgICAgICAgICAgICBjbGljaz17aGFuZGxlX3RvX3JlZ2lzdGVyX2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyX3N0eWxlcz17c3R5bGVzLnRvX3JlZ2lzdGVyX2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRfc3R5bGVzPXtzdHlsZXMudG9fcmVnaXN0ZXJfY29udGVudH1cclxuICAgICAgICAgICAgICAgIG9yPXt0KCdoZWFkZXIubG9naW5Nb2RhbC5vcicpfVxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJfdGV4dF9zdHlsZXM9e3N0eWxlcy50b19yZWdpc3Rlcl90ZXh0fVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17dCgnaGVhZGVyLmxvZ2luTW9kYWwucmVnaXN0ZXInKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9UaXRsZSdcclxuaW1wb3J0IHsgSW5wdXRDb250YWluZXIgfSBmcm9tICcvY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lcidcclxuaW1wb3J0IHsgU3VibWl0IH0gZnJvbSAnLi4vLi4vY29tbW9uL1N1Ym1pdCdcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgR2V0RW1haWxDb2RlIH0gZnJvbSAnLi4vR2V0RW1haWxDb2RlL0dldEVtYWlsQ29kZSdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb3Jnb3RQYXNzd29yZC5tb2R1bGUuc2NzcydcclxuXHJcbmltcG9ydCB7IHJlcXVlc3QsIHNldENvb2tpZSB9IGZyb20gJy9saWIvZXIubGliJztcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgU1RBUlRfUkVTRVRfUEFTU1dPUkQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvcmdvdFBhc3N3b3JkKHsgb25Nb2RhbENsb3NlIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIG1vZGFsIHN0YXRlcyBwYXNzID0+IHBhc3N3b3JkIE1sID0+IE1vZGFsXHJcbiAgICAgICAgW3Nob3dGb3Jnb3RQYXNzTWwsIHNldFNob3dGb3Jnb3RQYXNzTWxdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgW3Nob3dHZXRFbWFpbENvZGVNbCwgc2V0U2hvd0VtYWlsQ29kZU1sXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIucmVzZXRQYXNzd29yZE1vZGFsLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgZW1haWw6IHl1cFxyXG4gICAgICAgICAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoKVxyXG4gICAgICAgICAgICAgICAgLm1hdGNoZXMoL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8pLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBvbiBmb3JtIHN1Ym1pdFxyXG4gICAgICAgIHN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGE6IHJlc3BvbnNlIH0gPSBhd2FpdCByZXF1ZXN0KCBTVEFSVF9SRVNFVF9QQVNTV09SRCggZGF0YS5lbWFpbCApICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW47XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggdG9rZW4gKTtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZShgcmVzZXQtdG9rZW5gLCB0b2tlbiwgKDEvMjQpKjEpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0ZvcmdvdFBhc3NNbChmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dFbWFpbENvZGVNbCh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoICggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QoIGVyci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IGB1bmtub3duIGVycm9yYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGBlcnJvcmBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93Rm9yZ290UGFzc01sICYmXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCd0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ3JlZ2lzdHJhdGlvbi5pbnB1dFBsYWNlSG9sZGVycy5lbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9eyghIWVycm9ycy5lbWFpbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyPXtyZWdpc3RlcignZW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnc2VuZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG93R2V0RW1haWxDb2RlTWwgJiYgPEdldEVtYWlsQ29kZSBvbk1vZGFsQ2xvc2U9e29uTW9kYWxDbG9zZX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuaW1wb3J0IHsgaW5wdXRzIH0gZnJvbSAnLi9pbnB1dF9jb25maWdzJ1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi9jb21tb24vVGl0bGUnXHJcbmltcG9ydCB7IFN1Ym1pdCB9IGZyb20gJy4uLy4uL2NvbW1vbi9TdWJtaXQnXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwnXHJcbmltcG9ydCB7IE5ld1Bhc3N3b3JkIH0gZnJvbSAnLi4vTmV3UGFzc3dvcmQvTmV3UGFzc3dvcmQnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vR2V0RW1haWxDb2RlLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCwgZ2V0Q29va2llIH0gZnJvbSAnL2xpYi9lci5saWInO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBTVEFSVF9SRVNFVF9QQVNTV09SRCwgVkVSSUZZX1BBU1NXT1JEX1JFU0VUIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRFbWFpbENvZGUoeyBvbk1vZGFsQ2xvc2UgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gbW9kYWwgc3RhdGVzIHBhc3MgPT4gcGFzc3dvcmQgTWwgPT4gTW9kYWxcclxuICAgICAgICBbc2hvd0dldEVtYWlsQ29kZU1sLCBzZXRTaG93RW1haWxDb2RlTWxdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgW3Nob3dOZXdQYXNzd29yZE1sLCBzZXRTaG93TmV3UGFzc3dvcmRNbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLmdldEVtYWlsQ29kZU1vZGFsLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgbnVtMTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgICAgICBudW0yOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgICAgIG51bTM6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICAgICAgbnVtNDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgICAgICBudW01OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgICAgIG51bTY6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gaW5wdXQganVtcHMgXHJcbiAgICAgICAganVtcCA9ICh4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4LnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgeCA9IHgubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCAmJiAvdGV4dC8udGVzdCh4LnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBqdW1wQmFjayA9ICh4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4LnRhcmdldC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHguY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3ZlOmZvY3VzXCIpLnByZXZpb3VzU2libGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdmU6Zm9jdXNcIikucHJldmlvdXNTaWJsaW5nLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBvbiBmb3JtIHN1Ym1pdFxyXG4gICAgICAgIHN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gT2JqZWN0LnZhbHVlcyhkYXRhKS5yZWR1Y2UoKGFjLCBlbCkgPT4gYWMgKyBlbClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVxdWVzdCggVkVSSUZZX1BBU1NXT1JEX1JFU0VULCB7IGNvZGU6IGRhdGEgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Z2V0Q29va2llKGByZXNldC10b2tlbmApfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0VtYWlsQ29kZU1sKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd05ld1Bhc3N3b3JkTWwodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QoIGVyci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IGB1bmtub3duIGVycm9yYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGBlcnJvcmBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dHZXRFbWFpbENvZGVNbCAmJlxyXG4gICAgICAgICAgICAgICAgPCBNb2RhbCBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9IGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5tX2NvbnRlbnR9IGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLm1fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3RpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ2Rlc2NyaXB0aW9uJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtlbC5jbGFzc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtMSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW0zIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtNCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW02ID8gc3R5bGVzLmVycm9yX2lucHV0IDogc3R5bGVzLnN1Y2Nlc3NfaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWAudHJpbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e2VsLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXtlbC5tYXhMZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4ganVtcEJhY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdudW0nICsgKGkgKyAxKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3NlbmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwgPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dOZXdQYXNzd29yZE1sICYmIDxOZXdQYXNzd29yZCBvbk1vZGFsQ2xvc2U9e29uTW9kYWxDbG9zZX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgY29uc3QgLy8gaW5wdXQgY29uZmlnc1xyXG4gICAgaW5wdXRzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdmaXJzdCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiMVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3NlY29uZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6ICcxJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0aGlyZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6ICcxJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdmb3VydGgnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGNsYXNzOiAnbW92ZScsXHJcbiAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiAnMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZmlmdGgnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGNsYXNzOiAnbW92ZScsXHJcbiAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiAnMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnc2l4dGgnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGNsYXNzOiAnbW92ZScsXHJcbiAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiAnMScsXHJcbiAgICAgICAgfSxcclxuICAgIF0iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9UaXRsZSdcclxuaW1wb3J0IHsgSW5wdXRDb250YWluZXIgfSBmcm9tICcvY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lcidcclxuaW1wb3J0IHsgU3VibWl0IH0gZnJvbSAnLi4vLi4vY29tbW9uL1N1Ym1pdCdcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OZXdQYXNzd29yZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgU3VjY2VzcyB9IGZyb20gJy4uL1N1Y2Nlc3MvU3VjY2VzcydcclxuXHJcbmltcG9ydCB7IHJlcXVlc3QsIGdldENvb2tpZSB9IGZyb20gJy9saWIvZXIubGliJztcclxuaW1wb3J0IHsgU0VUX05FV19QQVNTV09SRCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmV3UGFzc3dvcmQoeyBvbk1vZGFsQ2xvc2UgfSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBtb2RhbCBzdGF0ZXMgcGFzcyA9PiBwYXNzd29yZCBNbCA9PiBNb2RhbFxyXG4gICAgICAgIFtzaG93TmV3UGFzc01sLCBzZXRTaG93TmV3UGFzc01sXSA9IHVzZVN0YXRlKHRydWUpLFxyXG4gICAgICAgIFtzaG93U3VjY2Vzc01sLCBzZXRTaG93U3VjY2Vzc01sXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIubmV3UGFzc3dvcmRNb2RhbC4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICAvLyB5dXAgY29uZmlnc1xyXG4gICAgICAgIHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKClcclxuICAgICAgICAgICAgICAgIC5taW4oNilcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gb24gZm9ybSBzdWJtaXRcclxuICAgICAgICBzdWJtaXQgPSBhc3luYyAoIGRhdGEgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCByZXF1ZXN0KCBTRVRfTkVXX1BBU1NXT1JELCB7IHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2dldENvb2tpZShgcmVzZXQtdG9rZW5gKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dOZXdQYXNzTWwoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93U3VjY2Vzc01sKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCggZXJyLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgYHVua25vd24gZXJyb3JgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd05ld1Bhc3NNbCAmJlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX0gY29udGVudFN0eWxlcz17c3R5bGVzLm1fY29udGVudH0gY29udGFpbmVyU3R5bGVzPXtzdHlsZXMubV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgndGl0bGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ3JlZ2lzdHJhdGlvbi5pbnB1dFBsYWNlSG9sZGVycy5wYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9eyEhZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcj17cmVnaXN0ZXIoJ3Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3N1Y2Nlc3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvd1N1Y2Nlc3NNbCAmJiA8U3VjY2VzcyBvbk1vZGFsQ2xvc2U9e29uTW9kYWxDbG9zZX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwnXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1RpdGxlJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N1Y2Nlc3MubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCBzdWNjZXNzSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vc3VjY2Vzcy5wbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3VjY2Vzcyh7IG9uTW9kYWxDbG9zZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiAgICBcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLnN1Y2Nlc3NNb2RhbC4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX0gY29udGVudFN0eWxlcz17c3R5bGVzLm1fY29udGVudH0gY29udGFpbmVyU3R5bGVzPXtzdHlsZXMubV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3RpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3N1Y2Nlc3NJY29uLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdTdWNjZXNzIGltZydcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gSWNvbnNcclxuaW1wb3J0IGZhY2Vib29rIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9mYWNlYm9vay5zdmcnXHJcbmltcG9ydCBnbWFpbCBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZ21haWwuc3ZnJ1xyXG5pbXBvcnQgdmsgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3ZrLnN2ZydcclxuaW1wb3J0IHR3aXR0ZXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3R3aXR0ZXIuc3ZnJ1xyXG4vLyBzY3NzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Tb2NpYWxNZWRpYUljb25zLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBSZWFjdEZhY2Vib29rTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2stbG9naW4nXHJcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nXHJcbmltcG9ydCBUd2l0dGVyTG9naW4gZnJvbSBcInJlYWN0LXR3aXR0ZXItbG9naW5cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBpY29ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBpY29uVXJsOiBmYWNlYm9vay5zcmMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb25Vcmw6IGdtYWlsLnNyYyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvblVybDogdmsuc3JjLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uVXJsOiB0d2l0dGVyLnNyYyxcclxuICAgIH1dXHJcblxyXG5cclxuXHJcbmNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSAocmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxufVxyXG5cclxuY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxufVxyXG5cclxuY29uc3QgVFdJVFRFUl9DT05TVU1FUl9LRVkgPSBcIlwiO1xyXG5jb25zdCBUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCA9IFwiXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU29jaWFsTWVkaWFJY29ucygpIHtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgIFZLLmluaXQoe2FwaUlkOic3OTExMjk0J30pO1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gb25Tb2NpYWxNZWRpYUJ0bkNsaWNrKGkpIHtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmYWNlYm9va0xvZ2luQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZhY2Vib29rLWxvZ2luLWJ0bmApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggZmFjZWJvb2tMb2dpbkJ0biApO1xyXG4gICAgICAgICAgICBpZiAoZmFjZWJvb2tMb2dpbkJ0bilcclxuICAgICAgICAgICAgICAgIGZhY2Vib29rTG9naW5CdG4uY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdFxyXG4gICAgICAgICAgICAgICAgZ29vZ2xlTG9naW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ29vZ2xlLWxvZ2luLWJ0bmApXHJcbiAgICAgICAgICAgIGlmIChnb29nbGVMb2dpbkJ0bilcclxuICAgICAgICAgICAgICAgIGdvb2dsZUxvZ2luQnRuLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBpID09PSAyICkgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBWSy5BdXRoLmxvZ2luKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnNlc3Npb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIC8qVXNlciBhdXRob3JpemF0aW9uIHN1Y2NlZWRlZCovXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzPT0nY29ubmVjdGVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qU2VsZWN0ZWQgdXNlciBhY2Nlc3Mgc2V0dGluZ3MsIGlmIHRoZXkgYXJlIHJlcXVlc3RlZCovXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvKlVzZXIgY2xpY2tzIHRoZSBjYW5jZWwgYnV0dG9uIGluIHRoZSBhdXRob3JpemF0aW9uIHdpbmRvdyovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggaSA9PT0gMyApIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHR3aXR0ZXJBdXRoSGFuZGxlciA9ICggZXJyLCBkYXRhICkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBlcnIsIGRhdGEgKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29ucy5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25Db250ZW50fSBrZXk9e01hdGgucmFuZG9tKCkgKiAxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWwuaWNvblVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIiBvbkNsaWNrPXsoKSA9PiBvblNvY2lhbE1lZGlhQnRuQ2xpY2soaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9PT0gMCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RGYWNlYm9va0xvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTdHlsZT17eyBkaXNwbGF5OiBgbm9uZWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzPVwiZmFjZWJvb2stbG9naW4tYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkPVwiMTE4ODYzNzcwMzYxNjgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaz17cmVzcG9uc2VGYWNlYm9va30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPT09IDEpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjEwODk2MTgwNDc5NDMtcjkxc3U5cWtjMGM5bnBvMXRmb2ZmM3NwODQyMWJ0NWcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXtyZW5kZXJQcm9wcyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVuZGVyUHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnb29nbGUtbG9naW4tYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUd2l0dGVyTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aENhbGxiYWNrPXt0d2l0dGVyQXV0aEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bWVyS2V5PXtUV0lUVEVSX0NPTlNVTUVSX0tFWX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VtZXJTZWNyZXQ9e1RXSVRURVJfQ09OU1VNRVJfU0VDUkVUfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIFRPRE9cclxuLy8gYWRkIGZvb3QgZm9vdGJldCBkb21haW4gaW4gZ29vZ2xlIGRldmVscG9ycyBhY2NvdW50IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXNldFBhc3N3b3JkTGluayh7IHN0eWxlcywgY29udGVudCwgY2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzfSA+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2NsaWNrfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gU3VibWl0KHsgc3R5bGVzLCBjb250ZW50LCBjbGljayB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXN9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gVGl0bGUoeyBzdHlsZXMsIGNvbnRlbnQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzfT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvUmVnaXN0ZXIoe1xyXG4gICAgY29udGFpbmVyX3N0eWxlcyxcclxuICAgIGNvbnRlbnRfc3R5bGVzLFxyXG4gICAgb3IsXHJcbiAgICByZWdpc3Rlcl90ZXh0X3N0eWxlcyxcclxuICAgIGNvbnRlbnQsXHJcbiAgICBocmVmLFxyXG4gICAgY2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y29udGFpbmVyX3N0eWxlc31cclxuICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGVudF9zdHlsZXN9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvciArIFwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtyZWdpc3Rlcl90ZXh0X3N0eWxlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9nby5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIGltYWdlcyBhbmQgaWNvbnNcclxuaW1wb3J0IGxvZ28gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ28uc3ZnJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dvKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb19jb25hdGluZXJ9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ28uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkZvb3RCZXQgTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpbmsgPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4vL3N0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEJhciB9IGZyb20gJy4vQmFyL0JhcidcclxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi9OYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgeyBTb2NpYWxNZWRpYSB9IGZyb20gJy4vU29jaWFsTWVkaWEvU29jaWFsTWVkaWEnXHJcbi8vIGltZ2VzXHJcbmltcG9ydCBmb290YmFsbGVyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mb290YmFsbGVyLnN2ZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoeyBtYWluc1BhZ2VzIH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHttYWluc1BhZ2VzID9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX2NvbnRhaW5lcl9iaWd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbE1lZGlhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyX2NvbnRyb2xlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcl9jb250ZWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJfaXRlbXNfY29udD17c3R5bGVzLmJhcl9pdGVtc19jb250fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyX2l0ZW1zPXtzdHlsZXMuYmFyX2l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RiYWxsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmb290YmFsbGVyLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfY29udGFpbmVyX3NtYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICA8QmFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHtcclxuICAgIGhyZWYsXHJcbiAgICBjb250ZW50RnJzdFAsXHJcbiAgICBjb250ZW50U2VjUCA9IG51bGwsXHJcbiAgICBhY3RpdmUsXHJcbiAgICBjbGljayA9IG51bGwgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aHJlZiAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHthY3RpdmUgJiYgc3R5bGVzLmFjdGl2ZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZyc3RQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFNlY1BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPiBcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2FjdGl2ZSAmJiBzdHlsZXMuYWN0aXZlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGcnN0UFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFNlY1BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2QmFyLm1vZHVsZS5zY3NzJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBjb21wb25ldG5zXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IENvbnRhY3RzTW9kYWwgZnJvbSAnLi4vLi4vUGFnZXMvQ29udGFjdHMvQ29udGFjdHNNb2RhbCdcclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdkJhcigpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vc3RhdGVzXHJcbiAgICAgICAgW3Nob3dDb250YWN0c01vZGFsLCBzZXRTaG93Q29udGFjdHNNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5uYXZCYXIuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICAvLyByb3V0ZXJcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICAvLyBuYXYgYmFyIGJ1dHRvbnMgY29uZmlnc1xyXG4gICAgICAgIGJ1dHRvbnNJbkhvbWVQYWdlID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ21haW4nLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnbWFpbicpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnZ2FtZXMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnZ2FtZXMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvZ2FtZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnc3RhdGlzdGljcycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdzdGF0aXN0aWNzLmZycycpLFxyXG4gICAgICAgICAgICAgICAgc2VjQ29udGVudDogdHJhbnNsYXRlKCdzdGF0aXN0aWNzLnNlYycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9zdGF0aXN0aWNzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgncHJlZGljdGlvbi5mcnMnKSxcclxuICAgICAgICAgICAgICAgIHNlY0NvbnRlbnQ6IHRyYW5zbGF0ZSgncHJlZGljdGlvbi5zZWMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvcHJlZGljdGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICd0ZXN0aW1vbmlhbHMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgndGVzdGltb25pYWxzJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL3Rlc3RpbW9uaWFscydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdhYm91dFVzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ2Fib3V0VXMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvYWJvdXRVcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb250YWN0cycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdjb250YWN0cycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBzZXRTaG93Q29udGFjdHNNb2RhbCh0cnVlKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYnV0dG9ucyA9IGJ1dHRvbnNJbkhvbWVQYWdlLmZpbHRlcihlbCA9PiBlbC5pZCAhPT0gXCJzdGF0aXN0aWNzXCIpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtyb3V0ZXIucGF0aG5hbWUgIT09ICcvJyA/IHN0eWxlcy50YWJsZXQgOiBudWxsfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcF9vbl90YWJsZXR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nID8gYnV0dG9uc0luSG9tZVBhZ2UgOiBidXR0b25zKS5tYXAoKGVsLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPCAzICYmICg8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGcnN0UD17ZWwuZnJzdENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRTZWNQPXtlbC5zZWNDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtlbC5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IGVsLmhyZWYgPyAndHJ1ZScgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17ZWwuY2xpY2sgJiYgZWwuY2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21fb25fdGFibGV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nID8gYnV0dG9uc0luSG9tZVBhZ2UgOiBidXR0b25zKS5tYXAoKGVsLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPj0gMyAmJiAoPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RnJzdFA9e2VsLmZyc3RDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50U2VjUD17ZWwuc2VjQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZWwuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSBlbC5ocmVmID8gJ3RydWUnIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e2VsLmNsaWNrICYmIGVsLmNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dDb250YWN0c01vZGFsICYmXHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdHNNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5lZD17c2hvd0NvbnRhY3RzTW9kYWwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93Q29udGFjdHNNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9JY29uLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEljb24oeyBzcmMsIGNsaWNrLCBpZCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBpZD17aWR9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICAgIGFsdD17YGljb25zLSR7c3JjfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZhY2Vib29rKHsgb25Nb2RhbENsb3NlLCBkYXRhLCBwYXJlbnQgfSkge1xyXG5cclxuICAgIGNvbnN0IHRvcCA9IHBhcmVudC5jdXJyZW50LmNoaWxkcmVuLmZhY2Vib29rLm9mZnNldFRvcFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBjb250ZW50U3R5bGVzPXtzdHlsZXMuY29udGVudH1cclxuICAgICAgICAgICAgb3RoZXJTdHlsZXM9e3sgdG9wOiB0b3AgKyAncHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtkYXRhLnVybH0+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnN0YWdyYW0oeyBvbk1vZGFsQ2xvc2UsIGRhdGEsIHBhcmVudCB9KSB7XHJcblxyXG4gICAgY29uc3QgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4uaW5zdGFncmFtLm9mZnNldFRvcFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBjb250ZW50U3R5bGVzPXtzdHlsZXMuY29udGVudH1cclxuICAgICAgICAgICAgb3RoZXJTdHlsZXM9e3sgdG9wOiB0b3AgKyAncHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtkYXRhLnVybH0+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQaG9uZSh7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIHRvcCA9IHBhcmVudC5jdXJyZW50LmNoaWxkcmVuLnBob25lLm9mZnNldFRvcFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBjb250ZW50U3R5bGVzPXtzdHlsZXMuY29udGVudH1cclxuICAgICAgICAgICAgb3RoZXJTdHlsZXM9e3sgdG9wOiB0b3AgKyAncHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtkYXRhLnVybH0+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Tb2NpYWxNZWRpYU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGVsZWdyYW0oeyBvbk1vZGFsQ2xvc2UsIGRhdGEsIHBhcmVudCB9KSB7XHJcblxyXG4gICAgY29uc3QgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4udGVsZWdyYW0ub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZpYmVyKHsgb25Nb2RhbENsb3NlLCBkYXRhLCBwYXJlbnQgfSkge1xyXG5cclxuICAgIGNvbnN0IHRvcCA9IHBhcmVudC5jdXJyZW50LmNoaWxkcmVuLnZpYmVyLm9mZnNldFRvcFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBjb250ZW50U3R5bGVzPXtzdHlsZXMuY29udGVudH1cclxuICAgICAgICAgICAgb3RoZXJTdHlsZXM9e3sgdG9wOiB0b3AgKyAncHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtkYXRhLnVybH0+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBXYXRzVXAoeyBvbk1vZGFsQ2xvc2UsIGRhdGEsIHBhcmVudCB9KSB7XHJcblxyXG4gICAgY29uc3QgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4ud2F0c3VwLm9mZnNldFRvcFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBjb250ZW50U3R5bGVzPXtzdHlsZXMuY29udGVudH1cclxuICAgICAgICAgICAgb3RoZXJTdHlsZXM9e3sgdG9wOiB0b3AgKyAncHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtkYXRhLnVybH0+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NvY2lhbE1lZGlhLm1vZHVsZS5zY3NzXCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQaG9uZSB9IGZyb20gXCIuL01vZGFscy9QaG9uZS9QaG9uZVwiO1xyXG5pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gXCIuL01vZGFscy9GYWNlYm9vay9GYWNlYm9va1wiO1xyXG5pbXBvcnQgeyBUZWxlZ3JhbSB9IGZyb20gXCIuL01vZGFscy9UZWxlZ3JhbS9UZWxlZ3JhbVwiO1xyXG5pbXBvcnQgeyBXYXRzVXAgfSBmcm9tIFwiLi9Nb2RhbHMvV2F0c1VwL1dhdHNVcFwiO1xyXG5pbXBvcnQgeyBJbnN0YWdyYW0gfSBmcm9tIFwiLi9Nb2RhbHMvSW5zdGFncmFtL0luc3RhZ3JhbVwiO1xyXG5pbXBvcnQgeyBWaWJlciB9IGZyb20gXCIuL01vZGFscy9WaWJlci9WaWJlclwiO1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgcGhvbmUgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9waG9uZS5zdmdcIjtcclxuaW1wb3J0IGZhY2Vib29rIGZyb20gXCIvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZmFjZWJvb2suc3ZnXCI7XHJcbmltcG9ydCB0ZWxlZ3JhbSBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3RlbGVncmFtLnN2Z1wiO1xyXG5pbXBvcnQgd2F0c3VwIGZyb20gXCIvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvd2F0c3VwLnN2Z1wiO1xyXG5pbXBvcnQgaW5zdGFncmFtIGZyb20gXCIvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvaW5zdGFncmFtLnN2Z1wiO1xyXG5pbXBvcnQgdmliZXIgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS92aWJlci5zdmdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxNZWRpYSgpIHtcclxuICBjb25zdCAvLyBzdGF0ZXNcclxuICAgIFtzaG93UGhvbmVNb2RhbCwgc2V0U2hvd1Bob25lTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgW3Nob3dGYWNib29rTW9kYWwsIHNldFNob3dGYWNib29rTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgW3Nob3dUZWxlZ3JhbU1vZGFsLCBzZXRTaG93VGVsZWdyYW1Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICBbc2hvd1dhdHNVcE1vZGFsLCBzZXRTaG93V2F0c1VwTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgW3Nob3dJbnN0YWdyYW1Nb2RhbCwgc2V0U2hvd0luc3RhZ3JhbU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgIFtzaG93VmliZXJNb2RhbCwgc2V0U2hvd1ZpYmVyTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgc29jaWFsTWVkaWFzUmVmID0gdXNlUmVmKCksXHJcbiAgICAvLyBjb25maWdcclxuICAgIGljb25zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwicGhvbmVcIixcclxuICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgc3JjOiBwaG9uZS5zcmMsXHJcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgIHNldFNob3dQaG9uZU1vZGFsKHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCJmYWNlYm9va1wiLFxyXG4gICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICBzcmM6IGZhY2Vib29rLnNyYyxcclxuICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgc2V0U2hvd0ZhY2Jvb2tNb2RhbCh0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwidGVsZWdyYW1cIixcclxuICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgc3JjOiB0ZWxlZ3JhbS5zcmMsXHJcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgIHNldFNob3dUZWxlZ3JhbU1vZGFsKHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCJ3YXRzdXBcIixcclxuICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgc3JjOiB3YXRzdXAuc3JjLFxyXG4gICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBzZXRTaG93V2F0c1VwTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcImluc3RhZ3JhbVwiLFxyXG4gICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICBzcmM6IGluc3RhZ3JhbS5zcmMsXHJcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgIHNldFNob3dJbnN0YWdyYW1Nb2RhbCh0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwidmliZXJcIixcclxuICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgc3JjOiB2aWJlci5zcmMsXHJcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgIHNldFNob3dWaWJlck1vZGFsKHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgbW9kYWxfY29udGVudHMgPSB7XHJcbiAgICAgIHBob25lOiB7XHJcbiAgICAgICAgdGV4dDogXCIrMzQgNjcyIDMxNCA4MDhcIixcclxuICAgICAgICB1cmw6IFwidGVsOiszNDY3MjMxNDgwOFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBmYWNlYm9vazoge1xyXG4gICAgICAgIHRleHQ6IFwiRmFjZWJvb2tcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLyVEMCU5RiVEMSU4MCVEMCVCRSVEMCVCMyVEMCVCRCVEMCVCRSVEMCVCNyVEMSU4Qi0lRDAlQkQlRDAlQjAtJUQwJUE0JUQxJTgzJUQxJTgyJUQwJUIxJUQwJUJFJUQwJUJCLTEwNDk0MTM0NzU3NzkxMy9cIixcclxuICAgICAgfSxcclxuICAgICAgdGVsZWdyYW06IHtcclxuICAgICAgICB0ZXh0OiBcIiszNCA2NzIgMzE0IDgwOFwiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3RlbGVncmFtLm1lL2Zvb3RiZXQyNGNvbVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB3YXRzdXA6IHtcclxuICAgICAgICB0ZXh0OiBcIiszNCA2NzIgMzE0IDgwOFwiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rMzQ2NzIzMTQ4MDhcIixcclxuICAgICAgfSxcclxuICAgICAgaW5zdGFncmFtOiB7XHJcbiAgICAgICAgdGV4dDogXCJJbnN0YWdyYW1cIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wcm9nbm96eW5hNTUwLz91dG1fbWVkaXVtPWNvcHlfbGlua1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB2aWJlcjoge1xyXG4gICAgICAgIHRleHQ6IFwiKzM0IDY3MiAzMTQgODA4XCIsXHJcbiAgICAgICAgdXJsOiBcInZpYmVyOi8vY2hhdD9udW1iZXI9KzM0NjcyMzE0ODA4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gcmVmPXtzb2NpYWxNZWRpYXNSZWZ9PlxyXG4gICAgICAgIHtpY29ucy5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgICA8SWNvbiBpZD17ZWwuaWR9IGtleT17ZWwua2V5fSBzcmM9e2VsLnNyY30gY2xpY2s9e2VsLmNsaWNrfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dQaG9uZU1vZGFsICYmIChcclxuICAgICAgICA8UGhvbmVcclxuICAgICAgICAgIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd1Bob25lTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgZGF0YT17bW9kYWxfY29udGVudHMucGhvbmV9XHJcbiAgICAgICAgICBwYXJlbnQ9e3NvY2lhbE1lZGlhc1JlZn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7c2hvd0ZhY2Jvb2tNb2RhbCAmJiAoXHJcbiAgICAgICAgPEZhY2Vib29rXHJcbiAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dGYWNib29rTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgZGF0YT17bW9kYWxfY29udGVudHMuZmFjZWJvb2t9XHJcbiAgICAgICAgICBwYXJlbnQ9e3NvY2lhbE1lZGlhc1JlZn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7c2hvd1RlbGVncmFtTW9kYWwgJiYgKFxyXG4gICAgICAgIDxUZWxlZ3JhbVxyXG4gICAgICAgICAgb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93VGVsZWdyYW1Nb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICBkYXRhPXttb2RhbF9jb250ZW50cy50ZWxlZ3JhbX1cclxuICAgICAgICAgIHBhcmVudD17c29jaWFsTWVkaWFzUmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzaG93V2F0c1VwTW9kYWwgJiYgKFxyXG4gICAgICAgIDxXYXRzVXBcclxuICAgICAgICAgIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd1dhdHNVcE1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgIGRhdGE9e21vZGFsX2NvbnRlbnRzLndhdHN1cH1cclxuICAgICAgICAgIHBhcmVudD17c29jaWFsTWVkaWFzUmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzaG93SW5zdGFncmFtTW9kYWwgJiYgKFxyXG4gICAgICAgIDxJbnN0YWdyYW1cclxuICAgICAgICAgIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0luc3RhZ3JhbU1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgIGRhdGE9e21vZGFsX2NvbnRlbnRzLmluc3RhZ3JhbX1cclxuICAgICAgICAgIHBhcmVudD17c29jaWFsTWVkaWFzUmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzaG93VmliZXJNb2RhbCAmJiAoXHJcbiAgICAgICAgPFZpYmVyXHJcbiAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dWaWJlck1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgIGRhdGE9e21vZGFsX2NvbnRlbnRzLnZpYmVyfVxyXG4gICAgICAgICAgcGFyZW50PXtzb2NpYWxNZWRpYXNSZWZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGFjdHMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGNvbnRhY3RzX2RhdGEgfSBmcm9tICcuL2NvbnRhY3RzX2RhdGEnXHJcbi8vIGljb25zXHJcbmltcG9ydCBjbG9zZVZlY3RvciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvY2xvc2VWZWN0b3IucG5nJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RzTW9kYWwoeyBvbk1vZGFsQ2xvc2UsIG9wZW5lZCA9IGZhbHNlIH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlcz17YCR7c3R5bGVzLmNvbnRhaW5lcn0gYH1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17YCR7c3R5bGVzLmNvbnRlbnR9ICR7b3BlbmVkID8gc3R5bGVzLm9wZW4gOiBzdHlsZXMuY2xvc2V9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2xvc2VWZWN0b3Iuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0c19kYXRhLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9IGtleT17TWF0aC5yYW5kb20oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlbC5pY29ufSBhbHQ9XCJjb250YWN0LWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2VsLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBwaG9uZSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvcGhvbmUuc3ZnJ1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2ZhY2Vib29rLnN2ZydcclxuaW1wb3J0IHRlbGVncmFtIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS90ZWxlZ3JhbS5zdmcnXHJcbmltcG9ydCB3YXRzdXAgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmcnXHJcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2luc3RhZ3JhbS5zdmcnXHJcbmltcG9ydCB2aWJlciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdmliZXIuc3ZnJ1xyXG5pbXBvcnQgZW1haWwgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2VtYWlsLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWN0c19kYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGljb246IHBob25lLnNyYyxcclxuICAgICAgICB1cmw6IFwidGVsOiszNDY3MjMxNDgwOFwiLFxyXG4gICAgICAgIHRleHQ6IFwiKzM0IDY3MiAzMTQgODA4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjogZmFjZWJvb2suc3JjLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vJUQwJTlGJUQxJTgwJUQwJUJFJUQwJUIzJUQwJUJEJUQwJUJFJUQwJUI3JUQxJThCLSVEMCVCRCVEMCVCMC0lRDAlQTQlRDElODMlRDElODIlRDAlQjElRDAlQkUlRDAlQkItMTA0OTQxMzQ3NTc3OTEzL1wiLFxyXG4gICAgICAgIHRleHQ6IFwiRmFjZWJvb2tcIlxyXG4gICAgfVxyXG4gICAgLFxyXG4gICAge1xyXG4gICAgICAgIGljb246IHRlbGVncmFtLnNyYyxcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9mb290YmV0MjRjb21cIixcclxuICAgICAgICB0ZXh0OiBcIkBmb290YmV0MjRjb21cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOiB3YXRzdXAuc3JjLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rMzQ2NzIzMTQ4MDhcIixcclxuICAgICAgICB0ZXh0OiBcIiszNCA2NzIgMzE0IDgwOFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb246IGluc3RhZ3JhbS5zcmMsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcHJvZ25venluYTU1MC8/dXRtX21lZGl1bT1jb3B5X2xpbmtcIixcclxuICAgICAgICB0ZXh0OiBcIkluc3RhZ3JhbVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb246IHZpYmVyLnNyYyxcclxuICAgICAgICB1cmw6IFwidmliZXI6Ly9jaGF0P251bWJlcj0rMzQ2NzIzMTQ4MDhcIixcclxuICAgICAgICB0ZXh0OiBcIiszNCA2NzIgMzE0IDgwOFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb246IGVtYWlsLnNyYyxcclxuICAgICAgICB1cmw6IFwibWFpbHRvOm4ueGFjaDE5ODdAbWFpbC5ydVwiLFxyXG4gICAgICAgIHRleHQ6IFwibi54YWNoMTk4N0BtYWlsLnJ1XCJcclxuICAgIH1cclxuXSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dENvbnRhaW5lci5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnB1dENvbnRhaW5lcih7XHJcbiAgICBsYWJlbCxcclxuICAgIGlkLFxyXG4gICAgdHlwZSxcclxuICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgZXJyb3JzLFxyXG4gICAgb3RoZXIgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7bGFiZWwgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsYWJlbC5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Vycm9ycyA/IHN0eWxlcy5pbnB1dF9lcnJvcl9jb250ZW50IDogc3R5bGVzLmlucHV0X3N1Y2Nlc3NfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nXHJcblxyXG5cclxuY29uc3RcclxuICAgIGhhbmRsZV9vdmVyZmxvd19vbl9vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSAnYXV0bydcclxuICAgIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNb2RhbCh7XHJcbiAgICBvbkNsb3NlLFxyXG4gICAgLy8gY2xvc2VXaXRoVmVjdG9yZSA9IG51bGwsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGNvbnRhaW5lclN0eWxlcyA9IG51bGwsXHJcbiAgICBjb250ZW50U3R5bGVzID0gbnVsbCxcclxuICAgIG90aGVyU3R5bGVzID0gbnVsbCxcclxuICAgIHBvcnRhbExvY2F0aW9uID0gJ21vZGFsLWNvbnRlaW5lcicgfSkge1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbaGFuZGxlQ2xvc2VdKVxyXG5cclxuICAgIGNvbnN0IG5vZGUgPSB1c2VSZWYoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gZSA9PiB7XHJcbiAgICAgICAgaWYgKG5vZGU/LmN1cnJlbnQ/LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb25DbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICAgICBkaW5hbWljVG9wID0gd2luZG93LnNjcm9sbFlcclxuXHJcbiAgICBzaG93TW9kYWwgPyBoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbigpIDogaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlKClcclxuXHJcbiAgICBjb25zdCBtb2RhbCA9IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vZGFsQ29udGVpbmVyfSAke2NvbnRhaW5lclN0eWxlc31gfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdG9wOiBkaW5hbWljVG9wICsgJ3B4J1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxDb250ZW50fSAke2NvbnRlbnRTdHlsZXN9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtvdGhlclN0eWxlc31cclxuICAgICAgICAgICAgICAgIHJlZj17bm9kZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgaWYgKHNob3dNb2RhbCkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICAgIG1vZGFsLFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3J0YWxMb2NhdGlvbilcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybiBudWxsXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3IoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJ1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIG1haW5zUGFnZXM9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlckxheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciBtYWluc1BhZ2VzPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbih7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciBtYWluc1BhZ2VzPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBNYWluIGZyb20gXCIuL01haW5cIjtcclxuaW1wb3J0IFdpdGhvdXRQaG90byBmcm9tIFwiLi9XaXRob3V0UGhvdG9cIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL1JlZ2lzdGVyXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9FcnJvclwiXHJcblxyXG5jb25zdCBsYXlvdXRzID0ge1xyXG4gIG1haW46IE1haW4sXHJcbiAgd2l0aG91dFBob3RvOiBXaXRob3V0UGhvdG8sXHJcbiAgcmVnaXN0ZXI6IFJlZ2lzdGVyXHJcbn07XHJcblxyXG5jb25zdCBMYXlvdXRXcmFwcGVyID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gdG8gZ2V0IHRoZSB0ZXh0IHZhbHVlIG9mIHRoZSBhc3NpZ25lZCBsYXlvdXQgb2YgZWFjaCBjb21wb25lbnRcclxuICBjb25zdCBMYXlvdXQgPSBsYXlvdXRzW3Byb3BzLmNoaWxkcmVuLnR5cGUubGF5b3V0XTtcclxuICAvLyBpZiB3ZSBoYXZlIGEgcmVnaXN0ZXJlZCBsYXlvdXQgcmVuZGVyIGNoaWxkcmVuIHdpdGggc2FpZCBsYXlvdXRcclxuICBpZiAoTGF5b3V0ICE9IG51bGwpIHtcclxuICAgIHJldHVybiA8TGF5b3V0IHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvTGF5b3V0PjtcclxuICB9XHJcbiAgLy8gaWYgbm90IHJlbmRlciBjaGlsZHJlbiB3aXRoIGZyYWdtZW50XHJcbiAgcmV0dXJuIDxFcnJvciB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L0Vycm9yPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFdyYXBwZXI7XHJcbiIsImV4cG9ydCBjb25zdCBob3N0ID0gXCJodHRwczovL3d3dy5mb290YmV0MjQuY29tL2FwaVwiO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSAoIGRlc3RpbmF0aW9uLCBwYXlsb2FkID0gbnVsbCwgb3B0aW9ucyA9IG51bGwgKSA9PiBuZXcgUHJvbWlzZSggKCByc2x2LCByamN0ICkgPT4ge1xyXG4gIGxldCBoZWFkZXJzID0ge307XHJcblxyXG4gIGlmICggb3B0aW9ucyApIHtcclxuICAgIGlmICggb3B0aW9ucy5hdXRoID09PSB0cnVlICkge1xyXG4gICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShgYWNjZXNzLXRva2VuYCl9YCB8fCBgYCAvLyBmb3IgbW9zdCBvZiByZXF1ZXN0c1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCBgaGVhZGVyc2AgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMgaW5zdGFuY2VvZiBPYmplY3QgKSB7XHJcbiAgICAgIGhlYWRlcnMgPSB7IC4uLmhlYWRlcnMsIC4uLm9wdGlvbnMuaGVhZGVycyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyggYHN0YXJ0IGxvYWRpbmdgICk7XHJcbiAgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBkZXN0aW5hdGlvbi5tZXRob2QsXHJcbiAgICB1cmw6IGRlc3RpbmF0aW9uLnVybCxcclxuICAgIGhlYWRlcnMsXHJcbiAgICBkYXRhOiBwYXlsb2FkIHx8IHt9XHJcbiAgfSlcclxuICAudGhlbiggcnNsdiApXHJcbiAgLmNhdGNoKCByamN0IClcclxuICAuZmluYWxseSggKCkgPT4gY29uc29sZS5sb2coIGBlbmQgbG9hZGluZ2AgKSApXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBuYW1lID0+IHtcclxuICB2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xyXG4gIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYyA9IGNhW2ldO1xyXG5cclxuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEsIGMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gbmFtZSA9PiB7XHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9OyBQYXRoPS87IEV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAobmFtZSwgdmFsdWUsIGRheXMpID0+IHtcclxuICBsZXQgZXhwaXJlcyA9IFwiXCI7XHJcblxyXG4gIGlmIChkYXlzKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyAodmFsdWUgfHwgXCJcIikgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG59XHJcbiIsImltcG9ydCB7aG9zdH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IEFVVEhfVVJMID0gaG9zdCArIGBhdXRoYDtcclxuY29uc3QgQUNDT1VOVF9VUkwgPSBob3N0ICsgYGFjY291bnRgXHJcblxyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArICdyZWdpc3RyYXRpb24nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ2xvZ2luJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ2dldCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lORk8gPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdpbmZvJyxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9JTUFHRSA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ3Byb2ZpbGUtaW1hZ2UnLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTVEFSVF9SRVNFVF9QQVNTV09SRCA9IGVtYWlsID0+ICh7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9yZXNldD9lbWFpbD0ke2VtYWlsfWAsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVkVSSUZZX1BBU1NXT1JEX1JFU0VUID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvdmVyaWZ5X2NvZGVgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9ORVdfUEFTU1dPUkQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9uZXdfcGFzc3dvcmQgYCxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTkVXUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9uZXdzYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL21hdGNoLW9mLXRoZS1kYXlgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vbWF0Y2gtb2YtdGhlLWRheT90eXBlPW5leHRfZGF5YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUkVESUNUSU9OUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9wcmVkaWN0aW9uYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GRUVEQkFDSyA9IGlkID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgZmVlZGJhY2svJHtpZH0/c29ydF9ieT1jcmVhdGVkX2F0Jm9yZGVyX2J5PWRlc2NgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX0JZX1RZUEUgPSB0eXBlID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vZ2FtZT90eXBlPSR7dHlwZX1gLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRldGVjdERvbWFpbkxvY2FsZT1kZXRlY3REb21haW5Mb2NhbGU7ZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkl0ZW1zLGhvc3RuYW1lLGRldGVjdGVkTG9jYWxlKXtsZXQgZG9tYWluSXRlbTtpZihkb21haW5JdGVtcyl7aWYoZGV0ZWN0ZWRMb2NhbGUpe2RldGVjdGVkTG9jYWxlPWRldGVjdGVkTG9jYWxlLnRvTG93ZXJDYXNlKCk7fWZvcihjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKXt2YXIgX2l0ZW0kZG9tYWluLF9pdGVtJGxvY2FsZXM7Ly8gcmVtb3ZlIHBvcnQgaWYgcHJlc2VudFxuY29uc3QgZG9tYWluSG9zdG5hbWU9KF9pdGVtJGRvbWFpbj1pdGVtLmRvbWFpbik9PW51bGw/dm9pZCAwOl9pdGVtJGRvbWFpbi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7aWYoaG9zdG5hbWU9PT1kb21haW5Ib3N0bmFtZXx8ZGV0ZWN0ZWRMb2NhbGU9PT1pdGVtLmRlZmF1bHRMb2NhbGUudG9Mb3dlckNhc2UoKXx8KF9pdGVtJGxvY2FsZXM9aXRlbS5sb2NhbGVzKSE9bnVsbCYmX2l0ZW0kbG9jYWxlcy5zb21lKGxvY2FsZT0+bG9jYWxlLnRvTG93ZXJDYXNlKCk9PT1kZXRlY3RlZExvY2FsZSkpe2RvbWFpbkl0ZW09aXRlbTticmVhazt9fX1yZXR1cm4gZG9tYWluSXRlbTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXRlY3QtZG9tYWluLWxvY2FsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJcbiAgICBpbXBvcnQgX19pMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4gICAgaW1wb3J0IF9fYXBwV2l0aEkxOG4gZnJvbSAnbmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG4nXG4gICAgXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2NhbGVuZGFyLnNjc3MnXHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXRXcmFwcGVyIGZyb20gJy4vLi4vbGF5b3V0cy9sYXlvdXQtd3JhcHBlcic7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHN0b3JlLCBwZXJzaXN0b3IgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0J1xyXG5pbXBvcnQgeyByZXNldFNlcnZlckNvbnRleHQgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcclxuaW1wb3J0XCIuLy4uL3N0eWxlcy9zdGF0aWMtZW1wdHkuY3NzXCI7XHJcblxyXG5cclxuY29uc3QgX19QYWdlX05leHRfVHJhbnNsYXRlX18gPSBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8UGVyc2lzdEdhdGUgbG9hZGluZz17bnVsbH0gcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkZvb3RCZXQ8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiLy92ay5jb20vanMvYXBpL29wZW5hcGkuanM/MTUyXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxMYXlvdXRXcmFwcGVyIHsuLi5wYWdlUHJvcHN9PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvTGF5b3V0V3JhcHBlcj5cclxuICAgICAgPC9QZXJzaXN0R2F0ZT5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHJcbiAgcmVzZXRTZXJ2ZXJDb250ZXh0KClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7fSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfVxyXG59XG5cbiAgICBleHBvcnQgZGVmYXVsdCBfX2FwcFdpdGhJMThuKF9fUGFnZV9OZXh0X1RyYW5zbGF0ZV9fLCB7XG4gICAgICAuLi5fX2kxOG5Db25maWcsXG4gICAgICBpc0xvYWRlcjogdHJ1ZSxcbiAgICAgIHNraXBJbml0aWFsUHJvcHM6IHRydWUsXG4gICAgICBsb2FkTG9jYWxlRnJvbTogKGwsIG4pID0+IGltcG9ydChgQG5leHQtdHJhbnNsYXRlLXJvb3QvbG9jYWxlcy8ke2x9LyR7bn1gKS50aGVuKG0gPT4gbS5kZWZhdWx0KSxcbiAgICB9KTtcbiAgIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtYXRjaFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgICBtYXRjaElkOiBudWxsXHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzZXRNYXRjaElkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5tYXRjaElkID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0TWF0Y2hJZCB9ID0gbWF0Y2hTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWF0Y2hJZCA9IHN0YXRlID0+IHN0YXRlLm1hdGNoLm1hdGNoSWRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hdGNoU2xpY2UucmVkdWNlciIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgICB1c2VyOiBudWxsXHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBsb2dpbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dvdXQ6IHN0YXRlID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudXNlciA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHsgbG9naW4sIGxvZ291dCB9ID0gdXNlclNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyID0gc3RhdGUgPT4gc3RhdGUudXNlci51c2VyXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlciIsIi8vIGltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcblxyXG4vLyBleHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSgvKnJlZHVjZXIgZnVuY3Rpb24qLyhzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbi8vICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwibG9naW5cIikge1xyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgICAgICBjdXJyZW50VXNlcjoge1xyXG4vLyAgICAgICAgICAgICAgICAgbmFtZTogYWN0aW9uLnBheWxvYWQubmFtZVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHN0YXRlXHJcbi8vIH0sIHtcclxuLy8gICAgIGN1cnJlbnRVc2VyOiB7XHJcbi8vICAgICAgICAgbmFtZTogJ0VyaWsgTXVyYWR5YW4nXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gXCIuL2ZlYXR1cmVzL3VzZXJTbGljZVwiO1xyXG5pbXBvcnQgbWF0Y2hSZWR1Y2VyIGZyb20gXCIuL2ZlYXR1cmVzL21hdGNoU2xpY2VcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBwZXJzaXN0U3RvcmUsXHJcbiAgICBwZXJzaXN0UmVkdWNlcixcclxuICAgIEZMVVNILFxyXG4gICAgUkVIWURSQVRFLFxyXG4gICAgUEFVU0UsXHJcbiAgICBQRVJTSVNULFxyXG4gICAgUFVSR0UsXHJcbiAgICBSRUdJU1RFUixcclxuICB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbiAgXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnXHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5OiAncm9vdCcsXHJcbiAgICB2ZXJzaW9uOiAxLFxyXG4gICAgc3RvcmFnZSxcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIGNvbWJpbmVSZWR1Y2Vycygge1xyXG4gICAgdXNlcjogdXNlclJlZHVjZXIsXHJcbiAgICBtYXRjaDogbWF0Y2hSZWR1Y2VyXHJcbn0gKSApXHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxyXG4gICAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XHJcbiAgICAgICAgc2VyaWFsaXphYmxlQ2hlY2s6IHtcclxuICAgICAgICAgIGlnbm9yZWRBY3Rpb25zOiBbRkxVU0gsIFJFSFlEUkFURSwgUEFVU0UsIFBFUlNJU1QsIFBVUkdFLCBSRUdJU1RFUl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbn0pXHJcbiAgXHJcbmV4cG9ydCBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpXHJcblxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2NvbW1vbi9waG9uZS4zMDIxNjAxOTE5ODBjZjNmZWJiMWVhNGVmNDQ1MTk0Yi5wbmdcIixcImhlaWdodFwiOjE2LFwid2lkdGhcIjoxNixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBNTBsRVFWUjQybVA0Ly84L3c5ZjNIMWcrdjNzdi9PZjNiM0VnWC9Edm56OEMzejkvWVFISk1YeDUreDdFRUFKaWJpQVd1Ynh1cHhhUUZnVmlZWkFpQmlDRDkrNytrNnBMTktLbTdtMmU3TFJDTTc1NlExQnhIRkJjN04vZnY0SWdCZnpISnkweG5zdmc4bjlYWlkvSGtiYlo1cXVNa3d1dmI5Mm5EaktaNGNmWHJ4SWc0NWVZUk05YmFoWTdkMC9ESk5kOXpWTWNRVmI4L3ZWTG5PSG50KytDSUR2ZjMzc2l2ZFEwWnQ1Y0J0Zi9TN1NpcGdMRmVENi9meThNc29MNTEvY2ZZaUJGSU1HVFU1WWFQVDUxU1Fuc3lJK2Z3WTRFS3dLWkJMV09INGo1dm4zNENQWW1BR3pscTF3RVNIV0dBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9jb21tb24vdHJpYW5nbGUuNTRiYTM5NWIxNDdkNmQxZDEzMmE4OTZhMGZjZjU4MDcucG5nXCIsXCJoZWlnaHRcIjo3LFwid2lkdGhcIjoxMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBaEVsRVFWUjQyazNMc1kwQ1FBeEUwZEZlZkFHaUFVUWhoRlJBVEJHQWhFUUw5RUFuOUVCS1NnMGsyR012UDJTbHA3SHNIVlhWMnZZbDdRTjVNcGlQNUpuYlN0Rzl6TzZIdTJmaUorL1YvYStvRXJaWkZTeVRuSGhINWtiaXpUa0hDK0ZtanFhTkszdGhpUGJvYm1IQjRjWEg1eWRpR1JIQ1VOckNuMG5zbVBkRkFVT1N2c1BxbXdMRXlMcVNBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9jb21tb24vdXNlckRlZmF1bHQuMDgxNGMyNGIyMzkxMzhhODE3NWZhZGQyNTU0Mjc4YTAucG5nXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXIwbEVRVlI0MmpXTU1RckNVQkJFOXhLQ1dIZ0VDOEhDazJnYVBWSUNTaUNnaFZXaXR0WW1wZGdrMm1uaEZRUWxKQnJkelF3a0MrLy9ZV1lZTVROUjFUSCtEUHhBQmM3d2hzd1lqa0JodVBpWWFCd25TZzN2QlFZc25HZ1VSZmtWRVFQVW42YVVzRkJSQTNQZGhYcmVrcnBkZVVzN0h3UXJuVTVtNmpoejlmMkFCZDVUOEJ6eVBPZDBDZjZFbWg1dXowSWZLNDgwdlZnVTdTd010NVpsVjg3ZmtIVlpJRDJ3QWZlR05laVltZFJRQU5FVCtHcG1jQUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvZm9vdGVyL2xlZnRCYWxsLjlkOTEzNDU4ZTYxMDY5M2RjY2U3ZDliMTkxNzU1ZWYyLnBuZ1wiLFwiaGVpZ2h0XCI6MzU4LFwid2lkdGhcIjo0NTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQVkwbEVRVlI0Mm1NZ0NOYXZXNmY2NGYxSEtad0t2bno1RXYvLy8vLzQrL2NldUFPNTdCZ0tmdjM4R1E1VUVQYnk1YXZFbE5RME93d0ZnWDVlRVd0V3I0NzQrL2RmNU9YTDEwTjl3N013VElsb2FXNktlUGYyZmRTcDB4ZUM2bG9tb1NnQUFBaDZMajkrSXBnbkFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9tYXN0ZXJDYXJkLjI5NDkzZDUyMmQwZTg1NGVmYzlmMTAyYWQ4ZjBhODdmLnBuZ1wiLFwiaGVpZ2h0XCI6NDIsXCJ3aWR0aFwiOjY5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRkNBWUFBQUI0a2ExVkFBQUFvRWxFUVZSNG5CV09QUXJDUUJnRjUwdU1xS1JSakNLWXdscnN4SjlHdXlBZVFPeTltSTJCZUFDUElJaGdFZFFUNkFGTUlDQWJkbDJMOTZhWVprVERFRWlnWjFtZWlBdHcxUnFDQitxOUZUMWJwR1Q1aUdlcVdiVWNvaVlNZkMzZm0yTzg4VjEwbkJpQ2ppTC9WS2k3Q25La3J6elQ2SmFTdlR6UnkraE12VGFuV29PMjlaTU1RaC9STHNZVTEzOURhQnYyd05UdXlNRyt3OGFLaXluWS9RRGtYRFZxRTB5a0p3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9mb290ZXIvdmlzYS41NmU5Zjg1MTQ1N2FmODM2MDUxODZhMzk0NDg0ZTExZC5wbmdcIixcImhlaWdodFwiOjMxLFwid2lkdGhcIjoxMDQsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFDQ0FZQUFBQmxsSjN0QUFBQVJVbEVRVlI0bkdNODJKMGQvdUNUaUgzOFJkVy9NbHkvZnozNXh5RE93TUN3SDRqVmdGaVZrWUhoQ1J0RDZKNjlZc3ovVjd6Nnh5akN3UEQvTDFCQ0g0ai9BREVQQURENkZVNGpZUVdtQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2Nsb3NlVmVjdG9yLmQxZmFhZGE3YzVkY2U3YzhmMWZiZDFmZmRlNmM5OWQ5LnBuZ1wiLFwiaGVpZ2h0XCI6MTMsXCJ3aWR0aFwiOjEzLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFRVWxFUVZSNDJtV053UTBBSVF6RDB2MEhPWWtCeWtxd2hJL2tpVkErcnFzMll0RVVjc3EweE9SbkVERk1Nejd3T1ZtVWNESkVobC94bnZUMXRNVythdmNCWlJGZldaWEtvdDBBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2VtYWlsLjI5ODZkMGM0YmI2NWZlM2ExZjU4YjZjOWJiZTE1OTdhLnN2Z1wiLFwiaGVpZ2h0XCI6MjAsXCJ3aWR0aFwiOjI1fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2ZhY2Vib29rLjg1ZjUyNGUzMmFkMzc3ZTc0MjRhNWQ4NzEyYTY2NjRhLnN2Z1wiLFwiaGVpZ2h0XCI6MzQsXCJ3aWR0aFwiOjI4fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2luc3RhZ3JhbS5mNWZmZDIwMDU1YWViOGJlMmUyYTZhNjZlNzU3Mjc0ZS5zdmdcIixcImhlaWdodFwiOjMwLFwid2lkdGhcIjozMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9waG9uZS41NWVlODgxOWUyNTQwOTNhYTMzZmRiNDc4MmIzNWNkNC5zdmdcIixcImhlaWdodFwiOjI1LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS90ZWxlZ3JhbS5hZmY5ZTNkOTVkNzRmZjYxMTI5MjdhY2YxNjQwZTZhMy5zdmdcIixcImhlaWdodFwiOjM3LFwid2lkdGhcIjoyOX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS92aWJlci45MmQxMThjMjY3NjBmNzk2ZGMzMjc4MTQ3MjUxZGZmZS5zdmdcIixcImhlaWdodFwiOjM5LFwid2lkdGhcIjozMH07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS93YXRzdXAuZTVjMWQwNDY4ZWNiNGM4MDczMWE2N2U0NjFlMTkyNTMuc3ZnXCIsXCJoZWlnaHRcIjozNyxcIndpZHRoXCI6Mjl9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZHJvcGRvd25fbGluZXMuMzAyNjA5NGIxNDQ5ZTE0MjA4MzliODljZWE4NTVlMTkucG5nXCIsXCJoZWlnaHRcIjoxNyxcIndpZHRoXCI6MjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFGQ0FRQUFBRFNtR1hlQUFBQU8wbEVRVlI0MmwzR3NRbUFNQkFBd0M5c2RDQkI1eFBVd21CaW84c2V3cGZobWd1WHBxYmJhd21kVUR4YXFqNXJHRTFTYmdpYjA1RjJ4ZndEeVVzMFYvVjBjNlVBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2FybS45NGZkZmE5YTYyMTQzOGM1NzE1M2FjMDdiMDc5YzQxMi5zdmdcIixcImhlaWdodFwiOjIxLFwid2lkdGhcIjoyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9kZXUuZGI5MTkzNmMyMDlkOGUwZDQxODEwZWFjMzE0MjhiOGQuc3ZnXCIsXCJoZWlnaHRcIjoyMSxcIndpZHRoXCI6MjF9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZW4uMWM4NTYzMGRmNDE0NzE3MDgxZWE4NjU3ZWVjYTdlMmMuc3ZnXCIsXCJoZWlnaHRcIjoyMSxcIndpZHRoXCI6MjF9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZXNwLjQzNzg4ZDU3NTE0NzA2ZGU5ZWE0MmM0MjRjYjg3OTJmLnN2Z1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjIxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2ZyYy5jMzJiMzkxMzE3ZmIwMzcxODM1NWRkOGE2ODRmNTU0MS5zdmdcIixcImhlaWdodFwiOjIxLFwid2lkdGhcIjoyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9ydXMuNmViNGNiMTRjNjcyNzA5NGZmYmRjNzA2ZjUxMzYwYTAucG5nXCIsXCJoZWlnaHRcIjoyMixcIndpZHRoXCI6MjEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXVVbEVRVlI0MmszSlR3cUNVQmdFOExsTVpla3ExeFhVblNMQ0FvOVJnZnV3alVFVUtHNDhnSkQweHh0b081SFFoL0plM3djdUd2akJNQU5PV1ZaRzA3UlIyN1lWRWRUOW92aHE0Q2lsREpJVGp1eHdNcUxCOWU3aHhYOHA3L29RNTl0VE11NjgwUmNBY0FTd2s4QkJBWHRKdUJQZW5CcVlIbXNzVGhKejk1L2lqVDZCcFdrSDluaXRMSE1qdG1OTE11NjhyVXc3eEtlUFlUcEU5aDVCcFNOSTF2VTg3OE1BSjlabldxSVAvRVR2Q1ZKVGoySmp3aWQrdENDU2NBSkNOOWdBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2Zvb3RiYWxsZXIuNzUwNWRiNmZmMjMzNDA4MmU2NWY1N2IxNTUwNDY5MWMuc3ZnXCIsXCJoZWlnaHRcIjo2MDAsXCJ3aWR0aFwiOjY2Mn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi4yYjkwZjRmMjFjODMwZGMzODUxY2IzZmMzZjE2MThiMy5wbmdcIixcImhlaWdodFwiOjIxLFwid2lkdGhcIjoxOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVFBQUFDZkRTMk5BQUFBWjBsRVFWUjQyalhOS3dvQ0FSaEY0ZXNERVRmZ0Rtd0dtellYWUxFcEdoVEdaRFVKRnBQWkJaak5Mc0psZlF4L0dHNDYzQU1uZXVMbTd1ZnZFN1dGZ2F2WUZXeXRqRnpFdVhEb2Era29Ub1ViQjJOTjkwNDBaa3JlUjErc3ZUMU52U0lxVmJHSGVRdEV1a1JkckxuYjhRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZmFjZWJvb2suNTAxOTMyMjBjNzA1MTY3YzBlODUyNDk4MjkwOGE0ZWUuc3ZnXCIsXCJoZWlnaHRcIjo3NixcIndpZHRoXCI6NzZ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZ21haWwuYjc4YjMzNWQ3YjcxZWM1YjNiOTAzMzA2NTQxMmEwZjguc3ZnXCIsXCJoZWlnaHRcIjo3NixcIndpZHRoXCI6NzZ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vc3VjY2Vzcy5iMmY2MzlmNjk3MTkzMWI5ZDQ5MzljNTkxMTllNzg1OS5wbmdcIixcImhlaWdodFwiOjEzMixcIndpZHRoXCI6MTQxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUE4a2xFUVZSNG5BSG5BQmovQVJtK0xnQUpBUVkrN3YvMmpnVUFBaS9yL3RUK1lndHExWDBZZGVIa0lkeFlBUmErTFVycS91UzFCZ0VVQUJvQkRmL2cvYzRCcVJpdEFQZmo5UUJnOEY1VEFRQzlIdUZIQ0RVZTFmdmYrK1Q2emdWcEVISC9YUUJYL1dYaGNBVFZGdDdnQVFDNkFQK2lENmI5QkFnRUExcnFWdis2R2IwQTFOdlVBWElMYi80ZkJERUNBUUMvR3VBMzd5Z2ZpUmVBKy9JVjlBUUg1d1FBUit4ay9BNFRDd1VBL1FEZ0FUSy9QMGZPLzhHMld2SmhBbklVYXdDazZLZ0FrQkdNQUJzQkwvN3QvL2hKQVNuQ053QUUvd1E2MC92TmpUTG5OekRURStjQUNRb0QwUGY4L1hNQ0FRSEdOREJsT1BnK1dDVUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vdHdpdHRlci4zNzJmNmY2OGFjNDZhMGI1YTJjYmYxMDZmNjA4ZTRjMi5zdmdcIixcImhlaWdodFwiOjc2LFwid2lkdGhcIjo3Nn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi92ay5mOWEzMjFkM2RiNWRlM2E3MDY0ODNkNzMwOTU4MjMzMC5zdmdcIixcImhlaWdodFwiOjc2LFwid2lkdGhcIjo3Nn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dvLjZjZGY5MWZhZjNjYTEyYTA3NmM1Zjk2MjgxNDVmYzA0LnN2Z1wiLFwiaGVpZ2h0XCI6MjIxLFwid2lkdGhcIjoyMjF9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvcmVnaXN0ZXIuNDc0MDNiOTk4Y2UyYzUzNjE3YmZiNDZkYmY5MTRiZGEucG5nXCIsXCJoZWlnaHRcIjoyMyxcIndpZHRoXCI6MjMsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWJVbEVRVlI0MmczRVFRdkJBQmlBNFU4aUoyZVhIYlNUYklvYUtRZHByU3duczZ3NE9QZ0JEdTcrK1pQMTlMNGhwRjRxRTZFWE9qK0Z0NitsTUFobkd3ODNtVklZaHRwQmF5ZDFsSWh3NlRVV2ZibmFOcHlNalpReUg3azJQTzBWR211VmxYdVlTc3o2WDFVNjh6OWh2VXpQTkM3N1JnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9wZXJzb25hbC9iYWxsLjdhNDIxNzg2MGUzYjBiZTY0NGEyYzA1MzRkZjZlNjRkLnBuZ1wiLFwiaGVpZ2h0XCI6ODgyLFwid2lkdGhcIjo5NTAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQWtFbEVRVlI0Mm1QQUJsYXZXTVlFcEZpU0VwT1lNU1Rmdlg3Szl2bnpKNjZiTjI5eVBYLytnZ3RGc2pnM2ovWEQ2OGZjLy8vLzU0UmhGQVd6WjB6bCtQVDJKZGZ4WTRjNFUxT1R1QllzbUkrcTRPQytYUnd2bmo3a1dyMXlPVWlDcTd5c0ZGWEI1SW45TEZzM3JlTTZlK280NTk3ZHV6alBuejNIaGU1R3hnQi9QL2FKL2IxY2ExZXY1RnkyZEJrbkFGY25QM2V1c3Z0Y0FBQUFBRWxGVGtTdVFtQ0NcIn07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQmFsbF9jb250YWluZXJfXzJXbDFkXCIsXG5cdFwiYmFsbFwiOiBcIkJhbGxfYmFsbF9fMVNLbE1cIixcblx0XCJ0ZXh0X3dpdGhfYmFsbFwiOiBcIkJhbGxfdGV4dF93aXRoX2JhbGxfXzdscEhVXCIsXG5cdFwidG9wXCI6IFwiQmFsbF90b3BfX1FONTZHXCIsXG5cdFwiYm90dG9tXCI6IFwiQmFsbF9ib3R0b21fXzJrNHE0XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJGb290ZXJfY29udGFpbmVyX19sMkQ0Z1wiLFxuXHRcImNvbnRlbnRcIjogXCJGb290ZXJfY29udGVudF9fMWJwdTZcIixcblx0XCJiYWxsXCI6IFwiRm9vdGVyX2JhbGxfXzJTbDNuXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMaXN0X2NvbnRhaW5lcl9fMVRwblZcIixcblx0XCJib3JkZXJzXCI6IFwiTGlzdF9ib3JkZXJzX18xUm16YlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTmF2aWdhdGlvbl9jb250YWluZXJfXzFzM25HXCIsXG5cdFwiY29udGVudFwiOiBcIk5hdmlnYXRpb25fY29udGVudF9fM05NNEFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBTX2NvbnRhaW5lcl9fczRsMTNcIixcblx0XCJpY29uc1wiOiBcIlBTX2ljb25zX19feEhiYVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU01fY29udGFpbmVyX18yTHZEc1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU29jaWFsTWVkaWFfY29udGFpbmVyX18xVGlkaFwiLFxuXHRcImNvbnRlbnRcIjogXCJTb2NpYWxNZWRpYV9jb250ZW50X18xSzZ0bFwiLFxuXHRcImNvbnRyb2xlclwiOiBcIlNvY2lhbE1lZGlhX2NvbnRyb2xlcl9fa2hTVVFcIixcblx0XCJzb2NpYWxfbWVkaWFzXCI6IFwiU29jaWFsTWVkaWFfc29jaWFsX21lZGlhc19fVUV1Q3NcIixcblx0XCJwYXltZW50X3N5c3RlbXNcIjogXCJTb2NpYWxNZWRpYV9wYXltZW50X3N5c3RlbXNfXzFXU0Y1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJJY29uX2NvbnRhaW5lcl9fMlhMY3RcIixcblx0XCJsYXN0X2VsZW1lbnRcIjogXCJJY29uX2xhc3RfZWxlbWVudF9fMUxoOFNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhcl9jb250YWluZXJcIjogXCJCYXJfYmFyX2NvbnRhaW5lcl9fMzduRDlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhcl9pdGVtX2NvbnRhaW5lclwiOiBcIkJhckl0ZW1zX2Jhcl9pdGVtX2NvbnRhaW5lcl9fMWJuT2VcIixcblx0XCJhdXRoX2NvbnRhaW5lclwiOiBcIkJhckl0ZW1zX2F1dGhfY29udGFpbmVyX18yXzVTNVwiLFxuXHRcImF1dGhfYnV0dG9uc1wiOiBcIkJhckl0ZW1zX2F1dGhfYnV0dG9uc19fMlNocFVcIixcblx0XCJzaWduX3VwX2J1dHRvblwiOiBcIkJhckl0ZW1zX3NpZ25fdXBfYnV0dG9uX18zXzJNNVwiLFxuXHRcInNpZ25faW5fYnV0dG9uXCI6IFwiQmFySXRlbXNfc2lnbl9pbl9idXR0b25fXzNYLTZfXCIsXG5cdFwibGFuZ19idXR0b25cIjogXCJCYXJJdGVtc19sYW5nX2J1dHRvbl9fOGptX2dcIixcblx0XCJsYW5nX2J1dHRvbl9jb250ZW50XCI6IFwiQmFySXRlbXNfbGFuZ19idXR0b25fY29udGVudF9fM3V5Nm5cIixcblx0XCJmb3JfbW9iaWxlXCI6IFwiQmFySXRlbXNfZm9yX21vYmlsZV9fMXZPQ2lcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxhbmd1YWdlRHJvcF9jb250YWluZXJfXzI2WVVNXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIkxhbmd1YWdlRHJvcF90cmFuc2l0aW9uX18zMGNQLVwiLFxuXHRcImNvbnRlbnRcIjogXCJMYW5ndWFnZURyb3BfY29udGVudF9fMlY2bkZcIixcblx0XCJyb3dcIjogXCJMYW5ndWFnZURyb3Bfcm93X18xNkY2X1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTG9nZ2VkX2NvbnRhaW5lcl9feGxlUE1cIixcblx0XCJjb250ZW50XCI6IFwiTG9nZ2VkX2NvbnRlbnRfXzNjRTNPXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb2dnZWREcm9wX2NvbnRhaW5lcl9fMlE2TFBcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiTG9nZ2VkRHJvcF90cmFuc2l0aW9uX19RZzQ4aVwiLFxuXHRcImNvbnRlbnRcIjogXCJMb2dnZWREcm9wX2NvbnRlbnRfX0VEdGJxXCIsXG5cdFwidXNlcl9waG90b19uYW1lXCI6IFwiTG9nZ2VkRHJvcF91c2VyX3Bob3RvX25hbWVfXzE5Z2lhXCIsXG5cdFwidXNlcl90ZWxcIjogXCJMb2dnZWREcm9wX3VzZXJfdGVsX18xM0NBRlwiLFxuXHRcImxvZ091dFwiOiBcIkxvZ2dlZERyb3BfbG9nT3V0X18zZUQteVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTG9nZ2VkV2FsbHBlcl9jb250YWluZXJfXzJvUk1WXCIsXG5cdFwiY29udGVudFwiOiBcIkxvZ2dlZFdhbGxwZXJfY29udGVudF9fMk0xcVRcIixcblx0XCJ1c2VyX3Bob3RvXCI6IFwiTG9nZ2VkV2FsbHBlcl91c2VyX3Bob3RvX18xbXN6cFwiLFxuXHRcInVzZXJfZnVsbE5hbWVcIjogXCJMb2dnZWRXYWxscGVyX3VzZXJfZnVsbE5hbWVfXzJXdnBGXCIsXG5cdFwiZnVsbG5hbWVcIjogXCJMb2dnZWRXYWxscGVyX2Z1bGxuYW1lX18xR2oyNVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZHJvcGRvd25cIjogXCJEcm9wZG93bl9kcm9wZG93bl9fM0FCY3FcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiRHJvcGRvd25fdHJhbnNpdGlvbl9fMWZ6Yk9cIixcblx0XCJkcm9wZG93bl9tZW51XCI6IFwiRHJvcGRvd25fZHJvcGRvd25fbWVudV9fMVVtWTdcIixcblx0XCJkcm9wZG93bl9saXN0XCI6IFwiRHJvcGRvd25fZHJvcGRvd25fbGlzdF9fMmJHMllcIixcblx0XCJkcm9wZG93bl9saXN0X2l0ZW1zXCI6IFwiRHJvcGRvd25fZHJvcGRvd25fbGlzdF9pdGVtc19fMnZfdldcIixcblx0XCJkcm9wZG93bl9jaGVja1wiOiBcIkRyb3Bkb3duX2Ryb3Bkb3duX2NoZWNrX18zMHdPblwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibV9jb250YWluZXJcIjogXCJMb2dpbl9tX2NvbnRhaW5lcl9fMk5LUFZcIixcblx0XCJtX2NvbnRlbnRcIjogXCJMb2dpbl9tX2NvbnRlbnRfXzFrOGM2XCIsXG5cdFwibG9naW5fY29udGFpbmVyXCI6IFwiTG9naW5fbG9naW5fY29udGFpbmVyX19qX0wtVFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTG9naW5Gb3JtX2NvbnRhaW5lcl9fR2FpRnZcIixcblx0XCJ0aXRsZVwiOiBcIkxvZ2luRm9ybV90aXRsZV9fM2ZtalRcIixcblx0XCJpbnB1dHNcIjogXCJMb2dpbkZvcm1faW5wdXRzX18zQzE0eFwiLFxuXHRcInJlc2V0X3Bhc3N3b3JkXCI6IFwiTG9naW5Gb3JtX3Jlc2V0X3Bhc3N3b3JkX19EcDJfRlwiLFxuXHRcInN1Ym1pdFwiOiBcIkxvZ2luRm9ybV9zdWJtaXRfXzNmSDhJXCIsXG5cdFwidG9fcmVnaXN0ZXJfY29udGFpbmVyXCI6IFwiTG9naW5Gb3JtX3RvX3JlZ2lzdGVyX2NvbnRhaW5lcl9fM3pacXBcIixcblx0XCJ0b19yZWdpc3Rlcl9jb250ZW50XCI6IFwiTG9naW5Gb3JtX3RvX3JlZ2lzdGVyX2NvbnRlbnRfXzFDRnhhXCIsXG5cdFwidG9fcmVnaXN0ZXJfdGV4dFwiOiBcIkxvZ2luRm9ybV90b19yZWdpc3Rlcl90ZXh0X18xcDA5N1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibV9jb250YWluZXJcIjogXCJGb3Jnb3RQYXNzd29yZF9tX2NvbnRhaW5lcl9fMkJEU2VcIixcblx0XCJtX2NvbnRlbnRcIjogXCJGb3Jnb3RQYXNzd29yZF9tX2NvbnRlbnRfXzJrSC00XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRm9yZ290UGFzc3dvcmRfY29udGFpbmVyX18yak50R1wiLFxuXHRcInRpdGxlXCI6IFwiRm9yZ290UGFzc3dvcmRfdGl0bGVfXzFJaDhXXCIsXG5cdFwiaW5wdXRzXCI6IFwiRm9yZ290UGFzc3dvcmRfaW5wdXRzX18xOWxWdFwiLFxuXHRcInN1Ym1pdFwiOiBcIkZvcmdvdFBhc3N3b3JkX3N1Ym1pdF9fcXpweXJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1fY29udGFpbmVyXCI6IFwiR2V0RW1haWxDb2RlX21fY29udGFpbmVyX19fcUZGLVwiLFxuXHRcIm1fY29udGVudFwiOiBcIkdldEVtYWlsQ29kZV9tX2NvbnRlbnRfX3JkQWQ5XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiR2V0RW1haWxDb2RlX2NvbnRhaW5lcl9fM3RzSGRcIixcblx0XCJ0aXRsZVwiOiBcIkdldEVtYWlsQ29kZV90aXRsZV9fMlpXRl9cIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkdldEVtYWlsQ29kZV9kZXNjcmlwdGlvbl9fM3llOFJcIixcblx0XCJpbnB1dHNcIjogXCJHZXRFbWFpbENvZGVfaW5wdXRzX18yczM2OVwiLFxuXHRcImVycm9yX2lucHV0XCI6IFwiR2V0RW1haWxDb2RlX2Vycm9yX2lucHV0X19SdF8xZFwiLFxuXHRcInN1Y2Nlc3NfaW5wdXRcIjogXCJHZXRFbWFpbENvZGVfc3VjY2Vzc19pbnB1dF9fMnBwVHFcIixcblx0XCJzdWJtaXRcIjogXCJHZXRFbWFpbENvZGVfc3VibWl0X18yR1JRSVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibV9jb250YWluZXJcIjogXCJOZXdQYXNzd29yZF9tX2NvbnRhaW5lcl9fMUlXSFRcIixcblx0XCJtX2NvbnRlbnRcIjogXCJOZXdQYXNzd29yZF9tX2NvbnRlbnRfXzJNQmp5XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiTmV3UGFzc3dvcmRfY29udGFpbmVyX18zc3lRalwiLFxuXHRcInRpdGxlXCI6IFwiTmV3UGFzc3dvcmRfdGl0bGVfXzFxVlpuXCIsXG5cdFwiaW5wdXRzXCI6IFwiTmV3UGFzc3dvcmRfaW5wdXRzX18zVnowa1wiLFxuXHRcInN1Ym1pdFwiOiBcIk5ld1Bhc3N3b3JkX3N1Ym1pdF9fM2tYME9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1fY29udGFpbmVyXCI6IFwiU3VjY2Vzc19tX2NvbnRhaW5lcl9fM1JMU2xcIixcblx0XCJtX2NvbnRlbnRcIjogXCJTdWNjZXNzX21fY29udGVudF9fem5ha2tcIixcblx0XCJjb250YWluZXJcIjogXCJTdWNjZXNzX2NvbnRhaW5lcl9fa2dwcGtcIixcblx0XCJ0aXRsZVwiOiBcIlN1Y2Nlc3NfdGl0bGVfXzNQR1ZQXCIsXG5cdFwiaWNvbl9jb250YWluZXJcIjogXCJTdWNjZXNzX2ljb25fY29udGFpbmVyX18zd1BCVlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVpbmVyXCI6IFwiU29jaWFsTWVkaWFJY29uc19jb250ZWluZXJfXzIyeUxfXCIsXG5cdFwiY29udGVudFwiOiBcIlNvY2lhbE1lZGlhSWNvbnNfY29udGVudF9fUF8tNkdcIixcblx0XCJpY29uQ29udGVudFwiOiBcIlNvY2lhbE1lZGlhSWNvbnNfaWNvbkNvbnRlbnRfXzJmMEtMXCIsXG5cdFwiaWNvbkJvZHlcIjogXCJTb2NpYWxNZWRpYUljb25zX2ljb25Cb2R5X19MV2xMRFwiLFxuXHRcImljb25cIjogXCJTb2NpYWxNZWRpYUljb25zX2ljb25fXzFMVW5pXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dvX2NvbmF0aW5lclwiOiBcIkxvZ29fbG9nb19jb25hdGluZXJfXzFidU11XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJfY29udGFpbmVyX2JpZ1wiOiBcIkhlYWRlcl9oZWFkZXJfY29udGFpbmVyX2JpZ19fMUJoeVZcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiSGVhZGVyX3RyYW5zaXRpb25fXzJoUllvXCIsXG5cdFwiYmFyXCI6IFwiSGVhZGVyX2Jhcl9fQ19nWDNcIixcblx0XCJiYXJfY29udHJvbGVyXCI6IFwiSGVhZGVyX2Jhcl9jb250cm9sZXJfXzNSZ19pXCIsXG5cdFwiYmFyX2NvbnRlaW5lclwiOiBcIkhlYWRlcl9iYXJfY29udGVpbmVyX19qZzkwMFwiLFxuXHRcImJhcl9jb250ZW50XCI6IFwiSGVhZGVyX2Jhcl9jb250ZW50X18xTjB5Q1wiLFxuXHRcImJhcl9pdGVtc19jb250XCI6IFwiSGVhZGVyX2Jhcl9pdGVtc19jb250X18xU2N3elwiLFxuXHRcImJhcl9pdGVtc1wiOiBcIkhlYWRlcl9iYXJfaXRlbXNfX0d2c1Z3XCIsXG5cdFwiZm9vdGJhbGxlclwiOiBcIkhlYWRlcl9mb290YmFsbGVyX18zU0lONlwiLFxuXHRcImhlYWRlcl9jb250YWluZXJfc21hbGxcIjogXCJIZWFkZXJfaGVhZGVyX2NvbnRhaW5lcl9zbWFsbF9fMzc5VmtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkJ1dHRvbl9jb250YWluZXJfXzExenNYXCIsXG5cdFwiY29udGVudFwiOiBcIkJ1dHRvbl9jb250ZW50X192aUNTV1wiLFxuXHRcImFjdGl2ZVwiOiBcIkJ1dHRvbl9hY3RpdmVfXzJxR01XXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJOYXZCYXJfY29udGFpbmVyX18xcUo3WVwiLFxuXHRcImNvbnRlbnRcIjogXCJOYXZCYXJfY29udGVudF9fMUdRSmRcIixcblx0XCJ0b3Bfb25fdGFibGV0XCI6IFwiTmF2QmFyX3RvcF9vbl90YWJsZXRfXzNFSDM5XCIsXG5cdFwiYm90dG9tX29uX3RhYmxldFwiOiBcIk5hdkJhcl9ib3R0b21fb25fdGFibGV0X19leXo5SVwiLFxuXHRcInRhYmxldFwiOiBcIk5hdkJhcl90YWJsZXRfXzNMUE1tXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJJY29uX2NvbnRhaW5lcl9fMzROZjlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNvY2lhbE1lZGlhTW9kYWxfY29udGFpbmVyX18zZnNYa1wiLFxuXHRcImNvbnRlbnRcIjogXCJTb2NpYWxNZWRpYU1vZGFsX2NvbnRlbnRfXzE3RktFXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTb2NpYWxNZWRpYV9jb250YWluZXJfXzEteVlvXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDb250YWN0c19jb250YWluZXJfXzJpdDBWXCIsXG5cdFwiY29udGVudFwiOiBcIkNvbnRhY3RzX2NvbnRlbnRfXzJmZHJrXCIsXG5cdFwibW9kYWxfY29udGVudFwiOiBcIkNvbnRhY3RzX21vZGFsX2NvbnRlbnRfXzJWZV92XCIsXG5cdFwiY29udGVudF9jb250YWluZXJcIjogXCJDb250YWN0c19jb250ZW50X2NvbnRhaW5lcl9fMjBjb0FcIixcblx0XCJ0b3BcIjogXCJDb250YWN0c190b3BfXzJnVHpTXCIsXG5cdFwicm93c1wiOiBcIkNvbnRhY3RzX3Jvd3NfXzNaaEVUXCIsXG5cdFwicm93XCI6IFwiQ29udGFjdHNfcm93X19BaVpLalwiLFxuXHRcImltZ1wiOiBcIkNvbnRhY3RzX2ltZ19fZHZYLWFcIixcblx0XCJ0ZXh0XCI6IFwiQ29udGFjdHNfdGV4dF9fMkQ5cWNcIixcblx0XCJvcGVuXCI6IFwiQ29udGFjdHNfb3Blbl9fM0NISl9cIixcblx0XCJyaWdodExlZnRcIjogXCJDb250YWN0c19yaWdodExlZnRfXzJybGI4XCIsXG5cdFwiY2xvc2VcIjogXCJDb250YWN0c19jbG9zZV9fVmk3ZzdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIklucHV0Q29udGFpbmVyX2NvbnRhaW5lcl9fMUt6dlNcIixcblx0XCJsYWJlbF9jb250ZW50XCI6IFwiSW5wdXRDb250YWluZXJfbGFiZWxfY29udGVudF9fMl95QVFcIixcblx0XCJpbnB1dF9jb250YWluZXJcIjogXCJJbnB1dENvbnRhaW5lcl9pbnB1dF9jb250YWluZXJfXzFiVFJKXCIsXG5cdFwiaW5wdXRfc3VjY2Vzc19jb250ZW50XCI6IFwiSW5wdXRDb250YWluZXJfaW5wdXRfc3VjY2Vzc19jb250ZW50X18xeU9aRFwiLFxuXHRcImlucHV0X2Vycm9yX2NvbnRlbnRcIjogXCJJbnB1dENvbnRhaW5lcl9pbnB1dF9lcnJvcl9jb250ZW50X18zLVcyV1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW9kYWxDb250ZWluZXJcIjogXCJNb2RhbF9tb2RhbENvbnRlaW5lcl9fM2c4SWZcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiTW9kYWxfdHJhbnNpdGlvbl9fMWtmdjlcIixcblx0XCJtb2RhbENvbnRlbnRcIjogXCJNb2RhbF9tb2RhbENvbnRlbnRfXzEtTzQ3XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL2FwcFdpdGhJMThuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1mYWNlYm9vay1sb2dpblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLWxvZ2luXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXR3aXR0ZXItbG9naW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9