(function() {
var exports = {};
exports.id = "pages/personal";
exports.ids = ["pages/personal"];
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

/***/ "./components/Pages/Personal/Content/Content.jsx":
/*!*******************************************************!*\
  !*** ./components/Pages/Personal/Content/Content.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": function() { return /* binding */ Content; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content.module.scss */ "./components/Pages/Personal/Content/Content.module.scss");
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Content_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PurchasedGames_PurchasedGames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchasedGames/PurchasedGames */ "./components/Pages/Personal/Content/PurchasedGames/PurchasedGames.jsx");
/* harmony import */ var _UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserInfo/UserInfo */ "./components/Pages/Personal/Content/UserInfo/UserInfo.jsx");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Personal\\Content\\Content.jsx";
// styles
 // components



function Content() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Content_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_2__.UserInfo, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PurchasedGames_PurchasedGames__WEBPACK_IMPORTED_MODULE_1__.PurchasedGames, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Personal/Content/PurchasedGames/Board/BoardHeader/BoardHeader.jsx":
/*!********************************************************************************************!*\
  !*** ./components/Pages/Personal/Content/PurchasedGames/Board/BoardHeader/BoardHeader.jsx ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardHeader": function() { return /* binding */ BoardHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BoardHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardHeader.module.scss */ "./components/Pages/Personal/Content/PurchasedGames/Board/BoardHeader/BoardHeader.module.scss");
/* harmony import */ var _BoardHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BoardHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Personal\\Content\\PurchasedGames\\Board\\BoardHeader\\BoardHeader.jsx";
// styles
 // translations


function BoardHeader() {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('personal'),
        translationPath = 'board.headers.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_BoardHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_BoardHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().for_tablets),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: translate('gamesHistory')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_BoardHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('prediction')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('date')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('score')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('price')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PGBoard.jsx":
/*!************************************************************************************!*\
  !*** ./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PGBoard.jsx ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PGBoard": function() { return /* binding */ PGBoard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Row_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Row/Row */ "./components/Pages/Personal/Content/PurchasedGames/Board/Row/Row.jsx");
/* harmony import */ var _BoardHeader_BoardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BoardHeader/BoardHeader */ "./components/Pages/Personal/Content/PurchasedGames/Board/BoardHeader/BoardHeader.jsx");
/* harmony import */ var _PG_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PG_board */ "./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PG_board.js");
/* harmony import */ var _PGBoard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PGBoard.module.scss */ "./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PGBoard.module.scss");
/* harmony import */ var _PGBoard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PGBoard_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Personal\\Content\\PurchasedGames\\Board\\PGBoard\\PGBoard.jsx";


 // styles 


function PGBoard({
  show
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_PGBoard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardHeader_BoardHeader__WEBPACK_IMPORTED_MODULE_2__.BoardHeader, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_PGBoard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().board),
        children: _PG_board__WEBPACK_IMPORTED_MODULE_3__.PG_board.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row_Row__WEBPACK_IMPORTED_MODULE_1__.Row, {
          order: i + 1,
          teamOneName: el.teamOneName,
          teamOneIcon: el.teamOneIcon,
          teamTwoName: el.teamTwoName,
          teamTwoIcon: el.teamTwoIcon,
          prediction: el.prediction,
          date: el.date,
          score: el.score,
          price: el.price
        }, Math.random(), false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 29
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PG_board.js":
/*!************************************************************************************!*\
  !*** ./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PG_board.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PG_board": function() { return /* binding */ PG_board; }
/* harmony export */ });
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/barca.png */ "./public/images/main/matches/barca.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/psj.png */ "./public/images/main/matches/psj.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
// icons






const PG_board = [{
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}];

/***/ }),

/***/ "./components/Pages/Personal/Content/PurchasedGames/Board/Row/Row.jsx":
/*!****************************************************************************!*\
  !*** ./components/Pages/Personal/Content/PurchasedGames/Board/Row/Row.jsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Row": function() { return /* binding */ Row; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Row_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Row.module.scss */ "./components/Pages/Personal/Content/PurchasedGames/Board/Row/Row.module.scss");
/* harmony import */ var _Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Row_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Personal\\Content\\PurchasedGames\\Board\\Row\\Row.jsx";
// translation 
 // styles 


function Row({
  order,
  teamOneName,
  teamOneIcon,
  teamTwoName,
  teamTwoIcon,
  prediction,
  date,
  score,
  price
}) {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('personal'),
        translationPath = `board.headers.`,
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().order),
            children: [order, "."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamOne),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: teamOneName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamOneIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().vs),
            children: "VS."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamTwo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: teamTwoName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamTwoIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction),
          children: prediction.thereIs ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_content),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_title),
              children: translate('prediction')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_body),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: prediction.totalBet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: prediction.coefficent
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 33
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().simulator)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date_time),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tablet_score),
            children: score
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().score),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: score
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().price),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().price_title),
            children: translate('price')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Personal/Content/PurchasedGames/PGSButton/PGSButton.jsx":
/*!**********************************************************************************!*\
  !*** ./components/Pages/Personal/Content/PurchasedGames/PGSButton/PGSButton.jsx ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PGSButton": function() { return /* binding */ PGSButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PGSButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PGSButton.module.scss */ "./components/Pages/Personal/Content/PurchasedGames/PGSButton/PGSButton.module.scss");
/* harmony import */ var _PGSButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PGSButton_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Personal\\Content\\PurchasedGames\\PGSButton\\PGSButton.jsx";
// hooks and helpers
 // styles


function PGSButton({
  active,
  click
}) {
  const // translations
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('personal'),
        translationPath = 'board.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PGSButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_PGSButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: active ? (_PGSButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : undefined,
        onClick: click,
        children: translate('PGButton')
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
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Personal/Content/PurchasedGames/PurchasedGames.jsx":
/*!*****************************************************************************!*\
  !*** ./components/Pages/Personal/Content/PurchasedGames/PurchasedGames.jsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasedGames": function() { return /* binding */ PurchasedGames; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PGSButton_PGSButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PGSButton/PGSButton */ "./components/Pages/Personal/Content/PurchasedGames/PGSButton/PGSButton.jsx");
/* harmony import */ var _Board_PGBoard_PGBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Board/PGBoard/PGBoard */ "./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PGBoard.jsx");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Personal\\Content\\PurchasedGames\\PurchasedGames.jsx";



function PurchasedGames() {
  const // states
  {
    0: showboardState,
    1: setShowBoardState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return (
    /*#__PURE__*/
    // container for grid right working
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PGSButton_PGSButton__WEBPACK_IMPORTED_MODULE_2__.PGSButton, {
        active: showboardState,
        click: () => setShowBoardState(!showboardState)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Board_PGBoard_PGBoard__WEBPACK_IMPORTED_MODULE_3__.PGBoard, {
        show: showboardState
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this)
  );
}

/***/ }),

/***/ "./components/Pages/Personal/Content/UserInfo/UserInfo.jsx":
/*!*****************************************************************!*\
  !*** ./components/Pages/Personal/Content/UserInfo/UserInfo.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfo": function() { return /* binding */ UserInfo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_user_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/user/user */ "./src/user/user.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./UserInfo.module.scss */ "./components/Pages/Personal/Content/UserInfo/UserInfo.module.scss");
/* harmony import */ var _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _public_images_personal_user_input_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/personal/user-input.svg */ "./public/images/personal/user-input.svg");
/* harmony import */ var _public_images_personal_unknown_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/personal/unknown.svg */ "./public/images/personal/unknown.svg");
/* harmony import */ var _public_images_personal_calendar_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/personal/calendar.svg */ "./public/images/personal/calendar.svg");
/* harmony import */ var _public_images_personal_mail_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../public/images/personal/mail.svg */ "./public/images/personal/mail.svg");
/* harmony import */ var _public_images_personal_phone_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../public/images/personal/phone.svg */ "./public/images/personal/phone.svg");
/* harmony import */ var _public_images_personal_key_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../public/images/personal/key.svg */ "./public/images/personal/key.svg");
/* harmony import */ var _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../public/images/personal/change.png */ "./public/images/personal/change.png");
/* harmony import */ var _public_images_personal_camera_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../public/images/personal/camera.svg */ "./public/images/personal/camera.svg");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");
/* harmony import */ var _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../public/images/common/userDefault.png */ "./public/images/common/userDefault.png");
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_17__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Personal\\Content\\UserInfo\\UserInfo.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // styles 

 // icons 

















function UserInfo() {
  var _user_info$photo;

  const user_info = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_13__.selectUser);
  console.log(user_info);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (changeName !== null) changeUserData(`username`, user_info.username);
  }, [user_info.username]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (changeDate !== null) changeUserData(`dateOfBirth`, user_info.dateOfBirth);
  }, [user_info.dateOfBirth]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (changePhone !== null) changeUserData(`mobile`, user_info.mobile);
  }, [user_info.mobile]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (changeEmail !== null) changeUserData(`email`, user_info.email);
  }, [user_info.email]);

  async function changeUserData(key, value) {
    try {
      await (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_15__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_16__.CHANGE_ACCOUNT_INFO, {
        [key]: value
      }, {
        auth: true
      });
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast)(`Successfully updated`);
    } catch (err) {
      var _error$response$data;

      (0,react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast)(((_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || `Can't update`, {
        type: `error`
      });
    }
  }

  const // states
  // make states null by default, to know if they change for first time
  {
    0: changeName,
    1: setChangeName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
        {
    0: changeDate,
    1: setChangeDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
        {
    0: changePhone,
    1: setChangePhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
        {
    0: changeEmail,
    1: setChangeEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
        {
    0: userPhoto,
    1: setUserPhoto
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((_user_info$photo = user_info.photo) !== null && _user_info$photo !== void 0 ? _user_info$photo : _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_14__.default.src),
        {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('personal');

  const changeUserPhoto = async image => {
    const formData = new FormData();
    formData.append(`profile_img`, image);

    try {
      var _await$request$data$d, _await$request$data;

      const imgPath = (_await$request$data$d = (_await$request$data = (await (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_15__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_16__.CHANGE_ACCOUNT_IMAGE, formData, {
        auth: true
      })).data) === null || _await$request$data === void 0 ? void 0 : _await$request$data.data.img_path) !== null && _await$request$data$d !== void 0 ? _await$request$data$d : "";
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast)(`Image successfully updated`);
      dispatch((0,_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_13__.login)(_objectSpread(_objectSpread({}, user_info), {}, {
        photo: imgPath
      })));
    } catch (err) {
      var _error$response$data2;

      (0,react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast)(((_error$response$data2 = error.response.data) === null || _error$response$data2 === void 0 ? void 0 : _error$response$data2.message) || `Can't update image`, {
        type: `error`
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default().user_photo_content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "user_photo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              width: "440",
              src: userPhoto ? userPhoto : _public_images_personal_unknown_svg__WEBPACK_IMPORTED_MODULE_5__.default.src,
              className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default().user_photo),
              alt: "icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_personal_camera_svg__WEBPACK_IMPORTED_MODULE_11__.default.src,
            alt: "icon",
            className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default().cameraIcon)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "file",
          id: "user_photo",
          style: {
            display: 'none'
          },
          onChange: e => {
            if (e.target.files.length !== 0) {
              setUserPhoto(URL.createObjectURL(e.target.files[0]));
              changeUserPhoto(e.target.files[0]);
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default().inputs_content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default().info_input),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_user_input_svg__WEBPACK_IMPORTED_MODULE_4__.default.src,
              alt: "icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: !changeName ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: user_info.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: user_info.username,
              type: "text",
              style: changeName ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: e => user_info.username = e.target.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "",
              onClick: () => setChangeName(!changeName)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default().info_input),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_calendar_svg__WEBPACK_IMPORTED_MODULE_6__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: !changeDate ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: user_info.dateOfBirth
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: user_info.dateOfBirth,
              type: "date",
              style: changeDate ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: e => user_info.dateOfBirth = e.target.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "",
              onClick: () => setChangeDate(!changeDate)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default().info_input),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_phone_svg__WEBPACK_IMPORTED_MODULE_8__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: !changePhone ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: user_info.mobile
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: user_info.mobile,
              type: "text",
              style: changePhone ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: e => user_info.mobile = e.target.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "",
              onClick: () => setChangePhone(!changePhone)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default().info_input),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_mail_svg__WEBPACK_IMPORTED_MODULE_7__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: !changeEmail ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: user_info.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: user_info.email,
              type: "text",
              style: changeEmail ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: e => user_info.email = e.target.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "icon",
              onClick: () => setChangeEmail(!changeEmail)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_18___default().changePassword),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_key_svg__WEBPACK_IMPORTED_MODULE_9__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: t('board.headers.changePassword'),
              type: "password" // onChange={(e) => user_info.email = e.target.value}

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_personal_change_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_17__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Personal/Personal.jsx":
/*!************************************************!*\
  !*** ./components/Pages/Personal/Personal.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Personal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Title/Title */ "./components/Pages/common/Title/Title.jsx");
/* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content/Content */ "./components/Pages/Personal/Content/Content.jsx");
/* harmony import */ var _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Personal.module.scss */ "./components/Pages/Personal/Personal.module.scss");
/* harmony import */ var _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Personal_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Personal\\Personal.jsx";
// components

 // styles 


function Personal() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title_Title__WEBPACK_IMPORTED_MODULE_1__.Title, {
      page: "personal",
      textPathName: "title"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Content_Content__WEBPACK_IMPORTED_MODULE_2__.Content, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

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

/***/ "./pages/personal.js":
/*!***************************!*\
  !*** ./pages/personal.js ***!
  \***************************/
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
/* harmony import */ var _components_Pages_Personal_Personal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pages/Personal/Personal */ "./components/Pages/Personal/Personal.jsx");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\pages\\personal.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const PersonalPage = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pages_Personal_Personal__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 28
}, undefined);

PersonalPage.layout = "withoutPhoto";
/* harmony default export */ __webpack_exports__["default"] = (PersonalPage);
async function getStaticProps(ctx) {
  return {
    props: _objectSpread({}, await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread(_objectSpread(_objectSpread({}, ctx), {}, {
      pathname: '/personal',
      loaderName: 'getStaticProps'
    }, _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__), {}, {
      loadLocaleFrom: (l, n) => __webpack_require__("./locales lazy recursive ^\\.\\/.*\\/.*$")(`./${l}/${n}`).then(m => m.default)
    })))
  };
}

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
/* harmony import */ var _public_images_common_userphoto_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/common/userphoto.png */ "./public/images/common/userphoto.png");

const user_data = {
  photo: _public_images_common_userphoto_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  birthDate: '12.03.1978',
  telephone: '+495 -254-24-75',
  fullName: 'Александр Михаева',
  email: ' alex.mikhaeva.19@mail.ru'
};

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

/***/ "./public/images/main/matches/barca.png":
/*!**********************************************!*\
  !*** ./public/images/main/matches/barca.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/barca.af35527b160676eac7a6d5c0a60883c3.png","height":49,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCklEQVR42mPoy2TwWr+somt7i+/WTfNy+ta0SPVva2bbuqqduXNKGYM7Q0M6g9u1DbP+P84o/n930dT/D2aa/X87Tfz/5Ski/9sbGRwZgED00pxpH554FP5/OHX67xez7H5/nCLz/2Kr3DsGbQZhhi0dDBPfnq35f21xxJ8T62v/7epV/nd5DsOfl1sY/m/uZ+hhWNFju3JBif//OWl+v3uTXP7XxYX/n5oQ8XtxffL/ld0WSxmaquxTC3xK/ucylP/eOCXsz+apgX8KGEr/FPoW/e+ut45jYChgYF1aKrKxNzzp/7TC+P/Ti+L+94Yn/F9eJrKcARlMb2awW9WoMBuIZ81sZbCBiQMAkPt9WMwiZWwAAAAASUVORK5CYII="});

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

/***/ "./public/images/main/matches/psj.png":
/*!********************************************!*\
  !*** ./public/images/main/matches/psj.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/psj.19909cdc27e6e74da413f4a2212dad97.png","height":47,"width":47,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AU1+rACzz+oPZT0bhgkHBEYJBgT/6e/2tqDf8XpVHAz2AQAiig9+ejHBCAcFLwQBAQD8/P0A9fv9APn8/smMtNdCAWaKsZrw7vVlBRQO+UH07QX6/v8A0hYY++jg7AcWFw2OAVF8quDy6/MfvQgK/tAD3wH5AQMAN/kd/0D69wIcGw/YAVZ9quHE6/YelS4O/ife1AECBAMAzxwq/1nR7wJiHg7aAW+Os5ys3e5jlyUJ+cb5+wUMAgAAKgIE+2ze+AdYJRORAUyFsA8aBADByu/4Lxn+/gAKCgYA5Pn9ADARCcn0CwpCAWmQtQDn8/oOHwoDiufy+UUGBAL/EwkFtcvs9nksFgz2Qop2DYh8YIkAAAAASUVORK5CYII="});

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

/***/ "./public/images/personal/calendar.svg":
/*!*********************************************!*\
  !*** ./public/images/personal/calendar.svg ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/personal/calendar.92390daa8d9361efe10e85d7274103a9.svg","height":35,"width":35});

/***/ }),

/***/ "./public/images/personal/camera.svg":
/*!*******************************************!*\
  !*** ./public/images/personal/camera.svg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/personal/camera.6c53ccfa415583cd5cb7ac5bba72efdf.svg","height":75,"width":75});

/***/ }),

/***/ "./public/images/personal/change.png":
/*!*******************************************!*\
  !*** ./public/images/personal/change.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/personal/change.36d328d1215223956a73f4e6d3961939.png","height":35,"width":35,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42mMAgY+v3rB8//xZ5O+fPxKf376T+f//PxcDDHwCSgIFRIBY6N///5JAmuPojMWOZ5atN2QAAaAA390TZzXXBOaVbM9vDdpe1hG+SCVk55HpixyBcpwgBTx72if77KjqDgZKhs1lcP2/raw9HGQSyDqQAt69nVO9TyxYabmnc4ovUDJsG9AkoLgEyE0MIJVHpi90WROWX3liwSrLHdXdwSDrQG76/vmLCEgB84/PXyQPT1vosrdzmjfQOt87R09pgxz+8dVrFphDmUEmgdwDxXwwSQDbTpYoqRWuLQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/personal/key.svg":
/*!****************************************!*\
  !*** ./public/images/personal/key.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/personal/key.35e68c9e4a7b59981796ce2b7ea8101b.svg","height":17,"width":17});

/***/ }),

/***/ "./public/images/personal/mail.svg":
/*!*****************************************!*\
  !*** ./public/images/personal/mail.svg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/personal/mail.ca8d4b73aa518e4f4279d93e1f0f4c54.svg","height":35,"width":35});

/***/ }),

/***/ "./public/images/personal/phone.svg":
/*!******************************************!*\
  !*** ./public/images/personal/phone.svg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/personal/phone.2992b0c1f9b3241a195eaeff4c0bbfbe.svg","height":35,"width":35});

/***/ }),

/***/ "./public/images/personal/unknown.svg":
/*!********************************************!*\
  !*** ./public/images/personal/unknown.svg ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/personal/unknown.4899a9c93341e88f18d51aca60dbdac6.svg","height":426,"width":445});

/***/ }),

/***/ "./public/images/personal/user-input.svg":
/*!***********************************************!*\
  !*** ./public/images/personal/user-input.svg ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/personal/user-input.9b699033c74d21ed0f90599aa152d6c2.svg","height":35,"width":35});

/***/ }),

/***/ "./components/Pages/Personal/Content/Content.module.scss":
/*!***************************************************************!*\
  !*** ./components/Pages/Personal/Content/Content.module.scss ***!
  \***************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Content_container__2wKLJ"
};


/***/ }),

/***/ "./components/Pages/Personal/Content/PurchasedGames/Board/BoardHeader/BoardHeader.module.scss":
/*!****************************************************************************************************!*\
  !*** ./components/Pages/Personal/Content/PurchasedGames/Board/BoardHeader/BoardHeader.module.scss ***!
  \****************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "BoardHeader_container__38CLl",
	"left": "BoardHeader_left__2GFtD",
	"right": "BoardHeader_right__1HLFJ",
	"for_tablets": "BoardHeader_for_tablets__3pVwD"
};


/***/ }),

/***/ "./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PGBoard.module.scss":
/*!********************************************************************************************!*\
  !*** ./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PGBoard.module.scss ***!
  \********************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PGBoard_container__3YeZA",
	"transition": "PGBoard_transition__G7iq7",
	"board": "PGBoard_board__XRbr8"
};


/***/ }),

/***/ "./components/Pages/Personal/Content/PurchasedGames/Board/Row/Row.module.scss":
/*!************************************************************************************!*\
  !*** ./components/Pages/Personal/Content/PurchasedGames/Board/Row/Row.module.scss ***!
  \************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Row_container__1AtqE",
	"content": "Row_content__eG5MH",
	"left": "Row_left__7K_20",
	"vs": "Row_vs__2qNyd",
	"teamOne": "Row_teamOne__fvdbm",
	"teamTwo": "Row_teamTwo__2h9VA",
	"order": "Row_order__3Y_fK",
	"right": "Row_right__35164",
	"prediction": "Row_prediction__1P8lA",
	"prediction_content": "Row_prediction_content__Ff0BN",
	"prediction_title": "Row_prediction_title__2GMXM",
	"prediction_body": "Row_prediction_body__1yZV9",
	"simulator": "Row_simulator__3cN7h",
	"date_time": "Row_date_time__2kxgr",
	"date": "Row_date__3W5zE",
	"time": "Row_time__3xDD6",
	"tablet_score": "Row_tablet_score__YswVs",
	"score": "Row_score__3B5u6",
	"price": "Row_price__2dVjw",
	"price_title": "Row_price_title__2PFEt"
};


/***/ }),

/***/ "./components/Pages/Personal/Content/PurchasedGames/PGSButton/PGSButton.module.scss":
/*!******************************************************************************************!*\
  !*** ./components/Pages/Personal/Content/PurchasedGames/PGSButton/PGSButton.module.scss ***!
  \******************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PGSButton_container__IjuZQ",
	"content": "PGSButton_content__1VtHa",
	"active": "PGSButton_active__2Dz-1"
};


/***/ }),

/***/ "./components/Pages/Personal/Content/UserInfo/UserInfo.module.scss":
/*!*************************************************************************!*\
  !*** ./components/Pages/Personal/Content/UserInfo/UserInfo.module.scss ***!
  \*************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "UserInfo_container__3q8jC",
	"content": "UserInfo_content__2ztqc",
	"user_photo_content": "UserInfo_user_photo_content__3tQFX",
	"user_photo": "UserInfo_user_photo__1GbUS",
	"cameraIcon": "UserInfo_cameraIcon__LHnyr",
	"inputs_content": "UserInfo_inputs_content__21Sj7",
	"info_input": "UserInfo_info_input__2D72L",
	"changePassword": "UserInfo_changePassword__10R88"
};


/***/ }),

/***/ "./components/Pages/Personal/Personal.module.scss":
/*!********************************************************!*\
  !*** ./components/Pages/Personal/Personal.module.scss ***!
  \********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Personal_container__1gg9T",
	"content": "Personal_content__1iVNz"
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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/personal.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QZXJzb25hbC9Db250ZW50L0NvbnRlbnQuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QZXJzb25hbC9Db250ZW50L1B1cmNoYXNlZEdhbWVzL0JvYXJkL0JvYXJkSGVhZGVyL0JvYXJkSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUGVyc29uYWwvQ29udGVudC9QdXJjaGFzZWRHYW1lcy9Cb2FyZC9QR0JvYXJkL1BHQm9hcmQuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QZXJzb25hbC9Db250ZW50L1B1cmNoYXNlZEdhbWVzL0JvYXJkL1BHQm9hcmQvUEdfYm9hcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1BlcnNvbmFsL0NvbnRlbnQvUHVyY2hhc2VkR2FtZXMvQm9hcmQvUm93L1Jvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1BlcnNvbmFsL0NvbnRlbnQvUHVyY2hhc2VkR2FtZXMvUEdTQnV0dG9uL1BHU0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1BlcnNvbmFsL0NvbnRlbnQvUHVyY2hhc2VkR2FtZXMvUHVyY2hhc2VkR2FtZXMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QZXJzb25hbC9Db250ZW50L1VzZXJJbmZvL1VzZXJJbmZvLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUGVyc29uYWwvUGVyc29uYWwuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGl0bGUvVGl0bGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9lci5saWIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wYWdlcy9wZXJzb25hbC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy91c2VyL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VycGhvdG8ucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYmFyY2EucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Bzai5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvY2FsZW5kYXIuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wZXJzb25hbC9jYW1lcmEuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wZXJzb25hbC9jaGFuZ2UucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wZXJzb25hbC9rZXkuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wZXJzb25hbC9tYWlsLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvcGhvbmUuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wZXJzb25hbC91bmtub3duLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvdXNlci1pbnB1dC5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1BlcnNvbmFsL0NvbnRlbnQvQ29udGVudC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUGVyc29uYWwvQ29udGVudC9QdXJjaGFzZWRHYW1lcy9Cb2FyZC9Cb2FyZEhlYWRlci9Cb2FyZEhlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUGVyc29uYWwvQ29udGVudC9QdXJjaGFzZWRHYW1lcy9Cb2FyZC9QR0JvYXJkL1BHQm9hcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1BlcnNvbmFsL0NvbnRlbnQvUHVyY2hhc2VkR2FtZXMvQm9hcmQvUm93L1Jvdy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUGVyc29uYWwvQ29udGVudC9QdXJjaGFzZWRHYW1lcy9QR1NCdXR0b24vUEdTQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QZXJzb25hbC9Db250ZW50L1VzZXJJbmZvL1VzZXJJbmZvLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QZXJzb25hbC9QZXJzb25hbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL1RpdGxlL1RpdGxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2lnbm9yZWR8QzpcXFVzZXJzXFxBZG1pblxcRGVza3RvcFxccHJvamVjdHNcXGZvb3QtYmV0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ29udGVudCIsInN0eWxlcyIsIkJvYXJkSGVhZGVyIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5IiwiUEdCb2FyZCIsInNob3ciLCJQR19ib2FyZCIsImVsIiwiaSIsInRlYW1PbmVOYW1lIiwidGVhbU9uZUljb24iLCJ0ZWFtVHdvTmFtZSIsInRlYW1Ud29JY29uIiwicHJlZGljdGlvbiIsImRhdGUiLCJzY29yZSIsInByaWNlIiwiTWF0aCIsInJhbmRvbSIsImF0bGV0aWNvSWNvbiIsImF0bGV0aWNJY29uIiwidGhlcmVJcyIsInRvdGFsQmV0IiwiY29lZmZpY2VudCIsImJhcmNhSWNvbiIsInBzakljb24iLCJtYXJjZWxJY29uIiwicmVubmFpc0ljb24iLCJSb3ciLCJvcmRlciIsInNpbXVsYXRvciIsIlBHU0J1dHRvbiIsImFjdGl2ZSIsImNsaWNrIiwidW5kZWZpbmVkIiwiUHVyY2hhc2VkR2FtZXMiLCJzaG93Ym9hcmRTdGF0ZSIsInNldFNob3dCb2FyZFN0YXRlIiwidXNlU3RhdGUiLCJVc2VySW5mbyIsInVzZXJfaW5mbyIsInVzZVNlbGVjdG9yIiwic2VsZWN0VXNlciIsImNvbnNvbGUiLCJsb2ciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiY2hhbmdlTmFtZSIsImNoYW5nZVVzZXJEYXRhIiwidXNlcm5hbWUiLCJjaGFuZ2VEYXRlIiwiZGF0ZU9mQmlydGgiLCJjaGFuZ2VQaG9uZSIsIm1vYmlsZSIsImNoYW5nZUVtYWlsIiwiZW1haWwiLCJ2YWx1ZSIsInJlcXVlc3QiLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiYXV0aCIsInRvYXN0IiwiZXJyIiwiZXJyb3IiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwidHlwZSIsInNldENoYW5nZU5hbWUiLCJzZXRDaGFuZ2VEYXRlIiwic2V0Q2hhbmdlUGhvbmUiLCJzZXRDaGFuZ2VFbWFpbCIsInVzZXJQaG90byIsInNldFVzZXJQaG90byIsInBob3RvIiwidXNlckRlZmF1bHRJY29uIiwiY2hhbmdlVXNlclBob3RvIiwiaW1hZ2UiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaW1nUGF0aCIsIkNIQU5HRV9BQ0NPVU5UX0lNQUdFIiwiaW1nX3BhdGgiLCJsb2dpbiIsInVua25vd24iLCJjYW1lcmEiLCJjYW1lcmFJY29uIiwiZGlzcGxheSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInVzZXIiLCJjaGFuZ2UiLCJjYWxlbmRhciIsInBob25lIiwiUGVyc29uYWwiLCJUaXRsZSIsInBhZ2UiLCJ0ZXh0UGF0aE5hbWUiLCJsb2NhdGlvbkluUGFnZSIsInRleHRTdHlsZXMiLCJocmVmIiwiY2xhc3NlcyIsImN1cnNvciIsImhvc3QiLCJkZXN0aW5hdGlvbiIsInBheWxvYWQiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJzbHYiLCJyamN0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRDb29raWUiLCJPYmplY3QiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJjYXRjaCIsImZpbmFsbHkiLCJuYW1lIiwibmFtZUVRIiwiY2EiLCJkb2N1bWVudCIsImNvb2tpZSIsInNwbGl0IiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJyZW1vdmVDb29raWUiLCJzZXRDb29raWUiLCJkYXlzIiwiZXhwaXJlcyIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwiQVVUSF9VUkwiLCJBQ0NPVU5UX1VSTCIsIlJFR0lTVEVSIiwiTE9HSU4iLCJHRVRfQUNDT1VOVF9JTkZPIiwiU1RBUlRfUkVTRVRfUEFTU1dPUkQiLCJWRVJJRllfUEFTU1dPUkRfUkVTRVQiLCJTRVRfTkVXX1BBU1NXT1JEIiwiR0VUX05FV1MiLCJHRVRfTUFUQ0hFUyIsIkdFVF9NQVRDSEVTX09GX05FWFRfREFZIiwiR0VUX1BSRURJQ1RJT05TIiwiR0VUX0ZFRURCQUNLIiwiaWQiLCJHRVRfTUFUQ0hFU19CWV9UWVBFIiwiQUREX0ZFRURCQUNLIiwiR0VUX1NUQVRJU1RJQ1MiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiX3VzZUludGVyc2VjdGlvbiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImFzIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiZGVmYXVsdCIsInVzZVJlZiIsImN1cnJlbnQiLCJ3YXJuIiwicCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJ0b1VwcGVyQ2FzZSIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiZG9tYWluSXRlbXMiLCJob3N0bmFtZSIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSXRlbSIsInRvTG93ZXJDYXNlIiwiaXRlbSIsIl9pdGVtJGRvbWFpbiIsIl9pdGVtJGxvY2FsZXMiLCJkb21haW5Ib3N0bmFtZSIsImRvbWFpbiIsInNvbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJwYXRobmFtZVBhcnRzIiwic3BsaWNlIiwiam9pbiIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJwYXRoTG93ZXIiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJfdGhpcyRsb2NhbGVzIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsIngiLCJ5IiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJwcm90b2NvbCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIlBlcnNvbmFsUGFnZSIsImxheW91dCIsImdldFN0YXRpY1Byb3BzIiwiX19sb2FkTmFtZXNwYWNlcyIsImxvYWRlck5hbWUiLCJfX2kxOG5Db25maWciLCJsb2FkTG9jYWxlRnJvbSIsImwiLCJuIiwidXNlclNsaWNlIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFjdGlvbiIsImxvZ291dCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwidXNlcl9kYXRhIiwidXNlckljb24iLCJiaXJ0aERhdGUiLCJ0ZWxlcGhvbmUiLCJmdWxsTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLHVDQUF1Qyx5QkFBeUI7QUFDaEU7QUFDQSxxQzs7Ozs7Ozs7OztBQ2xaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7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Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9wZXJzb25hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hbS9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2FtL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2FtL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2RldS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2RldS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VuL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VuL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3Bfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL3JzL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL3JzL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBPYmplY3Qua2V5cyhtYXApOyB9O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9sb2NhbGVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGVudC5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBQdXJjaGFzZWRHYW1lcyB9IGZyb20gJy4vUHVyY2hhc2VkR2FtZXMvUHVyY2hhc2VkR2FtZXMnXHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi9Vc2VySW5mby9Vc2VySW5mbydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxVc2VySW5mbyAvPlxyXG4gICAgICAgICAgICA8UHVyY2hhc2VkR2FtZXMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JvYXJkSGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG4vLyB0cmFuc2xhdGlvbnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJvYXJkSGVhZGVyKCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdwZXJzb25hbCcpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdib2FyZC5oZWFkZXJzLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9yX3RhYmxldHN9PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnZ2FtZXNIaXN0b3J5Jyl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ3ByZWRpY3Rpb24nKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ2RhdGUnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ3Njb3JlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdwcmljZScpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBSb3cgfSBmcm9tICcuLi9Sb3cvUm93J1xyXG5pbXBvcnQgeyBCb2FyZEhlYWRlciB9IGZyb20gJy4uL0JvYXJkSGVhZGVyL0JvYXJkSGVhZGVyJztcclxuaW1wb3J0IHsgUEdfYm9hcmQgfSBmcm9tICcuL1BHX2JvYXJkJztcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUEdCb2FyZC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQR0JvYXJkKHsgc2hvdyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93ICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvYXJkSGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtQR19ib2FyZC5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e2kgKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU9e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtlbC5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nJ1xyXG5pbXBvcnQgYXRsZXRpY0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBHX2JvYXJkID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CR0LDRgNGB0LXQu9C+0L3QsCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQn9Ch0JYnLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9Cc0LDRgNGB0LXQu9GMJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogbWFyY2VsSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHNjb3JlOiAnMTowJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHNjb3JlOiAnMTowJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHNjb3JlOiAnMTowJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHNjb3JlOiAnMTowJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHNjb3JlOiAnMTowJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICBzY29yZTogJzE6MCcsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgc2NvcmU6ICcxOjAnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHNjb3JlOiAnMTowJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbl1cclxuIiwiLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm93Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7XHJcbiAgICBvcmRlcixcclxuICAgIHRlYW1PbmVOYW1lLFxyXG4gICAgdGVhbU9uZUljb24sXHJcbiAgICB0ZWFtVHdvTmFtZSxcclxuICAgIHRlYW1Ud29JY29uLFxyXG4gICAgcHJlZGljdGlvbixcclxuICAgIGRhdGUsXHJcbiAgICBzY29yZSxcclxuICAgIHByaWNlXHJcbn0pIHtcclxuXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3BlcnNvbmFsJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gYGJvYXJkLmhlYWRlcnMuYCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcn0+e29yZGVyfS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtT25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RlYW1PbmVOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtT25lSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy52c30+VlMuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbVR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0ZWFtVHdvTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbVR3b0ljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uLnRoZXJlSXMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbl90aXRsZX0+e3RyYW5zbGF0ZSgncHJlZGljdGlvbicpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbl9ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcmVkaWN0aW9uLnRvdGFsQmV0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcmVkaWN0aW9uLmNvZWZmaWNlbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbXVsYXRvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV90aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGFibGV0X3Njb3JlfT57c2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjb3JlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Njb3JlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJpY2VfdGl0bGV9Pnt0cmFuc2xhdGUoJ3ByaWNlJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QR1NCdXR0b24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUEdTQnV0dG9uKHsgYWN0aXZlLCBjbGljayB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbnNcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdwZXJzb25hbCcpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdib2FyZC4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZSA/IHN0eWxlcy5hY3RpdmUgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnUEdCdXR0b24nKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUEdTQnV0dG9uIH0gZnJvbSBcIi4vUEdTQnV0dG9uL1BHU0J1dHRvblwiO1xyXG5pbXBvcnQgeyBQR0JvYXJkIH0gZnJvbSBcIi4vQm9hcmQvUEdCb2FyZC9QR0JvYXJkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHVyY2hhc2VkR2FtZXMoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICBbc2hvd2JvYXJkU3RhdGUsIHNldFNob3dCb2FyZFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gY29udGFpbmVyIGZvciBncmlkIHJpZ2h0IHdvcmtpbmdcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UEdTQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU9e3Nob3dib2FyZFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHNldFNob3dCb2FyZFN0YXRlKCFzaG93Ym9hcmRTdGF0ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxQR0JvYXJkXHJcbiAgICAgICAgICAgICAgICBzaG93PXtzaG93Ym9hcmRTdGF0ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VyX2RhdGEgfSBmcm9tICcvc3JjL3VzZXIvdXNlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vc2VySW5mby5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnMgXHJcbmltcG9ydCB1c2VyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL3BlcnNvbmFsL3VzZXItaW5wdXQuc3ZnJ1xyXG5pbXBvcnQgdW5rbm93biBmcm9tICcvcHVibGljL2ltYWdlcy9wZXJzb25hbC91bmtub3duLnN2ZydcclxuaW1wb3J0IGNhbGVuZGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL3BlcnNvbmFsL2NhbGVuZGFyLnN2ZydcclxuaW1wb3J0IGVtYWlsIGZyb20gJy9wdWJsaWMvaW1hZ2VzL3BlcnNvbmFsL21haWwuc3ZnJ1xyXG5pbXBvcnQgcGhvbmUgZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvcGhvbmUuc3ZnJ1xyXG5pbXBvcnQga2V5IGZyb20gJy9wdWJsaWMvaW1hZ2VzL3BlcnNvbmFsL2tleS5zdmcnXHJcbmltcG9ydCBjaGFuZ2UgZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvY2hhbmdlLnBuZydcclxuaW1wb3J0IGNhbWVyYSBmcm9tICcvcHVibGljL2ltYWdlcy9wZXJzb25hbC9jYW1lcmEuc3ZnJ1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNlbGVjdFVzZXIgfSBmcm9tICcvcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlJ1xyXG5pbXBvcnQgdXNlckRlZmF1bHRJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC5wbmcnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJztcclxuaW1wb3J0IHsgQ0hBTkdFX0FDQ09VTlRfSU1BR0UsIENIQU5HRV9BQ0NPVU5UX0lORk8gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy91c2VyU2xpY2UnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VySW5mbygpIHtcclxuXHJcbiAgICBjb25zdCB1c2VyX2luZm8gPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKVxyXG4gICAgY29uc29sZS5sb2codXNlcl9pbmZvKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoIGNoYW5nZU5hbWUgIT09IG51bGwgKVxyXG4gICAgICAgICAgICBjaGFuZ2VVc2VyRGF0YSggYHVzZXJuYW1lYCwgdXNlcl9pbmZvLnVzZXJuYW1lICk7XHJcbiAgICB9LFt1c2VyX2luZm8udXNlcm5hbWVdKTtcclxuICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoIGNoYW5nZURhdGUgIT09IG51bGwgKVxyXG4gICAgICAgICAgICBjaGFuZ2VVc2VyRGF0YSggYGRhdGVPZkJpcnRoYCwgdXNlcl9pbmZvLmRhdGVPZkJpcnRoICk7XHJcbiAgICB9LFt1c2VyX2luZm8uZGF0ZU9mQmlydGhdKTtcclxuICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoIGNoYW5nZVBob25lICE9PSBudWxsIClcclxuICAgICAgICAgICAgY2hhbmdlVXNlckRhdGEoIGBtb2JpbGVgLCB1c2VyX2luZm8ubW9iaWxlICk7XHJcbiAgICB9LFt1c2VyX2luZm8ubW9iaWxlXSk7XHJcbiAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKCBjaGFuZ2VFbWFpbCAhPT0gbnVsbCApXHJcbiAgICAgICAgICAgIGNoYW5nZVVzZXJEYXRhKCBgZW1haWxgLCB1c2VyX2luZm8uZW1haWwgKTtcclxuICAgIH0sW3VzZXJfaW5mby5lbWFpbF0pO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoYW5nZVVzZXJEYXRhKGtleSx2YWx1ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIChhd2FpdCByZXF1ZXN0KCBDSEFOR0VfQUNDT1VOVF9JTkZPLCB7W2tleV06dmFsdWV9LCB7YXV0aDogdHJ1ZX0gKSlcclxuICAgICAgICAgICAgdG9hc3QoIGBTdWNjZXNzZnVsbHkgdXBkYXRlZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCggZXJyICkge1xyXG4gICAgICAgICAgICB0b2FzdCggZXJyb3IucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBgQ2FuJ3QgdXBkYXRlYCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICAvLyBtYWtlIHN0YXRlcyBudWxsIGJ5IGRlZmF1bHQsIHRvIGtub3cgaWYgdGhleSBjaGFuZ2UgZm9yIGZpcnN0IHRpbWVcclxuICAgICAgICBbY2hhbmdlTmFtZSwgc2V0Q2hhbmdlTmFtZV0gPSB1c2VTdGF0ZShudWxsKSxcclxuICAgICAgICBbY2hhbmdlRGF0ZSwgc2V0Q2hhbmdlRGF0ZV0gPSB1c2VTdGF0ZShudWxsKSxcclxuICAgICAgICBbY2hhbmdlUGhvbmUsIHNldENoYW5nZVBob25lXSA9IHVzZVN0YXRlKG51bGwpLFxyXG4gICAgICAgIFtjaGFuZ2VFbWFpbCwgc2V0Q2hhbmdlRW1haWxdID0gdXNlU3RhdGUobnVsbCksXHJcbiAgICAgICAgW3VzZXJQaG90bywgc2V0VXNlclBob3RvXSA9IHVzZVN0YXRlKHVzZXJfaW5mby5waG90byA/PyB1c2VyRGVmYXVsdEljb24uc3JjICksXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigncGVyc29uYWwnKVxyXG4gICAgXHJcbiAgICBjb25zdCBjaGFuZ2VVc2VyUGhvdG8gPSBhc3luYyAoaW1hZ2UpID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChgcHJvZmlsZV9pbWdgLCBpbWFnZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaW1nUGF0aCA9IChhd2FpdCByZXF1ZXN0KCBDSEFOR0VfQUNDT1VOVF9JTUFHRSwgZm9ybURhdGEsIHthdXRoOiB0cnVlfSApKS5kYXRhPy5kYXRhLmltZ19wYXRoID8/IFwiXCI7XHJcbiAgICAgICAgICAgIHRvYXN0KCBgSW1hZ2Ugc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRgKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9naW4oey4uLnVzZXJfaW5mbywgcGhvdG86aW1nUGF0aCB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKCBlcnIgKSB7XHJcbiAgICAgICAgICAgIHRvYXN0KCBlcnJvci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IGBDYW4ndCB1cGRhdGUgaW1hZ2VgLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBgZXJyb3JgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9waG90b19jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlcl9waG90byc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNDQwXCIgc3JjPXt1c2VyUGhvdG8gPyB1c2VyUGhvdG8gOiB1bmtub3duLnNyY30gY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9waG90b30gYWx0PSdpY29uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhbWVyYS5zcmN9IGFsdD1cImljb25cIiBjbGFzc05hbWU9e3N0eWxlcy5jYW1lcmFJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2ZpbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd1c2VyX3Bob3RvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCAhPT0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyUGhvdG8oVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlVXNlclBob3RvKGUudGFyZ2V0LmZpbGVzWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb19pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuc3JjfSBhbHQ9J2ljb24nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXshY2hhbmdlTmFtZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkaXNwbGF5OiAnYmxvY2snIH0gOiB7IGRpc3BsYXk6ICdub25lJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Pnt1c2VyX2luZm8udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3VzZXJfaW5mby51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjaGFuZ2VOYW1lID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkaXNwbGF5OiAnYmxvY2snIH0gOiB7IGRpc3BsYXk6ICdub25lJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXNlcl9pbmZvLnVzZXJuYW1lID0gZS50YXJnZXQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjaGFuZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENoYW5nZU5hbWUoIWNoYW5nZU5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb19pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhbGVuZGFyLnNyY30gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXshY2hhbmdlRGF0ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkaXNwbGF5OiAnYmxvY2snIH0gOiB7IGRpc3BsYXk6ICdub25lJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Pnt1c2VyX2luZm8uZGF0ZU9mQmlydGh9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3VzZXJfaW5mby5kYXRlT2ZCaXJ0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdkYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjaGFuZ2VEYXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkaXNwbGF5OiAnYmxvY2snIH0gOiB7IGRpc3BsYXk6ICdub25lJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXNlcl9pbmZvLmRhdGVPZkJpcnRoID0gZS50YXJnZXQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjaGFuZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENoYW5nZURhdGUoIWNoYW5nZURhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb19pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bob25lLnNyY30gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXshY2hhbmdlUGhvbmUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGlzcGxheTogJ2Jsb2NrJyB9IDogeyBkaXNwbGF5OiAnbm9uZScgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfT57dXNlcl9pbmZvLm1vYmlsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dXNlcl9pbmZvLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjaGFuZ2VQaG9uZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGlzcGxheTogJ2Jsb2NrJyB9IDogeyBkaXNwbGF5OiAnbm9uZScgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVzZXJfaW5mby5tb2JpbGUgPSBlLnRhcmdldC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NoYW5nZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2hhbmdlUGhvbmUoIWNoYW5nZVBob25lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9faW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlbWFpbC5zcmN9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17IWNoYW5nZUVtYWlsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRpc3BsYXk6ICdibG9jaycgfSA6IHsgZGlzcGxheTogJ25vbmUnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+e3VzZXJfaW5mby5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dXNlcl9pbmZvLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NoYW5nZUVtYWlsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkaXNwbGF5OiAnYmxvY2snIH0gOiB7IGRpc3BsYXk6ICdub25lJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXNlcl9pbmZvLmVtYWlsID0gZS50YXJnZXQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjaGFuZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0naWNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDaGFuZ2VFbWFpbCghY2hhbmdlRW1haWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbmdlUGFzc3dvcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtrZXkuc3JjfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ2JvYXJkLmhlYWRlcnMuY2hhbmdlUGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGUpID0+IHVzZXJfaW5mby5lbWFpbCA9IGUudGFyZ2V0LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2hhbmdlLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2ljb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vY29tbW9uL1RpdGxlL1RpdGxlJ1xyXG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnLi9Db250ZW50L0NvbnRlbnQnXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BlcnNvbmFsLm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbCgpIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgcGFnZT0ncGVyc29uYWwnXHJcbiAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9J3RpdGxlJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RpdGxlLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGl0bGUoe1xyXG4gIHBhZ2UgPSBcImNvbW1vblwiLFxyXG4gIHRleHRQYXRoTmFtZSA9IFwiWW91IGFyZSBkb250IHB1dCB0aGVyZSB0ZXh0LlwiLFxyXG4gIGxvY2F0aW9uSW5QYWdlID0gXCJcIixcclxuICB0ZXh0U3R5bGVzID0gbnVsbCxcclxuICBocmVmLFxyXG4gIGNsYXNzZXMsXHJcbn0pIHtcclxuICBjb25zdCAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihwYWdlKSxcclxuICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5QYWdlfWAsXHJcbiAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAge2hyZWYgPyAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBzdHlsZT17dGV4dFN0eWxlc31cclxuICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0cmFuc2xhdGUoYCR7dGV4dFBhdGhOYW1lfWApfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBzdHlsZT17dGV4dFN0eWxlc30gY2xhc3Nlcz17Y2xhc3Nlc30+XHJcbiAgICAgICAgICB7dHJhbnNsYXRlKGAke3RleHRQYXRoTmFtZX1gKX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBob3N0ID0gXCJodHRwczovL3d3dy5mb290YmV0MjQuY29tL2FwaVwiO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSAoIGRlc3RpbmF0aW9uLCBwYXlsb2FkID0gbnVsbCwgb3B0aW9ucyA9IG51bGwgKSA9PiBuZXcgUHJvbWlzZSggKCByc2x2LCByamN0ICkgPT4ge1xyXG4gIGxldCBoZWFkZXJzID0ge307XHJcblxyXG4gIGlmICggb3B0aW9ucyApIHtcclxuICAgIGlmICggb3B0aW9ucy5hdXRoID09PSB0cnVlICkge1xyXG4gICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShgYWNjZXNzLXRva2VuYCl9YCB8fCBgYCAvLyBmb3IgbW9zdCBvZiByZXF1ZXN0c1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCBgaGVhZGVyc2AgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMgaW5zdGFuY2VvZiBPYmplY3QgKSB7XHJcbiAgICAgIGhlYWRlcnMgPSB7IC4uLmhlYWRlcnMsIC4uLm9wdGlvbnMuaGVhZGVycyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyggYHN0YXJ0IGxvYWRpbmdgICk7XHJcbiAgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBkZXN0aW5hdGlvbi5tZXRob2QsXHJcbiAgICB1cmw6IGRlc3RpbmF0aW9uLnVybCxcclxuICAgIGhlYWRlcnMsXHJcbiAgICBkYXRhOiBwYXlsb2FkIHx8IHt9XHJcbiAgfSlcclxuICAudGhlbiggcnNsdiApXHJcbiAgLmNhdGNoKCByamN0IClcclxuICAuZmluYWxseSggKCkgPT4gY29uc29sZS5sb2coIGBlbmQgbG9hZGluZ2AgKSApXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBuYW1lID0+IHtcclxuICB2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xyXG4gIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYyA9IGNhW2ldO1xyXG5cclxuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEsIGMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gbmFtZSA9PiB7XHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9OyBQYXRoPS87IEV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAobmFtZSwgdmFsdWUsIGRheXMpID0+IHtcclxuICBsZXQgZXhwaXJlcyA9IFwiXCI7XHJcblxyXG4gIGlmIChkYXlzKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyAodmFsdWUgfHwgXCJcIikgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG59XHJcbiIsImltcG9ydCB7aG9zdH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IEFVVEhfVVJMID0gaG9zdCArIGBhdXRoL2A7XHJcbmNvbnN0IEFDQ09VTlRfVVJMID0gaG9zdCArIGBhY2NvdW50L2BcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ3JlZ2lzdHJhdGlvbicsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyAnbG9naW4nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUNDT1VOVF9JTkZPID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAnaW5mbycsXHJcbiAgbWV0aG9kOiAnZ2V0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lNQUdFID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAncHJvZmlsZS1pbWFnZScsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVJUX1JFU0VUX1BBU1NXT1JEID0gZW1haWwgPT4gKHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL3Jlc2V0P2VtYWlsPSR7ZW1haWx9YCxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBWRVJJRllfUEFTU1dPUkRfUkVTRVQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC92ZXJpZnlfY29kZWAsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX05FV19QQVNTV09SRCA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL25ld19wYXNzd29yZCBgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9ORVdTID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbmV3c2AsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVMgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBtYXRjaC1vZi10aGUtZGF5YCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYG1hdGNoLW9mLXRoZS1kYXk/dHlwZT1uZXh0X2RheWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BSRURJQ1RJT05TID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgcHJlZGljdGlvbmAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZFRURCQUNLID0gaWQgPT4gKHtcclxuICB1cmw6IGhvc3QgKyBgZmVlZGJhY2svJHtpZH0/c29ydF9ieT1jcmVhdGVkX2F0Jm9yZGVyX2J5PWRlc2NgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19CWV9UWVBFID0gdHlwZSA9PiAoe1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgZ2FtZT90eXBlPSR7dHlwZX1gLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfRkVFREJBQ0sgPSB7XHJcbiAgdXJsOiBob3N0ICsgYGZlZWRiYWNrYCxcclxuICBtZXRob2Q6IGBwb3N0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRJU1RJQ1MgPSB7XHJcbiAgdXJsOiBob3N0ICsgYGFkbWluL3N0YXRpc3RpY3NgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRldGVjdERvbWFpbkxvY2FsZT1kZXRlY3REb21haW5Mb2NhbGU7ZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkl0ZW1zLGhvc3RuYW1lLGRldGVjdGVkTG9jYWxlKXtsZXQgZG9tYWluSXRlbTtpZihkb21haW5JdGVtcyl7aWYoZGV0ZWN0ZWRMb2NhbGUpe2RldGVjdGVkTG9jYWxlPWRldGVjdGVkTG9jYWxlLnRvTG93ZXJDYXNlKCk7fWZvcihjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKXt2YXIgX2l0ZW0kZG9tYWluLF9pdGVtJGxvY2FsZXM7Ly8gcmVtb3ZlIHBvcnQgaWYgcHJlc2VudFxuY29uc3QgZG9tYWluSG9zdG5hbWU9KF9pdGVtJGRvbWFpbj1pdGVtLmRvbWFpbik9PW51bGw/dm9pZCAwOl9pdGVtJGRvbWFpbi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7aWYoaG9zdG5hbWU9PT1kb21haW5Ib3N0bmFtZXx8ZGV0ZWN0ZWRMb2NhbGU9PT1pdGVtLmRlZmF1bHRMb2NhbGUudG9Mb3dlckNhc2UoKXx8KF9pdGVtJGxvY2FsZXM9aXRlbS5sb2NhbGVzKSE9bnVsbCYmX2l0ZW0kbG9jYWxlcy5zb21lKGxvY2FsZT0+bG9jYWxlLnRvTG93ZXJDYXNlKCk9PT1kZXRlY3RlZExvY2FsZSkpe2RvbWFpbkl0ZW09aXRlbTticmVhazt9fX1yZXR1cm4gZG9tYWluSXRlbTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXRlY3QtZG9tYWluLWxvY2FsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJcbiAgICBpbXBvcnQgX19pMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4gICAgaW1wb3J0IF9fbG9hZE5hbWVzcGFjZXMgZnJvbSAnbmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXMnXG4gICAgXG5pbXBvcnQgUGVyc29uYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZXMvUGVyc29uYWwvUGVyc29uYWxcIjtcclxuXHJcblxyXG5jb25zdCBQZXJzb25hbFBhZ2UgPSAoKSA9PiA8UGVyc29uYWwgLz5cclxuXHJcblBlcnNvbmFsUGFnZS5sYXlvdXQgPSBcIndpdGhvdXRQaG90b1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxQYWdlO1xyXG5cblxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC4uLihhd2FpdCBfX2xvYWROYW1lc3BhY2VzKHtcbiAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICBwYXRobmFtZTogJy9wZXJzb25hbCcsXG4gICAgICAgICAgICAgIGxvYWRlck5hbWU6ICdnZXRTdGF0aWNQcm9wcycsXG4gICAgICAgICAgICAgIC4uLl9faTE4bkNvbmZpZyxcbiAgICAgICAgICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgICB1c2VyOiBudWxsXHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBsb2dpbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dvdXQ6IHN0YXRlID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudXNlciA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHsgbG9naW4sIGxvZ291dCB9ID0gdXNlclNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyID0gc3RhdGUgPT4gc3RhdGUudXNlci51c2VyXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlciIsImltcG9ydCB1c2VySWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vdXNlcnBob3RvLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyX2RhdGEgPSB7XHJcbiAgICBwaG90bzogdXNlckljb24uc3JjLFxyXG4gICAgYmlydGhEYXRlOiAnMTIuMDMuMTk3OCcsXHJcbiAgICB0ZWxlcGhvbmU6ICcrNDk1IC0yNTQtMjQtNzUnLFxyXG4gICAgZnVsbE5hbWU6ICfQkNC70LXQutGB0LDQvdC00YAg0JzQuNGF0LDQtdCy0LAnLFxyXG4gICAgZW1haWw6ICcgYWxleC5taWtoYWV2YS4xOUBtYWlsLnJ1J1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC4wODE0YzI0YjIzOTEzOGE4MTc1ZmFkZDI1NTQyNzhhMC5wbmdcIixcImhlaWdodFwiOjM1LFwid2lkdGhcIjozNixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBcjBsRVFWUjQyaldNTVFyQ1VCQkU5eEtDV0hnRUM4SENrMmdhUFZJQ1NpQ2doVldpdHRZbXBkZ2sybW5oRlFRbEpCcmR6UXdrQysvL1lXWVlNVE5SMVRIK0RQeEFCYzd3aHN3WWprQmh1UGlZYUJ3blNnM3ZCUVlzbkdnVVJma1ZFUVBVbjZhVXNGQlJBM1BkaFhyZWtycGRlVXM3SHdRcm5VNW02amh6OWYyQUJkNVQ4Qnp5UE9kMENmNkVtaDV1ejBJZks0ODB2VmdVN1N3TXQ1WmxWODdma0hWWklEMndBZmVHTmVpWW1kUlFBTkVUK0dwbWNBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9jb21tb24vdXNlcnBob3RvLjA4NDdjNWI3YzEzZTQwOTMxMDdhMTE1NGE4NGQyMzUyLnBuZ1wiLFwiaGVpZ2h0XCI6NDI2LFwid2lkdGhcIjo0NDUsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQTZVbEVRVlI0MmlXTXUwb0RVUlJGOTdsejUyRWhZcW9ROEJFczdLMzhCaXRiOGY4c0JRcy9RTEFWQTRHa1VDeEVaOGJNWk1ob0VpZjNjVTY0cE5xYnZSY0xYOVdjcS9hWDE5WnlQcXY0OGVGZW1rWExMTUxHZTFhS2lDQ0NLTkkwZVgxQiszeUh0djRoQWhCMkZTSjBGc2o1NlFCSm1pSE45Z1RZUGNwNUh4eTBYSzFwc2RHa2ppOWdWVXhPQUJhQmRzNkw5NHpQc3NGNzBXRjRlWTNKV3drbk1ZNzZoMURlZXhqclFHeHdkaUQ0bTFjVWljVnM5SVJWblVNYmF5aEpVMUZkUTRQL3FmUTRScEdYdEZrVzhwSHBBRmlZcm9QZTcyRThhcWo1bm1KY0o3aTZ1VVYvZUlJdGxJcUMrWllYdVFFQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMuMjgzODIwZmQyNmFlMzA4NTQyYzQ5OTg3NDdmNmYxNTAucG5nXCIsXCJoZWlnaHRcIjo2MyxcIndpZHRoXCI6NTgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTZVbEVRVlI0MmpYS3YyckNVQmdGOER2NE1vVytSNGZPaFQ1TDdSZ1hONkZMQzVFVUhCcHEwZzRYR2tXdzRvMjVYTkFoRUM1Sk1MbUtVZkRQb0tBSTBlL1REUDZXd3prY0VzZHg3dnMrY3M1QkNBRkJFSUFZamZDNkFWRks3Wklrd1NnTXdmVThrRktDYXhpbzBuUlBHR094cnV2NHFtbG5xOUdBOVk5OW5sQ0tUcWVUa01WOGJsNFArRld0bmpiTmJ6amE5aW1MSWh3clpSRlBpS2ZaZElxcmovY2NlLys0ck5melJaYmhnUE5uVWhpbnFaRDlQbTQvalVQUTdhSU13eUc1MFNxVk82ZmRQakRMd2w5S2p5L2w4ajBwTU5jdEZkazB6UWZhYXVWdnRkcGowZjhjcDNRQldmeWJqNTArY29zQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLjJjZTc1ZTIxMTYyZTJlNmRjNDhiOTllNjAxODEwN2UwLnBuZ1wiLFwiaGVpZ2h0XCI6NjIsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUEwMGxFUVZSNG5BSElBRGYvQVd4dGhzVGUzK2N4OHZQNkNnd0tCQUFHQndYMkJoQU96d0dEaEpiL056WXVBTnpjNGY4RUJ3Y0F5TWZTQVJEaTRRQUJqNUNnL0JFUURRTDcvLzhCdktxK0FIdDhYdi9qcjZ2L0FXaHBndjMxOXZrQ01ERWwveS84N0FBeVMwZ0J3NldxL3dGZWFJUC9Kd0gyL1ZsV1JBUCsrdm9BQ0JNVC9kQ3dzd01Cbm9XTzlVNVFSUXJ0NE4vOC92Ny9BQkVkSFFURnNMYjNBWTJUb1RBb0J2Nm1KU0FZS1FBQUFBRGM0ZWpZeXY0S1d3RnFJMFlBbHQyNkJybXNzcnNBQUFBQlIxUk9SVlVvVWZsK2xWdHJTVEN5NFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9iYXJjYS5hZjM1NTI3YjE2MDY3NmVhYzdhNmQ1YzBhNjA4ODNjMy5wbmdcIixcImhlaWdodFwiOjQ5LFwid2lkdGhcIjo0OCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFCQ2tsRVFWUjQybVBveTJUd1dyK3NvbXQ3aSsvV1RmTnkrdGEwU1BWdmEyYmJ1cXFkdVhOS0dZTTdRME02Zzl1MURiUCtQODRvL245MzBkVC9EMmFhL1g4N1Rmei81U2tpLzlzYkdSd1pnRUQwMHB4cEg1NTRGUDUvT0hYNjd4ZXo3SDUvbkNMei8yS3IzRHNHYlFaaGhpMGREQlBmbnEzNWYyMXh4SjhUNjJ2LzdlcFYvbmQ1RHNPZmwxc1kvbS91WitoaFdORmp1M0pCaWYvL09XbCt2M3VUWFA3WHhZWC9uNW9ROFh0eGZmTC9sZDBXU3htYXF1eFRDM3hLL3VjeWxQL2VPQ1hzeithcGdYOEtHRXIvRlBvVy9lK3V0NDVqWUNoZ1lGMWFLckt4Tnp6cC83VEMrUC9UaStMKzk0WW4vRjllSnJLY0FSbE1iMmF3VzlXb01CdUlaODFzWmJDQmlRTUFrUHQ5V013aVpXd0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLmViNDYwNDg2NGNlMjQwMWFhMjRmYjRlZDI3MWY2ZTgzLnBuZ1wiLFwiaGVpZ2h0XCI6NTMsXCJ3aWR0aFwiOjQxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUF0VWxFUVZSNDJtT29uN09GbFFFSTdpNW4wSDI0Z2tFZHhHNmNzd2tvQmdMVGJyamF6TGdRYXpIOVlnS1FiUThSbkg2ZG4zbjZ0ZjFBZ1U2R2FkZW5BTm5iZ1RRWFVQVzFiaUJlRHhSWXdUVHQrbHFnd2pWQWlWWUdvT0IySUY0RXhCZUJBdWNacGw5YkFtUnZaaENhZm0yRDRQUnJpL21tWDVzQlpQY0tUTCsyRG9nWEFIWGNhV0dZZHJ1WFllcWRVSWFwZHdPQjdNbEFYTWV3WW41Zjl0NUZtUjRyRjNRN3IxM1E1clYzVVpiVG92bFRZZ0FGWlZmQWV1WldQUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Bzai4xOTkwOWNkYzI3ZTZlNzRkYTQxM2Y0YTIyMTJkYWQ5Ny5wbmdcIixcImhlaWdodFwiOjQ3LFwid2lkdGhcIjo0NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFCRTBsRVFWUjRuQUVJQWZmK0FVMStyQUN6eitvUFpUMGJoZ2tIQkVZSkJnVC82ZS8ydHFEZjhYcFZIQXoyQVFBaWlnOStlakhCQ0FjRkx3UUJBUUQ4L1AwQTlmdjlBUG44L3NtTXROZENBV2FLc1pydzd2VmxCUlFPK1VIMDdRWDYvdjhBMGhZWSsramc3QWNXRncyT0FWRjhxdUR5Ni9NZnZRZ0svdEFEM3dINUFRTUFOL2tkLzBENjl3SWNHdy9ZQVZaOXF1SEU2L1llbFM0Ty9pZmUxQUVDQkFNQXp4d3EvMW5SN3dKaUhnN2FBVytPczV5czNlNWpseVVKK2NiNSt3VU1BZ0FBS2dJRSsyemUrQWRZSlJPUkFVeUZzQThhQkFEQnl1LzRMeG4rL2dBS0NnWUE1UG45QURBUkNjbjBDd3BDQVdtUXRRRG44L29PSHdvRGl1ZnkrVVVHQkFML0V3a0Z0Y3ZzOW5rc0ZnejJRb3AyRFloOFlJa0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5kN2Y1OTczMDQ5NDc0MDBmYjIwZjA1ZTJkYWU2YjVmYi5wbmdcIixcImhlaWdodFwiOjUxLFwid2lkdGhcIjo0NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBNmtsRVFWUjQybVBZM2NHamtlSFBlVGZFZ3VIY1ZnT0cvYytEeEsrOVNGWTkrMjJEZ0FERHVqWTljM1VHaHY5SHE2di9IMSs2NVAvYXBMVC9UMndZUHY3WTRDekIwRmFxNXAvSXdQRC8xOEg5dng5ZHUvcG45YXBWLzI3ck1mejhNOU5ObDZFNlhxcVhnWUhoLzYyK3J0KzdlcnYvTDZ1dS92TlFtdUgvNndxRFZJWmNmNEV0eXNibS85MU1ESDV2OFBQOC96alk4OWZUWU8vL3p6TlUraGdhRTNnbU9Ka1ovV2V3ZFBpL0k4am45OXVvOFArUHc5My92eTZUeldENGY0NkJveldHb1YvYWdPSExSaDJCLzYvOVpGOC95MmFvWkVBR3U2YUlxNTJ1a09uNWYwQmZHQ1lHQU5aS1pzRmMyMXZIQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvY2FsZW5kYXIuOTIzOTBkYWE4ZDkzNjFlZmUxMGU4NWQ3Mjc0MTAzYTkuc3ZnXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzV9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9wZXJzb25hbC9jYW1lcmEuNmM1M2NjZmE0MTU1ODNjZDVjYjdhYzViYmE3MmVmZGYuc3ZnXCIsXCJoZWlnaHRcIjo3NSxcIndpZHRoXCI6NzV9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9wZXJzb25hbC9jaGFuZ2UuMzZkMzI4ZDEyMTUyMjM5NTZhNzNmNGU2ZDM5NjE5MzkucG5nXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzUsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQTJVbEVRVlI0Mm1NQWdZK3YzckI4Ly94WjVPK2ZQeEtmMzc2VCtmLy9QeGNEREh3Q1NnSUZSSUJZNk4vLy81SkFtdVBvak1XT1o1YXROMlFBQWFBQTM5MFRaelhYQk9hVmJNOXZEZHBlMWhHK1NDVms1NUhwaXh5QmNwd2dCVHg3MmlmNzdLanFEZ1pLaHMxbGNQMi9yYXc5SEdRU3lEcVFBdDY5blZPOVR5eFlhYm1uYzRvdlVESnNHOUFrb0xnRXlFME1JSlZIcGk5MFdST1dYM2xpd1NyTEhkWGR3U0RyUUc3Ni92bUxDRWdCODQvUFh5UVBUMXZvc3Jkem1qZlFPdDg3UjA5cGd4eis4ZFZyRnBoRG1VRW1nZHdEeFh3d1NRRGJUcFlvcVJXdUxRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9wZXJzb25hbC9rZXkuMzVlNjhjOWU0YTdiNTk5ODE3OTZjZTJiN2VhODEwMWIuc3ZnXCIsXCJoZWlnaHRcIjoxNyxcIndpZHRoXCI6MTd9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9wZXJzb25hbC9tYWlsLmNhOGQ0YjczYWE1MThlNGY0Mjc5ZDkzZTFmMGY0YzU0LnN2Z1wiLFwiaGVpZ2h0XCI6MzUsXCJ3aWR0aFwiOjM1fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvcGhvbmUuMjk5MmIwYzFmOWIzMjQxYTE5NWVhZWZmNGMwYmJmYmUuc3ZnXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzV9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9wZXJzb25hbC91bmtub3duLjQ4OTlhOWM5MzM0MWU4OGYxOGQ1MWFjYTYwZGJkYWM2LnN2Z1wiLFwiaGVpZ2h0XCI6NDI2LFwid2lkdGhcIjo0NDV9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9wZXJzb25hbC91c2VyLWlucHV0LjliNjk5MDMzYzc0ZDIxZWQwZjkwNTk5YWExNTJkNmMyLnN2Z1wiLFwiaGVpZ2h0XCI6MzUsXCJ3aWR0aFwiOjM1fTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDb250ZW50X2NvbnRhaW5lcl9fMndLTEpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkJvYXJkSGVhZGVyX2NvbnRhaW5lcl9fMzhDTGxcIixcblx0XCJsZWZ0XCI6IFwiQm9hcmRIZWFkZXJfbGVmdF9fMkdGdERcIixcblx0XCJyaWdodFwiOiBcIkJvYXJkSGVhZGVyX3JpZ2h0X18xSExGSlwiLFxuXHRcImZvcl90YWJsZXRzXCI6IFwiQm9hcmRIZWFkZXJfZm9yX3RhYmxldHNfXzNwVndEXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQR0JvYXJkX2NvbnRhaW5lcl9fM1llWkFcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiUEdCb2FyZF90cmFuc2l0aW9uX19HN2lxN1wiLFxuXHRcImJvYXJkXCI6IFwiUEdCb2FyZF9ib2FyZF9fWFJicjhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlJvd19jb250YWluZXJfXzFBdHFFXCIsXG5cdFwiY29udGVudFwiOiBcIlJvd19jb250ZW50X19lRzVNSFwiLFxuXHRcImxlZnRcIjogXCJSb3dfbGVmdF9fN0tfMjBcIixcblx0XCJ2c1wiOiBcIlJvd192c19fMnFOeWRcIixcblx0XCJ0ZWFtT25lXCI6IFwiUm93X3RlYW1PbmVfX2Z2ZGJtXCIsXG5cdFwidGVhbVR3b1wiOiBcIlJvd190ZWFtVHdvX18yaDlWQVwiLFxuXHRcIm9yZGVyXCI6IFwiUm93X29yZGVyX18zWV9mS1wiLFxuXHRcInJpZ2h0XCI6IFwiUm93X3JpZ2h0X18zNTE2NFwiLFxuXHRcInByZWRpY3Rpb25cIjogXCJSb3dfcHJlZGljdGlvbl9fMVA4bEFcIixcblx0XCJwcmVkaWN0aW9uX2NvbnRlbnRcIjogXCJSb3dfcHJlZGljdGlvbl9jb250ZW50X19GZjBCTlwiLFxuXHRcInByZWRpY3Rpb25fdGl0bGVcIjogXCJSb3dfcHJlZGljdGlvbl90aXRsZV9fMkdNWE1cIixcblx0XCJwcmVkaWN0aW9uX2JvZHlcIjogXCJSb3dfcHJlZGljdGlvbl9ib2R5X18xeVpWOVwiLFxuXHRcInNpbXVsYXRvclwiOiBcIlJvd19zaW11bGF0b3JfXzNjTjdoXCIsXG5cdFwiZGF0ZV90aW1lXCI6IFwiUm93X2RhdGVfdGltZV9fMmt4Z3JcIixcblx0XCJkYXRlXCI6IFwiUm93X2RhdGVfXzNXNXpFXCIsXG5cdFwidGltZVwiOiBcIlJvd190aW1lX18zeERENlwiLFxuXHRcInRhYmxldF9zY29yZVwiOiBcIlJvd190YWJsZXRfc2NvcmVfX1lzd1ZzXCIsXG5cdFwic2NvcmVcIjogXCJSb3dfc2NvcmVfXzNCNXU2XCIsXG5cdFwicHJpY2VcIjogXCJSb3dfcHJpY2VfXzJkVmp3XCIsXG5cdFwicHJpY2VfdGl0bGVcIjogXCJSb3dfcHJpY2VfdGl0bGVfXzJQRkV0XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQR1NCdXR0b25fY29udGFpbmVyX19JanVaUVwiLFxuXHRcImNvbnRlbnRcIjogXCJQR1NCdXR0b25fY29udGVudF9fMVZ0SGFcIixcblx0XCJhY3RpdmVcIjogXCJQR1NCdXR0b25fYWN0aXZlX18yRHotMVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVXNlckluZm9fY29udGFpbmVyX18zcThqQ1wiLFxuXHRcImNvbnRlbnRcIjogXCJVc2VySW5mb19jb250ZW50X18yenRxY1wiLFxuXHRcInVzZXJfcGhvdG9fY29udGVudFwiOiBcIlVzZXJJbmZvX3VzZXJfcGhvdG9fY29udGVudF9fM3RRRlhcIixcblx0XCJ1c2VyX3Bob3RvXCI6IFwiVXNlckluZm9fdXNlcl9waG90b19fMUdiVVNcIixcblx0XCJjYW1lcmFJY29uXCI6IFwiVXNlckluZm9fY2FtZXJhSWNvbl9fTEhueXJcIixcblx0XCJpbnB1dHNfY29udGVudFwiOiBcIlVzZXJJbmZvX2lucHV0c19jb250ZW50X18yMVNqN1wiLFxuXHRcImluZm9faW5wdXRcIjogXCJVc2VySW5mb19pbmZvX2lucHV0X18yRDcyTFwiLFxuXHRcImNoYW5nZVBhc3N3b3JkXCI6IFwiVXNlckluZm9fY2hhbmdlUGFzc3dvcmRfXzEwUjg4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQZXJzb25hbF9jb250YWluZXJfXzFnZzlUXCIsXG5cdFwiY29udGVudFwiOiBcIlBlcnNvbmFsX2NvbnRlbnRfXzFpVk56XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJUaXRsZV9jb250YWluZXJfXzFnMy1nXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9
