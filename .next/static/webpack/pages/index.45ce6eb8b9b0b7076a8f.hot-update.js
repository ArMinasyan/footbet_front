self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.jsx":
/*!***************************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.jsx ***!
  \***************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificDayMatchesBoard": function() { return /* binding */ SpecificDayMatchesBoard; }
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SpecificDayMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SpecificDayMatchesBoard.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss");
/* harmony import */ var _SpecificDayMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_SpecificDayMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");
/* harmony import */ var _common_Row_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Row/Row */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.jsx");
/* harmony import */ var _common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Row/RowTitle/RowTitle */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.jsx");
/* harmony import */ var _TDMatchesBoard_Arrows_Arrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TDMatchesBoard/Arrows/Arrow */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.jsx");
/* harmony import */ var _TDMatchesBoard_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TDMatchesBoard/Pagination/Pagination */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.jsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\SpecificDayMatchesBoard\\SpecificDayMatchesBoard.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// hooks
 // styles

 // components











function SpecificDayMatchesBoard(_ref) {
  _s();

  var _this = this;

  var day = _ref.day;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      firstPage = _useState[0],
      setFirstPage = _useState[1],
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      secondPage = _useState2[0],
      setSecondPage = _useState2[1],
      router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),
      _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(firstPage),
      firstPageItems = _useState3[0],
      upDateFirstPageItems = _useState3[1],
      _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(secondPage),
      secondPageItems = _useState4[0],
      upDateSecondPageItems = _useState4[1],
      _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      matches = _useState5[0],
      setMatches = _useState5[1];

  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    upDateFirstPageItems(matches.filter(function (el, i) {
      return i < 4;
    }));
    upDateSecondPageItems(matches.filter(function (el, i) {
      return i >= 4;
    }));
  }, [matches]);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_10__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_11__.GET_MATCHES_OF_SPECIFIC_DAY + day, {}, {
      auth: true
    }).then(function (matches) {
      var now = Date.now();
      setMatches(matches.data.data.map(function (match) {
        var matchTime = new Date("".concat(match.date.split(".").reverse().join("."), " ").concat(match.time)).getTime();
        var gameState = now < matchTime ? "dontStarted" : Math.abs(now - matchTime) < 9000000 ? "started" : "finished";
        return {
          id: match.id,
          date: match.date,
          time: match.time,
          gameState: ".rowOne.gameState.".concat(gameState),
          teamOneName: "",
          teamOneIcon: match.team1_img_path,
          teamTwoName: "",
          teamTwoIcon: match.team2_img_path,
          score: match.score,
          buyButtonName: ".rowOne.buyButton",
          coefficent: "",
          titleName: ".rowOne.title"
        };
      }));
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);

  function handleOnDragEndFirstPage(result) {
    if (!result.destination) return;

    var items = Array.from(firstPageItems),
        _items$splice = items.splice(result.source.index, 1),
        _items$splice2 = (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_items$splice, 1),
        reorderedItem = _items$splice2[0];

    items.splice(result.destination.index, 0, reorderedItem);
    upDateFirstPageItems(items);
  }

  function handleOnDragEndSecondPage(result) {
    if (!result.destination) return;

    var items = Array.from(secondPageItems),
        _items$splice3 = items.splice(result.source.index, 1),
        _items$splice4 = (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_items$splice3, 1),
        reorderedItem = _items$splice4[0];

    items.splice(result.destination.index, 0, reorderedItem);
    upDateSecondPageItems(items);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4__.default, {
    itemsToShow: 1,
    itemsToScroll: 1,
    renderArrow: _TDMatchesBoard_Arrows_Arrow__WEBPACK_IMPORTED_MODULE_7__.Arrow,
    renderPagination: _TDMatchesBoard_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_8__.Pagination,
    className: (_SpecificDayMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),
    enableSwipe: false // verticalMode
    ,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.DragDropContext, {
        onDragEnd: handleOnDragEndFirstPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.Droppable, {
          droppableId: "matchestodayMatchesFirst",
          children: function children(provided) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
              ref: provided.innerRef,
              style: {
                width: "100%"
              },
              children: [firstPageItems.map(function (el, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.Draggable, {
                  index: i,
                  draggableId: el.id,
                  children: function children(provided) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                      style: {
                        width: "100%"
                      }
                    }, provided.draggableProps), provided.dragHandleProps), {}, {
                      ref: provided.innerRef,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_Row__WEBPACK_IMPORTED_MODULE_5__.Row, {
                        date: el.date,
                        gameState: el.gameState,
                        teamOne: el.teamOneName,
                        teamOneIcon: el.teamOneIcon,
                        score: el.score,
                        teamTwo: el.teamTwoName,
                        teamTwoIcon: el.teamTwoIcon,
                        buyButtonName: el.buyButtonName,
                        titleName: el.titleName,
                        clickBuy: function clickBuy() {
                          return router.push({
                            pathname: "/prediction",
                            query: {
                              game: el.id
                            }
                          });
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 25
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 23
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.DragDropContext, {
        onDragEnd: handleOnDragEndSecondPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.Droppable, {
          droppableId: "matchestodayMatchesSecond",
          children: function children(provided) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
              ref: provided.innerRef,
              style: {
                width: "100%"
              },
              children: [secondPageItems.map(function (el, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.Draggable, {
                  index: i,
                  draggableId: el.id,
                  children: function children(provided) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                      style: {
                        width: "100%"
                      }
                    }, provided.draggableProps), provided.dragHandleProps), {}, {
                      ref: provided.innerRef,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_Row__WEBPACK_IMPORTED_MODULE_5__.Row, {
                        date: el.date,
                        gameState: el.gameState,
                        teamOne: el.teamOneName,
                        teamOneIcon: el.teamOneIcon,
                        score: el.score,
                        teamTwo: el.teamTwoName,
                        teamTwoIcon: el.teamTwoIcon,
                        buyButtonName: el.buyButtonName,
                        titleName: el.titleName,
                        clickBuy: function clickBuy() {
                          return router.push({
                            pathname: "/prediction",
                            query: {
                              game: el.id
                            }
                          });
                        }
                      }, Math.random(), false, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 25
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 23
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 19
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

_s(SpecificDayMatchesBoard, "7mEDzIsPwcvzb4vbhA+bj6YYvGc=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = SpecificDayMatchesBoard;

var _c;

$RefreshReg$(_c, "SpecificDayMatchesBoard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TodayMatches.jsx":
/*!*********************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TodayMatches.jsx ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayMatches": function() { return /* binding */ TodayMatches; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TMBody_SpecificDayMatchesBoard_SpecificDayMatchesBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard */ "./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.jsx");
/* harmony import */ var _TMBody_TDMatchesBoard_TDMatchesBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TMBody/TDMatchesBoard/TDMatchesBoard */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.jsx");
/* harmony import */ var _TMBody_TMMatchesBoard_TMMatchesBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TMBody/TMMatchesBoard/TMMatchesBoard */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.jsx");
/* harmony import */ var _TMHeader_TMHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TMHeader/TMHeader */ "./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.jsx");
/* harmony import */ var _TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodayMatches.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TodayMatches.module.scss");
/* harmony import */ var _TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TodayMatches.jsx",
    _s = $RefreshSig$();

// hooks and helpers

 // components



 // styles


function TodayMatches(_ref) {
  _s();

  var getSpecificDateMatches = _ref.getSpecificDateMatches;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      showTodayGames = _useState[0],
      setShowTodayGames = _useState[1],
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showTomorrowGames = _useState2[0],
      setShowTomorrowGames = _useState2[1],
      _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showSpecificDayMatches = _useState3[0],
      setShowSpecificDayMatches = _useState3[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_TodayMatches_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMHeader_TMHeader__WEBPACK_IMPORTED_MODULE_5__.TMHeader // TD => today games board shopw configs
    , {
      clickTD: function clickTD() {
        setShowTodayGames(true);
        setShowTomorrowGames(false);
      },
      TDBoardState: showTodayGames // TM => tommorow games board shopw configs
      ,
      clickTM: function clickTM() {
        setShowTodayGames(false);
        setShowTomorrowGames(true);
      },
      TMBoardState: showTomorrowGames,
      getSpecificDateMatches: function getSpecificDateMatches(value) {
        return console.log(value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), showSpecificDayMatches && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_SpecificDayMatchesBoard_SpecificDayMatchesBoard__WEBPACK_IMPORTED_MODULE_2__.SpecificDayMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 34
    }, this), showTodayGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TDMatchesBoard_TDMatchesBoard__WEBPACK_IMPORTED_MODULE_3__.TDMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 26
    }, this), showTomorrowGames && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMBody_TMMatchesBoard_TMMatchesBoard__WEBPACK_IMPORTED_MODULE_4__.TMMatchesBoard, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(TodayMatches, "ZVZ+t+Uebj8L3AEi4vOoN5Fow1Y=");

_c = TodayMatches;

var _c;

$RefreshReg$(_c, "TodayMatches");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss":
/*!***********************************************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss ***!
  \***********************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../../../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./SpecificDayMatchesBoard.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../../../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./SpecificDayMatchesBoard.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../../../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../../../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./SpecificDayMatchesBoard.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".SpecificDayMatchesBoard_container__1dAaS {\n  position: relative;\n  max-height: 560px;\n}\n.SpecificDayMatchesBoard_container__1dAaS * {\n  margin: 0 !important;\n}\n.SpecificDayMatchesBoard_container__1dAaS:first-child {\n  height: 0 !important;\n}", "",{"version":3,"sources":["webpack://SpecificDayMatchesBoard.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,iBAAA;AACJ;AAAI;EACI,oBAAA;AAER;AAAI;EACI,oBAAA;AAER","sourcesContent":[".container {\r\n    position: relative;\r\n    max-height:560px;\r\n    * {\r\n        margin: 0 !important;\r\n    }\r\n    &:first-child {\r\n        height: 0 !important;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "SpecificDayMatchesBoard_container__1dAaS"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9TcGVjaWZpY0RheU1hdGNoZXNCb2FyZC9TcGVjaWZpY0RheU1hdGNoZXNCb2FyZC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9Ub2RheU1hdGNoZXMuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2VzL01haW4vTWF0Y2hlcy9Ub2RheU1hdGNoZXMvVE1Cb2R5L1NwZWNpZmljRGF5TWF0Y2hlc0JvYXJkL1NwZWNpZmljRGF5TWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzPzEwZGEiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnZXMvTWFpbi9NYXRjaGVzL1RvZGF5TWF0Y2hlcy9UTUJvZHkvU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQvU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsiU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQiLCJkYXkiLCJ1c2VTdGF0ZSIsImZpcnN0UGFnZSIsInNldEZpcnN0UGFnZSIsInNlY29uZFBhZ2UiLCJzZXRTZWNvbmRQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlyc3RQYWdlSXRlbXMiLCJ1cERhdGVGaXJzdFBhZ2VJdGVtcyIsInNlY29uZFBhZ2VJdGVtcyIsInVwRGF0ZVNlY29uZFBhZ2VJdGVtcyIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZWwiLCJpIiwicmVxdWVzdCIsIkdFVF9NQVRDSEVTX09GX1NQRUNJRklDX0RBWSIsImF1dGgiLCJ0aGVuIiwibm93IiwiRGF0ZSIsImRhdGEiLCJtYXAiLCJtYXRjaCIsIm1hdGNoVGltZSIsImRhdGUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwidGltZSIsImdldFRpbWUiLCJnYW1lU3RhdGUiLCJNYXRoIiwiYWJzIiwiaWQiLCJ0ZWFtT25lTmFtZSIsInRlYW1PbmVJY29uIiwidGVhbTFfaW1nX3BhdGgiLCJ0ZWFtVHdvTmFtZSIsInRlYW1Ud29JY29uIiwidGVhbTJfaW1nX3BhdGgiLCJzY29yZSIsImJ1eUJ1dHRvbk5hbWUiLCJjb2VmZmljZW50IiwidGl0bGVOYW1lIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZSIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwiaXRlbXMiLCJBcnJheSIsImZyb20iLCJzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsInJlb3JkZXJlZEl0ZW0iLCJoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlIiwiQXJyb3ciLCJQYWdpbmF0aW9uIiwic3R5bGVzIiwid2lkdGgiLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZ2FtZSIsInJhbmRvbSIsInBsYWNlaG9sZGVyIiwibWluSGVpZ2h0IiwiVG9kYXlNYXRjaGVzIiwiZ2V0U3BlY2lmaWNEYXRlTWF0Y2hlcyIsInNob3dUb2RheUdhbWVzIiwic2V0U2hvd1RvZGF5R2FtZXMiLCJzaG93VG9tb3Jyb3dHYW1lcyIsInNldFNob3dUb21vcnJvd0dhbWVzIiwic2hvd1NwZWNpZmljRGF5TWF0Y2hlcyIsInNldFNob3dTcGVjaWZpY0RheU1hdGNoZXMiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSx1QkFBVCxPQUEwQztBQUFBOztBQUFBOztBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTzs7QUFBQSxrQkFFakJDLCtDQUFR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QUF1QixzQkFBc0IsR0FBRywrQ0FBK0MseUJBQXlCLEdBQUcseURBQXlELHlCQUF5QixHQUFHLE9BQU8sb0dBQW9HLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxxQ0FBcUMsMkJBQTJCLHlCQUF5QixXQUFXLGlDQUFpQyxTQUFTLHVCQUF1QixpQ0FBaUMsU0FBUyxLQUFLLHVCQUF1QjtBQUMzckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NWNlNmViOGI5YjBiNzA3NmE4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NwZWNpZmljRGF5TWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzXCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCI7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1wiO1xyXG5pbXBvcnQgeyBSb3dUaXRsZSB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1RpdGxlL1Jvd1RpdGxlXCI7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSBcIi4uL1RETWF0Y2hlc0JvYXJkL0Fycm93cy9BcnJvd1wiO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSBcIi4uL1RETWF0Y2hlc0JvYXJkL1BhZ2luYXRpb24vUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYlwiO1xyXG5pbXBvcnQgeyBHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQoeyBkYXkgfSkge1xyXG4gIGNvbnN0IFxyXG4gICAgW2ZpcnN0UGFnZSwgc2V0Rmlyc3RQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgIFtzZWNvbmRQYWdlLCBzZXRTZWNvbmRQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgW2ZpcnN0UGFnZUl0ZW1zLCB1cERhdGVGaXJzdFBhZ2VJdGVtc10gPSB1c2VTdGF0ZShmaXJzdFBhZ2UpLFxyXG4gICAgW3NlY29uZFBhZ2VJdGVtcywgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zXSA9IHVzZVN0YXRlKHNlY29uZFBhZ2UpLFxyXG4gICAgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMobWF0Y2hlcy5maWx0ZXIoKGVsLCBpKSA9PiBpIDwgNCkpO1xyXG4gICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA+PSA0KSk7XHJcbiAgfSwgW21hdGNoZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlcXVlc3QoR0VUX01BVENIRVNfT0ZfU1BFQ0lGSUNfREFZICsgZGF5LCB7fSwgeyBhdXRoOiB0cnVlIH0pXHJcbiAgICAgIC50aGVuKChtYXRjaGVzKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRNYXRjaGVzKFxyXG4gICAgICAgICAgbWF0Y2hlcy5kYXRhLmRhdGEubWFwKChtYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaFRpbWUgPSBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICBgJHttYXRjaC5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKX0gJHttYXRjaC50aW1lfWBcclxuICAgICAgICAgICAgKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWVTdGF0ZSA9XHJcbiAgICAgICAgICAgICAgbm93IDwgbWF0Y2hUaW1lXHJcbiAgICAgICAgICAgICAgICA/IGBkb250U3RhcnRlZGBcclxuICAgICAgICAgICAgICAgIDogTWF0aC5hYnMobm93IC0gbWF0Y2hUaW1lKSA8IDkwMDAwMDBcclxuICAgICAgICAgICAgICAgID8gXCJzdGFydGVkXCJcclxuICAgICAgICAgICAgICAgIDogXCJmaW5pc2hlZFwiO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGlkOiBtYXRjaC5pZCxcclxuICAgICAgICAgICAgICBkYXRlOiBtYXRjaC5kYXRlLFxyXG4gICAgICAgICAgICAgIHRpbWU6IG1hdGNoLnRpbWUsXHJcbiAgICAgICAgICAgICAgZ2FtZVN0YXRlOiBgLnJvd09uZS5nYW1lU3RhdGUuJHtnYW1lU3RhdGV9YCxcclxuICAgICAgICAgICAgICB0ZWFtT25lTmFtZTogYGAsXHJcbiAgICAgICAgICAgICAgdGVhbU9uZUljb246IG1hdGNoLnRlYW0xX2ltZ19wYXRoLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBtYXRjaC50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgICAgICBzY29yZTogbWF0Y2guc2NvcmUsXHJcbiAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogXCIucm93T25lLmJ1eUJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGVOYW1lOiBcIi5yb3dPbmUudGl0bGVcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZShyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oZmlyc3RQYWdlSXRlbXMpLFxyXG4gICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlKHJlc3VsdCkge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShzZWNvbmRQYWdlSXRlbXMpLFxyXG4gICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMoaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIGVuYWJsZVN3aXBlPXtmYWxzZX1cclxuICAgICAgLy8gdmVydGljYWxNb2RlXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2V9PlxyXG4gICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNGaXJzdFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtmaXJzdFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgaW5kZXg9e2l9IGtleT17TWF0aC5yYW5kb20oKX0gZHJhZ2dhYmxlSWQ9e2VsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lPXtlbC50aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9wcmVkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogXCIzNHB4XCIgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZX0+XHJcbiAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc1NlY29uZFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNvbmRQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGluZGV4PXtpfSBrZXk9e01hdGgucmFuZG9tKCl9IGRyYWdnYWJsZUlkPXtlbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiBcIjM0cHhcIiB9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTcGVjaWZpY0RheU1hdGNoZXNCb2FyZCB9IGZyb20gXCIuL1RNQm9keS9TcGVjaWZpY0RheU1hdGNoZXNCb2FyZC9TcGVjaWZpY0RheU1hdGNoZXNCb2FyZFwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFRETWF0Y2hlc0JvYXJkIH0gZnJvbSBcIi4vVE1Cb2R5L1RETWF0Y2hlc0JvYXJkL1RETWF0Y2hlc0JvYXJkXCI7XHJcbmltcG9ydCB7IFRNTWF0Y2hlc0JvYXJkIH0gZnJvbSBcIi4vVE1Cb2R5L1RNTWF0Y2hlc0JvYXJkL1RNTWF0Y2hlc0JvYXJkXCI7XHJcbmltcG9ydCB7IFRNSGVhZGVyIH0gZnJvbSBcIi4vVE1IZWFkZXIvVE1IZWFkZXJcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVG9kYXlNYXRjaGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9kYXlNYXRjaGVzKHsgZ2V0U3BlY2lmaWNEYXRlTWF0Y2hlcyB9KSB7XHJcbiAgY29uc3QgLy8gc3RhdGVzXHJcbiAgICBbc2hvd1RvZGF5R2FtZXMsIHNldFNob3dUb2RheUdhbWVzXSA9IHVzZVN0YXRlKHRydWUpLFxyXG4gICAgW3Nob3dUb21vcnJvd0dhbWVzLCBzZXRTaG93VG9tb3Jyb3dHYW1lc10gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICBbc2hvd1NwZWNpZmljRGF5TWF0Y2hlcywgc2V0U2hvd1NwZWNpZmljRGF5TWF0Y2hlc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxUTUhlYWRlclxyXG4gICAgICAgIC8vIFREID0+IHRvZGF5IGdhbWVzIGJvYXJkIHNob3B3IGNvbmZpZ3NcclxuICAgICAgICBjbGlja1REPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTaG93VG9kYXlHYW1lcyh0cnVlKTtcclxuICAgICAgICAgIHNldFNob3dUb21vcnJvd0dhbWVzKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIFREQm9hcmRTdGF0ZT17c2hvd1RvZGF5R2FtZXN9XHJcbiAgICAgICAgLy8gVE0gPT4gdG9tbW9yb3cgZ2FtZXMgYm9hcmQgc2hvcHcgY29uZmlnc1xyXG4gICAgICAgIGNsaWNrVE09eygpID0+IHtcclxuICAgICAgICAgIHNldFNob3dUb2RheUdhbWVzKGZhbHNlKTtcclxuICAgICAgICAgIHNldFNob3dUb21vcnJvd0dhbWVzKHRydWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgVE1Cb2FyZFN0YXRlPXtzaG93VG9tb3Jyb3dHYW1lc31cclxuICAgICAgICBnZXRTcGVjaWZpY0RhdGVNYXRjaGVzPXsodmFsdWUpID0+IGNvbnNvbGUubG9nKHZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICAge3Nob3dTcGVjaWZpY0RheU1hdGNoZXMgJiYgPFNwZWNpZmljRGF5TWF0Y2hlc0JvYXJkIC8+fVxyXG4gICAgICB7c2hvd1RvZGF5R2FtZXMgJiYgPFRETWF0Y2hlc0JvYXJkIC8+fVxyXG4gICAgICB7c2hvd1RvbW9ycm93R2FtZXMgJiYgPFRNTWF0Y2hlc0JvYXJkIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9TcGVjaWZpY0RheU1hdGNoZXNCb2FyZC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL1NwZWNpZmljRGF5TWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL1NwZWNpZmljRGF5TWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5TcGVjaWZpY0RheU1hdGNoZXNCb2FyZF9jb250YWluZXJfXzFkQWFTIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC1oZWlnaHQ6IDU2MHB4O1xcbn1cXG4uU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmRfY29udGFpbmVyX18xZEFhUyAqIHtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbn1cXG4uU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmRfY29udGFpbmVyX18xZEFhUzpmaXJzdC1jaGlsZCB7XFxuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL1NwZWNpZmljRGF5TWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSxvQkFBQTtBQUVSO0FBQUk7RUFDSSxvQkFBQTtBQUVSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1heC1oZWlnaHQ6NTYwcHg7XFxyXFxuICAgICoge1xcclxcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTcGVjaWZpY0RheU1hdGNoZXNCb2FyZF9jb250YWluZXJfXzFkQWFTXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==