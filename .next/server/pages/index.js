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
  body: `
                Здравствуйте! Что нужно делать чтобы всегда выходить с плюсом ☝️
                1. На каждый матч ставим по 10% из банка ( если у вас на счету есть 10000 рублей, то на каждый матч нужно ставить по 1000 рублей, не важно насколько банк поднимается или снижается, нужно ставить по 1000 рублей в любом случаи ) 
                2. Самое важное играть по правилам ( во основном игроки 99% проигрывают, почему? Потому что они не соблюдают правила игры , начинают сами делать свои прогнозы, что и разрушает всю систему прогнозов! Соблюдайте за правилами и поднимайте Ваш банк! Удачных вам ставок🤝
            `
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

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.jsx":
/*!***************************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.jsx ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificDayMatchesBoard": function() { return /* binding */ SpecificDayMatchesBoard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _SpecificDayMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SpecificDayMatchesBoard.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss");
/* harmony import */ var _SpecificDayMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_SpecificDayMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Row_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Row/Row */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.jsx");
/* harmony import */ var _common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Row/RowTitle/RowTitle */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.jsx");
/* harmony import */ var _TDMatchesBoard_Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TDMatchesBoard/Arrows/Arrow */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.jsx");
/* harmony import */ var _TDMatchesBoard_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TDMatchesBoard/Pagination/Pagination */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.jsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../lib/request-destinations */ "./lib/request-destinations.js");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\SpecificDayMatchesBoard\\SpecificDayMatchesBoard.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks
 // styles

 // components












function createDayWithSpecificFormat(day) {
  let d = new Date(day);
  let ye = new Intl.DateTimeFormat("en", {
    year: "numeric"
  }).format(d);
  let mo = new Intl.DateTimeFormat("en", {
    month: "2-digit"
  }).format(d);
  let da = new Intl.DateTimeFormat("en", {
    day: "2-digit"
  }).format(d);
  return `${da}.${mo}.${ye}`;
}

function SpecificDayMatchesBoard({
  day
}) {
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
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_9__.request)((0,_lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__.GET_MATCHES_OF_SPECIFIC_DAY)(createDayWithSpecificFormat(day)), {}, {
      auth: true
    }).then(matches => {
      const now = Date.now();
      setMatches(matches.data.data.map(match => {
        const matchTime = new Date(`${match.date.split(`.`).reverse().join(`.`)} ${match.time}`).getTime();
        const gameState = now < matchTime ? `dontStarted` : Math.abs(now - matchTime) < 9000000 ? "started" : "finished";
        return {
          id: match.id,
          date: match.date,
          time: match.time,
          gameState: `.rowOne.gameState.${gameState}`,
          teamOneName: match.teamOneName,
          teamOneIcon: match.team1_img_path,
          teamTwoName: match.teamTwoName,
          teamTwoIcon: match.team2_img_path,
          score: match.score,
          buyButtonName: ".rowOne.buyButton",
          coefficent: match.coefficent,
          titleName: ".rowOne.title"
        };
      }));
    }).catch(err => {
      console.log(err);
    });
  }, [day]);

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
    className: (_SpecificDayMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),
    enableSwipe: false // verticalMode
    ,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
        onDragEnd: handleOnDragEndFirstPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
          droppableId: "matchestodayMatchesFirst",
          children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [firstPageItems.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: "100%"
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
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 25
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 23
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 19
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
        onDragEnd: handleOnDragEndSecondPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
          droppableId: "matchestodayMatchesSecond",
          children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [secondPageItems.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: "100%"
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
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 25
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 23
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 19
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
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
    const d = new Date();
    const date = `${(d.getDate() + '').padStart(2, '0')}.${(d.getMonth() + 1 + '').padStart(2, '0')}.${d.getFullYear()}`;
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_9__.request)((0,_lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__.GET_MATCHES_OF_SPECIFIC_DAY)(date), {}, {
      auth: true
    }).then(matches => {
      const now = Date.now();
      setMatches(matches.data.data.map(match => {
        const matchTime = new Date(`${match.date.split(`.`).reverse().join(`.`)} ${match.time}`).getTime();
        const gameState = now < matchTime ? `dontStarted` : Math.abs(now - matchTime) < 9000000 ? "started" : "finished";
        return {
          id: match.id,
          date: match.date,
          time: match.time,
          gameState: `.rowOne.gameState.${gameState}`,
          teamOneName: match.teamOneName,
          teamOneIcon: match.team1_img_path,
          teamTwoName: match.teamTwoName,
          teamTwoIcon: match.team2_img_path,
          score: match.score,
          buyButtonName: ".rowOne.buyButton",
          coefficent: match.coefficent,
          titleName: ".rowOne.title"
        };
      }));
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
    renderArrow: _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__.Arrow,
    renderPagination: _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__.Pagination,
    className: (_TDMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),
    enableSwipe: false // verticalMode
    ,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
        onDragEnd: handleOnDragEndFirstPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
          droppableId: "matchestodayMatchesFirst",
          children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [firstPageItems.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: "100%"
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
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 25
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 23
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 19
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
        onDragEnd: handleOnDragEndSecondPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
          droppableId: "matchestodayMatchesSecond",
          children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [secondPageItems.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: "100%"
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
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 25
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 23
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 19
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
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
    const d = new Date();
    d.setDate(d.getDate() + 1);
    const date = `${(d.getDate() + '').padStart(2, '0')}.${(d.getMonth() + 1 + '').padStart(2, '0')}.${d.getFullYear()}`;
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_9__.request)((0,_lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__.GET_MATCHES_OF_SPECIFIC_DAY)(date), {}, {
      auth: true
    }).then(matches => {
      const now = Date.now();
      setMatches(matches.data.data.map(match => {
        const matchTime = new Date(`${match.date.split(`.`).reverse().join(`.`)} ${match.time}`).getTime();
        const gameState = now < matchTime ? `dontStarted` : Math.abs(now - matchTime) < 9000000 ? "started" : "finished";
        return {
          id: match.id,
          date: match.date,
          time: match.time,
          gameState: `.rowOne.gameState.${gameState}`,
          teamOneName: match.teamOneName,
          teamOneIcon: match.team1_img_path,
          teamTwoName: match.teamTwoName,
          teamTwoIcon: match.team2_img_path,
          score: match.score,
          buyButtonName: ".rowOne.buyButton",
          coefficent: match.coefficent,
          titleName: ".rowOne.title"
        };
      }));
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
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
        onDragEnd: handleOnDragEndFirstPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
          droppableId: "matchestodayMatchesFirst",
          children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [firstPageItems.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: "100%"
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
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 25
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 23
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 19
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
        onDragEnd: handleOnDragEndSecondPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
          droppableId: "matchestodayMatchesSecond",
          children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [secondPageItems.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: "100%"
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
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 25
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 23
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 19
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
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
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()("home"),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`),
        gameStarted = gameState.slice(gameState.lastIndexOf(".") + 1) === "started";

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
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: ["\xA0", translate(gameState)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teams),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamOne),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: teamOne
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: teamOneIcon,
            alt: teamOne
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().score),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: score
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamTwo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: teamTwoIcon,
            alt: teamTwo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: teamTwo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buyButton_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_RowDescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button_content),
          onClick: clickBuy,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: translate(buyButtonName)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
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
  TMBoardState,
  getSpecificDateMatches
}) {
  const // functions
  // get_date value changes y_d => yesterday, t_d => today, t_w =>tomorrow
  get_date = value => {
    let date = new Date(),
        day = null,
        month = date.getMonth() + 1,
        year = date.getFullYear();

    switch (value) {
      case "t_d":
        day = date.getDate();
        break;

      case "t_m":
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
        page: "home",
        locationInPage: "matches",
        textPathName: ".TM.headerTitle",
        classes: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8___default().day_change_buttons),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DayChangeButton_DayChangeButton__WEBPACK_IMPORTED_MODULE_3__.DayChangeButton, {
          name: ".TM.headerButtons.today",
          locationInMainPage: "matches",
          date: get_date("t_d"),
          active: TDBoardState ? "show" : null,
          click: clickTD
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DayChangeButton_DayChangeButton__WEBPACK_IMPORTED_MODULE_3__.DayChangeButton, {
          name: ".TM.headerButtons.tomorrow",
          locationInMainPage: "matches",
          date: get_date("t_m"),
          active: TMBoardState ? "show" : null,
          click: clickTM
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8___default().calendar),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: _public_images_main_matches_Calendar_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
          alt: "calendar-icon",
          onClick: () => setShowCalendar(!showCalendar)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_TMHeader_module_scss__WEBPACK_IMPORTED_MODULE_8___default().calendar_body),
        children: showCalendar && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_calendar__WEBPACK_IMPORTED_MODULE_4___default()), {
          showNeighboringMonth: false,
          showWeekNumbers: false,
          nextLabel: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_main_matches_arrowRight_png__WEBPACK_IMPORTED_MODULE_6__.default.src
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 26
          }, this),
          prevLabel: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_main_matches_arrowLeft_png__WEBPACK_IMPORTED_MODULE_7__.default.src
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 26
          }, this),
          onChange: value => {
            getSpecificDateMatches(value);
            setShowCalendar(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
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
/* harmony import */ var _TMBody_SpecificDayMatchesBoard_SpecificDayMatchesBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard */ "./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.jsx");
/* harmony import */ var _TMBody_TDMatchesBoard_TDMatchesBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TMBody/TDMatchesBoard/TDMatchesBoard */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.jsx");
/* harmony import */ var _TMBody_TMMatchesBoard_TMMatchesBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TMBody/TMMatchesBoard/TMMatchesBoard */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.jsx");
/* harmony import */ var _TMHeader_TMHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TMHeader/TMHeader */ "./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.jsx");
/* harmony import */ var _TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodayMatches.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TodayMatches.module.scss");
/* harmony import */ var _TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TodayMatches.jsx";
// hooks and helpers

 // components



 // styles


function TodayMatches({
  getSpecificDateMatches
}) {
  const // states
  {
    0: showTodayGames,
    1: setShowTodayGames
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
        {
    0: showTomorrowGames,
    1: setShowTomorrowGames
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
        {
    0: showSpecificDayMatches,
    1: setShowSpecificDayMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: specificMatchDay,
    1: setSpecificMatchDay
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMHeader_TMHeader__WEBPACK_IMPORTED_MODULE_5__.TMHeader // TD => today games board shopw configs
    , {
      clickTD: () => {
        setShowTomorrowGames(false);
        setShowSpecificDayMatches(false);
        setShowTodayGames(true);
      },
      TDBoardState: showTodayGames // TM => tommorow games board shopw configs
      ,
      clickTM: () => {
        setShowTodayGames(false);
        setShowSpecificDayMatches(false);
        setShowTomorrowGames(true);
      },
      TMBoardState: showTomorrowGames,
      getSpecificDateMatches: value => {
        setShowTodayGames(false);
        setShowTomorrowGames(false);
        setSpecificMatchDay(value);
        setShowSpecificDayMatches(true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), showSpecificDayMatches && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_SpecificDayMatchesBoard_SpecificDayMatchesBoard__WEBPACK_IMPORTED_MODULE_2__.SpecificDayMatchesBoard, {
      day: specificMatchDay
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), showTodayGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TDMatchesBoard_TDMatchesBoard__WEBPACK_IMPORTED_MODULE_3__.TDMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 26
    }, this), showTomorrowGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TMMatchesBoard_TMMatchesBoard__WEBPACK_IMPORTED_MODULE_4__.TMMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
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

  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()("home"),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`),
        {
    0: showPrediction,
    1: setShowPrediction
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
        {
    0: gameStarted,
    1: setGameStarted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function goToPredictions() {
    // setShowPrediction(!showPrediction);
    router.push(`/prediction`);
  }

  console.log(expiryTimestamp);
  let start = new Date().getTime();
  let end = new Date(expiryTimestamp).getTime();
  let time = new Date();
  time.setSeconds(time.getSeconds() + (end - start) / 1000);
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
              lineNumber: 50,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamOneName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: gameStarted ? `Игра начался ` : `Игра начинается через`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timer_Timer__WEBPACK_IMPORTED_MODULE_3__.Timer, {
              expiryTimestamp: time,
              timeClass: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().timer),
              timeOut: () => setGameStarted(true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().team),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamTwoIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: teamTwoName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), showPrediction && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PredictionModal_PredictionModal__WEBPACK_IMPORTED_MODULE_4__.PredictionModal, {
            teamOneName: teamOneName,
            teamTwoName: teamTwoName,
            teamOneIcon: teamOneIcon,
            teamTwoIcon: teamTwoIcon,
            prediction: prediction,
            ordinar: ordinar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
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
                  lineNumber: 83,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buy_button_container),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_Item_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buy_button_content),
                onClick: clickBuy,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: translate(buyButtonName)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
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
  timeClass,
  timeOut
}) {
  const {
    seconds,
    minutes,
    hours,
    days
  } = (0,react_timer_hook__WEBPACK_IMPORTED_MODULE_2__.useTimer)({
    expiryTimestamp,
    onExpire: () => timeOut()
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: timeClass,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: hours < 10 ? "0" + hours : days ? days * 24 + hours : hours
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), ":", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: minutes < 10 ? "0" + minutes : minutes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 10
      }, this), ":", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: seconds < 10 ? "0" + seconds : seconds
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
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
          teamOneName: "",
          teamOneIcon: item[`team1_img_path`],
          teamTwoName: "",
          teamTwoIcon: item[`team2_img_path`],
          prediction: {
            thereIs: false,
            totalBet: "тб 1,5 / ",
            coefficent: "коеф 3,5"
          },
          type: item.type,
          date: item.date,
          time: item.time,
          coefficent: item.factor,
          predictionButtonName: ".slide.pred_button",
          buyButtonName: ".slide.buy_button",
          predictionText: "Фулхем тб 1,5 / коэф 3,5",
          ordinarText: `${item.type} / ${item.price}руб.`,
          price: item.price + " руб."
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
        locationInMainPage: "prediction",
        expiryTimestamp: `${el.date.split(`.`).reverse().join(`.`)} ${el.time}`,
        prediction: el.predictionText,
        ordinar: el.ordinarText,
        clickBuy: () => router.push({
          pathname: "/prediction",
          query: {
            game: el.id
          }
        })
      }, Math.random(), false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
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
/* harmony import */ var _LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LeaveComment.module.scss */ "./components/Pages/common/Testimonials/LeaveComment/LeaveComment.module.scss");
/* harmony import */ var _LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/filledStar.png */ "./public/images/main/feedbacks/filledStar.png");
/* harmony import */ var _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/unfilledStar.png */ "./public/images/main/feedbacks/unfilledStar.png");
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_LoadingButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/LoadingButton */ "./components/common/LoadingButton.jsx");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\LeaveComment\\LeaveComment.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks and helpers




 // styles

 // icons








function LeaveComment({
  matchId
}) {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const commentBoxRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);

  const // states consts
  stars = [0, 1, 2, 3, 4],
        {
    0: simulator,
    1: setSimulator
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),
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
  });

  const submit = async data => {
    if (matchId) {
      try {
        setLoading(true);
        await (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_8__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_9__.ADD_FEEDBACK, {
          comment: data.comment,
          stars: simulator,
          matchId
        }, {
          auth: true
        });
        if (commentBoxRef.current) commentBoxRef.current.value = "";
      } catch (err) {
        var _err$response$data;

        (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)(((_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || `Невозможно добавить отзыв`, {
          type: `error`
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_12___default().stars_container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_12___default().stars_content),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_12___default().stars_area),
          children: stars.map(el => simulator > el ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_6__.default.src,
            alt: "",
            onClick: () => setSimulator(el)
          }, (el + 1) * Math.random(), false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 38
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_7__.default.src,
            alt: "",
            onClick: () => setSimulator(el + 1)
          }, (el + 1) * Math.random(), false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 38
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit(submit),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_12___default().textarea_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", _objectSpread(_objectSpread({}, register('comment')), {}, {
          id: "comment",
          cols: "30",
          rows: "7",
          ref: commentBoxRef,
          placeholder: translate('placeHolder')
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_12___default().button_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_LoadingButton__WEBPACK_IMPORTED_MODULE_11__.default, {
          loading: loading,
          children: translate('send')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_10__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LeaveComment_LeaveComment__WEBPACK_IMPORTED_MODULE_8__.LeaveComment, {
          matchId: matchId
        }, void 0, false, {
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
        translate = key => t(`${locationInPage}${key}`);

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
        lineNumber: 23,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: textStyles,
      classes: classes,
      children: translate(`${textPathName}`)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/common/LoadingButton.jsx":
/*!*********************************************!*\
  !*** ./components/common/LoadingButton.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoadingButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\common\\LoadingButton.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function LoadingButton(_ref) {
  let {
    loading,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["loading", "children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", _objectSpread(_objectSpread({}, props), {}, {
    type: "submit",
    style: {
      position: 'relative',
      opacity: loading ? '0.5' : '1',
      pointerEvents: loading ? `none` : `unset`
    },
    children: [children, loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        position: `absolute`,
        top: `15px`,
        left: `80px`
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default()), {
        type: "Puff",
        color: "#00BFFF",
        height: 30,
        width: 30,
        timeout: 3000 //3 secs

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
/* harmony export */   "GET_MATCHES_OF_SPECIFIC_DAY": function() { return /* binding */ GET_MATCHES_OF_SPECIFIC_DAY; },
/* harmony export */   "GET_MATCHES_OF_NEXT_DAY": function() { return /* binding */ GET_MATCHES_OF_NEXT_DAY; },
/* harmony export */   "GET_PREDICTIONS": function() { return /* binding */ GET_PREDICTIONS; },
/* harmony export */   "GET_FEEDBACK": function() { return /* binding */ GET_FEEDBACK; },
/* harmony export */   "GET_MATCHES_BY_TYPE": function() { return /* binding */ GET_MATCHES_BY_TYPE; },
/* harmony export */   "ADD_FEEDBACK": function() { return /* binding */ ADD_FEEDBACK; },
/* harmony export */   "GET_STATISTICS": function() { return /* binding */ GET_STATISTICS; }
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
const GET_MATCHES_OF_SPECIFIC_DAY = day => ({
  url: ACCOUNT_URL + `match-of-the-day?date=${day}`,
  method: `get`
});
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
const GET_STATISTICS = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + `admin/statistics`,
  method: `get`
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

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss":
/*!***********************************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss ***!
  \***********************************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SpecificDayMatchesBoard_container__1dAaS"
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

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-loader-spinner");;

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

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01haW4uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL0Fycm93cy9BcnJvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvR2FtZVJ1bGVzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL1NsaWRlUGFnZS9QYWdlUGFyZXRpY2xlcy9QYWdlUGFyZXRpY2xlcy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvU2xpZGVQYWdlL1NsaWRlUGFnZXMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL2dhbWVfcnVsZXMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL01hdGNoZXMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9TcGVjaWZpY0RheU1hdGNoZXNCb2FyZC9TcGVjaWZpY0RheU1hdGNoZXNCb2FyZC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL0Fycm93cy9BcnJvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL1RETWF0Y2hlc0JvYXJkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvVE1NYXRjaGVzQm9hcmQvVE1NYXRjaGVzQm9hcmQuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L2NvbW1vbi9Sb3cvUm93RGVzY3JpcHRpb24vUm93RGVzY3JpcHRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvd1RpdGxlL1Jvd1RpdGxlLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUhlYWRlci9EYXlDaGFuZ2VCdXR0b24vRGF5Q2hhbmdlQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUhlYWRlci9UTUhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVG9kYXlNYXRjaGVzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL05ld3MuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvU2xpZGUvU2xpZGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvU2xpZGUvU2xpZGVJdGVtcy9BcnJvd3MvQXJyb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvU2xpZGUvU2xpZGVJdGVtcy9JdGVtTW9kYWwvSXRlbU1vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvSXRlbS9JdGVtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL3NsaWRlX3Nob3dfZGF0YS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0Fycm93cy9BcnJvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvSXRlbS9JdGVtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9JdGVtL1ByZWRpY3Rpb25Nb2RhbC9QcmVkaWN0aW9uTW9kYWwuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vVGltZXIvVGltZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9BcnJvd3MvQXJyb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0ZlZWRCYWNrL0ZlZWRCYWNrLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9GZWVkQmFjay9MaWtlRGlzbGlrZURyb3AvTGlrZURpc2xpa2VEcm9wLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9MZWF2ZUNvbW1lbnQvTGVhdmVDb21tZW50LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL1NvcnRpbmcvU29ydGluZy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvVGVzdGltb25pYWxzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9mZWVkX2JhY2tfZGF0YS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1RpdGxlL1RpdGxlLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdCdXR0b24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL2VyLmxpYi5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcmVkdXgvZmVhdHVyZXMvbWF0Y2hTbGljZS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3NsaWRlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9hdmF0YXIucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9kaXNsaWtlLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZmlsbGVkU3Rhci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2xpa2UucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy91bmZpbGxlZFN0YXIucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvQ2FsZW5kYXIucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dMZWZ0LnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2Fycm93UmlnaHQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dMZWZ0LnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93UmlnaHQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL25ld3MvZm9ydEJhY2sucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL25ld3Mvc2VjQmFjay5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy90cmRCYWNrLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93TGVmdC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd0xlZnRWZWN0b3IucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dSaWdodC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd1JpZ2h0VmVjdG9yLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2JhcmNhLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3ByZWRCYWNrLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3Bzai5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vc2xpZGVCYWNrLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9BcnJvd3MvQXJyb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvR2FtZVJ1bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9TbGlkZVBhZ2UvUGFnZVBhcmV0aWNsZXMvUGFnZVBhcnRpY2FsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvU2xpZGVQYWdlL1NsaWRlUGFnZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvTWF0Y2hlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQvU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL0Fycm93cy9BcnJvdy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvVERNYXRjaGVzQm9hcmQvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9URE1hdGNoZXNCb2FyZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvVE1NYXRjaGVzQm9hcmQvVE1NYXRjaGVzQm9hcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L2NvbW1vbi9Sb3cvUm93Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvd0Rlc2NyaXB0aW9uL1Jvd0Rlc2NyaXB0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvd1RpdGxlL1Jvd1RpdGxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNSGVhZGVyL0RheUNoYW5nZUJ1dHRvbi9EYXlDaGFuZ2VCdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1IZWFkZXIvVE1IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVG9kYXlNYXRjaGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvTmV3cy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvU2xpZGUvU2xpZGVJdGVtcy9BcnJvd3MvQXJyb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL0l0ZW1Nb2RhbC9JdGVtTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL0l0ZW0vSXRlbS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9BcnJvd3MvQXJyb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvSXRlbS9JdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vUHJlZGljdGlvbk1vZGFsL1ByZWRpY3Rpb25Nb2RhbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9QcmRlaWN0aW9uU2xpZGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0Fycm93cy9BcnJvdy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9GZWVkQmFjay9GZWVkQmFjay5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9GZWVkQmFjay9MaWtlRGlzbGlrZURyb3AvTGlrZURpc2xpa2VEcm9wLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0xlYXZlQ29tbWVudC9MZWF2ZUNvbW1lbnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL1NvcnRpbmcvU29ydGluZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UaXRsZS9UaXRsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWNhbGVuZGFyXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWxvYWRlci1zcGlubmVyXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdGltZXItaG9va1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwieXVwXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvaWdub3JlZHxDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFxwcm9qZWN0c1xcZm9vdC1iZXRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJNYWluIiwiQXJyb3ciLCJ0eXBlIiwib25DbGljayIsImlzRWRnZSIsInBvaW50ZXIiLCJjb25zdHMiLCJhcnJvd0xlZnQiLCJhcnJvd1N0eWxlcyIsImFycm93UmlnaHQiLCJzdHlsZXMiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsImJvdHRvbSIsIkdhbWVSdWxlcyIsIlBhZ2luYXRpb24iLCJnYW1lX3J1bGVzIiwiZWwiLCJNYXRoIiwicmFuZG9tIiwicGFnZXMiLCJhY3RpdmVQYWdlIiwibWFwIiwiaXNBY3RpdmVQYWdlIiwiUGFnZVBhcnRpY2xlcyIsInRpdGxlIiwiYm9keSIsIlNsaWRlUGFnZXMiLCJwYWdlRGF0YSIsIkhlYWRlciIsImJ1dHRvbnNBY3Rpdml0eSIsIm9uX1RNX2NsaWNrIiwib25fR01fY2xpY2siLCJnYW1lUnVsZXNTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiTWF0Y2hlcyIsInNob3dUb2RheU1hdGNoZXMiLCJzZXRTaG93VG9kYXlNYXRjaGVzIiwidXNlU3RhdGUiLCJzaG93R2FtZVJ1bGVzIiwic2V0U2hvd0dhbWVSdWxlcyIsImNyZWF0ZURheVdpdGhTcGVjaWZpY0Zvcm1hdCIsImRheSIsImQiLCJEYXRlIiwieWUiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJ5ZWFyIiwiZm9ybWF0IiwibW8iLCJtb250aCIsImRhIiwiU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQiLCJmaXJzdFBhZ2UiLCJzZXRGaXJzdFBhZ2UiLCJzZWNvbmRQYWdlIiwic2V0U2Vjb25kUGFnZSIsImZpcnN0UGFnZUl0ZW1zIiwidXBEYXRlRmlyc3RQYWdlSXRlbXMiLCJzZWNvbmRQYWdlSXRlbXMiLCJ1cERhdGVTZWNvbmRQYWdlSXRlbXMiLCJtYXRjaGVzIiwic2V0TWF0Y2hlcyIsInVzZUVmZmVjdCIsImZpbHRlciIsImkiLCJyZXF1ZXN0IiwiR0VUX01BVENIRVNfT0ZfU1BFQ0lGSUNfREFZIiwiYXV0aCIsInRoZW4iLCJub3ciLCJkYXRhIiwibWF0Y2giLCJtYXRjaFRpbWUiLCJkYXRlIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsInRpbWUiLCJnZXRUaW1lIiwiZ2FtZVN0YXRlIiwiYWJzIiwiaWQiLCJ0ZWFtT25lTmFtZSIsInRlYW1PbmVJY29uIiwidGVhbTFfaW1nX3BhdGgiLCJ0ZWFtVHdvTmFtZSIsInRlYW1Ud29JY29uIiwidGVhbTJfaW1nX3BhdGgiLCJzY29yZSIsImJ1eUJ1dHRvbk5hbWUiLCJjb2VmZmljZW50IiwidGl0bGVOYW1lIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJpdGVtcyIsIkFycmF5IiwiZnJvbSIsInJlb3JkZXJlZEl0ZW0iLCJzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsImhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UiLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsInB1c2giLCJxdWVyeSIsImdhbWUiLCJwbGFjZWhvbGRlciIsIm1pbkhlaWdodCIsIlRETWF0Y2hlc0JvYXJkIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIlRNTWF0Y2hlc0JvYXJkIiwic2V0RGF0ZSIsIlJvdyIsInRlYW1PbmUiLCJ0ZWFtVHdvIiwiY2xpY2tCdXkiLCJ0cmFzbmxhdGlvbkxvY2F0aW9uIiwiUm93RGVzY3JpcHRpb24iLCJsb2NhdGlvbkluTWFpblBhZ2UiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJ0cmFuc2xhdGlvblBhdGgiLCJ0cmFuc2xhdGUiLCJrZXkiLCJnYW1lU3RhcnRlZCIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJSb3dUaXRsZSIsImNvbnRlbnQiLCJEYXlDaGFuZ2VCdXR0b24iLCJuYW1lIiwiYWN0aXZlIiwiY2xpY2siLCJUTUhlYWRlciIsImNsaWNrVEQiLCJjbGlja1RNIiwiVERCb2FyZFN0YXRlIiwiVE1Cb2FyZFN0YXRlIiwiZ2V0U3BlY2lmaWNEYXRlTWF0Y2hlcyIsImdldF9kYXRlIiwidmFsdWUiLCJzaG93Q2FsZW5kYXIiLCJzZXRTaG93Q2FsZW5kYXIiLCJjYWxlbmRhciIsInNyYyIsIlRvZGF5TWF0Y2hlcyIsInNob3dUb2RheUdhbWVzIiwic2V0U2hvd1RvZGF5R2FtZXMiLCJzaG93VG9tb3Jyb3dHYW1lcyIsInNldFNob3dUb21vcnJvd0dhbWVzIiwic2hvd1NwZWNpZmljRGF5TWF0Y2hlcyIsInNldFNob3dTcGVjaWZpY0RheU1hdGNoZXMiLCJzcGVjaWZpY01hdGNoRGF5Iiwic2V0U3BlY2lmaWNNYXRjaERheSIsIk5ld3MiLCJTbGlkZSIsInNsaWRlX2RhdGEiLCJzZXRTbGlkZURhdGEiLCJHRVRfTkVXUyIsIm5ld3MiLCJicmVha3BvaW50cyIsIml0ZW1zVG9TaG93IiwiaXRlbXNUb1Njcm9sbCIsImltZ19wYXRoIiwidGV4dCIsIkl0ZW1Nb2RhbCIsIm9uTW9kYWxDbG9zZSIsImltZyIsImRlc2NyaXB0aW9uIiwiSXRlbSIsImltZ19zcmMiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwic2hvd0l0ZW1Nb2RhbCIsInNldFNob3dJdGVtTW9kYWwiLCJsaW5lT25lIiwibGluZVR3byIsInNsaWRlX3Nob3dfZGF0YSIsInVybCIsImJhY2tJY29uIiwic2VjQmFjayIsInRyZEJhY2siLCJmb3J0QmFjayIsIlByZWRpY3Rpb24iLCJhcnJvd3MiLCJhcnJvd1JpZ2h0VmVjdG9yIiwiYXJyb3dMZWZ0VmVjdG9yIiwiaGVpZ2h0IiwicHJlZGljdGlvbkJ1dHRvbk5hbWUiLCJleHBpcnlUaW1lc3RhbXAiLCJwcmVkaWN0aW9uIiwib3JkaW5hciIsInNob3dQcmVkaWN0aW9uIiwic2V0U2hvd1ByZWRpY3Rpb24iLCJzZXRHYW1lU3RhcnRlZCIsImdvVG9QcmVkaWN0aW9ucyIsInN0YXJ0IiwiZW5kIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJQcmVkaWN0aW9uTW9kYWwiLCJUaW1lciIsInRpbWVDbGFzcyIsInRpbWVPdXQiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiZGF5cyIsInVzZVRpbWVyIiwib25FeHBpcmUiLCJQcmRlaWN0aW9uU2xpZGUiLCJjdXJyZW50TWF0Y2hJZCIsInNldEN1cnJlbnRNYXRjaElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkdFVF9QUkVESUNUSU9OUyIsInJzcCIsIml0ZW0iLCJ0aGVyZUlzIiwidG90YWxCZXQiLCJmYWN0b3IiLCJwcmVkaWN0aW9uVGV4dCIsIm9yZGluYXJUZXh0IiwicHJpY2UiLCJsZW5ndGgiLCJlcnJvciIsInVuZGVmaW5lZCIsInNldE1hdGNoSWQiLCJwcmVkaWN0aW9uQmFja2dyb3VuZCIsIml0ZW1QYWRkaW5nIiwic2xpZGVDaGFuZ2UiLCJwIiwiQnV0dG9uIiwicGFnZSIsInRleHRQYXRoTmFtZSIsImxvY2F0aW9uSW5QYWdlIiwiYWRpdGlvbmFsU3R5bGVzIiwiY29udGFpbmVyU3R5bGVzIiwiRmVlZEJhY2siLCJhdmF0YXIiLCJuaWtOYW1lIiwicmF0ZWluZyIsImxpa2VzIiwiZGlzTGlrZXMiLCJyZWFjdGlvbnNGb3JUZXN0aW5nIiwic3RhcnMiLCJzaG93UmVhY3Rpb25zIiwic2V0U2hvd1JlYWN0aW9ucyIsImZpbGxlZFN0YXIiLCJ1bmZpbGxlZFN0YXIiLCJsaWtlSWNvbiIsImRpc0xpa2VJY29uIiwiTGlrZURpc2xpa2VEcm9wIiwidXNlcm5hbWUiLCJyZWFjdGlvbiIsIkxlYXZlQ29tbWVudCIsIm1hdGNoSWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbW1lbnRCb3hSZWYiLCJ1c2VSZWYiLCJzaW11bGF0b3IiLCJzZXRTaW11bGF0b3IiLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImNvbW1lbnQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInVzZUZvcm0iLCJtb2RlIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsInN1Ym1pdCIsIkFERF9GRUVEQkFDSyIsImN1cnJlbnQiLCJ0b2FzdCIsInJlc3BvbnNlIiwibWVzc2FnZSIsIlNvcnRpbmciLCJzb3J0aW5nVGV4dCIsImRhdGVTb3J0aW5nVGV4dCIsInJhdGVTb3J0aW5nIiwic29ydEJ5RGF0ZSIsInNvcnRCeVJhdGUiLCJkYXRlQWN0aXZlIiwiVGVzdGltb25pYWxzIiwidXNlU2VsZWN0b3IiLCJnZXRNYXRjaElkIiwiZmVlZEJhY2tzIiwic2V0RmVlZEJhY2tzIiwic2V0RGF0ZUFjdGl2ZSIsIkdFVF9GRUVEQkFDSyIsInByZWRpY3Rpb25zIiwiZmVlZEJhY2siLCJyZW5kZXJGb3JtYXQiLCJzb3J0Rm9ybWF0IiwibGlrZUNvdW50IiwiZGlzbGlrZUNvdW50Iiwic29ydGluZyIsInRvU29ydCIsInNvcnRpbmdCeSIsImRhdGFGb3JTb3J0aW5nIiwicmVkdWNlIiwiYWMiLCJjb25jYXQiLCJzb3J0ZWREYXRhIiwic29ydGVkIiwic29ydCIsImEiLCJiIiwiY2VpbCIsInNvcnRlZEl0ZW1zIiwiZm9yRWFjaCIsIngiLCJyZWFjdGlvbnMiLCJmZWVkYmFja19kYXRhIiwiVGl0bGUiLCJ0ZXh0U3R5bGVzIiwiaHJlZiIsImNsYXNzZXMiLCJjdXJzb3IiLCJMb2FkaW5nQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwidG9wIiwibGVmdCIsImhhbmRsZV9vdmVyZmxvd19vbl9vcGVuIiwiZG9jdW1lbnQiLCJvdmVyZmxvd1kiLCJoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UiLCJNb2RhbCIsIm9uQ2xvc2UiLCJjb250ZW50U3R5bGVzIiwib3RoZXJTdHlsZXMiLCJwb3J0YWxMb2NhdGlvbiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJub2RlIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZGluYW1pY1RvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJtb2RhbCIsImNyZWF0ZVBvcnRhbCIsImdldEVsZW1lbnRCeUlkIiwiaG9zdCIsInBheWxvYWQiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJzbHYiLCJyamN0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRDb29raWUiLCJPYmplY3QiLCJheGlvcyIsIm1ldGhvZCIsImZpbmFsbHkiLCJuYW1lRVEiLCJjYSIsImNvb2tpZSIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwicmVtb3ZlQ29va2llIiwic2V0Q29va2llIiwiZXhwaXJlcyIsInNldFRpbWUiLCJ0b1VUQ1N0cmluZyIsIkFVVEhfVVJMIiwiQUNDT1VOVF9VUkwiLCJSRUdJU1RFUiIsIkxPR0lOIiwiR0VUX0FDQ09VTlRfSU5GTyIsIkNIQU5HRV9BQ0NPVU5UX0lORk8iLCJDSEFOR0VfQUNDT1VOVF9JTUFHRSIsIlNUQVJUX1JFU0VUX1BBU1NXT1JEIiwiZW1haWwiLCJWRVJJRllfUEFTU1dPUkRfUkVTRVQiLCJTRVRfTkVXX1BBU1NXT1JEIiwiR0VUX01BVENIRVMiLCJHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSIsIkdFVF9NQVRDSEVTX0JZX1RZUEUiLCJHRVRfU1RBVElTVElDUyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJfdXNlSW50ZXJzZWN0aW9uIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiYXMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIkxpbmsiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0Iiwid2FybiIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsInJlc29sdmUiLCJwcm9tIiwic2V0IiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJ0b1VwcGVyQ2FzZSIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImRvbWFpbkl0ZW1zIiwiaG9zdG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsImRvbWFpbkl0ZW0iLCJ0b0xvd2VyQ2FzZSIsIl9pdGVtJGRvbWFpbiIsIl9pdGVtJGxvY2FsZXMiLCJkb21haW5Ib3N0bmFtZSIsImRvbWFpbiIsInNvbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWVQYXJ0cyIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsInBhdGhMb3dlciIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5Iiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiX3RoaXMkbG9jYWxlcyIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ5IiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwicHJvdG9jb2wiLCJwb3J0IiwiU3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIkluZGV4UGFnZSIsImxheW91dCIsImdldFN0YXRpY1Byb3BzIiwiX19sb2FkTmFtZXNwYWNlcyIsImxvYWRlck5hbWUiLCJfX2kxOG5Db25maWciLCJsb2FkTG9jYWxlRnJvbSIsImwiLCJuIiwibWF0Y2hTbGljZSIsImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJhY3Rpb25zIiwicmVkdWNlciIsInBzakljb24iLCJiYXJjYUljb24iLCJhdGxldGljSWNvbiIsInJlbm5haXNJY29uIiwiYXRsZXRpY29JY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsdUNBQXVDLHlCQUF5QjtBQUNoRTtBQUNBLHFDOzs7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QTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBLHFEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hbS9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2FtL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2FtL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2RldS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2RldS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VuL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VuL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3Bfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL3JzL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL3JzL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBPYmplY3Qua2V5cyhtYXApOyB9O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9sb2NhbGVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVGVzdGltb25pYWxzIH0gZnJvbSAnLi4vY29tbW9uL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHMnXHJcbmltcG9ydCB7IE1hdGNoZXMgfSBmcm9tICcuL01hdGNoZXMvTWF0Y2hlcydcclxuaW1wb3J0IHsgTmV3cyB9IGZyb20gJy4vTmV3cy9OZXdzJ1xyXG5pbXBvcnQgeyBQcmVkaWN0aW9uIH0gZnJvbSAnLi9QcmVkaWN0aW9uL1ByZWRpY3Rpb24nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5ld3MgLz5cclxuICAgICAgICAgICAgPE1hdGNoZXMgXHJcbiAgICAgICAgICAgICAgICBnYW1lUnVsZXNTdGF0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFByZWRpY3Rpb24gLz5cclxuICAgICAgICAgICAgPFRlc3RpbW9uaWFscyBcclxuICAgICAgICAgICAgICAgIHBhZ2U9eydob21lJ31cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXsndGVzdGltb25pYWxzJ31cclxuICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17Jy50aXRsZSd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc3RzIH0gZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93UmlnaHQucG5nJ1xyXG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd0xlZnQucG5nJ1xyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcblxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMzVweCcsXHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6ICcxMCUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNFZGdlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuL1BhZ2luYXRpb24vUGFnaW5hdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HYW1lUnVsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGdhbWVfcnVsZXMgfSBmcm9tICcuL2dhbWVfcnVsZXMnXHJcbmltcG9ydCB7IFNsaWRlUGFnZXMgfSBmcm9tICcuL1NsaWRlUGFnZS9TbGlkZVBhZ2VzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVSdWxlcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgICAgIHJlbmRlclBhZ2luYXRpb249e1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lX3J1bGVzLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVBhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YT17ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZXMsIGFjdGl2ZVBhZ2UsIG9uQ2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlcy5tYXAoZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZVBhZ2UgPSBhY3RpdmVQYWdlID09PSBlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZVBhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJvdW5kfSAke2lzQWN0aXZlUGFnZSAmJiBzdHlsZXMuYWN0aXZlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnZVBhcnRpY2FsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnZVBhcnRpY2xlcyh7XHJcbiAgICB0aXRsZSxcclxuICAgIGJvZHlcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgUGFnZVBhcnRpY2xlcyB9IGZyb20gXCIuL1BhZ2VQYXJldGljbGVzL1BhZ2VQYXJldGljbGVzXCI7XHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NsaWRlUGFnZXMubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlUGFnZXMoe1xyXG4gICAgcGFnZURhdGFcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhZ2VEYXRhLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VQYXJ0aWNsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2VsLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5PXtlbC5ib2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2FtZV9ydWxlcyA9IFtcclxuICAgIC8vIGVhY2ggYXJyYXkgYXJlIHBhZ2UgZGF0YVxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfQpNGD0YLQsdC+0Ls6INC60L7QvNCw0L3QtNCwINC4INC30LDQv9Cw0YHQvdGL0LUg0LjQs9GA0L7QutC4LicsXHJcbiAgICAgICAgICAgIGJvZHk6IGBcclxuICAgICAgICAgICAgICAgINCX0LTRgNCw0LLRgdGC0LLRg9C50YLQtSEg0KfRgtC+INC90YPQttC90L4g0LTQtdC70LDRgtGMINGH0YLQvtCx0Ysg0LLRgdC10LPQtNCwINCy0YvRhdC+0LTQuNGC0Ywg0YEg0L/Qu9GO0YHQvtC8IOKYne+4j1xyXG4gICAgICAgICAgICAgICAgMS4g0J3QsCDQutCw0LbQtNGL0Lkg0LzQsNGC0Ycg0YHRgtCw0LLQuNC8INC/0L4gMTAlINC40Lcg0LHQsNC90LrQsCAoINC10YHQu9C4INGDINCy0LDRgSDQvdCwINGB0YfQtdGC0YMg0LXRgdGC0YwgMTAwMDAg0YDRg9Cx0LvQtdC5LCDRgtC+INC90LAg0LrQsNC20LTRi9C5INC80LDRgtGHINC90YPQttC90L4g0YHRgtCw0LLQuNGC0Ywg0L/QviAxMDAwINGA0YPQsdC70LXQuSwg0L3QtSDQstCw0LbQvdC+INC90LDRgdC60L7Qu9GM0LrQviDQsdCw0L3QuiDQv9C+0LTQvdC40LzQsNC10YLRgdGPINC40LvQuCDRgdC90LjQttCw0LXRgtGB0Y8sINC90YPQttC90L4g0YHRgtCw0LLQuNGC0Ywg0L/QviAxMDAwINGA0YPQsdC70LXQuSDQsiDQu9GO0LHQvtC8INGB0LvRg9GH0LDQuCApIFxyXG4gICAgICAgICAgICAgICAgMi4g0KHQsNC80L7QtSDQstCw0LbQvdC+0LUg0LjQs9GA0LDRgtGMINC/0L4g0L/RgNCw0LLQuNC70LDQvCAoINCy0L4g0L7RgdC90L7QstC90L7QvCDQuNCz0YDQvtC60LggOTklINC/0YDQvtC40LPRgNGL0LLQsNGO0YIsINC/0L7Rh9C10LzRgz8g0J/QvtGC0L7QvNGDINGH0YLQviDQvtC90Lgg0L3QtSDRgdC+0LHQu9GO0LTQsNGO0YIg0L/RgNCw0LLQuNC70LAg0LjQs9GA0YsgLCDQvdCw0YfQuNC90LDRjtGCINGB0LDQvNC4INC00LXQu9Cw0YLRjCDRgdCy0L7QuCDQv9GA0L7Qs9C90L7Qt9GLLCDRh9GC0L4g0Lgg0YDQsNC30YDRg9GI0LDQtdGCINCy0YHRjiDRgdC40YHRgtC10LzRgyDQv9GA0L7Qs9C90L7Qt9C+0LIhINCh0L7QsdC70Y7QtNCw0LnRgtC1INC30LAg0L/RgNCw0LLQuNC70LDQvNC4INC4INC/0L7QtNC90LjQvNCw0LnRgtC1INCS0LDRiCDQsdCw0L3QuiEg0KPQtNCw0YfQvdGL0YUg0LLQsNC8INGB0YLQsNCy0L7QuvCfpJ1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJyDQpNGD0YLQsdC+0Ls6IMKr0J/QvtC70L7QttC10L3QuNC1INCy0L3QtSDQuNCz0YDRi8K7LicsXHJcbiAgICAgICAgICAgIGJvZHk6ICfQn9GA0LDQstC40LvQviDCq9Cy0L3QtSDQuNCz0YDRi8K7INC30LDQv9GA0LXRidCw0LXRgiDQuNCz0YDQvtC60LDQvCDQsNGC0LDQutGD0Y7RidC10Lkg0LrQvtC80LDQvdC00Ysg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0Log0LvQuNC90LjQuCDQstC+0YDQvtGCINGB0L7Qv9C10YDQvdC40LrQsCDQsdC70LjQttC1LCDRh9C10Lwg0LfQsNGJ0LjRgtC90LjQutC4INGB0L7Qv9C10YDQvdC40LrQsC7QldGB0LvQuCDQsiDQvNC+0LzQtdC90YIg0L/QtdGA0LXQtNCw0YfQuCDQvNGP0YfQsCDQvNC10LbQtNGDINC40LPRgNC+0LrQvtC8INC4INC70LjQvdC40LXQuSDQstC+0YDQvtGCINGB0L7Qv9C10YDQvdC40LrQsCDQvdCw0YXQvtC00LjRgtGB0Y8g0LzQtdC90LXQtSDQtNCy0YPRhSDQuNCz0YDQvtC60L7QsiDQutC+0LzQsNC90LTRiyDRgdC+0L/QtdGA0L3QuNC60LAsINCy0LrQu9GO0YfQsNGPINCy0YDQsNGC0LDRgNGPLCDRgtC+INGC0LDQutC+0Lkg0LjQs9GA0L7QuiDQsdGD0LTQtdGCINCyINC/0L7Qu9C+0LbQtdC90LjQuCDCq9Cy0L3QtSDQuNCz0YDRi8K7LiDQn9GA0Lgg0L/QvtC70L7QttC10L3QuNC4IMKr0LLQvdC1INC40LPRgNGLwrsg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDRgdCy0L7QsdC+0LTQvdGL0Lkg0YPQtNCw0YAu0J/QvtC70L7QttC10L3QuNC1IMKr0LLQvdC1INC40LPRgNGLwrsg0L3QtSDRhNC40LrRgdC40YDRg9C10YLRgdGPINC/0YDQuCDQsNC90LDQu9C+0LPQuNGH0L3QvtC5INGB0LjRgtGD0LDRhtC40Lgg0L3QsCDRgdCy0L7QtdC5INC/0L7Qu9C+0LLQuNC90LUg0L/QvtC70Y8sINC/0YDQuCDQstGL0L/QvtC70L3QtdC90LjQuCDRg9C00LDRgNC+0LIg0L7RgiDQstC+0YDQvtGCLCDRg9Cz0LvQvtCy0YvRhSDRg9C00LDRgNC+0LIsINC/0YDQuCDQstCx0YDQsNGB0YvQstCw0L3QuNC4INC40LcgLSDQt9CwINCx0L7QutC+0LLQvtC5INC70LjQvdC40Lgg0Lgg0L/RgNC4INGB0L/QvtGA0L3QvtC8INCy0LHRgNCw0YHRi9Cy0LDQvdC40LguJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxuXVxyXG5cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZXRucyBcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vVGl0bGUvVGl0bGUnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoe1xyXG4gICAgYnV0dG9uc0FjdGl2aXR5LFxyXG4gICAgb25fVE1fY2xpY2ssXHJcbiAgICBvbl9HTV9jbGljayxcclxuICAgIGdhbWVSdWxlc1N0YXRlIH0pIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgIHBhZ2U9eydob21lJ31cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXsnbWF0Y2hlcyd9XHJcbiAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9eycudGl0bGUnfVxyXG4gICAgICAgICAgICAgICAgaHJlZj0nL21hdGNoZXMnXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvbWF0Y2hlcycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZT0naG9tZSdcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J21hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17Jy5idXR0b25zLlRvZGF5TWF0Y2hlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtidXR0b25zQWN0aXZpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s9e29uX1RNX2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtnYW1lUnVsZXNTdGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT0naG9tZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JblBhZ2U9eydtYXRjaGVzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPXsnLmJ1dHRvbnMuR2FtZVJ1bGVzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXshYnV0dG9uc0FjdGl2aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17b25fR01fY2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCB7IEdhbWVSdWxlcyB9IGZyb20gXCIuL0dhbWVSdWxlcy9HYW1lUnVsZXNcIjtcclxuaW1wb3J0IHsgVG9kYXlNYXRjaGVzIH0gZnJvbSBcIi4vVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYXRjaGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1hdGNoZXMoeyBnYW1lUnVsZXNTdGF0ZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICBbc2hvd1RvZGF5TWF0Y2hlcywgc2V0U2hvd1RvZGF5TWF0Y2hlc10gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd0dhbWVSdWxlcywgc2V0U2hvd0dhbWVSdWxlc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtnYW1lUnVsZXNTdGF0ZSA/IHN0eWxlcy5jb250YWluZXIgOiBzdHlsZXMuaW5fc2VwZXJldGVfcGFnZX1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zQWN0aXZpdHk9e3Nob3dUb2RheU1hdGNoZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25fVE1fY2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvZGF5TWF0Y2hlcyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93R2FtZVJ1bGVzKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25fR01fY2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0dhbWVSdWxlcyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93VG9kYXlNYXRjaGVzKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVJ1bGVzU3RhdGU9e2dhbWVSdWxlc1N0YXRlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtzaG93VG9kYXlNYXRjaGVzICYmIDxUb2RheU1hdGNoZXMgLz59XHJcbiAgICAgICAgICAgICAgICB7c2hvd0dhbWVSdWxlcyAmJiA8R2FtZVJ1bGVzIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQubW9kdWxlLnNjc3NcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIjtcclxuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uL2NvbW1vbi9Sb3cvUm93XCI7XHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSBcIi4uL2NvbW1vbi9Sb3cvUm93VGl0bGUvUm93VGl0bGVcIjtcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tIFwiLi4vVERNYXRjaGVzQm9hcmQvQXJyb3dzL0Fycm93XCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwiLi4vVERNYXRjaGVzQm9hcmQvUGFnaW5hdGlvbi9QYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliXCI7XHJcbmltcG9ydCB7IEdFVF9NQVRDSEVTX09GX1NQRUNJRklDX0RBWSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURheVdpdGhTcGVjaWZpY0Zvcm1hdChkYXkpIHtcclxuICBsZXQgZCA9IG5ldyBEYXRlKGRheSk7XHJcbiAgbGV0IHllID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlblwiLCB7IHllYXI6IFwibnVtZXJpY1wiIH0pLmZvcm1hdChkKTtcclxuICBsZXQgbW8gPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuXCIsIHsgbW9udGg6IFwiMi1kaWdpdFwiIH0pLmZvcm1hdChkKTtcclxuICBsZXQgZGEgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuXCIsIHsgZGF5OiBcIjItZGlnaXRcIiB9KS5mb3JtYXQoZCk7XHJcblxyXG4gIHJldHVybiBgJHtkYX0uJHttb30uJHt5ZX1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQoeyBkYXkgfSkge1xyXG4gIGNvbnN0IFtmaXJzdFBhZ2UsIHNldEZpcnN0UGFnZV0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICBbc2Vjb25kUGFnZSwgc2V0U2Vjb25kUGFnZV0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgIFtmaXJzdFBhZ2VJdGVtcywgdXBEYXRlRmlyc3RQYWdlSXRlbXNdID0gdXNlU3RhdGUoZmlyc3RQYWdlKSxcclxuICAgIFtzZWNvbmRQYWdlSXRlbXMsIHVwRGF0ZVNlY29uZFBhZ2VJdGVtc10gPSB1c2VTdGF0ZShzZWNvbmRQYWdlKSxcclxuICAgIFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zKG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA8IDQpKTtcclxuICAgIHVwRGF0ZVNlY29uZFBhZ2VJdGVtcyhtYXRjaGVzLmZpbHRlcigoZWwsIGkpID0+IGkgPj0gNCkpO1xyXG4gIH0sIFttYXRjaGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXF1ZXN0KFxyXG4gICAgICBHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkoY3JlYXRlRGF5V2l0aFNwZWNpZmljRm9ybWF0KGRheSkpLFxyXG4gICAgICB7fSxcclxuICAgICAgeyBhdXRoOiB0cnVlIH1cclxuICAgIClcclxuICAgICAgLnRoZW4oKG1hdGNoZXMpID0+IHtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldE1hdGNoZXMoXHJcbiAgICAgICAgICBtYXRjaGVzLmRhdGEuZGF0YS5tYXAoKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoVGltZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgIGAke21hdGNoLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke21hdGNoLnRpbWV9YFxyXG4gICAgICAgICAgICApLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXRlID1cclxuICAgICAgICAgICAgICBub3cgPCBtYXRjaFRpbWVcclxuICAgICAgICAgICAgICAgID8gYGRvbnRTdGFydGVkYFxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLmFicyhub3cgLSBtYXRjaFRpbWUpIDwgOTAwMDAwMFxyXG4gICAgICAgICAgICAgICAgPyBcInN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAgICAgOiBcImZpbmlzaGVkXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IG1hdGNoLmlkLFxyXG4gICAgICAgICAgICAgIGRhdGU6IG1hdGNoLmRhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogbWF0Y2gudGltZSxcclxuICAgICAgICAgICAgICBnYW1lU3RhdGU6IGAucm93T25lLmdhbWVTdGF0ZS4ke2dhbWVTdGF0ZX1gLFxyXG4gICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBtYXRjaC50ZWFtT25lTmFtZSxcclxuICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b05hbWU6IG1hdGNoLnRlYW1Ud29OYW1lLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBtYXRjaC50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgICAgICBzY29yZTogbWF0Y2guc2NvcmUsXHJcbiAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogXCIucm93T25lLmJ1eUJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IG1hdGNoLmNvZWZmaWNlbnQsXHJcbiAgICAgICAgICAgICAgdGl0bGVOYW1lOiBcIi5yb3dPbmUudGl0bGVcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbZGF5XSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZShyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oZmlyc3RQYWdlSXRlbXMpLFxyXG4gICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlKHJlc3VsdCkge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShzZWNvbmRQYWdlSXRlbXMpLFxyXG4gICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMoaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIGVuYWJsZVN3aXBlPXtmYWxzZX1cclxuICAgICAgLy8gdmVydGljYWxNb2RlXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2V9PlxyXG4gICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNGaXJzdFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtmaXJzdFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgaW5kZXg9e2l9IGtleT17TWF0aC5yYW5kb20oKX0gZHJhZ2dhYmxlSWQ9e2VsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lPXtlbC50aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9wcmVkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogXCIzNHB4XCIgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZX0+XHJcbiAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc1NlY29uZFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNvbmRQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGluZGV4PXtpfSBrZXk9e01hdGgucmFuZG9tKCl9IGRyYWdnYWJsZUlkPXtlbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiBcIjM0cHhcIiB9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zdHMgfSBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dSaWdodC5wbmcnXHJcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93TGVmdC5wbmcnXHJcbmltcG9ydCBhcnJvd1N0eWxlcyBmcm9tICcuL0Fycm93Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFycm93KHsgdHlwZSwgb25DbGljaywgaXNFZGdlIH0pIHtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgcG9pbnRlciA9IHR5cGUgPT09IGNvbnN0cy5QUkVWID9cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd0xlZnQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd0xlZnR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93UmlnaHQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd1JpZ2h0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctcmlnaHRcIlxyXG4gICAgICAgICAgICAvPixcclxuXHJcbiAgICAgICAgc3R5bGVzID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBib3R0b206ICczNXB4JyxcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogJzEwJSdcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0VkZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZXMsIGFjdGl2ZVBhZ2UsIG9uQ2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlcy5tYXAoZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZVBhZ2UgPSBhY3RpdmVQYWdlID09PSBlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZVBhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJvdW5kfSAke2lzQWN0aXZlUGFnZSAmJiBzdHlsZXMuYWN0aXZlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RETWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzXCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCI7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1wiO1xyXG5pbXBvcnQgeyBSb3dUaXRsZSB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1RpdGxlL1Jvd1RpdGxlXCI7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSBcIi4vQXJyb3dzL0Fycm93XCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwiLi9QYWdpbmF0aW9uL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9lci5saWJcIjtcclxuaW1wb3J0IHsgR0VUX01BVENIRVNfT0ZfU1BFQ0lGSUNfREFZIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRETWF0Y2hlc0JvYXJkKCkge1xyXG4gIGNvbnN0IFtmaXJzdFBhZ2UsIHNldEZpcnN0UGFnZV0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICBbc2Vjb25kUGFnZSwgc2V0U2Vjb25kUGFnZV0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgIFtmaXJzdFBhZ2VJdGVtcywgdXBEYXRlRmlyc3RQYWdlSXRlbXNdID0gdXNlU3RhdGUoZmlyc3RQYWdlKSxcclxuICAgIFtzZWNvbmRQYWdlSXRlbXMsIHVwRGF0ZVNlY29uZFBhZ2VJdGVtc10gPSB1c2VTdGF0ZShzZWNvbmRQYWdlKSxcclxuICAgIFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zKG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA8IDQpKTtcclxuICAgIHVwRGF0ZVNlY29uZFBhZ2VJdGVtcyhtYXRjaGVzLmZpbHRlcigoZWwsIGkpID0+IGkgPj0gNCkpO1xyXG4gIH0sIFttYXRjaGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGRhdGUgPSBgJHsoZC5nZXREYXRlKCkrJycpLnBhZFN0YXJ0KDIsICcwJyl9LiR7KGQuZ2V0TW9udGgoKSsxKycnKS5wYWRTdGFydCgyLCAnMCcpfS4ke2QuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgcmVxdWVzdChHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkoZGF0ZSksIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKG1hdGNoZXMpID0+IHtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldE1hdGNoZXMoXHJcbiAgICAgICAgICBtYXRjaGVzLmRhdGEuZGF0YS5tYXAoKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoVGltZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgIGAke21hdGNoLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke21hdGNoLnRpbWV9YFxyXG4gICAgICAgICAgICApLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXRlID1cclxuICAgICAgICAgICAgICBub3cgPCBtYXRjaFRpbWVcclxuICAgICAgICAgICAgICAgID8gYGRvbnRTdGFydGVkYFxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLmFicyhub3cgLSBtYXRjaFRpbWUpIDwgOTAwMDAwMFxyXG4gICAgICAgICAgICAgICAgPyBcInN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAgICAgOiBcImZpbmlzaGVkXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IG1hdGNoLmlkLFxyXG4gICAgICAgICAgICAgIGRhdGU6IG1hdGNoLmRhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogbWF0Y2gudGltZSxcclxuICAgICAgICAgICAgICBnYW1lU3RhdGU6IGAucm93T25lLmdhbWVTdGF0ZS4ke2dhbWVTdGF0ZX1gLFxyXG4gICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBtYXRjaC50ZWFtT25lTmFtZSxcclxuICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b05hbWU6IG1hdGNoLnRlYW1Ud29OYW1lLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBtYXRjaC50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgICAgICBzY29yZTogbWF0Y2guc2NvcmUsXHJcbiAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogXCIucm93T25lLmJ1eUJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IG1hdGNoLmNvZWZmaWNlbnQsXHJcbiAgICAgICAgICAgICAgdGl0bGVOYW1lOiBcIi5yb3dPbmUudGl0bGVcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZShyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oZmlyc3RQYWdlSXRlbXMpLFxyXG4gICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlKHJlc3VsdCkge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShzZWNvbmRQYWdlSXRlbXMpLFxyXG4gICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMoaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIGVuYWJsZVN3aXBlPXtmYWxzZX1cclxuICAgICAgLy8gdmVydGljYWxNb2RlXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2V9PlxyXG4gICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNGaXJzdFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtmaXJzdFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgaW5kZXg9e2l9IGtleT17TWF0aC5yYW5kb20oKX0gZHJhZ2dhYmxlSWQ9e2VsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lPXtlbC50aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9wcmVkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogXCIzNHB4XCIgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZX0+XHJcbiAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc1NlY29uZFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNvbmRQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGluZGV4PXtpfSBrZXk9e01hdGgucmFuZG9tKCl9IGRyYWdnYWJsZUlkPXtlbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiBcIjM0cHhcIiB9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVE1NYXRjaGVzQm9hcmQubW9kdWxlLnNjc3NcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIjtcclxuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uL2NvbW1vbi9Sb3cvUm93XCI7XHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSBcIi4uL2NvbW1vbi9Sb3cvUm93VGl0bGUvUm93VGl0bGVcIjtcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tIFwiLi8uLi9URE1hdGNoZXNCb2FyZC9BcnJvd3MvQXJyb3dcIjtcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gXCIuLy4uL1RETWF0Y2hlc0JvYXJkL1BhZ2luYXRpb24vUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYlwiO1xyXG5pbXBvcnQgeyBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSwgR0VUX01BVENIRVNfT0ZfU1BFQ0lGSUNfREFZIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRNTWF0Y2hlc0JvYXJkKCkge1xyXG4gIGNvbnN0IFtmaXJzdFBhZ2UsIHNldEZpcnN0UGFnZV0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICBbc2Vjb25kUGFnZSwgc2V0U2Vjb25kUGFnZV0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgIFtmaXJzdFBhZ2VJdGVtcywgdXBEYXRlRmlyc3RQYWdlSXRlbXNdID0gdXNlU3RhdGUoZmlyc3RQYWdlKSxcclxuICAgIFtzZWNvbmRQYWdlSXRlbXMsIHVwRGF0ZVNlY29uZFBhZ2VJdGVtc10gPSB1c2VTdGF0ZShzZWNvbmRQYWdlKSxcclxuICAgIFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zKG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA8IDQpKTtcclxuICAgIHVwRGF0ZVNlY29uZFBhZ2VJdGVtcyhtYXRjaGVzLmZpbHRlcigoZWwsIGkpID0+IGkgPj0gNCkpO1xyXG4gIH0sIFttYXRjaGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgIGQuc2V0RGF0ZSggZC5nZXREYXRlKCkgKyAxICk7XHJcbiAgICBjb25zdCBkYXRlID0gYCR7KGQuZ2V0RGF0ZSgpKycnKS5wYWRTdGFydCgyLCAnMCcpfS4keyhkLmdldE1vbnRoKCkrMSsnJykucGFkU3RhcnQoMiwgJzAnKX0uJHtkLmdldEZ1bGxZZWFyKCl9YDtcclxuICAgIHJlcXVlc3QoR0VUX01BVENIRVNfT0ZfU1BFQ0lGSUNfREFZKGRhdGUpLCB7fSwgeyBhdXRoOiB0cnVlIH0pXHJcbiAgICAgIC50aGVuKChtYXRjaGVzKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRNYXRjaGVzKFxyXG4gICAgICAgICAgbWF0Y2hlcy5kYXRhLmRhdGEubWFwKChtYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaFRpbWUgPSBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICBgJHttYXRjaC5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKX0gJHttYXRjaC50aW1lfWBcclxuICAgICAgICAgICAgKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWVTdGF0ZSA9XHJcbiAgICAgICAgICAgICAgbm93IDwgbWF0Y2hUaW1lXHJcbiAgICAgICAgICAgICAgICA/IGBkb250U3RhcnRlZGBcclxuICAgICAgICAgICAgICAgIDogTWF0aC5hYnMobm93IC0gbWF0Y2hUaW1lKSA8IDkwMDAwMDBcclxuICAgICAgICAgICAgICAgID8gXCJzdGFydGVkXCJcclxuICAgICAgICAgICAgICAgIDogXCJmaW5pc2hlZFwiO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGlkOiBtYXRjaC5pZCxcclxuICAgICAgICAgICAgICBkYXRlOiBtYXRjaC5kYXRlLFxyXG4gICAgICAgICAgICAgIHRpbWU6IG1hdGNoLnRpbWUsXHJcbiAgICAgICAgICAgICAgZ2FtZVN0YXRlOiBgLnJvd09uZS5nYW1lU3RhdGUuJHtnYW1lU3RhdGV9YCxcclxuICAgICAgICAgICAgICB0ZWFtT25lTmFtZTogbWF0Y2gudGVhbU9uZU5hbWUsXHJcbiAgICAgICAgICAgICAgdGVhbU9uZUljb246IG1hdGNoLnRlYW0xX2ltZ19wYXRoLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiBtYXRjaC50ZWFtVHdvTmFtZSxcclxuICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogbWF0Y2gudGVhbTJfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgc2NvcmU6IG1hdGNoLnNjb3JlLFxyXG4gICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6IFwiLnJvd09uZS5idXlCdXR0b25cIixcclxuICAgICAgICAgICAgICBjb2VmZmljZW50OiBtYXRjaC5jb2VmZmljZW50LFxyXG4gICAgICAgICAgICAgIHRpdGxlTmFtZTogXCIucm93T25lLnRpdGxlXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2UocmVzdWx0KSB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGZpcnN0UGFnZUl0ZW1zKSxcclxuICAgICAgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xyXG4gICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSk7XHJcblxyXG4gICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMoaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZShyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oc2Vjb25kUGFnZUl0ZW1zKSxcclxuICAgICAgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xyXG4gICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSk7XHJcblxyXG4gICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKGl0ZW1zKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2Fyb3VzZWxcclxuICAgICAgaXRlbXNUb1Nob3c9ezF9XHJcbiAgICAgIGl0ZW1zVG9TY3JvbGw9ezF9XHJcbiAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgcmVuZGVyUGFnaW5hdGlvbj17UGFnaW5hdGlvbn1cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICBlbmFibGVTd2lwZT17ZmFsc2V9XHJcbiAgICAgIC8vIHZlcnRpY2FsTW9kZVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlfT5cclxuICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJtYXRjaGVzdG9kYXlNYXRjaGVzRmlyc3RcIj5cclxuICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Zmlyc3RQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGluZGV4PXtpfSBrZXk9e01hdGgucmFuZG9tKCl9IGRyYWdnYWJsZUlkPXtlbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvcHJlZGljdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgPFJvd1RpdGxlIHJvd1N0eWxlcz17eyBtaW5IZWlnaHQ6IFwiMzRweFwiIH19IC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2V9PlxyXG4gICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNTZWNvbmRcIj5cclxuICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2Vjb25kUGFnZUl0ZW1zLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBpbmRleD17aX0ga2V5PXtNYXRoLnJhbmRvbSgpfSBkcmFnZ2FibGVJZD17ZWwuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlPXtlbC5nYW1lU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlPXtlbC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU9e2VsLnRpdGxlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9wcmVkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogXCIzNHB4XCIgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gICk7XHJcbn1cclxuIiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBSb3dUaXRsZSB9IGZyb20gJy4vUm93VGl0bGUvUm93VGl0bGUnXHJcbmltcG9ydCB7IFJvd0Rlc2NyaXB0aW9uIH0gZnJvbSAnLi9Sb3dEZXNjcmlwdGlvbi9Sb3dEZXNjcmlwdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Sb3cubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7XHJcbiAgICBkYXRlLFxyXG4gICAgZ2FtZVN0YXRlLFxyXG4gICAgdGVhbU9uZSxcclxuICAgIHRlYW1PbmVJY29uLFxyXG4gICAgc2NvcmUsXHJcbiAgICB0ZWFtVHdvLFxyXG4gICAgdGVhbVR3b0ljb24sXHJcbiAgICBidXlCdXR0b25OYW1lLFxyXG4gICAgdGl0bGVOYW1lLFxyXG4gICAgY2xpY2tCdXlcclxufSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICB0cmFzbmxhdGlvbkxvY2F0aW9uID0gJ21hdGNoZXMuVE0udG9kYXknXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFJvd1RpdGxlXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXt0aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9e3RyYXNubGF0aW9uTG9jYXRpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSb3dEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17Z2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgdGVhbU9uZT17dGVhbU9uZX1cclxuICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXt0ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgIHNjb3JlPXtzY29yZX1cclxuICAgICAgICAgICAgICAgIHRlYW1Ud289e3RlYW1Ud299XHJcbiAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17dGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtidXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXt0cmFzbmxhdGlvbkxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgY2xpY2tCdXk9e2NsaWNrQnV5fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIHRyYW5zbGF0aW9uc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Jvd0Rlc2NyaXB0aW9uLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUm93RGVzY3JpcHRpb24oe1xyXG4gIGNsaWNrQnV5LFxyXG4gIGRhdGUsXHJcbiAgZ2FtZVN0YXRlLFxyXG4gIHRlYW1PbmUsXHJcbiAgdGVhbU9uZUljb24sXHJcbiAgc2NvcmUsXHJcbiAgdGVhbVR3byxcclxuICB0ZWFtVHdvSWNvbixcclxuICBidXlCdXR0b25OYW1lLFxyXG4gIGxvY2F0aW9uSW5NYWluUGFnZSxcclxufSkge1xyXG4gIGNvbnN0IC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiaG9tZVwiKSxcclxuICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5NYWluUGFnZX1gLFxyXG4gICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICBnYW1lU3RhcnRlZCA9IGdhbWVTdGF0ZS5zbGljZShnYW1lU3RhdGUubGFzdEluZGV4T2YoXCIuXCIpICsgMSkgPT09IFwic3RhcnRlZFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy5kYXRlX2dhbWVOU3RhcnRlZF9jb250ZW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtnYW1lU3RhcnRlZCA/IHN0eWxlcy5kYXRlX2dhbWVTdGFydGVkX2NvbnRlbnQgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+Jm5ic3A7e3RyYW5zbGF0ZShnYW1lU3RhdGUpfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1zfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbU9uZX0+XHJcbiAgICAgICAgICAgIDxwPnt0ZWFtT25lfTwvcD5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1PbmVJY29ufSBhbHQ9e3RlYW1PbmV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NvcmV9PlxyXG4gICAgICAgICAgICA8cD57c2NvcmV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1Ud299PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dGVhbVR3b0ljb259IGFsdD17dGVhbVR3b30gLz5cclxuICAgICAgICAgICAgPHA+e3RlYW1Ud299PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlCdXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRlbnR9IG9uQ2xpY2s9e2NsaWNrQnV5fT5cclxuICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZShidXlCdXR0b25OYW1lKX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIHRyYW5zbGF0aW9uc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Jvd1RpdGxlLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvd1RpdGxlKHsgY29udGVudCwgbG9jYXRpb25Jbk1haW5QYWdlIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignaG9tZScpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5NYWluUGFnZX1gLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA/IHRyYW5zbGF0ZShjb250ZW50KSA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXlDaGFuZ2VCdXR0b24ubW9kdWxlLnNjc3MnXHJcbi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEYXlDaGFuZ2VCdXR0b24oe1xyXG4gICAgbmFtZSxcclxuICAgIGxvY2F0aW9uSW5NYWluUGFnZSxcclxuICAgIGRhdGUsXHJcbiAgICBhY3RpdmUgPSBudWxsLFxyXG4gICAgY2xpY2sgfSkge1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2hvbWUnKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSBgJHtsb2NhdGlvbkluTWFpblBhZ2V9YCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmUgPyBzdHlsZXMuYWN0aXZlX25hbWUgOiBzdHlsZXMubmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthY3RpdmUgPyBzdHlsZXMuYWN0aXZlX2RhdGUgOiBzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL1RpdGxlL1RpdGxlXCI7XHJcbmltcG9ydCB7IERheUNoYW5nZUJ1dHRvbiB9IGZyb20gXCIuL0RheUNoYW5nZUJ1dHRvbi9EYXlDaGFuZ2VCdXR0b25cIjtcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gXCJyZWFjdC1jYWxlbmRhclwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UTUhlYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgY2FsZW5kYXIgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9DYWxlbmRhci5wbmdcIjtcclxuaW1wb3J0IGFycm93UmlnaHQgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd1JpZ2h0LnBuZ1wiO1xyXG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gXCIvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dMZWZ0LnBuZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRNSGVhZGVyKHtcclxuICBjbGlja1RELFxyXG4gIGNsaWNrVE0sXHJcbiAgVERCb2FyZFN0YXRlLFxyXG4gIFRNQm9hcmRTdGF0ZSxcclxuICBnZXRTcGVjaWZpY0RhdGVNYXRjaGVzLFxyXG59KSB7XHJcbiAgY29uc3QgLy8gZnVuY3Rpb25zXHJcbiAgICAvLyBnZXRfZGF0ZSB2YWx1ZSBjaGFuZ2VzIHlfZCA9PiB5ZXN0ZXJkYXksIHRfZCA9PiB0b2RheSwgdF93ID0+dG9tb3Jyb3dcclxuICAgIGdldF9kYXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKSxcclxuICAgICAgICBkYXkgPSBudWxsLFxyXG4gICAgICAgIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMSxcclxuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgIGNhc2UgXCJ0X2RcIjpcclxuICAgICAgICAgIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInRfbVwiOlxyXG4gICAgICAgICAgZGF5ID0gZGF0ZS5nZXREYXRlKCkgKyAxO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGRheSA9IFwiXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRofS4ke3llYXJ9YDtcclxuICAgIH0sXHJcbiAgICAvLyBzdGF0ZXNcclxuICAgIFtzaG93Q2FsZW5kYXIsIHNldFNob3dDYWxlbmRhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICBwYWdlPXtcImhvbWVcIn1cclxuICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXtcIm1hdGNoZXNcIn1cclxuICAgICAgICAgIHRleHRQYXRoTmFtZT17XCIuVE0uaGVhZGVyVGl0bGVcIn1cclxuICAgICAgICAgIGNsYXNzZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5X2NoYW5nZV9idXR0b25zfT5cclxuICAgICAgICAgIDxEYXlDaGFuZ2VCdXR0b25cclxuICAgICAgICAgICAgbmFtZT1cIi5UTS5oZWFkZXJCdXR0b25zLnRvZGF5XCJcclxuICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXtcIm1hdGNoZXNcIn1cclxuICAgICAgICAgICAgZGF0ZT17Z2V0X2RhdGUoXCJ0X2RcIil9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17VERCb2FyZFN0YXRlID8gXCJzaG93XCIgOiBudWxsfVxyXG4gICAgICAgICAgICBjbGljaz17Y2xpY2tURH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8RGF5Q2hhbmdlQnV0dG9uXHJcbiAgICAgICAgICAgIG5hbWU9XCIuVE0uaGVhZGVyQnV0dG9ucy50b21vcnJvd1wiXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSW5NYWluUGFnZT17XCJtYXRjaGVzXCJ9XHJcbiAgICAgICAgICAgIGRhdGU9e2dldF9kYXRlKFwidF9tXCIpfVxyXG4gICAgICAgICAgICBhY3RpdmU9e1RNQm9hcmRTdGF0ZSA/IFwic2hvd1wiIDogbnVsbH1cclxuICAgICAgICAgICAgY2xpY2s9e2NsaWNrVE19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJ9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2NhbGVuZGFyLnNyY31cclxuICAgICAgICAgICAgYWx0PVwiY2FsZW5kYXItaWNvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDYWxlbmRhcighc2hvd0NhbGVuZGFyKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcl9ib2R5fT5cclxuICAgICAgICAgIHtzaG93Q2FsZW5kYXIgJiYgKFxyXG4gICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICBzaG93TmVpZ2hib3JpbmdNb250aD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtmYWxzZX1cclxuICAgICAgICAgICAgICBuZXh0TGFiZWw9ezxpbWcgc3JjPXthcnJvd1JpZ2h0LnNyY30gLz59XHJcbiAgICAgICAgICAgICAgcHJldkxhYmVsPXs8aW1nIHNyYz17YXJyb3dMZWZ0LnNyY30gLz59XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2V0U3BlY2lmaWNEYXRlTWF0Y2hlcyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93Q2FsZW5kYXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQgfSBmcm9tIFwiLi9UTUJvZHkvU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQvU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmRcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBURE1hdGNoZXNCb2FyZCB9IGZyb20gXCIuL1RNQm9keS9URE1hdGNoZXNCb2FyZC9URE1hdGNoZXNCb2FyZFwiO1xyXG5pbXBvcnQgeyBUTU1hdGNoZXNCb2FyZCB9IGZyb20gXCIuL1RNQm9keS9UTU1hdGNoZXNCb2FyZC9UTU1hdGNoZXNCb2FyZFwiO1xyXG5pbXBvcnQgeyBUTUhlYWRlciB9IGZyb20gXCIuL1RNSGVhZGVyL1RNSGVhZGVyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvZGF5TWF0Y2hlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvZGF5TWF0Y2hlcyh7IGdldFNwZWNpZmljRGF0ZU1hdGNoZXMgfSkge1xyXG4gIGNvbnN0IC8vIHN0YXRlc1xyXG4gICAgW3Nob3dUb2RheUdhbWVzLCBzZXRTaG93VG9kYXlHYW1lc10gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgIFtzaG93VG9tb3Jyb3dHYW1lcywgc2V0U2hvd1RvbW9ycm93R2FtZXNdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgW3Nob3dTcGVjaWZpY0RheU1hdGNoZXMsIHNldFNob3dTcGVjaWZpY0RheU1hdGNoZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbc3BlY2lmaWNNYXRjaERheSwgc2V0U3BlY2lmaWNNYXRjaERheV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPFRNSGVhZGVyXHJcbiAgICAgICAgLy8gVEQgPT4gdG9kYXkgZ2FtZXMgYm9hcmQgc2hvcHcgY29uZmlnc1xyXG4gICAgICAgIGNsaWNrVEQ9eygpID0+IHtcclxuICAgICAgICAgIHNldFNob3dUb21vcnJvd0dhbWVzKGZhbHNlKTtcclxuICAgICAgICAgIHNldFNob3dTcGVjaWZpY0RheU1hdGNoZXMoZmFsc2UpO1xyXG4gICAgICAgICAgc2V0U2hvd1RvZGF5R2FtZXModHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBUREJvYXJkU3RhdGU9e3Nob3dUb2RheUdhbWVzfVxyXG4gICAgICAgIC8vIFRNID0+IHRvbW1vcm93IGdhbWVzIGJvYXJkIHNob3B3IGNvbmZpZ3NcclxuICAgICAgICBjbGlja1RNPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTaG93VG9kYXlHYW1lcyhmYWxzZSk7XHJcbiAgICAgICAgICBzZXRTaG93U3BlY2lmaWNEYXlNYXRjaGVzKGZhbHNlKTtcclxuICAgICAgICAgIHNldFNob3dUb21vcnJvd0dhbWVzKHRydWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgVE1Cb2FyZFN0YXRlPXtzaG93VG9tb3Jyb3dHYW1lc31cclxuICAgICAgICBnZXRTcGVjaWZpY0RhdGVNYXRjaGVzPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgIHNldFNob3dUb2RheUdhbWVzKGZhbHNlKTtcclxuICAgICAgICAgIHNldFNob3dUb21vcnJvd0dhbWVzKGZhbHNlKTtcclxuICAgICAgICAgIHNldFNwZWNpZmljTWF0Y2hEYXkodmFsdWUpO1xyXG4gICAgICAgICAgc2V0U2hvd1NwZWNpZmljRGF5TWF0Y2hlcyh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICB7c2hvd1NwZWNpZmljRGF5TWF0Y2hlcyAmJiAoXHJcbiAgICAgICAgPFNwZWNpZmljRGF5TWF0Y2hlc0JvYXJkIGRheT17c3BlY2lmaWNNYXRjaERheX0gLz5cclxuICAgICAgKX1cclxuICAgICAge3Nob3dUb2RheUdhbWVzICYmIDxURE1hdGNoZXNCb2FyZCAvPn1cclxuICAgICAge3Nob3dUb21vcnJvd0dhbWVzICYmIDxUTU1hdGNoZXNCb2FyZCAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmV3cy5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50cyBcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi9jb21tb24vVGl0bGUvVGl0bGUnXHJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSAnLi9TbGlkZS9TbGlkZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXdzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUaXRsZSBcclxuICAgICAgICAgICAgICAgIHBhZ2U9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J25ld3MnfVxyXG4gICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPXsnLnRpdGxlJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNsaWRlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgc2xpZGVfc2hvd19kYXRhIH0gZnJvbSAnLi9zbGlkZV9zaG93X2RhdGEnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL1NsaWRlSXRlbXMvSXRlbS9JdGVtJ1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4vU2xpZGVJdGVtcy9BcnJvd3MvQXJyb3cnXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuL1NsaWRlSXRlbXMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBJdGVtTW9kYWwgfSBmcm9tICcuL1NsaWRlSXRlbXMvSXRlbU1vZGFsL0l0ZW1Nb2RhbCdcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2xpZGUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX05FV1MgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2xpZGUoKSB7XHJcblxyXG4gICAgY29uc3QgWyBzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgcmVxdWVzdCggR0VUX05FV1MsIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgICAgICAgLnRoZW4oIG5ld3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGVEYXRhKCBuZXdzLmRhdGEuZGF0YSApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggZXJyICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gY29uc3RzIGFuZCBzdGF0ZXMgXHJcbiAgICAgICAgLy8gYnJlYWtwb2ludHMgZm9yIHNsaWRlIFxyXG4gICAgICAgIGJyZWFrcG9pbnRzID0gW1xyXG4gICAgICAgICAgICB7IHdpZHRoOiAzNzUsIGl0ZW1zVG9TaG93OiAyLCBpdGVtc1RvU2Nyb2xsOiAyIH0sXHJcbiAgICAgICAgICAgIHsgd2lkdGg6IDc0MCwgaXRlbXNUb1Nob3c6IDMsIGl0ZW1zVG9TY3JvbGw6IDMgfSxcclxuICAgICAgICAgICAgeyB3aWR0aDogMTcwMCwgaXRlbXNUb1Nob3c6IDQsIGl0ZW1zVG9TY3JvbGw6IDQgfVxyXG4gICAgICAgIF1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUGFkZGluZz17WzM1LCAxMl19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBhZ2luYXRpb249e1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludHM9e2JyZWFrcG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVfZGF0YS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdfc3JjPXtlbC5pbWdfcGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZWwudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VsLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zdHMgfSBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dSaWdodC5wbmcnXHJcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93TGVmdC5wbmcnXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IGFycm93U3R5bGVzIGZyb20gJy4vQXJyb3cubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJyb3coeyB0eXBlLCBvbkNsaWNrLCBpc0VkZ2UgfSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICBwb2ludGVyID0gdHlwZSA9PT0gY29uc3RzLlBSRVYgP1xyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93TGVmdC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93TGVmdH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dSaWdodC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93UmlnaHR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgIC8+LFxyXG5cclxuICAgICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0VkZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSXRlbU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW1Nb2RhbCh7XHJcbiAgICBvbk1vZGFsQ2xvc2UsXHJcbiAgICBpbWcsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtzdHlsZXMuTWNvbnRhaW5lcn1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17c3R5bGVzLk1jb250ZW50fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSXRlbU1vZGFsIH0gZnJvbSAnLi4vSXRlbU1vZGFsL0l0ZW1Nb2RhbCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0l0ZW0ubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0oe1xyXG4gICAgaW1nX3NyYyxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24gfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBpbWdfc3JjICsgXCIpXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtzaG93SXRlbU1vZGFsLCBzZXRTaG93SXRlbU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wTGluZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZU9uZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmVUd299IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SXRlbU1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbUxpbmVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmVPbmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lVHdvfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dJdGVtTW9kYWwgJiZcclxuICAgICAgICAgICAgICAgIDxJdGVtTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dJdGVtTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17aW1nX3NyY31cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2VzLCBhY3RpdmVQYWdlLCBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYWdlcy5tYXAoZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlUGFnZSA9IGFjdGl2ZVBhZ2UgPT09IGVsXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZVBhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucm91bmR9ICR7aXNBY3RpdmVQYWdlICYmIHN0eWxlcy5hY3RpdmV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBpbWdcclxuaW1wb3J0IHNlY0JhY2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL3NlY0JhY2sucG5nJ1xyXG5pbXBvcnQgdHJkQmFjayBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvdHJkQmFjay5wbmcnXHJcbmltcG9ydCBmb3J0QmFjayBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvZm9ydEJhY2sucG5nJ1xyXG5pbXBvcnQgYmFja0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9zbGlkZUJhY2sucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlX3Nob3dfZGF0YSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignaG9tZScpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICduZXdzLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufSIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJlZGljdGlvbi5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCIuLi8uLi9jb21tb24vVGl0bGUvVGl0bGVcIjtcclxuaW1wb3J0IHsgUHJkZWljdGlvblNsaWRlIH0gZnJvbSBcIi4vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZWRpY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICBwYWdlPSdob21lJ1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JblBhZ2U9J3ByZWRpY3Rpb24nXHJcbiAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9Jy50aXRsZSdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFByZGVpY3Rpb25TbGlkZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IGNvbnN0cyB9IGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbi8vIGljb25zXHJcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd1JpZ2h0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdFZlY3RvciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0VmVjdG9yLnBuZydcclxuaW1wb3J0IGFycm93UmlnaHRWZWN0b3IgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHRWZWN0b3IucG5nJ1xyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgYXJyb3dzID0gdHlwZSA9PT0gY29uc3RzLlBSRVYgP1xyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93UmlnaHRWZWN0b3Iuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd1JpZ2h0VmVjdG9yfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd0xlZnRWZWN0b3Iuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd0xlZnRWZWN0b3J9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgIC8+LFxyXG5cclxuICAgICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNFZGdlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycm93c1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gdHJhbnNsYXRpb25zXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSXRlbS5tb2R1bGUuc2Nzc1wiO1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi9UaW1lci9UaW1lclwiO1xyXG5pbXBvcnQgeyBQcmVkaWN0aW9uTW9kYWwgfSBmcm9tIFwiLi9QcmVkaWN0aW9uTW9kYWwvUHJlZGljdGlvbk1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0oe1xyXG4gIHRlYW1PbmVOYW1lLFxyXG4gIHRlYW1Ud29OYW1lLFxyXG4gIHRlYW1PbmVJY29uLFxyXG4gIHRlYW1Ud29JY29uLFxyXG4gIHByZWRpY3Rpb25CdXR0b25OYW1lLFxyXG4gIGJ1eUJ1dHRvbk5hbWUsXHJcbiAgbG9jYXRpb25Jbk1haW5QYWdlLFxyXG4gIGV4cGlyeVRpbWVzdGFtcCxcclxuICBwcmVkaWN0aW9uLFxyXG4gIG9yZGluYXIsXHJcbiAgY2xpY2tCdXksXHJcbn0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihcImhvbWVcIiksXHJcbiAgICB0cmFuc2xhdGlvblBhdGggPSBgJHtsb2NhdGlvbkluTWFpblBhZ2V9YCxcclxuICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgW3Nob3dQcmVkaWN0aW9uLCBzZXRTaG93UHJlZGljdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICBbZ2FtZVN0YXJ0ZWQsIHNldEdhbWVTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gZ29Ub1ByZWRpY3Rpb25zKCkge1xyXG4gICAgLy8gc2V0U2hvd1ByZWRpY3Rpb24oIXNob3dQcmVkaWN0aW9uKTtcclxuICAgIHJvdXRlci5wdXNoKGAvcHJlZGljdGlvbmApO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhleHBpcnlUaW1lc3RhbXApO1xyXG4gIGxldCBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIGxldCBlbmQgPSBuZXcgRGF0ZShleHBpcnlUaW1lc3RhbXApLmdldFRpbWUoKTtcclxuXHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIChlbmQgLSBzdGFydCkgLyAxMDAwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3B9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtT25lSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8cD57dGVhbU9uZU5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lcl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxwPntnYW1lU3RhcnRlZCA/IGDQmNCz0YDQsCDQvdCw0YfQsNC70YHRjyBgIDogYNCY0LPRgNCwINC90LDRh9C40L3QsNC10YLRgdGPINGH0LXRgNC10LdgfTwvcD5cclxuICAgICAgICAgICAgICA8VGltZXJcclxuICAgICAgICAgICAgICAgIGV4cGlyeVRpbWVzdGFtcD17dGltZX1cclxuICAgICAgICAgICAgICAgIHRpbWVDbGFzcz17c3R5bGVzLnRpbWVyfVxyXG4gICAgICAgICAgICAgICAgdGltZU91dD17KCkgPT4gc2V0R2FtZVN0YXJ0ZWQodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1Ud29JY29ufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxwPnt0ZWFtVHdvTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd1ByZWRpY3Rpb24gJiYgKFxyXG4gICAgICAgICAgICAgIDxQcmVkaWN0aW9uTW9kYWxcclxuICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lPXt0ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lPXt0ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXt0ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXt0ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgIHByZWRpY3Rpb249e3ByZWRpY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvcmRpbmFyPXtvcmRpbmFyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fYnV0dG9uX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvVG9QcmVkaWN0aW9ucygpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKHByZWRpY3Rpb25CdXR0b25OYW1lKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1eV9idXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV5X2J1dHRvbl9jb250ZW50fSBvbkNsaWNrPXtjbGlja0J1eX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt0cmFuc2xhdGUoYnV5QnV0dG9uTmFtZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJlZGljdGlvbk1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZWRpY3Rpb25Nb2RhbCh7XHJcbiAgICB0ZWFtT25lTmFtZSxcclxuICAgIHRlYW1Ud29OYW1lLFxyXG4gICAgdGVhbU9uZUljb24sXHJcbiAgICB0ZWFtVHdvSWNvbixcclxuICAgIHByZWRpY3Rpb24sXHJcbiAgICBvcmRpbmFyXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtT25lSWNvbn0gYWx0PXtgJHt0ZWFtT25lTmFtZX0taWNvbmB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWUy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtVHdvSWNvbn0gYWx0PXtgJHt0ZWFtVHdvSWNvbn0taWNvbmB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b219PiBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm9yZGluYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VUaW1lciB9IGZyb20gXCJyZWFjdC10aW1lci1ob29rXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGltZXIoeyBleHBpcnlUaW1lc3RhbXAsIHRpbWVDbGFzcywgdGltZU91dCB9KSB7XHJcbiAgY29uc3QgeyBzZWNvbmRzLCBtaW51dGVzLCBob3VycywgZGF5cyB9ID0gdXNlVGltZXIoe1xyXG4gICAgZXhwaXJ5VGltZXN0YW1wLFxyXG4gICAgb25FeHBpcmU6ICgpID0+IHRpbWVPdXQoKSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3RpbWVDbGFzc30+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB7aG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBkYXlzID8gKGRheXMgKiAyNCkgKyBob3VycyA6IGhvdXJzfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA6PHNwYW4+e21pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXN9PC9zcGFuPjpcclxuICAgICAgICA8c3Bhbj57c2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kc308L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCI7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSBcIi4vQXJyb3dzL0Fycm93XCI7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9JdGVtL0l0ZW1cIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJkZWljdGlvblNsaWRlLm1vZHVsZS5zY3NzXCI7XHJcbi8vIGltYWdlcywgaWNvbnNcclxuaW1wb3J0IHByZWRpY3Rpb25CYWNrZ3JvdW5kIGZyb20gXCIvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHJlZEJhY2sucG5nXCI7XHJcbmltcG9ydCB7IHNsaWRlX2RhdGEgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGVcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliXCI7XHJcbmltcG9ydCB7IEdFVF9QUkVESUNUSU9OUyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnNcIjtcclxuaW1wb3J0IHsgc2V0TWF0Y2hJZCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJkZWljdGlvblNsaWRlKCkge1xyXG4gIGNvbnN0IFtzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50TWF0Y2hJZCwgc2V0Q3VycmVudE1hdGNoSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVxdWVzdChHRVRfUFJFRElDVElPTlMsIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKHJzcCkgPT4ge1xyXG4gICAgICAgIC8vIHRvYXN0KGBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZGApXHJcbiAgICAgICAgc2V0U2xpZGVEYXRhKFxyXG4gICAgICAgICAgcnNwLmRhdGEuZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0ZWFtT25lTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogaXRlbVtgdGVhbTFfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICB0ZWFtVHdvTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogaXRlbVtgdGVhbTJfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsQmV0OiBcItGC0LEgMSw1IC8gXCIsXHJcbiAgICAgICAgICAgICAgICBjb2VmZmljZW50OiBcItC60L7QtdGEIDMsNVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZSxcclxuICAgICAgICAgICAgICB0aW1lOiBpdGVtLnRpbWUsXHJcbiAgICAgICAgICAgICAgY29lZmZpY2VudDogaXRlbS5mYWN0b3IsXHJcbiAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6IFwiLnNsaWRlLnByZWRfYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogXCIuc2xpZGUuYnV5X2J1dHRvblwiLFxyXG4gICAgICAgICAgICAgIHByZWRpY3Rpb25UZXh0OiBcItCk0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNVwiLFxyXG4gICAgICAgICAgICAgIG9yZGluYXJUZXh0OiBgJHtpdGVtLnR5cGV9IC8gJHtpdGVtLnByaWNlfdGA0YPQsS5gLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlICsgXCIg0YDRg9CxLlwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAocnNwLmRhdGE/LmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc2V0Q3VycmVudE1hdGNoSWQocnNwLmRhdGEuZGF0YVswXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRNYXRjaElkICE9PSBudWxsICYmIGN1cnJlbnRNYXRjaElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TWF0Y2hJZChjdXJyZW50TWF0Y2hJZCkpO1xyXG4gICAgfVxyXG4gIH0sIFtjdXJyZW50TWF0Y2hJZF0pO1xyXG5cclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHByZWRpY3Rpb25CYWNrZ3JvdW5kLnNyYyArIFwiKVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgfSxcclxuICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgYnJlYWtwb2ludHMgPSBbXHJcbiAgICAgIHsgd2lkdGg6IDM3NSwgaXRlbVBhZGRpbmc6IFsyMSwgMCwgMjUsIDBdIH0sXHJcbiAgICAgIHsgd2lkdGg6IDYxNiwgaXRlbVBhZGRpbmc6IFs3OSwgMCwgNzksIDBdIH0sXHJcbiAgICAgIHsgd2lkdGg6IDE5MjAsIGl0ZW1QYWRkaW5nOiBbMTE1LCAwLCA0MywgMF0gfSxcclxuICAgIF07XHJcblxyXG4gIGZ1bmN0aW9uIHNsaWRlQ2hhbmdlKHApIHtcclxuICAgIHNldEN1cnJlbnRNYXRjaElkKHA/Lml0ZW0/LmlkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgIGJyZWFrUG9pbnRzPXticmVha3BvaW50c31cclxuICAgICAgICBvbkNoYW5nZT17c2xpZGVDaGFuZ2V9XHJcbiAgICAgID5cclxuICAgICAgICB7c2xpZGVfZGF0YS5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICBpZD17ZWwuaWR9XHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgdGVhbVR3b05hbWU9e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU9e2VsLnByZWRpY3Rpb25CdXR0b25OYW1lfVxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9e1wicHJlZGljdGlvblwifVxyXG4gICAgICAgICAgICBleHBpcnlUaW1lc3RhbXA9e2Ake2VsLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke2VsLnRpbWV9YH1cclxuICAgICAgICAgICAgcHJlZGljdGlvbj17ZWwucHJlZGljdGlvblRleHR9XHJcbiAgICAgICAgICAgIG9yZGluYXI9e2VsLm9yZGluYXJUZXh0fVxyXG4gICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PlxyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9wcmVkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9LFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHtcclxuICAgIHBhZ2UgPSAnY29tbW9uJyxcclxuICAgIHRleHRQYXRoTmFtZSA9IFwiWW91IGFyZSBkb250IHB1dCB0aGVyZSB0ZXh0LlwiLFxyXG4gICAgbG9jYXRpb25JblBhZ2UgPSBcIlwiLFxyXG4gICAgYWRpdGlvbmFsU3R5bGVzID0gbnVsbCxcclxuICAgIGFjdGl2ZSA9IGZhbHNlLFxyXG4gICAgY2xpY2sgPSBudWxsLFxyXG4gICAgY29udGFpbmVyU3R5bGVzID0gbnVsbCB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24ocGFnZSksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25JblBhZ2V9YCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2FkaXRpb25hbFN0eWxlc30gJHthY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogJyd9YH1cclxuICAgICAgICAgICAgc3R5bGU9e2NvbnRhaW5lclN0eWxlc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGVudH1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUodGV4dFBhdGhOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zdHMgfSBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dSaWdodC5wbmcnXHJcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93TGVmdC5wbmcnXHJcbmltcG9ydCBhcnJvd1N0eWxlcyBmcm9tICcuL0Fycm93Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFycm93KHsgdHlwZSwgb25DbGljaywgaXNFZGdlIH0pIHtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgcG9pbnRlciA9IHR5cGUgPT09IGNvbnN0cy5QUkVWID9cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd0xlZnQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd0xlZnR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93UmlnaHQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd1JpZ2h0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctcmlnaHRcIlxyXG4gICAgICAgICAgICAvPixcclxuXHJcbiAgICAgICAgc3R5bGVzID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBib3R0b206ICczNXB4JyxcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogJzEwJSdcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0VkZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvL2hvb2tzIFxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IExpa2VEaXNsaWtlRHJvcCB9IGZyb20gJy4vTGlrZURpc2xpa2VEcm9wL0xpa2VEaXNsaWtlRHJvcCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GZWVkQmFjay5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IGxpa2VJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2xpa2UucG5nJ1xyXG5pbXBvcnQgZGlzTGlrZUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZGlzbGlrZS5wbmcnXHJcbmltcG9ydCBmaWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2ZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgdW5maWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZlZWRCYWNrKHtcclxuICAgIGF2YXRhcixcclxuICAgIG5pa05hbWUsXHJcbiAgICByYXRlaW5nLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkYXRlLFxyXG4gICAgbGlrZXMsXHJcbiAgICBkaXNMaWtlcyxcclxuICAgIHJlYWN0aW9uc0ZvclRlc3RpbmdcclxufSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgc3RhcnMgPSBbMCwgMSwgMiwgMywgNF0sXHJcbiAgICAgICAgW3Nob3dSZWFjdGlvbnMsIHNldFNob3dSZWFjdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3B9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJ9IGFsdD17bmlrTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bmlrTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0ZWluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFycy5tYXAoKGVsLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwgPCByYXRlaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtNYXRoLnJhbmRvbSgpfSBzcmM9e2ZpbGxlZFN0YXIuc3JjfSBhbHQ9XCJzdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e01hdGgucmFuZG9tKCl9IHNyYz17dW5maWxsZWRTdGFyLnNyY30gYWx0PVwic3RhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV9saWtlc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpa2VzX2Rpc2xpa2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlrZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpa2VJY29uLnNyY30gYWx0PVwibGlrZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZlcnRpY2FsX2JvcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UmVhY3Rpb25zKCFzaG93UmVhY3Rpb25zKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpc0xpa2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkaXNMaWtlSWNvbi5zcmN9IGFsdD1cImRpc2xpa2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkaXNMaWtlc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93UmVhY3Rpb25zICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpa2VEaXNsaWtlRHJvcCBkYXRhPXtyZWFjdGlvbnNGb3JUZXN0aW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpa2VEaXNsaWtlRHJvcC5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnMgXHJcbmltcG9ydCBsaWtlSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9saWtlLnBuZydcclxuaW1wb3J0IGRpc0xpa2VJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2Rpc2xpa2UucG5nJ1xyXG5pbXBvcnQgYXZhdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2F2YXRhci5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpa2VEaXNsaWtlRHJvcCh7IGRhdGEgPSBbXSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXIuc3JjfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcGFydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZWwucmVhY3Rpb24gPyBsaWtlSWNvbi5zcmMgOiBkaXNMaWtlSWNvbi5zcmN9IGFsdD1cInJlYWN0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGVhdmVDb21tZW50Lm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9maWxsZWRTdGFyLnBuZydcclxuaW1wb3J0IHVuZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy91bmZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgQUREX0ZFRURCQUNLIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0IExvYWRpbmdCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL0xvYWRpbmdCdXR0b24nXHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGVhdmVDb21tZW50KCB7IG1hdGNoSWQgfSApIHtcclxuXHJcbiAgY29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29tbWVudEJveFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzIGNvbnN0c1xyXG4gICAgICAgIHN0YXJzID0gWzAsIDEsIDIsIDMsIDRdLFxyXG4gICAgICAgIFtzaW11bGF0b3IsIHNldFNpbXVsYXRvcl0gPSB1c2VTdGF0ZSgxKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdjb21tb25zLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgY29tbWVudDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBzdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoIG1hdGNoSWQgKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICBhd2FpdCByZXF1ZXN0KEFERF9GRUVEQkFDSywgeyBjb21tZW50OiBkYXRhLmNvbW1lbnQsIHN0YXJzOiBzaW11bGF0b3IsIG1hdGNoSWQgfSwge2F1dGg6IHRydWV9KTtcclxuICAgICAgICAgIGlmICggY29tbWVudEJveFJlZi5jdXJyZW50ICkgXHJcbiAgICAgICAgICAgIGNvbW1lbnRCb3hSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZXJyICkge1xyXG4gICAgICAgICAgdG9hc3QoIGVyci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IGDQndC10LLQvtC30LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINC+0YLQt9GL0LJgLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHl7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyc19hcmVhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnMubWFwKGVsID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxhdG9yID4gZWwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsoZWwgKyAxKSAqIE1hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZpbGxlZFN0YXIuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbXVsYXRvcihlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyhlbCArIDEpICogTWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dW5maWxsZWRTdGFyLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW11bGF0b3IoZWwgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRhcmVhX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY29tbWVudCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29tbWVudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2NvbW1lbnRCb3hSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ3BsYWNlSG9sZGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdCdXR0b24gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoJ3NlbmQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2FkaW5nQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2VzLCBhY3RpdmVQYWdlLCBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVQYWdlID0gYWN0aXZlUGFnZSA9PT0gZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmVQYWdlID8gJ3RydWUnIDogJ2ZhbHNlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZH0gJHtpc0FjdGl2ZVBhZ2UgJiYgc3R5bGVzLmFjdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Tb3J0aW5nLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnRpbmcoe1xyXG4gICAgc29ydGluZ1RleHQsXHJcbiAgICBkYXRlU29ydGluZ1RleHQsXHJcbiAgICByYXRlU29ydGluZyxcclxuICAgIHNvcnRCeURhdGUsXHJcbiAgICBzb3J0QnlSYXRlLFxyXG4gICAgZGF0ZUFjdGl2ZVxyXG59KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKGBob21lYCksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3Rlc3RpbW9uaWFscy5zb3J0aW5nLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKHNvcnRpbmdUZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnlEYXRlfSAke2RhdGVBY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogbnVsbH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NvcnRCeURhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKGRhdGVTb3J0aW5nVGV4dClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NvcnRCeVJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXshZGF0ZUFjdGl2ZSA/IHN0eWxlcy5hY3RpdmUgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKHJhdGVTb3J0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vVGl0bGUvVGl0bGUnXHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi9BcnJvd3MvQXJyb3cnXHJcbmltcG9ydCB7IEZlZWRCYWNrIH0gZnJvbSAnLi9GZWVkQmFjay9GZWVkQmFjaydcclxuaW1wb3J0IHsgZmVlZGJhY2tfZGF0YSB9IGZyb20gJy4vZmVlZF9iYWNrX2RhdGEnXHJcbmltcG9ydCB7IExlYXZlQ29tbWVudCB9IGZyb20gJy4vTGVhdmVDb21tZW50L0xlYXZlQ29tbWVudCdcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBTb3J0aW5nIH0gZnJvbSAnLi9Tb3J0aW5nL1NvcnRpbmcnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGVzdGltb25pYWxzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX0ZFRURCQUNLIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBnZXRNYXRjaElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvbWF0Y2hTbGljZSdcclxuXHJcbmltcG9ydCBhdmF0YXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvYXZhdGFyLnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0aW1vbmlhbHMoe1xyXG4gICAgcGFnZSxcclxuICAgIGxvY2F0aW9uSW5QYWdlLFxyXG4gICAgdGV4dFBhdGhOYW1lXHJcbn0pIHtcclxuICAgIGNvbnN0IG1hdGNoSWQgPSB1c2VTZWxlY3RvcihnZXRNYXRjaElkKTtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzXHJcbiAgICAgICAgW2ZlZWRCYWNrcywgc2V0RmVlZEJhY2tzXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICBbZGF0ZUFjdGl2ZSwgc2V0RGF0ZUFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1hdGNoSWQgIT09IG51bGwgICYmIG1hdGNoSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0KEdFVF9GRUVEQkFDSyhtYXRjaElkKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHByZWRpY3Rpb25zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGZWVkQmFja3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25zLmRhdGEuZGF0YS5tYXAoZmVlZEJhY2sgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVpbmc6IGZlZWRCYWNrLnN0YXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGZlZWRCYWNrLmNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlczogK2ZlZWRCYWNrLmxpa2VDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc0xpa2VzOiArZmVlZEJhY2suZGlzbGlrZUNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4geyBjb25zb2xlLmxvZyhlcnIpIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21hdGNoSWRdKVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGZvciBzb3J0aW5nXHJcbiAgICBjb25zdCBzb3J0aW5nID0gKHRvU29ydCwgc29ydGluZ0J5LCBkYXRlQWN0aXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRvU29ydC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldFxyXG4gICAgICAgICAgICAgICAgZGF0YUZvclNvcnRpbmcgPSB0b1NvcnQucmVkdWNlKChhYywgZWwpID0+IGFjLmNvbmNhdChlbCkpLFxyXG4gICAgICAgICAgICAgICAgc29ydGVkRGF0YSA9IFtdLFxyXG4gICAgICAgICAgICAgICAgc29ydGVkID0gW11cclxuXHJcbiAgICAgICAgICAgIGlmIChzb3J0aW5nQnkgPT09IFwiZGF0ZVwiKSBzb3J0ZWQgPSBkYXRhRm9yU29ydGluZy5zb3J0KChhLCBiKSA9PiAoYi5kYXRlLnNvcnRGb3JtYXQgLSBhLmRhdGUuc29ydEZvcm1hdCkpXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNvcnRpbmdCeSA9PT0gXCJyYXRlXCIpIHNvcnRlZCA9IGRhdGFGb3JTb3J0aW5nLnNvcnQoKGEsIGIpID0+IChiLnJhdGVpbmcgLSBhLnJhdGVpbmcpKVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5jZWlsKGRhdGFGb3JTb3J0aW5nLmxlbmd0aCAvIDMpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJdGVtcyA9IFtdXHJcbiAgICAgICAgICAgICAgICBzb3J0ZWQuZm9yRWFjaCgoZWwsIHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAoeCA8IGkgKiAzKSAmJiAoeCA+PSAoKGkgKiAzKSAtIDMpKSAmJiBzb3J0ZWRJdGVtcy5wdXNoKGVsKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNvcnRlZERhdGEucHVzaChzb3J0ZWRJdGVtcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRGZWVkQmFja3Moc29ydGVkRGF0YSlcclxuICAgICAgICAgICAgc2V0RGF0ZUFjdGl2ZShkYXRlQWN0aXZlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEFydGlmaWNpYWwgcmVhY3Rpb25zIGRhdGEgXHJcbiAgICBjb25zdCByZWFjdGlvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJMb3JlbSBJcHN1bVwiLFxyXG4gICAgICAgICAgICByZWFjdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJMb3JlbSBJcHN1bVwiLFxyXG4gICAgICAgICAgICByZWFjdGlvbjogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiTG9yZW0gSXBzdW1cIixcclxuICAgICAgICAgICAgcmVhY3Rpb246IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZmVlZEJhY2tzICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17dGV4dFBhdGhOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17bG9jYXRpb25JblBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlZWRfYmFja3NfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvcnRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRpbmdUZXh0PXtcInNvcnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVTb3J0aW5nVGV4dD17XCJieURhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVTb3J0aW5nPXtcImJ5UmF0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5RGF0ZT17KCkgPT4geyBzb3J0aW5nKGZlZWRCYWNrcywgXCJkYXRlXCIsIHRydWUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0QnlSYXRlPXsoKSA9PiB7IHNvcnRpbmcoZmVlZEJhY2tzLCBcInJhdGVcIiwgZmFsc2UpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlQWN0aXZlPXtkYXRlQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclBhZ2luYXRpb249e1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRCYWNrcy5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZEJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtlbC5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pa05hbWU9e2VsLm5pa05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVpbmc9e2VsLnJhdGVpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtlbC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZS5yZW5kZXJGb3JtYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VzPXtlbC5saWtlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzTGlrZXM9e2VsLmRpc0xpa2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uc0ZvclRlc3Rpbmc9e3JlYWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVhdmVDb21tZW50IG1hdGNoSWQ9e21hdGNoSWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vaWNvbnNcclxuaW1wb3J0IGF2YXRhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9hdmF0YXIucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGZlZWRiYWNrX2RhdGEgPSBbXHJcbiAgICAvLyBlYWNoIGFycmF5IGFyZSBuZXcgcGFnZVxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAyLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0ZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxNS4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTVcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDEsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0ZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMS4wNi4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDYtMDFcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDEsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAxLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMi4wNC4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDQtMDJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAxLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMi4wNC4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDQtMDJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAxLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMi4wNC4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDQtMDJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbl0iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGl0bGUubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaXRsZSh7XHJcbiAgcGFnZSA9IFwiY29tbW9uXCIsXHJcbiAgdGV4dFBhdGhOYW1lID0gXCJZb3UgYXJlIGRvbnQgcHV0IHRoZXJlIHRleHQuXCIsXHJcbiAgbG9jYXRpb25JblBhZ2UgPSBcIlwiLFxyXG4gIHRleHRTdHlsZXMgPSBudWxsLFxyXG4gIGhyZWYsXHJcbiAgY2xhc3NlcyxcclxufSkge1xyXG4gIGNvbnN0IC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKHBhZ2UpLFxyXG4gICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHtsb2NhdGlvbkluUGFnZX0ke2tleX1gKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAge2hyZWYgPyAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBzdHlsZT17dGV4dFN0eWxlc31cclxuICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0cmFuc2xhdGUoYCR7dGV4dFBhdGhOYW1lfWApfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBzdHlsZT17dGV4dFN0eWxlc30gY2xhc3Nlcz17Y2xhc3Nlc30+XHJcbiAgICAgICAgICB7dHJhbnNsYXRlKGAke3RleHRQYXRoTmFtZX1gKX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdCdXR0b24oIHsgbG9hZGluZywgY2hpbGRyZW4sIC4uLnByb3BzICB9ICkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIHsuLi5wcm9wc30gdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7IFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJywgXHJcbiAgICAgIG9wYWNpdHk6IGxvYWRpbmcgPyAnMC41JyA6ICcxJywgXHJcbiAgICAgIHBvaW50ZXJFdmVudHM6IGxvYWRpbmcgPyBgbm9uZWAgOiBgdW5zZXRgXHJcbiAgICB9fSA+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICB7IFxyXG4gICAgICAgIGxvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYGFic29sdXRlYCxcclxuICAgICAgICAgICAgdG9wOiBgMTVweGAsXHJcbiAgICAgICAgICAgIGxlZnQ6IGA4MHB4YFxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxMb2FkZXJcclxuICAgICAgICAgICAgICB0eXBlPVwiUHVmZlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCIjMDBCRkZGXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICB0aW1lb3V0PXszMDAwfSAvLzMgc2Vjc1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6XHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgfVxyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSdcclxuXHJcblxyXG5jb25zdFxyXG4gICAgaGFuZGxlX292ZXJmbG93X29uX29wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9ICdhdXRvJ1xyXG4gICAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHtcclxuICAgIG9uQ2xvc2UsXHJcbiAgICAvLyBjbG9zZVdpdGhWZWN0b3JlID0gbnVsbCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgY29udGFpbmVyU3R5bGVzID0gbnVsbCxcclxuICAgIGNvbnRlbnRTdHlsZXMgPSBudWxsLFxyXG4gICAgb3RoZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgcG9ydGFsTG9jYXRpb24gPSAnbW9kYWwtY29udGVpbmVyJyB9KSB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dNb2RhbCh0cnVlKVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtoYW5kbGVDbG9zZV0pXHJcblxyXG4gICAgY29uc3Qgbm9kZSA9IHVzZVJlZigpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSBlID0+IHtcclxuICAgICAgICBpZiAobm9kZT8uY3VycmVudD8uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvbkNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgICAgIGRpbmFtaWNUb3AgPSB3aW5kb3cuc2Nyb2xsWVxyXG5cclxuICAgIHNob3dNb2RhbCA/IGhhbmRsZV9vdmVyZmxvd19vbl9vcGVuKCkgOiBoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UoKVxyXG5cclxuICAgIGNvbnN0IG1vZGFsID0gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxDb250ZWluZXJ9ICR7Y29udGFpbmVyU3R5bGVzfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0b3A6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCAhaW1wb3J0YW50J1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxDb250ZW50fSAke2NvbnRlbnRTdHlsZXN9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtvdGhlclN0eWxlc31cclxuICAgICAgICAgICAgICAgIHJlZj17bm9kZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgaWYgKHNob3dNb2RhbCkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICAgIG1vZGFsLFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3J0YWxMb2NhdGlvbilcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybiBudWxsXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGhvc3QgPSBcImh0dHBzOi8vd3d3LmZvb3RiZXQyNC5jb20vYXBpXCI7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9ICggZGVzdGluYXRpb24sIHBheWxvYWQgPSBudWxsLCBvcHRpb25zID0gbnVsbCApID0+IG5ldyBQcm9taXNlKCAoIHJzbHYsIHJqY3QgKSA9PiB7XHJcbiAgbGV0IGhlYWRlcnMgPSB7fTtcclxuXHJcbiAgaWYgKCBvcHRpb25zICkge1xyXG4gICAgaWYgKCBvcHRpb25zLmF1dGggPT09IHRydWUgKSB7XHJcbiAgICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKGBhY2Nlc3MtdG9rZW5gKX1gIHx8IGBgIC8vIGZvciBtb3N0IG9mIHJlcXVlc3RzXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIGBoZWFkZXJzYCBpbiBvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVycyBpbnN0YW5jZW9mIE9iamVjdCApIHtcclxuICAgICAgaGVhZGVycyA9IHsgLi4uaGVhZGVycywgLi4ub3B0aW9ucy5oZWFkZXJzIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKCBgc3RhcnQgbG9hZGluZ2AgKTtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6IGRlc3RpbmF0aW9uLm1ldGhvZCxcclxuICAgIHVybDogZGVzdGluYXRpb24udXJsLFxyXG4gICAgaGVhZGVycyxcclxuICAgIGRhdGE6IHBheWxvYWQgfHwge31cclxuICB9KVxyXG4gIC50aGVuKCByc2x2IClcclxuICAuY2F0Y2goIHJqY3QgKVxyXG4gIC5maW5hbGx5KCAoKSA9PiBjb25zb2xlLmxvZyggYGVuZCBsb2FkaW5nYCApIClcclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIHZhciBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XHJcbiAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBjID0gY2FbaV07XHJcblxyXG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xyXG4gICAgICBjID0gYy5zdWJzdHJpbmcoMSwgYy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSBuYW1lID0+IHtcclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz07IFBhdGg9LzsgRXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChuYW1lLCB2YWx1ZSwgZGF5cykgPT4ge1xyXG4gIGxldCBleHBpcmVzID0gXCJcIjtcclxuXHJcbiAgaWYgKGRheXMpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBob3N0XHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IEFVVEhfVVJMID0gaG9zdCArIGBhdXRoL2A7XHJcbmNvbnN0IEFDQ09VTlRfVVJMID0gaG9zdCArIGBhY2NvdW50L2BcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ3JlZ2lzdHJhdGlvbicsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyAnbG9naW4nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUNDT1VOVF9JTkZPID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAnaW5mbycsXHJcbiAgbWV0aG9kOiAnZ2V0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lNQUdFID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAncHJvZmlsZS1pbWFnZScsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVJUX1JFU0VUX1BBU1NXT1JEID0gZW1haWwgPT4gKHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL3Jlc2V0P2VtYWlsPSR7ZW1haWx9YCxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBWRVJJRllfUEFTU1dPUkRfUkVTRVQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC92ZXJpZnlfY29kZWAsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX05FV19QQVNTV09SRCA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL25ld19wYXNzd29yZCBgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9ORVdTID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbmV3c2AsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVMgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBtYXRjaC1vZi10aGUtZGF5YCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkgPSAoZGF5KSA9PiAoe1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbWF0Y2gtb2YtdGhlLWRheT9kYXRlPSR7ZGF5fWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX09GX05FWFRfREFZID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbWF0Y2gtb2YtdGhlLWRheT90eXBlPW5leHRfZGF5YCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJFRElDVElPTlMgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBwcmVkaWN0aW9uYCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRkVFREJBQ0sgPSBpZCA9PiAoe1xyXG4gIHVybDogaG9zdCArIGBmZWVkYmFjay8ke2lkfT9zb3J0X2J5PWNyZWF0ZWRfYXQmb3JkZXJfYnk9ZGVzY2AsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX0JZX1RZUEUgPSB0eXBlID0+ICh7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBnYW1lP3R5cGU9JHt0eXBlfWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9GRUVEQkFDSyA9IHtcclxuICB1cmw6IGhvc3QgKyBgZmVlZGJhY2tgLFxyXG4gIG1ldGhvZDogYHBvc3RgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU1RBVElTVElDUyA9IHtcclxuICB1cmw6IGhvc3QgKyBgYWRtaW4vc3RhdGlzdGljc2AsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZXRlY3REb21haW5Mb2NhbGU9ZGV0ZWN0RG9tYWluTG9jYWxlO2Z1bmN0aW9uIGRldGVjdERvbWFpbkxvY2FsZShkb21haW5JdGVtcyxob3N0bmFtZSxkZXRlY3RlZExvY2FsZSl7bGV0IGRvbWFpbkl0ZW07aWYoZG9tYWluSXRlbXMpe2lmKGRldGVjdGVkTG9jYWxlKXtkZXRlY3RlZExvY2FsZT1kZXRlY3RlZExvY2FsZS50b0xvd2VyQ2FzZSgpO31mb3IoY29uc3QgaXRlbSBvZiBkb21haW5JdGVtcyl7dmFyIF9pdGVtJGRvbWFpbixfaXRlbSRsb2NhbGVzOy8vIHJlbW92ZSBwb3J0IGlmIHByZXNlbnRcbmNvbnN0IGRvbWFpbkhvc3RuYW1lPShfaXRlbSRkb21haW49aXRlbS5kb21haW4pPT1udWxsP3ZvaWQgMDpfaXRlbSRkb21haW4uc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpO2lmKGhvc3RuYW1lPT09ZG9tYWluSG9zdG5hbWV8fGRldGVjdGVkTG9jYWxlPT09aXRlbS5kZWZhdWx0TG9jYWxlLnRvTG93ZXJDYXNlKCl8fChfaXRlbSRsb2NhbGVzPWl0ZW0ubG9jYWxlcykhPW51bGwmJl9pdGVtJGxvY2FsZXMuc29tZShsb2NhbGU9PmxvY2FsZS50b0xvd2VyQ2FzZSgpPT09ZGV0ZWN0ZWRMb2NhbGUpKXtkb21haW5JdGVtPWl0ZW07YnJlYWs7fX19cmV0dXJuIGRvbWFpbkl0ZW07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuICAgIGltcG9ydCBfX2xvYWROYW1lc3BhY2VzIGZyb20gJ25leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzJ1xuICAgIFxuaW1wb3J0IE1haW4gZnJvbSAnL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYWluJ1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4gPE1haW4gLz5cclxuXHJcbkluZGV4UGFnZS5sYXlvdXQgPSBcIm1haW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuXG5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuLi4oYXdhaXQgX19sb2FkTmFtZXNwYWNlcyh7XG4gICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvaW5kZXgnLFxuICAgICAgICAgICAgICBsb2FkZXJOYW1lOiAnZ2V0U3RhdGljUHJvcHMnLFxuICAgICAgICAgICAgICAuLi5fX2kxOG5Db25maWcsXG4gICAgICAgICAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIG1hdGNoSWQ6IG51bGxcclxuICAgIH0sXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldE1hdGNoSWQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1hdGNoSWQgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRNYXRjaElkIH0gPSBtYXRjaFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNYXRjaElkID0gc3RhdGUgPT4gc3RhdGUubWF0Y2gubWF0Y2hJZFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hTbGljZS5yZWR1Y2VyIiwiLy8gaWNvbnNcclxuaW1wb3J0IGF0bGV0aWNvSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2JhcmNhLnBuZydcclxuaW1wb3J0IHBzakljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3Bzai5wbmcnXHJcbmltcG9ydCBhdGxldGljSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCByZW5uYWlzSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmcnXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVfZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWUxJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwi0J7RgNC00LjQvdCw0YBcIixcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lMicsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkdCw0YDRgdC10LvQvtC90LAnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQn9Ch0JYnLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcItCt0LrRgdC/0YDQtdGB0YFcIixcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMjUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWUzJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9Cc0LDRgNGB0LXQu9GMJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcmVubmFpc0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTgwMCDRgNGD0LEuICdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lNCcsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lNScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTYnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nXHJcbiAgICB9LFxyXG5dIiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMuMjgzODIwZmQyNmFlMzA4NTQyYzQ5OTg3NDdmNmYxNTAucG5nXCIsXCJoZWlnaHRcIjo2MyxcIndpZHRoXCI6NTgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTZVbEVRVlI0MmpYS3YyckNVQmdGOER2NE1vVytSNGZPaFQ1TDdSZ1hONkZMQzVFVUhCcHEwZzRYR2tXdzRvMjVYTkFoRUM1Sk1MbUtVZkRQb0tBSTBlL1REUDZXd3prY0VzZHg3dnMrY3M1QkNBRkJFSUFZamZDNkFWRks3Wklrd1NnTXdmVThrRktDYXhpbzBuUlBHR094cnV2NHFtbG5xOUdBOVk5OW5sQ0tUcWVUa01WOGJsNFArRld0bmpiTmJ6amE5aW1MSWh3clpSRlBpS2ZaZElxcmovY2NlLys0ck5melJaYmhnUE5uVWhpbnFaRDlQbTQvalVQUTdhSU13eUc1MFNxVk82ZmRQakRMd2w5S2p5L2w4ajBwTU5jdEZkazB6UWZhYXVWdnRkcGowZjhjcDNRQldmeWJqNTArY29zQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLjJjZTc1ZTIxMTYyZTJlNmRjNDhiOTllNjAxODEwN2UwLnBuZ1wiLFwiaGVpZ2h0XCI6NjIsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUEwMGxFUVZSNG5BSElBRGYvQVd4dGhzVGUzK2N4OHZQNkNnd0tCQUFHQndYMkJoQU96d0dEaEpiL056WXVBTnpjNGY4RUJ3Y0F5TWZTQVJEaTRRQUJqNUNnL0JFUURRTDcvLzhCdktxK0FIdDhYdi9qcjZ2L0FXaHBndjMxOXZrQ01ERWwveS84N0FBeVMwZ0J3NldxL3dGZWFJUC9Kd0gyL1ZsV1JBUCsrdm9BQ0JNVC9kQ3dzd01Cbm9XTzlVNVFSUXJ0NE4vOC92Ny9BQkVkSFFURnNMYjNBWTJUb1RBb0J2Nm1KU0FZS1FBQUFBRGM0ZWpZeXY0S1d3RnFJMFlBbHQyNkJybXNzcnNBQUFBQlIxUk9SVlVvVWZsK2xWdHJTVEN5NFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2F2YXRhci5iZTA2YmRjMDU0MzBmNWNkY2ZiODRmN2E5ZTU0MjExMy5wbmdcIixcImhlaWdodFwiOjc1LFwid2lkdGhcIjo3NixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBY0VsRVFWUjQyaDJHdlFuQ0FCUUd2MG44STA2ZzgrZ1lPbzIyMmxnSVdvcWtFeEViY1lab2tlUytBZkx5Q0FkM0o0dkNKWkhjbVZueXhIK0NGZXQweFVpY0hUd3N4RFB2SkZwSHpzNzdvYldBNE1LR0xWZUNScFI4TEpMMGw1dVk4dVBBZ3FXUFZJeUZtUE9tUzE0VXFBZHR5bUgzVGZGejBRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9kaXNsaWtlLjgzY2M3NjI0N2RkNDczYWIyYmIzNzVmY2UyNWI5MzFmLnBuZ1wiLFwiaGVpZ2h0XCI6MzIsXCJ3aWR0aFwiOjMwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFaa2xFUVZSNDJqM0xzUXNCQVFDRjhhZTRGTE93bUdRUW1VeVhRY2x3dzRuaEprcGh0UHZuZjVIaFhtLzR2dUdMUXVYaXJIWjNkWXRTYldCc2FwNm80bVdVZHZieGFHV20wTVRUMmtiZndzZkpNU1pXR2p1VlhsdGFPaWdUWFozOEhrTnYyL3o1QzlVK04yejByR0FuQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZmlsbGVkU3Rhci5iNDRhYTgxMmRjYmY5ZWIxNGU2NGFmNmM4ZTcyNzliMy5wbmdcIixcImhlaWdodFwiOjI2LFwid2lkdGhcIjoyOCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBaFVsRVFWUjQybVA0ZDlxSUVZaFpHWURnM3hsalBTQTJad0FDb0JnYkVETXhJQU9nUUNzUXowRVhOQURpVENBT0F1TGIvODRZdlFIU29VQ2NBY1FXSUFWQ1FEd2JpUC8vTzIzOEgyakZIeEFiaUZjQ3NSU3lTWDFBU2FBQ3NPUXlWR3RPNkRNQkJXOEE4UW9nbmduRXo0QUtlZUVLZ0J4dG9HQXVrbW1wUUd6SndNREFBQUFVRGwxazViTzVlQUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvbGlrZS4xNDMyZDhkNGMwNzQzN2I5NDY3YzUyNTllYjk0YjFkYy5wbmdcIixcImhlaWdodFwiOjMxLFwid2lkdGhcIjoyOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVFBQUFDZkRTMk5BQUFBWEVsRVFWUjQyalhMclFyQ0FBQkcwVStIMVNBMnc2SldzWWsveVdZUUJKVmhXZGpDR096OXkyRmg3T1I3TXpHNEpZcFlKdGFlN3BrNXVLb2NsZkh3MFZzNU9XdmliYXVjS3EvTWowV2lqa3RpbzBqcy9LTHoxYXY4dGZZajY0RXVtT0xGTTN3QUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci4yNjEwNWM1ZDRlNzgzNGRlNzk3ZWQ3MzQ1MDVlZTJiZi5wbmdcIixcImhlaWdodFwiOjI2LFwid2lkdGhcIjoyOCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBZmtsRVFWUjQybDJOc1FxRFFCQkVOeUY2VFZJR1VxWk5GeENMRXdXeFVCSEIza1lMOFRjOWYyengyUzB1UEdabnVKc1ZEZTZtSVg0SW95SDZzM3RobEF6dVlvZGdnUEVTdW9TdzFzM2w3QVZrdXNVbFdvRS9mMzFnd1pTbXllTlg5R3ZyZTNqcUhqbTB1OTUrd1FRdE5ERFQ4TFlQZmdTejhTTStGUkU1QUl3dlIwcURKQy9tQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL0NhbGVuZGFyLmU2MThkZjMzODdlZDEyM2I2NTFkNGVmMmFmOTE3ZmUyLnBuZ1wiLFwiaGVpZ2h0XCI6MzQsXCJ3aWR0aFwiOjM0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFhMGxFUVZSNDJnM0x1d3FDQUJRQTBQc0wvVUZMYzFNUUZZUmlJajBzZWhBMW1Zb05FZmIvd3lFNTh3a1R2YXZXeTkzUEpKVE9Na2NIdVlzeU5OSkJaaU94MW9WYzU2RlJlL3BLUXVydHBsWnA3ZFZoclZmcDdJeU5mRUloTVd4ekp6TjV5Q3dzclV3VnR1Wi9UaTVTMEtvMlA5RUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dMZWZ0LmUyMzcyYTBjNzhkOGM2YjI0NmJkZWUzZmZhYjQwZjdiLnBuZ1wiLFwiaGVpZ2h0XCI6MzUsXCJ3aWR0aFwiOjMxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE0MGxFUVZSNDJtTllzR0NCMklMNTg0M216NTFuc21EaFFxUDU4K2NiQThYMGdKaVhBU1FCWkJndldMVkNkLzYwR1Jielo4OHhtVDl2dmhsUVRKMEJwSExobnUycTgreGpaOHhMTDR0ZC9QcStCTkFFNC9uejVta3hMTmk2U1gydVpkU3llVnplSCtZNXhFMmZaeFcxYUg1RHU5ZUNOYXRVR0Jac1dLczFMemlqYWk2dno2TjVBWmxsOCtJSzB1ZjNUblJZc0d5cEdzUDhPWE5ORjU0K29qQXZMTHQ0WGs1bDVLS2I1MlVneHM3WFpnQzVET2dJaXdVYjEya0RWUnZPbnpYYmZQNzgrZVpBY1dXUUpDL0laVUFGT3ZQbnp0VUNzclVXekordnNtREJBallBalRWeFJNM2VuNzhBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2Fycm93UmlnaHQuYzZkNmQ5ZTEyMjJjNDE4ZjYwZmJiODE5NGQwOGE4MjMucG5nXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTRFbEVRVlI0MmhXT3ZVb0RRUlNGejcwenMrdktKcVlSd1ZnS1FzVENoN0F6aGJYVm9xOWc0Wk5ZYUxHTklQWldBYXRVYWRPRlFBS0JGRW1LaE0wUG0yVHV6YVQ0NEhENGlvL3lQRDhIVUEvUUVmWGVrREVsZ0FFRHVGSVJwOXVkVXk5TXRjbzZDQW1BU3c2SG9TUXViZlkwMEwvT2czei9OL24yZW5xVUxkWFNqYlM3RGZscVpTaDlyTzFaNXFOZk5hK1BQd3hSd0xGSE5WNGdZcUdVQzV5R1hXNE5vMWlkOFAxTjMzNitmK0NpMnNOejQ4MjhORnM2bnFRVWF1OVVKTUZ1ejNSVzJjQ3k2THhJeWJtWkJUQWtvcnBHenVoeURRQkUxazVKTVRvQWNSTmNFZXgwbDBnQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwuZWI0NjA0ODY0Y2UyNDAxYWEyNGZiNGVkMjcxZjZlODMucG5nXCIsXCJoZWlnaHRcIjo1MyxcIndpZHRoXCI6NDEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXRVbEVRVlI0Mm1Pb243T0ZsUUVJN2k1bjBIMjRna0VkeEc2Y3N3a29CZ0xUYnJqYXpMZ1Fhekg5WWdLUWJROFJuSDZkbjNuNnRmMUFnVTZHYWRlbkFObmJnVFFYVVBXMWJpQmVEeFJZd1RUdCtscWd3alZBaVZZR29PQjJJRjRFeEJlQkF1Y1pwbDliQW1SdlpoQ2FmbTJENFBScmkvbW1YNXNCWlBjS1RMKzJEb2dYQUhYY2FXR1lkcnVYWWVxZFVJYXBkd09CN01sQVhNZXdZbjVmOXQ1Rm1SNHJGM1E3cjEzUTVyVjNVWmJUb3ZsVFlnQUZaVmZBZXVaV1BRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5kN2Y1OTczMDQ5NDc0MDBmYjIwZjA1ZTJkYWU2YjVmYi5wbmdcIixcImhlaWdodFwiOjUxLFwid2lkdGhcIjo0NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBNmtsRVFWUjQybVBZM2NHamtlSFBlVGZFZ3VIY1ZnT0cvYytEeEsrOVNGWTkrMjJEZ0FERHVqWTljM1VHaHY5SHE2di9IMSs2NVAvYXBMVC9UMndZUHY3WTRDekIwRmFxNXAvSXdQRC8xOEg5dng5ZHUvcG45YXBWLzI3ck1mejhNOU5ObDZFNlhxcVhnWUhoLzYyK3J0KzdlcnYvTDZ1dS92TlFtdUgvNndxRFZJWmNmNEV0eXNibS85MU1ESDV2OFBQOC96alk4OWZUWU8vL3p6TlUraGdhRTNnbU9Ka1ovV2V3ZFBpL0k4am45OXVvOFArUHc5My92eTZUeldENGY0NkJveldHb1YvYWdPSExSaDJCLzYvOVpGOC95MmFvWkVBR3U2YUlxNTJ1a09uNWYwQmZHQ1lHQU5aS1pzRmMyMXZIQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93TGVmdC5kNmQ1MGZmYWNlMzIyMGNhY2VlODhjZDVlNTU1NjAxYS5wbmdcIixcImhlaWdodFwiOjM1LFwid2lkdGhcIjozMSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBelVsRVFWUjQybVA0Ly8rLzhMOS8vL1IvLy94bEJHUWJBTm1HUUZvSFNITXpBQW1EdjMvK21JSUVmbjMvWWZyejIzZlR2My8vbWdINTZneC9mdjgyQmpLVXRoVzFkWjZhdnpvSnlCWUhZaU9nQmgwR0lFTnRVM2I5OUhrTW5oODJwOWROM0pSU1BlWEJpWE5lUUhGVmtLVEdudGJKZFFzRS9KL3RxdWx0Mk44NXZmejV0VnN1SUUwTXYzLytOQVV5RlBhMVQ2czR2M0p6TkpBdENUVldtd0hJQUxyMHB6bVExZ1ppdzUvZnZwbi8rL3NYeEZjRnVaWWZ5TkQ2OWVPSDNwL2ZmM1NnM2xELzkrOGZCd0JqOXFQUGorNDdrZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93UmlnaHQuOTExZmM5ZTg0ZTA0NDYzNzgwYTNiNzU5MThhNjU1YTcucG5nXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQXlVbEVRVlI0Mm1QNDkrK2ZNQkRyL2YvLzMrRGYzNzhHdjMvOU1nS3lkWUJpM0F3Z3diOS8vcGorK1ByTkRNZzJCa244L3ZuTEFraXJNZno1L2RzRXlBRHBGTjNmTnEzMHlPU0YyVUMyRWxDeExraW45dFZkQjhKMk5QUjJiaTFwblRpZnplZnQ4Vm5MUUFvVXdKSlhkdTBQMjluWTE3NHh1M2JPZkVidkR5Zm5yMG9IaWl1Q2pBWFpvd3ZFWW9jbnpNczd2WGh0QXBDdC9QUGJkejJRVGoyZ2c4eStmL2xpQVhJY1NPSHZuejh0Z2JRcUE5REovRUNzQlhibHIxOGdDWkRqMVAvOSs4Y0JBSnk5bytqQ1hXZENBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL25ld3MvZm9ydEJhY2suMmZhYzRhNTNmMDZlMGQ3YjUwOGQwMzk1OGQ2YzExYWYucG5nXCIsXCJoZWlnaHRcIjozMjQsXCJ3aWR0aFwiOjM3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBOGtsRVFWUjRuQUhuQUJqL0FXbU5WY3FYQk1nQmFRbzhBUFhUOGdBTEZBZ0FCUWdIQU5ETzRRQXVLeXdBQVdPQ1VNejBEQTRBM04zZEFNM2kxZ0JFTERZQUZQMzlBTzdtOWdBMU1VUUFBWHlOWjhzbEdnd0EzcWFOQUNSQ1pBRGUzdGNBOHhRcUFDQW1OUUR5OCs0QUFWWnZPc3ZQNXRnQW5HS2JBRDRkQVFEU3BLQUFuT3NXQU9zTjhBRHI4OVFBQVZ4dldjc2pGeDhBVVR4R0FPeThwQUMrcDdzQUl5Z0RBSWdBQmdBUy9RY0FBVnhrVzh6bjl1OEFnVDhuQU51K3h3Q2pxY2dBSHlvVEFKLzhDUUFhL1BvQUFVcFpNTWtCL2ZvQUR2L3pBQkgyQmdDV3plb0FBUGNBQUFzQUFBRDVCUUlBVzdGV0RtcTFJM3NBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL3NlY0JhY2suMGNlZDg5NTg2MDU2MGE5MDNhMWM2YmMzM2Y4MzVhZjMucG5nXCIsXCJoZWlnaHRcIjozMjQsXCJ3aWR0aFwiOjM3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBNDBsRVFWUjRuQTNNdlVyRFVCaUE0ZmV6VGRMQmRtaE5RRW9uQlJjZHhLVUVCeGNuOFM1YzNkMUV2QUhkdlFHdm9ZaXIyS0M0ZExLakJCS3RwQ1hOejBuT2FmYUhSMDZmWHQ0dlQxeHBiY0Z2WlFoTHcxK3BTWElobnMyUTIrZlh3RC8wU1BNS1JVM1d3SjhhNWlYOE4xQWVKeC9UejNuQ1Y1Z3ozT2x5UExMeGQ1dEJ3eVN5a1BIVnpmU3Q2SEEzM3NjLzZGSFZDcTFLRm1HSFRLK1JpN085d0RpdUdRdzkzRzRDU3NoTFJSeHA3UFlLdVg0WUJaWmRtS1dPeEdSOVduWFBGR3N0L2Z6SUxHSkg1UHkrRlJTcWJYUzVqVjQ2cEtsRi9KMHd3R05WWkd3QUxSQnI1Yk5aK1RrQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy90cmRCYWNrLjE2M2JkMzk1ZWFhZjBjOWQ1ZDI1M2VhZDk5YmFiY2ZkLnBuZ1wiLFwiaGVpZ2h0XCI6MzI0LFwid2lkdGhcIjozNzIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQTJVbEVRVlI0MmczTnNVNkRVQlFHNFAvQWdWdm9wUkFXYTB5MHdVUUh1NXVZT0RyNHdEVU9PanAxTlViSEpxWXhwTkJTeE5KZUxzZCtML0RSMCt4NWJydU9obEVzTG51d3ZVQVBmREF6cmFvLzRiZlhHYTJyUmtJRzFadGFzc2tZVmx6cUtCQldURTYrWE1qRGVVV2VhV1Y4Y1lOTTk3aWtML24rL0tCcyt5TE83YjFDRU9SeWZYZUNxMm1HMW5QUnBBclR4MWdXdndaT1VUYVlIelNDNUJScFlsQjA3NURSRUZFcThDZG40QVA1cEpNQnltS0pyVlBDTXFOWEx2WlZEeDJINEx6ZTJIVkx4MllGcFVZSW93UjFzOFBlR01qUER2ODE5bHpOU01POWdBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0LmFkNzg5NzZlNjMzMzc3OGEyMDdjOGI0NjQwYzAyOWViLnBuZ1wiLFwiaGVpZ2h0XCI6NzA0LFwid2lkdGhcIjoxMjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFJQ0FZQUFBQTRHcFZCQUFBQUYwbEVRVlI0bkdQODkrK2ZJSWdRQWhGZ0Zob0JrUUFBOHd3WVk4aFZPeEFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93TGVmdFZlY3Rvci5kODQ1OGRhZGEzNjdkODE1NWU3MGYzMWYzM2U3ZjUxZi5wbmdcIixcImhlaWdodFwiOjM4LFwid2lkdGhcIjo0MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBajBsRVFWUjQybVBZeU9uT3ZJblRuWjBCQ0RaeWVpd0E0cTlBTE04QUJKczRQVmdaa01GR0x2Y1FJUDRQVlBBTWlKVWdncHp1YmtDVmlVQWNEMlQ3QXZIbVRRaEZaZ3hBZ1Q5QVNhQUFVQkJJUTluZndJcTRQRzR6QUkxVUIzSnNnYlExa05ZRjRrMmJ1RHhBaXE4Q3hXUVpZQURxcUh5bzVDVWdGb1E1akFub0N6YW9lMXFCK0R4UWtoL3FLeFlBaERGRGxpeGFpam9BQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHQuZTlkYmE3ODU3NDc0OTFhY2I3OTk4Y2JiYjc0NmY0YzYucG5nXCIsXCJoZWlnaHRcIjo3MDQsXCJ3aWR0aFwiOjEzMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUlDQVlBQUFBNEdwVkJBQUFBRjBsRVFWUjRuR1A4OSsrZklJZ1FBaEVJRnBoQWNBVUI4ekVZWllKOFlJRUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dSaWdodFZlY3Rvci4wNmQ4YTUxODc0YzE4M2VjZDkxNTdiMWU0MGNjMDAwYi5wbmdcIixcImhlaWdodFwiOjM4LFwid2lkdGhcIjo0MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBbUVsRVFWUjQyazJPUFFvQ1FReUZnNzh3S2NRRGlHQmpaVzBoMWtsamFTMmV3RnQ0RGkrUUtmUWtDbmJXZXdQdFpQeGtkMkVmUENhODc0V0pSTEtob0ZDYk03L3hSVkJPUHM3Sit0TEFCYUFLOVJMSjk5SVZZRTJoWXFQdzNyTGFMcXNmMkQ2U21SQythdWdmWVBrYjJQb3JnQm1sWnhOY0thL0lObnkxSlYrMk4wenhBMGpKVHRJVllGQy9QbUcrNDdNZzdoaUZXdThId1hCRElDUFBPM2tBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2JhcmNhLjc1ZjllMjMwYmViNzllMjgyZDdhMGYzNjlhNmU2NjZlLnBuZ1wiLFwiaGVpZ2h0XCI6MjIzLFwid2lkdGhcIjoyMDYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTgwbEVRVlI0bkFIb0FCZi9BWitGUURNU0dSd3BCZmZ3R2ZFQUFOY005YzB0K0FJUjNmbjhIODRCc3A1YWJDc09QSk1DM3ZJQUFTenpBQWZwaFFEeEJTZ0F6L2M1UUFHWW1GdzJSUUE1eVFmVjl2d0lTZlVCQmUyQUErcjdNdXdsOW1NbUFjdWtNYVFoSTBSYjUrUDEvZmNCK3dJSDhadi9HQnNBQXRUa1AzUUJwSXhXc3ZYV0FrMzlCQUQ3Q3hId0JPM21IL3NPRndFR0VpVDNnd0dOaDE1cjk3a09sQUVRQndCRFZ0TCtzWHN0QWhFNStBQWhUd3c3QVFEL0FBRzBneStRNWZJMFh4QUg4Zy95K2czcEpSN2hodTl0dlpJQm5xWXVBQjdHMGdBVlNnQVk4T3BETmpGT09yM05qSVAxNDRZQUFMbXpZa1RPNXFqUUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wcmVkQmFjay4zMmE4OTY5M2U1NjRiNjhjYTRhN2FiMWQ3ZTIxZDI0YS5wbmdcIixcImhlaWdodFwiOjcwNCxcIndpZHRoXCI6MTkxOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQURDQVlBQUFDdXlFNUlBQUFBYmtsRVFWUjRuQUZqQUp6L0FUaytWdjRVR1FzQTkvanRBUHY2K3dBREEvNEFGeGtpQVBIdTl3QzZyYVlBQVRNOFZQOG5NUzRBL1ByOUFPL3E1d0QxOE84QUhTa2xBT1RhMXdETXZNTUFBVGN6UHY0cE5oMEFHekFRQUI0WkNnRHM3ZTRBeExQdkFOZlE2QUR4OC9FQVFBOHJkU3Z2SktvQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wc2ouY2U0YWMzMTk2YjkwMTI4MGNkZGI5YjdlMTdjNDg1ZmUucG5nXCIsXCJoZWlnaHRcIjoyMjUsXCJ3aWR0aFwiOjIyNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFCQTBsRVFWUjQybU9BZ2VMSnV5S2I1K3hmMHJIdzRLejhDVHRzUVdLZDh3OHdnaVVuclRvK2QrYmFFLy9uYmp6OWYvcWFFLzhuclRqNnYyL1owUnl3Wk1PYy9TazU3UnYvRjB6ZiszdGovNXJmY3lkdi9sVStZKy8vOU5hTi81ZnR2cVREVUR4eHgyYWZ2Q1gvR1NyWC8zbFozdkgvUVBtMC93eGxhMzlIbEN6LzM3L3NhQWxEOWVTZGErWHlsdjgvdG1Ecjc5c05QZjhmOWM3NHYzRGExbDhtQmN2L3oxeDlQSjlod3RJakFXR05HLzdQbjdENWYvSEVkYituek56OHE2MWwzZitVN3EzZkRweStvOEFBZHUzQ2d6V3gzZHYreHpScytKL1l0ZTEvN3VSZDMrZXNPeG5JZ0F6bXJqbHUycmxnZjFYZm9vTkZtL2RlQXV2TTc5ck1CQUE0QkltNkhHbmlBd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9zbGlkZUJhY2suYjA5YjViMjQzZjI3N2Q4ZmE3MTQyMWY3ZjEzMjQ1MjgucG5nXCIsXCJoZWlnaHRcIjozMjQsXCJ3aWR0aFwiOjM3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBMWtsRVFWUjQyZzNGdjA3Q1FCekE4ZS92dkJac3pzU2dSVVVUNHAvQnljVGRKM0QzZ1h3WEZ4Tk5qSXZQb0tNREN3TWhKQ0tJQWRyU2NvWGV3V2Y1eVAzajA5ZnB2cEc3YUk0TzRmcWlTZXM0WnJYTUtKM3lTa1NybjJKYlBaRHZ6dytaSkxuWWxaTXMrUmNkN2lyZEdhUytoeU9hRHJocTMvTDg5ZzZxb25sNFFqSjVSZmRtS1ppUWREaWtQL29qYXJUWXFkVVkyUW9iSEtIYm5SZCt4NWE5aHh2T0xzK3BoeEVDZUlRaUQ5RHh3VmhpNDdGaGwrNjhqemdRQmV1eXhPWWwyalJNWmJNSzVZVDF3dU8zNDhFV3duTGgyUURGS2xkWm42eUExZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJvd0xlZnRcIjogXCJBcnJvd19hcnJvd0xlZnRfXzFIdmlqXCIsXG5cdFwiYXJyb3dSaWdodFwiOiBcIkFycm93X2Fycm93UmlnaHRfXzEwck51XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJHYW1lUnVsZXNfY29udGFpbmVyX18zOGVsZVwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJHYW1lUnVsZXNfdHJhbnNpdGlvbl9fM1JMWlNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2luYXRpb25fY29udGFpbmVyX18zaWNYZ1wiLFxuXHRcInJvdW5kXCI6IFwiUGFnaW5hdGlvbl9yb3VuZF9fMzZ5ZnlcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fMk1pUk5cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2VQYXJ0aWNhbGVzX2NvbnRhaW5lcl9fM2Vwc3NcIixcblx0XCJ0aXRsZVwiOiBcIlBhZ2VQYXJ0aWNhbGVzX3RpdGxlX19VcEV5TlwiLFxuXHRcImJvZHlcIjogXCJQYWdlUGFydGljYWxlc19ib2R5X18xaE5BRlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU2xpZGVQYWdlc19jb250YWluZXJfXzNaaTFFXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIZWFkZXJfY29udGFpbmVyX18zWmRtY1wiLFxuXHRcInRpdGxlXCI6IFwiSGVhZGVyX3RpdGxlX19aUko4OVwiLFxuXHRcImJ1dHRvbnNcIjogXCJIZWFkZXJfYnV0dG9uc19fMTd2ZmJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk1hdGNoZXNfY29udGFpbmVyX18yS2EyelwiLFxuXHRcImNvbnRlbnRcIjogXCJNYXRjaGVzX2NvbnRlbnRfXzFQUV9FXCIsXG5cdFwiaW5fc2VwZXJldGVfcGFnZVwiOiBcIk1hdGNoZXNfaW5fc2VwZXJldGVfcGFnZV9fMi1fRnBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNwZWNpZmljRGF5TWF0Y2hlc0JvYXJkX2NvbnRhaW5lcl9fMWRBYVNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFycm93TGVmdFwiOiBcIkFycm93X2Fycm93TGVmdF9fM0d0QTRcIixcblx0XCJhcnJvd1JpZ2h0XCI6IFwiQXJyb3dfYXJyb3dSaWdodF9fMzMyOWxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2luYXRpb25fY29udGFpbmVyX18yc3hMeFwiLFxuXHRcInJvdW5kXCI6IFwiUGFnaW5hdGlvbl9yb3VuZF9fMWRJbFJcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fM1hJU3NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRETWF0Y2hlc0JvYXJkX2NvbnRhaW5lcl9fMlBKcmFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRNTWF0Y2hlc0JvYXJkX2NvbnRhaW5lcl9fMmRzSEhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlJvd19jb250YWluZXJfXzFXQk9oXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJSb3dEZXNjcmlwdGlvbl9jb250YWluZXJfXzIxOXQtXCIsXG5cdFwiY29udGVudFwiOiBcIlJvd0Rlc2NyaXB0aW9uX2NvbnRlbnRfXzJTZVhVXCIsXG5cdFwiZGF0ZV9nYW1lTlN0YXJ0ZWRfY29udGVudFwiOiBcIlJvd0Rlc2NyaXB0aW9uX2RhdGVfZ2FtZU5TdGFydGVkX2NvbnRlbnRfXzFNcUVKXCIsXG5cdFwiZGF0ZV9nYW1lU3RhcnRlZF9jb250ZW50XCI6IFwiUm93RGVzY3JpcHRpb25fZGF0ZV9nYW1lU3RhcnRlZF9jb250ZW50X18zR19aMlwiLFxuXHRcInRlYW1zXCI6IFwiUm93RGVzY3JpcHRpb25fdGVhbXNfXzI3VlBPXCIsXG5cdFwidGVhbU9uZVwiOiBcIlJvd0Rlc2NyaXB0aW9uX3RlYW1PbmVfX1RQSWthXCIsXG5cdFwic2NvcmVcIjogXCJSb3dEZXNjcmlwdGlvbl9zY29yZV9fMzhTVkZcIixcblx0XCJ0ZWFtVHdvXCI6IFwiUm93RGVzY3JpcHRpb25fdGVhbVR3b19fM21hZDJcIixcblx0XCJidXlCdXR0b25fY29udGFpbmVyXCI6IFwiUm93RGVzY3JpcHRpb25fYnV5QnV0dG9uX2NvbnRhaW5lcl9fM3JDTmtcIixcblx0XCJidXR0b25fY29udGVudFwiOiBcIlJvd0Rlc2NyaXB0aW9uX2J1dHRvbl9jb250ZW50X18xMndVUFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUm93VGl0bGVfY29udGFpbmVyX19EV1o1TFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX2NvbnRhaW5lcl9fMmRBcWVcIixcblx0XCJuYW1lXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX25hbWVfXzJuU25JXCIsXG5cdFwiZGF0ZVwiOiBcIkRheUNoYW5nZUJ1dHRvbl9kYXRlX18zLU1XOFwiLFxuXHRcImFjdGl2ZV9uYW1lXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX2FjdGl2ZV9uYW1lX18zMTVzUFwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJEYXlDaGFuZ2VCdXR0b25fdHJhbnNpdGlvbl9fMVRGZzNcIixcblx0XCJhY3RpdmVfZGF0ZVwiOiBcIkRheUNoYW5nZUJ1dHRvbl9hY3RpdmVfZGF0ZV9fT0JlYURcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRNSGVhZGVyX2NvbnRhaW5lcl9fMnNmOEtcIixcblx0XCJjb250ZW50XCI6IFwiVE1IZWFkZXJfY29udGVudF9fMjNRdVlcIixcblx0XCJ0aXRsZVwiOiBcIlRNSGVhZGVyX3RpdGxlX18zdTl6R1wiLFxuXHRcImRheV9jaGFuZ2VfYnV0dG9uc1wiOiBcIlRNSGVhZGVyX2RheV9jaGFuZ2VfYnV0dG9uc19fM3FvWXBcIixcblx0XCJjYWxlbmRhclwiOiBcIlRNSGVhZGVyX2NhbGVuZGFyX18yV0FoX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVG9kYXlNYXRjaGVzX2NvbnRhaW5lcl9fM3hjZlRcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiVG9kYXlNYXRjaGVzX3RyYW5zaXRpb25fXzFkaXZyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJOZXdzX2NvbnRhaW5lcl9fc2xQS19cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNsaWRlX2NvbnRhaW5lcl9fUXpaQndcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFycm93TGVmdFwiOiBcIkFycm93X2Fycm93TGVmdF9fMjJNUmpcIixcblx0XCJhcnJvd1JpZ2h0XCI6IFwiQXJyb3dfYXJyb3dSaWdodF9fZnBMcENcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk1jb250YWluZXJcIjogXCJJdGVtTW9kYWxfTWNvbnRhaW5lcl9fMVlrTWdcIixcblx0XCJNY29udGVudFwiOiBcIkl0ZW1Nb2RhbF9NY29udGVudF9fMnJ2QnhcIixcblx0XCJjb250YWluZXJcIjogXCJJdGVtTW9kYWxfY29udGFpbmVyX18xakVsYVwiLFxuXHRcImltZ19jb250ZW50XCI6IFwiSXRlbU1vZGFsX2ltZ19jb250ZW50X19LSWhkblwiLFxuXHRcImRlc2NyaXB0aW9uX2NvbnRlbnRcIjogXCJJdGVtTW9kYWxfZGVzY3JpcHRpb25fY29udGVudF9fMTZWVnZcIixcblx0XCJ0aXRsZVwiOiBcIkl0ZW1Nb2RhbF90aXRsZV9fMi1XcDRcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkl0ZW1Nb2RhbF9kZXNjcmlwdGlvbl9faFJHcUdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkl0ZW1fY29udGFpbmVyX18zdHEySlwiLFxuXHRcInRvcExpbmVzXCI6IFwiSXRlbV90b3BMaW5lc19fMW9Oa1dcIixcblx0XCJsaW5lT25lXCI6IFwiSXRlbV9saW5lT25lX181YVhNOVwiLFxuXHRcImxpbmVUd29cIjogXCJJdGVtX2xpbmVUd29fXzFVVUF0XCIsXG5cdFwiY29udGVudFwiOiBcIkl0ZW1fY29udGVudF9fMllnZDJcIixcblx0XCJib3R0b21MaW5lc1wiOiBcIkl0ZW1fYm90dG9tTGluZXNfXzNVQ2NiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYWdpbmF0aW9uX2NvbnRhaW5lcl9fMXJZMkhcIixcblx0XCJyb3VuZFwiOiBcIlBhZ2luYXRpb25fcm91bmRfXzFMWlRFXCIsXG5cdFwiYWN0aXZlXCI6IFwiUGFnaW5hdGlvbl9hY3RpdmVfXzNJRmdoXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQcmVkaWN0aW9uX2NvbnRhaW5lcl9fMzJiVWxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFycm93TGVmdFwiOiBcIkFycm93X2Fycm93TGVmdF9fMW4yR2xcIixcblx0XCJhcnJvd1JpZ2h0XCI6IFwiQXJyb3dfYXJyb3dSaWdodF9fTlpON1dcIixcblx0XCJhcnJvd1JpZ2h0VmVjdG9yXCI6IFwiQXJyb3dfYXJyb3dSaWdodFZlY3Rvcl9fM3p4TGxcIixcblx0XCJhcnJvd0xlZnRWZWN0b3JcIjogXCJBcnJvd19hcnJvd0xlZnRWZWN0b3JfX1U2RlNxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJJdGVtX2NvbnRhaW5lcl9fVGFvNUVcIixcblx0XCJjb250ZW50XCI6IFwiSXRlbV9jb250ZW50X18ydFlIRlwiLFxuXHRcInRvcFwiOiBcIkl0ZW1fdG9wX19XMnJCMFwiLFxuXHRcInRlYW1cIjogXCJJdGVtX3RlYW1fXzNHWjg0XCIsXG5cdFwidGltZXJfY29udGFpbmVyXCI6IFwiSXRlbV90aW1lcl9jb250YWluZXJfXzJnNXBiXCIsXG5cdFwidGltZXJcIjogXCJJdGVtX3RpbWVyX19DaDY1OFwiLFxuXHRcImJvdHRvbVwiOiBcIkl0ZW1fYm90dG9tX19nQ0ZyaFwiLFxuXHRcImJ1dHRvbnNcIjogXCJJdGVtX2J1dHRvbnNfXzFCcXd0XCIsXG5cdFwicHJlZGljdGlvbl9idXR0b25fY29udGFpbmVyXCI6IFwiSXRlbV9wcmVkaWN0aW9uX2J1dHRvbl9jb250YWluZXJfXzN4YmpPXCIsXG5cdFwicHJlZGljdGlvbl9idXR0b25fY29udGVudFwiOiBcIkl0ZW1fcHJlZGljdGlvbl9idXR0b25fY29udGVudF9fMVc4dkhcIixcblx0XCJidXlfYnV0dG9uX2NvbnRhaW5lclwiOiBcIkl0ZW1fYnV5X2J1dHRvbl9jb250YWluZXJfX25QcG9fXCIsXG5cdFwiYnV5X2J1dHRvbl9jb250ZW50XCI6IFwiSXRlbV9idXlfYnV0dG9uX2NvbnRlbnRfXzVQRXpnXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQcmVkaWN0aW9uTW9kYWxfY29udGFpbmVyX18yWWktZFwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJQcmVkaWN0aW9uTW9kYWxfdHJhbnNpdGlvbl9fdy1DdmZcIixcblx0XCJjb250ZW50XCI6IFwiUHJlZGljdGlvbk1vZGFsX2NvbnRlbnRfXzFZNlpGXCIsXG5cdFwidG9wXCI6IFwiUHJlZGljdGlvbk1vZGFsX3RvcF9fMS1uM3pcIixcblx0XCJ0ZWFtXCI6IFwiUHJlZGljdGlvbk1vZGFsX3RlYW1fXzFWWURFXCIsXG5cdFwidnNcIjogXCJQcmVkaWN0aW9uTW9kYWxfdnNfXzMxaWJOXCIsXG5cdFwiYm90dG9tXCI6IFwiUHJlZGljdGlvbk1vZGFsX2JvdHRvbV9fR1Zrd0JcIixcblx0XCJwcmVkaWN0aW9uXCI6IFwiUHJlZGljdGlvbk1vZGFsX3ByZWRpY3Rpb25fXzNWdFBqXCIsXG5cdFwib3JkaW5hclwiOiBcIlByZWRpY3Rpb25Nb2RhbF9vcmRpbmFyX18yS2lMRlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUHJkZWljdGlvblNsaWRlX2NvbnRhaW5lcl9fMTJNU0NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkJ1dHRvbl9jb250YWluZXJfXzQ1S3lEXCIsXG5cdFwiY29udGVudFwiOiBcIkJ1dHRvbl9jb250ZW50X18xNEZsVVwiLFxuXHRcImFjdGl2ZVwiOiBcIkJ1dHRvbl9hY3RpdmVfXzFNRGc1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJvd0xlZnRcIjogXCJBcnJvd19hcnJvd0xlZnRfXzFYemJKXCIsXG5cdFwiYXJyb3dSaWdodFwiOiBcIkFycm93X2Fycm93UmlnaHRfXzIwYUk1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJGZWVkQmFja19jb250YWluZXJfXzJjQ0xXXCIsXG5cdFwidG9wXCI6IFwiRmVlZEJhY2tfdG9wX18ySWhxalwiLFxuXHRcImF2YXRhclwiOiBcIkZlZWRCYWNrX2F2YXRhcl9fM0MwMGNcIixcblx0XCJyYXRlaW5nXCI6IFwiRmVlZEJhY2tfcmF0ZWluZ19fMXZpSE9cIixcblx0XCJib3R0b21cIjogXCJGZWVkQmFja19ib3R0b21fXzNMa3JqXCIsXG5cdFwiYm90dG9tX2NvbnRlbnRcIjogXCJGZWVkQmFja19ib3R0b21fY29udGVudF9fM3VKb29cIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkZlZWRCYWNrX2Rlc2NyaXB0aW9uX18xM19IblwiLFxuXHRcImRhdGVfbGlrZXNfY29udGFpbmVyXCI6IFwiRmVlZEJhY2tfZGF0ZV9saWtlc19jb250YWluZXJfX1BYa2R4XCIsXG5cdFwiZGF0ZVwiOiBcIkZlZWRCYWNrX2RhdGVfXzI4Y2dVXCIsXG5cdFwidmVydGljYWxfYm9yZGVyXCI6IFwiRmVlZEJhY2tfdmVydGljYWxfYm9yZGVyX180SkxiV1wiLFxuXHRcImxpa2VzX2Rpc2xpa2VzXCI6IFwiRmVlZEJhY2tfbGlrZXNfZGlzbGlrZXNfXzNUQV9EXCIsXG5cdFwibGlrZVwiOiBcIkZlZWRCYWNrX2xpa2VfX19UaUlyXCIsXG5cdFwiZGlzTGlrZVwiOiBcIkZlZWRCYWNrX2Rpc0xpa2VfX2RUaDBmXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMaWtlRGlzbGlrZURyb3BfY29udGFpbmVyX18xQ1c3NlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJMaWtlRGlzbGlrZURyb3BfdHJhbnNpdGlvbl9fbHhadFNcIixcblx0XCJjb250ZW50XCI6IFwiTGlrZURpc2xpa2VEcm9wX2NvbnRlbnRfXzlZXzFlXCIsXG5cdFwicm93XCI6IFwiTGlrZURpc2xpa2VEcm9wX3Jvd19fMUlMNEFcIixcblx0XCJhdmF0YXJcIjogXCJMaWtlRGlzbGlrZURyb3BfYXZhdGFyX184SXo0elwiLFxuXHRcInVzZXJfcGFydFwiOiBcIkxpa2VEaXNsaWtlRHJvcF91c2VyX3BhcnRfXzJjeTk4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMZWF2ZUNvbW1lbnRfY29udGFpbmVyX18yaXM2ZlwiLFxuXHRcInN0YXJzX2NvbnRhaW5lclwiOiBcIkxlYXZlQ29tbWVudF9zdGFyc19jb250YWluZXJfXzNvdWtqXCIsXG5cdFwic3RhcnNfY29udGVudFwiOiBcIkxlYXZlQ29tbWVudF9zdGFyc19jb250ZW50X18yNXZGQVwiLFxuXHRcInN0YXJzX2FyZWFcIjogXCJMZWF2ZUNvbW1lbnRfc3RhcnNfYXJlYV9fWE5hSU5cIixcblx0XCJ0ZXh0YXJlYV9jb250YWluZXJcIjogXCJMZWF2ZUNvbW1lbnRfdGV4dGFyZWFfY29udGFpbmVyX18zOHdHM1wiLFxuXHRcImJ1dHRvbl9jb250YWluZXJcIjogXCJMZWF2ZUNvbW1lbnRfYnV0dG9uX2NvbnRhaW5lcl9fMm1PbmZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2luYXRpb25fY29udGFpbmVyX19PVV9aUlwiLFxuXHRcInJvdW5kXCI6IFwiUGFnaW5hdGlvbl9yb3VuZF9fM2JoZVZcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fMkNmYnZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNvcnRpbmdfY29udGFpbmVyX18yTGh2OFwiLFxuXHRcIm5hbWVcIjogXCJTb3J0aW5nX25hbWVfXzNzb1E4XCIsXG5cdFwiYmFyXCI6IFwiU29ydGluZ19iYXJfXzFtYkhEXCIsXG5cdFwiYnlEYXRlXCI6IFwiU29ydGluZ19ieURhdGVfXzNfQnotXCIsXG5cdFwiYWN0aXZlXCI6IFwiU29ydGluZ19hY3RpdmVfXzNhMWFMXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJUZXN0aW1vbmlhbHNfY29udGFpbmVyX18zTEFyUFwiLFxuXHRcImZlZWRfYmFja3NfY29udGFpbmVyXCI6IFwiVGVzdGltb25pYWxzX2ZlZWRfYmFja3NfY29udGFpbmVyX18zOTVoa1wiLFxuXHRcImNhcm91c2VsXCI6IFwiVGVzdGltb25pYWxzX2Nhcm91c2VsX18ycnJWVlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVGl0bGVfY29udGFpbmVyX18xZzMtZ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW9kYWxDb250ZWluZXJcIjogXCJNb2RhbF9tb2RhbENvbnRlaW5lcl9fM2c4SWZcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiTW9kYWxfdHJhbnNpdGlvbl9fMWtmdjlcIixcblx0XCJtb2RhbENvbnRlbnRcIjogXCJNb2RhbF9tb2RhbENvbnRlbnRfXzEtTzQ3XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNhbGVuZGFyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvYWRlci1zcGlubmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdGltZXItaG9va1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9