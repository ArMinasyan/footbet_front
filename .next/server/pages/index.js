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
        const gameState = now < matchTime ? `dontStarted` : Math.abs(now - matchTime) < 9000000 ? 'started' : 'finished';
        return {
          id: match.id,
          date: match.date,
          time: match.time,
          gameState: `.rowOne.gameState.${gameState}`,
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
                  lineNumber: 115,
                  columnNumber: 53
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 49
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 37
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: '34px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
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
                  lineNumber: 164,
                  columnNumber: 49
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 45
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 37
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: '34px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
      const now = Date.now();
      setMatches(matches.data.data.map(match => {
        const matchTime = new Date(`${match.date.split(`.`).reverse().join(`.`)} ${match.time}`).getTime();
        const gameState = now < matchTime ? `dontStarted` : Math.abs(now - matchTime) < 9000000 ? 'started' : 'finished';
        return {
          id: match.id,
          date: match.date,
          time: match.time,
          gameState: `.rowOne.gameState.${gameState}`,
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
                  lineNumber: 110,
                  columnNumber: 53
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 49
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 37
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: '34px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
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
                  lineNumber: 159,
                  columnNumber: 49
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 45
              }, this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 37
            }, this)), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_4__.RowTitle, {
        rowStyles: {
          minHeight: '34px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01haW4uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL0Fycm93cy9BcnJvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvR2FtZVJ1bGVzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL1NsaWRlUGFnZS9QYWdlUGFyZXRpY2xlcy9QYWdlUGFyZXRpY2xlcy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvU2xpZGVQYWdlL1NsaWRlUGFnZXMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL2dhbWVfcnVsZXMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL01hdGNoZXMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9BcnJvd3MvQXJyb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9URE1hdGNoZXNCb2FyZC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvd0Rlc2NyaXB0aW9uL1Jvd0Rlc2NyaXB0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1IZWFkZXIvRGF5Q2hhbmdlQnV0dG9uL0RheUNoYW5nZUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1IZWFkZXIvVE1IZWFkZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RvZGF5TWF0Y2hlcy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9OZXdzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvQXJyb3dzL0Fycm93LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvSXRlbU1vZGFsL0l0ZW1Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL0l0ZW0vSXRlbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9zbGlkZV9zaG93X2RhdGEuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9BcnJvd3MvQXJyb3cuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vSXRlbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvSXRlbS9QcmVkaWN0aW9uTW9kYWwvUHJlZGljdGlvbk1vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9JdGVtL1RpbWVyL1RpbWVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9QcmRlaWN0aW9uU2xpZGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvQXJyb3dzL0Fycm93LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9GZWVkQmFjay9GZWVkQmFjay5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvRmVlZEJhY2svTGlrZURpc2xpa2VEcm9wL0xpa2VEaXNsaWtlRHJvcC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvTGVhdmVDb21tZW50L0xlYXZlQ29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9Tb3J0aW5nL1NvcnRpbmcuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvZmVlZF9iYWNrX2RhdGEuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UaXRsZS9UaXRsZS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9lci5saWIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3JlZHV4L2ZlYXR1cmVzL21hdGNoU2xpY2UuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9zcmMvZ2FtZXNfZGF0YS9wcmVkaWN0aW9ucy9zbGlkZS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvYXZhdGFyLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZGlzbGlrZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2ZpbGxlZFN0YXIucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9saWtlLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvdW5maWxsZWRTdGFyLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL0NhbGVuZGFyLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2Fycm93TGVmdC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd1JpZ2h0LnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93TGVmdC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd1JpZ2h0LnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2ZvcnRCYWNrLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL3NlY0JhY2sucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL25ld3MvdHJkQmFjay5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd0xlZnQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0VmVjdG9yLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dSaWdodFZlY3Rvci5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9iYXJjYS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wcmVkQmFjay5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wc2oucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL3NsaWRlQmFjay5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvQXJyb3dzL0Fycm93Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL0dhbWVSdWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL0dhbWVSdWxlcy9QYWdpbmF0aW9uL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9HYW1lUnVsZXMvU2xpZGVQYWdlL1BhZ2VQYXJldGljbGVzL1BhZ2VQYXJ0aWNhbGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvR2FtZVJ1bGVzL1NsaWRlUGFnZS9TbGlkZVBhZ2VzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL01hdGNoZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL0Fycm93cy9BcnJvdy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvVERNYXRjaGVzQm9hcmQvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9URE1hdGNoZXNCb2FyZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvVE1NYXRjaGVzQm9hcmQvVE1NYXRjaGVzQm9hcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L2NvbW1vbi9Sb3cvUm93Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvd0Rlc2NyaXB0aW9uL1Jvd0Rlc2NyaXB0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9jb21tb24vUm93L1Jvd1RpdGxlL1Jvd1RpdGxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNSGVhZGVyL0RheUNoYW5nZUJ1dHRvbi9EYXlDaGFuZ2VCdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1IZWFkZXIvVE1IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVG9kYXlNYXRjaGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvTmV3cy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL05ld3MvU2xpZGUvU2xpZGVJdGVtcy9BcnJvd3MvQXJyb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL0l0ZW1Nb2RhbC9JdGVtTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTmV3cy9TbGlkZS9TbGlkZUl0ZW1zL0l0ZW0vSXRlbS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9OZXdzL1NsaWRlL1NsaWRlSXRlbXMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9BcnJvd3MvQXJyb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vUHJlZGljdGlvbi9QcmVkaWN0aW9uU2xpZGUvSXRlbS9JdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL0l0ZW0vUHJlZGljdGlvbk1vZGFsL1ByZWRpY3Rpb25Nb2RhbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9QcmVkaWN0aW9uL1ByZWRpY3Rpb25TbGlkZS9QcmRlaWN0aW9uU2xpZGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0Fycm93cy9BcnJvdy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9GZWVkQmFjay9GZWVkQmFjay5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9GZWVkQmFjay9MaWtlRGlzbGlrZURyb3AvTGlrZURpc2xpa2VEcm9wLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0xlYXZlQ29tbWVudC9MZWF2ZUNvbW1lbnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UZXN0aW1vbmlhbHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL1NvcnRpbmcvU29ydGluZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9UaXRsZS9UaXRsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWNhbGVuZGFyXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWxvYWRlci1zcGlubmVyXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdGltZXItaG9va1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwieXVwXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvaWdub3JlZHxDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFxwcm9qZWN0c1xcZm9vdC1iZXRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJNYWluIiwiQXJyb3ciLCJ0eXBlIiwib25DbGljayIsImlzRWRnZSIsInBvaW50ZXIiLCJjb25zdHMiLCJhcnJvd0xlZnQiLCJhcnJvd1N0eWxlcyIsImFycm93UmlnaHQiLCJzdHlsZXMiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsImJvdHRvbSIsIkdhbWVSdWxlcyIsIlBhZ2luYXRpb24iLCJnYW1lX3J1bGVzIiwiZWwiLCJNYXRoIiwicmFuZG9tIiwicGFnZXMiLCJhY3RpdmVQYWdlIiwibWFwIiwiaXNBY3RpdmVQYWdlIiwiUGFnZVBhcnRpY2xlcyIsInRpdGxlIiwiYm9keSIsIlNsaWRlUGFnZXMiLCJwYWdlRGF0YSIsIkhlYWRlciIsImJ1dHRvbnNBY3Rpdml0eSIsIm9uX1RNX2NsaWNrIiwib25fR01fY2xpY2siLCJnYW1lUnVsZXNTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiTWF0Y2hlcyIsInNob3dUb2RheU1hdGNoZXMiLCJzZXRTaG93VG9kYXlNYXRjaGVzIiwidXNlU3RhdGUiLCJzaG93R2FtZVJ1bGVzIiwic2V0U2hvd0dhbWVSdWxlcyIsIlRETWF0Y2hlc0JvYXJkIiwiZmlyc3RQYWdlIiwic2V0Rmlyc3RQYWdlIiwic2Vjb25kUGFnZSIsInNldFNlY29uZFBhZ2UiLCJmaXJzdFBhZ2VJdGVtcyIsInVwRGF0ZUZpcnN0UGFnZUl0ZW1zIiwic2Vjb25kUGFnZUl0ZW1zIiwidXBEYXRlU2Vjb25kUGFnZUl0ZW1zIiwibWF0Y2hlcyIsInNldE1hdGNoZXMiLCJ1c2VFZmZlY3QiLCJmaWx0ZXIiLCJpIiwicmVxdWVzdCIsIkdFVF9NQVRDSEVTIiwiYXV0aCIsInRoZW4iLCJub3ciLCJEYXRlIiwiZGF0YSIsIm1hdGNoIiwibWF0Y2hUaW1lIiwiZGF0ZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJ0aW1lIiwiZ2V0VGltZSIsImdhbWVTdGF0ZSIsImFicyIsImlkIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW0xX2ltZ19wYXRoIiwidGVhbVR3b05hbWUiLCJ0ZWFtVHdvSWNvbiIsInRlYW0yX2ltZ19wYXRoIiwic2NvcmUiLCJidXlCdXR0b25OYW1lIiwiY29lZmZpY2VudCIsInRpdGxlTmFtZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZSIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwiaXRlbXMiLCJBcnJheSIsImZyb20iLCJyZW9yZGVyZWRJdGVtIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlIiwicHJvdmlkZWQiLCJkcm9wcGFibGVQcm9wcyIsImlubmVyUmVmIiwiZHJhZ2dhYmxlUHJvcHMiLCJkcmFnSGFuZGxlUHJvcHMiLCJwdXNoIiwicXVlcnkiLCJnYW1lIiwicGxhY2Vob2xkZXIiLCJtaW5IZWlnaHQiLCJUTU1hdGNoZXNCb2FyZCIsIkdFVF9NQVRDSEVTX09GX05FWFRfREFZIiwiUm93IiwidGVhbU9uZSIsInRlYW1Ud28iLCJjbGlja0J1eSIsInRyYXNubGF0aW9uTG9jYXRpb24iLCJSb3dEZXNjcmlwdGlvbiIsImxvY2F0aW9uSW5NYWluUGFnZSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsImdhbWVTdGFydGVkIiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsIlJvd1RpdGxlIiwiY29udGVudCIsIkRheUNoYW5nZUJ1dHRvbiIsIm5hbWUiLCJhY3RpdmUiLCJjbGljayIsIlRNSGVhZGVyIiwiY2xpY2tURCIsImNsaWNrVE0iLCJUREJvYXJkU3RhdGUiLCJUTUJvYXJkU3RhdGUiLCJnZXRfZGF0ZSIsInZhbHVlIiwiZGF5IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldERhdGUiLCJzaG93Q2FsZW5kYXIiLCJzZXRTaG93Q2FsZW5kYXIiLCJjYWxlbmRhciIsInNyYyIsIlRvZGF5TWF0Y2hlcyIsInNob3dUb2RheUdhbWVzIiwic2V0U2hvd1RvZGF5R2FtZXMiLCJzaG93VG9tb3Jyb3dHYW1lcyIsInNldFNob3dUb21vcnJvd0dhbWVzIiwiTmV3cyIsIlNsaWRlIiwic2xpZGVfZGF0YSIsInNldFNsaWRlRGF0YSIsIkdFVF9ORVdTIiwibmV3cyIsImJyZWFrcG9pbnRzIiwiaXRlbXNUb1Nob3ciLCJpdGVtc1RvU2Nyb2xsIiwiaW1nX3BhdGgiLCJ0ZXh0IiwiSXRlbU1vZGFsIiwib25Nb2RhbENsb3NlIiwiaW1nIiwiZGVzY3JpcHRpb24iLCJJdGVtIiwiaW1nX3NyYyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJzaG93SXRlbU1vZGFsIiwic2V0U2hvd0l0ZW1Nb2RhbCIsImxpbmVPbmUiLCJsaW5lVHdvIiwic2xpZGVfc2hvd19kYXRhIiwidXJsIiwiYmFja0ljb24iLCJzZWNCYWNrIiwidHJkQmFjayIsImZvcnRCYWNrIiwiUHJlZGljdGlvbiIsImFycm93cyIsImFycm93UmlnaHRWZWN0b3IiLCJhcnJvd0xlZnRWZWN0b3IiLCJoZWlnaHQiLCJwcmVkaWN0aW9uQnV0dG9uTmFtZSIsImV4cGlyeVRpbWVzdGFtcCIsInByZWRpY3Rpb24iLCJvcmRpbmFyIiwic2hvd1ByZWRpY3Rpb24iLCJzZXRTaG93UHJlZGljdGlvbiIsImdvVG9QcmVkaWN0aW9ucyIsInRpbWVyIiwiUHJlZGljdGlvbk1vZGFsIiwiVGltZXIiLCJ0aW1lQ2xhc3MiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwidXNlVGltZXIiLCJvbkV4cGlyZSIsIndhcm4iLCJQcmRlaWN0aW9uU2xpZGUiLCJjdXJyZW50TWF0Y2hJZCIsInNldEN1cnJlbnRNYXRjaElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkdFVF9QUkVESUNUSU9OUyIsInJzcCIsIml0ZW0iLCJ0aGVyZUlzIiwidG90YWxCZXQiLCJmYWN0b3IiLCJwcmVkaWN0aW9uVGV4dCIsIm9yZGluYXJUZXh0IiwicHJpY2UiLCJsZW5ndGgiLCJlcnJvciIsInVuZGVmaW5lZCIsInNldE1hdGNoSWQiLCJwcmVkaWN0aW9uQmFja2dyb3VuZCIsIml0ZW1QYWRkaW5nIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJzbGlkZUNoYW5nZSIsInAiLCJCdXR0b24iLCJwYWdlIiwidGV4dFBhdGhOYW1lIiwibG9jYXRpb25JblBhZ2UiLCJhZGl0aW9uYWxTdHlsZXMiLCJjb250YWluZXJTdHlsZXMiLCJGZWVkQmFjayIsImF2YXRhciIsIm5pa05hbWUiLCJyYXRlaW5nIiwibGlrZXMiLCJkaXNMaWtlcyIsInJlYWN0aW9uc0ZvclRlc3RpbmciLCJzdGFycyIsInNob3dSZWFjdGlvbnMiLCJzZXRTaG93UmVhY3Rpb25zIiwiZmlsbGVkU3RhciIsInVuZmlsbGVkU3RhciIsImxpa2VJY29uIiwiZGlzTGlrZUljb24iLCJMaWtlRGlzbGlrZURyb3AiLCJ1c2VybmFtZSIsInJlYWN0aW9uIiwiTGVhdmVDb21tZW50IiwibWF0Y2hJZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29tbWVudEJveFJlZiIsInVzZVJlZiIsInNpbXVsYXRvciIsInNldFNpbXVsYXRvciIsInNjaGVtYSIsInl1cCIsInNoYXBlIiwiY29tbWVudCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwidXNlRm9ybSIsIm1vZGUiLCJyZXNvbHZlciIsInl1cFJlc29sdmVyIiwic3VibWl0IiwiQUREX0ZFRURCQUNLIiwiY3VycmVudCIsInRvYXN0IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiU29ydGluZyIsInNvcnRpbmdUZXh0IiwiZGF0ZVNvcnRpbmdUZXh0IiwicmF0ZVNvcnRpbmciLCJzb3J0QnlEYXRlIiwic29ydEJ5UmF0ZSIsImRhdGVBY3RpdmUiLCJUZXN0aW1vbmlhbHMiLCJ1c2VTZWxlY3RvciIsImdldE1hdGNoSWQiLCJmZWVkQmFja3MiLCJzZXRGZWVkQmFja3MiLCJzZXREYXRlQWN0aXZlIiwiR0VUX0ZFRURCQUNLIiwicHJlZGljdGlvbnMiLCJmZWVkQmFjayIsInJlbmRlckZvcm1hdCIsInNvcnRGb3JtYXQiLCJsaWtlQ291bnQiLCJkaXNsaWtlQ291bnQiLCJzb3J0aW5nIiwidG9Tb3J0Iiwic29ydGluZ0J5IiwiZGF0YUZvclNvcnRpbmciLCJyZWR1Y2UiLCJhYyIsImNvbmNhdCIsInNvcnRlZERhdGEiLCJzb3J0ZWQiLCJzb3J0IiwiYSIsImIiLCJjZWlsIiwic29ydGVkSXRlbXMiLCJmb3JFYWNoIiwieCIsInJlYWN0aW9ucyIsImZlZWRiYWNrX2RhdGEiLCJUaXRsZSIsInRleHRTdHlsZXMiLCJocmVmIiwiY2xhc3NlcyIsImN1cnNvciIsIkxvYWRpbmdCdXR0b24iLCJjaGlsZHJlbiIsInByb3BzIiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJ0b3AiLCJsZWZ0IiwiaGFuZGxlX292ZXJmbG93X29uX29wZW4iLCJkb2N1bWVudCIsIm92ZXJmbG93WSIsImhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSIsIk1vZGFsIiwib25DbG9zZSIsImNvbnRlbnRTdHlsZXMiLCJvdGhlclN0eWxlcyIsInBvcnRhbExvY2F0aW9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5vZGUiLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkaW5hbWljVG9wIiwid2luZG93Iiwic2Nyb2xsWSIsIm1vZGFsIiwiY3JlYXRlUG9ydGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJob3N0IiwicGF5bG9hZCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicnNsdiIsInJqY3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldENvb2tpZSIsIk9iamVjdCIsImF4aW9zIiwibWV0aG9kIiwiZmluYWxseSIsIm5hbWVFUSIsImNhIiwiY29va2llIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJyZW1vdmVDb29raWUiLCJzZXRDb29raWUiLCJkYXlzIiwiZXhwaXJlcyIsInNldFRpbWUiLCJ0b1VUQ1N0cmluZyIsIkFVVEhfVVJMIiwiQUNDT1VOVF9VUkwiLCJSRUdJU1RFUiIsIkxPR0lOIiwiR0VUX0FDQ09VTlRfSU5GTyIsIkNIQU5HRV9BQ0NPVU5UX0lORk8iLCJDSEFOR0VfQUNDT1VOVF9JTUFHRSIsIlNUQVJUX1JFU0VUX1BBU1NXT1JEIiwiZW1haWwiLCJWRVJJRllfUEFTU1dPUkRfUkVTRVQiLCJTRVRfTkVXX1BBU1NXT1JEIiwiR0VUX01BVENIRVNfQllfVFlQRSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJfdXNlSW50ZXJzZWN0aW9uIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiYXMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIkxpbmsiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0IiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJyZXNvbHZlIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwibGluayIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwidG9VcHBlckNhc2UiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJkb21haW5JdGVtcyIsImhvc3RuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkb21haW5JdGVtIiwidG9Mb3dlckNhc2UiLCJfaXRlbSRkb21haW4iLCJfaXRlbSRsb2NhbGVzIiwiZG9tYWluSG9zdG5hbWUiLCJkb21haW4iLCJzb21lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lUGFydHMiLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJwYXRoTG93ZXIiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsIl90aGlzJGxvY2FsZXMiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3Iiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieSIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsInByb3RvY29sIiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJJbmRleFBhZ2UiLCJsYXlvdXQiLCJnZXRTdGF0aWNQcm9wcyIsIl9fbG9hZE5hbWVzcGFjZXMiLCJsb2FkZXJOYW1lIiwiX19pMThuQ29uZmlnIiwibG9hZExvY2FsZUZyb20iLCJsIiwibiIsIm1hdGNoU2xpY2UiLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwiYWN0aW9uIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJwc2pJY29uIiwiYmFyY2FJY29uIiwiYXRsZXRpY0ljb24iLCJyZW5uYWlzSWNvbiIsImF0bGV0aWNvSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYW0vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3Avc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCAzIHwgMTYpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gT2JqZWN0LmtleXMobWFwKTsgfTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vbG9jYWxlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC8uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFRlc3RpbW9uaWFscyB9IGZyb20gJy4uL2NvbW1vbi9UZXN0aW1vbmlhbHMvVGVzdGltb25pYWxzJ1xyXG5pbXBvcnQgeyBNYXRjaGVzIH0gZnJvbSAnLi9NYXRjaGVzL01hdGNoZXMnXHJcbmltcG9ydCB7IE5ld3MgfSBmcm9tICcuL05ld3MvTmV3cydcclxuaW1wb3J0IHsgUHJlZGljdGlvbiB9IGZyb20gJy4vUHJlZGljdGlvbi9QcmVkaWN0aW9uJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOZXdzIC8+XHJcbiAgICAgICAgICAgIDxNYXRjaGVzIFxyXG4gICAgICAgICAgICAgICAgZ2FtZVJ1bGVzU3RhdGU9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxQcmVkaWN0aW9uIC8+XHJcbiAgICAgICAgICAgIDxUZXN0aW1vbmlhbHMgXHJcbiAgICAgICAgICAgICAgICBwYWdlPXsnaG9tZSd9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J3Rlc3RpbW9uaWFscyd9XHJcbiAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9eycudGl0bGUnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IGNvbnN0cyB9IGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbi8vIGljb25zXHJcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd1JpZ2h0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dMZWZ0LnBuZydcclxuaW1wb3J0IGFycm93U3R5bGVzIGZyb20gJy4vQXJyb3cubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJyb3coeyB0eXBlLCBvbkNsaWNrLCBpc0VkZ2UgfSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICBwb2ludGVyID0gdHlwZSA9PT0gY29uc3RzLlBSRVYgP1xyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93TGVmdC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93TGVmdH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dSaWdodC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93UmlnaHR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgIC8+LFxyXG5cclxuICAgICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzM1cHgnLFxyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAnMTAlJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRWRnZX1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi9BcnJvd3MvQXJyb3cnXHJcblxyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi9QYWdpbmF0aW9uL1BhZ2luYXRpb24nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vR2FtZVJ1bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBnYW1lX3J1bGVzIH0gZnJvbSAnLi9nYW1lX3J1bGVzJ1xyXG5pbXBvcnQgeyBTbGlkZVBhZ2VzIH0gZnJvbSAnLi9TbGlkZVBhZ2UvU2xpZGVQYWdlcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lUnVsZXMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICByZW5kZXJBcnJvdz17QXJyb3d9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZV9ydWxlcy5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVQYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZURhdGE9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2VzLCBhY3RpdmVQYWdlLCBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVQYWdlID0gYWN0aXZlUGFnZSA9PT0gZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmVQYWdlID8gJ3RydWUnIDogJ2ZhbHNlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZH0gJHtpc0FjdGl2ZVBhZ2UgJiYgc3R5bGVzLmFjdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2VQYXJ0aWNhbGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VQYXJ0aWNsZXMoe1xyXG4gICAgdGl0bGUsXHJcbiAgICBib2R5XHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICB7Ym9keX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IFBhZ2VQYXJ0aWNsZXMgfSBmcm9tIFwiLi9QYWdlUGFyZXRpY2xlcy9QYWdlUGFyZXRpY2xlc1wiO1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TbGlkZVBhZ2VzLm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTbGlkZVBhZ2VzKHtcclxuICAgIHBhZ2VEYXRhXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYWdlRGF0YS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlUGFydGljbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtlbC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keT17ZWwuYm9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGdhbWVfcnVsZXMgPSBbXHJcbiAgICAvLyBlYWNoIGFycmF5IGFyZSBwYWdlIGRhdGFcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn0KTRg9GC0LHQvtC7OiDQutC+0LzQsNC90LTQsCDQuCDQt9Cw0L/QsNGB0L3Ri9C1INC40LPRgNC+0LrQuC4nLFxyXG4gICAgICAgICAgICBib2R5OiBgXHJcbiAgICAgICAgICAgICAgICDQl9C00YDQsNCy0YHRgtCy0YPQudGC0LUhINCn0YLQviDQvdGD0LbQvdC+INC00LXQu9Cw0YLRjCDRh9GC0L7QsdGLINCy0YHQtdCz0LTQsCDQstGL0YXQvtC00LjRgtGMINGBINC/0LvRjtGB0L7QvCDimJ3vuI9cclxuICAgICAgICAgICAgICAgIDEuINCd0LAg0LrQsNC20LTRi9C5INC80LDRgtGHINGB0YLQsNCy0LjQvCDQv9C+IDEwJSDQuNC3INCx0LDQvdC60LAgKCDQtdGB0LvQuCDRgyDQstCw0YEg0L3QsCDRgdGH0LXRgtGDINC10YHRgtGMIDEwMDAwINGA0YPQsdC70LXQuSwg0YLQviDQvdCwINC60LDQttC00YvQuSDQvNCw0YLRhyDQvdGD0LbQvdC+INGB0YLQsNCy0LjRgtGMINC/0L4gMTAwMCDRgNGD0LHQu9C10LksINC90LUg0LLQsNC20L3QviDQvdCw0YHQutC+0LvRjNC60L4g0LHQsNC90Log0L/QvtC00L3QuNC80LDQtdGC0YHRjyDQuNC70Lgg0YHQvdC40LbQsNC10YLRgdGPLCDQvdGD0LbQvdC+INGB0YLQsNCy0LjRgtGMINC/0L4gMTAwMCDRgNGD0LHQu9C10Lkg0LIg0LvRjtCx0L7QvCDRgdC70YPRh9Cw0LggKSBcclxuICAgICAgICAgICAgICAgIDIuINCh0LDQvNC+0LUg0LLQsNC20L3QvtC1INC40LPRgNCw0YLRjCDQv9C+INC/0YDQsNCy0LjQu9Cw0LwgKCDQstC+INC+0YHQvdC+0LLQvdC+0Lwg0LjQs9GA0L7QutC4IDk5JSDQv9GA0L7QuNCz0YDRi9Cy0LDRjtGCLCDQv9C+0YfQtdC80YM/INCf0L7RgtC+0LzRgyDRh9GC0L4g0L7QvdC4INC90LUg0YHQvtCx0LvRjtC00LDRjtGCINC/0YDQsNCy0LjQu9CwINC40LPRgNGLICwg0L3QsNGH0LjQvdCw0Y7RgiDRgdCw0LzQuCDQtNC10LvQsNGC0Ywg0YHQstC+0Lgg0L/RgNC+0LPQvdC+0LfRiywg0YfRgtC+INC4INGA0LDQt9GA0YPRiNCw0LXRgiDQstGB0Y4g0YHQuNGB0YLQtdC80YMg0L/RgNC+0LPQvdC+0LfQvtCyISDQodC+0LHQu9GO0LTQsNC50YLQtSDQt9CwINC/0YDQsNCy0LjQu9Cw0LzQuCDQuCDQv9C+0LTQvdC40LzQsNC50YLQtSDQktCw0Ygg0LHQsNC90LohINCj0LTQsNGH0L3Ri9GFINCy0LDQvCDRgdGC0LDQstC+0Lrwn6SdXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICcg0KTRg9GC0LHQvtC7OiDCq9Cf0L7Qu9C+0LbQtdC90LjQtSDQstC90LUg0LjQs9GA0YvCuy4nLFxyXG4gICAgICAgICAgICBib2R5OiAn0J/RgNCw0LLQuNC70L4gwqvQstC90LUg0LjQs9GA0YvCuyDQt9Cw0L/RgNC10YnQsNC10YIg0LjQs9GA0L7QutCw0Lwg0LDRgtCw0LrRg9GO0YnQtdC5INC60L7QvNCw0L3QtNGLINC90LDRhdC+0LTQuNGC0YzRgdGPINC6INC70LjQvdC40Lgg0LLQvtGA0L7RgiDRgdC+0L/QtdGA0L3QuNC60LAg0LHQu9C40LbQtSwg0YfQtdC8INC30LDRidC40YLQvdC40LrQuCDRgdC+0L/QtdGA0L3QuNC60LAu0JXRgdC70Lgg0LIg0LzQvtC80LXQvdGCINC/0LXRgNC10LTQsNGH0Lgg0LzRj9GH0LAg0LzQtdC20LTRgyDQuNCz0YDQvtC60L7QvCDQuCDQu9C40L3QuNC10Lkg0LLQvtGA0L7RgiDRgdC+0L/QtdGA0L3QuNC60LAg0L3QsNGF0L7QtNC40YLRgdGPINC80LXQvdC10LUg0LTQstGD0YUg0LjQs9GA0L7QutC+0LIg0LrQvtC80LDQvdC00Ysg0YHQvtC/0LXRgNC90LjQutCwLCDQstC60LvRjtGH0LDRjyDQstGA0LDRgtCw0YDRjywg0YLQviDRgtCw0LrQvtC5INC40LPRgNC+0Log0LHRg9C00LXRgiDQsiDQv9C+0LvQvtC20LXQvdC40LggwqvQstC90LUg0LjQs9GA0YvCuy4g0J/RgNC4INC/0L7Qu9C+0LbQtdC90LjQuCDCq9Cy0L3QtSDQuNCz0YDRi8K7INC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0YHQstC+0LHQvtC00L3Ri9C5INGD0LTQsNGALtCf0L7Qu9C+0LbQtdC90LjQtSDCq9Cy0L3QtSDQuNCz0YDRi8K7INC90LUg0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQv9GA0Lgg0LDQvdCw0LvQvtCz0LjRh9C90L7QuSDRgdC40YLRg9Cw0YbQuNC4INC90LAg0YHQstC+0LXQuSDQv9C+0LvQvtCy0LjQvdC1INC/0L7Qu9GPLCDQv9GA0Lgg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0YPQtNCw0YDQvtCyINC+0YIg0LLQvtGA0L7Rgiwg0YPQs9C70L7QstGL0YUg0YPQtNCw0YDQvtCyLCDQv9GA0Lgg0LLQsdGA0LDRgdGL0LLQsNC90LjQuCDQuNC3IC0g0LfQsCDQsdC+0LrQvtCy0L7QuSDQu9C40L3QuNC4INC4INC/0YDQuCDRgdC/0L7RgNC90L7QvCDQstCx0YDQsNGB0YvQstCw0L3QuNC4LidcclxuICAgICAgICB9XHJcbiAgICBdXHJcbl1cclxuXHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmV0bnMgXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL1RpdGxlL1RpdGxlJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKHtcclxuICAgIGJ1dHRvbnNBY3Rpdml0eSxcclxuICAgIG9uX1RNX2NsaWNrLFxyXG4gICAgb25fR01fY2xpY2ssXHJcbiAgICBnYW1lUnVsZXNTdGF0ZSB9KSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICBwYWdlPXsnaG9tZSd9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J21hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPXsnLnRpdGxlJ31cclxuICAgICAgICAgICAgICAgIGhyZWY9Jy9tYXRjaGVzJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL21hdGNoZXMnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JblBhZ2U9eydtYXRjaGVzJ31cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9eycuYnV0dG9ucy5Ub2RheU1hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YnV0dG9uc0FjdGl2aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrPXtvbl9UTV9jbGlja31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7Z2FtZVJ1bGVzU3RhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXsnbWF0Y2hlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17Jy5idXR0b25zLkdhbWVSdWxlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17IWJ1dHRvbnNBY3Rpdml0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e29uX0dNX2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBHYW1lUnVsZXMgfSBmcm9tIFwiLi9HYW1lUnVsZXMvR2FtZVJ1bGVzXCI7XHJcbmltcG9ydCB7IFRvZGF5TWF0Y2hlcyB9IGZyb20gXCIuL1RvZGF5TWF0Y2hlcy9Ub2RheU1hdGNoZXNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWF0Y2hlcy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXRjaGVzKHsgZ2FtZVJ1bGVzU3RhdGUgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzXHJcbiAgICAgICAgW3Nob3dUb2RheU1hdGNoZXMsIHNldFNob3dUb2RheU1hdGNoZXNdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgW3Nob3dHYW1lUnVsZXMsIHNldFNob3dHYW1lUnVsZXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Z2FtZVJ1bGVzU3RhdGUgPyBzdHlsZXMuY29udGFpbmVyIDogc3R5bGVzLmluX3NlcGVyZXRlX3BhZ2V9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc0FjdGl2aXR5PXtzaG93VG9kYXlNYXRjaGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uX1RNX2NsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dUb2RheU1hdGNoZXModHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0dhbWVSdWxlcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uX0dNX2NsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dHYW1lUnVsZXModHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvZGF5TWF0Y2hlcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVSdWxlc1N0YXRlPXtnYW1lUnVsZXNTdGF0ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7c2hvd1RvZGF5TWF0Y2hlcyAmJiA8VG9kYXlNYXRjaGVzIC8+fVxyXG4gICAgICAgICAgICAgICAge3Nob3dHYW1lUnVsZXMgJiYgPEdhbWVSdWxlcyAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc3RzIH0gZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGFycm93UmlnaHQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93UmlnaHQucG5nJ1xyXG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9hcnJvd0xlZnQucG5nJ1xyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcblxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMzVweCcsXHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6ICcxMCUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNFZGdlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2VzLCBhY3RpdmVQYWdlLCBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVQYWdlID0gYWN0aXZlUGFnZSA9PT0gZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmVQYWdlID8gJ3RydWUnIDogJ2ZhbHNlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZH0gJHtpc0FjdGl2ZVBhZ2UgJiYgc3R5bGVzLmFjdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RETWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1wiXHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSAnLi4vY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZSdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfTUFUQ0hFUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVERNYXRjaGVzQm9hcmQoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbIGZpcnN0UGFnZSwgc2V0Rmlyc3RQYWdlIF0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICAgICAgWyBzZWNvbmRQYWdlLCBzZXRTZWNvbmRQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICBbZmlyc3RQYWdlSXRlbXMsIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zXSA9IHVzZVN0YXRlKGZpcnN0UGFnZSksXHJcbiAgICAgICAgW3NlY29uZFBhZ2VJdGVtcywgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zXSA9IHVzZVN0YXRlKHNlY29uZFBhZ2UpLFxyXG4gICAgICAgIFsgbWF0Y2hlcywgc2V0TWF0Y2hlcyBdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMoIG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA8IDQpICk7XHJcbiAgICAgICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKCBtYXRjaGVzLmZpbHRlcigoZWwsIGkpID0+IGkgPj0gNCkgKTtcclxuICAgIH0sIFttYXRjaGVzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICByZXF1ZXN0KCBHRVRfTUFUQ0hFUywge30sIHsgYXV0aDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAudGhlbiggbWF0Y2hlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgc2V0TWF0Y2hlcyggbWF0Y2hlcy5kYXRhLmRhdGEubWFwKCBtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoVGltZSA9IChuZXcgRGF0ZShgJHttYXRjaC5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKX0gJHttYXRjaC50aW1lfWApKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVTdGF0ZSA9IG5vdyA8IG1hdGNoVGltZSAgPyBgZG9udFN0YXJ0ZWRgIDogTWF0aC5hYnMobm93LW1hdGNoVGltZSkgPCA5MDAwMDAwID8gJ3N0YXJ0ZWQnIDogJ2ZpbmlzaGVkJztcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG1hdGNoLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IG1hdGNoLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbWF0Y2gudGltZSxcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU6IGAucm93T25lLmdhbWVTdGF0ZS4ke2dhbWVTdGF0ZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBgYCxcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBtYXRjaC50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBzY29yZTogbWF0Y2guc2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIGVyciApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBmaXJzdFBhZ2VJdGVtcyApO1xyXG4gICAgfSwgW2ZpcnN0UGFnZUl0ZW1zXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlKHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKGZpcnN0UGFnZUl0ZW1zKSxcclxuICAgICAgICAgICAgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpXHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSlcclxuXHJcbiAgICAgICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgICAgICBjb25zdFxyXG4gICAgICAgICAgICBpdGVtcyA9IEFycmF5LmZyb20oc2Vjb25kUGFnZUl0ZW1zKSxcclxuICAgICAgICAgICAgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpXHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSlcclxuXHJcbiAgICAgICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGVuYWJsZVN3aXBlPXtmYWxzZX1cclxuICAgICAgICAvLyB2ZXJ0aWNhbE1vZGVcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJtYXRjaGVzdG9kYXlNYXRjaGVzRmlyc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0UGFnZUl0ZW1zLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVJZD17ZWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiAnMzRweCcgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNTZWNvbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlPXtlbC5nYW1lU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlPXtlbC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+IHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogJzM0cHgnIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RNTWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1wiXHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSAnLi4vY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZSdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuLy4uL1RETWF0Y2hlc0JvYXJkL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vLi4vVERNYXRjaGVzQm9hcmQvUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVE1NYXRjaGVzQm9hcmQoKSB7ICBcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIFsgZmlyc3RQYWdlLCBzZXRGaXJzdFBhZ2UgXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICBbIHNlY29uZFBhZ2UsIHNldFNlY29uZFBhZ2VdID0gdXNlU3RhdGUoW10pLFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIFtmaXJzdFBhZ2VJdGVtcywgdXBEYXRlRmlyc3RQYWdlSXRlbXNdID0gdXNlU3RhdGUoZmlyc3RQYWdlKSxcclxuICAgICAgICBbc2Vjb25kUGFnZUl0ZW1zLCB1cERhdGVTZWNvbmRQYWdlSXRlbXNdID0gdXNlU3RhdGUoc2Vjb25kUGFnZSksXHJcbiAgICAgICAgWyBtYXRjaGVzLCBzZXRNYXRjaGVzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyggbWF0Y2hlcy5maWx0ZXIoKGVsLCBpKSA9PiBpIDwgNCkgKTtcclxuICAgICAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMoIG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA+PSA0KSApO1xyXG4gICAgfSwgW21hdGNoZXNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHsgICAgICAgIFxyXG4gICAgICAgIHJlcXVlc3QoIEdFVF9NQVRDSEVTX09GX05FWFRfREFZLCB7fSwgeyBhdXRoOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCBtYXRjaGVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBzZXRNYXRjaGVzKCBtYXRjaGVzLmRhdGEuZGF0YS5tYXAoIG1hdGNoID0+IHsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hUaW1lID0gKG5ldyBEYXRlKGAke21hdGNoLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke21hdGNoLnRpbWV9YCkpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXRlID0gbm93IDwgbWF0Y2hUaW1lICA/IGBkb250U3RhcnRlZGAgOiBNYXRoLmFicyhub3ctbWF0Y2hUaW1lKSA8IDkwMDAwMDAgPyAnc3RhcnRlZCcgOiAnZmluaXNoZWQnO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBtYXRjaC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBtYXRjaC5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IG1hdGNoLnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlOiBgLnJvd09uZS5nYW1lU3RhdGUuJHtnYW1lU3RhdGV9YCxcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtT25lTmFtZTogYGAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb246IG1hdGNoLnRlYW0xX2ltZ19wYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogbWF0Y2gudGVhbTJfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU6IG1hdGNoLnNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93T25lLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29lZmZpY2VudDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd09uZS50aXRsZSdcclxuICAgICAgICAgICAgICAgIH19KSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBlcnIgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2UocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgICAgICBjb25zdFxyXG4gICAgICAgICAgICBpdGVtcyA9IEFycmF5LmZyb20oZmlyc3RQYWdlSXRlbXMpLFxyXG4gICAgICAgICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSlcclxuICAgICAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKVxyXG5cclxuICAgICAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZShyZXN1bHQpIHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0XHJcbiAgICAgICAgICAgIGl0ZW1zID0gQXJyYXkuZnJvbShzZWNvbmRQYWdlSXRlbXMpLFxyXG4gICAgICAgICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSlcclxuICAgICAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKVxyXG5cclxuICAgICAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgIGl0ZW1zVG9TaG93PXsxfVxyXG4gICAgICAgICAgICBpdGVtc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICByZW5kZXJBcnJvdz17QXJyb3d9XHJcbiAgICAgICAgICAgIHJlbmRlclBhZ2luYXRpb249e1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgZW5hYmxlU3dpcGU9e2ZhbHNlfVxyXG4gICAgICAgIC8vIHZlcnRpY2FsTW9kZVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNGaXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zmlyc3RQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lPXtlbC50aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+IHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgPFJvd1RpdGxlIHJvd1N0eWxlcz17eyBtaW5IZWlnaHQ6ICczNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc1NlY29uZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vjb25kUGFnZUl0ZW1zLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVJZD17ZWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lPXtlbC50aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT4gcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiAnMzRweCcgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgIClcclxufVxyXG5cclxuIiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBSb3dUaXRsZSB9IGZyb20gJy4vUm93VGl0bGUvUm93VGl0bGUnXHJcbmltcG9ydCB7IFJvd0Rlc2NyaXB0aW9uIH0gZnJvbSAnLi9Sb3dEZXNjcmlwdGlvbi9Sb3dEZXNjcmlwdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Sb3cubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7XHJcbiAgICBkYXRlLFxyXG4gICAgZ2FtZVN0YXRlLFxyXG4gICAgdGVhbU9uZSxcclxuICAgIHRlYW1PbmVJY29uLFxyXG4gICAgc2NvcmUsXHJcbiAgICB0ZWFtVHdvLFxyXG4gICAgdGVhbVR3b0ljb24sXHJcbiAgICBidXlCdXR0b25OYW1lLFxyXG4gICAgdGl0bGVOYW1lLFxyXG4gICAgY2xpY2tCdXlcclxufSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICB0cmFzbmxhdGlvbkxvY2F0aW9uID0gJ21hdGNoZXMuVE0udG9kYXknXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFJvd1RpdGxlXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXt0aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9e3RyYXNubGF0aW9uTG9jYXRpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSb3dEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17Z2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgdGVhbU9uZT17dGVhbU9uZX1cclxuICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXt0ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgIHNjb3JlPXtzY29yZX1cclxuICAgICAgICAgICAgICAgIHRlYW1Ud289e3RlYW1Ud299XHJcbiAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17dGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtidXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXt0cmFzbmxhdGlvbkxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgY2xpY2tCdXk9e2NsaWNrQnV5fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIHRyYW5zbGF0aW9uc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm93RGVzY3JpcHRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gXHJcblxyXG5Sb3dEZXNjcmlwdGlvbih7XHJcbiAgICBjbGlja0J1eSxcclxuICAgIGRhdGUsXHJcbiAgICBnYW1lU3RhdGUsXHJcbiAgICB0ZWFtT25lLFxyXG4gICAgdGVhbU9uZUljb24sXHJcbiAgICBzY29yZSxcclxuICAgIHRlYW1Ud28sXHJcbiAgICB0ZWFtVHdvSWNvbixcclxuICAgIGJ1eUJ1dHRvbk5hbWUsXHJcbiAgICBsb2NhdGlvbkluTWFpblBhZ2VcclxufSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdob21lJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25Jbk1haW5QYWdlfWAsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHsgIGNvbnNvbGUubG9nKGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSA7cmV0dXJuIHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApIH0sXHJcbiAgICAgICAgZ2FtZVN0YXJ0ZWQgPSBnYW1lU3RhdGUuc2xpY2UoZ2FtZVN0YXRlLmxhc3RJbmRleE9mKFwiLlwiKSArIDEpID09PSAnc3RhcnRlZCdcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLmRhdGVfZ2FtZU5TdGFydGVkX2NvbnRlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2dhbWVTdGFydGVkID8gc3R5bGVzLmRhdGVfZ2FtZVN0YXJ0ZWRfY29udGVudCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3t0cmFuc2xhdGUoZ2FtZVN0YXRlKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbU9uZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RlYW1PbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1PbmVJY29ufSBhbHQ9e3RlYW1PbmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY29yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Njb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtVHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1Ud29JY29ufSBhbHQ9e3RlYW1Ud299IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RlYW1Ud299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlCdXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9jb250ZW50fSBvbkNsaWNrPXtjbGlja0J1eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZShidXlCdXR0b25OYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIHRyYW5zbGF0aW9uc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Jvd1RpdGxlLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvd1RpdGxlKHsgY29udGVudCwgbG9jYXRpb25Jbk1haW5QYWdlIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignaG9tZScpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5NYWluUGFnZX1gLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA/IHRyYW5zbGF0ZShjb250ZW50KSA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXlDaGFuZ2VCdXR0b24ubW9kdWxlLnNjc3MnXHJcbi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEYXlDaGFuZ2VCdXR0b24oe1xyXG4gICAgbmFtZSxcclxuICAgIGxvY2F0aW9uSW5NYWluUGFnZSxcclxuICAgIGRhdGUsXHJcbiAgICBhY3RpdmUgPSBudWxsLFxyXG4gICAgY2xpY2sgfSkge1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2hvbWUnKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSBgJHtsb2NhdGlvbkluTWFpblBhZ2V9YCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmUgPyBzdHlsZXMuYWN0aXZlX25hbWUgOiBzdHlsZXMubmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthY3RpdmUgPyBzdHlsZXMuYWN0aXZlX2RhdGUgOiBzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL1RpdGxlL1RpdGxlXCI7XHJcbmltcG9ydCB7IERheUNoYW5nZUJ1dHRvbiB9IGZyb20gJy4vRGF5Q2hhbmdlQnV0dG9uL0RheUNoYW5nZUJ1dHRvbic7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tICdyZWFjdC1jYWxlbmRhcic7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVE1IZWFkZXIubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCBjYWxlbmRhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvQ2FsZW5kYXIucG5nJ1xyXG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dSaWdodC5wbmcnXHJcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2Fycm93TGVmdC5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRNSGVhZGVyKHtcclxuICAgIGNsaWNrVEQsXHJcbiAgICBjbGlja1RNLFxyXG4gICAgVERCb2FyZFN0YXRlLFxyXG4gICAgVE1Cb2FyZFN0YXRlIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIGZ1bmN0aW9uc1xyXG4gICAgICAgIC8vIGdldF9kYXRlIHZhbHVlIGNoYW5nZXMgeV9kID0+IHllc3RlcmRheSwgdF9kID0+IHRvZGF5LCB0X3cgPT50b21vcnJvd1xyXG4gICAgICAgIGdldF9kYXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldFxyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBkYXkgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndF9kJzpcclxuICAgICAgICAgICAgICAgICAgICBkYXkgPSBkYXRlLmdldERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndF9tJzpcclxuICAgICAgICAgICAgICAgICAgICBkYXkgPSBkYXRlLmdldERhdGUoKSArIDFcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5ID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYCR7ZGF5fS4ke21vbnRoIDwgMTAgPyBcIjBcIiArIG1vbnRoIDogbW9udGh9LiR7eWVhcn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICBbc2hvd0NhbGVuZGFyLCBzZXRTaG93Q2FsZW5kYXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBwYWdlPXsnaG9tZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JblBhZ2U9eydtYXRjaGVzJ31cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9eycuVE0uaGVhZGVyVGl0bGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheV9jaGFuZ2VfYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPERheUNoYW5nZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPScuVE0uaGVhZGVyQnV0dG9ucy50b2RheSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXsnbWF0Y2hlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2dldF9kYXRlKCd0X2QnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtUREJvYXJkU3RhdGUgPyAnc2hvdycgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17Y2xpY2tURH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXlDaGFuZ2VCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nLlRNLmhlYWRlckJ1dHRvbnMudG9tb3Jyb3cnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5NYWluUGFnZT17J21hdGNoZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtnZXRfZGF0ZSgndF9tJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17VE1Cb2FyZFN0YXRlID8gJ3Nob3cnIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e2NsaWNrVE19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NhbGVuZGFyLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2FsZW5kYXItaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDYWxlbmRhcighc2hvd0NhbGVuZGFyKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93Q2FsZW5kYXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TmVpZ2hib3JpbmdNb250aD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dExhYmVsPXs8aW1nIHNyYz17YXJyb3dSaWdodC5zcmN9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkxhYmVsPXs8aW1nIHNyYz17YXJyb3dMZWZ0LnNyY30gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVERNYXRjaGVzQm9hcmQgfSBmcm9tICcuL1RNQm9keS9URE1hdGNoZXNCb2FyZC9URE1hdGNoZXNCb2FyZCdcclxuaW1wb3J0IHsgVE1NYXRjaGVzQm9hcmQgfSBmcm9tICcuL1RNQm9keS9UTU1hdGNoZXNCb2FyZC9UTU1hdGNoZXNCb2FyZCdcclxuaW1wb3J0IHsgVE1IZWFkZXIgfSBmcm9tICcuL1RNSGVhZGVyL1RNSGVhZGVyJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RvZGF5TWF0Y2hlcy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb2RheU1hdGNoZXMoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICBbc2hvd1RvZGF5R2FtZXMsIHNldFNob3dUb2RheUdhbWVzXSA9IHVzZVN0YXRlKHRydWUpLFxyXG4gICAgICAgIFtzaG93VG9tb3Jyb3dHYW1lcywgc2V0U2hvd1RvbW9ycm93R2FtZXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUTUhlYWRlclxyXG4gICAgICAgICAgICAgICAgLy8gVEQgPT4gdG9kYXkgZ2FtZXMgYm9hcmQgc2hvcHcgY29uZmlnc1xyXG4gICAgICAgICAgICAgICAgY2xpY2tURD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dUb2RheUdhbWVzKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvbW9ycm93R2FtZXMoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgVERCb2FyZFN0YXRlPXtzaG93VG9kYXlHYW1lc31cclxuICAgICAgICAgICAgICAgIC8vIFRNID0+IHRvbW1vcm93IGdhbWVzIGJvYXJkIHNob3B3IGNvbmZpZ3NcclxuICAgICAgICAgICAgICAgIGNsaWNrVE09eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93VG9kYXlHYW1lcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93VG9tb3Jyb3dHYW1lcyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIFRNQm9hcmRTdGF0ZT17c2hvd1RvbW9ycm93R2FtZXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtzaG93VG9kYXlHYW1lcyAmJiA8VERNYXRjaGVzQm9hcmQgLz59XHJcbiAgICAgICAgICAgIHtzaG93VG9tb3Jyb3dHYW1lcyAmJiA8VE1NYXRjaGVzQm9hcmQgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmV3cy5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50cyBcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi9jb21tb24vVGl0bGUvVGl0bGUnXHJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSAnLi9TbGlkZS9TbGlkZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXdzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUaXRsZSBcclxuICAgICAgICAgICAgICAgIHBhZ2U9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17J25ld3MnfVxyXG4gICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPXsnLnRpdGxlJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNsaWRlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgc2xpZGVfc2hvd19kYXRhIH0gZnJvbSAnLi9zbGlkZV9zaG93X2RhdGEnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL1NsaWRlSXRlbXMvSXRlbS9JdGVtJ1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4vU2xpZGVJdGVtcy9BcnJvd3MvQXJyb3cnXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuL1NsaWRlSXRlbXMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBJdGVtTW9kYWwgfSBmcm9tICcuL1NsaWRlSXRlbXMvSXRlbU1vZGFsL0l0ZW1Nb2RhbCdcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2xpZGUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX05FV1MgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2xpZGUoKSB7XHJcblxyXG4gICAgY29uc3QgWyBzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgcmVxdWVzdCggR0VUX05FV1MsIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgICAgICAgLnRoZW4oIG5ld3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGVEYXRhKCBuZXdzLmRhdGEuZGF0YSApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggZXJyICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gY29uc3RzIGFuZCBzdGF0ZXMgXHJcbiAgICAgICAgLy8gYnJlYWtwb2ludHMgZm9yIHNsaWRlIFxyXG4gICAgICAgIGJyZWFrcG9pbnRzID0gW1xyXG4gICAgICAgICAgICB7IHdpZHRoOiAzNzUsIGl0ZW1zVG9TaG93OiAyLCBpdGVtc1RvU2Nyb2xsOiAyIH0sXHJcbiAgICAgICAgICAgIHsgd2lkdGg6IDc0MCwgaXRlbXNUb1Nob3c6IDMsIGl0ZW1zVG9TY3JvbGw6IDMgfSxcclxuICAgICAgICAgICAgeyB3aWR0aDogMTcwMCwgaXRlbXNUb1Nob3c6IDQsIGl0ZW1zVG9TY3JvbGw6IDQgfVxyXG4gICAgICAgIF1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUGFkZGluZz17WzM1LCAxMl19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBhZ2luYXRpb249e1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludHM9e2JyZWFrcG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVfZGF0YS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdfc3JjPXtlbC5pbWdfcGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZWwudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VsLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zdHMgfSBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dSaWdodC5wbmcnXHJcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93TGVmdC5wbmcnXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IGFycm93U3R5bGVzIGZyb20gJy4vQXJyb3cubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJyb3coeyB0eXBlLCBvbkNsaWNrLCBpc0VkZ2UgfSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICBwb2ludGVyID0gdHlwZSA9PT0gY29uc3RzLlBSRVYgP1xyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93TGVmdC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93TGVmdH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dSaWdodC5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Fycm93U3R5bGVzLmFycm93UmlnaHR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgIC8+LFxyXG5cclxuICAgICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0VkZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSXRlbU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW1Nb2RhbCh7XHJcbiAgICBvbk1vZGFsQ2xvc2UsXHJcbiAgICBpbWcsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtzdHlsZXMuTWNvbnRhaW5lcn1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17c3R5bGVzLk1jb250ZW50fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSXRlbU1vZGFsIH0gZnJvbSAnLi4vSXRlbU1vZGFsL0l0ZW1Nb2RhbCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0l0ZW0ubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0oe1xyXG4gICAgaW1nX3NyYyxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24gfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBpbWdfc3JjICsgXCIpXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtzaG93SXRlbU1vZGFsLCBzZXRTaG93SXRlbU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wTGluZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZU9uZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmVUd299IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SXRlbU1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbUxpbmVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmVPbmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lVHdvfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dJdGVtTW9kYWwgJiZcclxuICAgICAgICAgICAgICAgIDxJdGVtTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dJdGVtTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17aW1nX3NyY31cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2VzLCBhY3RpdmVQYWdlLCBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYWdlcy5tYXAoZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlUGFnZSA9IGFjdGl2ZVBhZ2UgPT09IGVsXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZVBhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucm91bmR9ICR7aXNBY3RpdmVQYWdlICYmIHN0eWxlcy5hY3RpdmV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBpbWdcclxuaW1wb3J0IHNlY0JhY2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL3NlY0JhY2sucG5nJ1xyXG5pbXBvcnQgdHJkQmFjayBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvdHJkQmFjay5wbmcnXHJcbmltcG9ydCBmb3J0QmFjayBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvZm9ydEJhY2sucG5nJ1xyXG5pbXBvcnQgYmFja0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9zbGlkZUJhY2sucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlX3Nob3dfZGF0YSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignaG9tZScpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICduZXdzLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYmFja0ljb24uc3JjLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLCq9Cg0LXQsNC7wrsg0LTQvtC70LPQviDQvNGD0YfQuNC70YHRjyDRgSDCq9CQ0YLQsNC70LDQvdGC0L7QucK7OiA3MCDQvNC40L3Rg9GCINCy0LfQu9Cw0LzRi9Cy0LDQuyDRgdC+0L/QtdGA0L3QuNC60LAg0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtS5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogc2VjQmFjay5zcmMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCc0Ysg0L3QtSDQv9C+0LLQtdGA0LjQu9C4INCyINC/0LXQvdCw0LvRjNGC0LggwqvQkdCw0YDRgdGLwrsg4oCTINCwINC30YDRjy4g0J7QvSDQsdGL0Lsg0LjQty3Qt9CwINC80LjQvNC+0LvQtdGC0L3QvtCz0L4g0LrQsNGB0LDQvdC40Y8g0LIg0YjRgtGA0LDRhNC90L7QuVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjon0JjQty3Qt9CwINCz0LjQsdC60L7RgdGC0Lgg0L3Ri9C90LXRiNC90LXQs9C+IMKr0JDRgtC70LXRgtC40LrQvsK7INGB0Y7RgNC/0YDQuNC30Ysg0LrQsNGB0LDQu9C40YHRjCDQstC90YPRgtGA0LXQvdC90L7RgdGC0LXQuSDRgdGF0LXQvNGLLiDQkiDRgtCw0LrQvtC8INGB0L7RgdGC0LDQstC1INGE0YPRgtCx0L7Qu9C40YHRgtGLINC80L7Qs9C70Lgg0YDQsNGB0L/QvtC70L7QttC40YLRjNGB0Y8g0Lgg0LIgNC00LTIsINC4INCyIDQtMy0zICg0LTEtNC0xKSwg0Lgg0LIgMy01LTIsINC4INC00LDQttC1INCyIDYtMy0xLiDQndCwINC/0YDQsNC60YLQuNC60LUg0YHRhdC10LzQsCDCq9CQ0YLQu9C10YLQuNC60L7CuyDQvtC/0YDQtdC00LXQu9GP0LvQsNGB0Ywg0YHRgtCw0LTQuNC10Lkg0LjQs9GA0YsgKNCyINGB0YDQtdC00L3QtdC8INCx0LvQvtC60LUg4oCTINC+0LTQvdCwLCDQv9GA0Lgg0L/RgNC10YHRgdC40L3Qs9C1IOKAkyDQtNGA0YPQs9Cw0Y8sINCwINCyINCz0LvRg9Cx0L7QutC+0Lkg0L7QsdC+0YDQvtC90LUg4oCTINGC0YDQtdGC0YzRjykuINCd0LjQttC1INGA0LDQt9Cx0LXRgNC10Lwg0Y3RgtC4INC/0LXRgNC10YHRgtGA0L7QtdC90LjRjy4g0JIg0L7RgdGC0LDQu9GM0L0g0L7QvCDRgdC+0YHRgtCw0LIg0YPQs9Cw0LTRi9Cy0LDQu9GB0Y8sINC30LAg0LjRgdC60LvRjtGH0LXQvdC40LXQvCDQvtC00L3QvtC5INGE0LvQsNC90LPQvtCy0L7QuSDQv9C+0LfQuNGG0LjQuC4g0JfQuNC00LDQvSDQvdC10LTQsNCy0L3QviDQvdCw0LfQstCw0Lsg0JDRgdC10L3RgdC40L4g0LbQtdC70LXQt9C90YvQvCDQuNCz0YDQvtC60L7QvCDRgdGC0LDRgNGC0LAsINC/0L7RjdGC0L7QvNGDINGA0LXRh9GMINGI0LvQsCDQvtCxINC40LPRgNC+0LrQtSDQvdCwINC00YDRg9Cz0L7QuSDQutGA0LDQuS4g0JjQvCDQvNC+0LMg0YHRgtCw0YLRjCDQuCDQoNC+0LTRgNC40LPQviwg0Lgg0JLQuNC90LjRgdC40YPRgSAo0YLQvtCz0LTQsCDQv9C+0LzQtdC90Y/Qu9GB0Y8g0LHRiyDRhNC70LDQvdCzINCQ0YHQtdC90YHQuNC+KSwg0Lgg0LTQsNC20LUg0JjRgdC60L4gKNCy0YvRhdC+0LTQuNC7INGB0LvQtdCy0LAg0L/RgNC+0YLQuNCyIMKr0KHQvtGB0YzQtdC00LDQtNCwwrspLiDQl9C40LTQsNC9INCy0YvQsdGA0LDQuyDQoNC+0LTRgNC40LPQvi4gJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0cmRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiwqvQkNGC0LvQtdGC0LjQutC+wrsg0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0Lsg0L/QtdGA0LLRi9C5INGC0LDQudC8INC00LXRgNCx0Lgg0LHQu9Cw0LPQvtC00LDRgNGPINGB0LzQtdC70L7QvNGDINC/0LvQsNC90YMg0KHQuNC80LXQvtC90LUuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOifQmNC3LdC30LAg0LPQuNCx0LrQvtGB0YLQuCDQvdGL0L3QtdGI0L3QtdCz0L4gwqvQkNGC0LvQtdGC0LjQutC+wrsg0YHRjtGA0L/RgNC40LfRiyDQutCw0YHQsNC70LjRgdGMINCy0L3Rg9GC0YDQtdC90L3QvtGB0YLQtdC5INGB0YXQtdC80YsuINCSINGC0LDQutC+0Lwg0YHQvtGB0YLQsNCy0LUg0YTRg9GC0LHQvtC70LjRgdGC0Ysg0LzQvtCz0LvQuCDRgNCw0YHQv9C+0LvQvtC20LjRgtGM0YHRjyDQuCDQsiA0LTQtMiwg0Lgg0LIgNC0zLTMgKDQtMS00LTEpLCDQuCDQsiAzLTUtMiwg0Lgg0LTQsNC20LUg0LIgNi0zLTEuINCd0LAg0L/RgNCw0LrRgtC40LrQtSDRgdGF0LXQvNCwIMKr0JDRgtC70LXRgtC40LrQvsK7INC+0L/RgNC10LTQtdC70Y/Qu9Cw0YHRjCDRgdGC0LDQtNC40LXQuSDQuNCz0YDRiyAo0LIg0YHRgNC10LTQvdC10Lwg0LHQu9C+0LrQtSDigJMg0L7QtNC90LAsINC/0YDQuCDQv9GA0LXRgdGB0LjQvdCz0LUg4oCTINC00YDRg9Cz0LDRjywg0LAg0LIg0LPQu9GD0LHQvtC60L7QuSDQvtCx0L7RgNC+0L3QtSDigJMg0YLRgNC10YLRjNGPKS4g0J3QuNC20LUg0YDQsNC30LHQtdGA0LXQvCDRjdGC0Lgg0L/QtdGA0LXRgdGC0YDQvtC10L3QuNGPLiDQkiDQvtGB0YLQsNC70YzQvSDQvtC8INGB0L7RgdGC0LDQsiDRg9Cz0LDQtNGL0LLQsNC70YHRjywg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INC+0LTQvdC+0Lkg0YTQu9Cw0L3Qs9C+0LLQvtC5INC/0L7Qt9C40YbQuNC4LiDQl9C40LTQsNC9INC90LXQtNCw0LLQvdC+INC90LDQt9Cy0LDQuyDQkNGB0LXQvdGB0LjQviDQttC10LvQtdC30L3Ri9C8INC40LPRgNC+0LrQvtC8INGB0YLQsNGA0YLQsCwg0L/QvtGN0YLQvtC80YMg0YDQtdGH0Ywg0YjQu9CwINC+0LEg0LjQs9GA0L7QutC1INC90LAg0LTRgNGD0LPQvtC5INC60YDQsNC5LiDQmNC8INC80L7QsyDRgdGC0LDRgtGMINC4INCg0L7QtNGA0LjQs9C+LCDQuCDQktC40L3QuNGB0LjRg9GBICjRgtC+0LPQtNCwINC/0L7QvNC10L3Rj9C70YHRjyDQsdGLINGE0LvQsNC90LMg0JDRgdC10L3RgdC40L4pLCDQuCDQtNCw0LbQtSDQmNGB0LrQviAo0LLRi9GF0L7QtNC40Lsg0YHQu9C10LLQsCDQv9GA0L7RgtC40LIgwqvQodC+0YHRjNC10LTQsNC00LDCuykuINCX0LjQtNCw0L0g0LLRi9Cx0YDQsNC7INCg0L7QtNGA0LjQs9C+LiAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGZvcnRCYWNrLnNyYyxcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JPQvtC7INCX0LjQtNCw0L3QsCDCq9CR0LDQudC10YDRg8K7IOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNCw0Y8g0LrQu9Cw0YHRgdC40LrQsCDQm9CnLiDQmtCw0Log0Y3RgtC+INCy0L7QvtCx0YnQtSDQv9C+0LvRg9GH0LjQu9C+0YHRjD9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J9CY0Lct0LfQsCDQs9C40LHQutC+0YHRgtC4INC90YvQvdC10YjQvdC10LPQviDCq9CQ0YLQu9C10YLQuNC60L7CuyDRgdGO0YDQv9GA0LjQt9GLINC60LDRgdCw0LvQuNGB0Ywg0LLQvdGD0YLRgNC10L3QvdC+0YHRgtC10Lkg0YHRhdC10LzRiy4g0JIg0YLQsNC60L7QvCDRgdC+0YHRgtCw0LLQtSDRhNGD0YLQsdC+0LvQuNGB0YLRiyDQvNC+0LPQu9C4INGA0LDRgdC/0L7Qu9C+0LbQuNGC0YzRgdGPINC4INCyIDQtNC0yLCDQuCDQsiA0LTMtMyAoNC0xLTQtMSksINC4INCyIDMtNS0yLCDQuCDQtNCw0LbQtSDQsiA2LTMtMS4g0J3QsCDQv9GA0LDQutGC0LjQutC1INGB0YXQtdC80LAgwqvQkNGC0LvQtdGC0LjQutC+wrsg0L7Qv9GA0LXQtNC10LvRj9C70LDRgdGMINGB0YLQsNC00LjQtdC5INC40LPRgNGLICjQsiDRgdGA0LXQtNC90LXQvCDQsdC70L7QutC1IOKAkyDQvtC00L3QsCwg0L/RgNC4INC/0YDQtdGB0YHQuNC90LPQtSDigJMg0LTRgNGD0LPQsNGPLCDQsCDQsiDQs9C70YPQsdC+0LrQvtC5INC+0LHQvtGA0L7QvdC1IOKAkyDRgtGA0LXRgtGM0Y8pLiDQndC40LbQtSDRgNCw0LfQsdC10YDQtdC8INGN0YLQuCDQv9C10YDQtdGB0YLRgNC+0LXQvdC40Y8uINCSINC+0YHRgtCw0LvRjNC9INC+0Lwg0YHQvtGB0YLQsNCyINGD0LPQsNC00YvQstCw0LvRgdGPLCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0L7QtNC90L7QuSDRhNC70LDQvdCz0L7QstC+0Lkg0L/QvtC30LjRhtC40LguINCX0LjQtNCw0L0g0L3QtdC00LDQstC90L4g0L3QsNC30LLQsNC7INCQ0YHQtdC90YHQuNC+INC20LXQu9C10LfQvdGL0Lwg0LjQs9GA0L7QutC+0Lwg0YHRgtCw0YDRgtCwLCDQv9C+0Y3RgtC+0LzRgyDRgNC10YfRjCDRiNC70LAg0L7QsSDQuNCz0YDQvtC60LUg0L3QsCDQtNGA0YPQs9C+0Lkg0LrRgNCw0LkuINCY0Lwg0LzQvtCzINGB0YLQsNGC0Ywg0Lgg0KDQvtC00YDQuNCz0L4sINC4INCS0LjQvdC40YHQuNGD0YEgKNGC0L7Qs9C00LAg0L/QvtC80LXQvdGP0LvRgdGPINCx0Ysg0YTQu9Cw0L3QsyDQkNGB0LXQvdGB0LjQviksINC4INC00LDQttC1INCY0YHQutC+ICjQstGL0YXQvtC00LjQuyDRgdC70LXQstCwINC/0YDQvtGC0LjQsiDCq9Ch0L7RgdGM0LXQtNCw0LTQsMK7KS4g0JfQuNC00LDQvSDQstGL0LHRgNCw0Lsg0KDQvtC00YDQuNCz0L4uICcsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufSIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJlZGljdGlvbi5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCIuLi8uLi9jb21tb24vVGl0bGUvVGl0bGVcIjtcclxuaW1wb3J0IHsgUHJkZWljdGlvblNsaWRlIH0gZnJvbSBcIi4vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZWRpY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICBwYWdlPSdob21lJ1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JblBhZ2U9J3ByZWRpY3Rpb24nXHJcbiAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9Jy50aXRsZSdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFByZGVpY3Rpb25TbGlkZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IGNvbnN0cyB9IGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbi8vIGljb25zXHJcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd1JpZ2h0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0LnBuZydcclxuaW1wb3J0IGFycm93TGVmdFZlY3RvciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0VmVjdG9yLnBuZydcclxuaW1wb3J0IGFycm93UmlnaHRWZWN0b3IgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2Fycm93UmlnaHRWZWN0b3IucG5nJ1xyXG5pbXBvcnQgYXJyb3dTdHlsZXMgZnJvbSAnLi9BcnJvdy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJvdyh7IHR5cGUsIG9uQ2xpY2ssIGlzRWRnZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIHBvaW50ZXIgPSB0eXBlID09PSBjb25zdHMuUFJFViA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YXJyb3dMZWZ0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd1JpZ2h0LnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dTdHlsZXMuYXJyb3dSaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgYXJyb3dzID0gdHlwZSA9PT0gY29uc3RzLlBSRVYgP1xyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93UmlnaHRWZWN0b3Iuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd1JpZ2h0VmVjdG9yfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd0xlZnRWZWN0b3Iuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd0xlZnRWZWN0b3J9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgIC8+LFxyXG5cclxuICAgICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNFZGdlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycm93c1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gdHJhbnNsYXRpb25zXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JdGVtLm1vZHVsZS5zY3NzJ1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgVGltZXIgfSBmcm9tICcuL1RpbWVyL1RpbWVyJ1xyXG5pbXBvcnQgeyBQcmVkaWN0aW9uTW9kYWwgfSBmcm9tICcuL1ByZWRpY3Rpb25Nb2RhbC9QcmVkaWN0aW9uTW9kYWwnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0oe1xyXG4gICAgdGVhbU9uZU5hbWUsXHJcbiAgICB0ZWFtVHdvTmFtZSxcclxuICAgIHRlYW1PbmVJY29uLFxyXG4gICAgdGVhbVR3b0ljb24sXHJcbiAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZSxcclxuICAgIGJ1eUJ1dHRvbk5hbWUsXHJcbiAgICBsb2NhdGlvbkluTWFpblBhZ2UsXHJcbiAgICBleHBpcnlUaW1lc3RhbXAsXHJcbiAgICBwcmVkaWN0aW9uLFxyXG4gICAgb3JkaW5hcixcclxuICAgIGNsaWNrQnV5XHJcbn0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc29sZS5sb2coIGV4cGlyeVRpbWVzdGFtcCApO1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2hvbWUnKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSBgJHtsb2NhdGlvbkluTWFpblBhZ2V9YCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgW3Nob3dQcmVkaWN0aW9uLCBzZXRTaG93UHJlZGljdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBmdW5jdGlvbiBnb1RvUHJlZGljdGlvbnMoKSB7XHJcbiAgICAgICAgLy8gc2V0U2hvd1ByZWRpY3Rpb24oIXNob3dQcmVkaWN0aW9uKTtcclxuICAgICAgICByb3V0ZXIucHVzaChgL3ByZWRpY3Rpb25gKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbU9uZUljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGVhbU9uZU5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lcl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+0JjQs9GA0LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YfQtdGA0LXQtzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyeVRpbWVzdGFtcD17ZXhwaXJ5VGltZXN0YW1wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDbGFzcz17c3R5bGVzLnRpbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbVR3b0ljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGVhbVR3b05hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dQcmVkaWN0aW9uICYmIDxQcmVkaWN0aW9uTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lPXt0ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lPXt0ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXt0ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXt0ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb249e3ByZWRpY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFyPXtvcmRpbmFyfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b219PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX2J1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbl9idXR0b25fY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29Ub1ByZWRpY3Rpb25zKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKHByZWRpY3Rpb25CdXR0b25OYW1lKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV5X2J1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV5X2J1dHRvbl9jb250ZW50fSBvbkNsaWNrPXtjbGlja0J1eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmFuc2xhdGUoYnV5QnV0dG9uTmFtZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9QcmVkaWN0aW9uTW9kYWwubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJlZGljdGlvbk1vZGFsKHtcclxuICAgIHRlYW1PbmVOYW1lLFxyXG4gICAgdGVhbVR3b05hbWUsXHJcbiAgICB0ZWFtT25lSWNvbixcclxuICAgIHRlYW1Ud29JY29uLFxyXG4gICAgcHJlZGljdGlvbixcclxuICAgIG9yZGluYXJcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1PbmVJY29ufSBhbHQ9e2Ake3RlYW1PbmVOYW1lfS1pY29uYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZTLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1Ud29JY29ufSBhbHQ9e2Ake3RlYW1Ud29JY29ufS1pY29uYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMub3JkaW5hcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUaW1lciB9IGZyb20gJ3JlYWN0LXRpbWVyLWhvb2snO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVyKHsgZXhwaXJ5VGltZXN0YW1wLCB0aW1lQ2xhc3MgfSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgbWludXRlcyxcclxuICAgICAgICBob3VycyxcclxuICAgIH0gPSB1c2VUaW1lcih7IGV4cGlyeVRpbWVzdGFtcCwgb25FeHBpcmU6ICgpID0+IGNvbnNvbGUud2Fybignb25FeHBpcmUgY2FsbGVkJykgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpbWVDbGFzc30+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7aG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3Vyc31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHttaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHN9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vSXRlbS9JdGVtJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ByZGVpY3Rpb25TbGlkZS5tb2R1bGUuc2NzcydcclxuLy8gaW1hZ2VzLCBpY29uc1xyXG5pbXBvcnQgcHJlZGljdGlvbkJhY2tncm91bmQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3ByZWRCYWNrLnBuZydcclxuaW1wb3J0IHsgc2xpZGVfZGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3NsaWRlJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX1BSRURJQ1RJT05TIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyBzZXRNYXRjaElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvbWF0Y2hTbGljZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcmRlaWN0aW9uU2xpZGUoKSB7XHJcblxyXG4gICAgY29uc3QgWyBzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFsgY3VycmVudE1hdGNoSWQsIHNldEN1cnJlbnRNYXRjaElkIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpPT4ge1xyXG4gICAgICAgIHJlcXVlc3QoIEdFVF9QUkVESUNUSU9OUywge30sIHsgYXV0aDogdHJ1ZSB9IClcclxuICAgICAgICAgICAgLnRoZW4oIHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0b2FzdChgU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRgKVxyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGVEYXRhKCByc3AuZGF0YS5kYXRhLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb246IGl0ZW1bYHRlYW0xX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb246IGl0ZW1bYHRlYW0yX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogaXRlbS50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiBpdGVtLmZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXJUZXh0OiBgJHtpdGVtLnR5cGV9IC8gJHtpdGVtLnByaWNlfdGA0YPQsS5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSArICcg0YDRg9CxLidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHJzcC5kYXRhPy5kYXRhLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudE1hdGNoSWQocnNwLmRhdGEuZGF0YVswXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge30pXHJcbiAgICB9LCBbXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggY3VycmVudE1hdGNoSWQgIT09IG51bGwgJiYgY3VycmVudE1hdGNoSWQgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TWF0Y2hJZChjdXJyZW50TWF0Y2hJZCkpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LCBbY3VycmVudE1hdGNoSWQgXSlcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIHN0eWxlID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgcHJlZGljdGlvbkJhY2tncm91bmQuc3JjICsgXCIpXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWUgPSBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIGJyZWFrcG9pbnRzID0gW1xyXG4gICAgICAgICAgICB7IHdpZHRoOiAzNzUsIGl0ZW1QYWRkaW5nOiBbMjEsIDAsIDI1LCAwXSB9LFxyXG4gICAgICAgICAgICB7IHdpZHRoOiA2MTYsIGl0ZW1QYWRkaW5nOiBbNzksIDAsIDc5LCAwXSB9LFxyXG4gICAgICAgICAgICB7IHdpZHRoOiAxOTIwLCBpdGVtUGFkZGluZzogWzExNSwgMCwgNDMsIDBdIH0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDEwNjAwKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzbGlkZUNoYW5nZShwKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudE1hdGNoSWQoIHA/Lml0ZW0/LmlkICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnRzPXticmVha3BvaW50c31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzbGlkZUNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlX2RhdGEubWFwKGVsID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lPXtlbC5wcmVkaWN0aW9uQnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9eydwcmVkaWN0aW9uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyeVRpbWVzdGFtcD17bmV3IERhdGUoIGAkeyBlbC5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKSB9ICR7ZWwudGltZX1gICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXI9e2VsLm9yZGluYXJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+IHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHtcclxuICAgIHBhZ2UgPSAnY29tbW9uJyxcclxuICAgIHRleHRQYXRoTmFtZSA9IFwiWW91IGFyZSBkb250IHB1dCB0aGVyZSB0ZXh0LlwiLFxyXG4gICAgbG9jYXRpb25JblBhZ2UgPSBcIlwiLFxyXG4gICAgYWRpdGlvbmFsU3R5bGVzID0gbnVsbCxcclxuICAgIGFjdGl2ZSA9IGZhbHNlLFxyXG4gICAgY2xpY2sgPSBudWxsLFxyXG4gICAgY29udGFpbmVyU3R5bGVzID0gbnVsbCB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24ocGFnZSksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25JblBhZ2V9YCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2FkaXRpb25hbFN0eWxlc30gJHthY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogJyd9YH1cclxuICAgICAgICAgICAgc3R5bGU9e2NvbnRhaW5lclN0eWxlc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGVudH1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUodGV4dFBhdGhOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zdHMgfSBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dSaWdodC5wbmcnXHJcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL2Fycm93TGVmdC5wbmcnXHJcbmltcG9ydCBhcnJvd1N0eWxlcyBmcm9tICcuL0Fycm93Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFycm93KHsgdHlwZSwgb25DbGljaywgaXNFZGdlIH0pIHtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgcG9pbnRlciA9IHR5cGUgPT09IGNvbnN0cy5QUkVWID9cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthcnJvd0xlZnQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd0xlZnR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fycm93UmlnaHQuc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthcnJvd1N0eWxlcy5hcnJvd1JpZ2h0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXJyb3ctcmlnaHRcIlxyXG4gICAgICAgICAgICAvPixcclxuXHJcbiAgICAgICAgc3R5bGVzID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBib3R0b206ICczNXB4JyxcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogJzEwJSdcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0VkZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvL2hvb2tzIFxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IExpa2VEaXNsaWtlRHJvcCB9IGZyb20gJy4vTGlrZURpc2xpa2VEcm9wL0xpa2VEaXNsaWtlRHJvcCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GZWVkQmFjay5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IGxpa2VJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2xpa2UucG5nJ1xyXG5pbXBvcnQgZGlzTGlrZUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZGlzbGlrZS5wbmcnXHJcbmltcG9ydCBmaWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2ZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgdW5maWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZlZWRCYWNrKHtcclxuICAgIGF2YXRhcixcclxuICAgIG5pa05hbWUsXHJcbiAgICByYXRlaW5nLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkYXRlLFxyXG4gICAgbGlrZXMsXHJcbiAgICBkaXNMaWtlcyxcclxuICAgIHJlYWN0aW9uc0ZvclRlc3RpbmdcclxufSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgc3RhcnMgPSBbMCwgMSwgMiwgMywgNF0sXHJcbiAgICAgICAgW3Nob3dSZWFjdGlvbnMsIHNldFNob3dSZWFjdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3B9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJ9IGFsdD17bmlrTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bmlrTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0ZWluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFycy5tYXAoKGVsLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwgPCByYXRlaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtNYXRoLnJhbmRvbSgpfSBzcmM9e2ZpbGxlZFN0YXIuc3JjfSBhbHQ9XCJzdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e01hdGgucmFuZG9tKCl9IHNyYz17dW5maWxsZWRTdGFyLnNyY30gYWx0PVwic3RhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV9saWtlc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpa2VzX2Rpc2xpa2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlrZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpa2VJY29uLnNyY30gYWx0PVwibGlrZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2VzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZlcnRpY2FsX2JvcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UmVhY3Rpb25zKCFzaG93UmVhY3Rpb25zKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpc0xpa2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkaXNMaWtlSWNvbi5zcmN9IGFsdD1cImRpc2xpa2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkaXNMaWtlc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93UmVhY3Rpb25zICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpa2VEaXNsaWtlRHJvcCBkYXRhPXtyZWFjdGlvbnNGb3JUZXN0aW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpa2VEaXNsaWtlRHJvcC5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnMgXHJcbmltcG9ydCBsaWtlSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9saWtlLnBuZydcclxuaW1wb3J0IGRpc0xpa2VJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2Rpc2xpa2UucG5nJ1xyXG5pbXBvcnQgYXZhdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2F2YXRhci5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpa2VEaXNsaWtlRHJvcCh7IGRhdGEgPSBbXSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXIuc3JjfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcGFydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZWwucmVhY3Rpb24gPyBsaWtlSWNvbi5zcmMgOiBkaXNMaWtlSWNvbi5zcmN9IGFsdD1cInJlYWN0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGVhdmVDb21tZW50Lm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9maWxsZWRTdGFyLnBuZydcclxuaW1wb3J0IHVuZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy91bmZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgQUREX0ZFRURCQUNLIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0IExvYWRpbmdCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL0xvYWRpbmdCdXR0b24nXHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGVhdmVDb21tZW50KCB7IG1hdGNoSWQgfSApIHtcclxuXHJcbiAgY29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29tbWVudEJveFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzIGNvbnN0c1xyXG4gICAgICAgIHN0YXJzID0gWzAsIDEsIDIsIDMsIDRdLFxyXG4gICAgICAgIFtzaW11bGF0b3IsIHNldFNpbXVsYXRvcl0gPSB1c2VTdGF0ZSgwKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdjb21tb25zLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgY29tbWVudDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBzdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoIG1hdGNoSWQgKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICBhd2FpdCByZXF1ZXN0KEFERF9GRUVEQkFDSywgeyBjb21tZW50OiBkYXRhLmNvbW1lbnQsIHN0YXJzOiBzaW11bGF0b3IsIG1hdGNoSWQgfSwge2F1dGg6IHRydWV9KTtcclxuICAgICAgICAgIGlmICggY29tbWVudEJveFJlZi5jdXJyZW50ICkgXHJcbiAgICAgICAgICAgIGNvbW1lbnRCb3hSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZXJyICkge1xyXG4gICAgICAgICAgdG9hc3QoIGVyci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IGDQndC10LLQvtC30LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINC+0YLQt9GL0LJgLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHl7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyc19hcmVhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnMubWFwKGVsID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxhdG9yID4gZWwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsoZWwgKyAxKSAqIE1hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZpbGxlZFN0YXIuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbXVsYXRvcihlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyhlbCArIDEpICogTWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dW5maWxsZWRTdGFyLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW11bGF0b3IoZWwgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRhcmVhX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY29tbWVudCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29tbWVudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2NvbW1lbnRCb3hSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ3BsYWNlSG9sZGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdCdXR0b24gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoJ3NlbmQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2FkaW5nQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2VzLCBhY3RpdmVQYWdlLCBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVQYWdlID0gYWN0aXZlUGFnZSA9PT0gZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmVQYWdlID8gJ3RydWUnIDogJ2ZhbHNlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZH0gJHtpc0FjdGl2ZVBhZ2UgJiYgc3R5bGVzLmFjdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Tb3J0aW5nLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNvcnRpbmcoe1xyXG4gICAgc29ydGluZ1RleHQsXHJcbiAgICBkYXRlU29ydGluZ1RleHQsXHJcbiAgICByYXRlU29ydGluZyxcclxuICAgIHNvcnRCeURhdGUsXHJcbiAgICBzb3J0QnlSYXRlLFxyXG4gICAgZGF0ZUFjdGl2ZVxyXG59KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKGBob21lYCksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3Rlc3RpbW9uaWFscy5zb3J0aW5nLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKHNvcnRpbmdUZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnlEYXRlfSAke2RhdGVBY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogbnVsbH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NvcnRCeURhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKGRhdGVTb3J0aW5nVGV4dClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NvcnRCeVJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXshZGF0ZUFjdGl2ZSA/IHN0eWxlcy5hY3RpdmUgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKHJhdGVTb3J0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vVGl0bGUvVGl0bGUnXHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi9BcnJvd3MvQXJyb3cnXHJcbmltcG9ydCB7IEZlZWRCYWNrIH0gZnJvbSAnLi9GZWVkQmFjay9GZWVkQmFjaydcclxuaW1wb3J0IHsgZmVlZGJhY2tfZGF0YSB9IGZyb20gJy4vZmVlZF9iYWNrX2RhdGEnXHJcbmltcG9ydCB7IExlYXZlQ29tbWVudCB9IGZyb20gJy4vTGVhdmVDb21tZW50L0xlYXZlQ29tbWVudCdcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBTb3J0aW5nIH0gZnJvbSAnLi9Tb3J0aW5nL1NvcnRpbmcnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGVzdGltb25pYWxzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX0ZFRURCQUNLIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBnZXRNYXRjaElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvbWF0Y2hTbGljZSdcclxuXHJcbmltcG9ydCBhdmF0YXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvYXZhdGFyLnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0aW1vbmlhbHMoe1xyXG4gICAgcGFnZSxcclxuICAgIGxvY2F0aW9uSW5QYWdlLFxyXG4gICAgdGV4dFBhdGhOYW1lXHJcbn0pIHtcclxuICAgIGNvbnN0IG1hdGNoSWQgPSB1c2VTZWxlY3RvcihnZXRNYXRjaElkKTtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzXHJcbiAgICAgICAgW2ZlZWRCYWNrcywgc2V0RmVlZEJhY2tzXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICBbZGF0ZUFjdGl2ZSwgc2V0RGF0ZUFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1hdGNoSWQgIT09IG51bGwgICYmIG1hdGNoSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0KEdFVF9GRUVEQkFDSyhtYXRjaElkKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHByZWRpY3Rpb25zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGZWVkQmFja3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25zLmRhdGEuZGF0YS5tYXAoZmVlZEJhY2sgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVpbmc6IGZlZWRCYWNrLnN0YXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGZlZWRCYWNrLmNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlczogK2ZlZWRCYWNrLmxpa2VDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc0xpa2VzOiArZmVlZEJhY2suZGlzbGlrZUNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4geyBjb25zb2xlLmxvZyhlcnIpIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21hdGNoSWRdKVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGZvciBzb3J0aW5nXHJcbiAgICBjb25zdCBzb3J0aW5nID0gKHRvU29ydCwgc29ydGluZ0J5LCBkYXRlQWN0aXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRvU29ydC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldFxyXG4gICAgICAgICAgICAgICAgZGF0YUZvclNvcnRpbmcgPSB0b1NvcnQucmVkdWNlKChhYywgZWwpID0+IGFjLmNvbmNhdChlbCkpLFxyXG4gICAgICAgICAgICAgICAgc29ydGVkRGF0YSA9IFtdLFxyXG4gICAgICAgICAgICAgICAgc29ydGVkID0gW11cclxuXHJcbiAgICAgICAgICAgIGlmIChzb3J0aW5nQnkgPT09IFwiZGF0ZVwiKSBzb3J0ZWQgPSBkYXRhRm9yU29ydGluZy5zb3J0KChhLCBiKSA9PiAoYi5kYXRlLnNvcnRGb3JtYXQgLSBhLmRhdGUuc29ydEZvcm1hdCkpXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNvcnRpbmdCeSA9PT0gXCJyYXRlXCIpIHNvcnRlZCA9IGRhdGFGb3JTb3J0aW5nLnNvcnQoKGEsIGIpID0+IChiLnJhdGVpbmcgLSBhLnJhdGVpbmcpKVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5jZWlsKGRhdGFGb3JTb3J0aW5nLmxlbmd0aCAvIDMpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJdGVtcyA9IFtdXHJcbiAgICAgICAgICAgICAgICBzb3J0ZWQuZm9yRWFjaCgoZWwsIHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAoeCA8IGkgKiAzKSAmJiAoeCA+PSAoKGkgKiAzKSAtIDMpKSAmJiBzb3J0ZWRJdGVtcy5wdXNoKGVsKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNvcnRlZERhdGEucHVzaChzb3J0ZWRJdGVtcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRGZWVkQmFja3Moc29ydGVkRGF0YSlcclxuICAgICAgICAgICAgc2V0RGF0ZUFjdGl2ZShkYXRlQWN0aXZlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEFydGlmaWNpYWwgcmVhY3Rpb25zIGRhdGEgXHJcbiAgICBjb25zdCByZWFjdGlvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJMb3JlbSBJcHN1bVwiLFxyXG4gICAgICAgICAgICByZWFjdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJMb3JlbSBJcHN1bVwiLFxyXG4gICAgICAgICAgICByZWFjdGlvbjogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiTG9yZW0gSXBzdW1cIixcclxuICAgICAgICAgICAgcmVhY3Rpb246IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZmVlZEJhY2tzICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoTmFtZT17dGV4dFBhdGhOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluUGFnZT17bG9jYXRpb25JblBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlZWRfYmFja3NfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvcnRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRpbmdUZXh0PXtcInNvcnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVTb3J0aW5nVGV4dD17XCJieURhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVTb3J0aW5nPXtcImJ5UmF0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5RGF0ZT17KCkgPT4geyBzb3J0aW5nKGZlZWRCYWNrcywgXCJkYXRlXCIsIHRydWUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0QnlSYXRlPXsoKSA9PiB7IHNvcnRpbmcoZmVlZEJhY2tzLCBcInJhdGVcIiwgZmFsc2UpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlQWN0aXZlPXtkYXRlQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclBhZ2luYXRpb249e1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRCYWNrcy5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlZEJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtlbC5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pa05hbWU9e2VsLm5pa05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVpbmc9e2VsLnJhdGVpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtlbC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZS5yZW5kZXJGb3JtYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VzPXtlbC5saWtlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzTGlrZXM9e2VsLmRpc0xpa2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uc0ZvclRlc3Rpbmc9e3JlYWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVhdmVDb21tZW50IG1hdGNoSWQ9e21hdGNoSWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vaWNvbnNcclxuaW1wb3J0IGF2YXRhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9hdmF0YXIucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGZlZWRiYWNrX2RhdGEgPSBbXHJcbiAgICAvLyBlYWNoIGFycmF5IGFyZSBuZXcgcGFnZVxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAyLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0ZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxNS4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTVcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDEsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0ZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMS4wNi4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDYtMDFcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDEsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAxLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMi4wNC4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDQtMDJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAxLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMi4wNC4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDQtMDJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5zcmMsXHJcbiAgICAgICAgICAgIG5pa05hbWU6IFwiTG9yZW0gaXBzdW1cIixcclxuICAgICAgICAgICAgcmF0ZWluZzogMyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCAgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9ybWF0OiBcIjEzLjA3LjIwMjFcIixcclxuICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgZGlzTGlrZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICBuaWtOYW1lOiBcIkxvcmVtIGlwc3VtXCIsXHJcbiAgICAgICAgICAgIHJhdGVpbmc6IDUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIxMy4wNy4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDctMTNcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLnNyYyxcclxuICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICByYXRlaW5nOiAxLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBVdCBlbmltIGFkICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZvcm1hdDogXCIwMi4wNC4yMDIxXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Rm9ybWF0OiBuZXcgRGF0ZShcIjIwMjEtMDQtMDJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGRpc0xpa2VzOiA1XHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbl0iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGl0bGUubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaXRsZSh7XHJcbiAgcGFnZSA9IFwiY29tbW9uXCIsXHJcbiAgdGV4dFBhdGhOYW1lID0gXCJZb3UgYXJlIGRvbnQgcHV0IHRoZXJlIHRleHQuXCIsXHJcbiAgbG9jYXRpb25JblBhZ2UgPSBcIlwiLFxyXG4gIHRleHRTdHlsZXMgPSBudWxsLFxyXG4gIGhyZWYsXHJcbiAgY2xhc3NlcyxcclxufSkge1xyXG4gIGNvbnN0IC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKHBhZ2UpLFxyXG4gICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25JblBhZ2V9YCxcclxuICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICB7aHJlZiA/IChcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIHN0eWxlPXt0ZXh0U3R5bGVzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RyYW5zbGF0ZShgJHt0ZXh0UGF0aE5hbWV9YCl9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwIHN0eWxlPXt0ZXh0U3R5bGVzfSBjbGFzc2VzPXtjbGFzc2VzfT5cclxuICAgICAgICAgIHt0cmFuc2xhdGUoYCR7dGV4dFBhdGhOYW1lfWApfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZ0J1dHRvbiggeyBsb2FkaW5nLCBjaGlsZHJlbiwgLi4ucHJvcHMgIH0gKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gey4uLnByb3BzfSB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3sgXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBcclxuICAgICAgb3BhY2l0eTogbG9hZGluZyA/ICcwLjUnIDogJzEnLCBcclxuICAgICAgcG9pbnRlckV2ZW50czogbG9hZGluZyA/IGBub25lYCA6IGB1bnNldGBcclxuICAgIH19ID5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgIHsgXHJcbiAgICAgICAgbG9hZGluZyA/IChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBgYWJzb2x1dGVgLFxyXG4gICAgICAgICAgICB0b3A6IGAxNXB4YCxcclxuICAgICAgICAgICAgbGVmdDogYDgwcHhgXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPExvYWRlclxyXG4gICAgICAgICAgICAgIHR5cGU9XCJQdWZmXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cIiMwMEJGRkZcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgIHRpbWVvdXQ9ezMwMDB9IC8vMyBzZWNzXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDpcclxuICAgICAgICA8PjwvPlxyXG4gICAgICB9XHJcbiAgICA8L2J1dHRvbj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuXHJcbmNvbnN0XHJcbiAgICBoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbiA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYydcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gJ2F1dG8nXHJcbiAgICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTW9kYWwoe1xyXG4gICAgb25DbG9zZSxcclxuICAgIC8vIGNsb3NlV2l0aFZlY3RvcmUgPSBudWxsLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBjb250YWluZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgY29udGVudFN0eWxlcyA9IG51bGwsXHJcbiAgICBvdGhlclN0eWxlcyA9IG51bGwsXHJcbiAgICBwb3J0YWxMb2NhdGlvbiA9ICdtb2RhbC1jb250ZWluZXInIH0pIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2hhbmRsZUNsb3NlXSlcclxuXHJcbiAgICBjb25zdCBub2RlID0gdXNlUmVmKClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9IGUgPT4ge1xyXG4gICAgICAgIGlmIChub2RlPy5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgICAgZGluYW1pY1RvcCA9IHdpbmRvdy5zY3JvbGxZXHJcblxyXG4gICAgc2hvd01vZGFsID8gaGFuZGxlX292ZXJmbG93X29uX29wZW4oKSA6IGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSgpXHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbENvbnRlaW5lcn0gJHtjb250YWluZXJTdHlsZXN9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRvcDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkICFpbXBvcnRhbnQnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbENvbnRlbnR9ICR7Y29udGVudFN0eWxlc31gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e290aGVyU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtub2RlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBpZiAoc2hvd01vZGFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcclxuICAgICAgICAgICAgbW9kYWwsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcnRhbExvY2F0aW9uKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuIG51bGxcclxufVxyXG4iLCJleHBvcnQgY29uc3QgaG9zdCA9IFwiaHR0cHM6Ly93d3cuZm9vdGJldDI0LmNvbS9hcGlcIjtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0gKCBkZXN0aW5hdGlvbiwgcGF5bG9hZCA9IG51bGwsIG9wdGlvbnMgPSBudWxsICkgPT4gbmV3IFByb21pc2UoICggcnNsdiwgcmpjdCApID0+IHtcclxuICBsZXQgaGVhZGVycyA9IHt9O1xyXG5cclxuICBpZiAoIG9wdGlvbnMgKSB7XHJcbiAgICBpZiAoIG9wdGlvbnMuYXV0aCA9PT0gdHJ1ZSApIHtcclxuICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoYGFjY2Vzcy10b2tlbmApfWAgfHwgYGAgLy8gZm9yIG1vc3Qgb2YgcmVxdWVzdHNcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICggYGhlYWRlcnNgIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzIGluc3RhbmNlb2YgT2JqZWN0ICkge1xyXG4gICAgICBoZWFkZXJzID0geyAuLi5oZWFkZXJzLCAuLi5vcHRpb25zLmhlYWRlcnMgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coIGBzdGFydCBsb2FkaW5nYCApO1xyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogZGVzdGluYXRpb24ubWV0aG9kLFxyXG4gICAgdXJsOiBkZXN0aW5hdGlvbi51cmwsXHJcbiAgICBoZWFkZXJzLFxyXG4gICAgZGF0YTogcGF5bG9hZCB8fCB7fVxyXG4gIH0pXHJcbiAgLnRoZW4oIHJzbHYgKVxyXG4gIC5jYXRjaCggcmpjdCApXHJcbiAgLmZpbmFsbHkoICgpID0+IGNvbnNvbGUubG9nKCBgZW5kIGxvYWRpbmdgICkgKVxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gbmFtZSA9PiB7XHJcbiAgdmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcclxuICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGMgPSBjYVtpXTtcclxuXHJcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPTsgUGF0aD0vOyBFeHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKG5hbWUsIHZhbHVlLCBkYXlzKSA9PiB7XHJcbiAgbGV0IGV4cGlyZXMgPSBcIlwiO1xyXG5cclxuICBpZiAoZGF5cykge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgKHZhbHVlIHx8IFwiXCIpICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG4iLCJpbXBvcnQge2hvc3R9IGZyb20gXCIuL2NvbnN0YW50c1wiXHJcblxyXG5jb25zdCBBVVRIX1VSTCA9IGhvc3QgKyBgYXV0aC9gO1xyXG5jb25zdCBBQ0NPVU5UX1VSTCA9IGhvc3QgKyBgYWNjb3VudC9gXHJcblxyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArICdyZWdpc3RyYXRpb24nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ2xvZ2luJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ2dldCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lORk8gPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdpbmZvJyxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9JTUFHRSA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ3Byb2ZpbGUtaW1hZ2UnLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTVEFSVF9SRVNFVF9QQVNTV09SRCA9IGVtYWlsID0+ICh7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9yZXNldD9lbWFpbD0ke2VtYWlsfWAsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVkVSSUZZX1BBU1NXT1JEX1JFU0VUID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvdmVyaWZ5X2NvZGVgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9ORVdfUEFTU1dPUkQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9uZXdfcGFzc3dvcmQgYCxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTkVXUyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYG5ld3NgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbWF0Y2gtb2YtdGhlLWRheWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBtYXRjaC1vZi10aGUtZGF5P3R5cGU9bmV4dF9kYXlgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUkVESUNUSU9OUyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYHByZWRpY3Rpb25gLFxyXG4gIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GRUVEQkFDSyA9IGlkID0+ICh7XHJcbiAgdXJsOiBob3N0ICsgYGZlZWRiYWNrLyR7aWR9P3NvcnRfYnk9Y3JlYXRlZF9hdCZvcmRlcl9ieT1kZXNjYCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVNfQllfVFlQRSA9IHR5cGUgPT4gKHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYGdhbWU/dHlwZT0ke3R5cGV9YCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQUREX0ZFRURCQUNLID0ge1xyXG4gIHVybDogaG9zdCArIGBmZWVkYmFja2AsXHJcbiAgbWV0aG9kOiBgcG9zdGBcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRldGVjdERvbWFpbkxvY2FsZT1kZXRlY3REb21haW5Mb2NhbGU7ZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkl0ZW1zLGhvc3RuYW1lLGRldGVjdGVkTG9jYWxlKXtsZXQgZG9tYWluSXRlbTtpZihkb21haW5JdGVtcyl7aWYoZGV0ZWN0ZWRMb2NhbGUpe2RldGVjdGVkTG9jYWxlPWRldGVjdGVkTG9jYWxlLnRvTG93ZXJDYXNlKCk7fWZvcihjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKXt2YXIgX2l0ZW0kZG9tYWluLF9pdGVtJGxvY2FsZXM7Ly8gcmVtb3ZlIHBvcnQgaWYgcHJlc2VudFxuY29uc3QgZG9tYWluSG9zdG5hbWU9KF9pdGVtJGRvbWFpbj1pdGVtLmRvbWFpbik9PW51bGw/dm9pZCAwOl9pdGVtJGRvbWFpbi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7aWYoaG9zdG5hbWU9PT1kb21haW5Ib3N0bmFtZXx8ZGV0ZWN0ZWRMb2NhbGU9PT1pdGVtLmRlZmF1bHRMb2NhbGUudG9Mb3dlckNhc2UoKXx8KF9pdGVtJGxvY2FsZXM9aXRlbS5sb2NhbGVzKSE9bnVsbCYmX2l0ZW0kbG9jYWxlcy5zb21lKGxvY2FsZT0+bG9jYWxlLnRvTG93ZXJDYXNlKCk9PT1kZXRlY3RlZExvY2FsZSkpe2RvbWFpbkl0ZW09aXRlbTticmVhazt9fX1yZXR1cm4gZG9tYWluSXRlbTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXRlY3QtZG9tYWluLWxvY2FsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJcbiAgICBpbXBvcnQgX19pMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4gICAgaW1wb3J0IF9fbG9hZE5hbWVzcGFjZXMgZnJvbSAnbmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXMnXG4gICAgXG5pbXBvcnQgTWFpbiBmcm9tICcvY29tcG9uZW50cy9QYWdlcy9NYWluL01haW4nXHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiA8TWFpbiAvPlxyXG5cclxuSW5kZXhQYWdlLmxheW91dCA9IFwibWFpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG5cblxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC4uLihhd2FpdCBfX2xvYWROYW1lc3BhY2VzKHtcbiAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICBwYXRobmFtZTogJy9pbmRleCcsXG4gICAgICAgICAgICAgIGxvYWRlck5hbWU6ICdnZXRTdGF0aWNQcm9wcycsXG4gICAgICAgICAgICAgIC4uLl9faTE4bkNvbmZpZyxcbiAgICAgICAgICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbWF0Y2hTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgbWF0Y2hJZDogbnVsbFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0TWF0Y2hJZDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUubWF0Y2hJZCA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldE1hdGNoSWQgfSA9IG1hdGNoU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1hdGNoSWQgPSBzdGF0ZSA9PiBzdGF0ZS5tYXRjaC5tYXRjaElkXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXRjaFNsaWNlLnJlZHVjZXIiLCIvLyBpY29uc1xyXG5pbXBvcnQgYXRsZXRpY29JY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLnBuZydcclxuaW1wb3J0IGJhcmNhSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYmFyY2EucG5nJ1xyXG5pbXBvcnQgcHNqSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHNqLnBuZydcclxuaW1wb3J0IGF0bGV0aWNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nJ1xyXG5pbXBvcnQgbWFyY2VsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLnBuZydcclxuaW1wb3J0IHJlbm5haXNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZV9kYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTEnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogXCLQntGA0LTQuNC90LDRgFwiLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWUyJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CR0LDRgNGB0LXQu9C+0L3QsCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwi0K3QutGB0L/RgNC10YHRgVwiLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcyNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTMnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JzQsNGA0YHQtdC70YwnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxODAwINGA0YPQsS4gJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWU0JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWU1JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lNicsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLidcclxuICAgIH0sXHJcbl0iLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy4yODM4MjBmZDI2YWUzMDg1NDJjNDk5ODc0N2Y2ZjE1MC5wbmdcIixcImhlaWdodFwiOjYzLFwid2lkdGhcIjo1OCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBNlVsRVFWUjQyalhLdjJyQ1VCZ0Y4RHY0TW9XK1I0Zk9oVDVMN1JnWE42RkxDNUVVSEJwcTBnNFhHa1d3NG8yNVhOQWhFQzVKTUxtS1VmRFBvS0FJMGUvVERQNld3emtjRXNkeDd2cytjczVCQ0FGQkVJQVlqZkM2QVZGSzdaSWt3U2dNd2ZVOGtGS0NheGlvMG5SUEdHT3hydXY0cW1sbnE5R0E5WTk5bmxDS1RxZVRrTVY4Ymw0UCtGV3RuamJOYnpqYTlpbUxJaHdyWlJGUGlLZlpkSXFyai9jY2UvKzRyTmZ6UlpiaGdQTm5VaGlucVpEOVBtNC9qVVBRN2FJTXd5RzUwU3FWTzZmZFBqREx3bDlLankvbDhqMHBNTmN0RmRrMHpRZmFhdVZ2dGRwajBmOGNwM1FCV2Z5Ymo1MCtjb3NBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28uMmNlNzVlMjExNjJlMmU2ZGM0OGI5OWU2MDE4MTA3ZTAucG5nXCIsXCJoZWlnaHRcIjo2MixcIndpZHRoXCI6NDcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQTAwbEVRVlI0bkFISUFEZi9BV3h0aHNUZTMrY3g4dlA2Q2d3S0JBQUdCd1gyQmhBT3p3R0RoSmIvTnpZdUFOemM0ZjhFQndjQXlNZlNBUkRpNFFBQmo1Q2cvQkVRRFFMNy8vOEJ2S3ErQUh0OFh2L2pyNnYvQVdocGd2MzE5dmtDTURFbC95Lzg3QUF5UzBnQnc2V3Evd0ZlYUlQL0p3SDIvVmxXUkFQKyt2b0FDQk1UL2RDd3N3TUJub1dPOVU1UVJRcnQ0Ti84L3Y3L0FCRWRIUVRGc0xiM0FZMlRvVEFvQnY2bUpTQVlLUUFBQUFEYzRlall5djRLV3dGcUkwWUFsdDI2QnJtc3Nyc0FBQUFCUjFST1JWVW9VZmwrbFZ0clNUQ3k0UUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvYXZhdGFyLmJlMDZiZGMwNTQzMGY1Y2RjZmI4NGY3YTllNTQyMTEzLnBuZ1wiLFwiaGVpZ2h0XCI6NzUsXCJ3aWR0aFwiOjc2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjRWxFUVZSNDJoMkd2UW5DQUJRR3YwbjhJMDZnOCtnWU9vMjIybGdJV29xa0V4RWJjWVpva2VTK0FmTHlDQWQzSjR2Q0paSGNtVm55eEgrQ0ZldDB4VWljSFR3c3hEUHZKRnBIenM3N29iV0E0TUtHTFZlQ1JwUjhMSkwwbDV1WTh1UEFncVdQVkl5Rm1QT21TMTRVcUFkdHltSDNUZkZ6MFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2Rpc2xpa2UuODNjYzc2MjQ3ZGQ0NzNhYjJiYjM3NWZjZTI1YjkzMWYucG5nXCIsXCJoZWlnaHRcIjozMixcIndpZHRoXCI6MzAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVprbEVRVlI0MmozTHNRc0JBUUNGOGFlNEZMT3dtR1FRbVV5WFFjbHd3NG5oSmtwaHRQdm5mNUhoWG0vNHZ1R0xRdVhpckhaM2RZdFNiV0JzYXA2bzRtV1VkdmJ4YUdXbTBNVFQya2Jmd3NmSk1TWldHanVWWGx0YU9pZ1RYWjM4SGtOdjIvejVDOVUrTjJ6MHJHQW5BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9maWxsZWRTdGFyLmI0NGFhODEyZGNiZjllYjE0ZTY0YWY2YzhlNzI3OWIzLnBuZ1wiLFwiaGVpZ2h0XCI6MjYsXCJ3aWR0aFwiOjI4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUFoVWxFUVZSNDJtUDRkOXFJRVloWkdZRGczeGxqUFNBMlp3QUNvQmdiRURNeElBT2dRQ3NRejBFWE5BRGlUQ0FPQXVMYi84NFl2UUhTb1VDY0FjUVdJQVZDUUR3YmlQLy9PMjM4SDJqRkh4QWJpRmNDc1JTeVNYMUFTYUFDc09ReVZHdE82RE1CQlc4QThRb2duZ25FejRBS2VlRUtnQnh0b0dBdWttbXBRR3pKd01EQUFBQVVEbDFrNWJPNWVBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9saWtlLjE0MzJkOGQ0YzA3NDM3Yjk0NjdjNTI1OWViOTRiMWRjLnBuZ1wiLFwiaGVpZ2h0XCI6MzEsXCJ3aWR0aFwiOjI5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBUUFBQUNmRFMyTkFBQUFYRWxFUVZSNDJqWExyUXJDQUFCRzBVK0gxU0EydzZKV3NZay95V1lRQkpWaFdkakNHT3o5eTJGaDdPUjdNekc0SllwWUp0YWU3cGs1dUtvY2xmSHcwVnM1T1d2aWJhdWNLcS9NajBXaWprdGlvMGpzL0tMejFhdjh0ZllqNjRFdW1PTEZNM3dBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvdW5maWxsZWRTdGFyLjI2MTA1YzVkNGU3ODM0ZGU3OTdlZDczNDUwNWVlMmJmLnBuZ1wiLFwiaGVpZ2h0XCI6MjYsXCJ3aWR0aFwiOjI4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUFma2xFUVZSNDJsMk5zUXFEUUJCRU55RjZUVklHVXFaTkZ4Q0xFd1d4VUJIQjNrWUw4VGM5ZjJ6eDJTMHVQR1pudUpzVkRlNm1JWDRJb3lINnMzdGhsQXp1WW9kZ2dQRVN1b1N3MXMzbDdBVmt1c1VsV29FL2YzMWd3WlNteWVOWDlHdnJlM2pxSGptMHU5NSt3UVF0TkREVDhMWVBmZ1N6OFNNK0ZSRTVBSXd2UjBxREpDL21BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvQ2FsZW5kYXIuZTYxOGRmMzM4N2VkMTIzYjY1MWQ0ZWYyYWY5MTdmZTIucG5nXCIsXCJoZWlnaHRcIjozNCxcIndpZHRoXCI6MzQsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWEwbEVRVlI0MmczTHV3cUNBQlFBMFBzTC9VRkxjMU1RRllSaUlqMHNlaEExbVlvTkVmYi93eUU1OHdrVHZhdld5OTNQSkpUT01rY0h1WXN5Tk5KQlppT3gxb1ZjNTZGUmUvcEtRdXJ0cGxacDdkVmhyVmZwN0l5TmZFSWhNV3h6SnpONXlDd3NyVXdWdHVaL1RpNVMwS28yUDlFQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hcnJvd0xlZnQuZTIzNzJhMGM3OGQ4YzZiMjQ2YmRlZTNmZmFiNDBmN2IucG5nXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTQwbEVRVlI0Mm1OWXNHQ0IySUw1ODQzbXo1MW5zbURoUXFQNTgrY2JBOFgwZ0ppWEFTUUJaQmd2V0xWQ2QvNjBHUmJ6Wjg4eG1UOXZ2aGxRVEowQnBITGhudTJxOCt4alo4eExMNHRkL1BxK0JOQUU0L256NW1reExOaTZTWDJ1WmRTeWVWemVIK1k1eEUyZlp4VzFhSDVEdTllQ05hdFVHQlpzV0tzMUx6aWphaTZ2ejZONUFabGw4K0lLMHVmM1RuUllzR3lwR3NQOE9YTk5GNTQrb2pBdkxMdDRYazVsNUtLYjUyVWd4czdYWmdDNURPZ0lpd1ViMTJrRFZSdk9uelhiZlA3OCtlWkFjV1dRSkMvSVpVQUZPdlBuenRVQ3NyVVd6Sit2c21EQkFqWUFqVFZ4Uk0zZW43OEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXJyb3dSaWdodC5jNmQ2ZDllMTIyMmM0MThmNjBmYmI4MTk0ZDA4YTgyMy5wbmdcIixcImhlaWdodFwiOjM1LFwid2lkdGhcIjozMSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBNEVsRVFWUjQyaFdPdlVvRFFSU0Z6NzB6cyt2S0pxWVJ3VmdLUXNUQ2g3QXpoYlhWb3E5ZzRaTllhTEdOSVBaV0FhdFVhZE9GUUFLQkZFbUtoTTBQbTJUdXphVDQ0SEQ0aW8veVBEOEhVQS9RRWZYZWtERWxnQUVEdUZJUnA5dWRVeTlNdGNvNkNBbUFTdzZIb1NRdWJmWTAwTC9PZzN6L04vbjJlbnFVTGRYU2piUzdEZmxxWlNoOXJPMVo1cU5mTmErUFB3eFJ3TEZITlY0Z1lxR1VDNXlHWFc0Tm8xaWQ4UDFOMzM2K2YrQ2kyc056NDgyOE5GczZucVFVYXU5VUpNRnV6M1JXMmNDeTZMeEl5Ym1aQlRBa29ycEd6dWh5RFFCRTFrNUpNVG9BY1JOY0VleDBsMGdBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5lYjQ2MDQ4NjRjZTI0MDFhYTI0ZmI0ZWQyNzFmNmU4My5wbmdcIixcImhlaWdodFwiOjUzLFwid2lkdGhcIjo0MSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFZQUFBQUlDQVlBQUFEYXhvNDRBQUFBdFVsRVFWUjQybU9vbjdPRmxRRUk3aTVuMEgyNGdrRWR4RzZjc3drb0JnTFRicmphekxnUWF6SDlZZ0tRYlE4Um5INmRuM242dGYxQWdVNkdhZGVuQU5uYmdUUVhVUFcxYmlCZUR4Ull3VFR0K2xxZ3dqVkFpVllHb09CMklGNEV4QmVCQXVjWnBsOWJBbVJ2WmhDYWZtMkQ0UFJyaS9tbVg1c0JaUGNLVEwrMkRvZ1hBSFhjYVdHWWRydVhZZXFkVUlhcGR3T0I3TWxBWE1ld1luNWY5dDVGbVI0ckYzUTdyMTNRNXJWM1VaYlRvdmxUWWdBRlpWZkFldVpXUFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLmQ3ZjU5NzMwNDk0NzQwMGZiMjBmMDVlMmRhZTZiNWZiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE2a2xFUVZSNDJtUFkzY0dqa2VIUGVUZkVndUhjVmdPRy9jK0R4Sys5U0ZZOSsyMkRnQUREdWpZOWMzVUdodjlIcTZ2L0gxKzY1UC9hcExUL1Qyd1lQdjdZNEN6QjBGYXE1cC9Jd1BELzE4SDl2eDlkdS9wbjlhcFYvMjdyTWZ6OE05Tk5sNkU2WHFxWGdZSGgvNjIrcnQrN2Vydi9MNnV1L3ZOUW11SC82d3FEVklaY2Y0RXR5c2JtLzkxTURINXY4UFA4L3pqWTg5ZlRZTy8venpOVStoZ2FFM2dtT0prWi9XZXdkUGkvSThqbjk5dW84UCtQdzkzL3Z5NlR6V0Q0ZjQ2Qm96V0dvVi9hZ09ITFJoMkIvNi85WkY4L3kyYW9aRUFHdTZhSXE1MnVrT241ZjBCZkdDWUdBTlpLWnNGYzIxdkhBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dMZWZ0LmQ2ZDUwZmZhY2UzMjIwY2FjZWU4OGNkNWU1NTU2MDFhLnBuZ1wiLFwiaGVpZ2h0XCI6MzUsXCJ3aWR0aFwiOjMxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUF6VWxFUVZSNDJtUDQvLysvOEw5Ly8vUi8vL3hsQkdRYkFObUdRRm9IU0hNekFBbUR2My8rbUlJRWZuMy9ZZnJ6MjNmVHYzLy9tZ0g1Nmd4L2Z2ODJCaktVdGhXMWRaNmF2em9KeUJZSFlpT2dCaDBHSUVOdFUzYjk5SGtNbmg4MnA5ZE4zSlJTUGVYQmlYTmVRSEZWa0tUR250YkpkUXNFL0ovdHF1bHQyTjg1dmZ6NXRWc3VJRTBNdjMvK05BVXlGUGExVDZzNHYzSnpOSkF0Q1RWV213SElBTHIwcHptUTFnWml3NS9mdnBuLysvc1h4RmNGdVpZZnlORDY5ZU9IM3AvZmYzU2czbEQvOSs4ZkJ3Qmo5cVBQais0N2tnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL25ld3MvYXJyb3dSaWdodC45MTFmYzllODRlMDQ0NjM3ODBhM2I3NTkxOGE2NTVhNy5wbmdcIixcImhlaWdodFwiOjM1LFwid2lkdGhcIjozMSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBeVVsRVFWUjQybVA0OSsrZk1CRHIvZi8vMytEZjM3OEd2My85TWdLeWRZQmkzQXdnd2I5Ly9waisrUHJORE1nMkJrbjgvdm5MQWtpck1mejUvZHNFeUFEcEZOM2ZOcTMweU9TRjJVQzJFbEN4TGtpbjl0VmRCOEoyTlBSMmJpMXBuVGlmemVmdDhWbkxRQW9Vd0pKWGR1MFAyOW5ZMTc0eHUzYk9mRWJ2RHlmbnIwb0hpaXVDakFYWm93dkVZb2Nuek1zN3ZYaHRBcEN0L1BQYmR6MlFUajJnZzh5K2YvbGlBWEljU09Idm56OHRnYlFxQTlESi9FQ3NCWGJscjE4Z0NaRGoxUC85KzhjQkFKeTlvK2pDWFdkQ0FBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbmV3cy9mb3J0QmFjay4yZmFjNGE1M2YwNmUwZDdiNTA4ZDAzOTU4ZDZjMTFhZi5wbmdcIixcImhlaWdodFwiOjMyNCxcIndpZHRoXCI6MzcyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUE4a2xFUVZSNG5BSG5BQmovQVdtTlZjcVhCTWdCYVFvOEFQWFQ4Z0FMRkFnQUJRZ0hBTkRPNFFBdUt5d0FBV09DVU16MERBNEEzTjNkQU0zaTFnQkVMRFlBRlAzOUFPN205Z0ExTVVRQUFYeU5aOHNsR2d3QTNxYU5BQ1JDWkFEZTN0Y0E4eFFxQUNBbU5RRHk4KzRBQVZadk9zdlA1dGdBbkdLYkFENGRBUURTcEtBQW5Pc1dBT3NOOEFEcjg5UUFBVnh2V2NzakZ4OEFVVHhHQU95OHBBQytwN3NBSXlnREFJZ0FCZ0FTL1FjQUFWeGtXOHpuOXU4QWdUOG5BTnUreHdDanFjZ0FIeW9UQUovOENRQWEvUG9BQVVwWk1Na0IvZm9BRHYvekFCSDJCZ0NXemVvQUFQY0FBQXNBQUFENUJRSUFXN0ZXRG1xMUkzc0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL25ld3Mvc2VjQmFjay4wY2VkODk1ODYwNTYwYTkwM2ExYzZiYzMzZjgzNWFmMy5wbmdcIixcImhlaWdodFwiOjMyNCxcIndpZHRoXCI6MzcyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUE0MGxFUVZSNG5BM012VXJEVUJpQTRmZXpUZExCZG1oTlFFb25CUmNkeEtVRUJ4Y244UzVjM2QxRXZBSGR2UUd2b1lpcjJLQzRkTEtqQkJLdHBDWE56MG5PYWZhSFIwNmZYdDR2VDF4cGJjRnZaUWhMdzErcFNYSWhuczJRMitmWHdELzBTUE1LUlUzV3dKOGE1aVg4TjFBZUp4L1R6M25DVjVnejNPbHlQTEx4ZDV0Qnd5U3lrUEhWemZTdDZIQTMzc2MvNkZIVkNxMUtGbUdIVEsrUmk3Tzl3RGl1R1F3OTNHNENTc2hMUlJ4cDdQWUt1WDRZQlpaZG1LV094R1I5V25YUEZHc3QvZnpJTEdKSDVQeStGUlNxYlhTNWpWNDZwS2xGL0owd3dHTlZaR3dBTFJCcjViTlorVGtBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9uZXdzL3RyZEJhY2suMTYzYmQzOTVlYWFmMGM5ZDVkMjUzZWFkOTliYWJjZmQucG5nXCIsXCJoZWlnaHRcIjozMjQsXCJ3aWR0aFwiOjM3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBMlVsRVFWUjQyZzNOc1U2RFVCUUc0UC9BZ1Z2b3BSQVdhMHkwd1VRSHU1dVlPRHI0d0RVT09qcDFOVWJISnFZeHBOQlN4TkplTHNkK0wvRFIwK3g1YnJ1T2hsRXNMbnV3dlVBUGZEQXpyYW8vNGJmWEdhMnJSa0lHMVp0YXNza1lWbHpxS0JCV1RFNitYTWpEZVVXZWFXVjhjWU5NOTdpa0wvbisvS0JzK3lMTzdiMUNFT1J5ZlhlQ3EybUcxblBScEFyVHgxZ1d2d1pPVVRhWUh6U0M1QlJwWWxCMDc1RFJFRkVxOENkbjRBUDVwSk1CeW1LSnJWUENNcU5YTHZaVkR4Mkg0THplMkhWTHgyWUZwVVlJb3dSMXM4UGVHTWpQRHY4MTlsek5TTU85Z0FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd0xlZnQuYWQ3ODk3NmU2MzMzNzc4YTIwN2M4YjQ2NDBjMDI5ZWIucG5nXCIsXCJoZWlnaHRcIjo3MDQsXCJ3aWR0aFwiOjEyOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUlDQVlBQUFBNEdwVkJBQUFBRjBsRVFWUjRuR1A4OSsrZklJZ1FBaEZnRmhvQmtRQUE4d3dZWThoVk94QUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dMZWZ0VmVjdG9yLmQ4NDU4ZGFkYTM2N2Q4MTU1ZTcwZjMxZjMzZTdmNTFmLnBuZ1wiLFwiaGVpZ2h0XCI6MzgsXCJ3aWR0aFwiOjQyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUFqMGxFUVZSNDJtUFl5T25PdkluVG5aMEJDRFp5ZWl3QTRxOUFMTThBQkpzNFBWZ1prTUZHTHZjUUlQNFBWUEFNaUpVZ2dwenVia0NWaVVBY0QyVDdBdkhtVFFoRlpneEFnVDlBU2FBQVVCQklROW5md0lxNFBHNHpBSTFVQjNKc2diUTFrTllGNGsyYnVEeEFpcThDeFdRWllBRHFxSHlvNUNVZ0ZvUTVqQW5vQ3phb2UxcUIrRHhRa2gvcUt4WUFoREZEbGl4YWlqb0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYXJyb3dSaWdodC5lOWRiYTc4NTc0NzQ5MWFjYjc5OThjYmJiNzQ2ZjRjNi5wbmdcIixcImhlaWdodFwiOjcwNCxcIndpZHRoXCI6MTMwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBSUNBWUFBQUE0R3BWQkFBQUFGMGxFUVZSNG5HUDg5KytmSUlnUUFoRUlGcGhBY0FVQjh6RVlaWUo4WUlFQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9hcnJvd1JpZ2h0VmVjdG9yLjA2ZDhhNTE4NzRjMTgzZWNkOTE1N2IxZTQwY2MwMDBiLnBuZ1wiLFwiaGVpZ2h0XCI6MzgsXCJ3aWR0aFwiOjQyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUFtRWxFUVZSNDJrMk9QUW9DUVF5Rmc3OHdLY1FEaUdCalpXMGgxa2xqYVMyZXdGdDREaStRS2ZRa0NuYldld1B0WlB4a2QyRWZQQ2E4NzRXSlJMS2hvRkNiTTcveFJWQk9QczdKK3RMQUJhQUs5UkxKOTlJVllFMmhZcVB3M3JMYUxxc2YyRDZTbVJDK2F1Z2ZZUGtiMlBvcmdCbWxaeE5jS2EvSU5ueTFKVisyTjB6eEEwakpUdElWWUZDL1BtRys0N01nN2hpRld1OEh3WEJESUNQUE8za0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYmFyY2EuNzVmOWUyMzBiZWI3OWUyODJkN2EwZjM2OWE2ZTY2NmUucG5nXCIsXCJoZWlnaHRcIjoyMjMsXCJ3aWR0aFwiOjIwNixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBODBsRVFWUjRuQUhvQUJmL0FaK0ZRRE1TR1J3cEJmZndHZkVBQU5jTTljMHQrQUlSM2ZuOEg4NEJzcDVhYkNzT1BKTUMzdklBQVN6ekFBZnBoUUR4QlNnQXovYzVRQUdZbUZ3MlJRQTV5UWZWOXZ3SVNmVUJCZTJBQStyN011d2w5bU1tQWN1a01hUWhJMFJiNStQMS9mY0Ird0lIOFp2L0dCc0FBdFRrUDNRQnBJeFdzdlhXQWszOUJBRDdDeEh3Qk8zbUgvc09Gd0VHRWlUM2d3R05oMTVyOTdrT2xBRVFCd0JEVnRMK3NYc3RBaEU1K0FBaFR3dzdBUUQvQUFHMGd5K1E1ZkkwWHhBSDhnL3krZzNwSlI3aGh1OXR2WklCbnFZdUFCN0cwZ0FWU2dBWThPcEROakZPT3IzTmpJUDE0NFlBQUxtellrVE81cWpRQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3ByZWRCYWNrLjMyYTg5NjkzZTU2NGI2OGNhNGE3YWIxZDdlMjFkMjRhLnBuZ1wiLFwiaGVpZ2h0XCI6NzA0LFwid2lkdGhcIjoxOTE5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRENBWUFBQUN1eUU1SUFBQUFia2xFUVZSNG5BRmpBSnovQVRrK1Z2NFVHUXNBOS9qdEFQdjYrd0FEQS80QUZ4a2lBUEh1OXdDNnJhWUFBVE04VlA4bk1TNEEvUHI5QU8vcTV3RDE4TzhBSFNrbEFPVGExd0RNdk1NQUFUY3pQdjRwTmgwQUd6QVFBQjRaQ2dEczdlNEF4TFB2QU5mUTZBRHg4L0VBUUE4cmRTdnZKS29BQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3Bzai5jZTRhYzMxOTZiOTAxMjgwY2RkYjliN2UxN2M0ODVmZS5wbmdcIixcImhlaWdodFwiOjIyNSxcIndpZHRoXCI6MjI0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUJBMGxFUVZSNDJtT0FnZUxKdXlLYjUreGYwckh3NEt6OENUdHNRV0tkOHc4d2dpVW5yVG8rZCtiYUUvL25iano5Zi9xYUUvOG5yVGo2djIvWjBSeXdaTU9jL1NrNTdSdi9GMHpmKzN0ai81cmZjeWR2L2xVK1krLy85TmFOLzVmdHZxVERVRHh4eDJhZnZDWC9HU3JYLzNsWjN2SC9RUG0wL3d4bGEzOUhsQ3ovMzcvc2FBbEQ5ZVNkYStYeWx2OC90bURyNzlzTlBmOGY5Yzc0djNEYTFsOG1CY3YvejF4OVBKOWh3dElqQVdHTkcvN1BuN0Q1Zi9IRWRiK256Tno4cTYxbDNmK1U3cTNmRHB5K284QUFkdTNDZ3pXeDNkdit4elJzK0ovWXRlMS83dVJkMytlc094bklnQXptcmpsdTJybGdmMVhmb29ORm0vZGVBdXZNNzlyTUJBQTRCSW02SEduaUF3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3NsaWRlQmFjay5iMDliNWIyNDNmMjc3ZDhmYTcxNDIxZjdmMTMyNDUyOC5wbmdcIixcImhlaWdodFwiOjMyNCxcIndpZHRoXCI6MzcyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUExa2xFUVZSNDJnM0Z2MDdDUUJ6QThlL3Z2QlpzenNTZ1JVVVQ0cC9CeWNUZEozRDNnWHdYRnhOTmpJdlBvS01EQ3dNaEpDS0lBZHJTY29YZXdXZjV5UDNqMDlmcHZwRzdhSTRPNGZxaVNlczRaclhNS0ozeVNrU3JuMkpiUFpEdnp3K1pKTG5ZbFpNcytSY2Q3aXJkR2FTK2h5T2FEcmhxMy9MODlnNnFvbmw0UWpKNVJmZG1LWmlRZERpa1Avb2phclRZcWRVWTJRb2JIS0hiblJkK3g1YTloeHZPTHMrcGh4RUNlSVFpRDlEeHdWaGk0N0ZobCs2OGp6Z1FCZXV5eE9ZbDJqUk1aYk1LNVlUMXd1TzM0OEVXd25MaDJRREZLbGRabjZ5QTFnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFycm93TGVmdFwiOiBcIkFycm93X2Fycm93TGVmdF9fMUh2aWpcIixcblx0XCJhcnJvd1JpZ2h0XCI6IFwiQXJyb3dfYXJyb3dSaWdodF9fMTByTnVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkdhbWVSdWxlc19jb250YWluZXJfXzM4ZWxlXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIkdhbWVSdWxlc190cmFuc2l0aW9uX18zUkxaU1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUGFnaW5hdGlvbl9jb250YWluZXJfXzNpY1hnXCIsXG5cdFwicm91bmRcIjogXCJQYWdpbmF0aW9uX3JvdW5kX18zNnlmeVwiLFxuXHRcImFjdGl2ZVwiOiBcIlBhZ2luYXRpb25fYWN0aXZlX18yTWlSTlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUGFnZVBhcnRpY2FsZXNfY29udGFpbmVyX18zZXBzc1wiLFxuXHRcInRpdGxlXCI6IFwiUGFnZVBhcnRpY2FsZXNfdGl0bGVfX1VwRXlOXCIsXG5cdFwiYm9keVwiOiBcIlBhZ2VQYXJ0aWNhbGVzX2JvZHlfXzFoTkFGXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTbGlkZVBhZ2VzX2NvbnRhaW5lcl9fM1ppMUVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhlYWRlcl9jb250YWluZXJfXzNaZG1jXCIsXG5cdFwidGl0bGVcIjogXCJIZWFkZXJfdGl0bGVfX1pSSjg5XCIsXG5cdFwiYnV0dG9uc1wiOiBcIkhlYWRlcl9idXR0b25zX18xN3ZmYlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTWF0Y2hlc19jb250YWluZXJfXzJLYTJ6XCIsXG5cdFwiY29udGVudFwiOiBcIk1hdGNoZXNfY29udGVudF9fMVBRX0VcIixcblx0XCJpbl9zZXBlcmV0ZV9wYWdlXCI6IFwiTWF0Y2hlc19pbl9zZXBlcmV0ZV9wYWdlX18yLV9GcFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXJyb3dMZWZ0XCI6IFwiQXJyb3dfYXJyb3dMZWZ0X18zR3RBNFwiLFxuXHRcImFycm93UmlnaHRcIjogXCJBcnJvd19hcnJvd1JpZ2h0X18zMzI5bFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUGFnaW5hdGlvbl9jb250YWluZXJfXzJzeEx4XCIsXG5cdFwicm91bmRcIjogXCJQYWdpbmF0aW9uX3JvdW5kX18xZElsUlwiLFxuXHRcImFjdGl2ZVwiOiBcIlBhZ2luYXRpb25fYWN0aXZlX18zWElTc1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVERNYXRjaGVzQm9hcmRfY29udGFpbmVyX18yUEpyYVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVE1NYXRjaGVzQm9hcmRfY29udGFpbmVyX18yZHNISFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUm93X2NvbnRhaW5lcl9fMVdCT2hcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlJvd0Rlc2NyaXB0aW9uX2NvbnRhaW5lcl9fMjE5dC1cIixcblx0XCJjb250ZW50XCI6IFwiUm93RGVzY3JpcHRpb25fY29udGVudF9fMlNlWFVcIixcblx0XCJkYXRlX2dhbWVOU3RhcnRlZF9jb250ZW50XCI6IFwiUm93RGVzY3JpcHRpb25fZGF0ZV9nYW1lTlN0YXJ0ZWRfY29udGVudF9fMU1xRUpcIixcblx0XCJkYXRlX2dhbWVTdGFydGVkX2NvbnRlbnRcIjogXCJSb3dEZXNjcmlwdGlvbl9kYXRlX2dhbWVTdGFydGVkX2NvbnRlbnRfXzNHX1oyXCIsXG5cdFwidGVhbXNcIjogXCJSb3dEZXNjcmlwdGlvbl90ZWFtc19fMjdWUE9cIixcblx0XCJ0ZWFtT25lXCI6IFwiUm93RGVzY3JpcHRpb25fdGVhbU9uZV9fVFBJa2FcIixcblx0XCJzY29yZVwiOiBcIlJvd0Rlc2NyaXB0aW9uX3Njb3JlX18zOFNWRlwiLFxuXHRcInRlYW1Ud29cIjogXCJSb3dEZXNjcmlwdGlvbl90ZWFtVHdvX18zbWFkMlwiLFxuXHRcImJ1eUJ1dHRvbl9jb250YWluZXJcIjogXCJSb3dEZXNjcmlwdGlvbl9idXlCdXR0b25fY29udGFpbmVyX18zckNOa1wiLFxuXHRcImJ1dHRvbl9jb250ZW50XCI6IFwiUm93RGVzY3JpcHRpb25fYnV0dG9uX2NvbnRlbnRfXzEyd1VQXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJSb3dUaXRsZV9jb250YWluZXJfX0RXWjVMXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJEYXlDaGFuZ2VCdXR0b25fY29udGFpbmVyX18yZEFxZVwiLFxuXHRcIm5hbWVcIjogXCJEYXlDaGFuZ2VCdXR0b25fbmFtZV9fMm5TbklcIixcblx0XCJkYXRlXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX2RhdGVfXzMtTVc4XCIsXG5cdFwiYWN0aXZlX25hbWVcIjogXCJEYXlDaGFuZ2VCdXR0b25fYWN0aXZlX25hbWVfXzMxNXNQXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIkRheUNoYW5nZUJ1dHRvbl90cmFuc2l0aW9uX18xVEZnM1wiLFxuXHRcImFjdGl2ZV9kYXRlXCI6IFwiRGF5Q2hhbmdlQnV0dG9uX2FjdGl2ZV9kYXRlX19PQmVhRFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVE1IZWFkZXJfY29udGFpbmVyX18yc2Y4S1wiLFxuXHRcImNvbnRlbnRcIjogXCJUTUhlYWRlcl9jb250ZW50X18yM1F1WVwiLFxuXHRcInRpdGxlXCI6IFwiVE1IZWFkZXJfdGl0bGVfXzN1OXpHXCIsXG5cdFwiZGF5X2NoYW5nZV9idXR0b25zXCI6IFwiVE1IZWFkZXJfZGF5X2NoYW5nZV9idXR0b25zX18zcW9ZcFwiLFxuXHRcImNhbGVuZGFyXCI6IFwiVE1IZWFkZXJfY2FsZW5kYXJfXzJXQWhfXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJUb2RheU1hdGNoZXNfY29udGFpbmVyX18zeGNmVFwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJUb2RheU1hdGNoZXNfdHJhbnNpdGlvbl9fMWRpdnJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk5ld3NfY29udGFpbmVyX19zbFBLX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU2xpZGVfY29udGFpbmVyX19RelpCd1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXJyb3dMZWZ0XCI6IFwiQXJyb3dfYXJyb3dMZWZ0X18yMk1SalwiLFxuXHRcImFycm93UmlnaHRcIjogXCJBcnJvd19hcnJvd1JpZ2h0X19mcExwQ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTWNvbnRhaW5lclwiOiBcIkl0ZW1Nb2RhbF9NY29udGFpbmVyX18xWWtNZ1wiLFxuXHRcIk1jb250ZW50XCI6IFwiSXRlbU1vZGFsX01jb250ZW50X18ycnZCeFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkl0ZW1Nb2RhbF9jb250YWluZXJfXzFqRWxhXCIsXG5cdFwiaW1nX2NvbnRlbnRcIjogXCJJdGVtTW9kYWxfaW1nX2NvbnRlbnRfX0tJaGRuXCIsXG5cdFwiZGVzY3JpcHRpb25fY29udGVudFwiOiBcIkl0ZW1Nb2RhbF9kZXNjcmlwdGlvbl9jb250ZW50X18xNlZWdlwiLFxuXHRcInRpdGxlXCI6IFwiSXRlbU1vZGFsX3RpdGxlX18yLVdwNFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSXRlbU1vZGFsX2Rlc2NyaXB0aW9uX19oUkdxR1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSXRlbV9jb250YWluZXJfXzN0cTJKXCIsXG5cdFwidG9wTGluZXNcIjogXCJJdGVtX3RvcExpbmVzX18xb05rV1wiLFxuXHRcImxpbmVPbmVcIjogXCJJdGVtX2xpbmVPbmVfXzVhWE05XCIsXG5cdFwibGluZVR3b1wiOiBcIkl0ZW1fbGluZVR3b19fMVVVQXRcIixcblx0XCJjb250ZW50XCI6IFwiSXRlbV9jb250ZW50X18yWWdkMlwiLFxuXHRcImJvdHRvbUxpbmVzXCI6IFwiSXRlbV9ib3R0b21MaW5lc19fM1VDY2JcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2luYXRpb25fY29udGFpbmVyX18xclkySFwiLFxuXHRcInJvdW5kXCI6IFwiUGFnaW5hdGlvbl9yb3VuZF9fMUxaVEVcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fM0lGZ2hcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlByZWRpY3Rpb25fY29udGFpbmVyX18zMmJVbFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXJyb3dMZWZ0XCI6IFwiQXJyb3dfYXJyb3dMZWZ0X18xbjJHbFwiLFxuXHRcImFycm93UmlnaHRcIjogXCJBcnJvd19hcnJvd1JpZ2h0X19OWk43V1wiLFxuXHRcImFycm93UmlnaHRWZWN0b3JcIjogXCJBcnJvd19hcnJvd1JpZ2h0VmVjdG9yX18zenhMbFwiLFxuXHRcImFycm93TGVmdFZlY3RvclwiOiBcIkFycm93X2Fycm93TGVmdFZlY3Rvcl9fVTZGU3FcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkl0ZW1fY29udGFpbmVyX19UYW81RVwiLFxuXHRcImNvbnRlbnRcIjogXCJJdGVtX2NvbnRlbnRfXzJ0WUhGXCIsXG5cdFwidG9wXCI6IFwiSXRlbV90b3BfX1cyckIwXCIsXG5cdFwidGVhbVwiOiBcIkl0ZW1fdGVhbV9fM0daODRcIixcblx0XCJ0aW1lcl9jb250YWluZXJcIjogXCJJdGVtX3RpbWVyX2NvbnRhaW5lcl9fMmc1cGJcIixcblx0XCJ0aW1lclwiOiBcIkl0ZW1fdGltZXJfX0NoNjU4XCIsXG5cdFwiYm90dG9tXCI6IFwiSXRlbV9ib3R0b21fX2dDRnJoXCIsXG5cdFwiYnV0dG9uc1wiOiBcIkl0ZW1fYnV0dG9uc19fMUJxd3RcIixcblx0XCJwcmVkaWN0aW9uX2J1dHRvbl9jb250YWluZXJcIjogXCJJdGVtX3ByZWRpY3Rpb25fYnV0dG9uX2NvbnRhaW5lcl9fM3hiak9cIixcblx0XCJwcmVkaWN0aW9uX2J1dHRvbl9jb250ZW50XCI6IFwiSXRlbV9wcmVkaWN0aW9uX2J1dHRvbl9jb250ZW50X18xVzh2SFwiLFxuXHRcImJ1eV9idXR0b25fY29udGFpbmVyXCI6IFwiSXRlbV9idXlfYnV0dG9uX2NvbnRhaW5lcl9fblBwb19cIixcblx0XCJidXlfYnV0dG9uX2NvbnRlbnRcIjogXCJJdGVtX2J1eV9idXR0b25fY29udGVudF9fNVBFemdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlByZWRpY3Rpb25Nb2RhbF9jb250YWluZXJfXzJZaS1kXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIlByZWRpY3Rpb25Nb2RhbF90cmFuc2l0aW9uX193LUN2ZlwiLFxuXHRcImNvbnRlbnRcIjogXCJQcmVkaWN0aW9uTW9kYWxfY29udGVudF9fMVk2WkZcIixcblx0XCJ0b3BcIjogXCJQcmVkaWN0aW9uTW9kYWxfdG9wX18xLW4zelwiLFxuXHRcInRlYW1cIjogXCJQcmVkaWN0aW9uTW9kYWxfdGVhbV9fMVZZREVcIixcblx0XCJ2c1wiOiBcIlByZWRpY3Rpb25Nb2RhbF92c19fMzFpYk5cIixcblx0XCJib3R0b21cIjogXCJQcmVkaWN0aW9uTW9kYWxfYm90dG9tX19HVmt3QlwiLFxuXHRcInByZWRpY3Rpb25cIjogXCJQcmVkaWN0aW9uTW9kYWxfcHJlZGljdGlvbl9fM1Z0UGpcIixcblx0XCJvcmRpbmFyXCI6IFwiUHJlZGljdGlvbk1vZGFsX29yZGluYXJfXzJLaUxGXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQcmRlaWN0aW9uU2xpZGVfY29udGFpbmVyX18xMk1TQ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQnV0dG9uX2NvbnRhaW5lcl9fNDVLeURcIixcblx0XCJjb250ZW50XCI6IFwiQnV0dG9uX2NvbnRlbnRfXzE0RmxVXCIsXG5cdFwiYWN0aXZlXCI6IFwiQnV0dG9uX2FjdGl2ZV9fMU1EZzVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFycm93TGVmdFwiOiBcIkFycm93X2Fycm93TGVmdF9fMVh6YkpcIixcblx0XCJhcnJvd1JpZ2h0XCI6IFwiQXJyb3dfYXJyb3dSaWdodF9fMjBhSTVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkZlZWRCYWNrX2NvbnRhaW5lcl9fMmNDTFdcIixcblx0XCJ0b3BcIjogXCJGZWVkQmFja190b3BfXzJJaHFqXCIsXG5cdFwiYXZhdGFyXCI6IFwiRmVlZEJhY2tfYXZhdGFyX18zQzAwY1wiLFxuXHRcInJhdGVpbmdcIjogXCJGZWVkQmFja19yYXRlaW5nX18xdmlIT1wiLFxuXHRcImJvdHRvbVwiOiBcIkZlZWRCYWNrX2JvdHRvbV9fM0xrcmpcIixcblx0XCJib3R0b21fY29udGVudFwiOiBcIkZlZWRCYWNrX2JvdHRvbV9jb250ZW50X18zdUpvb1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiRmVlZEJhY2tfZGVzY3JpcHRpb25fXzEzX0huXCIsXG5cdFwiZGF0ZV9saWtlc19jb250YWluZXJcIjogXCJGZWVkQmFja19kYXRlX2xpa2VzX2NvbnRhaW5lcl9fUFhrZHhcIixcblx0XCJkYXRlXCI6IFwiRmVlZEJhY2tfZGF0ZV9fMjhjZ1VcIixcblx0XCJ2ZXJ0aWNhbF9ib3JkZXJcIjogXCJGZWVkQmFja192ZXJ0aWNhbF9ib3JkZXJfXzRKTGJXXCIsXG5cdFwibGlrZXNfZGlzbGlrZXNcIjogXCJGZWVkQmFja19saWtlc19kaXNsaWtlc19fM1RBX0RcIixcblx0XCJsaWtlXCI6IFwiRmVlZEJhY2tfbGlrZV9fX1RpSXJcIixcblx0XCJkaXNMaWtlXCI6IFwiRmVlZEJhY2tfZGlzTGlrZV9fZFRoMGZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxpa2VEaXNsaWtlRHJvcF9jb250YWluZXJfXzFDVzc2XCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIkxpa2VEaXNsaWtlRHJvcF90cmFuc2l0aW9uX19seFp0U1wiLFxuXHRcImNvbnRlbnRcIjogXCJMaWtlRGlzbGlrZURyb3BfY29udGVudF9fOVlfMWVcIixcblx0XCJyb3dcIjogXCJMaWtlRGlzbGlrZURyb3Bfcm93X18xSUw0QVwiLFxuXHRcImF2YXRhclwiOiBcIkxpa2VEaXNsaWtlRHJvcF9hdmF0YXJfXzhJejR6XCIsXG5cdFwidXNlcl9wYXJ0XCI6IFwiTGlrZURpc2xpa2VEcm9wX3VzZXJfcGFydF9fMmN5OThcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxlYXZlQ29tbWVudF9jb250YWluZXJfXzJpczZmXCIsXG5cdFwic3RhcnNfY29udGFpbmVyXCI6IFwiTGVhdmVDb21tZW50X3N0YXJzX2NvbnRhaW5lcl9fM291a2pcIixcblx0XCJzdGFyc19jb250ZW50XCI6IFwiTGVhdmVDb21tZW50X3N0YXJzX2NvbnRlbnRfXzI1dkZBXCIsXG5cdFwic3RhcnNfYXJlYVwiOiBcIkxlYXZlQ29tbWVudF9zdGFyc19hcmVhX19YTmFJTlwiLFxuXHRcInRleHRhcmVhX2NvbnRhaW5lclwiOiBcIkxlYXZlQ29tbWVudF90ZXh0YXJlYV9jb250YWluZXJfXzM4d0czXCIsXG5cdFwiYnV0dG9uX2NvbnRhaW5lclwiOiBcIkxlYXZlQ29tbWVudF9idXR0b25fY29udGFpbmVyX18ybU9uZlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUGFnaW5hdGlvbl9jb250YWluZXJfX09VX1pSXCIsXG5cdFwicm91bmRcIjogXCJQYWdpbmF0aW9uX3JvdW5kX18zYmhlVlwiLFxuXHRcImFjdGl2ZVwiOiBcIlBhZ2luYXRpb25fYWN0aXZlX18yQ2ZidlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU29ydGluZ19jb250YWluZXJfXzJMaHY4XCIsXG5cdFwibmFtZVwiOiBcIlNvcnRpbmdfbmFtZV9fM3NvUThcIixcblx0XCJiYXJcIjogXCJTb3J0aW5nX2Jhcl9fMW1iSERcIixcblx0XCJieURhdGVcIjogXCJTb3J0aW5nX2J5RGF0ZV9fM19Cei1cIixcblx0XCJhY3RpdmVcIjogXCJTb3J0aW5nX2FjdGl2ZV9fM2ExYUxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRlc3RpbW9uaWFsc19jb250YWluZXJfXzNMQXJQXCIsXG5cdFwiZmVlZF9iYWNrc19jb250YWluZXJcIjogXCJUZXN0aW1vbmlhbHNfZmVlZF9iYWNrc19jb250YWluZXJfXzM5NWhrXCIsXG5cdFwiY2Fyb3VzZWxcIjogXCJUZXN0aW1vbmlhbHNfY2Fyb3VzZWxfXzJyclZWXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJUaXRsZV9jb250YWluZXJfXzFnMy1nXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb2RhbENvbnRlaW5lclwiOiBcIk1vZGFsX21vZGFsQ29udGVpbmVyX18zZzhJZlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJNb2RhbF90cmFuc2l0aW9uX18xa2Z2OVwiLFxuXHRcIm1vZGFsQ29udGVudFwiOiBcIk1vZGFsX21vZGFsQ29udGVudF9fMS1PNDdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2FsZW5kYXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10aW1lci1ob29rXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=