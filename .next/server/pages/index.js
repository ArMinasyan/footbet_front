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
const host = "https://479628458d32bd.localhost.run/api/";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01haW4uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL0Fycm93cy9BcnJvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvR2FtZVJ1bGVzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL1NsaWRlUGFnZS9QYWdlUGFyZXRpY2xlcy9QYWdlUGFyZXRpY2xlcy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvU2xpZGVQYWdlL1NsaWRlUGFnZXMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL2dhbWVfcnVsZXMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL01hdGNoZXMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9BcnJvd3MvQXJyb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9URE1hdGNoZXNCb2FyZC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvd0Rlc2NyaXB0aW9uL1Jvd0Rlc2NyaXB0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1IZWFkZXIvRGF5Q2hhbmdlQnV0dG9uL0RheUNoYW5nZUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1IZWFkZXIvVE1IZWFkZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlcy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9OZXdzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvQXJyb3dzL0Fycm93LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvSXRlbU1vZGFsL0l0ZW1Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL0l0ZW0vSXRlbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9zbGlkZV9zaG93X2RhdGEuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9BcnJvd3MvQXJyb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vSXRlbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvSXRlbS9QcmVkaWN0aW9uTW9kYWwvUHJlZGljdGlvbk1vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9JdGVtL1RpbWVyL1RpbWVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9QcmRlaWN0aW9uU2xpZGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvQXJyb3dzL0Fycm93LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9GZWVkQmFjay9GZWVkQmFjay5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvRmVlZEJhY2svTGlrZURpc2xpa2VEcm9wL0xpa2VEaXNsaWtlRHJvcC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvTGVhdmVDb21tZW50L0xlYXZlQ29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9Tb3J0aW5nL1NvcnRpbmcuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvZmVlZF9iYWNrX2RhdGEuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UaXRsZS9UaXRsZS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvZXIubGliLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2F2YXRhci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2Rpc2xpa2UucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9maWxsZWRTdGFyLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvbGlrZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9DYWxlbmRhci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd0xlZnQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dSaWdodC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd0xlZnQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dSaWdodC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9mb3J0QmFjay5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9zZWNCYWNrLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL3RyZEJhY2sucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0LnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93TGVmdFZlY3Rvci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd1JpZ2h0LnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHRWZWN0b3IucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYmFyY2EucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHJlZEJhY2sucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHNqLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9zbGlkZUJhY2sucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL0Fycm93cy9BcnJvdy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9HYW1lUnVsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL1NsaWRlUGFnZS9QYWdlUGFyZXRpY2xlcy9QYWdlUGFydGljYWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9TbGlkZVBhZ2UvU2xpZGVQYWdlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9NYXRjaGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9BcnJvd3MvQXJyb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvVERNYXRjaGVzQm9hcmQvVERNYXRjaGVzQm9hcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvdy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3dEZXNjcmlwdGlvbi9Sb3dEZXNjcmlwdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUhlYWRlci9EYXlDaGFuZ2VCdXR0b24vRGF5Q2hhbmdlQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNSGVhZGVyL1RNSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL05ld3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvQXJyb3dzL0Fycm93Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvU2xpZGUvU2xpZGVJdGVtcy9JdGVtTW9kYWwvSXRlbU1vZGFsLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvU2xpZGUvU2xpZGVJdGVtcy9JdGVtL0l0ZW0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvQXJyb3dzL0Fycm93Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vSXRlbS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9JdGVtL1ByZWRpY3Rpb25Nb2RhbC9QcmVkaWN0aW9uTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvUHJkZWljdGlvblNsaWRlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vQnV0dG9uL0J1dHRvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9BcnJvd3MvQXJyb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvRmVlZEJhY2svRmVlZEJhY2subW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvRmVlZEJhY2svTGlrZURpc2xpa2VEcm9wL0xpa2VEaXNsaWtlRHJvcC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9MZWF2ZUNvbW1lbnQvTGVhdmVDb21tZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9Tb3J0aW5nL1NvcnRpbmcubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvVGVzdGltb25pYWxzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGl0bGUvVGl0bGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1jYWxlbmRhclwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdGltZXItaG9va1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJ5dXBcIiIsIndlYnBhY2s6Ly9mb290LWJldC9pZ25vcmVkfEM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXHByb2plY3RzXFxmb290LWJldFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIk1haW4iLCJBcnJvdyIsInR5cGUiLCJvbkNsaWNrIiwiaXNFZGdlIiwicG9pbnRlciIsImNvbnN0cyIsImFycm93TGVmdCIsImFycm93U3R5bGVzIiwiYXJyb3dSaWdodCIsInN0eWxlcyIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwiYm90dG9tIiwiR2FtZVJ1bGVzIiwiUGFnaW5hdGlvbiIsImdhbWVfcnVsZXMiLCJlbCIsIk1hdGgiLCJyYW5kb20iLCJwYWdlcyIsImFjdGl2ZVBhZ2UiLCJtYXAiLCJpc0FjdGl2ZVBhZ2UiLCJQYWdlUGFydGljbGVzIiwidGl0bGUiLCJib2R5IiwiU2xpZGVQYWdlcyIsInBhZ2VEYXRhIiwiSGVhZGVyIiwiYnV0dG9uc0FjdGl2aXR5Iiwib25fVE1fY2xpY2siLCJvbl9HTV9jbGljayIsImdhbWVSdWxlc1N0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJNYXRjaGVzIiwic2hvd1RvZGF5TWF0Y2hlcyIsInNldFNob3dUb2RheU1hdGNoZXMiLCJ1c2VTdGF0ZSIsInNob3dHYW1lUnVsZXMiLCJzZXRTaG93R2FtZVJ1bGVzIiwiVERNYXRjaGVzQm9hcmQiLCJmaXJzdFBhZ2UiLCJzZXRGaXJzdFBhZ2UiLCJzZWNvbmRQYWdlIiwic2V0U2Vjb25kUGFnZSIsImZpcnN0UGFnZUl0ZW1zIiwidXBEYXRlRmlyc3RQYWdlSXRlbXMiLCJzZWNvbmRQYWdlSXRlbXMiLCJ1cERhdGVTZWNvbmRQYWdlSXRlbXMiLCJtYXRjaGVzIiwic2V0TWF0Y2hlcyIsInVzZUVmZmVjdCIsImZpbHRlciIsImkiLCJyZXF1ZXN0IiwiR0VUX01BVENIRVMiLCJhdXRoIiwidGhlbiIsIm5vdyIsIkRhdGUiLCJkYXRhIiwibWF0Y2giLCJtYXRjaFRpbWUiLCJkYXRlIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsInRpbWUiLCJnZXRUaW1lIiwiaWQiLCJnYW1lU3RhdGUiLCJ0ZWFtT25lTmFtZSIsInRlYW1PbmVJY29uIiwidGVhbTFfaW1nX3BhdGgiLCJ0ZWFtVHdvTmFtZSIsInRlYW1Ud29JY29uIiwidGVhbTJfaW1nX3BhdGgiLCJzY29yZSIsImJ1eUJ1dHRvbk5hbWUiLCJjb2VmZmljZW50IiwidGl0bGVOYW1lIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJpdGVtcyIsIkFycmF5IiwiZnJvbSIsInJlb3JkZXJlZEl0ZW0iLCJzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsImhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UiLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsInB1c2giLCJxdWVyeSIsImdhbWUiLCJwbGFjZWhvbGRlciIsIm1pbkhlaWdodCIsIlRNTWF0Y2hlc0JvYXJkIiwiR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkiLCJSb3ciLCJ0ZWFtT25lIiwidGVhbVR3byIsImNsaWNrQnV5IiwidHJhc25sYXRpb25Mb2NhdGlvbiIsIlJvd0Rlc2NyaXB0aW9uIiwibG9jYXRpb25Jbk1haW5QYWdlIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5IiwiZ2FtZVN0YXJ0ZWQiLCJzbGljZSIsImxhc3RJbmRleE9mIiwiUm93VGl0bGUiLCJjb250ZW50IiwiRGF5Q2hhbmdlQnV0dG9uIiwibmFtZSIsImFjdGl2ZSIsImNsaWNrIiwiVE1IZWFkZXIiLCJjbGlja1REIiwiY2xpY2tUTSIsIlREQm9hcmRTdGF0ZSIsIlRNQm9hcmRTdGF0ZSIsImdldF9kYXRlIiwidmFsdWUiLCJkYXkiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0RGF0ZSIsInNob3dDYWxlbmRhciIsInNldFNob3dDYWxlbmRhciIsImNhbGVuZGFyIiwic3JjIiwiVG9kYXlNYXRjaGVzIiwic2hvd1RvZGF5R2FtZXMiLCJzZXRTaG93VG9kYXlHYW1lcyIsInNob3dUb21vcnJvd0dhbWVzIiwic2V0U2hvd1RvbW9ycm93R2FtZXMiLCJOZXdzIiwiU2xpZGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwiR0VUX05FV1MiLCJuZXdzIiwiYnJlYWtwb2ludHMiLCJpdGVtc1RvU2hvdyIsIml0ZW1zVG9TY3JvbGwiLCJpbWdfcGF0aCIsInRleHQiLCJJdGVtTW9kYWwiLCJvbk1vZGFsQ2xvc2UiLCJpbWciLCJkZXNjcmlwdGlvbiIsIkl0ZW0iLCJpbWdfc3JjIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsInNob3dJdGVtTW9kYWwiLCJzZXRTaG93SXRlbU1vZGFsIiwibGluZU9uZSIsImxpbmVUd28iLCJzbGlkZV9zaG93X2RhdGEiLCJ1cmwiLCJiYWNrSWNvbiIsInNlY0JhY2siLCJ0cmRCYWNrIiwiZm9ydEJhY2siLCJQcmVkaWN0aW9uIiwiYXJyb3dzIiwiYXJyb3dSaWdodFZlY3RvciIsImFycm93TGVmdFZlY3RvciIsImhlaWdodCIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiZXhwaXJ5VGltZXN0YW1wIiwicHJlZGljdGlvbiIsIm9yZGluYXIiLCJzaG93UHJlZGljdGlvbiIsInNldFNob3dQcmVkaWN0aW9uIiwiZ29Ub1ByZWRpY3Rpb25zIiwidGltZXIiLCJQcmVkaWN0aW9uTW9kYWwiLCJUaW1lciIsInRpbWVDbGFzcyIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJ1c2VUaW1lciIsIm9uRXhwaXJlIiwid2FybiIsIlByZGVpY3Rpb25TbGlkZSIsImN1cnJlbnRNYXRjaElkIiwic2V0Q3VycmVudE1hdGNoSWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiR0VUX1BSRURJQ1RJT05TIiwicnNwIiwiaXRlbSIsInRoZXJlSXMiLCJ0b3RhbEJldCIsImZhY3RvciIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJwcmljZSIsImxlbmd0aCIsImVycm9yIiwidW5kZWZpbmVkIiwic2V0TWF0Y2hJZCIsInByZWRpY3Rpb25CYWNrZ3JvdW5kIiwiaXRlbVBhZGRpbmciLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInNsaWRlQ2hhbmdlIiwicCIsIkJ1dHRvbiIsInBhZ2UiLCJ0ZXh0UGF0aE5hbWUiLCJsb2NhdGlvbkluUGFnZSIsImFkaXRpb25hbFN0eWxlcyIsImNvbnRhaW5lclN0eWxlcyIsIkZlZWRCYWNrIiwiYXZhdGFyIiwibmlrTmFtZSIsInJhdGVpbmciLCJsaWtlcyIsImRpc0xpa2VzIiwicmVhY3Rpb25zRm9yVGVzdGluZyIsInN0YXJzIiwic2hvd1JlYWN0aW9ucyIsInNldFNob3dSZWFjdGlvbnMiLCJmaWxsZWRTdGFyIiwidW5maWxsZWRTdGFyIiwibGlrZUljb24iLCJkaXNMaWtlSWNvbiIsIkxpa2VEaXNsaWtlRHJvcCIsInVzZXJuYW1lIiwicmVhY3Rpb24iLCJMZWF2ZUNvbW1lbnQiLCJzaW11bGF0b3IiLCJzZXRTaW11bGF0b3IiLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImNvbW1lbnQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInVzZUZvcm0iLCJtb2RlIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsInN1Ym1pdCIsInJhdGUiLCJTb3J0aW5nIiwic29ydGluZ1RleHQiLCJkYXRlU29ydGluZ1RleHQiLCJyYXRlU29ydGluZyIsInNvcnRCeURhdGUiLCJzb3J0QnlSYXRlIiwiZGF0ZUFjdGl2ZSIsIlRlc3RpbW9uaWFscyIsIm1hdGNoSWQiLCJ1c2VTZWxlY3RvciIsImdldE1hdGNoSWQiLCJmZWVkQmFja3MiLCJzZXRGZWVkQmFja3MiLCJzZXREYXRlQWN0aXZlIiwiR0VUX0ZFRURCQUNLIiwicHJlZGljdGlvbnMiLCJmZWVkQmFjayIsInJlbmRlckZvcm1hdCIsInNvcnRGb3JtYXQiLCJsaWtlQ291bnQiLCJkaXNsaWtlQ291bnQiLCJzb3J0aW5nIiwidG9Tb3J0Iiwic29ydGluZ0J5IiwiZGF0YUZvclNvcnRpbmciLCJyZWR1Y2UiLCJhYyIsImNvbmNhdCIsInNvcnRlZERhdGEiLCJzb3J0ZWQiLCJzb3J0IiwiYSIsImIiLCJjZWlsIiwic29ydGVkSXRlbXMiLCJmb3JFYWNoIiwieCIsInJlYWN0aW9ucyIsImZlZWRiYWNrX2RhdGEiLCJUaXRsZSIsInRleHRTdHlsZXMiLCJocmVmIiwiY2xhc3NlcyIsImN1cnNvciIsImhhbmRsZV9vdmVyZmxvd19vbl9vcGVuIiwiZG9jdW1lbnQiLCJvdmVyZmxvd1kiLCJoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UiLCJNb2RhbCIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsImNvbnRlbnRTdHlsZXMiLCJvdGhlclN0eWxlcyIsInBvcnRhbExvY2F0aW9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5vZGUiLCJ1c2VSZWYiLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZGluYW1pY1RvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJtb2RhbCIsInRvcCIsImNyZWF0ZVBvcnRhbCIsImdldEVsZW1lbnRCeUlkIiwiaG9zdCIsInBheWxvYWQiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJzbHYiLCJyamN0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRDb29raWUiLCJPYmplY3QiLCJheGlvcyIsIm1ldGhvZCIsImZpbmFsbHkiLCJuYW1lRVEiLCJjYSIsImNvb2tpZSIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwicmVtb3ZlQ29va2llIiwic2V0Q29va2llIiwiZGF5cyIsImV4cGlyZXMiLCJzZXRUaW1lIiwidG9VVENTdHJpbmciLCJBVVRIX1VSTCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJMT0dJTiIsIkdFVF9BQ0NPVU5UX0lORk8iLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVtYWlsIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiU0VUX05FV19QQVNTV09SRCIsIkdFVF9NQVRDSEVTX0JZX1RZUEUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiX3VzZUludGVyc2VjdGlvbiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImFzIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0IiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJyZXNvbHZlIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwibGluayIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwidG9VcHBlckNhc2UiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiZG9tYWluSXRlbXMiLCJob3N0bmFtZSIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSXRlbSIsInRvTG93ZXJDYXNlIiwiX2l0ZW0kZG9tYWluIiwiX2l0ZW0kbG9jYWxlcyIsImRvbWFpbkhvc3RuYW1lIiwiZG9tYWluIiwic29tZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZVBhcnRzIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwicGF0aExvd2VyIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJfdGhpcyRsb2NhbGVzIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsInkiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJwcm90b2NvbCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiSW5kZXhQYWdlIiwibGF5b3V0IiwiZ2V0U3RhdGljUHJvcHMiLCJfX2xvYWROYW1lc3BhY2VzIiwibG9hZGVyTmFtZSIsIl9faTE4bkNvbmZpZyIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJtYXRjaFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFjdGlvbiIsImFjdGlvbnMiLCJyZWR1Y2VyIiwicHNqSWNvbiIsImJhcmNhSWNvbiIsImF0bGV0aWNJY29uIiwicmVubmFpc0ljb24iLCJhdGxldGljb0ljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FB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dGtCLCtEQUFnQixDQUFDLGdLQUFnSyx5T0FBeU8sRTs7Ozs7Ozs7Ozs7O0FDQTFaLCtEQUFnQixDQUFDLDBKQUEwSixpYkFBaWIsRTs7Ozs7Ozs7Ozs7O0FDQTVsQiwrREFBZ0IsQ0FBQyxxSkFBcUoscVhBQXFYLEU7Ozs7Ozs7Ozs7QUNBM2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBLHFEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hbS9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2FtL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2FtL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2RldS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2RldS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VuL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VuL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3Bfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL3JzL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL3JzL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBPYmplY3Qua2V5cyhtYXApOyB9O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9sb2NhbGVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVGVzdGltb25pYWxzIH0gZnJvbSAnLi4vY29tbW9uL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHMnXHJcbmltcG9ydCB7IE1hdGNoZXMgfSBmcm9tICcuL01hdGNoZXMvTWF0Y2hlcydcclxuaW1wb3J0IHsgTmV3cyB9IGZyb20gJy4vTmV3cy9OZXdzJ1xyXG5pbXBvcnQgeyBQcmVkaWN0aW9uIH0gZnJvbSAnLi9QcmVkaWN0aW9uL1ByZWRpY3Rpb24nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5ld3MgLz5cclxuICAgICAgICAgICAgPE1hdGNoZXMgXHJcbiAgICAgICAgICAgICAgICBnYW1lUnVsZXNTdGF0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFByZWRpY3Rpb24gLz5cclxuICAgICAgICAgICAgPFRlc3RpbW9uaWFscyBcclxuICAgICAgICAgICAgICAgIHBhZ2U9eydob21lJ31cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXsndGVzdGltb25pYWxzJ31cclxuICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17Jy50aXRsZSd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc3RzIH0gZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93UmlnaHQucG5nJ1xyXG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd0xlZnQucG5nJ1xyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcblxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMzVweCcsXHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6ICcxMCUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNFZGdlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuL1BhZ2luYXRpb24vUGFnaW5hdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HYW1lUnVsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGdhbWVfcnVsZXMgfSBmcm9tICcuL2dhbWVfcnVsZXMnXHJcbmltcG9ydCB7IFNsaWRlUGFnZXMgfSBmcm9tICcuL1NsaWRlUGFnZS9TbGlkZVBhZ2VzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVSdWxlcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgICAgIHJlbmRlclBhZ2luYXRpb249e1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lX3J1bGVzLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVBhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YT17ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZXMsIGFjdGl2ZVBhZ2UsIG9uQ2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlcy5tYXAoZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZVBhZ2UgPSBhY3RpdmVQYWdlID09PSBlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZVBhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJvdW5kfSAke2lzQWN0aXZlUGFnZSAmJiBzdHlsZXMuYWN0aXZlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnZVBhcnRpY2FsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnZVBhcnRpY2xlcyh7XHJcbiAgICB0aXRsZSxcclxuICAgIGJvZHlcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgUGFnZVBhcnRpY2xlcyB9IGZyb20gXCIuL1BhZ2VQYXJldGljbGVzL1BhZ2VQYXJldGljbGVzXCI7XHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NsaWRlUGFnZXMubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlUGFnZXMoe1xyXG4gICAgcGFnZURhdGFcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhZ2VEYXRhLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VQYXJ0aWNsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2VsLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5PXtlbC5ib2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2FtZV9ydWxlcyA9IFtcclxuICAgIC8vIGVhY2ggYXJyYXkgYXJlIHBhZ2UgZGF0YSBcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn0KTRg9GC0LHQvtC7OiDQutC+0LzQsNC90LTQsCDQuCDQt9Cw0L/QsNGB0L3Ri9C1INC40LPRgNC+0LrQuC4nLFxyXG4gICAgICAgICAgICBib2R5OiAn0JIg0YHQvtGB0YLQsNCyINC60L7QvNCw0L3QtNGLINCy0YXQvtC00Y/RgiAxMSDRh9C10LvQvtCy0LXQujogMSDQstGA0LDRgtCw0YDRjCDQuCAxMCDQv9C+0LvQtdCy0YvRhSDQuNCz0YDQvtC60L7Qsiwg0LrQvtGC0L7RgNGL0LUg0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00Ywg0L/QvtC00YDQsNC30LTQtdC70Y/RjtGC0YHRjyDQvdCwINC30LDRidC40YLQvdC40LrQvtCyLCDQv9C+0LvRg9C30LDRidC40YLQvdC40LrQvtCyINC4INC90LDQv9Cw0LTQsNGO0YnQuNGFLtCSINC40LPRgNCw0YUg0L3QsCDQvtGH0LrQuCDQuCDQsiDQutGD0LHQutC+0LLRi9GFINC40LPRgNCw0YUg0L3QsCDQv9GA0L7RgtGP0LbQtdC90LjQuCDQvtC00L3QvtCz0L4g0LzQsNGC0YfQsCDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YDQvtC40LfQstC10LTQtdC90LAg0LfQsNC80LXQvdCwIDIg0LjQs9GA0L7QutC+0LIg0LjQtyDQutCw0LbQtNC+0Lkg0LrQvtC80LDQvdC00Ysu0J/RgNC+0LTQvtC70LbQuNGC0LXQu9GM0L3QvtGB0YLRjCDQvNCw0YLRh9CwINC80YPQttGB0LrQuNGFINC4INC80L7Qu9C+0LTQtdC20L3Ri9GFINC60L7QvNCw0L3QtCjRgSAxNiDQtNC+IDE4INC70LXRgikg0YHQvtGB0YLQsNCy0LvRj9C10YIgOTAg0LzQuNC9LiDQnNCw0YLRhyDRgdC+0YHRgtC+0LjRgiDQuNC3INC00LLRg9GFINGC0LDQudC80L7QsiDQv9C+IDQ1INC80LjQvS7Qn9C+0YHQu9C1INC/0LXRgNC10YDRi9Cy0LAsINC80LjQvdC40LzQsNC70YzQvdCw0Y8g0L/RgNC+0LTQvtC70LbQuNGC0LXQu9GM0L3QvtGB0YLRjCDQutC+0YLQvtGA0L7Qs9C+IDUg0LzQuNC9LCDQutC+0LzQsNC90LTRiyDQvNC10L3Rj9GO0YLRgdGPINCy0L7RgNC+0YLQsNC80Lgu0J/QvtC70LXQstGL0LUg0LjQs9GA0L7QutC4INC80L7Qs9GD0YIg0LrQsNGB0LDRgtGM0YHRjyDQvNGP0YfQsCDQu9GO0LHQvtC5INGH0LDRgdGC0YzRjiDRgtC10LvQsCwg0LrRgNC+0LzQtSDRgNGD0Lou0JfQsCDQuNCz0YDRgyDRgNGD0LrQvtC5INC60L7QvNCw0L3QtNC1INC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0YjRgtGA0LDRhNC90L7QuSDRg9C00LDRgCDQuNC70LggMTEt0LzQtdGC0YDQvtCy0YvQuSDRg9C00LDRgCwg0LrQvtGC0L7RgNGL0Lkg0LLRi9C/0L7Qu9C90Y/QtdGCINC40LPRgNC+0Log0LrQvtC80LDQvdC00Ysg0YHQvtC/0LXRgNC90LjQutCwLtCV0YHQu9C4INC80Y/RhyDQv9C10YDQtdGB0LXQutCw0LXRgiDQu9C40YbQtdCy0YPRjiDQu9C40L3QuNGOINC40LvQuCDQsdC+0LrQvtCy0YPRjiDQu9C40L3QuNGOLCDRgtC+INC+0L0g0YHRh9C40YLQsNC10YLRgdGPINCy0YvRiNC10LTRiNC40Lwg0LjQtyDQuNCz0YDRiy7QldGB0LvQuCDQvNGP0Ycg0L/QtdGA0LXRgdC10Log0LHQvtC60L7QstGD0Y4g0LvQuNC90LjRjiwg0YLQviDQvtC9INGB0YfQuNGC0LDQtdGC0YHRjyDQstGL0YjQtdC00YjQuNC8INC40Lcg0LjQs9GA0Ysu0JXRgdC70Lgg0LzRj9GHINC/0LXRgNC10YHQtdC6INCx0L7QutC+0LLRg9GOINC70LjQvdC40Y4g0L/QvtGB0LvQtSDRg9C00LDRgNCwINC40LPRgNC+0LrQvtC8INC+0LTQvdC+0Lkg0LrQvtC80LDQvdC00YssINGC0L4g0L/RgNC+0LjQt9Cy0L7QtNC40YLRgdGPINCy0LHRgNCw0YHRi9Cy0LDQvdC40LUg0LzRj9GH0LAg0LjQs9GA0L7QutC+0Lwg0LrQvtC80LDQvdC00Ysg0YHQvtC/0LXRgNC90LjQutCwINGBINC80LXRgdGC0LAg0L/QtdGA0LXRgdC10YfQtdC90LjRjyDQsdC+0LrQvtCy0L7QuSDQu9C40L3QuNC4LtCS0LHRgNCw0YHRi9Cy0LDRjtGJ0LjQuSDRgdGC0L7QuNGCINC70LjRhtC+0Lwg0Log0L/QvtC70Y4sINC90L7Qs9Cw0LzQuCDQvdCwINCx0L7QutC+0LLQvtC5INC70LjQvdC40Lgg0LjQu9C4INC30LAg0LXQtSDQv9GA0LXQtNC10LvQsNC80Lgg0Lgg0LLQsdGA0LDRgdGL0LLQsNC10YIg0LzRj9GHINC+0LHQtdC40LzQuCDRgNGD0LrQsNC80Lgg0LjQty0g0LfQsCDQs9C+0LvQvtCy0Ysu0JXRgdC70Lgg0L7RgiDRg9C00LDRgNCwINGB0L7Qv9C10YDQvdC40LrQsCDQvNGP0Ycg0L/QtdGA0LXRgdC10LrQsNC10YIg0LvQuNGG0LXQstGD0Y4g0LvQuNC90LjRjiwg0YLQviDRgdGD0LTRjNGPINC90LDQt9C90LDRh9Cw0LXRgiDRg9C00LDRgCDQvtGCINCy0L7RgNC+0YIsINC/0YDQuCDQutC+0YLQvtGA0L7QvCDRg9C00LDRgCDQv9C+INC80Y/Rh9GDINC/0YDQvtC40LfQstC+0LTQuNGC0YHRjyDQuNC3INCy0YDQsNGC0LDRgNGB0LrQvtC5INC/0LvQvtGJ0LDQtNC60Lgu0JXRgdC70Lgg0LzRj9GHINC/0L7RgdC70LUg0YPQtNCw0YDQsCDQuNCz0YDQvtC60L7QvCDQv9C10YDQtdGB0LXQutCw0LXRgiDQu9C40YbQtdCy0YPRjiDQu9C40L3QuNGOINC10LPQviDQutC+0LzQsNC90LTRiywg0YLQviDRgdGD0LTRjNGPINC90LDQt9C90LDRh9Cw0LXRgiDRg9Cz0LvQvtCy0L7QuSDRg9C00LDRgC7Qk9C+0Lsg0YHRh9C40YLQsNC10YLRgdGPINC30LDQsdC40YLRi9C8LCDQtdGB0LvQuCDQvNGP0Ycg0L/QtdGA0LXRgdC10Log0LvQuNC90LjRjiDQstC+0YDQvtGCINC80LXQttC00YMg0LHQvtC60L7QstGL0LzQuCDRgdGC0L7QudC60LDQvNC4INC4INC/0L7QtCDQv9C10YDQtdC60LvQsNC00LjQvdC+0Lkg0LLQvtGA0L7Rgi7QodC+0LPQu9Cw0YHQvdC+INC/0YDQsNCy0LjQu9Cw0LwsINGB0YPRidC10YHRgtCy0YPQtdGCINC00LLQsCDQstC40LTQsCDRg9C00LDRgNC+0LI6INGI0YLRgNCw0YTQvdC+0Lkg0YPQtNCw0YAg0Lgg0YHQstC+0LHQvtC00L3Ri9C5INGD0LTQsNGALtCo0YLRgNCw0YTQvdC+0Lkg0YPQtNCw0YAg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDQt9CwINC90LXRh9C10YHRgtC90YPRjiDQuNCz0YDRgyDQuNC70Lgg0LfQsCDQuNCz0YDRgyDRgNGD0LrQvtC5LtCh0LLQvtCx0L7QtNC90YvQuSDRg9C00LDRgCDQvdCw0LfQvdCw0YfQsNC10YLRgdGPINC30LAg0L3QtdC/0YDQtdC00L3QsNC80LXRgNC10L3QvdC+0LUg0L3QsNGA0YPRiNC10L3QuNC1INC/0YDQsNCy0LjQuyDQuNC70Lgg0LfQsCDQvdC10L/RgNCw0LLQuNC70YzQvdGL0LUg0LjQs9GA0L7QstGL0LUg0LTQtdC50YHRgtCy0LjRjy7Qn9GA0Lgg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0YHQstC+0LHQvtC00L3QvtCz0L4g0YPQtNCw0YDQsCDQs9C+0Lsg0LHRg9C00LXRgiDQt9Cw0YHRh9C40YLQsNC9INCyINGC0L7QvCDRgdC70YPRh9Cw0LUsINC10YHQu9C4INC80Y/Rh9CwINC60L7RgdC90YPQu9GB0Y8g0LXRidC1INC+0LTQuNC9INC40LPRgNC+0LosINC60YDQvtC80LUg0L/QvtC00LDRjtGJ0LXQs9C+LidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICcg0KTRg9GC0LHQvtC7OiDCq9Cf0L7Qu9C+0LbQtdC90LjQtSDQstC90LUg0LjQs9GA0YvCuy4nLFxyXG4gICAgICAgICAgICBib2R5OiAn0J/RgNCw0LLQuNC70L4gwqvQstC90LUg0LjQs9GA0YvCuyDQt9Cw0L/RgNC10YnQsNC10YIg0LjQs9GA0L7QutCw0Lwg0LDRgtCw0LrRg9GO0YnQtdC5INC60L7QvNCw0L3QtNGLINC90LDRhdC+0LTQuNGC0YzRgdGPINC6INC70LjQvdC40Lgg0LLQvtGA0L7RgiDRgdC+0L/QtdGA0L3QuNC60LAg0LHQu9C40LbQtSwg0YfQtdC8INC30LDRidC40YLQvdC40LrQuCDRgdC+0L/QtdGA0L3QuNC60LAu0JXRgdC70Lgg0LIg0LzQvtC80LXQvdGCINC/0LXRgNC10LTQsNGH0Lgg0LzRj9GH0LAg0LzQtdC20LTRgyDQuNCz0YDQvtC60L7QvCDQuCDQu9C40L3QuNC10Lkg0LLQvtGA0L7RgiDRgdC+0L/QtdGA0L3QuNC60LAg0L3QsNGF0L7QtNC40YLRgdGPINC80LXQvdC10LUg0LTQstGD0YUg0LjQs9GA0L7QutC+0LIg0LrQvtC80LDQvdC00Ysg0YHQvtC/0LXRgNC90LjQutCwLCDQstC60LvRjtGH0LDRjyDQstGA0LDRgtCw0YDRjywg0YLQviDRgtCw0LrQvtC5INC40LPRgNC+0Log0LHRg9C00LXRgiDQsiDQv9C+0LvQvtC20LXQvdC40LggwqvQstC90LUg0LjQs9GA0YvCuy4g0J/RgNC4INC/0L7Qu9C+0LbQtdC90LjQuCDCq9Cy0L3QtSDQuNCz0YDRi8K7INC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0YHQstC+0LHQvtC00L3Ri9C5INGD0LTQsNGALtCf0L7Qu9C+0LbQtdC90LjQtSDCq9Cy0L3QtSDQuNCz0YDRi8K7INC90LUg0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQv9GA0Lgg0LDQvdCw0LvQvtCz0LjRh9C90L7QuSDRgdC40YLRg9Cw0YbQuNC4INC90LAg0YHQstC+0LXQuSDQv9C+0LvQvtCy0LjQvdC1INC/0L7Qu9GPLCDQv9GA0Lgg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0YPQtNCw0YDQvtCyINC+0YIg0LLQvtGA0L7Rgiwg0YPQs9C70L7QstGL0YUg0YPQtNCw0YDQvtCyLCDQv9GA0Lgg0LLQsdGA0LDRgdGL0LLQsNC90LjQuCDQuNC3IC0g0LfQsCDQsdC+0LrQvtCy0L7QuSDQu9C40L3QuNC4INC4INC/0YDQuCDRgdC/0L7RgNC90L7QvCDQstCx0YDQsNGB0YvQstCw0L3QuNC4LidcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfQpNGD0YLQsdC+0Ls6INC60L7QvNCw0L3QtNCwINC4INC30LDQv9Cw0YHQvdGL0LUg0LjQs9GA0L7QutC4LicsXHJcbiAgICAgICAgICAgIGJvZHk6ICfQkiDRgdC+0YHRgtCw0LIg0LrQvtC80LDQvdC00Ysg0LLRhdC+0LTRj9GCIDExINGH0LXQu9C+0LLQtdC6OiAxINCy0YDQsNGC0LDRgNGMINC4IDEwINC/0L7Qu9C10LLRi9GFINC40LPRgNC+0LrQvtCyLCDQutC+0YLQvtGA0YvQtSDQsiDRgdCy0L7RjiDQvtGH0LXRgNC10LTRjCDQv9C+0LTRgNCw0LfQtNC10LvRj9GO0YLRgdGPINC90LAg0LfQsNGJ0LjRgtC90LjQutC+0LIsINC/0L7Qu9GD0LfQsNGJ0LjRgtC90LjQutC+0LIg0Lgg0L3QsNC/0LDQtNCw0Y7RidC40YUu0JIg0LjQs9GA0LDRhSDQvdCwINC+0YfQutC4INC4INCyINC60YPQsdC60L7QstGL0YUg0LjQs9GA0LDRhSDQvdCwINC/0YDQvtGC0Y/QttC10L3QuNC4INC+0LTQvdC+0LPQviDQvNCw0YLRh9CwINC80L7QttC10YIg0LHRi9GC0Ywg0L/RgNC+0LjQt9Cy0LXQtNC10L3QsCDQt9Cw0LzQtdC90LAgMiDQuNCz0YDQvtC60L7QsiDQuNC3INC60LDQttC00L7QuSDQutC+0LzQsNC90LTRiy7Qn9GA0L7QtNC+0LvQttC40YLQtdC70YzQvdC+0YHRgtGMINC80LDRgtGH0LAg0LzRg9C20YHQutC40YUg0Lgg0LzQvtC70L7QtNC10LbQvdGL0YUg0LrQvtC80LDQvdC0KNGBIDE2INC00L4gMTgg0LvQtdGCKSDRgdC+0YHRgtCw0LLQu9GP0LXRgiA5MCDQvNC40L0uINCc0LDRgtGHINGB0L7RgdGC0L7QuNGCINC40Lcg0LTQstGD0YUg0YLQsNC50LzQvtCyINC/0L4gNDUg0LzQuNC9LtCf0L7RgdC70LUg0L/QtdGA0LXRgNGL0LLQsCwg0LzQuNC90LjQvNCw0LvRjNC90LDRjyDQv9GA0L7QtNC+0LvQttC40YLQtdC70YzQvdC+0YHRgtGMINC60L7RgtC+0YDQvtCz0L4gNSDQvNC40L0sINC60L7QvNCw0L3QtNGLINC80LXQvdGP0Y7RgtGB0Y8g0LLQvtGA0L7RgtCw0LzQuC7Qn9C+0LvQtdCy0YvQtSDQuNCz0YDQvtC60Lgg0LzQvtCz0YPRgiDQutCw0YHQsNGC0YzRgdGPINC80Y/Rh9CwINC70Y7QsdC+0Lkg0YfQsNGB0YLRjNGOINGC0LXQu9CwLCDQutGA0L7QvNC1INGA0YPQui7Ql9CwINC40LPRgNGDINGA0YPQutC+0Lkg0LrQvtC80LDQvdC00LUg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDRiNGC0YDQsNGE0L3QvtC5INGD0LTQsNGAINC40LvQuCAxMS3QvNC10YLRgNC+0LLRi9C5INGD0LTQsNGALCDQutC+0YLQvtGA0YvQuSDQstGL0L/QvtC70L3Rj9C10YIg0LjQs9GA0L7QuiDQutC+0LzQsNC90LTRiyDRgdC+0L/QtdGA0L3QuNC60LAu0JXRgdC70Lgg0LzRj9GHINC/0LXRgNC10YHQtdC60LDQtdGCINC70LjRhtC10LLRg9GOINC70LjQvdC40Y4g0LjQu9C4INCx0L7QutC+0LLRg9GOINC70LjQvdC40Y4sINGC0L4g0L7QvSDRgdGH0LjRgtCw0LXRgtGB0Y8g0LLRi9GI0LXQtNGI0LjQvCDQuNC3INC40LPRgNGLLtCV0YHQu9C4INC80Y/RhyDQv9C10YDQtdGB0LXQuiDQsdC+0LrQvtCy0YPRjiDQu9C40L3QuNGOLCDRgtC+INC+0L0g0YHRh9C40YLQsNC10YLRgdGPINCy0YvRiNC10LTRiNC40Lwg0LjQtyDQuNCz0YDRiy7QldGB0LvQuCDQvNGP0Ycg0L/QtdGA0LXRgdC10Log0LHQvtC60L7QstGD0Y4g0LvQuNC90LjRjiDQv9C+0YHQu9C1INGD0LTQsNGA0LAg0LjQs9GA0L7QutC+0Lwg0L7QtNC90L7QuSDQutC+0LzQsNC90LTRiywg0YLQviDQv9GA0L7QuNC30LLQvtC00LjRgtGB0Y8g0LLQsdGA0LDRgdGL0LLQsNC90LjQtSDQvNGP0YfQsCDQuNCz0YDQvtC60L7QvCDQutC+0LzQsNC90LTRiyDRgdC+0L/QtdGA0L3QuNC60LAg0YEg0LzQtdGB0YLQsCDQv9C10YDQtdGB0LXRh9C10L3QuNGPINCx0L7QutC+0LLQvtC5INC70LjQvdC40Lgu0JLQsdGA0LDRgdGL0LLQsNGO0YnQuNC5INGB0YLQvtC40YIg0LvQuNGG0L7QvCDQuiDQv9C+0LvRjiwg0L3QvtCz0LDQvNC4INC90LAg0LHQvtC60L7QstC+0Lkg0LvQuNC90LjQuCDQuNC70Lgg0LfQsCDQtdC1INC/0YDQtdC00LXQu9Cw0LzQuCDQuCDQstCx0YDQsNGB0YvQstCw0LXRgiDQvNGP0Ycg0L7QsdC10LjQvNC4INGA0YPQutCw0LzQuCDQuNC3LSDQt9CwINCz0L7Qu9C+0LLRiy7QldGB0LvQuCDQvtGCINGD0LTQsNGA0LAg0YHQvtC/0LXRgNC90LjQutCwINC80Y/RhyDQv9C10YDQtdGB0LXQutCw0LXRgiDQu9C40YbQtdCy0YPRjiDQu9C40L3QuNGOLCDRgtC+INGB0YPQtNGM0Y8g0L3QsNC30L3QsNGH0LDQtdGCINGD0LTQsNGAINC+0YIg0LLQvtGA0L7Rgiwg0L/RgNC4INC60L7RgtC+0YDQvtC8INGD0LTQsNGAINC/0L4g0LzRj9GH0YMg0L/RgNC+0LjQt9Cy0L7QtNC40YLRgdGPINC40Lcg0LLRgNCw0YLQsNGA0YHQutC+0Lkg0L/Qu9C+0YnQsNC00LrQuC7QldGB0LvQuCDQvNGP0Ycg0L/QvtGB0LvQtSDRg9C00LDRgNCwINC40LPRgNC+0LrQvtC8INC/0LXRgNC10YHQtdC60LDQtdGCINC70LjRhtC10LLRg9GOINC70LjQvdC40Y4g0LXQs9C+INC60L7QvNCw0L3QtNGLLCDRgtC+INGB0YPQtNGM0Y8g0L3QsNC30L3QsNGH0LDQtdGCINGD0LPQu9C+0LLQvtC5INGD0LTQsNGALtCT0L7QuyDRgdGH0LjRgtCw0LXRgtGB0Y8g0LfQsNCx0LjRgtGL0LwsINC10YHQu9C4INC80Y/RhyDQv9C10YDQtdGB0LXQuiDQu9C40L3QuNGOINCy0L7RgNC+0YIg0LzQtdC20LTRgyDQsdC+0LrQvtCy0YvQvNC4INGB0YLQvtC50LrQsNC80Lgg0Lgg0L/QvtC0INC/0LXRgNC10LrQu9Cw0LTQuNC90L7QuSDQstC+0YDQvtGCLtCh0L7Qs9C70LDRgdC90L4g0L/RgNCw0LLQuNC70LDQvCwg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LTQstCwINCy0LjQtNCwINGD0LTQsNGA0L7Qsjog0YjRgtGA0LDRhNC90L7QuSDRg9C00LDRgCDQuCDRgdCy0L7QsdC+0LTQvdGL0Lkg0YPQtNCw0YAu0KjRgtGA0LDRhNC90L7QuSDRg9C00LDRgCDQvdCw0LfQvdCw0YfQsNC10YLRgdGPINC30LAg0L3QtdGH0LXRgdGC0L3Rg9GOINC40LPRgNGDINC40LvQuCDQt9CwINC40LPRgNGDINGA0YPQutC+0Lku0KHQstC+0LHQvtC00L3Ri9C5INGD0LTQsNGAINC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0LfQsCDQvdC10L/RgNC10LTQvdCw0LzQtdGA0LXQvdC90L7QtSDQvdCw0YDRg9GI0LXQvdC40LUg0L/RgNCw0LLQuNC7INC40LvQuCDQt9CwINC90LXQv9GA0LDQstC40LvRjNC90YvQtSDQuNCz0YDQvtCy0YvQtSDQtNC10LnRgdGC0LLQuNGPLtCf0YDQuCDQstGL0L/QvtC70L3QtdC90LjQuCDRgdCy0L7QsdC+0LTQvdC+0LPQviDRg9C00LDRgNCwINCz0L7QuyDQsdGD0LTQtdGCINC30LDRgdGH0LjRgtCw0L0g0LIg0YLQvtC8INGB0LvRg9GH0LDQtSwg0LXRgdC70Lgg0LzRj9GH0LAg0LrQvtGB0L3Rg9C70YHRjyDQtdGJ0LUg0L7QtNC40L0g0LjQs9GA0L7Quiwg0LrRgNC+0LzQtSDQv9C+0LTQsNGO0YnQtdCz0L4uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJyDQpNGD0YLQsdC+0Ls6IMKr0J/QvtC70L7QttC10L3QuNC1INCy0L3QtSDQuNCz0YDRi8K7LicsXHJcbiAgICAgICAgICAgIGJvZHk6ICfQn9GA0LDQstC40LvQviDCq9Cy0L3QtSDQuNCz0YDRi8K7INC30LDQv9GA0LXRidCw0LXRgiDQuNCz0YDQvtC60LDQvCDQsNGC0LDQutGD0Y7RidC10Lkg0LrQvtC80LDQvdC00Ysg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0Log0LvQuNC90LjQuCDQstC+0YDQvtGCINGB0L7Qv9C10YDQvdC40LrQsCDQsdC70LjQttC1LCDRh9C10Lwg0LfQsNGJ0LjRgtC90LjQutC4INGB0L7Qv9C10YDQvdC40LrQsC7QldGB0LvQuCDQsiDQvNC+0LzQtdC90YIg0L/QtdGA0LXQtNCw0YfQuCDQvNGP0YfQsCDQvNC10LbQtNGDINC40LPRgNC+0LrQvtC8INC4INC70LjQvdC40LXQuSDQstC+0YDQvtGCINGB0L7Qv9C10YDQvdC40LrQsCDQvdCw0YXQvtC00LjRgtGB0Y8g0LzQtdC90LXQtSDQtNCy0YPRhSDQuNCz0YDQvtC60L7QsiDQutC+0LzQsNC90LTRiyDRgdC+0L/QtdGA0L3QuNC60LAsINCy0LrQu9GO0YfQsNGPINCy0YDQsNGC0LDRgNGPLCDRgtC+INGC0LDQutC+0Lkg0LjQs9GA0L7QuiDQsdGD0LTQtdGCINCyINC/0L7Qu9C+0LbQtdC90LjQuCDCq9Cy0L3QtSDQuNCz0YDRi8K7LiDQn9GA0Lgg0L/QvtC70L7QttC10L3QuNC4IMKr0LLQvdC1INC40LPRgNGLwrsg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDRgdCy0L7QsdC+0LTQvdGL0Lkg0YPQtNCw0YAu0J/QvtC70L7QttC10L3QuNC1IMKr0LLQvdC1INC40LPRgNGLwrsg0L3QtSDRhNC40LrRgdC40YDRg9C10YLRgdGPINC/0YDQuCDQsNC90LDQu9C+0LPQuNGH0L3QvtC5INGB0LjRgtGD0LDRhtC40Lgg0L3QsCDRgdCy0L7QtdC5INC/0L7Qu9C+0LLQuNC90LUg0L/QvtC70Y8sINC/0YDQuCDQstGL0L/QvtC70L3QtdC90LjQuCDRg9C00LDRgNC+0LIg0L7RgiDQstC+0YDQvtGCLCDRg9Cz0LvQvtCy0YvRhSDRg9C00LDRgNC+0LIsINC/0YDQuCDQstCx0YDQsNGB0YvQstCw0L3QuNC4INC40LcgLSDQt9CwINCx0L7QutC+0LLQvtC5INC70LjQvdC40Lgg0Lgg0L/RgNC4INGB0L/QvtGA0L3QvtC8INCy0LHRgNCw0YHRi9Cy0LDQvdC40LguJ1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbl1cclxuXHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmV0bnMgXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL1RpdGxlL1RpdGxlJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKHtcclxuICAgIGJ1dHRvbnNBY3Rpdml0eSxcclxuICAgIG9uX1RNX2NsaWNrLFxyXG4gICAgb25fR01fY2xpY2ssXHJcbiAgICBnYW1lUnVsZXNTdGF0ZSB9KSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICBwYWdlPXsnaG9tZSd9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J21hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPXsnLnRpdGxlJ31cclxuICAgICAgICAgICAgICAgIGhyZWY9Jy9tYXRjaGVzJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL21hdGNoZXMnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JblBhZ2U9eydtYXRjaGVzJ31cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9eycuYnV0dG9ucy5Ub2RheU1hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YnV0dG9uc0FjdGl2aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrPXtvbl9UTV9jbGlja31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7Z2FtZVJ1bGVzU3RhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXsnbWF0Y2hlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17Jy5idXR0b25zLkdhbWVSdWxlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17IWJ1dHRvbnNBY3Rpdml0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e29uX0dNX2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBHYW1lUnVsZXMgfSBmcm9tIFwiLi9HYW1lUnVsZXMvR2FtZVJ1bGVzXCI7XHJcbmltcG9ydCB7IFRvZGF5TWF0Y2hlcyB9IGZyb20gXCIuL1RvZGF5TWF0Y2hlcy9Ub2RheU1hdGNoZXNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWF0Y2hlcy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXRjaGVzKHsgZ2FtZVJ1bGVzU3RhdGUgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzXHJcbiAgICAgICAgW3Nob3dUb2RheU1hdGNoZXMsIHNldFNob3dUb2RheU1hdGNoZXNdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgW3Nob3dHYW1lUnVsZXMsIHNldFNob3dHYW1lUnVsZXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Z2FtZVJ1bGVzU3RhdGUgPyBzdHlsZXMuY29udGFpbmVyIDogc3R5bGVzLmluX3NlcGVyZXRlX3BhZ2V9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc0FjdGl2aXR5PXtzaG93VG9kYXlNYXRjaGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uX1RNX2NsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dUb2RheU1hdGNoZXModHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0dhbWVSdWxlcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uX0dNX2NsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dHYW1lUnVsZXModHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvZGF5TWF0Y2hlcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVSdWxlc1N0YXRlPXtnYW1lUnVsZXNTdGF0ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7c2hvd1RvZGF5TWF0Y2hlcyAmJiA8VG9kYXlNYXRjaGVzIC8+fVxyXG4gICAgICAgICAgICAgICAge3Nob3dHYW1lUnVsZXMgJiYgPEdhbWVSdWxlcyAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc3RzIH0gZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93UmlnaHQucG5nJ1xyXG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd0xlZnQucG5nJ1xyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcblxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMzVweCcsXHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6ICcxMCUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNFZGdlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2VzLCBhY3RpdmVQYWdlLCBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVQYWdlID0gYWN0aXZlUGFnZSA9PT0gZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmVQYWdlID8gJ3RydWUnIDogJ2ZhbHNlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZH0gJHtpc0FjdGl2ZVBhZ2UgJiYgc3R5bGVzLmFjdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RETWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1wiXHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSAnLi4vY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZSdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfTUFUQ0hFUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVERNYXRjaGVzQm9hcmQoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbIGZpcnN0UGFnZSwgc2V0Rmlyc3RQYWdlIF0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICAgICAgWyBzZWNvbmRQYWdlLCBzZXRTZWNvbmRQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICBbZmlyc3RQYWdlSXRlbXMsIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zXSA9IHVzZVN0YXRlKGZpcnN0UGFnZSksXHJcbiAgICAgICAgW3NlY29uZFBhZ2VJdGVtcywgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zXSA9IHVzZVN0YXRlKHNlY29uZFBhZ2UpLFxyXG4gICAgICAgIFsgbWF0Y2hlcywgc2V0TWF0Y2hlcyBdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMoIG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA8IDQpICk7XHJcbiAgICAgICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKCBtYXRjaGVzLmZpbHRlcigoZWwsIGkpID0+IGkgPj0gNCkgKTtcclxuICAgIH0sIFttYXRjaGVzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICByZXF1ZXN0KCBHRVRfTUFUQ0hFUywge30sIHsgYXV0aDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAudGhlbiggbWF0Y2hlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgc2V0TWF0Y2hlcyggbWF0Y2hlcy5kYXRhLmRhdGEubWFwKCBtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoVGltZSA9IChuZXcgRGF0ZShgJHttYXRjaC5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKX0gJHttYXRjaC50aW1lfWApKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBtYXRjaC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBtYXRjaC5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IG1hdGNoLnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlOiBgLnJvd09uZS5nYW1lU3RhdGUuJHsgbm93IDwgbWF0Y2hUaW1lID8gJ3N0YXJ0ZWQnIDogJ2RvbnRTdGFydGVkJ31gLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBgYCxcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBtYXRjaC50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBzY29yZTogbWF0Y2guc2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIGVyciApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBmaXJzdFBhZ2VJdGVtcyApO1xyXG4gICAgfSwgW2ZpcnN0UGFnZUl0ZW1zXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlKHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKGZpcnN0UGFnZUl0ZW1zKSxcclxuICAgICAgICAgICAgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpXHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSlcclxuXHJcbiAgICAgICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgICAgICBjb25zdFxyXG4gICAgICAgICAgICBpdGVtcyA9IEFycmF5LmZyb20oc2Vjb25kUGFnZUl0ZW1zKSxcclxuICAgICAgICAgICAgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpXHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSlcclxuXHJcbiAgICAgICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGVuYWJsZVN3aXBlPXtmYWxzZX1cclxuICAgICAgICAvLyB2ZXJ0aWNhbE1vZGVcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJtYXRjaGVzdG9kYXlNYXRjaGVzRmlyc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0UGFnZUl0ZW1zLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVJZD17ZWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiAnMzRweCcgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNTZWNvbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlPXtlbC5nYW1lU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlPXtlbC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+IHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogJzM0cHgnIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RNTWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1wiXHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSAnLi4vY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZSdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuLy4uL1RETWF0Y2hlc0JvYXJkL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vLi4vVERNYXRjaGVzQm9hcmQvUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVE1NYXRjaGVzQm9hcmQoKSB7ICBcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIFsgZmlyc3RQYWdlLCBzZXRGaXJzdFBhZ2UgXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICBbIHNlY29uZFBhZ2UsIHNldFNlY29uZFBhZ2VdID0gdXNlU3RhdGUoW10pLFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIFtmaXJzdFBhZ2VJdGVtcywgdXBEYXRlRmlyc3RQYWdlSXRlbXNdID0gdXNlU3RhdGUoZmlyc3RQYWdlKSxcclxuICAgICAgICBbc2Vjb25kUGFnZUl0ZW1zLCB1cERhdGVTZWNvbmRQYWdlSXRlbXNdID0gdXNlU3RhdGUoc2Vjb25kUGFnZSksXHJcbiAgICAgICAgWyBtYXRjaGVzLCBzZXRNYXRjaGVzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyggbWF0Y2hlcy5maWx0ZXIoKGVsLCBpKSA9PiBpIDwgNCkgKTtcclxuICAgICAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMoIG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA+PSA0KSApO1xyXG4gICAgfSwgW21hdGNoZXNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHsgICAgICAgIFxyXG4gICAgICAgIHJlcXVlc3QoIEdFVF9NQVRDSEVTX09GX05FWFRfREFZLCB7fSwgeyBhdXRoOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCBtYXRjaGVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1hdGNoZXMoIG1hdGNoZXMuZGF0YS5kYXRhLm1hcCggbWF0Y2ggPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogbWF0Y2guaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogbWF0Y2guZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiBtYXRjaC50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dPbmUuZ2FtZVN0YXRlLnN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBgYCxcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBtYXRjaC50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBzY29yZTogbWF0Y2guc2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJ1xyXG4gICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIGVyciApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZShyZXN1bHQpIHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0XHJcbiAgICAgICAgICAgIGl0ZW1zID0gQXJyYXkuZnJvbShmaXJzdFBhZ2VJdGVtcyksXHJcbiAgICAgICAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKVxyXG4gICAgICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pXHJcblxyXG4gICAgICAgIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zKGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlKHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKHNlY29uZFBhZ2VJdGVtcyksXHJcbiAgICAgICAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKVxyXG4gICAgICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pXHJcblxyXG4gICAgICAgIHVwRGF0ZVNlY29uZFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgaXRlbXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgIGl0ZW1zVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgcmVuZGVyUGFnaW5hdGlvbj17UGFnaW5hdGlvbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBlbmFibGVTd2lwZT17ZmFsc2V9XHJcbiAgICAgICAgLy8gdmVydGljYWxNb2RlXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc0ZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlPXtlbC5nYW1lU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlPXtlbC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU9e2VsLnRpdGxlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT4gcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogJzM0cHgnIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJtYXRjaGVzdG9kYXlNYXRjaGVzU2Vjb25kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNvbmRQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU9e2VsLnRpdGxlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgPFJvd1RpdGxlIHJvd1N0eWxlcz17eyBtaW5IZWlnaHQ6ICczNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSAnLi9Sb3dUaXRsZS9Sb3dUaXRsZSdcclxuaW1wb3J0IHsgUm93RGVzY3JpcHRpb24gfSBmcm9tICcuL1Jvd0Rlc2NyaXB0aW9uL1Jvd0Rlc2NyaXB0aW9uJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Jvdy5tb2R1bGUuc2NzcydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUm93KHtcclxuICAgIGRhdGUsXHJcbiAgICBnYW1lU3RhdGUsXHJcbiAgICB0ZWFtT25lLFxyXG4gICAgdGVhbU9uZUljb24sXHJcbiAgICBzY29yZSxcclxuICAgIHRlYW1Ud28sXHJcbiAgICB0ZWFtVHdvSWNvbixcclxuICAgIGJ1eUJ1dHRvbk5hbWUsXHJcbiAgICB0aXRsZU5hbWUsXHJcbiAgICBjbGlja0J1eVxyXG59KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHRyYXNubGF0aW9uTG9jYXRpb24gPSAnbWF0Y2hlcy5UTS50b2RheSdcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8Um93VGl0bGVcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RpdGxlTmFtZX1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5NYWluUGFnZT17dHJhc25sYXRpb25Mb2NhdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvd0Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXRlPXtnYW1lU3RhdGV9XHJcbiAgICAgICAgICAgICAgICB0ZWFtT25lPXt0ZWFtT25lfVxyXG4gICAgICAgICAgICAgICAgdGVhbU9uZUljb249e3RlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgc2NvcmU9e3Njb3JlfVxyXG4gICAgICAgICAgICAgICAgdGVhbVR3bz17dGVhbVR3b31cclxuICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXt0ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2J1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9e3RyYXNubGF0aW9uTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICBjbGlja0J1eT17Y2xpY2tCdXl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gdHJhbnNsYXRpb25zXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Sb3dEZXNjcmlwdGlvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBcclxuXHJcblJvd0Rlc2NyaXB0aW9uKHtcclxuICAgIGNsaWNrQnV5LFxyXG4gICAgZGF0ZSxcclxuICAgIGdhbWVTdGF0ZSxcclxuICAgIHRlYW1PbmUsXHJcbiAgICB0ZWFtT25lSWNvbixcclxuICAgIHNjb3JlLFxyXG4gICAgdGVhbVR3byxcclxuICAgIHRlYW1Ud29JY29uLFxyXG4gICAgYnV5QnV0dG9uTmFtZSxcclxuICAgIGxvY2F0aW9uSW5NYWluUGFnZVxyXG59KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2hvbWUnKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSBgJHtsb2NhdGlvbkluTWFpblBhZ2V9YCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4geyAgY29uc29sZS5sb2coYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApIDtyZXR1cm4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCkgfSxcclxuICAgICAgICBnYW1lU3RhcnRlZCA9IGdhbWVTdGF0ZS5zbGljZShnYW1lU3RhdGUubGFzdEluZGV4T2YoXCIuXCIpICsgMSkgPT09ICdzdGFydGVkJ1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMuZGF0ZV9nYW1lTlN0YXJ0ZWRfY29udGVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7Z2FtZVN0YXJ0ZWQgPyBzdHlsZXMuZGF0ZV9nYW1lU3RhcnRlZF9jb250ZW50IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e3RyYW5zbGF0ZShnYW1lU3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtT25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVhbU9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbU9uZUljb259IGFsdD17dGVhbU9uZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjb3JlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1Ud299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbVR3b0ljb259IGFsdD17dGVhbVR3b30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVhbVR3b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1eUJ1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRlbnR9IG9uQ2xpY2s9e2NsaWNrQnV5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKGJ1eUJ1dHRvbk5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gdHJhbnNsYXRpb25zXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm93VGl0bGUubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUm93VGl0bGUoeyBjb250ZW50LCBsb2NhdGlvbkluTWFpblBhZ2UgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdob21lJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25Jbk1haW5QYWdlfWAsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID8gdHJhbnNsYXRlKGNvbnRlbnQpIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RheUNoYW5nZUJ1dHRvbi5tb2R1bGUuc2NzcydcclxuLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERheUNoYW5nZUJ1dHRvbih7XHJcbiAgICBuYW1lLFxyXG4gICAgbG9jYXRpb25Jbk1haW5QYWdlLFxyXG4gICAgZGF0ZSxcclxuICAgIGFjdGl2ZSA9IG51bGwsXHJcbiAgICBjbGljayB9KSB7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignaG9tZScpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5NYWluUGFnZX1gLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZSA/IHN0eWxlcy5hY3RpdmVfbmFtZSA6IHN0eWxlcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FjdGl2ZSA/IHN0eWxlcy5hY3RpdmVfZGF0ZSA6IHN0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vVGl0bGUvVGl0bGVcIjtcclxuaW1wb3J0IHsgRGF5Q2hhbmdlQnV0dG9uIH0gZnJvbSAnLi9EYXlDaGFuZ2VCdXR0b24vRGF5Q2hhbmdlQnV0dG9uJztcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JlYWN0LWNhbGVuZGFyJztcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UTUhlYWRlci5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IGNhbGVuZGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9DYWxlbmRhci5wbmcnXHJcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd1JpZ2h0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dMZWZ0LnBuZydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVE1IZWFkZXIoe1xyXG4gICAgY2xpY2tURCxcclxuICAgIGNsaWNrVE0sXHJcbiAgICBUREJvYXJkU3RhdGUsXHJcbiAgICBUTUJvYXJkU3RhdGUgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gZnVuY3Rpb25zXHJcbiAgICAgICAgLy8gZ2V0X2RhdGUgdmFsdWUgY2hhbmdlcyB5X2QgPT4geWVzdGVyZGF5LCB0X2QgPT4gdG9kYXksIHRfdyA9PnRvbW9ycm93XHJcbiAgICAgICAgZ2V0X2RhdGUgPSAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgbGV0XHJcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGRheSA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDEsXHJcbiAgICAgICAgICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0X2QnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRheSA9IGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0X20nOlxyXG4gICAgICAgICAgICAgICAgICAgIGRheSA9IGRhdGUuZ2V0RGF0ZSgpICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBkYXkgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGggPCAxMCA/IFwiMFwiICsgbW9udGggOiBtb250aH0uJHt5ZWFyfWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93Q2FsZW5kYXIsIHNldFNob3dDYWxlbmRhcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9eydob21lJ31cclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J21hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17Jy5UTS5oZWFkZXJUaXRsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5X2NoYW5nZV9idXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF5Q2hhbmdlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9Jy5UTS5oZWFkZXJCdXR0b25zLnRvZGF5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9eydtYXRjaGVzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17Z2V0X2RhdGUoJ3RfZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e1REQm9hcmRTdGF0ZSA/ICdzaG93JyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrPXtjbGlja1REfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERheUNoYW5nZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPScuVE0uaGVhZGVyQnV0dG9ucy50b21vcnJvdydcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXsnbWF0Y2hlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2dldF9kYXRlKCd0X20nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtUTUJvYXJkU3RhdGUgPyAnc2hvdycgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17Y2xpY2tUTX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2FsZW5kYXIuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjYWxlbmRhci1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NhbGVuZGFyKCFzaG93Q2FsZW5kYXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJfYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dDYWxlbmRhciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dOZWlnaGJvcmluZ01vbnRoPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TGFiZWw9ezxpbWcgc3JjPXthcnJvd1JpZ2h0LnNyY30gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2TGFiZWw9ezxpbWcgc3JjPXthcnJvd0xlZnQuc3JjfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBURE1hdGNoZXNCb2FyZCB9IGZyb20gJy4vVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL1RETWF0Y2hlc0JvYXJkJ1xyXG5pbXBvcnQgeyBUTU1hdGNoZXNCb2FyZCB9IGZyb20gJy4vVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkJ1xyXG5pbXBvcnQgeyBUTUhlYWRlciB9IGZyb20gJy4vVE1IZWFkZXIvVE1IZWFkZXInXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG9kYXlNYXRjaGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvZGF5TWF0Y2hlcygpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93VG9kYXlHYW1lcywgc2V0U2hvd1RvZGF5R2FtZXNdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgW3Nob3dUb21vcnJvd0dhbWVzLCBzZXRTaG93VG9tb3Jyb3dHYW1lc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRNSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAvLyBURCA9PiB0b2RheSBnYW1lcyBib2FyZCBzaG9wdyBjb25maWdzXHJcbiAgICAgICAgICAgICAgICBjbGlja1REPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvZGF5R2FtZXModHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93VG9tb3Jyb3dHYW1lcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBUREJvYXJkU3RhdGU9e3Nob3dUb2RheUdhbWVzfVxyXG4gICAgICAgICAgICAgICAgLy8gVE0gPT4gdG9tbW9yb3cgZ2FtZXMgYm9hcmQgc2hvcHcgY29uZmlnc1xyXG4gICAgICAgICAgICAgICAgY2xpY2tUTT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dUb2RheUdhbWVzKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dUb21vcnJvd0dhbWVzKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgVE1Cb2FyZFN0YXRlPXtzaG93VG9tb3Jyb3dHYW1lc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3Nob3dUb2RheUdhbWVzICYmIDxURE1hdGNoZXNCb2FyZCAvPn1cclxuICAgICAgICAgICAge3Nob3dUb21vcnJvd0dhbWVzICYmIDxUTU1hdGNoZXNCb2FyZCAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OZXdzLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzIFxyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9UaXRsZS9UaXRsZSdcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuL1NsaWRlL1NsaWRlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5ld3MoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRpdGxlIFxyXG4gICAgICAgICAgICAgICAgcGFnZT0naG9tZSdcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXsnbmV3cyd9XHJcbiAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9eycudGl0bGUnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2xpZGUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBzbGlkZV9zaG93X2RhdGEgfSBmcm9tICcuL3NsaWRlX3Nob3dfZGF0YSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vU2xpZGVJdGVtcy9JdGVtL0l0ZW0nXHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi9TbGlkZUl0ZW1zL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vU2xpZGVJdGVtcy9QYWdpbmF0aW9uL1BhZ2luYXRpb24nXHJcbmltcG9ydCB7IEl0ZW1Nb2RhbCB9IGZyb20gJy4vU2xpZGVJdGVtcy9JdGVtTW9kYWwvSXRlbU1vZGFsJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TbGlkZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfTkVXUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTbGlkZSgpIHtcclxuXHJcbiAgICBjb25zdCBbIHNsaWRlX2RhdGEsIHNldFNsaWRlRGF0YSBdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICByZXF1ZXN0KCBHRVRfTkVXUywge30sIHsgYXV0aDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAudGhlbiggbmV3cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZURhdGEoIG5ld3MuZGF0YS5kYXRhICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBlcnIgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBjb25zdHMgYW5kIHN0YXRlcyBcclxuICAgICAgICAvLyBicmVha3BvaW50cyBmb3Igc2xpZGUgXHJcbiAgICAgICAgYnJlYWtwb2ludHMgPSBbXHJcbiAgICAgICAgICAgIHsgd2lkdGg6IDM3NSwgaXRlbXNUb1Nob3c6IDIsIGl0ZW1zVG9TY3JvbGw6IDIgfSxcclxuICAgICAgICAgICAgeyB3aWR0aDogNzQwLCBpdGVtc1RvU2hvdzogMywgaXRlbXNUb1Njcm9sbDogMyB9LFxyXG4gICAgICAgICAgICB7IHdpZHRoOiAxNzAwLCBpdGVtc1RvU2hvdzogNCwgaXRlbXNUb1Njcm9sbDogNCB9XHJcbiAgICAgICAgXVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYWRkaW5nPXtbMzUsIDEyXX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJBcnJvdz17QXJyb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGFnaW5hdGlvbj17UGFnaW5hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbH1cclxuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50cz17YnJlYWtwb2ludHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZV9kYXRhLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ19zcmM9e2VsLmltZ19wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtlbC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZWwudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IGNvbnN0cyB9IGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbi8vIGljb25zXHJcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd1JpZ2h0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dMZWZ0LnBuZydcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcblxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRWRnZX1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSAnL2NvbXBvbmVudHMvY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JdGVtTW9kYWwubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXRlbU1vZGFsKHtcclxuICAgIG9uTW9kYWxDbG9zZSxcclxuICAgIGltZyxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5NY29udGFpbmVyfVxyXG4gICAgICAgICAgICBjb250ZW50U3R5bGVzPXtzdHlsZXMuTWNvbnRlbnR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ19jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9uX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJdGVtTW9kYWwgfSBmcm9tICcuLi9JdGVtTW9kYWwvSXRlbU1vZGFsJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSXRlbS5tb2R1bGUuc2NzcydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXRlbSh7XHJcbiAgICBpbWdfc3JjLFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbiB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBzdHlsZSA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGltZ19zcmMgKyBcIilcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3Nob3dJdGVtTW9kYWwsIHNldFNob3dJdGVtTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BMaW5lc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lT25lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZVR3b30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dJdGVtTW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tTGluZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZU9uZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmVUd299IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0l0ZW1Nb2RhbCAmJlxyXG4gICAgICAgICAgICAgICAgPEl0ZW1Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0l0ZW1Nb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXtpbWdfc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZXMsIGFjdGl2ZVBhZ2UsIG9uQ2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhZ2VzLm1hcChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVQYWdlID0gYWN0aXZlUGFnZSA9PT0gZWxcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2lzQWN0aXZlUGFnZSA/ICd0cnVlJyA6ICdmYWxzZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZH0gJHtpc0FjdGl2ZVBhZ2UgJiYgc3R5bGVzLmFjdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGltZ1xyXG5pbXBvcnQgc2VjQmFjayBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3Mvc2VjQmFjay5wbmcnXHJcbmltcG9ydCB0cmRCYWNrIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy90cmRCYWNrLnBuZydcclxuaW1wb3J0IGZvcnRCYWNrIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9mb3J0QmFjay5wbmcnXHJcbmltcG9ydCBiYWNrSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3NsaWRlQmFjay5wbmcnXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVfc2hvd19kYXRhID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdob21lJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ25ld3MuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBiYWNrSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsKr0KDQtdCw0LvCuyDQtNC+0LvQs9C+INC80YPRh9C40LvRgdGPINGBIMKr0JDRgtCw0LvQsNC90YLQvtC5wrs6IDcwINC80LjQvdGD0YIg0LLQt9C70LDQvNGL0LLQsNC7INGB0L7Qv9C10YDQvdC40LrQsCDQsiDQsdC+0LvRjNGI0LjQvdGB0YLQstC1LlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBzZWNCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JzRiyDQvdC1INC/0L7QstC10YDQuNC70Lgg0LIg0L/QtdC90LDQu9GM0YLQuCDCq9CR0LDRgNGB0YvCuyDigJMg0LAg0LfRgNGPLiDQntC9INCx0YvQuyDQuNC3LdC30LAg0LzQuNC80L7Qu9C10YLQvdC+0LPQviDQutCw0YHQsNC90LjRjyDQsiDRiNGC0YDQsNGE0L3QvtC5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IHRyZEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9CQ0YLQu9C10YLQuNC60L7CuyDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDQuyDQv9C10YDQstGL0Lkg0YLQsNC50Lwg0LTQtdGA0LHQuCDQsdC70LDQs9C+0LTQsNGA0Y8g0YHQvNC10LvQvtC80YMg0L/Qu9Cw0L3RgyDQodC40LzQtdC+0L3QtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogZm9ydEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLQk9C+0Lsg0JfQuNC00LDQvdCwIMKr0JHQsNC50LXRgNGDwrsg4oCTINC90LXQv9C+0LLRgtC+0YDQuNC80LDRjyDQutC70LDRgdGB0LjQutCwINCb0KcuINCa0LDQuiDRjdGC0L4g0LLQvtC+0LHRidC1INC/0L7Qu9GD0YfQuNC70L7RgdGMP1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBiYWNrSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsKr0KDQtdCw0LvCuyDQtNC+0LvQs9C+INC80YPRh9C40LvRgdGPINGBIMKr0JDRgtCw0LvQsNC90YLQvtC5wrs6IDcwINC80LjQvdGD0YIg0LLQt9C70LDQvNGL0LLQsNC7INGB0L7Qv9C10YDQvdC40LrQsCDQsiDQsdC+0LvRjNGI0LjQvdGB0YLQstC1LlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBzZWNCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JzRiyDQvdC1INC/0L7QstC10YDQuNC70Lgg0LIg0L/QtdC90LDQu9GM0YLQuCDCq9CR0LDRgNGB0YvCuyDigJMg0LAg0LfRgNGPLiDQntC9INCx0YvQuyDQuNC3LdC30LAg0LzQuNC80L7Qu9C10YLQvdC+0LPQviDQutCw0YHQsNC90LjRjyDQsiDRiNGC0YDQsNGE0L3QvtC5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IHRyZEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9CQ0YLQu9C10YLQuNC60L7CuyDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDQuyDQv9C10YDQstGL0Lkg0YLQsNC50Lwg0LTQtdGA0LHQuCDQsdC70LDQs9C+0LTQsNGA0Y8g0YHQvNC10LvQvtC80YMg0L/Qu9Cw0L3RgyDQodC40LzQtdC+0L3QtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogZm9ydEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLQk9C+0Lsg0JfQuNC00LDQvdCwIMKr0JHQsNC50LXRgNGDwrsg4oCTINC90LXQv9C+0LLRgtC+0YDQuNC80LDRjyDQutC70LDRgdGB0LjQutCwINCb0KcuINCa0LDQuiDRjdGC0L4g0LLQvtC+0LHRidC1INC/0L7Qu9GD0YfQuNC70L7RgdGMP1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBiYWNrSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsKr0KDQtdCw0LvCuyDQtNC+0LvQs9C+INC80YPRh9C40LvRgdGPINGBIMKr0JDRgtCw0LvQsNC90YLQvtC5wrs6IDcwINC80LjQvdGD0YIg0LLQt9C70LDQvNGL0LLQsNC7INGB0L7Qv9C10YDQvdC40LrQsCDQsiDQsdC+0LvRjNGI0LjQvdGB0YLQstC1LlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBzZWNCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JzRiyDQvdC1INC/0L7QstC10YDQuNC70Lgg0LIg0L/QtdC90LDQu9GM0YLQuCDCq9CR0LDRgNGB0YvCuyDigJMg0LAg0LfRgNGPLiDQntC9INCx0YvQuyDQuNC3LdC30LAg0LzQuNC80L7Qu9C10YLQvdC+0LPQviDQutCw0YHQsNC90LjRjyDQsiDRiNGC0YDQsNGE0L3QvtC5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IHRyZEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9CQ0YLQu9C10YLQuNC60L7CuyDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDQuyDQv9C10YDQstGL0Lkg0YLQsNC50Lwg0LTQtdGA0LHQuCDQsdC70LDQs9C+0LTQsNGA0Y8g0YHQvNC10LvQvtC80YMg0L/Qu9Cw0L3RgyDQodC40LzQtdC+0L3QtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogZm9ydEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLQk9C+0Lsg0JfQuNC00LDQvdCwIMKr0JHQsNC50LXRgNGDwrsg4oCTINC90LXQv9C+0LLRgtC+0YDQuNC80LDRjyDQutC70LDRgdGB0LjQutCwINCb0KcuINCa0LDQuiDRjdGC0L4g0LLQvtC+0LHRidC1INC/0L7Qu9GD0YfQuNC70L7RgdGMP1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBiYWNrSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsKr0KDQtdCw0LvCuyDQtNC+0LvQs9C+INC80YPRh9C40LvRgdGPINGBIMKr0JDRgtCw0LvQsNC90YLQvtC5wrs6IDcwINC80LjQvdGD0YIg0LLQt9C70LDQvNGL0LLQsNC7INGB0L7Qv9C10YDQvdC40LrQsCDQsiDQsdC+0LvRjNGI0LjQvdGB0YLQstC1LlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBzZWNCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JzRiyDQvdC1INC/0L7QstC10YDQuNC70Lgg0LIg0L/QtdC90LDQu9GM0YLQuCDCq9CR0LDRgNGB0YvCuyDigJMg0LAg0LfRgNGPLiDQntC9INCx0YvQuyDQuNC3LdC30LAg0LzQuNC80L7Qu9C10YLQvdC+0LPQviDQutCw0YHQsNC90LjRjyDQsiDRiNGC0YDQsNGE0L3QvtC5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IHRyZEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9CQ0YLQu9C10YLQuNC60L7CuyDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDQuyDQv9C10YDQstGL0Lkg0YLQsNC50Lwg0LTQtdGA0LHQuCDQsdC70LDQs9C+0LTQsNGA0Y8g0YHQvNC10LvQvtC80YMg0L/Qu9Cw0L3RgyDQodC40LzQtdC+0L3QtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogZm9ydEJhY2suc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLQk9C+0Lsg0JfQuNC00LDQvdCwIMKr0JHQsNC50LXRgNGDwrsg4oCTINC90LXQv9C+0LLRgtC+0YDQuNC80LDRjyDQutC70LDRgdGB0LjQutCwINCb0KcuINCa0LDQuiDRjdGC0L4g0LLQvtC+0LHRidC1INC/0L7Qu9GD0YfQuNC70L7RgdGMP1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59IiwiLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QcmVkaWN0aW9uLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9UaXRsZS9UaXRsZVwiO1xyXG5pbXBvcnQgeyBQcmRlaWN0aW9uU2xpZGUgfSBmcm9tIFwiLi9QcmVkaWN0aW9uU2xpZGUvUHJkZWljdGlvblNsaWRlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJlZGljdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgIHBhZ2U9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT0ncHJlZGljdGlvbidcclxuICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT0nLnRpdGxlJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UHJkZWljdGlvblNsaWRlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc3RzIH0gZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHQucG5nJ1xyXG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd0xlZnQucG5nJ1xyXG5pbXBvcnQgYXJyb3dMZWZ0VmVjdG9yIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd0xlZnRWZWN0b3IucG5nJ1xyXG5pbXBvcnQgYXJyb3dSaWdodFZlY3RvciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dSaWdodFZlY3Rvci5wbmcnXHJcbmltcG9ydCBhcnJvd1N0eWxlcyBmcm9tICcuL0Fycm93Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFycm93KHsgdHlwZSwgb25DbGljaywgaXNFZGdlIH0pIHtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgcG9pbnRlciA9IHR5cGUgPT09IGNvbnN0cy5QUkVWID9cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd0xlZnQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd0xlZnR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93UmlnaHQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd1JpZ2h0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctcmlnaHRcIlxyXG4gICAgICAgICAgICAvPixcclxuICAgICAgICBhcnJvd3MgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dSaWdodFZlY3Rvci5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93UmlnaHRWZWN0b3J9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93TGVmdFZlY3Rvci5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93TGVmdFZlY3Rvcn1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcblxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0VkZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyb3dzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyB0cmFuc2xhdGlvbnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0l0ZW0ubW9kdWxlLnNjc3MnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaW1lciB9IGZyb20gJy4vVGltZXIvVGltZXInXHJcbmltcG9ydCB7IFByZWRpY3Rpb25Nb2RhbCB9IGZyb20gJy4vUHJlZGljdGlvbk1vZGFsL1ByZWRpY3Rpb25Nb2RhbCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXRlbSh7XHJcbiAgICB0ZWFtT25lTmFtZSxcclxuICAgIHRlYW1Ud29OYW1lLFxyXG4gICAgdGVhbU9uZUljb24sXHJcbiAgICB0ZWFtVHdvSWNvbixcclxuICAgIHByZWRpY3Rpb25CdXR0b25OYW1lLFxyXG4gICAgYnV5QnV0dG9uTmFtZSxcclxuICAgIGxvY2F0aW9uSW5NYWluUGFnZSxcclxuICAgIGV4cGlyeVRpbWVzdGFtcCxcclxuICAgIHByZWRpY3Rpb24sXHJcbiAgICBvcmRpbmFyLFxyXG4gICAgY2xpY2tCdXlcclxufSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zb2xlLmxvZyggZXhwaXJ5VGltZXN0YW1wICk7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignaG9tZScpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5NYWluUGFnZX1gLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICBbc2hvd1ByZWRpY3Rpb24sIHNldFNob3dQcmVkaWN0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGZ1bmN0aW9uIGdvVG9QcmVkaWN0aW9ucygpIHtcclxuICAgICAgICAvLyBzZXRTaG93UHJlZGljdGlvbighc2hvd1ByZWRpY3Rpb24pO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvcHJlZGljdGlvbmApO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtT25lSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0ZWFtT25lTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVyX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7QmNCz0YDQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRh9C10YDQtdC3PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJ5VGltZXN0YW1wPXtleHBpcnlUaW1lc3RhbXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNsYXNzPXtzdHlsZXMudGltZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtVHdvSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0ZWFtVHdvTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1ByZWRpY3Rpb24gJiYgPFByZWRpY3Rpb25Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU9e3RlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU9e3RlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e3RlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e3RlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbj17cHJlZGljdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXI9e29yZGluYXJ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX2J1dHRvbl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb1RvUHJlZGljdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmFuc2xhdGUocHJlZGljdGlvbkJ1dHRvbk5hbWUpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlfYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlfYnV0dG9uX2NvbnRlbnR9IG9uQ2xpY2s9e2NsaWNrQnV5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZShidXlCdXR0b25OYW1lKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ByZWRpY3Rpb25Nb2RhbC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcmVkaWN0aW9uTW9kYWwoe1xyXG4gICAgdGVhbU9uZU5hbWUsXHJcbiAgICB0ZWFtVHdvTmFtZSxcclxuICAgIHRlYW1PbmVJY29uLFxyXG4gICAgdGVhbVR3b0ljb24sXHJcbiAgICBwcmVkaWN0aW9uLFxyXG4gICAgb3JkaW5hclxyXG59KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbU9uZUljb259IGFsdD17YCR7dGVhbU9uZU5hbWV9LWljb25gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVlMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbVR3b0ljb259IGFsdD17YCR7dGVhbVR3b0ljb259LWljb25gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5vcmRpbmFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkaW5hclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRpbWVyIH0gZnJvbSAncmVhY3QtdGltZXItaG9vayc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGltZXIoeyBleHBpcnlUaW1lc3RhbXAsIHRpbWVDbGFzcyB9KSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgc2Vjb25kcyxcclxuICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgIGhvdXJzLFxyXG4gICAgfSA9IHVzZVRpbWVyKHsgZXhwaXJ5VGltZXN0YW1wLCBvbkV4cGlyZTogKCkgPT4gY29uc29sZS53YXJuKCdvbkV4cGlyZSBjYWxsZWQnKSB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGltZUNsYXNzfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge21pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXN9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7c2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kc31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4vQXJyb3dzL0Fycm93J1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9JdGVtL0l0ZW0nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJkZWljdGlvblNsaWRlLm1vZHVsZS5zY3NzJ1xyXG4vLyBpbWFnZXMsIGljb25zXHJcbmltcG9ydCBwcmVkaWN0aW9uQmFja2dyb3VuZCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHJlZEJhY2sucG5nJ1xyXG5pbXBvcnQgeyBzbGlkZV9kYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGUnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfUFJFRElDVElPTlMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcbmltcG9ydCB7IHNldE1hdGNoSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZGVpY3Rpb25TbGlkZSgpIHtcclxuXHJcbiAgICBjb25zdCBbIHNsaWRlX2RhdGEsIHNldFNsaWRlRGF0YSBdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgWyBjdXJyZW50TWF0Y2hJZCwgc2V0Q3VycmVudE1hdGNoSWQgXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCk9PiB7XHJcbiAgICAgICAgcmVxdWVzdCggR0VUX1BSRURJQ1RJT05TLCB7fSwgeyBhdXRoOiB0cnVlIH0gKVxyXG4gICAgICAgICAgICAudGhlbiggcnNwID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRvYXN0KGBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZGApXHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZURhdGEoIHJzcC5kYXRhLmRhdGEubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogaXRlbVtgdGVhbTFfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogaXRlbVtgdGVhbTJfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGl0ZW0udGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29lZmZpY2VudDogaXRlbS5mYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFyVGV4dDogYCR7aXRlbS50eXBlfSAvICR7aXRlbS5wcmljZX3RgNGD0LEuYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UgKyAnINGA0YPQsS4nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCByc3AuZGF0YT8uZGF0YS5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRNYXRjaElkKHJzcC5kYXRhLmRhdGFbMF0uaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHt9KVxyXG4gICAgfSwgW10gKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBpZiAoIGN1cnJlbnRNYXRjaElkICE9PSBudWxsICYmIGN1cnJlbnRNYXRjaElkICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldE1hdGNoSWQoY3VycmVudE1hdGNoSWQpKTtcclxuICAgICAgICB9IFxyXG4gICAgfSwgW2N1cnJlbnRNYXRjaElkIF0pXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBzdHlsZSA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHByZWRpY3Rpb25CYWNrZ3JvdW5kLnNyYyArIFwiKVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aW1lID0gbmV3IERhdGUoKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICBicmVha3BvaW50cyA9IFtcclxuICAgICAgICAgICAgeyB3aWR0aDogMzc1LCBpdGVtUGFkZGluZzogWzIxLCAwLCAyNSwgMF0gfSxcclxuICAgICAgICAgICAgeyB3aWR0aDogNjE2LCBpdGVtUGFkZGluZzogWzc5LCAwLCA3OSwgMF0gfSxcclxuICAgICAgICAgICAgeyB3aWR0aDogMTkyMCwgaXRlbVBhZGRpbmc6IFsxMTUsIDAsIDQzLCAwXSB9LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICB0aW1lLnNldFNlY29uZHModGltZS5nZXRTZWNvbmRzKCkgKyAxMDYwMCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2xpZGVDaGFuZ2UocCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRNYXRjaElkKCBwPy5pdGVtPy5pZCApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJBcnJvdz17QXJyb3d9XHJcbiAgICAgICAgICAgICAgICBicmVha1BvaW50cz17YnJlYWtwb2ludHN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2xpZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZV9kYXRhLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lTmFtZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvTmFtZT17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZT17ZWwucHJlZGljdGlvbkJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXsncHJlZGljdGlvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcnlUaW1lc3RhbXA9e25ldyBEYXRlKCBgJHsgZWwuZGF0ZS5zcGxpdChgLmApLnJldmVyc2UoKS5qb2luKGAuYCkgfSAke2VsLnRpbWV9YCApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbj17ZWwucHJlZGljdGlvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFyPXtlbC5vcmRpbmFyVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7XHJcbiAgICBwYWdlID0gJ2NvbW1vbicsXHJcbiAgICB0ZXh0UGF0aE5hbWUgPSBcIllvdSBhcmUgZG9udCBwdXQgdGhlcmUgdGV4dC5cIixcclxuICAgIGxvY2F0aW9uSW5QYWdlID0gXCJcIixcclxuICAgIGFkaXRpb25hbFN0eWxlcyA9IG51bGwsXHJcbiAgICBhY3RpdmUgPSBmYWxzZSxcclxuICAgIGNsaWNrID0gbnVsbCxcclxuICAgIGNvbnRhaW5lclN0eWxlcyA9IG51bGwgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKHBhZ2UpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5QYWdlfWAsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHthZGl0aW9uYWxTdHlsZXN9ICR7YWN0aXZlID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXtjb250YWluZXJTdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRlbnR9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKHRleHRQYXRoTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc3RzIH0gZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93UmlnaHQucG5nJ1xyXG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd0xlZnQucG5nJ1xyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcblxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMzVweCcsXHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6ICcxMCUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNFZGdlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy9ob29rcyBcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBMaWtlRGlzbGlrZURyb3AgfSBmcm9tICcuL0xpa2VEaXNsaWtlRHJvcC9MaWtlRGlzbGlrZURyb3AnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRmVlZEJhY2subW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCBsaWtlSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9saWtlLnBuZydcclxuaW1wb3J0IGRpc0xpa2VJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2Rpc2xpa2UucG5nJ1xyXG5pbXBvcnQgZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9maWxsZWRTdGFyLnBuZydcclxuaW1wb3J0IHVuZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy91bmZpbGxlZFN0YXIucG5nJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGZWVkQmFjayh7XHJcbiAgICBhdmF0YXIsXHJcbiAgICBuaWtOYW1lLFxyXG4gICAgcmF0ZWluZyxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZGF0ZSxcclxuICAgIGxpa2VzLFxyXG4gICAgZGlzTGlrZXMsXHJcbiAgICByZWFjdGlvbnNGb3JUZXN0aW5nXHJcbn0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIHN0YXJzID0gWzAsIDEsIDIsIDMsIDRdLFxyXG4gICAgICAgIFtzaG93UmVhY3Rpb25zLCBzZXRTaG93UmVhY3Rpb25zXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFyfSBhbHQ9e25pa05hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e25pa05hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGVpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnMubWFwKChlbCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsIDwgcmF0ZWluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17TWF0aC5yYW5kb20oKX0gc3JjPXtmaWxsZWRTdGFyLnNyY30gYWx0PVwic3RhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtNYXRoLnJhbmRvbSgpfSBzcmM9e3VuZmlsbGVkU3Rhci5zcmN9IGFsdD1cInN0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbV9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfbGlrZXNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saWtlc19kaXNsaWtlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpa2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaWtlSWNvbi5zcmN9IGFsdD1cImxpa2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntsaWtlc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52ZXJ0aWNhbF9ib3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1JlYWN0aW9ucyghc2hvd1JlYWN0aW9ucyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXNMaWtlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGlzTGlrZUljb24uc3JjfSBhbHQ9XCJkaXNsaWtlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGlzTGlrZXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1JlYWN0aW9ucyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWtlRGlzbGlrZURyb3AgZGF0YT17cmVhY3Rpb25zRm9yVGVzdGluZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaWtlRGlzbGlrZURyb3AubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zIFxyXG5pbXBvcnQgbGlrZUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvbGlrZS5wbmcnXHJcbmltcG9ydCBkaXNMaWtlSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9kaXNsaWtlLnBuZydcclxuaW1wb3J0IGF2YXRhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9hdmF0YXIucG5nJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaWtlRGlzbGlrZURyb3AoeyBkYXRhID0gW10gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFyLnNyY30gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX3BhcnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntlbC51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VsLnJlYWN0aW9uID8gbGlrZUljb24uc3JjIDogZGlzTGlrZUljb24uc3JjfSBhbHQ9XCJyZWFjdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xlYXZlQ29tbWVudC5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IGZpbGxlZFN0YXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZmlsbGVkU3Rhci5wbmcnXHJcbmltcG9ydCB1bmZpbGxlZFN0YXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvdW5maWxsZWRTdGFyLnBuZydcclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExlYXZlQ29tbWVudCgpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHN0YXRlcyBjb25zdHNcclxuICAgICAgICBzdGFycyA9IFswLCAxLCAyLCAzLCA0XSxcclxuICAgICAgICBbc2ltdWxhdG9yLCBzZXRTaW11bGF0b3JdID0gdXNlU3RhdGUoMCksXHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnY29tbW9ucy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICAvLyB5dXAgY29uZmlnc1xyXG4gICAgICAgIHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgIGNvbW1lbnQ6IHl1cFxyXG4gICAgICAgICAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gZm9ybSBjb25maWdzXHJcbiAgICAgICAgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgICAgICBtb2RlOiAnb25DaGFuZ2UnLFxyXG4gICAgICAgICAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2NoZW1hKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN1Ym1pdCA9IChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhLCB7IHJhdGU6IHNpbXVsYXRvciB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfYXJlYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzLm1hcChlbCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbXVsYXRvciA+IGVsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17KGVsICsgMSkgKiBNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmaWxsZWRTdGFyLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW11bGF0b3IoZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsoZWwgKyAxKSAqIE1hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VuZmlsbGVkU3Rhci5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2ltdWxhdG9yKGVsICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0YXJlYV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2NvbW1lbnQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2NvbW1lbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgncGxhY2VIb2xkZXInKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoJ3NlbmQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlcywgYWN0aXZlUGFnZSwgb25DbGljayB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLm1hcChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlUGFnZSA9IGFjdGl2ZVBhZ2UgPT09IGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2lzQWN0aXZlUGFnZSA/ICd0cnVlJyA6ICdmYWxzZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucm91bmR9ICR7aXNBY3RpdmVQYWdlICYmIHN0eWxlcy5hY3RpdmV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU29ydGluZy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb3J0aW5nKHtcclxuICAgIHNvcnRpbmdUZXh0LFxyXG4gICAgZGF0ZVNvcnRpbmdUZXh0LFxyXG4gICAgcmF0ZVNvcnRpbmcsXHJcbiAgICBzb3J0QnlEYXRlLFxyXG4gICAgc29ydEJ5UmF0ZSxcclxuICAgIGRhdGVBY3RpdmVcclxufSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihgaG9tZWApLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICd0ZXN0aW1vbmlhbHMuc29ydGluZy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShzb3J0aW5nVGV4dClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ5RGF0ZX0gJHtkYXRlQWN0aXZlID8gc3R5bGVzLmFjdGl2ZSA6IG51bGx9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzb3J0QnlEYXRlfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShkYXRlU29ydGluZ1RleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzb3J0QnlSYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IWRhdGVBY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogbnVsbH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShyYXRlU29ydGluZylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uL1RpdGxlL1RpdGxlJ1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4vQXJyb3dzL0Fycm93J1xyXG5pbXBvcnQgeyBGZWVkQmFjayB9IGZyb20gJy4vRmVlZEJhY2svRmVlZEJhY2snXHJcbmltcG9ydCB7IGZlZWRiYWNrX2RhdGEgfSBmcm9tICcuL2ZlZWRfYmFja19kYXRhJ1xyXG5pbXBvcnQgeyBMZWF2ZUNvbW1lbnQgfSBmcm9tICcuL0xlYXZlQ29tbWVudC9MZWF2ZUNvbW1lbnQnXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuL1BhZ2luYXRpb24vUGFnaW5hdGlvbidcclxuaW1wb3J0IHsgU29ydGluZyB9IGZyb20gJy4vU29ydGluZy9Tb3J0aW5nJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Rlc3RpbW9uaWFscy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9lci5saWInXHJcbmltcG9ydCB7IEdFVF9GRUVEQkFDSyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZ2V0TWF0Y2hJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3JlZHV4L2ZlYXR1cmVzL21hdGNoU2xpY2UnXHJcblxyXG5pbXBvcnQgYXZhdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2F2YXRhci5wbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGVzdGltb25pYWxzKHtcclxuICAgIHBhZ2UsXHJcbiAgICBsb2NhdGlvbkluUGFnZSxcclxuICAgIHRleHRQYXRoTmFtZVxyXG59KSB7XHJcbiAgICBjb25zdCBtYXRjaElkID0gdXNlU2VsZWN0b3IoZ2V0TWF0Y2hJZCk7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtmZWVkQmFja3MsIHNldEZlZWRCYWNrc10gPSB1c2VTdGF0ZShbXSksXHJcbiAgICAgICAgW2RhdGVBY3RpdmUsIHNldERhdGVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChtYXRjaElkICE9PSBudWxsICAmJiBtYXRjaElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmVxdWVzdChHRVRfRkVFREJBQ0sobWF0Y2hJZCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihwcmVkaWN0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmVlZEJhY2tzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9ucy5kYXRhLmRhdGEubWFwKGZlZWRCYWNrID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRlaW5nOiBmZWVkQmFjay5zdGFycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmZWVkQmFjay5jb21tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA3LTEzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZXM6ICtmZWVkQmFjay5saWtlQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNMaWtlczogK2ZlZWRCYWNrLmRpc2xpa2VDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHsgY29uc29sZS5sb2coZXJyKSB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFttYXRjaElkXSlcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBmb3Igc29ydGluZ1xyXG4gICAgY29uc3Qgc29ydGluZyA9ICh0b1NvcnQsIHNvcnRpbmdCeSwgZGF0ZUFjdGl2ZSkgPT4ge1xyXG4gICAgICAgIGlmICh0b1NvcnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXRcclxuICAgICAgICAgICAgICAgIGRhdGFGb3JTb3J0aW5nID0gdG9Tb3J0LnJlZHVjZSgoYWMsIGVsKSA9PiBhYy5jb25jYXQoZWwpKSxcclxuICAgICAgICAgICAgICAgIHNvcnRlZERhdGEgPSBbXSxcclxuICAgICAgICAgICAgICAgIHNvcnRlZCA9IFtdXHJcblxyXG4gICAgICAgICAgICBpZiAoc29ydGluZ0J5ID09PSBcImRhdGVcIikgc29ydGVkID0gZGF0YUZvclNvcnRpbmcuc29ydCgoYSwgYikgPT4gKGIuZGF0ZS5zb3J0Rm9ybWF0IC0gYS5kYXRlLnNvcnRGb3JtYXQpKVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzb3J0aW5nQnkgPT09IFwicmF0ZVwiKSBzb3J0ZWQgPSBkYXRhRm9yU29ydGluZy5zb3J0KChhLCBiKSA9PiAoYi5yYXRlaW5nIC0gYS5yYXRlaW5nKSlcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguY2VpbChkYXRhRm9yU29ydGluZy5sZW5ndGggLyAzKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc29ydGVkSXRlbXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgc29ydGVkLmZvckVhY2goKGVsLCB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHggPCBpICogMykgJiYgKHggPj0gKChpICogMykgLSAzKSkgJiYgc29ydGVkSXRlbXMucHVzaChlbClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzb3J0ZWREYXRhLnB1c2goc29ydGVkSXRlbXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0RmVlZEJhY2tzKHNvcnRlZERhdGEpXHJcbiAgICAgICAgICAgIHNldERhdGVBY3RpdmUoZGF0ZUFjdGl2ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBBcnRpZmljaWFsIHJlYWN0aW9ucyBkYXRhIFxyXG4gICAgY29uc3QgcmVhY3Rpb25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiTG9yZW0gSXBzdW1cIixcclxuICAgICAgICAgICAgcmVhY3Rpb246IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiTG9yZW0gSXBzdW1cIixcclxuICAgICAgICAgICAgcmVhY3Rpb246IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIkxvcmVtIElwc3VtXCIsXHJcbiAgICAgICAgICAgIHJlYWN0aW9uOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2ZlZWRCYWNrcyAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9e3RleHRQYXRoTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JblBhZ2U9e2xvY2F0aW9uSW5QYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWVkX2JhY2tzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTb3J0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0aW5nVGV4dD17XCJzb3J0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU29ydGluZ1RleHQ9e1wiYnlEYXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRlU29ydGluZz17XCJieVJhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeURhdGU9eygpID0+IHsgc29ydGluZyhmZWVkQmFja3MsIFwiZGF0ZVwiLCB0cnVlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5UmF0ZT17KCkgPT4geyBzb3J0aW5nKGZlZWRCYWNrcywgXCJyYXRlXCIsIGZhbHNlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUFjdGl2ZT17ZGF0ZUFjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJBcnJvdz17QXJyb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkQmFja3MubWFwKGVsID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGtleT17TWF0aC5yYW5kb20oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZWRCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17ZWwuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWtOYW1lPXtlbC5uaWtOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRlaW5nPXtlbC5yYXRlaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZWwuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGUucmVuZGVyRm9ybWF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlcz17ZWwubGlrZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc0xpa2VzPXtlbC5kaXNMaWtlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdGlvbnNGb3JUZXN0aW5nPXtyZWFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExlYXZlQ29tbWVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvL2ljb25zXHJcbmltcG9ydCBhdmF0YXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvYXZhdGFyLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBmZWVkYmFja19kYXRhID0gW1xyXG4gICAgLy8gZWFjaCBhcnJheSBhcmUgbmV3IHBhZ2VcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMTMuMDcuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA3LTEzXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAwLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldGUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMTUuMDcuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA3LTE1XCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAxLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldGUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMDEuMDYuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA2LTAxXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAxLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogNVxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiA1LFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMTMuMDcuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA3LTEzXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAwLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMDIuMDQuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA0LTAyXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAwLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogNVxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiA1LFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMTMuMDcuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA3LTEzXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAwLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMDIuMDQuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA0LTAyXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAwLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogNVxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiA1LFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMTMuMDcuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA3LTEzXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAwLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgVXQgZW5pbSBhZCAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0ICAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMDIuMDQuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEZvcm1hdDogbmV3IERhdGUoXCIyMDIxLTA0LTAyXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpa2VzOiAwLFxyXG4gICAgICAgICAgICBkaXNMaWtlczogNVxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG5dIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RpdGxlLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGl0bGUoe1xyXG4gIHBhZ2UgPSBcImNvbW1vblwiLFxyXG4gIHRleHRQYXRoTmFtZSA9IFwiWW91IGFyZSBkb250IHB1dCB0aGVyZSB0ZXh0LlwiLFxyXG4gIGxvY2F0aW9uSW5QYWdlID0gXCJcIixcclxuICB0ZXh0U3R5bGVzID0gbnVsbCxcclxuICBocmVmLFxyXG4gIGNsYXNzZXMsXHJcbn0pIHtcclxuICBjb25zdCAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihwYWdlKSxcclxuICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5QYWdlfWAsXHJcbiAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAge2hyZWYgPyAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBzdHlsZT17dGV4dFN0eWxlc31cclxuICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0cmFuc2xhdGUoYCR7dGV4dFBhdGhOYW1lfWApfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBzdHlsZT17dGV4dFN0eWxlc30gY2xhc3Nlcz17Y2xhc3Nlc30+XHJcbiAgICAgICAgICB7dHJhbnNsYXRlKGAke3RleHRQYXRoTmFtZX1gKX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSdcclxuXHJcblxyXG5jb25zdFxyXG4gICAgaGFuZGxlX292ZXJmbG93X29uX29wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9ICdhdXRvJ1xyXG4gICAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHtcclxuICAgIG9uQ2xvc2UsXHJcbiAgICAvLyBjbG9zZVdpdGhWZWN0b3JlID0gbnVsbCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgY29udGFpbmVyU3R5bGVzID0gbnVsbCxcclxuICAgIGNvbnRlbnRTdHlsZXMgPSBudWxsLFxyXG4gICAgb3RoZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgcG9ydGFsTG9jYXRpb24gPSAnbW9kYWwtY29udGVpbmVyJyB9KSB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dNb2RhbCh0cnVlKVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtoYW5kbGVDbG9zZV0pXHJcblxyXG4gICAgY29uc3Qgbm9kZSA9IHVzZVJlZigpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSBlID0+IHtcclxuICAgICAgICBpZiAobm9kZT8uY3VycmVudD8uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvbkNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgICAgIGRpbmFtaWNUb3AgPSB3aW5kb3cuc2Nyb2xsWVxyXG5cclxuICAgIHNob3dNb2RhbCA/IGhhbmRsZV9vdmVyZmxvd19vbl9vcGVuKCkgOiBoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UoKVxyXG5cclxuICAgIGNvbnN0IG1vZGFsID0gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxDb250ZWluZXJ9ICR7Y29udGFpbmVyU3R5bGVzfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0b3A6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCAhaW1wb3J0YW50J1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxDb250ZW50fSAke2NvbnRlbnRTdHlsZXN9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtvdGhlclN0eWxlc31cclxuICAgICAgICAgICAgICAgIHJlZj17bm9kZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgaWYgKHNob3dNb2RhbCkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICAgIG1vZGFsLFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3J0YWxMb2NhdGlvbilcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybiBudWxsXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGhvc3QgPSBcImh0dHBzOi8vNDc5NjI4NDU4ZDMyYmQubG9jYWxob3N0LnJ1bi9hcGkvXCI7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9ICggZGVzdGluYXRpb24sIHBheWxvYWQgPSBudWxsLCBvcHRpb25zID0gbnVsbCApID0+IG5ldyBQcm9taXNlKCAoIHJzbHYsIHJqY3QgKSA9PiB7XHJcbiAgbGV0IGhlYWRlcnMgPSB7fTtcclxuXHJcbiAgaWYgKCBvcHRpb25zICkge1xyXG4gICAgaWYgKCBvcHRpb25zLmF1dGggPT09IHRydWUgKSB7XHJcbiAgICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKGBhY2Nlc3MtdG9rZW5gKX1gIHx8IGBgIC8vIGZvciBtb3N0IG9mIHJlcXVlc3RzXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIGBoZWFkZXJzYCBpbiBvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVycyBpbnN0YW5jZW9mIE9iamVjdCApIHtcclxuICAgICAgaGVhZGVycyA9IHsgLi4uaGVhZGVycywgLi4ub3B0aW9ucy5oZWFkZXJzIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKCBgc3RhcnQgbG9hZGluZ2AgKTtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6IGRlc3RpbmF0aW9uLm1ldGhvZCxcclxuICAgIHVybDogZGVzdGluYXRpb24udXJsLFxyXG4gICAgaGVhZGVycyxcclxuICAgIGRhdGE6IHBheWxvYWQgfHwge31cclxuICB9KVxyXG4gIC50aGVuKCByc2x2IClcclxuICAuY2F0Y2goIHJqY3QgKVxyXG4gIC5maW5hbGx5KCAoKSA9PiBjb25zb2xlLmxvZyggYGVuZCBsb2FkaW5nYCApIClcclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIHZhciBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XHJcbiAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBjID0gY2FbaV07XHJcblxyXG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xyXG4gICAgICBjID0gYy5zdWJzdHJpbmcoMSwgYy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSBuYW1lID0+IHtcclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz07IFBhdGg9LzsgRXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChuYW1lLCB2YWx1ZSwgZGF5cykgPT4ge1xyXG4gIGxldCBleHBpcmVzID0gXCJcIjtcclxuXHJcbiAgaWYgKGRheXMpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuIiwiaW1wb3J0IHtob3N0fSBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5cclxuY29uc3QgQVVUSF9VUkwgPSBob3N0ICsgYGF1dGgvYDtcclxuY29uc3QgQUNDT1VOVF9VUkwgPSBob3N0ICsgYGFjY291bnQvYFxyXG5cclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyAncmVnaXN0cmF0aW9uJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HSU4gPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArICdsb2dpbicsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BQ0NPVU5UX0lORk8gPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdpbmZvJyxcclxuICBtZXRob2Q6ICdnZXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9JTkZPID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAnaW5mbycsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfSU1BR0UgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdwcm9maWxlLWltYWdlJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU1RBUlRfUkVTRVRfUEFTU1dPUkQgPSBlbWFpbCA9PiAoe1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvcmVzZXQ/ZW1haWw9JHtlbWFpbH1gLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFZFUklGWV9QQVNTV09SRF9SRVNFVCA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL3ZlcmlmeV9jb2RlYCxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTkVXX1BBU1NXT1JEID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvbmV3X3Bhc3N3b3JkIGAsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX05FV1MgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vbmV3c2AsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9tYXRjaC1vZi10aGUtZGF5YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX09GX05FWFRfREFZID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL21hdGNoLW9mLXRoZS1kYXk/dHlwZT1uZXh0X2RheWAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJFRElDVElPTlMgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWNjb3VudC9wcmVkaWN0aW9uYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GRUVEQkFDSyA9IGlkID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgZmVlZGJhY2svJHtpZH0/c29ydF9ieT1jcmVhdGVkX2F0Jm9yZGVyX2J5PWRlc2NgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX0JZX1RZUEUgPSB0eXBlID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vZ2FtZT90eXBlPSR7dHlwZX1gLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRldGVjdERvbWFpbkxvY2FsZT1kZXRlY3REb21haW5Mb2NhbGU7ZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkl0ZW1zLGhvc3RuYW1lLGRldGVjdGVkTG9jYWxlKXtsZXQgZG9tYWluSXRlbTtpZihkb21haW5JdGVtcyl7aWYoZGV0ZWN0ZWRMb2NhbGUpe2RldGVjdGVkTG9jYWxlPWRldGVjdGVkTG9jYWxlLnRvTG93ZXJDYXNlKCk7fWZvcihjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKXt2YXIgX2l0ZW0kZG9tYWluLF9pdGVtJGxvY2FsZXM7Ly8gcmVtb3ZlIHBvcnQgaWYgcHJlc2VudFxuY29uc3QgZG9tYWluSG9zdG5hbWU9KF9pdGVtJGRvbWFpbj1pdGVtLmRvbWFpbik9PW51bGw/dm9pZCAwOl9pdGVtJGRvbWFpbi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7aWYoaG9zdG5hbWU9PT1kb21haW5Ib3N0bmFtZXx8ZGV0ZWN0ZWRMb2NhbGU9PT1pdGVtLmRlZmF1bHRMb2NhbGUudG9Mb3dlckNhc2UoKXx8KF9pdGVtJGxvY2FsZXM9aXRlbS5sb2NhbGVzKSE9bnVsbCYmX2l0ZW0kbG9jYWxlcy5zb21lKGxvY2FsZT0+bG9jYWxlLnRvTG93ZXJDYXNlKCk9PT1kZXRlY3RlZExvY2FsZSkpe2RvbWFpbkl0ZW09aXRlbTticmVhazt9fX1yZXR1cm4gZG9tYWluSXRlbTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXRlY3QtZG9tYWluLWxvY2FsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJcbiAgICBpbXBvcnQgX19pMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4gICAgaW1wb3J0IF9fbG9hZE5hbWVzcGFjZXMgZnJvbSAnbmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXMnXG4gICAgXG5pbXBvcnQgTWFpbiBmcm9tICcvY29tcG9uZW50cy9QYWdlcy9NYWluL01haW4nXHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiA8TWFpbiAvPlxyXG5cclxuSW5kZXhQYWdlLmxheW91dCA9IFwibWFpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG5cblxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC4uLihhd2FpdCBfX2xvYWROYW1lc3BhY2VzKHtcbiAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICBwYXRobmFtZTogJy9pbmRleCcsXG4gICAgICAgICAgICAgIGxvYWRlck5hbWU6ICdnZXRTdGF0aWNQcm9wcycsXG4gICAgICAgICAgICAgIC4uLl9faTE4bkNvbmZpZyxcbiAgICAgICAgICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbWF0Y2hTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgbWF0Y2hJZDogbnVsbFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0TWF0Y2hJZDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUubWF0Y2hJZCA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldE1hdGNoSWQgfSA9IG1hdGNoU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1hdGNoSWQgPSBzdGF0ZSA9PiBzdGF0ZS5tYXRjaC5tYXRjaElkXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXRjaFNsaWNlLnJlZHVjZXIiLCIvLyBpY29uc1xyXG5pbXBvcnQgYXRsZXRpY29JY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLnBuZydcclxuaW1wb3J0IGJhcmNhSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYmFyY2EucG5nJ1xyXG5pbXBvcnQgcHNqSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHNqLnBuZydcclxuaW1wb3J0IGF0bGV0aWNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nJ1xyXG5pbXBvcnQgbWFyY2VsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLnBuZydcclxuaW1wb3J0IHJlbm5haXNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZV9kYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTEnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcItCe0YDQtNC40L3QsNGAXCIsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTInLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JHQsNGA0YHQtdC70L7QvdCwJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0J/QodCWJyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogXCLQrdC60YHQv9GA0LXRgdGBXCIsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzI1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lMycsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE4MDAg0YDRg9CxLiAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTQnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTUnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTYnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nXHJcbiAgICB9LFxyXG5dIiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMuMjgzODIwZmQyNmFlMzA4NTQyYzQ5OTg3NDdmNmYxNTAucG5nXCIsXCJoZWlnaHRcIjo2MyxcIndpZHRoXCI6NTgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTZVbEVRVlI0MmpYS3YyckNVQmdGOER2NE1vVytSNGZPaFQ1TDdSZ1hONkZMQzVFVUhCcHEwZzRYR2tXdzRvMjVYTkFoRUM1Sk1MbUtVZkRQb0tBSTBlL1REUDZXd3prY0VzZHg3dnMrY3M1QkNBRkJFSUFZamZDNkFWRks3Wklrd1NnTXdmVThrRktDYXhpbzBuUlBHR094cnV2NHFtbG5xOUdBOVk5OW5sQ0tUcWVUa01WOGJsNFArRld0bmpiTmJ6amE5aW1MSWh3clpSRlBpS2ZaZElxcmovY2NlLys0ck5melJaYmhnUE5uVWhpbnFaRDlQbTQvalVQUTdhSU13eUc1MFNxVk82ZmRQakRMd2w5S2p5L2w4ajBwTU5jdEZkazB6UWZhYXVWdnRkcGowZjhjcDNRQldmeWJqNTArY29zQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLjJjZTc1ZTIxMTYyZTJlNmRjNDhiOTllNjAxODEwN2UwLnBuZ1wiLFwiaGVpZ2h0XCI6NjIsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUEwMGxFUVZSNG5BSElBRGYvQVd4dGhzVGUzK2N4OHZQNkNnd0tCQUFHQndYMkJoQU96d0dEaEpiL056WXVBTnpjNGY4RUJ3Y0F5TWZTQVJEaTRRQUJqNUNnL0JFUURRTDcvLzhCdktxK0FIdDhYdi9qcjZ2L0FXaHBndjMxOXZrQ01ERWwveS84N0FBeVMwZ0J3NldxL3dGZWFJUC9Kd0gyL1ZsV1JBUCsrdm9BQ0JNVC9kQ3dzd01Cbm9XTzlVNVFSUXJ0NE4vOC92Ny9BQkVkSFFURnNMYjNBWTJUb1RBb0J2Nm1KU0FZS1FBQUFBRGM0ZWpZeXY0S1d3RnFJMFlBbHQyNkJybXNzcnNBQUFBQlIxUk9SVlVvVWZsK2xWdHJTVEN5NFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2F2YXRhci5iZTA2YmRjMDU0MzBmNWNkY2ZiODRmN2E5ZTU0MjExMy5wbmdcIixcImhlaWdodFwiOjc1LFwid2lkdGhcIjo3NixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBY0VsRVFWUjQyaDJHdlFuQ0FCUUd2MG44STA2ZzgrZ1lPbzIyMmxnSVdvcWtFeEViY1lab2tlUytBZkx5Q0FkM0o0dkNKWkhjbVZueXhIK0NGZXQweFVpY0hUd3N4RFB2SkZwSHpzNzdvYldBNE1LR0xWZUNScFI4TEpMMGw1dVk4dVBBZ3FXUFZJeUZtUE9tUzE0VXFBZHR5bUgzVGZGejBRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9kaXNsaWtlLjgzY2M3NjI0N2RkNDczYWIyYmIzNzVmY2UyNWI5MzFmLnBuZ1wiLFwiaGVpZ2h0XCI6MzIsXCJ3aWR0aFwiOjMwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFaa2xFUVZSNDJqM0xzUXNCQVFDRjhhZTRGTE93bUdRUW1VeVhRY2x3dzRuaEprcGh0UHZuZjVIaFhtLzR2dUdMUXVYaXJIWjNkWXRTYldCc2FwNm80bVdVZHZieGFHV20wTVRUMmtiZndzZkpNU1pXR2p1VlhsdGFPaWdUWFozOEhrTnYyL3o1QzlVK04yejByR0FuQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZmlsbGVkU3Rhci5iNDRhYTgxMmRjYmY5ZWIxNGU2NGFmNmM4ZTcyNzliMy5wbmdcIixcImhlaWdodFwiOjI2LFwid2lkdGhcIjoyOCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBaFVsRVFWUjQybVA0ZDlxSUVZaFpHWURnM3hsalBTQTJad0FDb0JnYkVETXhJQU9nUUNzUXowRVhOQURpVENBT0F1TGIvODRZdlFIU29VQ2NBY1FXSUFWQ1FEd2JpUC8vTzIzOEgyakZIeEFiaUZjQ3NSU3lTWDFBU2FBQ3NPUXlWR3RPNkRNQkJXOEE4UW9nbmduRXo0QUtlZUVLZ0J4dG9HQXVrbW1wUUd6SndNREFBQUFVRGwxazViTzVlQUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvbGlrZS4xNDMyZDhkNGMwNzQzN2I5NDY3YzUyNTllYjk0YjFkYy5wbmdcIixcImhlaWdodFwiOjMxLFwid2lkdGhcIjoyOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVFBQUFDZkRTMk5BQUFBWEVsRVFWUjQyalhMclFyQ0FBQkcwVStIMVNBMnc2SldzWWsveVdZUUJKVmhXZGpDR096OXkyRmg3T1I3TXpHNEpZcFlKdGFlN3BrNXVLb2NsZkh3MFZzNU9XdmliYXVjS3EvTWowV2lqa3RpbzBqcy9LTHoxYXY4dGZZajY0RXVtT0xGTTN3QUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci4yNjEwNWM1ZDRlNzgzNGRlNzk3ZWQ3MzQ1MDVlZTJiZi5wbmdcIixcImhlaWdodFwiOjI2LFwid2lkdGhcIjoyOCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBZmtsRVFWUjQybDJOc1FxRFFCQkVOeUY2VFZJR1VxWk5GeENMRXdXeFVCSEIza1lMOFRjOWYyengyUzB1UEdabnVKc1ZEZTZtSVg0SW95SDZzM3RobEF6dVlvZGdnUEVTdW9TdzFzM2w3QVZrdXNVbFdvRS9mMzFnd1pTbXllTlg5R3ZyZTNqcUhqbTB1OTUrd1FRdE5ERFQ4TFlQZmdTejhTTStGUkU1QUl3dlIwcURKQy9tQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL0NhbGVuZGFyLmU2MThkZjMzODdlZDEyM2I2NTFkNGVmMmFmOTE3ZmUyLnBuZ1wiLFwiaGVpZ2h0XCI6MzQsXCJ3aWR0aFwiOjM0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFhMGxFUVZSNDJnM0x1d3FDQUJRQTBQc0wvVUZMYzFNUUZZUmlJajBzZWhBMW1Zb05FZmIvd3lFNTh3a1R2YXZXeTkzUEpKVE9Na2NIdVlzeU5OSkJaaU94MW9WYzU2RlJlL3BLUXVydHBsWnA3ZFZoclZmcDdJeU5mRUloTVd4ekp6TjV5Q3dzclV3VnR1Wi9UaTVTMEtvMlA5RUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dMZWZ0LmUyMzcyYTBjNzhkOGM2YjI0NmJkZWUzZmZhYjQwZjdiLnBuZ1wiLFwiaGVpZ2h0XCI6MzUsXCJ3aWR0aFwiOjMxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE0MGxFUVZSNDJtTllzR0NCMklMNTg0M216NTFuc21EaFFxUDU4K2NiQThYMGdKaVhBU1FCWkJndldMVkNkLzYwR1Jielo4OHhtVDl2dmhsUVRKMEJwSExobnUycTgreGpaOHhMTDR0ZC9QcStCTkFFNC9uejVta3hMTmk2U1gydVpkU3llVnplSCtZNXhFMmZaeFcxYUg1RHU5ZUNOYXRVR0Jac1dLczFMemlqYWk2dno2TjVBWmxsOCtJSzB1ZjNUblJZc0d5cEdzUDhPWE5ORjU0K29qQXZMTHQ0WGs1bDVLS2I1MlVneHM3WFpnQzVET2dJaXdVYjEya0RWUnZPbnpYYmZQNzgrZVpBY1dXUUpDL0laVUFGT3ZQbnp0VUNzclVXekordnNtREJBallBalRWeFJNM2VuNzhBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2Fycm93UmlnaHQuYzZkNmQ5ZTEyMjJjNDE4ZjYwZmJiODE5NGQwOGE4MjMucG5nXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTRFbEVRVlI0MmhXT3ZVb0RRUlNGejcwenMrdktKcVlSd1ZnS1FzVENoN0F6aGJYVm9xOWc0Wk5ZYUxHTklQWldBYXRVYWRPRlFBS0JGRW1LaE0wUG0yVHV6YVQ0NEhENGlvL3lQRDhIVUEvUUVmWGVrREVsZ0FFRHVGSVJwOXVkVXk5TXRjbzZDQW1BU3c2SG9TUXViZlkwMEwvT2czei9OL24yZW5xVUxkWFNqYlM3RGZscVpTaDlyTzFaNXFOZk5hK1BQd3hSd0xGSE5WNGdZcUdVQzV5R1hXNE5vMWlkOFAxTjMzNitmK0NpMnNOejQ4MjhORnM2bnFRVWF1OVVKTUZ1ejNSVzJjQ3k2THhJeWJtWkJUQWtvcnBHenVoeURRQkUxazVKTVRvQWNSTmNFZXgwbDBnQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwuZWI0NjA0ODY0Y2UyNDAxYWEyNGZiNGVkMjcxZjZlODMucG5nXCIsXCJoZWlnaHRcIjo1MyxcIndpZHRoXCI6NDEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXRVbEVRVlI0Mm1Pb243T0ZsUUVJN2k1bjBIMjRna0VkeEc2Y3N3a29CZ0xUYnJqYXpMZ1Fhekg5WWdLUWJROFJuSDZkbjNuNnRmMUFnVTZHYWRlbkFObmJnVFFYVVBXMWJpQmVEeFJZd1RUdCtscWd3alZBaVZZR29PQjJJRjRFeEJlQkF1Y1pwbDliQW1SdlpoQ2FmbTJENFBScmkvbW1YNXNCWlBjS1RMKzJEb2dYQUhYY2FXR1lkcnVYWWVxZFVJYXBkd09CN01sQVhNZXdZbjVmOXQ1Rm1SNHJGM1E3cjEzUTVyVjNVWmJUb3ZsVFlnQUZaVmZBZXVaV1BRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5kN2Y1OTczMDQ5NDc0MDBmYjIwZjA1ZTJkYWU2YjVmYi5wbmdcIixcImhlaWdodFwiOjUxLFwid2lkdGhcIjo0NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBNmtsRVFWUjQybVBZM2NHamtlSFBlVGZFZ3VIY1ZnT0cvYytEeEsrOVNGWTkrMjJEZ0FERHVqWTljM1VHaHY5SHE2di9IMSs2NVAvYXBMVC9UMndZUHY3WTRDekIwRmFxNXAvSXdQRC8xOEg5dng5ZHUvcG45YXBWLzI3ck1mejhNOU5ObDZFNlhxcVhnWUhoLzYyK3J0KzdlcnYvTDZ1dS92TlFtdUgvNndxRFZJWmNmNEV0eXNibS85MU1ESDV2OFBQOC96alk4OWZUWU8vL3p6TlUraGdhRTNnbU9Ka1ovV2V3ZFBpL0k4am45OXVvOFArUHc5My92eTZUeldENGY0NkJveldHb1YvYWdPSExSaDJCLzYvOVpGOC95MmFvWkVBR3U2YUlxNTJ1a09uNWYwQmZHQ1lHQU5aS1pzRmMyMXZIQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93TGVmdC5kNmQ1MGZmYWNlMzIyMGNhY2VlODhjZDVlNTU1NjAxYS5wbmdcIixcImhlaWdodFwiOjM1LFwid2lkdGhcIjozMSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBelVsRVFWUjQybVA0Ly8rLzhMOS8vL1IvLy94bEJHUWJBTm1HUUZvSFNITXpBQW1EdjMvK21JSUVmbjMvWWZyejIzZlR2My8vbWdINTZneC9mdjgyQmpLVXRoVzFkWjZhdnpvSnlCWUhZaU9nQmgwR0lFTnRVM2I5OUhrTW5oODJwOWROM0pSU1BlWEJpWE5lUUhGVmtLVEdudGJKZFFzRS9KL3RxdWx0Mk44NXZmejV0VnN1SUUwTXYzLytOQVV5RlBhMVQ2czR2M0p6TkpBdENUVldtd0hJQUxyMHB6bVExZ1ppdzUvZnZwbi8rL3NYeEZjRnVaWWZ5TkQ2OWVPSDNwL2ZmM1NnM2xELzkrOGZCd0JqOXFQUGorNDdrZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93UmlnaHQuOTExZmM5ZTg0ZTA0NDYzNzgwYTNiNzU5MThhNjU1YTcucG5nXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQXlVbEVRVlI0Mm1QNDkrK2ZNQkRyL2YvLzMrRGYzNzhHdjMvOU1nS3lkWUJpM0F3Z3diOS8vcGorK1ByTkRNZzJCa244L3ZuTEFraXJNZno1L2RzRXlBRHBGTjNmTnEzMHlPU0YyVUMyRWxDeExraW45dFZkQjhKMk5QUjJiaTFwblRpZnplZnQ4Vm5MUUFvVXdKSlhkdTBQMjluWTE3NHh1M2JPZkVidkR5Zm5yMG9IaWl1Q2pBWFpvd3ZFWW9jbnpNczd2WGh0QXBDdC9QUGJkejJRVGoyZ2c4eStmL2xpQVhJY1NPSHZuejh0Z2JRcUE5REovRUNzQlhibHIxOGdDWkRqMVAvOSs4Y0JBSnk5bytqQ1hXZENBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL25ld3MvZm9ydEJhY2suMmZhYzRhNTNmMDZlMGQ3YjUwOGQwMzk1OGQ2YzExYWYucG5nXCIsXCJoZWlnaHRcIjozMjQsXCJ3aWR0aFwiOjM3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBOGtsRVFWUjRuQUhuQUJqL0FXbU5WY3FYQk1nQmFRbzhBUFhUOGdBTEZBZ0FCUWdIQU5ETzRRQXVLeXdBQVdPQ1VNejBEQTRBM04zZEFNM2kxZ0JFTERZQUZQMzlBTzdtOWdBMU1VUUFBWHlOWjhzbEdnd0EzcWFOQUNSQ1pBRGUzdGNBOHhRcUFDQW1OUUR5OCs0QUFWWnZPc3ZQNXRnQW5HS2JBRDRkQVFEU3BLQUFuT3NXQU9zTjhBRHI4OVFBQVZ4dldjc2pGeDhBVVR4R0FPeThwQUMrcDdzQUl5Z0RBSWdBQmdBUy9RY0FBVnhrVzh6bjl1OEFnVDhuQU51K3h3Q2pxY2dBSHlvVEFKLzhDUUFhL1BvQUFVcFpNTWtCL2ZvQUR2L3pBQkgyQmdDV3plb0FBUGNBQUFzQUFBRDVCUUlBVzdGV0RtcTFJM3NBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL3NlY0JhY2suMGNlZDg5NTg2MDU2MGE5MDNhMWM2YmMzM2Y4MzVhZjMucG5nXCIsXCJoZWlnaHRcIjozMjQsXCJ3aWR0aFwiOjM3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBNDBsRVFWUjRuQTNNdlVyRFVCaUE0ZmV6VGRMQmRtaE5RRW9uQlJjZHhLVUVCeGNuOFM1YzNkMUV2QUhkdlFHdm9ZaXIyS0M0ZExLakJCS3RwQ1hOejBuT2FmYUhSMDZmWHQ0dlQxeHBiY0Z2WlFoTHcxK3BTWElobnMyUTIrZlh3RC8wU1BNS1JVM1d3SjhhNWlYOE4xQWVKeC9UejNuQ1Y1Z3ozT2x5UExMeGQ1dEJ3eVN5a1BIVnpmU3Q2SEEzM3NjLzZGSFZDcTFLRm1HSFRLK1JpN085d0RpdUdRdzkzRzRDU3NoTFJSeHA3UFlLdVg0WUJaWmRtS1dPeEdSOVduWFBGR3N0L2Z6SUxHSkg1UHkrRlJTcWJYUzVqVjQ2cEtsRi9KMHd3R05WWkd3QUxSQnI1Yk5aK1RrQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy90cmRCYWNrLjE2M2JkMzk1ZWFhZjBjOWQ1ZDI1M2VhZDk5YmFiY2ZkLnBuZ1wiLFwiaGVpZ2h0XCI6MzI0LFwid2lkdGhcIjozNzIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQTJVbEVRVlI0MmczTnNVNkRVQlFHNFAvQWdWdm9wUkFXYTB5MHdVUUh1NXVZT0RyNHdEVU9PanAxTlViSEpxWXhwTkJTeE5KZUxzZCtML0RSMCt4NWJydU9obEVzTG51d3ZVQVBmREF6cmFvLzRiZlhHYTJyUmtJRzFadGFzc2tZVmx6cUtCQldURTYrWE1qRGVVV2VhV1Y4Y1lOTTk3aWtML24rL0tCcyt5TE83YjFDRU9SeWZYZUNxMm1HMW5QUnBBclR4MWdXdndaT1VUYVlIelNDNUJScFlsQjA3NURSRUZFcThDZG40QVA1cEpNQnltS0pyVlBDTXFOWEx2WlZEeDJINEx6ZTJIVkx4MllGcFVZSW93UjFzOFBlR01qUER2ODE5bHpOU01POWdBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0LmFkNzg5NzZlNjMzMzc3OGEyMDdjOGI0NjQwYzAyOWViLnBuZ1wiLFwiaGVpZ2h0XCI6NzA0LFwid2lkdGhcIjoxMjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFJQ0FZQUFBQTRHcFZCQUFBQUYwbEVRVlI0bkdQODkrK2ZJSWdRQWhGZ0Zob0JrUUFBOHd3WVk4aFZPeEFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93TGVmdFZlY3Rvci5kODQ1OGRhZGEzNjdkODE1NWU3MGYzMWYzM2U3ZjUxZi5wbmdcIixcImhlaWdodFwiOjM4LFwid2lkdGhcIjo0MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBajBsRVFWUjQybVBZeU9uT3ZJblRuWjBCQ0RaeWVpd0E0cTlBTE04QUJKczRQVmdaa01GR0x2Y1FJUDRQVlBBTWlKVWdncHp1YmtDVmlVQWNEMlQ3QXZIbVRRaEZaZ3hBZ1Q5QVNhQUFVQkJJUTluZndJcTRQRzR6QUkxVUIzSnNnYlExa05ZRjRrMmJ1RHhBaXE4Q3hXUVpZQURxcUh5bzVDVWdGb1E1akFub0N6YW9lMXFCK0R4UWtoL3FLeFlBaERGRGxpeGFpam9BQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHQuZTlkYmE3ODU3NDc0OTFhY2I3OTk4Y2JiYjc0NmY0YzYucG5nXCIsXCJoZWlnaHRcIjo3MDQsXCJ3aWR0aFwiOjEzMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUlDQVlBQUFBNEdwVkJBQUFBRjBsRVFWUjRuR1A4OSsrZklJZ1FBaEVJRnBoQWNBVUI4ekVZWllKOFlJRUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dSaWdodFZlY3Rvci4wNmQ4YTUxODc0YzE4M2VjZDkxNTdiMWU0MGNjMDAwYi5wbmdcIixcImhlaWdodFwiOjM4LFwid2lkdGhcIjo0MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBbUVsRVFWUjQyazJPUFFvQ1FReUZnNzh3S2NRRGlHQmpaVzBoMWtsamFTMmV3RnQ0RGkrUUtmUWtDbmJXZXdQdFpQeGtkMkVmUENhODc0V0pSTEtob0ZDYk03L3hSVkJPUHM3Sit0TEFCYUFLOVJMSjk5SVZZRTJoWXFQdzNyTGFMcXNmMkQ2U21SQythdWdmWVBrYjJQb3JnQm1sWnhOY0thL0lObnkxSlYrMk4wenhBMGpKVHRJVllGQy9QbUcrNDdNZzdoaUZXdThId1hCRElDUFBPM2tBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2JhcmNhLjc1ZjllMjMwYmViNzllMjgyZDdhMGYzNjlhNmU2NjZlLnBuZ1wiLFwiaGVpZ2h0XCI6MjIzLFwid2lkdGhcIjoyMDYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTgwbEVRVlI0bkFIb0FCZi9BWitGUURNU0dSd3BCZmZ3R2ZFQUFOY005YzB0K0FJUjNmbjhIODRCc3A1YWJDc09QSk1DM3ZJQUFTenpBQWZwaFFEeEJTZ0F6L2M1UUFHWW1GdzJSUUE1eVFmVjl2d0lTZlVCQmUyQUErcjdNdXdsOW1NbUFjdWtNYVFoSTBSYjUrUDEvZmNCK3dJSDhadi9HQnNBQXRUa1AzUUJwSXhXc3ZYV0FrMzlCQUQ3Q3hId0JPM21IL3NPRndFR0VpVDNnd0dOaDE1cjk3a09sQUVRQndCRFZ0TCtzWHN0QWhFNStBQWhUd3c3QVFEL0FBRzBneStRNWZJMFh4QUg4Zy95K2czcEpSN2hodTl0dlpJQm5xWXVBQjdHMGdBVlNnQVk4T3BETmpGT09yM05qSVAxNDRZQUFMbXpZa1RPNXFqUUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wcmVkQmFjay4zMmE4OTY5M2U1NjRiNjhjYTRhN2FiMWQ3ZTIxZDI0YS5wbmdcIixcImhlaWdodFwiOjcwNCxcIndpZHRoXCI6MTkxOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQURDQVlBQUFDdXlFNUlBQUFBYmtsRVFWUjRuQUZqQUp6L0FUaytWdjRVR1FzQTkvanRBUHY2K3dBREEvNEFGeGtpQVBIdTl3QzZyYVlBQVRNOFZQOG5NUzRBL1ByOUFPL3E1d0QxOE84QUhTa2xBT1RhMXdETXZNTUFBVGN6UHY0cE5oMEFHekFRQUI0WkNnRHM3ZTRBeExQdkFOZlE2QUR4OC9FQVFBOHJkU3Z2SktvQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wc2ouY2U0YWMzMTk2YjkwMTI4MGNkZGI5YjdlMTdjNDg1ZmUucG5nXCIsXCJoZWlnaHRcIjoyMjUsXCJ3aWR0aFwiOjIyNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFCQTBsRVFWUjQybU9BZ2VMSnV5S2I1K3hmMHJIdzRLejhDVHRzUVdLZDh3OHdnaVVuclRvK2QrYmFFLy9uYmp6OWYvcWFFLzhuclRqNnYyL1owUnl3Wk1PYy9TazU3UnYvRjB6ZiszdGovNXJmY3lkdi9sVStZKy8vOU5hTi81ZnR2cVREVUR4eHgyYWZ2Q1gvR1NyWC8zbFozdkgvUVBtMC93eGxhMzlIbEN6LzM3L3NhQWxEOWVTZGErWHlsdjgvdG1Ecjc5c05QZjhmOWM3NHYzRGExbDhtQmN2L3oxeDlQSjlod3RJakFXR05HLzdQbjdENWYvSEVkYituek56OHE2MWwzZitVN3EzZkRweStvOEFBZHUzQ2d6V3gzZHYreHpScytKL1l0ZTEvN3VSZDMrZXNPeG5JZ0F6bXJqbHUycmxnZjFYZm9vTkZtL2RlQXV2TTc5ck1CQUE0QkltNkhHbmlBd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9zbGlkZUJhY2suYjA5YjViMjQzZjI3N2Q4ZmE3MTQyMWY3ZjEzMjQ1MjgucG5nXCIsXCJoZWlnaHRcIjozMjQsXCJ3aWR0aFwiOjM3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBMWtsRVFWUjQyZzNGdjA3Q1FCekE4ZS92dkJac3pzU2dSVVVUNHAvQnljVGRKM0QzZ1h3WEZ4Tk5qSXZQb0tNREN3TWhKQ0tJQWRyU2NvWGV3V2Y1eVAzajA5ZnB2cEc3YUk0TzRmcWlTZXM0WnJYTUtKM3lTa1NybjJKYlBaRHZ6dytaSkxuWWxaTXMrUmNkN2lyZEdhUytoeU9hRHJocTMvTDg5ZzZxb25sNFFqSjVSZmRtS1ppUWREaWtQL29qYXJUWXFkVVkyUW9iSEtIYm5SZCt4NWE5aHh2T0xzK3BoeEVDZUlRaUQ5RHh3VmhpNDdGaGwrNjhqemdRQmV1eXhPWWwyalJNWmJNSzVZVDF3dU8zNDhFV3duTGgyUURGS2xkWm42eUExZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJvd0xlZnRcIjogXCJBcnJvd19hcnJvd0xlZnRfXzFIdmlqXCIsXG5cdFwiYXJyb3dSaWdodFwiOiBcIkFycm93X2Fycm93UmlnaHRfXzEwck51XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJHYW1lUnVsZXNfY29udGFpbmVyX18zOGVsZVwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJHYW1lUnVsZXNfdHJhbnNpdGlvbl9fM1JMWlNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2luYXRpb25fY29udGFpbmVyX18zaWNYZ1wiLFxuXHRcInJvdW5kXCI6IFwiUGFnaW5hdGlvbl9yb3VuZF9fMzZ5ZnlcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fMk1pUk5cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2VQYXJ0aWNhbGVzX2NvbnRhaW5lcl9fM2Vwc3NcIixcblx0XCJ0aXRsZVwiOiBcIlBhZ2VQYXJ0aWNhbGVzX3RpdGxlX19VcEV5TlwiLFxuXHRcImJvZHlcIjogXCJQYWdlUGFydGljYWxlc19ib2R5X18xaE5BRlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU2xpZGVQYWdlc19jb250YWluZXJfXzNaaTFFXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIZWFkZXJfY29udGFpbmVyX18zWmRtY1wiLFxuXHRcInRpdGxlXCI6IFwiSGVhZGVyX3RpdGxlX19aUko4OVwiLFxuXHRcImJ1dHRvbnNcIjogXCJIZWFkZXJfYnV0dG9uc19fMTd2ZmJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk1hdGNoZXNfY29udGFpbmVyX18yS2EyelwiLFxuXHRcImNvbnRlbnRcIjogXCJNYXRjaGVzX2NvbnRlbnRfXzFQUV9FXCIsXG5cdFwiaW5fc2VwZXJldGVfcGFnZVwiOiBcIk1hdGNoZXNfaW5fc2VwZXJldGVfcGFnZV9fMi1fRnBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFycm93TGVmdFwiOiBcIkFycm93X2Fycm93TGVmdF9fM0d0QTRcIixcblx0XCJhcnJvd1JpZ2h0XCI6IFwiQXJyb3dfYXJyb3dSaWdodF9fMzMyOWxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2luYXRpb25fY29udGFpbmVyX18yc3hMeFwiLFxuXHRcInJvdW5kXCI6IFwiUGFnaW5hdGlvbl9yb3VuZF9fMWRJbFJcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fM1hJU3NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRETWF0Y2hlc0JvYXJkX2NvbnRhaW5lcl9fMlBKcmFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRNTWF0Y2hlc0JvYXJkX2NvbnRhaW5lcl9fMmRzSEhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlJvd19jb250YWluZXJfXzFXQk9oXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJSb3dEZXNjcmlwdGlvbl9jb250YWluZXJfXzIxOXQtXCIsXG5cdFwiY29udGVudFwiOiBcIlJvd0Rlc2NyaXB0aW9uX2NvbnRlbnRfXzJTZVhVXCIsXG5cdFwiZGF0ZV9nYW1lTlN0YXJ0ZWRfY29udGVudFwiOiBcIlJvd0Rlc2NyaXB0aW9uX2RhdGVfZ2FtZU5TdGFydGVkX2NvbnRlbnRfXzFNcUVKXCIsXG5cdFwiZGF0ZV9nYW1lU3RhcnRlZF9jb250ZW50XCI6IFwiUm93RGVzY3JpcHRpb25fZGF0ZV9nYW1lU3RhcnRlZF9jb250ZW50X18zR19aMlwiLFxuXHRcInRlYW1zXCI6IFwiUm93RGVzY3JpcHRpb25fdGVhbXNfXzI3VlBPXCIsXG5cdFwidGVhbU9uZVwiOiBcIlJvd0Rlc2NyaXB0aW9uX3RlYW1PbmVfX1RQSWthXCIsXG5cdFwic2NvcmVcIjogXCJSb3dEZXNjcmlwdGlvbl9zY29yZV9fMzhTVkZcIixcblx0XCJ0ZWFtVHdvXCI6IFwiUm93RGVzY3JpcHRpb25fdGVhbVR3b19fM21hZDJcIixcblx0XCJidXlCdXR0b25fY29udGFpbmVyXCI6IFwiUm93RGVzY3JpcHRpb25fYnV5QnV0dG9uX2NvbnRhaW5lcl9fM3JDTmtcIixcblx0XCJidXR0b25fY29udGVudFwiOiBcIlJvd0Rlc2NyaXB0aW9uX2J1dHRvbl9jb250ZW50X18xMndVUFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUm93VGl0bGVfY29udGFpbmVyX19EV1o1TFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX2NvbnRhaW5lcl9fMmRBcWVcIixcblx0XCJuYW1lXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX25hbWVfXzJuU25JXCIsXG5cdFwiZGF0ZVwiOiBcIkRheUNoYW5nZUJ1dHRvbl9kYXRlX18zLU1XOFwiLFxuXHRcImFjdGl2ZV9uYW1lXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX2FjdGl2ZV9uYW1lX18zMTVzUFwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJEYXlDaGFuZ2VCdXR0b25fdHJhbnNpdGlvbl9fMVRGZzNcIixcblx0XCJhY3RpdmVfZGF0ZVwiOiBcIkRheUNoYW5nZUJ1dHRvbl9hY3RpdmVfZGF0ZV9fT0JlYURcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRNSGVhZGVyX2NvbnRhaW5lcl9fMnNmOEtcIixcblx0XCJjb250ZW50XCI6IFwiVE1IZWFkZXJfY29udGVudF9fMjNRdVlcIixcblx0XCJ0aXRsZVwiOiBcIlRNSGVhZGVyX3RpdGxlX18zdTl6R1wiLFxuXHRcImRheV9jaGFuZ2VfYnV0dG9uc1wiOiBcIlRNSGVhZGVyX2RheV9jaGFuZ2VfYnV0dG9uc19fM3FvWXBcIixcblx0XCJjYWxlbmRhclwiOiBcIlRNSGVhZGVyX2NhbGVuZGFyX18yV0FoX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVG9kYXlNYXRjaGVzX2NvbnRhaW5lcl9fM3hjZlRcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiVG9kYXlNYXRjaGVzX3RyYW5zaXRpb25fXzFkaXZyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJOZXdzX2NvbnRhaW5lcl9fc2xQS19cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNsaWRlX2NvbnRhaW5lcl9fUXpaQndcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFycm93TGVmdFwiOiBcIkFycm93X2Fycm93TGVmdF9fMjJNUmpcIixcblx0XCJhcnJvd1JpZ2h0XCI6IFwiQXJyb3dfYXJyb3dSaWdodF9fZnBMcENcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk1jb250YWluZXJcIjogXCJJdGVtTW9kYWxfTWNvbnRhaW5lcl9fMVlrTWdcIixcblx0XCJNY29udGVudFwiOiBcIkl0ZW1Nb2RhbF9NY29udGVudF9fMnJ2QnhcIixcblx0XCJjb250YWluZXJcIjogXCJJdGVtTW9kYWxfY29udGFpbmVyX18xakVsYVwiLFxuXHRcImltZ19jb250ZW50XCI6IFwiSXRlbU1vZGFsX2ltZ19jb250ZW50X19LSWhkblwiLFxuXHRcImRlc2NyaXB0aW9uX2NvbnRlbnRcIjogXCJJdGVtTW9kYWxfZGVzY3JpcHRpb25fY29udGVudF9fMTZWVnZcIixcblx0XCJ0aXRsZVwiOiBcIkl0ZW1Nb2RhbF90aXRsZV9fMi1XcDRcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkl0ZW1Nb2RhbF9kZXNjcmlwdGlvbl9faFJHcUdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkl0ZW1fY29udGFpbmVyX18zdHEySlwiLFxuXHRcInRvcExpbmVzXCI6IFwiSXRlbV90b3BMaW5lc19fMW9Oa1dcIixcblx0XCJsaW5lT25lXCI6IFwiSXRlbV9saW5lT25lX181YVhNOVwiLFxuXHRcImxpbmVUd29cIjogXCJJdGVtX2xpbmVUd29fXzFVVUF0XCIsXG5cdFwiY29udGVudFwiOiBcIkl0ZW1fY29udGVudF9fMllnZDJcIixcblx0XCJib3R0b21MaW5lc1wiOiBcIkl0ZW1fYm90dG9tTGluZXNfXzNVQ2NiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYWdpbmF0aW9uX2NvbnRhaW5lcl9fMXJZMkhcIixcblx0XCJyb3VuZFwiOiBcIlBhZ2luYXRpb25fcm91bmRfXzFMWlRFXCIsXG5cdFwiYWN0aXZlXCI6IFwiUGFnaW5hdGlvbl9hY3RpdmVfXzNJRmdoXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQcmVkaWN0aW9uX2NvbnRhaW5lcl9fMzJiVWxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFycm93TGVmdFwiOiBcIkFycm93X2Fycm93TGVmdF9fMW4yR2xcIixcblx0XCJhcnJvd1JpZ2h0XCI6IFwiQXJyb3dfYXJyb3dSaWdodF9fTlpON1dcIixcblx0XCJhcnJvd1JpZ2h0VmVjdG9yXCI6IFwiQXJyb3dfYXJyb3dSaWdodFZlY3Rvcl9fM3p4TGxcIixcblx0XCJhcnJvd0xlZnRWZWN0b3JcIjogXCJBcnJvd19hcnJvd0xlZnRWZWN0b3JfX1U2RlNxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJJdGVtX2NvbnRhaW5lcl9fVGFvNUVcIixcblx0XCJjb250ZW50XCI6IFwiSXRlbV9jb250ZW50X18ydFlIRlwiLFxuXHRcInRvcFwiOiBcIkl0ZW1fdG9wX19XMnJCMFwiLFxuXHRcInRlYW1cIjogXCJJdGVtX3RlYW1fXzNHWjg0XCIsXG5cdFwidGltZXJfY29udGFpbmVyXCI6IFwiSXRlbV90aW1lcl9jb250YWluZXJfXzJnNXBiXCIsXG5cdFwidGltZXJcIjogXCJJdGVtX3RpbWVyX19DaDY1OFwiLFxuXHRcImJvdHRvbVwiOiBcIkl0ZW1fYm90dG9tX19nQ0ZyaFwiLFxuXHRcImJ1dHRvbnNcIjogXCJJdGVtX2J1dHRvbnNfXzFCcXd0XCIsXG5cdFwicHJlZGljdGlvbl9idXR0b25fY29udGFpbmVyXCI6IFwiSXRlbV9wcmVkaWN0aW9uX2J1dHRvbl9jb250YWluZXJfXzN4YmpPXCIsXG5cdFwicHJlZGljdGlvbl9idXR0b25fY29udGVudFwiOiBcIkl0ZW1fcHJlZGljdGlvbl9idXR0b25fY29udGVudF9fMVc4dkhcIixcblx0XCJidXlfYnV0dG9uX2NvbnRhaW5lclwiOiBcIkl0ZW1fYnV5X2J1dHRvbl9jb250YWluZXJfX25QcG9fXCIsXG5cdFwiYnV5X2J1dHRvbl9jb250ZW50XCI6IFwiSXRlbV9idXlfYnV0dG9uX2NvbnRlbnRfXzVQRXpnXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQcmVkaWN0aW9uTW9kYWxfY29udGFpbmVyX18yWWktZFwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJQcmVkaWN0aW9uTW9kYWxfdHJhbnNpdGlvbl9fdy1DdmZcIixcblx0XCJjb250ZW50XCI6IFwiUHJlZGljdGlvbk1vZGFsX2NvbnRlbnRfXzFZNlpGXCIsXG5cdFwidG9wXCI6IFwiUHJlZGljdGlvbk1vZGFsX3RvcF9fMS1uM3pcIixcblx0XCJ0ZWFtXCI6IFwiUHJlZGljdGlvbk1vZGFsX3RlYW1fXzFWWURFXCIsXG5cdFwidnNcIjogXCJQcmVkaWN0aW9uTW9kYWxfdnNfXzMxaWJOXCIsXG5cdFwiYm90dG9tXCI6IFwiUHJlZGljdGlvbk1vZGFsX2JvdHRvbV9fR1Zrd0JcIixcblx0XCJwcmVkaWN0aW9uXCI6IFwiUHJlZGljdGlvbk1vZGFsX3ByZWRpY3Rpb25fXzNWdFBqXCIsXG5cdFwib3JkaW5hclwiOiBcIlByZWRpY3Rpb25Nb2RhbF9vcmRpbmFyX18yS2lMRlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUHJkZWljdGlvblNsaWRlX2NvbnRhaW5lcl9fMTJNU0NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkJ1dHRvbl9jb250YWluZXJfXzQ1S3lEXCIsXG5cdFwiY29udGVudFwiOiBcIkJ1dHRvbl9jb250ZW50X18xNEZsVVwiLFxuXHRcImFjdGl2ZVwiOiBcIkJ1dHRvbl9hY3RpdmVfXzFNRGc1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJvd0xlZnRcIjogXCJBcnJvd19hcnJvd0xlZnRfXzFYemJKXCIsXG5cdFwiYXJyb3dSaWdodFwiOiBcIkFycm93X2Fycm93UmlnaHRfXzIwYUk1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJGZWVkQmFja19jb250YWluZXJfXzJjQ0xXXCIsXG5cdFwidG9wXCI6IFwiRmVlZEJhY2tfdG9wX18ySWhxalwiLFxuXHRcImF2YXRhclwiOiBcIkZlZWRCYWNrX2F2YXRhcl9fM0MwMGNcIixcblx0XCJyYXRlaW5nXCI6IFwiRmVlZEJhY2tfcmF0ZWluZ19fMXZpSE9cIixcblx0XCJib3R0b21cIjogXCJGZWVkQmFja19ib3R0b21fXzNMa3JqXCIsXG5cdFwiYm90dG9tX2NvbnRlbnRcIjogXCJGZWVkQmFja19ib3R0b21fY29udGVudF9fM3VKb29cIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkZlZWRCYWNrX2Rlc2NyaXB0aW9uX18xM19IblwiLFxuXHRcImRhdGVfbGlrZXNfY29udGFpbmVyXCI6IFwiRmVlZEJhY2tfZGF0ZV9saWtlc19jb250YWluZXJfX1BYa2R4XCIsXG5cdFwiZGF0ZVwiOiBcIkZlZWRCYWNrX2RhdGVfXzI4Y2dVXCIsXG5cdFwidmVydGljYWxfYm9yZGVyXCI6IFwiRmVlZEJhY2tfdmVydGljYWxfYm9yZGVyX180SkxiV1wiLFxuXHRcImxpa2VzX2Rpc2xpa2VzXCI6IFwiRmVlZEJhY2tfbGlrZXNfZGlzbGlrZXNfXzNUQV9EXCIsXG5cdFwibGlrZVwiOiBcIkZlZWRCYWNrX2xpa2VfX19UaUlyXCIsXG5cdFwiZGlzTGlrZVwiOiBcIkZlZWRCYWNrX2Rpc0xpa2VfX2RUaDBmXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMaWtlRGlzbGlrZURyb3BfY29udGFpbmVyX18xQ1c3NlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJMaWtlRGlzbGlrZURyb3BfdHJhbnNpdGlvbl9fbHhadFNcIixcblx0XCJjb250ZW50XCI6IFwiTGlrZURpc2xpa2VEcm9wX2NvbnRlbnRfXzlZXzFlXCIsXG5cdFwicm93XCI6IFwiTGlrZURpc2xpa2VEcm9wX3Jvd19fMUlMNEFcIixcblx0XCJhdmF0YXJcIjogXCJMaWtlRGlzbGlrZURyb3BfYXZhdGFyX184SXo0elwiLFxuXHRcInVzZXJfcGFydFwiOiBcIkxpa2VEaXNsaWtlRHJvcF91c2VyX3BhcnRfXzJjeTk4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMZWF2ZUNvbW1lbnRfY29udGFpbmVyX18yaXM2ZlwiLFxuXHRcInN0YXJzX2NvbnRhaW5lclwiOiBcIkxlYXZlQ29tbWVudF9zdGFyc19jb250YWluZXJfXzNvdWtqXCIsXG5cdFwic3RhcnNfY29udGVudFwiOiBcIkxlYXZlQ29tbWVudF9zdGFyc19jb250ZW50X18yNXZGQVwiLFxuXHRcInN0YXJzX2FyZWFcIjogXCJMZWF2ZUNvbW1lbnRfc3RhcnNfYXJlYV9fWE5hSU5cIixcblx0XCJ0ZXh0YXJlYV9jb250YWluZXJcIjogXCJMZWF2ZUNvbW1lbnRfdGV4dGFyZWFfY29udGFpbmVyX18zOHdHM1wiLFxuXHRcImJ1dHRvbl9jb250YWluZXJcIjogXCJMZWF2ZUNvbW1lbnRfYnV0dG9uX2NvbnRhaW5lcl9fMm1PbmZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2luYXRpb25fY29udGFpbmVyX19PVV9aUlwiLFxuXHRcInJvdW5kXCI6IFwiUGFnaW5hdGlvbl9yb3VuZF9fM2JoZVZcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fMkNmYnZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNvcnRpbmdfY29udGFpbmVyX18yTGh2OFwiLFxuXHRcIm5hbWVcIjogXCJTb3J0aW5nX25hbWVfXzNzb1E4XCIsXG5cdFwiYmFyXCI6IFwiU29ydGluZ19iYXJfXzFtYkhEXCIsXG5cdFwiYnlEYXRlXCI6IFwiU29ydGluZ19ieURhdGVfXzNfQnotXCIsXG5cdFwiYWN0aXZlXCI6IFwiU29ydGluZ19hY3RpdmVfXzNhMWFMXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJUZXN0aW1vbmlhbHNfY29udGFpbmVyX18zTEFyUFwiLFxuXHRcImZlZWRfYmFja3NfY29udGFpbmVyXCI6IFwiVGVzdGltb25pYWxzX2ZlZWRfYmFja3NfY29udGFpbmVyX18zOTVoa1wiLFxuXHRcImNhcm91c2VsXCI6IFwiVGVzdGltb25pYWxzX2Nhcm91c2VsX18ycnJWVlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVGl0bGVfY29udGFpbmVyX18xZzMtZ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW9kYWxDb250ZWluZXJcIjogXCJNb2RhbF9tb2RhbENvbnRlaW5lcl9fM2c4SWZcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiTW9kYWxfdHJhbnNpdGlvbl9fMWtmdjlcIixcblx0XCJtb2RhbENvbnRlbnRcIjogXCJNb2RhbF9tb2RhbENvbnRlbnRfXzEtTzQ3XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNhbGVuZGFyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10aW1lci1ob29rXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==