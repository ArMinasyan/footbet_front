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
              lineNumber: 78,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card_number_content),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: translate('cardNumber')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
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
                lineNumber: 91,
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
                lineNumber: 99,
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
                lineNumber: 107,
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
                lineNumber: 115,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
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
              lineNumber: 126,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
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
              lineNumber: 135,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().success),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "submit",
              children: translate('success')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }, this), showSuccess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Success_Success__WEBPACK_IMPORTED_MODULE_6__.Success, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }, this), showPending && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pending_Pending__WEBPACK_IMPORTED_MODULE_7__.Pending, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PaymentTab_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [game_path_in_extradata !== undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameInfo_GameInfo__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {
      game: game_data[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaymentPart_PaymentPart__WEBPACK_IMPORTED_MODULE_4__.PaymentPart, {
      game: game_data[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
          teamOneName: "",
          teamOneIcon: item[`team1_img_path`],
          teamTwoName: "",
          teamTwoIcon: item[`team2_img_path`],
          prediction: item.prediction,
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
    }).catch(error => {});
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PredictionTab_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
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
          pathname: "/prediction",
          query: {
            game: el.id
          }
        }),
        openPayments: click
      }, Math.random(), false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
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
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()("prediction"),
        translationPath = "tabs.header.",
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
            lineNumber: 31,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamOne),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: teamOneName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamOneIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().vs),
            children: "VS."
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
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamTwo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: teamTwoName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: teamTwoIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction),
          children: prediction ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_content),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_title),
              children: translate("prediction")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_body),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: prediction
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().simulator)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().type),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date_time),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().time),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: time
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().coefficent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: coefficent
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().price),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buyButton_container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button_content),
            onClick: () => {
              clickBuy();
              openPayments();
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: t("common:commons.buy")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
    thereIs: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9IZWFkZXIvQmFyL0Jhci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1ByZWRpY3Rpb25QYXltZW50cy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1BheW1lbnRUYWIvR2FtZUluZm8vR2FtZUluZm8uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L0RldGFpbHMvRGV0YWlscy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1BheW1lbnRUYWIvUGF5bWVudFBhcnQvUGF5bWVudFBhcnQuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvQ2FyZEZvcm0vQ2FyZEZvcm0uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvUGF5bWVudC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1BheW1lbnRUYWIvUGF5bWVudFBhcnQvUGF5bWVudC9QZW5kaW5nL1BlbmRpbmcuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvU3VjY2Vzcy9TdWNjZXNzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50VGFiLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUHJlZGljdGlvblRhYi9QcmVkaWN0aW9uVGFiLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUm93L1Jvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1RhYkhlYWRlci9UYWJIZWFkZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9UYWJzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL0J1dHRvbi9CdXR0b24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL2VyLmxpYi5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wYWdlcy9wcmVkaWN0aW9uLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvZXhwcmVzcy9leHByZXNzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvZXh0cmFfZGF0YS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL2ludmluc2libGVfc3RyYXRlZ3kvaW52aW5zaWJsZV9zdHJhdGVneS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL21hdGNoZXMvbWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL29yZGluYXIvb3JkaW5hci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hdGxldGljLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2F0bGV0aWNvLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2xlaXB6aWcucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbGl2ZXJwb29sLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9iYXJjYS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wc2oucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wYXltZW50cy9jYXJkLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvcGF5cGFsbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL3BheW1lbnRzL3BlbmRpbmcucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wYXltZW50cy9zdWNjZXNzLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL0hlYWRlci9CYXIvQmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvUHJlZGljdGlvblBheW1lbnRzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL0dhbWVJbmZvL0dhbWVJbmZvLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L0RldGFpbHMvRGV0YWlscy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50UGFydC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50L0NhcmRGb3JtL0NhcmRGb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvUGF5bWVudC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50L1BlbmRpbmcvUGVuZGluZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50L1N1Y2Nlc3MvU3VjY2Vzcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50VGFiLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QcmVkaWN0aW9uVGFiL1ByZWRpY3Rpb25UYWIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1Jvdy9Sb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1RhYkhlYWRlci9UYWJIZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInl1cFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2lnbm9yZWR8QzpcXFVzZXJzXFxBZG1pblxcRGVza3RvcFxccHJvamVjdHNcXGZvb3QtYmV0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQmFyIiwicHJlZENsaWNrIiwicGF5bUNsaWNrIiwicHJlZEFjdGl2ZSIsInBheW1BY3RpdmUiLCJzdHlsZXMiLCJIZWFkZXIiLCJQcmVkaWN0aW9uUGF5bWVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVuR2FtZVBheW1lbnRzUGFnZSIsIk9iamVjdCIsImtleXMiLCJxdWVyeSIsImxlbmd0aCIsInNob3dQcmVkaWN0aW9uVGFiIiwic2V0U2hvd1ByZWRpY3Rpb25UYWJzIiwidXNlU3RhdGUiLCJzaG93UGF5bWVudFRhYiIsInNldFNob3dQYXltZW50VGFiIiwiR2FtZUluZm8iLCJnYW1lIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5IiwidGVhbU9uZUljb24iLCJ0ZWFtT25lTmFtZSIsInRlYW1Ud29JY29uIiwidGVhbVR3b05hbWUiLCJjb2VmZmljZW50IiwiZGF0ZSIsInRpbWUiLCJEZXRhaWxzIiwicHJpY2UiLCJ0b1VwcGVyQ2FzZSIsIlBheW1lbnRQYXJ0IiwidW5kZWZpbmVkIiwiQ2FyZEZvcm0iLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwic2hvd1BlbmRpbmciLCJzZXRTaG93UGVuZGluZyIsInNob3dGb3JtIiwic2V0U2hvd0Zvcm0iLCJqdW1wIiwieCIsInZhbHVlIiwibmV4dFNpYmxpbmciLCJ0ZXN0IiwidHlwZSIsImZvY3VzIiwianVtcEJhY2siLCJ0YXJnZXQiLCJjb2RlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJldmlvdXNTaWJsaW5nIiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJmdWxsTmFtZSIsInJlcXVpcmVkIiwibWF0Y2hlcyIsIkNWViIsIm1pbiIsIm1heCIsImFjdGl2ZVVudGlsbCIsImNhcmROdW1iZXJTY2hlbWEiLCJRdWFydGV0MSIsIlF1YXJ0ZXQyIiwiUXVhcnRldDMiLCJRdWFydGV0NCIsIm1hcmdlZFNjaGVtYSIsImNvbmNhdCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwidXNlRm9ybSIsIm1vZGUiLCJyZXNvbHZlciIsInl1cFJlc29sdmVyIiwic3VibWl0IiwiZGF0YSIsImRhdGFFbnRyaWVzIiwiZW50cmllcyIsImNhcmROdW1iZXJzIiwiZmlsdGVyIiwiZWwiLCJpbmRleE9mIiwicmVkdWNlIiwiYWMiLCJ0cmFuc2Zvcm1lZERhdGEiLCJwdXNoIiwiaW5wdXRfc3VjY2VzcyIsImUiLCJQYXltZW50IiwiY2FyZEZvcm0iLCJQZW5kaW5nIiwiY2xpZW50V2lkdGgiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwZW5kaW5nIiwiU3VjY2VzcyIsInN1Y2Nlc3MiLCJQYXltZW50VGFiIiwiZ2FtZV9wYXRoX2luX2V4dHJhZGF0YSIsInNsaWNlIiwiZ2FtZV9pZCIsImdldF9nYW1lX2RhdGEiLCJnYW1lVHlwZSIsImRiIiwiZXhwcmVzcyIsImlkIiwiaW52aW5zaWJsZVN0Z3kiLCJvcmRpbmFyIiwidG9kYXlNYXRjaGVzIiwicHJlZGljdGlvbnNwYWdlIiwicHJlZGljdGlvbnNsaWRlIiwiZ2FtZV9kYXRhIiwiZXh0cmFfZGF0YSIsIlByZWRpY3Rpb25UYWIiLCJjbGljayIsInNsaWRlX2RhdGEiLCJzZXRTbGlkZURhdGEiLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0IiwiR0VUX1BSRURJQ1RJT05TIiwiYXV0aCIsInRoZW4iLCJyc3AiLCJtYXAiLCJpdGVtIiwicHJlZGljdGlvbiIsImZhY3RvciIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiYnV5QnV0dG9uTmFtZSIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJjYXRjaCIsImVycm9yIiwiaSIsInBhdGhuYW1lIiwiTWF0aCIsInJhbmRvbSIsIlJvdyIsIm9yZGVyIiwiY2xpY2tCdXkiLCJvcGVuUGF5bWVudHMiLCJzaW11bGF0b3IiLCJUYWJIZWFkZXIiLCJmb3JfdGFibGV0cyIsIlRhYnMiLCJwcmVkaWN0aW9uVGFiIiwicGF5bWVudFRhYiIsImdhbWVJZEZvclBheW1lbnQiLCJCdXR0b24iLCJwYWdlIiwidGV4dFBhdGhOYW1lIiwibG9jYXRpb25JblBhZ2UiLCJhZGl0aW9uYWxTdHlsZXMiLCJhY3RpdmUiLCJjb250YWluZXJTdHlsZXMiLCJoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbiIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93WSIsInBvc2l0aW9uIiwid2lkdGgiLCJoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UiLCJNb2RhbCIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsImNvbnRlbnRTdHlsZXMiLCJvdGhlclN0eWxlcyIsInBvcnRhbExvY2F0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5vZGUiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29udGFpbnMiLCJkaW5hbWljVG9wIiwid2luZG93Iiwic2Nyb2xsWSIsIm1vZGFsIiwidG9wIiwiY3JlYXRlUG9ydGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJob3N0IiwiZGVzdGluYXRpb24iLCJwYXlsb2FkIiwib3B0aW9ucyIsIlByb21pc2UiLCJyc2x2IiwicmpjdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0Q29va2llIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiZmluYWxseSIsIm5hbWUiLCJuYW1lRVEiLCJjYSIsImNvb2tpZSIsInNwbGl0IiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsInJlbW92ZUNvb2tpZSIsInNldENvb2tpZSIsImRheXMiLCJleHBpcmVzIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJBVVRIX1VSTCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJMT0dJTiIsIkdFVF9BQ0NPVU5UX0lORk8iLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVtYWlsIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiU0VUX05FV19QQVNTV09SRCIsIkdFVF9ORVdTIiwiR0VUX01BVENIRVMiLCJHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkiLCJkYXkiLCJHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSIsIkdFVF9GRUVEQkFDSyIsIkdFVF9NQVRDSEVTX0JZX1RZUEUiLCJBRERfRkVFREJBQ0siLCJHRVRfU1RBVElTVElDUyIsImV4cG9ydHMiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJyZXNvbHZlIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwiaHJlZiIsImFzIiwicmVzIiwicmVqIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImVyciIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiRXJyb3IiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwicCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiZGVmYXVsdCIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJwcmVmZXRjaCIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJfZGVmYXVsdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JlYWN0IiwiX3JvdXRlcjIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmb3JFYWNoIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmdzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJkb21haW5JdGVtcyIsImhvc3RuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkb21haW5JdGVtIiwidG9Mb3dlckNhc2UiLCJfaXRlbSRkb21haW4iLCJfaXRlbSRsb2NhbGVzIiwiZG9tYWluSG9zdG5hbWUiLCJkb21haW4iLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsInNvbWUiLCJsb2NhbGUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWVQYXJ0cyIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZ2V0RG9tYWluTG9jYWxlIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaXNMb2NhbFVSTCIsImludGVycG9sYXRlQXMiLCJyZXNvbHZlSHJlZiIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsImRvbWFpbkxvY2FsZXMiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJwYXRoTG93ZXIiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJfIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwicmVwbGFjZSIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwicmVzb2x2ZWRIcmVmIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJyZXNvbHZlZEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJzaGFsbG93IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5Iiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiX3RoaXMkbG9jYWxlcyIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIndhcm4iLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieSIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsInByaW9yaXR5IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwicHJvdG9jb2wiLCJwb3J0IiwiU3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJkZWxldGUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIlByZWRpY3Rpb25QYXltZW50c1BhZ2UiLCJsYXlvdXQiLCJnZXRTdGF0aWNQcm9wcyIsIl9fbG9hZE5hbWVzcGFjZXMiLCJsb2FkZXJOYW1lIiwiX19pMThuQ29uZmlnIiwibG9hZExvY2FsZUZyb20iLCJsIiwibiIsImF0bGV0aWNvSWNvbiIsImF0bGV0aWNJY29uIiwidGhlcmVJcyIsInRvdGFsQmV0IiwiYmFyY2FJY29uIiwicHNqSWNvbiIsIm1hcmNlbEljb24iLCJyZW5uYWlzSWNvbiIsImludmluc2libGVfc3RyYXRlZ3kiLCJwcmVkaWN0aW9ucyIsImdhbWVTdGF0ZSIsInNjb3JlIiwidGl0bGVOYW1lIiwibGl2ZXJwb29sSWNvbiIsImxlaXB6aWdJY29uIiwidG9tbW9yb3dNYXRjaGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsdUNBQXVDLHlCQUF5QjtBQUNoRTtBQUNBLHFDOzs7Ozs7Ozs7O0FDbFpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsc0ZBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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Q0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3ByZWRpY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYW0vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3Avc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCAzIHwgMTYpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gT2JqZWN0LmtleXMobWFwKTsgfTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vbG9jYWxlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC8uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCIvLyBjb21wb25ldG5zXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9CdXR0b24vQnV0dG9uJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Jhci5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYXIoe1xyXG4gICAgcHJlZENsaWNrLFxyXG4gICAgcGF5bUNsaWNrLFxyXG4gICAgcHJlZEFjdGl2ZSxcclxuICAgIHBheW1BY3RpdmUsXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9J3ByZWRpY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPVwiaGVhZGVyLmJhckJ1dHRvbnMuZXhwcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWRpdGlvbmFsU3R5bGVzPXtzdHlsZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrPXtwcmVkQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtwcmVkQWN0aXZlICYmIHByZWRBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9J3ByZWRpY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPVwiaGVhZGVyLmJhckJ1dHRvbnMub3JkaW5hclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWRpdGlvbmFsU3R5bGVzPXtzdHlsZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrPXtwYXltQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtwYXltQWN0aXZlICYmIHBheW1BY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEJhciB9IGZyb20gJy4vQmFyL0JhcidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKHtcclxuICAgIHByZWRDbGljayxcclxuICAgIHBheW1DbGljayxcclxuICAgIHByZWRBY3RpdmUsXHJcbiAgICBwYXltQWN0aXZlXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhclxyXG4gICAgICAgICAgICAgICAgcHJlZENsaWNrPXtwcmVkQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBwYXltQ2xpY2s9e3BheW1DbGlja31cclxuICAgICAgICAgICAgICAgIHByZWRBY3RpdmU9e3ByZWRBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICBwYXltQWN0aXZlPXtwYXltQWN0aXZlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ByZWRpY3Rpb25QYXltZW50cy5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlci9IZWFkZXInXHJcbmltcG9ydCB7IFRhYnMgfSBmcm9tICcuL1RhYnMvVGFicydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmVkaWN0aW9uUGF5bWVudHMoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICAvLyByZXZpZXcgcXVlcmllcyBmb3IgdW5kZXJzdGFuZGluZyB1c2VyIHdhbnQgYnV5IGdhbWUgKGlmIHllLCB3aGljaCBnYW1lICkgb3Igbm90XHJcbiAgICAgICAgb3BlbkdhbWVQYXltZW50c1BhZ2UgPSBPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aCA9PT0gMCA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICBbc2hvd1ByZWRpY3Rpb25UYWIsIHNldFNob3dQcmVkaWN0aW9uVGFic10gPSB1c2VTdGF0ZSghb3BlbkdhbWVQYXltZW50c1BhZ2UpLFxyXG4gICAgICAgIFtzaG93UGF5bWVudFRhYiwgc2V0U2hvd1BheW1lbnRUYWJdID0gdXNlU3RhdGUob3BlbkdhbWVQYXltZW50c1BhZ2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZENsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQcmVkaWN0aW9uVGFicyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UGF5bWVudFRhYihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByZWRBY3RpdmU9e3Nob3dQcmVkaWN0aW9uVGFifVxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UHJlZGljdGlvblRhYnMoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQYXltZW50VGFiKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBwYXltQWN0aXZlPXtzaG93UGF5bWVudFRhYn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25UYWI9e3Nob3dQcmVkaWN0aW9uVGFifVxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRUYWI9e3Nob3dQYXltZW50VGFifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQcmVkaWN0aW9uVGFicyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1BheW1lbnRUYWIodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HYW1lSW5mby5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lSW5mbyh7IGdhbWUgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdwcmVkaWN0aW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3RhYnMucGF5bWVudHMuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuICAgIGlmICghZ2FtZSlcclxuICAgICAgICByZXR1cm4gPHA+PC9wPjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbU9uZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnYW1lLnRlYW1PbmVJY29ufSBhbHQ9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2dhbWUudGVhbU9uZU5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlZTLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1Ud299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2FtZS50ZWFtVHdvSWNvbn0gYWx0PVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntnYW1lLnRlYW1Ud29OYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lRGV0YWlsZXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lRGV0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZSgnY29lZmZpY2VudCcpfToge2dhbWUuY29lZmZpY2VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZSgnZ2FtZVN0YXJ0aW5nRGF0ZScpfSB7Z2FtZS5kYXRlfSAvIHtnYW1lLnRpbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gaWNvbnNcclxuaW1wb3J0IHBheXBhbGxJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL3BheW1lbnRzL3BheXBhbGwucG5nJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RldGFpbHMubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGV0YWlscyh7IGdhbWUgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdwcmVkaWN0aW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3RhYnMucGF5bWVudHMuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZS5wcmljZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hvb3NlUGF5U3lzfT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ2Nob29zZVBheVN5cycpLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNob29zZVBheVN5c19jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnYmFua0NhcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYXltZW50UGFydC5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBEZXRhaWxzIH0gZnJvbSBcIi4vRGV0YWlscy9EZXRhaWxzXCI7XHJcbmltcG9ydCB7IFBheW1lbnQgfSBmcm9tIFwiLi9QYXltZW50L1BheW1lbnRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXltZW50UGFydCh7IGdhbWUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtnYW1lICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIDxEZXRhaWxzIGdhbWU9e2dhbWV9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPFBheW1lbnQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJ1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZEZvcm0ubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgU3VjY2VzcyB9IGZyb20gJy4uL1N1Y2Nlc3MvU3VjY2VzcydcclxuaW1wb3J0IHsgUGVuZGluZyB9IGZyb20gJy4uL1BlbmRpbmcvUGVuZGluZydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FyZEZvcm0oKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ByZWRpY3Rpb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAndGFicy5wYXltZW50cy5jYXJkRm9ybS4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICBbc2hvd1N1Y2Nlc3MsIHNldFNob3dTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbc2hvd1BlbmRpbmcsIHNldFNob3dQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKHRydWUpLFxyXG4gICAgICAgIC8vIGZ1bmN0aW9uc1xyXG4gICAgICAgIGp1bXAgPSAoeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeC52YWx1ZS5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIHggPSB4Lm5leHRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHggJiYgL3RleHQvLnRlc3QoeC50eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHguZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAganVtcEJhY2sgPSAoeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeC50YXJnZXQudmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh4LmNvZGUgPT09ICdCYWNrc3BhY2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW92ZTpmb2N1c1wiKS5wcmV2aW91c1NpYmxpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3ZlOmZvY3VzXCIpLnByZXZpb3VzU2libGluZy5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBmdWxsTmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvKF5bQS1aIF0qJCkvbWcpLFxyXG4gICAgICAgICAgICBDVlY6IHl1cC5zdHJpbmcoKS5taW4oMykubWF4KDMpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGFjdGl2ZVVudGlsbDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWluKDUpLm1heCg1KS5tYXRjaGVzKC8oXlswLTkvXSokKS9tZylcclxuICAgICAgICB9KSxcclxuICAgICAgICBjYXJkTnVtYmVyU2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgUXVhcnRldDE6IHl1cC5zdHJpbmcoKS5taW4oNCkubWF4KDQpLnJlcXVpcmVkKCkubWF0Y2hlcygvXlswLTldezR9JC9tZyksXHJcbiAgICAgICAgICAgIFF1YXJ0ZXQyOiB5dXAuc3RyaW5nKCkubWluKDQpLm1heCg0KS5yZXF1aXJlZCgpLm1hdGNoZXMoL15bMC05XXs0fSQvbWcpLFxyXG4gICAgICAgICAgICBRdWFydGV0MzogeXVwLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKS5tYXRjaGVzKC9eWzAtOV17NH0kL21nKSxcclxuICAgICAgICAgICAgUXVhcnRldDQ6IHl1cC5zdHJpbmcoKS5taW4oNCkubWF4KDQpLnJlcXVpcmVkKCkubWF0Y2hlcygvXlswLTldezR9JC9tZyksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gY2FyZE51bWJlcnMgc2NoZW1hXHJcbiAgICAgICAgbWFyZ2VkU2NoZW1hID0gc2NoZW1hLmNvbmNhdChjYXJkTnVtYmVyU2NoZW1hKSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihtYXJnZWRTY2hlbWEpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3VibWl0ID0gZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldFxyXG4gICAgICAgICAgICAgICAgZGF0YUVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKSxcclxuICAgICAgICAgICAgICAgIGNhcmROdW1iZXJzID0gZGF0YUVudHJpZXMuZmlsdGVyKGVsID0+IGVsWzBdLmluZGV4T2YoJ1F1YXJ0ZXQnKSA+IC0xKS5yZWR1Y2UoKGFjLCBlbCkgPT4gKGFjICsgZWxbMV0pLCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkRGF0YSA9IGRhdGFFbnRyaWVzLmZpbHRlcihlbCA9PiBlbFswXS5pbmRleE9mKCdRdWFydGV0JykpXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkRGF0YS5wdXNoKFtcImNhcmROdW1iZXJcIiwgY2FyZE51bWJlcnNdKVxyXG4gICAgICAgICAgICBzZXRTaG93Rm9ybShmYWxzZSlcclxuICAgICAgICAgICAgc2V0U2hvd1N1Y2Nlc3ModHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93Rm9ybSAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0gYXV0b0NvbXBsZXRlPSdvZmYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2Z1bGxOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2Z1bGxOYW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgnZnVsbE5hbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlcnJvcnMuZnVsbE5hbWUgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfbnVtYmVyX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdjYXJkTnVtYmVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9udW1iZXJfaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ncXVhcnRldDEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ1F1YXJ0ZXQxJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btb3ZlICR7ZXJyb3JzLlF1YXJ0ZXQxID8gc3R5bGVzLmlucHV0X2Vycm9yIDogc3R5bGVzLmlucHV0X3N1Y2Nlc3N9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e2UgPT4ganVtcChlLnRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4ganVtcEJhY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxdWFydGV0MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ1F1YXJ0ZXQyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btb3ZlICR7ZXJyb3JzLlF1YXJ0ZXQyID8gc3R5bGVzLmlucHV0X2Vycm9yIDogc3R5bGVzLmlucHV0X3N1Y2Nlc3N9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e2UgPT4ganVtcChlLnRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4ganVtcEJhY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxdWFydGV0M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ1F1YXJ0ZXQzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btb3ZlICR7ZXJyb3JzLlF1YXJ0ZXQzID8gc3R5bGVzLmlucHV0X2Vycm9yIDogc3R5bGVzLmlucHV0X3N1Y2Nlc3N9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e2UgPT4ganVtcChlLnRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4ganVtcEJhY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxdWFydGV0NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ1F1YXJ0ZXQ0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btb3ZlICR7ZXJyb3JzLlF1YXJ0ZXQ0ID8gc3R5bGVzLmlucHV0X2Vycm9yIDogc3R5bGVzLmlucHV0X3N1Y2Nlc3N9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e2UgPT4ganVtcChlLnRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4ganVtcEJhY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3Z2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDVlZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ0NWVicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ2NvZGVDVlYnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlcnJvcnMuQ1ZWID8gc3R5bGVzLmlucHV0X2Vycm9yIDogc3R5bGVzLmlucHV0X3N1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3RpdmVfdW50aWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY3RpdmVVbnRpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2FjdGl2ZVVudGlsbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ2FjdGl2ZVVudGlsbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5hY3RpdmVVbnRpbGwgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Y2Nlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnc3VjY2VzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtzaG93U3VjY2VzcyAmJiA8U3VjY2VzcyAvPn1cclxuICAgICAgICAgICAge3Nob3dQZW5kaW5nICYmIDxQZW5kaW5nIC8+fVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUGF5bWVudC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQ2FyZEZvcm0gfSBmcm9tIFwiLi9DYXJkRm9ybS9DYXJkRm9ybVwiO1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgY2FyZEZvcm0gZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvY2FyZC5wbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGF5bWVudCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXJkRm9ybS5zcmN9IGFsdD1cImNhcmQgaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BlbmRpbmcubW9kdWxlLnNjc3MnXHJcbi8vIGljb24gXHJcbmltcG9ydCBwZW5kaW5nIGZyb20gJy9wdWJsaWMvaW1hZ2VzL3BheW1lbnRzL3BlbmRpbmcucG5nJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBlbmRpbmcoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ByZWRpY3Rpb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAndGFicy5wYXltZW50cy5jYXJkRm9ybS4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICBjbGllbnRXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGllbnRXaWR0aCxcclxuICAgICAgICBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjbGllbnRXaWR0aCA8IDc2OCA/XHJcbiAgICAgICAgICAgICAgICBzaG93TW9kYWwgJiYgPE1vZGFsIG9uQ2xvc2U9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmFuc2xhdGUoJ3BhbmRpbmcnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGVuZGluZy5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKCdwYW5kaW5nJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGVuZGluZy5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3VjY2Vzcy5tb2R1bGUuc2NzcydcclxuLy8gaWNvbiBcclxuaW1wb3J0IHN1Y2Nlc3MgZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvc3VjY2Vzcy5wbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3VjY2VzcygpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigncHJlZGljdGlvbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICd0YWJzLnBheW1lbnRzLmNhcmRGb3JtLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIGNsaWVudFdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoLFxyXG4gICAgICAgIFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2NsaWVudFdpZHRoIDwgNzY4ID9cclxuICAgICAgICAgICAgICAgIHNob3dNb2RhbCAmJiA8TW9kYWwgb25DbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZSgndGhhbmtzJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3N1Y2Nlc3Muc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZSgndGhhbmtzJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3VjY2Vzcy5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIFxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIlxyXG4vLyBkYidzXHJcbmltcG9ydCB7IGV4dHJhX2RhdGEgfSBmcm9tIFwiL3NyYy9nYW1lc19kYXRhL2V4dHJhX2RhdGFcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gXCIuL0dhbWVJbmZvL0dhbWVJbmZvXCI7XHJcbmltcG9ydCB7IFBheW1lbnRQYXJ0IH0gZnJvbSBcIi4vUGF5bWVudFBhcnQvUGF5bWVudFBhcnRcIjtcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGF5bWVudFRhYi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXltZW50VGFiKCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICAgICAgLy8gZmluZCB3aGljaCB0eXBlIG9mIGdhbWUgdXNlciB3YW50IGJ1eVxyXG4gICAgICAgIGdhbWVfcGF0aF9pbl9leHRyYWRhdGEgPSByb3V0ZXIucXVlcnk/LmdhbWU/LnNsaWNlKDAsIHJvdXRlci5xdWVyeS5nYW1lLmluZGV4T2YoJ0dhbWUnKSksXHJcbiAgICAgICAgLy8gZmluZCBleGFjdGx5IHdoaWNoIGdhbWUgdXNlciB3YW50IGJ1eVxyXG4gICAgICAgIGdhbWVfaWQgPSByb3V0ZXIucXVlcnk/LmdhbWU/LnNsaWNlKFwiP1wiKSxcclxuICAgICAgICAvLyBmaW5kIGdhbWUgXHJcbiAgICAgICAgZ2V0X2dhbWVfZGF0YSA9IChnYW1lVHlwZSwgZGIpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChnYW1lVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImV4cHJlc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuZXhwcmVzcy5maWx0ZXIoZWwgPT4gZWwuaWQgPT09IGdhbWVfaWQpXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiaW52aW5zaWJsZVN0Z3lcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuaW52aW5zaWJsZVN0Z3kuZmlsdGVyKGVsID0+IGVsLmlkID09PSBnYW1lX2lkKVxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9yZGluYXJcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIub3JkaW5hci5maWx0ZXIoZWwgPT4gZWwuaWQgPT09IGdhbWVfaWQpXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidG9kYXlNYXRjaGVzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLnRvZGF5TWF0Y2hlcy5maWx0ZXIoZWwgPT4gZWwuaWQgPT09IGdhbWVfaWQpXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicHJlZGljdGlvbnNwYWdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLnByZWRpY3Rpb25zcGFnZS5maWx0ZXIoZWwgPT4gZWwuaWQgPT09IGdhbWVfaWQpXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicHJlZGljdGlvbnNsaWRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLnByZWRpY3Rpb25zbGlkZS5maWx0ZXIoZWwgPT4gZWwuaWQgPT09IGdhbWVfaWQpXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2FtZV9kYXRhID0gZ2V0X2dhbWVfZGF0YShnYW1lX3BhdGhfaW5fZXh0cmFkYXRhLCBleHRyYV9kYXRhKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7Z2FtZV9wYXRoX2luX2V4dHJhZGF0YSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICA8R2FtZUluZm8gZ2FtZT17Z2FtZV9kYXRhWzBdfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxQYXltZW50UGFydCBnYW1lPXtnYW1lX2RhdGFbMF19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuLy8gZGF0YXNcclxuaW1wb3J0IHsgcHJlZGljdGlvbnMgfSBmcm9tIFwiL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zXCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uL1Jvdy9Sb3dcIjtcclxuaW1wb3J0IHsgVGFiSGVhZGVyIH0gZnJvbSBcIi4uL1RhYkhlYWRlci9UYWJIZWFkZXJcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJlZGljdGlvblRhYi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBHRVRfUFJFRElDVElPTlMgfSBmcm9tIFwiL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9uc1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi9saWIvZXIubGliXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJlZGljdGlvblRhYih7IGNsaWNrIH0pIHtcclxuICBjb25zdCBbc2xpZGVfZGF0YSwgc2V0U2xpZGVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlcXVlc3QoR0VUX1BSRURJQ1RJT05TLCB7fSwgeyBhdXRoOiB0cnVlIH0pXHJcbiAgICAgIC50aGVuKChyc3ApID0+IHtcclxuICAgICAgICAvLyB0b2FzdChgU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRgKVxyXG4gICAgICAgIHNldFNsaWRlRGF0YShcclxuICAgICAgICAgIHJzcC5kYXRhLmRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGVhbU9uZU5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgdGVhbU9uZUljb246IGl0ZW1bYHRlYW0xX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgdGVhbVR3b05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b0ljb246IGl0ZW1bYHRlYW0yX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgcHJlZGljdGlvbjogaXRlbS5wcmVkaWN0aW9uLFxyXG4gICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcclxuICAgICAgICAgICAgICBkYXRlOiBpdGVtLmRhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogaXRlbS50aW1lLFxyXG4gICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IGl0ZW0uZmFjdG9yLFxyXG4gICAgICAgICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiBcIi5zbGlkZS5wcmVkX2J1dHRvblwiLFxyXG4gICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6IFwiLnNsaWRlLmJ1eV9idXR0b25cIixcclxuICAgICAgICAgICAgICBwcmVkaWN0aW9uVGV4dDogXCLQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDVcIixcclxuICAgICAgICAgICAgICBvcmRpbmFyVGV4dDogYCR7aXRlbS50eXBlfSAvICR7aXRlbS5wcmljZX3RgNGD0LEuYCxcclxuICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSArIFwiINGA0YPQsS5cIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPFRhYkhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvYXJkfT5cclxuICAgICAgICB7c2xpZGVfZGF0YS5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgIG9yZGVyPXtpICsgMX1cclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICB0aW1lPXtlbC50aW1lfVxyXG4gICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9ufVxyXG4gICAgICAgICAgICB0eXBlPXtlbC50eXBlfVxyXG4gICAgICAgICAgICBjb2VmZmljZW50PXtlbC5jb2VmZmljZW50fVxyXG4gICAgICAgICAgICBwcmljZT17ZWwucHJpY2V9XHJcbiAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcGVuUGF5bWVudHM9e2NsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIHRyYW5zbGF0aW9uXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUm93Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUm93KHtcclxuICBvcmRlcixcclxuICB0ZWFtT25lTmFtZSxcclxuICB0ZWFtT25lSWNvbixcclxuICB0ZWFtVHdvTmFtZSxcclxuICB0ZWFtVHdvSWNvbixcclxuICBwcmVkaWN0aW9uLFxyXG4gIHR5cGUsXHJcbiAgZGF0ZSxcclxuICB0aW1lLFxyXG4gIGNvZWZmaWNlbnQsXHJcbiAgcHJpY2UsXHJcbiAgY2xpY2tCdXksXHJcbiAgb3BlblBheW1lbnRzLFxyXG59KSB7XHJcbiAgY29uc3QgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oXCJwcmVkaWN0aW9uXCIpLFxyXG4gICAgdHJhbnNsYXRpb25QYXRoID0gXCJ0YWJzLmhlYWRlci5cIixcclxuICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgIDxzcGFuPntvcmRlcn0uPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1PbmV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3RlYW1PbmVOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEl0ZW1zfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbU9uZUljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnZzfT5WUy48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbVR3b30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEl0ZW1zfT5cclxuICAgICAgICAgICAgICA8c3Bhbj57dGVhbVR3b05hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SXRlbXN9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtVHdvSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbn0+XHJcbiAgICAgICAgICAgIHtwcmVkaWN0aW9uID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlZGljdGlvbl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fdGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKFwicHJlZGljdGlvblwiKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntwcmVkaWN0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbXVsYXRvcn0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eXBlfT5cclxuICAgICAgICAgICAgPHNwYW4+e3R5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfdGltZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICA8c3Bhbj57dGltZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvZWZmaWNlbnR9PlxyXG4gICAgICAgICAgICA8c3Bhbj57Y29lZmZpY2VudH08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlxyXG4gICAgICAgICAgICA8c3Bhbj57cHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1eUJ1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xpY2tCdXkoKTtcclxuICAgICAgICAgICAgICAgIG9wZW5QYXltZW50cygpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj57dChcImNvbW1vbjpjb21tb25zLmJ1eVwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYkhlYWRlci5tb2R1bGUuc2NzcydcclxuLy8gdHJhbnNsYXRpb25zXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYWJIZWFkZXIoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ByZWRpY3Rpb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAndGFicy5oZWFkZXIuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9yX3RhYmxldHN9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdwcmVkaWN0aW9uJykudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ3R5cGUnKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnZGF0ZScpLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCd0aW1lJykudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ2NvZWZpY2VudCcpLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdwcmljZScpLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgUGF5bWVudFRhYiB9IGZyb20gJy4vUGF5bWVudFRhYi9QYXltZW50VGFiJ1xyXG5pbXBvcnQgeyBQcmVkaWN0aW9uVGFiIH0gZnJvbSAnLi9QcmVkaWN0aW9uVGFiL1ByZWRpY3Rpb25UYWInXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhYnMoe1xyXG4gICAgcHJlZGljdGlvblRhYixcclxuICAgIHBheW1lbnRUYWIsXHJcbiAgICBnYW1lSWRGb3JQYXltZW50LFxyXG4gICAgY2xpY2tcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cHJlZGljdGlvblRhYiAmJiA8UHJlZGljdGlvblRhYiBjbGljaz17Y2xpY2t9IC8+fVxyXG4gICAgICAgICAgICB7cGF5bWVudFRhYiAmJiA8UGF5bWVudFRhYiBnYW1lSWQ9e2dhbWVJZEZvclBheW1lbnR9IC8+fSAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHtcclxuICAgIHBhZ2UgPSAnY29tbW9uJyxcclxuICAgIHRleHRQYXRoTmFtZSA9IFwiWW91IGFyZSBkb250IHB1dCB0aGVyZSB0ZXh0LlwiLFxyXG4gICAgbG9jYXRpb25JblBhZ2UgPSBcIlwiLFxyXG4gICAgYWRpdGlvbmFsU3R5bGVzID0gbnVsbCxcclxuICAgIGFjdGl2ZSA9IGZhbHNlLFxyXG4gICAgY2xpY2sgPSBudWxsLFxyXG4gICAgY29udGFpbmVyU3R5bGVzID0gbnVsbCB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24ocGFnZSksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gYCR7bG9jYXRpb25JblBhZ2V9YCxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2FkaXRpb25hbFN0eWxlc30gJHthY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogJyd9YH1cclxuICAgICAgICAgICAgc3R5bGU9e2NvbnRhaW5lclN0eWxlc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGVudH1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUodGV4dFBhdGhOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nXHJcblxyXG5cclxuY29uc3RcclxuICAgIGhhbmRsZV9vdmVyZmxvd19vbl9vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSAnYXV0bydcclxuICAgIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNb2RhbCh7XHJcbiAgICBvbkNsb3NlLFxyXG4gICAgLy8gY2xvc2VXaXRoVmVjdG9yZSA9IG51bGwsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGNvbnRhaW5lclN0eWxlcyA9IG51bGwsXHJcbiAgICBjb250ZW50U3R5bGVzID0gbnVsbCxcclxuICAgIG90aGVyU3R5bGVzID0gbnVsbCxcclxuICAgIHBvcnRhbExvY2F0aW9uID0gJ21vZGFsLWNvbnRlaW5lcicgfSkge1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbaGFuZGxlQ2xvc2VdKVxyXG5cclxuICAgIGNvbnN0IG5vZGUgPSB1c2VSZWYoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gZSA9PiB7XHJcbiAgICAgICAgaWYgKG5vZGU/LmN1cnJlbnQ/LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb25DbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICAgICBkaW5hbWljVG9wID0gd2luZG93LnNjcm9sbFlcclxuXHJcbiAgICBzaG93TW9kYWwgPyBoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbigpIDogaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlKClcclxuXHJcbiAgICBjb25zdCBtb2RhbCA9IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vZGFsQ29udGVpbmVyfSAke2NvbnRhaW5lclN0eWxlc31gfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdG9wOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQgIWltcG9ydGFudCdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vZGFsQ29udGVudH0gJHtjb250ZW50U3R5bGVzfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17b3RoZXJTdHlsZXN9XHJcbiAgICAgICAgICAgICAgICByZWY9e25vZGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIGlmIChzaG93TW9kYWwpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgICAgICBtb2RhbCxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9ydGFsTG9jYXRpb24pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm4gbnVsbFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBob3N0ID0gXCJodHRwczovL3d3dy5mb290YmV0MjQuY29tL2FwaVwiO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSAoIGRlc3RpbmF0aW9uLCBwYXlsb2FkID0gbnVsbCwgb3B0aW9ucyA9IG51bGwgKSA9PiBuZXcgUHJvbWlzZSggKCByc2x2LCByamN0ICkgPT4ge1xyXG4gIGxldCBoZWFkZXJzID0ge307XHJcblxyXG4gIGlmICggb3B0aW9ucyApIHtcclxuICAgIGlmICggb3B0aW9ucy5hdXRoID09PSB0cnVlICkge1xyXG4gICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShgYWNjZXNzLXRva2VuYCl9YCB8fCBgYCAvLyBmb3IgbW9zdCBvZiByZXF1ZXN0c1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCBgaGVhZGVyc2AgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMgaW5zdGFuY2VvZiBPYmplY3QgKSB7XHJcbiAgICAgIGhlYWRlcnMgPSB7IC4uLmhlYWRlcnMsIC4uLm9wdGlvbnMuaGVhZGVycyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyggYHN0YXJ0IGxvYWRpbmdgICk7XHJcbiAgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBkZXN0aW5hdGlvbi5tZXRob2QsXHJcbiAgICB1cmw6IGRlc3RpbmF0aW9uLnVybCxcclxuICAgIGhlYWRlcnMsXHJcbiAgICBkYXRhOiBwYXlsb2FkIHx8IHt9XHJcbiAgfSlcclxuICAudGhlbiggcnNsdiApXHJcbiAgLmNhdGNoKCByamN0IClcclxuICAuZmluYWxseSggKCkgPT4gY29uc29sZS5sb2coIGBlbmQgbG9hZGluZ2AgKSApXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBuYW1lID0+IHtcclxuICB2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xyXG4gIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYyA9IGNhW2ldO1xyXG5cclxuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEsIGMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gbmFtZSA9PiB7XHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9OyBQYXRoPS87IEV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAobmFtZSwgdmFsdWUsIGRheXMpID0+IHtcclxuICBsZXQgZXhwaXJlcyA9IFwiXCI7XHJcblxyXG4gIGlmIChkYXlzKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyAodmFsdWUgfHwgXCJcIikgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaG9zdFxyXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXHJcblxyXG5jb25zdCBBVVRIX1VSTCA9IGhvc3QgKyBgYXV0aC9gO1xyXG5jb25zdCBBQ0NPVU5UX1VSTCA9IGhvc3QgKyBgYWNjb3VudC9gXHJcblxyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArICdyZWdpc3RyYXRpb24nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ2xvZ2luJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ2dldCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lORk8gPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdpbmZvJyxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9JTUFHRSA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ3Byb2ZpbGUtaW1hZ2UnLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTVEFSVF9SRVNFVF9QQVNTV09SRCA9IGVtYWlsID0+ICh7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9yZXNldD9lbWFpbD0ke2VtYWlsfWAsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVkVSSUZZX1BBU1NXT1JEX1JFU0VUID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvdmVyaWZ5X2NvZGVgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9ORVdfUEFTU1dPUkQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9uZXdfcGFzc3dvcmQgYCxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTkVXUyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYG5ld3NgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbWF0Y2gtb2YtdGhlLWRheWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVNfT0ZfU1BFQ0lGSUNfREFZID0gKGRheSkgPT4gKHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYG1hdGNoLW9mLXRoZS1kYXk/ZGF0ZT0ke2RheX1gLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYG1hdGNoLW9mLXRoZS1kYXk/dHlwZT1uZXh0X2RheWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BSRURJQ1RJT05TID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgcHJlZGljdGlvbmAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZFRURCQUNLID0gaWQgPT4gKHtcclxuICB1cmw6IGhvc3QgKyBgZmVlZGJhY2svJHtpZH0/c29ydF9ieT1jcmVhdGVkX2F0Jm9yZGVyX2J5PWRlc2NgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19CWV9UWVBFID0gdHlwZSA9PiAoe1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgZ2FtZT90eXBlPSR7dHlwZX1gLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfRkVFREJBQ0sgPSB7XHJcbiAgdXJsOiBob3N0ICsgYGZlZWRiYWNrYCxcclxuICBtZXRob2Q6IGBwb3N0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRJU1RJQ1MgPSB7XHJcbiAgdXJsOiBob3N0ICsgYGFkbWluL3N0YXRpc3RpY3NgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZXRlY3REb21haW5Mb2NhbGU9ZGV0ZWN0RG9tYWluTG9jYWxlO2Z1bmN0aW9uIGRldGVjdERvbWFpbkxvY2FsZShkb21haW5JdGVtcyxob3N0bmFtZSxkZXRlY3RlZExvY2FsZSl7bGV0IGRvbWFpbkl0ZW07aWYoZG9tYWluSXRlbXMpe2lmKGRldGVjdGVkTG9jYWxlKXtkZXRlY3RlZExvY2FsZT1kZXRlY3RlZExvY2FsZS50b0xvd2VyQ2FzZSgpO31mb3IoY29uc3QgaXRlbSBvZiBkb21haW5JdGVtcyl7dmFyIF9pdGVtJGRvbWFpbixfaXRlbSRsb2NhbGVzOy8vIHJlbW92ZSBwb3J0IGlmIHByZXNlbnRcbmNvbnN0IGRvbWFpbkhvc3RuYW1lPShfaXRlbSRkb21haW49aXRlbS5kb21haW4pPT1udWxsP3ZvaWQgMDpfaXRlbSRkb21haW4uc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpO2lmKGhvc3RuYW1lPT09ZG9tYWluSG9zdG5hbWV8fGRldGVjdGVkTG9jYWxlPT09aXRlbS5kZWZhdWx0TG9jYWxlLnRvTG93ZXJDYXNlKCl8fChfaXRlbSRsb2NhbGVzPWl0ZW0ubG9jYWxlcykhPW51bGwmJl9pdGVtJGxvY2FsZXMuc29tZShsb2NhbGU9PmxvY2FsZS50b0xvd2VyQ2FzZSgpPT09ZGV0ZWN0ZWRMb2NhbGUpKXtkb21haW5JdGVtPWl0ZW07YnJlYWs7fX19cmV0dXJuIGRvbWFpbkl0ZW07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuICAgIGltcG9ydCBfX2xvYWROYW1lc3BhY2VzIGZyb20gJ25leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzJ1xuICAgIFxuaW1wb3J0IFByZWRpY3Rpb25QYXltZW50cyBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9QcmVkaWN0aW9uUGF5bWVudHMnO1xyXG5cclxuXHJcbmNvbnN0IFByZWRpY3Rpb25QYXltZW50c1BhZ2UgPSAoKSA9PiA8UHJlZGljdGlvblBheW1lbnRzIC8+XHJcblxyXG5QcmVkaWN0aW9uUGF5bWVudHNQYWdlLmxheW91dCA9IFwid2l0aG91dFBob3RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVkaWN0aW9uUGF5bWVudHNQYWdlO1xyXG5cblxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC4uLihhd2FpdCBfX2xvYWROYW1lc3BhY2VzKHtcbiAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcbiAgICAgICAgICAgICAgbG9hZGVyTmFtZTogJ2dldFN0YXRpY1Byb3BzJyxcbiAgICAgICAgICAgICAgLi4uX19pMThuQ29uZmlnLFxuICAgICAgICAgICAgICBsb2FkTG9jYWxlRnJvbTogKGwsIG4pID0+IGltcG9ydChgQG5leHQtdHJhbnNsYXRlLXJvb3QvbG9jYWxlcy8ke2x9LyR7bn1gKS50aGVuKG0gPT4gbS5kZWZhdWx0KSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgIiwiLy8gaWNvbnNcclxuaW1wb3J0IGF0bGV0aWNvSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmcnXHJcbmltcG9ydCBhdGxldGljSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLnBuZydcclxuaW1wb3J0IGJhcmNhSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYmFyY2EucG5nJ1xyXG5pbXBvcnQgbWFyY2VsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLnBuZydcclxuaW1wb3J0IHBzakljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Bzai5wbmcnXHJcbmltcG9ydCByZW5uYWlzSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmcnXHJcblxyXG5leHBvcnQgY29uc3QgZXhwcmVzcyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNzUwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUyXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkdCw0YDRgdC10LvQvtC90LAnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0J/QodCWJyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjM6MDAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmljZTogJzI1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTNcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9Cc0LDRgNGB0LXQu9GMJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogbWFyY2VsSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMzowMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByaWNlOiAnMTgwMCDRgNGD0LEuICdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTRcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTVcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lNlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lN1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lOFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWU5XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxMFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTFcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTEyXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTEzXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTE0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxNVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxNlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxN1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxOFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTlcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTIwXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG5dXHJcbiIsImltcG9ydCB7IGV4cHJlc3MgfSBmcm9tIFwiLi9leHByZXNzL2V4cHJlc3NcIjtcclxuaW1wb3J0IHsgaW52aW5zaWJsZV9zdHJhdGVneSB9IGZyb20gXCIuL2ludmluc2libGVfc3RyYXRlZ3kvaW52aW5zaWJsZV9zdHJhdGVneVwiO1xyXG5pbXBvcnQgeyBtYXRjaGVzIH0gZnJvbSBcIi4vbWF0Y2hlcy9tYXRjaGVzXCI7XHJcbmltcG9ydCB7IG9yZGluYXIgfSBmcm9tIFwiLi9vcmRpbmFyL29yZGluYXJcIjtcclxuaW1wb3J0IHsgcHJlZGljdGlvbnMgfSBmcm9tIFwiLi9wcmVkaWN0aW9ucy9wcmVkaWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBzbGlkZV9kYXRhIH0gZnJvbSBcIi4vcHJlZGljdGlvbnMvc2xpZGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBleHRyYV9kYXRhID0ge1xyXG5cclxuICAgIGV4cHJlc3M6IGV4cHJlc3MsXHJcbiAgICBpbnZpbnNpYmxlU3RneTogaW52aW5zaWJsZV9zdHJhdGVneSxcclxuICAgIG9yZGluYXI6IG9yZGluYXIsXHJcbiAgICB0b2RheU1hdGNoZXM6IG1hdGNoZXMudG9kYXlNYXRjaGVzLFxyXG4gICAgcHJlZGljdGlvbnNwYWdlOiBwcmVkaWN0aW9ucyxcclxuICAgIHByZWRpY3Rpb25zbGlkZTogc2xpZGVfZGF0YVxyXG5cclxufSIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nJ1xyXG5pbXBvcnQgYXRsZXRpY0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGludmluc2libGVfc3RyYXRlZ3kgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTJcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CR0LDRgNGB0LXQu9C+0L3QsCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQn9Ch0JYnLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMzowMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByaWNlOiAnMjUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUzXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjM6MDAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmljZTogJzE4MDAg0YDRg9CxLiAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTRcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lNVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTZcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lN1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWU4XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lOVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxMFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxMVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxMlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTEzXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTRcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTVcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxNlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE3XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMThcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTlcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMjBcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbl1cclxuIiwiLy8gaWNvbnNcclxuaW1wb3J0IGF0bGV0aWNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hdGxldGljLnBuZydcclxuaW1wb3J0IGF0bGV0aWNvSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXRsZXRpY28ucG5nJ1xyXG5pbXBvcnQgYmFyY2FJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9iYXJjYS5wbmcnXHJcbmltcG9ydCBsZWlwemlnSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbGVpcHppZy5wbmcnXHJcbmltcG9ydCBsaXZlcnBvb2xJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9saXZlcnBvb2wucG5nJ1xyXG5pbXBvcnQgbWFyY2VsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLnBuZydcclxuaW1wb3J0IHBzakljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Bzai5wbmcnXHJcbmltcG9ydCByZW5uYWlzSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmcnXHJcblxyXG5leHBvcnQgY29uc3QgbWF0Y2hlcyA9IHtcclxuICAgIHRvZGF5TWF0Y2hlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lMScsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMDowMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dPbmUuZ2FtZVN0YXRlLnN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJzIgOiAxJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd09uZS5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dPbmUudGl0bGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RvZGF5TWF0Y2hlc0dhbWUyJyxcclxuICAgICAgICAgICAgZGF0ZTogJzIxOjMwJyxcclxuICAgICAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiAnLnJvd1R3by5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CR0LDRgNGB0LXQu9C+0L3QsCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dUd28uYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93VHdvLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lMycsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMjoyMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dUaHJlZS5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9Cc0LDRgNGB0LXQu9GMJyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dUaHJlZS5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dUaHJlZS50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTQnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjM6MzAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93Rm9yZS5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogbGl2ZXJwb29sSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogbGVpcHppZ0ljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd0ZvcmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93Rm9yZS50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTUnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjA6MDAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93T25lLmdhbWVTdGF0ZS5kb250U3RhcnRlZCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lNicsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMTozMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dUd28uZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93VHdvLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd1R3by50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTcnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjI6MjAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93VGhyZWUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dUaHJlZS5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dUaHJlZS50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTgnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjM6MzAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93Rm9yZS5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogbGl2ZXJwb29sSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogbGVpcHppZ0ljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd0ZvcmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93Rm9yZS50aXRsZScsXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIHRvbW1vcm93TWF0Y2hlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lMScsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMDowMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dPbmUuZ2FtZVN0YXRlLnN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJzIgOiAxJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd09uZS5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dPbmUudGl0bGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RvZGF5TWF0Y2hlc0dhbWUyJyxcclxuICAgICAgICAgICAgZGF0ZTogJzIxOjMwJyxcclxuICAgICAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiAnLnJvd1R3by5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICctJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dUd28uYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93VHdvLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lMycsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMjoyMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dUaHJlZS5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogbWFyY2VsSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogcmVubmFpc0ljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd1RocmVlLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd1RocmVlLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lNCcsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMzozMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dGb3JlLmdhbWVTdGF0ZS5kb250U3RhcnRlZCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBsaXZlcnBvb2xJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICctJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiBsZWlwemlnSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93Rm9yZS5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dGb3JlLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lNScsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMDowMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dPbmUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICctJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd09uZS5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dPbmUudGl0bGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RvZGF5TWF0Y2hlc0dhbWU2JyxcclxuICAgICAgICAgICAgZGF0ZTogJzIxOjMwJyxcclxuICAgICAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiAnLnJvd1R3by5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICctJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dUd28uYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93VHdvLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lNycsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMjoyMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dUaHJlZS5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogbWFyY2VsSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogcmVubmFpc0ljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd1RocmVlLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd1RocmVlLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lOCcsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMzozMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dGb3JlLmdhbWVTdGF0ZS5kb250U3RhcnRlZCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBsaXZlcnBvb2xJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICctJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiBsZWlwemlnSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93Rm9yZS5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dGb3JlLnRpdGxlJyxcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0iLCIvLyBpY29uc1xyXG5pbXBvcnQgYXRsZXRpY29JY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLnBuZydcclxuaW1wb3J0IGF0bGV0aWNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nJ1xyXG5pbXBvcnQgYmFyY2FJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9iYXJjYS5wbmcnXHJcbmltcG9ydCBtYXJjZWxJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwucG5nJ1xyXG5pbXBvcnQgcHNqSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcHNqLnBuZydcclxuaW1wb3J0IHJlbm5haXNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBvcmRpbmFyID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTIyINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JHQsNGA0YHQtdC70L7QvdCwJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIzOjAwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcyNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lM1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JzQsNGA0YHQtdC70YwnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBtYXJjZWxJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcmVubmFpc0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIzOjAwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcxODAwINGA0YPQsS4gJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTRcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWU1XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWU2XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lN1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZThcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTlcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxMFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTExXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTJcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTEzXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxNFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTE1XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxNlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTE4XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTlcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUyMFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuXVxyXG4iLCIvLyBpY29uc1xyXG5pbXBvcnQgYXRsZXRpY29JY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLnBuZydcclxuaW1wb3J0IGF0bGV0aWNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nJ1xyXG5pbXBvcnQgYmFyY2FJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9iYXJjYS5wbmcnXHJcbmltcG9ydCBtYXJjZWxJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwucG5nJ1xyXG5pbXBvcnQgcHNqSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcHNqLnBuZydcclxuaW1wb3J0IHJlbm5haXNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBwcmVkaWN0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTEnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwi0J7RgNC00LjQvdCw0YBcIixcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTY0MCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTInLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JHQsNGA0YHQtdC70L7QvdCwJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwi0K3QutGB0L/RgNC10YHRgVwiLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcyNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMycsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcxODAwINGA0YPQsS4gJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTQnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWU1JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWU2JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lNycsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTgnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTknLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxMCcsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTExJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTInLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTEzJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxNCcsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTE1JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxNicsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTcnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTE4JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTknLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbl1cclxuIiwiLy8gaWNvbnNcclxuaW1wb3J0IGF0bGV0aWNvSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL2JhcmNhLnBuZydcclxuaW1wb3J0IHBzakljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3Bzai5wbmcnXHJcbmltcG9ydCBhdGxldGljSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCByZW5uYWlzSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmcnXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVfZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWUxJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwi0J7RgNC00LjQvdCw0YBcIixcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lMicsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkdCw0YDRgdC10LvQvtC90LAnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQn9Ch0JYnLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcItCt0LrRgdC/0YDQtdGB0YFcIixcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMjUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWUzJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9Cc0LDRgNGB0LXQu9GMJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcmVubmFpc0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTgwMCDRgNGD0LEuICdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lNCcsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lNScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTYnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nXHJcbiAgICB9LFxyXG5dIiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMuMjgzODIwZmQyNmFlMzA4NTQyYzQ5OTg3NDdmNmYxNTAucG5nXCIsXCJoZWlnaHRcIjo2MyxcIndpZHRoXCI6NTgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTZVbEVRVlI0MmpYS3YyckNVQmdGOER2NE1vVytSNGZPaFQ1TDdSZ1hONkZMQzVFVUhCcHEwZzRYR2tXdzRvMjVYTkFoRUM1Sk1MbUtVZkRQb0tBSTBlL1REUDZXd3prY0VzZHg3dnMrY3M1QkNBRkJFSUFZamZDNkFWRks3Wklrd1NnTXdmVThrRktDYXhpbzBuUlBHR094cnV2NHFtbG5xOUdBOVk5OW5sQ0tUcWVUa01WOGJsNFArRld0bmpiTmJ6amE5aW1MSWh3clpSRlBpS2ZaZElxcmovY2NlLys0ck5melJaYmhnUE5uVWhpbnFaRDlQbTQvalVQUTdhSU13eUc1MFNxVk82ZmRQakRMd2w5S2p5L2w4ajBwTU5jdEZkazB6UWZhYXVWdnRkcGowZjhjcDNRQldmeWJqNTArY29zQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLjJjZTc1ZTIxMTYyZTJlNmRjNDhiOTllNjAxODEwN2UwLnBuZ1wiLFwiaGVpZ2h0XCI6NjIsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUEwMGxFUVZSNG5BSElBRGYvQVd4dGhzVGUzK2N4OHZQNkNnd0tCQUFHQndYMkJoQU96d0dEaEpiL056WXVBTnpjNGY4RUJ3Y0F5TWZTQVJEaTRRQUJqNUNnL0JFUURRTDcvLzhCdktxK0FIdDhYdi9qcjZ2L0FXaHBndjMxOXZrQ01ERWwveS84N0FBeVMwZ0J3NldxL3dGZWFJUC9Kd0gyL1ZsV1JBUCsrdm9BQ0JNVC9kQ3dzd01Cbm9XTzlVNVFSUXJ0NE4vOC92Ny9BQkVkSFFURnNMYjNBWTJUb1RBb0J2Nm1KU0FZS1FBQUFBRGM0ZWpZeXY0S1d3RnFJMFlBbHQyNkJybXNzcnNBQUFBQlIxUk9SVlVvVWZsK2xWdHJTVEN5NFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hdGxldGljLjM2MDY4YjBjNmNkNzM3ZjA1OWQ1MzY4NDUwZDYyZGM2LnBuZ1wiLFwiaGVpZ2h0XCI6NDQsXCJ3aWR0aFwiOjMyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUEwMGxFUVZSNG5BSElBRGYvQVdwc2hydlAwTjR1QWdJREVnVUVBUUVLQ2dYdENSUVMwZ0dPajUvL0tDY2lBTm5aM3dBS0RRc0F4Y2JUQUJIazRnQUJtSm1vL0FnSEJnTDcvdjhBdTZ1K0FIZDRXZ0R1dXJUK0FYRnppZjduNS9BQk1qUW0veS8yNWdBMVVrNEJ6YkcwL3dGamJZZi9KZnJ3L1ZaWVJRUCsrUGtBQnhNVC9kcTh2Z01CcFkyViswZEdPd1R0MytEOC92Ly9BQkVlSGdUTHVyLzlBWStacURRaDkrNmZLaWdnTEFBQUFBRFkydUxWMFFzWFlRRnhSVndBajd1a0JMV3BzTElBQUFBQlMxZFFUVjFHWXZ5cUgxZ1J2eUxZdUFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hdGxldGljby5iOWYxMjI3NThiNjA3MWFmYzgwYWNkZWYwM2ZkNjk2Zi5wbmdcIixcImhlaWdodFwiOjQ1LFwid2lkdGhcIjo0MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBODBsRVFWUjRuQUhvQUJmL0FjL1B6L3p1N3U0RCt2cjYvd0lCQVFFS0N3di8rdjcrQVFjQ0F2OEIzOS9mOHZ2Nyt3MzkvUHovNis3dUFCRVFFQURyeWNrQkkwTkQ5Z0cvdjcvYzN0M2RJOS9vNlA0ckhSMEJRZ3NMLy9YLy93TFVEQXpnQWVQaTRxdmQzOTlVNGIrLy9Va2dJQU1PQndmOTZpNHVBL2dKQ2JBQnc4YkdVaDhhR3EwSXRiWDhGU1FrQk9yaDRQejhTVW9FM3VMaVdBSC8vLzhBMmR6Y3d2Zmg0VDBlMTliMjRTZ3BDZ1FaR2NZdEt5czdBWUtCZ1FDOXZiMGViM056ekEvNyt4WHAvZjN0c0sydE5DOHZMK0FCc0xHeEJQWDE5ZndCL1B3ekFnc0xyTmJNekZjSURRM0tIaDRlQklaSWVVdmxpeS8xQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLmFmMzU1MjdiMTYwNjc2ZWFjN2E2ZDVjMGE2MDg4M2MzLnBuZ1wiLFwiaGVpZ2h0XCI6NDksXCJ3aWR0aFwiOjQ4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUJDa2xFUVZSNDJtUG95MlR3V3Irc29tdDdpKy9XVGZOeSt0YTBTUFZ2YTJiYnVxcWR1WE5LR1lNN1EwTTZnOXUxRGJQK1A4NG8vbjkzMGRUL0QyYWEvWDg3VGZ6LzVTa2kvOXNiR1J3WmdFRDAwcHhwSDU1NEZQNS9PSFg2N3hlejdINS9uQ0x6LzJLcjNEc0diUVpoaGkwZERCUGZucTM1ZjIxeHhKOFQ2MnYvN2VwVi9uZDVEc09mbDFzWS9tL3VaK2hoV05GanUzSkJpZi8vT1dsK3YzdVRYUDdYeFlYL241b1E4WHR4ZmZML2xkMFdTeG1hcXV4VEMzeEsvdWN5bFAvZU9DWHN6K2FwZ1g4S0dFci9GUG9XL2UrdXQ0NWpZQ2hnWUYxYUtyS3hOenpwLzdUQytQL1RpK0wrOTRZbi9GOWVKcktjQVJsTWIyYXdXOVdvTUJ1SVo4MXNaYkNCaVFNQWtQdDlXTXdpWld3QUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9sZWlwemlnLjQ0ZmIzMzJjNDA0YTUzYTBhY2RlOTIyMTMzNDY1NGUwLnBuZ1wiLFwiaGVpZ2h0XCI6NDUsXCJ3aWR0aFwiOjcyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRkNBWUFBQUI0a2ExVkFBQUFzRWxFUVZSNG5BR2xBRnIvQWIreXZRQkJGQThMMEJnVnVRb0FBQVArL3Y0QStBSUMvVERKMVVpNEJBSDBBZi9GemhMaDBOUjFCUWtFZVBVdkxBQUxDd29BLzhUSkFQdjQvWWdnTlMrTEFmRzZ4VUgwM3Q5dS9Rb0lUL2NtSWZzR0JnVUFBOVhiQlFMejlyRVBKeVNUQWNTOHhBQThPeklHdWREWjZoNFZFZy83Ky9zQTZmTDE4VVhsNlJhei9mMzZBY2JFekFMYUVRNytFTmJiUFFzVEVYOERBd01BN09QbWdkWWVITU05K2ZvQ2l6NUwyUGFNb2pvQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9saXZlcnBvb2wuZWExNDhmYWI3OTk2ZjJmMDFlODVhOTcwMDhhZDk0NTAucG5nXCIsXCJoZWlnaHRcIjo1MyxcIndpZHRoXCI6NDEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQTAwbEVRVlI0bkFISUFEZi9BZi8vL3dpNzJOWWs2Z0gvZ1B2Ly9nWWFBUU44T1NJbDNBR08xdEdKK2dFQWR1ejYrUUFBQUFBQUZRWUhBQVAvQUpRQnE2aW5oUWYwOTAwRTh2TUxBUDcrQVB3VEVmRDZEZ3U4QWZCa2dVWDIvUGE2QVFZRi9nSVNEUUQrN3ZNQ0Ivc0FTUUhrZEhlbkVHUmxXQVFQRHY3NTRlVUFBQVFEQXZTeHJhc0Izb0p1dXg1aGVDTDI2ZWtpOTgzVkFCTkdQdDdqcDVEZkFXREp3c0ZJNnZBNVNCb2ZCZjd4OUFDOTl1NzZ0QlVPeGdGL3ljTlc1ZlB5WnhRRkJrSUdCQVVBNXZmMHdSNE5ENXB6TEYyTjBpdUY3QUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5lYjQ2MDQ4NjRjZTI0MDFhYTI0ZmI0ZWQyNzFmNmU4My5wbmdcIixcImhlaWdodFwiOjUzLFwid2lkdGhcIjo0MSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFZQUFBQUlDQVlBQUFEYXhvNDRBQUFBdFVsRVFWUjQybU9vbjdPRmxRRUk3aTVuMEgyNGdrRWR4RzZjc3drb0JnTFRicmphekxnUWF6SDlZZ0tRYlE4Um5INmRuM242dGYxQWdVNkdhZGVuQU5uYmdUUVhVUFcxYmlCZUR4Ull3VFR0K2xxZ3dqVkFpVllHb09CMklGNEV4QmVCQXVjWnBsOWJBbVJ2WmhDYWZtMkQ0UFJyaS9tbVg1c0JaUGNLVEwrMkRvZ1hBSFhjYVdHWWRydVhZZXFkVUlhcGR3T0I3TWxBWE1ld1luNWY5dDVGbVI0ckYzUTdyMTNRNXJWM1VaYlRvdmxUWWdBRlpWZkFldVpXUFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2ouMTk5MDljZGMyN2U2ZTc0ZGE0MTNmNGEyMjEyZGFkOTcucG5nXCIsXCJoZWlnaHRcIjo0NyxcIndpZHRoXCI6NDcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQkUwbEVRVlI0bkFFSUFmZitBVTErckFDenorb1BaVDBiaGdrSEJFWUpCZ1QvNmUvMnRxRGY4WHBWSEF6MkFRQWlpZzkrZWpIQkNBY0ZMd1FCQVFEOC9QMEE5ZnY5QVBuOC9zbU10TmRDQVdhS3Nacnc3dlZsQlJRTytVSDA3UVg2L3Y4QTBoWVkrK2pnN0FjV0Z3Mk9BVkY4cXVEeTYvTWZ2UWdLL3RBRDN3SDVBUU1BTi9rZC8wRDY5d0ljR3cvWUFWWjlxdUhFNi9ZZWxTNE8vaWZlMUFFQ0JBTUF6eHdxLzFuUjd3SmlIZzdhQVcrT3M1eXMzZTVqbHlVSitjYjUrd1VNQWdBQUtnSUUrMnplK0FkWUpST1JBVXlGc0E4YUJBREJ5dS80THhuKy9nQUtDZ1lBNVBuOUFEQVJDY24wQ3dwQ0FXbVF0UURuOC9vT0h3b0RpdWZ5K1VVR0JBTC9Fd2tGdGN2czlua3NGZ3oyUW9wMkRZaDhZSWtBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMuZDdmNTk3MzA0OTQ3NDAwZmIyMGYwNWUyZGFlNmI1ZmIucG5nXCIsXCJoZWlnaHRcIjo1MSxcIndpZHRoXCI6NDcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTZrbEVRVlI0Mm1QWTNjR2prZUhQZVRmRWd1SGNWZ09HL2MrRHhLKzlTRlk5KzIyRGdBRER1alk5YzNVR2h2OUhxNnYvSDErNjVQL2FwTFQvVDJ3WVB2N1k0Q3pCMEZhcTVwL0l3UEQvMThIOXZ4OWR1L3BuOWFwVi8yN3JNZno4TTlOTmw2RTZYcXFYZ1lIaC82MitydCs3ZXJ2L0w2dXUvdk5RbXVILzZ3cURWSVpjZjRFdHlzYm0vOTFNREg1djhQUDgvempZODlmVFlPLy96ek5VK2hnYUUzZ21PSmtaL1dld2RQaS9JOGpuOTl1bzhQK1B3OTMvdnk2VHpXRDRmNDZCb3pXR29WL2FnT0hMUmgyQi82LzlaRjgveTJhb1pFQUd1NmFJcTUydWtPbjVmMEJmR0NZR0FOWktac0ZjMjF2SEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9iYXJjYS43NWY5ZTIzMGJlYjc5ZTI4MmQ3YTBmMzY5YTZlNjY2ZS5wbmdcIixcImhlaWdodFwiOjIyMyxcIndpZHRoXCI6MjA2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE4MGxFUVZSNG5BSG9BQmYvQVorRlFETVNHUndwQmZmd0dmRUFBTmNNOWMwdCtBSVIzZm44SDg0QnNwNWFiQ3NPUEpNQzN2SUFBU3p6QUFmcGhRRHhCU2dBei9jNVFBR1ltRncyUlFBNXlRZlY5dndJU2ZVQkJlMkFBK3I3TXV3bDltTW1BY3VrTWFRaEkwUmI1K1AxL2ZjQit3SUg4WnYvR0JzQUF0VGtQM1FCcEl4V3N2WFdBazM5QkFEN0N4SHdCTzNtSC9zT0Z3RUdFaVQzZ3dHTmgxNXI5N2tPbEFFUUJ3QkRWdEwrc1hzdEFoRTUrQUFoVHd3N0FRRC9BQUcwZ3krUTVmSTBYeEFIOGcveStnM3BKUjdoaHU5dHZaSUJucVl1QUI3RzBnQVZTZ0FZOE9wRE5qRk9PcjNOaklQMTQ0WUFBTG16WWtUTzVxalFBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHNqLmNlNGFjMzE5NmI5MDEyODBjZGRiOWI3ZTE3YzQ4NWZlLnBuZ1wiLFwiaGVpZ2h0XCI6MjI1LFwid2lkdGhcIjoyMjQsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQkEwbEVRVlI0Mm1PQWdlTEp1eUtiNSt4ZjBySHc0S3o4Q1R0c1FXS2Q4dzh3Z2lVbnJUbytkK2JhRS8vbmJqejlmL3FhRS84bnJUajZ2Mi9aMFJ5d1pNT2MvU2s1N1J2L0YwemYrM3RqLzVyZmN5ZHYvbFUrWSsvLzlOYU4vNWZ0dnFURFVEeHh4MmFmdkNYL0dTclgvM2xaM3ZIL1FQbTAvd3hsYTM5SGxDei8zNy9zYUFsRDllU2RhK1h5bHY4L3RtRHI3OXNOUGY4ZjljNzR2M0RhMWw4bUJjdi96MXg5UEo5aHd0SWpBV0dORy83UG43RDVmL0hFZGIrbnpOejhxNjFsM2YrVTdxM2ZEcHkrbzhBQWR1M0Nneld4M2R2K3h6UnMrSi9ZdGUxLzd1UmQzK2VzT3huSWdBem1yamx1MnJsZ2YxWGZvb05GbS9kZUF1dk03OXJNQkFBNEJJbTZIR25pQXdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL3BheW1lbnRzL2NhcmQuODU3OGQ1YWE2NWRjYjM1YWQ0NzM3Y2NlODA1MTIxYWMucG5nXCIsXCJoZWlnaHRcIjozNzcsXCJ3aWR0aFwiOjY5NCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBamtsRVFWUjRuQTNKdXczQ01CQUc0UC9zUTBxTWpVQUM4UmdCT3VvMDdNQWlETUVPckVCSmd4aUFCWkFRaUo0T0dvcEVqbk9PU2YzUitYTGR2dDZsSzlhTFd3SUVwSUltU0dzbTFkQm9SZVgzdnFMb2ZXNTFEYW9EVUFueXpTOGRhVWx6ZkdoM2VKNkVWZlNrV210WW5PR1VaOXc0YnVMSVpZR0svU01OTEtNRENCTnNwakZ6aktucllkeG4rUVBXYUMzdldNZCtWd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvcGF5cGFsbC5kYzk5MDI3NGQ4ZDM1NTEyNjk4NzI1ODdiYzA2MTVhYS5wbmdcIixcImhlaWdodFwiOjYxLFwid2lkdGhcIjoyNTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFDQ0FZQUFBQmxsSjN0QUFBQVRFbEVRVlI0bkdOa01HMyt4cUFwUFlYaDFNdjFESHhNU2d5bnluY3c5SjYzWVJBUTRHTDQ5KzhoSTBQSnRwc01HbXFaRENrei9qT1lpNWt3UFA3Q3daRGkvSnBCU1pHWjRmZHZVUURuN1JhdFpyRjluZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvcGVuZGluZy5kNDE0NzUzYjE1NmQwNzhjMjg0NTJmYmQ2MDNjZjhkYy5wbmdcIixcImhlaWdodFwiOjEzMyxcIndpZHRoXCI6MTQxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBTUFBQUR6MFU2NUFBQUFhVkJNVkVYK0FBRFRBQUQvQUFEK0FBRC9BQUJxQUFCckFBRC9BQUR2QUFEL0FBRHZBQUQvQUFEMWo0L05tSmorRlJYL0VSSFgxdGJOMTlmL0ZCVCtGaGIvRkJUWHk4dkkwTkQ3Y25LNWg0Zi9BQUR6QUFENmVYbjdjM081am83UGdZSHlibTY1aFlYL0FBRDFBQURGbm1xbUFBQUFHM1JTVGxNQUFCOGpLU3Nzc3J5OXZjSG03dS8yK2ZuNSt2cisvdjcrL3Y1UTlqNnJBQUFBUkVsRVFWUjQyZ1ZBaFJHQUlBQjh1MGlSYnZZZjBnUG1nN0ZqQmhZU2U0OWt3VldrdGJKYytFTFR1b1VYeWxkanFsZDRrbkJPcEFjcnpXTmt1bUxhVHM3dmZmb0JtNFVFWkZ1U3U0SUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9wYXltZW50cy9zdWNjZXNzLjQ3Zjk1MGI2NTQ5ODkzNjQwMDAwYjI3ZmZiMzEzN2UxLnBuZ1wiLFwiaGVpZ2h0XCI6MTMyLFwid2lkdGhcIjoxNDEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQThrbEVRVlI0bkFIbkFCai9BUm0rTGdBSkFRWSs3di8yamdVQUFpL3IvdFQrWWd0cTFYMFlkZUhrSWR4WUFSYStMVXJxL3VTMUJnRVVBQm9CRGYvZy9jNEJxUml0QVBmajlRQmc4RjVUQVFDOUh1RkhDRFVlMWZ2ZisrVDZ6Z1ZwRUhIL1hRQlgvV1hoY0FUVkZ0N2dBUUM2QVAraUQ2YjlCQWdFQTFycVZ2KzZHYjBBMU52VUFYSUxiLzRmQkRFQ0FRQy9HdUEzN3lnZmlSZUErL0lWOUFRSDV3UUFSK3hrL0E0VEN3VUEvUURnQVRLL1AwZk8vOEcyV3ZKaEFuSVVhd0NrNktnQWtCR01BQnNCTC83dC8vaEpBU25DTndBRS93UTYwL3ZOalRMbk56RFRFK2NBQ1FvRDBQZjgvWE1DQVFIR05EQmxPUGcrV0NVQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQmFyX2NvbnRhaW5lcl9fVDF1OGVcIixcblx0XCJjb250ZW50XCI6IFwiQmFyX2NvbnRlbnRfXzFTd3RJXCIsXG5cdFwiYnV0dG9uXCI6IFwiQmFyX2J1dHRvbl9fMkN0bDhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlByZWRpY3Rpb25QYXltZW50c19jb250YWluZXJfXzFPYlhuXCIsXG5cdFwiY29udGVudFwiOiBcIlByZWRpY3Rpb25QYXltZW50c19jb250ZW50X196R194NlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiR2FtZUluZm9fY29udGFpbmVyX18yQklwOVwiLFxuXHRcImNvbnRlbnRcIjogXCJHYW1lSW5mb19jb250ZW50X18yXzNjM1wiLFxuXHRcInRlYW1zXCI6IFwiR2FtZUluZm9fdGVhbXNfXzE4QlBMXCIsXG5cdFwidGVhbU9uZVwiOiBcIkdhbWVJbmZvX3RlYW1PbmVfXzFtNHNKXCIsXG5cdFwidGVhbVR3b1wiOiBcIkdhbWVJbmZvX3RlYW1Ud29fXzFvQWtsXCIsXG5cdFwiZ2FtZURldGFpbGVzXCI6IFwiR2FtZUluZm9fZ2FtZURldGFpbGVzX18xaVd3TFwiLFxuXHRcImdhbWVEZXRDb250ZW50XCI6IFwiR2FtZUluZm9fZ2FtZURldENvbnRlbnRfXzJURFlFXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJEZXRhaWxzX2NvbnRhaW5lcl9fcGczWkNcIixcblx0XCJwcmljZVwiOiBcIkRldGFpbHNfcHJpY2VfXzFmUm0zXCIsXG5cdFwiY2hvb3NlUGF5U3lzXCI6IFwiRGV0YWlsc19jaG9vc2VQYXlTeXNfXzNEaFRYXCIsXG5cdFwiY2hvb3NlUGF5U3lzX2NvbnRlbnRcIjogXCJEZXRhaWxzX2Nob29zZVBheVN5c19jb250ZW50X18xUjM1dVwiLFxuXHRcImJ1dHRvblwiOiBcIkRldGFpbHNfYnV0dG9uX19ZcnIyMFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUGF5bWVudFBhcnRfY29udGFpbmVyX19Fc3k2ZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQ2FyZEZvcm1fY29udGFpbmVyX18zZ1NWOFwiLFxuXHRcImNvbnRlbnRcIjogXCJDYXJkRm9ybV9jb250ZW50X18zUVd5TVwiLFxuXHRcImlucHV0X3N1Y2Nlc3NcIjogXCJDYXJkRm9ybV9pbnB1dF9zdWNjZXNzX18yeEowN1wiLFxuXHRcImlucHV0X2Vycm9yXCI6IFwiQ2FyZEZvcm1faW5wdXRfZXJyb3JfXzZkbWNSXCIsXG5cdFwibmFtZVwiOiBcIkNhcmRGb3JtX25hbWVfXzNoNzJzXCIsXG5cdFwiY2FyZF9udW1iZXJfY29udGVudFwiOiBcIkNhcmRGb3JtX2NhcmRfbnVtYmVyX2NvbnRlbnRfX1RkbDltXCIsXG5cdFwiY2FyZF9udW1iZXJfaW5wdXRzXCI6IFwiQ2FyZEZvcm1fY2FyZF9udW1iZXJfaW5wdXRzX18xRHppa1wiLFxuXHRcImN2dlwiOiBcIkNhcmRGb3JtX2N2dl9fMlZLbjVcIixcblx0XCJhY3RpdmVfdW50aWxsXCI6IFwiQ2FyZEZvcm1fYWN0aXZlX3VudGlsbF9fR1NhSlNcIixcblx0XCJzdWNjZXNzXCI6IFwiQ2FyZEZvcm1fc3VjY2Vzc19fMXN4YVBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBheW1lbnRfY29udGFpbmVyX18yaV9fLVwiLFxuXHRcImNvbnRlbnRcIjogXCJQYXltZW50X2NvbnRlbnRfXzFvT3ZOXCIsXG5cdFwiaW1nXCI6IFwiUGF5bWVudF9pbWdfXzE0czFHXCIsXG5cdFwiZm9ybVwiOiBcIlBheW1lbnRfZm9ybV9fMUxfVHdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBlbmRpbmdfY29udGFpbmVyX18zNnROZ1wiLFxuXHRcInRyYW5zaXRpb25cIjogXCJQZW5kaW5nX3RyYW5zaXRpb25fXzJ0eWZCXCIsXG5cdFwiY29udGVudFwiOiBcIlBlbmRpbmdfY29udGVudF9fMjlyWmlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlN1Y2Nlc3NfY29udGFpbmVyX18xNzE3dlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJTdWNjZXNzX3RyYW5zaXRpb25fXzF1aFZEXCIsXG5cdFwiY29udGVudFwiOiBcIlN1Y2Nlc3NfY29udGVudF9fMUJqSC1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBheW1lbnRUYWJfY29udGFpbmVyX18yM2otclwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUHJlZGljdGlvblRhYl9jb250YWluZXJfXzNPZ0FZXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIlByZWRpY3Rpb25UYWJfdHJhbnNpdGlvbl9fMkxLVkpcIixcblx0XCJib2FyZFwiOiBcIlByZWRpY3Rpb25UYWJfYm9hcmRfXzFEM1RIXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJSb3dfY29udGFpbmVyX18zTWV1MFwiLFxuXHRcImNvbnRlbnRcIjogXCJSb3dfY29udGVudF9fM0RwVVNcIixcblx0XCJsZWZ0XCI6IFwiUm93X2xlZnRfXzJfRnRCXCIsXG5cdFwib3JkZXJcIjogXCJSb3dfb3JkZXJfX2ZkQUpJXCIsXG5cdFwidnNcIjogXCJSb3dfdnNfX0ZrRWpZXCIsXG5cdFwidGVhbU9uZVwiOiBcIlJvd190ZWFtT25lX19MSnZZc1wiLFxuXHRcInRlYW1Ud29cIjogXCJSb3dfdGVhbVR3b19fMndaYXRcIixcblx0XCJyaWdodFwiOiBcIlJvd19yaWdodF9fMV9QU1NcIixcblx0XCJwcmVkaWN0aW9uXCI6IFwiUm93X3ByZWRpY3Rpb25fX0x2bXkxXCIsXG5cdFwicHJlZGljdGlvbl9jb250ZW50XCI6IFwiUm93X3ByZWRpY3Rpb25fY29udGVudF9fLTZNUU9cIixcblx0XCJwcmVkaWN0aW9uX3RpdGxlXCI6IFwiUm93X3ByZWRpY3Rpb25fdGl0bGVfXzEtTUN0XCIsXG5cdFwicHJlZGljdGlvbl9ib2R5XCI6IFwiUm93X3ByZWRpY3Rpb25fYm9keV9fM1ktRThcIixcblx0XCJzaW11bGF0b3JcIjogXCJSb3dfc2ltdWxhdG9yX18xb3hGM1wiLFxuXHRcImRhdGVfdGltZVwiOiBcIlJvd19kYXRlX3RpbWVfXzJ6LUFtXCIsXG5cdFwiZGF0ZVwiOiBcIlJvd19kYXRlX18zdDdqUlwiLFxuXHRcInR5cGVcIjogXCJSb3dfdHlwZV9fMmdhZE1cIixcblx0XCJjb2VmZmljZW50XCI6IFwiUm93X2NvZWZmaWNlbnRfXzJWSWxtXCIsXG5cdFwicHJpY2VcIjogXCJSb3dfcHJpY2VfX2E1MVdyXCIsXG5cdFwiYnV5QnV0dG9uX2NvbnRhaW5lclwiOiBcIlJvd19idXlCdXR0b25fY29udGFpbmVyX19fNDRFYlwiLFxuXHRcImJ1dHRvbl9jb250ZW50XCI6IFwiUm93X2J1dHRvbl9jb250ZW50X19BdklxUlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVGFiSGVhZGVyX2NvbnRhaW5lcl9fek44b09cIixcblx0XCJjb250ZW50XCI6IFwiVGFiSGVhZGVyX2NvbnRlbnRfXzN0OTNLXCIsXG5cdFwiZm9yX3RhYmxldHNcIjogXCJUYWJIZWFkZXJfZm9yX3RhYmxldHNfXzFOT1pBXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJCdXR0b25fY29udGFpbmVyX180NUt5RFwiLFxuXHRcImNvbnRlbnRcIjogXCJCdXR0b25fY29udGVudF9fMTRGbFVcIixcblx0XCJhY3RpdmVcIjogXCJCdXR0b25fYWN0aXZlX18xTURnNVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW9kYWxDb250ZWluZXJcIjogXCJNb2RhbF9tb2RhbENvbnRlaW5lcl9fM2c4SWZcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiTW9kYWxfdHJhbnNpdGlvbl9fMWtmdjlcIixcblx0XCJtb2RhbENvbnRlbnRcIjogXCJNb2RhbF9tb2RhbENvbnRlbnRfXzEtTzQ3XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=