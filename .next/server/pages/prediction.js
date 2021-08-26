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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9IZWFkZXIvQmFyL0Jhci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1ByZWRpY3Rpb25QYXltZW50cy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1BheW1lbnRUYWIvR2FtZUluZm8vR2FtZUluZm8uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L0RldGFpbHMvRGV0YWlscy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1BheW1lbnRUYWIvUGF5bWVudFBhcnQvUGF5bWVudFBhcnQuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvQ2FyZEZvcm0vQ2FyZEZvcm0uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvUGF5bWVudC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1BheW1lbnRUYWIvUGF5bWVudFBhcnQvUGF5bWVudC9QZW5kaW5nL1BlbmRpbmcuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvU3VjY2Vzcy9TdWNjZXNzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50VGFiLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUHJlZGljdGlvblRhYi9QcmVkaWN0aW9uVGFiLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUm93L1Jvdy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1RhYkhlYWRlci9UYWJIZWFkZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9UYWJzLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvY29tbW9uL0J1dHRvbi9CdXR0b24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL2VyLmxpYi5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wYWdlcy9wcmVkaWN0aW9uLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvZXhwcmVzcy9leHByZXNzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvZXh0cmFfZGF0YS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL2ludmluc2libGVfc3RyYXRlZ3kvaW52aW5zaWJsZV9zdHJhdGVneS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL21hdGNoZXMvbWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL29yZGluYXIvb3JkaW5hci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9hdGxldGljLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2F0bGV0aWNvLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2xlaXB6aWcucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbGl2ZXJwb29sLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9iYXJjYS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wc2oucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wYXltZW50cy9jYXJkLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvcGF5cGFsbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL3BheW1lbnRzL3BlbmRpbmcucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wYXltZW50cy9zdWNjZXNzLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL0hlYWRlci9CYXIvQmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvUHJlZGljdGlvblBheW1lbnRzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL0dhbWVJbmZvL0dhbWVJbmZvLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L0RldGFpbHMvRGV0YWlscy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50UGFydC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50L0NhcmRGb3JtL0NhcmRGb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvUGF5bWVudC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50L1BlbmRpbmcvUGVuZGluZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50UGFydC9QYXltZW50L1N1Y2Nlc3MvU3VjY2Vzcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvUHJlZGljdGlvblBheW1lbnRzL1RhYnMvUGF5bWVudFRhYi9QYXltZW50VGFiLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QcmVkaWN0aW9uVGFiL1ByZWRpY3Rpb25UYWIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1Jvdy9Sb3cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL1ByZWRpY3Rpb25QYXltZW50cy9UYWJzL1RhYkhlYWRlci9UYWJIZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL2NvbW1vbi9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInl1cFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2lnbm9yZWR8QzpcXFVzZXJzXFxBZG1pblxcRGVza3RvcFxccHJvamVjdHNcXGZvb3QtYmV0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQmFyIiwicHJlZENsaWNrIiwicGF5bUNsaWNrIiwicHJlZEFjdGl2ZSIsInBheW1BY3RpdmUiLCJzdHlsZXMiLCJIZWFkZXIiLCJQcmVkaWN0aW9uUGF5bWVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVuR2FtZVBheW1lbnRzUGFnZSIsIk9iamVjdCIsImtleXMiLCJxdWVyeSIsImxlbmd0aCIsInNob3dQcmVkaWN0aW9uVGFiIiwic2V0U2hvd1ByZWRpY3Rpb25UYWJzIiwidXNlU3RhdGUiLCJzaG93UGF5bWVudFRhYiIsInNldFNob3dQYXltZW50VGFiIiwiR2FtZUluZm8iLCJnYW1lIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5IiwidGVhbU9uZUljb24iLCJ0ZWFtT25lTmFtZSIsInRlYW1Ud29JY29uIiwidGVhbVR3b05hbWUiLCJjb2VmZmljZW50IiwiZGF0ZSIsInRpbWUiLCJEZXRhaWxzIiwicHJpY2UiLCJ0b1VwcGVyQ2FzZSIsIlBheW1lbnRQYXJ0IiwidW5kZWZpbmVkIiwiQ2FyZEZvcm0iLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwic2hvd1BlbmRpbmciLCJzZXRTaG93UGVuZGluZyIsInNob3dGb3JtIiwic2V0U2hvd0Zvcm0iLCJqdW1wIiwieCIsInZhbHVlIiwibmV4dFNpYmxpbmciLCJ0ZXN0IiwidHlwZSIsImZvY3VzIiwianVtcEJhY2siLCJ0YXJnZXQiLCJjb2RlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJldmlvdXNTaWJsaW5nIiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJmdWxsTmFtZSIsInJlcXVpcmVkIiwibWF0Y2hlcyIsIkNWViIsIm1pbiIsIm1heCIsImFjdGl2ZVVudGlsbCIsImNhcmROdW1iZXJTY2hlbWEiLCJRdWFydGV0MSIsIlF1YXJ0ZXQyIiwiUXVhcnRldDMiLCJRdWFydGV0NCIsIm1hcmdlZFNjaGVtYSIsImNvbmNhdCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwidXNlRm9ybSIsIm1vZGUiLCJyZXNvbHZlciIsInl1cFJlc29sdmVyIiwic3VibWl0IiwiZGF0YSIsImRhdGFFbnRyaWVzIiwiZW50cmllcyIsImNhcmROdW1iZXJzIiwiZmlsdGVyIiwiZWwiLCJpbmRleE9mIiwicmVkdWNlIiwiYWMiLCJ0cmFuc2Zvcm1lZERhdGEiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImlucHV0X3N1Y2Nlc3MiLCJlIiwiUGF5bWVudCIsImNhcmRGb3JtIiwiUGVuZGluZyIsImNsaWVudFdpZHRoIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicGVuZGluZyIsIlN1Y2Nlc3MiLCJzdWNjZXNzIiwiUGF5bWVudFRhYiIsImdhbWVfcGF0aF9pbl9leHRyYWRhdGEiLCJzbGljZSIsImdhbWVfaWQiLCJnZXRfZ2FtZV9kYXRhIiwiZ2FtZVR5cGUiLCJkYiIsImV4cHJlc3MiLCJpZCIsImludmluc2libGVTdGd5Iiwib3JkaW5hciIsInRvZGF5TWF0Y2hlcyIsInByZWRpY3Rpb25zcGFnZSIsInByZWRpY3Rpb25zbGlkZSIsImdhbWVfZGF0YSIsImV4dHJhX2RhdGEiLCJQcmVkaWN0aW9uVGFiIiwiY2xpY2siLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwidXNlRWZmZWN0IiwicmVxdWVzdCIsIkdFVF9QUkVESUNUSU9OUyIsImF1dGgiLCJ0aGVuIiwicnNwIiwibWFwIiwiaXRlbSIsInByZWRpY3Rpb24iLCJ0aGVyZUlzIiwidG90YWxCZXQiLCJmYWN0b3IiLCJwcmVkaWN0aW9uQnV0dG9uTmFtZSIsImJ1eUJ1dHRvbk5hbWUiLCJwcmVkaWN0aW9uVGV4dCIsIm9yZGluYXJUZXh0IiwiY2F0Y2giLCJlcnJvciIsImkiLCJwYXRobmFtZSIsIk1hdGgiLCJyYW5kb20iLCJSb3ciLCJvcmRlciIsImNsaWNrQnV5Iiwib3BlblBheW1lbnRzIiwic2ltdWxhdG9yIiwiVGFiSGVhZGVyIiwiZm9yX3RhYmxldHMiLCJUYWJzIiwicHJlZGljdGlvblRhYiIsInBheW1lbnRUYWIiLCJnYW1lSWRGb3JQYXltZW50IiwiQnV0dG9uIiwicGFnZSIsInRleHRQYXRoTmFtZSIsImxvY2F0aW9uSW5QYWdlIiwiYWRpdGlvbmFsU3R5bGVzIiwiYWN0aXZlIiwiY29udGFpbmVyU3R5bGVzIiwiaGFuZGxlX292ZXJmbG93X29uX29wZW4iLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlIiwiTW9kYWwiLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJjb250ZW50U3R5bGVzIiwib3RoZXJTdHlsZXMiLCJwb3J0YWxMb2NhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJub2RlIiwidXNlUmVmIiwiY3VycmVudCIsImNvbnRhaW5zIiwiZGluYW1pY1RvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJtb2RhbCIsInRvcCIsImNyZWF0ZVBvcnRhbCIsImdldEVsZW1lbnRCeUlkIiwiaG9zdCIsImRlc3RpbmF0aW9uIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicnNsdiIsInJqY3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldENvb2tpZSIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiZmluYWxseSIsIm5hbWUiLCJuYW1lRVEiLCJjYSIsImNvb2tpZSIsInNwbGl0IiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsInJlbW92ZUNvb2tpZSIsInNldENvb2tpZSIsImRheXMiLCJleHBpcmVzIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJBVVRIX1VSTCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJMT0dJTiIsIkdFVF9BQ0NPVU5UX0lORk8iLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVtYWlsIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiU0VUX05FV19QQVNTV09SRCIsIkdFVF9ORVdTIiwiR0VUX01BVENIRVMiLCJHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSIsIkdFVF9GRUVEQkFDSyIsIkdFVF9NQVRDSEVTX0JZX1RZUEUiLCJleHBvcnRzIiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwicmVzb2x2ZSIsInByb20iLCJzZXQiLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsImhyZWYiLCJhcyIsInJlcyIsInJlaiIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJlcnIiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsIkVycm9yIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInAiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImRlZmF1bHQiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicHJlZmV0Y2giLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiX2RlZmF1bHQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yZWFjdCIsIl9yb3V0ZXIyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZm9yRWFjaCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJncyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsInByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiZG9tYWluSXRlbXMiLCJob3N0bmFtZSIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSXRlbSIsInRvTG93ZXJDYXNlIiwiX2l0ZW0kZG9tYWluIiwiX2l0ZW0kbG9jYWxlcyIsImRvbWFpbkhvc3RuYW1lIiwiZG9tYWluIiwiZGVmYXVsdExvY2FsZSIsImxvY2FsZXMiLCJzb21lIiwibG9jYWxlIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lUGFydHMiLCJzcGxpY2UiLCJqb2luIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImdldERvbWFpbkxvY2FsZSIsImFkZExvY2FsZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiYWRkQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImlzTG9jYWxVUkwiLCJpbnRlcnBvbGF0ZUFzIiwicmVzb2x2ZUhyZWYiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJkb21haW5Mb2NhbGVzIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwicGF0aExvd2VyIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiXyIsImFzUGF0aG5hbWUiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInJlcGxhY2UiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInJlc29sdmVkSHJlZiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwicmVzb2x2ZWRBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwic2hhbGxvdyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsIl90aGlzJGxvY2FsZXMiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3Iiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJ3YXJuIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJzY3JvbGwiLCJyZXNldFNjcm9sbCIsInkiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJwcmlvcml0eSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsInByb3RvY29sIiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZGVsZXRlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJQcmVkaWN0aW9uUGF5bWVudHNQYWdlIiwibGF5b3V0IiwiZ2V0U3RhdGljUHJvcHMiLCJfX2xvYWROYW1lc3BhY2VzIiwibG9hZGVyTmFtZSIsIl9faTE4bkNvbmZpZyIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJhdGxldGljb0ljb24iLCJhdGxldGljSWNvbiIsImJhcmNhSWNvbiIsInBzakljb24iLCJtYXJjZWxJY29uIiwicmVubmFpc0ljb24iLCJpbnZpbnNpYmxlX3N0cmF0ZWd5IiwicHJlZGljdGlvbnMiLCJnYW1lU3RhdGUiLCJzY29yZSIsInRpdGxlTmFtZSIsImxpdmVycG9vbEljb24iLCJsZWlwemlnSWNvbiIsInRvbW1vcm93TWF0Y2hlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLHVDQUF1Qyx5QkFBeUI7QUFDaEU7QUFDQSxxQzs7Ozs7Ozs7OztBQ2xaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvcHJlZGljdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hbS9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2FtL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2FtL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2RldS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2RldS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VuL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VuL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3Bfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL3JzL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL3JzL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBPYmplY3Qua2V5cyhtYXApOyB9O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9sb2NhbGVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIi8vIGNvbXBvbmV0bnNcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL0J1dHRvbi9CdXR0b24nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFyLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhcih7XHJcbiAgICBwcmVkQ2xpY2ssXHJcbiAgICBwYXltQ2xpY2ssXHJcbiAgICBwcmVkQWN0aXZlLFxyXG4gICAgcGF5bUFjdGl2ZSxcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZT0ncHJlZGljdGlvbidcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9XCJoZWFkZXIuYmFyQnV0dG9ucy5leHByZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBhZGl0aW9uYWxTdHlsZXM9e3N0eWxlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s9e3ByZWRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3ByZWRBY3RpdmUgJiYgcHJlZEFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZT0ncHJlZGljdGlvbidcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aE5hbWU9XCJoZWFkZXIuYmFyQnV0dG9ucy5vcmRpbmFyXCJcclxuICAgICAgICAgICAgICAgICAgICBhZGl0aW9uYWxTdHlsZXM9e3N0eWxlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s9e3BheW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3BheW1BY3RpdmUgJiYgcGF5bUFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAnLi9CYXIvQmFyJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoe1xyXG4gICAgcHJlZENsaWNrLFxyXG4gICAgcGF5bUNsaWNrLFxyXG4gICAgcHJlZEFjdGl2ZSxcclxuICAgIHBheW1BY3RpdmVcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFyXHJcbiAgICAgICAgICAgICAgICBwcmVkQ2xpY2s9e3ByZWRDbGlja31cclxuICAgICAgICAgICAgICAgIHBheW1DbGljaz17cGF5bUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgcHJlZEFjdGl2ZT17cHJlZEFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIHBheW1BY3RpdmU9e3BheW1BY3RpdmV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJlZGljdGlvblBheW1lbnRzLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyL0hlYWRlcidcclxuaW1wb3J0IHsgVGFicyB9IGZyb20gJy4vVGFicy9UYWJzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZWRpY3Rpb25QYXltZW50cygpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIC8vIHJldmlldyBxdWVyaWVzIGZvciB1bmRlcnN0YW5kaW5nIHVzZXIgd2FudCBidXkgZ2FtZSAoaWYgeWUsIHdoaWNoIGdhbWUgKSBvciBub3RcclxuICAgICAgICBvcGVuR2FtZVBheW1lbnRzUGFnZSA9IE9iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RoID09PSAwID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93UHJlZGljdGlvblRhYiwgc2V0U2hvd1ByZWRpY3Rpb25UYWJzXSA9IHVzZVN0YXRlKCFvcGVuR2FtZVBheW1lbnRzUGFnZSksXHJcbiAgICAgICAgW3Nob3dQYXltZW50VGFiLCBzZXRTaG93UGF5bWVudFRhYl0gPSB1c2VTdGF0ZShvcGVuR2FtZVBheW1lbnRzUGFnZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICBwcmVkQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1ByZWRpY3Rpb25UYWJzKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQYXltZW50VGFiKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZEFjdGl2ZT17c2hvd1ByZWRpY3Rpb25UYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQcmVkaWN0aW9uVGFicyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1BheW1lbnRUYWIodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1BY3RpdmU9e3Nob3dQYXltZW50VGFifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvblRhYj17c2hvd1ByZWRpY3Rpb25UYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudFRhYj17c2hvd1BheW1lbnRUYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1ByZWRpY3Rpb25UYWJzKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UGF5bWVudFRhYih0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0dhbWVJbmZvLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVJbmZvKHsgZ2FtZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ByZWRpY3Rpb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAndGFicy5wYXltZW50cy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG4gICAgaWYgKCFnYW1lKVxyXG4gICAgICAgIHJldHVybiA8cD48L3A+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtT25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dhbWUudGVhbU9uZUljb259IGFsdD1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Z2FtZS50ZWFtT25lTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VlMuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbVR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnYW1lLnRlYW1Ud29JY29ufSBhbHQ9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2dhbWUudGVhbVR3b05hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWVEZXRhaWxlc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWVEZXRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKCdjb2VmZmljZW50Jyl9OiB7Z2FtZS5jb2VmZmljZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKCdnYW1lU3RhcnRpbmdEYXRlJyl9IHtnYW1lLmRhdGV9IC8ge2dhbWUudGltZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgcGF5cGFsbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvcGF5cGFsbC5wbmcnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGV0YWlscy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZXRhaWxzKHsgZ2FtZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ByZWRpY3Rpb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAndGFicy5wYXltZW50cy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaG9vc2VQYXlTeXN9PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnY2hvb3NlUGF5U3lzJykudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hvb3NlUGF5U3lzX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdiYW5rQ2FyZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BheW1lbnRQYXJ0Lm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IERldGFpbHMgfSBmcm9tIFwiLi9EZXRhaWxzL0RldGFpbHNcIjtcclxuaW1wb3J0IHsgUGF5bWVudCB9IGZyb20gXCIuL1BheW1lbnQvUGF5bWVudFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBheW1lbnRQYXJ0KHsgZ2FtZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAge2dhbWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgPERldGFpbHMgZ2FtZT17Z2FtZX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8UGF5bWVudCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkRm9ybS5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBTdWNjZXNzIH0gZnJvbSAnLi4vU3VjY2Vzcy9TdWNjZXNzJ1xyXG5pbXBvcnQgeyBQZW5kaW5nIH0gZnJvbSAnLi4vUGVuZGluZy9QZW5kaW5nJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJkRm9ybSgpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigncHJlZGljdGlvbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICd0YWJzLnBheW1lbnRzLmNhcmRGb3JtLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93U3VjY2Vzcywgc2V0U2hvd1N1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93UGVuZGluZywgc2V0U2hvd1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93Rm9ybSwgc2V0U2hvd0Zvcm1dID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgLy8gZnVuY3Rpb25zXHJcbiAgICAgICAganVtcCA9ICh4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4LnZhbHVlLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgeCA9IHgubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCAmJiAvdGV4dC8udGVzdCh4LnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBqdW1wQmFjayA9ICh4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4LnRhcmdldC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHguY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3ZlOmZvY3VzXCIpLnByZXZpb3VzU2libGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdmU6Zm9jdXNcIikucHJldmlvdXNTaWJsaW5nLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB5dXAgY29uZmlnc1xyXG4gICAgICAgIHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgIGZ1bGxOYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC8oXltBLVogXSokKS9tZyksXHJcbiAgICAgICAgICAgIENWVjogeXVwLnN0cmluZygpLm1pbigzKS5tYXgoMykucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgYWN0aXZlVW50aWxsOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oNSkubWF4KDUpLm1hdGNoZXMoLyheWzAtOS9dKiQpL21nKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhcmROdW1iZXJTY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBRdWFydGV0MTogeXVwLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKS5tYXRjaGVzKC9eWzAtOV17NH0kL21nKSxcclxuICAgICAgICAgICAgUXVhcnRldDI6IHl1cC5zdHJpbmcoKS5taW4oNCkubWF4KDQpLnJlcXVpcmVkKCkubWF0Y2hlcygvXlswLTldezR9JC9tZyksXHJcbiAgICAgICAgICAgIFF1YXJ0ZXQzOiB5dXAuc3RyaW5nKCkubWluKDQpLm1heCg0KS5yZXF1aXJlZCgpLm1hdGNoZXMoL15bMC05XXs0fSQvbWcpLFxyXG4gICAgICAgICAgICBRdWFydGV0NDogeXVwLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKS5tYXRjaGVzKC9eWzAtOV17NH0kL21nKSxcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBjYXJkTnVtYmVycyBzY2hlbWFcclxuICAgICAgICBtYXJnZWRTY2hlbWEgPSBzY2hlbWEuY29uY2F0KGNhcmROdW1iZXJTY2hlbWEpLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKG1hcmdlZFNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdWJtaXQgPSBkYXRhID0+IHtcclxuICAgICAgICAgICAgbGV0XHJcbiAgICAgICAgICAgICAgICBkYXRhRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgY2FyZE51bWJlcnMgPSBkYXRhRW50cmllcy5maWx0ZXIoZWwgPT4gZWxbMF0uaW5kZXhPZignUXVhcnRldCcpID4gLTEpLnJlZHVjZSgoYWMsIGVsKSA9PiAoYWMgKyBlbFsxXSksIFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZWREYXRhID0gZGF0YUVudHJpZXMuZmlsdGVyKGVsID0+IGVsWzBdLmluZGV4T2YoJ1F1YXJ0ZXQnKSlcclxuICAgICAgICAgICAgdHJhbnNmb3JtZWREYXRhLnB1c2goW1wiY2FyZE51bWJlclwiLCBjYXJkTnVtYmVyc10pXHJcbiAgICAgICAgICAgIHNldFNob3dGb3JtKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRTaG93U3VjY2Vzcyh0cnVlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFuc2Zvcm1lZERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dGb3JtICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfSBhdXRvQ29tcGxldGU9J29mZic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZnVsbE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZnVsbE5hbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKCdmdWxsTmFtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5mdWxsTmFtZSA/IHN0eWxlcy5pbnB1dF9lcnJvciA6IHN0eWxlcy5pbnB1dF9zdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9udW1iZXJfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ2NhcmROdW1iZXInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX251bWJlcl9pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdxdWFydGV0MSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDEgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1YXJ0ZXQyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDIgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1YXJ0ZXQzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDMgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1YXJ0ZXQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDQgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdnZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkNWVlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignQ1ZWJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgnY29kZUNWVicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5DVlYgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZV91bnRpbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjdGl2ZVVudGlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignYWN0aXZlVW50aWxsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgnYWN0aXZlVW50aWxsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLmFjdGl2ZVVudGlsbCA/IHN0eWxlcy5pbnB1dF9lcnJvciA6IHN0eWxlcy5pbnB1dF9zdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VjY2Vzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdzdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Nob3dTdWNjZXNzICYmIDxTdWNjZXNzIC8+fVxyXG4gICAgICAgICAgICB7c2hvd1BlbmRpbmcgJiYgPFBlbmRpbmcgLz59XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYXltZW50Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBDYXJkRm9ybSB9IGZyb20gXCIuL0NhcmRGb3JtL0NhcmRGb3JtXCI7XHJcbi8vIGljb25zXHJcbmltcG9ydCBjYXJkRm9ybSBmcm9tICcvcHVibGljL2ltYWdlcy9wYXltZW50cy9jYXJkLnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXltZW50KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhcmRGb3JtLnNyY30gYWx0PVwiY2FyZCBpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEZvcm0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGVuZGluZy5tb2R1bGUuc2NzcydcclxuLy8gaWNvbiBcclxuaW1wb3J0IHBlbmRpbmcgZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvcGVuZGluZy5wbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGVuZGluZygpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigncHJlZGljdGlvbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICd0YWJzLnBheW1lbnRzLmNhcmRGb3JtLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIGNsaWVudFdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoLFxyXG4gICAgICAgIFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2NsaWVudFdpZHRoIDwgNzY4ID9cclxuICAgICAgICAgICAgICAgIHNob3dNb2RhbCAmJiA8TW9kYWwgb25DbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZSgncGFuZGluZycpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwZW5kaW5nLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmFuc2xhdGUoJ3BhbmRpbmcnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwZW5kaW5nLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TdWNjZXNzLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uIFxyXG5pbXBvcnQgc3VjY2VzcyBmcm9tICcvcHVibGljL2ltYWdlcy9wYXltZW50cy9zdWNjZXNzLnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWNjZXNzKCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdwcmVkaWN0aW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3RhYnMucGF5bWVudHMuY2FyZEZvcm0uJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgY2xpZW50V2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y2xpZW50V2lkdGggPCA3NjggP1xyXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsICYmIDxNb2RhbCBvbkNsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKCd0aGFua3MnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3VjY2Vzcy5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlKCd0aGFua3MnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdWNjZXNzLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiXHJcbi8vIGRiJ3NcclxuaW1wb3J0IHsgZXh0cmFfZGF0YSB9IGZyb20gXCIvc3JjL2dhbWVzX2RhdGEvZXh0cmFfZGF0YVwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSBcIi4vR2FtZUluZm8vR2FtZUluZm9cIjtcclxuaW1wb3J0IHsgUGF5bWVudFBhcnQgfSBmcm9tIFwiLi9QYXltZW50UGFydC9QYXltZW50UGFydFwiO1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYXltZW50VGFiLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBheW1lbnRUYWIoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICAvLyBmaW5kIHdoaWNoIHR5cGUgb2YgZ2FtZSB1c2VyIHdhbnQgYnV5XHJcbiAgICAgICAgZ2FtZV9wYXRoX2luX2V4dHJhZGF0YSA9IHJvdXRlci5xdWVyeT8uZ2FtZT8uc2xpY2UoMCwgcm91dGVyLnF1ZXJ5LmdhbWUuaW5kZXhPZignR2FtZScpKSxcclxuICAgICAgICAvLyBmaW5kIGV4YWN0bHkgd2hpY2ggZ2FtZSB1c2VyIHdhbnQgYnV5XHJcbiAgICAgICAgZ2FtZV9pZCA9IHJvdXRlci5xdWVyeT8uZ2FtZT8uc2xpY2UoXCI/XCIpLFxyXG4gICAgICAgIC8vIGZpbmQgZ2FtZSBcclxuICAgICAgICBnZXRfZ2FtZV9kYXRhID0gKGdhbWVUeXBlLCBkYikgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGdhbWVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZXhwcmVzc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5leHByZXNzLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJpbnZpbnNpYmxlU3RneVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5pbnZpbnNpYmxlU3RneS5maWx0ZXIoZWwgPT4gZWwuaWQgPT09IGdhbWVfaWQpXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3JkaW5hclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5vcmRpbmFyLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b2RheU1hdGNoZXNcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIudG9kYXlNYXRjaGVzLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwcmVkaWN0aW9uc3BhZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIucHJlZGljdGlvbnNwYWdlLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwcmVkaWN0aW9uc2xpZGVcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIucHJlZGljdGlvbnNsaWRlLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gZ2FtZV9pZClcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnYW1lX2RhdGEgPSBnZXRfZ2FtZV9kYXRhKGdhbWVfcGF0aF9pbl9leHRyYWRhdGEsIGV4dHJhX2RhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZV9kYXRhKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAge2dhbWVfcGF0aF9pbl9leHRyYWRhdGEgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgPEdhbWVJbmZvIGdhbWU9e2dhbWVfZGF0YVswXX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8UGF5bWVudFBhcnQgZ2FtZT17Z2FtZV9kYXRhWzBdfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuLy8gZGF0YXNcclxuaW1wb3J0IHsgcHJlZGljdGlvbnMgfSBmcm9tICcvc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvcHJlZGljdGlvbnMnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vUm93L1JvdydcclxuaW1wb3J0IHsgVGFiSGVhZGVyIH0gZnJvbSAnLi4vVGFiSGVhZGVyL1RhYkhlYWRlcic7XHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ByZWRpY3Rpb25UYWIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IEdFVF9QUkVESUNUSU9OUyB9IGZyb20gJy9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcvbGliL2VyLmxpYidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJlZGljdGlvblRhYih7IGNsaWNrIH0pIHtcclxuXHJcbiAgICBjb25zdCBbIHNsaWRlX2RhdGEsIHNldFNsaWRlRGF0YSBdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCk9PiB7XHJcbiAgICAgICAgcmVxdWVzdCggR0VUX1BSRURJQ1RJT05TLCB7fSwgeyBhdXRoOiB0cnVlIH0gKVxyXG4gICAgICAgICAgICAudGhlbiggcnNwID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRvYXN0KGBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZGApXHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZURhdGEoIHJzcC5kYXRhLmRhdGEubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogaXRlbVtgdGVhbTFfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogaXRlbVtgdGVhbTJfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogaXRlbS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBpdGVtLnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IGl0ZW0uZmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkaW5hclRleHQ6IGAke2l0ZW0udHlwZX0gLyAke2l0ZW0ucHJpY2V90YDRg9CxLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlICsgJyDRgNGD0LEuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHt9KVxyXG4gICAgfSwgW10gKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRhYkhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvYXJkfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZV9kYXRhLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e2kgKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU9e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e2VsLnRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17ZWwudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZWZmaWNlbnQ9e2VsLmNvZWZmaWNlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17ZWwucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5QYXltZW50cz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm93Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7XHJcbiAgICBvcmRlcixcclxuICAgIHRlYW1PbmVOYW1lLFxyXG4gICAgdGVhbU9uZUljb24sXHJcbiAgICB0ZWFtVHdvTmFtZSxcclxuICAgIHRlYW1Ud29JY29uLFxyXG4gICAgcHJlZGljdGlvbixcclxuICAgIHR5cGUsXHJcbiAgICBkYXRlLFxyXG4gICAgdGltZSxcclxuICAgIGNvZWZmaWNlbnQsXHJcbiAgICBwcmljZSxcclxuICAgIGNsaWNrQnV5LFxyXG4gICAgb3BlblBheW1lbnRzXHJcbn0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigncHJlZGljdGlvbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICd0YWJzLmhlYWRlci4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntvcmRlcn0uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbU9uZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0ZWFtT25lTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbU9uZUljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudnN9PlZTLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1Ud299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGVhbVR3b05hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW1Ud29JY29ufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbi50aGVyZUlzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fdGl0bGV9Pnt0cmFuc2xhdGUoJ3ByZWRpY3Rpb24nKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJlZGljdGlvbi50b3RhbEJldH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJlZGljdGlvbi5jb2VmZmljZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW11bGF0b3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dHlwZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlX3RpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2VmZmljZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvZWZmaWNlbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV5QnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBjbGlja0J1eSgpOyBvcGVuUGF5bWVudHMoKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNvbW1vbnMuYnV5Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFiSGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG4vLyB0cmFuc2xhdGlvbnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhYkhlYWRlcigpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigncHJlZGljdGlvbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICd0YWJzLmhlYWRlci4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JfdGFibGV0c30gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ3ByZWRpY3Rpb24nKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgndHlwZScpLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdkYXRlJykudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ3RpbWUnKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnY29lZmljZW50JykudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ3ByaWNlJykudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBQYXltZW50VGFiIH0gZnJvbSAnLi9QYXltZW50VGFiL1BheW1lbnRUYWInXHJcbmltcG9ydCB7IFByZWRpY3Rpb25UYWIgfSBmcm9tICcuL1ByZWRpY3Rpb25UYWIvUHJlZGljdGlvblRhYidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFicyh7XHJcbiAgICBwcmVkaWN0aW9uVGFiLFxyXG4gICAgcGF5bWVudFRhYixcclxuICAgIGdhbWVJZEZvclBheW1lbnQsXHJcbiAgICBjbGlja1xyXG59KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwcmVkaWN0aW9uVGFiICYmIDxQcmVkaWN0aW9uVGFiIGNsaWNrPXtjbGlja30gLz59XHJcbiAgICAgICAgICAgIHtwYXltZW50VGFiICYmIDxQYXltZW50VGFiIGdhbWVJZD17Z2FtZUlkRm9yUGF5bWVudH0gLz59ICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oe1xyXG4gICAgcGFnZSA9ICdjb21tb24nLFxyXG4gICAgdGV4dFBhdGhOYW1lID0gXCJZb3UgYXJlIGRvbnQgcHV0IHRoZXJlIHRleHQuXCIsXHJcbiAgICBsb2NhdGlvbkluUGFnZSA9IFwiXCIsXHJcbiAgICBhZGl0aW9uYWxTdHlsZXMgPSBudWxsLFxyXG4gICAgYWN0aXZlID0gZmFsc2UsXHJcbiAgICBjbGljayA9IG51bGwsXHJcbiAgICBjb250YWluZXJTdHlsZXMgPSBudWxsIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihwYWdlKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSBgJHtsb2NhdGlvbkluUGFnZX1gLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7YWRpdGlvbmFsU3R5bGVzfSAke2FjdGl2ZSA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfVxyXG4gICAgICAgICAgICBzdHlsZT17Y29udGFpbmVyU3R5bGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250ZW50fWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSh0ZXh0UGF0aE5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSdcclxuXHJcblxyXG5jb25zdFxyXG4gICAgaGFuZGxlX292ZXJmbG93X29uX29wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9ICdhdXRvJ1xyXG4gICAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHtcclxuICAgIG9uQ2xvc2UsXHJcbiAgICAvLyBjbG9zZVdpdGhWZWN0b3JlID0gbnVsbCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgY29udGFpbmVyU3R5bGVzID0gbnVsbCxcclxuICAgIGNvbnRlbnRTdHlsZXMgPSBudWxsLFxyXG4gICAgb3RoZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgcG9ydGFsTG9jYXRpb24gPSAnbW9kYWwtY29udGVpbmVyJyB9KSB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dNb2RhbCh0cnVlKVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtoYW5kbGVDbG9zZV0pXHJcblxyXG4gICAgY29uc3Qgbm9kZSA9IHVzZVJlZigpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSBlID0+IHtcclxuICAgICAgICBpZiAobm9kZT8uY3VycmVudD8uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvbkNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgICAgIGRpbmFtaWNUb3AgPSB3aW5kb3cuc2Nyb2xsWVxyXG5cclxuICAgIHNob3dNb2RhbCA/IGhhbmRsZV9vdmVyZmxvd19vbl9vcGVuKCkgOiBoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UoKVxyXG5cclxuICAgIGNvbnN0IG1vZGFsID0gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxDb250ZWluZXJ9ICR7Y29udGFpbmVyU3R5bGVzfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0b3A6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCAhaW1wb3J0YW50J1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxDb250ZW50fSAke2NvbnRlbnRTdHlsZXN9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtvdGhlclN0eWxlc31cclxuICAgICAgICAgICAgICAgIHJlZj17bm9kZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgaWYgKHNob3dNb2RhbCkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICAgIG1vZGFsLFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3J0YWxMb2NhdGlvbilcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybiBudWxsXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGhvc3QgPSBcImh0dHBzOi8vNDc5NjI4NDU4ZDMyYmQubG9jYWxob3N0LnJ1bi9hcGkvXCI7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9ICggZGVzdGluYXRpb24sIHBheWxvYWQgPSBudWxsLCBvcHRpb25zID0gbnVsbCApID0+IG5ldyBQcm9taXNlKCAoIHJzbHYsIHJqY3QgKSA9PiB7XHJcbiAgbGV0IGhlYWRlcnMgPSB7fTtcclxuXHJcbiAgaWYgKCBvcHRpb25zICkge1xyXG4gICAgaWYgKCBvcHRpb25zLmF1dGggPT09IHRydWUgKSB7XHJcbiAgICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKGBhY2Nlc3MtdG9rZW5gKX1gIHx8IGBgIC8vIGZvciBtb3N0IG9mIHJlcXVlc3RzXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIGBoZWFkZXJzYCBpbiBvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVycyBpbnN0YW5jZW9mIE9iamVjdCApIHtcclxuICAgICAgaGVhZGVycyA9IHsgLi4uaGVhZGVycywgLi4ub3B0aW9ucy5oZWFkZXJzIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKCBgc3RhcnQgbG9hZGluZ2AgKTtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6IGRlc3RpbmF0aW9uLm1ldGhvZCxcclxuICAgIHVybDogZGVzdGluYXRpb24udXJsLFxyXG4gICAgaGVhZGVycyxcclxuICAgIGRhdGE6IHBheWxvYWQgfHwge31cclxuICB9KVxyXG4gIC50aGVuKCByc2x2IClcclxuICAuY2F0Y2goIHJqY3QgKVxyXG4gIC5maW5hbGx5KCAoKSA9PiBjb25zb2xlLmxvZyggYGVuZCBsb2FkaW5nYCApIClcclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIHZhciBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XHJcbiAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBjID0gY2FbaV07XHJcblxyXG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xyXG4gICAgICBjID0gYy5zdWJzdHJpbmcoMSwgYy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSBuYW1lID0+IHtcclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz07IFBhdGg9LzsgRXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChuYW1lLCB2YWx1ZSwgZGF5cykgPT4ge1xyXG4gIGxldCBleHBpcmVzID0gXCJcIjtcclxuXHJcbiAgaWYgKGRheXMpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuIiwiaW1wb3J0IHtob3N0fSBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5cclxuY29uc3QgQVVUSF9VUkwgPSBob3N0ICsgYGF1dGgvYDtcclxuY29uc3QgQUNDT1VOVF9VUkwgPSBob3N0ICsgYGFjY291bnQvYFxyXG5cclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyAncmVnaXN0cmF0aW9uJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HSU4gPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArICdsb2dpbicsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BQ0NPVU5UX0lORk8gPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdpbmZvJyxcclxuICBtZXRob2Q6ICdnZXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9JTkZPID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAnaW5mbycsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfSU1BR0UgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdwcm9maWxlLWltYWdlJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU1RBUlRfUkVTRVRfUEFTU1dPUkQgPSBlbWFpbCA9PiAoe1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvcmVzZXQ/ZW1haWw9JHtlbWFpbH1gLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFZFUklGWV9QQVNTV09SRF9SRVNFVCA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL3ZlcmlmeV9jb2RlYCxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTkVXX1BBU1NXT1JEID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvbmV3X3Bhc3N3b3JkIGAsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX05FV1MgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vbmV3c2AsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9tYXRjaC1vZi10aGUtZGF5YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX09GX05FWFRfREFZID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL21hdGNoLW9mLXRoZS1kYXk/dHlwZT1uZXh0X2RheWAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJFRElDVElPTlMgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWNjb3VudC9wcmVkaWN0aW9uYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GRUVEQkFDSyA9IGlkID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgZmVlZGJhY2svJHtpZH0/c29ydF9ieT1jcmVhdGVkX2F0Jm9yZGVyX2J5PWRlc2NgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX0JZX1RZUEUgPSB0eXBlID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vZ2FtZT90eXBlPSR7dHlwZX1gLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPWB3aXRoUm91dGVyKCR7bmFtZX0pYDt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGV0ZWN0RG9tYWluTG9jYWxlPWRldGVjdERvbWFpbkxvY2FsZTtmdW5jdGlvbiBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluSXRlbXMsaG9zdG5hbWUsZGV0ZWN0ZWRMb2NhbGUpe2xldCBkb21haW5JdGVtO2lmKGRvbWFpbkl0ZW1zKXtpZihkZXRlY3RlZExvY2FsZSl7ZGV0ZWN0ZWRMb2NhbGU9ZGV0ZWN0ZWRMb2NhbGUudG9Mb3dlckNhc2UoKTt9Zm9yKGNvbnN0IGl0ZW0gb2YgZG9tYWluSXRlbXMpe3ZhciBfaXRlbSRkb21haW4sX2l0ZW0kbG9jYWxlczsvLyByZW1vdmUgcG9ydCBpZiBwcmVzZW50XG5jb25zdCBkb21haW5Ib3N0bmFtZT0oX2l0ZW0kZG9tYWluPWl0ZW0uZG9tYWluKT09bnVsbD92b2lkIDA6X2l0ZW0kZG9tYWluLnNwbGl0KCc6JylbMF0udG9Mb3dlckNhc2UoKTtpZihob3N0bmFtZT09PWRvbWFpbkhvc3RuYW1lfHxkZXRlY3RlZExvY2FsZT09PWl0ZW0uZGVmYXVsdExvY2FsZS50b0xvd2VyQ2FzZSgpfHwoX2l0ZW0kbG9jYWxlcz1pdGVtLmxvY2FsZXMpIT1udWxsJiZfaXRlbSRsb2NhbGVzLnNvbWUobG9jYWxlPT5sb2NhbGUudG9Mb3dlckNhc2UoKT09PWRldGVjdGVkTG9jYWxlKSl7ZG9tYWluSXRlbT1pdGVtO2JyZWFrO319fXJldHVybiBkb21haW5JdGVtO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldGVjdC1kb21haW4tbG9jYWxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKSYmcGF0aExvd2VyIT09Jy8nK2xvY2FsZUxvd2VyP2FkZFBhdGhQcmVmaXgocGF0aCwnLycrbG9jYWxlKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsbG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiYocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJyl8fHBhdGhMb3dlcj09PScvJytsb2NhbGVMb3dlcik/KHBhdGhuYW1lLmxlbmd0aD09PWxvY2FsZS5sZW5ndGgrMT8nLyc6JycpK3BhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGgrMSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpfHx1cmwuc3RhcnRzV2l0aCgnPycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlcixocmVmLHJlc29sdmVBcyl7Ly8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbmxldCBiYXNlO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpO3RyeXtiYXNlPW5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpP3JvdXRlci5hc1BhdGg6cm91dGVyLnBhdGhuYW1lLCdodHRwOi8vbicpO31jYXRjaChfKXsvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuYmFzZT1uZXcgVVJMKCcvJywnaHR0cDovL24nKTt9Ly8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbmlmKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO310cnl7Y29uc3QgZmluYWxVcmw9bmV3IFVSTCh1cmxBc1N0cmluZyxiYXNlKTtmaW5hbFVybC5wYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkoZmluYWxVcmwucGF0aG5hbWUpO2xldCBpbnRlcnBvbGF0ZWRBcz0nJztpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShmaW5hbFVybC5wYXRobmFtZSkmJmZpbmFsVXJsLnNlYXJjaFBhcmFtcyYmcmVzb2x2ZUFzKXtjb25zdCBxdWVyeT0oMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtjb25zdHtyZXN1bHQscGFyYW1zfT1pbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLGZpbmFsVXJsLnBhdGhuYW1lLHF1ZXJ5KTtpZihyZXN1bHQpe2ludGVycG9sYXRlZEFzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOnJlc3VsdCxoYXNoOmZpbmFsVXJsLmhhc2gscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl9KTt9fS8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG5jb25zdCByZXNvbHZlZEhyZWY9ZmluYWxVcmwub3JpZ2luPT09YmFzZS5vcmlnaW4/ZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKTpmaW5hbFVybC5ocmVmO3JldHVybiByZXNvbHZlQXM/W3Jlc29sdmVkSHJlZixpbnRlcnBvbGF0ZWRBc3x8cmVzb2x2ZWRIcmVmXTpyZXNvbHZlZEhyZWY7fWNhdGNoKF8pe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9fWZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCl7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtyZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKT91cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpOnVybDt9ZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcix1cmwsYXMpey8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbmxldFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109cmVzb2x2ZUhyZWYocm91dGVyLHVybCx0cnVlKTtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IGhyZWZIYWRPcmlnaW49cmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtjb25zdCBhc0hhZE9yaWdpbj1yZXNvbHZlZEFzJiZyZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtyZXNvbHZlZEhyZWY9c3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtyZXNvbHZlZEFzPXJlc29sdmVkQXM/c3RyaXBPcmlnaW4ocmVzb2x2ZWRBcyk6cmVzb2x2ZWRBcztjb25zdCBwcmVwYXJlZFVybD1ocmVmSGFkT3JpZ2luP3Jlc29sdmVkSHJlZjphZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO2NvbnN0IHByZXBhcmVkQXM9YXM/c3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLGFzKSk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmO3JldHVybnt1cmw6cHJlcGFyZWRVcmwsYXM6YXNIYWRPcmlnaW4/cHJlcGFyZWRBczphZGRCYXNlUGF0aChwcmVwYXJlZEFzKX07fWZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpe2NvbnN0IGNsZWFuUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9kZW5vcm1hbGl6ZVBhZ2VQYXRoLmRlbm9ybWFsaXplUGFnZVBhdGgpKHBhdGhuYW1lKSk7aWYoY2xlYW5QYXRobmFtZT09PScvNDA0J3x8Y2xlYW5QYXRobmFtZT09PScvX2Vycm9yJyl7cmV0dXJuIHBhdGhuYW1lO30vLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG5pZighcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbnBhZ2VzLnNvbWUocGFnZT0+e2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHBhZ2UpJiYoMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKXtwYXRobmFtZT1wYWdlO3JldHVybiB0cnVlO319KTt9cmV0dXJuKDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTt9Y29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb249cHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiYnc2Nyb2xsUmVzdG9yYXRpb24naW4gd2luZG93Lmhpc3RvcnkmJiEhZnVuY3Rpb24oKXt0cnl7bGV0IHY9J19fbmV4dCc7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xucmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odix2KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLHRydWU7fWNhdGNoKG4pe319KCk7Y29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EPVN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7ZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMpe3JldHVybiBmZXRjaCh1cmwsey8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4vL1xuLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuLy8gPiBvcHRpb24uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4vL1xuLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbi8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2Bcbi8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuY3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7aWYoYXR0ZW1wdHM+MSYmcmVzLnN0YXR1cz49NTAwKXtyZXR1cm4gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMtMSk7fWlmKHJlcy5zdGF0dXM9PT00MDQpe3JldHVybiByZXMuanNvbigpLnRoZW4oZGF0YT0+e2lmKGRhdGEubm90Rm91bmQpe3JldHVybntub3RGb3VuZDpTU0dfREFUQV9OT1RfRk9VTkR9O310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO30pO310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO31yZXR1cm4gcmVzLmpzb24oKTt9KTt9ZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZixpc1NlcnZlclJlbmRlcil7cmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXI/MzoxKS5jYXRjaChlcnI9PnsvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbi8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4vLyBsb29wLlxuaWYoIWlzU2VydmVyUmVuZGVyKXsoMCxfcm91dGVMb2FkZXIubWFya0Fzc2V0RXJyb3IpKGVycik7fXRocm93IGVycjt9KTt9Y2xhc3MgUm91dGVyey8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqLyAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbmNvbnN0cnVjdG9yKF9wYXRobmFtZSxfcXVlcnksX2FzLHtpbml0aWFsUHJvcHMscGFnZUxvYWRlcixBcHAsd3JhcEFwcCxDb21wb25lbnQsZXJyLHN1YnNjcmlwdGlvbixpc0ZhbGxiYWNrLGxvY2FsZSxsb2NhbGVzLGRlZmF1bHRMb2NhbGUsZG9tYWluTG9jYWxlcyxpc1ByZXZpZXd9KXt0aGlzLnJvdXRlPXZvaWQgMDt0aGlzLnBhdGhuYW1lPXZvaWQgMDt0aGlzLnF1ZXJ5PXZvaWQgMDt0aGlzLmFzUGF0aD12b2lkIDA7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5jb21wb25lbnRzPXZvaWQgMDt0aGlzLnNkYz17fTt0aGlzLnNkcj17fTt0aGlzLnN1Yj12b2lkIDA7dGhpcy5jbGM9dm9pZCAwO3RoaXMucGFnZUxvYWRlcj12b2lkIDA7dGhpcy5fYnBzPXZvaWQgMDt0aGlzLmV2ZW50cz12b2lkIDA7dGhpcy5fd3JhcEFwcD12b2lkIDA7dGhpcy5pc1Nzcj12b2lkIDA7dGhpcy5pc0ZhbGxiYWNrPXZvaWQgMDt0aGlzLl9pbkZsaWdodFJvdXRlPXZvaWQgMDt0aGlzLl9zaGFsbG93PXZvaWQgMDt0aGlzLmxvY2FsZT12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmRlZmF1bHRMb2NhbGU9dm9pZCAwO3RoaXMuZG9tYWluTG9jYWxlcz12b2lkIDA7dGhpcy5pc1JlYWR5PXZvaWQgMDt0aGlzLmlzUHJldmlldz12b2lkIDA7dGhpcy5pc0xvY2FsZURvbWFpbj12b2lkIDA7dGhpcy5faWR4PTA7dGhpcy5vblBvcFN0YXRlPWU9Pntjb25zdCBzdGF0ZT1lLnN0YXRlO2lmKCFzdGF0ZSl7Ly8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4vLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbi8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbi8vXG4vLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4vLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4vLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbmNvbnN0e3BhdGhuYW1lLHF1ZXJ5fT10aGlzO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgocGF0aG5hbWUpLHF1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSk7cmV0dXJuO31pZighc3RhdGUuX19OKXtyZXR1cm47fWxldCBmb3JjZWRTY3JvbGw7Y29uc3R7dXJsLGFzLG9wdGlvbnMsaWR4fT1zdGF0ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7aWYodGhpcy5faWR4IT09aWR4KXsvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkKXt9Ly8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e2NvbnN0IHY9c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK2lkeCk7Zm9yY2VkU2Nyb2xsPUpTT04ucGFyc2Uodik7fWNhdGNoKF91bnVzZWQyKXtmb3JjZWRTY3JvbGw9e3g6MCx5OjB9O319fX10aGlzLl9pZHg9aWR4O2NvbnN0e3BhdGhuYW1lfT0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpOy8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG5pZih0aGlzLmlzU3NyJiZhcz09PXRoaXMuYXNQYXRoJiZwYXRobmFtZT09PXRoaXMucGF0aG5hbWUpe3JldHVybjt9Ly8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbmlmKHRoaXMuX2JwcyYmIXRoaXMuX2JwcyhzdGF0ZSkpe3JldHVybjt9dGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyx7c2hhbGxvdzpvcHRpb25zLnNoYWxsb3cmJnRoaXMuX3NoYWxsb3csbG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGV9KSxmb3JjZWRTY3JvbGwpO307Ly8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG50aGlzLnJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShfcGF0aG5hbWUpOy8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxudGhpcy5jb21wb25lbnRzPXt9Oy8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcbi8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4vLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG5pZihfcGF0aG5hbWUhPT0nL19lcnJvcicpe3RoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXT17Q29tcG9uZW50LGluaXRpYWw6dHJ1ZSxwcm9wczppbml0aWFsUHJvcHMsZXJyLF9fTl9TU0c6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTRyxfX05fU1NQOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU1B9O310aGlzLmNvbXBvbmVudHNbJy9fYXBwJ109e0NvbXBvbmVudDpBcHAsc3R5bGVTaGVldHM6Wy8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9dfTsvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbnRoaXMuZXZlbnRzPVJvdXRlci5ldmVudHM7dGhpcy5wYWdlTG9hZGVyPXBhZ2VMb2FkZXI7dGhpcy5wYXRobmFtZT1fcGF0aG5hbWU7dGhpcy5xdWVyeT1fcXVlcnk7Ly8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbi8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCBhdXRvRXhwb3J0RHluYW1pYz0oMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShfcGF0aG5hbWUpJiZzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDt0aGlzLmFzUGF0aD1hdXRvRXhwb3J0RHluYW1pYz9fcGF0aG5hbWU6X2FzO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5zdWI9c3Vic2NyaXB0aW9uO3RoaXMuY2xjPW51bGw7dGhpcy5fd3JhcEFwcD13cmFwQXBwOy8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbi8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG50aGlzLmlzU3NyPXRydWU7dGhpcy5pc0ZhbGxiYWNrPWlzRmFsbGJhY2s7dGhpcy5pc1JlYWR5PSEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwfHxzZWxmLl9fTkVYVF9EQVRBX18uZ2lwfHwhYXV0b0V4cG9ydER5bmFtaWMmJiFzZWxmLmxvY2F0aW9uLnNlYXJjaCYmIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbmNvbnN0IG9wdGlvbnM9e2xvY2FsZX07b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9X2FzIT09X3BhdGhuYW1lO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLG9wdGlvbnMpO313aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLHRoaXMub25Qb3BTdGF0ZSk7Ly8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbi8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuaWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3dpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPSdtYW51YWwnO319fX1yZWxvYWQoKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fS8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovYmFjaygpe3dpbmRvdy5oaXN0b3J5LmJhY2soKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3B1c2godXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pey8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbmlmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt0cnl7Ly8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkMyl7fX19Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcmVwbGFjZSh1cmwsYXMsb3B0aW9ucz17fSl7Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO31hc3luYyBjaGFuZ2UobWV0aG9kLHVybCxhcyxvcHRpb25zLGZvcmNlZFNjcm9sbCl7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Y29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWY9dXJsPT09YXN8fG9wdGlvbnMuX2h8fG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmOy8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG5pZihvcHRpb25zLl9oKXt0aGlzLmlzUmVhZHk9dHJ1ZTt9bGV0IGxvY2FsZUNoYW5nZT1vcHRpb25zLmxvY2FsZSE9PXRoaXMubG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPW9wdGlvbnMubG9jYWxlPT09ZmFsc2U/dGhpcy5kZWZhdWx0TG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmxvY2FsZTtpZih0eXBlb2Ygb3B0aW9ucy5sb2NhbGU9PT0ndW5kZWZpbmVkJyl7b3B0aW9ucy5sb2NhbGU9dGhpcy5sb2NhbGU7fWNvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtpZihsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXt0aGlzLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO3BhcnNlZEFzLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt1cmw9YWRkQmFzZVBhdGgoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoaGFzQmFzZVBhdGgodXJsKT9kZWxCYXNlUGF0aCh1cmwpOnVybCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTt9bGV0IGRpZE5hdmlnYXRlPWZhbHNlOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt2YXIgX3RoaXMkbG9jYWxlczsvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG5pZighKChfdGhpcyRsb2NhbGVzPXRoaXMubG9jYWxlcykhPW51bGwmJl90aGlzJGxvY2FsZXMuaW5jbHVkZXModGhpcy5sb2NhbGUpKSl7cGFyc2VkQXMucGF0aG5hbWU9YWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlKTt3aW5kb3cubG9jYXRpb24uaHJlZj0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1jb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLHVuZGVmaW5lZCx0aGlzLmxvY2FsZSk7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpey8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4vLyBjb3JyZWN0IGRvbWFpblxuaWYoIWRpZE5hdmlnYXRlJiZkZXRlY3RlZERvbWFpbiYmdGhpcy5pc0xvY2FsZURvbWFpbiYmc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSE9PWRldGVjdGVkRG9tYWluLmRvbWFpbil7Y29uc3QgYXNOb0Jhc2VQYXRoPWRlbEJhc2VQYXRoKGFzKTt3aW5kb3cubG9jYXRpb24uaHJlZj1gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGg9PT0nLyc/Jyc6YXNOb0Jhc2VQYXRofWB8fCcvJyl9YDsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1pZihkaWROYXZpZ2F0ZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fX1pZighb3B0aW9ucy5faCl7dGhpcy5pc1Nzcj1mYWxzZTt9Ly8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuaWYoX3V0aWxzLlNUKXtwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO31jb25zdHtzaGFsbG93PWZhbHNlfT1vcHRpb25zO2NvbnN0IHJvdXRlUHJvcHM9e3NoYWxsb3d9O2lmKHRoaXMuX2luRmxpZ2h0Um91dGUpe3RoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUscm91dGVQcm9wcyk7fWFzPWFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLG9wdGlvbnMubG9jYWxlLHRoaXMuZGVmYXVsdExvY2FsZSkpO2NvbnN0IGNsZWFuZWRBcz1kZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyx0aGlzLmxvY2FsZSk7dGhpcy5faW5GbGlnaHRSb3V0ZT1hczsvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG5pZighb3B0aW9ucy5faCYmdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSl7dGhpcy5hc1BhdGg9Y2xlYW5lZEFzO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTsvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xudGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO3RoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7dGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLG51bGwpO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZSxxdWVyeX09cGFyc2VkOy8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbi8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuLy8gd2hlbiByZXdyaXR0ZW4gdG9cbmxldCBwYWdlcyxyZXdyaXRlczt0cnl7cGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTt9Y2F0Y2goZXJyKXsvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3Rcbi8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9Ly8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2Vcbi8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbi8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbmlmKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykmJiFsb2NhbGVDaGFuZ2Upe21ldGhvZD0ncmVwbGFjZVN0YXRlJzt9Ly8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbi8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbmxldCByZXNvbHZlZEFzPWFzOy8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbi8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbi8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG5wYXRobmFtZT1wYXRobmFtZT8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoZGVsQmFzZVBhdGgocGF0aG5hbWUpKTpwYXRobmFtZTtpZihzaG91bGRSZXNvbHZlSHJlZiYmcGF0aG5hbWUhPT0nL19lcnJvcicpeztvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj10cnVlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMixfb3B0aW9ucyRzY3JvbGw7bGV0IHJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpO2xldHtlcnJvcixwcm9wcyxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbzsvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbmlmKChfX05fU1NHfHxfX05fU1NQKSYmcHJvcHMpe2lmKHByb3BzLnBhZ2VQcm9wcyYmcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCl7Y29uc3QgZGVzdGluYXRpb249cHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDsvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuLy8gaXQncyBub3RcbmlmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcGFyc2VkSHJlZj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7cGFyc2VkSHJlZi5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUscGFnZXMpO2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIlxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbiAgICBpbXBvcnQgX19sb2FkTmFtZXNwYWNlcyBmcm9tICduZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlcydcbiAgICBcbmltcG9ydCBQcmVkaWN0aW9uUGF5bWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvUHJlZGljdGlvblBheW1lbnRzJztcclxuXHJcblxyXG5jb25zdCBQcmVkaWN0aW9uUGF5bWVudHNQYWdlID0gKCkgPT4gPFByZWRpY3Rpb25QYXltZW50cyAvPlxyXG5cclxuUHJlZGljdGlvblBheW1lbnRzUGFnZS5sYXlvdXQgPSBcIndpdGhvdXRQaG90b1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlZGljdGlvblBheW1lbnRzUGFnZTtcclxuXG5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuLi4oYXdhaXQgX19sb2FkTmFtZXNwYWNlcyh7XG4gICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXG4gICAgICAgICAgICAgIGxvYWRlck5hbWU6ICdnZXRTdGF0aWNQcm9wcycsXG4gICAgICAgICAgICAgIC4uLl9faTE4bkNvbmZpZyxcbiAgICAgICAgICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nJ1xyXG5pbXBvcnQgYXRsZXRpY0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBiYXJjYUljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2JhcmNhLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4cHJlc3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTFcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTc1MCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JHQsNGA0YHQtdC70L7QvdCwJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9Cf0KHQlicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIzOjAwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcyNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUzXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjM6MDAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmljZTogJzE4MDAg0YDRg9CxLiAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWU0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWU1XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTZcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZThcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lOVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTBcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTExXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxMlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxM1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUxNFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTVcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTZcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcImV4cHJlc3NHYW1lMThcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6XCJleHByZXNzR2FtZTE5XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiZXhwcmVzc0dhbWUyMFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuXVxyXG4iLCJpbXBvcnQgeyBleHByZXNzIH0gZnJvbSBcIi4vZXhwcmVzcy9leHByZXNzXCI7XHJcbmltcG9ydCB7IGludmluc2libGVfc3RyYXRlZ3kgfSBmcm9tIFwiLi9pbnZpbnNpYmxlX3N0cmF0ZWd5L2ludmluc2libGVfc3RyYXRlZ3lcIjtcclxuaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gXCIuL21hdGNoZXMvbWF0Y2hlc1wiO1xyXG5pbXBvcnQgeyBvcmRpbmFyIH0gZnJvbSBcIi4vb3JkaW5hci9vcmRpbmFyXCI7XHJcbmltcG9ydCB7IHByZWRpY3Rpb25zIH0gZnJvbSBcIi4vcHJlZGljdGlvbnMvcHJlZGljdGlvbnNcIjtcclxuaW1wb3J0IHsgc2xpZGVfZGF0YSB9IGZyb20gXCIuL3ByZWRpY3Rpb25zL3NsaWRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZXh0cmFfZGF0YSA9IHtcclxuXHJcbiAgICBleHByZXNzOiBleHByZXNzLFxyXG4gICAgaW52aW5zaWJsZVN0Z3k6IGludmluc2libGVfc3RyYXRlZ3ksXHJcbiAgICBvcmRpbmFyOiBvcmRpbmFyLFxyXG4gICAgdG9kYXlNYXRjaGVzOiBtYXRjaGVzLnRvZGF5TWF0Y2hlcyxcclxuICAgIHByZWRpY3Rpb25zcGFnZTogcHJlZGljdGlvbnMsXHJcbiAgICBwcmVkaWN0aW9uc2xpZGU6IHNsaWRlX2RhdGFcclxuXHJcbn0iLCIvLyBpY29uc1xyXG5pbXBvcnQgYXRsZXRpY29JY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWNvLnBuZydcclxuaW1wb3J0IGF0bGV0aWNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2dhbWVzL2F0bGV0aWMucG5nJ1xyXG5pbXBvcnQgYmFyY2FJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9iYXJjYS5wbmcnXHJcbmltcG9ydCBtYXJjZWxJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwucG5nJ1xyXG5pbXBvcnQgcHNqSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcHNqLnBuZydcclxuaW1wb3J0IHJlbm5haXNJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBpbnZpbnNpYmxlX3N0cmF0ZWd5ID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTFcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUyXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkdCw0YDRgdC10LvQvtC90LAnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0J/QodCWJyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjM6MDAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmljZTogJzI1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lM1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JzQsNGA0YHQtdC70YwnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBtYXJjZWxJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcmVubmFpc0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIzOjAwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMi4wNycsXHJcbiAgICAgICAgcHJpY2U6ICcxODAwINGA0YPQsS4gJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWU0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTVcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWU2XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lOFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTlcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTBcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTFcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTJcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxM1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE1XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW52aW5zaWJsZVN0Z3lHYW1lMTZcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJpbnZpbnNpYmxlU3RneUdhbWUxN1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE4XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTE5XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImludmluc2libGVTdGd5R2FtZTIwXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG5dXHJcbiIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2F0bGV0aWNvLnBuZydcclxuaW1wb3J0IGJhcmNhSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYmFyY2EucG5nJ1xyXG5pbXBvcnQgbGVpcHppZ0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL2xlaXB6aWcucG5nJ1xyXG5pbXBvcnQgbGl2ZXJwb29sSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbGl2ZXJwb29sLnBuZydcclxuaW1wb3J0IG1hcmNlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL21hcmNlbC5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9wc2oucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoZXMgPSB7XHJcbiAgICB0b2RheU1hdGNoZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTEnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjA6MDAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93T25lLmdhbWVTdGF0ZS5zdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICcyIDogMScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lMicsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMTozMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dUd28uZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkdCw0YDRgdC10LvQvtC90LAnLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogYmFyY2FJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICctJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQn9Ch0JYnLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93VHdvLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd1R3by50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTMnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjI6MjAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93VGhyZWUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBtYXJjZWxJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICctJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93VGhyZWUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93VGhyZWUudGl0bGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RvZGF5TWF0Y2hlc0dhbWU0JyxcclxuICAgICAgICAgICAgZGF0ZTogJzIzOjMwJyxcclxuICAgICAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiAnLnJvd0ZvcmUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGxpdmVycG9vbEljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IGxlaXB6aWdJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dGb3JlLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd0ZvcmUudGl0bGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RvZGF5TWF0Y2hlc0dhbWU1JyxcclxuICAgICAgICAgICAgZGF0ZTogJzIwOjAwJyxcclxuICAgICAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiAnLnJvd09uZS5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93T25lLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd09uZS50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTYnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjE6MzAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93VHdvLmdhbWVTdGF0ZS5kb250U3RhcnRlZCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBiYXJjYUljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IHBzakljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd1R3by5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dUd28udGl0bGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RvZGF5TWF0Y2hlc0dhbWU3JyxcclxuICAgICAgICAgICAgZGF0ZTogJzIyOjIwJyxcclxuICAgICAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiAnLnJvd1RocmVlLmdhbWVTdGF0ZS5kb250U3RhcnRlZCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBtYXJjZWxJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICctJyxcclxuICAgICAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uOiByZW5uYWlzSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93VGhyZWUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93VGhyZWUudGl0bGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RvZGF5TWF0Y2hlc0dhbWU4JyxcclxuICAgICAgICAgICAgZGF0ZTogJzIzOjMwJyxcclxuICAgICAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiAnLnJvd0ZvcmUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGxpdmVycG9vbEljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IGxlaXB6aWdJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dGb3JlLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd0ZvcmUudGl0bGUnLFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICB0b21tb3Jvd01hdGNoZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTEnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjA6MDAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93T25lLmdhbWVTdGF0ZS5zdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICAgICAgc2NvcmU6ICcyIDogMScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lMicsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMTozMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dUd28uZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93VHdvLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd1R3by50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTMnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjI6MjAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93VGhyZWUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dUaHJlZS5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dUaHJlZS50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTQnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjM6MzAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93Rm9yZS5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogbGl2ZXJwb29sSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogbGVpcHppZ0ljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd0ZvcmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93Rm9yZS50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTUnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjA6MDAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93T25lLmdhbWVTdGF0ZS5kb250U3RhcnRlZCcsXHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dPbmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93T25lLnRpdGxlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd0b2RheU1hdGNoZXNHYW1lNicsXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMTozMCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogJy5yb3dUd28uZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcucm93VHdvLmJ1eUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICAgICAgdGl0bGVOYW1lOiAnLnJvd1R3by50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTcnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjI6MjAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93VGhyZWUuZ2FtZVN0YXRlLmRvbnRTdGFydGVkJyxcclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICAgICAgdGVhbU9uZUljb246IG1hcmNlbEljb24uc3JjLFxyXG4gICAgICAgICAgICBzY29yZTogJy0nLFxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5yb3dUaHJlZS5idXlCdXR0b24nLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgICAgIHRpdGxlTmFtZTogJy5yb3dUaHJlZS50aXRsZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndG9kYXlNYXRjaGVzR2FtZTgnLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjM6MzAnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGU6ICcucm93Rm9yZS5nYW1lU3RhdGUuZG9udFN0YXJ0ZWQnLFxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbjogbGl2ZXJwb29sSWNvbi5zcmMsXHJcbiAgICAgICAgICAgIHNjb3JlOiAnLScsXHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbjogbGVpcHppZ0ljb24uc3JjLFxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnJvd0ZvcmUuYnV5QnV0dG9uJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgICAgICB0aXRsZU5hbWU6ICcucm93Rm9yZS50aXRsZScsXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59IiwiLy8gaWNvbnNcclxuaW1wb3J0IGF0bGV0aWNvSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmcnXHJcbmltcG9ydCBhdGxldGljSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLnBuZydcclxuaW1wb3J0IGJhcmNhSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYmFyY2EucG5nJ1xyXG5pbXBvcnQgbWFyY2VsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLnBuZydcclxuaW1wb3J0IHBzakljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Bzai5wbmcnXHJcbmltcG9ydCByZW5uYWlzSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmcnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JkaW5hciA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTFcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUyMiDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTJcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CR0LDRgNGB0LXQu9C+0L3QsCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQn9Ch0JYnLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMzowMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByaWNlOiAnMjUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTNcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9Cc0LDRgNGB0LXQu9GMJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogbWFyY2VsSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMzowMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByaWNlOiAnMTgwMCDRgNGD0LEuICdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWU0XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lNVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lNlwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTdcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWU4XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWU5XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTBcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxMVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTEyXCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxM1wiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTRcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxNVwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMTZcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTE3XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwib3JkaW5hckdhbWUxOFwiLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJvcmRpbmFyR2FtZTE5XCIsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIm9yZGluYXJHYW1lMjBcIixcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbl1cclxuIiwiLy8gaWNvbnNcclxuaW1wb3J0IGF0bGV0aWNvSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby5wbmcnXHJcbmltcG9ydCBhdGxldGljSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLnBuZydcclxuaW1wb3J0IGJhcmNhSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYmFyY2EucG5nJ1xyXG5pbXBvcnQgbWFyY2VsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbWFyY2VsLnBuZydcclxuaW1wb3J0IHBzakljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Bzai5wbmcnXHJcbmltcG9ydCByZW5uYWlzSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcmVubmFpcy5wbmcnXHJcblxyXG5leHBvcnQgY29uc3QgcHJlZGljdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcItCe0YDQtNC40L3QsNGAXCIsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE2NDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUyJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CR0LDRgNGB0LXQu9C+0L3QsCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQn9Ch0JYnLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBwc2pJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcItCt0LrRgdC/0YDQtdGB0YFcIixcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByaWNlOiAnMjUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTMnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JzQsNGA0YHQtdC70YwnLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBtYXJjZWxJY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcmVubmFpc0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzIuMDcnLFxyXG4gICAgICAgIHByaWNlOiAnMTgwMCDRgNGD0LEuICdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWU0JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lNScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lNicsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTcnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWU4JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWU5JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTAnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxMScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTEyJyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxMycsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTQnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxNScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAn0YLQsSAxLDUgLyAnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidwcmVkaWN0aW9uc3BhZ2VHYW1lMTYnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTE3JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J3ByZWRpY3Rpb25zcGFnZUdhbWUxOCcsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY29JY29uLnNyYyxcclxuICAgICAgICB0ZWFtVHdvTmFtZTogJ9CQ0YLQu9C10YLQuNC6JyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsQmV0OiAnJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoncHJlZGljdGlvbnNwYWdlR2FtZTE5JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nXHJcbiAgICB9LFxyXG5dXHJcbiIsIi8vIGljb25zXHJcbmltcG9ydCBhdGxldGljb0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpY28ucG5nJ1xyXG5pbXBvcnQgYmFyY2FJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9iYXJjYS5wbmcnXHJcbmltcG9ydCBwc2pJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wc2oucG5nJ1xyXG5pbXBvcnQgYXRsZXRpY0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZ2FtZXMvYXRsZXRpYy5wbmcnXHJcbmltcG9ydCBtYXJjZWxJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwucG5nJ1xyXG5pbXBvcnQgcmVubmFpc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9tYXRjaGVzL3Jlbm5haXMucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlX2RhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lMScsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQkNGC0LvQtdGC0LjQutC+JyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcItCe0YDQtNC40L3QsNGAXCIsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTInLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JHQsNGA0YHQtdC70L7QvdCwJyxcclxuICAgICAgICB0ZWFtT25lSWNvbjogYXRsZXRpY0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0J/QodCWJyxcclxuICAgICAgICB0ZWFtVHdvSWNvbjogcHNqSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogXCLQrdC60YHQv9GA0LXRgdGBXCIsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzI1MDAg0YDRg9CxLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdwcmVkaWN0aW9uc2xpZGVHYW1lMycsXHJcbiAgICAgICAgdGVhbU9uZU5hbWU6ICfQnNCw0YDRgdC10LvRjCcsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGJhcmNhSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IHJlbm5haXNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcyLjA3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE4MDAg0YDRg9CxLiAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTQnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJycsXHJcbiAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn0K3QutGB0L/RgNC10YHRgScsXHJcbiAgICAgICAgZGF0ZTogJzE0LjAxJyxcclxuICAgICAgICB0aW1lOiAnMjI6MzAnLFxyXG4gICAgICAgIGNvZWZmaWNlbnQ6ICcxLjY3JyxcclxuICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJyxcclxuICAgICAgICBwcmljZTogJzE1MDAg0YDRg9CxLicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAncHJlZGljdGlvbnNsaWRlR2FtZTUnLFxyXG4gICAgICAgIHRlYW1PbmVOYW1lOiAn0JDRgtC70LXRgtC40LrQvicsXHJcbiAgICAgICAgdGVhbU9uZUljb246IGF0bGV0aWNvSWNvbi5zcmMsXHJcbiAgICAgICAgdGVhbVR3b05hbWU6ICfQkNGC0LvQtdGC0LjQuicsXHJcbiAgICAgICAgdGVhbVR3b0ljb246IGF0bGV0aWNJY29uLnNyYyxcclxuICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgY29lZmZpY2VudDogJ9C60L7QtdGEIDMsNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICfQrdC60YHQv9GA0LXRgdGBJyxcclxuICAgICAgICBkYXRlOiAnMTQuMDEnLFxyXG4gICAgICAgIHRpbWU6ICcyMjozMCcsXHJcbiAgICAgICAgY29lZmZpY2VudDogJzEuNjcnLFxyXG4gICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiAnLnNsaWRlLnByZWRfYnV0dG9uJyxcclxuICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICBvcmRpbmFyVGV4dDogJ9Ce0YDQtNC40L3QsNGAIC8gMTUwMNGA0YPQsS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUwMCDRgNGD0LEuJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3ByZWRpY3Rpb25zbGlkZUdhbWU2JyxcclxuICAgICAgICB0ZWFtT25lTmFtZTogJ9CQ0YLQu9C10YLQuNC60L4nLFxyXG4gICAgICAgIHRlYW1PbmVJY29uOiBhdGxldGljb0ljb24uc3JjLFxyXG4gICAgICAgIHRlYW1Ud29OYW1lOiAn0JDRgtC70LXRgtC40LonLFxyXG4gICAgICAgIHRlYW1Ud29JY29uOiBhdGxldGljSWNvbi5zcmMsXHJcbiAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxCZXQ6ICcnLFxyXG4gICAgICAgICAgICBjb2VmZmljZW50OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ9Ct0LrRgdC/0YDQtdGB0YEnLFxyXG4gICAgICAgIGRhdGU6ICcxNC4wMScsXHJcbiAgICAgICAgdGltZTogJzIyOjMwJyxcclxuICAgICAgICBjb2VmZmljZW50OiAnMS42NycsXHJcbiAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgcHJlZGljdGlvblRleHQ6ICfQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDUnLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgcHJpY2U6ICcxNTAwINGA0YPQsS4nLFxyXG4gICAgICAgIG9yZGluYXJUZXh0OiAn0J7RgNC00LjQvdCw0YAgLyAxNTAw0YDRg9CxLicsXHJcbiAgICAgICAgYnV5QnV0dG9uTmFtZTogJy5zbGlkZS5idXlfYnV0dG9uJyxcclxuICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgb3JkaW5hclRleHQ6ICfQntGA0LTQuNC90LDRgCAvIDE1MDDRgNGD0LEuJ1xyXG4gICAgfSxcclxuXSIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljLjI4MzgyMGZkMjZhZTMwODU0MmM0OTk4NzQ3ZjZmMTUwLnBuZ1wiLFwiaGVpZ2h0XCI6NjMsXCJ3aWR0aFwiOjU4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE2VWxFUVZSNDJqWEt2MnJDVUJnRjhEdjRNb1crUjRmT2hUNUw3UmdYTjZGTEM1RVVIQnBxMGc0WEdrV3c0bzI1WE5BaEVDNUpNTG1LVWZEUG9LQUkwZS9URFA2V3d6a2NFc2R4N3ZzK2NzNUJDQUZCRUlBWWpmQzZBVkZLN1pJa3dTZ013ZlU4a0ZLQ2F4aW8wblJQR0dPeHJ1djRxbWxucTlHQTlZOTlubENLVHFlVGtNVjhibDRQK0ZXdG5qYk5iemphOWltTElod3JaUkZQaUtmWmRJcXJqL2NjZS8rNHJOZnpSWmJoZ1BOblVoaW5xWkQ5UG00L2pVUFE3YUlNd3lHNTBTcVZPNmZkUGpETHdsOUtqeS9sOGowcE1OY3RGZGswelFmYWF1VnZ0ZHBqMGY4Y3AzUUJXZnliajUwK2Nvc0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9nYW1lcy9hdGxldGljby4yY2U3NWUyMTE2MmUyZTZkYzQ4Yjk5ZTYwMTgxMDdlMC5wbmdcIixcImhlaWdodFwiOjYyLFwid2lkdGhcIjo0NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFZQUFBQUlDQVlBQUFEYXhvNDRBQUFBMDBsRVFWUjRuQUhJQURmL0FXeHRoc1RlMytjeDh2UDZDZ3dLQkFBR0J3WDJCaEFPendHRGhKYi9Oell1QU56YzRmOEVCd2NBeU1mU0FSRGk0UUFCajVDZy9CRVFEUUw3Ly84QnZLcStBSHQ4WHYvanI2di9BV2hwZ3YzMTl2a0NNREVsL3kvODdBQXlTMGdCdzZXcS93RmVhSVAvSndIMi9WbFdSQVArK3ZvQUNCTVQvZEN3c3dNQm5vV085VTVRUlFydDROLzgvdjcvQUJFZEhRVEZzTGIzQVkyVG9UQW9CdjZtSlNBWUtRQUFBQURjNGVqWXl2NEtXd0ZxSTBZQWx0MjZCcm1zc3JzQUFBQUJSMVJPUlZVb1VmbCtsVnRyU1RDeTRRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXRsZXRpYy4zNjA2OGIwYzZjZDczN2YwNTlkNTM2ODQ1MGQ2MmRjNi5wbmdcIixcImhlaWdodFwiOjQ0LFwid2lkdGhcIjozMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFZQUFBQUlDQVlBQUFEYXhvNDRBQUFBMDBsRVFWUjRuQUhJQURmL0FXcHNocnZQME40dUFnSURFZ1VFQVFFS0NnWHRDUlFTMGdHT2o1Ly9LQ2NpQU5uWjN3QUtEUXNBeGNiVEFCSGs0Z0FCbUptby9BZ0hCZ0w3L3Y4QXU2dStBSGQ0V2dEdXVyVCtBWEZ6aWY3bjUvQUJNalFtL3kvMjVnQTFVazRCemJHMC93RmpiWWYvSmZydy9WWllSUVArK1BrQUJ4TVQvZHE4dmdNQnBZMlYrMGRHT3dUdDMrRDgvdi8vQUJFZUhnVEx1ci85QVkrWnFEUWg5KzZmS2lnZ0xBQUFBQURZMnVMVjBRc1hZUUZ4UlZ3QWo3dWtCTFdwc0xJQUFBQUJTMWRRVFYxR1l2eXFIMWdSdnlMWXVBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvYXRsZXRpY28uYjlmMTIyNzU4YjYwNzFhZmM4MGFjZGVmMDNmZDY5NmYucG5nXCIsXCJoZWlnaHRcIjo0NSxcIndpZHRoXCI6NDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FZQUFBQTFCT1VHQUFBQTgwbEVRVlI0bkFIb0FCZi9BYy9Qei96dTd1NEQrdnI2L3dJQkFRRUtDd3YvK3Y3K0FRY0NBdjhCMzkvZjh2djcrdzM5L1B6LzYrN3VBQkVRRUFEcnlja0JJME5EOWdHL3Y3L2MzdDNkSTkvbzZQNHJIUjBCUWdzTC8vWC8vd0xVREF6Z0FlUGk0cXZkMzk5VTRiKy8vVWtnSUFNT0J3Zjk2aTR1QS9nSkNiQUJ3OGJHVWg4YUdxMEl0Ylg4RlNRa0JPcmg0UHo4U1VvRTN1TGlXQUgvLy84QTJkemN3dmZoNFQwZTE5YjI0U2dwQ2dRWkdjWXRLeXM3QVlLQmdRQzl2YjBlYjNOenpBLzcreFhwL2YzdHNLMnROQzh2TCtBQnNMR3hCUFgxOWZ3Qi9Qd3pBZ3NMck5iTXpGY0lEUTNLSGg0ZUJJWkllVXZsaXkvMUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9iYXJjYS5hZjM1NTI3YjE2MDY3NmVhYzdhNmQ1YzBhNjA4ODNjMy5wbmdcIixcImhlaWdodFwiOjQ5LFwid2lkdGhcIjo0OCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFCQ2tsRVFWUjQybVBveTJUd1dyK3NvbXQ3aSsvV1RmTnkrdGEwU1BWdmEyYmJ1cXFkdVhOS0dZTTdRME02Zzl1MURiUCtQODRvL245MzBkVC9EMmFhL1g4N1Rmei81U2tpLzlzYkdSd1pnRUQwMHB4cEg1NTRGUDUvT0hYNjd4ZXo3SDUvbkNMei8yS3IzRHNHYlFaaGhpMGREQlBmbnEzNWYyMXh4SjhUNjJ2LzdlcFYvbmQ1RHNPZmwxc1kvbS91WitoaFdORmp1M0pCaWYvL09XbCt2M3VUWFA3WHhZWC9uNW9ROFh0eGZmTC9sZDBXU3htYXF1eFRDM3hLL3VjeWxQL2VPQ1hzeithcGdYOEtHRXIvRlBvVy9lK3V0NDVqWUNoZ1lGMWFLckt4Tnp6cC83VEMrUC9UaStMKzk0WW4vRjllSnJLY0FSbE1iMmF3VzlXb01CdUlaODFzWmJDQmlRTUFrUHQ5V013aVpXd0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbGVpcHppZy40NGZiMzMyYzQwNGE1M2EwYWNkZTkyMjEzMzQ2NTRlMC5wbmdcIixcImhlaWdodFwiOjQ1LFwid2lkdGhcIjo3MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUZDQVlBQUFCNGthMVZBQUFBc0VsRVFWUjRuQUdsQUZyL0FiK3l2UUJCRkE4TDBCZ1Z1UW9BQUFQKy92NEErQUlDL1RESjFVaTRCQUgwQWYvRnpoTGgwTlIxQlFrRWVQVXZMQUFMQ3dvQS84VEpBUHY0L1lnZ05TK0xBZkc2eFVIMDN0OXUvUW9JVC9jbUlmc0dCZ1VBQTlYYkJRTHo5ckVQSnlTVEFjUzh4QUE4T3pJR3VkRFo2aDRWRWcvNysvc0E2ZkwxOFVYbDZSYXovZjM2QWNiRXpBTGFFUTcrRU5iYlBRc1RFWDhEQXdNQTdPUG1nZFllSE1NOStmb0NpejVMMlBhTW9qb0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvbGl2ZXJwb29sLmVhMTQ4ZmFiNzk5NmYyZjAxZTg1YTk3MDA4YWQ5NDUwLnBuZ1wiLFwiaGVpZ2h0XCI6NTMsXCJ3aWR0aFwiOjQxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUEwMGxFUVZSNG5BSElBRGYvQWYvLy93aTcyTllrNmdIL2dQdi8vZ1lhQVFOOE9TSWwzQUdPMXRHSitnRUFkdXo2K1FBQUFBQUFGUVlIQUFQL0FKUUJxNmluaFFmMDkwMEU4dk1MQVA3K0FQd1RFZkQ2RGd1OEFmQmtnVVgyL1BhNkFRWUYvZ0lTRFFEKzd2TUNCL3NBU1FIa2RIZW5FR1JsV0FRUER2NzU0ZVVBQUFRREF2U3hyYXNCM29KdXV4NWhlQ0wyNmVraTk4M1ZBQk5HUHQ3anA1RGZBV0RKd3NGSTZ2QTVTQm9mQmY3eDlBQzk5dTc2dEJVT3hnRi95Y05XNWZQeVp4UUZCa0lHQkFVQTV2ZjB3UjRORDVwekxGMk4waXVGN0FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9tYXJjZWwuZWI0NjA0ODY0Y2UyNDAxYWEyNGZiNGVkMjcxZjZlODMucG5nXCIsXCJoZWlnaHRcIjo1MyxcIndpZHRoXCI6NDEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXRVbEVRVlI0Mm1Pb243T0ZsUUVJN2k1bjBIMjRna0VkeEc2Y3N3a29CZ0xUYnJqYXpMZ1Fhekg5WWdLUWJROFJuSDZkbjNuNnRmMUFnVTZHYWRlbkFObmJnVFFYVVBXMWJpQmVEeFJZd1RUdCtscWd3alZBaVZZR29PQjJJRjRFeEJlQkF1Y1pwbDliQW1SdlpoQ2FmbTJENFBScmkvbW1YNXNCWlBjS1RMKzJEb2dYQUhYY2FXR1lkcnVYWWVxZFVJYXBkd09CN01sQVhNZXdZbjVmOXQ1Rm1SNHJGM1E3cjEzUTVyVjNVWmJUb3ZsVFlnQUZaVmZBZXVaV1BRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL21hdGNoZXMvcHNqLjE5OTA5Y2RjMjdlNmU3NGRhNDEzZjRhMjIxMmRhZDk3LnBuZ1wiLFwiaGVpZ2h0XCI6NDcsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUJFMGxFUVZSNG5BRUlBZmYrQVUxK3JBQ3p6K29QWlQwYmhna0hCRVlKQmdULzZlLzJ0cURmOFhwVkhBejJBUUFpaWc5K2VqSEJDQWNGTHdRQkFRRDgvUDBBOWZ2OUFQbjgvc21NdE5kQ0FXYUtzWnJ3N3ZWbEJSUU8rVUgwN1FYNi92OEEwaFlZKytqZzdBY1dGdzJPQVZGOHF1RHk2L01mdlFnSy90QUQzd0g1QVFNQU4va2QvMEQ2OXdJY0d3L1lBVlo5cXVIRTYvWWVsUzRPL2lmZTFBRUNCQU1Benh3cS8xblI3d0ppSGc3YUFXK09zNXlzM2U1amx5VUorY2I1K3dVTUFnQUFLZ0lFKzJ6ZStBZFlKUk9SQVV5RnNBOGFCQURCeXUvNEx4bisvZ0FLQ2dZQTVQbjlBREFSQ2NuMEN3cENBV21RdFFEbjgvb09Id29EaXVmeStVVUdCQUwvRXdrRnRjdnM5bmtzRmd6MlFvcDJEWWg4WUlrQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL21haW4vbWF0Y2hlcy9yZW5uYWlzLmQ3ZjU5NzMwNDk0NzQwMGZiMjBmMDVlMmRhZTZiNWZiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEsXCJ3aWR0aFwiOjQ3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBWUFBQUExQk9VR0FBQUE2a2xFUVZSNDJtUFkzY0dqa2VIUGVUZkVndUhjVmdPRy9jK0R4Sys5U0ZZOSsyMkRnQUREdWpZOWMzVUdodjlIcTZ2L0gxKzY1UC9hcExUL1Qyd1lQdjdZNEN6QjBGYXE1cC9Jd1BELzE4SDl2eDlkdS9wbjlhcFYvMjdyTWZ6OE05Tk5sNkU2WHFxWGdZSGgvNjIrcnQrN2Vydi9MNnV1L3ZOUW11SC82d3FEVklaY2Y0RXR5c2JtLzkxTURINXY4UFA4L3pqWTg5ZlRZTy8venpOVStoZ2FFM2dtT0prWi9XZXdkUGkvSThqbjk5dW84UCtQdzkzL3Z5NlR6V0Q0ZjQ2Qm96V0dvVi9hZ09ITFJoMkIvNi85WkY4L3kyYW9aRUFHdTZhSXE1MnVrT241ZjBCZkdDWUdBTlpLWnNGYzIxdkhBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vYmFyY2EuNzVmOWUyMzBiZWI3OWUyODJkN2EwZjM2OWE2ZTY2NmUucG5nXCIsXCJoZWlnaHRcIjoyMjMsXCJ3aWR0aFwiOjIwNixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVlBQUFBMUJPVUdBQUFBODBsRVFWUjRuQUhvQUJmL0FaK0ZRRE1TR1J3cEJmZndHZkVBQU5jTTljMHQrQUlSM2ZuOEg4NEJzcDVhYkNzT1BKTUMzdklBQVN6ekFBZnBoUUR4QlNnQXovYzVRQUdZbUZ3MlJRQTV5UWZWOXZ3SVNmVUJCZTJBQStyN011d2w5bU1tQWN1a01hUWhJMFJiNStQMS9mY0Ird0lIOFp2L0dCc0FBdFRrUDNRQnBJeFdzdlhXQWszOUJBRDdDeEh3Qk8zbUgvc09Gd0VHRWlUM2d3R05oMTVyOTdrT2xBRVFCd0JEVnRMK3NYc3RBaEU1K0FBaFR3dzdBUUQvQUFHMGd5K1E1ZkkwWHhBSDhnL3krZzNwSlI3aGh1OXR2WklCbnFZdUFCN0cwZ0FWU2dBWThPcEROakZPT3IzTmpJUDE0NFlBQUxtellrVE81cWpRQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3Bzai5jZTRhYzMxOTZiOTAxMjgwY2RkYjliN2UxN2M0ODVmZS5wbmdcIixcImhlaWdodFwiOjIyNSxcIndpZHRoXCI6MjI0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUJBMGxFUVZSNDJtT0FnZUxKdXlLYjUreGYwckh3NEt6OENUdHNRV0tkOHc4d2dpVW5yVG8rZCtiYUUvL25iano5Zi9xYUUvOG5yVGo2djIvWjBSeXdaTU9jL1NrNTdSdi9GMHpmKzN0ai81cmZjeWR2L2xVK1krLy85TmFOLzVmdHZxVERVRHh4eDJhZnZDWC9HU3JYLzNsWjN2SC9RUG0wL3d4bGEzOUhsQ3ovMzcvc2FBbEQ5ZVNkYStYeWx2OC90bURyNzlzTlBmOGY5Yzc0djNEYTFsOG1CY3YvejF4OVBKOWh3dElqQVdHTkcvN1BuN0Q1Zi9IRWRiK256Tno4cTYxbDNmK1U3cTNmRHB5K284QUFkdTNDZ3pXeDNkdit4elJzK0ovWXRlMS83dVJkMytlc094bklnQXptcmpsdTJybGdmMVhmb29ORm0vZGVBdXZNNzlyTUJBQTRCSW02SEduaUF3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9wYXltZW50cy9jYXJkLjg1NzhkNWFhNjVkY2IzNWFkNDczN2NjZTgwNTEyMWFjLnBuZ1wiLFwiaGVpZ2h0XCI6Mzc3LFwid2lkdGhcIjo2OTQsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWprbEVRVlI0bkEzSnV3M0NNQkFHNFAvc1EwcU1qVUFDOFJnQk91bzA3TUFpRE1FT3JFQkpneGlBQlpBUWlKNE9Hb3BFam5PT1NmM1IrWExkdnQ2bEs5YUxXd0lFcElJbVNHc20xZEJvUmVYM3ZxTG9mVzUxRGFvRFVBbnl6UzhkYVVsemZHaDNlSjZFVmZTa1dtdFluT0dVWjl3NGJ1TElaWUdLL1NNTkxLTURDQk5zcGpGempLbnJZZHhuK1FQV2FDM3ZXTWQrVndBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL3BheW1lbnRzL3BheXBhbGwuZGM5OTAyNzRkOGQzNTUxMjY5ODcyNTg3YmMwNjE1YWEucG5nXCIsXCJoZWlnaHRcIjo2MSxcIndpZHRoXCI6MjUyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBQ0NBWUFBQUJsbEozdEFBQUFURWxFUVZSNG5HTmtNRzMreHFBcFBZWGgxTXYxREh4TVNneW55bmN3OUo2M1lSQVE0R0w0OSs4aEkwUEp0cHNNR21xWkRDa3ovak9ZaTVrd1BQN0N3WkRpL0pwQlNaR1o0ZmR2VVFEbjdSYXRackY5bmdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL3BheW1lbnRzL3BlbmRpbmcuZDQxNDc1M2IxNTZkMDc4YzI4NDUyZmJkNjAzY2Y4ZGMucG5nXCIsXCJoZWlnaHRcIjoxMzMsXCJ3aWR0aFwiOjE0MSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQU1BQUFEejBVNjVBQUFBYVZCTVZFWCtBQURUQUFEL0FBRCtBQUQvQUFCcUFBQnJBQUQvQUFEdkFBRC9BQUR2QUFEL0FBRDFqNC9ObUpqK0ZSWC9FUkhYMXRiTjE5Zi9GQlQrRmhiL0ZCVFh5OHZJME5EN2NuSzVoNGYvQUFEekFBRDZlWG43YzNPNWpvN1BnWUh5Ym02NWhZWC9BQUQxQUFERm5tcW1BQUFBRzNSU1RsTUFBQjhqS1Nzc3NyeTl2Y0htN3UvMitmbjUrdnIrL3Y3Ky92NVE5ajZyQUFBQVJFbEVRVlI0MmdWQWhSR0FJQUI4dTBpUmJ2WWYwZ1BtZzdGakJoWVNlNDlrd1ZXa3RiSmMrRUxUdW9VWHlsZGpxbGQ0a25CT3BBY3J6V05rdW1MYVRzN3ZmZm9CbTRVRVpGdVN1NElBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvcGF5bWVudHMvc3VjY2Vzcy40N2Y5NTBiNjU0OTg5MzY0MDAwMGIyN2ZmYjMxMzdlMS5wbmdcIixcImhlaWdodFwiOjEzMixcIndpZHRoXCI6MTQxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUE4a2xFUVZSNG5BSG5BQmovQVJtK0xnQUpBUVkrN3YvMmpnVUFBaS9yL3RUK1lndHExWDBZZGVIa0lkeFlBUmErTFVycS91UzFCZ0VVQUJvQkRmL2cvYzRCcVJpdEFQZmo5UUJnOEY1VEFRQzlIdUZIQ0RVZTFmdmYrK1Q2emdWcEVISC9YUUJYL1dYaGNBVFZGdDdnQVFDNkFQK2lENmI5QkFnRUExcnFWdis2R2IwQTFOdlVBWElMYi80ZkJERUNBUUMvR3VBMzd5Z2ZpUmVBKy9JVjlBUUg1d1FBUit4ay9BNFRDd1VBL1FEZ0FUSy9QMGZPLzhHMld2SmhBbklVYXdDazZLZ0FrQkdNQUJzQkwvN3QvL2hKQVNuQ053QUUvd1E2MC92TmpUTG5OekRURStjQUNRb0QwUGY4L1hNQ0FRSEdOREJsT1BnK1dDVUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkJhcl9jb250YWluZXJfX1QxdThlXCIsXG5cdFwiY29udGVudFwiOiBcIkJhcl9jb250ZW50X18xU3d0SVwiLFxuXHRcImJ1dHRvblwiOiBcIkJhcl9idXR0b25fXzJDdGw4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQcmVkaWN0aW9uUGF5bWVudHNfY29udGFpbmVyX18xT2JYblwiLFxuXHRcImNvbnRlbnRcIjogXCJQcmVkaWN0aW9uUGF5bWVudHNfY29udGVudF9fekdfeDZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkdhbWVJbmZvX2NvbnRhaW5lcl9fMkJJcDlcIixcblx0XCJjb250ZW50XCI6IFwiR2FtZUluZm9fY29udGVudF9fMl8zYzNcIixcblx0XCJ0ZWFtc1wiOiBcIkdhbWVJbmZvX3RlYW1zX18xOEJQTFwiLFxuXHRcInRlYW1PbmVcIjogXCJHYW1lSW5mb190ZWFtT25lX18xbTRzSlwiLFxuXHRcInRlYW1Ud29cIjogXCJHYW1lSW5mb190ZWFtVHdvX18xb0FrbFwiLFxuXHRcImdhbWVEZXRhaWxlc1wiOiBcIkdhbWVJbmZvX2dhbWVEZXRhaWxlc19fMWlXd0xcIixcblx0XCJnYW1lRGV0Q29udGVudFwiOiBcIkdhbWVJbmZvX2dhbWVEZXRDb250ZW50X18yVERZRVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiRGV0YWlsc19jb250YWluZXJfX3BnM1pDXCIsXG5cdFwicHJpY2VcIjogXCJEZXRhaWxzX3ByaWNlX18xZlJtM1wiLFxuXHRcImNob29zZVBheVN5c1wiOiBcIkRldGFpbHNfY2hvb3NlUGF5U3lzX18zRGhUWFwiLFxuXHRcImNob29zZVBheVN5c19jb250ZW50XCI6IFwiRGV0YWlsc19jaG9vc2VQYXlTeXNfY29udGVudF9fMVIzNXVcIixcblx0XCJidXR0b25cIjogXCJEZXRhaWxzX2J1dHRvbl9fWXJyMjBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBheW1lbnRQYXJ0X2NvbnRhaW5lcl9fRXN5NmVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkNhcmRGb3JtX2NvbnRhaW5lcl9fM2dTVjhcIixcblx0XCJjb250ZW50XCI6IFwiQ2FyZEZvcm1fY29udGVudF9fM1FXeU1cIixcblx0XCJpbnB1dF9zdWNjZXNzXCI6IFwiQ2FyZEZvcm1faW5wdXRfc3VjY2Vzc19fMnhKMDdcIixcblx0XCJpbnB1dF9lcnJvclwiOiBcIkNhcmRGb3JtX2lucHV0X2Vycm9yX182ZG1jUlwiLFxuXHRcIm5hbWVcIjogXCJDYXJkRm9ybV9uYW1lX18zaDcyc1wiLFxuXHRcImNhcmRfbnVtYmVyX2NvbnRlbnRcIjogXCJDYXJkRm9ybV9jYXJkX251bWJlcl9jb250ZW50X19UZGw5bVwiLFxuXHRcImNhcmRfbnVtYmVyX2lucHV0c1wiOiBcIkNhcmRGb3JtX2NhcmRfbnVtYmVyX2lucHV0c19fMUR6aWtcIixcblx0XCJjdnZcIjogXCJDYXJkRm9ybV9jdnZfXzJWS241XCIsXG5cdFwiYWN0aXZlX3VudGlsbFwiOiBcIkNhcmRGb3JtX2FjdGl2ZV91bnRpbGxfX0dTYUpTXCIsXG5cdFwic3VjY2Vzc1wiOiBcIkNhcmRGb3JtX3N1Y2Nlc3NfXzFzeGFQXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYXltZW50X2NvbnRhaW5lcl9fMmlfXy1cIixcblx0XCJjb250ZW50XCI6IFwiUGF5bWVudF9jb250ZW50X18xb092TlwiLFxuXHRcImltZ1wiOiBcIlBheW1lbnRfaW1nX18xNHMxR1wiLFxuXHRcImZvcm1cIjogXCJQYXltZW50X2Zvcm1fXzFMX1R3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQZW5kaW5nX2NvbnRhaW5lcl9fMzZ0TmdcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiUGVuZGluZ190cmFuc2l0aW9uX18ydHlmQlwiLFxuXHRcImNvbnRlbnRcIjogXCJQZW5kaW5nX2NvbnRlbnRfXzI5clppXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTdWNjZXNzX2NvbnRhaW5lcl9fMTcxN3ZcIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiU3VjY2Vzc190cmFuc2l0aW9uX18xdWhWRFwiLFxuXHRcImNvbnRlbnRcIjogXCJTdWNjZXNzX2NvbnRlbnRfXzFCakgtXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYXltZW50VGFiX2NvbnRhaW5lcl9fMjNqLXJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlByZWRpY3Rpb25UYWJfY29udGFpbmVyX18zT2dBWVwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJQcmVkaWN0aW9uVGFiX3RyYW5zaXRpb25fXzJMS1ZKXCIsXG5cdFwiYm9hcmRcIjogXCJQcmVkaWN0aW9uVGFiX2JvYXJkX18xRDNUSFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUm93X2NvbnRhaW5lcl9fM01ldTBcIixcblx0XCJjb250ZW50XCI6IFwiUm93X2NvbnRlbnRfXzNEcFVTXCIsXG5cdFwibGVmdFwiOiBcIlJvd19sZWZ0X18yX0Z0QlwiLFxuXHRcIm9yZGVyXCI6IFwiUm93X29yZGVyX19mZEFKSVwiLFxuXHRcInZzXCI6IFwiUm93X3ZzX19Ga0VqWVwiLFxuXHRcInRlYW1PbmVcIjogXCJSb3dfdGVhbU9uZV9fTEp2WXNcIixcblx0XCJ0ZWFtVHdvXCI6IFwiUm93X3RlYW1Ud29fXzJ3WmF0XCIsXG5cdFwicmlnaHRcIjogXCJSb3dfcmlnaHRfXzFfUFNTXCIsXG5cdFwicHJlZGljdGlvblwiOiBcIlJvd19wcmVkaWN0aW9uX19Mdm15MVwiLFxuXHRcInByZWRpY3Rpb25fY29udGVudFwiOiBcIlJvd19wcmVkaWN0aW9uX2NvbnRlbnRfXy02TVFPXCIsXG5cdFwicHJlZGljdGlvbl90aXRsZVwiOiBcIlJvd19wcmVkaWN0aW9uX3RpdGxlX18xLU1DdFwiLFxuXHRcInByZWRpY3Rpb25fYm9keVwiOiBcIlJvd19wcmVkaWN0aW9uX2JvZHlfXzNZLUU4XCIsXG5cdFwic2ltdWxhdG9yXCI6IFwiUm93X3NpbXVsYXRvcl9fMW94RjNcIixcblx0XCJkYXRlX3RpbWVcIjogXCJSb3dfZGF0ZV90aW1lX18yei1BbVwiLFxuXHRcImRhdGVcIjogXCJSb3dfZGF0ZV9fM3Q3alJcIixcblx0XCJ0eXBlXCI6IFwiUm93X3R5cGVfXzJnYWRNXCIsXG5cdFwiY29lZmZpY2VudFwiOiBcIlJvd19jb2VmZmljZW50X18yVklsbVwiLFxuXHRcInByaWNlXCI6IFwiUm93X3ByaWNlX19hNTFXclwiLFxuXHRcImJ1eUJ1dHRvbl9jb250YWluZXJcIjogXCJSb3dfYnV5QnV0dG9uX2NvbnRhaW5lcl9fXzQ0RWJcIixcblx0XCJidXR0b25fY29udGVudFwiOiBcIlJvd19idXR0b25fY29udGVudF9fQXZJcVJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRhYkhlYWRlcl9jb250YWluZXJfX3pOOG9PXCIsXG5cdFwiY29udGVudFwiOiBcIlRhYkhlYWRlcl9jb250ZW50X18zdDkzS1wiLFxuXHRcImZvcl90YWJsZXRzXCI6IFwiVGFiSGVhZGVyX2Zvcl90YWJsZXRzX18xTk9aQVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQnV0dG9uX2NvbnRhaW5lcl9fNDVLeURcIixcblx0XCJjb250ZW50XCI6IFwiQnV0dG9uX2NvbnRlbnRfXzE0RmxVXCIsXG5cdFwiYWN0aXZlXCI6IFwiQnV0dG9uX2FjdGl2ZV9fMU1EZzVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vZGFsQ29udGVpbmVyXCI6IFwiTW9kYWxfbW9kYWxDb250ZWluZXJfXzNnOElmXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIk1vZGFsX3RyYW5zaXRpb25fXzFrZnY5XCIsXG5cdFwibW9kYWxDb250ZW50XCI6IFwiTW9kYWxfbW9kYWxDb250ZW50X18xLU80N1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9