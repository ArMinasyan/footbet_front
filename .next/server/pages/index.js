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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Main.jsx";
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
/* harmony import */ var _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/news/arrowRight.png */ "./public/images/main/news/arrowRight.png");
/* harmony import */ var _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/news/arrowLeft.png */ "./public/images/main/news/arrowLeft.png");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Arrow.module.scss */ "./components/Pages/Main/Matches/GameRules/Arrows/Arrow.module.scss");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\GameRules\\Arrows\\Arrow.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\GameRules\\GameRules.jsx";
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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\GameRules\\Pagination\\Pagination.jsx";

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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\GameRules\\SlidePage\\PagePareticles\\PagePareticles.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\GameRules\\SlidePage\\SlidePages.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\Header\\Header.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\Matches.jsx";
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
/* harmony import */ var _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/news/arrowRight.png */ "./public/images/main/news/arrowRight.png");
/* harmony import */ var _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/news/arrowLeft.png */ "./public/images/main/news/arrowLeft.png");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Arrow.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.module.scss");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\TDMatchesBoard\\Arrows\\Arrow.jsx";
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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\TDMatchesBoard\\Pagination\\Pagination.jsx";

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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\TDMatchesBoard\\TDMatchesBoard.jsx";

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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\TMMatchesBoard\\TMMatchesBoard.jsx";

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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\common\\Row\\Row.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\common\\Row\\RowDescription\\RowDescription.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\common\\Row\\RowTitle\\RowTitle.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMHeader\\DayChangeButton\\DayChangeButton.jsx";
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
/* harmony import */ var _public_images_main_matches_Calendar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/Calendar.png */ "./public/images/main/matches/Calendar.png");
/* harmony import */ var _public_images_main_matches_arrowRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/arrowRight.png */ "./public/images/main/matches/arrowRight.png");
/* harmony import */ var _public_images_main_matches_arrowLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/arrowLeft.png */ "./public/images/main/matches/arrowLeft.png");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMHeader\\TMHeader.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TodayMatches.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\News\\News.jsx";
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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\News\\Slide\\Slide.jsx";

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
/* harmony import */ var _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/news/arrowRight.png */ "./public/images/main/news/arrowRight.png");
/* harmony import */ var _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/news/arrowLeft.png */ "./public/images/main/news/arrowLeft.png");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Arrow.module.scss */ "./components/Pages/Main/News/Slide/SlideItems/Arrows/Arrow.module.scss");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\News\\Slide\\SlideItems\\Arrows\\Arrow.jsx";
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
/* harmony import */ var _components_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../components/common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemModal.module.scss */ "./components/Pages/Main/News/Slide/SlideItems/ItemModal/ItemModal.module.scss");
/* harmony import */ var _ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\News\\Slide\\SlideItems\\ItemModal\\ItemModal.jsx";


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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\News\\Slide\\SlideItems\\Item\\Item.jsx";



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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\News\\Slide\\SlideItems\\Pagination\\Pagination.jsx";

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
/* harmony import */ var _public_images_main_news_secBack_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/main/news/secBack.png */ "./public/images/main/news/secBack.png");
/* harmony import */ var _public_images_main_news_trdBack_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/news/trdBack.png */ "./public/images/main/news/trdBack.png");
/* harmony import */ var _public_images_main_news_fortBack_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/news/fortBack.png */ "./public/images/main/news/fortBack.png");
/* harmony import */ var _public_images_main_slideBack_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/slideBack.png */ "./public/images/main/slideBack.png");
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Prediction\\Prediction.jsx";
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
/* harmony import */ var _public_images_main_prediction_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/prediction/arrowRight.png */ "./public/images/main/prediction/arrowRight.png");
/* harmony import */ var _public_images_main_prediction_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/prediction/arrowLeft.png */ "./public/images/main/prediction/arrowLeft.png");
/* harmony import */ var _public_images_main_prediction_arrowLeftVector_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/prediction/arrowLeftVector.png */ "./public/images/main/prediction/arrowLeftVector.png");
/* harmony import */ var _public_images_main_prediction_arrowRightVector_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/prediction/arrowRightVector.png */ "./public/images/main/prediction/arrowRightVector.png");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Arrow.module.scss */ "./components/Pages/Main/Prediction/PredictionSlide/Arrows/Arrow.module.scss");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\Arrows\\Arrow.jsx";
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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\Item\\Item.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\Item\\PredictionModal\\PredictionModal.jsx";

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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\Item\\Timer\\Timer.jsx";


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
/* harmony import */ var _public_images_main_prediction_predBack_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/main/prediction/predBack.png */ "./public/images/main/prediction/predBack.png");
/* harmony import */ var _src_games_data_predictions_slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../src/games_data/predictions/slide */ "./src/games_data/predictions/slide.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var _redux_features_matchSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../redux/features/matchSlice */ "./redux/features/matchSlice.js");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\PrdeictionSlide.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Button\\Button.jsx";
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
/* harmony import */ var _public_images_main_news_arrowRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/news/arrowRight.png */ "./public/images/main/news/arrowRight.png");
/* harmony import */ var _public_images_main_news_arrowLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/news/arrowLeft.png */ "./public/images/main/news/arrowLeft.png");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Arrow.module.scss */ "./components/Pages/common/Testimonials/Arrows/Arrow.module.scss");
/* harmony import */ var _Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Arrow_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\Arrows\\Arrow.jsx";
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
/* harmony import */ var _public_images_main_feedbacks_like_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/like.png */ "./public/images/main/feedbacks/like.png");
/* harmony import */ var _public_images_main_feedbacks_dislike_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/dislike.png */ "./public/images/main/feedbacks/dislike.png");
/* harmony import */ var _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/filledStar.png */ "./public/images/main/feedbacks/filledStar.png");
/* harmony import */ var _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/unfilledStar.png */ "./public/images/main/feedbacks/unfilledStar.png");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\FeedBack\\FeedBack.jsx";
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
/* harmony import */ var _public_images_main_feedbacks_like_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/like.png */ "./public/images/main/feedbacks/like.png");
/* harmony import */ var _public_images_main_feedbacks_dislike_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/dislike.png */ "./public/images/main/feedbacks/dislike.png");
/* harmony import */ var _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/avatar.png */ "./public/images/main/feedbacks/avatar.png");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\FeedBack\\LikeDislikeDrop\\LikeDislikeDrop.jsx";
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
/* harmony import */ var _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/filledStar.png */ "./public/images/main/feedbacks/filledStar.png");
/* harmony import */ var _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/unfilledStar.png */ "./public/images/main/feedbacks/unfilledStar.png");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\LeaveComment\\LeaveComment.jsx";

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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\Pagination\\Pagination.jsx";

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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\Sorting\\Sorting.jsx";
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
/* harmony import */ var _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/avatar.png */ "./public/images/main/feedbacks/avatar.png");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\Testimonials.jsx";
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
/* harmony import */ var _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/avatar.png */ "./public/images/main/feedbacks/avatar.png");
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Title\\Title.jsx";
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
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + `account/prediction`,
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
/* harmony import */ var _components_Pages_Main_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../components/Pages/Main/Main */ "./components/Pages/Main/Main.jsx");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\pages\\index.js";

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
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_main_prediction_barca_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/main/prediction/barca.png */ "./public/images/main/prediction/barca.png");
/* harmony import */ var _public_images_main_prediction_psj_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/prediction/psj.png */ "./public/images/main/prediction/psj.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01haW4uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL0Fycm93cy9BcnJvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvR2FtZVJ1bGVzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL1NsaWRlUGFnZS9QYWdlUGFyZXRpY2xlcy9QYWdlUGFyZXRpY2xlcy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvU2xpZGVQYWdlL1NsaWRlUGFnZXMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL2dhbWVfcnVsZXMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL01hdGNoZXMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9BcnJvd3MvQXJyb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9URE1hdGNoZXNCb2FyZC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvd0Rlc2NyaXB0aW9uL1Jvd0Rlc2NyaXB0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1IZWFkZXIvRGF5Q2hhbmdlQnV0dG9uL0RheUNoYW5nZUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1IZWFkZXIvVE1IZWFkZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlcy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9OZXdzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvQXJyb3dzL0Fycm93LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvSXRlbU1vZGFsL0l0ZW1Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL0l0ZW0vSXRlbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9zbGlkZV9zaG93X2RhdGEuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9BcnJvd3MvQXJyb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vSXRlbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvSXRlbS9QcmVkaWN0aW9uTW9kYWwvUHJlZGljdGlvbk1vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9JdGVtL1RpbWVyL1RpbWVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9QcmRlaWN0aW9uU2xpZGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvQXJyb3dzL0Fycm93LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9GZWVkQmFjay9GZWVkQmFjay5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvRmVlZEJhY2svTGlrZURpc2xpa2VEcm9wL0xpa2VEaXNsaWtlRHJvcC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvTGVhdmVDb21tZW50L0xlYXZlQ29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9Tb3J0aW5nL1NvcnRpbmcuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvZmVlZF9iYWNrX2RhdGEuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UaXRsZS9UaXRsZS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvZXIubGliLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2F2YXRhci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2Rpc2xpa2UucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9maWxsZWRTdGFyLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvbGlrZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9DYWxlbmRhci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd0xlZnQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dSaWdodC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd0xlZnQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dSaWdodC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9mb3J0QmFjay5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9zZWNCYWNrLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL3RyZEJhY2sucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0LnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93TGVmdFZlY3Rvci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd1JpZ2h0LnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHRWZWN0b3IucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYmFyY2EucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHJlZEJhY2sucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHNqLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9zbGlkZUJhY2sucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL0Fycm93cy9BcnJvdy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9HYW1lUnVsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL1NsaWRlUGFnZS9QYWdlUGFyZXRpY2xlcy9QYWdlUGFydGljYWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9TbGlkZVBhZ2UvU2xpZGVQYWdlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9NYXRjaGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9BcnJvd3MvQXJyb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvVERNYXRjaGVzQm9hcmQvVERNYXRjaGVzQm9hcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvdy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3dEZXNjcmlwdGlvbi9Sb3dEZXNjcmlwdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUhlYWRlci9EYXlDaGFuZ2VCdXR0b24vRGF5Q2hhbmdlQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNSGVhZGVyL1RNSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL05ld3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvQXJyb3dzL0Fycm93Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvU2xpZGUvU2xpZGVJdGVtcy9JdGVtTW9kYWwvSXRlbU1vZGFsLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvU2xpZGUvU2xpZGVJdGVtcy9JdGVtL0l0ZW0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvQXJyb3dzL0Fycm93Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vSXRlbS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9JdGVtL1ByZWRpY3Rpb25Nb2RhbC9QcmVkaWN0aW9uTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvUHJkZWljdGlvblNsaWRlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vQnV0dG9uL0J1dHRvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9BcnJvd3MvQXJyb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvRmVlZEJhY2svRmVlZEJhY2subW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvRmVlZEJhY2svTGlrZURpc2xpa2VEcm9wL0xpa2VEaXNsaWtlRHJvcC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9MZWF2ZUNvbW1lbnQvTGVhdmVDb21tZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9Tb3J0aW5nL1NvcnRpbmcubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvVGVzdGltb25pYWxzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGl0bGUvVGl0bGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1jYWxlbmRhclwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdGltZXItaG9va1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJ5dXBcIiIsIndlYnBhY2s6Ly9mb290LWJldC9pZ25vcmVkfEM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXHByb2plY3RzXFxmb290LWJldFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIk1haW4iLCJBcnJvdyIsInR5cGUiLCJvbkNsaWNrIiwiaXNFZGdlIiwicG9pbnRlciIsImNvbnN0cyIsImFycm93TGVmdCIsImFycm93U3R5bGVzIiwiYXJyb3dSaWdodCIsInN0eWxlcyIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwiYm90dG9tIiwiR2FtZVJ1bGVzIiwiUGFnaW5hdGlvbiIsImdhbWVfcnVsZXMiLCJlbCIsIk1hdGgiLCJyYW5kb20iLCJwYWdlcyIsImFjdGl2ZVBhZ2UiLCJtYXAiLCJpc0FjdGl2ZVBhZ2UiLCJQYWdlUGFydGljbGVzIiwidGl0bGUiLCJib2R5IiwiU2xpZGVQYWdlcyIsInBhZ2VEYXRhIiwiSGVhZGVyIiwiYnV0dG9uc0FjdGl2aXR5Iiwib25fVE1fY2xpY2siLCJvbl9HTV9jbGljayIsImdhbWVSdWxlc1N0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJNYXRjaGVzIiwic2hvd1RvZGF5TWF0Y2hlcyIsInNldFNob3dUb2RheU1hdGNoZXMiLCJ1c2VTdGF0ZSIsInNob3dHYW1lUnVsZXMiLCJzZXRTaG93R2FtZVJ1bGVzIiwiVERNYXRjaGVzQm9hcmQiLCJmaXJzdFBhZ2UiLCJzZXRGaXJzdFBhZ2UiLCJzZWNvbmRQYWdlIiwic2V0U2Vjb25kUGFnZSIsImZpcnN0UGFnZUl0ZW1zIiwidXBEYXRlRmlyc3RQYWdlSXRlbXMiLCJzZWNvbmRQYWdlSXRlbXMiLCJ1cERhdGVTZWNvbmRQYWdlSXRlbXMiLCJtYXRjaGVzIiwic2V0TWF0Y2hlcyIsInVzZUVmZmVjdCIsImZpbHRlciIsImkiLCJyZXF1ZXN0IiwiR0VUX01BVENIRVMiLCJhdXRoIiwidGhlbiIsIm5vdyIsIkRhdGUiLCJkYXRhIiwibWF0Y2giLCJtYXRjaFRpbWUiLCJkYXRlIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsInRpbWUiLCJnZXRUaW1lIiwiaWQiLCJnYW1lU3RhdGUiLCJ0ZWFtT25lTmFtZSIsInRlYW1PbmVJY29uIiwidGVhbTFfaW1nX3BhdGgiLCJ0ZWFtVHdvTmFtZSIsInRlYW1Ud29JY29uIiwidGVhbTJfaW1nX3BhdGgiLCJzY29yZSIsImJ1eUJ1dHRvbk5hbWUiLCJjb2VmZmljZW50IiwidGl0bGVOYW1lIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJpdGVtcyIsIkFycmF5IiwiZnJvbSIsInJlb3JkZXJlZEl0ZW0iLCJzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsImhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UiLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsInB1c2giLCJxdWVyeSIsImdhbWUiLCJwbGFjZWhvbGRlciIsIm1pbkhlaWdodCIsIlRNTWF0Y2hlc0JvYXJkIiwiR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkiLCJSb3ciLCJ0ZWFtT25lIiwidGVhbVR3byIsImNsaWNrQnV5IiwidHJhc25sYXRpb25Mb2NhdGlvbiIsIlJvd0Rlc2NyaXB0aW9uIiwibG9jYXRpb25Jbk1haW5QYWdlIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5IiwiZ2FtZVN0YXJ0ZWQiLCJzbGljZSIsImxhc3RJbmRleE9mIiwiUm93VGl0bGUiLCJjb250ZW50IiwiRGF5Q2hhbmdlQnV0dG9uIiwibmFtZSIsImFjdGl2ZSIsImNsaWNrIiwiVE1IZWFkZXIiLCJjbGlja1REIiwiY2xpY2tUTSIsIlREQm9hcmRTdGF0ZSIsIlRNQm9hcmRTdGF0ZSIsImdldF9kYXRlIiwidmFsdWUiLCJkYXkiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0RGF0ZSIsInNob3dDYWxlbmRhciIsInNldFNob3dDYWxlbmRhciIsImNhbGVuZGFyIiwic3JjIiwiVG9kYXlNYXRjaGVzIiwic2hvd1RvZGF5R2FtZXMiLCJzZXRTaG93VG9kYXlHYW1lcyIsInNob3dUb21vcnJvd0dhbWVzIiwic2V0U2hvd1RvbW9ycm93R2FtZXMiLCJOZXdzIiwiU2xpZGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwiR0VUX05FV1MiLCJuZXdzIiwiYnJlYWtwb2ludHMiLCJpdGVtc1RvU2hvdyIsIml0ZW1zVG9TY3JvbGwiLCJpbWdfcGF0aCIsInRleHQiLCJJdGVtTW9kYWwiLCJvbk1vZGFsQ2xvc2UiLCJpbWciLCJkZXNjcmlwdGlvbiIsIkl0ZW0iLCJpbWdfc3JjIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsInNob3dJdGVtTW9kYWwiLCJzZXRTaG93SXRlbU1vZGFsIiwibGluZU9uZSIsImxpbmVUd28iLCJzbGlkZV9zaG93X2RhdGEiLCJ1cmwiLCJiYWNrSWNvbiIsInNlY0JhY2siLCJ0cmRCYWNrIiwiZm9ydEJhY2siLCJQcmVkaWN0aW9uIiwiYXJyb3dzIiwiYXJyb3dSaWdodFZlY3RvciIsImFycm93TGVmdFZlY3RvciIsImhlaWdodCIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiZXhwaXJ5VGltZXN0YW1wIiwicHJlZGljdGlvbiIsIm9yZGluYXIiLCJzaG93UHJlZGljdGlvbiIsInNldFNob3dQcmVkaWN0aW9uIiwiZ29Ub1ByZWRpY3Rpb25zIiwidGltZXIiLCJQcmVkaWN0aW9uTW9kYWwiLCJUaW1lciIsInRpbWVDbGFzcyIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJ1c2VUaW1lciIsIm9uRXhwaXJlIiwid2FybiIsIlByZGVpY3Rpb25TbGlkZSIsImN1cnJlbnRNYXRjaElkIiwic2V0Q3VycmVudE1hdGNoSWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiR0VUX1BSRURJQ1RJT05TIiwicnNwIiwiaXRlbSIsInRoZXJlSXMiLCJ0b3RhbEJldCIsImZhY3RvciIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJwcmljZSIsImxlbmd0aCIsImVycm9yIiwidW5kZWZpbmVkIiwic2V0TWF0Y2hJZCIsInByZWRpY3Rpb25CYWNrZ3JvdW5kIiwiaXRlbVBhZGRpbmciLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInNsaWRlQ2hhbmdlIiwicCIsIkJ1dHRvbiIsInBhZ2UiLCJ0ZXh0UGF0aE5hbWUiLCJsb2NhdGlvbkluUGFnZSIsImFkaXRpb25hbFN0eWxlcyIsImNvbnRhaW5lclN0eWxlcyIsIkZlZWRCYWNrIiwiYXZhdGFyIiwibmlrTmFtZSIsInJhdGVpbmciLCJsaWtlcyIsImRpc0xpa2VzIiwicmVhY3Rpb25zRm9yVGVzdGluZyIsInN0YXJzIiwic2hvd1JlYWN0aW9ucyIsInNldFNob3dSZWFjdGlvbnMiLCJmaWxsZWRTdGFyIiwidW5maWxsZWRTdGFyIiwibGlrZUljb24iLCJkaXNMaWtlSWNvbiIsIkxpa2VEaXNsaWtlRHJvcCIsInVzZXJuYW1lIiwicmVhY3Rpb24iLCJMZWF2ZUNvbW1lbnQiLCJzaW11bGF0b3IiLCJzZXRTaW11bGF0b3IiLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImNvbW1lbnQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInVzZUZvcm0iLCJtb2RlIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsInN1Ym1pdCIsInJhdGUiLCJTb3J0aW5nIiwic29ydGluZ1RleHQiLCJkYXRlU29ydGluZ1RleHQiLCJyYXRlU29ydGluZyIsInNvcnRCeURhdGUiLCJzb3J0QnlSYXRlIiwiZGF0ZUFjdGl2ZSIsIlRlc3RpbW9uaWFscyIsIm1hdGNoSWQiLCJ1c2VTZWxlY3RvciIsImdldE1hdGNoSWQiLCJmZWVkQmFja3MiLCJzZXRGZWVkQmFja3MiLCJzZXREYXRlQWN0aXZlIiwiR0VUX0ZFRURCQUNLIiwicHJlZGljdGlvbnMiLCJmZWVkQmFjayIsInJlbmRlckZvcm1hdCIsInNvcnRGb3JtYXQiLCJsaWtlQ291bnQiLCJkaXNsaWtlQ291bnQiLCJzb3J0aW5nIiwidG9Tb3J0Iiwic29ydGluZ0J5IiwiZGF0YUZvclNvcnRpbmciLCJyZWR1Y2UiLCJhYyIsImNvbmNhdCIsInNvcnRlZERhdGEiLCJzb3J0ZWQiLCJzb3J0IiwiYSIsImIiLCJjZWlsIiwic29ydGVkSXRlbXMiLCJmb3JFYWNoIiwieCIsInJlYWN0aW9ucyIsImZlZWRiYWNrX2RhdGEiLCJUaXRsZSIsInRleHRTdHlsZXMiLCJocmVmIiwiY2xhc3NlcyIsImN1cnNvciIsImhhbmRsZV9vdmVyZmxvd19vbl9vcGVuIiwiZG9jdW1lbnQiLCJvdmVyZmxvd1kiLCJoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UiLCJNb2RhbCIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsImNvbnRlbnRTdHlsZXMiLCJvdGhlclN0eWxlcyIsInBvcnRhbExvY2F0aW9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5vZGUiLCJ1c2VSZWYiLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZGluYW1pY1RvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJtb2RhbCIsInRvcCIsImNyZWF0ZVBvcnRhbCIsImdldEVsZW1lbnRCeUlkIiwiaG9zdCIsInBheWxvYWQiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJzbHYiLCJyamN0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRDb29raWUiLCJPYmplY3QiLCJheGlvcyIsIm1ldGhvZCIsImZpbmFsbHkiLCJuYW1lRVEiLCJjYSIsImNvb2tpZSIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwicmVtb3ZlQ29va2llIiwic2V0Q29va2llIiwiZGF5cyIsImV4cGlyZXMiLCJzZXRUaW1lIiwidG9VVENTdHJpbmciLCJBVVRIX1VSTCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJMT0dJTiIsIkdFVF9BQ0NPVU5UX0lORk8iLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVtYWlsIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiU0VUX05FV19QQVNTV09SRCIsIkdFVF9NQVRDSEVTX0JZX1RZUEUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiX3VzZUludGVyc2VjdGlvbiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImFzIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0IiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJyZXNvbHZlIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwibGluayIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwidG9VcHBlckNhc2UiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiZG9tYWluSXRlbXMiLCJob3N0bmFtZSIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSXRlbSIsInRvTG93ZXJDYXNlIiwiX2l0ZW0kZG9tYWluIiwiX2l0ZW0kbG9jYWxlcyIsImRvbWFpbkhvc3RuYW1lIiwiZG9tYWluIiwic29tZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZVBhcnRzIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwicGF0aExvd2VyIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJfdGhpcyRsb2NhbGVzIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsInkiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJwcm90b2NvbCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiSW5kZXhQYWdlIiwibGF5b3V0IiwiZ2V0U3RhdGljUHJvcHMiLCJfX2xvYWROYW1lc3BhY2VzIiwibG9hZGVyTmFtZSIsIl9faTE4bkNvbmZpZyIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJtYXRjaFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFjdGlvbiIsImFjdGlvbnMiLCJyZWR1Y2VyIiwicHNqSWNvbiIsImJhcmNhSWNvbiIsImF0bGV0aWNJY29uIiwicmVubmFpc0ljb24iLCJhdGxldGljb0ljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FB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dGtCLCtEQUFnQixDQUFDLGdLQUFnSyx5T0FBeU8sRTs7Ozs7Ozs7Ozs7O0FDQTFaLCtEQUFnQixDQUFDLDBKQUEwSixpYkFBaWIsRTs7Ozs7Ozs7Ozs7O0FDQTVsQiwrREFBZ0IsQ0FBQyxxSkFBcUoscVhBQXFYLEU7Ozs7Ozs7Ozs7QUNBM2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBLHFEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hbS9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2FtL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2FtL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2RldS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2RldS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VuL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VuL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3Bfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL3JzL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL3JzL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBPYmplY3Qua2V5cyhtYXApOyB9O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9sb2NhbGVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVGVzdGltb25pYWxzIH0gZnJvbSAnLi4vY29tbW9uL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHMnXHJcbmltcG9ydCB7IE1hdGNoZXMgfSBmcm9tICcuL01hdGNoZXMvTWF0Y2hlcydcclxuaW1wb3J0IHsgTmV3cyB9IGZyb20gJy4vTmV3cy9OZXdzJ1xyXG5pbXBvcnQgeyBQcmVkaWN0aW9uIH0gZnJvbSAnLi9QcmVkaWN0aW9uL1ByZWRpY3Rpb24nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5ld3MgLz5cclxuICAgICAgICAgICAgPE1hdGNoZXMgXHJcbiAgICAgICAgICAgICAgICBnYW1lUnVsZXNTdGF0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFByZWRpY3Rpb24gLz5cclxuICAgICAgICAgICAgPFRlc3RpbW9uaWFscyBcclxuICAgICAgICAgICAgICAgIHBhZ2U9eydob21lJ31cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXsndGVzdGltb25pYWxzJ31cclxuICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17Jy50aXRsZSd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc3RzIH0gZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93UmlnaHQucG5nJ1xyXG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd0xlZnQucG5nJ1xyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcblxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMzVweCcsXHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6ICcxMCUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNFZGdlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuL1BhZ2luYXRpb24vUGFnaW5hdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HYW1lUnVsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGdhbWVfcnVsZXMgfSBmcm9tICcuL2dhbWVfcnVsZXMnXHJcbmltcG9ydCB7IFNsaWRlUGFnZXMgfSBmcm9tICcuL1NsaWRlUGFnZS9TbGlkZVBhZ2VzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVSdWxlcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgICAgIHJlbmRlclBhZ2luYXRpb249e1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lX3J1bGVzLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVBhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YT17ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZXMsIGFjdGl2ZVBhZ2UsIG9uQ2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlcy5tYXAoZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZVBhZ2UgPSBhY3RpdmVQYWdlID09PSBlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZVBhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJvdW5kfSAke2lzQWN0aXZlUGFnZSAmJiBzdHlsZXMuYWN0aXZlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnZVBhcnRpY2FsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnZVBhcnRpY2xlcyh7XHJcbiAgICB0aXRsZSxcclxuICAgIGJvZHlcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgUGFnZVBhcnRpY2xlcyB9IGZyb20gXCIuL1BhZ2VQYXJldGljbGVzL1BhZ2VQYXJldGljbGVzXCI7XHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NsaWRlUGFnZXMubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlUGFnZXMoe1xyXG4gICAgcGFnZURhdGFcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhZ2VEYXRhLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VQYXJ0aWNsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2VsLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5PXtlbC5ib2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2FtZV9ydWxlcyA9IFtcclxuICAgIC8vIGVhY2ggYXJyYXkgYXJlIHBhZ2UgZGF0YSBcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn0KTRg9GC0LHQvtC7OiDQutC+0LzQsNC90LTQsCDQuCDQt9Cw0L/QsNGB0L3Ri9C1INC40LPRgNC+0LrQuC4nLFxyXG4gICAgICAgICAgICBib2R5OiAn0JIg0YHQvtGB0YLQsNCyINC60L7QvNCw0L3QtNGLINCy0YXQvtC00Y/RgiAxMSDRh9C10LvQvtCy0LXQujogMSDQstGA0LDRgtCw0YDRjCDQuCAxMCDQv9C+0LvQtdCy0YvRhSDQuNCz0YDQvtC60L7Qsiwg0LrQvtGC0L7RgNGL0LUg0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00Ywg0L/QvtC00YDQsNC30LTQtdC70Y/RjtGC0YHRjyDQvdCwINC30LDRidC40YLQvdC40LrQvtCyLCDQv9C+0LvRg9C30LDRidC40YLQvdC40LrQvtCyINC4INC90LDQv9Cw0LTQsNGO0YnQuNGFLtCSINC40LPRgNCw0YUg0L3QsCDQvtGH0LrQuCDQuCDQsiDQutGD0LHQutC+0LLRi9GFINC40LPRgNCw0YUg0L3QsCDQv9GA0L7RgtGP0LbQtdC90LjQuCDQvtC00L3QvtCz0L4g0LzQsNGC0YfQsCDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YDQvtC40LfQstC10LTQtdC90LAg0LfQsNC80LXQvdCwIDIg0LjQs9GA0L7QutC+0LIg0LjQtyDQutCw0LbQtNC+0Lkg0LrQvtC80LDQvdC00Ysu0J/RgNC+0LTQvtC70LbQuNGC0LXQu9GM0L3QvtGB0YLRjCDQvNCw0YLRh9CwINC80YPQttGB0LrQuNGFINC4INC80L7Qu9C+0LTQtdC20L3Ri9GFINC60L7QvNCw0L3QtCjRgSAxNiDQtNC+IDE4INC70LXRgikg0YHQvtGB0YLQsNCy0LvRj9C10YIgOTAg0LzQuNC9LiDQnNCw0YLRhyDRgdC+0YHRgtC+0LjRgiDQuNC3INC00LLRg9GFINGC0LDQudC80L7QsiDQv9C+IDQ1INC80LjQvS7Qn9C+0YHQu9C1INC/0LXRgNC10YDRi9Cy0LAsINC80LjQvdC40LzQsNC70YzQvdCw0Y8g0L/RgNC+0LTQvtC70LbQuNGC0LXQu9GM0L3QvtGB0YLRjCDQutC+0YLQvtGA0L7Qs9C+IDUg0LzQuNC9LCDQutC+0LzQsNC90LTRiyDQvNC10L3Rj9GO0YLRgdGPINCy0L7RgNC+0YLQsNC80Lgu0J/QvtC70LXQstGL0LUg0LjQs9GA0L7QutC4INC80L7Qs9GD0YIg0LrQsNGB0LDRgtGM0YHRjyDQvNGP0YfQsCDQu9GO0LHQvtC5INGH0LDRgdGC0YzRjiDRgtC10LvQsCwg0LrRgNC+0LzQtSDRgNGD0Lou0JfQsCDQuNCz0YDRgyDRgNGD0LrQvtC5INC60L7QvNCw0L3QtNC1INC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0YjRgtGA0LDRhNC90L7QuSDRg9C00LDRgCDQuNC70LggMTEt0LzQtdGC0YDQvtCy0YvQuSDRg9C00LDRgCwg0LrQvtGC0L7RgNGL0Lkg0LLRi9C/0L7Qu9C90Y/QtdGCINC40LPRgNC+0Log0LrQvtC80LDQvdC00Ysg0YHQvtC/0LXRgNC90LjQutCwLtCV0YHQu9C4INC80Y/RhyDQv9C10YDQtdGB0LXQutCw0LXRgiDQu9C40YbQtdCy0YPRjiDQu9C40L3QuNGOINC40LvQuCDQsdC+0LrQvtCy0YPRjiDQu9C40L3QuNGOLCDRgtC+INC+0L0g0YHRh9C40YLQsNC10YLRgdGPINCy0YvRiNC10LTRiNC40Lwg0LjQtyDQuNCz0YDRiy7QldGB0LvQuCDQvNGP0Ycg0L/QtdGA0LXRgdC10Log0LHQvtC60L7QstGD0Y4g0LvQuNC90LjRjiwg0YLQviDQvtC9INGB0YfQuNGC0LDQtdGC0YHRjyDQstGL0YjQtdC00YjQuNC8INC40Lcg0LjQs9GA0Ysu0JXRgdC70Lgg0LzRj9GHINC/0LXRgNC10YHQtdC6INCx0L7QutC+0LLRg9GOINC70LjQvdC40Y4g0L/QvtGB0LvQtSDRg9C00LDRgNCwINC40LPRgNC+0LrQvtC8INC+0LTQvdC+0Lkg0LrQvtC80LDQvdC00YssINGC0L4g0L/RgNC+0LjQt9Cy0L7QtNC40YLRgdGPINCy0LHRgNCw0YHRi9Cy0LDQvdC40LUg0LzRj9GH0LAg0LjQs9GA0L7QutC+0Lwg0LrQvtC80LDQvdC00Ysg0YHQvtC/0LXRgNC90LjQutCwINGBINC80LXRgdGC0LAg0L/QtdGA0LXRgdC10YfQtdC90LjRjyDQsdC+0LrQvtCy0L7QuSDQu9C40L3QuNC4LtCS0LHRgNCw0YHRi9Cy0LDRjtGJ0LjQuSDRgdGC0L7QuNGCINC70LjRhtC+0Lwg0Log0L/QvtC70Y4sINC90L7Qs9Cw0LzQuCDQvdCwINCx0L7QutC+0LLQvtC5INC70LjQvdC40Lgg0LjQu9C4INC30LAg0LXQtSDQv9GA0LXQtNC10LvQsNC80Lgg0Lgg0LLQsdGA0LDRgdGL0LLQsNC10YIg0LzRj9GHINC+0LHQtdC40LzQuCDRgNGD0LrQsNC80Lgg0LjQty0g0LfQsCDQs9C+0LvQvtCy0Ysu0JXRgdC70Lgg0L7RgiDRg9C00LDRgNCwINGB0L7Qv9C10YDQvdC40LrQsCDQvNGP0Ycg0L/QtdGA0LXRgdC10LrQsNC10YIg0LvQuNGG0LXQstGD0Y4g0LvQuNC90LjRjiwg0YLQviDRgdGD0LTRjNGPINC90LDQt9C90LDRh9Cw0LXRgiDRg9C00LDRgCDQvtGCINCy0L7RgNC+0YIsINC/0YDQuCDQutC+0YLQvtGA0L7QvCDRg9C00LDRgCDQv9C+INC80Y/Rh9GDINC/0YDQvtC40LfQstC+0LTQuNGC0YHRjyDQuNC3INCy0YDQsNGC0LDRgNGB0LrQvtC5INC/0LvQvtGJ0LDQtNC60Lgu0JXRgdC70Lgg0LzRj9GHINC/0L7RgdC70LUg0YPQtNCw0YDQsCDQuNCz0YDQvtC60L7QvCDQv9C10YDQtdGB0LXQutCw0LXRgiDQu9C40YbQtdCy0YPRjiDQu9C40L3QuNGOINC10LPQviDQutC+0LzQsNC90LTRiywg0YLQviDRgdGD0LTRjNGPINC90LDQt9C90LDRh9Cw0LXRgiDRg9Cz0LvQvtCy0L7QuSDRg9C00LDRgC7Qk9C+0Lsg0YHRh9C40YLQsNC10YLRgdGPINC30LDQsdC40YLRi9C8LCDQtdGB0LvQuCDQvNGP0Ycg0L/QtdGA0LXRgdC10Log0LvQuNC90LjRjiDQstC+0YDQvtGCINC80LXQttC00YMg0LHQvtC60L7QstGL0LzQuCDRgdGC0L7QudC60LDQvNC4INC4INC/0L7QtCDQv9C10YDQtdC60LvQsNC00LjQvdC+0Lkg0LLQvtGA0L7Rgi7QodC+0LPQu9Cw0YHQvdC+INC/0YDQsNCy0LjQu9Cw0LwsINGB0YPRidC10YHRgtCy0YPQtdGCINC00LLQsCDQstC40LTQsCDRg9C00LDRgNC+0LI6INGI0YLRgNCw0YTQvdC+0Lkg0YPQtNCw0YAg0Lgg0YHQstC+0LHQvtC00L3Ri9C5INGD0LTQsNGALtCo0YLRgNCw0YTQvdC+0Lkg0YPQtNCw0YAg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDQt9CwINC90LXRh9C10YHRgtC90YPRjiDQuNCz0YDRgyDQuNC70Lgg0LfQsCDQuNCz0YDRgyDRgNGD0LrQvtC5LtCh0LLQvtCx0L7QtNC90YvQuSDRg9C00LDRgCDQvdCw0LfQvdCw0YfQsNC10YLRgdGPINC30LAg0L3QtdC/0YDQtdC00L3QsNC80LXRgNC10L3QvdC+0LUg0L3QsNGA0YPRiNC10L3QuNC1INC/0YDQsNCy0LjQuyDQuNC70Lgg0LfQsCDQvdC10L/RgNCw0LLQuNC70YzQvdGL0LUg0LjQs9GA0L7QstGL0LUg0LTQtdC50YHRgtCy0LjRjy7Qn9GA0Lgg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0YHQstC+0LHQvtC00L3QvtCz0L4g0YPQtNCw0YDQsCDQs9C+0Lsg0LHRg9C00LXRgiDQt9Cw0YHRh9C40YLQsNC9INCyINGC0L7QvCDRgdC70YPRh9Cw0LUsINC10YHQu9C4INC80Y/Rh9CwINC60L7RgdC90YPQu9GB0Y8g0LXRidC1INC+0LTQuNC9INC40LPRgNC+0LosINC60YDQvtC80LUg0L/QvtC00LDRjtGJ0LXQs9C+LidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICcg0KTRg9GC0LHQvtC7OiDCq9Cf0L7Qu9C+0LbQtdC90LjQtSDQstC90LUg0LjQs9GA0YvCuy4nLFxyXG4gICAgICAgICAgICBib2R5OiAn0J/RgNCw0LLQuNC70L4gwqvQstC90LUg0LjQs9GA0YvCuyDQt9Cw0L/RgNC10YnQsNC10YIg0LjQs9GA0L7QutCw0Lwg0LDRgtCw0LrRg9GO0YnQtdC5INC60L7QvNCw0L3QtNGLINC90LDRhdC+0LTQuNGC0YzRgdGPINC6INC70LjQvdC40Lgg0LLQvtGA0L7RgiDRgdC+0L/QtdGA0L3QuNC60LAg0LHQu9C40LbQtSwg0YfQtdC8INC30LDRidC40YLQvdC40LrQuCDRgdC+0L/QtdGA0L3QuNC60LAu0JXRgdC70Lgg0LIg0LzQvtC80LXQvdGCINC/0LXRgNC10LTQsNGH0Lgg0LzRj9GH0LAg0LzQtdC20LTRgyDQuNCz0YDQvtC60L7QvCDQuCDQu9C40L3QuNC10Lkg0LLQvtGA0L7RgiDRgdC+0L/QtdGA0L3QuNC60LAg0L3QsNGF0L7QtNC40YLRgdGPINC80LXQvdC10LUg0LTQstGD0YUg0LjQs9GA0L7QutC+0LIg0LrQvtC80LDQvdC00Ysg0YHQvtC/0LXRgNC90LjQutCwLCDQstC60LvRjtGH0LDRjyDQstGA0LDRgtCw0YDRjywg0YLQviDRgtCw0LrQvtC5INC40LPRgNC+0Log0LHRg9C00LXRgiDQsiDQv9C+0LvQvtC20LXQvdC40LggwqvQstC90LUg0LjQs9GA0YvCuy4g0J/RgNC4INC/0L7Qu9C+0LbQtdC90LjQuCDCq9Cy0L3QtSDQuNCz0YDRi8K7INC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0YHQstC+0LHQvtC00L3Ri9C5INGD0LTQsNGALtCf0L7Qu9C+0LbQtdC90LjQtSDCq9Cy0L3QtSDQuNCz0YDRi8K7INC90LUg0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQv9GA0Lgg0LDQvdCw0LvQvtCz0LjRh9C90L7QuSDRgdC40YLRg9Cw0YbQuNC4INC90LAg0YHQstC+0LXQuSDQv9C+0LvQvtCy0LjQvdC1INC/0L7Qu9GPLCDQv9GA0Lgg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0YPQtNCw0YDQvtCyINC+0YIg0LLQvtGA0L7Rgiwg0YPQs9C70L7QstGL0YUg0YPQtNCw0YDQvtCyLCDQv9GA0Lgg0LLQsdGA0LDRgdGL0LLQsNC90LjQuCDQuNC3IC0g0LfQsCDQsdC+0LrQvtCy0L7QuSDQu9C40L3QuNC4INC4INC/0YDQuCDRgdC/0L7RgNC90L7QvCDQstCx0YDQsNGB0YvQstCw0L3QuNC4LidcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfQpNGD0YLQsdC+0Ls6INC60L7QvNCw0L3QtNCwINC4INC30LDQv9Cw0YHQvdGL0LUg0LjQs9GA0L7QutC4LicsXHJcbiAgICAgICAgICAgIGJvZHk6ICfQkiDRgdC+0YHRgtCw0LIg0LrQvtC80LDQvdC00Ysg0LLRhdC+0LTRj9GCIDExINGH0LXQu9C+0LLQtdC6OiAxINCy0YDQsNGC0LDRgNGMINC4IDEwINC/0L7Qu9C10LLRi9GFINC40LPRgNC+0LrQvtCyLCDQutC+0YLQvtGA0YvQtSDQsiDRgdCy0L7RjiDQvtGH0LXRgNC10LTRjCDQv9C+0LTRgNCw0LfQtNC10LvRj9GO0YLRgdGPINC90LAg0LfQsNGJ0LjRgtC90LjQutC+0LIsINC/0L7Qu9GD0LfQsNGJ0LjRgtC90LjQutC+0LIg0Lgg0L3QsNC/0LDQtNCw0Y7RidC40YUu0JIg0LjQs9GA0LDRhSDQvdCwINC+0YfQutC4INC4INCyINC60YPQsdC60L7QstGL0YUg0LjQs9GA0LDRhSDQvdCwINC/0YDQvtGC0Y/QttC10L3QuNC4INC+0LTQvdC+0LPQviDQvNCw0YLRh9CwINC80L7QttC10YIg0LHRi9GC0Ywg0L/RgNC+0LjQt9Cy0LXQtNC10L3QsCDQt9Cw0LzQtdC90LAgMiDQuNCz0YDQvtC60L7QsiDQuNC3INC60LDQttC00L7QuSDQutC+0LzQsNC90LTRiy7Qn9GA0L7QtNC+0LvQttC40YLQtdC70YzQvdC+0YHRgtGMINC80LDRgtGH0LAg0LzRg9C20YHQutC40YUg0Lgg0LzQvtC70L7QtNC10LbQvdGL0YUg0LrQvtC80LDQvdC0KNGBIDE2INC00L4gMTgg0LvQtdGCKSDRgdC+0YHRgtCw0LLQu9GP0LXRgiA5MCDQvNC40L0uINCc0LDRgtGHINGB0L7RgdGC0L7QuNGCINC40Lcg0LTQstGD0YUg0YLQsNC50LzQvtCyINC/0L4gNDUg0LzQuNC9LtCf0L7RgdC70LUg0L/QtdGA0LXRgNGL0LLQsCwg0LzQuNC90LjQvNCw0LvRjNC90LDRjyDQv9GA0L7QtNC+0LvQttC40YLQtdC70YzQvdC+0YHRgtGMINC60L7RgtC+0YDQvtCz0L4gNSDQvNC40L0sINC60L7QvNCw0L3QtNGLINC80LXQvdGP0Y7RgtGB0Y8g0LLQvtGA0L7RgtCw0LzQuC7Qn9C+0LvQtdCy0YvQtSDQuNCz0YDQvtC60Lgg0LzQvtCz0YPRgiDQutCw0YHQsNGC0YzRgdGPINC80Y/Rh9CwINC70Y7QsdC+0Lkg0YfQsNGB0YLRjNGOINGC0LXQu9CwLCDQutGA0L7QvNC1INGA0YPQui7Ql9CwINC40LPRgNGDINGA0YPQutC+0Lkg0LrQvtC80LDQvdC00LUg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDRiNGC0YDQsNGE0L3QvtC5INGD0LTQsNGAINC40LvQuCAxMS3QvNC10YLRgNC+0LLRi9C5INGD0LTQsNGALCDQutC+0YLQvtGA0YvQuSDQstGL0L/QvtC70L3Rj9C10YIg0LjQs9GA0L7QuiDQutC+0LzQsNC90LTRiyDRgdC+0L/QtdGA0L3QuNC60LAu0JXRgdC70Lgg0LzRj9GHINC/0LXRgNC10YHQtdC60LDQtdGCINC70LjRhtC10LLRg9GOINC70LjQvdC40Y4g0LjQu9C4INCx0L7QutC+0LLRg9GOINC70LjQvdC40Y4sINGC0L4g0L7QvSDRgdGH0LjRgtCw0LXRgtGB0Y8g0LLRi9GI0LXQtNGI0LjQvCDQuNC3INC40LPRgNGLLtCV0YHQu9C4INC80Y/RhyDQv9C10YDQtdGB0LXQuiDQsdC+0LrQvtCy0YPRjiDQu9C40L3QuNGOLCDRgtC+INC+0L0g0YHRh9C40YLQsNC10YLRgdGPINCy0YvRiNC10LTRiNC40Lwg0LjQtyDQuNCz0YDRiy7QldGB0LvQuCDQvNGP0Ycg0L/QtdGA0LXRgdC10Log0LHQvtC60L7QstGD0Y4g0LvQuNC90LjRjiDQv9C+0YHQu9C1INGD0LTQsNGA0LAg0LjQs9GA0L7QutC+0Lwg0L7QtNC90L7QuSDQutC+0LzQsNC90LTRiywg0YLQviDQv9GA0L7QuNC30LLQvtC00LjRgtGB0Y8g0LLQsdGA0LDRgdGL0LLQsNC90LjQtSDQvNGP0YfQsCDQuNCz0YDQvtC60L7QvCDQutC+0LzQsNC90LTRiyDRgdC+0L/QtdGA0L3QuNC60LAg0YEg0LzQtdGB0YLQsCDQv9C10YDQtdGB0LXRh9C10L3QuNGPINCx0L7QutC+0LLQvtC5INC70LjQvdC40Lgu0JLQsdGA0LDRgdGL0LLQsNGO0YnQuNC5INGB0YLQvtC40YIg0LvQuNGG0L7QvCDQuiDQv9C+0LvRjiwg0L3QvtCz0LDQvNC4INC90LAg0LHQvtC60L7QstC+0Lkg0LvQuNC90LjQuCDQuNC70Lgg0LfQsCDQtdC1INC/0YDQtdC00LXQu9Cw0LzQuCDQuCDQstCx0YDQsNGB0YvQstCw0LXRgiDQvNGP0Ycg0L7QsdC10LjQvNC4INGA0YPQutCw0LzQuCDQuNC3LSDQt9CwINCz0L7Qu9C+0LLRiy7QldGB0LvQuCDQvtGCINGD0LTQsNGA0LAg0YHQvtC/0LXRgNC90LjQutCwINC80Y/RhyDQv9C10YDQtdGB0LXQutCw0LXRgiDQu9C40YbQtdCy0YPRjiDQu9C40L3QuNGOLCDRgtC+INGB0YPQtNGM0Y8g0L3QsNC30L3QsNGH0LDQtdGCINGD0LTQsNGAINC+0YIg0LLQvtGA0L7Rgiwg0L/RgNC4INC60L7RgtC+0YDQvtC8INGD0LTQsNGAINC/0L4g0LzRj9GH0YMg0L/RgNC+0LjQt9Cy0L7QtNC40YLRgdGPINC40Lcg0LLRgNCw0YLQsNGA0YHQutC+0Lkg0L/Qu9C+0YnQsNC00LrQuC7QldGB0LvQuCDQvNGP0Ycg0L/QvtGB0LvQtSDRg9C00LDRgNCwINC40LPRgNC+0LrQvtC8INC/0LXRgNC10YHQtdC60LDQtdGCINC70LjRhtC10LLRg9GOINC70LjQvdC40Y4g0LXQs9C+INC60L7QvNCw0L3QtNGLLCDRgtC+INGB0YPQtNGM0Y8g0L3QsNC30L3QsNGH0LDQtdGCINGD0LPQu9C+0LLQvtC5INGD0LTQsNGALtCT0L7QuyDRgdGH0LjRgtCw0LXRgtGB0Y8g0LfQsNCx0LjRgtGL0LwsINC10YHQu9C4INC80Y/RhyDQv9C10YDQtdGB0LXQuiDQu9C40L3QuNGOINCy0L7RgNC+0YIg0LzQtdC20LTRgyDQsdC+0LrQvtCy0YvQvNC4INGB0YLQvtC50LrQsNC80Lgg0Lgg0L/QvtC0INC/0LXRgNC10LrQu9Cw0LTQuNC90L7QuSDQstC+0YDQvtGCLtCh0L7Qs9C70LDRgdC90L4g0L/RgNCw0LLQuNC70LDQvCwg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LTQstCwINCy0LjQtNCwINGD0LTQsNGA0L7Qsjog0YjRgtGA0LDRhNC90L7QuSDRg9C00LDRgCDQuCDRgdCy0L7QsdC+0LTQvdGL0Lkg0YPQtNCw0YAu0KjRgtGA0LDRhNC90L7QuSDRg9C00LDRgCDQvdCw0LfQvdCw0YfQsNC10YLRgdGPINC30LAg0L3QtdGH0LXRgdGC0L3Rg9GOINC40LPRgNGDINC40LvQuCDQt9CwINC40LPRgNGDINGA0YPQutC+0Lku0KHQstC+0LHQvtC00L3Ri9C5INGD0LTQsNGAINC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0LfQsCDQvdC10L/RgNC10LTQvdCw0LzQtdGA0LXQvdC90L7QtSDQvdCw0YDRg9GI0LXQvdC40LUg0L/RgNCw0LLQuNC7INC40LvQuCDQt9CwINC90LXQv9GA0LDQstC40LvRjNC90YvQtSDQuNCz0YDQvtCy0YvQtSDQtNC10LnRgdGC0LLQuNGPLtCf0YDQuCDQstGL0L/QvtC70L3QtdC90LjQuCDRgdCy0L7QsdC+0LTQvdC+0LPQviDRg9C00LDRgNCwINCz0L7QuyDQsdGD0LTQtdGCINC30LDRgdGH0LjRgtCw0L0g0LIg0YLQvtC8INGB0LvRg9GH0LDQtSwg0LXRgdC70Lgg0LzRj9GH0LAg0LrQvtGB0L3Rg9C70YHRjyDQtdGJ0LUg0L7QtNC40L0g0LjQs9GA0L7Quiwg0LrRgNC+0LzQtSDQv9C+0LTQsNGO0YnQtdCz0L4uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJyDQpNGD0YLQsdC+0Ls6IMKr0J/QvtC70L7QttC10L3QuNC1INCy0L3QtSDQuNCz0YDRi8K7LicsXHJcbiAgICAgICAgICAgIGJvZHk6ICfQn9GA0LDQstC40LvQviDCq9Cy0L3QtSDQuNCz0YDRi8K7INC30LDQv9GA0LXRidCw0LXRgiDQuNCz0YDQvtC60LDQvCDQsNGC0LDQutGD0Y7RidC10Lkg0LrQvtC80LDQvdC00Ysg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0Log0LvQuNC90LjQuCDQstC+0YDQvtGCINGB0L7Qv9C10YDQvdC40LrQsCDQsdC70LjQttC1LCDRh9C10Lwg0LfQsNGJ0LjRgtC90LjQutC4INGB0L7Qv9C10YDQvdC40LrQsC7QldGB0LvQuCDQsiDQvNC+0LzQtdC90YIg0L/QtdGA0LXQtNCw0YfQuCDQvNGP0YfQsCDQvNC10LbQtNGDINC40LPRgNC+0LrQvtC8INC4INC70LjQvdC40LXQuSDQstC+0YDQvtGCINGB0L7Qv9C10YDQvdC40LrQsCDQvdCw0YXQvtC00LjRgtGB0Y8g0LzQtdC90LXQtSDQtNCy0YPRhSDQuNCz0YDQvtC60L7QsiDQutC+0LzQsNC90LTRiyDRgdC+0L/QtdGA0L3QuNC60LAsINCy0LrQu9GO0YfQsNGPINCy0YDQsNGC0LDRgNGPLCDRgtC+INGC0LDQutC+0Lkg0LjQs9GA0L7QuiDQsdGD0LTQtdGCINCyINC/0L7Qu9C+0LbQtdC90LjQuCDCq9Cy0L3QtSDQuNCz0YDRi8K7LiDQn9GA0Lgg0L/QvtC70L7QttC10L3QuNC4IMKr0LLQvdC1INC40LPRgNGLwrsg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDRgdCy0L7QsdC+0LTQvdGL0Lkg0YPQtNCw0YAu0J/QvtC70L7QttC10L3QuNC1IMKr0LLQvdC1INC40LPRgNGLwrsg0L3QtSDRhNC40LrRgdC40YDRg9C10YLRgdGPINC/0YDQuCDQsNC90LDQu9C+0LPQuNGH0L3QvtC5INGB0LjRgtGD0LDRhtC40Lgg0L3QsCDRgdCy0L7QtdC5INC/0L7Qu9C+0LLQuNC90LUg0L/QvtC70Y8sINC/0YDQuCDQstGL0L/QvtC70L3QtdC90LjQuCDRg9C00LDRgNC+0LIg0L7RgiDQstC+0YDQvtGCLCDRg9Cz0LvQvtCy0YvRhSDRg9C00LDRgNC+0LIsINC/0YDQuCDQstCx0YDQsNGB0YvQstCw0L3QuNC4INC40LcgLSDQt9CwINCx0L7QutC+0LLQvtC5INC70LjQvdC40Lgg0Lgg0L/RgNC4INGB0L/QvtGA0L3QvtC8INCy0LHRgNCw0YHRi9Cy0LDQvdC40LguJ1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbl1cclxuXHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmV0bnMgXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL1RpdGxlL1RpdGxlJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKHtcclxuICAgIGJ1dHRvbnNBY3Rpdml0eSxcclxuICAgIG9uX1RNX2NsaWNrLFxyXG4gICAgb25fR01fY2xpY2ssXHJcbiAgICBnYW1lUnVsZXNTdGF0ZSB9KSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICBwYWdlPXsnaG9tZSd9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J21hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPXsnLnRpdGxlJ31cclxuICAgICAgICAgICAgICAgIGhyZWY9Jy9tYXRjaGVzJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL21hdGNoZXMnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JblBhZ2U9eydtYXRjaGVzJ31cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9eycuYnV0dG9ucy5Ub2RheU1hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YnV0dG9uc0FjdGl2aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrPXtvbl9UTV9jbGlja31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7Z2FtZVJ1bGVzU3RhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXsnbWF0Y2hlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17Jy5idXR0b25zLkdhbWVSdWxlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17IWJ1dHRvbnNBY3Rpdml0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e29uX0dNX2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBHYW1lUnVsZXMgfSBmcm9tIFwiLi9HYW1lUnVsZXMvR2FtZVJ1bGVzXCI7XHJcbmltcG9ydCB7IFRvZGF5TWF0Y2hlcyB9IGZyb20gXCIuL1RvZGF5TWF0Y2hlcy9Ub2RheU1hdGNoZXNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWF0Y2hlcy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXRjaGVzKHsgZ2FtZVJ1bGVzU3RhdGUgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzXHJcbiAgICAgICAgW3Nob3dUb2RheU1hdGNoZXMsIHNldFNob3dUb2RheU1hdGNoZXNdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgW3Nob3dHYW1lUnVsZXMsIHNldFNob3dHYW1lUnVsZXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Z2FtZVJ1bGVzU3RhdGUgPyBzdHlsZXMuY29udGFpbmVyIDogc3R5bGVzLmluX3NlcGVyZXRlX3BhZ2V9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc0FjdGl2aXR5PXtzaG93VG9kYXlNYXRjaGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uX1RNX2NsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dUb2RheU1hdGNoZXModHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0dhbWVSdWxlcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uX0dNX2NsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dHYW1lUnVsZXModHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvZGF5TWF0Y2hlcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVSdWxlc1N0YXRlPXtnYW1lUnVsZXNTdGF0ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7c2hvd1RvZGF5TWF0Y2hlcyAmJiA8VG9kYXlNYXRjaGVzIC8+fVxyXG4gICAgICAgICAgICAgICAge3Nob3dHYW1lUnVsZXMgJiYgPEdhbWVSdWxlcyAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc3RzIH0gZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93UmlnaHQucG5nJ1xyXG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd0xlZnQucG5nJ1xyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcblxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMzVweCcsXHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6ICcxMCUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNFZGdlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2VzLCBhY3RpdmVQYWdlLCBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVQYWdlID0gYWN0aXZlUGFnZSA9PT0gZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmVQYWdlID8gJ3RydWUnIDogJ2ZhbHNlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZH0gJHtpc0FjdGl2ZVBhZ2UgJiYgc3R5bGVzLmFjdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RETWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1wiXHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSAnLi4vY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZSdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfTUFUQ0hFUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVERNYXRjaGVzQm9hcmQoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbIGZpcnN0UGFnZSwgc2V0Rmlyc3RQYWdlIF0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICAgICAgWyBzZWNvbmRQYWdlLCBzZXRTZWNvbmRQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICBbZmlyc3RQYWdlSXRlbXMsIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zXSA9IHVzZVN0YXRlKGZpcnN0UGFnZSksXHJcbiAgICAgICAgW3NlY29uZFBhZ2VJdGVtcywgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zXSA9IHVzZVN0YXRlKHNlY29uZFBhZ2UpLFxyXG4gICAgICAgIFsgbWF0Y2hlcywgc2V0TWF0Y2hlcyBdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMoIG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA8IDQpICk7XHJcbiAgICAgICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKCBtYXRjaGVzLmZpbHRlcigoZWwsIGkpID0+IGkgPj0gNCkgKTtcclxuICAgIH0sIFttYXRjaGVzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICByZXF1ZXN0KCBHRVRfTUFUQ0hFUywge30sIHsgYXV0aDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAudGhlbiggbWF0Y2hlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgc2V0TWF0Y2hlcyggbWF0Y2hlcy5kYXRhLmRhdGEubWFwKCBtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoVGltZSA9IChuZXcgRGF0ZShgJHttYXRjaC5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKX0gJHttYXRjaC50aW1lfWApKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBtYXRjaC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBtYXRjaC5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IG1hdGNoLnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlOiBgLnJvd09uZS5nYW1lU3RhdGUuJHsgbm93IDwgbWF0Y2hUaW1lID8gJ3N0YXJ0ZWQnIDogJ2RvbnRTdGFydGVkJ31gLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBgYCxcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBtYXRjaC50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBzY29yZTogbWF0Y2guc2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIGVyciApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBmaXJzdFBhZ2VJdGVtcyApO1xyXG4gICAgfSwgW2ZpcnN0UGFnZUl0ZW1zXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlKHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKGZpcnN0UGFnZUl0ZW1zKSxcclxuICAgICAgICAgICAgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpXHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSlcclxuXHJcbiAgICAgICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgICAgICBjb25zdFxyXG4gICAgICAgICAgICBpdGVtcyA9IEFycmF5LmZyb20oc2Vjb25kUGFnZUl0ZW1zKSxcclxuICAgICAgICAgICAgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpXHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSlcclxuXHJcbiAgICAgICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGVuYWJsZVN3aXBlPXtmYWxzZX1cclxuICAgICAgICAvLyB2ZXJ0aWNhbE1vZGVcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJtYXRjaGVzdG9kYXlNYXRjaGVzRmlyc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0UGFnZUl0ZW1zLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVJZD17ZWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiAnMzRweCcgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNTZWNvbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlPXtlbC5nYW1lU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlPXtlbC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+IHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogJzM0cHgnIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RNTWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1wiXHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSAnLi4vY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZSdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuLy4uL1RETWF0Y2hlc0JvYXJkL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vLi4vVERNYXRjaGVzQm9hcmQvUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVE1NYXRjaGVzQm9hcmQoKSB7ICBcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIFsgZmlyc3RQYWdlLCBzZXRGaXJzdFBhZ2UgXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICBbIHNlY29uZFBhZ2UsIHNldFNlY29uZFBhZ2VdID0gdXNlU3RhdGUoW10pLFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIFtmaXJzdFBhZ2VJdGVtcywgdXBEYXRlRmlyc3RQYWdlSXRlbXNdID0gdXNlU3RhdGUoZmlyc3RQYWdlKSxcclxuICAgICAgICBbc2Vjb25kUGFnZUl0ZW1zLCB1cERhdGVTZWNvbmRQYWdlSXRlbXNdID0gdXNlU3RhdGUoc2Vjb25kUGFnZSksXHJcbiAgICAgICAgWyBtYXRjaGVzLCBzZXRNYXRjaGVzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyggbWF0Y2hlcy5maWx0ZXIoKGVsLCBpKSA9PiBpIDwgNCkgKTtcclxuICAgICAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMoIG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA+PSA0KSApO1xyXG4gICAgfSwgW21hdGNoZXNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHsgICAgICAgIFxyXG4gICAgICAgIHJlcXVlc3QoIEdFVF9NQVRDSEVTX09GX05FWFRfREFZLCB7fSwgeyBhdXRoOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCBtYXRjaGVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1hdGNoZXMoIG1hdGNoZXMuZGF0YS5kYXRhLm1hcCggbWF0Y2ggPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogbWF0Y2guaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogbWF0Y2guZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiBtYXRjaC50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dPbmUuZ2FtZVN0YXRlLnN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBgYCxcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBtYXRjaC50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBzY29yZTogbWF0Y2guc2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJ1xyXG4gICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIGVyciApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZShyZXN1bHQpIHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0XHJcbiAgICAgICAgICAgIGl0ZW1zID0gQXJyYXkuZnJvbShmaXJzdFBhZ2VJdGVtcyksXHJcbiAgICAgICAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKVxyXG4gICAgICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pXHJcblxyXG4gICAgICAgIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zKGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlKHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKHNlY29uZFBhZ2VJdGVtcyksXHJcbiAgICAgICAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKVxyXG4gICAgICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pXHJcblxyXG4gICAgICAgIHVwRGF0ZVNlY29uZFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgaXRlbXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgIGl0ZW1zVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgcmVuZGVyUGFnaW5hdGlvbj17UGFnaW5hdGlvbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBlbmFibGVTd2lwZT17ZmFsc2V9XHJcbiAgICAgICAgLy8gdmVydGljYWxNb2RlXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc0ZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlPXtlbC5nYW1lU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlPXtlbC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU9e2VsLnRpdGxlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT4gcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogJzM0cHgnIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJtYXRjaGVzdG9kYXlNYXRjaGVzU2Vjb25kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNvbmRQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU9e2VsLnRpdGxlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgPFJvd1RpdGxlIHJvd1N0eWxlcz17eyBtaW5IZWlnaHQ6ICczNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSAnLi9Sb3dUaXRsZS9Sb3dUaXRsZSdcclxuaW1wb3J0IHsgUm93RGVzY3JpcHRpb24gfSBmcm9tICcuL1Jvd0Rlc2NyaXB0aW9uL1Jvd0Rlc2NyaXB0aW9uJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Jvdy5tb2R1bGUuc2NzcydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUm93KHtcclxuICAgIGRhdGUsXHJcbiAgICBnYW1lU3RhdGUsXHJcbiAgICB0ZWFtT25lLFxyXG4gICAgdGVhbU9uZUljb24sXHJcbiAgICBzY29yZSxcclxuICAgIHRlYW1Ud28sXHJcbiAgICB0ZWFtVHdvSWNvbixcclxuICAgIGJ1eUJ1dHRvbk5hbWUsXHJcbiAgICB0aXRsZU5hbWUsXHJcbiAgICBjbGlja0J1eVxyXG59KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHRyYXNubGF0aW9uTG9jYXRpb24gPSAnbWF0Y2hlcy5UTS50b2RheSdcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8Um93VGl0bGVcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RpdGxlTmFtZX1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5NYWluUGFnZT17dHJhc25sYXRpb25Mb2NhdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvd0Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXRlPXtnYW1lU3RhdGV9XHJcbiAgICAgICAgICAgICAgICB0ZWFtT25lPXt0ZWFtT25lfVxyXG4gICAgICAgICAgICAgICAgdGVhbU9uZUljb249e3RlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgc2NvcmU9e3Njb3JlfVxyXG4gICAgICAgICAgICAgICAgdGVhbVR3bz17dGVhbVR3b31cclxuICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXt0ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2J1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9e3RyYXNubGF0aW9uTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICBjbGlja0J1eT17Y2xpY2tCdXl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gdHJhbnNsYXRpb25zXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Sb3dEZXNjcmlwdGlvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBcclxuXHJcblJvd0Rlc2NyaXB0aW9uKHtcclxuICAgIGNsaWNrQnV5LFxyXG4gICAgZGF0ZSxcclxuICAgIGdhbWVTdGF0ZSxcclxuICAgIHRlYW1PbmUsXHJcbiAgICB0ZWFtT25lSWNvbixcclxuICAgIHNjb3JlLFxyXG4gICAgdGVhbVR3byxcclxuICAgIHRlYW1Ud29JY29uLFxyXG4gICAgYnV5QnV0dG9uTmFtZSxcclxuICAgIGxvY2F0aW9uSW5NYWluUGFnZVxyXG59KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2hvbWUnKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSBgJHtsb2NhdGlvbkluTWFpblBhZ2V9YCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4geyAgY29uc29sZS5sb2coYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApIDtyZXR1cm4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCkgfSxcclxuICAgICAgICBnYW1lU3RhcnRlZCA9IGdhbWVTdGF0ZS5zbGljZShnYW1lU3RhdGUubGFzdEluZGV4T2YoXCIuXCIpICsgMSkgPT09ICdzdGFydGVkJ1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuZGF0ZV9nYW1lTlN0YXJ0ZWRfY29udGVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7Z2FtZVN0YXJ0ZWQgPyBzdHlsZXMuZGF0ZV9nYW1lU3RhcnRlZF9jb250ZW50IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e3RyYW5zbGF0ZShnYW1lU3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtT25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVhbU9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbU9uZUljb259IGFsdD17dGVhbU9uZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjb3JlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1Ud299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbVR3b0ljb259IGFsdD17dGVhbVR3b30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVhbVR3b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1eUJ1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRlbnR9IG9uQ2xpY2s9e2NsaWNrQnV5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKGJ1eUJ1dHRvbk5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gdHJhbnNsYXRpb25zXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm93VGl0bGUubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUm93VGl0bGUoeyBjb250ZW50LCBsb2NhdGlvbkluTWFpblBhZ2UgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdob21lJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25Jbk1haW5QYWdlfWAsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID8gdHJhbnNsYXRlKGNvbnRlbnQpIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RheUNoYW5nZUJ1dHRvbi5tb2R1bGUuc2NzcydcclxuLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERheUNoYW5nZUJ1dHRvbih7XHJcbiAgICBuYW1lLFxyXG4gICAgbG9jYXRpb25Jbk1haW5QYWdlLFxyXG4gICAgZGF0ZSxcclxuICAgIGFjdGl2ZSA9IG51bGwsXHJcbiAgICBjbGljayB9KSB7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignaG9tZScpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5NYWluUGFnZX1gLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZSA/IHN0eWxlcy5hY3RpdmVfbmFtZSA6IHN0eWxlcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FjdGl2ZSA/IHN0eWxlcy5hY3RpdmVfZGF0ZSA6IHN0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vVGl0bGUvVGl0bGVcIjtcclxuaW1wb3J0IHsgRGF5Q2hhbmdlQnV0dG9uIH0gZnJvbSAnLi9EYXlDaGFuZ2VCdXR0b24vRGF5Q2hhbmdlQnV0dG9uJztcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JlYWN0LWNhbGVuZGFyJztcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UTUhlYWRlci5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IGNhbGVuZGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9DYWxlbmRhci5wbmcnXHJcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd1JpZ2h0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dMZWZ0LnBuZydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVE1IZWFkZXIoe1xyXG4gICAgY2xpY2tURCxcclxuICAgIGNsaWNrVE0sXHJcbiAgICBUREJvYXJkU3RhdGUsXHJcbiAgICBUTUJvYXJkU3RhdGUgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gZnVuY3Rpb25zXHJcbiAgICAgICAgLy8gZ2V0X2RhdGUgdmFsdWUgY2hhbmdlcyB5X2QgPT4geWVzdGVyZGF5LCB0X2QgPT4gdG9kYXksIHRfdyA9PnRvbW9ycm93XHJcbiAgICAgICAgZ2V0X2RhdGUgPSAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgbGV0XHJcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGRheSA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDEsXHJcbiAgICAgICAgICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0X2QnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRheSA9IGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0X20nOlxyXG4gICAgICAgICAgICAgICAgICAgIGRheSA9IGRhdGUuZ2V0RGF0ZSgpICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBkYXkgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGggPCAxMCA/IFwiMFwiICsgbW9udGggOiBtb250aH0uJHt5ZWFyfWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93Q2FsZW5kYXIsIHNldFNob3dDYWxlbmRhcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9eydob21lJ31cclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J21hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17Jy5UTS5oZWFkZXJUaXRsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5X2NoYW5nZV9idXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF5Q2hhbmdlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9Jy5UTS5oZWFkZXJCdXR0b25zLnRvZGF5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9eydtYXRjaGVzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17Z2V0X2RhdGUoJ3RfZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e1REQm9hcmRTdGF0ZSA/ICdzaG93JyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrPXtjbGlja1REfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERheUNoYW5nZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPScuVE0uaGVhZGVyQnV0dG9ucy50b21vcnJvdydcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXsnbWF0Y2hlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2dldF9kYXRlKCd0X20nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtUTUJvYXJkU3RhdGUgPyAnc2hvdycgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17Y2xpY2tUTX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2FsZW5kYXIuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjYWxlbmRhci1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NhbGVuZGFyKCFzaG93Q2FsZW5kYXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJfYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dDYWxlbmRhciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dOZWlnaGJvcmluZ01vbnRoPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TGFiZWw9ezxpbWcgc3JjPXthcnJvd1JpZ2h0LnNyY30gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2TGFiZWw9ezxpbWcgc3JjPXthcnJvd0xlZnQuc3JjfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBURE1hdGNoZXNCb2FyZCB9IGZyb20gJy4vVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL1RETWF0Y2hlc0JvYXJkJ1xyXG5pbXBvcnQgeyBUTU1hdGNoZXNCb2FyZCB9IGZyb20gJy4vVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkJ1xyXG5pbXBvcnQgeyBUTUhlYWRlciB9IGZyb20gJy4vVE1IZWFkZXIvVE1IZWFkZXInXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG9kYXlNYXRjaGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvZGF5TWF0Y2hlcygpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93VG9kYXlHYW1lcywgc2V0U2hvd1RvZGF5R2FtZXNdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgW3Nob3dUb21vcnJvd0dhbWVzLCBzZXRTaG93VG9tb3Jyb3dHYW1lc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRNSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAvLyBURCA9PiB0b2RheSBnYW1lcyBib2FyZCBzaG9wdyBjb25maWdzXHJcbiAgICAgICAgICAgICAgICBjbGlja1REPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvZGF5R2FtZXModHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93VG9tb3Jyb3dHYW1lcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBUREJvYXJkU3RhdGU9e3Nob3dUb2RheUdhbWVzfVxyXG4gICAgICAgICAgICAgICAgLy8gVE0gPT4gdG9tbW9yb3cgZ2FtZXMgYm9hcmQgc2hvcHcgY29uZmlnc1xyXG4gICAgICAgICAgICAgICAgY2xpY2tUTT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dUb2RheUdhbWVzKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dUb21vcnJvd0dhbWVzKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgVE1Cb2FyZFN0YXRlPXtzaG93VG9tb3Jyb3dHYW1lc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3Nob3dUb2RheUdhbWVzICYmIDxURE1hdGNoZXNCb2FyZCAvPn1cclxuICAgICAgICAgICAge3Nob3dUb21vcnJvd0dhbWVzICYmIDxUTU1hdGNoZXNCb2FyZCAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OZXdzLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzIFxyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9UaXRsZS9UaXRsZSdcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuL1NsaWRlL1NsaWRlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5ld3MoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRpdGxlIFxyXG4gICAgICAgICAgICAgICAgcGFnZT0naG9tZSdcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXsnbmV3cyd9XHJcbiAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9eycudGl0bGUnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2xpZGUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBzbGlkZV9zaG93X2RhdGEgfSBmcm9tICcuL3NsaWRlX3Nob3dfZGF0YSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vU2xpZGVJdGVtcy9JdGVtL0l0ZW0nXHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi9TbGlkZUl0ZW1zL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vU2xpZGVJdGVtcy9QYWdpbmF0aW9uL1BhZ2luYXRpb24nXHJcbmltcG9ydCB7IEl0ZW1Nb2RhbCB9IGZyb20gJy4vU2xpZGVJdGVtcy9JdGVtTW9kYWwvSXRlbU1vZGFsJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TbGlkZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfTkVXUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTbGlkZSgpIHtcclxuXHJcbiAgICBjb25zdCBbIHNsaWRlX2RhdGEsIHNldFNsaWRlRGF0YSBdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICByZXF1ZXN0KCBHRVRfTkVXUywge30sIHsgYXV0aDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAudGhlbiggbmV3cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZURhdGEoIG5ld3MuZGF0YS5kYXRhICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBlcnIgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBjb25zdHMgYW5kIHN0YXRlcyBcclxuICAgICAgICAvLyBicmVha3BvaW50cyBmb3Igc2xpZGUgXHJcbiAgICAgICAgYnJlYWtwb2ludHMgPSBbXHJcbiAgICAgICAgICAgIHsgd2lkdGg6IDM3NSwgaXRlbXNUb1Nob3c6IDIsIGl0ZW1zVG9TY3JvbGw6IDIgfSxcclxuICAgICAgICAgICAgeyB3aWR0aDogNzQwLCBpdGVtc1RvU2hvdzogMywgaXRlbXNUb1Njcm9sbDogMyB9LFxyXG4gICAgICAgICAgICB7IHdpZHRoOiAxNzAwLCBpdGVtc1RvU2hvdzogNCwgaXRlbXNUb1Njcm9sbDogNCB9XHJcbiAgICAgICAgXVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYWRkaW5nPXtbMzUsIDEyXX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJBcnJvdz17QXJyb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGFnaW5hdGlvbj17UGFnaW5hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbH1cclxuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50cz17YnJlYWtwb2ludHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZV9kYXRhLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ19zcmM9e2VsLmltZ19wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtlbC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZWwudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IGNvbnN0cyB9IGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbi8vIGljb25zXHJcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd1JpZ2h0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dMZWZ0LnBuZydcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcblxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRWRnZX1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSAnL2NvbXBvbmVudHMvY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JdGVtTW9kYWwubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXRlbU1vZGFsKHtcclxuICAgIG9uTW9kYWxDbG9zZSxcclxuICAgIGltZyxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5NY29udGFpbmVyfVxyXG4gICAgICAgICAgICBjb250ZW50U3R5bGVzPXtzdHlsZXMuTWNvbnRlbnR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ19jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9uX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJdGVtTW9kYWwgfSBmcm9tICcuLi9JdGVtTW9kYWwvSXRlbU1vZGFsJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSXRlbS5tb2R1bGUuc2NzcydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXRlbSh7XHJcbiAgICBpbWdfc3JjLFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbiB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBzdHlsZSA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGltZ19zcmMgKyBcIilcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3Nob3dJdGVtTW9kYWwsIHNldFNob3dJdGVtTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BMaW5lc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lT25lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZVR3b30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dJdGVtTW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tTGluZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZU9uZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmVUd299IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0l0ZW1Nb2RhbCAmJlxyXG4gICAgICAgICAgICAgICAgPEl0ZW1Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0l0ZW1Nb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXtpbWdfc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZXMsIGFjdGl2ZVBhZ2UsIG9uQ2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhZ2VzLm1hcChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVQYWdlID0gYWN0aXZlUGFnZSA9PT0gZWxcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2lzQWN0aXZlUGFnZSA/ICd0cnVlJyA6ICdmYWxzZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZH0gJHtpc0FjdGl2ZVBhZ2UgJiYgc3R5bGVzLmFjdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGltZ1xyXG5pbXBvcnQgc2VjQmFjayBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3Mvc2VjQmFjay5wbmcnXHJcbmltcG9ydCB0cmRCYWNrIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy90cmRCYWNrLnBuZydcclxuaW1wb3J0IGZvcnRCYWNrIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9mb3J0QmFjay5wbmcnXHJcbmltcG9ydCBiYWNrSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3NsaWRlQmFjay5wbmcnXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVfc2hvd19kYXRhID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdob21lJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ25ld3MuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBiYWNrSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsKr0KDQtdCw0LvCuyDQtNC+0LvQs9C+INC80YPRh9C40LvRgdGPINGBIMKr0JDRgtCw0LvQsNC90YLQvtC5wrs6IDcwINC80LjQvdGD0YIg0LLQt9C70LDQvNGL0LLQsNC7INGB0L7Qv9C10YDQvdC40LrQsCDQsiDQsdC+0LvRjNGI0LjQvdGB0YLQstC1LlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBzZWNCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JzRiyDQvdC1INC/0L7QstC10YDQuNC70Lgg0LIg0L/QtdC90LDQu9GM0YLQuCDCq9CR0LDRgNGB0YvCuyDigJMg0LAg0LfRgNGPLiDQntC9INCx0YvQuyDQuNC3LdC30LAg0LzQuNC80L7Qu9C10YLQvdC+0LPQviDQutCw0YHQsNC90LjRjyDQsiDRiNGC0YDQsNGE0L3QvtC5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IHRyZEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9CQ0YLQu9C10YLQuNC60L7CuyDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDQuyDQv9C10YDQstGL0Lkg0YLQsNC50Lwg0LTQtdGA0LHQuCDQsdC70LDQs9C+0LTQsNGA0Y8g0YHQvNC10LvQvtC80YMg0L/Qu9Cw0L3RgyDQodC40LzQtdC+0L3QtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogZm9ydEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLQk9C+0Lsg0JfQuNC00LDQvdCwIMKr0JHQsNC50LXRgNGDwrsg4oCTINC90LXQv9C+0LLRgtC+0YDQuNC80LDRjyDQutC70LDRgdGB0LjQutCwINCb0KcuINCa0LDQuiDRjdGC0L4g0LLQvtC+0LHRidC1INC/0L7Qu9GD0YfQuNC70L7RgdGMP1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBiYWNrSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsKr0KDQtdCw0LvCuyDQtNC+0LvQs9C+INC80YPRh9C40LvRgdGPINGBIMKr0JDRgtCw0LvQsNC90YLQvtC5wrs6IDcwINC80LjQvdGD0YIg0LLQt9C70LDQvNGL0LLQsNC7INGB0L7Qv9C10YDQvdC40LrQsCDQsiDQsdC+0LvRjNGI0LjQvdGB0YLQstC1LlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBzZWNCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JzRiyDQvdC1INC/0L7QstC10YDQuNC70Lgg0LIg0L/QtdC90LDQu9GM0YLQuCDCq9CR0LDRgNGB0YvCuyDigJMg0LAg0LfRgNGPLiDQntC9INCx0YvQuyDQuNC3LdC30LAg0LzQuNC80L7Qu9C10YLQvdC+0LPQviDQutCw0YHQsNC90LjRjyDQsiDRiNGC0YDQsNGE0L3QvtC5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IHRyZEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9CQ0YLQu9C10YLQuNC60L7CuyDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDQuyDQv9C10YDQstGL0Lkg0YLQsNC50Lwg0LTQtdGA0LHQuCDQsdC70LDQs9C+0LTQsNGA0Y8g0YHQvNC10LvQvtC80YMg0L/Qu9Cw0L3RgyDQodC40LzQtdC+0L3QtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogZm9ydEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLQk9C+0Lsg0JfQuNC00LDQvdCwIMKr0JHQsNC50LXRgNGDwrsg4oCTINC90LXQv9C+0LLRgtC+0YDQuNC80LDRjyDQutC70LDRgdGB0LjQutCwINCb0KcuINCa0LDQuiDRjdGC0L4g0LLQvtC+0LHRidC1INC/0L7Qu9GD0YfQuNC70L7RgdGMP1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBiYWNrSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsKr0KDQtdCw0LvCuyDQtNC+0LvQs9C+INC80YPRh9C40LvRgdGPINGBIMKr0JDRgtCw0LvQsNC90YLQvtC5wrs6IDcwINC80LjQvdGD0YIg0LLQt9C70LDQvNGL0LLQsNC7INGB0L7Qv9C10YDQvdC40LrQsCDQsiDQsdC+0LvRjNGI0LjQvdGB0YLQstC1LlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBzZWNCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JzRiyDQvdC1INC/0L7QstC10YDQuNC70Lgg0LIg0L/QtdC90LDQu9GM0YLQuCDCq9CR0LDRgNGB0YvCuyDigJMg0LAg0LfRgNGPLiDQntC9INCx0YvQuyDQuNC3LdC30LAg0LzQuNC80L7Qu9C10YLQvdC+0LPQviDQutCw0YHQsNC90LjRjyDQsiDRiNGC0YDQsNGE0L3QvtC5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IHRyZEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9CQ0YLQu9C10YLQuNC60L7CuyDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDQuyDQv9C10YDQstGL0Lkg0YLQsNC50Lwg0LTQtdGA0LHQuCDQsdC70LDQs9C+0LTQsNGA0Y8g0YHQvNC10LvQvtC80YMg0L/Qu9Cw0L3RgyDQodC40LzQtdC+0L3QtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogZm9ydEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLQk9C+0Lsg0JfQuNC00LDQvdCwIMKr0JHQsNC50LXRgNGDwrsg4oCTINC90LXQv9C+0LLRgtC+0YDQuNC80LDRjyDQutC70LDRgdGB0LjQutCwINCb0KcuINCa0LDQuiDRjdGC0L4g0LLQvtC+0LHRidC1INC/0L7Qu9GD0YfQuNC70L7RgdGMP1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBiYWNrSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsKr0KDQtdCw0LvCuyDQtNC+0LvQs9C+INC80YPRh9C40LvRgdGPINGBIMKr0JDRgtCw0LvQsNC90YLQvtC5wrs6IDcwINC80LjQvdGD0YIg0LLQt9C70LDQvNGL0LLQsNC7INGB0L7Qv9C10YDQvdC40LrQsCDQsiDQsdC+0LvRjNGI0LjQvdGB0YLQstC1LlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBzZWNCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JzRiyDQvdC1INC/0L7QstC10YDQuNC70Lgg0LIg0L/QtdC90LDQu9GM0YLQuCDCq9CR0LDRgNGB0YvCuyDigJMg0LAg0LfRgNGPLiDQntC9INCx0YvQuyDQuNC3LdC30LAg0LzQuNC80L7Qu9C10YLQvdC+0LPQviDQutCw0YHQsNC90LjRjyDQsiDRiNGC0YDQsNGE0L3QvtC5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IHRyZEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9CQ0YLQu9C10YLQuNC60L7CuyDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDQuyDQv9C10YDQstGL0Lkg0YLQsNC50Lwg0LTQtdGA0LHQuCDQsdC70LDQs9C+0LTQsNGA0Y8g0YHQvNC10LvQvtC80YMg0L/Qu9Cw0L3RgyDQodC40LzQtdC+0L3QtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogZm9ydEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLQk9C+0Lsg0JfQuNC00LDQvdCwIMKr0JHQsNC50LXRgNGDwrsg4oCTINC90LXQv9C+0LLRgtC+0YDQuNC80LDRjyDQutC70LDRgdGB0LjQutCwINCb0KcuINCa0LDQuiDRjdGC0L4g0LLQvtC+0LHRidC1INC/0L7Qu9GD0YfQuNC70L7RgdGMP1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59IiwiLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QcmVkaWN0aW9uLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9UaXRsZS9UaXRsZVwiO1xyXG5pbXBvcnQgeyBQcmRlaWN0aW9uU2xpZGUgfSBmcm9tIFwiLi9QcmVkaWN0aW9uU2xpZGUvUHJkZWljdGlvblNsaWRlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJlZGljdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgIHBhZ2U9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT0ncHJlZGljdGlvbidcclxuICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT0nLnRpdGxlJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UHJkZWljdGlvblNsaWRlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc3RzIH0gZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHQucG5nJ1xyXG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd0xlZnQucG5nJ1xyXG5pbXBvcnQgYXJyb3dMZWZ0VmVjdG9yIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd0xlZnRWZWN0b3IucG5nJ1xyXG5pbXBvcnQgYXJyb3dSaWdodFZlY3RvciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dSaWdodFZlY3Rvci5wbmcnXHJcbmltcG9ydCBhcnJvd1N0eWxlcyBmcm9tICcuL0Fycm93Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFycm93KHsgdHlwZSwgb25DbGljaywgaXNFZGdlIH0pIHtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgcG9pbnRlciA9IHR5cGUgPT09IGNvbnN0cy5QUkVWID9cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd0xlZnQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd0xlZnR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93UmlnaHQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd1JpZ2h0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctcmlnaHRcIlxyXG4gICAgICAgICAgICAvPixcclxuICAgICAgICBhcnJvd3MgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dSaWdodFZlY3Rvci5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93UmlnaHRWZWN0b3J9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93TGVmdFZlY3Rvci5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93TGVmdFZlY3Rvcn1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcblxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0VkZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyb3dzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyB0cmFuc2xhdGlvbnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0l0ZW0ubW9kdWxlLnNjc3MnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaW1lciB9IGZyb20gJy4vVGltZXIvVGltZXInXHJcbmltcG9ydCB7IFByZWRpY3Rpb25Nb2RhbCB9IGZyb20gJy4vUHJlZGljdGlvbk1vZGFsL1ByZWRpY3Rpb25Nb2RhbCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXRlbSh7XHJcbiAgICB0ZWFtT25lTmFtZSxcclxuICAgIHRlYW1Ud29OYW1lLFxyXG4gICAgdGVhbU9uZUljb24sXHJcbiAgICB0ZWFtVHdvSWNvbixcclxuICAgIHByZWRpY3Rpb25CdXR0b25OYW1lLFxyXG4gICAgYnV5QnV0dG9uTmFtZSxcclxuICAgIGxvY2F0aW9uSW5NYWluUGFnZSxcclxuICAgIGV4cGlyeVRpbWVzdGFtcCxcclxuICAgIHByZWRpY3Rpb24sXHJcbiAgICBvcmRpbmFyLFxyXG4gICAgY2xpY2tCdXlcclxufSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zb2xlLmxvZyggZXhwaXJ5VGltZXN0YW1wICk7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignaG9tZScpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5NYWluUGFnZX1gLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICBbc2hvd1ByZWRpY3Rpb24sIHNldFNob3dQcmVkaWN0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGZ1bmN0aW9uIGdvVG9QcmVkaWN0aW9ucygpIHtcclxuICAgICAgICAvLyBzZXRTaG93UHJlZGljdGlvbighc2hvd1ByZWRpY3Rpb24pO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvcHJlZGljdGlvbmApO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtT25lSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0ZWFtT25lTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVyX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7QmNCz0YDQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRh9C10YDQtdC3PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJ5VGltZXN0YW1wPXtleHBpcnlUaW1lc3RhbXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNsYXNzPXtzdHlsZXMudGltZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtVHdvSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0ZWFtVHdvTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1ByZWRpY3Rpb24gJiYgPFByZWRpY3Rpb25Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU9e3RlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU9e3RlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e3RlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e3RlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbj17cHJlZGljdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXI9e29yZGluYXJ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX2J1dHRvbl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb1RvUHJlZGljdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmFuc2xhdGUocHJlZGljdGlvbkJ1dHRvbk5hbWUpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlfYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlfYnV0dG9uX2NvbnRlbnR9IG9uQ2xpY2s9e2NsaWNrQnV5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZShidXlCdXR0b25OYW1lKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ByZWRpY3Rpb25Nb2RhbC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcmVkaWN0aW9uTW9kYWwoe1xyXG4gICAgdGVhbU9uZU5hbWUsXHJcbiAgICB0ZWFtVHdvTmFtZSxcclxuICAgIHRlYW1PbmVJY29uLFxyXG4gICAgdGVhbVR3b0ljb24sXHJcbiAgICBwcmVkaWN0aW9uLFxyXG4gICAgb3JkaW5hclxyXG59KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbU9uZUljb259IGFsdD17YCR7dGVhbU9uZU5hbWV9LWljb25gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVlMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbVR3b0ljb259IGFsdD17YCR7dGVhbVR3b0ljb259LWljb25gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5vcmRpbmFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkaW5hclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRpbWVyIH0gZnJvbSAncmVhY3QtdGltZXItaG9vayc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGltZXIoeyBleHBpcnlUaW1lc3RhbXAsIHRpbWVDbGFzcyB9KSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgc2Vjb25kcyxcclxuICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgIGhvdXJzLFxyXG4gICAgfSA9IHVzZVRpbWVyKHsgZXhwaXJ5VGltZXN0YW1wLCBvbkV4cGlyZTogKCkgPT4gY29uc29sZS53YXJuKCdvbkV4cGlyZSBjYWxsZWQnKSB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGltZUNsYXNzfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge21pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXN9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7c2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kc31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4vQXJyb3dzL0Fycm93J1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9JdGVtL0l0ZW0nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJkZWljdGlvblNsaWRlLm1vZHVsZS5zY3NzJ1xyXG4vLyBpbWFnZXMsIGljb25zXHJcbmltcG9ydCBwcmVkaWN0aW9uQmFja2dyb3VuZCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHJlZEJhY2sucG5nJ1xyXG5pbXBvcnQgeyBzbGlkZV9kYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGUnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfUFJFRElDVElPTlMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcbmltcG9ydCB7IHNldE1hdGNoSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZGVpY3Rpb25TbGlkZSgpIHtcclxuXHJcbiAgICBjb25zdCBbIHNsaWRlX2RhdGEsIHNldFNsaWRlRGF0YSBdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgWyBjdXJyZW50TWF0Y2hJZCwgc2V0Q3VycmVudE1hdGNoSWQgXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCk9PiB7XHJcbiAgICAgICAgcmVxdWVzdCggR0VUX1BSRURJQ1RJT05TLCB7fSwgeyBhdXRoOiB0cnVlIH0gKVxyXG4gICAgICAgICAgICAudGhlbiggcnNwID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRvYXN0KGBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZGApXHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZURhdGEoIHJzcC5kYXRhLmRhdGEubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogaXRlbVtgdGVhbTFfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogaXRlbVtgdGVhbTJfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogaXRlbS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBpdGVtLnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IGl0ZW0uZmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkaW5hclRleHQ6IGAke2l0ZW0udHlwZX0gLyAke2l0ZW0ucHJpY2V90YDRg9CxLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlICsgJyDRgNGD0LEuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggcnNwLmRhdGE/LmRhdGEubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50TWF0Y2hJZChyc3AuZGF0YS5kYXRhWzBdLmlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7fSlcclxuICAgIH0sIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBjdXJyZW50TWF0Y2hJZCAhPT0gbnVsbCAmJiBjdXJyZW50TWF0Y2hJZCAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRNYXRjaElkKGN1cnJlbnRNYXRjaElkKSk7XHJcbiAgICAgICAgfSBcclxuICAgIH0sIFtjdXJyZW50TWF0Y2hJZCBdKVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBwcmVkaWN0aW9uQmFja2dyb3VuZC5zcmMgKyBcIilcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGltZSA9IG5ldyBEYXRlKCksXHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICAgICAgYnJlYWtwb2ludHMgPSBbXHJcbiAgICAgICAgICAgIHsgd2lkdGg6IDM3NSwgaXRlbVBhZGRpbmc6IFsyMSwgMCwgMjUsIDBdIH0sXHJcbiAgICAgICAgICAgIHsgd2lkdGg6IDYxNiwgaXRlbVBhZGRpbmc6IFs3OSwgMCwgNzksIDBdIH0sXHJcbiAgICAgICAgICAgIHsgd2lkdGg6IDE5MjAsIGl0ZW1QYWRkaW5nOiBbMTE1LCAwLCA0MywgMF0gfSxcclxuICAgICAgICBdXHJcblxyXG4gICAgdGltZS5zZXRTZWNvbmRzKHRpbWUuZ2V0U2Vjb25kcygpICsgMTA2MDApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNsaWRlQ2hhbmdlKHApIHtcclxuICAgICAgICBzZXRDdXJyZW50TWF0Y2hJZCggcD8uaXRlbT8uaWQgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludHM9e2JyZWFrcG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NsaWRlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVfZGF0YS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU9e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU9e2VsLnByZWRpY3Rpb25CdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5NYWluUGFnZT17J3ByZWRpY3Rpb24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJ5VGltZXN0YW1wPXtuZXcgRGF0ZSggYCR7IGVsLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApIH0gJHtlbC50aW1lfWAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb249e2VsLnByZWRpY3Rpb25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkaW5hcj17ZWwub3JkaW5hclRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT4gcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oe1xyXG4gICAgcGFnZSA9ICdjb21tb24nLFxyXG4gICAgdGV4dFBhdGhOYW1lID0gXCJZb3UgYXJlIGRvbnQgcHV0IHRoZXJlIHRleHQuXCIsXHJcbiAgICBsb2NhdGlvbkluUGFnZSA9IFwiXCIsXHJcbiAgICBhZGl0aW9uYWxTdHlsZXMgPSBudWxsLFxyXG4gICAgYWN0aXZlID0gZmFsc2UsXHJcbiAgICBjbGljayA9IG51bGwsXHJcbiAgICBjb250YWluZXJTdHlsZXMgPSBudWxsIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihwYWdlKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSBgJHtsb2NhdGlvbkluUGFnZX1gLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7YWRpdGlvbmFsU3R5bGVzfSAke2FjdGl2ZSA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfVxyXG4gICAgICAgICAgICBzdHlsZT17Y29udGFpbmVyU3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250ZW50fWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSh0ZXh0UGF0aE5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IGNvbnN0cyB9IGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbi8vIGljb25zXHJcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd1JpZ2h0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dMZWZ0LnBuZydcclxuaW1wb3J0IGFycm93U3R5bGVzIGZyb20gJy4vQXJyb3cubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJyb3coeyB0eXBlLCBvbkNsaWNrLCBpc0VkZ2UgfSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICBwb2ludGVyID0gdHlwZSA9PT0gY29uc3RzLlBSRVYgP1xyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93TGVmdC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93TGVmdH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dSaWdodC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93UmlnaHR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgIC8+LFxyXG5cclxuICAgICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzM1cHgnLFxyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAnMTAlJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRWRnZX1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vaG9va3MgXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgTGlrZURpc2xpa2VEcm9wIH0gZnJvbSAnLi9MaWtlRGlzbGlrZURyb3AvTGlrZURpc2xpa2VEcm9wJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZlZWRCYWNrLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgbGlrZUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvbGlrZS5wbmcnXHJcbmltcG9ydCBkaXNMaWtlSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9kaXNsaWtlLnBuZydcclxuaW1wb3J0IGZpbGxlZFN0YXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZmlsbGVkU3Rhci5wbmcnXHJcbmltcG9ydCB1bmZpbGxlZFN0YXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvdW5maWxsZWRTdGFyLnBuZydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmVlZEJhY2soe1xyXG4gICAgYXZhdGFyLFxyXG4gICAgbmlrTmFtZSxcclxuICAgIHJhdGVpbmcsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGRhdGUsXHJcbiAgICBsaWtlcyxcclxuICAgIGRpc0xpa2VzLFxyXG4gICAgcmVhY3Rpb25zRm9yVGVzdGluZ1xyXG59KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBzdGFycyA9IFswLCAxLCAyLCAzLCA0XSxcclxuICAgICAgICBbc2hvd1JlYWN0aW9ucywgc2V0U2hvd1JlYWN0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gYWx0PXtuaWtOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntuaWtOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRlaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzLm1hcCgoZWwsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbCA8IHJhdGVpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e01hdGgucmFuZG9tKCl9IHNyYz17ZmlsbGVkU3Rhci5zcmN9IGFsdD1cInN0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17TWF0aC5yYW5kb20oKX0gc3JjPXt1bmZpbGxlZFN0YXIuc3JjfSBhbHQ9XCJzdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b219PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlX2xpa2VzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlrZXNfZGlzbGlrZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saWtlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlrZUljb24uc3JjfSBhbHQ9XCJsaWtlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bGlrZXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudmVydGljYWxfYm9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dSZWFjdGlvbnMoIXNob3dSZWFjdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlzTGlrZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Rpc0xpa2VJY29uLnNyY30gYWx0PVwiZGlzbGlrZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Rpc0xpa2VzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dSZWFjdGlvbnMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlrZURpc2xpa2VEcm9wIGRhdGE9e3JlYWN0aW9uc0ZvclRlc3Rpbmd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlrZURpc2xpa2VEcm9wLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29ucyBcclxuaW1wb3J0IGxpa2VJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2xpa2UucG5nJ1xyXG5pbXBvcnQgZGlzTGlrZUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZGlzbGlrZS5wbmcnXHJcbmltcG9ydCBhdmF0YXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvYXZhdGFyLnBuZydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGlrZURpc2xpa2VEcm9wKHsgZGF0YSA9IFtdIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKGVsID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhci5zcmN9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9wYXJ0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZWwudXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlbC5yZWFjdGlvbiA/IGxpa2VJY29uLnNyYyA6IGRpc0xpa2VJY29uLnNyY30gYWx0PVwicmVhY3Rpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MZWF2ZUNvbW1lbnQubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCBmaWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2ZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgdW5maWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci5wbmcnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMZWF2ZUNvbW1lbnQoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXMgY29uc3RzXHJcbiAgICAgICAgc3RhcnMgPSBbMCwgMSwgMiwgMywgNF0sXHJcbiAgICAgICAgW3NpbXVsYXRvciwgc2V0U2ltdWxhdG9yXSA9IHVzZVN0YXRlKDApLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2NvbW1vbnMuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBjb21tZW50OiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdWJtaXQgPSAoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSwgeyByYXRlOiBzaW11bGF0b3IgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyc19jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzX2FyZWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFycy5tYXAoZWwgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW11bGF0b3IgPiBlbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyhlbCArIDEpICogTWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZmlsbGVkU3Rhci5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2ltdWxhdG9yKGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17KGVsICsgMSkgKiBNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1bmZpbGxlZFN0YXIuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbXVsYXRvcihlbCArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWFfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdjb21tZW50Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdjb21tZW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ3BsYWNlSG9sZGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCdzZW5kJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZXMsIGFjdGl2ZVBhZ2UsIG9uQ2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlcy5tYXAoZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZVBhZ2UgPSBhY3RpdmVQYWdlID09PSBlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZVBhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJvdW5kfSAke2lzQWN0aXZlUGFnZSAmJiBzdHlsZXMuYWN0aXZlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NvcnRpbmcubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU29ydGluZyh7XHJcbiAgICBzb3J0aW5nVGV4dCxcclxuICAgIGRhdGVTb3J0aW5nVGV4dCxcclxuICAgIHJhdGVTb3J0aW5nLFxyXG4gICAgc29ydEJ5RGF0ZSxcclxuICAgIHNvcnRCeVJhdGUsXHJcbiAgICBkYXRlQWN0aXZlXHJcbn0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oYGhvbWVgKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAndGVzdGltb25pYWxzLnNvcnRpbmcuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoc29ydGluZ1RleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9PlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5ieURhdGV9ICR7ZGF0ZUFjdGl2ZSA/IHN0eWxlcy5hY3RpdmUgOiBudWxsfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c29ydEJ5RGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoZGF0ZVNvcnRpbmdUZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c29ydEJ5UmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyFkYXRlQWN0aXZlID8gc3R5bGVzLmFjdGl2ZSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUocmF0ZVNvcnRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi9UaXRsZS9UaXRsZSdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgRmVlZEJhY2sgfSBmcm9tICcuL0ZlZWRCYWNrL0ZlZWRCYWNrJ1xyXG5pbXBvcnQgeyBmZWVkYmFja19kYXRhIH0gZnJvbSAnLi9mZWVkX2JhY2tfZGF0YSdcclxuaW1wb3J0IHsgTGVhdmVDb21tZW50IH0gZnJvbSAnLi9MZWF2ZUNvbW1lbnQvTGVhdmVDb21tZW50J1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi9QYWdpbmF0aW9uL1BhZ2luYXRpb24nXHJcbmltcG9ydCB7IFNvcnRpbmcgfSBmcm9tICcuL1NvcnRpbmcvU29ydGluZydcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXN0aW1vbmlhbHMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfRkVFREJBQ0sgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGdldE1hdGNoSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlJ1xyXG5cclxuaW1wb3J0IGF2YXRhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9hdmF0YXIucG5nJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RpbW9uaWFscyh7XHJcbiAgICBwYWdlLFxyXG4gICAgbG9jYXRpb25JblBhZ2UsXHJcbiAgICB0ZXh0UGF0aE5hbWVcclxufSkge1xyXG4gICAgY29uc3QgbWF0Y2hJZCA9IHVzZVNlbGVjdG9yKGdldE1hdGNoSWQpO1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICBbZmVlZEJhY2tzLCBzZXRGZWVkQmFja3NdID0gdXNlU3RhdGUoW10pLFxyXG4gICAgICAgIFtkYXRlQWN0aXZlLCBzZXREYXRlQWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobWF0Y2hJZCAhPT0gbnVsbCAgJiYgbWF0Y2hJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QoR0VUX0ZFRURCQUNLKG1hdGNoSWQpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocHJlZGljdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZlZWRCYWNrcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbnMuZGF0YS5kYXRhLm1hcChmZWVkQmFjayA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZWluZzogZmVlZEJhY2suc3RhcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZmVlZEJhY2suY29tbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMTMuMDcuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VzOiArZmVlZEJhY2subGlrZUNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzTGlrZXM6ICtmZWVkQmFjay5kaXNsaWtlQ291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7IGNvbnNvbGUubG9nKGVycikgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWF0Y2hJZF0pXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gZm9yIHNvcnRpbmdcclxuICAgIGNvbnN0IHNvcnRpbmcgPSAodG9Tb3J0LCBzb3J0aW5nQnksIGRhdGVBY3RpdmUpID0+IHtcclxuICAgICAgICBpZiAodG9Tb3J0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0XHJcbiAgICAgICAgICAgICAgICBkYXRhRm9yU29ydGluZyA9IHRvU29ydC5yZWR1Y2UoKGFjLCBlbCkgPT4gYWMuY29uY2F0KGVsKSksXHJcbiAgICAgICAgICAgICAgICBzb3J0ZWREYXRhID0gW10sXHJcbiAgICAgICAgICAgICAgICBzb3J0ZWQgPSBbXVxyXG5cclxuICAgICAgICAgICAgaWYgKHNvcnRpbmdCeSA9PT0gXCJkYXRlXCIpIHNvcnRlZCA9IGRhdGFGb3JTb3J0aW5nLnNvcnQoKGEsIGIpID0+IChiLmRhdGUuc29ydEZvcm1hdCAtIGEuZGF0ZS5zb3J0Rm9ybWF0KSlcclxuICAgICAgICAgICAgZWxzZSBpZiAoc29ydGluZ0J5ID09PSBcInJhdGVcIikgc29ydGVkID0gZGF0YUZvclNvcnRpbmcuc29ydCgoYSwgYikgPT4gKGIucmF0ZWluZyAtIGEucmF0ZWluZykpXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwoZGF0YUZvclNvcnRpbmcubGVuZ3RoIC8gMyk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvcnRlZEl0ZW1zID0gW11cclxuICAgICAgICAgICAgICAgIHNvcnRlZC5mb3JFYWNoKChlbCwgeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICh4IDwgaSAqIDMpICYmICh4ID49ICgoaSAqIDMpIC0gMykpICYmIHNvcnRlZEl0ZW1zLnB1c2goZWwpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc29ydGVkRGF0YS5wdXNoKHNvcnRlZEl0ZW1zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEZlZWRCYWNrcyhzb3J0ZWREYXRhKVxyXG4gICAgICAgICAgICBzZXREYXRlQWN0aXZlKGRhdGVBY3RpdmUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQXJ0aWZpY2lhbCByZWFjdGlvbnMgZGF0YSBcclxuICAgIGNvbnN0IHJlYWN0aW9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIkxvcmVtIElwc3VtXCIsXHJcbiAgICAgICAgICAgIHJlYWN0aW9uOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIkxvcmVtIElwc3VtXCIsXHJcbiAgICAgICAgICAgIHJlYWN0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJMb3JlbSBJcHN1bVwiLFxyXG4gICAgICAgICAgICByZWFjdGlvbjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtmZWVkQmFja3MgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPXt0ZXh0UGF0aE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXtsb2NhdGlvbkluUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZF9iYWNrc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29ydGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGluZ1RleHQ9e1wic29ydFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVNvcnRpbmdUZXh0PXtcImJ5RGF0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZVNvcnRpbmc9e1wiYnlSYXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0QnlEYXRlPXsoKSA9PiB7IHNvcnRpbmcoZmVlZEJhY2tzLCBcImRhdGVcIiwgdHJ1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeVJhdGU9eygpID0+IHsgc29ydGluZyhmZWVkQmFja3MsIFwicmF0ZVwiLCBmYWxzZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVBY3RpdmU9e2RhdGVBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGFnaW5hdGlvbj17UGFnaW5hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zVG9TaG93PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZEJhY2tzLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBrZXk9e01hdGgucmFuZG9tKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e2VsLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlrTmFtZT17ZWwubmlrTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZWluZz17ZWwucmF0ZWluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VsLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlLnJlbmRlckZvcm1hdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZXM9e2VsLmxpa2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNMaWtlcz17ZWwuZGlzTGlrZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3Rpb25zRm9yVGVzdGluZz17cmVhY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWF2ZUNvbW1lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy9pY29uc1xyXG5pbXBvcnQgYXZhdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2F2YXRhci5wbmcnXHJcblxyXG5leHBvcnQgY29uc3QgZmVlZGJhY2tfZGF0YSA9IFtcclxuICAgIC8vIGVhY2ggYXJyYXkgYXJlIG5ldyBwYWdlXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXRlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjE1LjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xNVwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMSxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXRlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjAxLjA2LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNi0wMVwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMSxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMTMuMDcuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA3LTEzXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAwLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogNSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDEsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjAyLjA0LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNC0wMlwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMTMuMDcuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA3LTEzXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAwLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogNSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDEsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjAyLjA0LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNC0wMlwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMTMuMDcuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA3LTEzXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAwLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogNSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDEsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjAyLjA0LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNC0wMlwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuXSIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UaXRsZS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRpdGxlKHtcclxuICBwYWdlID0gXCJjb21tb25cIixcclxuICB0ZXh0UGF0aE5hbWUgPSBcIllvdSBhcmUgZG9udCBwdXQgdGhlcmUgdGV4dC5cIixcclxuICBsb2NhdGlvbkluUGFnZSA9IFwiXCIsXHJcbiAgdGV4dFN0eWxlcyA9IG51bGwsXHJcbiAgaHJlZixcclxuICBjbGFzc2VzLFxyXG59KSB7XHJcbiAgY29uc3QgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24ocGFnZSksXHJcbiAgICB0cmFuc2xhdGlvblBhdGggPSBgJHtsb2NhdGlvbkluUGFnZX1gLFxyXG4gICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtocmVmID8gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgc3R5bGU9e3RleHRTdHlsZXN9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dHJhbnNsYXRlKGAke3RleHRQYXRoTmFtZX1gKX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHAgc3R5bGU9e3RleHRTdHlsZXN9IGNsYXNzZXM9e2NsYXNzZXN9PlxyXG4gICAgICAgICAge3RyYW5zbGF0ZShgJHt0ZXh0UGF0aE5hbWV9YCl9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nXHJcblxyXG5cclxuY29uc3RcclxuICAgIGhhbmRsZV9vdmVyZmxvd19vbl9vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSAnYXV0bydcclxuICAgIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNb2RhbCh7XHJcbiAgICBvbkNsb3NlLFxyXG4gICAgLy8gY2xvc2VXaXRoVmVjdG9yZSA9IG51bGwsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGNvbnRhaW5lclN0eWxlcyA9IG51bGwsXHJcbiAgICBjb250ZW50U3R5bGVzID0gbnVsbCxcclxuICAgIG90aGVyU3R5bGVzID0gbnVsbCxcclxuICAgIHBvcnRhbExvY2F0aW9uID0gJ21vZGFsLWNvbnRlaW5lcicgfSkge1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbaGFuZGxlQ2xvc2VdKVxyXG5cclxuICAgIGNvbnN0IG5vZGUgPSB1c2VSZWYoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gZSA9PiB7XHJcbiAgICAgICAgaWYgKG5vZGU/LmN1cnJlbnQ/LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb25DbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICAgICBkaW5hbWljVG9wID0gd2luZG93LnNjcm9sbFlcclxuXHJcbiAgICBzaG93TW9kYWwgPyBoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbigpIDogaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlKClcclxuXHJcbiAgICBjb25zdCBtb2RhbCA9IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vZGFsQ29udGVpbmVyfSAke2NvbnRhaW5lclN0eWxlc31gfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdG9wOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQgIWltcG9ydGFudCdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vZGFsQ29udGVudH0gJHtjb250ZW50U3R5bGVzfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17b3RoZXJTdHlsZXN9XHJcbiAgICAgICAgICAgICAgICByZWY9e25vZGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIGlmIChzaG93TW9kYWwpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgICAgICBtb2RhbCxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9ydGFsTG9jYXRpb24pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm4gbnVsbFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBob3N0ID0gXCJodHRwczovL3d3dy5mb290YmV0MjQuY29tL2FwaVwiO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSAoIGRlc3RpbmF0aW9uLCBwYXlsb2FkID0gbnVsbCwgb3B0aW9ucyA9IG51bGwgKSA9PiBuZXcgUHJvbWlzZSggKCByc2x2LCByamN0ICkgPT4ge1xyXG4gIGxldCBoZWFkZXJzID0ge307XHJcblxyXG4gIGlmICggb3B0aW9ucyApIHtcclxuICAgIGlmICggb3B0aW9ucy5hdXRoID09PSB0cnVlICkge1xyXG4gICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShgYWNjZXNzLXRva2VuYCl9YCB8fCBgYCAvLyBmb3IgbW9zdCBvZiByZXF1ZXN0c1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCBgaGVhZGVyc2AgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMgaW5zdGFuY2VvZiBPYmplY3QgKSB7XHJcbiAgICAgIGhlYWRlcnMgPSB7IC4uLmhlYWRlcnMsIC4uLm9wdGlvbnMuaGVhZGVycyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyggYHN0YXJ0IGxvYWRpbmdgICk7XHJcbiAgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBkZXN0aW5hdGlvbi5tZXRob2QsXHJcbiAgICB1cmw6IGRlc3RpbmF0aW9uLnVybCxcclxuICAgIGhlYWRlcnMsXHJcbiAgICBkYXRhOiBwYXlsb2FkIHx8IHt9XHJcbiAgfSlcclxuICAudGhlbiggcnNsdiApXHJcbiAgLmNhdGNoKCByamN0IClcclxuICAuZmluYWxseSggKCkgPT4gY29uc29sZS5sb2coIGBlbmQgbG9hZGluZ2AgKSApXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBuYW1lID0+IHtcclxuICB2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xyXG4gIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYyA9IGNhW2ldO1xyXG5cclxuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEsIGMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gbmFtZSA9PiB7XHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9OyBQYXRoPS87IEV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAobmFtZSwgdmFsdWUsIGRheXMpID0+IHtcclxuICBsZXQgZXhwaXJlcyA9IFwiXCI7XHJcblxyXG4gIGlmIChkYXlzKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyAodmFsdWUgfHwgXCJcIikgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG59XHJcbiIsImltcG9ydCB7aG9zdH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IEFVVEhfVVJMID0gaG9zdCArIGBhdXRoL2A7XHJcbmNvbnN0IEFDQ09VTlRfVVJMID0gaG9zdCArIGBhY2NvdW50L2BcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ3JlZ2lzdHJhdGlvbicsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyAnbG9naW4nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUNDT1VOVF9JTkZPID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAnaW5mbycsXHJcbiAgbWV0aG9kOiAnZ2V0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lNQUdFID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAncHJvZmlsZS1pbWFnZScsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVJUX1JFU0VUX1BBU1NXT1JEID0gZW1haWwgPT4gKHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL3Jlc2V0P2VtYWlsPSR7ZW1haWx9YCxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBWRVJJRllfUEFTU1dPUkRfUkVTRVQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC92ZXJpZnlfY29kZWAsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX05FV19QQVNTV09SRCA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL25ld19wYXNzd29yZCBgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9ORVdTID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL25ld3NgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVMgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vbWF0Y2gtb2YtdGhlLWRheWAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9tYXRjaC1vZi10aGUtZGF5P3R5cGU9bmV4dF9kYXlgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BSRURJQ1RJT05TID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFjY291bnQvcHJlZGljdGlvbmAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRkVFREJBQ0sgPSBpZCA9PiAoe1xyXG4gICAgdXJsOiBob3N0ICsgYGZlZWRiYWNrLyR7aWR9P3NvcnRfYnk9Y3JlYXRlZF9hdCZvcmRlcl9ieT1kZXNjYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19CWV9UWVBFID0gdHlwZSA9PiAoe1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL2dhbWU/dHlwZT0ke3R5cGV9YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufSlcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZXRlY3REb21haW5Mb2NhbGU9ZGV0ZWN0RG9tYWluTG9jYWxlO2Z1bmN0aW9uIGRldGVjdERvbWFpbkxvY2FsZShkb21haW5JdGVtcyxob3N0bmFtZSxkZXRlY3RlZExvY2FsZSl7bGV0IGRvbWFpbkl0ZW07aWYoZG9tYWluSXRlbXMpe2lmKGRldGVjdGVkTG9jYWxlKXtkZXRlY3RlZExvY2FsZT1kZXRlY3RlZExvY2FsZS50b0xvd2VyQ2FzZSgpO31mb3IoY29uc3QgaXRlbSBvZiBkb21haW5JdGVtcyl7dmFyIF9pdGVtJGRvbWFpbixfaXRlbSRsb2NhbGVzOy8vIHJlbW92ZSBwb3J0IGlmIHByZXNlbnRcbmNvbnN0IGRvbWFpbkhvc3RuYW1lPShfaXRlbSRkb21haW49aXRlbS5kb21haW4pPT1udWxsP3ZvaWQgMDpfaXRlbSRkb21haW4uc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpO2lmKGhvc3RuYW1lPT09ZG9tYWluSG9zdG5hbWV8fGRldGVjdGVkTG9jYWxlPT09aXRlbS5kZWZhdWx0TG9jYWxlLnRvTG93ZXJDYXNlKCl8fChfaXRlbSRsb2NhbGVzPWl0ZW0ubG9jYWxlcykhPW51bGwmJl9pdGVtJGxvY2FsZXMuc29tZShsb2NhbGU9PmxvY2FsZS50b0xvd2VyQ2FzZSgpPT09ZGV0ZWN0ZWRMb2NhbGUpKXtkb21haW5JdGVtPWl0ZW07YnJlYWs7fX19cmV0dXJuIGRvbWFpbkl0ZW07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuICAgIGltcG9ydCBfX2xvYWROYW1lc3BhY2VzIGZyb20gJ25leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzJ1xuICAgIFxuaW1wb3J0IE1haW4gZnJvbSAnL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYWluJ1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4gPE1haW4gLz5cclxuXHJcbkluZGV4UGFnZS5sYXlvdXQgPSBcIm1haW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuXG5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuLi4oYXdhaXQgX19sb2FkTmFtZXNwYWNlcyh7XG4gICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvaW5kZXgnLFxuICAgICAgICAgICAgICBsb2FkZXJOYW1lOiAnZ2V0U3RhdGljUHJvcHMnLFxuICAgICAgICAgICAgICAuLi5fX2kxOG5Db25maWcsXG4gICAgICAgICAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIG1hdGNoSWQ6IG51bGxcclxuICAgIH0sXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldE1hdGNoSWQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1hdGNoSWQgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRNYXRjaElkIH0gPSBtYXRjaFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNYXRjaElkID0gc3RhdGUgPT4gc3RhdGUubWF0Y2gubWF0Y2hJZFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hTbGljZS5yZWR1Y2VyIiwiLy8gaWNvbnNcclxuaW1wb3J0IGF0bGV0aWNvSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2JhcmNhLnBuZydcclxuaW1wb3J0IHBzakljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3Bzai5wbmcnXHJcbmltcG9ydCBhdGxldGljSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCByZW5uYWlzSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmcnXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVfZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWUxJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwi0J7RgNC00LjQvdCw0YBcIixcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lMicsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkdCw0YDRgdC10LvQvtC90LAnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQn9Ch0JYnLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcItCt0LrRgdC/0YDQtdGB0YFcIixcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMjUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWUzJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9Cc0LDRgNGB0LXQu9GMJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcmVubmFpc0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTgwMCDRgNGD0LEuICdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lNCcsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lNScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTYnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nXHJcbiAgICB9LFxyXG5dIiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMuMjgzODIwZmQyNmFlMzA4NTQyYzQ5OTg3NDdmNmYxNTAucG5nXCIsXCJoZWlnaHRcIjo2MyxcIndpZHRoXCI6NTgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTZVbEVRVlI0MmpYS3YyckNVQmdGOER2NE1vVytSNGZPaFQ1TDdSZ1hONkZMQzVFVUhCcHEwZzRYR2tXdzRvMjVYTkFoRUM1Sk1MbUtVZkRQb0tBSTBlL1REUDZXd3prY0VzZHg3dnMrY3M1QkNBRkJFSUFZamZDNkFWRks3Wklrd1NnTXdmVThrRktDYXhpbzBuUlBHR094cnV2NHFtbG5xOUdBOVk5OW5sQ0tUcWVUa01WOGJsNFArRld0bmpiTmJ6amE5aW1MSWh3clpSRlBpS2ZaZElxcmovY2NlLys0ck5melJaYmhnUE5uVWhpbnFaRDlQbTQvalVQUTdhSU13eUc1MFNxVk82ZmRQakRMd2w5S2p5L2w4ajBwTU5jdEZkazB6UWZhYXVWdnRkcGowZjhjcDNRQldmeWJqNTArY29zQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLjJjZTc1ZTIxMTYyZTJlNmRjNDhiOTllNjAxODEwN2UwLnBuZ1wiLFwiaGVpZ2h0XCI6NjIsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUEwMGxFUVZSNG5BSElBRGYvQVd4dGhzVGUzK2N4OHZQNkNnd0tCQUFHQndYMkJoQU96d0dEaEpiL056WXVBTnpjNGY4RUJ3Y0F5TWZTQVJEaTRRQUJqNUNnL0JFUURRTDcvLzhCdktxK0FIdDhYdi9qcjZ2L0FXaHBndjMxOXZrQ01ERWwveS84N0FBeVMwZ0J3NldxL3dGZWFJUC9Kd0gyL1ZsV1JBUCsrdm9BQ0JNVC9kQ3dzd01Cbm9XTzlVNVFSUXJ0NE4vOC92Ny9BQkVkSFFURnNMYjNBWTJUb1RBb0J2Nm1KU0FZS1FBQUFBRGM0ZWpZeXY0S1d3RnFJMFlBbHQyNkJybXNzcnNBQUFBQlIxUk9SVlVvVWZsK2xWdHJTVEN5NFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2F2YXRhci5iZTA2YmRjMDU0MzBmNWNkY2ZiODRmN2E5ZTU0MjExMy5wbmdcIixcImhlaWdodFwiOjc1LFwid2lkdGhcIjo3NixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBY0VsRVFWUjQyaDJHdlFuQ0FCUUd2MG44STA2ZzgrZ1lPbzIyMmxnSVdvcWtFeEViY1lab2tlUytBZkx5Q0FkM0o0dkNKWkhjbVZueXhIK0NGZXQweFVpY0hUd3N4RFB2SkZwSHpzNzdvYldBNE1LR0xWZUNScFI4TEpMMGw1dVk4dVBBZ3FXUFZJeUZtUE9tUzE0VXFBZHR5bUgzVGZGejBRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9kaXNsaWtlLjgzY2M3NjI0N2RkNDczYWIyYmIzNzVmY2UyNWI5MzFmLnBuZ1wiLFwiaGVpZ2h0XCI6MzIsXCJ3aWR0aFwiOjMwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFaa2xFUVZSNDJqM0xzUXNCQVFDRjhhZTRGTE93bUdRUW1VeVhRY2x3dzRuaEprcGh0UHZuZjVIaFhtLzR2dUdMUXVYaXJIWjNkWXRTYldCc2FwNm80bVdVZHZieGFHV20wTVRUMmtiZndzZkpNU1pXR2p1VlhsdGFPaWdUWFozOEhrTnYyL3o1QzlVK04yejByR0FuQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZmlsbGVkU3Rhci5iNDRhYTgxMmRjYmY5ZWIxNGU2NGFmNmM4ZTcyNzliMy5wbmdcIixcImhlaWdodFwiOjI2LFwid2lkdGhcIjoyOCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBaFVsRVFWUjQybVA0ZDlxSUVZaFpHWURnM3hsalBTQTJad0FDb0JnYkVETXhJQU9nUUNzUXowRVhOQURpVENBT0F1TGIvODRZdlFIU29VQ2NBY1FXSUFWQ1FEd2JpUC8vTzIzOEgyakZIeEFiaUZjQ3NSU3lTWDFBU2FBQ3NPUXlWR3RPNkRNQkJXOEE4UW9nbmduRXo0QUtlZUVLZ0J4dG9HQXVrbW1wUUd6SndNREFBQUFVRGwxazViTzVlQUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvbGlrZS4xNDMyZDhkNGMwNzQzN2I5NDY3YzUyNTllYjk0YjFkYy5wbmdcIixcImhlaWdodFwiOjMxLFwid2lkdGhcIjoyOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVFBQUFDZkRTMk5BQUFBWEVsRVFWUjQyalhMclFyQ0FBQkcwVStIMVNBMnc2SldzWWsveVdZUUJKVmhXZGpDR096OXkyRmg3T1I3TXpHNEpZcFlKdGFlN3BrNXVLb2NsZkh3MFZzNU9XdmliYXVjS3EvTWowV2lqa3RpbzBqcy9LTHoxYXY4dGZZajY0RXVtT0xGTTN3QUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci4yNjEwNWM1ZDRlNzgzNGRlNzk3ZWQ3MzQ1MDVlZTJiZi5wbmdcIixcImhlaWdodFwiOjI2LFwid2lkdGhcIjoyOCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBZmtsRVFWUjQybDJOc1FxRFFCQkVOeUY2VFZJR1VxWk5GeENMRXdXeFVCSEIza1lMOFRjOWYyengyUzB1UEdabnVKc1ZEZTZtSVg0SW95SDZzM3RobEF6dVlvZGdnUEVTdW9TdzFzM2w3QVZrdXNVbFdvRS9mMzFnd1pTbXllTlg5R3ZyZTNqcUhqbTB1OTUrd1FRdE5ERFQ4TFlQZmdTejhTTStGUkU1QUl3dlIwcURKQy9tQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL0NhbGVuZGFyLmU2MThkZjMzODdlZDEyM2I2NTFkNGVmMmFmOTE3ZmUyLnBuZ1wiLFwiaGVpZ2h0XCI6MzQsXCJ3aWR0aFwiOjM0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFhMGxFUVZSNDJnM0x1d3FDQUJRQTBQc0wvVUZMYzFNUUZZUmlJajBzZWhBMW1Zb05FZmIvd3lFNTh3a1R2YXZXeTkzUEpKVE9Na2NIdVlzeU5OSkJaaU94MW9WYzU2RlJlL3BLUXVydHBsWnA3ZFZoclZmcDdJeU5mRUloTVd4ekp6TjV5Q3dzclV3VnR1Wi9UaTVTMEtvMlA5RUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dMZWZ0LmUyMzcyYTBjNzhkOGM2YjI0NmJkZWUzZmZhYjQwZjdiLnBuZ1wiLFwiaGVpZ2h0XCI6MzUsXCJ3aWR0aFwiOjMxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE0MGxFUVZSNDJtTllzR0NCMklMNTg0M216NTFuc21EaFFxUDU4K2NiQThYMGdKaVhBU1FCWkJndldMVkNkLzYwR1Jielo4OHhtVDl2dmhsUVRKMEJwSExobnUycTgreGpaOHhMTDR0ZC9QcStCTkFFNC9uejVta3hMTmk2U1gydVpkU3llVnplSCtZNXhFMmZaeFcxYUg1RHU5ZUNOYXRVR0Jac1dLczFMemlqYWk2dno2TjVBWmxsOCtJSzB1ZjNUblJZc0d5cEdzUDhPWE5ORjU0K29qQXZMTHQ0WGs1bDVLS2I1MlVneHM3WFpnQzVET2dJaXdVYjEya0RWUnZPbnpYYmZQNzgrZVpBY1dXUUpDL0laVUFGT3ZQbnp0VUNzclVXekordnNtREJBallBalRWeFJNM2VuNzhBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2Fycm93UmlnaHQuYzZkNmQ5ZTEyMjJjNDE4ZjYwZmJiODE5NGQwOGE4MjMucG5nXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTRFbEVRVlI0MmhXT3ZVb0RRUlNGejcwenMrdktKcVlSd1ZnS1FzVENoN0F6aGJYVm9xOWc0Wk5ZYUxHTklQWldBYXRVYWRPRlFBS0JGRW1LaE0wUG0yVHV6YVQ0NEhENGlvL3lQRDhIVUEvUUVmWGVrREVsZ0FFRHVGSVJwOXVkVXk5TXRjbzZDQW1BU3c2SG9TUXViZlkwMEwvT2czei9OL24yZW5xVUxkWFNqYlM3RGZscVpTaDlyTzFaNXFOZk5hK1BQd3hSd0xGSE5WNGdZcUdVQzV5R1hXNE5vMWlkOFAxTjMzNitmK0NpMnNOejQ4MjhORnM2bnFRVWF1OVVKTUZ1ejNSVzJjQ3k2THhJeWJtWkJUQWtvcnBHenVoeURRQkUxazVKTVRvQWNSTmNFZXgwbDBnQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwuZWI0NjA0ODY0Y2UyNDAxYWEyNGZiNGVkMjcxZjZlODMucG5nXCIsXCJoZWlnaHRcIjo1MyxcIndpZHRoXCI6NDEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXRVbEVRVlI0Mm1Pb243T0ZsUUVJN2k1bjBIMjRna0VkeEc2Y3N3a29CZ0xUYnJqYXpMZ1Fhekg5WWdLUWJROFJuSDZkbjNuNnRmMUFnVTZHYWRlbkFObmJnVFFYVVBXMWJpQmVEeFJZd1RUdCtscWd3alZBaVZZR29PQjJJRjRFeEJlQkF1Y1pwbDliQW1SdlpoQ2FmbTJENFBScmkvbW1YNXNCWlBjS1RMKzJEb2dYQUhYY2FXR1lkcnVYWWVxZFVJYXBkd09CN01sQVhNZXdZbjVmOXQ1Rm1SNHJGM1E3cjEzUTVyVjNVWmJUb3ZsVFlnQUZaVmZBZXVaV1BRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5kN2Y1OTczMDQ5NDc0MDBmYjIwZjA1ZTJkYWU2YjVmYi5wbmdcIixcImhlaWdodFwiOjUxLFwid2lkdGhcIjo0NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBNmtsRVFWUjQybVBZM2NHamtlSFBlVGZFZ3VIY1ZnT0cvYytEeEsrOVNGWTkrMjJEZ0FERHVqWTljM1VHaHY5SHE2di9IMSs2NVAvYXBMVC9UMndZUHY3WTRDekIwRmFxNXAvSXdQRC8xOEg5dng5ZHUvcG45YXBWLzI3ck1mejhNOU5ObDZFNlhxcVhnWUhoLzYyK3J0KzdlcnYvTDZ1dS92TlFtdUgvNndxRFZJWmNmNEV0eXNibS85MU1ESDV2OFBQOC96alk4OWZUWU8vL3p6TlUraGdhRTNnbU9Ka1ovV2V3ZFBpL0k4am45OXVvOFArUHc5My92eTZUeldENGY0NkJveldHb1YvYWdPSExSaDJCLzYvOVpGOC95MmFvWkVBR3U2YUlxNTJ1a09uNWYwQmZHQ1lHQU5aS1pzRmMyMXZIQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93TGVmdC5kNmQ1MGZmYWNlMzIyMGNhY2VlODhjZDVlNTU1NjAxYS5wbmdcIixcImhlaWdodFwiOjM1LFwid2lkdGhcIjozMSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBelVsRVFWUjQybVA0Ly8rLzhMOS8vL1IvLy94bEJHUWJBTm1HUUZvSFNITXpBQW1EdjMvK21JSUVmbjMvWWZyejIzZlR2My8vbWdINTZneC9mdjgyQmpLVXRoVzFkWjZhdnpvSnlCWUhZaU9nQmgwR0lFTnRVM2I5OUhrTW5oODJwOWROM0pSU1BlWEJpWE5lUUhGVmtLVEdudGJKZFFzRS9KL3RxdWx0Mk44NXZmejV0VnN1SUUwTXYzLytOQVV5RlBhMVQ2czR2M0p6TkpBdENUVldtd0hJQUxyMHB6bVExZ1ppdzUvZnZwbi8rL3NYeEZjRnVaWWZ5TkQ2OWVPSDNwL2ZmM1NnM2xELzkrOGZCd0JqOXFQUGorNDdrZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93UmlnaHQuOTExZmM5ZTg0ZTA0NDYzNzgwYTNiNzU5MThhNjU1YTcucG5nXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQXlVbEVRVlI0Mm1QNDkrK2ZNQkRyL2YvLzMrRGYzNzhHdjMvOU1nS3lkWUJpM0F3Z3diOS8vcGorK1ByTkRNZzJCa244L3ZuTEFraXJNZno1L2RzRXlBRHBGTjNmTnEzMHlPU0YyVUMyRWxDeExraW45dFZkQjhKMk5QUjJiaTFwblRpZnplZnQ4Vm5MUUFvVXdKSlhkdTBQMjluWTE3NHh1M2JPZkVidkR5Zm5yMG9IaWl1Q2pBWFpvd3ZFWW9jbnpNczd2WGh0QXBDdC9QUGJkejJRVGoyZ2c4eStmL2xpQVhJY1NPSHZuejh0Z2JRcUE5REovRUNzQlhibHIxOGdDWkRqMVAvOSs4Y0JBSnk5bytqQ1hXZENBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL25ld3MvZm9ydEJhY2suMmZhYzRhNTNmMDZlMGQ3YjUwOGQwMzk1OGQ2YzExYWYucG5nXCIsXCJoZWlnaHRcIjozMjQsXCJ3aWR0aFwiOjM3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBOGtsRVFWUjRuQUhuQUJqL0FXbU5WY3FYQk1nQmFRbzhBUFhUOGdBTEZBZ0FCUWdIQU5ETzRRQXVLeXdBQVdPQ1VNejBEQTRBM04zZEFNM2kxZ0JFTERZQUZQMzlBTzdtOWdBMU1VUUFBWHlOWjhzbEdnd0EzcWFOQUNSQ1pBRGUzdGNBOHhRcUFDQW1OUUR5OCs0QUFWWnZPc3ZQNXRnQW5HS2JBRDRkQVFEU3BLQUFuT3NXQU9zTjhBRHI4OVFBQVZ4dldjc2pGeDhBVVR4R0FPeThwQUMrcDdzQUl5Z0RBSWdBQmdBUy9RY0FBVnhrVzh6bjl1OEFnVDhuQU51K3h3Q2pxY2dBSHlvVEFKLzhDUUFhL1BvQUFVcFpNTWtCL2ZvQUR2L3pBQkgyQmdDV3plb0FBUGNBQUFzQUFBRDVCUUlBVzdGV0RtcTFJM3NBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL3NlY0JhY2suMGNlZDg5NTg2MDU2MGE5MDNhMWM2YmMzM2Y4MzVhZjMucG5nXCIsXCJoZWlnaHRcIjozMjQsXCJ3aWR0aFwiOjM3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBNDBsRVFWUjRuQTNNdlVyRFVCaUE0ZmV6VGRMQmRtaE5RRW9uQlJjZHhLVUVCeGNuOFM1YzNkMUV2QUhkdlFHdm9ZaXIyS0M0ZExLakJCS3RwQ1hOejBuT2FmYUhSMDZmWHQ0dlQxeHBiY0Z2WlFoTHcxK3BTWElobnMyUTIrZlh3RC8wU1BNS1JVM1d3SjhhNWlYOE4xQWVKeC9UejNuQ1Y1Z3ozT2x5UExMeGQ1dEJ3eVN5a1BIVnpmU3Q2SEEzM3NjLzZGSFZDcTFLRm1HSFRLK1JpN085d0RpdUdRdzkzRzRDU3NoTFJSeHA3UFlLdVg0WUJaWmRtS1dPeEdSOVduWFBGR3N0L2Z6SUxHSkg1UHkrRlJTcWJYUzVqVjQ2cEtsRi9KMHd3R05WWkd3QUxSQnI1Yk5aK1RrQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy90cmRCYWNrLjE2M2JkMzk1ZWFhZjBjOWQ1ZDI1M2VhZDk5YmFiY2ZkLnBuZ1wiLFwiaGVpZ2h0XCI6MzI0LFwid2lkdGhcIjozNzIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQTJVbEVRVlI0MmczTnNVNkRVQlFHNFAvQWdWdm9wUkFXYTB5MHdVUUh1NXVZT0RyNHdEVU9PanAxTlViSEpxWXhwTkJTeE5KZUxzZCtML0RSMCt4NWJydU9obEVzTG51d3ZVQVBmREF6cmFvLzRiZlhHYTJyUmtJRzFadGFzc2tZVmx6cUtCQldURTYrWE1qRGVVV2VhV1Y4Y1lOTTk3aWtML24rL0tCcyt5TE83YjFDRU9SeWZYZUNxMm1HMW5QUnBBclR4MWdXdndaT1VUYVlIelNDNUJScFlsQjA3NURSRUZFcThDZG40QVA1cEpNQnltS0pyVlBDTXFOWEx2WlZEeDJINEx6ZTJIVkx4MllGcFVZSW93UjFzOFBlR01qUER2ODE5bHpOU01POWdBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0LmFkNzg5NzZlNjMzMzc3OGEyMDdjOGI0NjQwYzAyOWViLnBuZ1wiLFwiaGVpZ2h0XCI6NzA0LFwid2lkdGhcIjoxMjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFJQ0FZQUFBQTRHcFZCQUFBQUYwbEVRVlI0bkdQODkrK2ZJSWdRQWhGZ0Zob0JrUUFBOHd3WVk4aFZPeEFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93TGVmdFZlY3Rvci5kODQ1OGRhZGEzNjdkODE1NWU3MGYzMWYzM2U3ZjUxZi5wbmdcIixcImhlaWdodFwiOjM4LFwid2lkdGhcIjo0MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBajBsRVFWUjQybVBZeU9uT3ZJblRuWjBCQ0RaeWVpd0E0cTlBTE04QUJKczRQVmdaa01GR0x2Y1FJUDRQVlBBTWlKVWdncHp1YmtDVmlVQWNEMlQ3QXZIbVRRaEZaZ3hBZ1Q5QVNhQUFVQkJJUTluZndJcTRQRzR6QUkxVUIzSnNnYlExa05ZRjRrMmJ1RHhBaXE4Q3hXUVpZQURxcUh5bzVDVWdGb1E1akFub0N6YW9lMXFCK0R4UWtoL3FLeFlBaERGRGxpeGFpam9BQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHQuZTlkYmE3ODU3NDc0OTFhY2I3OTk4Y2JiYjc0NmY0YzYucG5nXCIsXCJoZWlnaHRcIjo3MDQsXCJ3aWR0aFwiOjEzMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUlDQVlBQUFBNEdwVkJBQUFBRjBsRVFWUjRuR1A4OSsrZklJZ1FBaEVJRnBoQWNBVUI4ekVZWllKOFlJRUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dSaWdodFZlY3Rvci4wNmQ4YTUxODc0YzE4M2VjZDkxNTdiMWU0MGNjMDAwYi5wbmdcIixcImhlaWdodFwiOjM4LFwid2lkdGhcIjo0MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBbUVsRVFWUjQyazJPUFFvQ1FReUZnNzh3S2NRRGlHQmpaVzBoMWtsamFTMmV3RnQ0RGkrUUtmUWtDbmJXZXdQdFpQeGtkMkVmUENhODc0V0pSTEtob0ZDYk03L3hSVkJPUHM3Sit0TEFCYUFLOVJMSjk5SVZZRTJoWXFQdzNyTGFMcXNmMkQ2U21SQythdWdmWVBrYjJQb3JnQm1sWnhOY0thL0lObnkxSlYrMk4wenhBMGpKVHRJVllGQy9QbUcrNDdNZzdoaUZXdThId1hCRElDUFBPM2tBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2JhcmNhLjc1ZjllMjMwYmViNzllMjgyZDdhMGYzNjlhNmU2NjZlLnBuZ1wiLFwiaGVpZ2h0XCI6MjIzLFwid2lkdGhcIjoyMDYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTgwbEVRVlI0bkFIb0FCZi9BWitGUURNU0dSd3BCZmZ3R2ZFQUFOY005YzB0K0FJUjNmbjhIODRCc3A1YWJDc09QSk1DM3ZJQUFTenpBQWZwaFFEeEJTZ0F6L2M1UUFHWW1GdzJSUUE1eVFmVjl2d0lTZlVCQmUyQUErcjdNdXdsOW1NbUFjdWtNYVFoSTBSYjUrUDEvZmNCK3dJSDhadi9HQnNBQXRUa1AzUUJwSXhXc3ZYV0FrMzlCQUQ3Q3hId0JPM21IL3NPRndFR0VpVDNnd0dOaDE1cjk3a09sQUVRQndCRFZ0TCtzWHN0QWhFNStBQWhUd3c3QVFEL0FBRzBneStRNWZJMFh4QUg4Zy95K2czcEpSN2hodTl0dlpJQm5xWXVBQjdHMGdBVlNnQVk4T3BETmpGT09yM05qSVAxNDRZQUFMbXpZa1RPNXFqUUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wcmVkQmFjay4zMmE4OTY5M2U1NjRiNjhjYTRhN2FiMWQ3ZTIxZDI0YS5wbmdcIixcImhlaWdodFwiOjcwNCxcIndpZHRoXCI6MTkxOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQURDQVlBQUFDdXlFNUlBQUFBYmtsRVFWUjRuQUZqQUp6L0FUaytWdjRVR1FzQTkvanRBUHY2K3dBREEvNEFGeGtpQVBIdTl3QzZyYVlBQVRNOFZQOG5NUzRBL1ByOUFPL3E1d0QxOE84QUhTa2xBT1RhMXdETXZNTUFBVGN6UHY0cE5oMEFHekFRQUI0WkNnRHM3ZTRBeExQdkFOZlE2QUR4OC9FQVFBOHJkU3Z2SktvQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wc2ouY2U0YWMzMTk2YjkwMTI4MGNkZGI5YjdlMTdjNDg1ZmUucG5nXCIsXCJoZWlnaHRcIjoyMjUsXCJ3aWR0aFwiOjIyNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFCQTBsRVFWUjQybU9BZ2VMSnV5S2I1K3hmMHJIdzRLejhDVHRzUVdLZDh3OHdnaVVuclRvK2QrYmFFLy9uYmp6OWYvcWFFLzhuclRqNnYyL1owUnl3Wk1PYy9TazU3UnYvRjB6ZiszdGovNXJmY3lkdi9sVStZKy8vOU5hTi81ZnR2cVREVUR4eHgyYWZ2Q1gvR1NyWC8zbFozdkgvUVBtMC93eGxhMzlIbEN6LzM3L3NhQWxEOWVTZGErWHlsdjgvdG1Ecjc5c05QZjhmOWM3NHYzRGExbDhtQmN2L3oxeDlQSjlod3RJakFXR05HLzdQbjdENWYvSEVkYituek56OHE2MWwzZitVN3EzZkRweStvOEFBZHUzQ2d6V3gzZHYreHpScytKL1l0ZTEvN3VSZDMrZXNPeG5JZ0F6bXJqbHUycmxnZjFYZm9vTkZtL2RlQXV2TTc5ck1CQUE0QkltNkhHbmlBd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9zbGlkZUJhY2suYjA5YjViMjQzZjI3N2Q4ZmE3MTQyMWY3ZjEzMjQ1MjgucG5nXCIsXCJoZWlnaHRcIjozMjQsXCJ3aWR0aFwiOjM3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBMWtsRVFWUjQyZzNGdjA3Q1FCekE4ZS92dkJac3pzU2dSVVVUNHAvQnljVGRKM0QzZ1h3WEZ4Tk5qSXZQb0tNREN3TWhKQ0tJQWRyU2NvWGV3V2Y1eVAzajA5ZnB2cEc3YUk0TzRmcWlTZXM0WnJYTUtKM3lTa1NybjJKYlBaRHZ6dytaSkxuWWxaTXMrUmNkN2lyZEdhUytoeU9hRHJocTMvTDg5ZzZxb25sNFFqSjVSZmRtS1ppUWREaWtQL29qYXJUWXFkVVkyUW9iSEtIYm5SZCt4NWE5aHh2T0xzK3BoeEVDZUlRaUQ5RHh3VmhpNDdGaGwrNjhqemdRQmV1eXhPWWwyalJNWmJNSzVZVDF3dU8zNDhFV3duTGgyUURGS2xkWm42eUExZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJvd0xlZnRcIjogXCJBcnJvd19hcnJvd0xlZnRfXzFIdmlqXCIsXG5cdFwiYXJyb3dSaWdodFwiOiBcIkFycm93X2Fycm93UmlnaHRfXzEwck51XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJHYW1lUnVsZXNfY29udGFpbmVyX18zOGVsZVwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJHYW1lUnVsZXNfdHJhbnNpdGlvbl9fM1JMWlNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2luYXRpb25fY29udGFpbmVyX18zaWNYZ1wiLFxuXHRcInJvdW5kXCI6IFwiUGFnaW5hdGlvbl9yb3VuZF9fMzZ5ZnlcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fMk1pUk5cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2VQYXJ0aWNhbGVzX2NvbnRhaW5lcl9fM2Vwc3NcIixcblx0XCJ0aXRsZVwiOiBcIlBhZ2VQYXJ0aWNhbGVzX3RpdGxlX19VcEV5TlwiLFxuXHRcImJvZHlcIjogXCJQYWdlUGFydGljYWxlc19ib2R5X18xaE5BRlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU2xpZGVQYWdlc19jb250YWluZXJfXzNaaTFFXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIZWFkZXJfY29udGFpbmVyX18zWmRtY1wiLFxuXHRcInRpdGxlXCI6IFwiSGVhZGVyX3RpdGxlX19aUko4OVwiLFxuXHRcImJ1dHRvbnNcIjogXCJIZWFkZXJfYnV0dG9uc19fMTd2ZmJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk1hdGNoZXNfY29udGFpbmVyX18yS2EyelwiLFxuXHRcImNvbnRlbnRcIjogXCJNYXRjaGVzX2NvbnRlbnRfXzFQUV9FXCIsXG5cdFwiaW5fc2VwZXJldGVfcGFnZVwiOiBcIk1hdGNoZXNfaW5fc2VwZXJldGVfcGFnZV9fMi1fRnBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFycm93TGVmdFwiOiBcIkFycm93X2Fycm93TGVmdF9fM0d0QTRcIixcblx0XCJhcnJvd1JpZ2h0XCI6IFwiQXJyb3dfYXJyb3dSaWdodF9fMzMyOWxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2luYXRpb25fY29udGFpbmVyX18yc3hMeFwiLFxuXHRcInJvdW5kXCI6IFwiUGFnaW5hdGlvbl9yb3VuZF9fMWRJbFJcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fM1hJU3NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRETWF0Y2hlc0JvYXJkX2NvbnRhaW5lcl9fMlBKcmFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRNTWF0Y2hlc0JvYXJkX2NvbnRhaW5lcl9fMmRzSEhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlJvd19jb250YWluZXJfXzFXQk9oXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJSb3dEZXNjcmlwdGlvbl9jb250YWluZXJfXzIxOXQtXCIsXG5cdFwiY29udGVudFwiOiBcIlJvd0Rlc2NyaXB0aW9uX2NvbnRlbnRfXzJTZVhVXCIsXG5cdFwiZGF0ZV9nYW1lTlN0YXJ0ZWRfY29udGVudFwiOiBcIlJvd0Rlc2NyaXB0aW9uX2RhdGVfZ2FtZU5TdGFydGVkX2NvbnRlbnRfXzFNcUVKXCIsXG5cdFwiZGF0ZV9nYW1lU3RhcnRlZF9jb250ZW50XCI6IFwiUm93RGVzY3JpcHRpb25fZGF0ZV9nYW1lU3RhcnRlZF9jb250ZW50X18zR19aMlwiLFxuXHRcInRlYW1zXCI6IFwiUm93RGVzY3JpcHRpb25fdGVhbXNfXzI3VlBPXCIsXG5cdFwidGVhbU9uZVwiOiBcIlJvd0Rlc2NyaXB0aW9uX3RlYW1PbmVfX1RQSWthXCIsXG5cdFwic2NvcmVcIjogXCJSb3dEZXNjcmlwdGlvbl9zY29yZV9fMzhTVkZcIixcblx0XCJ0ZWFtVHdvXCI6IFwiUm93RGVzY3JpcHRpb25fdGVhbVR3b19fM21hZDJcIixcblx0XCJidXlCdXR0b25fY29udGFpbmVyXCI6IFwiUm93RGVzY3JpcHRpb25fYnV5QnV0dG9uX2NvbnRhaW5lcl9fM3JDTmtcIixcblx0XCJidXR0b25fY29udGVudFwiOiBcIlJvd0Rlc2NyaXB0aW9uX2J1dHRvbl9jb250ZW50X18xMndVUFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUm93VGl0bGVfY29udGFpbmVyX19EV1o1TFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX2NvbnRhaW5lcl9fMmRBcWVcIixcblx0XCJuYW1lXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX25hbWVfXzJuU25JXCIsXG5cdFwiZGF0ZVwiOiBcIkRheUNoYW5nZUJ1dHRvbl9kYXRlX18zLU1XOFwiLFxuXHRcImFjdGl2ZV9uYW1lXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX2FjdGl2ZV9uYW1lX18zMTVzUFwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJEYXlDaGFuZ2VCdXR0b25fdHJhbnNpdGlvbl9fMVRGZzNcIixcblx0XCJhY3RpdmVfZGF0ZVwiOiBcIkRheUNoYW5nZUJ1dHRvbl9hY3RpdmVfZGF0ZV9fT0JlYURcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRNSGVhZGVyX2NvbnRhaW5lcl9fMnNmOEtcIixcblx0XCJjb250ZW50XCI6IFwiVE1IZWFkZXJfY29udGVudF9fMjNRdVlcIixcblx0XCJ0aXRsZVwiOiBcIlRNSGVhZGVyX3RpdGxlX18zdTl6R1wiLFxuXHRcImRheV9jaGFuZ2VfYnV0dG9uc1wiOiBcIlRNSGVhZGVyX2RheV9jaGFuZ2VfYnV0dG9uc19fM3FvWXBcIixcblx0XCJjYWxlbmRhclwiOiBcIlRNSGVhZGVyX2NhbGVuZGFyX18yV0FoX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVG9kYXlNYXRjaGVzX2NvbnRhaW5lcl9fM3hjZlRcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiVG9kYXlNYXRjaGVzX3RyYW5zaXRpb25fXzFkaXZyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJOZXdzX2NvbnRhaW5lcl9fc2xQS19cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNsaWRlX2NvbnRhaW5lcl9fUXpaQndcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFycm93TGVmdFwiOiBcIkFycm93X2Fycm93TGVmdF9fMjJNUmpcIixcblx0XCJhcnJvd1JpZ2h0XCI6IFwiQXJyb3dfYXJyb3dSaWdodF9fZnBMcENcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk1jb250YWluZXJcIjogXCJJdGVtTW9kYWxfTWNvbnRhaW5lcl9fMVlrTWdcIixcblx0XCJNY29udGVudFwiOiBcIkl0ZW1Nb2RhbF9NY29udGVudF9fMnJ2QnhcIixcblx0XCJjb250YWluZXJcIjogXCJJdGVtTW9kYWxfY29udGFpbmVyX18xakVsYVwiLFxuXHRcImltZ19jb250ZW50XCI6IFwiSXRlbU1vZGFsX2ltZ19jb250ZW50X19LSWhkblwiLFxuXHRcImRlc2NyaXB0aW9uX2NvbnRlbnRcIjogXCJJdGVtTW9kYWxfZGVzY3JpcHRpb25fY29udGVudF9fMTZWVnZcIixcblx0XCJ0aXRsZVwiOiBcIkl0ZW1Nb2RhbF90aXRsZV9fMi1XcDRcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkl0ZW1Nb2RhbF9kZXNjcmlwdGlvbl9faFJHcUdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkl0ZW1fY29udGFpbmVyX18zdHEySlwiLFxuXHRcInRvcExpbmVzXCI6IFwiSXRlbV90b3BMaW5lc19fMW9Oa1dcIixcblx0XCJsaW5lT25lXCI6IFwiSXRlbV9saW5lT25lX181YVhNOVwiLFxuXHRcImxpbmVUd29cIjogXCJJdGVtX2xpbmVUd29fXzFVVUF0XCIsXG5cdFwiY29udGVudFwiOiBcIkl0ZW1fY29udGVudF9fMllnZDJcIixcblx0XCJib3R0b21MaW5lc1wiOiBcIkl0ZW1fYm90dG9tTGluZXNfXzNVQ2NiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYWdpbmF0aW9uX2NvbnRhaW5lcl9fMXJZMkhcIixcblx0XCJyb3VuZFwiOiBcIlBhZ2luYXRpb25fcm91bmRfXzFMWlRFXCIsXG5cdFwiYWN0aXZlXCI6IFwiUGFnaW5hdGlvbl9hY3RpdmVfXzNJRmdoXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQcmVkaWN0aW9uX2NvbnRhaW5lcl9fMzJiVWxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFycm93TGVmdFwiOiBcIkFycm93X2Fycm93TGVmdF9fMW4yR2xcIixcblx0XCJhcnJvd1JpZ2h0XCI6IFwiQXJyb3dfYXJyb3dSaWdodF9fTlpON1dcIixcblx0XCJhcnJvd1JpZ2h0VmVjdG9yXCI6IFwiQXJyb3dfYXJyb3dSaWdodFZlY3Rvcl9fM3p4TGxcIixcblx0XCJhcnJvd0xlZnRWZWN0b3JcIjogXCJBcnJvd19hcnJvd0xlZnRWZWN0b3JfX1U2RlNxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJJdGVtX2NvbnRhaW5lcl9fVGFvNUVcIixcblx0XCJjb250ZW50XCI6IFwiSXRlbV9jb250ZW50X18ydFlIRlwiLFxuXHRcInRvcFwiOiBcIkl0ZW1fdG9wX19XMnJCMFwiLFxuXHRcInRlYW1cIjogXCJJdGVtX3RlYW1fXzNHWjg0XCIsXG5cdFwidGltZXJfY29udGFpbmVyXCI6IFwiSXRlbV90aW1lcl9jb250YWluZXJfXzJnNXBiXCIsXG5cdFwidGltZXJcIjogXCJJdGVtX3RpbWVyX19DaDY1OFwiLFxuXHRcImJvdHRvbVwiOiBcIkl0ZW1fYm90dG9tX19nQ0ZyaFwiLFxuXHRcImJ1dHRvbnNcIjogXCJJdGVtX2J1dHRvbnNfXzFCcXd0XCIsXG5cdFwicHJlZGljdGlvbl9idXR0b25fY29udGFpbmVyXCI6IFwiSXRlbV9wcmVkaWN0aW9uX2J1dHRvbl9jb250YWluZXJfXzN4YmpPXCIsXG5cdFwicHJlZGljdGlvbl9idXR0b25fY29udGVudFwiOiBcIkl0ZW1fcHJlZGljdGlvbl9idXR0b25fY29udGVudF9fMVc4dkhcIixcblx0XCJidXlfYnV0dG9uX2NvbnRhaW5lclwiOiBcIkl0ZW1fYnV5X2J1dHRvbl9jb250YWluZXJfX25QcG9fXCIsXG5cdFwiYnV5X2J1dHRvbl9jb250ZW50XCI6IFwiSXRlbV9idXlfYnV0dG9uX2NvbnRlbnRfXzVQRXpnXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQcmVkaWN0aW9uTW9kYWxfY29udGFpbmVyX18yWWktZFwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJQcmVkaWN0aW9uTW9kYWxfdHJhbnNpdGlvbl9fdy1DdmZcIixcblx0XCJjb250ZW50XCI6IFwiUHJlZGljdGlvbk1vZGFsX2NvbnRlbnRfXzFZNlpGXCIsXG5cdFwidG9wXCI6IFwiUHJlZGljdGlvbk1vZGFsX3RvcF9fMS1uM3pcIixcblx0XCJ0ZWFtXCI6IFwiUHJlZGljdGlvbk1vZGFsX3RlYW1fXzFWWURFXCIsXG5cdFwidnNcIjogXCJQcmVkaWN0aW9uTW9kYWxfdnNfXzMxaWJOXCIsXG5cdFwiYm90dG9tXCI6IFwiUHJlZGljdGlvbk1vZGFsX2JvdHRvbV9fR1Zrd0JcIixcblx0XCJwcmVkaWN0aW9uXCI6IFwiUHJlZGljdGlvbk1vZGFsX3ByZWRpY3Rpb25fXzNWdFBqXCIsXG5cdFwib3JkaW5hclwiOiBcIlByZWRpY3Rpb25Nb2RhbF9vcmRpbmFyX18yS2lMRlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUHJkZWljdGlvblNsaWRlX2NvbnRhaW5lcl9fMTJNU0NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkJ1dHRvbl9jb250YWluZXJfXzQ1S3lEXCIsXG5cdFwiY29udGVudFwiOiBcIkJ1dHRvbl9jb250ZW50X18xNEZsVVwiLFxuXHRcImFjdGl2ZVwiOiBcIkJ1dHRvbl9hY3RpdmVfXzFNRGc1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJvd0xlZnRcIjogXCJBcnJvd19hcnJvd0xlZnRfXzFYemJKXCIsXG5cdFwiYXJyb3dSaWdodFwiOiBcIkFycm93X2Fycm93UmlnaHRfXzIwYUk1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJGZWVkQmFja19jb250YWluZXJfXzJjQ0xXXCIsXG5cdFwidG9wXCI6IFwiRmVlZEJhY2tfdG9wX18ySWhxalwiLFxuXHRcImF2YXRhclwiOiBcIkZlZWRCYWNrX2F2YXRhcl9fM0MwMGNcIixcblx0XCJyYXRlaW5nXCI6IFwiRmVlZEJhY2tfcmF0ZWluZ19fMXZpSE9cIixcblx0XCJib3R0b21cIjogXCJGZWVkQmFja19ib3R0b21fXzNMa3JqXCIsXG5cdFwiYm90dG9tX2NvbnRlbnRcIjogXCJGZWVkQmFja19ib3R0b21fY29udGVudF9fM3VKb29cIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkZlZWRCYWNrX2Rlc2NyaXB0aW9uX18xM19IblwiLFxuXHRcImRhdGVfbGlrZXNfY29udGFpbmVyXCI6IFwiRmVlZEJhY2tfZGF0ZV9saWtlc19jb250YWluZXJfX1BYa2R4XCIsXG5cdFwiZGF0ZVwiOiBcIkZlZWRCYWNrX2RhdGVfXzI4Y2dVXCIsXG5cdFwidmVydGljYWxfYm9yZGVyXCI6IFwiRmVlZEJhY2tfdmVydGljYWxfYm9yZGVyX180SkxiV1wiLFxuXHRcImxpa2VzX2Rpc2xpa2VzXCI6IFwiRmVlZEJhY2tfbGlrZXNfZGlzbGlrZXNfXzNUQV9EXCIsXG5cdFwibGlrZVwiOiBcIkZlZWRCYWNrX2xpa2VfX19UaUlyXCIsXG5cdFwiZGlzTGlrZVwiOiBcIkZlZWRCYWNrX2Rpc0xpa2VfX2RUaDBmXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMaWtlRGlzbGlrZURyb3BfY29udGFpbmVyX18xQ1c3NlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJMaWtlRGlzbGlrZURyb3BfdHJhbnNpdGlvbl9fbHhadFNcIixcblx0XCJjb250ZW50XCI6IFwiTGlrZURpc2xpa2VEcm9wX2NvbnRlbnRfXzlZXzFlXCIsXG5cdFwicm93XCI6IFwiTGlrZURpc2xpa2VEcm9wX3Jvd19fMUlMNEFcIixcblx0XCJhdmF0YXJcIjogXCJMaWtlRGlzbGlrZURyb3BfYXZhdGFyX184SXo0elwiLFxuXHRcInVzZXJfcGFydFwiOiBcIkxpa2VEaXNsaWtlRHJvcF91c2VyX3BhcnRfXzJjeTk4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMZWF2ZUNvbW1lbnRfY29udGFpbmVyX18yaXM2ZlwiLFxuXHRcInN0YXJzX2NvbnRhaW5lclwiOiBcIkxlYXZlQ29tbWVudF9zdGFyc19jb250YWluZXJfXzNvdWtqXCIsXG5cdFwic3RhcnNfY29udGVudFwiOiBcIkxlYXZlQ29tbWVudF9zdGFyc19jb250ZW50X18yNXZGQVwiLFxuXHRcInN0YXJzX2FyZWFcIjogXCJMZWF2ZUNvbW1lbnRfc3RhcnNfYXJlYV9fWE5hSU5cIixcblx0XCJ0ZXh0YXJlYV9jb250YWluZXJcIjogXCJMZWF2ZUNvbW1lbnRfdGV4dGFyZWFfY29udGFpbmVyX18zOHdHM1wiLFxuXHRcImJ1dHRvbl9jb250YWluZXJcIjogXCJMZWF2ZUNvbW1lbnRfYnV0dG9uX2NvbnRhaW5lcl9fMm1PbmZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2luYXRpb25fY29udGFpbmVyX19PVV9aUlwiLFxuXHRcInJvdW5kXCI6IFwiUGFnaW5hdGlvbl9yb3VuZF9fM2JoZVZcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fMkNmYnZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNvcnRpbmdfY29udGFpbmVyX18yTGh2OFwiLFxuXHRcIm5hbWVcIjogXCJTb3J0aW5nX25hbWVfXzNzb1E4XCIsXG5cdFwiYmFyXCI6IFwiU29ydGluZ19iYXJfXzFtYkhEXCIsXG5cdFwiYnlEYXRlXCI6IFwiU29ydGluZ19ieURhdGVfXzNfQnotXCIsXG5cdFwiYWN0aXZlXCI6IFwiU29ydGluZ19hY3RpdmVfXzNhMWFMXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJUZXN0aW1vbmlhbHNfY29udGFpbmVyX18zTEFyUFwiLFxuXHRcImZlZWRfYmFja3NfY29udGFpbmVyXCI6IFwiVGVzdGltb25pYWxzX2ZlZWRfYmFja3NfY29udGFpbmVyX18zOTVoa1wiLFxuXHRcImNhcm91c2VsXCI6IFwiVGVzdGltb25pYWxzX2Nhcm91c2VsX18ycnJWVlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVGl0bGVfY29udGFpbmVyX18xZzMtZ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW9kYWxDb250ZWluZXJcIjogXCJNb2RhbF9tb2RhbENvbnRlaW5lcl9fM2c4SWZcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiTW9kYWxfdHJhbnNpdGlvbl9fMWtmdjlcIixcblx0XCJtb2RhbENvbnRlbnRcIjogXCJNb2RhbF9tb2RhbENvbnRlbnRfXzEtTzQ3XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNhbGVuZGFyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10aW1lci1ob29rXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==