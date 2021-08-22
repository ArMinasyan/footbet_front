(function() {
var exports = {};
exports.id = "pages/prediction";
exports.ids = ["pages/prediction"];
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

/***/ "./components/Pages/PredictionPayments/Header/Bar/Bar.jsx":
/*!****************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Header/Bar/Bar.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bar": function() { return /* binding */ Bar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/Button/Button */ "./components/Pages/common/Button/Button.jsx");
/* harmony import */ var _Bar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bar.module.scss */ "./components/Pages/PredictionPayments/Header/Bar/Bar.module.scss");
/* harmony import */ var _Bar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Bar_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Header\\Bar\\Bar.jsx";
// componetns
 // styles


function Bar({
  predClick,
  paymClick,
  predActive,
  paymActive
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Bar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Bar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
        page: "prediction",
        textPathName: "header.barButtons.express",
        aditionalStyles: (_Bar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
        click: predClick,
        active: predActive && predActive
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
        page: "prediction",
        textPathName: "header.barButtons.ordinar",
        aditionalStyles: (_Bar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
        click: paymClick,
        active: paymActive && paymActive
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
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

/***/ "./components/Pages/PredictionPayments/Header/Header.jsx":
/*!***************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Header/Header.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bar_Bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bar/Bar */ "./components/Pages/PredictionPayments/Header/Bar/Bar.jsx");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Header\\Header.jsx";
// components

function Header({
  predClick,
  paymClick,
  predActive,
  paymActive
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Bar_Bar__WEBPACK_IMPORTED_MODULE_1__.Bar, {
      predClick: predClick,
      paymClick: paymClick,
      predActive: predActive,
      paymActive: paymActive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/PredictionPayments.jsx":
/*!********************************************************************!*\
  !*** ./components/Pages/PredictionPayments/PredictionPayments.jsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PredictionPayments; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _PredictionPayments_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PredictionPayments.module.scss */ "./components/Pages/PredictionPayments/PredictionPayments.module.scss");
/* harmony import */ var _PredictionPayments_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PredictionPayments_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header/Header */ "./components/Pages/PredictionPayments/Header/Header.jsx");
/* harmony import */ var _Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tabs/Tabs */ "./components/Pages/PredictionPayments/Tabs/Tabs.jsx");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\PredictionPayments.jsx";
// hooks

 // styles

 // components



function PredictionPayments() {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),
        // review queries for understanding user want buy game (if ye, which game ) or not
  openGamePaymentsPage = Object.keys(router.query).length === 0 ? false : true,
        // states
  {
    0: showPredictionTab,
    1: setShowPredictionTabs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!openGamePaymentsPage),
        {
    0: showPaymentTab,
    1: setShowPaymentTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(openGamePaymentsPage);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PredictionPayments_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_PredictionPayments_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {
        predClick: () => {
          setShowPredictionTabs(true);
          setShowPaymentTab(false);
        },
        predActive: showPredictionTab,
        paymClick: () => {
          setShowPredictionTabs(false);
          setShowPaymentTab(true);
        },
        paymActive: showPaymentTab
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4__.Tabs, {
        predictionTab: showPredictionTab,
        paymentTab: showPaymentTab,
        click: () => {
          setShowPredictionTabs(false);
          setShowPaymentTab(true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/GameInfo/GameInfo.jsx":
/*!***********************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/GameInfo/GameInfo.jsx ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameInfo": function() { return /* binding */ GameInfo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GameInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameInfo.module.scss */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/GameInfo/GameInfo.module.scss");
/* harmony import */ var _GameInfo_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GameInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PaymentTab\\GameInfo\\GameInfo.jsx";
// hooks
 // styles


function GameInfo({
  game
}) {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('prediction'),
        translationPath = 'tabs.payments.',
        translate = key => t(`${translationPath}${key}`);

  if (!game) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 16
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_GameInfo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_GameInfo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_GameInfo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teams),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_GameInfo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamOne),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: game.teamOneIcon,
            alt: "icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: game.teamOneName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "VS."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_GameInfo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamTwo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: game.teamTwoIcon,
            alt: "icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: game.teamTwoName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_GameInfo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().gameDetailes),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_GameInfo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().gameDetContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [translate('coefficent'), ": ", game.coefficent]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [translate('gameStartingDate'), " ", game.date, " / ", game.time]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Details/Details.jsx":
/*!*********************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Details/Details.jsx ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Details": function() { return /* binding */ Details; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_payments_paypall_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/payments/paypall.png */ "./public/images/payments/paypall.png");
/* harmony import */ var _Details_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Details.module.scss */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Details/Details.module.scss");
/* harmony import */ var _Details_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Details_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PaymentTab\\PaymentPart\\Details\\Details.jsx";
// hooks
 // icons

 // styles


function Details({
  game
}) {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('prediction'),
        translationPath = 'tabs.payments.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().price),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: game.price
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().choosePaySys),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: translate('choosePaySys').toUpperCase()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().choosePaySys_content),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('bankCard')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/PaymentPart.jsx":
/*!*****************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/PaymentPart.jsx ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPart": function() { return /* binding */ PaymentPart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PaymentPart_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PaymentPart.module.scss */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/PaymentPart.module.scss");
/* harmony import */ var _PaymentPart_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PaymentPart_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Details_Details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details/Details */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Details/Details.jsx");
/* harmony import */ var _Payment_Payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Payment/Payment */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Payment.jsx");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PaymentTab\\PaymentPart\\PaymentPart.jsx";
// styles
 // components



function PaymentPart({
  game
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PaymentPart_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [game !== undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Details_Details__WEBPACK_IMPORTED_MODULE_1__.Details, {
      game: game
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Payment_Payment__WEBPACK_IMPORTED_MODULE_2__.Payment, {}, void 0, false, {
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

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/CardForm/CardForm.jsx":
/*!*******************************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/CardForm/CardForm.jsx ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardForm": function() { return /* binding */ CardForm; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/yup */ "@hookform/resolvers/yup");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardForm.module.scss */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/CardForm/CardForm.module.scss");
/* harmony import */ var _CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Success_Success__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Success/Success */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Success/Success.jsx");
/* harmony import */ var _Pending_Pending__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Pending/Pending */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Pending/Pending.jsx");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PaymentTab\\PaymentPart\\Payment\\CardForm\\CardForm.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks and helpers




 // styles

 // components



function CardForm() {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()('prediction'),
        translationPath = 'tabs.payments.cardForm.',
        translate = key => t(`${translationPath}${key}`),
        // states
  {
    0: showSuccess,
    1: setShowSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
        {
    0: showPending,
    1: setShowPending
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
        {
    0: showForm,
    1: setShowForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
        // functions
  jump = x => {
    if (x.value.length === 4) {
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
        // yup configs
  schema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
    fullName: yup__WEBPACK_IMPORTED_MODULE_2__.string().required().matches(/(^[A-Z ]*$)/mg),
    CVV: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(3).max(3).required(),
    activeUntill: yup__WEBPACK_IMPORTED_MODULE_2__.string().required().min(5).max(5).matches(/(^[0-9/]*$)/mg)
  }),
        cardNumberSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
    Quartet1: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg),
    Quartet2: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg),
    Quartet3: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg),
    Quartet4: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg)
  }),
        // cardNumbers schema
  margedSchema = schema.concat(cardNumberSchema),
        // form configs
  {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(margedSchema)
  }),
        submit = data => {
    let dataEntries = Object.entries(data),
        cardNumbers = dataEntries.filter(el => el[0].indexOf('Quartet') > -1).reduce((ac, el) => ac + el[1], ""),
        transformedData = dataEntries.filter(el => el[0].indexOf('Quartet'));
    transformedData.push(["cardNumber", cardNumbers]);
    setShowForm(false);
    setShowSuccess(true);
    console.log(transformedData);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showForm && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleSubmit(submit),
          autoComplete: "off",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().name),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
              id: "fullName"
            }, register('fullName')), {}, {
              type: "text",
              placeholder: translate('fullName'),
              className: errors.fullName ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_success)
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card_number_content),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: translate('cardNumber')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card_number_inputs),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
                id: "quartet1"
              }, register('Quartet1')), {}, {
                type: "text",
                className: `move ${errors.Quartet1 ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_success)}`,
                onInput: e => jump(e.target),
                onKeyDown: e => jumpBack(e)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
                id: "quartet2"
              }, register('Quartet2')), {}, {
                type: "text",
                className: `move ${errors.Quartet2 ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_success)}`,
                onInput: e => jump(e.target),
                onKeyDown: e => jumpBack(e)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
                id: "quartet3"
              }, register('Quartet3')), {}, {
                type: "text",
                className: `move ${errors.Quartet3 ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_success)}`,
                onInput: e => jump(e.target),
                onKeyDown: e => jumpBack(e)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
                id: "quartet4"
              }, register('Quartet4')), {}, {
                type: "text",
                className: `move ${errors.Quartet4 ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_success)}`,
                onInput: e => jump(e.target),
                onKeyDown: e => jumpBack(e)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cvv),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
              id: "CVV"
            }, register('CVV')), {}, {
              type: "text",
              placeholder: translate('codeCVV'),
              className: errors.CVV ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_success)
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().active_untill),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
              id: "activeUntill"
            }, register('activeUntill')), {}, {
              type: "text",
              placeholder: translate('activeUntill'),
              className: errors.activeUntill ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_success)
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().success),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "submit",
              children: translate('success')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }, this), showSuccess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Success_Success__WEBPACK_IMPORTED_MODULE_6__.Success, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }, this), showPending && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pending_Pending__WEBPACK_IMPORTED_MODULE_7__.Pending, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 29
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Payment.jsx":
/*!*********************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Payment.jsx ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Payment": function() { return /* binding */ Payment; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Payment_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Payment.module.scss */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Payment.module.scss");
/* harmony import */ var _Payment_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Payment_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CardForm_CardForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardForm/CardForm */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/CardForm/CardForm.jsx");
/* harmony import */ var _public_images_payments_card_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/payments/card.png */ "./public/images/payments/card.png");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PaymentTab\\PaymentPart\\Payment\\Payment.jsx";

 // icons


function Payment() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Payment_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Payment_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Payment_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: _public_images_payments_card_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
          alt: "card icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Payment_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardForm_CardForm__WEBPACK_IMPORTED_MODULE_1__.CardForm, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Pending/Pending.jsx":
/*!*****************************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Pending/Pending.jsx ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pending": function() { return /* binding */ Pending; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Pending_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pending.module.scss */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Pending/Pending.module.scss");
/* harmony import */ var _Pending_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Pending_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_payments_pending_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/payments/pending.png */ "./public/images/payments/pending.png");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PaymentTab\\PaymentPart\\Payment\\Pending\\Pending.jsx";
// hooks

 // styles

 // icon 


function Pending() {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('prediction'),
        translationPath = 'tabs.payments.cardForm.',
        translate = key => t(`${translationPath}${key}`),
        clientWidth = document.querySelector('body').clientWidth,
        {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: clientWidth < 768 ? showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Modal, {
      onClose: () => setShowModal(false),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Pending_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Pending_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: translate('panding')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_payments_pending_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 30
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Pending_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Pending_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('panding')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: _public_images_payments_pending_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Success/Success.jsx":
/*!*****************************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Success/Success.jsx ***!
  \*****************************************************************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _Success_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Success.module.scss */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Success/Success.module.scss");
/* harmony import */ var _Success_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Success_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_images_payments_success_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/payments/success.png */ "./public/images/payments/success.png");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PaymentTab\\PaymentPart\\Payment\\Success\\Success.jsx";
// hooks


 // styles

 // icon 


function Success() {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('prediction'),
        translationPath = 'tabs.payments.cardForm.',
        translate = key => t(`${translationPath}${key}`),
        clientWidth = document.querySelector('body').clientWidth,
        {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: clientWidth < 768 ? showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      onClose: () => setShowModal(false),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Success_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Success_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: translate('thanks')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_payments_success_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 30
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Success_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Success_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('thanks')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: _public_images_payments_success_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentTab.jsx":
/*!****************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentTab.jsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentTab": function() { return /* binding */ PaymentTab; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _src_games_data_extra_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/games_data/extra_data */ "./src/games_data/extra_data.js");
/* harmony import */ var _GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameInfo/GameInfo */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/GameInfo/GameInfo.jsx");
/* harmony import */ var _PaymentPart_PaymentPart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PaymentPart/PaymentPart */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/PaymentPart.jsx");
/* harmony import */ var _PaymentTab_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PaymentTab.module.scss */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentTab.module.scss");
/* harmony import */ var _PaymentTab_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PaymentTab_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PaymentTab\\PaymentTab.jsx";
// hooks 
 // db's

 // components


 // styles 


function PaymentTab() {
  var _router$query, _router$query$game, _router$query2, _router$query2$game;

  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
        // find which type of game user want buy
  game_path_in_extradata = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : (_router$query$game = _router$query.game) === null || _router$query$game === void 0 ? void 0 : _router$query$game.slice(0, router.query.game.indexOf('Game')),
        // find exactly which game user want buy
  game_id = (_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : (_router$query2$game = _router$query2.game) === null || _router$query2$game === void 0 ? void 0 : _router$query2$game.slice("?"),
        // find game 
  get_game_data = (gameType, db) => {
    switch (gameType) {
      case "express":
        return db.express.filter(el => el.id === game_id);

      case "invinsibleStgy":
        return db.invinsibleStgy.filter(el => el.id === game_id);

      case "ordinar":
        return db.ordinar.filter(el => el.id === game_id);

      case "todayMatches":
        return db.todayMatches.filter(el => el.id === game_id);

      case "predictionspage":
        return db.predictionspage.filter(el => el.id === game_id);

      case "predictionslide":
        return db.predictionslide.filter(el => el.id === game_id);

      default:
        return [];
    }
  },
        game_data = get_game_data(game_path_in_extradata, _src_games_data_extra_data__WEBPACK_IMPORTED_MODULE_2__.extra_data);

  console.log(game_data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PaymentTab_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [game_path_in_extradata !== undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {
      game: game_data[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaymentPart_PaymentPart__WEBPACK_IMPORTED_MODULE_4__.PaymentPart, {
      game: game_data[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PredictionTab/PredictionTab.jsx":
/*!**********************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PredictionTab/PredictionTab.jsx ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictionTab": function() { return /* binding */ PredictionTab; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _src_games_data_predictions_predictions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/games_data/predictions/predictions */ "./src/games_data/predictions/predictions.js");
/* harmony import */ var _Row_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Row/Row */ "./components/Pages/PredictionPayments/Tabs/Row/Row.jsx");
/* harmony import */ var _TabHeader_TabHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TabHeader/TabHeader */ "./components/Pages/PredictionPayments/Tabs/TabHeader/TabHeader.jsx");
/* harmony import */ var _PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PredictionTab.module.scss */ "./components/Pages/PredictionPayments/Tabs/PredictionTab/PredictionTab.module.scss");
/* harmony import */ var _PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../lib/er.lib */ "./lib/er.lib.js");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PredictionTab\\PredictionTab.jsx";
// hooks

 // datas

 // components


 // styles 




function PredictionTab({
  click
}) {
  const {
    0: slide_data,
    1: setSlideData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_7__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_6__.GET_PREDICTIONS, {}, {
      auth: true
    }).then(rsp => {
      // toast(`Successfully registered`)
      setSlideData(rsp.data.data.map(item => {
        return {
          id: item.id,
          teamOneName: '',
          teamOneIcon: item[`team1_img_path`],
          teamTwoName: '',
          teamTwoIcon: item[`team2_img_path`],
          prediction: {
            thereIs: true,
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
    }).catch(error => {});
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8___default().board),
      children: slide_data.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row_Row__WEBPACK_IMPORTED_MODULE_4__.Row, {
        order: i + 1,
        teamOneName: el.teamOneName,
        teamOneIcon: el.teamOneIcon,
        teamTwoName: el.teamTwoName,
        teamTwoIcon: el.teamTwoIcon,
        date: el.date,
        time: el.time,
        prediction: el.prediction,
        type: el.type,
        coefficent: el.coefficent,
        price: el.price,
        clickBuy: () => router.push({
          pathname: '/prediction',
          query: {
            game: el.id
          }
        }),
        openPayments: click
      }, Math.random(), false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/Row/Row.jsx":
/*!**************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/Row/Row.jsx ***!
  \**************************************************************/
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
/* harmony import */ var _Row_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Row.module.scss */ "./components/Pages/PredictionPayments/Tabs/Row/Row.module.scss");
/* harmony import */ var _Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Row_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\Row\\Row.jsx";
// translation 
 // styles 


function Row({
  order,
  teamOneName,
  teamOneIcon,
  teamTwoName,
  teamTwoIcon,
  prediction,
  type,
  date,
  time,
  coefficent,
  price,
  clickBuy,
  openPayments
}) {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('prediction'),
        translationPath = 'tabs.header.',
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
            children: [order, "."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamOne),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: teamOneName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamOneIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().vs),
            children: "VS."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamTwo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: teamTwoName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamTwoIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
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
              lineNumber: 60,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_body),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: prediction.totalBet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: prediction.coefficent
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 33
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().simulator)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().type),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date_time),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().time),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: time
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().coefficent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: coefficent
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().price),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buyButton_container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button_content),
            onClick: () => {
              clickBuy();
              openPayments();
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: t('common:commons.buy')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/TabHeader/TabHeader.jsx":
/*!**************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/TabHeader/TabHeader.jsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabHeader": function() { return /* binding */ TabHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabHeader.module.scss */ "./components/Pages/PredictionPayments/Tabs/TabHeader/TabHeader.module.scss");
/* harmony import */ var _TabHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TabHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\TabHeader\\TabHeader.jsx";
// styles
 // translations


function TabHeader() {
  const // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('prediction'),
        translationPath = 'tabs.header.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_TabHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_TabHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().for_tablets)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_TabHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('prediction').toUpperCase()
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('type').toUpperCase()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('date').toUpperCase()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('time').toUpperCase()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('coeficent').toUpperCase()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: translate('price').toUpperCase()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/Tabs.jsx":
/*!***********************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/Tabs.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": function() { return /* binding */ Tabs; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PaymentTab_PaymentTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentTab/PaymentTab */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentTab.jsx");
/* harmony import */ var _PredictionTab_PredictionTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PredictionTab/PredictionTab */ "./components/Pages/PredictionPayments/Tabs/PredictionTab/PredictionTab.jsx");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\Tabs.jsx";
// components


function Tabs({
  predictionTab,
  paymentTab,
  gameIdForPayment,
  click
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [predictionTab && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PredictionTab_PredictionTab__WEBPACK_IMPORTED_MODULE_2__.PredictionTab, {
      click: click
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 31
    }, this), paymentTab && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaymentTab_PaymentTab__WEBPACK_IMPORTED_MODULE_1__.PaymentTab, {
      gameId: gameIdForPayment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 28
    }, this)]
  }, void 0, true);
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

/***/ "./pages/prediction.js":
/*!*****************************!*\
  !*** ./pages/prediction.js ***!
  \*****************************/
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
/* harmony import */ var _components_Pages_PredictionPayments_PredictionPayments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pages/PredictionPayments/PredictionPayments */ "./components/Pages/PredictionPayments/PredictionPayments.jsx");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\pages\\prediction.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const PredictionPaymentsPage = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pages_PredictionPayments_PredictionPayments__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 38
}, undefined);

PredictionPaymentsPage.layout = "withoutPhoto";
/* harmony default export */ __webpack_exports__["default"] = (PredictionPaymentsPage);
async function getStaticProps(ctx) {
  return {
    props: _objectSpread({}, await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread(_objectSpread(_objectSpread({}, ctx), {}, {
      pathname: '/prediction',
      loaderName: 'getStaticProps'
    }, _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__), {}, {
      loadLocaleFrom: (l, n) => __webpack_require__("./locales lazy recursive ^\\.\\/.*\\/.*$")(`./${l}/${n}`).then(m => m.default)
    })))
  };
}

/***/ }),

/***/ "./src/games_data/express/express.js":
/*!*******************************************!*\
  !*** ./src/games_data/express/express.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "express": function() { return /* binding */ express; }
/* harmony export */ });
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/barca.png */ "./public/images/main/matches/barca.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/psj.png */ "./public/images/main/matches/psj.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
// icons






const express = [{
  id: "expressGame1",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1750 руб.'
}, {
  id: "expressGame2",
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '2500 руб.'
}, {
  id: "expressGame3",
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '1800 руб. '
}, {
  id: "expressGame4",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame5",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame6",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame7",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame8",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame9",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame10",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame11",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame12",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame13",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame14",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame15",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame16",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame17",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame18",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame19",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "expressGame20",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}];

/***/ }),

/***/ "./src/games_data/extra_data.js":
/*!**************************************!*\
  !*** ./src/games_data/extra_data.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extra_data": function() { return /* binding */ extra_data; }
/* harmony export */ });
/* harmony import */ var _express_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express/express */ "./src/games_data/express/express.js");
/* harmony import */ var _invinsible_strategy_invinsible_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invinsible_strategy/invinsible_strategy */ "./src/games_data/invinsible_strategy/invinsible_strategy.js");
/* harmony import */ var _matches_matches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matches/matches */ "./src/games_data/matches/matches.js");
/* harmony import */ var _ordinar_ordinar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordinar/ordinar */ "./src/games_data/ordinar/ordinar.js");
/* harmony import */ var _predictions_predictions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./predictions/predictions */ "./src/games_data/predictions/predictions.js");
/* harmony import */ var _predictions_slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./predictions/slide */ "./src/games_data/predictions/slide.js");






const extra_data = {
  express: _express_express__WEBPACK_IMPORTED_MODULE_0__.express,
  invinsibleStgy: _invinsible_strategy_invinsible_strategy__WEBPACK_IMPORTED_MODULE_1__.invinsible_strategy,
  ordinar: _ordinar_ordinar__WEBPACK_IMPORTED_MODULE_3__.ordinar,
  todayMatches: _matches_matches__WEBPACK_IMPORTED_MODULE_2__.matches.todayMatches,
  predictionspage: _predictions_predictions__WEBPACK_IMPORTED_MODULE_4__.predictions,
  predictionslide: _predictions_slide__WEBPACK_IMPORTED_MODULE_5__.slide_data
};

/***/ }),

/***/ "./src/games_data/invinsible_strategy/invinsible_strategy.js":
/*!*******************************************************************!*\
  !*** ./src/games_data/invinsible_strategy/invinsible_strategy.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invinsible_strategy": function() { return /* binding */ invinsible_strategy; }
/* harmony export */ });
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/barca.png */ "./public/images/main/matches/barca.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/psj.png */ "./public/images/main/matches/psj.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
// icons






const invinsible_strategy = [{
  id: "invinsibleStgyGame1",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame2",
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '2500 руб.'
}, {
  id: "invinsibleStgyGame3",
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '1800 руб. '
}, {
  id: "invinsibleStgyGame4",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame5",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame6",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame7",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame8",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame9",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame10",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame11",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame12",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame13",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame14",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame15",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame16",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame17",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame18",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame19",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "invinsibleStgyGame20",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}];

/***/ }),

/***/ "./src/games_data/matches/matches.js":
/*!*******************************************!*\
  !*** ./src/games_data/matches/matches.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matches": function() { return /* binding */ matches; }
/* harmony export */ });
/* harmony import */ var _public_images_main_matches_atletic_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/atletic.png */ "./public/images/main/matches/atletic.png");
/* harmony import */ var _public_images_main_matches_atletico_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/atletico.png */ "./public/images/main/matches/atletico.png");
/* harmony import */ var _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/barca.png */ "./public/images/main/matches/barca.png");
/* harmony import */ var _public_images_main_matches_leipzig_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/leipzig.png */ "./public/images/main/matches/leipzig.png");
/* harmony import */ var _public_images_main_matches_liverpool_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/liverpool.png */ "./public/images/main/matches/liverpool.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/psj.png */ "./public/images/main/matches/psj.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
// icons








const matches = {
  todayMatches: [{
    id: 'todayMatchesGame1',
    date: '20:00',
    time: '22:30',
    gameState: '.rowOne.gameState.started',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_atletic_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
    score: '2 : 1',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_atletico_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
    buyButtonName: '.rowOne.buyButton',
    coefficent: '1.67',
    titleName: '.rowOne.title'
  }, {
    id: 'todayMatchesGame2',
    date: '21:30',
    time: '22:30',
    gameState: '.rowTwo.gameState.dontStarted',
    teamOneName: 'Барселона',
    teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    score: '-',
    teamTwoName: 'ПСЖ',
    teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_6__.default.src,
    buyButtonName: '.rowTwo.buyButton',
    coefficent: '1.67',
    titleName: '.rowTwo.title'
  }, {
    id: 'todayMatchesGame3',
    date: '22:20',
    time: '22:30',
    gameState: '.rowThree.gameState.dontStarted',
    teamOneName: 'Марсель',
    teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_7__.default.src,
    buyButtonName: '.rowThree.buyButton',
    coefficent: '1.67',
    titleName: '.rowThree.title'
  }, {
    id: 'todayMatchesGame4',
    date: '23:30',
    time: '22:30',
    gameState: '.rowFore.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_liverpool_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_leipzig_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    buyButtonName: '.rowFore.buyButton',
    coefficent: '1.67',
    titleName: '.rowFore.title'
  }, {
    id: 'todayMatchesGame5',
    date: '20:00',
    time: '22:30',
    gameState: '.rowOne.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_atletic_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_atletico_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
    buyButtonName: '.rowOne.buyButton',
    coefficent: '1.67',
    titleName: '.rowOne.title'
  }, {
    id: 'todayMatchesGame6',
    date: '21:30',
    time: '22:30',
    gameState: '.rowTwo.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_6__.default.src,
    buyButtonName: '.rowTwo.buyButton',
    coefficent: '1.67',
    titleName: '.rowTwo.title'
  }, {
    id: 'todayMatchesGame7',
    date: '22:20',
    time: '22:30',
    gameState: '.rowThree.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_7__.default.src,
    buyButtonName: '.rowThree.buyButton',
    coefficent: '1.67',
    titleName: '.rowThree.title'
  }, {
    id: 'todayMatchesGame8',
    date: '23:30',
    time: '22:30',
    gameState: '.rowFore.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_liverpool_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_leipzig_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    buyButtonName: '.rowFore.buyButton',
    coefficent: '1.67',
    titleName: '.rowFore.title'
  }],
  tommorowMatches: [{
    id: 'todayMatchesGame1',
    date: '20:00',
    time: '22:30',
    gameState: '.rowOne.gameState.started',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_atletic_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
    score: '2 : 1',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_atletico_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
    buyButtonName: '.rowOne.buyButton',
    coefficent: '1.67',
    titleName: '.rowOne.title'
  }, {
    id: 'todayMatchesGame2',
    date: '21:30',
    time: '22:30',
    gameState: '.rowTwo.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_6__.default.src,
    buyButtonName: '.rowTwo.buyButton',
    coefficent: '1.67',
    titleName: '.rowTwo.title'
  }, {
    id: 'todayMatchesGame3',
    date: '22:20',
    time: '22:30',
    gameState: '.rowThree.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_7__.default.src,
    buyButtonName: '.rowThree.buyButton',
    coefficent: '1.67',
    titleName: '.rowThree.title'
  }, {
    id: 'todayMatchesGame4',
    date: '23:30',
    time: '22:30',
    gameState: '.rowFore.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_liverpool_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_leipzig_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    buyButtonName: '.rowFore.buyButton',
    coefficent: '1.67',
    titleName: '.rowFore.title'
  }, {
    id: 'todayMatchesGame5',
    date: '20:00',
    time: '22:30',
    gameState: '.rowOne.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_atletic_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_atletico_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
    buyButtonName: '.rowOne.buyButton',
    coefficent: '1.67',
    titleName: '.rowOne.title'
  }, {
    id: 'todayMatchesGame6',
    date: '21:30',
    time: '22:30',
    gameState: '.rowTwo.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_6__.default.src,
    buyButtonName: '.rowTwo.buyButton',
    coefficent: '1.67',
    titleName: '.rowTwo.title'
  }, {
    id: 'todayMatchesGame7',
    date: '22:20',
    time: '22:30',
    gameState: '.rowThree.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_7__.default.src,
    buyButtonName: '.rowThree.buyButton',
    coefficent: '1.67',
    titleName: '.rowThree.title'
  }, {
    id: 'todayMatchesGame8',
    date: '23:30',
    time: '22:30',
    gameState: '.rowFore.gameState.dontStarted',
    teamOneName: 'Атлетико',
    teamOneIcon: _public_images_main_matches_liverpool_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
    score: '-',
    teamTwoName: 'Атлетик',
    teamTwoIcon: _public_images_main_matches_leipzig_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    buyButtonName: '.rowFore.buyButton',
    coefficent: '1.67',
    titleName: '.rowFore.title'
  }]
};

/***/ }),

/***/ "./src/games_data/ordinar/ordinar.js":
/*!*******************************************!*\
  !*** ./src/games_data/ordinar/ordinar.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ordinar": function() { return /* binding */ ordinar; }
/* harmony export */ });
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/barca.png */ "./public/images/main/matches/barca.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/psj.png */ "./public/images/main/matches/psj.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
// icons






const ordinar = [{
  id: "ordinarGame1",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1522 руб.'
}, {
  id: "ordinarGame2",
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '2500 руб.'
}, {
  id: "ordinarGame3",
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '23:00',
  coefficent: '2.07',
  price: '1800 руб. '
}, {
  id: "ordinarGame4",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame5",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame6",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame7",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame8",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame9",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame10",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame11",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame12",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame13",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame14",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame15",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame16",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame17",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame18",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame19",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: "ordinarGame20",
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}];

/***/ }),

/***/ "./src/games_data/predictions/predictions.js":
/*!***************************************************!*\
  !*** ./src/games_data/predictions/predictions.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "predictions": function() { return /* binding */ predictions; }
/* harmony export */ });
/* harmony import */ var _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/games/atletico.png */ "./public/images/games/atletico.png");
/* harmony import */ var _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/games/atletic.png */ "./public/images/games/atletic.png");
/* harmony import */ var _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/barca.png */ "./public/images/main/matches/barca.png");
/* harmony import */ var _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/marcel.png */ "./public/images/main/matches/marcel.png");
/* harmony import */ var _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/psj.png */ "./public/images/main/matches/psj.png");
/* harmony import */ var _public_images_main_matches_rennais_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/main/matches/rennais.png */ "./public/images/main/matches/rennais.png");
// icons






const predictions = [{
  id: 'predictionspageGame1',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: "Ординар",
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1640 руб.'
}, {
  id: 'predictionspageGame2',
  teamOneName: 'Барселона',
  teamOneIcon: _public_images_main_matches_barca_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: _public_images_main_matches_psj_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: "Экспресс",
  date: '14.01',
  time: '22:30',
  coefficent: '2.07',
  price: '2500 руб.'
}, {
  id: 'predictionspageGame3',
  teamOneName: 'Марсель',
  teamOneIcon: _public_images_main_matches_marcel_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
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
  price: '1800 руб. '
}, {
  id: 'predictionspageGame4',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame5',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame6',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame7',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame8',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame9',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame10',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame11',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame12',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame13',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame14',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame15',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame16',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame17',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame18',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}, {
  id: 'predictionspageGame19',
  teamOneName: 'Атлетико',
  teamOneIcon: _public_images_games_atletico_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: _public_images_games_atletic_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
  prediction: {
    thereIs: false,
    totalBet: '',
    coefficent: ''
  },
  type: 'Экспресс',
  date: '14.01',
  time: '22:30',
  coefficent: '1.67',
  price: '1500 руб.'
}];

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
    thereIs: true,
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
    thereIs: true,
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

/***/ "./public/images/main/matches/atletic.png":
/*!************************************************!*\
  !*** ./public/images/main/matches/atletic.png ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/atletic.36068b0c6cd737f059d5368450d62dc6.png","height":44,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/AWpshrvP0N4uAgIDEgUEAQEKCgXtCRQS0gGOj5//KCciANnZ3wAKDQsAxcbTABHk4gABmJmo/AgHBgL7/v8Au6u+AHd4WgDuurT+AXFzif7n5/ABMjQm/y/25gA1Uk4BzbG0/wFjbYf/Jfrw/VZYRQP++PkABxMT/dq8vgMBpY2V+0dGOwTt3+D8/v//ABEeHgTLur/9AY+ZqDQh9+6fKiggLAAAAADY2uLV0QsXYQFxRVwAj7ukBLWpsLIAAAABS1dQTV1GYvyqH1gRvyLYuAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/main/matches/atletico.png":
/*!*************************************************!*\
  !*** ./public/images/main/matches/atletico.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/atletico.b9f122758b6071afc80acdef03fd696f.png","height":45,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR4nAHoABf/Ac/Pz/zu7u4D+vr6/wIBAQEKCwv/+v7+AQcCAv8B39/f8vv7+w39/Pz/6+7uABEQEADryckBI0ND9gG/v7/c3t3dI9/o6P4rHR0BQgsL//X//wLUDAzgAePi4qvd399U4b+//UkgIAMOBwf96i4uA/gJCbABw8bGUh8aGq0ItbX8FSQkBOrh4Pz8SUoE3uLiWAH///8A2dzcwvfh4T0e19b24SgpCgQZGcYtKys7AYKBgQC9vb0eb3NzzA/7+xXp/f3tsK2tNC8vL+ABsLGxBPX19fwB/PwzAgsLrNbMzFcIDQ3KHh4eBIZIeUvliy/1AAAAAElFTkSuQmCC"});

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

/***/ "./public/images/main/matches/leipzig.png":
/*!************************************************!*\
  !*** ./public/images/main/matches/leipzig.png ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/leipzig.44fb332c404a53a0acde9221334654e0.png","height":45,"width":72,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/Ab+yvQBBFA8L0BgVuQoAAAP+/v4A+AIC/TDJ1Ui4BAH0Af/FzhLh0NR1BQkEePUvLAALCwoA/8TJAPv4/YggNS+LAfG6xUH03t9u/QoIT/cmIfsGBgUAA9XbBQLz9rEPJySTAcS8xAA8OzIGudDZ6h4VEg/7+/sA6fL18UXl6Raz/f36AcbEzALaEQ7+ENbbPQsTEX8DAwMA7OPmgdYeHMM9+foCiz5L2PaMojoAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/main/matches/liverpool.png":
/*!**************************************************!*\
  !*** ./public/images/main/matches/liverpool.png ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/matches/liverpool.ea148fab7996f2f01e85a97008ad9450.png","height":53,"width":41,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/Af///wi72NYk6gH/gPv//gYaAQN8OSIl3AGO1tGJ+gEAduz6+QAAAAAAFQYHAAP/AJQBq6inhQf0900E8vMLAP7+APwTEfD6Dgu8AfBkgUX2/Pa6AQYF/gISDQD+7vMCB/sASQHkdHenEGRlWAQPDv754eUAAAQDAvSxrasB3oJuux5heCL26eki983VABNGPt7jp5DfAWDJwsFI6vA5SBofBf7x9AC99u76tBUOxgF/ycNW5fPyZxQFBkIGBAUA5vf0wR4ND5pzLF2N0iuF7AAAAABJRU5ErkJggg=="});

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

/***/ "./public/images/main/prediction/barca.png":
/*!*************************************************!*\
  !*** ./public/images/main/prediction/barca.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/main/prediction/barca.75f9e230beb79e282d7a0f369a6e666e.png","height":223,"width":206,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR4nAHoABf/AZ+FQDMSGRwpBffwGfEAANcM9c0t+AIR3fn8H84Bsp5abCsOPJMC3vIAASzzAAfphQDxBSgAz/c5QAGYmFw2RQA5yQfV9vwISfUBBe2AA+r7Muwl9mMmAcukMaQhI0Rb5+P1/fcB+wIH8Zv/GBsAAtTkP3QBpIxWsvXWAk39BAD7CxHwBO3mH/sOFwEGEiT3gwGNh15r97kOlAEQBwBDVtL+sXstAhE5+AAhTww7AQD/AAG0gy+Q5fI0XxAH8g/y+g3pJR7hhu9tvZIBnqYuAB7G0gAVSgAY8OpDNjFOOr3NjIP144YAALmzYkTO5qjQAAAAAElFTkSuQmCC"});

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

/***/ "./public/images/payments/card.png":
/*!*****************************************!*\
  !*** ./public/images/payments/card.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/payments/card.8578d5aa65dcb35ad4737cce805121ac.png","height":377,"width":694,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAjklEQVR4nA3Juw3CMBAG4P/sQ0qMjUAC8RgBOuo07MAiDMEOrEBJgxiABZAQiJ4OGopEjnOOSf3R+XLdvt6lK9aLWwIEpIImSGsm1dBoReX3vqLofW51DaoDUAnyzS8daUlzfGh3eJ6EVfSkWmtYnOGUZ9w4buLIZYGK/SMNLKMDCBNspjFzjKnrYdxn+QPWaC3vWMd+VwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/payments/paypall.png":
/*!********************************************!*\
  !*** ./public/images/payments/paypall.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/payments/paypall.dc990274d8d3551269872587bc0615aa.png","height":61,"width":252,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGNkMG3+xqApPYXh1Mv1DHxMSgynyncw9J63YRAQ4GL49+8hI0PJtpsMGmqZDCkz/jOYi5kwPP7CwZDi/JpBSZGZ4fdvUQDn7RatZrF9ngAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/payments/pending.png":
/*!********************************************!*\
  !*** ./public/images/payments/pending.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/payments/pending.d414753b156d078c28452fbd603cf8dc.png","height":133,"width":141,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEX+AADTAAD/AAD+AAD/AABqAABrAAD/AADvAAD/AADvAAD/AAD1j4/NmJj+FRX/ERHX1tbN19f/FBT+Fhb/FBTXy8vI0ND7cnK5h4f/AADzAAD6eXn7c3O5jo7PgYHybm65hYX/AAD1AADFnmqmAAAAG3RSTlMAAB8jKSsssry9vcHm7u/2+fn5+vr+/v7+/v5Q9j6rAAAARElEQVR42gVAhRGAIAB8u0iRbvYf0gPmg7FjBhYSe49kwVWktbJc+ELTuoUXyldjqld4knBOpAcrzWNkumLaTs7vffoBm4UEZFuSu4IAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/payments/success.png":
/*!********************************************!*\
  !*** ./public/images/payments/success.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/payments/success.47f950b6549893640000b27ffb3137e1.png","height":132,"width":141,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/ARm+LgAJAQY+7v/2jgUAAi/r/tT+Ygtq1X0YdeHkIdxYARa+LUrq/uS1BgEUABoBDf/g/c4BqRitAPfj9QBg8F5TAQC9HuFHCDUe1fvf++T6zgVpEHH/XQBX/WXhcATVFt7gAQC6AP+iD6b9BAgEA1rqVv+6Gb0A1NvUAXILb/4fBDECAQC/GuA37ygfiReA+/IV9AQH5wQAR+xk/A4TCwUA/QDgATK/P0fO/8G2WvJhAnIUawCk6KgAkBGMABsBL/7t//hJASnCNwAE/wQ60/vNjTLnNzDTE+cACQoD0Pf8/XMCAQHGNDBlOPg+WCUAAAAASUVORK5CYII="});

/***/ }),

/***/ "./components/Pages/PredictionPayments/Header/Bar/Bar.module.scss":
/*!************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Header/Bar/Bar.module.scss ***!
  \************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Bar_container__T1u8e",
	"content": "Bar_content__1SwtI",
	"button": "Bar_button__2Ctl8"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/PredictionPayments.module.scss":
/*!****************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/PredictionPayments.module.scss ***!
  \****************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PredictionPayments_container__1ObXn",
	"content": "PredictionPayments_content__zG_x6"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/GameInfo/GameInfo.module.scss":
/*!*******************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/GameInfo/GameInfo.module.scss ***!
  \*******************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "GameInfo_container__2BIp9",
	"content": "GameInfo_content__2_3c3",
	"teams": "GameInfo_teams__18BPL",
	"teamOne": "GameInfo_teamOne__1m4sJ",
	"teamTwo": "GameInfo_teamTwo__1oAkl",
	"gameDetailes": "GameInfo_gameDetailes__1iWwL",
	"gameDetContent": "GameInfo_gameDetContent__2TDYE"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Details/Details.module.scss":
/*!*****************************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Details/Details.module.scss ***!
  \*****************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Details_container__pg3ZC",
	"price": "Details_price__1fRm3",
	"choosePaySys": "Details_choosePaySys__3DhTX",
	"choosePaySys_content": "Details_choosePaySys_content__1R35u",
	"button": "Details_button__Yrr20"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/PaymentPart.module.scss":
/*!*************************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/PaymentPart.module.scss ***!
  \*************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PaymentPart_container__Esy6e"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/CardForm/CardForm.module.scss":
/*!***************************************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/CardForm/CardForm.module.scss ***!
  \***************************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "CardForm_container__3gSV8",
	"content": "CardForm_content__3QWyM",
	"input_success": "CardForm_input_success__2xJ07",
	"input_error": "CardForm_input_error__6dmcR",
	"name": "CardForm_name__3h72s",
	"card_number_content": "CardForm_card_number_content__Tdl9m",
	"card_number_inputs": "CardForm_card_number_inputs__1Dzik",
	"cvv": "CardForm_cvv__2VKn5",
	"active_untill": "CardForm_active_untill__GSaJS",
	"success": "CardForm_success__1sxaP"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Payment.module.scss":
/*!*****************************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Payment.module.scss ***!
  \*****************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Payment_container__2i__-",
	"content": "Payment_content__1oOvN",
	"img": "Payment_img__14s1G",
	"form": "Payment_form__1L_Tw"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Pending/Pending.module.scss":
/*!*************************************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Pending/Pending.module.scss ***!
  \*************************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Pending_container__36tNg",
	"transition": "Pending_transition__2tyfB",
	"content": "Pending_content__29rZi"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Success/Success.module.scss":
/*!*************************************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Success/Success.module.scss ***!
  \*************************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Success_container__1717v",
	"transition": "Success_transition__1uhVD",
	"content": "Success_content__1BjH-"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentTab.module.scss":
/*!************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentTab.module.scss ***!
  \************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PaymentTab_container__23j-r"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/PredictionTab/PredictionTab.module.scss":
/*!******************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PredictionTab/PredictionTab.module.scss ***!
  \******************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PredictionTab_container__3OgAY",
	"transition": "PredictionTab_transition__2LKVJ",
	"board": "PredictionTab_board__1D3TH"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/Row/Row.module.scss":
/*!**********************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/Row/Row.module.scss ***!
  \**********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Row_container__3Meu0",
	"content": "Row_content__3DpUS",
	"left": "Row_left__2_FtB",
	"order": "Row_order__fdAJI",
	"vs": "Row_vs__FkEjY",
	"teamOne": "Row_teamOne__LJvYs",
	"teamTwo": "Row_teamTwo__2wZat",
	"right": "Row_right__1_PSS",
	"prediction": "Row_prediction__Lvmy1",
	"prediction_content": "Row_prediction_content__-6MQO",
	"prediction_title": "Row_prediction_title__1-MCt",
	"prediction_body": "Row_prediction_body__3Y-E8",
	"simulator": "Row_simulator__1oxF3",
	"date_time": "Row_date_time__2z-Am",
	"date": "Row_date__3t7jR",
	"type": "Row_type__2gadM",
	"coefficent": "Row_coefficent__2VIlm",
	"price": "Row_price__a51Wr",
	"buyButton_container": "Row_buyButton_container___44Eb",
	"button_content": "Row_button_content__AvIqR"
};


/***/ }),

/***/ "./components/Pages/PredictionPayments/Tabs/TabHeader/TabHeader.module.scss":
/*!**********************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/TabHeader/TabHeader.module.scss ***!
  \**********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "TabHeader_container__zN8oO",
	"content": "TabHeader_content__3t93K",
	"for_tablets": "TabHeader_for_tablets__1NOZA"
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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/prediction.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9IZWFkZXIvQmFyL0Jhci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1ByZWRpY3Rpb25QYXltZW50cy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1BheW1lbnRUYWIvR2FtZUluZm8vR2FtZUluZm8uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L0RldGFpbHMvRGV0YWlscy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1BheW1lbnRUYWIvUGF5bWVudFBhcnQvUGF5bWVudFBhcnQuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvQ2FyZEZvcm0vQ2FyZEZvcm0uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvUGF5bWVudC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1BheW1lbnRUYWIvUGF5bWVudFBhcnQvUGF5bWVudC9QZW5kaW5nL1BlbmRpbmcuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvU3VjY2Vzcy9TdWNjZXNzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50VGFiLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUHJlZGljdGlvblRhYi9QcmVkaWN0aW9uVGFiLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUm93L1Jvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1RhYkhlYWRlci9UYWJIZWFkZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9UYWJzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL0J1dHRvbi9CdXR0b24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL2VyLmxpYi5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wYWdlcy9wcmVkaWN0aW9uLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvZXhwcmVzcy9leHByZXNzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvZXh0cmFfZGF0YS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL2ludmluc2libGVfc3RyYXRlZ3kvaW52aW5zaWJsZV9zdHJhdGVneS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL21hdGNoZXMvbWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL29yZGluYXIvb3JkaW5hci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hdGxldGljLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2F0bGV0aWNvLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2xlaXB6aWcucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbGl2ZXJwb29sLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9iYXJjYS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wc2oucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wYXltZW50cy9jYXJkLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvcGF5cGFsbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL3BheW1lbnRzL3BlbmRpbmcucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wYXltZW50cy9zdWNjZXNzLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL0hlYWRlci9CYXIvQmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvUHJlZGljdGlvblBheW1lbnRzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL0dhbWVJbmZvL0dhbWVJbmZvLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L0RldGFpbHMvRGV0YWlscy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50UGFydC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50L0NhcmRGb3JtL0NhcmRGb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvUGF5bWVudC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50L1BlbmRpbmcvUGVuZGluZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50L1N1Y2Nlc3MvU3VjY2Vzcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50VGFiLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QcmVkaWN0aW9uVGFiL1ByZWRpY3Rpb25UYWIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1Jvdy9Sb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1RhYkhlYWRlci9UYWJIZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInl1cFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2lnbm9yZWR8QzpcXFVzZXJzXFxBZG1pblxcRGVza3RvcFxccHJvamVjdHNcXGZvb3QtYmV0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQmFyIiwicHJlZENsaWNrIiwicGF5bUNsaWNrIiwicHJlZEFjdGl2ZSIsInBheW1BY3RpdmUiLCJzdHlsZXMiLCJIZWFkZXIiLCJQcmVkaWN0aW9uUGF5bWVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVuR2FtZVBheW1lbnRzUGFnZSIsIk9iamVjdCIsImtleXMiLCJxdWVyeSIsImxlbmd0aCIsInNob3dQcmVkaWN0aW9uVGFiIiwic2V0U2hvd1ByZWRpY3Rpb25UYWJzIiwidXNlU3RhdGUiLCJzaG93UGF5bWVudFRhYiIsInNldFNob3dQYXltZW50VGFiIiwiR2FtZUluZm8iLCJnYW1lIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5IiwidGVhbU9uZUljb24iLCJ0ZWFtT25lTmFtZSIsInRlYW1Ud29JY29uIiwidGVhbVR3b05hbWUiLCJjb2VmZmljZW50IiwiZGF0ZSIsInRpbWUiLCJEZXRhaWxzIiwicHJpY2UiLCJ0b1VwcGVyQ2FzZSIsIlBheW1lbnRQYXJ0IiwidW5kZWZpbmVkIiwiQ2FyZEZvcm0iLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwic2hvd1BlbmRpbmciLCJzZXRTaG93UGVuZGluZyIsInNob3dGb3JtIiwic2V0U2hvd0Zvcm0iLCJqdW1wIiwieCIsInZhbHVlIiwibmV4dFNpYmxpbmciLCJ0ZXN0IiwidHlwZSIsImZvY3VzIiwianVtcEJhY2siLCJ0YXJnZXQiLCJjb2RlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJldmlvdXNTaWJsaW5nIiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJmdWxsTmFtZSIsInJlcXVpcmVkIiwibWF0Y2hlcyIsIkNWViIsIm1pbiIsIm1heCIsImFjdGl2ZVVudGlsbCIsImNhcmROdW1iZXJTY2hlbWEiLCJRdWFydGV0MSIsIlF1YXJ0ZXQyIiwiUXVhcnRldDMiLCJRdWFydGV0NCIsIm1hcmdlZFNjaGVtYSIsImNvbmNhdCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwidXNlRm9ybSIsIm1vZGUiLCJyZXNvbHZlciIsInl1cFJlc29sdmVyIiwic3VibWl0IiwiZGF0YSIsImRhdGFFbnRyaWVzIiwiZW50cmllcyIsImNhcmROdW1iZXJzIiwiZmlsdGVyIiwiZWwiLCJpbmRleE9mIiwicmVkdWNlIiwiYWMiLCJ0cmFuc2Zvcm1lZERhdGEiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImlucHV0X3N1Y2Nlc3MiLCJlIiwiUGF5bWVudCIsImNhcmRGb3JtIiwiUGVuZGluZyIsImNsaWVudFdpZHRoIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicGVuZGluZyIsIlN1Y2Nlc3MiLCJzdWNjZXNzIiwiUGF5bWVudFRhYiIsImdhbWVfcGF0aF9pbl9leHRyYWRhdGEiLCJzbGljZSIsImdhbWVfaWQiLCJnZXRfZ2FtZV9kYXRhIiwiZ2FtZVR5cGUiLCJkYiIsImV4cHJlc3MiLCJpZCIsImludmluc2libGVTdGd5Iiwib3JkaW5hciIsInRvZGF5TWF0Y2hlcyIsInByZWRpY3Rpb25zcGFnZSIsInByZWRpY3Rpb25zbGlkZSIsImdhbWVfZGF0YSIsImV4dHJhX2RhdGEiLCJQcmVkaWN0aW9uVGFiIiwiY2xpY2siLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwidXNlRWZmZWN0IiwicmVxdWVzdCIsIkdFVF9QUkVESUNUSU9OUyIsImF1dGgiLCJ0aGVuIiwicnNwIiwibWFwIiwiaXRlbSIsInByZWRpY3Rpb24iLCJ0aGVyZUlzIiwidG90YWxCZXQiLCJmYWN0b3IiLCJwcmVkaWN0aW9uQnV0dG9uTmFtZSIsImJ1eUJ1dHRvbk5hbWUiLCJwcmVkaWN0aW9uVGV4dCIsIm9yZGluYXJUZXh0IiwiY2F0Y2giLCJlcnJvciIsImkiLCJwYXRobmFtZSIsIk1hdGgiLCJyYW5kb20iLCJSb3ciLCJvcmRlciIsImNsaWNrQnV5Iiwib3BlblBheW1lbnRzIiwic2ltdWxhdG9yIiwiVGFiSGVhZGVyIiwiZm9yX3RhYmxldHMiLCJUYWJzIiwicHJlZGljdGlvblRhYiIsInBheW1lbnRUYWIiLCJnYW1lSWRGb3JQYXltZW50IiwiQnV0dG9uIiwicGFnZSIsInRleHRQYXRoTmFtZSIsImxvY2F0aW9uSW5QYWdlIiwiYWRpdGlvbmFsU3R5bGVzIiwiYWN0aXZlIiwiY29udGFpbmVyU3R5bGVzIiwiaGFuZGxlX292ZXJmbG93X29uX29wZW4iLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlIiwiTW9kYWwiLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJjb250ZW50U3R5bGVzIiwib3RoZXJTdHlsZXMiLCJwb3J0YWxMb2NhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJub2RlIiwidXNlUmVmIiwiY3VycmVudCIsImNvbnRhaW5zIiwiZGluYW1pY1RvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJtb2RhbCIsInRvcCIsImNyZWF0ZVBvcnRhbCIsImdldEVsZW1lbnRCeUlkIiwiaG9zdCIsImRlc3RpbmF0aW9uIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicnNsdiIsInJqY3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldENvb2tpZSIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiZmluYWxseSIsIm5hbWUiLCJuYW1lRVEiLCJjYSIsImNvb2tpZSIsInNwbGl0IiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsInJlbW92ZUNvb2tpZSIsInNldENvb2tpZSIsImRheXMiLCJleHBpcmVzIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJBVVRIX1VSTCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJMT0dJTiIsIkdFVF9BQ0NPVU5UX0lORk8iLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVtYWlsIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiU0VUX05FV19QQVNTV09SRCIsIkdFVF9ORVdTIiwiR0VUX01BVENIRVMiLCJHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSIsIkdFVF9GRUVEQkFDSyIsIkdFVF9NQVRDSEVTX0JZX1RZUEUiLCJleHBvcnRzIiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwicmVzb2x2ZSIsInByb20iLCJzZXQiLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsImhyZWYiLCJhcyIsInJlcyIsInJlaiIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJlcnIiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsIkVycm9yIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInAiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImRlZmF1bHQiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicHJlZmV0Y2giLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiX2RlZmF1bHQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yZWFjdCIsIl9yb3V0ZXIyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZm9yRWFjaCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJncyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsInByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiZG9tYWluSXRlbXMiLCJob3N0bmFtZSIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSXRlbSIsInRvTG93ZXJDYXNlIiwiX2l0ZW0kZG9tYWluIiwiX2l0ZW0kbG9jYWxlcyIsImRvbWFpbkhvc3RuYW1lIiwiZG9tYWluIiwiZGVmYXVsdExvY2FsZSIsImxvY2FsZXMiLCJzb21lIiwibG9jYWxlIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lUGFydHMiLCJzcGxpY2UiLCJqb2luIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImdldERvbWFpbkxvY2FsZSIsImFkZExvY2FsZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiYWRkQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImlzTG9jYWxVUkwiLCJpbnRlcnBvbGF0ZUFzIiwicmVzb2x2ZUhyZWYiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJkb21haW5Mb2NhbGVzIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwicGF0aExvd2VyIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiXyIsImFzUGF0aG5hbWUiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInJlcGxhY2UiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInJlc29sdmVkSHJlZiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwicmVzb2x2ZWRBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwic2hhbGxvdyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsIl90aGlzJGxvY2FsZXMiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3Iiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJ3YXJuIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJzY3JvbGwiLCJyZXNldFNjcm9sbCIsInkiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJwcmlvcml0eSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsInByb3RvY29sIiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZGVsZXRlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJQcmVkaWN0aW9uUGF5bWVudHNQYWdlIiwibGF5b3V0IiwiZ2V0U3RhdGljUHJvcHMiLCJfX2xvYWROYW1lc3BhY2VzIiwibG9hZGVyTmFtZSIsIl9faTE4bkNvbmZpZyIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJhdGxldGljb0ljb24iLCJhdGxldGljSWNvbiIsImJhcmNhSWNvbiIsInBzakljb24iLCJtYXJjZWxJY29uIiwicmVubmFpc0ljb24iLCJpbnZpbnNpYmxlX3N0cmF0ZWd5IiwicHJlZGljdGlvbnMiLCJnYW1lU3RhdGUiLCJzY29yZSIsInRpdGxlTmFtZSIsImxpdmVycG9vbEljb24iLCJsZWlwemlnSWNvbiIsInRvbW1vcm93TWF0Y2hlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLHVDQUF1Qyx5QkFBeUI7QUFDaEU7QUFDQSxxQzs7Ozs7Ozs7OztBQ2xaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvcHJlZGljdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hbS9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2FtL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2FtL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2RldS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2RldS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VuL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VuL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3Bfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL3JzL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL3JzL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBPYmplY3Qua2V5cyhtYXApOyB9O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9sb2NhbGVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIi8vIGNvbXBvbmV0bnNcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL0J1dHRvbi9CdXR0b24nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFyLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhcih7XHJcbiAgICBwcmVkQ2xpY2ssXHJcbiAgICBwYXltQ2xpY2ssXHJcbiAgICBwcmVkQWN0aXZlLFxyXG4gICAgcGF5bUFjdGl2ZSxcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZT0ncHJlZGljdGlvbidcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9XCJoZWFkZXIuYmFyQnV0dG9ucy5leHByZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBhZGl0aW9uYWxTdHlsZXM9e3N0eWxlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s9e3ByZWRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3ByZWRBY3RpdmUgJiYgcHJlZEFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZT0ncHJlZGljdGlvbidcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9XCJoZWFkZXIuYmFyQnV0dG9ucy5vcmRpbmFyXCJcclxuICAgICAgICAgICAgICAgICAgICBhZGl0aW9uYWxTdHlsZXM9e3N0eWxlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s9e3BheW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3BheW1BY3RpdmUgJiYgcGF5bUFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAnLi9CYXIvQmFyJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoe1xyXG4gICAgcHJlZENsaWNrLFxyXG4gICAgcGF5bUNsaWNrLFxyXG4gICAgcHJlZEFjdGl2ZSxcclxuICAgIHBheW1BY3RpdmVcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFyXHJcbiAgICAgICAgICAgICAgICBwcmVkQ2xpY2s9e3ByZWRDbGlja31cclxuICAgICAgICAgICAgICAgIHBheW1DbGljaz17cGF5bUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgcHJlZEFjdGl2ZT17cHJlZEFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIHBheW1BY3RpdmU9e3BheW1BY3RpdmV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJlZGljdGlvblBheW1lbnRzLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyL0hlYWRlcidcclxuaW1wb3J0IHsgVGFicyB9IGZyb20gJy4vVGFicy9UYWJzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWRpY3Rpb25QYXltZW50cygpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIC8vIHJldmlldyBxdWVyaWVzIGZvciB1bmRlcnN0YW5kaW5nIHVzZXIgd2FudCBidXkgZ2FtZSAoaWYgeWUsIHdoaWNoIGdhbWUgKSBvciBub3RcclxuICAgICAgICBvcGVuR2FtZVBheW1lbnRzUGFnZSA9IE9iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RoID09PSAwID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93UHJlZGljdGlvblRhYiwgc2V0U2hvd1ByZWRpY3Rpb25UYWJzXSA9IHVzZVN0YXRlKCFvcGVuR2FtZVBheW1lbnRzUGFnZSksXHJcbiAgICAgICAgW3Nob3dQYXltZW50VGFiLCBzZXRTaG93UGF5bWVudFRhYl0gPSB1c2VTdGF0ZShvcGVuR2FtZVBheW1lbnRzUGFnZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICBwcmVkQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1ByZWRpY3Rpb25UYWJzKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQYXltZW50VGFiKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZEFjdGl2ZT17c2hvd1ByZWRpY3Rpb25UYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQcmVkaWN0aW9uVGFicyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1BheW1lbnRUYWIodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1BY3RpdmU9e3Nob3dQYXltZW50VGFifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvblRhYj17c2hvd1ByZWRpY3Rpb25UYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudFRhYj17c2hvd1BheW1lbnRUYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1ByZWRpY3Rpb25UYWJzKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UGF5bWVudFRhYih0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0dhbWVJbmZvLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVJbmZvKHsgZ2FtZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ByZWRpY3Rpb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAndGFicy5wYXltZW50cy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG4gICAgaWYgKCFnYW1lKVxyXG4gICAgICAgIHJldHVybiA8cD48L3A+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtT25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dhbWUudGVhbU9uZUljb259IGFsdD1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Z2FtZS50ZWFtT25lTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VlMuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbVR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnYW1lLnRlYW1Ud29JY29ufSBhbHQ9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2dhbWUudGVhbVR3b05hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWVEZXRhaWxlc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWVEZXRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKCdjb2VmZmljZW50Jyl9OiB7Z2FtZS5jb2VmZmljZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKCdnYW1lU3RhcnRpbmdEYXRlJyl9IHtnYW1lLmRhdGV9IC8ge2dhbWUudGltZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgcGF5cGFsbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvcGF5cGFsbC5wbmcnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGV0YWlscy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZXRhaWxzKHsgZ2FtZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ByZWRpY3Rpb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAndGFicy5wYXltZW50cy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaG9vc2VQYXlTeXN9PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnY2hvb3NlUGF5U3lzJykudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hvb3NlUGF5U3lzX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdiYW5rQ2FyZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BheW1lbnRQYXJ0Lm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IERldGFpbHMgfSBmcm9tIFwiLi9EZXRhaWxzL0RldGFpbHNcIjtcclxuaW1wb3J0IHsgUGF5bWVudCB9IGZyb20gXCIuL1BheW1lbnQvUGF5bWVudFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBheW1lbnRQYXJ0KHsgZ2FtZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAge2dhbWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgPERldGFpbHMgZ2FtZT17Z2FtZX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8UGF5bWVudCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkRm9ybS5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBTdWNjZXNzIH0gZnJvbSAnLi4vU3VjY2Vzcy9TdWNjZXNzJ1xyXG5pbXBvcnQgeyBQZW5kaW5nIH0gZnJvbSAnLi4vUGVuZGluZy9QZW5kaW5nJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJkRm9ybSgpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigncHJlZGljdGlvbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICd0YWJzLnBheW1lbnRzLmNhcmRGb3JtLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93U3VjY2Vzcywgc2V0U2hvd1N1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93UGVuZGluZywgc2V0U2hvd1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93Rm9ybSwgc2V0U2hvd0Zvcm1dID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgLy8gZnVuY3Rpb25zXHJcbiAgICAgICAganVtcCA9ICh4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4LnZhbHVlLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgeCA9IHgubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCAmJiAvdGV4dC8udGVzdCh4LnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBqdW1wQmFjayA9ICh4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4LnRhcmdldC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHguY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3ZlOmZvY3VzXCIpLnByZXZpb3VzU2libGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdmU6Zm9jdXNcIikucHJldmlvdXNTaWJsaW5nLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB5dXAgY29uZmlnc1xyXG4gICAgICAgIHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgIGZ1bGxOYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC8oXltBLVogXSokKS9tZyksXHJcbiAgICAgICAgICAgIENWVjogeXVwLnN0cmluZygpLm1pbigzKS5tYXgoMykucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgYWN0aXZlVW50aWxsOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oNSkubWF4KDUpLm1hdGNoZXMoLyheWzAtOS9dKiQpL21nKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhcmROdW1iZXJTY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBRdWFydGV0MTogeXVwLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKS5tYXRjaGVzKC9eWzAtOV17NH0kL21nKSxcclxuICAgICAgICAgICAgUXVhcnRldDI6IHl1cC5zdHJpbmcoKS5taW4oNCkubWF4KDQpLnJlcXVpcmVkKCkubWF0Y2hlcygvXlswLTldezR9JC9tZyksXHJcbiAgICAgICAgICAgIFF1YXJ0ZXQzOiB5dXAuc3RyaW5nKCkubWluKDQpLm1heCg0KS5yZXF1aXJlZCgpLm1hdGNoZXMoL15bMC05XXs0fSQvbWcpLFxyXG4gICAgICAgICAgICBRdWFydGV0NDogeXVwLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKS5tYXRjaGVzKC9eWzAtOV17NH0kL21nKSxcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBjYXJkTnVtYmVycyBzY2hlbWFcclxuICAgICAgICBtYXJnZWRTY2hlbWEgPSBzY2hlbWEuY29uY2F0KGNhcmROdW1iZXJTY2hlbWEpLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKG1hcmdlZFNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdWJtaXQgPSBkYXRhID0+IHtcclxuICAgICAgICAgICAgbGV0XHJcbiAgICAgICAgICAgICAgICBkYXRhRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgY2FyZE51bWJlcnMgPSBkYXRhRW50cmllcy5maWx0ZXIoZWwgPT4gZWxbMF0uaW5kZXhPZignUXVhcnRldCcpID4gLTEpLnJlZHVjZSgoYWMsIGVsKSA9PiAoYWMgKyBlbFsxXSksIFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZWREYXRhID0gZGF0YUVudHJpZXMuZmlsdGVyKGVsID0+IGVsWzBdLmluZGV4T2YoJ1F1YXJ0ZXQnKSlcclxuICAgICAgICAgICAgdHJhbnNmb3JtZWREYXRhLnB1c2goW1wiY2FyZE51bWJlclwiLCBjYXJkTnVtYmVyc10pXHJcbiAgICAgICAgICAgIHNldFNob3dGb3JtKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRTaG93U3VjY2Vzcyh0cnVlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFuc2Zvcm1lZERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dGb3JtICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfSBhdXRvQ29tcGxldGU9J29mZic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZnVsbE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZnVsbE5hbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKCdmdWxsTmFtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5mdWxsTmFtZSA/IHN0eWxlcy5pbnB1dF9lcnJvciA6IHN0eWxlcy5pbnB1dF9zdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9udW1iZXJfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ2NhcmROdW1iZXInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX251bWJlcl9pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdxdWFydGV0MSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDEgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1YXJ0ZXQyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDIgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1YXJ0ZXQzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDMgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1YXJ0ZXQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDQgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdnZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkNWVlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignQ1ZWJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgnY29kZUNWVicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5DVlYgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZV91bnRpbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjdGl2ZVVudGlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignYWN0aXZlVW50aWxsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgnYWN0aXZlVW50aWxsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLmFjdGl2ZVVudGlsbCA/IHN0eWxlcy5pbnB1dF9lcnJvciA6IHN0eWxlcy5pbnB1dF9zdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VjY2Vzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdzdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Nob3dTdWNjZXNzICYmIDxTdWNjZXNzIC8+fVxyXG4gICAgICAgICAgICB7c2hvd1BlbmRpbmcgJiYgPFBlbmRpbmcgLz59XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYXltZW50Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBDYXJkRm9ybSB9IGZyb20gXCIuL0NhcmRGb3JtL0NhcmRGb3JtXCI7XHJcbi8vIGljb25zXHJcbmltcG9ydCBjYXJkRm9ybSBmcm9tICcvcHVibGljL2ltYWdlcy9wYXltZW50cy9jYXJkLnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXltZW50KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhcmRGb3JtLnNyY30gYWx0PVwiY2FyZCBpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEZvcm0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGVuZGluZy5tb2R1bGUuc2NzcydcclxuLy8gaWNvbiBcclxuaW1wb3J0IHBlbmRpbmcgZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvcGVuZGluZy5wbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGVuZGluZygpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigncHJlZGljdGlvbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICd0YWJzLnBheW1lbnRzLmNhcmRGb3JtLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIGNsaWVudFdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoLFxyXG4gICAgICAgIFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2NsaWVudFdpZHRoIDwgNzY4ID9cclxuICAgICAgICAgICAgICAgIHNob3dNb2RhbCAmJiA8TW9kYWwgb25DbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZSgncGFuZGluZycpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwZW5kaW5nLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmFuc2xhdGUoJ3BhbmRpbmcnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwZW5kaW5nLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TdWNjZXNzLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uIFxyXG5pbXBvcnQgc3VjY2VzcyBmcm9tICcvcHVibGljL2ltYWdlcy9wYXltZW50cy9zdWNjZXNzLnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWNjZXNzKCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdwcmVkaWN0aW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3RhYnMucGF5bWVudHMuY2FyZEZvcm0uJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgY2xpZW50V2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y2xpZW50V2lkdGggPCA3NjggP1xyXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsICYmIDxNb2RhbCBvbkNsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKCd0aGFua3MnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3VjY2Vzcy5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKCd0aGFua3MnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdWNjZXNzLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiXHJcbi8vIGRiJ3NcclxuaW1wb3J0IHsgZXh0cmFfZGF0YSB9IGZyb20gXCIvc3JjL2dhbWVzX2RhdGEvZXh0cmFfZGF0YVwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSBcIi4vR2FtZUluZm8vR2FtZUluZm9cIjtcclxuaW1wb3J0IHsgUGF5bWVudFBhcnQgfSBmcm9tIFwiLi9QYXltZW50UGFydC9QYXltZW50UGFydFwiO1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYXltZW50VGFiLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBheW1lbnRUYWIoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICAvLyBmaW5kIHdoaWNoIHR5cGUgb2YgZ2FtZSB1c2VyIHdhbnQgYnV5XHJcbiAgICAgICAgZ2FtZV9wYXRoX2luX2V4dHJhZGF0YSA9IHJvdXRlci5xdWVyeT8uZ2FtZT8uc2xpY2UoMCwgcm91dGVyLnF1ZXJ5LmdhbWUuaW5kZXhPZignR2FtZScpKSxcclxuICAgICAgICAvLyBmaW5kIGV4YWN0bHkgd2hpY2ggZ2FtZSB1c2VyIHdhbnQgYnV5XHJcbiAgICAgICAgZ2FtZV9pZCA9IHJvdXRlci5xdWVyeT8uZ2FtZT8uc2xpY2UoXCI/XCIpLFxyXG4gICAgICAgIC8vIGZpbmQgZ2FtZSBcclxuICAgICAgICBnZXRfZ2FtZV9kYXRhID0gKGdhbWVUeXBlLCBkYikgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGdhbWVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZXhwcmVzc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5leHByZXNzLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJpbnZpbnNpYmxlU3RneVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5pbnZpbnNpYmxlU3RneS5maWx0ZXIoZWwgPT4gZWwuaWQgPT09IGdhbWVfaWQpXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3JkaW5hclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5vcmRpbmFyLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b2RheU1hdGNoZXNcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIudG9kYXlNYXRjaGVzLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwcmVkaWN0aW9uc3BhZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIucHJlZGljdGlvbnNwYWdlLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwcmVkaWN0aW9uc2xpZGVcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIucHJlZGljdGlvbnNsaWRlLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnYW1lX2RhdGEgPSBnZXRfZ2FtZV9kYXRhKGdhbWVfcGF0aF9pbl9leHRyYWRhdGEsIGV4dHJhX2RhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZV9kYXRhKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAge2dhbWVfcGF0aF9pbl9leHRyYWRhdGEgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgPEdhbWVJbmZvIGdhbWU9e2dhbWVfZGF0YVswXX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8UGF5bWVudFBhcnQgZ2FtZT17Z2FtZV9kYXRhWzBdfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuLy8gZGF0YXNcclxuaW1wb3J0IHsgcHJlZGljdGlvbnMgfSBmcm9tICcvc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvcHJlZGljdGlvbnMnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vUm93L1JvdydcclxuaW1wb3J0IHsgVGFiSGVhZGVyIH0gZnJvbSAnLi4vVGFiSGVhZGVyL1RhYkhlYWRlcic7XHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ByZWRpY3Rpb25UYWIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IEdFVF9QUkVESUNUSU9OUyB9IGZyb20gJy9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcvbGliL2VyLmxpYidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJlZGljdGlvblRhYih7IGNsaWNrIH0pIHtcclxuXHJcbiAgICBjb25zdCBbIHNsaWRlX2RhdGEsIHNldFNsaWRlRGF0YSBdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCk9PiB7XHJcbiAgICAgICAgcmVxdWVzdCggR0VUX1BSRURJQ1RJT05TLCB7fSwgeyBhdXRoOiB0cnVlIH0gKVxyXG4gICAgICAgICAgICAudGhlbiggcnNwID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRvYXN0KGBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZGApXHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZURhdGEoIHJzcC5kYXRhLmRhdGEubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogaXRlbVtgdGVhbTFfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogaXRlbVtgdGVhbTJfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGl0ZW0udGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29lZmZpY2VudDogaXRlbS5mYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFyVGV4dDogYCR7aXRlbS50eXBlfSAvICR7aXRlbS5wcmljZX3RgNGD0LEuYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UgKyAnINGA0YPQsS4nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge30pXHJcbiAgICB9LCBbXSApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGFiSGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9hcmR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlX2RhdGEubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17aSArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lTmFtZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvTmFtZT17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17ZWwudGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb249e2VsLnByZWRpY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtlbC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29lZmZpY2VudD17ZWwuY29lZmZpY2VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtlbC5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBheW1lbnRzPXtjbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Sb3cubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUm93KHtcclxuICAgIG9yZGVyLFxyXG4gICAgdGVhbU9uZU5hbWUsXHJcbiAgICB0ZWFtT25lSWNvbixcclxuICAgIHRlYW1Ud29OYW1lLFxyXG4gICAgdGVhbVR3b0ljb24sXHJcbiAgICBwcmVkaWN0aW9uLFxyXG4gICAgdHlwZSxcclxuICAgIGRhdGUsXHJcbiAgICB0aW1lLFxyXG4gICAgY29lZmZpY2VudCxcclxuICAgIHByaWNlLFxyXG4gICAgY2xpY2tCdXksXHJcbiAgICBvcGVuUGF5bWVudHNcclxufSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdwcmVkaWN0aW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3RhYnMuaGVhZGVyLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e29yZGVyfS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtT25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RlYW1PbmVOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtT25lSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy52c30+VlMuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbVR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0ZWFtVHdvTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbVR3b0ljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uLnRoZXJlSXMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbl90aXRsZX0+e3RyYW5zbGF0ZSgncHJlZGljdGlvbicpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbl9ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcmVkaWN0aW9uLnRvdGFsQmV0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcmVkaWN0aW9uLmNvZWZmaWNlbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbXVsYXRvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0eXBlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfdGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RpbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvZWZmaWNlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29lZmZpY2VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXlCdXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGNsaWNrQnV5KCk7IG9wZW5QYXltZW50cygpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y29tbW9ucy5idXknKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWJIZWFkZXIubW9kdWxlLnNjc3MnXHJcbi8vIHRyYW5zbGF0aW9uc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFiSGVhZGVyKCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdwcmVkaWN0aW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3RhYnMuaGVhZGVyLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcl90YWJsZXRzfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgncHJlZGljdGlvbicpLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCd0eXBlJykudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ2RhdGUnKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgndGltZScpLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdjb2VmaWNlbnQnKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgncHJpY2UnKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFBheW1lbnRUYWIgfSBmcm9tICcuL1BheW1lbnRUYWIvUGF5bWVudFRhYidcclxuaW1wb3J0IHsgUHJlZGljdGlvblRhYiB9IGZyb20gJy4vUHJlZGljdGlvblRhYi9QcmVkaWN0aW9uVGFiJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYWJzKHtcclxuICAgIHByZWRpY3Rpb25UYWIsXHJcbiAgICBwYXltZW50VGFiLFxyXG4gICAgZ2FtZUlkRm9yUGF5bWVudCxcclxuICAgIGNsaWNrXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3ByZWRpY3Rpb25UYWIgJiYgPFByZWRpY3Rpb25UYWIgY2xpY2s9e2NsaWNrfSAvPn1cclxuICAgICAgICAgICAge3BheW1lbnRUYWIgJiYgPFBheW1lbnRUYWIgZ2FtZUlkPXtnYW1lSWRGb3JQYXltZW50fSAvPn0gICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7XHJcbiAgICBwYWdlID0gJ2NvbW1vbicsXHJcbiAgICB0ZXh0UGF0aE5hbWUgPSBcIllvdSBhcmUgZG9udCBwdXQgdGhlcmUgdGV4dC5cIixcclxuICAgIGxvY2F0aW9uSW5QYWdlID0gXCJcIixcclxuICAgIGFkaXRpb25hbFN0eWxlcyA9IG51bGwsXHJcbiAgICBhY3RpdmUgPSBmYWxzZSxcclxuICAgIGNsaWNrID0gbnVsbCxcclxuICAgIGNvbnRhaW5lclN0eWxlcyA9IG51bGwgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKHBhZ2UpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9IGAke2xvY2F0aW9uSW5QYWdlfWAsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHthZGl0aW9uYWxTdHlsZXN9ICR7YWN0aXZlID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXtjb250YWluZXJTdHlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRlbnR9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKHRleHRQYXRoTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuXHJcbmNvbnN0XHJcbiAgICBoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbiA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYydcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gJ2F1dG8nXHJcbiAgICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTW9kYWwoe1xyXG4gICAgb25DbG9zZSxcclxuICAgIC8vIGNsb3NlV2l0aFZlY3RvcmUgPSBudWxsLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBjb250YWluZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgY29udGVudFN0eWxlcyA9IG51bGwsXHJcbiAgICBvdGhlclN0eWxlcyA9IG51bGwsXHJcbiAgICBwb3J0YWxMb2NhdGlvbiA9ICdtb2RhbC1jb250ZWluZXInIH0pIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2hhbmRsZUNsb3NlXSlcclxuXHJcbiAgICBjb25zdCBub2RlID0gdXNlUmVmKClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9IGUgPT4ge1xyXG4gICAgICAgIGlmIChub2RlPy5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgICAgZGluYW1pY1RvcCA9IHdpbmRvdy5zY3JvbGxZXHJcblxyXG4gICAgc2hvd01vZGFsID8gaGFuZGxlX292ZXJmbG93X29uX29wZW4oKSA6IGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSgpXHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbENvbnRlaW5lcn0gJHtjb250YWluZXJTdHlsZXN9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRvcDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkICFpbXBvcnRhbnQnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbENvbnRlbnR9ICR7Y29udGVudFN0eWxlc31gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e290aGVyU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtub2RlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBpZiAoc2hvd01vZGFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcclxuICAgICAgICAgICAgbW9kYWwsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcnRhbExvY2F0aW9uKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuIG51bGxcclxufVxyXG4iLCJleHBvcnQgY29uc3QgaG9zdCA9IFwiaHR0cHM6Ly93d3cuZm9vdGJldDI0LmNvbS9hcGlcIjtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0gKCBkZXN0aW5hdGlvbiwgcGF5bG9hZCA9IG51bGwsIG9wdGlvbnMgPSBudWxsICkgPT4gbmV3IFByb21pc2UoICggcnNsdiwgcmpjdCApID0+IHtcclxuICBsZXQgaGVhZGVycyA9IHt9O1xyXG5cclxuICBpZiAoIG9wdGlvbnMgKSB7XHJcbiAgICBpZiAoIG9wdGlvbnMuYXV0aCA9PT0gdHJ1ZSApIHtcclxuICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoYGFjY2Vzcy10b2tlbmApfWAgfHwgYGAgLy8gZm9yIG1vc3Qgb2YgcmVxdWVzdHNcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICggYGhlYWRlcnNgIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzIGluc3RhbmNlb2YgT2JqZWN0ICkge1xyXG4gICAgICBoZWFkZXJzID0geyAuLi5oZWFkZXJzLCAuLi5vcHRpb25zLmhlYWRlcnMgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coIGBzdGFydCBsb2FkaW5nYCApO1xyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogZGVzdGluYXRpb24ubWV0aG9kLFxyXG4gICAgdXJsOiBkZXN0aW5hdGlvbi51cmwsXHJcbiAgICBoZWFkZXJzLFxyXG4gICAgZGF0YTogcGF5bG9hZCB8fCB7fVxyXG4gIH0pXHJcbiAgLnRoZW4oIHJzbHYgKVxyXG4gIC5jYXRjaCggcmpjdCApXHJcbiAgLmZpbmFsbHkoICgpID0+IGNvbnNvbGUubG9nKCBgZW5kIGxvYWRpbmdgICkgKVxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gbmFtZSA9PiB7XHJcbiAgdmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcclxuICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGMgPSBjYVtpXTtcclxuXHJcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPTsgUGF0aD0vOyBFeHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKG5hbWUsIHZhbHVlLCBkYXlzKSA9PiB7XHJcbiAgbGV0IGV4cGlyZXMgPSBcIlwiO1xyXG5cclxuICBpZiAoZGF5cykge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgKHZhbHVlIHx8IFwiXCIpICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG4iLCJpbXBvcnQge2hvc3R9IGZyb20gXCIuL2NvbnN0YW50c1wiXHJcblxyXG5jb25zdCBBVVRIX1VSTCA9IGhvc3QgKyBgYXV0aGA7XHJcbmNvbnN0IEFDQ09VTlRfVVJMID0gaG9zdCArIGBhY2NvdW50YFxyXG5cclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyAncmVnaXN0cmF0aW9uJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HSU4gPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArICdsb2dpbicsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BQ0NPVU5UX0lORk8gPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdpbmZvJyxcclxuICBtZXRob2Q6ICdnZXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9JTkZPID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAnaW5mbycsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfSU1BR0UgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdwcm9maWxlLWltYWdlJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU1RBUlRfUkVTRVRfUEFTU1dPUkQgPSBlbWFpbCA9PiAoe1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvcmVzZXQ/ZW1haWw9JHtlbWFpbH1gLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFZFUklGWV9QQVNTV09SRF9SRVNFVCA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL3ZlcmlmeV9jb2RlYCxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTkVXX1BBU1NXT1JEID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvbmV3X3Bhc3N3b3JkIGAsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX05FV1MgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vbmV3c2AsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9tYXRjaC1vZi10aGUtZGF5YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX09GX05FWFRfREFZID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL21hdGNoLW9mLXRoZS1kYXk/dHlwZT1uZXh0X2RheWAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJFRElDVElPTlMgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vcHJlZGljdGlvbmAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRkVFREJBQ0sgPSBpZCA9PiAoe1xyXG4gICAgdXJsOiBob3N0ICsgYGZlZWRiYWNrLyR7aWR9P3NvcnRfYnk9Y3JlYXRlZF9hdCZvcmRlcl9ieT1kZXNjYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19CWV9UWVBFID0gdHlwZSA9PiAoe1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL2dhbWU/dHlwZT0ke3R5cGV9YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufSlcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbicsJ2RvbWFpbkxvY2FsZXMnXTtjb25zdCByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107Y29uc3QgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPSguLi5hcmdzKT0+e2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsKC4uLmFyZ3MpPT57Y29uc3QgZXZlbnRGaWVsZD1gb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7Y29uc3QgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe2NvbnN0IG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5jb25zdCBjcmVhdGVSb3V0ZXI9KC4uLmFyZ3MpPT57c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe2NvbnN0IF9yb3V0ZXI9cm91dGVyO2NvbnN0IGluc3RhbmNlPXt9O2Zvcihjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pP1tdOnt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT0oLi4uYXJncyk9PntyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRldGVjdERvbWFpbkxvY2FsZT1kZXRlY3REb21haW5Mb2NhbGU7ZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkl0ZW1zLGhvc3RuYW1lLGRldGVjdGVkTG9jYWxlKXtsZXQgZG9tYWluSXRlbTtpZihkb21haW5JdGVtcyl7aWYoZGV0ZWN0ZWRMb2NhbGUpe2RldGVjdGVkTG9jYWxlPWRldGVjdGVkTG9jYWxlLnRvTG93ZXJDYXNlKCk7fWZvcihjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKXt2YXIgX2l0ZW0kZG9tYWluLF9pdGVtJGxvY2FsZXM7Ly8gcmVtb3ZlIHBvcnQgaWYgcHJlc2VudFxuY29uc3QgZG9tYWluSG9zdG5hbWU9KF9pdGVtJGRvbWFpbj1pdGVtLmRvbWFpbik9PW51bGw/dm9pZCAwOl9pdGVtJGRvbWFpbi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7aWYoaG9zdG5hbWU9PT1kb21haW5Ib3N0bmFtZXx8ZGV0ZWN0ZWRMb2NhbGU9PT1pdGVtLmRlZmF1bHRMb2NhbGUudG9Mb3dlckNhc2UoKXx8KF9pdGVtJGxvY2FsZXM9aXRlbS5sb2NhbGVzKSE9bnVsbCYmX2l0ZW0kbG9jYWxlcy5zb21lKGxvY2FsZT0+bG9jYWxlLnRvTG93ZXJDYXNlKCk9PT1kZXRlY3RlZExvY2FsZSkpe2RvbWFpbkl0ZW09aXRlbTticmVhazt9fX1yZXR1cm4gZG9tYWluSXRlbTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXRlY3QtZG9tYWluLWxvY2FsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJcbiAgICBpbXBvcnQgX19pMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4gICAgaW1wb3J0IF9fbG9hZE5hbWVzcGFjZXMgZnJvbSAnbmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXMnXG4gICAgXG5pbXBvcnQgUHJlZGljdGlvblBheW1lbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1ByZWRpY3Rpb25QYXltZW50cyc7XHJcblxyXG5cclxuY29uc3QgUHJlZGljdGlvblBheW1lbnRzUGFnZSA9ICgpID0+IDxQcmVkaWN0aW9uUGF5bWVudHMgLz5cclxuXHJcblByZWRpY3Rpb25QYXltZW50c1BhZ2UubGF5b3V0ID0gXCJ3aXRob3V0UGhvdG9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWRpY3Rpb25QYXltZW50c1BhZ2U7XHJcblxuXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLi4uKGF3YWl0IF9fbG9hZE5hbWVzcGFjZXMoe1xuICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3ByZWRpY3Rpb24nLFxuICAgICAgICAgICAgICBsb2FkZXJOYW1lOiAnZ2V0U3RhdGljUHJvcHMnLFxuICAgICAgICAgICAgICAuLi5fX2kxOG5Db25maWcsXG4gICAgICAgICAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAiLCIvLyBpY29uc1xyXG5pbXBvcnQgYXRsZXRpY29JY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLnBuZydcclxuaW1wb3J0IGF0bGV0aWNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nJ1xyXG5pbXBvcnQgYmFyY2FJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9iYXJjYS5wbmcnXHJcbmltcG9ydCBtYXJjZWxJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwucG5nJ1xyXG5pbXBvcnQgcHNqSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcHNqLnBuZydcclxuaW1wb3J0IHJlbm5haXNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBleHByZXNzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTc1MCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JHQsNGA0YHQtdC70L7QvdCwJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIzOjAwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcyNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUzXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjM6MDAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmljZTogJzE4MDAg0YDRg9CxLiAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWU0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWU1XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lNlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lN1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lOFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTlcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTEwXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxMVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTJcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxM1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTE0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxNVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTE2XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxOFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTlcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTIwXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG5dXHJcbiIsImltcG9ydCB7IGV4cHJlc3MgfSBmcm9tIFwiLi9leHByZXNzL2V4cHJlc3NcIjtcclxuaW1wb3J0IHsgaW52aW5zaWJsZV9zdHJhdGVneSB9IGZyb20gXCIuL2ludmluc2libGVfc3RyYXRlZ3kvaW52aW5zaWJsZV9zdHJhdGVneVwiO1xyXG5pbXBvcnQgeyBtYXRjaGVzIH0gZnJvbSBcIi4vbWF0Y2hlcy9tYXRjaGVzXCI7XHJcbmltcG9ydCB7IG9yZGluYXIgfSBmcm9tIFwiLi9vcmRpbmFyL29yZGluYXJcIjtcclxuaW1wb3J0IHsgcHJlZGljdGlvbnMgfSBmcm9tIFwiLi9wcmVkaWN0aW9ucy9wcmVkaWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBzbGlkZV9kYXRhIH0gZnJvbSBcIi4vcHJlZGljdGlvbnMvc2xpZGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBleHRyYV9kYXRhID0ge1xyXG5cclxuICAgIGV4cHJlc3M6IGV4cHJlc3MsXHJcbiAgICBpbnZpbnNpYmxlU3RneTogaW52aW5zaWJsZV9zdHJhdGVneSxcclxuICAgIG9yZGluYXI6IG9yZGluYXIsXHJcbiAgICB0b2RheU1hdGNoZXM6IG1hdGNoZXMudG9kYXlNYXRjaGVzLFxyXG4gICAgcHJlZGljdGlvbnNwYWdlOiBwcmVkaWN0aW9ucyxcclxuICAgIHByZWRpY3Rpb25zbGlkZTogc2xpZGVfZGF0YVxyXG5cclxufSIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nJ1xyXG5pbXBvcnQgYXRsZXRpY0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGludmluc2libGVfc3RyYXRlZ3kgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JHQsNGA0YHQtdC70L7QvdCwJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIzOjAwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcyNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTNcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9Cc0LDRgNGB0LXQu9GMJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogbWFyY2VsSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMzowMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByaWNlOiAnMTgwMCDRgNGD0LEuICdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lNFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWU1XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWU2XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lOFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lOVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxMFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxMVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxMlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTNcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE1XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxNlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE4XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE5XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTIwXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG5dXHJcbiIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2F0bGV0aWNvLnBuZydcclxuaW1wb3J0IGJhcmNhSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYmFyY2EucG5nJ1xyXG5pbXBvcnQgbGVpcHppZ0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2xlaXB6aWcucG5nJ1xyXG5pbXBvcnQgbGl2ZXJwb29sSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbGl2ZXJwb29sLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoZXMgPSB7XHJcbiAgICB0b2RheU1hdGNoZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTEnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjA6MDAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93T25lLmdhbWVTdGF0ZS5zdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICcyIDogMScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lMicsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMTozMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dUd28uZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkdCw0YDRgdC10LvQvtC90LAnLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICctJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQn9Ch0JYnLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93VHdvLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd1R3by50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTMnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjI6MjAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93VGhyZWUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBtYXJjZWxJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICctJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93VGhyZWUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93VGhyZWUudGl0bGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RvZGF5TWF0Y2hlc0dhbWU0JyxcclxuICAgICAgICAgICAgZGF0ZTogJzIzOjMwJyxcclxuICAgICAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiAnLnJvd0ZvcmUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGxpdmVycG9vbEljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IGxlaXB6aWdJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dGb3JlLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd0ZvcmUudGl0bGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RvZGF5TWF0Y2hlc0dhbWU1JyxcclxuICAgICAgICAgICAgZGF0ZTogJzIwOjAwJyxcclxuICAgICAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiAnLnJvd09uZS5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93T25lLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd09uZS50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTYnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjE6MzAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93VHdvLmdhbWVTdGF0ZS5kb250U3RhcnRlZCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd1R3by5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dUd28udGl0bGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RvZGF5TWF0Y2hlc0dhbWU3JyxcclxuICAgICAgICAgICAgZGF0ZTogJzIyOjIwJyxcclxuICAgICAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiAnLnJvd1RocmVlLmdhbWVTdGF0ZS5kb250U3RhcnRlZCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBtYXJjZWxJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICctJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93VGhyZWUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93VGhyZWUudGl0bGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RvZGF5TWF0Y2hlc0dhbWU4JyxcclxuICAgICAgICAgICAgZGF0ZTogJzIzOjMwJyxcclxuICAgICAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiAnLnJvd0ZvcmUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGxpdmVycG9vbEljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IGxlaXB6aWdJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dGb3JlLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd0ZvcmUudGl0bGUnLFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICB0b21tb3Jvd01hdGNoZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTEnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjA6MDAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93T25lLmdhbWVTdGF0ZS5zdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICcyIDogMScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lMicsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMTozMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dUd28uZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93VHdvLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd1R3by50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTMnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjI6MjAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93VGhyZWUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dUaHJlZS5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dUaHJlZS50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTQnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjM6MzAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93Rm9yZS5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogbGl2ZXJwb29sSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogbGVpcHppZ0ljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd0ZvcmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93Rm9yZS50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTUnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjA6MDAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93T25lLmdhbWVTdGF0ZS5kb250U3RhcnRlZCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lNicsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMTozMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dUd28uZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93VHdvLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd1R3by50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTcnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjI6MjAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93VGhyZWUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dUaHJlZS5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dUaHJlZS50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTgnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjM6MzAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93Rm9yZS5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogbGl2ZXJwb29sSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogbGVpcHppZ0ljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd0ZvcmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93Rm9yZS50aXRsZScsXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59IiwiLy8gaWNvbnNcclxuaW1wb3J0IGF0bGV0aWNvSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmcnXHJcbmltcG9ydCBhdGxldGljSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLnBuZydcclxuaW1wb3J0IGJhcmNhSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYmFyY2EucG5nJ1xyXG5pbXBvcnQgbWFyY2VsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLnBuZydcclxuaW1wb3J0IHBzakljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Bzai5wbmcnXHJcbmltcG9ydCByZW5uYWlzSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmcnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JkaW5hciA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTFcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTIyINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JHQsNGA0YHQtdC70L7QvdCwJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIzOjAwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcyNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lM1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JzQsNGA0YHQtdC70YwnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBtYXJjZWxJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcmVubmFpc0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIzOjAwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcxODAwINGA0YPQsS4gJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTRcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWU1XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTZcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWU3XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lOFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWU5XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTBcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxMVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTEyXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTEzXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTE0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTVcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTZcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMThcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxOVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTIwXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG5dXHJcbiIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nJ1xyXG5pbXBvcnQgYXRsZXRpY0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZWRpY3Rpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcItCe0YDQtNC40L3QsNGAXCIsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE2NDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUyJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CR0LDRgNGB0LXQu9C+0L3QsCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQn9Ch0JYnLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcItCt0LrRgdC/0YDQtdGB0YFcIixcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByaWNlOiAnMjUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTMnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JzQsNGA0YHQtdC70YwnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBtYXJjZWxJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcmVubmFpc0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByaWNlOiAnMTgwMCDRgNGD0LEuICdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWU0JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lNScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWU2JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lNycsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTgnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lOScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTEwJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTEnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxMicsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxMycsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxNCcsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTE1JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTE2JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTE3JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTE4JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTknLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbl1cclxuIiwiLy8gaWNvbnNcclxuaW1wb3J0IGF0bGV0aWNvSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2JhcmNhLnBuZydcclxuaW1wb3J0IHBzakljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3Bzai5wbmcnXHJcbmltcG9ydCBhdGxldGljSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCByZW5uYWlzSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmcnXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVfZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWUxJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogXCLQntGA0LTQuNC90LDRgFwiLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWUyJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CR0LDRgNGB0LXQu9C+0L3QsCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwi0K3QutGB0L/RgNC10YHRgVwiLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcyNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTMnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JzQsNGA0YHQtdC70YwnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxODAwINGA0YPQsS4gJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWU0JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWU1JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWU2JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJ1xyXG4gICAgfSxcclxuXSIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLjI4MzgyMGZkMjZhZTMwODU0MmM0OTk4NzQ3ZjZmMTUwLnBuZ1wiLFwiaGVpZ2h0XCI6NjMsXCJ3aWR0aFwiOjU4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE2VWxFUVZSNDJqWEt2MnJDVUJnRjhEdjRNb1crUjRmT2hUNUw3UmdYTjZGTEM1RVVIQnBxMGc0WEdrV3c0bzI1WE5BaEVDNUpNTG1LVWZEUG9LQUkwZS9URFA2V3d6a2NFc2R4N3ZzK2NzNUJDQUZCRUlBWWpmQzZBVkZLN1pJa3dTZ013ZlU4a0ZLQ2F4aW8wblJQR0dPeHJ1djRxbWxucTlHQTlZOTlubENLVHFlVGtNVjhibDRQK0ZXdG5qYk5iemphOWltTElod3JaUkZQaUtmWmRJcXJqL2NjZS8rNHJOZnpSWmJoZ1BOblVoaW5xWkQ5UG00L2pVUFE3YUlNd3lHNTBTcVZPNmZkUGpETHdsOUtqeS9sOGowcE1OY3RGZGswelFmYWF1VnZ0ZHBqMGY4Y3AzUUJXZnliajUwK2Nvc0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby4yY2U3NWUyMTE2MmUyZTZkYzQ4Yjk5ZTYwMTgxMDdlMC5wbmdcIixcImhlaWdodFwiOjYyLFwid2lkdGhcIjo0NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFZQUFBQUlDQVlBQUFEYXhvNDRBQUFBMDBsRVFWUjRuQUhJQURmL0FXeHRoc1RlMytjeDh2UDZDZ3dLQkFBR0J3WDJCaEFPendHRGhKYi9Oell1QU56YzRmOEVCd2NBeU1mU0FSRGk0UUFCajVDZy9CRVFEUUw3Ly84QnZLcStBSHQ4WHYvanI2di9BV2hwZ3YzMTl2a0NNREVsL3kvODdBQXlTMGdCdzZXcS93RmVhSVAvSndIMi9WbFdSQVArK3ZvQUNCTVQvZEN3c3dNQm5vV085VTVRUlFydDROLzgvdjcvQUJFZEhRVEZzTGIzQVkyVG9UQW9CdjZtSlNBWUtRQUFBQURjNGVqWXl2NEtXd0ZxSTBZQWx0MjZCcm1zc3JzQUFBQUJSMVJPUlZVb1VmbCtsVnRyU1RDeTRRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXRsZXRpYy4zNjA2OGIwYzZjZDczN2YwNTlkNTM2ODQ1MGQ2MmRjNi5wbmdcIixcImhlaWdodFwiOjQ0LFwid2lkdGhcIjozMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFZQUFBQUlDQVlBQUFEYXhvNDRBQUFBMDBsRVFWUjRuQUhJQURmL0FXcHNocnZQME40dUFnSURFZ1VFQVFFS0NnWHRDUlFTMGdHT2o1Ly9LQ2NpQU5uWjN3QUtEUXNBeGNiVEFCSGs0Z0FCbUptby9BZ0hCZ0w3L3Y4QXU2dStBSGQ0V2dEdXVyVCtBWEZ6aWY3bjUvQUJNalFtL3kvMjVnQTFVazRCemJHMC93RmpiWWYvSmZydy9WWllSUVArK1BrQUJ4TVQvZHE4dmdNQnBZMlYrMGRHT3dUdDMrRDgvdi8vQUJFZUhnVEx1ci85QVkrWnFEUWg5KzZmS2lnZ0xBQUFBQURZMnVMVjBRc1hZUUZ4UlZ3QWo3dWtCTFdwc0xJQUFBQUJTMWRRVFYxR1l2eXFIMWdSdnlMWXVBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXRsZXRpY28uYjlmMTIyNzU4YjYwNzFhZmM4MGFjZGVmMDNmZDY5NmYucG5nXCIsXCJoZWlnaHRcIjo0NSxcIndpZHRoXCI6NDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTgwbEVRVlI0bkFIb0FCZi9BYy9Qei96dTd1NEQrdnI2L3dJQkFRRUtDd3YvK3Y3K0FRY0NBdjhCMzkvZjh2djcrdzM5L1B6LzYrN3VBQkVRRUFEcnlja0JJME5EOWdHL3Y3L2MzdDNkSTkvbzZQNHJIUjBCUWdzTC8vWC8vd0xVREF6Z0FlUGk0cXZkMzk5VTRiKy8vVWtnSUFNT0J3Zjk2aTR1QS9nSkNiQUJ3OGJHVWg4YUdxMEl0Ylg4RlNRa0JPcmg0UHo4U1VvRTN1TGlXQUgvLy84QTJkemN3dmZoNFQwZTE5YjI0U2dwQ2dRWkdjWXRLeXM3QVlLQmdRQzl2YjBlYjNOenpBLzcreFhwL2YzdHNLMnROQzh2TCtBQnNMR3hCUFgxOWZ3Qi9Qd3pBZ3NMck5iTXpGY0lEUTNLSGg0ZUJJWkllVXZsaXkvMUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9iYXJjYS5hZjM1NTI3YjE2MDY3NmVhYzdhNmQ1YzBhNjA4ODNjMy5wbmdcIixcImhlaWdodFwiOjQ5LFwid2lkdGhcIjo0OCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFCQ2tsRVFWUjQybVBveTJUd1dyK3NvbXQ3aSsvV1RmTnkrdGEwU1BWdmEyYmJ1cXFkdVhOS0dZTTdRME02Zzl1MURiUCtQODRvL245MzBkVC9EMmFhL1g4N1Rmei81U2tpLzlzYkdSd1pnRUQwMHB4cEg1NTRGUDUvT0hYNjd4ZXo3SDUvbkNMei8yS3IzRHNHYlFaaGhpMGREQlBmbnEzNWYyMXh4SjhUNjJ2LzdlcFYvbmQ1RHNPZmwxc1kvbS91WitoaFdORmp1M0pCaWYvL09XbCt2M3VUWFA3WHhZWC9uNW9ROFh0eGZmTC9sZDBXU3htYXF1eFRDM3hLL3VjeWxQL2VPQ1hzeithcGdYOEtHRXIvRlBvVy9lK3V0NDVqWUNoZ1lGMWFLckt4Tnp6cC83VEMrUC9UaStMKzk0WW4vRjllSnJLY0FSbE1iMmF3VzlXb01CdUlaODFzWmJDQmlRTUFrUHQ5V013aVpXd0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbGVpcHppZy40NGZiMzMyYzQwNGE1M2EwYWNkZTkyMjEzMzQ2NTRlMC5wbmdcIixcImhlaWdodFwiOjQ1LFwid2lkdGhcIjo3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUZDQVlBQUFCNGthMVZBQUFBc0VsRVFWUjRuQUdsQUZyL0FiK3l2UUJCRkE4TDBCZ1Z1UW9BQUFQKy92NEErQUlDL1RESjFVaTRCQUgwQWYvRnpoTGgwTlIxQlFrRWVQVXZMQUFMQ3dvQS84VEpBUHY0L1lnZ05TK0xBZkc2eFVIMDN0OXUvUW9JVC9jbUlmc0dCZ1VBQTlYYkJRTHo5ckVQSnlTVEFjUzh4QUE4T3pJR3VkRFo2aDRWRWcvNysvc0E2ZkwxOFVYbDZSYXovZjM2QWNiRXpBTGFFUTcrRU5iYlBRc1RFWDhEQXdNQTdPUG1nZFllSE1NOStmb0NpejVMMlBhTW9qb0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbGl2ZXJwb29sLmVhMTQ4ZmFiNzk5NmYyZjAxZTg1YTk3MDA4YWQ5NDUwLnBuZ1wiLFwiaGVpZ2h0XCI6NTMsXCJ3aWR0aFwiOjQxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUEwMGxFUVZSNG5BSElBRGYvQWYvLy93aTcyTllrNmdIL2dQdi8vZ1lhQVFOOE9TSWwzQUdPMXRHSitnRUFkdXo2K1FBQUFBQUFGUVlIQUFQL0FKUUJxNmluaFFmMDkwMEU4dk1MQVA3K0FQd1RFZkQ2RGd1OEFmQmtnVVgyL1BhNkFRWUYvZ0lTRFFEKzd2TUNCL3NBU1FIa2RIZW5FR1JsV0FRUER2NzU0ZVVBQUFRREF2U3hyYXNCM29KdXV4NWhlQ0wyNmVraTk4M1ZBQk5HUHQ3anA1RGZBV0RKd3NGSTZ2QTVTQm9mQmY3eDlBQzk5dTc2dEJVT3hnRi95Y05XNWZQeVp4UUZCa0lHQkFVQTV2ZjB3UjRORDVwekxGMk4waXVGN0FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwuZWI0NjA0ODY0Y2UyNDAxYWEyNGZiNGVkMjcxZjZlODMucG5nXCIsXCJoZWlnaHRcIjo1MyxcIndpZHRoXCI6NDEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXRVbEVRVlI0Mm1Pb243T0ZsUUVJN2k1bjBIMjRna0VkeEc2Y3N3a29CZ0xUYnJqYXpMZ1Fhekg5WWdLUWJROFJuSDZkbjNuNnRmMUFnVTZHYWRlbkFObmJnVFFYVVBXMWJpQmVEeFJZd1RUdCtscWd3alZBaVZZR29PQjJJRjRFeEJlQkF1Y1pwbDliQW1SdlpoQ2FmbTJENFBScmkvbW1YNXNCWlBjS1RMKzJEb2dYQUhYY2FXR1lkcnVYWWVxZFVJYXBkd09CN01sQVhNZXdZbjVmOXQ1Rm1SNHJGM1E3cjEzUTVyVjNVWmJUb3ZsVFlnQUZaVmZBZXVaV1BRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcHNqLjE5OTA5Y2RjMjdlNmU3NGRhNDEzZjRhMjIxMmRhZDk3LnBuZ1wiLFwiaGVpZ2h0XCI6NDcsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUJFMGxFUVZSNG5BRUlBZmYrQVUxK3JBQ3p6K29QWlQwYmhna0hCRVlKQmdULzZlLzJ0cURmOFhwVkhBejJBUUFpaWc5K2VqSEJDQWNGTHdRQkFRRDgvUDBBOWZ2OUFQbjgvc21NdE5kQ0FXYUtzWnJ3N3ZWbEJSUU8rVUgwN1FYNi92OEEwaFlZKytqZzdBY1dGdzJPQVZGOHF1RHk2L01mdlFnSy90QUQzd0g1QVFNQU4va2QvMEQ2OXdJY0d3L1lBVlo5cXVIRTYvWWVsUzRPL2lmZTFBRUNCQU1Benh3cS8xblI3d0ppSGc3YUFXK09zNXlzM2U1amx5VUorY2I1K3dVTUFnQUFLZ0lFKzJ6ZStBZFlKUk9SQVV5RnNBOGFCQURCeXUvNEx4bisvZ0FLQ2dZQTVQbjlBREFSQ2NuMEN3cENBV21RdFFEbjgvb09Id29EaXVmeStVVUdCQUwvRXdrRnRjdnM5bmtzRmd6MlFvcDJEWWg4WUlrQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLmQ3ZjU5NzMwNDk0NzQwMGZiMjBmMDVlMmRhZTZiNWZiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE2a2xFUVZSNDJtUFkzY0dqa2VIUGVUZkVndUhjVmdPRy9jK0R4Sys5U0ZZOSsyMkRnQUREdWpZOWMzVUdodjlIcTZ2L0gxKzY1UC9hcExUL1Qyd1lQdjdZNEN6QjBGYXE1cC9Jd1BELzE4SDl2eDlkdS9wbjlhcFYvMjdyTWZ6OE05Tk5sNkU2WHFxWGdZSGgvNjIrcnQrN2Vydi9MNnV1L3ZOUW11SC82d3FEVklaY2Y0RXR5c2JtLzkxTURINXY4UFA4L3pqWTg5ZlRZTy8venpOVStoZ2FFM2dtT0prWi9XZXdkUGkvSThqbjk5dW84UCtQdzkzL3Z5NlR6V0Q0ZjQ2Qm96V0dvVi9hZ09ITFJoMkIvNi85WkY4L3kyYW9aRUFHdTZhSXE1MnVrT241ZjBCZkdDWUdBTlpLWnNGYzIxdkhBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYmFyY2EuNzVmOWUyMzBiZWI3OWUyODJkN2EwZjM2OWE2ZTY2NmUucG5nXCIsXCJoZWlnaHRcIjoyMjMsXCJ3aWR0aFwiOjIwNixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBODBsRVFWUjRuQUhvQUJmL0FaK0ZRRE1TR1J3cEJmZndHZkVBQU5jTTljMHQrQUlSM2ZuOEg4NEJzcDVhYkNzT1BKTUMzdklBQVN6ekFBZnBoUUR4QlNnQXovYzVRQUdZbUZ3MlJRQTV5UWZWOXZ3SVNmVUJCZTJBQStyN011d2w5bU1tQWN1a01hUWhJMFJiNStQMS9mY0Ird0lIOFp2L0dCc0FBdFRrUDNRQnBJeFdzdlhXQWszOUJBRDdDeEh3Qk8zbUgvc09Gd0VHRWlUM2d3R05oMTVyOTdrT2xBRVFCd0JEVnRMK3NYc3RBaEU1K0FBaFR3dzdBUUQvQUFHMGd5K1E1ZkkwWHhBSDhnL3krZzNwSlI3aGh1OXR2WklCbnFZdUFCN0cwZ0FWU2dBWThPcEROakZPT3IzTmpJUDE0NFlBQUxtellrVE81cWpRQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3Bzai5jZTRhYzMxOTZiOTAxMjgwY2RkYjliN2UxN2M0ODVmZS5wbmdcIixcImhlaWdodFwiOjIyNSxcIndpZHRoXCI6MjI0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUJBMGxFUVZSNDJtT0FnZUxKdXlLYjUreGYwckh3NEt6OENUdHNRV0tkOHc4d2dpVW5yVG8rZCtiYUUvL25iano5Zi9xYUUvOG5yVGo2djIvWjBSeXdaTU9jL1NrNTdSdi9GMHpmKzN0ai81cmZjeWR2L2xVK1krLy85TmFOLzVmdHZxVERVRHh4eDJhZnZDWC9HU3JYLzNsWjN2SC9RUG0wL3d4bGEzOUhsQ3ovMzcvc2FBbEQ5ZVNkYStYeWx2OC90bURyNzlzTlBmOGY5Yzc0djNEYTFsOG1CY3YvejF4OVBKOWh3dElqQVdHTkcvN1BuN0Q1Zi9IRWRiK256Tno4cTYxbDNmK1U3cTNmRHB5K284QUFkdTNDZ3pXeDNkdit4elJzK0ovWXRlMS83dVJkMytlc094bklnQXptcmpsdTJybGdmMVhmb29ORm0vZGVBdXZNNzlyTUJBQTRCSW02SEduaUF3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9wYXltZW50cy9jYXJkLjg1NzhkNWFhNjVkY2IzNWFkNDczN2NjZTgwNTEyMWFjLnBuZ1wiLFwiaGVpZ2h0XCI6Mzc3LFwid2lkdGhcIjo2OTQsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWprbEVRVlI0bkEzSnV3M0NNQkFHNFAvc1EwcU1qVUFDOFJnQk91bzA3TUFpRE1FT3JFQkpneGlBQlpBUWlKNE9Hb3BFam5PT1NmM1IrWExkdnQ2bEs5YUxXd0lFcElJbVNHc20xZEJvUmVYM3ZxTG9mVzUxRGFvRFVBbnl6UzhkYVVsemZHaDNlSjZFVmZTa1dtdFluT0dVWjl3NGJ1TElaWUdLL1NNTkxLTURDQk5zcGpGempLbnJZZHhuK1FQV2FDM3ZXTWQrVndBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL3BheW1lbnRzL3BheXBhbGwuZGM5OTAyNzRkOGQzNTUxMjY5ODcyNTg3YmMwNjE1YWEucG5nXCIsXCJoZWlnaHRcIjo2MSxcIndpZHRoXCI6MjUyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBQ0NBWUFBQUJsbEozdEFBQUFURWxFUVZSNG5HTmtNRzMreHFBcFBZWGgxTXYxREh4TVNneW55bmN3OUo2M1lSQVE0R0w0OSs4aEkwUEp0cHNNR21xWkRDa3ovak9ZaTVrd1BQN0N3WkRpL0pwQlNaR1o0ZmR2VVFEbjdSYXRackY5bmdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL3BheW1lbnRzL3BlbmRpbmcuZDQxNDc1M2IxNTZkMDc4YzI4NDUyZmJkNjAzY2Y4ZGMucG5nXCIsXCJoZWlnaHRcIjoxMzMsXCJ3aWR0aFwiOjE0MSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQU1BQUFEejBVNjVBQUFBYVZCTVZFWCtBQURUQUFEL0FBRCtBQUQvQUFCcUFBQnJBQUQvQUFEdkFBRC9BQUR2QUFEL0FBRDFqNC9ObUpqK0ZSWC9FUkhYMXRiTjE5Zi9GQlQrRmhiL0ZCVFh5OHZJME5EN2NuSzVoNGYvQUFEekFBRDZlWG43YzNPNWpvN1BnWUh5Ym02NWhZWC9BQUQxQUFERm5tcW1BQUFBRzNSU1RsTUFBQjhqS1Nzc3NyeTl2Y0htN3UvMitmbjUrdnIrL3Y3Ky92NVE5ajZyQUFBQVJFbEVRVlI0MmdWQWhSR0FJQUI4dTBpUmJ2WWYwZ1BtZzdGakJoWVNlNDlrd1ZXa3RiSmMrRUxUdW9VWHlsZGpxbGQ0a25CT3BBY3J6V05rdW1MYVRzN3ZmZm9CbTRVRVpGdVN1NElBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvc3VjY2Vzcy40N2Y5NTBiNjU0OTg5MzY0MDAwMGIyN2ZmYjMxMzdlMS5wbmdcIixcImhlaWdodFwiOjEzMixcIndpZHRoXCI6MTQxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUE4a2xFUVZSNG5BSG5BQmovQVJtK0xnQUpBUVkrN3YvMmpnVUFBaS9yL3RUK1lndHExWDBZZGVIa0lkeFlBUmErTFVycS91UzFCZ0VVQUJvQkRmL2cvYzRCcVJpdEFQZmo5UUJnOEY1VEFRQzlIdUZIQ0RVZTFmdmYrK1Q2emdWcEVISC9YUUJYL1dYaGNBVFZGdDdnQVFDNkFQK2lENmI5QkFnRUExcnFWdis2R2IwQTFOdlVBWElMYi80ZkJERUNBUUMvR3VBMzd5Z2ZpUmVBKy9JVjlBUUg1d1FBUit4ay9BNFRDd1VBL1FEZ0FUSy9QMGZPLzhHMld2SmhBbklVYXdDazZLZ0FrQkdNQUJzQkwvN3QvL2hKQVNuQ053QUUvd1E2MC92TmpUTG5OekRURStjQUNRb0QwUGY4L1hNQ0FRSEdOREJsT1BnK1dDVUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkJhcl9jb250YWluZXJfX1QxdThlXCIsXG5cdFwiY29udGVudFwiOiBcIkJhcl9jb250ZW50X18xU3d0SVwiLFxuXHRcImJ1dHRvblwiOiBcIkJhcl9idXR0b25fXzJDdGw4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQcmVkaWN0aW9uUGF5bWVudHNfY29udGFpbmVyX18xT2JYblwiLFxuXHRcImNvbnRlbnRcIjogXCJQcmVkaWN0aW9uUGF5bWVudHNfY29udGVudF9fekdfeDZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkdhbWVJbmZvX2NvbnRhaW5lcl9fMkJJcDlcIixcblx0XCJjb250ZW50XCI6IFwiR2FtZUluZm9fY29udGVudF9fMl8zYzNcIixcblx0XCJ0ZWFtc1wiOiBcIkdhbWVJbmZvX3RlYW1zX18xOEJQTFwiLFxuXHRcInRlYW1PbmVcIjogXCJHYW1lSW5mb190ZWFtT25lX18xbTRzSlwiLFxuXHRcInRlYW1Ud29cIjogXCJHYW1lSW5mb190ZWFtVHdvX18xb0FrbFwiLFxuXHRcImdhbWVEZXRhaWxlc1wiOiBcIkdhbWVJbmZvX2dhbWVEZXRhaWxlc19fMWlXd0xcIixcblx0XCJnYW1lRGV0Q29udGVudFwiOiBcIkdhbWVJbmZvX2dhbWVEZXRDb250ZW50X18yVERZRVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiRGV0YWlsc19jb250YWluZXJfX3BnM1pDXCIsXG5cdFwicHJpY2VcIjogXCJEZXRhaWxzX3ByaWNlX18xZlJtM1wiLFxuXHRcImNob29zZVBheVN5c1wiOiBcIkRldGFpbHNfY2hvb3NlUGF5U3lzX18zRGhUWFwiLFxuXHRcImNob29zZVBheVN5c19jb250ZW50XCI6IFwiRGV0YWlsc19jaG9vc2VQYXlTeXNfY29udGVudF9fMVIzNXVcIixcblx0XCJidXR0b25cIjogXCJEZXRhaWxzX2J1dHRvbl9fWXJyMjBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBheW1lbnRQYXJ0X2NvbnRhaW5lcl9fRXN5NmVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkNhcmRGb3JtX2NvbnRhaW5lcl9fM2dTVjhcIixcblx0XCJjb250ZW50XCI6IFwiQ2FyZEZvcm1fY29udGVudF9fM1FXeU1cIixcblx0XCJpbnB1dF9zdWNjZXNzXCI6IFwiQ2FyZEZvcm1faW5wdXRfc3VjY2Vzc19fMnhKMDdcIixcblx0XCJpbnB1dF9lcnJvclwiOiBcIkNhcmRGb3JtX2lucHV0X2Vycm9yX182ZG1jUlwiLFxuXHRcIm5hbWVcIjogXCJDYXJkRm9ybV9uYW1lX18zaDcyc1wiLFxuXHRcImNhcmRfbnVtYmVyX2NvbnRlbnRcIjogXCJDYXJkRm9ybV9jYXJkX251bWJlcl9jb250ZW50X19UZGw5bVwiLFxuXHRcImNhcmRfbnVtYmVyX2lucHV0c1wiOiBcIkNhcmRGb3JtX2NhcmRfbnVtYmVyX2lucHV0c19fMUR6aWtcIixcblx0XCJjdnZcIjogXCJDYXJkRm9ybV9jdnZfXzJWS241XCIsXG5cdFwiYWN0aXZlX3VudGlsbFwiOiBcIkNhcmRGb3JtX2FjdGl2ZV91bnRpbGxfX0dTYUpTXCIsXG5cdFwic3VjY2Vzc1wiOiBcIkNhcmRGb3JtX3N1Y2Nlc3NfXzFzeGFQXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYXltZW50X2NvbnRhaW5lcl9fMmlfXy1cIixcblx0XCJjb250ZW50XCI6IFwiUGF5bWVudF9jb250ZW50X18xb092TlwiLFxuXHRcImltZ1wiOiBcIlBheW1lbnRfaW1nX18xNHMxR1wiLFxuXHRcImZvcm1cIjogXCJQYXltZW50X2Zvcm1fXzFMX1R3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQZW5kaW5nX2NvbnRhaW5lcl9fMzZ0TmdcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiUGVuZGluZ190cmFuc2l0aW9uX18ydHlmQlwiLFxuXHRcImNvbnRlbnRcIjogXCJQZW5kaW5nX2NvbnRlbnRfXzI5clppXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTdWNjZXNzX2NvbnRhaW5lcl9fMTcxN3ZcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiU3VjY2Vzc190cmFuc2l0aW9uX18xdWhWRFwiLFxuXHRcImNvbnRlbnRcIjogXCJTdWNjZXNzX2NvbnRlbnRfXzFCakgtXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYXltZW50VGFiX2NvbnRhaW5lcl9fMjNqLXJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlByZWRpY3Rpb25UYWJfY29udGFpbmVyX18zT2dBWVwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJQcmVkaWN0aW9uVGFiX3RyYW5zaXRpb25fXzJMS1ZKXCIsXG5cdFwiYm9hcmRcIjogXCJQcmVkaWN0aW9uVGFiX2JvYXJkX18xRDNUSFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUm93X2NvbnRhaW5lcl9fM01ldTBcIixcblx0XCJjb250ZW50XCI6IFwiUm93X2NvbnRlbnRfXzNEcFVTXCIsXG5cdFwibGVmdFwiOiBcIlJvd19sZWZ0X18yX0Z0QlwiLFxuXHRcIm9yZGVyXCI6IFwiUm93X29yZGVyX19mZEFKSVwiLFxuXHRcInZzXCI6IFwiUm93X3ZzX19Ga0VqWVwiLFxuXHRcInRlYW1PbmVcIjogXCJSb3dfdGVhbU9uZV9fTEp2WXNcIixcblx0XCJ0ZWFtVHdvXCI6IFwiUm93X3RlYW1Ud29fXzJ3WmF0XCIsXG5cdFwicmlnaHRcIjogXCJSb3dfcmlnaHRfXzFfUFNTXCIsXG5cdFwicHJlZGljdGlvblwiOiBcIlJvd19wcmVkaWN0aW9uX19Mdm15MVwiLFxuXHRcInByZWRpY3Rpb25fY29udGVudFwiOiBcIlJvd19wcmVkaWN0aW9uX2NvbnRlbnRfXy02TVFPXCIsXG5cdFwicHJlZGljdGlvbl90aXRsZVwiOiBcIlJvd19wcmVkaWN0aW9uX3RpdGxlX18xLU1DdFwiLFxuXHRcInByZWRpY3Rpb25fYm9keVwiOiBcIlJvd19wcmVkaWN0aW9uX2JvZHlfXzNZLUU4XCIsXG5cdFwic2ltdWxhdG9yXCI6IFwiUm93X3NpbXVsYXRvcl9fMW94RjNcIixcblx0XCJkYXRlX3RpbWVcIjogXCJSb3dfZGF0ZV90aW1lX18yei1BbVwiLFxuXHRcImRhdGVcIjogXCJSb3dfZGF0ZV9fM3Q3alJcIixcblx0XCJ0eXBlXCI6IFwiUm93X3R5cGVfXzJnYWRNXCIsXG5cdFwiY29lZmZpY2VudFwiOiBcIlJvd19jb2VmZmljZW50X18yVklsbVwiLFxuXHRcInByaWNlXCI6IFwiUm93X3ByaWNlX19hNTFXclwiLFxuXHRcImJ1eUJ1dHRvbl9jb250YWluZXJcIjogXCJSb3dfYnV5QnV0dG9uX2NvbnRhaW5lcl9fXzQ0RWJcIixcblx0XCJidXR0b25fY29udGVudFwiOiBcIlJvd19idXR0b25fY29udGVudF9fQXZJcVJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRhYkhlYWRlcl9jb250YWluZXJfX3pOOG9PXCIsXG5cdFwiY29udGVudFwiOiBcIlRhYkhlYWRlcl9jb250ZW50X18zdDkzS1wiLFxuXHRcImZvcl90YWJsZXRzXCI6IFwiVGFiSGVhZGVyX2Zvcl90YWJsZXRzX18xTk9aQVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQnV0dG9uX2NvbnRhaW5lcl9fNDVLeURcIixcblx0XCJjb250ZW50XCI6IFwiQnV0dG9uX2NvbnRlbnRfXzE0RmxVXCIsXG5cdFwiYWN0aXZlXCI6IFwiQnV0dG9uX2FjdGl2ZV9fMU1EZzVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vZGFsQ29udGVpbmVyXCI6IFwiTW9kYWxfbW9kYWxDb250ZWluZXJfXzNnOElmXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIk1vZGFsX3RyYW5zaXRpb25fXzFrZnY5XCIsXG5cdFwibW9kYWxDb250ZW50XCI6IFwiTW9kYWxfbW9kYWxDb250ZW50X18xLU80N1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9