(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./components/Pages/Main/Main.jsx":
/*!****************************************!*\
  !*** ./components/Pages/Main/Main.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Main; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Testimonials/Testimonials */ "./components/Pages/common/Testimonials/Testimonials.jsx");
/* harmony import */ var _Matches_Matches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Matches/Matches */ "./components/Pages/Main/Matches/Matches.jsx");
/* harmony import */ var _News_News__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./News/News */ "./components/Pages/Main/News/News.jsx");
/* harmony import */ var _Prediction_Prediction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Prediction/Prediction */ "./components/Pages/Main/Prediction/Prediction.jsx");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Main.jsx";
// components




function Main() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_News_News__WEBPACK_IMPORTED_MODULE_3__.News, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Matches_Matches__WEBPACK_IMPORTED_MODULE_2__.Matches, {
      gameRulesState: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Prediction_Prediction__WEBPACK_IMPORTED_MODULE_4__.Prediction, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_1__.Testimonials, {
      page: 'home',
      locationInPage: 'testimonials',
      textPathName: '.title'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/GameRules/Arrows/Arrow.jsx":
/*!******************************************************************!*\
  !*** ./components/Pages/Main/Matches/GameRules/Arrows/Arrow.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": function() { return /* binding */ Arrow; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/main/news/arrowRight.png */ "./public/images/main/news/arrowRight.png");
/* harmony import */ var _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/main/news/arrowLeft.png */ "./public/images/main/news/arrowLeft.png");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Arrow.module.scss */ "./components/Pages/Main/Matches/GameRules/Arrows/Arrow.module.scss");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\GameRules\\Arrows\\Arrow.jsx";
 // icons




function Arrow({
  type,
  onClick,
  isEdge
}) {
  const pointer = type === react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__.consts.PREV ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arrowLeft),
    alt: "arrow-left"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arrowRight),
    alt: "arrow-right"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }, this),
        styles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '35px' // padding: '10%'

  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onClick: onClick,
    disabled: isEdge,
    style: styles,
    children: pointer
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/GameRules/GameRules.jsx":
/*!***************************************************************!*\
  !*** ./components/Pages/Main/Matches/GameRules/GameRules.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameRules": function() { return /* binding */ GameRules; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Arrows/Arrow */ "./components/Pages/Main/Matches/GameRules/Arrows/Arrow.jsx");
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination/Pagination */ "./components/Pages/Main/Matches/GameRules/Pagination/Pagination.jsx");
/* harmony import */ var _GameRules_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameRules.module.scss */ "./components/Pages/Main/Matches/GameRules/GameRules.module.scss");
/* harmony import */ var _GameRules_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_GameRules_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _game_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game_rules */ "./components/Pages/Main/Matches/GameRules/game_rules.js");
/* harmony import */ var _SlidePage_SlidePages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SlidePage/SlidePages */ "./components/Pages/Main/Matches/GameRules/SlidePage/SlidePages.jsx");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\GameRules\\GameRules.jsx";
// components


 // styles




function GameRules() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_GameRules_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1___default()), {
      renderArrow: _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_2__.Arrow,
      renderPagination: _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_3__.Pagination,
      children: _game_rules__WEBPACK_IMPORTED_MODULE_4__.game_rules.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SlidePage_SlidePages__WEBPACK_IMPORTED_MODULE_5__.SlidePages, {
        pageData: el
      }, Math.random(), false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }, this))
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

/***/ "./components/Pages/Main/Matches/GameRules/Pagination/Pagination.jsx":
/*!***************************************************************************!*\
  !*** ./components/Pages/Main/Matches/GameRules/Pagination/Pagination.jsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagination": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.module.scss */ "./components/Pages/Main/Matches/GameRules/Pagination/Pagination.module.scss");
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\GameRules\\Pagination\\Pagination.jsx";

function Pagination({
  pages,
  activePage,
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
      children: pages.map(el => {
        const isActivePage = activePage === el;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: () => onClick(el),
          active: isActivePage ? 'true' : 'false',
          className: `${(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().round)} ${isActivePage && (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().active)}`
        }, el, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 29
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/GameRules/SlidePage/PagePareticles/PagePareticles.jsx":
/*!*********************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/GameRules/SlidePage/PagePareticles/PagePareticles.jsx ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageParticles": function() { return /* binding */ PageParticles; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageParticales_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageParticales.module.scss */ "./components/Pages/Main/Matches/GameRules/SlidePage/PagePareticles/PageParticales.module.scss");
/* harmony import */ var _PageParticales_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PageParticales_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\GameRules\\SlidePage\\PagePareticles\\PagePareticles.jsx";
// styles 

function PageParticles({
  title,
  body
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PageParticales_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_PageParticales_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_PageParticales_module_scss__WEBPACK_IMPORTED_MODULE_1___default().body),
      children: body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/GameRules/SlidePage/SlidePages.jsx":
/*!**************************************************************************!*\
  !*** ./components/Pages/Main/Matches/GameRules/SlidePage/SlidePages.jsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlidePages": function() { return /* binding */ SlidePages; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PagePareticles_PagePareticles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PagePareticles/PagePareticles */ "./components/Pages/Main/Matches/GameRules/SlidePage/PagePareticles/PagePareticles.jsx");
/* harmony import */ var _SlidePages_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlidePages.module.scss */ "./components/Pages/Main/Matches/GameRules/SlidePage/SlidePages.module.scss");
/* harmony import */ var _SlidePages_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SlidePages_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\GameRules\\SlidePage\\SlidePages.jsx";
 // styles 


function SlidePages({
  pageData
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_SlidePages_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: pageData.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PagePareticles_PagePareticles__WEBPACK_IMPORTED_MODULE_1__.PageParticles, {
      title: el.title,
      body: el.body
    }, Math.random(), false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/GameRules/game_rules.js":
/*!***************************************************************!*\
  !*** ./components/Pages/Main/Matches/GameRules/game_rules.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game_rules": function() { return /* binding */ game_rules; }
/* harmony export */ });
const game_rules = [// each array are page data 
[{
  title: 'Футбол: команда и запасные игроки.',
  body: 'В состав команды входят 11 человек: 1 вратарь и 10 полевых игроков, которые в свою очередь подразделяются на защитников, полузащитников и нападающих.В играх на очки и в кубковых играх на протяжении одного матча может быть произведена замена 2 игроков из каждой команды.Продолжительность матча мужских и молодежных команд(с 16 до 18 лет) составляет 90 мин. Матч состоит из двух таймов по 45 мин.После перерыва, минимальная продолжительность которого 5 мин, команды меняются воротами.Полевые игроки могут касаться мяча любой частью тела, кроме рук.За игру рукой команде назначается штрафной удар или 11-метровый удар, который выполняет игрок команды соперника.Если мяч пересекает лицевую линию или боковую линию, то он считается вышедшим из игры.Если мяч пересек боковую линию, то он считается вышедшим из игры.Если мяч пересек боковую линию после удара игроком одной команды, то производится вбрасывание мяча игроком команды соперника с места пересечения боковой линии.Вбрасывающий стоит лицом к полю, ногами на боковой линии или за ее пределами и вбрасывает мяч обеими руками из- за головы.Если от удара соперника мяч пересекает лицевую линию, то судья назначает удар от ворот, при котором удар по мячу производится из вратарской площадки.Если мяч после удара игроком пересекает лицевую линию его команды, то судья назначает угловой удар.Гол считается забитым, если мяч пересек линию ворот между боковыми стойками и под перекладиной ворот.Согласно правилам, существует два вида ударов: штрафной удар и свободный удар.Штрафной удар назначается за нечестную игру или за игру рукой.Свободный удар назначается за непреднамеренное нарушение правил или за неправильные игровые действия.При выполнении свободного удара гол будет засчитан в том случае, если мяча коснулся еще один игрок, кроме подающего.'
}, {
  title: ' Футбол: «Положение вне игры».',
  body: 'Правило «вне игры» запрещает игрокам атакующей команды находиться к линии ворот соперника ближе, чем защитники соперника.Если в момент передачи мяча между игроком и линией ворот соперника находится менее двух игроков команды соперника, включая вратаря, то такой игрок будет в положении «вне игры». При положении «вне игры» назначается свободный удар.Положение «вне игры» не фиксируется при аналогичной ситуации на своей половине поля, при выполнении ударов от ворот, угловых ударов, при вбрасывании из - за боковой линии и при спорном вбрасывании.'
}], [{
  title: 'Футбол: команда и запасные игроки.',
  body: 'В состав команды входят 11 человек: 1 вратарь и 10 полевых игроков, которые в свою очередь подразделяются на защитников, полузащитников и нападающих.В играх на очки и в кубковых играх на протяжении одного матча может быть произведена замена 2 игроков из каждой команды.Продолжительность матча мужских и молодежных команд(с 16 до 18 лет) составляет 90 мин. Матч состоит из двух таймов по 45 мин.После перерыва, минимальная продолжительность которого 5 мин, команды меняются воротами.Полевые игроки могут касаться мяча любой частью тела, кроме рук.За игру рукой команде назначается штрафной удар или 11-метровый удар, который выполняет игрок команды соперника.Если мяч пересекает лицевую линию или боковую линию, то он считается вышедшим из игры.Если мяч пересек боковую линию, то он считается вышедшим из игры.Если мяч пересек боковую линию после удара игроком одной команды, то производится вбрасывание мяча игроком команды соперника с места пересечения боковой линии.Вбрасывающий стоит лицом к полю, ногами на боковой линии или за ее пределами и вбрасывает мяч обеими руками из- за головы.Если от удара соперника мяч пересекает лицевую линию, то судья назначает удар от ворот, при котором удар по мячу производится из вратарской площадки.Если мяч после удара игроком пересекает лицевую линию его команды, то судья назначает угловой удар.Гол считается забитым, если мяч пересек линию ворот между боковыми стойками и под перекладиной ворот.Согласно правилам, существует два вида ударов: штрафной удар и свободный удар.Штрафной удар назначается за нечестную игру или за игру рукой.Свободный удар назначается за непреднамеренное нарушение правил или за неправильные игровые действия.При выполнении свободного удара гол будет засчитан в том случае, если мяча коснулся еще один игрок, кроме подающего.'
}, {
  title: ' Футбол: «Положение вне игры».',
  body: 'Правило «вне игры» запрещает игрокам атакующей команды находиться к линии ворот соперника ближе, чем защитники соперника.Если в момент передачи мяча между игроком и линией ворот соперника находится менее двух игроков команды соперника, включая вратаря, то такой игрок будет в положении «вне игры». При положении «вне игры» назначается свободный удар.Положение «вне игры» не фиксируется при аналогичной ситуации на своей половине поля, при выполнении ударов от ворот, угловых ударов, при вбрасывании из - за боковой линии и при спорном вбрасывании.'
}]];

/***/ }),

/***/ "./components/Pages/Main/Matches/Header/Header.jsx":
/*!*********************************************************!*\
  !*** ./components/Pages/Main/Matches/Header/Header.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.module.scss */ "./components/Pages/Main/Matches/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/Title/Title */ "./components/Pages/common/Title/Title.jsx");
/* harmony import */ var _common_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/Button/Button */ "./components/Pages/common/Button/Button.jsx");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\Header\\Header.jsx";
 // componetns 




function Header({
  buttonsActivity,
  on_TM_click,
  on_GM_click,
  gameRulesState
}) {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title_Title__WEBPACK_IMPORTED_MODULE_1__.Title, {
      page: 'home',
      locationInPage: 'matches',
      textPathName: '.title',
      href: "/matches",
      classes: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttons),
      style: router.pathname === '/matches' ? {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      } : null,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
        page: "home",
        locationInPage: 'matches',
        textPathName: '.buttons.TodayMatches',
        active: buttonsActivity,
        click: on_TM_click
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), gameRulesState && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
        page: "home",
        locationInPage: 'matches',
        textPathName: '.buttons.GameRules',
        active: !buttonsActivity,
        click: on_GM_click
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/Matches.jsx":
/*!***************************************************!*\
  !*** ./components/Pages/Main/Matches/Matches.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matches": function() { return /* binding */ Matches; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Header */ "./components/Pages/Main/Matches/Header/Header.jsx");
/* harmony import */ var _GameRules_GameRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameRules/GameRules */ "./components/Pages/Main/Matches/GameRules/GameRules.jsx");
/* harmony import */ var _TodayMatches_TodayMatches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodayMatches/TodayMatches */ "./components/Pages/Main/Matches/TodayMatches/TodayMatches.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Matches_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Matches.module.scss */ "./components/Pages/Main/Matches/Matches.module.scss");
/* harmony import */ var _Matches_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Matches_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\Matches.jsx";
// components



 // styles 


function Matches({
  gameRulesState
}) {
  const // states
  {
    0: showTodayMatches,
    1: setShowTodayMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
        {
    0: showGameRules,
    1: setShowGameRules
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${gameRulesState ? (_Matches_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container) : (_Matches_module_scss__WEBPACK_IMPORTED_MODULE_5___default().in_seperete_page)}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Matches_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {
        buttonsActivity: showTodayMatches,
        on_TM_click: () => {
          setShowTodayMatches(true);
          setShowGameRules(false);
        },
        on_GM_click: () => {
          setShowGameRules(true);
          setShowTodayMatches(false);
        },
        gameRulesState: gameRulesState
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), showTodayMatches && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodayMatches_TodayMatches__WEBPACK_IMPORTED_MODULE_3__.TodayMatches, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 38
      }, this), showGameRules && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameRules_GameRules__WEBPACK_IMPORTED_MODULE_2__.GameRules, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 35
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.jsx":
/*!*******************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.jsx ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": function() { return /* binding */ Arrow; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/main/news/arrowRight.png */ "./public/images/main/news/arrowRight.png");
/* harmony import */ var _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/main/news/arrowLeft.png */ "./public/images/main/news/arrowLeft.png");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Arrow.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.module.scss");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\TDMatchesBoard\\Arrows\\Arrow.jsx";
 // icons




function Arrow({
  type,
  onClick,
  isEdge
}) {
  const pointer = type === react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__.consts.PREV ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arrowLeft),
    alt: "arrow-left"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arrowRight),
    alt: "arrow-right"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }, this),
        styles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '35px' // padding: '10%'

  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onClick: onClick,
    disabled: isEdge,
    style: styles,
    children: pointer
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.jsx":
/*!****************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.jsx ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagination": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.module.scss");
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\TDMatchesBoard\\Pagination\\Pagination.jsx";

function Pagination({
  pages,
  activePage,
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
      children: pages.map(el => {
        const isActivePage = activePage === el;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: () => onClick(el),
          active: isActivePage ? 'true' : 'false',
          className: `${(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().round)} ${isActivePage && (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().active)}`
        }, el, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 29
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.jsx":
/*!*********************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.jsx ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TDMatchesBoard": function() { return /* binding */ TDMatchesBoard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _TDMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TDMatchesBoard.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.module.scss");
/* harmony import */ var _TDMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_TDMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Row_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Row/Row */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.jsx");
/* harmony import */ var _common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Row/RowTitle/RowTitle */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.jsx");
/* harmony import */ var _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Arrows/Arrow */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.jsx");
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pagination/Pagination */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.jsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../lib/request-destinations */ "./lib/request-destinations.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\TDMatchesBoard\\TDMatchesBoard.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks
 // styles

 // components











function TDMatchesBoard() {
  const {
    0: firstPage,
    1: setFirstPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
        {
    0: secondPage,
    1: setSecondPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
        router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
        {
    0: firstPageItems,
    1: upDateFirstPageItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(firstPage),
        {
    0: secondPageItems,
    1: upDateSecondPageItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(secondPage),
        {
    0: matches,
    1: setMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    upDateFirstPageItems(matches.filter((el, i) => i < 4));
    upDateSecondPageItems(matches.filter((el, i) => i >= 4));
  }, [matches]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_9__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__.GET_MATCHES, {}, {
      auth: true
    }).then(matches => {
      const now = Date.now();
      setMatches(matches.data.data.map(match => {
        const matchTime = new Date(`${match.date.split(`.`).reverse().join(`.`)} ${match.time}`).getTime();
        return {
          id: match.id,
          date: match.date,
          time: match.time,
          gameState: `.rowOne.gameState.${now < matchTime ? 'started' : 'dontStarted'}`,
          teamOneName: ``,
          teamOneIcon: match.team1_img_path,
          teamTwoName: '',
          teamTwoIcon: match.team2_img_path,
          score: match.score,
          buyButtonName: '.rowOne.buyButton',
          coefficent: '',
          titleName: '.rowOne.title'
        };
      }));
    }).catch(err => {
      console.log(err);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    console.log(firstPageItems);
  }, [firstPageItems]);

  function handleOnDragEndFirstPage(result) {
    if (!result.destination) return;
    const items = Array.from(firstPageItems),
          [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    upDateFirstPageItems(items);
  }

  function handleOnDragEndSecondPage(result) {
    if (!result.destination) return;
    const items = Array.from(secondPageItems),
          [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    upDateSecondPageItems(items);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
    itemsToShow: 1,
    itemsToScroll: 1,
    renderArrow: _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__.Arrow,
    renderPagination: _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__.Pagination,
    className: (_TDMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),
    enableSwipe: false // verticalMode
    ,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
        onDragEnd: handleOnDragEndFirstPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
          droppableId: "matchestodayMatchesFirst",
          children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: '100%'
            },
            children: [firstPageItems.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: '100%'
                }
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                ref: provided.innerRef,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_Row__WEBPACK_IMPORTED_MODULE_3__.Row, {
                  date: el.date,
                  gameState: el.gameState,
                  teamOne: el.teamOneName,
                  teamOneIcon: el.teamOneIcon,
                  score: el.score,
                  teamTwo: el.teamTwoName,
                  teamTwoIcon: el.teamTwoIcon,
                  buyButtonName: el.buyButtonName,
                  titleName: el.titleName,
                  clickBuy: () => router.push({
                    pathname: '/prediction',
                    query: {
                      game: el.id
                    }
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 53
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 49
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 37
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: '34px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
        onDragEnd: handleOnDragEndSecondPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
          droppableId: "matchestodayMatchesSecond",
          children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: '100%'
            },
            children: [secondPageItems.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: '100%'
                }
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                ref: provided.innerRef,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_Row__WEBPACK_IMPORTED_MODULE_3__.Row, {
                  date: el.date,
                  gameState: el.gameState,
                  teamOne: el.teamOneName,
                  teamOneIcon: el.teamOneIcon,
                  score: el.score,
                  teamTwo: el.teamTwoName,
                  teamTwoIcon: el.teamTwoIcon,
                  buyButtonName: el.buyButtonName,
                  titleName: el.titleName,
                  clickBuy: () => router.push({
                    pathname: '/prediction',
                    query: {
                      game: el.id
                    }
                  })
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 49
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 45
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 37
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: '34px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.jsx":
/*!*********************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.jsx ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TMMatchesBoard": function() { return /* binding */ TMMatchesBoard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _TMMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TMMatchesBoard.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.module.scss");
/* harmony import */ var _TMMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_TMMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Row_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Row/Row */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.jsx");
/* harmony import */ var _common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Row/RowTitle/RowTitle */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.jsx");
/* harmony import */ var _TDMatchesBoard_Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../TDMatchesBoard/Arrows/Arrow */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.jsx");
/* harmony import */ var _TDMatchesBoard_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../TDMatchesBoard/Pagination/Pagination */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.jsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../lib/request-destinations */ "./lib/request-destinations.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\TMMatchesBoard\\TMMatchesBoard.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks
 // styles

 // components











function TMMatchesBoard() {
  const {
    0: firstPage,
    1: setFirstPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
        {
    0: secondPage,
    1: setSecondPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
        router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
        {
    0: firstPageItems,
    1: upDateFirstPageItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(firstPage),
        {
    0: secondPageItems,
    1: upDateSecondPageItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(secondPage),
        {
    0: matches,
    1: setMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    upDateFirstPageItems(matches.filter((el, i) => i < 4));
    upDateSecondPageItems(matches.filter((el, i) => i >= 4));
  }, [matches]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_9__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__.GET_MATCHES_OF_NEXT_DAY, {}, {
      auth: true
    }).then(matches => {
      setMatches(matches.data.data.map(match => ({
        id: match.id,
        date: match.date,
        time: match.time,
        gameState: '.rowOne.gameState.started',
        teamOneName: ``,
        teamOneIcon: match.team1_img_path,
        teamTwoName: '',
        teamTwoIcon: match.team2_img_path,
        score: match.score,
        buyButtonName: '.rowOne.buyButton',
        coefficent: '',
        titleName: '.rowOne.title'
      })));
    }).catch(err => {
      console.log(err);
    });
  }, []);

  function handleOnDragEndFirstPage(result) {
    if (!result.destination) return;
    const items = Array.from(firstPageItems),
          [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    upDateFirstPageItems(items);
  }

  function handleOnDragEndSecondPage(result) {
    if (!result.destination) return;
    const items = Array.from(secondPageItems),
          [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    upDateSecondPageItems(items);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
    itemsToShow: 1,
    itemsToScroll: 1,
    renderArrow: _TDMatchesBoard_Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__.Arrow,
    renderPagination: _TDMatchesBoard_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__.Pagination,
    className: (_TMMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),
    enableSwipe: false // verticalMode
    ,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
        onDragEnd: handleOnDragEndFirstPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
          droppableId: "matchestodayMatchesFirst",
          children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: '100%'
            },
            children: [firstPageItems.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: '100%'
                }
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                ref: provided.innerRef,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_Row__WEBPACK_IMPORTED_MODULE_3__.Row, {
                  date: el.date,
                  gameState: el.gameState,
                  teamOne: el.teamOneName,
                  teamOneIcon: el.teamOneIcon,
                  score: el.score,
                  teamTwo: el.teamTwoName,
                  teamTwoIcon: el.teamTwoIcon,
                  buyButtonName: el.buyButtonName,
                  titleName: el.titleName,
                  clickBuy: () => router.push({
                    pathname: '/prediction',
                    query: {
                      game: el.id
                    }
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 53
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 49
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 37
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: '34px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
        onDragEnd: handleOnDragEndSecondPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
          droppableId: "matchestodayMatchesSecond",
          children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: '100%'
            },
            children: [secondPageItems.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: '100%'
                }
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                ref: provided.innerRef,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_Row__WEBPACK_IMPORTED_MODULE_3__.Row, {
                  date: el.date,
                  gameState: el.gameState,
                  teamOne: el.teamOneName,
                  teamOneIcon: el.teamOneIcon,
                  score: el.score,
                  teamTwo: el.teamTwoName,
                  teamTwoIcon: el.teamTwoIcon,
                  buyButtonName: el.buyButtonName,
                  titleName: el.titleName,
                  clickBuy: () => router.push({
                    pathname: '/prediction',
                    query: {
                      game: el.id
                    }
                  })
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 49
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 45
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 37
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: '34px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.jsx":
/*!******************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.jsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Row": function() { return /* binding */ Row; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowTitle/RowTitle */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.jsx");
/* harmony import */ var _RowDescription_RowDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowDescription/RowDescription */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.jsx");
/* harmony import */ var _Row_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Row.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.module.scss");
/* harmony import */ var _Row_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Row_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\common\\Row\\Row.jsx";
// components

 // styles


function Row({
  date,
  gameState,
  teamOne,
  teamOneIcon,
  score,
  teamTwo,
  teamTwoIcon,
  buyButtonName,
  titleName,
  clickBuy
}) {
  const trasnlationLocation = 'matches.TM.today';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_1__.RowTitle, {
      content: titleName,
      locationInMainPage: trasnlationLocation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RowDescription_RowDescription__WEBPACK_IMPORTED_MODULE_2__.RowDescription, {
      date: date,
      gameState: gameState,
      teamOne: teamOne,
      teamOneIcon: teamOneIcon,
      score: score,
      teamTwo: teamTwo,
      teamTwoIcon: teamTwoIcon,
      buyButtonName: buyButtonName,
      locationInMainPage: trasnlationLocation,
      clickBuy: clickBuy
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.jsx":
/*!********************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.jsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RowDescription": function() { return /* binding */ RowDescription; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowDescription.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.module.scss");
/* harmony import */ var _RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\common\\Row\\RowDescription\\RowDescription.jsx";
// translations
 // styles


function RowDescription({
  clickBuy,
  date,
  gameState,
  teamOne,
  teamOneIcon,
  score,
  teamTwo,
  teamTwoIcon,
  buyButtonName,
  locationInMainPage
}) {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => {
    console.log(`${translationPath}${key}`);
    return t(`${translationPath}${key}`);
  },
        gameStarted = gameState.slice(gameState.lastIndexOf(".") + 1) === 'started';

  console.log();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `
                        ${(_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date_gameNStarted_content)} 
                        ${gameStarted ? (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date_gameStarted_content) : null}
                    `,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: ["\xA0", translate(gameState)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teams),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamOne),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: teamOne
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: teamOneIcon,
            alt: teamOne
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().score),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: score
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamTwo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: teamTwoIcon,
            alt: teamTwo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: teamTwo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buyButton_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button_content),
          onClick: clickBuy,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: translate(buyButtonName)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.jsx":
/*!********************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.jsx ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RowTitle": function() { return /* binding */ RowTitle; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RowTitle_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowTitle.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.module.scss");
/* harmony import */ var _RowTitle_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RowTitle_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\common\\Row\\RowTitle\\RowTitle.jsx";
// translations
 // styles 


function RowTitle({
  content,
  locationInMainPage
}) {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_RowTitle_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: content ? translate(content) : ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMHeader/DayChangeButton/DayChangeButton.jsx":
/*!*************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMHeader/DayChangeButton/DayChangeButton.jsx ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayChangeButton": function() { return /* binding */ DayChangeButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DayChangeButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DayChangeButton.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMHeader/DayChangeButton/DayChangeButton.module.scss");
/* harmony import */ var _DayChangeButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DayChangeButton_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMHeader\\DayChangeButton\\DayChangeButton.jsx";
 // hooks and helpers


function DayChangeButton({
  name,
  locationInMainPage,
  date,
  active = null,
  click
}) {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_DayChangeButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: active ? (_DayChangeButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active_name) : (_DayChangeButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name),
      onClick: click,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: translate(name)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: active ? (_DayChangeButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active_date) : (_DayChangeButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.jsx":
/*!**************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.jsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TMHeader": function() { return /* binding */ TMHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/Title/Title */ "./components/Pages/common/Title/Title.jsx");
/* harmony import */ var _DayChangeButton_DayChangeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DayChangeButton/DayChangeButton */ "./components/Pages/Main/Matches/TodayMatches/TMHeader/DayChangeButton/DayChangeButton.jsx");
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-calendar */ "react-calendar");
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TMHeader.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.module.scss");
/* harmony import */ var _TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_images_main_matches_Calendar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../public/images/main/matches/Calendar.png */ "./public/images/main/matches/Calendar.png");
/* harmony import */ var _public_images_main_matches_arrowRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../public/images/main/matches/arrowRight.png */ "./public/images/main/matches/arrowRight.png");
/* harmony import */ var _public_images_main_matches_arrowLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../public/images/main/matches/arrowLeft.png */ "./public/images/main/matches/arrowLeft.png");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMHeader\\TMHeader.jsx";
// hooks
 // components



 // styles

 // icons




function TMHeader({
  clickTD,
  clickTM,
  TDBoardState,
  TMBoardState
}) {
  const // functions
  // get_date value changes y_d => yesterday, t_d => today, t_w =>tomorrow
  get_date = value => {
    let date = new Date(),
        day = null,
        month = date.getMonth() + 1,
        year = date.getFullYear();

    switch (value) {
      case 't_d':
        day = date.getDate();
        break;

      case 't_m':
        day = date.getDate() + 1;
        break;

      default:
        day = "";
        break;
    }

    return `${day}.${month < 10 ? "0" + month : month}.${year}`;
  },
        // states
  {
    0: showCalendar,
    1: setShowCalendar
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title_Title__WEBPACK_IMPORTED_MODULE_2__.Title, {
        page: 'home',
        locationInPage: 'matches',
        textPathName: '.TM.headerTitle',
        classes: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8___default().day_change_buttons),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DayChangeButton_DayChangeButton__WEBPACK_IMPORTED_MODULE_3__.DayChangeButton, {
          name: ".TM.headerButtons.today",
          locationInMainPage: 'matches',
          date: get_date('t_d'),
          active: TDBoardState ? 'show' : null,
          click: clickTD
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DayChangeButton_DayChangeButton__WEBPACK_IMPORTED_MODULE_3__.DayChangeButton, {
          name: ".TM.headerButtons.tomorrow",
          locationInMainPage: 'matches',
          date: get_date('t_m'),
          active: TMBoardState ? 'show' : null,
          click: clickTM
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8___default().calendar),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: _public_images_main_matches_Calendar_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
          alt: "calendar-icon",
          onClick: () => setShowCalendar(!showCalendar)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8___default().calendar_body),
        children: showCalendar && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_calendar__WEBPACK_IMPORTED_MODULE_4___default()), {
          showNeighboringMonth: false,
          showWeekNumbers: false,
          nextLabel: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_main_matches_arrowRight_png__WEBPACK_IMPORTED_MODULE_6__.default.src
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 40
          }, this),
          prevLabel: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_main_matches_arrowLeft_png__WEBPACK_IMPORTED_MODULE_7__.default.src
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 40
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TodayMatches.jsx":
/*!*********************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TodayMatches.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayMatches": function() { return /* binding */ TodayMatches; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TMBody_TDMatchesBoard_TDMatchesBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TMBody/TDMatchesBoard/TDMatchesBoard */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.jsx");
/* harmony import */ var _TMBody_TMMatchesBoard_TMMatchesBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TMBody/TMMatchesBoard/TMMatchesBoard */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.jsx");
/* harmony import */ var _TMHeader_TMHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TMHeader/TMHeader */ "./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.jsx");
/* harmony import */ var _TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TodayMatches.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TodayMatches.module.scss");
/* harmony import */ var _TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TodayMatches.jsx";
// hooks and helpers
 // components



 // styles


function TodayMatches() {
  const // states
  {
    0: showTodayGames,
    1: setShowTodayGames
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
        {
    0: showTomorrowGames,
    1: setShowTomorrowGames
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMHeader_TMHeader__WEBPACK_IMPORTED_MODULE_4__.TMHeader // TD => today games board shopw configs
    , {
      clickTD: () => {
        setShowTodayGames(true);
        setShowTomorrowGames(false);
      },
      TDBoardState: showTodayGames // TM => tommorow games board shopw configs
      ,
      clickTM: () => {
        setShowTodayGames(false);
        setShowTomorrowGames(true);
      },
      TMBoardState: showTomorrowGames
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), showTodayGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TDMatchesBoard_TDMatchesBoard__WEBPACK_IMPORTED_MODULE_2__.TDMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 32
    }, this), showTomorrowGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TMMatchesBoard_TMMatchesBoard__WEBPACK_IMPORTED_MODULE_3__.TMMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 35
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/News/News.jsx":
/*!*********************************************!*\
  !*** ./components/Pages/Main/News/News.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "News": function() { return /* binding */ News; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _News_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./News.module.scss */ "./components/Pages/Main/News/News.module.scss");
/* harmony import */ var _News_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_News_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Title/Title */ "./components/Pages/common/Title/Title.jsx");
/* harmony import */ var _Slide_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slide/Slide */ "./components/Pages/Main/News/Slide/Slide.jsx");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\News\\News.jsx";
// styles 
 // components 



function News() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_News_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title_Title__WEBPACK_IMPORTED_MODULE_1__.Title, {
      page: "home",
      locationInPage: 'news',
      textPathName: '.title'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Slide_Slide__WEBPACK_IMPORTED_MODULE_2__.Slide, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/News/Slide/Slide.jsx":
/*!****************************************************!*\
  !*** ./components/Pages/Main/News/Slide/Slide.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slide": function() { return /* binding */ Slide; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slide_show_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide_show_data */ "./components/Pages/Main/News/Slide/slide_show_data.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SlideItems_Item_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SlideItems/Item/Item */ "./components/Pages/Main/News/Slide/SlideItems/Item/Item.jsx");
/* harmony import */ var _SlideItems_Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SlideItems/Arrows/Arrow */ "./components/Pages/Main/News/Slide/SlideItems/Arrows/Arrow.jsx");
/* harmony import */ var _SlideItems_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SlideItems/Pagination/Pagination */ "./components/Pages/Main/News/Slide/SlideItems/Pagination/Pagination.jsx");
/* harmony import */ var _SlideItems_ItemModal_ItemModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SlideItems/ItemModal/ItemModal */ "./components/Pages/Main/News/Slide/SlideItems/ItemModal/ItemModal.jsx");
/* harmony import */ var _Slide_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Slide.module.scss */ "./components/Pages/Main/News/Slide/Slide.module.scss");
/* harmony import */ var _Slide_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Slide_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\News\\Slide\\Slide.jsx";

 // components





 // styles 





function Slide() {
  const {
    0: slide_data,
    1: setSlideData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_8__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_9__.GET_NEWS, {}, {
      auth: true
    }).then(news => {
      setSlideData(news.data.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  const // consts and states 
  // breakpoints for slide 
  breakpoints = [{
    width: 375,
    itemsToShow: 2,
    itemsToScroll: 2
  }, {
    width: 740,
    itemsToShow: 3,
    itemsToScroll: 3
  }, {
    width: 1700,
    itemsToShow: 4,
    itemsToScroll: 4
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Slide_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {
        itemPadding: [35, 12],
        renderArrow: _SlideItems_Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__.Arrow,
        renderPagination: _SlideItems_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__.Pagination,
        className: (_Slide_module_scss__WEBPACK_IMPORTED_MODULE_10___default().carousel),
        breakPoints: breakpoints,
        children: slide_data.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SlideItems_Item_Item__WEBPACK_IMPORTED_MODULE_4__.Item, {
          img_src: el.img_path,
          title: el.title,
          description: el.text
        }, Math.random(), false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 29
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Pages/Main/News/Slide/SlideItems/Arrows/Arrow.jsx":
/*!**********************************************************************!*\
  !*** ./components/Pages/Main/News/Slide/SlideItems/Arrows/Arrow.jsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": function() { return /* binding */ Arrow; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/main/news/arrowRight.png */ "./public/images/main/news/arrowRight.png");
/* harmony import */ var _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/main/news/arrowLeft.png */ "./public/images/main/news/arrowLeft.png");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Arrow.module.scss */ "./components/Pages/Main/News/Slide/SlideItems/Arrows/Arrow.module.scss");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\News\\Slide\\SlideItems\\Arrows\\Arrow.jsx";
 // icons


 // styles 


function Arrow({
  type,
  onClick,
  isEdge
}) {
  const pointer = type === react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__.consts.PREV ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arrowLeft),
    alt: "arrow-left"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arrowRight),
    alt: "arrow-right"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 13
  }, this),
        styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onClick: onClick,
    disabled: isEdge,
    style: styles,
    children: pointer
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/News/Slide/SlideItems/ItemModal/ItemModal.jsx":
/*!*****************************************************************************!*\
  !*** ./components/Pages/Main/News/Slide/SlideItems/ItemModal/ItemModal.jsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemModal": function() { return /* binding */ ItemModal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../components/common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemModal.module.scss */ "./components/Pages/Main/News/Slide/SlideItems/ItemModal/ItemModal.module.scss");
/* harmony import */ var _ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\News\\Slide\\SlideItems\\ItemModal\\ItemModal.jsx";


function ItemModal({
  onModalClose,
  img,
  title,
  description
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    onClose: onModalClose,
    containerStyles: (_ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Mcontainer),
    contentStyles: (_ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Mcontent),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().img_content),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: img,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().description_content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().description),
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/News/Slide/SlideItems/Item/Item.jsx":
/*!*******************************************************************!*\
  !*** ./components/Pages/Main/News/Slide/SlideItems/Item/Item.jsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": function() { return /* binding */ Item; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ItemModal_ItemModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ItemModal/ItemModal */ "./components/Pages/Main/News/Slide/SlideItems/ItemModal/ItemModal.jsx");
/* harmony import */ var _Item_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item.module.scss */ "./components/Pages/Main/News/Slide/SlideItems/Item/Item.module.scss");
/* harmony import */ var _Item_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Item_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\News\\Slide\\SlideItems\\Item\\Item.jsx";



function Item({
  img_src,
  title,
  description
}) {
  const style = {
    backgroundImage: "url(" + img_src + ")",
    backgroundSize: "cover"
  },
        {
    0: showItemModal,
    1: setShowItemModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().topLines),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().lineOne)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().lineTwo)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
        style: style,
        onClick: () => setShowItemModal(true),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bottomLines),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().lineOne)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().lineTwo)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), showItemModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ItemModal_ItemModal__WEBPACK_IMPORTED_MODULE_2__.ItemModal, {
      onModalClose: () => setShowItemModal(false),
      img: img_src,
      title: title,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Pages/Main/News/Slide/SlideItems/Pagination/Pagination.jsx":
/*!*******************************************************************************!*\
  !*** ./components/Pages/Main/News/Slide/SlideItems/Pagination/Pagination.jsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagination": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.module.scss */ "./components/Pages/Main/News/Slide/SlideItems/Pagination/Pagination.module.scss");
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\News\\Slide\\SlideItems\\Pagination\\Pagination.jsx";

function Pagination({
  pages,
  activePage,
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
    children: pages.map(el => {
      const isActivePage = activePage === el;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => onClick(el),
        active: isActivePage ? 'true' : 'false',
        className: `${(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().round)} ${isActivePage && (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().active)}`
      }, el, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/News/Slide/slide_show_data.js":
/*!*************************************************************!*\
  !*** ./components/Pages/Main/News/Slide/slide_show_data.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slide_show_data": function() { return /* binding */ slide_show_data; }
/* harmony export */ });
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_images_main_news_secBack_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../public/images/main/news/secBack.png */ "./public/images/main/news/secBack.png");
/* harmony import */ var _public_images_main_news_trdBack_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/main/news/trdBack.png */ "./public/images/main/news/trdBack.png");
/* harmony import */ var _public_images_main_news_fortBack_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/main/news/fortBack.png */ "./public/images/main/news/fortBack.png");
/* harmony import */ var _public_images_main_slideBack_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/main/slideBack.png */ "./public/images/main/slideBack.png");
// hooks and helpers
 // img





const slide_show_data = () => {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_0___default()('home'),
        translationPath = 'news.',
        translate = key => t(`${translationPath}${key}`);

  return [{
    url: _public_images_main_slideBack_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
    title: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_secBack_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
    title: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_trdBack_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    title: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_fortBack_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    title: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_slideBack_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
    title: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_secBack_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
    title: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_trdBack_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    title: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_fortBack_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    title: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_slideBack_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
    title: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_secBack_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
    title: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_trdBack_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    title: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_fortBack_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    title: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_slideBack_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
    title: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_secBack_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
    title: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_trdBack_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    title: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: _public_images_main_news_fortBack_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    title: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }];
};

/***/ }),

/***/ "./components/Pages/Main/Prediction/Prediction.jsx":
/*!*********************************************************!*\
  !*** ./components/Pages/Main/Prediction/Prediction.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prediction": function() { return /* binding */ Prediction; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Prediction_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Prediction.module.scss */ "./components/Pages/Main/Prediction/Prediction.module.scss");
/* harmony import */ var _Prediction_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Prediction_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Title/Title */ "./components/Pages/common/Title/Title.jsx");
/* harmony import */ var _PredictionSlide_PrdeictionSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PredictionSlide/PrdeictionSlide */ "./components/Pages/Main/Prediction/PredictionSlide/PrdeictionSlide.jsx");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Prediction\\Prediction.jsx";
// styles
 // components



function Prediction() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Prediction_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title_Title__WEBPACK_IMPORTED_MODULE_1__.Title, {
      page: "home",
      locationInPage: "prediction",
      textPathName: ".title"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PredictionSlide_PrdeictionSlide__WEBPACK_IMPORTED_MODULE_2__.PrdeictionSlide, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Prediction/PredictionSlide/Arrows/Arrow.jsx":
/*!***************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/Arrows/Arrow.jsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": function() { return /* binding */ Arrow; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_main_prediction_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/main/prediction/arrowRight.png */ "./public/images/main/prediction/arrowRight.png");
/* harmony import */ var _public_images_main_prediction_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/main/prediction/arrowLeft.png */ "./public/images/main/prediction/arrowLeft.png");
/* harmony import */ var _public_images_main_prediction_arrowLeftVector_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/main/prediction/arrowLeftVector.png */ "./public/images/main/prediction/arrowLeftVector.png");
/* harmony import */ var _public_images_main_prediction_arrowRightVector_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../public/images/main/prediction/arrowRightVector.png */ "./public/images/main/prediction/arrowRightVector.png");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Arrow.module.scss */ "./components/Pages/Main/Prediction/PredictionSlide/Arrows/Arrow.module.scss");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\Arrows\\Arrow.jsx";
 // icons






function Arrow({
  type,
  onClick,
  isEdge
}) {
  const pointer = type === react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__.consts.PREV ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_prediction_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().arrowLeft),
    alt: "arrow-left"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_prediction_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().arrowRight),
    alt: "arrow-right"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }, this),
        arrows = type === react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__.consts.PREV ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_prediction_arrowRightVector_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().arrowRightVector),
    alt: "arrow-left"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_prediction_arrowLeftVector_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_6___default().arrowLeftVector),
    alt: "arrow-right"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 13
  }, this),
        styles = {
    position: 'relative',
    height: '100%',
    bottom: 0
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onClick: onClick,
    disabled: isEdge,
    style: styles,
    children: [pointer, arrows]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Prediction/PredictionSlide/Item/Item.jsx":
/*!************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/Item/Item.jsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": function() { return /* binding */ Item; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Item_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item.module.scss */ "./components/Pages/Main/Prediction/PredictionSlide/Item/Item.module.scss");
/* harmony import */ var _Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Item_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Timer_Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timer/Timer */ "./components/Pages/Main/Prediction/PredictionSlide/Item/Timer/Timer.jsx");
/* harmony import */ var _PredictionModal_PredictionModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PredictionModal/PredictionModal */ "./components/Pages/Main/Prediction/PredictionSlide/Item/PredictionModal/PredictionModal.jsx");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\Item\\Item.jsx";
// hooks
 // translations

 // styles

 //components




function Item({
  teamOneName,
  teamTwoName,
  teamOneIcon,
  teamTwoIcon,
  predictionButtonName,
  buyButtonName,
  locationInMainPage,
  expiryTimestamp,
  prediction,
  ordinar,
  clickBuy
}) {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  console.log(expiryTimestamp);

  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`),
        {
    0: showPrediction,
    1: setShowPrediction
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function goToPredictions() {
    // setShowPrediction(!showPrediction);
    router.push(`/prediction`);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().top),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().team),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamOneIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamOneName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "\u0418\u0433\u0440\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timer_Timer__WEBPACK_IMPORTED_MODULE_3__.Timer, {
              expiryTimestamp: expiryTimestamp,
              timeClass: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().team),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamTwoIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamTwoName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this), showPrediction && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PredictionModal_PredictionModal__WEBPACK_IMPORTED_MODULE_4__.PredictionModal, {
            teamOneName: teamOneName,
            teamTwoName: teamTwoName,
            teamOneIcon: teamOneIcon,
            teamTwoIcon: teamTwoIcon,
            prediction: prediction,
            ordinar: ordinar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 44
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bottom),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buttons),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().prediction_button_container),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().prediction_button_content),
                onClick: () => goToPredictions(),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: translate(predictionButtonName)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buy_button_container),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buy_button_content),
                onClick: clickBuy,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: translate(buyButtonName)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Pages/Main/Prediction/PredictionSlide/Item/PredictionModal/PredictionModal.jsx":
/*!***************************************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/Item/PredictionModal/PredictionModal.jsx ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictionModal": function() { return /* binding */ PredictionModal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PredictionModal.module.scss */ "./components/Pages/Main/Prediction/PredictionSlide/Item/PredictionModal/PredictionModal.module.scss");
/* harmony import */ var _PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\Item\\PredictionModal\\PredictionModal.jsx";

function PredictionModal({
  teamOneName,
  teamTwoName,
  teamOneIcon,
  teamTwoIcon,
  prediction,
  ordinar
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default().top),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default().team),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: teamOneIcon,
            alt: `${teamOneName}-icon`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: teamOneName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default().vs),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "VS."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default().team),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: teamTwoIcon,
            alt: `${teamTwoIcon}-icon`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: teamTwoName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default().bottom),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default().prediction),
          children: prediction
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_PredictionModal_module_scss__WEBPACK_IMPORTED_MODULE_1___default().ordinar),
          children: ordinar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Main/Prediction/PredictionSlide/Item/Timer/Timer.jsx":
/*!*******************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/Item/Timer/Timer.jsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": function() { return /* binding */ Timer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_timer_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-timer-hook */ "react-timer-hook");
/* harmony import */ var react_timer_hook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_timer_hook__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\Item\\Timer\\Timer.jsx";


function Timer({
  expiryTimestamp,
  timeClass
}) {
  const {
    seconds,
    minutes,
    hours
  } = (0,react_timer_hook__WEBPACK_IMPORTED_MODULE_2__.useTimer)({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called')
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: timeClass,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: hours < 10 ? "0" + hours : hours
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), ":", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: minutes < 10 ? "0" + minutes : minutes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), ":", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: seconds < 10 ? "0" + seconds : seconds
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
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

/***/ "./components/Pages/Main/Prediction/PredictionSlide/PrdeictionSlide.jsx":
/*!******************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/PrdeictionSlide.jsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrdeictionSlide": function() { return /* binding */ PrdeictionSlide; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Arrows/Arrow */ "./components/Pages/Main/Prediction/PredictionSlide/Arrows/Arrow.jsx");
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item/Item */ "./components/Pages/Main/Prediction/PredictionSlide/Item/Item.jsx");
/* harmony import */ var _PrdeictionSlide_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PrdeictionSlide.module.scss */ "./components/Pages/Main/Prediction/PredictionSlide/PrdeictionSlide.module.scss");
/* harmony import */ var _PrdeictionSlide_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_PrdeictionSlide_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_images_main_prediction_predBack_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../public/images/main/prediction/predBack.png */ "./public/images/main/prediction/predBack.png");
/* harmony import */ var _src_games_data_predictions_slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../src/games_data/predictions/slide */ "./src/games_data/predictions/slide.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var _redux_features_matchSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../redux/features/matchSlice */ "./redux/features/matchSlice.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\PrdeictionSlide.jsx";
// hooks and helpers

 //components



 // styles

 // images, icons







function PrdeictionSlide() {
  const {
    0: slide_data,
    1: setSlideData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: currentMatchId,
    1: setCurrentMatchId
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_9__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__.GET_PREDICTIONS, {}, {
      auth: true
    }).then(rsp => {
      var _rsp$data;

      // toast(`Successfully registered`)
      setSlideData(rsp.data.data.map(item => {
        return {
          id: item.id,
          teamOneName: '',
          teamOneIcon: item[`team1_img_path`],
          teamTwoName: '',
          teamTwoIcon: item[`team2_img_path`],
          prediction: {
            thereIs: false,
            totalBet: 'тб 1,5 / ',
            coefficent: 'коеф 3,5'
          },
          type: item.type,
          date: item.date,
          time: item.time,
          coefficent: item.factor,
          predictionButtonName: '.slide.pred_button',
          buyButtonName: '.slide.buy_button',
          predictionText: 'Фулхем тб 1,5 / коэф 3,5',
          ordinarText: `${item.type} / ${item.price}руб.`,
          price: item.price + ' руб.'
        };
      }));

      if (((_rsp$data = rsp.data) === null || _rsp$data === void 0 ? void 0 : _rsp$data.data.length) > 0) {
        setCurrentMatchId(rsp.data.data[0].id);
      }
    }).catch(error => {});
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (currentMatchId !== null && currentMatchId !== undefined) {
      dispatch((0,_redux_features_matchSlice__WEBPACK_IMPORTED_MODULE_11__.setMatchId)(currentMatchId));
    }
  }, [currentMatchId]);
  const style = {
    backgroundImage: "url(" + _public_images_main_prediction_predBack_png__WEBPACK_IMPORTED_MODULE_6__.default.src + ")",
    backgroundSize: "cover"
  },
        time = new Date(),
        router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
        breakpoints = [{
    width: 375,
    itemPadding: [21, 0, 25, 0]
  }, {
    width: 616,
    itemPadding: [79, 0, 79, 0]
  }, {
    width: 1920,
    itemPadding: [115, 0, 43, 0]
  }];
  time.setSeconds(time.getSeconds() + 10600);

  function slideChange(p) {
    var _p$item;

    setCurrentMatchId(p === null || p === void 0 ? void 0 : (_p$item = p.item) === null || _p$item === void 0 ? void 0 : _p$item.id);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PrdeictionSlide_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),
    style: style,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {
      pagination: false,
      renderArrow: _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_4__.Arrow,
      breakPoints: breakpoints,
      onChange: slideChange,
      children: slide_data.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Item_Item__WEBPACK_IMPORTED_MODULE_5__.Item, {
        id: el.id,
        teamOneName: el.teamOneName,
        teamTwoName: el.teamTwoName,
        teamOneIcon: el.teamOneIcon,
        teamTwoIcon: el.teamTwoIcon,
        predictionButtonName: el.predictionButtonName,
        buyButtonName: el.buyButtonName,
        locationInMainPage: 'prediction',
        expiryTimestamp: new Date(`${el.date.split(`.`).reverse().join(`.`)} ${el.time}`),
        prediction: el.predictionText,
        ordinar: el.ordinarText,
        clickBuy: () => router.push({
          pathname: '/prediction',
          query: {
            game: el.id
          }
        })
      }, Math.random(), false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/common/Button/Button.jsx":
/*!***************************************************!*\
  !*** ./components/Pages/common/Button/Button.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.module.scss */ "./components/Pages/common/Button/Button.module.scss");
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\common\\Button\\Button.jsx";
// hooks and helpers
 // styles


function Button({
  page = 'common',
  textPathName = "You are dont put there text.",
  locationInPage = "",
  aditionalStyles = null,
  active = false,
  click = null,
  containerStyles = null
}) {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()(page),
        translationPath = `${locationInPage}`,
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container)} ${aditionalStyles} ${active ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : ''}`,
    style: containerStyles,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content)}`,
      onClick: click,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
        children: translate(textPathName)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/common/Testimonials/Arrows/Arrow.jsx":
/*!***************************************************************!*\
  !*** ./components/Pages/common/Testimonials/Arrows/Arrow.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": function() { return /* binding */ Arrow; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/main/news/arrowRight.png */ "./public/images/main/news/arrowRight.png");
/* harmony import */ var _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/main/news/arrowLeft.png */ "./public/images/main/news/arrowLeft.png");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Arrow.module.scss */ "./components/Pages/common/Testimonials/Arrows/Arrow.module.scss");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\common\\Testimonials\\Arrows\\Arrow.jsx";
 // icons




function Arrow({
  type,
  onClick,
  isEdge
}) {
  const pointer = type === react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__.consts.PREV ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arrowLeft),
    alt: "arrow-left"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    className: (_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arrowRight),
    alt: "arrow-right"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }, this),
        styles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '35px' // padding: '10%'

  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onClick: onClick,
    disabled: isEdge,
    style: styles,
    children: pointer
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/common/Testimonials/FeedBack/FeedBack.jsx":
/*!********************************************************************!*\
  !*** ./components/Pages/common/Testimonials/FeedBack/FeedBack.jsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedBack": function() { return /* binding */ FeedBack; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LikeDislikeDrop_LikeDislikeDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LikeDislikeDrop/LikeDislikeDrop */ "./components/Pages/common/Testimonials/FeedBack/LikeDislikeDrop/LikeDislikeDrop.jsx");
/* harmony import */ var _FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FeedBack.module.scss */ "./components/Pages/common/Testimonials/FeedBack/FeedBack.module.scss");
/* harmony import */ var _FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_images_main_feedbacks_like_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/main/feedbacks/like.png */ "./public/images/main/feedbacks/like.png");
/* harmony import */ var _public_images_main_feedbacks_dislike_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/main/feedbacks/dislike.png */ "./public/images/main/feedbacks/dislike.png");
/* harmony import */ var _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../public/images/main/feedbacks/filledStar.png */ "./public/images/main/feedbacks/filledStar.png");
/* harmony import */ var _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../public/images/main/feedbacks/unfilledStar.png */ "./public/images/main/feedbacks/unfilledStar.png");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\common\\Testimonials\\FeedBack\\FeedBack.jsx";
//hooks 
 // components

 // styles

 // icons





function FeedBack({
  avatar,
  nikName,
  rateing,
  description,
  date,
  likes,
  disLikes,
  reactionsForTesting
}) {
  const stars = [0, 1, 2, 3, 4],
        {
    0: showReactions,
    1: setShowReactions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().top),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().avatar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: avatar,
          alt: nikName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: nikName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rateing),
        children: stars.map((el, i) => el < rateing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
          alt: "star"
        }, Math.random(), false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 33
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_6__.default.src,
          alt: "star"
        }, Math.random(), false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 33
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().bottom),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().bottom_content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().description),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().date_likes_container),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().date),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().likes_dislikes),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().like),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_images_main_feedbacks_like_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
                alt: "like"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: likes
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().vertical_border),
              onClick: () => setShowReactions(!showReactions)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_FeedBack_module_scss__WEBPACK_IMPORTED_MODULE_7___default().disLike),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_images_main_feedbacks_dislike_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
                alt: "dislike"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: disLikes
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, this), showReactions && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikeDislikeDrop_LikeDislikeDrop__WEBPACK_IMPORTED_MODULE_2__.LikeDislikeDrop, {
              data: reactionsForTesting
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/common/Testimonials/FeedBack/LikeDislikeDrop/LikeDislikeDrop.jsx":
/*!*******************************************************************************************!*\
  !*** ./components/Pages/common/Testimonials/FeedBack/LikeDislikeDrop/LikeDislikeDrop.jsx ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LikeDislikeDrop": function() { return /* binding */ LikeDislikeDrop; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LikeDislikeDrop_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LikeDislikeDrop.module.scss */ "./components/Pages/common/Testimonials/FeedBack/LikeDislikeDrop/LikeDislikeDrop.module.scss");
/* harmony import */ var _LikeDislikeDrop_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_LikeDislikeDrop_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_main_feedbacks_like_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../public/images/main/feedbacks/like.png */ "./public/images/main/feedbacks/like.png");
/* harmony import */ var _public_images_main_feedbacks_dislike_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/main/feedbacks/dislike.png */ "./public/images/main/feedbacks/dislike.png");
/* harmony import */ var _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/main/feedbacks/avatar.png */ "./public/images/main/feedbacks/avatar.png");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\common\\Testimonials\\FeedBack\\LikeDislikeDrop\\LikeDislikeDrop.jsx";
 // icons 




function LikeDislikeDrop({
  data = []
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_LikeDislikeDrop_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_LikeDislikeDrop_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
      children: data.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LikeDislikeDrop_module_scss__WEBPACK_IMPORTED_MODULE_4___default().row),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
          alt: "avatar",
          className: (_LikeDislikeDrop_module_scss__WEBPACK_IMPORTED_MODULE_4___default().avatar)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_LikeDislikeDrop_module_scss__WEBPACK_IMPORTED_MODULE_4___default().user_part),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: el.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: el.reaction ? _public_images_main_feedbacks_like_png__WEBPACK_IMPORTED_MODULE_1__.default.src : _public_images_main_feedbacks_dislike_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
            alt: "reaction"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/common/Testimonials/LeaveComment/LeaveComment.jsx":
/*!****************************************************************************!*\
  !*** ./components/Pages/common/Testimonials/LeaveComment/LeaveComment.jsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveComment": function() { return /* binding */ LeaveComment; }
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
/* harmony import */ var _LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LeaveComment.module.scss */ "./components/Pages/common/Testimonials/LeaveComment/LeaveComment.module.scss");
/* harmony import */ var _LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../public/images/main/feedbacks/filledStar.png */ "./public/images/main/feedbacks/filledStar.png");
/* harmony import */ var _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../public/images/main/feedbacks/unfilledStar.png */ "./public/images/main/feedbacks/unfilledStar.png");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\common\\Testimonials\\LeaveComment\\LeaveComment.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks and helpers




 // styles

 // icons



function LeaveComment() {
  const // states consts
  stars = [0, 1, 2, 3, 4],
        {
    0: simulator,
    1: setSimulator
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
        // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('common'),
        translationPath = 'commons.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
  schema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
    comment: yup__WEBPACK_IMPORTED_MODULE_4__.string()
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
        submit = data => console.log(data, {
    rate: simulator
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().stars_container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().stars_content),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().stars_area),
          children: stars.map(el => simulator > el ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_6__.default.src,
            alt: "",
            onClick: () => setSimulator(el)
          }, (el + 1) * Math.random(), false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 38
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_7__.default.src,
            alt: "",
            onClick: () => setSimulator(el + 1)
          }, (el + 1) * Math.random(), false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 38
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit(submit),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().textarea_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", _objectSpread(_objectSpread({}, register('comment')), {}, {
          id: "comment",
          cols: "30",
          rows: "7",
          placeholder: translate('placeHolder')
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: translate('send')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/common/Testimonials/Pagination/Pagination.jsx":
/*!************************************************************************!*\
  !*** ./components/Pages/common/Testimonials/Pagination/Pagination.jsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagination": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.module.scss */ "./components/Pages/common/Testimonials/Pagination/Pagination.module.scss");
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\common\\Testimonials\\Pagination\\Pagination.jsx";

function Pagination({
  pages,
  activePage,
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
      children: pages.map(el => {
        const isActivePage = activePage === el;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: () => onClick(el),
          active: isActivePage ? 'true' : 'false',
          className: `${(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().round)} ${isActivePage && (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default().active)}`
        }, el, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 29
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Pages/common/Testimonials/Sorting/Sorting.jsx":
/*!******************************************************************!*\
  !*** ./components/Pages/common/Testimonials/Sorting/Sorting.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sorting": function() { return /* binding */ Sorting; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sorting_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sorting.module.scss */ "./components/Pages/common/Testimonials/Sorting/Sorting.module.scss");
/* harmony import */ var _Sorting_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Sorting_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\common\\Testimonials\\Sorting\\Sorting.jsx";
// hooks
 // styles


function Sorting({
  sortingText,
  dateSortingText,
  rateSorting,
  sortByDate,
  sortByRate,
  dateActive
}) {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()(`home`),
        translationPath = 'testimonials.sorting.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Sorting_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Sorting_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: translate(sortingText)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Sorting_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: `${(_Sorting_module_scss__WEBPACK_IMPORTED_MODULE_2___default().byDate)} ${dateActive ? (_Sorting_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : null}`,
        onClick: sortByDate,
        children: translate(dateSortingText)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        onClick: sortByRate,
        className: !dateActive ? (_Sorting_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : null,
        children: translate(rateSorting)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/common/Testimonials/Testimonials.jsx":
/*!***************************************************************!*\
  !*** ./components/Pages/common/Testimonials/Testimonials.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Testimonials": function() { return /* binding */ Testimonials; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Title/Title */ "./components/Pages/common/Title/Title.jsx");
/* harmony import */ var _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Arrows/Arrow */ "./components/Pages/common/Testimonials/Arrows/Arrow.jsx");
/* harmony import */ var _FeedBack_FeedBack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeedBack/FeedBack */ "./components/Pages/common/Testimonials/FeedBack/FeedBack.jsx");
/* harmony import */ var _feed_back_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed_back_data */ "./components/Pages/common/Testimonials/feed_back_data.js");
/* harmony import */ var _LeaveComment_LeaveComment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LeaveComment/LeaveComment */ "./components/Pages/common/Testimonials/LeaveComment/LeaveComment.jsx");
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pagination/Pagination */ "./components/Pages/common/Testimonials/Pagination/Pagination.jsx");
/* harmony import */ var _Sorting_Sorting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Sorting/Sorting */ "./components/Pages/common/Testimonials/Sorting/Sorting.jsx");
/* harmony import */ var _Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Testimonials.module.scss */ "./components/Pages/common/Testimonials/Testimonials.module.scss");
/* harmony import */ var _Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_features_matchSlice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../redux/features/matchSlice */ "./redux/features/matchSlice.js");
/* harmony import */ var _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../public/images/main/feedbacks/avatar.png */ "./public/images/main/feedbacks/avatar.png");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\common\\Testimonials\\Testimonials.jsx";
// hooks and helpers

 // components








 // styles







function Testimonials({
  page,
  locationInPage,
  textPathName
}) {
  const matchId = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(_redux_features_matchSlice__WEBPACK_IMPORTED_MODULE_14__.getMatchId);
  const // states
  {
    0: feedBacks,
    1: setFeedBacks
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
        {
    0: dateActive,
    1: setDateActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (matchId !== null && matchId !== undefined) {
      (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_11__.request)((0,_lib_request_destinations__WEBPACK_IMPORTED_MODULE_12__.GET_FEEDBACK)(matchId)).then(predictions => {
        setFeedBacks(predictions.data.data.map(feedBack => ({
          avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_15__.default.src,
          nikName: "Lorem ipsum",
          rateing: feedBack.stars,
          description: feedBack.comment,
          date: {
            renderFormat: "13.07.2021",
            sortFormat: new Date("2021-07-13")
          },
          likes: +feedBack.likeCount,
          disLikes: +feedBack.dislikeCount
        })));
      }).catch(err => {
        console.log(err);
      });
    }
  }, [matchId]); // function for sorting

  const sorting = (toSort, sortingBy, dateActive) => {
    if (toSort.length > 0) {
      let dataForSorting = toSort.reduce((ac, el) => ac.concat(el)),
          sortedData = [],
          sorted = [];
      if (sortingBy === "date") sorted = dataForSorting.sort((a, b) => b.date.sortFormat - a.date.sortFormat);else if (sortingBy === "rate") sorted = dataForSorting.sort((a, b) => b.rateing - a.rateing);

      for (let i = 1; i <= Math.ceil(dataForSorting.length / 3); i++) {
        let sortedItems = [];
        sorted.forEach((el, x) => {
          x < i * 3 && x >= i * 3 - 3 && sortedItems.push(el);
        });
        sortedData.push(sortedItems);
      }

      setFeedBacks(sortedData);
      setDateActive(dateActive);
    }
  }; // Artificial reactions data 


  const reactions = [{
    username: "Lorem Ipsum",
    reaction: true
  }, {
    username: "Lorem Ipsum",
    reaction: false
  }, {
    username: "Lorem Ipsum",
    reaction: true
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: feedBacks && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Title_Title__WEBPACK_IMPORTED_MODULE_4__.Title, {
        page: page,
        textPathName: textPathName,
        locationInPage: locationInPage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16___default().feed_backs_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sorting_Sorting__WEBPACK_IMPORTED_MODULE_10__.Sorting, {
          sortingText: "sort",
          dateSortingText: "byDate",
          rateSorting: "byRate",
          sortByDate: () => {
            sorting(feedBacks, "date", true);
          },
          sortByRate: () => {
            sorting(feedBacks, "rate", false);
          },
          dateActive: dateActive
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {
          renderArrow: _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__.Arrow,
          renderPagination: _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__.Pagination,
          itemsToShow: 1,
          itemsToScroll: 1,
          className: (_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16___default().carousel),
          children: feedBacks.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              width: '100%'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FeedBack_FeedBack__WEBPACK_IMPORTED_MODULE_6__.FeedBack, {
              avatar: el.avatar,
              nikName: el.nikName,
              rateing: el.rateing,
              description: el.description,
              date: el.date.renderFormat,
              likes: el.likes,
              disLikes: el.disLikes,
              reactionsForTesting: reactions
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 45
            }, this)
          }, Math.random(), false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 37
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LeaveComment_LeaveComment__WEBPACK_IMPORTED_MODULE_8__.LeaveComment, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Pages/common/Testimonials/feed_back_data.js":
/*!****************************************************************!*\
  !*** ./components/Pages/common/Testimonials/feed_back_data.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "feedback_data": function() { return /* binding */ feedback_data; }
/* harmony export */ });
/* harmony import */ var _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../public/images/main/feedbacks/avatar.png */ "./public/images/main/feedbacks/avatar.png");
//icons

const feedback_data = [// each array are new page
[{
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 5
}, {
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 2,
  description: "Lorem ipsum dolor sit amet, consectete et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "15.07.2021",
    sortFormat: new Date("2021-07-15")
  },
  likes: 1,
  disLikes: 3
}, {
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 3,
  description: "Lorem ipsum dolor sit amet, consectete et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "01.06.2021",
    sortFormat: new Date("2021-06-01")
  },
  likes: 1,
  disLikes: 5
}], [{
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 5
}, {
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 5,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 0
}, {
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 1,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "02.04.2021",
    sortFormat: new Date("2021-04-02")
  },
  likes: 0,
  disLikes: 5
}], [{
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 5
}, {
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 5,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 0
}, {
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 1,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "02.04.2021",
    sortFormat: new Date("2021-04-02")
  },
  likes: 0,
  disLikes: 5
}], [{
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 5
}, {
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 5,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 0
}, {
  avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  nikName: "Lorem ipsum",
  rateing: 1,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "02.04.2021",
    sortFormat: new Date("2021-04-02")
  },
  likes: 0,
  disLikes: 5
}]];

/***/ }),

/***/ "./components/Pages/common/Title/Title.jsx":
/*!*************************************************!*\
  !*** ./components/Pages/common/Title/Title.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Title": function() { return /* binding */ Title; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title.module.scss */ "./components/Pages/common/Title/Title.module.scss");
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Title_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\common\\Title\\Title.jsx";
// hooks and helpers

 // styles


function Title({
  page = "common",
  textPathName = "You are dont put there text.",
  locationInPage = "",
  textStyles = null,
  href,
  classes
}) {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()(page),
        translationPath = `${locationInPage}`,
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Title_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: href ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: href,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: textStyles,
        style: {
          cursor: "pointer"
        },
        className: classes,
        children: translate(`${textPathName}`)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: textStyles,
      classes: classes,
      children: translate(`${textPathName}`)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ "./i18n.json");
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/loadNamespaces */ "next-translate/loadNamespaces");
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Pages_Main_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../components/Pages/Main/Main */ "./components/Pages/Main/Main.jsx");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const IndexPage = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pages_Main_Main__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 25
}, undefined);

IndexPage.layout = "main";
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
async function getStaticProps(ctx) {
  return {
    props: _objectSpread({}, await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread(_objectSpread(_objectSpread({}, ctx), {}, {
      pathname: '/index',
      loaderName: 'getStaticProps'
    }, _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__), {}, {
      loadLocaleFrom: (l, n) => __webpack_require__("./locales lazy recursive ^\\.\\/.*\\/.*$")(`./${l}/${n}`).then(m => m.default)
    })))
  };
}

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

/***/ "./src/games_data/predictions/slide.js":
/*!*********************************************!*\
  !*** ./src/games_data/predictions/slide.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slide_data": function() { return /* binding */ slide_data; }
/* harmony export */ });
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_main_prediction_barca_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../public/images/main/prediction/barca.png */ "./public/images/main/prediction/barca.png");
/* harmony import */ var _public_images_main_prediction_psj_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/main/prediction/psj.png */ "./public/images/main/prediction/psj.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
// icons






const slide_data = [{
  id: 'predictionslideGame1',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_main_prediction_psj_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_prediction_barca_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: "Ординар",
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '1500 руб.'
}, {
  id: 'predictionslideGame2',
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_prediction_psj_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: "Экспресс",
  date: '14.01',
  time: '22:30',
  coefficent: '2.07',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '2500 руб.'
}, {
  id: 'predictionslideGame3',
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_prediction_barca_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '2.07',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '1800 руб. '
}, {
  id: 'predictionslideGame4',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '1500 руб.',
  buyButtonName: '.slide.buy_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.'
}, {
  id: 'predictionslideGame5',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '1500 руб.',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.'
}, {
  id: 'predictionslideGame6',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  predictionButtonName: '.slide.pred_button',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.',
  price: '1500 руб.',
  ordinarText: 'Ординар / 1500руб.',
  buyButtonName: '.slide.buy_button',
  predictionText: 'Фулхем тб 1,5 / коэф 3,5',
  ordinarText: 'Ординар / 1500руб.'
}];

/***/ }),

/***/ "./public/images/games/atletic.png":
/*!*****************************************!*\
  !*** ./public/images/games/atletic.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/games/atletic.283820fd26ae308542c4998747f6f150.png","height":63,"width":58,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6UlEQVR42jXKv2rCUBgF8Dv4MoW+R4fOhT5L7RgXN6FLC5EUHBpq0g4XGkWw4o25XNAhEC5JMLmKUfDPoKAI0e/TDP6WwzkcEsdx7vs+cs5BCAFBEIAYjfC6AVFK7ZIkwSgMwfU8kFKCaxio0nRPGGOxruv4qmlnq9GA9Y99nlCKTqeTkMV8bl4P+FWtnjbNbzja9imLIhwrZRFPiKfZdIqrj/cce/+4rNfzRZbhgPNnUhinqZD9Pm4/jUPQ7aIMwyG50SqVO6fdPjDLwl9Kjy/l8j0pMNctFdk0zQfaauVvtdpj0f8cp3QBWfybj50+cosAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/games/atletico.png":
/*!******************************************!*\
  !*** ./public/images/games/atletico.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/games/atletico.2ce75e21162e2e6dc48b99e6018107e0.png","height":62,"width":47,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/AWxthsTe3+cx8vP6CgwKBAAGBwX2BhAOzwGDhJb/NzYuANzc4f8EBwcAyMfSARDi4QABj5Cg/BEQDQL7//8BvKq+AHt8Xv/jr6v/AWhpgv319vkCMDEl/y/87AAyS0gBw6Wq/wFeaIP/JwH2/VlWRAP++voACBMT/dCwswMBnoWO9U5QRQrt4N/8/v7/ABEdHQTFsLb3AY2ToTAoBv6mJSAYKQAAAADc4ejYyv4KWwFqI0YAlt26BrmssrsAAAABR1RORVUoUfl+lVtrSTCy4QAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/main/feedbacks/avatar.png":
/*!*************************************************!*\
  !*** ./public/images/main/feedbacks/avatar.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/feedbacks/avatar.be06bdc05430f5cdcfb84f7a9e542113.png","height":75,"width":76,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAcElEQVR42h2GvQnCABQGv0n8I06g8+gYOo222lgIWoqkExEbcYZokeS+AfLyCAd3J4vCJZHcmVnyxH+CFet0xUicHTwsxDPvJFpHzs77obWA4MKGLVeCRpR8LJL0l5uY8uPAgqWPVIyFmPOmS14UqAdtymH3TfFz0QAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/main/feedbacks/dislike.png":
/*!**************************************************!*\
  !*** ./public/images/main/feedbacks/dislike.png ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/feedbacks/dislike.83cc76247dd473ab2bb375fce25b931f.png","height":32,"width":30,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42j3LsQsBAQCF8ae4FLOwmGQQmUyXQclww4nhJkphtPvnf5HhXm/4vuGLQuXirHZ3dYtSbWBsap6o4mWUdvbxaGWm0MTT2kbfwsfJMSZWGjuVXltaOigTXZ38HkNv2/z5C9U+N2z0rGAnAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/images/main/feedbacks/filledStar.png":
/*!*****************************************************!*\
  !*** ./public/images/main/feedbacks/filledStar.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/feedbacks/filledStar.b44aa812dcbf9eb14e64af6c8e7279b3.png","height":26,"width":28,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAhUlEQVR42mP4d9qIEYhZGYDg3xljPSA2ZwACoBgbEDMxIAOgQCsQz0EXNADiTCAOAuLb/84YvQHSoUCcAcQWIAVCQDwbiP//O238H2jFHxAbiFcCsRSySX1ASaACsOQyVGtO6DMBBW8A8QogngnEz4AKeeEKgBxtoGAukmmpQGzJwMDAAAAUDl1k5bO5eAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/main/feedbacks/like.png":
/*!***********************************************!*\
  !*** ./public/images/main/feedbacks/like.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/feedbacks/like.1432d8d4c07437b9467c5259eb94b1dc.png","height":31,"width":29,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAXElEQVR42jXLrQrCAABG0U+H1SA2w6JWsYk/yWYQBJVhWdjCGOz9y2Fh7OR7MzG4JYpYJtae7pk5uKoclfHw0Vs5OWvibaucKq/Mj0Wijktio0js/KLz1av8tfYj64EumOLFM3wAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/feedbacks/unfilledStar.png":
/*!*******************************************************!*\
  !*** ./public/images/main/feedbacks/unfilledStar.png ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/feedbacks/unfilledStar.26105c5d4e7834de797ed734505ee2bf.png","height":26,"width":28,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAfklEQVR42l2NsQqDQBBENyF6TVIGUqZNFxCLEwWxUBHB3kYL8Tc9f2zx2S0uPGZnuJsVDe6mIX4IoyH6s3thlAzuYodggPESuoSw1s3l7AVkusUlWoE/f31gwZSmyeNX9Gvre3jqHjm0u95+wQQtNDDT8LYPfgSz8SM+FRE5AIwvR0qDJC/mAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/images/main/matches/Calendar.png":
/*!*************************************************!*\
  !*** ./public/images/main/matches/Calendar.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/Calendar.e618df3387ed123b651d4ef2af917fe2.png","height":34,"width":34,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAa0lEQVR42g3LuwqCABQA0PsL/UFLc1MQFYRiIj0sehA1mYoNEfb/wyE58wkTvavWy93PJJTOMkcHuYsyNNJBZiOx1oVc56FRe/pKQurtplZp7dVhrVfp7IyNfEIhMWxzJzN5yCwsrUwVtuZ/Ti5S0Ko2P9EAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/matches/arrowLeft.png":
/*!**************************************************!*\
  !*** ./public/images/main/matches/arrowLeft.png ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/arrowLeft.e2372a0c78d8c6b246bdee3ffab40f7b.png","height":35,"width":31,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA40lEQVR42mNYsGCB2IL5843mz51nsmDhQqP58+cbA8X0gJiXASQBZBgvWLVCd/60GRbzZ88xmT9vvhlQTJ0BpHLhnu2q8+xjZ8xLL4td/Pq+BNAE4/nz5mkxLNi6SX2uZdSyeVzeH+Y5xE2fZxW1aH5Du9eCNatUGBZsWKs1Lzijai6vz6N5AZll8+IK0uf3TnRYsGypGsP8OXNNF54+ojAvLLt4Xk5l5KKb52Ugxs7XZgC5DOgIiwUb12kDVRvOnzXbfP78+eZAcWWQJC/IZUAFOvPnztUCsrUWzJ+vsmDBAjYAjTVxRM3en78AAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/matches/arrowRight.png":
/*!***************************************************!*\
  !*** ./public/images/main/matches/arrowRight.png ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/arrowRight.c6d6d9e1222c418f60fbb8194d08a823.png","height":35,"width":31,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA4ElEQVR42hWOvUoDQRSFz70zs+vKJqYRwVgKQsTCh7AzhbXVoq9g4ZNYaLGNIPZWAatUadOFQAKBFEmKhM0Pm2TuzaT44HD4io/yPD8HUA/QEfXekDElgAEDuFIRp9udUy9Mtco6CAmASw6HoSQubfY00L/Og3z/N/n2enqULdXSjbS7DflqZSh9rO1Z5qNfNa+PPwxRwLFHNV4gYqGUC5yGXW4No1id8P1N336+f+Ci2sNz4828NFs6nqQUau9UJMFuz3RW2cCy6LxIybmZBTAkorpGzuhyDQBE1k5JMToAcRNcEex0l0gAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/matches/marcel.png":
/*!***********************************************!*\
  !*** ./public/images/main/matches/marcel.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/marcel.eb4604864ce2401aa24fb4ed271f6e83.png","height":53,"width":41,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAtUlEQVR42mOon7OFlQEI7i5n0H24gkEdxG6cswkoBgLTbrjazLgQazH9YgKQbQ8RnH6dn3n6tf1AgU6GadenANnbgTQXUPW1biBeDxRYwTTt+lqgwjVAiVYGoOB2IF4ExBeBAucZpl9bAmRvZhCafm2D4PRri/mmX5sBZPcKTL+2DogXAHXcaWGYdruXYeqdUIapdwOB7MlAXMewYn5f9t5FmR4rF3Q7r13Q5rV3UZbTovlTYgAFZVfAeuZWPQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/main/matches/rennais.png":
/*!************************************************!*\
  !*** ./public/images/main/matches/rennais.png ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/rennais.d7f597304947400fb20f05e2dae6b5fb.png","height":51,"width":47,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6klEQVR42mPY3cGjkeHPeTfEguHcVgOG/c+DxK+9SFY9+22DgADDujY9c3UGhv9Hq6v/H1+65P/apLT/T2wYPv7Y4CzB0Faq5p/IwPD/18H9vx9du/pn9apV/27rMfz8M9NNl6E6XqqXgYHh/62+rt+7erv/L6uu/vNQmuH/6wqDVIZcf4Etysbm/91MDH5v8PP8/zjY89fTYO//zzNU+hgaE3gmOJkZ/WewdPi/I8jn99uo8P+Pw93/vy6TzWD4f46BozWGoV/agOHLRh2B/6/9ZF8/y2aoZEAGu6aIq52ukOn5f0BfGCYGANZKZsFc21vHAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/images/main/news/arrowLeft.png":
/*!***********************************************!*\
  !*** ./public/images/main/news/arrowLeft.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/news/arrowLeft.d6d50fface3220cacee88cd5e555601a.png","height":35,"width":31,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAzUlEQVR42mP4//+/8L9///R///xlBGQbANmGQFoHSHMzAAmDv3/+mIIEfn3/Yfrz23fTv3//mgH56gx/fv82BjKUthW1dZ6avzoJyBYHYiOgBh0GIENtU3b99HkMnh82p9dN3JRSPeXBiXNeQHFVkKTGntbJdQsE/J/tqult2N85vfz5tVsuIE0Mv3/+NAUyFPa1T6s4v3JzNJAtCTVWmwHIALr0pzmQ1gZiw5/fvpn/+/sXxFcFuZYfyND69eOH3p/ff3Sg3lD/9+8fBwBj9qPPj+47kgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/main/news/arrowRight.png":
/*!************************************************!*\
  !*** ./public/images/main/news/arrowRight.png ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/news/arrowRight.911fc9e84e04463780a3b75918a655a7.png","height":35,"width":31,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAyUlEQVR42mP49++fMBDr/f//3+Df378Gv3/9MgKydYBi3Awgwb9//pj++PrNDMg2Bkn8/vnLAkirMfz5/dsEyADpFN3fNq30yOSF2UC2ElCxLkin9tVdB8J2NPR2bi1pnTifzeft8VnLQAoUwJJXdu0P29nY174xu3bOfEbvDyfnr0oHiiuCjAXZowvEYocnzMs7vXhtApCt/PPbdz2QTj2gg8y+f/liAXIcSOHvnz8tgbQqA9DJ/ECsBXblr18gCZDj1P/9+8cBAJy9o+jCXWdCAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/images/main/news/fortBack.png":
/*!**********************************************!*\
  !*** ./public/images/main/news/fortBack.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/news/fortBack.2fac4a53f06e0d7b508d03958d6c11af.png","height":324,"width":372,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/AWmNVcqXBMgBaQo8APXT8gALFAgABQgHANDO4QAuKywAAWOCUMz0DA4A3N3dAM3i1gBELDYAFP39AO7m9gA1MUQAAXyNZ8slGgwA3qaNACRCZADe3tcA8xQqACAmNQDy8+4AAVZvOsvP5tgAnGKbAD4dAQDSpKAAnOsWAOsN8ADr89QAAVxvWcsjFx8AUTxGAOy8pAC+p7sAIygDAIgABgAS/QcAAVxkW8zn9u8AgT8nANu+xwCjqcgAHyoTAJ/8CQAa/PoAAUpZMMkB/foADv/zABH2BgCWzeoAAPcAAAsAAAD5BQIAW7FWDmq1I3sAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/news/secBack.png":
/*!*********************************************!*\
  !*** ./public/images/main/news/secBack.png ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/news/secBack.0ced895860560a903a1c6bc33f835af3.png","height":324,"width":372,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA40lEQVR4nA3MvUrDUBiA4fezTdLBdmhNQEonBRcdxKUEBxcn8S5c3d1EvAHdvQGvoYir2KC4dLKjBBKtpCXNz0nOafaHR06fXt4vT1xpbcFvZQhLw1+pSXIhns2Q2+fXwD/0SPMKRU3WwJ8a5iX8N1AeJx/Tz3nCV5gz3OlyPLLxd5tBwySykPHVzfSt6HA33sc/6FHVCq1KFmGHTK+Ri7O9wDiuGQw93G4CSshLRRxp7PYKuX4YBZZdmKWOxGR9WnXPFGst/fzILGJH5Py+FRSqbXS5jV46pKlF/J0wwGNVZGwALRBr5bNZ+TkAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/news/trdBack.png":
/*!*********************************************!*\
  !*** ./public/images/main/news/trdBack.png ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/news/trdBack.163bd395eaaf0c9d5d253ead99babcfd.png","height":324,"width":372,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA2UlEQVR42g3NsU6DUBQG4P/AgVvopRAWa0y0wUQHu5uYODr4wDUOOjp1NUbHJqYxpNBSxNJeLsd+L/DR0+x5bruOhlEsLnuwvUAPfDAzrao/4bfXGa2rRkIG1ZtasskYVlzqKBBWTE6+XMjDeUWeaWV8cYNM97ikL/n+/KBs+yLO7b1CEORyfXeCq2mG1nPRpArTx1gWvwZOUTaYHzSC5BRpYlB075DREFEq8Cdn4AP5pJMBymKJrVPCMqNXLvZVDx2H4Lze2HVLx2YFpUYIowR1s8PeGMjPDv819lzNSMO9gAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/main/prediction/arrowLeft.png":
/*!*****************************************************!*\
  !*** ./public/images/main/prediction/arrowLeft.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/prediction/arrowLeft.ad78976e6333778a207c8b4640c029eb.png","height":704,"width":129,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAYAAAA4GpVBAAAAF0lEQVR4nGP89++fIIgQAhFgFhoBkQAA8wwYY8hVOxAAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/prediction/arrowLeftVector.png":
/*!***********************************************************!*\
  !*** ./public/images/main/prediction/arrowLeftVector.png ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/prediction/arrowLeftVector.d8458dada367d8155e70f31f33e7f51f.png","height":38,"width":42,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAj0lEQVR42mPYyOnOvInTnZ0BCDZyeiwA4q9ALM8ABJs4PVgZkMFGLvcQIP4PVPAMiJUggpzubkCViUAcD2T7AvHmTQhFZgxAgT9ASaAAUBBIQ9nfwIq4PG4zAI1UB3JsgbQ1kNYF4k2buDxAiq8CxWQZYADqqHyo5CUgFoQ5jAnoCzaoe1qB+DxQkh/qKxYAhDFDlixaijoAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/prediction/arrowRight.png":
/*!******************************************************!*\
  !*** ./public/images/main/prediction/arrowRight.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/prediction/arrowRight.e9dba785747491acb7998cbbb746f4c6.png","height":704,"width":130,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAYAAAA4GpVBAAAAF0lEQVR4nGP89++fIIgQAhEIFphAcAUB8zEYZYJ8YIEAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/prediction/arrowRightVector.png":
/*!************************************************************!*\
  !*** ./public/images/main/prediction/arrowRightVector.png ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/prediction/arrowRightVector.06d8a51874c183ecd9157b1e40cc000b.png","height":38,"width":42,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAmElEQVR42k2OPQoCQQyFg78wKcQDiGBjZW0h1kljaS2ewFt4Di+QKfQkCnbWewPtZPxkd2EfPCa874WJRLKhoFCbM7/xRVBOPs7J+tLABaAK9RLJ99IVYE2hYqPw3rLaLqsf2D6SmRC+augfYPkb2PorgBmlZxNcKa/INny1JV+2N0zxA0jJTtIVYFC/PmG+47Mg7hiFWu8HwXBDICPPO3kAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/prediction/barca.png":
/*!*************************************************!*\
  !*** ./public/images/main/prediction/barca.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/prediction/barca.75f9e230beb79e282d7a0f369a6e666e.png","height":223,"width":206,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR4nAHoABf/AZ+FQDMSGRwpBffwGfEAANcM9c0t+AIR3fn8H84Bsp5abCsOPJMC3vIAASzzAAfphQDxBSgAz/c5QAGYmFw2RQA5yQfV9vwISfUBBe2AA+r7Muwl9mMmAcukMaQhI0Rb5+P1/fcB+wIH8Zv/GBsAAtTkP3QBpIxWsvXWAk39BAD7CxHwBO3mH/sOFwEGEiT3gwGNh15r97kOlAEQBwBDVtL+sXstAhE5+AAhTww7AQD/AAG0gy+Q5fI0XxAH8g/y+g3pJR7hhu9tvZIBnqYuAB7G0gAVSgAY8OpDNjFOOr3NjIP144YAALmzYkTO5qjQAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/images/main/prediction/predBack.png":
/*!****************************************************!*\
  !*** ./public/images/main/prediction/predBack.png ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/prediction/predBack.32a89693e564b68ca4a7ab1d7e21d24a.png","height":704,"width":1919,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/ATk+Vv4UGQsA9/jtAPv6+wADA/4AFxkiAPHu9wC6raYAATM8VP8nMS4A/Pr9AO/q5wD18O8AHSklAOTa1wDMvMMAATczPv4pNh0AGzAQAB4ZCgDs7e4AxLPvANfQ6ADx8/EAQA8rdSvvJKoAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/prediction/psj.png":
/*!***********************************************!*\
  !*** ./public/images/main/prediction/psj.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/prediction/psj.ce4ac3196b901280cddb9b7e17c485fe.png","height":225,"width":224,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABA0lEQVR42mOAgeLJuyKb5+xf0rHw4Kz8CTtsQWKd8w8wgiUnrTo+d+baE//nbjz9f/qaE/8nrTj6v2/Z0RywZMOc/Sk57Rv/F0zf+3tj/5rfcydv/lU+Y+//9NaN/5ftvqTDUDxxx2afvCX/GSrX/3lZ3vH/QPm0/wxla39HlCz/37/saAlD9eSda+Xylv8/tmDr79sNPf8f9c74v3Da1l8mBcv/z1x9PJ9hwtIjAWGNG/7Pn7D5f/HEdb+nzNz8q61l3f+U7q3fDpy+o8AAdu3CgzWx3dv+xzRs+J/Yte1/7uRd3+esOxnIgAzmrjlu2rlgf1XfooNFm/deAuvM79rMBAA4BIm6HGniAwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/main/slideBack.png":
/*!******************************************!*\
  !*** ./public/images/main/slideBack.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/slideBack.b09b5b243f277d8fa71421f7f1324528.png","height":324,"width":372,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA1klEQVR42g3Fv07CQBzA8e/vvBZszsSgRUUT4p/BycTdJ3D3gXwXFxNNjIvPoKMDCwMhJCKIAdrScoXewWf5yP3j09fpvpG7aI4O4fqiSes4ZrXMKJ3ySkSrn2JbPZDvzw+ZJLnYlZMs+Rcd7irdGaS+hyOaDrhq3/L89g6qonl4QjJ5RfdmKZiQdDikP/ojarTYqdUY2QobHKHbnRd+x5a9hxvOLs+phxECeIQiD9DxwVhi47Fhl+68jzgQBeuyxOYl2jRMZbMK5YT1wuO348EWwnLh2QDFKldZn6yA1gAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./components/Pages/Main/Matches/GameRules/Arrows/Arrow.module.scss":
/*!**************************************************************************!*\
  !*** ./components/Pages/Main/Matches/GameRules/Arrows/Arrow.module.scss ***!
  \**************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"arrowLeft": "Arrow_arrowLeft__1Hvij",
	"arrowRight": "Arrow_arrowRight__10rNu"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/GameRules/GameRules.module.scss":
/*!***********************************************************************!*\
  !*** ./components/Pages/Main/Matches/GameRules/GameRules.module.scss ***!
  \***********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "GameRules_container__38ele",
	"transition": "GameRules_transition__3RLZS"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/GameRules/Pagination/Pagination.module.scss":
/*!***********************************************************************************!*\
  !*** ./components/Pages/Main/Matches/GameRules/Pagination/Pagination.module.scss ***!
  \***********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Pagination_container__3icXg",
	"round": "Pagination_round__36yfy",
	"active": "Pagination_active__2MiRN"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/GameRules/SlidePage/PagePareticles/PageParticales.module.scss":
/*!*****************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/GameRules/SlidePage/PagePareticles/PageParticales.module.scss ***!
  \*****************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PageParticales_container__3epss",
	"title": "PageParticales_title__UpEyN",
	"body": "PageParticales_body__1hNAF"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/GameRules/SlidePage/SlidePages.module.scss":
/*!**********************************************************************************!*\
  !*** ./components/Pages/Main/Matches/GameRules/SlidePage/SlidePages.module.scss ***!
  \**********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SlidePages_container__3Zi1E"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/Header/Header.module.scss":
/*!*****************************************************************!*\
  !*** ./components/Pages/Main/Matches/Header/Header.module.scss ***!
  \*****************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Header_container__3Zdmc",
	"title": "Header_title__ZRJ89",
	"buttons": "Header_buttons__17vfb"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/Matches.module.scss":
/*!***********************************************************!*\
  !*** ./components/Pages/Main/Matches/Matches.module.scss ***!
  \***********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Matches_container__2Ka2z",
	"content": "Matches_content__1PQ_E",
	"in_seperete_page": "Matches_in_seperete_page__2-_Fp"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.module.scss":
/*!***************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.module.scss ***!
  \***************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"arrowLeft": "Arrow_arrowLeft__3GtA4",
	"arrowRight": "Arrow_arrowRight__3329l"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.module.scss":
/*!************************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.module.scss ***!
  \************************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Pagination_container__2sxLx",
	"round": "Pagination_round__1dIlR",
	"active": "Pagination_active__3XISs"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.module.scss":
/*!*****************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.module.scss ***!
  \*****************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "TDMatchesBoard_container__2PJra"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.module.scss":
/*!*****************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.module.scss ***!
  \*****************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "TMMatchesBoard_container__2dsHH"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.module.scss":
/*!**************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.module.scss ***!
  \**************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Row_container__1WBOh"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.module.scss":
/*!****************************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.module.scss ***!
  \****************************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "RowDescription_container__219t-",
	"content": "RowDescription_content__2SeXU",
	"date_gameNStarted_content": "RowDescription_date_gameNStarted_content__1MqEJ",
	"date_gameStarted_content": "RowDescription_date_gameStarted_content__3G_Z2",
	"teams": "RowDescription_teams__27VPO",
	"teamOne": "RowDescription_teamOne__TPIka",
	"score": "RowDescription_score__38SVF",
	"teamTwo": "RowDescription_teamTwo__3mad2",
	"buyButton_container": "RowDescription_buyButton_container__3rCNk",
	"button_content": "RowDescription_button_content__12wUP"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.module.scss":
/*!****************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.module.scss ***!
  \****************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "RowTitle_container__DWZ5L"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMHeader/DayChangeButton/DayChangeButton.module.scss":
/*!*********************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMHeader/DayChangeButton/DayChangeButton.module.scss ***!
  \*********************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "DayChangeButton_container__2dAqe",
	"name": "DayChangeButton_name__2nSnI",
	"date": "DayChangeButton_date__3-MW8",
	"active_name": "DayChangeButton_active_name__315sP",
	"transition": "DayChangeButton_transition__1TFg3",
	"active_date": "DayChangeButton_active_date__OBeaD"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.module.scss":
/*!**********************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.module.scss ***!
  \**********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "TMHeader_container__2sf8K",
	"content": "TMHeader_content__23QuY",
	"title": "TMHeader_title__3u9zG",
	"day_change_buttons": "TMHeader_day_change_buttons__3qoYp",
	"calendar": "TMHeader_calendar__2WAh_"
};


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TodayMatches.module.scss":
/*!*****************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TodayMatches.module.scss ***!
  \*****************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "TodayMatches_container__3xcfT",
	"transition": "TodayMatches_transition__1divr"
};


/***/ }),

/***/ "./components/Pages/Main/News/News.module.scss":
/*!*****************************************************!*\
  !*** ./components/Pages/Main/News/News.module.scss ***!
  \*****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "News_container__slPK_"
};


/***/ }),

/***/ "./components/Pages/Main/News/Slide/Slide.module.scss":
/*!************************************************************!*\
  !*** ./components/Pages/Main/News/Slide/Slide.module.scss ***!
  \************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Slide_container__QzZBw"
};


/***/ }),

/***/ "./components/Pages/Main/News/Slide/SlideItems/Arrows/Arrow.module.scss":
/*!******************************************************************************!*\
  !*** ./components/Pages/Main/News/Slide/SlideItems/Arrows/Arrow.module.scss ***!
  \******************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"arrowLeft": "Arrow_arrowLeft__22MRj",
	"arrowRight": "Arrow_arrowRight__fpLpC"
};


/***/ }),

/***/ "./components/Pages/Main/News/Slide/SlideItems/ItemModal/ItemModal.module.scss":
/*!*************************************************************************************!*\
  !*** ./components/Pages/Main/News/Slide/SlideItems/ItemModal/ItemModal.module.scss ***!
  \*************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Mcontainer": "ItemModal_Mcontainer__1YkMg",
	"Mcontent": "ItemModal_Mcontent__2rvBx",
	"container": "ItemModal_container__1jEla",
	"img_content": "ItemModal_img_content__KIhdn",
	"description_content": "ItemModal_description_content__16VVv",
	"title": "ItemModal_title__2-Wp4",
	"description": "ItemModal_description__hRGqG"
};


/***/ }),

/***/ "./components/Pages/Main/News/Slide/SlideItems/Item/Item.module.scss":
/*!***************************************************************************!*\
  !*** ./components/Pages/Main/News/Slide/SlideItems/Item/Item.module.scss ***!
  \***************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Item_container__3tq2J",
	"topLines": "Item_topLines__1oNkW",
	"lineOne": "Item_lineOne__5aXM9",
	"lineTwo": "Item_lineTwo__1UUAt",
	"content": "Item_content__2Ygd2",
	"bottomLines": "Item_bottomLines__3UCcb"
};


/***/ }),

/***/ "./components/Pages/Main/News/Slide/SlideItems/Pagination/Pagination.module.scss":
/*!***************************************************************************************!*\
  !*** ./components/Pages/Main/News/Slide/SlideItems/Pagination/Pagination.module.scss ***!
  \***************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Pagination_container__1rY2H",
	"round": "Pagination_round__1LZTE",
	"active": "Pagination_active__3IFgh"
};


/***/ }),

/***/ "./components/Pages/Main/Prediction/Prediction.module.scss":
/*!*****************************************************************!*\
  !*** ./components/Pages/Main/Prediction/Prediction.module.scss ***!
  \*****************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Prediction_container__32bUl"
};


/***/ }),

/***/ "./components/Pages/Main/Prediction/PredictionSlide/Arrows/Arrow.module.scss":
/*!***********************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/Arrows/Arrow.module.scss ***!
  \***********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"arrowLeft": "Arrow_arrowLeft__1n2Gl",
	"arrowRight": "Arrow_arrowRight__NZN7W",
	"arrowRightVector": "Arrow_arrowRightVector__3zxLl",
	"arrowLeftVector": "Arrow_arrowLeftVector__U6FSq"
};


/***/ }),

/***/ "./components/Pages/Main/Prediction/PredictionSlide/Item/Item.module.scss":
/*!********************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/Item/Item.module.scss ***!
  \********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Item_container__Tao5E",
	"content": "Item_content__2tYHF",
	"top": "Item_top__W2rB0",
	"team": "Item_team__3GZ84",
	"timer_container": "Item_timer_container__2g5pb",
	"timer": "Item_timer__Ch658",
	"bottom": "Item_bottom__gCFrh",
	"buttons": "Item_buttons__1Bqwt",
	"prediction_button_container": "Item_prediction_button_container__3xbjO",
	"prediction_button_content": "Item_prediction_button_content__1W8vH",
	"buy_button_container": "Item_buy_button_container__nPpo_",
	"buy_button_content": "Item_buy_button_content__5PEzg"
};


/***/ }),

/***/ "./components/Pages/Main/Prediction/PredictionSlide/Item/PredictionModal/PredictionModal.module.scss":
/*!***********************************************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/Item/PredictionModal/PredictionModal.module.scss ***!
  \***********************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PredictionModal_container__2Yi-d",
	"transition": "PredictionModal_transition__w-Cvf",
	"content": "PredictionModal_content__1Y6ZF",
	"top": "PredictionModal_top__1-n3z",
	"team": "PredictionModal_team__1VYDE",
	"vs": "PredictionModal_vs__31ibN",
	"bottom": "PredictionModal_bottom__GVkwB",
	"prediction": "PredictionModal_prediction__3VtPj",
	"ordinar": "PredictionModal_ordinar__2KiLF"
};


/***/ }),

/***/ "./components/Pages/Main/Prediction/PredictionSlide/PrdeictionSlide.module.scss":
/*!**************************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/PrdeictionSlide.module.scss ***!
  \**************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PrdeictionSlide_container__12MSC"
};


/***/ }),

/***/ "./components/Pages/common/Button/Button.module.scss":
/*!***********************************************************!*\
  !*** ./components/Pages/common/Button/Button.module.scss ***!
  \***********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Button_container__45KyD",
	"content": "Button_content__14FlU",
	"active": "Button_active__1MDg5"
};


/***/ }),

/***/ "./components/Pages/common/Testimonials/Arrows/Arrow.module.scss":
/*!***********************************************************************!*\
  !*** ./components/Pages/common/Testimonials/Arrows/Arrow.module.scss ***!
  \***********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"arrowLeft": "Arrow_arrowLeft__1XzbJ",
	"arrowRight": "Arrow_arrowRight__20aI5"
};


/***/ }),

/***/ "./components/Pages/common/Testimonials/FeedBack/FeedBack.module.scss":
/*!****************************************************************************!*\
  !*** ./components/Pages/common/Testimonials/FeedBack/FeedBack.module.scss ***!
  \****************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "FeedBack_container__2cCLW",
	"top": "FeedBack_top__2Ihqj",
	"avatar": "FeedBack_avatar__3C00c",
	"rateing": "FeedBack_rateing__1viHO",
	"bottom": "FeedBack_bottom__3Lkrj",
	"bottom_content": "FeedBack_bottom_content__3uJoo",
	"description": "FeedBack_description__13_Hn",
	"date_likes_container": "FeedBack_date_likes_container__PXkdx",
	"date": "FeedBack_date__28cgU",
	"vertical_border": "FeedBack_vertical_border__4JLbW",
	"likes_dislikes": "FeedBack_likes_dislikes__3TA_D",
	"like": "FeedBack_like___TiIr",
	"disLike": "FeedBack_disLike__dTh0f"
};


/***/ }),

/***/ "./components/Pages/common/Testimonials/FeedBack/LikeDislikeDrop/LikeDislikeDrop.module.scss":
/*!***************************************************************************************************!*\
  !*** ./components/Pages/common/Testimonials/FeedBack/LikeDislikeDrop/LikeDislikeDrop.module.scss ***!
  \***************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LikeDislikeDrop_container__1CW76",
	"transition": "LikeDislikeDrop_transition__lxZtS",
	"content": "LikeDislikeDrop_content__9Y_1e",
	"row": "LikeDislikeDrop_row__1IL4A",
	"avatar": "LikeDislikeDrop_avatar__8Iz4z",
	"user_part": "LikeDislikeDrop_user_part__2cy98"
};


/***/ }),

/***/ "./components/Pages/common/Testimonials/LeaveComment/LeaveComment.module.scss":
/*!************************************************************************************!*\
  !*** ./components/Pages/common/Testimonials/LeaveComment/LeaveComment.module.scss ***!
  \************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LeaveComment_container__2is6f",
	"stars_container": "LeaveComment_stars_container__3oukj",
	"stars_content": "LeaveComment_stars_content__25vFA",
	"stars_area": "LeaveComment_stars_area__XNaIN",
	"textarea_container": "LeaveComment_textarea_container__38wG3",
	"button_container": "LeaveComment_button_container__2mOnf"
};


/***/ }),

/***/ "./components/Pages/common/Testimonials/Pagination/Pagination.module.scss":
/*!********************************************************************************!*\
  !*** ./components/Pages/common/Testimonials/Pagination/Pagination.module.scss ***!
  \********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Pagination_container__OU_ZR",
	"round": "Pagination_round__3bheV",
	"active": "Pagination_active__2Cfbv"
};


/***/ }),

/***/ "./components/Pages/common/Testimonials/Sorting/Sorting.module.scss":
/*!**************************************************************************!*\
  !*** ./components/Pages/common/Testimonials/Sorting/Sorting.module.scss ***!
  \**************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Sorting_container__2Lhv8",
	"name": "Sorting_name__3soQ8",
	"bar": "Sorting_bar__1mbHD",
	"byDate": "Sorting_byDate__3_Bz-",
	"active": "Sorting_active__3a1aL"
};


/***/ }),

/***/ "./components/Pages/common/Testimonials/Testimonials.module.scss":
/*!***********************************************************************!*\
  !*** ./components/Pages/common/Testimonials/Testimonials.module.scss ***!
  \***********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Testimonials_container__3LArP",
	"feed_backs_container": "Testimonials_feed_backs_container__395hk",
	"carousel": "Testimonials_carousel__2rrVV"
};


/***/ }),

/***/ "./components/Pages/common/Title/Title.module.scss":
/*!*********************************************************!*\
  !*** ./components/Pages/common/Title/Title.module.scss ***!
  \*********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Title_container__1g3-g"
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

/***/ "next-translate/loadNamespaces":
/*!************************************************!*\
  !*** external "next-translate/loadNamespaces" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-translate/loadNamespaces");;

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

/***/ "react-calendar":
/*!*********************************!*\
  !*** external "react-calendar" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-calendar");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-elastic-carousel":
/*!*****************************************!*\
  !*** external "react-elastic-carousel" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-elastic-carousel");;

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

/***/ "react-timer-hook":
/*!***********************************!*\
  !*** external "react-timer-hook" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-timer-hook");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01haW4uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL0Fycm93cy9BcnJvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvR2FtZVJ1bGVzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL1NsaWRlUGFnZS9QYWdlUGFyZXRpY2xlcy9QYWdlUGFyZXRpY2xlcy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvU2xpZGVQYWdlL1NsaWRlUGFnZXMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL2dhbWVfcnVsZXMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL01hdGNoZXMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9BcnJvd3MvQXJyb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9URE1hdGNoZXNCb2FyZC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvd0Rlc2NyaXB0aW9uL1Jvd0Rlc2NyaXB0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1IZWFkZXIvRGF5Q2hhbmdlQnV0dG9uL0RheUNoYW5nZUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1IZWFkZXIvVE1IZWFkZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlcy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9OZXdzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvQXJyb3dzL0Fycm93LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvSXRlbU1vZGFsL0l0ZW1Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL0l0ZW0vSXRlbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9zbGlkZV9zaG93X2RhdGEuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9BcnJvd3MvQXJyb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vSXRlbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvSXRlbS9QcmVkaWN0aW9uTW9kYWwvUHJlZGljdGlvbk1vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9JdGVtL1RpbWVyL1RpbWVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9QcmRlaWN0aW9uU2xpZGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvQXJyb3dzL0Fycm93LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9GZWVkQmFjay9GZWVkQmFjay5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvRmVlZEJhY2svTGlrZURpc2xpa2VEcm9wL0xpa2VEaXNsaWtlRHJvcC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvTGVhdmVDb21tZW50L0xlYXZlQ29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9Tb3J0aW5nL1NvcnRpbmcuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvZmVlZF9iYWNrX2RhdGEuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UaXRsZS9UaXRsZS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvZXIubGliLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2F2YXRhci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2Rpc2xpa2UucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9maWxsZWRTdGFyLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvbGlrZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9DYWxlbmRhci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd0xlZnQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dSaWdodC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd0xlZnQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dSaWdodC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9mb3J0QmFjay5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9zZWNCYWNrLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL3RyZEJhY2sucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0LnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93TGVmdFZlY3Rvci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd1JpZ2h0LnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHRWZWN0b3IucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYmFyY2EucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHJlZEJhY2sucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHNqLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9zbGlkZUJhY2sucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL0Fycm93cy9BcnJvdy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9HYW1lUnVsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL1NsaWRlUGFnZS9QYWdlUGFyZXRpY2xlcy9QYWdlUGFydGljYWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9TbGlkZVBhZ2UvU2xpZGVQYWdlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9NYXRjaGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9BcnJvd3MvQXJyb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvVERNYXRjaGVzQm9hcmQvVERNYXRjaGVzQm9hcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvdy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3dEZXNjcmlwdGlvbi9Sb3dEZXNjcmlwdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUhlYWRlci9EYXlDaGFuZ2VCdXR0b24vRGF5Q2hhbmdlQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNSGVhZGVyL1RNSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL05ld3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvQXJyb3dzL0Fycm93Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvU2xpZGUvU2xpZGVJdGVtcy9JdGVtTW9kYWwvSXRlbU1vZGFsLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvU2xpZGUvU2xpZGVJdGVtcy9JdGVtL0l0ZW0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvQXJyb3dzL0Fycm93Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vSXRlbS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9JdGVtL1ByZWRpY3Rpb25Nb2RhbC9QcmVkaWN0aW9uTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvUHJkZWljdGlvblNsaWRlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vQnV0dG9uL0J1dHRvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9BcnJvd3MvQXJyb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvRmVlZEJhY2svRmVlZEJhY2subW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvRmVlZEJhY2svTGlrZURpc2xpa2VEcm9wL0xpa2VEaXNsaWtlRHJvcC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9MZWF2ZUNvbW1lbnQvTGVhdmVDb21tZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9Tb3J0aW5nL1NvcnRpbmcubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvVGVzdGltb25pYWxzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGl0bGUvVGl0bGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1jYWxlbmRhclwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdGltZXItaG9va1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJ5dXBcIiIsIndlYnBhY2s6Ly9mb290LWJldC9pZ25vcmVkfEM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxccHJvamVjdHNcXGFpdC1wcm9qZWN0c1xcZm9vdC1iZXRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJNYWluIiwiQXJyb3ciLCJ0eXBlIiwib25DbGljayIsImlzRWRnZSIsInBvaW50ZXIiLCJjb25zdHMiLCJhcnJvd0xlZnQiLCJhcnJvd1N0eWxlcyIsImFycm93UmlnaHQiLCJzdHlsZXMiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsImJvdHRvbSIsIkdhbWVSdWxlcyIsIlBhZ2luYXRpb24iLCJnYW1lX3J1bGVzIiwiZWwiLCJNYXRoIiwicmFuZG9tIiwicGFnZXMiLCJhY3RpdmVQYWdlIiwibWFwIiwiaXNBY3RpdmVQYWdlIiwiUGFnZVBhcnRpY2xlcyIsInRpdGxlIiwiYm9keSIsIlNsaWRlUGFnZXMiLCJwYWdlRGF0YSIsIkhlYWRlciIsImJ1dHRvbnNBY3Rpdml0eSIsIm9uX1RNX2NsaWNrIiwib25fR01fY2xpY2siLCJnYW1lUnVsZXNTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiTWF0Y2hlcyIsInNob3dUb2RheU1hdGNoZXMiLCJzZXRTaG93VG9kYXlNYXRjaGVzIiwidXNlU3RhdGUiLCJzaG93R2FtZVJ1bGVzIiwic2V0U2hvd0dhbWVSdWxlcyIsIlRETWF0Y2hlc0JvYXJkIiwiZmlyc3RQYWdlIiwic2V0Rmlyc3RQYWdlIiwic2Vjb25kUGFnZSIsInNldFNlY29uZFBhZ2UiLCJmaXJzdFBhZ2VJdGVtcyIsInVwRGF0ZUZpcnN0UGFnZUl0ZW1zIiwic2Vjb25kUGFnZUl0ZW1zIiwidXBEYXRlU2Vjb25kUGFnZUl0ZW1zIiwibWF0Y2hlcyIsInNldE1hdGNoZXMiLCJ1c2VFZmZlY3QiLCJmaWx0ZXIiLCJpIiwicmVxdWVzdCIsIkdFVF9NQVRDSEVTIiwiYXV0aCIsInRoZW4iLCJub3ciLCJEYXRlIiwiZGF0YSIsIm1hdGNoIiwibWF0Y2hUaW1lIiwiZGF0ZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJ0aW1lIiwiZ2V0VGltZSIsImlkIiwiZ2FtZVN0YXRlIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW0xX2ltZ19wYXRoIiwidGVhbVR3b05hbWUiLCJ0ZWFtVHdvSWNvbiIsInRlYW0yX2ltZ19wYXRoIiwic2NvcmUiLCJidXlCdXR0b25OYW1lIiwiY29lZmZpY2VudCIsInRpdGxlTmFtZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZSIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwiaXRlbXMiLCJBcnJheSIsImZyb20iLCJyZW9yZGVyZWRJdGVtIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlIiwicHJvdmlkZWQiLCJkcm9wcGFibGVQcm9wcyIsImlubmVyUmVmIiwiZHJhZ2dhYmxlUHJvcHMiLCJkcmFnSGFuZGxlUHJvcHMiLCJwdXNoIiwicXVlcnkiLCJnYW1lIiwicGxhY2Vob2xkZXIiLCJtaW5IZWlnaHQiLCJUTU1hdGNoZXNCb2FyZCIsIkdFVF9NQVRDSEVTX09GX05FWFRfREFZIiwiUm93IiwidGVhbU9uZSIsInRlYW1Ud28iLCJjbGlja0J1eSIsInRyYXNubGF0aW9uTG9jYXRpb24iLCJSb3dEZXNjcmlwdGlvbiIsImxvY2F0aW9uSW5NYWluUGFnZSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsImdhbWVTdGFydGVkIiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsIlJvd1RpdGxlIiwiY29udGVudCIsIkRheUNoYW5nZUJ1dHRvbiIsIm5hbWUiLCJhY3RpdmUiLCJjbGljayIsIlRNSGVhZGVyIiwiY2xpY2tURCIsImNsaWNrVE0iLCJUREJvYXJkU3RhdGUiLCJUTUJvYXJkU3RhdGUiLCJnZXRfZGF0ZSIsInZhbHVlIiwiZGF5IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldERhdGUiLCJzaG93Q2FsZW5kYXIiLCJzZXRTaG93Q2FsZW5kYXIiLCJjYWxlbmRhciIsInNyYyIsIlRvZGF5TWF0Y2hlcyIsInNob3dUb2RheUdhbWVzIiwic2V0U2hvd1RvZGF5R2FtZXMiLCJzaG93VG9tb3Jyb3dHYW1lcyIsInNldFNob3dUb21vcnJvd0dhbWVzIiwiTmV3cyIsIlNsaWRlIiwic2xpZGVfZGF0YSIsInNldFNsaWRlRGF0YSIsIkdFVF9ORVdTIiwibmV3cyIsImJyZWFrcG9pbnRzIiwiaXRlbXNUb1Nob3ciLCJpdGVtc1RvU2Nyb2xsIiwiaW1nX3BhdGgiLCJ0ZXh0IiwiSXRlbU1vZGFsIiwib25Nb2RhbENsb3NlIiwiaW1nIiwiZGVzY3JpcHRpb24iLCJJdGVtIiwiaW1nX3NyYyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJzaG93SXRlbU1vZGFsIiwic2V0U2hvd0l0ZW1Nb2RhbCIsImxpbmVPbmUiLCJsaW5lVHdvIiwic2xpZGVfc2hvd19kYXRhIiwidXJsIiwiYmFja0ljb24iLCJzZWNCYWNrIiwidHJkQmFjayIsImZvcnRCYWNrIiwiUHJlZGljdGlvbiIsImFycm93cyIsImFycm93UmlnaHRWZWN0b3IiLCJhcnJvd0xlZnRWZWN0b3IiLCJoZWlnaHQiLCJwcmVkaWN0aW9uQnV0dG9uTmFtZSIsImV4cGlyeVRpbWVzdGFtcCIsInByZWRpY3Rpb24iLCJvcmRpbmFyIiwic2hvd1ByZWRpY3Rpb24iLCJzZXRTaG93UHJlZGljdGlvbiIsImdvVG9QcmVkaWN0aW9ucyIsInRpbWVyIiwiUHJlZGljdGlvbk1vZGFsIiwiVGltZXIiLCJ0aW1lQ2xhc3MiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwidXNlVGltZXIiLCJvbkV4cGlyZSIsIndhcm4iLCJQcmRlaWN0aW9uU2xpZGUiLCJjdXJyZW50TWF0Y2hJZCIsInNldEN1cnJlbnRNYXRjaElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkdFVF9QUkVESUNUSU9OUyIsInJzcCIsIml0ZW0iLCJ0aGVyZUlzIiwidG90YWxCZXQiLCJmYWN0b3IiLCJwcmVkaWN0aW9uVGV4dCIsIm9yZGluYXJUZXh0IiwicHJpY2UiLCJsZW5ndGgiLCJlcnJvciIsInVuZGVmaW5lZCIsInNldE1hdGNoSWQiLCJwcmVkaWN0aW9uQmFja2dyb3VuZCIsIml0ZW1QYWRkaW5nIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJzbGlkZUNoYW5nZSIsInAiLCJCdXR0b24iLCJwYWdlIiwidGV4dFBhdGhOYW1lIiwibG9jYXRpb25JblBhZ2UiLCJhZGl0aW9uYWxTdHlsZXMiLCJjb250YWluZXJTdHlsZXMiLCJGZWVkQmFjayIsImF2YXRhciIsIm5pa05hbWUiLCJyYXRlaW5nIiwibGlrZXMiLCJkaXNMaWtlcyIsInJlYWN0aW9uc0ZvclRlc3RpbmciLCJzdGFycyIsInNob3dSZWFjdGlvbnMiLCJzZXRTaG93UmVhY3Rpb25zIiwiZmlsbGVkU3RhciIsInVuZmlsbGVkU3RhciIsImxpa2VJY29uIiwiZGlzTGlrZUljb24iLCJMaWtlRGlzbGlrZURyb3AiLCJ1c2VybmFtZSIsInJlYWN0aW9uIiwiTGVhdmVDb21tZW50Iiwic2ltdWxhdG9yIiwic2V0U2ltdWxhdG9yIiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJjb21tZW50IiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJzdWJtaXQiLCJyYXRlIiwiU29ydGluZyIsInNvcnRpbmdUZXh0IiwiZGF0ZVNvcnRpbmdUZXh0IiwicmF0ZVNvcnRpbmciLCJzb3J0QnlEYXRlIiwic29ydEJ5UmF0ZSIsImRhdGVBY3RpdmUiLCJUZXN0aW1vbmlhbHMiLCJtYXRjaElkIiwidXNlU2VsZWN0b3IiLCJnZXRNYXRjaElkIiwiZmVlZEJhY2tzIiwic2V0RmVlZEJhY2tzIiwic2V0RGF0ZUFjdGl2ZSIsIkdFVF9GRUVEQkFDSyIsInByZWRpY3Rpb25zIiwiZmVlZEJhY2siLCJyZW5kZXJGb3JtYXQiLCJzb3J0Rm9ybWF0IiwibGlrZUNvdW50IiwiZGlzbGlrZUNvdW50Iiwic29ydGluZyIsInRvU29ydCIsInNvcnRpbmdCeSIsImRhdGFGb3JTb3J0aW5nIiwicmVkdWNlIiwiYWMiLCJjb25jYXQiLCJzb3J0ZWREYXRhIiwic29ydGVkIiwic29ydCIsImEiLCJiIiwiY2VpbCIsInNvcnRlZEl0ZW1zIiwiZm9yRWFjaCIsIngiLCJyZWFjdGlvbnMiLCJmZWVkYmFja19kYXRhIiwiVGl0bGUiLCJ0ZXh0U3R5bGVzIiwiaHJlZiIsImNsYXNzZXMiLCJjdXJzb3IiLCJoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbiIsImRvY3VtZW50Iiwib3ZlcmZsb3dZIiwiaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlIiwiTW9kYWwiLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJjb250ZW50U3R5bGVzIiwib3RoZXJTdHlsZXMiLCJwb3J0YWxMb2NhdGlvbiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJub2RlIiwidXNlUmVmIiwiZSIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRpbmFtaWNUb3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwibW9kYWwiLCJ0b3AiLCJjcmVhdGVQb3J0YWwiLCJnZXRFbGVtZW50QnlJZCIsImhvc3QiLCJwYXlsb2FkIiwib3B0aW9ucyIsIlByb21pc2UiLCJyc2x2IiwicmpjdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0Q29va2llIiwiT2JqZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJmaW5hbGx5IiwibmFtZUVRIiwiY2EiLCJjb29raWUiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInJlbW92ZUNvb2tpZSIsInNldENvb2tpZSIsImRheXMiLCJleHBpcmVzIiwic2V0VGltZSIsInRvVVRDU3RyaW5nIiwiQVVUSF9VUkwiLCJBQ0NPVU5UX1VSTCIsIlJFR0lTVEVSIiwiTE9HSU4iLCJHRVRfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU5GTyIsIkNIQU5HRV9BQ0NPVU5UX0lNQUdFIiwiU1RBUlRfUkVTRVRfUEFTU1dPUkQiLCJlbWFpbCIsIlZFUklGWV9QQVNTV09SRF9SRVNFVCIsIlNFVF9ORVdfUEFTU1dPUkQiLCJHRVRfTUFUQ0hFU19CWV9UWVBFIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJhcyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiZGVmYXVsdCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwicmVzb2x2ZSIsInByb20iLCJzZXQiLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsInRvVXBwZXJDYXNlIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImRvbWFpbkl0ZW1zIiwiaG9zdG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsImRvbWFpbkl0ZW0iLCJ0b0xvd2VyQ2FzZSIsIl9pdGVtJGRvbWFpbiIsIl9pdGVtJGxvY2FsZXMiLCJkb21haW5Ib3N0bmFtZSIsImRvbWFpbiIsInNvbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWVQYXJ0cyIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsInBhdGhMb3dlciIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5Iiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiX3RoaXMkbG9jYWxlcyIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ5IiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwicHJvdG9jb2wiLCJwb3J0IiwiU3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIkluZGV4UGFnZSIsImxheW91dCIsImdldFN0YXRpY1Byb3BzIiwiX19sb2FkTmFtZXNwYWNlcyIsImxvYWRlck5hbWUiLCJfX2kxOG5Db25maWciLCJsb2FkTG9jYWxlRnJvbSIsImwiLCJuIiwibWF0Y2hTbGljZSIsImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJhY3Rpb25zIiwicmVkdWNlciIsInBzakljb24iLCJiYXJjYUljb24iLCJhdGxldGljSWNvbiIsInJlbm5haXNJY29uIiwiYXRsZXRpY29JY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNB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Ozs7Ozs7O0FDQXRrQiwrREFBZ0IsQ0FBQyxnS0FBZ0sseU9BQXlPLEU7Ozs7Ozs7Ozs7OztBQ0ExWiwrREFBZ0IsQ0FBQywwSkFBMEosaWJBQWliLEU7Ozs7Ozs7Ozs7OztBQ0E1bEIsK0RBQWdCLENBQUMscUpBQXFKLHFYQUFxWCxFOzs7Ozs7Ozs7O0FDQTNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYW0vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3Avc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCAzIHwgMTYpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gT2JqZWN0LmtleXMobWFwKTsgfTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vbG9jYWxlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC8uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFRlc3RpbW9uaWFscyB9IGZyb20gJy4uL2NvbW1vbi9UZXN0aW1vbmlhbHMvVGVzdGltb25pYWxzJ1xyXG5pbXBvcnQgeyBNYXRjaGVzIH0gZnJvbSAnLi9NYXRjaGVzL01hdGNoZXMnXHJcbmltcG9ydCB7IE5ld3MgfSBmcm9tICcuL05ld3MvTmV3cydcclxuaW1wb3J0IHsgUHJlZGljdGlvbiB9IGZyb20gJy4vUHJlZGljdGlvbi9QcmVkaWN0aW9uJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOZXdzIC8+XHJcbiAgICAgICAgICAgIDxNYXRjaGVzIFxyXG4gICAgICAgICAgICAgICAgZ2FtZVJ1bGVzU3RhdGU9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxQcmVkaWN0aW9uIC8+XHJcbiAgICAgICAgICAgIDxUZXN0aW1vbmlhbHMgXHJcbiAgICAgICAgICAgICAgICBwYWdlPXsnaG9tZSd9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J3Rlc3RpbW9uaWFscyd9XHJcbiAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9eycudGl0bGUnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IGNvbnN0cyB9IGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbi8vIGljb25zXHJcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd1JpZ2h0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dMZWZ0LnBuZydcclxuaW1wb3J0IGFycm93U3R5bGVzIGZyb20gJy4vQXJyb3cubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJyb3coeyB0eXBlLCBvbkNsaWNrLCBpc0VkZ2UgfSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICBwb2ludGVyID0gdHlwZSA9PT0gY29uc3RzLlBSRVYgP1xyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93TGVmdC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93TGVmdH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dSaWdodC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93UmlnaHR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgIC8+LFxyXG5cclxuICAgICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzM1cHgnLFxyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAnMTAlJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRWRnZX1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi9BcnJvd3MvQXJyb3cnXHJcblxyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi9QYWdpbmF0aW9uL1BhZ2luYXRpb24nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vR2FtZVJ1bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBnYW1lX3J1bGVzIH0gZnJvbSAnLi9nYW1lX3J1bGVzJ1xyXG5pbXBvcnQgeyBTbGlkZVBhZ2VzIH0gZnJvbSAnLi9TbGlkZVBhZ2UvU2xpZGVQYWdlcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lUnVsZXMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICByZW5kZXJBcnJvdz17QXJyb3d9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZV9ydWxlcy5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVQYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZURhdGE9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2VzLCBhY3RpdmVQYWdlLCBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVQYWdlID0gYWN0aXZlUGFnZSA9PT0gZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmVQYWdlID8gJ3RydWUnIDogJ2ZhbHNlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZH0gJHtpc0FjdGl2ZVBhZ2UgJiYgc3R5bGVzLmFjdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2VQYXJ0aWNhbGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VQYXJ0aWNsZXMoe1xyXG4gICAgdGl0bGUsXHJcbiAgICBib2R5XHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICB7Ym9keX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IFBhZ2VQYXJ0aWNsZXMgfSBmcm9tIFwiLi9QYWdlUGFyZXRpY2xlcy9QYWdlUGFyZXRpY2xlc1wiO1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TbGlkZVBhZ2VzLm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTbGlkZVBhZ2VzKHtcclxuICAgIHBhZ2VEYXRhXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYWdlRGF0YS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlUGFydGljbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtlbC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keT17ZWwuYm9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGdhbWVfcnVsZXMgPSBbXHJcbiAgICAvLyBlYWNoIGFycmF5IGFyZSBwYWdlIGRhdGEgXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ9Ck0YPRgtCx0L7Quzog0LrQvtC80LDQvdC00LAg0Lgg0LfQsNC/0LDRgdC90YvQtSDQuNCz0YDQvtC60LguJyxcclxuICAgICAgICAgICAgYm9keTogJ9CSINGB0L7RgdGC0LDQsiDQutC+0LzQsNC90LTRiyDQstGF0L7QtNGP0YIgMTEg0YfQtdC70L7QstC10Lo6IDEg0LLRgNCw0YLQsNGA0Ywg0LggMTAg0L/QvtC70LXQstGL0YUg0LjQs9GA0L7QutC+0LIsINC60L7RgtC+0YDRi9C1INCyINGB0LLQvtGOINC+0YfQtdGA0LXQtNGMINC/0L7QtNGA0LDQt9C00LXQu9GP0Y7RgtGB0Y8g0L3QsCDQt9Cw0YnQuNGC0L3QuNC60L7Qsiwg0L/QvtC70YPQt9Cw0YnQuNGC0L3QuNC60L7QsiDQuCDQvdCw0L/QsNC00LDRjtGJ0LjRhS7QkiDQuNCz0YDQsNGFINC90LAg0L7Rh9C60Lgg0Lgg0LIg0LrRg9Cx0LrQvtCy0YvRhSDQuNCz0YDQsNGFINC90LAg0L/RgNC+0YLRj9C20LXQvdC40Lgg0L7QtNC90L7Qs9C+INC80LDRgtGH0LAg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GA0L7QuNC30LLQtdC00LXQvdCwINC30LDQvNC10L3QsCAyINC40LPRgNC+0LrQvtCyINC40Lcg0LrQsNC20LTQvtC5INC60L7QvNCw0L3QtNGLLtCf0YDQvtC00L7Qu9C20LjRgtC10LvRjNC90L7RgdGC0Ywg0LzQsNGC0YfQsCDQvNGD0LbRgdC60LjRhSDQuCDQvNC+0LvQvtC00LXQttC90YvRhSDQutC+0LzQsNC90LQo0YEgMTYg0LTQviAxOCDQu9C10YIpINGB0L7RgdGC0LDQstC70Y/QtdGCIDkwINC80LjQvS4g0JzQsNGC0Ycg0YHQvtGB0YLQvtC40YIg0LjQtyDQtNCy0YPRhSDRgtCw0LnQvNC+0LIg0L/QviA0NSDQvNC40L0u0J/QvtGB0LvQtSDQv9C10YDQtdGA0YvQstCwLCDQvNC40L3QuNC80LDQu9GM0L3QsNGPINC/0YDQvtC00L7Qu9C20LjRgtC10LvRjNC90L7RgdGC0Ywg0LrQvtGC0L7RgNC+0LPQviA1INC80LjQvSwg0LrQvtC80LDQvdC00Ysg0LzQtdC90Y/RjtGC0YHRjyDQstC+0YDQvtGC0LDQvNC4LtCf0L7Qu9C10LLRi9C1INC40LPRgNC+0LrQuCDQvNC+0LPRg9GCINC60LDRgdCw0YLRjNGB0Y8g0LzRj9GH0LAg0LvRjtCx0L7QuSDRh9Cw0YHRgtGM0Y4g0YLQtdC70LAsINC60YDQvtC80LUg0YDRg9C6LtCX0LAg0LjQs9GA0YMg0YDRg9C60L7QuSDQutC+0LzQsNC90LTQtSDQvdCw0LfQvdCw0YfQsNC10YLRgdGPINGI0YLRgNCw0YTQvdC+0Lkg0YPQtNCw0YAg0LjQu9C4IDExLdC80LXRgtGA0L7QstGL0Lkg0YPQtNCw0YAsINC60L7RgtC+0YDRi9C5INCy0YvQv9C+0LvQvdGP0LXRgiDQuNCz0YDQvtC6INC60L7QvNCw0L3QtNGLINGB0L7Qv9C10YDQvdC40LrQsC7QldGB0LvQuCDQvNGP0Ycg0L/QtdGA0LXRgdC10LrQsNC10YIg0LvQuNGG0LXQstGD0Y4g0LvQuNC90LjRjiDQuNC70Lgg0LHQvtC60L7QstGD0Y4g0LvQuNC90LjRjiwg0YLQviDQvtC9INGB0YfQuNGC0LDQtdGC0YHRjyDQstGL0YjQtdC00YjQuNC8INC40Lcg0LjQs9GA0Ysu0JXRgdC70Lgg0LzRj9GHINC/0LXRgNC10YHQtdC6INCx0L7QutC+0LLRg9GOINC70LjQvdC40Y4sINGC0L4g0L7QvSDRgdGH0LjRgtCw0LXRgtGB0Y8g0LLRi9GI0LXQtNGI0LjQvCDQuNC3INC40LPRgNGLLtCV0YHQu9C4INC80Y/RhyDQv9C10YDQtdGB0LXQuiDQsdC+0LrQvtCy0YPRjiDQu9C40L3QuNGOINC/0L7RgdC70LUg0YPQtNCw0YDQsCDQuNCz0YDQvtC60L7QvCDQvtC00L3QvtC5INC60L7QvNCw0L3QtNGLLCDRgtC+INC/0YDQvtC40LfQstC+0LTQuNGC0YHRjyDQstCx0YDQsNGB0YvQstCw0L3QuNC1INC80Y/Rh9CwINC40LPRgNC+0LrQvtC8INC60L7QvNCw0L3QtNGLINGB0L7Qv9C10YDQvdC40LrQsCDRgSDQvNC10YHRgtCwINC/0LXRgNC10YHQtdGH0LXQvdC40Y8g0LHQvtC60L7QstC+0Lkg0LvQuNC90LjQuC7QktCx0YDQsNGB0YvQstCw0Y7RidC40Lkg0YHRgtC+0LjRgiDQu9C40YbQvtC8INC6INC/0L7Qu9GOLCDQvdC+0LPQsNC80Lgg0L3QsCDQsdC+0LrQvtCy0L7QuSDQu9C40L3QuNC4INC40LvQuCDQt9CwINC10LUg0L/RgNC10LTQtdC70LDQvNC4INC4INCy0LHRgNCw0YHRi9Cy0LDQtdGCINC80Y/RhyDQvtCx0LXQuNC80Lgg0YDRg9C60LDQvNC4INC40LctINC30LAg0LPQvtC70L7QstGLLtCV0YHQu9C4INC+0YIg0YPQtNCw0YDQsCDRgdC+0L/QtdGA0L3QuNC60LAg0LzRj9GHINC/0LXRgNC10YHQtdC60LDQtdGCINC70LjRhtC10LLRg9GOINC70LjQvdC40Y4sINGC0L4g0YHRg9C00YzRjyDQvdCw0LfQvdCw0YfQsNC10YIg0YPQtNCw0YAg0L7RgiDQstC+0YDQvtGCLCDQv9GA0Lgg0LrQvtGC0L7RgNC+0Lwg0YPQtNCw0YAg0L/QviDQvNGP0YfRgyDQv9GA0L7QuNC30LLQvtC00LjRgtGB0Y8g0LjQtyDQstGA0LDRgtCw0YDRgdC60L7QuSDQv9C70L7RidCw0LTQutC4LtCV0YHQu9C4INC80Y/RhyDQv9C+0YHQu9C1INGD0LTQsNGA0LAg0LjQs9GA0L7QutC+0Lwg0L/QtdGA0LXRgdC10LrQsNC10YIg0LvQuNGG0LXQstGD0Y4g0LvQuNC90LjRjiDQtdCz0L4g0LrQvtC80LDQvdC00YssINGC0L4g0YHRg9C00YzRjyDQvdCw0LfQvdCw0YfQsNC10YIg0YPQs9C70L7QstC+0Lkg0YPQtNCw0YAu0JPQvtC7INGB0YfQuNGC0LDQtdGC0YHRjyDQt9Cw0LHQuNGC0YvQvCwg0LXRgdC70Lgg0LzRj9GHINC/0LXRgNC10YHQtdC6INC70LjQvdC40Y4g0LLQvtGA0L7RgiDQvNC10LbQtNGDINCx0L7QutC+0LLRi9C80Lgg0YHRgtC+0LnQutCw0LzQuCDQuCDQv9C+0LQg0L/QtdGA0LXQutC70LDQtNC40L3QvtC5INCy0L7RgNC+0YIu0KHQvtCz0LvQsNGB0L3QviDQv9GA0LDQstC40LvQsNC8LCDRgdGD0YnQtdGB0YLQstGD0LXRgiDQtNCy0LAg0LLQuNC00LAg0YPQtNCw0YDQvtCyOiDRiNGC0YDQsNGE0L3QvtC5INGD0LTQsNGAINC4INGB0LLQvtCx0L7QtNC90YvQuSDRg9C00LDRgC7QqNGC0YDQsNGE0L3QvtC5INGD0LTQsNGAINC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0LfQsCDQvdC10YfQtdGB0YLQvdGD0Y4g0LjQs9GA0YMg0LjQu9C4INC30LAg0LjQs9GA0YMg0YDRg9C60L7QuS7QodCy0L7QsdC+0LTQvdGL0Lkg0YPQtNCw0YAg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDQt9CwINC90LXQv9GA0LXQtNC90LDQvNC10YDQtdC90L3QvtC1INC90LDRgNGD0YjQtdC90LjQtSDQv9GA0LDQstC40Lsg0LjQu9C4INC30LAg0L3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C1INC40LPRgNC+0LLRi9C1INC00LXQudGB0YLQstC40Y8u0J/RgNC4INCy0YvQv9C+0LvQvdC10L3QuNC4INGB0LLQvtCx0L7QtNC90L7Qs9C+INGD0LTQsNGA0LAg0LPQvtC7INCx0YPQtNC10YIg0LfQsNGB0YfQuNGC0LDQvSDQsiDRgtC+0Lwg0YHQu9GD0YfQsNC1LCDQtdGB0LvQuCDQvNGP0YfQsCDQutC+0YHQvdGD0LvRgdGPINC10YnQtSDQvtC00LjQvSDQuNCz0YDQvtC6LCDQutGA0L7QvNC1INC/0L7QtNCw0Y7RidC10LPQvi4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnINCk0YPRgtCx0L7QuzogwqvQn9C+0LvQvtC20LXQvdC40LUg0LLQvdC1INC40LPRgNGLwrsuJyxcclxuICAgICAgICAgICAgYm9keTogJ9Cf0YDQsNCy0LjQu9C+IMKr0LLQvdC1INC40LPRgNGLwrsg0LfQsNC/0YDQtdGJ0LDQtdGCINC40LPRgNC+0LrQsNC8INCw0YLQsNC60YPRjtGJ0LXQuSDQutC+0LzQsNC90LTRiyDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuiDQu9C40L3QuNC4INCy0L7RgNC+0YIg0YHQvtC/0LXRgNC90LjQutCwINCx0LvQuNC20LUsINGH0LXQvCDQt9Cw0YnQuNGC0L3QuNC60Lgg0YHQvtC/0LXRgNC90LjQutCwLtCV0YHQu9C4INCyINC80L7QvNC10L3RgiDQv9C10YDQtdC00LDRh9C4INC80Y/Rh9CwINC80LXQttC00YMg0LjQs9GA0L7QutC+0Lwg0Lgg0LvQuNC90LjQtdC5INCy0L7RgNC+0YIg0YHQvtC/0LXRgNC90LjQutCwINC90LDRhdC+0LTQuNGC0YHRjyDQvNC10L3QtdC1INC00LLRg9GFINC40LPRgNC+0LrQvtCyINC60L7QvNCw0L3QtNGLINGB0L7Qv9C10YDQvdC40LrQsCwg0LLQutC70Y7Rh9Cw0Y8g0LLRgNCw0YLQsNGA0Y8sINGC0L4g0YLQsNC60L7QuSDQuNCz0YDQvtC6INCx0YPQtNC10YIg0LIg0L/QvtC70L7QttC10L3QuNC4IMKr0LLQvdC1INC40LPRgNGLwrsuINCf0YDQuCDQv9C+0LvQvtC20LXQvdC40LggwqvQstC90LUg0LjQs9GA0YvCuyDQvdCw0LfQvdCw0YfQsNC10YLRgdGPINGB0LLQvtCx0L7QtNC90YvQuSDRg9C00LDRgC7Qn9C+0LvQvtC20LXQvdC40LUgwqvQstC90LUg0LjQs9GA0YvCuyDQvdC1INGE0LjQutGB0LjRgNGD0LXRgtGB0Y8g0L/RgNC4INCw0L3QsNC70L7Qs9C40YfQvdC+0Lkg0YHQuNGC0YPQsNGG0LjQuCDQvdCwINGB0LLQvtC10Lkg0L/QvtC70L7QstC40L3QtSDQv9C+0LvRjywg0L/RgNC4INCy0YvQv9C+0LvQvdC10L3QuNC4INGD0LTQsNGA0L7QsiDQvtGCINCy0L7RgNC+0YIsINGD0LPQu9C+0LLRi9GFINGD0LTQsNGA0L7Qsiwg0L/RgNC4INCy0LHRgNCw0YHRi9Cy0LDQvdC40Lgg0LjQtyAtINC30LAg0LHQvtC60L7QstC+0Lkg0LvQuNC90LjQuCDQuCDQv9GA0Lgg0YHQv9C+0YDQvdC+0Lwg0LLQsdGA0LDRgdGL0LLQsNC90LjQuC4nXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn0KTRg9GC0LHQvtC7OiDQutC+0LzQsNC90LTQsCDQuCDQt9Cw0L/QsNGB0L3Ri9C1INC40LPRgNC+0LrQuC4nLFxyXG4gICAgICAgICAgICBib2R5OiAn0JIg0YHQvtGB0YLQsNCyINC60L7QvNCw0L3QtNGLINCy0YXQvtC00Y/RgiAxMSDRh9C10LvQvtCy0LXQujogMSDQstGA0LDRgtCw0YDRjCDQuCAxMCDQv9C+0LvQtdCy0YvRhSDQuNCz0YDQvtC60L7Qsiwg0LrQvtGC0L7RgNGL0LUg0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00Ywg0L/QvtC00YDQsNC30LTQtdC70Y/RjtGC0YHRjyDQvdCwINC30LDRidC40YLQvdC40LrQvtCyLCDQv9C+0LvRg9C30LDRidC40YLQvdC40LrQvtCyINC4INC90LDQv9Cw0LTQsNGO0YnQuNGFLtCSINC40LPRgNCw0YUg0L3QsCDQvtGH0LrQuCDQuCDQsiDQutGD0LHQutC+0LLRi9GFINC40LPRgNCw0YUg0L3QsCDQv9GA0L7RgtGP0LbQtdC90LjQuCDQvtC00L3QvtCz0L4g0LzQsNGC0YfQsCDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YDQvtC40LfQstC10LTQtdC90LAg0LfQsNC80LXQvdCwIDIg0LjQs9GA0L7QutC+0LIg0LjQtyDQutCw0LbQtNC+0Lkg0LrQvtC80LDQvdC00Ysu0J/RgNC+0LTQvtC70LbQuNGC0LXQu9GM0L3QvtGB0YLRjCDQvNCw0YLRh9CwINC80YPQttGB0LrQuNGFINC4INC80L7Qu9C+0LTQtdC20L3Ri9GFINC60L7QvNCw0L3QtCjRgSAxNiDQtNC+IDE4INC70LXRgikg0YHQvtGB0YLQsNCy0LvRj9C10YIgOTAg0LzQuNC9LiDQnNCw0YLRhyDRgdC+0YHRgtC+0LjRgiDQuNC3INC00LLRg9GFINGC0LDQudC80L7QsiDQv9C+IDQ1INC80LjQvS7Qn9C+0YHQu9C1INC/0LXRgNC10YDRi9Cy0LAsINC80LjQvdC40LzQsNC70YzQvdCw0Y8g0L/RgNC+0LTQvtC70LbQuNGC0LXQu9GM0L3QvtGB0YLRjCDQutC+0YLQvtGA0L7Qs9C+IDUg0LzQuNC9LCDQutC+0LzQsNC90LTRiyDQvNC10L3Rj9GO0YLRgdGPINCy0L7RgNC+0YLQsNC80Lgu0J/QvtC70LXQstGL0LUg0LjQs9GA0L7QutC4INC80L7Qs9GD0YIg0LrQsNGB0LDRgtGM0YHRjyDQvNGP0YfQsCDQu9GO0LHQvtC5INGH0LDRgdGC0YzRjiDRgtC10LvQsCwg0LrRgNC+0LzQtSDRgNGD0Lou0JfQsCDQuNCz0YDRgyDRgNGD0LrQvtC5INC60L7QvNCw0L3QtNC1INC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0YjRgtGA0LDRhNC90L7QuSDRg9C00LDRgCDQuNC70LggMTEt0LzQtdGC0YDQvtCy0YvQuSDRg9C00LDRgCwg0LrQvtGC0L7RgNGL0Lkg0LLRi9C/0L7Qu9C90Y/QtdGCINC40LPRgNC+0Log0LrQvtC80LDQvdC00Ysg0YHQvtC/0LXRgNC90LjQutCwLtCV0YHQu9C4INC80Y/RhyDQv9C10YDQtdGB0LXQutCw0LXRgiDQu9C40YbQtdCy0YPRjiDQu9C40L3QuNGOINC40LvQuCDQsdC+0LrQvtCy0YPRjiDQu9C40L3QuNGOLCDRgtC+INC+0L0g0YHRh9C40YLQsNC10YLRgdGPINCy0YvRiNC10LTRiNC40Lwg0LjQtyDQuNCz0YDRiy7QldGB0LvQuCDQvNGP0Ycg0L/QtdGA0LXRgdC10Log0LHQvtC60L7QstGD0Y4g0LvQuNC90LjRjiwg0YLQviDQvtC9INGB0YfQuNGC0LDQtdGC0YHRjyDQstGL0YjQtdC00YjQuNC8INC40Lcg0LjQs9GA0Ysu0JXRgdC70Lgg0LzRj9GHINC/0LXRgNC10YHQtdC6INCx0L7QutC+0LLRg9GOINC70LjQvdC40Y4g0L/QvtGB0LvQtSDRg9C00LDRgNCwINC40LPRgNC+0LrQvtC8INC+0LTQvdC+0Lkg0LrQvtC80LDQvdC00YssINGC0L4g0L/RgNC+0LjQt9Cy0L7QtNC40YLRgdGPINCy0LHRgNCw0YHRi9Cy0LDQvdC40LUg0LzRj9GH0LAg0LjQs9GA0L7QutC+0Lwg0LrQvtC80LDQvdC00Ysg0YHQvtC/0LXRgNC90LjQutCwINGBINC80LXRgdGC0LAg0L/QtdGA0LXRgdC10YfQtdC90LjRjyDQsdC+0LrQvtCy0L7QuSDQu9C40L3QuNC4LtCS0LHRgNCw0YHRi9Cy0LDRjtGJ0LjQuSDRgdGC0L7QuNGCINC70LjRhtC+0Lwg0Log0L/QvtC70Y4sINC90L7Qs9Cw0LzQuCDQvdCwINCx0L7QutC+0LLQvtC5INC70LjQvdC40Lgg0LjQu9C4INC30LAg0LXQtSDQv9GA0LXQtNC10LvQsNC80Lgg0Lgg0LLQsdGA0LDRgdGL0LLQsNC10YIg0LzRj9GHINC+0LHQtdC40LzQuCDRgNGD0LrQsNC80Lgg0LjQty0g0LfQsCDQs9C+0LvQvtCy0Ysu0JXRgdC70Lgg0L7RgiDRg9C00LDRgNCwINGB0L7Qv9C10YDQvdC40LrQsCDQvNGP0Ycg0L/QtdGA0LXRgdC10LrQsNC10YIg0LvQuNGG0LXQstGD0Y4g0LvQuNC90LjRjiwg0YLQviDRgdGD0LTRjNGPINC90LDQt9C90LDRh9Cw0LXRgiDRg9C00LDRgCDQvtGCINCy0L7RgNC+0YIsINC/0YDQuCDQutC+0YLQvtGA0L7QvCDRg9C00LDRgCDQv9C+INC80Y/Rh9GDINC/0YDQvtC40LfQstC+0LTQuNGC0YHRjyDQuNC3INCy0YDQsNGC0LDRgNGB0LrQvtC5INC/0LvQvtGJ0LDQtNC60Lgu0JXRgdC70Lgg0LzRj9GHINC/0L7RgdC70LUg0YPQtNCw0YDQsCDQuNCz0YDQvtC60L7QvCDQv9C10YDQtdGB0LXQutCw0LXRgiDQu9C40YbQtdCy0YPRjiDQu9C40L3QuNGOINC10LPQviDQutC+0LzQsNC90LTRiywg0YLQviDRgdGD0LTRjNGPINC90LDQt9C90LDRh9Cw0LXRgiDRg9Cz0LvQvtCy0L7QuSDRg9C00LDRgC7Qk9C+0Lsg0YHRh9C40YLQsNC10YLRgdGPINC30LDQsdC40YLRi9C8LCDQtdGB0LvQuCDQvNGP0Ycg0L/QtdGA0LXRgdC10Log0LvQuNC90LjRjiDQstC+0YDQvtGCINC80LXQttC00YMg0LHQvtC60L7QstGL0LzQuCDRgdGC0L7QudC60LDQvNC4INC4INC/0L7QtCDQv9C10YDQtdC60LvQsNC00LjQvdC+0Lkg0LLQvtGA0L7Rgi7QodC+0LPQu9Cw0YHQvdC+INC/0YDQsNCy0LjQu9Cw0LwsINGB0YPRidC10YHRgtCy0YPQtdGCINC00LLQsCDQstC40LTQsCDRg9C00LDRgNC+0LI6INGI0YLRgNCw0YTQvdC+0Lkg0YPQtNCw0YAg0Lgg0YHQstC+0LHQvtC00L3Ri9C5INGD0LTQsNGALtCo0YLRgNCw0YTQvdC+0Lkg0YPQtNCw0YAg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDQt9CwINC90LXRh9C10YHRgtC90YPRjiDQuNCz0YDRgyDQuNC70Lgg0LfQsCDQuNCz0YDRgyDRgNGD0LrQvtC5LtCh0LLQvtCx0L7QtNC90YvQuSDRg9C00LDRgCDQvdCw0LfQvdCw0YfQsNC10YLRgdGPINC30LAg0L3QtdC/0YDQtdC00L3QsNC80LXRgNC10L3QvdC+0LUg0L3QsNGA0YPRiNC10L3QuNC1INC/0YDQsNCy0LjQuyDQuNC70Lgg0LfQsCDQvdC10L/RgNCw0LLQuNC70YzQvdGL0LUg0LjQs9GA0L7QstGL0LUg0LTQtdC50YHRgtCy0LjRjy7Qn9GA0Lgg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0YHQstC+0LHQvtC00L3QvtCz0L4g0YPQtNCw0YDQsCDQs9C+0Lsg0LHRg9C00LXRgiDQt9Cw0YHRh9C40YLQsNC9INCyINGC0L7QvCDRgdC70YPRh9Cw0LUsINC10YHQu9C4INC80Y/Rh9CwINC60L7RgdC90YPQu9GB0Y8g0LXRidC1INC+0LTQuNC9INC40LPRgNC+0LosINC60YDQvtC80LUg0L/QvtC00LDRjtGJ0LXQs9C+LidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICcg0KTRg9GC0LHQvtC7OiDCq9Cf0L7Qu9C+0LbQtdC90LjQtSDQstC90LUg0LjQs9GA0YvCuy4nLFxyXG4gICAgICAgICAgICBib2R5OiAn0J/RgNCw0LLQuNC70L4gwqvQstC90LUg0LjQs9GA0YvCuyDQt9Cw0L/RgNC10YnQsNC10YIg0LjQs9GA0L7QutCw0Lwg0LDRgtCw0LrRg9GO0YnQtdC5INC60L7QvNCw0L3QtNGLINC90LDRhdC+0LTQuNGC0YzRgdGPINC6INC70LjQvdC40Lgg0LLQvtGA0L7RgiDRgdC+0L/QtdGA0L3QuNC60LAg0LHQu9C40LbQtSwg0YfQtdC8INC30LDRidC40YLQvdC40LrQuCDRgdC+0L/QtdGA0L3QuNC60LAu0JXRgdC70Lgg0LIg0LzQvtC80LXQvdGCINC/0LXRgNC10LTQsNGH0Lgg0LzRj9GH0LAg0LzQtdC20LTRgyDQuNCz0YDQvtC60L7QvCDQuCDQu9C40L3QuNC10Lkg0LLQvtGA0L7RgiDRgdC+0L/QtdGA0L3QuNC60LAg0L3QsNGF0L7QtNC40YLRgdGPINC80LXQvdC10LUg0LTQstGD0YUg0LjQs9GA0L7QutC+0LIg0LrQvtC80LDQvdC00Ysg0YHQvtC/0LXRgNC90LjQutCwLCDQstC60LvRjtGH0LDRjyDQstGA0LDRgtCw0YDRjywg0YLQviDRgtCw0LrQvtC5INC40LPRgNC+0Log0LHRg9C00LXRgiDQsiDQv9C+0LvQvtC20LXQvdC40LggwqvQstC90LUg0LjQs9GA0YvCuy4g0J/RgNC4INC/0L7Qu9C+0LbQtdC90LjQuCDCq9Cy0L3QtSDQuNCz0YDRi8K7INC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0YHQstC+0LHQvtC00L3Ri9C5INGD0LTQsNGALtCf0L7Qu9C+0LbQtdC90LjQtSDCq9Cy0L3QtSDQuNCz0YDRi8K7INC90LUg0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQv9GA0Lgg0LDQvdCw0LvQvtCz0LjRh9C90L7QuSDRgdC40YLRg9Cw0YbQuNC4INC90LAg0YHQstC+0LXQuSDQv9C+0LvQvtCy0LjQvdC1INC/0L7Qu9GPLCDQv9GA0Lgg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0YPQtNCw0YDQvtCyINC+0YIg0LLQvtGA0L7Rgiwg0YPQs9C70L7QstGL0YUg0YPQtNCw0YDQvtCyLCDQv9GA0Lgg0LLQsdGA0LDRgdGL0LLQsNC90LjQuCDQuNC3IC0g0LfQsCDQsdC+0LrQvtCy0L7QuSDQu9C40L3QuNC4INC4INC/0YDQuCDRgdC/0L7RgNC90L7QvCDQstCx0YDQsNGB0YvQstCw0L3QuNC4LidcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG5dXHJcblxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25ldG5zIFxyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9UaXRsZS9UaXRsZSc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcih7XHJcbiAgICBidXR0b25zQWN0aXZpdHksXHJcbiAgICBvbl9UTV9jbGljayxcclxuICAgIG9uX0dNX2NsaWNrLFxyXG4gICAgZ2FtZVJ1bGVzU3RhdGUgfSkge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgcGFnZT17J2hvbWUnfVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JblBhZ2U9eydtYXRjaGVzJ31cclxuICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17Jy50aXRsZSd9XHJcbiAgICAgICAgICAgICAgICBocmVmPScvbWF0Y2hlcydcclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9tYXRjaGVzJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBudWxsfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBwYWdlPSdob21lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXsnbWF0Y2hlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPXsnLmJ1dHRvbnMuVG9kYXlNYXRjaGVzJ31cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2J1dHRvbnNBY3Rpdml0eX1cclxuICAgICAgICAgICAgICAgICAgICBjbGljaz17b25fVE1fY2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2dhbWVSdWxlc1N0YXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlPSdob21lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J21hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9eycuYnV0dG9ucy5HYW1lUnVsZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9eyFidXR0b25zQWN0aXZpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrPXtvbl9HTV9jbGlja31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IHsgR2FtZVJ1bGVzIH0gZnJvbSBcIi4vR2FtZVJ1bGVzL0dhbWVSdWxlc1wiO1xyXG5pbXBvcnQgeyBUb2RheU1hdGNoZXMgfSBmcm9tIFwiLi9Ub2RheU1hdGNoZXMvVG9kYXlNYXRjaGVzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01hdGNoZXMubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF0Y2hlcyh7IGdhbWVSdWxlc1N0YXRlIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93VG9kYXlNYXRjaGVzLCBzZXRTaG93VG9kYXlNYXRjaGVzXSA9IHVzZVN0YXRlKHRydWUpLFxyXG4gICAgICAgIFtzaG93R2FtZVJ1bGVzLCBzZXRTaG93R2FtZVJ1bGVzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2dhbWVSdWxlc1N0YXRlID8gc3R5bGVzLmNvbnRhaW5lciA6IHN0eWxlcy5pbl9zZXBlcmV0ZV9wYWdlfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNBY3Rpdml0eT17c2hvd1RvZGF5TWF0Y2hlc31cclxuICAgICAgICAgICAgICAgICAgICBvbl9UTV9jbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93VG9kYXlNYXRjaGVzKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dHYW1lUnVsZXMoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbl9HTV9jbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93R2FtZVJ1bGVzKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dUb2RheU1hdGNoZXMoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBnYW1lUnVsZXNTdGF0ZT17Z2FtZVJ1bGVzU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3Nob3dUb2RheU1hdGNoZXMgJiYgPFRvZGF5TWF0Y2hlcyAvPn1cclxuICAgICAgICAgICAgICAgIHtzaG93R2FtZVJ1bGVzICYmIDxHYW1lUnVsZXMgLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IGNvbnN0cyB9IGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbi8vIGljb25zXHJcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd1JpZ2h0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dMZWZ0LnBuZydcclxuaW1wb3J0IGFycm93U3R5bGVzIGZyb20gJy4vQXJyb3cubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJyb3coeyB0eXBlLCBvbkNsaWNrLCBpc0VkZ2UgfSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICBwb2ludGVyID0gdHlwZSA9PT0gY29uc3RzLlBSRVYgP1xyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93TGVmdC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93TGVmdH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dSaWdodC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93UmlnaHR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgIC8+LFxyXG5cclxuICAgICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzM1cHgnLFxyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAnMTAlJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRWRnZX1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlcywgYWN0aXZlUGFnZSwgb25DbGljayB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLm1hcChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlUGFnZSA9IGFjdGl2ZVBhZ2UgPT09IGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2lzQWN0aXZlUGFnZSA/ICd0cnVlJyA6ICdmYWxzZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucm91bmR9ICR7aXNBY3RpdmVQYWdlICYmIHN0eWxlcy5hY3RpdmV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9URE1hdGNoZXNCb2FyZC5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIlxyXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vY29tbW9uL1Jvdy9Sb3dcIlxyXG5pbXBvcnQgeyBSb3dUaXRsZSB9IGZyb20gJy4uL2NvbW1vbi9Sb3cvUm93VGl0bGUvUm93VGl0bGUnXHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi9BcnJvd3MvQXJyb3cnXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuL1BhZ2luYXRpb24vUGFnaW5hdGlvbidcclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX01BVENIRVMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRETWF0Y2hlc0JvYXJkKCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgWyBmaXJzdFBhZ2UsIHNldEZpcnN0UGFnZSBdID0gdXNlU3RhdGUoW10pLFxyXG4gICAgICAgIFsgc2Vjb25kUGFnZSwgc2V0U2Vjb25kUGFnZV0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICAgICAgW2ZpcnN0UGFnZUl0ZW1zLCB1cERhdGVGaXJzdFBhZ2VJdGVtc10gPSB1c2VTdGF0ZShmaXJzdFBhZ2UpLFxyXG4gICAgICAgIFtzZWNvbmRQYWdlSXRlbXMsIHVwRGF0ZVNlY29uZFBhZ2VJdGVtc10gPSB1c2VTdGF0ZShzZWNvbmRQYWdlKSxcclxuICAgICAgICBbIG1hdGNoZXMsIHNldE1hdGNoZXMgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zKCBtYXRjaGVzLmZpbHRlcigoZWwsIGkpID0+IGkgPCA0KSApO1xyXG4gICAgICAgIHVwRGF0ZVNlY29uZFBhZ2VJdGVtcyggbWF0Y2hlcy5maWx0ZXIoKGVsLCBpKSA9PiBpID49IDQpICk7XHJcbiAgICB9LCBbbWF0Y2hlc10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4geyAgICAgICAgXHJcbiAgICAgICAgcmVxdWVzdCggR0VUX01BVENIRVMsIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgICAgICAgLnRoZW4oIG1hdGNoZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIHNldE1hdGNoZXMoIG1hdGNoZXMuZGF0YS5kYXRhLm1hcCggbWF0Y2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaFRpbWUgPSAobmV3IERhdGUoYCR7bWF0Y2guZGF0ZS5zcGxpdChgLmApLnJldmVyc2UoKS5qb2luKGAuYCl9ICR7bWF0Y2gudGltZX1gKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogbWF0Y2guaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogbWF0Y2guZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiBtYXRjaC50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZTogYC5yb3dPbmUuZ2FtZVN0YXRlLiR7IG5vdyA8IG1hdGNoVGltZSA/ICdzdGFydGVkJyA6ICdkb250U3RhcnRlZCd9YCxcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtT25lTmFtZTogYGAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb246IG1hdGNoLnRlYW0xX2ltZ19wYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogbWF0Y2gudGVhbTJfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU6IG1hdGNoLnNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93T25lLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29lZmZpY2VudDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd09uZS50aXRsZSdcclxuICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBlcnIgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyggZmlyc3RQYWdlSXRlbXMgKTtcclxuICAgIH0sIFtmaXJzdFBhZ2VJdGVtc10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZShyZXN1bHQpIHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0XHJcbiAgICAgICAgICAgIGl0ZW1zID0gQXJyYXkuZnJvbShmaXJzdFBhZ2VJdGVtcyksXHJcbiAgICAgICAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKVxyXG4gICAgICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pXHJcblxyXG4gICAgICAgIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zKGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlKHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKHNlY29uZFBhZ2VJdGVtcyksXHJcbiAgICAgICAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKVxyXG4gICAgICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pXHJcblxyXG4gICAgICAgIHVwRGF0ZVNlY29uZFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgaXRlbXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgIGl0ZW1zVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgcmVuZGVyUGFnaW5hdGlvbj17UGFnaW5hdGlvbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBlbmFibGVTd2lwZT17ZmFsc2V9XHJcbiAgICAgICAgLy8gdmVydGljYWxNb2RlXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc0ZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlPXtlbC5nYW1lU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlPXtlbC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU9e2VsLnRpdGxlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT4gcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogJzM0cHgnIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJtYXRjaGVzdG9kYXlNYXRjaGVzU2Vjb25kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNvbmRQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU9e2VsLnRpdGxlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgPFJvd1RpdGxlIHJvd1N0eWxlcz17eyBtaW5IZWlnaHQ6ICczNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UTU1hdGNoZXNCb2FyZC5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIlxyXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vY29tbW9uL1Jvdy9Sb3dcIlxyXG5pbXBvcnQgeyBSb3dUaXRsZSB9IGZyb20gJy4uL2NvbW1vbi9Sb3cvUm93VGl0bGUvUm93VGl0bGUnXHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi8uLi9URE1hdGNoZXNCb2FyZC9BcnJvd3MvQXJyb3cnXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuLy4uL1RETWF0Y2hlc0JvYXJkL1BhZ2luYXRpb24vUGFnaW5hdGlvbidcclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRNTWF0Y2hlc0JvYXJkKCkgeyAgXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbIGZpcnN0UGFnZSwgc2V0Rmlyc3RQYWdlIF0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICAgICAgWyBzZWNvbmRQYWdlLCBzZXRTZWNvbmRQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICBbZmlyc3RQYWdlSXRlbXMsIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zXSA9IHVzZVN0YXRlKGZpcnN0UGFnZSksXHJcbiAgICAgICAgW3NlY29uZFBhZ2VJdGVtcywgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zXSA9IHVzZVN0YXRlKHNlY29uZFBhZ2UpLFxyXG4gICAgICAgIFsgbWF0Y2hlcywgc2V0TWF0Y2hlcyBdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMoIG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA8IDQpICk7XHJcbiAgICAgICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKCBtYXRjaGVzLmZpbHRlcigoZWwsIGkpID0+IGkgPj0gNCkgKTtcclxuICAgIH0sIFttYXRjaGVzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICByZXF1ZXN0KCBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSwge30sIHsgYXV0aDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAudGhlbiggbWF0Y2hlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRNYXRjaGVzKCBtYXRjaGVzLmRhdGEuZGF0YS5tYXAoIG1hdGNoID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG1hdGNoLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IG1hdGNoLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbWF0Y2gudGltZSxcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93T25lLmdhbWVTdGF0ZS5zdGFydGVkJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtT25lTmFtZTogYGAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb246IG1hdGNoLnRlYW0xX2ltZ19wYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogbWF0Y2gudGVhbTJfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU6IG1hdGNoLnNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93T25lLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29lZmZpY2VudDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd09uZS50aXRsZSdcclxuICAgICAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBlcnIgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2UocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgICAgICBjb25zdFxyXG4gICAgICAgICAgICBpdGVtcyA9IEFycmF5LmZyb20oZmlyc3RQYWdlSXRlbXMpLFxyXG4gICAgICAgICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSlcclxuICAgICAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKVxyXG5cclxuICAgICAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZShyZXN1bHQpIHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0XHJcbiAgICAgICAgICAgIGl0ZW1zID0gQXJyYXkuZnJvbShzZWNvbmRQYWdlSXRlbXMpLFxyXG4gICAgICAgICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSlcclxuICAgICAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKVxyXG5cclxuICAgICAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgIGl0ZW1zVG9TaG93PXsxfVxyXG4gICAgICAgICAgICBpdGVtc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICByZW5kZXJBcnJvdz17QXJyb3d9XHJcbiAgICAgICAgICAgIHJlbmRlclBhZ2luYXRpb249e1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgZW5hYmxlU3dpcGU9e2ZhbHNlfVxyXG4gICAgICAgIC8vIHZlcnRpY2FsTW9kZVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNGaXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zmlyc3RQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lPXtlbC50aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+IHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgPFJvd1RpdGxlIHJvd1N0eWxlcz17eyBtaW5IZWlnaHQ6ICczNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc1NlY29uZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vjb25kUGFnZUl0ZW1zLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVJZD17ZWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lPXtlbC50aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT4gcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiAnMzRweCcgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgIClcclxufVxyXG5cclxuIiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBSb3dUaXRsZSB9IGZyb20gJy4vUm93VGl0bGUvUm93VGl0bGUnXHJcbmltcG9ydCB7IFJvd0Rlc2NyaXB0aW9uIH0gZnJvbSAnLi9Sb3dEZXNjcmlwdGlvbi9Sb3dEZXNjcmlwdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Sb3cubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7XHJcbiAgICBkYXRlLFxyXG4gICAgZ2FtZVN0YXRlLFxyXG4gICAgdGVhbU9uZSxcclxuICAgIHRlYW1PbmVJY29uLFxyXG4gICAgc2NvcmUsXHJcbiAgICB0ZWFtVHdvLFxyXG4gICAgdGVhbVR3b0ljb24sXHJcbiAgICBidXlCdXR0b25OYW1lLFxyXG4gICAgdGl0bGVOYW1lLFxyXG4gICAgY2xpY2tCdXlcclxufSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICB0cmFzbmxhdGlvbkxvY2F0aW9uID0gJ21hdGNoZXMuVE0udG9kYXknXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFJvd1RpdGxlXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXt0aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9e3RyYXNubGF0aW9uTG9jYXRpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSb3dEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17Z2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgdGVhbU9uZT17dGVhbU9uZX1cclxuICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXt0ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgIHNjb3JlPXtzY29yZX1cclxuICAgICAgICAgICAgICAgIHRlYW1Ud289e3RlYW1Ud299XHJcbiAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17dGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtidXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXt0cmFzbmxhdGlvbkxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgY2xpY2tCdXk9e2NsaWNrQnV5fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIHRyYW5zbGF0aW9uc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm93RGVzY3JpcHRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gXHJcblxyXG5Sb3dEZXNjcmlwdGlvbih7XHJcbiAgICBjbGlja0J1eSxcclxuICAgIGRhdGUsXHJcbiAgICBnYW1lU3RhdGUsXHJcbiAgICB0ZWFtT25lLFxyXG4gICAgdGVhbU9uZUljb24sXHJcbiAgICBzY29yZSxcclxuICAgIHRlYW1Ud28sXHJcbiAgICB0ZWFtVHdvSWNvbixcclxuICAgIGJ1eUJ1dHRvbk5hbWUsXHJcbiAgICBsb2NhdGlvbkluTWFpblBhZ2VcclxufSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdob21lJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25Jbk1haW5QYWdlfWAsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHsgIGNvbnNvbGUubG9nKGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSA7cmV0dXJuIHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApIH0sXHJcbiAgICAgICAgZ2FtZVN0YXJ0ZWQgPSBnYW1lU3RhdGUuc2xpY2UoZ2FtZVN0YXRlLmxhc3RJbmRleE9mKFwiLlwiKSArIDEpID09PSAnc3RhcnRlZCdcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmRhdGVfZ2FtZU5TdGFydGVkX2NvbnRlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2dhbWVTdGFydGVkID8gc3R5bGVzLmRhdGVfZ2FtZVN0YXJ0ZWRfY29udGVudCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3t0cmFuc2xhdGUoZ2FtZVN0YXRlKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbU9uZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RlYW1PbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1PbmVJY29ufSBhbHQ9e3RlYW1PbmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY29yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Njb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtVHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1Ud29JY29ufSBhbHQ9e3RlYW1Ud299IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RlYW1Ud299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlCdXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9jb250ZW50fSBvbkNsaWNrPXtjbGlja0J1eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZShidXlCdXR0b25OYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIHRyYW5zbGF0aW9uc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Jvd1RpdGxlLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvd1RpdGxlKHsgY29udGVudCwgbG9jYXRpb25Jbk1haW5QYWdlIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignaG9tZScpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5NYWluUGFnZX1gLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA/IHRyYW5zbGF0ZShjb250ZW50KSA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXlDaGFuZ2VCdXR0b24ubW9kdWxlLnNjc3MnXHJcbi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEYXlDaGFuZ2VCdXR0b24oe1xyXG4gICAgbmFtZSxcclxuICAgIGxvY2F0aW9uSW5NYWluUGFnZSxcclxuICAgIGRhdGUsXHJcbiAgICBhY3RpdmUgPSBudWxsLFxyXG4gICAgY2xpY2sgfSkge1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2hvbWUnKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSBgJHtsb2NhdGlvbkluTWFpblBhZ2V9YCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmUgPyBzdHlsZXMuYWN0aXZlX25hbWUgOiBzdHlsZXMubmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthY3RpdmUgPyBzdHlsZXMuYWN0aXZlX2RhdGUgOiBzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL1RpdGxlL1RpdGxlXCI7XHJcbmltcG9ydCB7IERheUNoYW5nZUJ1dHRvbiB9IGZyb20gJy4vRGF5Q2hhbmdlQnV0dG9uL0RheUNoYW5nZUJ1dHRvbic7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tICdyZWFjdC1jYWxlbmRhcic7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVE1IZWFkZXIubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCBjYWxlbmRhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvQ2FsZW5kYXIucG5nJ1xyXG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dSaWdodC5wbmcnXHJcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2Fycm93TGVmdC5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRNSGVhZGVyKHtcclxuICAgIGNsaWNrVEQsXHJcbiAgICBjbGlja1RNLFxyXG4gICAgVERCb2FyZFN0YXRlLFxyXG4gICAgVE1Cb2FyZFN0YXRlIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIGZ1bmN0aW9uc1xyXG4gICAgICAgIC8vIGdldF9kYXRlIHZhbHVlIGNoYW5nZXMgeV9kID0+IHllc3RlcmRheSwgdF9kID0+IHRvZGF5LCB0X3cgPT50b21vcnJvd1xyXG4gICAgICAgIGdldF9kYXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldFxyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBkYXkgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndF9kJzpcclxuICAgICAgICAgICAgICAgICAgICBkYXkgPSBkYXRlLmdldERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndF9tJzpcclxuICAgICAgICAgICAgICAgICAgICBkYXkgPSBkYXRlLmdldERhdGUoKSArIDFcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5ID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYCR7ZGF5fS4ke21vbnRoIDwgMTAgPyBcIjBcIiArIG1vbnRoIDogbW9udGh9LiR7eWVhcn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICBbc2hvd0NhbGVuZGFyLCBzZXRTaG93Q2FsZW5kYXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBwYWdlPXsnaG9tZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JblBhZ2U9eydtYXRjaGVzJ31cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9eycuVE0uaGVhZGVyVGl0bGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheV9jaGFuZ2VfYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPERheUNoYW5nZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPScuVE0uaGVhZGVyQnV0dG9ucy50b2RheSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXsnbWF0Y2hlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2dldF9kYXRlKCd0X2QnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtUREJvYXJkU3RhdGUgPyAnc2hvdycgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17Y2xpY2tURH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXlDaGFuZ2VCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nLlRNLmhlYWRlckJ1dHRvbnMudG9tb3Jyb3cnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5NYWluUGFnZT17J21hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtnZXRfZGF0ZSgndF9tJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17VE1Cb2FyZFN0YXRlID8gJ3Nob3cnIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e2NsaWNrVE19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NhbGVuZGFyLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2FsZW5kYXItaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDYWxlbmRhcighc2hvd0NhbGVuZGFyKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93Q2FsZW5kYXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TmVpZ2hib3JpbmdNb250aD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dExhYmVsPXs8aW1nIHNyYz17YXJyb3dSaWdodC5zcmN9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkxhYmVsPXs8aW1nIHNyYz17YXJyb3dMZWZ0LnNyY30gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVERNYXRjaGVzQm9hcmQgfSBmcm9tICcuL1RNQm9keS9URE1hdGNoZXNCb2FyZC9URE1hdGNoZXNCb2FyZCdcclxuaW1wb3J0IHsgVE1NYXRjaGVzQm9hcmQgfSBmcm9tICcuL1RNQm9keS9UTU1hdGNoZXNCb2FyZC9UTU1hdGNoZXNCb2FyZCdcclxuaW1wb3J0IHsgVE1IZWFkZXIgfSBmcm9tICcuL1RNSGVhZGVyL1RNSGVhZGVyJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RvZGF5TWF0Y2hlcy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb2RheU1hdGNoZXMoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICBbc2hvd1RvZGF5R2FtZXMsIHNldFNob3dUb2RheUdhbWVzXSA9IHVzZVN0YXRlKHRydWUpLFxyXG4gICAgICAgIFtzaG93VG9tb3Jyb3dHYW1lcywgc2V0U2hvd1RvbW9ycm93R2FtZXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUTUhlYWRlclxyXG4gICAgICAgICAgICAgICAgLy8gVEQgPT4gdG9kYXkgZ2FtZXMgYm9hcmQgc2hvcHcgY29uZmlnc1xyXG4gICAgICAgICAgICAgICAgY2xpY2tURD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dUb2RheUdhbWVzKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvbW9ycm93R2FtZXMoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgVERCb2FyZFN0YXRlPXtzaG93VG9kYXlHYW1lc31cclxuICAgICAgICAgICAgICAgIC8vIFRNID0+IHRvbW1vcm93IGdhbWVzIGJvYXJkIHNob3B3IGNvbmZpZ3NcclxuICAgICAgICAgICAgICAgIGNsaWNrVE09eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93VG9kYXlHYW1lcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93VG9tb3Jyb3dHYW1lcyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIFRNQm9hcmRTdGF0ZT17c2hvd1RvbW9ycm93R2FtZXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtzaG93VG9kYXlHYW1lcyAmJiA8VERNYXRjaGVzQm9hcmQgLz59XHJcbiAgICAgICAgICAgIHtzaG93VG9tb3Jyb3dHYW1lcyAmJiA8VE1NYXRjaGVzQm9hcmQgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmV3cy5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50cyBcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi9jb21tb24vVGl0bGUvVGl0bGUnXHJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSAnLi9TbGlkZS9TbGlkZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXdzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUaXRsZSBcclxuICAgICAgICAgICAgICAgIHBhZ2U9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J25ld3MnfVxyXG4gICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPXsnLnRpdGxlJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNsaWRlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgc2xpZGVfc2hvd19kYXRhIH0gZnJvbSAnLi9zbGlkZV9zaG93X2RhdGEnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL1NsaWRlSXRlbXMvSXRlbS9JdGVtJ1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4vU2xpZGVJdGVtcy9BcnJvd3MvQXJyb3cnXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuL1NsaWRlSXRlbXMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBJdGVtTW9kYWwgfSBmcm9tICcuL1NsaWRlSXRlbXMvSXRlbU1vZGFsL0l0ZW1Nb2RhbCdcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2xpZGUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX05FV1MgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2xpZGUoKSB7XHJcblxyXG4gICAgY29uc3QgWyBzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgcmVxdWVzdCggR0VUX05FV1MsIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgICAgICAgLnRoZW4oIG5ld3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGVEYXRhKCBuZXdzLmRhdGEuZGF0YSApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggZXJyICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gY29uc3RzIGFuZCBzdGF0ZXMgXHJcbiAgICAgICAgLy8gYnJlYWtwb2ludHMgZm9yIHNsaWRlIFxyXG4gICAgICAgIGJyZWFrcG9pbnRzID0gW1xyXG4gICAgICAgICAgICB7IHdpZHRoOiAzNzUsIGl0ZW1zVG9TaG93OiAyLCBpdGVtc1RvU2Nyb2xsOiAyIH0sXHJcbiAgICAgICAgICAgIHsgd2lkdGg6IDc0MCwgaXRlbXNUb1Nob3c6IDMsIGl0ZW1zVG9TY3JvbGw6IDMgfSxcclxuICAgICAgICAgICAgeyB3aWR0aDogMTcwMCwgaXRlbXNUb1Nob3c6IDQsIGl0ZW1zVG9TY3JvbGw6IDQgfVxyXG4gICAgICAgIF1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUGFkZGluZz17WzM1LCAxMl19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBhZ2luYXRpb249e1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludHM9e2JyZWFrcG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVfZGF0YS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdfc3JjPXtlbC5pbWdfcGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZWwudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VsLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zdHMgfSBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dSaWdodC5wbmcnXHJcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93TGVmdC5wbmcnXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IGFycm93U3R5bGVzIGZyb20gJy4vQXJyb3cubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJyb3coeyB0eXBlLCBvbkNsaWNrLCBpc0VkZ2UgfSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICBwb2ludGVyID0gdHlwZSA9PT0gY29uc3RzLlBSRVYgP1xyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93TGVmdC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93TGVmdH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dSaWdodC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93UmlnaHR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgIC8+LFxyXG5cclxuICAgICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0VkZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSXRlbU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW1Nb2RhbCh7XHJcbiAgICBvbk1vZGFsQ2xvc2UsXHJcbiAgICBpbWcsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtzdHlsZXMuTWNvbnRhaW5lcn1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17c3R5bGVzLk1jb250ZW50fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSXRlbU1vZGFsIH0gZnJvbSAnLi4vSXRlbU1vZGFsL0l0ZW1Nb2RhbCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0l0ZW0ubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0oe1xyXG4gICAgaW1nX3NyYyxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24gfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBpbWdfc3JjICsgXCIpXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtzaG93SXRlbU1vZGFsLCBzZXRTaG93SXRlbU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wTGluZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZU9uZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmVUd299IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SXRlbU1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbUxpbmVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmVPbmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lVHdvfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dJdGVtTW9kYWwgJiZcclxuICAgICAgICAgICAgICAgIDxJdGVtTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dJdGVtTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17aW1nX3NyY31cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2VzLCBhY3RpdmVQYWdlLCBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYWdlcy5tYXAoZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlUGFnZSA9IGFjdGl2ZVBhZ2UgPT09IGVsXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZVBhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucm91bmR9ICR7aXNBY3RpdmVQYWdlICYmIHN0eWxlcy5hY3RpdmV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBpbWdcclxuaW1wb3J0IHNlY0JhY2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL3NlY0JhY2sucG5nJ1xyXG5pbXBvcnQgdHJkQmFjayBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvdHJkQmFjay5wbmcnXHJcbmltcG9ydCBmb3J0QmFjayBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvZm9ydEJhY2sucG5nJ1xyXG5pbXBvcnQgYmFja0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9zbGlkZUJhY2sucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlX3Nob3dfZGF0YSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignaG9tZScpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICduZXdzLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufSIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJlZGljdGlvbi5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCIuLi8uLi9jb21tb24vVGl0bGUvVGl0bGVcIjtcclxuaW1wb3J0IHsgUHJkZWljdGlvblNsaWRlIH0gZnJvbSBcIi4vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZWRpY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICBwYWdlPSdob21lJ1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JblBhZ2U9J3ByZWRpY3Rpb24nXHJcbiAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9Jy50aXRsZSdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFByZGVpY3Rpb25TbGlkZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IGNvbnN0cyB9IGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbi8vIGljb25zXHJcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd1JpZ2h0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdFZlY3RvciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0VmVjdG9yLnBuZydcclxuaW1wb3J0IGFycm93UmlnaHRWZWN0b3IgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHRWZWN0b3IucG5nJ1xyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgYXJyb3dzID0gdHlwZSA9PT0gY29uc3RzLlBSRVYgP1xyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93UmlnaHRWZWN0b3Iuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd1JpZ2h0VmVjdG9yfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd0xlZnRWZWN0b3Iuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd0xlZnRWZWN0b3J9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgIC8+LFxyXG5cclxuICAgICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNFZGdlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycm93c1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gdHJhbnNsYXRpb25zXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JdGVtLm1vZHVsZS5zY3NzJ1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgVGltZXIgfSBmcm9tICcuL1RpbWVyL1RpbWVyJ1xyXG5pbXBvcnQgeyBQcmVkaWN0aW9uTW9kYWwgfSBmcm9tICcuL1ByZWRpY3Rpb25Nb2RhbC9QcmVkaWN0aW9uTW9kYWwnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0oe1xyXG4gICAgdGVhbU9uZU5hbWUsXHJcbiAgICB0ZWFtVHdvTmFtZSxcclxuICAgIHRlYW1PbmVJY29uLFxyXG4gICAgdGVhbVR3b0ljb24sXHJcbiAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZSxcclxuICAgIGJ1eUJ1dHRvbk5hbWUsXHJcbiAgICBsb2NhdGlvbkluTWFpblBhZ2UsXHJcbiAgICBleHBpcnlUaW1lc3RhbXAsXHJcbiAgICBwcmVkaWN0aW9uLFxyXG4gICAgb3JkaW5hcixcclxuICAgIGNsaWNrQnV5XHJcbn0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc29sZS5sb2coIGV4cGlyeVRpbWVzdGFtcCApO1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2hvbWUnKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSBgJHtsb2NhdGlvbkluTWFpblBhZ2V9YCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgW3Nob3dQcmVkaWN0aW9uLCBzZXRTaG93UHJlZGljdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBmdW5jdGlvbiBnb1RvUHJlZGljdGlvbnMoKSB7XHJcbiAgICAgICAgLy8gc2V0U2hvd1ByZWRpY3Rpb24oIXNob3dQcmVkaWN0aW9uKTtcclxuICAgICAgICByb3V0ZXIucHVzaChgL3ByZWRpY3Rpb25gKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbU9uZUljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGVhbU9uZU5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lcl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+0JjQs9GA0LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YfQtdGA0LXQtzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyeVRpbWVzdGFtcD17ZXhwaXJ5VGltZXN0YW1wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDbGFzcz17c3R5bGVzLnRpbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbVR3b0ljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGVhbVR3b05hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dQcmVkaWN0aW9uICYmIDxQcmVkaWN0aW9uTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lPXt0ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lPXt0ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXt0ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXt0ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb249e3ByZWRpY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFyPXtvcmRpbmFyfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b219PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX2J1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbl9idXR0b25fY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29Ub1ByZWRpY3Rpb25zKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKHByZWRpY3Rpb25CdXR0b25OYW1lKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV5X2J1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV5X2J1dHRvbl9jb250ZW50fSBvbkNsaWNrPXtjbGlja0J1eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmFuc2xhdGUoYnV5QnV0dG9uTmFtZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9QcmVkaWN0aW9uTW9kYWwubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJlZGljdGlvbk1vZGFsKHtcclxuICAgIHRlYW1PbmVOYW1lLFxyXG4gICAgdGVhbVR3b05hbWUsXHJcbiAgICB0ZWFtT25lSWNvbixcclxuICAgIHRlYW1Ud29JY29uLFxyXG4gICAgcHJlZGljdGlvbixcclxuICAgIG9yZGluYXJcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1PbmVJY29ufSBhbHQ9e2Ake3RlYW1PbmVOYW1lfS1pY29uYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZTLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1Ud29JY29ufSBhbHQ9e2Ake3RlYW1Ud29JY29ufS1pY29uYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMub3JkaW5hcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUaW1lciB9IGZyb20gJ3JlYWN0LXRpbWVyLWhvb2snO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVyKHsgZXhwaXJ5VGltZXN0YW1wLCB0aW1lQ2xhc3MgfSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgbWludXRlcyxcclxuICAgICAgICBob3VycyxcclxuICAgIH0gPSB1c2VUaW1lcih7IGV4cGlyeVRpbWVzdGFtcCwgb25FeHBpcmU6ICgpID0+IGNvbnNvbGUud2Fybignb25FeHBpcmUgY2FsbGVkJykgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpbWVDbGFzc30+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7aG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3Vyc31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHttaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHN9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vSXRlbS9JdGVtJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ByZGVpY3Rpb25TbGlkZS5tb2R1bGUuc2NzcydcclxuLy8gaW1hZ2VzLCBpY29uc1xyXG5pbXBvcnQgcHJlZGljdGlvbkJhY2tncm91bmQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3ByZWRCYWNrLnBuZydcclxuaW1wb3J0IHsgc2xpZGVfZGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3NsaWRlJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX1BSRURJQ1RJT05TIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyBzZXRNYXRjaElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvbWF0Y2hTbGljZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcmRlaWN0aW9uU2xpZGUoKSB7XHJcblxyXG4gICAgY29uc3QgWyBzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFsgY3VycmVudE1hdGNoSWQsIHNldEN1cnJlbnRNYXRjaElkIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpPT4ge1xyXG4gICAgICAgIHJlcXVlc3QoIEdFVF9QUkVESUNUSU9OUywge30sIHsgYXV0aDogdHJ1ZSB9IClcclxuICAgICAgICAgICAgLnRoZW4oIHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0b2FzdChgU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRgKVxyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGVEYXRhKCByc3AuZGF0YS5kYXRhLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb246IGl0ZW1bYHRlYW0xX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb246IGl0ZW1bYHRlYW0yX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogaXRlbS50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiBpdGVtLmZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXJUZXh0OiBgJHtpdGVtLnR5cGV9IC8gJHtpdGVtLnByaWNlfdGA0YPQsS5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSArICcg0YDRg9CxLidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHJzcC5kYXRhPy5kYXRhLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudE1hdGNoSWQocnNwLmRhdGEuZGF0YVswXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge30pXHJcbiAgICB9LCBbXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggY3VycmVudE1hdGNoSWQgIT09IG51bGwgJiYgY3VycmVudE1hdGNoSWQgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TWF0Y2hJZChjdXJyZW50TWF0Y2hJZCkpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LCBbY3VycmVudE1hdGNoSWQgXSlcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIHN0eWxlID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgcHJlZGljdGlvbkJhY2tncm91bmQuc3JjICsgXCIpXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWUgPSBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIGJyZWFrcG9pbnRzID0gW1xyXG4gICAgICAgICAgICB7IHdpZHRoOiAzNzUsIGl0ZW1QYWRkaW5nOiBbMjEsIDAsIDI1LCAwXSB9LFxyXG4gICAgICAgICAgICB7IHdpZHRoOiA2MTYsIGl0ZW1QYWRkaW5nOiBbNzksIDAsIDc5LCAwXSB9LFxyXG4gICAgICAgICAgICB7IHdpZHRoOiAxOTIwLCBpdGVtUGFkZGluZzogWzExNSwgMCwgNDMsIDBdIH0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDEwNjAwKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzbGlkZUNoYW5nZShwKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudE1hdGNoSWQoIHA/Lml0ZW0/LmlkICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnRzPXticmVha3BvaW50c31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzbGlkZUNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlX2RhdGEubWFwKGVsID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lPXtlbC5wcmVkaWN0aW9uQnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9eydwcmVkaWN0aW9uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyeVRpbWVzdGFtcD17bmV3IERhdGUoIGAkeyBlbC5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKSB9ICR7ZWwudGltZX1gICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXI9e2VsLm9yZGluYXJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+IHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHtcclxuICAgIHBhZ2UgPSAnY29tbW9uJyxcclxuICAgIHRleHRQYXRoTmFtZSA9IFwiWW91IGFyZSBkb250IHB1dCB0aGVyZSB0ZXh0LlwiLFxyXG4gICAgbG9jYXRpb25JblBhZ2UgPSBcIlwiLFxyXG4gICAgYWRpdGlvbmFsU3R5bGVzID0gbnVsbCxcclxuICAgIGFjdGl2ZSA9IGZhbHNlLFxyXG4gICAgY2xpY2sgPSBudWxsLFxyXG4gICAgY29udGFpbmVyU3R5bGVzID0gbnVsbCB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24ocGFnZSksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25JblBhZ2V9YCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2FkaXRpb25hbFN0eWxlc30gJHthY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogJyd9YH1cclxuICAgICAgICAgICAgc3R5bGU9e2NvbnRhaW5lclN0eWxlc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGVudH1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUodGV4dFBhdGhOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zdHMgfSBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dSaWdodC5wbmcnXHJcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93TGVmdC5wbmcnXHJcbmltcG9ydCBhcnJvd1N0eWxlcyBmcm9tICcuL0Fycm93Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFycm93KHsgdHlwZSwgb25DbGljaywgaXNFZGdlIH0pIHtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgcG9pbnRlciA9IHR5cGUgPT09IGNvbnN0cy5QUkVWID9cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd0xlZnQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd0xlZnR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93UmlnaHQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd1JpZ2h0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctcmlnaHRcIlxyXG4gICAgICAgICAgICAvPixcclxuXHJcbiAgICAgICAgc3R5bGVzID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBib3R0b206ICczNXB4JyxcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogJzEwJSdcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0VkZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvL2hvb2tzIFxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IExpa2VEaXNsaWtlRHJvcCB9IGZyb20gJy4vTGlrZURpc2xpa2VEcm9wL0xpa2VEaXNsaWtlRHJvcCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GZWVkQmFjay5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IGxpa2VJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2xpa2UucG5nJ1xyXG5pbXBvcnQgZGlzTGlrZUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZGlzbGlrZS5wbmcnXHJcbmltcG9ydCBmaWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2ZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgdW5maWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZlZWRCYWNrKHtcclxuICAgIGF2YXRhcixcclxuICAgIG5pa05hbWUsXHJcbiAgICByYXRlaW5nLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkYXRlLFxyXG4gICAgbGlrZXMsXHJcbiAgICBkaXNMaWtlcyxcclxuICAgIHJlYWN0aW9uc0ZvclRlc3RpbmdcclxufSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgc3RhcnMgPSBbMCwgMSwgMiwgMywgNF0sXHJcbiAgICAgICAgW3Nob3dSZWFjdGlvbnMsIHNldFNob3dSZWFjdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3B9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJ9IGFsdD17bmlrTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bmlrTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0ZWluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFycy5tYXAoKGVsLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwgPCByYXRlaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtNYXRoLnJhbmRvbSgpfSBzcmM9e2ZpbGxlZFN0YXIuc3JjfSBhbHQ9XCJzdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e01hdGgucmFuZG9tKCl9IHNyYz17dW5maWxsZWRTdGFyLnNyY30gYWx0PVwic3RhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV9saWtlc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpa2VzX2Rpc2xpa2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlrZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpa2VJY29uLnNyY30gYWx0PVwibGlrZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZlcnRpY2FsX2JvcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UmVhY3Rpb25zKCFzaG93UmVhY3Rpb25zKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpc0xpa2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkaXNMaWtlSWNvbi5zcmN9IGFsdD1cImRpc2xpa2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkaXNMaWtlc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93UmVhY3Rpb25zICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpa2VEaXNsaWtlRHJvcCBkYXRhPXtyZWFjdGlvbnNGb3JUZXN0aW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpa2VEaXNsaWtlRHJvcC5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnMgXHJcbmltcG9ydCBsaWtlSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9saWtlLnBuZydcclxuaW1wb3J0IGRpc0xpa2VJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2Rpc2xpa2UucG5nJ1xyXG5pbXBvcnQgYXZhdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2F2YXRhci5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpa2VEaXNsaWtlRHJvcCh7IGRhdGEgPSBbXSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXIuc3JjfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcGFydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZWwucmVhY3Rpb24gPyBsaWtlSWNvbi5zcmMgOiBkaXNMaWtlSWNvbi5zcmN9IGFsdD1cInJlYWN0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGVhdmVDb21tZW50Lm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9maWxsZWRTdGFyLnBuZydcclxuaW1wb3J0IHVuZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy91bmZpbGxlZFN0YXIucG5nJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGVhdmVDb21tZW50KCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzIGNvbnN0c1xyXG4gICAgICAgIHN0YXJzID0gWzAsIDEsIDIsIDMsIDRdLFxyXG4gICAgICAgIFtzaW11bGF0b3IsIHNldFNpbXVsYXRvcl0gPSB1c2VTdGF0ZSgwKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdjb21tb25zLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgY29tbWVudDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3VibWl0ID0gKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEsIHsgcmF0ZTogc2ltdWxhdG9yIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyc19hcmVhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnMubWFwKGVsID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxhdG9yID4gZWwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsoZWwgKyAxKSAqIE1hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZpbGxlZFN0YXIuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbXVsYXRvcihlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyhlbCArIDEpICogTWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dW5maWxsZWRTdGFyLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW11bGF0b3IoZWwgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRhcmVhX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY29tbWVudCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29tbWVudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKCdwbGFjZUhvbGRlcicpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgnc2VuZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2VzLCBhY3RpdmVQYWdlLCBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVQYWdlID0gYWN0aXZlUGFnZSA9PT0gZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmVQYWdlID8gJ3RydWUnIDogJ2ZhbHNlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZH0gJHtpc0FjdGl2ZVBhZ2UgJiYgc3R5bGVzLmFjdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Tb3J0aW5nLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnRpbmcoe1xyXG4gICAgc29ydGluZ1RleHQsXHJcbiAgICBkYXRlU29ydGluZ1RleHQsXHJcbiAgICByYXRlU29ydGluZyxcclxuICAgIHNvcnRCeURhdGUsXHJcbiAgICBzb3J0QnlSYXRlLFxyXG4gICAgZGF0ZUFjdGl2ZVxyXG59KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKGBob21lYCksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3Rlc3RpbW9uaWFscy5zb3J0aW5nLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKHNvcnRpbmdUZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnlEYXRlfSAke2RhdGVBY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogbnVsbH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NvcnRCeURhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKGRhdGVTb3J0aW5nVGV4dClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NvcnRCeVJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXshZGF0ZUFjdGl2ZSA/IHN0eWxlcy5hY3RpdmUgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKHJhdGVTb3J0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vVGl0bGUvVGl0bGUnXHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi9BcnJvd3MvQXJyb3cnXHJcbmltcG9ydCB7IEZlZWRCYWNrIH0gZnJvbSAnLi9GZWVkQmFjay9GZWVkQmFjaydcclxuaW1wb3J0IHsgZmVlZGJhY2tfZGF0YSB9IGZyb20gJy4vZmVlZF9iYWNrX2RhdGEnXHJcbmltcG9ydCB7IExlYXZlQ29tbWVudCB9IGZyb20gJy4vTGVhdmVDb21tZW50L0xlYXZlQ29tbWVudCdcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBTb3J0aW5nIH0gZnJvbSAnLi9Tb3J0aW5nL1NvcnRpbmcnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGVzdGltb25pYWxzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX0ZFRURCQUNLIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBnZXRNYXRjaElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvbWF0Y2hTbGljZSdcclxuXHJcbmltcG9ydCBhdmF0YXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvYXZhdGFyLnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0aW1vbmlhbHMoe1xyXG4gICAgcGFnZSxcclxuICAgIGxvY2F0aW9uSW5QYWdlLFxyXG4gICAgdGV4dFBhdGhOYW1lXHJcbn0pIHtcclxuICAgIGNvbnN0IG1hdGNoSWQgPSB1c2VTZWxlY3RvcihnZXRNYXRjaElkKTtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzXHJcbiAgICAgICAgW2ZlZWRCYWNrcywgc2V0RmVlZEJhY2tzXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICBbZGF0ZUFjdGl2ZSwgc2V0RGF0ZUFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1hdGNoSWQgIT09IG51bGwgICYmIG1hdGNoSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0KEdFVF9GRUVEQkFDSyhtYXRjaElkKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHByZWRpY3Rpb25zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGZWVkQmFja3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25zLmRhdGEuZGF0YS5tYXAoZmVlZEJhY2sgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVpbmc6IGZlZWRCYWNrLnN0YXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGZlZWRCYWNrLmNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlczogK2ZlZWRCYWNrLmxpa2VDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc0xpa2VzOiArZmVlZEJhY2suZGlzbGlrZUNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4geyBjb25zb2xlLmxvZyhlcnIpIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21hdGNoSWRdKVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGZvciBzb3J0aW5nXHJcbiAgICBjb25zdCBzb3J0aW5nID0gKHRvU29ydCwgc29ydGluZ0J5LCBkYXRlQWN0aXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRvU29ydC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldFxyXG4gICAgICAgICAgICAgICAgZGF0YUZvclNvcnRpbmcgPSB0b1NvcnQucmVkdWNlKChhYywgZWwpID0+IGFjLmNvbmNhdChlbCkpLFxyXG4gICAgICAgICAgICAgICAgc29ydGVkRGF0YSA9IFtdLFxyXG4gICAgICAgICAgICAgICAgc29ydGVkID0gW11cclxuXHJcbiAgICAgICAgICAgIGlmIChzb3J0aW5nQnkgPT09IFwiZGF0ZVwiKSBzb3J0ZWQgPSBkYXRhRm9yU29ydGluZy5zb3J0KChhLCBiKSA9PiAoYi5kYXRlLnNvcnRGb3JtYXQgLSBhLmRhdGUuc29ydEZvcm1hdCkpXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNvcnRpbmdCeSA9PT0gXCJyYXRlXCIpIHNvcnRlZCA9IGRhdGFGb3JTb3J0aW5nLnNvcnQoKGEsIGIpID0+IChiLnJhdGVpbmcgLSBhLnJhdGVpbmcpKVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5jZWlsKGRhdGFGb3JTb3J0aW5nLmxlbmd0aCAvIDMpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJdGVtcyA9IFtdXHJcbiAgICAgICAgICAgICAgICBzb3J0ZWQuZm9yRWFjaCgoZWwsIHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAoeCA8IGkgKiAzKSAmJiAoeCA+PSAoKGkgKiAzKSAtIDMpKSAmJiBzb3J0ZWRJdGVtcy5wdXNoKGVsKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNvcnRlZERhdGEucHVzaChzb3J0ZWRJdGVtcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRGZWVkQmFja3Moc29ydGVkRGF0YSlcclxuICAgICAgICAgICAgc2V0RGF0ZUFjdGl2ZShkYXRlQWN0aXZlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEFydGlmaWNpYWwgcmVhY3Rpb25zIGRhdGEgXHJcbiAgICBjb25zdCByZWFjdGlvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJMb3JlbSBJcHN1bVwiLFxyXG4gICAgICAgICAgICByZWFjdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJMb3JlbSBJcHN1bVwiLFxyXG4gICAgICAgICAgICByZWFjdGlvbjogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiTG9yZW0gSXBzdW1cIixcclxuICAgICAgICAgICAgcmVhY3Rpb246IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZmVlZEJhY2tzICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17dGV4dFBhdGhOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17bG9jYXRpb25JblBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlZWRfYmFja3NfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvcnRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRpbmdUZXh0PXtcInNvcnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVTb3J0aW5nVGV4dD17XCJieURhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVTb3J0aW5nPXtcImJ5UmF0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5RGF0ZT17KCkgPT4geyBzb3J0aW5nKGZlZWRCYWNrcywgXCJkYXRlXCIsIHRydWUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0QnlSYXRlPXsoKSA9PiB7IHNvcnRpbmcoZmVlZEJhY2tzLCBcInJhdGVcIiwgZmFsc2UpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlQWN0aXZlPXtkYXRlQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclBhZ2luYXRpb249e1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRCYWNrcy5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZEJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtlbC5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pa05hbWU9e2VsLm5pa05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVpbmc9e2VsLnJhdGVpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtlbC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZS5yZW5kZXJGb3JtYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VzPXtlbC5saWtlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzTGlrZXM9e2VsLmRpc0xpa2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uc0ZvclRlc3Rpbmc9e3JlYWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVhdmVDb21tZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vaWNvbnNcclxuaW1wb3J0IGF2YXRhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9hdmF0YXIucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGZlZWRiYWNrX2RhdGEgPSBbXHJcbiAgICAvLyBlYWNoIGFycmF5IGFyZSBuZXcgcGFnZVxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAyLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0ZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxNS4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTVcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDEsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0ZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMS4wNi4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDYtMDFcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDEsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAxLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMi4wNC4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDQtMDJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAxLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMi4wNC4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDQtMDJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAxLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMi4wNC4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDQtMDJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbl0iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGl0bGUubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaXRsZSh7XHJcbiAgcGFnZSA9IFwiY29tbW9uXCIsXHJcbiAgdGV4dFBhdGhOYW1lID0gXCJZb3UgYXJlIGRvbnQgcHV0IHRoZXJlIHRleHQuXCIsXHJcbiAgbG9jYXRpb25JblBhZ2UgPSBcIlwiLFxyXG4gIHRleHRTdHlsZXMgPSBudWxsLFxyXG4gIGhyZWYsXHJcbiAgY2xhc3NlcyxcclxufSkge1xyXG4gIGNvbnN0IC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKHBhZ2UpLFxyXG4gICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25JblBhZ2V9YCxcclxuICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICB7aHJlZiA/IChcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIHN0eWxlPXt0ZXh0U3R5bGVzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RyYW5zbGF0ZShgJHt0ZXh0UGF0aE5hbWV9YCl9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwIHN0eWxlPXt0ZXh0U3R5bGVzfSBjbGFzc2VzPXtjbGFzc2VzfT5cclxuICAgICAgICAgIHt0cmFuc2xhdGUoYCR7dGV4dFBhdGhOYW1lfWApfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuXHJcbmNvbnN0XHJcbiAgICBoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbiA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYydcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gJ2F1dG8nXHJcbiAgICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTW9kYWwoe1xyXG4gICAgb25DbG9zZSxcclxuICAgIC8vIGNsb3NlV2l0aFZlY3RvcmUgPSBudWxsLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBjb250YWluZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgY29udGVudFN0eWxlcyA9IG51bGwsXHJcbiAgICBvdGhlclN0eWxlcyA9IG51bGwsXHJcbiAgICBwb3J0YWxMb2NhdGlvbiA9ICdtb2RhbC1jb250ZWluZXInIH0pIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2hhbmRsZUNsb3NlXSlcclxuXHJcbiAgICBjb25zdCBub2RlID0gdXNlUmVmKClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9IGUgPT4ge1xyXG4gICAgICAgIGlmIChub2RlPy5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgICAgZGluYW1pY1RvcCA9IHdpbmRvdy5zY3JvbGxZXHJcblxyXG4gICAgc2hvd01vZGFsID8gaGFuZGxlX292ZXJmbG93X29uX29wZW4oKSA6IGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSgpXHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbENvbnRlaW5lcn0gJHtjb250YWluZXJTdHlsZXN9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRvcDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkICFpbXBvcnRhbnQnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbENvbnRlbnR9ICR7Y29udGVudFN0eWxlc31gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e290aGVyU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtub2RlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBpZiAoc2hvd01vZGFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcclxuICAgICAgICAgICAgbW9kYWwsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcnRhbExvY2F0aW9uKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuIG51bGxcclxufVxyXG4iLCJleHBvcnQgY29uc3QgaG9zdCA9IFwiaHR0cHM6Ly93d3cuZm9vdGJldDI0LmNvbS9hcGlcIjtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0gKCBkZXN0aW5hdGlvbiwgcGF5bG9hZCA9IG51bGwsIG9wdGlvbnMgPSBudWxsICkgPT4gbmV3IFByb21pc2UoICggcnNsdiwgcmpjdCApID0+IHtcclxuICBsZXQgaGVhZGVycyA9IHt9O1xyXG5cclxuICBpZiAoIG9wdGlvbnMgKSB7XHJcbiAgICBpZiAoIG9wdGlvbnMuYXV0aCA9PT0gdHJ1ZSApIHtcclxuICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoYGFjY2Vzcy10b2tlbmApfWAgfHwgYGAgLy8gZm9yIG1vc3Qgb2YgcmVxdWVzdHNcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICggYGhlYWRlcnNgIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzIGluc3RhbmNlb2YgT2JqZWN0ICkge1xyXG4gICAgICBoZWFkZXJzID0geyAuLi5oZWFkZXJzLCAuLi5vcHRpb25zLmhlYWRlcnMgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coIGBzdGFydCBsb2FkaW5nYCApO1xyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogZGVzdGluYXRpb24ubWV0aG9kLFxyXG4gICAgdXJsOiBkZXN0aW5hdGlvbi51cmwsXHJcbiAgICBoZWFkZXJzLFxyXG4gICAgZGF0YTogcGF5bG9hZCB8fCB7fVxyXG4gIH0pXHJcbiAgLnRoZW4oIHJzbHYgKVxyXG4gIC5jYXRjaCggcmpjdCApXHJcbiAgLmZpbmFsbHkoICgpID0+IGNvbnNvbGUubG9nKCBgZW5kIGxvYWRpbmdgICkgKVxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gbmFtZSA9PiB7XHJcbiAgdmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcclxuICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGMgPSBjYVtpXTtcclxuXHJcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPTsgUGF0aD0vOyBFeHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKG5hbWUsIHZhbHVlLCBkYXlzKSA9PiB7XHJcbiAgbGV0IGV4cGlyZXMgPSBcIlwiO1xyXG5cclxuICBpZiAoZGF5cykge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgKHZhbHVlIHx8IFwiXCIpICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG4iLCJpbXBvcnQge2hvc3R9IGZyb20gXCIuL2NvbnN0YW50c1wiXHJcblxyXG5jb25zdCBBVVRIX1VSTCA9IGhvc3QgKyBgYXV0aC9gO1xyXG5jb25zdCBBQ0NPVU5UX1VSTCA9IGhvc3QgKyBgYWNjb3VudC9gXHJcblxyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArICdyZWdpc3RyYXRpb24nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ2xvZ2luJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ2dldCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lORk8gPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdpbmZvJyxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9JTUFHRSA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ3Byb2ZpbGUtaW1hZ2UnLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTVEFSVF9SRVNFVF9QQVNTV09SRCA9IGVtYWlsID0+ICh7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9yZXNldD9lbWFpbD0ke2VtYWlsfWAsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVkVSSUZZX1BBU1NXT1JEX1JFU0VUID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvdmVyaWZ5X2NvZGVgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9ORVdfUEFTU1dPUkQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9uZXdfcGFzc3dvcmQgYCxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTkVXUyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYG5ld3NgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbWF0Y2gtb2YtdGhlLWRheWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBtYXRjaC1vZi10aGUtZGF5P3R5cGU9bmV4dF9kYXlgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUkVESUNUSU9OUyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYHByZWRpY3Rpb25gLFxyXG4gIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GRUVEQkFDSyA9IGlkID0+ICh7XHJcbiAgdXJsOiBob3N0ICsgYGZlZWRiYWNrLyR7aWR9P3NvcnRfYnk9Y3JlYXRlZF9hdCZvcmRlcl9ieT1kZXNjYCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVNfQllfVFlQRSA9IHR5cGUgPT4gKHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYGdhbWU/dHlwZT0ke3R5cGV9YCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn0pXHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsJiZhcy5pbmRleE9mKCcjJyk+PTApe3Njcm9sbD1mYWxzZTt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5yb3V0ZXJbcmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93LGxvY2FsZSxzY3JvbGx9KTt9ZnVuY3Rpb24gTGluayhwcm9wcyl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2Z1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKXtyZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fS8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCByZXF1aXJlZFByb3BzR3VhcmQ9e2hyZWY6dHJ1ZX07Y29uc3QgcmVxdWlyZWRQcm9wcz1PYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO3JlcXVpcmVkUHJvcHMuZm9yRWFjaChrZXk9PntpZihrZXk9PT0naHJlZicpe2lmKHByb3BzW2tleV09PW51bGx8fHR5cGVvZiBwcm9wc1trZXldIT09J3N0cmluZycmJnR5cGVvZiBwcm9wc1trZXldIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnByb3BzW2tleV09PT1udWxsPydudWxsJzp0eXBlb2YgcHJvcHNba2V5XX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCBvcHRpb25hbFByb3BzR3VhcmQ9e2FzOnRydWUscmVwbGFjZTp0cnVlLHNjcm9sbDp0cnVlLHNoYWxsb3c6dHJ1ZSxwYXNzSHJlZjp0cnVlLHByZWZldGNoOnRydWUsbG9jYWxlOnRydWV9O2NvbnN0IG9wdGlvbmFsUHJvcHM9T2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtvcHRpb25hbFByb3BzLmZvckVhY2goa2V5PT57Y29uc3QgdmFsVHlwZT10eXBlb2YgcHJvcHNba2V5XTtpZihrZXk9PT0nYXMnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycmJnZhbFR5cGUhPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0nbG9jYWxlJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2AnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdyZXBsYWNlJ3x8a2V5PT09J3Njcm9sbCd8fGtleT09PSdzaGFsbG93J3x8a2V5PT09J3Bhc3NIcmVmJ3x8a2V5PT09J3ByZWZldGNoJyl7aWYocHJvcHNba2V5XSE9bnVsbCYmdmFsVHlwZSE9PSdib29sZWFuJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2Bib29sZWFuYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5jb25zdCBoYXNXYXJuZWQ9X3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtpZihwcm9wcy5wcmVmZXRjaCYmIWhhc1dhcm5lZC5jdXJyZW50KXtoYXNXYXJuZWQuY3VycmVudD10cnVlO2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fWNvbnN0IHA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTtjb25zdCByb3V0ZXI9KDAsX3JvdXRlcjIudXNlUm91dGVyKSgpO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmhyZWYsdHJ1ZSk7cmV0dXJue2hyZWY6cmVzb2x2ZWRIcmVmLGFzOnByb3BzLmFzPygwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5hcyk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmfTt9LFtyb3V0ZXIscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxubGV0IGNoaWxkO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dHJ5e2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y2F0Y2goZXJyKXt0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fX1lbHNle2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y29uc3QgY2hpbGRSZWY9Y2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWY7Y29uc3Rbc2V0SW50ZXJzZWN0aW9uUmVmLGlzVmlzaWJsZV09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCd9KTtjb25zdCBzZXRSZWY9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soZWw9PntzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO2lmKGNoaWxkUmVmKXtpZih0eXBlb2YgY2hpbGRSZWY9PT0nZnVuY3Rpb24nKWNoaWxkUmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZFJlZj09PSdvYmplY3QnKXtjaGlsZFJlZi5jdXJyZW50PWVsO319fSxbY2hpbGRSZWYsc2V0SW50ZXJzZWN0aW9uUmVmXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9Pntjb25zdCBzaG91bGRQcmVmZXRjaD1pc1Zpc2libGUmJnAmJigwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZik7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlO2NvbnN0IGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldO2lmKHNob3VsZFByZWZldGNoJiYhaXNQcmVmZXRjaGVkKXtwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7bG9jYWxlOmN1ckxvY2FsZX0pO319LFthcyxocmVmLGlzVmlzaWJsZSxsb2NhbGUscCxyb3V0ZXJdKTtjb25zdCBjaGlsZFByb3BzPXtyZWY6c2V0UmVmLG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe2xpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpO319fTtjaGlsZFByb3BzLm9uTW91c2VFbnRlcj1lPT57aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuO2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO31wcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7cHJpb3JpdHk6dHJ1ZX0pO307Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4vLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuY29uc3QgbG9jYWxlRG9tYWluPXJvdXRlciYmcm91dGVyLmlzTG9jYWxlRG9tYWluJiYoMCxfcm91dGVyLmdldERvbWFpbkxvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmxvY2FsZXMscm91dGVyJiZyb3V0ZXIuZG9tYWluTG9jYWxlcyk7Y2hpbGRQcm9wcy5ocmVmPWxvY2FsZURvbWFpbnx8KDAsX3JvdXRlci5hZGRCYXNlUGF0aCkoKDAsX3JvdXRlci5hZGRMb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5kZWZhdWx0TG9jYWxlKSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsY2hpbGRQcm9wcyk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbicsJ2RvbWFpbkxvY2FsZXMnXTtjb25zdCByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107Y29uc3QgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPSguLi5hcmdzKT0+e2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsKC4uLmFyZ3MpPT57Y29uc3QgZXZlbnRGaWVsZD1gb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7Y29uc3QgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe2NvbnN0IG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5jb25zdCBjcmVhdGVSb3V0ZXI9KC4uLmFyZ3MpPT57c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe2NvbnN0IF9yb3V0ZXI9cm91dGVyO2NvbnN0IGluc3RhbmNlPXt9O2Zvcihjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pP1tdOnt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT0oLi4uYXJncyk9PntyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPWB3aXRoUm91dGVyKCR7bmFtZX0pYDt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGV0ZWN0RG9tYWluTG9jYWxlPWRldGVjdERvbWFpbkxvY2FsZTtmdW5jdGlvbiBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluSXRlbXMsaG9zdG5hbWUsZGV0ZWN0ZWRMb2NhbGUpe2xldCBkb21haW5JdGVtO2lmKGRvbWFpbkl0ZW1zKXtpZihkZXRlY3RlZExvY2FsZSl7ZGV0ZWN0ZWRMb2NhbGU9ZGV0ZWN0ZWRMb2NhbGUudG9Mb3dlckNhc2UoKTt9Zm9yKGNvbnN0IGl0ZW0gb2YgZG9tYWluSXRlbXMpe3ZhciBfaXRlbSRkb21haW4sX2l0ZW0kbG9jYWxlczsvLyByZW1vdmUgcG9ydCBpZiBwcmVzZW50XG5jb25zdCBkb21haW5Ib3N0bmFtZT0oX2l0ZW0kZG9tYWluPWl0ZW0uZG9tYWluKT09bnVsbD92b2lkIDA6X2l0ZW0kZG9tYWluLnNwbGl0KCc6JylbMF0udG9Mb3dlckNhc2UoKTtpZihob3N0bmFtZT09PWRvbWFpbkhvc3RuYW1lfHxkZXRlY3RlZExvY2FsZT09PWl0ZW0uZGVmYXVsdExvY2FsZS50b0xvd2VyQ2FzZSgpfHwoX2l0ZW0kbG9jYWxlcz1pdGVtLmxvY2FsZXMpIT1udWxsJiZfaXRlbSRsb2NhbGVzLnNvbWUobG9jYWxlPT5sb2NhbGUudG9Mb3dlckNhc2UoKT09PWRldGVjdGVkTG9jYWxlKSl7ZG9tYWluSXRlbT1pdGVtO2JyZWFrO319fXJldHVybiBkb21haW5JdGVtO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldGVjdC1kb21haW4tbG9jYWxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKSYmcGF0aExvd2VyIT09Jy8nK2xvY2FsZUxvd2VyP2FkZFBhdGhQcmVmaXgocGF0aCwnLycrbG9jYWxlKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsbG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiYocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJyl8fHBhdGhMb3dlcj09PScvJytsb2NhbGVMb3dlcik/KHBhdGhuYW1lLmxlbmd0aD09PWxvY2FsZS5sZW5ndGgrMT8nLyc6JycpK3BhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGgrMSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpfHx1cmwuc3RhcnRzV2l0aCgnPycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlcixocmVmLHJlc29sdmVBcyl7Ly8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbmxldCBiYXNlO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpO3RyeXtiYXNlPW5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpP3JvdXRlci5hc1BhdGg6cm91dGVyLnBhdGhuYW1lLCdodHRwOi8vbicpO31jYXRjaChfKXsvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuYmFzZT1uZXcgVVJMKCcvJywnaHR0cDovL24nKTt9Ly8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbmlmKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO310cnl7Y29uc3QgZmluYWxVcmw9bmV3IFVSTCh1cmxBc1N0cmluZyxiYXNlKTtmaW5hbFVybC5wYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkoZmluYWxVcmwucGF0aG5hbWUpO2xldCBpbnRlcnBvbGF0ZWRBcz0nJztpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShmaW5hbFVybC5wYXRobmFtZSkmJmZpbmFsVXJsLnNlYXJjaFBhcmFtcyYmcmVzb2x2ZUFzKXtjb25zdCBxdWVyeT0oMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtjb25zdHtyZXN1bHQscGFyYW1zfT1pbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLGZpbmFsVXJsLnBhdGhuYW1lLHF1ZXJ5KTtpZihyZXN1bHQpe2ludGVycG9sYXRlZEFzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOnJlc3VsdCxoYXNoOmZpbmFsVXJsLmhhc2gscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl9KTt9fS8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG5jb25zdCByZXNvbHZlZEhyZWY9ZmluYWxVcmwub3JpZ2luPT09YmFzZS5vcmlnaW4/ZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKTpmaW5hbFVybC5ocmVmO3JldHVybiByZXNvbHZlQXM/W3Jlc29sdmVkSHJlZixpbnRlcnBvbGF0ZWRBc3x8cmVzb2x2ZWRIcmVmXTpyZXNvbHZlZEhyZWY7fWNhdGNoKF8pe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9fWZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCl7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtyZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKT91cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpOnVybDt9ZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcix1cmwsYXMpey8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbmxldFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109cmVzb2x2ZUhyZWYocm91dGVyLHVybCx0cnVlKTtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IGhyZWZIYWRPcmlnaW49cmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtjb25zdCBhc0hhZE9yaWdpbj1yZXNvbHZlZEFzJiZyZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtyZXNvbHZlZEhyZWY9c3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtyZXNvbHZlZEFzPXJlc29sdmVkQXM/c3RyaXBPcmlnaW4ocmVzb2x2ZWRBcyk6cmVzb2x2ZWRBcztjb25zdCBwcmVwYXJlZFVybD1ocmVmSGFkT3JpZ2luP3Jlc29sdmVkSHJlZjphZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO2NvbnN0IHByZXBhcmVkQXM9YXM/c3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLGFzKSk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmO3JldHVybnt1cmw6cHJlcGFyZWRVcmwsYXM6YXNIYWRPcmlnaW4/cHJlcGFyZWRBczphZGRCYXNlUGF0aChwcmVwYXJlZEFzKX07fWZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpe2NvbnN0IGNsZWFuUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9kZW5vcm1hbGl6ZVBhZ2VQYXRoLmRlbm9ybWFsaXplUGFnZVBhdGgpKHBhdGhuYW1lKSk7aWYoY2xlYW5QYXRobmFtZT09PScvNDA0J3x8Y2xlYW5QYXRobmFtZT09PScvX2Vycm9yJyl7cmV0dXJuIHBhdGhuYW1lO30vLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG5pZighcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbnBhZ2VzLnNvbWUocGFnZT0+e2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHBhZ2UpJiYoMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKXtwYXRobmFtZT1wYWdlO3JldHVybiB0cnVlO319KTt9cmV0dXJuKDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTt9Y29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb249cHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiYnc2Nyb2xsUmVzdG9yYXRpb24naW4gd2luZG93Lmhpc3RvcnkmJiEhZnVuY3Rpb24oKXt0cnl7bGV0IHY9J19fbmV4dCc7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xucmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odix2KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLHRydWU7fWNhdGNoKG4pe319KCk7Y29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EPVN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7ZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMpe3JldHVybiBmZXRjaCh1cmwsey8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4vL1xuLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuLy8gPiBvcHRpb24uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4vL1xuLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbi8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2Bcbi8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuY3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7aWYoYXR0ZW1wdHM+MSYmcmVzLnN0YXR1cz49NTAwKXtyZXR1cm4gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMtMSk7fWlmKHJlcy5zdGF0dXM9PT00MDQpe3JldHVybiByZXMuanNvbigpLnRoZW4oZGF0YT0+e2lmKGRhdGEubm90Rm91bmQpe3JldHVybntub3RGb3VuZDpTU0dfREFUQV9OT1RfRk9VTkR9O310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO30pO310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO31yZXR1cm4gcmVzLmpzb24oKTt9KTt9ZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZixpc1NlcnZlclJlbmRlcil7cmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXI/MzoxKS5jYXRjaChlcnI9PnsvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbi8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4vLyBsb29wLlxuaWYoIWlzU2VydmVyUmVuZGVyKXsoMCxfcm91dGVMb2FkZXIubWFya0Fzc2V0RXJyb3IpKGVycik7fXRocm93IGVycjt9KTt9Y2xhc3MgUm91dGVyey8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqLyAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbmNvbnN0cnVjdG9yKF9wYXRobmFtZSxfcXVlcnksX2FzLHtpbml0aWFsUHJvcHMscGFnZUxvYWRlcixBcHAsd3JhcEFwcCxDb21wb25lbnQsZXJyLHN1YnNjcmlwdGlvbixpc0ZhbGxiYWNrLGxvY2FsZSxsb2NhbGVzLGRlZmF1bHRMb2NhbGUsZG9tYWluTG9jYWxlcyxpc1ByZXZpZXd9KXt0aGlzLnJvdXRlPXZvaWQgMDt0aGlzLnBhdGhuYW1lPXZvaWQgMDt0aGlzLnF1ZXJ5PXZvaWQgMDt0aGlzLmFzUGF0aD12b2lkIDA7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5jb21wb25lbnRzPXZvaWQgMDt0aGlzLnNkYz17fTt0aGlzLnNkcj17fTt0aGlzLnN1Yj12b2lkIDA7dGhpcy5jbGM9dm9pZCAwO3RoaXMucGFnZUxvYWRlcj12b2lkIDA7dGhpcy5fYnBzPXZvaWQgMDt0aGlzLmV2ZW50cz12b2lkIDA7dGhpcy5fd3JhcEFwcD12b2lkIDA7dGhpcy5pc1Nzcj12b2lkIDA7dGhpcy5pc0ZhbGxiYWNrPXZvaWQgMDt0aGlzLl9pbkZsaWdodFJvdXRlPXZvaWQgMDt0aGlzLl9zaGFsbG93PXZvaWQgMDt0aGlzLmxvY2FsZT12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmRlZmF1bHRMb2NhbGU9dm9pZCAwO3RoaXMuZG9tYWluTG9jYWxlcz12b2lkIDA7dGhpcy5pc1JlYWR5PXZvaWQgMDt0aGlzLmlzUHJldmlldz12b2lkIDA7dGhpcy5pc0xvY2FsZURvbWFpbj12b2lkIDA7dGhpcy5faWR4PTA7dGhpcy5vblBvcFN0YXRlPWU9Pntjb25zdCBzdGF0ZT1lLnN0YXRlO2lmKCFzdGF0ZSl7Ly8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4vLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbi8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbi8vXG4vLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4vLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4vLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbmNvbnN0e3BhdGhuYW1lLHF1ZXJ5fT10aGlzO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgocGF0aG5hbWUpLHF1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSk7cmV0dXJuO31pZighc3RhdGUuX19OKXtyZXR1cm47fWxldCBmb3JjZWRTY3JvbGw7Y29uc3R7dXJsLGFzLG9wdGlvbnMsaWR4fT1zdGF0ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7aWYodGhpcy5faWR4IT09aWR4KXsvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkKXt9Ly8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e2NvbnN0IHY9c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK2lkeCk7Zm9yY2VkU2Nyb2xsPUpTT04ucGFyc2Uodik7fWNhdGNoKF91bnVzZWQyKXtmb3JjZWRTY3JvbGw9e3g6MCx5OjB9O319fX10aGlzLl9pZHg9aWR4O2NvbnN0e3BhdGhuYW1lfT0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpOy8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG5pZih0aGlzLmlzU3NyJiZhcz09PXRoaXMuYXNQYXRoJiZwYXRobmFtZT09PXRoaXMucGF0aG5hbWUpe3JldHVybjt9Ly8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbmlmKHRoaXMuX2JwcyYmIXRoaXMuX2JwcyhzdGF0ZSkpe3JldHVybjt9dGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyx7c2hhbGxvdzpvcHRpb25zLnNoYWxsb3cmJnRoaXMuX3NoYWxsb3csbG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGV9KSxmb3JjZWRTY3JvbGwpO307Ly8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG50aGlzLnJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShfcGF0aG5hbWUpOy8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxudGhpcy5jb21wb25lbnRzPXt9Oy8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcbi8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4vLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG5pZihfcGF0aG5hbWUhPT0nL19lcnJvcicpe3RoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXT17Q29tcG9uZW50LGluaXRpYWw6dHJ1ZSxwcm9wczppbml0aWFsUHJvcHMsZXJyLF9fTl9TU0c6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTRyxfX05fU1NQOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU1B9O310aGlzLmNvbXBvbmVudHNbJy9fYXBwJ109e0NvbXBvbmVudDpBcHAsc3R5bGVTaGVldHM6Wy8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9dfTsvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbnRoaXMuZXZlbnRzPVJvdXRlci5ldmVudHM7dGhpcy5wYWdlTG9hZGVyPXBhZ2VMb2FkZXI7dGhpcy5wYXRobmFtZT1fcGF0aG5hbWU7dGhpcy5xdWVyeT1fcXVlcnk7Ly8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbi8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCBhdXRvRXhwb3J0RHluYW1pYz0oMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShfcGF0aG5hbWUpJiZzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDt0aGlzLmFzUGF0aD1hdXRvRXhwb3J0RHluYW1pYz9fcGF0aG5hbWU6X2FzO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5zdWI9c3Vic2NyaXB0aW9uO3RoaXMuY2xjPW51bGw7dGhpcy5fd3JhcEFwcD13cmFwQXBwOy8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbi8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG50aGlzLmlzU3NyPXRydWU7dGhpcy5pc0ZhbGxiYWNrPWlzRmFsbGJhY2s7dGhpcy5pc1JlYWR5PSEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwfHxzZWxmLl9fTkVYVF9EQVRBX18uZ2lwfHwhYXV0b0V4cG9ydER5bmFtaWMmJiFzZWxmLmxvY2F0aW9uLnNlYXJjaCYmIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbmNvbnN0IG9wdGlvbnM9e2xvY2FsZX07b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9X2FzIT09X3BhdGhuYW1lO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLG9wdGlvbnMpO313aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLHRoaXMub25Qb3BTdGF0ZSk7Ly8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbi8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuaWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3dpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPSdtYW51YWwnO319fX1yZWxvYWQoKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fS8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovYmFjaygpe3dpbmRvdy5oaXN0b3J5LmJhY2soKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3B1c2godXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pey8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbmlmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt0cnl7Ly8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkMyl7fX19Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcmVwbGFjZSh1cmwsYXMsb3B0aW9ucz17fSl7Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO31hc3luYyBjaGFuZ2UobWV0aG9kLHVybCxhcyxvcHRpb25zLGZvcmNlZFNjcm9sbCl7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Y29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWY9dXJsPT09YXN8fG9wdGlvbnMuX2h8fG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmOy8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG5pZihvcHRpb25zLl9oKXt0aGlzLmlzUmVhZHk9dHJ1ZTt9bGV0IGxvY2FsZUNoYW5nZT1vcHRpb25zLmxvY2FsZSE9PXRoaXMubG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPW9wdGlvbnMubG9jYWxlPT09ZmFsc2U/dGhpcy5kZWZhdWx0TG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmxvY2FsZTtpZih0eXBlb2Ygb3B0aW9ucy5sb2NhbGU9PT0ndW5kZWZpbmVkJyl7b3B0aW9ucy5sb2NhbGU9dGhpcy5sb2NhbGU7fWNvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtpZihsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXt0aGlzLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO3BhcnNlZEFzLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt1cmw9YWRkQmFzZVBhdGgoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoaGFzQmFzZVBhdGgodXJsKT9kZWxCYXNlUGF0aCh1cmwpOnVybCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTt9bGV0IGRpZE5hdmlnYXRlPWZhbHNlOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt2YXIgX3RoaXMkbG9jYWxlczsvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG5pZighKChfdGhpcyRsb2NhbGVzPXRoaXMubG9jYWxlcykhPW51bGwmJl90aGlzJGxvY2FsZXMuaW5jbHVkZXModGhpcy5sb2NhbGUpKSl7cGFyc2VkQXMucGF0aG5hbWU9YWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlKTt3aW5kb3cubG9jYXRpb24uaHJlZj0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1jb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLHVuZGVmaW5lZCx0aGlzLmxvY2FsZSk7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpey8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4vLyBjb3JyZWN0IGRvbWFpblxuaWYoIWRpZE5hdmlnYXRlJiZkZXRlY3RlZERvbWFpbiYmdGhpcy5pc0xvY2FsZURvbWFpbiYmc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSE9PWRldGVjdGVkRG9tYWluLmRvbWFpbil7Y29uc3QgYXNOb0Jhc2VQYXRoPWRlbEJhc2VQYXRoKGFzKTt3aW5kb3cubG9jYXRpb24uaHJlZj1gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGg9PT0nLyc/Jyc6YXNOb0Jhc2VQYXRofWB8fCcvJyl9YDsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1pZihkaWROYXZpZ2F0ZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fX1pZighb3B0aW9ucy5faCl7dGhpcy5pc1Nzcj1mYWxzZTt9Ly8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuaWYoX3V0aWxzLlNUKXtwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO31jb25zdHtzaGFsbG93PWZhbHNlfT1vcHRpb25zO2NvbnN0IHJvdXRlUHJvcHM9e3NoYWxsb3d9O2lmKHRoaXMuX2luRmxpZ2h0Um91dGUpe3RoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUscm91dGVQcm9wcyk7fWFzPWFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLG9wdGlvbnMubG9jYWxlLHRoaXMuZGVmYXVsdExvY2FsZSkpO2NvbnN0IGNsZWFuZWRBcz1kZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyx0aGlzLmxvY2FsZSk7dGhpcy5faW5GbGlnaHRSb3V0ZT1hczsvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG5pZighb3B0aW9ucy5faCYmdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSl7dGhpcy5hc1BhdGg9Y2xlYW5lZEFzO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTsvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xudGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO3RoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7dGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLG51bGwpO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZSxxdWVyeX09cGFyc2VkOy8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbi8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuLy8gd2hlbiByZXdyaXR0ZW4gdG9cbmxldCBwYWdlcyxyZXdyaXRlczt0cnl7cGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTt9Y2F0Y2goZXJyKXsvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3Rcbi8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9Ly8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2Vcbi8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbi8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbmlmKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykmJiFsb2NhbGVDaGFuZ2Upe21ldGhvZD0ncmVwbGFjZVN0YXRlJzt9Ly8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbi8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbmxldCByZXNvbHZlZEFzPWFzOy8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbi8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbi8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG5wYXRobmFtZT1wYXRobmFtZT8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoZGVsQmFzZVBhdGgocGF0aG5hbWUpKTpwYXRobmFtZTtpZihzaG91bGRSZXNvbHZlSHJlZiYmcGF0aG5hbWUhPT0nL19lcnJvcicpeztvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj10cnVlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMixfb3B0aW9ucyRzY3JvbGw7bGV0IHJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpO2xldHtlcnJvcixwcm9wcyxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbzsvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbmlmKChfX05fU1NHfHxfX05fU1NQKSYmcHJvcHMpe2lmKHByb3BzLnBhZ2VQcm9wcyYmcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCl7Y29uc3QgZGVzdGluYXRpb249cHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDsvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuLy8gaXQncyBub3RcbmlmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcGFyc2VkSHJlZj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7cGFyc2VkSHJlZi5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUscGFnZXMpO2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIlxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbiAgICBpbXBvcnQgX19sb2FkTmFtZXNwYWNlcyBmcm9tICduZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlcydcbiAgICBcbmltcG9ydCBNYWluIGZyb20gJy9jb21wb25lbnRzL1BhZ2VzL01haW4vTWFpbidcclxuXHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IDxNYWluIC8+XHJcblxyXG5JbmRleFBhZ2UubGF5b3V0ID0gXCJtYWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcblxuXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLi4uKGF3YWl0IF9fbG9hZE5hbWVzcGFjZXMoe1xuICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2luZGV4JyxcbiAgICAgICAgICAgICAgbG9hZGVyTmFtZTogJ2dldFN0YXRpY1Byb3BzJyxcbiAgICAgICAgICAgICAgLi4uX19pMThuQ29uZmlnLFxuICAgICAgICAgICAgICBsb2FkTG9jYWxlRnJvbTogKGwsIG4pID0+IGltcG9ydChgQG5leHQtdHJhbnNsYXRlLXJvb3QvbG9jYWxlcy8ke2x9LyR7bn1gKS50aGVuKG0gPT4gbS5kZWZhdWx0KSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtYXRjaFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgICBtYXRjaElkOiBudWxsXHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzZXRNYXRjaElkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5tYXRjaElkID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0TWF0Y2hJZCB9ID0gbWF0Y2hTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWF0Y2hJZCA9IHN0YXRlID0+IHN0YXRlLm1hdGNoLm1hdGNoSWRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hdGNoU2xpY2UucmVkdWNlciIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nJ1xyXG5pbXBvcnQgYmFyY2FJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9iYXJjYS5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wc2oucG5nJ1xyXG5pbXBvcnQgYXRsZXRpY0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBtYXJjZWxJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlX2RhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lMScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcItCe0YDQtNC40L3QsNGAXCIsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTInLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JHQsNGA0YHQtdC70L7QvdCwJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0J/QodCWJyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogXCLQrdC60YHQv9GA0LXRgdGBXCIsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzI1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lMycsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE4MDAg0YDRg9CxLiAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTQnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTUnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWU2JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJ1xyXG4gICAgfSxcclxuXSIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLjI4MzgyMGZkMjZhZTMwODU0MmM0OTk4NzQ3ZjZmMTUwLnBuZ1wiLFwiaGVpZ2h0XCI6NjMsXCJ3aWR0aFwiOjU4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE2VWxFUVZSNDJqWEt2MnJDVUJnRjhEdjRNb1crUjRmT2hUNUw3UmdYTjZGTEM1RVVIQnBxMGc0WEdrV3c0bzI1WE5BaEVDNUpNTG1LVWZEUG9LQUkwZS9URFA2V3d6a2NFc2R4N3ZzK2NzNUJDQUZCRUlBWWpmQzZBVkZLN1pJa3dTZ013ZlU4a0ZLQ2F4aW8wblJQR0dPeHJ1djRxbWxucTlHQTlZOTlubENLVHFlVGtNVjhibDRQK0ZXdG5qYk5iemphOWltTElod3JaUkZQaUtmWmRJcXJqL2NjZS8rNHJOZnpSWmJoZ1BOblVoaW5xWkQ5UG00L2pVUFE3YUlNd3lHNTBTcVZPNmZkUGpETHdsOUtqeS9sOGowcE1OY3RGZGswelFmYWF1VnZ0ZHBqMGY4Y3AzUUJXZnliajUwK2Nvc0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby4yY2U3NWUyMTE2MmUyZTZkYzQ4Yjk5ZTYwMTgxMDdlMC5wbmdcIixcImhlaWdodFwiOjYyLFwid2lkdGhcIjo0NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFZQUFBQUlDQVlBQUFEYXhvNDRBQUFBMDBsRVFWUjRuQUhJQURmL0FXeHRoc1RlMytjeDh2UDZDZ3dLQkFBR0J3WDJCaEFPendHRGhKYi9Oell1QU56YzRmOEVCd2NBeU1mU0FSRGk0UUFCajVDZy9CRVFEUUw3Ly84QnZLcStBSHQ4WHYvanI2di9BV2hwZ3YzMTl2a0NNREVsL3kvODdBQXlTMGdCdzZXcS93RmVhSVAvSndIMi9WbFdSQVArK3ZvQUNCTVQvZEN3c3dNQm5vV085VTVRUlFydDROLzgvdjcvQUJFZEhRVEZzTGIzQVkyVG9UQW9CdjZtSlNBWUtRQUFBQURjNGVqWXl2NEtXd0ZxSTBZQWx0MjZCcm1zc3JzQUFBQUJSMVJPUlZVb1VmbCtsVnRyU1RDeTRRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9hdmF0YXIuYmUwNmJkYzA1NDMwZjVjZGNmYjg0ZjdhOWU1NDIxMTMucG5nXCIsXCJoZWlnaHRcIjo3NSxcIndpZHRoXCI6NzYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWNFbEVRVlI0MmgyR3ZRbkNBQlFHdjBuOEkwNmc4K2dZT28yMjJsZ0lXb3FrRXhFYmNZWm9rZVMrQWZMeUNBZDNKNHZDSlpIY21Wbnl4SCtDRmV0MHhVaWNIVHdzeERQdkpGcEh6czc3b2JXQTRNS0dMVmVDUnBSOExKTDBsNXVZOHVQQWdxV1BWSXlGbVBPbVMxNFVxQWR0eW1IM1RmRnowUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZGlzbGlrZS44M2NjNzYyNDdkZDQ3M2FiMmJiMzc1ZmNlMjViOTMxZi5wbmdcIixcImhlaWdodFwiOjMyLFwid2lkdGhcIjozMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBWmtsRVFWUjQyajNMc1FzQkFRQ0Y4YWU0RkxPd21HUVFtVXlYUWNsd3c0bmhKa3BodFB2bmY1SGhYbS80dnVHTFF1WGlySFozZFl0U2JXQnNhcDZvNG1XVWR2YnhhR1dtME1UVDJrYmZ3c2ZKTVNaV0dqdVZYbHRhT2lnVFhaMzhIa052Mi96NUM5VStOMnowckdBbkFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2ZpbGxlZFN0YXIuYjQ0YWE4MTJkY2JmOWViMTRlNjRhZjZjOGU3Mjc5YjMucG5nXCIsXCJoZWlnaHRcIjoyNixcIndpZHRoXCI6MjgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQWhVbEVRVlI0Mm1QNGQ5cUlFWWhaR1lEZzN4bGpQU0EyWndBQ29CZ2JFRE14SUFPZ1FDc1F6MEVYTkFEaVRDQU9BdUxiLzg0WXZRSFNvVUNjQWNRV0lBVkNRRHdiaVAvL08yMzhIMmpGSHhBYmlGY0NzUlN5U1gxQVNhQUNzT1F5Vkd0TzZETUJCVzhBOFFvZ25nbkV6NEFLZWVFS2dCeHRvR0F1a21tcFFHekp3TURBQUFBVURsMWs1Yk81ZUFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2xpa2UuMTQzMmQ4ZDRjMDc0MzdiOTQ2N2M1MjU5ZWI5NGIxZGMucG5nXCIsXCJoZWlnaHRcIjozMSxcIndpZHRoXCI6MjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FRQUFBQ2ZEUzJOQUFBQVhFbEVRVlI0MmpYTHJRckNBQUJHMFUrSDFTQTJ3NkpXc1lrL3lXWVFCSlZoV2RqQ0dPejl5MkZoN09SN016RzRKWXBZSnRhZTdwazV1S29jbGZIdzBWczVPV3ZpYmF1Y0txL01qMFdpamt0aW8wanMvS0x6MWF2OHRmWWo2NEV1bU9MRk0zd0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy91bmZpbGxlZFN0YXIuMjYxMDVjNWQ0ZTc4MzRkZTc5N2VkNzM0NTA1ZWUyYmYucG5nXCIsXCJoZWlnaHRcIjoyNixcIndpZHRoXCI6MjgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQWZrbEVRVlI0MmwyTnNRcURRQkJFTnlGNlRWSUdVcVpORnhDTEV3V3hVQkhCM2tZTDhUYzlmMnp4MlMwdVBHWm51SnNWRGU2bUlYNElveUg2czN0aGxBenVZb2RnZ1BFU3VvU3cxczNsN0FWa3VzVWxXb0UvZjMxZ3daU215ZU5YOUd2cmUzanFIam0wdTk1K3dRUXRORERUOExZUGZnU3o4U00rRlJFNUFJd3ZSMHFESkMvbUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9DYWxlbmRhci5lNjE4ZGYzMzg3ZWQxMjNiNjUxZDRlZjJhZjkxN2ZlMi5wbmdcIixcImhlaWdodFwiOjM0LFwid2lkdGhcIjozNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBYTBsRVFWUjQyZzNMdXdxQ0FCUUEwUHNML1VGTGMxTVFGWVJpSWowc2VoQTFtWW9ORWZiL3d5RTU4d2tUdmF2V3k5M1BKSlRPTWtjSHVZc3lOTkpCWmlPeDFvVmM1NkZSZS9wS1F1cnRwbFpwN2RWaHJWZnA3SXlOZkVJaE1XeHpKek41eUN3c3JVd1Z0dVovVGk1UzBLbzJQOUVBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2Fycm93TGVmdC5lMjM3MmEwYzc4ZDhjNmIyNDZiZGVlM2ZmYWI0MGY3Yi5wbmdcIixcImhlaWdodFwiOjM1LFwid2lkdGhcIjozMSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBNDBsRVFWUjQybU5Zc0dDQjJJTDU4NDNtejUxbnNtRGhRcVA1OCtjYkE4WDBnSmlYQVNRQlpCZ3ZXTFZDZC82MEdSYnpaODh4bVQ5dnZobFFUSjBCcEhMaG51MnE4K3hqWjh4TEw0dGQvUHErQk5BRTQvbno1bWt4TE5pNlNYMnVaZFN5ZVZ6ZUgrWTV4RTJmWnhXMWFINUR1OWVDTmF0VUdCWnNXS3MxTHppamFpNnZ6Nk41QVpsbDgrSUswdWYzVG5SWXNHeXBHc1A4T1hOTkY1NCtvakF2TEx0NFhrNWw1S0tiNTJVZ3hzN1haZ0M1RE9nSWl3VWIxMmtEVlJ2T256WGJmUDc4K2VaQWNXV1FKQy9JWlVBRk92UG56dFVDc3JVV3pKK3ZzbURCQWpZQWpUVnhSTTNlbjc4QUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd1JpZ2h0LmM2ZDZkOWUxMjIyYzQxOGY2MGZiYjgxOTRkMDhhODIzLnBuZ1wiLFwiaGVpZ2h0XCI6MzUsXCJ3aWR0aFwiOjMxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE0RWxFUVZSNDJoV092VW9EUVJTRno3MHpzK3ZLSnFZUndWZ0tRc1RDaDdBemhiWFZvcTlnNFpOWWFMR05JUFpXQWF0VWFkT0ZRQUtCRkVtS2hNMFBtMlR1emFUNDRIRDRpby95UEQ4SFVBL1FFZlhla0RFbGdBRUR1RklScDl1ZFV5OU10Y282Q0FtQVN3NkhvU1F1YmZZMDBML09nM3ovTi9uMmVucVVMZFhTamJTN0RmbHFaU2g5ck8xWjVxTmZOYStQUHd4UndMRkhOVjRnWXFHVUM1eUdYVzRObzFpZDhQMU4zMzYrZitDaTJzTno0ODI4TkZzNm5xUVVhdTlVSk1GdXozUlcyY0N5Nkx4SXlibVpCVEFrb3JwR3p1aHlEUUJFMWs1Sk1Ub0FjUk5jRWV4MGwwZ0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLmViNDYwNDg2NGNlMjQwMWFhMjRmYjRlZDI3MWY2ZTgzLnBuZ1wiLFwiaGVpZ2h0XCI6NTMsXCJ3aWR0aFwiOjQxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUF0VWxFUVZSNDJtT29uN09GbFFFSTdpNW4wSDI0Z2tFZHhHNmNzd2tvQmdMVGJyamF6TGdRYXpIOVlnS1FiUThSbkg2ZG4zbjZ0ZjFBZ1U2R2FkZW5BTm5iZ1RRWFVQVzFiaUJlRHhSWXdUVHQrbHFnd2pWQWlWWUdvT0IySUY0RXhCZUJBdWNacGw5YkFtUnZaaENhZm0yRDRQUnJpL21tWDVzQlpQY0tUTCsyRG9nWEFIWGNhV0dZZHJ1WFllcWRVSWFwZHdPQjdNbEFYTWV3WW41Zjl0NUZtUjRyRjNRN3IxM1E1clYzVVpiVG92bFRZZ0FGWlZmQWV1WldQUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMuZDdmNTk3MzA0OTQ3NDAwZmIyMGYwNWUyZGFlNmI1ZmIucG5nXCIsXCJoZWlnaHRcIjo1MSxcIndpZHRoXCI6NDcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTZrbEVRVlI0Mm1QWTNjR2prZUhQZVRmRWd1SGNWZ09HL2MrRHhLKzlTRlk5KzIyRGdBRER1alk5YzNVR2h2OUhxNnYvSDErNjVQL2FwTFQvVDJ3WVB2N1k0Q3pCMEZhcTVwL0l3UEQvMThIOXZ4OWR1L3BuOWFwVi8yN3JNZno4TTlOTmw2RTZYcXFYZ1lIaC82MitydCs3ZXJ2L0w2dXUvdk5RbXVILzZ3cURWSVpjZjRFdHlzYm0vOTFNREg1djhQUDgvempZODlmVFlPLy96ek5VK2hnYUUzZ21PSmtaL1dld2RQaS9JOGpuOTl1bzhQK1B3OTMvdnk2VHpXRDRmNDZCb3pXR29WL2FnT0hMUmgyQi82LzlaRjgveTJhb1pFQUd1NmFJcTUydWtPbjVmMEJmR0NZR0FOWktac0ZjMjF2SEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd0xlZnQuZDZkNTBmZmFjZTMyMjBjYWNlZTg4Y2Q1ZTU1NTYwMWEucG5nXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQXpVbEVRVlI0Mm1QNC8vKy84TDkvLy9SLy8veGxCR1FiQU5tR1FGb0hTSE16QUFtRHYzLyttSUlFZm4zL1lmcnoyM2ZUdjMvL21nSDU2Z3gvZnY4MkJqS1V0aFcxZFo2YXZ6b0p5QllIWWlPZ0JoMEdJRU50VTNiOTlIa01uaDgycDlkTjNKUlNQZVhCaVhOZVFIRlZrS1RHbnRiSmRRc0UvSi90cXVsdDJOODV2Zno1dFZzdUlFME12My8rTkFVeUZQYTFUNnM0djNKek5KQXRDVFZXbXdISUFMcjBwem1RMWdaaXc1L2Z2cG4vKy9zWHhGY0Z1WllmeU5ENjllT0gzcC9mZjNTZzNsRC85KzhmQndCajlxUFBqKzQ3a2dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd1JpZ2h0LjkxMWZjOWU4NGUwNDQ2Mzc4MGEzYjc1OTE4YTY1NWE3LnBuZ1wiLFwiaGVpZ2h0XCI6MzUsXCJ3aWR0aFwiOjMxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUF5VWxFUVZSNDJtUDQ5KytmTUJEci9mLy8zK0RmMzc4R3YzLzlNZ0t5ZFlCaTNBd2d3YjkvL3BqKytQck5ETWcyQmtuOC92bkxBa2lyTWZ6NS9kc0V5QURwRk4zZk5xMzB5T1NGMlVDMkVsQ3hMa2luOXRWZEI4SjJOUFIyYmkxcG5UaWZ6ZWZ0OFZuTFFBb1V3SkpYZHUwUDI5blkxNzR4dTNiT2ZFYnZEeWZucjBvSGlpdUNqQVhab3d2RVlvY256TXM3dlhodEFwQ3QvUFBiZHoyUVRqMmdnOHkrZi9saUFYSWNTT0h2bno4dGdiUXFBOURKL0VDc0JYYmxyMThnQ1pEajFQLzkrOGNCQUp5OW8rakNYV2RDQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2ZvcnRCYWNrLjJmYWM0YTUzZjA2ZTBkN2I1MDhkMDM5NThkNmMxMWFmLnBuZ1wiLFwiaGVpZ2h0XCI6MzI0LFwid2lkdGhcIjozNzIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQThrbEVRVlI0bkFIbkFCai9BV21OVmNxWEJNZ0JhUW84QVBYVDhnQUxGQWdBQlFnSEFORE80UUF1S3l3QUFXT0NVTXowREE0QTNOM2RBTTNpMWdCRUxEWUFGUDM5QU83bTlnQTFNVVFBQVh5Tlo4c2xHZ3dBM3FhTkFDUkNaQURlM3RjQTh4UXFBQ0FtTlFEeTgrNEFBVlp2T3N2UDV0Z0FuR0tiQUQ0ZEFRRFNwS0FBbk9zV0FPc044QURyODlRQUFWeHZXY3NqRng4QVVUeEdBT3k4cEFDK3A3c0FJeWdEQUlnQUJnQVMvUWNBQVZ4a1c4em45dThBZ1Q4bkFOdSt4d0NqcWNnQUh5b1RBSi84Q1FBYS9Qb0FBVXBaTU1rQi9mb0FEdi96QUJIMkJnQ1d6ZW9BQVBjQUFBc0FBQUQ1QlFJQVc3RldEbXExSTNzQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9zZWNCYWNrLjBjZWQ4OTU4NjA1NjBhOTAzYTFjNmJjMzNmODM1YWYzLnBuZ1wiLFwiaGVpZ2h0XCI6MzI0LFwid2lkdGhcIjozNzIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQTQwbEVRVlI0bkEzTXZVckRVQmlBNGZlelRkTEJkbWhOUUVvbkJSY2R4S1VFQnhjbjhTNWMzZDFFdkFIZHZRR3ZvWWlyMktDNGRMS2pCQkt0cENYTnowbk9hZmFIUjA2Zlh0NHZUMXhwYmNGdlpRaEx3MStwU1hJaG5zMlEyK2ZYd0QvMFNQTUtSVTNXd0o4YTVpWDhOMUFlSngvVHozbkNWNWd6M09seVBMTHhkNXRCd3lTeWtQSFZ6ZlN0NkhBMzNzYy82RkhWQ3ExS0ZtR0hUSytSaTdPOXdEaXVHUXc5M0c0Q1NzaExSUnhwN1BZS3VYNFlCWlpkbUtXT3hHUjlXblhQRkdzdC9meklMR0pINVB5K0ZSU3FiWFM1alY0NnBLbEYvSjB3d0dOVlpHd0FMUkJyNWJOWitUa0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL25ld3MvdHJkQmFjay4xNjNiZDM5NWVhYWYwYzlkNWQyNTNlYWQ5OWJhYmNmZC5wbmdcIixcImhlaWdodFwiOjMyNCxcIndpZHRoXCI6MzcyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUEyVWxFUVZSNDJnM05zVTZEVUJRRzRQL0FnVnZvcFJBV2EweTB3VVFIdTV1WU9EcjR3RFVPT2pwMU5VYkhKcVl4cE5CU3hOSmVMc2QrTC9EUjAreDVicnVPaGxFc0xudXd2VUFQZkRBenJhby80YmZYR2EyclJrSUcxWnRhc3NrWVZsenFLQkJXVEU2K1hNakRlVVdlYVdWOGNZTk05N2lrTC9uKy9LQnMreUxPN2IxQ0VPUnlmWGVDcTJtRzFuUFJwQXJUeDFnV3Z3Wk9VVGFZSHpTQzVCUnBZbEIwNzVEUkVGRXE4Q2RuNEFQNXBKTUJ5bUtKclZQQ01xTlhMdlpWRHgySDRMemUySFZMeDJZRnBVWUlvd1IxczhQZUdNalBEdjgxOWx6TlNNTzlnQUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93TGVmdC5hZDc4OTc2ZTYzMzM3NzhhMjA3YzhiNDY0MGMwMjllYi5wbmdcIixcImhlaWdodFwiOjcwNCxcIndpZHRoXCI6MTI5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBSUNBWUFBQUE0R3BWQkFBQUFGMGxFUVZSNG5HUDg5KytmSUlnUUFoRmdGaG9Ca1FBQTh3d1lZOGhWT3hBQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd0xlZnRWZWN0b3IuZDg0NThkYWRhMzY3ZDgxNTVlNzBmMzFmMzNlN2Y1MWYucG5nXCIsXCJoZWlnaHRcIjozOCxcIndpZHRoXCI6NDIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQWowbEVRVlI0Mm1QWXlPbk92SW5UblowQkNEWnllaXdBNHE5QUxNOEFCSnM0UFZnWmtNRkdMdmNRSVA0UFZQQU1pSlVnZ3B6dWJrQ1ZpVUFjRDJUN0F2SG1UUWhGWmd4QWdUOUFTYUFBVUJCSVE5bmZ3SXE0UEc0ekFJMVVCM0pzZ2JRMWtOWUY0azJidUR4QWlxOEN4V1FaWUFEcXFIeW81Q1VnRm9RNWpBbm9DemFvZTFxQitEeFFraC9xS3hZQWhERkRsaXhhaWpvQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd1JpZ2h0LmU5ZGJhNzg1NzQ3NDkxYWNiNzk5OGNiYmI3NDZmNGM2LnBuZ1wiLFwiaGVpZ2h0XCI6NzA0LFwid2lkdGhcIjoxMzAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFJQ0FZQUFBQTRHcFZCQUFBQUYwbEVRVlI0bkdQODkrK2ZJSWdRQWhFSUZwaEFjQVVCOHpFWVpZSjhZSUVBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHRWZWN0b3IuMDZkOGE1MTg3NGMxODNlY2Q5MTU3YjFlNDBjYzAwMGIucG5nXCIsXCJoZWlnaHRcIjozOCxcIndpZHRoXCI6NDIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQW1FbEVRVlI0MmsyT1BRb0NRUXlGZzc4d0tjUURpR0JqWlcwaDFrbGphUzJld0Z0NERpK1FLZlFrQ25iV2V3UHRaUHhrZDJFZlBDYTg3NFdKUkxLaG9GQ2JNNy94UlZCT1BzN0ordExBQmFBSzlSTEo5OUlWWUUyaFlxUHczckxhTHFzZjJENlNtUkMrYXVnZllQa2IyUG9yZ0JtbFp4TmNLYS9JTm55MUpWKzJOMHp4QTBqSlR0SVZZRkMvUG1HKzQ3TWc3aGlGV3U4SHdYQkRJQ1BQTzNrQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9iYXJjYS43NWY5ZTIzMGJlYjc5ZTI4MmQ3YTBmMzY5YTZlNjY2ZS5wbmdcIixcImhlaWdodFwiOjIyMyxcIndpZHRoXCI6MjA2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE4MGxFUVZSNG5BSG9BQmYvQVorRlFETVNHUndwQmZmd0dmRUFBTmNNOWMwdCtBSVIzZm44SDg0QnNwNWFiQ3NPUEpNQzN2SUFBU3p6QUFmcGhRRHhCU2dBei9jNVFBR1ltRncyUlFBNXlRZlY5dndJU2ZVQkJlMkFBK3I3TXV3bDltTW1BY3VrTWFRaEkwUmI1K1AxL2ZjQit3SUg4WnYvR0JzQUF0VGtQM1FCcEl4V3N2WFdBazM5QkFEN0N4SHdCTzNtSC9zT0Z3RUdFaVQzZ3dHTmgxNXI5N2tPbEFFUUJ3QkRWdEwrc1hzdEFoRTUrQUFoVHd3N0FRRC9BQUcwZ3krUTVmSTBYeEFIOGcveStnM3BKUjdoaHU5dHZaSUJucVl1QUI3RzBnQVZTZ0FZOE9wRE5qRk9PcjNOaklQMTQ0WUFBTG16WWtUTzVxalFBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHJlZEJhY2suMzJhODk2OTNlNTY0YjY4Y2E0YTdhYjFkN2UyMWQyNGEucG5nXCIsXCJoZWlnaHRcIjo3MDQsXCJ3aWR0aFwiOjE5MTksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFEQ0FZQUFBQ3V5RTVJQUFBQWJrbEVRVlI0bkFGakFKei9BVGsrVnY0VUdRc0E5L2p0QVB2Nit3QURBLzRBRnhraUFQSHU5d0M2cmFZQUFUTThWUDhuTVM0QS9QcjlBTy9xNXdEMThPOEFIU2tsQU9UYTF3RE12TU1BQVRjelB2NHBOaDBBR3pBUUFCNFpDZ0RzN2U0QXhMUHZBTmZRNkFEeDgvRUFRQThyZFN2dkpLb0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHNqLmNlNGFjMzE5NmI5MDEyODBjZGRiOWI3ZTE3YzQ4NWZlLnBuZ1wiLFwiaGVpZ2h0XCI6MjI1LFwid2lkdGhcIjoyMjQsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQkEwbEVRVlI0Mm1PQWdlTEp1eUtiNSt4ZjBySHc0S3o4Q1R0c1FXS2Q4dzh3Z2lVbnJUbytkK2JhRS8vbmJqejlmL3FhRS84bnJUajZ2Mi9aMFJ5d1pNT2MvU2s1N1J2L0YwemYrM3RqLzVyZmN5ZHYvbFUrWSsvLzlOYU4vNWZ0dnFURFVEeHh4MmFmdkNYL0dTclgvM2xaM3ZIL1FQbTAvd3hsYTM5SGxDei8zNy9zYUFsRDllU2RhK1h5bHY4L3RtRHI3OXNOUGY4ZjljNzR2M0RhMWw4bUJjdi96MXg5UEo5aHd0SWpBV0dORy83UG43RDVmL0hFZGIrbnpOejhxNjFsM2YrVTdxM2ZEcHkrbzhBQWR1M0Nneld4M2R2K3h6UnMrSi9ZdGUxLzd1UmQzK2VzT3huSWdBem1yamx1MnJsZ2YxWGZvb05GbS9kZUF1dk03OXJNQkFBNEJJbTZIR25pQXdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vc2xpZGVCYWNrLmIwOWI1YjI0M2YyNzdkOGZhNzE0MjFmN2YxMzI0NTI4LnBuZ1wiLFwiaGVpZ2h0XCI6MzI0LFwid2lkdGhcIjozNzIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQTFrbEVRVlI0MmczRnYwN0NRQnpBOGUvdnZCWnN6c1NnUlVVVDRwL0J5Y1RkSjNEM2dYd1hGeE5Oakl2UG9LTURDd01oSkNLSUFkclNjb1hld1dmNXlQM2owOWZwdnBHN2FJNE80ZnFpU2VzNFpyWE1LSjN5U2tTcm4ySmJQWkR2encrWkpMbllsWk1zK1JjZDdpcmRHYVMraHlPYURyaHEzL0w4OWc2cW9ubDRRako1UmZkbUtaaVFkRGlrUC9vamFyVFlxZFVZMlFvYkhLSGJuUmQreDVhOWh4dk9McytwaHhFQ2VJUWlEOUR4d1ZoaTQ3RmhsKzY4anpnUUJldXl4T1lsMmpSTVpiTUs1WVQxd3VPMzQ4RVd3bkxoMlFERktsZFpuNnlBMWdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXJyb3dMZWZ0XCI6IFwiQXJyb3dfYXJyb3dMZWZ0X18xSHZpalwiLFxuXHRcImFycm93UmlnaHRcIjogXCJBcnJvd19hcnJvd1JpZ2h0X18xMHJOdVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiR2FtZVJ1bGVzX2NvbnRhaW5lcl9fMzhlbGVcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiR2FtZVJ1bGVzX3RyYW5zaXRpb25fXzNSTFpTXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYWdpbmF0aW9uX2NvbnRhaW5lcl9fM2ljWGdcIixcblx0XCJyb3VuZFwiOiBcIlBhZ2luYXRpb25fcm91bmRfXzM2eWZ5XCIsXG5cdFwiYWN0aXZlXCI6IFwiUGFnaW5hdGlvbl9hY3RpdmVfXzJNaVJOXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYWdlUGFydGljYWxlc19jb250YWluZXJfXzNlcHNzXCIsXG5cdFwidGl0bGVcIjogXCJQYWdlUGFydGljYWxlc190aXRsZV9fVXBFeU5cIixcblx0XCJib2R5XCI6IFwiUGFnZVBhcnRpY2FsZXNfYm9keV9fMWhOQUZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNsaWRlUGFnZXNfY29udGFpbmVyX18zWmkxRVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSGVhZGVyX2NvbnRhaW5lcl9fM1pkbWNcIixcblx0XCJ0aXRsZVwiOiBcIkhlYWRlcl90aXRsZV9fWlJKODlcIixcblx0XCJidXR0b25zXCI6IFwiSGVhZGVyX2J1dHRvbnNfXzE3dmZiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJNYXRjaGVzX2NvbnRhaW5lcl9fMkthMnpcIixcblx0XCJjb250ZW50XCI6IFwiTWF0Y2hlc19jb250ZW50X18xUFFfRVwiLFxuXHRcImluX3NlcGVyZXRlX3BhZ2VcIjogXCJNYXRjaGVzX2luX3NlcGVyZXRlX3BhZ2VfXzItX0ZwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJvd0xlZnRcIjogXCJBcnJvd19hcnJvd0xlZnRfXzNHdEE0XCIsXG5cdFwiYXJyb3dSaWdodFwiOiBcIkFycm93X2Fycm93UmlnaHRfXzMzMjlsXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYWdpbmF0aW9uX2NvbnRhaW5lcl9fMnN4THhcIixcblx0XCJyb3VuZFwiOiBcIlBhZ2luYXRpb25fcm91bmRfXzFkSWxSXCIsXG5cdFwiYWN0aXZlXCI6IFwiUGFnaW5hdGlvbl9hY3RpdmVfXzNYSVNzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJURE1hdGNoZXNCb2FyZF9jb250YWluZXJfXzJQSnJhXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJUTU1hdGNoZXNCb2FyZF9jb250YWluZXJfXzJkc0hIXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJSb3dfY29udGFpbmVyX18xV0JPaFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUm93RGVzY3JpcHRpb25fY29udGFpbmVyX18yMTl0LVwiLFxuXHRcImNvbnRlbnRcIjogXCJSb3dEZXNjcmlwdGlvbl9jb250ZW50X18yU2VYVVwiLFxuXHRcImRhdGVfZ2FtZU5TdGFydGVkX2NvbnRlbnRcIjogXCJSb3dEZXNjcmlwdGlvbl9kYXRlX2dhbWVOU3RhcnRlZF9jb250ZW50X18xTXFFSlwiLFxuXHRcImRhdGVfZ2FtZVN0YXJ0ZWRfY29udGVudFwiOiBcIlJvd0Rlc2NyaXB0aW9uX2RhdGVfZ2FtZVN0YXJ0ZWRfY29udGVudF9fM0dfWjJcIixcblx0XCJ0ZWFtc1wiOiBcIlJvd0Rlc2NyaXB0aW9uX3RlYW1zX18yN1ZQT1wiLFxuXHRcInRlYW1PbmVcIjogXCJSb3dEZXNjcmlwdGlvbl90ZWFtT25lX19UUElrYVwiLFxuXHRcInNjb3JlXCI6IFwiUm93RGVzY3JpcHRpb25fc2NvcmVfXzM4U1ZGXCIsXG5cdFwidGVhbVR3b1wiOiBcIlJvd0Rlc2NyaXB0aW9uX3RlYW1Ud29fXzNtYWQyXCIsXG5cdFwiYnV5QnV0dG9uX2NvbnRhaW5lclwiOiBcIlJvd0Rlc2NyaXB0aW9uX2J1eUJ1dHRvbl9jb250YWluZXJfXzNyQ05rXCIsXG5cdFwiYnV0dG9uX2NvbnRlbnRcIjogXCJSb3dEZXNjcmlwdGlvbl9idXR0b25fY29udGVudF9fMTJ3VVBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlJvd1RpdGxlX2NvbnRhaW5lcl9fRFdaNUxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkRheUNoYW5nZUJ1dHRvbl9jb250YWluZXJfXzJkQXFlXCIsXG5cdFwibmFtZVwiOiBcIkRheUNoYW5nZUJ1dHRvbl9uYW1lX18yblNuSVwiLFxuXHRcImRhdGVcIjogXCJEYXlDaGFuZ2VCdXR0b25fZGF0ZV9fMy1NVzhcIixcblx0XCJhY3RpdmVfbmFtZVwiOiBcIkRheUNoYW5nZUJ1dHRvbl9hY3RpdmVfbmFtZV9fMzE1c1BcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX3RyYW5zaXRpb25fXzFURmczXCIsXG5cdFwiYWN0aXZlX2RhdGVcIjogXCJEYXlDaGFuZ2VCdXR0b25fYWN0aXZlX2RhdGVfX09CZWFEXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJUTUhlYWRlcl9jb250YWluZXJfXzJzZjhLXCIsXG5cdFwiY29udGVudFwiOiBcIlRNSGVhZGVyX2NvbnRlbnRfXzIzUXVZXCIsXG5cdFwidGl0bGVcIjogXCJUTUhlYWRlcl90aXRsZV9fM3U5ekdcIixcblx0XCJkYXlfY2hhbmdlX2J1dHRvbnNcIjogXCJUTUhlYWRlcl9kYXlfY2hhbmdlX2J1dHRvbnNfXzNxb1lwXCIsXG5cdFwiY2FsZW5kYXJcIjogXCJUTUhlYWRlcl9jYWxlbmRhcl9fMldBaF9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRvZGF5TWF0Y2hlc19jb250YWluZXJfXzN4Y2ZUXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIlRvZGF5TWF0Y2hlc190cmFuc2l0aW9uX18xZGl2clwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTmV3c19jb250YWluZXJfX3NsUEtfXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTbGlkZV9jb250YWluZXJfX1F6WkJ3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJvd0xlZnRcIjogXCJBcnJvd19hcnJvd0xlZnRfXzIyTVJqXCIsXG5cdFwiYXJyb3dSaWdodFwiOiBcIkFycm93X2Fycm93UmlnaHRfX2ZwTHBDXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNY29udGFpbmVyXCI6IFwiSXRlbU1vZGFsX01jb250YWluZXJfXzFZa01nXCIsXG5cdFwiTWNvbnRlbnRcIjogXCJJdGVtTW9kYWxfTWNvbnRlbnRfXzJydkJ4XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSXRlbU1vZGFsX2NvbnRhaW5lcl9fMWpFbGFcIixcblx0XCJpbWdfY29udGVudFwiOiBcIkl0ZW1Nb2RhbF9pbWdfY29udGVudF9fS0loZG5cIixcblx0XCJkZXNjcmlwdGlvbl9jb250ZW50XCI6IFwiSXRlbU1vZGFsX2Rlc2NyaXB0aW9uX2NvbnRlbnRfXzE2VlZ2XCIsXG5cdFwidGl0bGVcIjogXCJJdGVtTW9kYWxfdGl0bGVfXzItV3A0XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJJdGVtTW9kYWxfZGVzY3JpcHRpb25fX2hSR3FHXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJJdGVtX2NvbnRhaW5lcl9fM3RxMkpcIixcblx0XCJ0b3BMaW5lc1wiOiBcIkl0ZW1fdG9wTGluZXNfXzFvTmtXXCIsXG5cdFwibGluZU9uZVwiOiBcIkl0ZW1fbGluZU9uZV9fNWFYTTlcIixcblx0XCJsaW5lVHdvXCI6IFwiSXRlbV9saW5lVHdvX18xVVVBdFwiLFxuXHRcImNvbnRlbnRcIjogXCJJdGVtX2NvbnRlbnRfXzJZZ2QyXCIsXG5cdFwiYm90dG9tTGluZXNcIjogXCJJdGVtX2JvdHRvbUxpbmVzX18zVUNjYlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUGFnaW5hdGlvbl9jb250YWluZXJfXzFyWTJIXCIsXG5cdFwicm91bmRcIjogXCJQYWdpbmF0aW9uX3JvdW5kX18xTFpURVwiLFxuXHRcImFjdGl2ZVwiOiBcIlBhZ2luYXRpb25fYWN0aXZlX18zSUZnaFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUHJlZGljdGlvbl9jb250YWluZXJfXzMyYlVsXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJvd0xlZnRcIjogXCJBcnJvd19hcnJvd0xlZnRfXzFuMkdsXCIsXG5cdFwiYXJyb3dSaWdodFwiOiBcIkFycm93X2Fycm93UmlnaHRfX05aTjdXXCIsXG5cdFwiYXJyb3dSaWdodFZlY3RvclwiOiBcIkFycm93X2Fycm93UmlnaHRWZWN0b3JfXzN6eExsXCIsXG5cdFwiYXJyb3dMZWZ0VmVjdG9yXCI6IFwiQXJyb3dfYXJyb3dMZWZ0VmVjdG9yX19VNkZTcVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSXRlbV9jb250YWluZXJfX1RhbzVFXCIsXG5cdFwiY29udGVudFwiOiBcIkl0ZW1fY29udGVudF9fMnRZSEZcIixcblx0XCJ0b3BcIjogXCJJdGVtX3RvcF9fVzJyQjBcIixcblx0XCJ0ZWFtXCI6IFwiSXRlbV90ZWFtX18zR1o4NFwiLFxuXHRcInRpbWVyX2NvbnRhaW5lclwiOiBcIkl0ZW1fdGltZXJfY29udGFpbmVyX18yZzVwYlwiLFxuXHRcInRpbWVyXCI6IFwiSXRlbV90aW1lcl9fQ2g2NThcIixcblx0XCJib3R0b21cIjogXCJJdGVtX2JvdHRvbV9fZ0NGcmhcIixcblx0XCJidXR0b25zXCI6IFwiSXRlbV9idXR0b25zX18xQnF3dFwiLFxuXHRcInByZWRpY3Rpb25fYnV0dG9uX2NvbnRhaW5lclwiOiBcIkl0ZW1fcHJlZGljdGlvbl9idXR0b25fY29udGFpbmVyX18zeGJqT1wiLFxuXHRcInByZWRpY3Rpb25fYnV0dG9uX2NvbnRlbnRcIjogXCJJdGVtX3ByZWRpY3Rpb25fYnV0dG9uX2NvbnRlbnRfXzFXOHZIXCIsXG5cdFwiYnV5X2J1dHRvbl9jb250YWluZXJcIjogXCJJdGVtX2J1eV9idXR0b25fY29udGFpbmVyX19uUHBvX1wiLFxuXHRcImJ1eV9idXR0b25fY29udGVudFwiOiBcIkl0ZW1fYnV5X2J1dHRvbl9jb250ZW50X181UEV6Z1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUHJlZGljdGlvbk1vZGFsX2NvbnRhaW5lcl9fMllpLWRcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiUHJlZGljdGlvbk1vZGFsX3RyYW5zaXRpb25fX3ctQ3ZmXCIsXG5cdFwiY29udGVudFwiOiBcIlByZWRpY3Rpb25Nb2RhbF9jb250ZW50X18xWTZaRlwiLFxuXHRcInRvcFwiOiBcIlByZWRpY3Rpb25Nb2RhbF90b3BfXzEtbjN6XCIsXG5cdFwidGVhbVwiOiBcIlByZWRpY3Rpb25Nb2RhbF90ZWFtX18xVllERVwiLFxuXHRcInZzXCI6IFwiUHJlZGljdGlvbk1vZGFsX3ZzX18zMWliTlwiLFxuXHRcImJvdHRvbVwiOiBcIlByZWRpY3Rpb25Nb2RhbF9ib3R0b21fX0dWa3dCXCIsXG5cdFwicHJlZGljdGlvblwiOiBcIlByZWRpY3Rpb25Nb2RhbF9wcmVkaWN0aW9uX18zVnRQalwiLFxuXHRcIm9yZGluYXJcIjogXCJQcmVkaWN0aW9uTW9kYWxfb3JkaW5hcl9fMktpTEZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlByZGVpY3Rpb25TbGlkZV9jb250YWluZXJfXzEyTVNDXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJCdXR0b25fY29udGFpbmVyX180NUt5RFwiLFxuXHRcImNvbnRlbnRcIjogXCJCdXR0b25fY29udGVudF9fMTRGbFVcIixcblx0XCJhY3RpdmVcIjogXCJCdXR0b25fYWN0aXZlX18xTURnNVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXJyb3dMZWZ0XCI6IFwiQXJyb3dfYXJyb3dMZWZ0X18xWHpiSlwiLFxuXHRcImFycm93UmlnaHRcIjogXCJBcnJvd19hcnJvd1JpZ2h0X18yMGFJNVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiRmVlZEJhY2tfY29udGFpbmVyX18yY0NMV1wiLFxuXHRcInRvcFwiOiBcIkZlZWRCYWNrX3RvcF9fMklocWpcIixcblx0XCJhdmF0YXJcIjogXCJGZWVkQmFja19hdmF0YXJfXzNDMDBjXCIsXG5cdFwicmF0ZWluZ1wiOiBcIkZlZWRCYWNrX3JhdGVpbmdfXzF2aUhPXCIsXG5cdFwiYm90dG9tXCI6IFwiRmVlZEJhY2tfYm90dG9tX18zTGtyalwiLFxuXHRcImJvdHRvbV9jb250ZW50XCI6IFwiRmVlZEJhY2tfYm90dG9tX2NvbnRlbnRfXzN1Sm9vXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJGZWVkQmFja19kZXNjcmlwdGlvbl9fMTNfSG5cIixcblx0XCJkYXRlX2xpa2VzX2NvbnRhaW5lclwiOiBcIkZlZWRCYWNrX2RhdGVfbGlrZXNfY29udGFpbmVyX19QWGtkeFwiLFxuXHRcImRhdGVcIjogXCJGZWVkQmFja19kYXRlX18yOGNnVVwiLFxuXHRcInZlcnRpY2FsX2JvcmRlclwiOiBcIkZlZWRCYWNrX3ZlcnRpY2FsX2JvcmRlcl9fNEpMYldcIixcblx0XCJsaWtlc19kaXNsaWtlc1wiOiBcIkZlZWRCYWNrX2xpa2VzX2Rpc2xpa2VzX18zVEFfRFwiLFxuXHRcImxpa2VcIjogXCJGZWVkQmFja19saWtlX19fVGlJclwiLFxuXHRcImRpc0xpa2VcIjogXCJGZWVkQmFja19kaXNMaWtlX19kVGgwZlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTGlrZURpc2xpa2VEcm9wX2NvbnRhaW5lcl9fMUNXNzZcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiTGlrZURpc2xpa2VEcm9wX3RyYW5zaXRpb25fX2x4WnRTXCIsXG5cdFwiY29udGVudFwiOiBcIkxpa2VEaXNsaWtlRHJvcF9jb250ZW50X185WV8xZVwiLFxuXHRcInJvd1wiOiBcIkxpa2VEaXNsaWtlRHJvcF9yb3dfXzFJTDRBXCIsXG5cdFwiYXZhdGFyXCI6IFwiTGlrZURpc2xpa2VEcm9wX2F2YXRhcl9fOEl6NHpcIixcblx0XCJ1c2VyX3BhcnRcIjogXCJMaWtlRGlzbGlrZURyb3BfdXNlcl9wYXJ0X18yY3k5OFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTGVhdmVDb21tZW50X2NvbnRhaW5lcl9fMmlzNmZcIixcblx0XCJzdGFyc19jb250YWluZXJcIjogXCJMZWF2ZUNvbW1lbnRfc3RhcnNfY29udGFpbmVyX18zb3VralwiLFxuXHRcInN0YXJzX2NvbnRlbnRcIjogXCJMZWF2ZUNvbW1lbnRfc3RhcnNfY29udGVudF9fMjV2RkFcIixcblx0XCJzdGFyc19hcmVhXCI6IFwiTGVhdmVDb21tZW50X3N0YXJzX2FyZWFfX1hOYUlOXCIsXG5cdFwidGV4dGFyZWFfY29udGFpbmVyXCI6IFwiTGVhdmVDb21tZW50X3RleHRhcmVhX2NvbnRhaW5lcl9fMzh3RzNcIixcblx0XCJidXR0b25fY29udGFpbmVyXCI6IFwiTGVhdmVDb21tZW50X2J1dHRvbl9jb250YWluZXJfXzJtT25mXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYWdpbmF0aW9uX2NvbnRhaW5lcl9fT1VfWlJcIixcblx0XCJyb3VuZFwiOiBcIlBhZ2luYXRpb25fcm91bmRfXzNiaGVWXCIsXG5cdFwiYWN0aXZlXCI6IFwiUGFnaW5hdGlvbl9hY3RpdmVfXzJDZmJ2XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTb3J0aW5nX2NvbnRhaW5lcl9fMkxodjhcIixcblx0XCJuYW1lXCI6IFwiU29ydGluZ19uYW1lX18zc29ROFwiLFxuXHRcImJhclwiOiBcIlNvcnRpbmdfYmFyX18xbWJIRFwiLFxuXHRcImJ5RGF0ZVwiOiBcIlNvcnRpbmdfYnlEYXRlX18zX0J6LVwiLFxuXHRcImFjdGl2ZVwiOiBcIlNvcnRpbmdfYWN0aXZlX18zYTFhTFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVGVzdGltb25pYWxzX2NvbnRhaW5lcl9fM0xBclBcIixcblx0XCJmZWVkX2JhY2tzX2NvbnRhaW5lclwiOiBcIlRlc3RpbW9uaWFsc19mZWVkX2JhY2tzX2NvbnRhaW5lcl9fMzk1aGtcIixcblx0XCJjYXJvdXNlbFwiOiBcIlRlc3RpbW9uaWFsc19jYXJvdXNlbF9fMnJyVlZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRpdGxlX2NvbnRhaW5lcl9fMWczLWdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vZGFsQ29udGVpbmVyXCI6IFwiTW9kYWxfbW9kYWxDb250ZWluZXJfXzNnOElmXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIk1vZGFsX3RyYW5zaXRpb25fXzFrZnY5XCIsXG5cdFwibW9kYWxDb250ZW50XCI6IFwiTW9kYWxfbW9kYWxDb250ZW50X18xLU80N1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jYWxlbmRhclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdGltZXItaG9va1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=