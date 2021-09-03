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












function getDayWithSpecificFormat(day) {
  var d = new Date(day);
  var ye = new Intl.DateTimeFormat("en", {
    year: "numeric"
  }).format(d);
  var mo = new Intl.DateTimeFormat("en", {
    month: "2-digit"
  }).format(d);
  var da = new Intl.DateTimeFormat("en", {
    day: "2-digit"
  }).format(d);
  return "".concat(da, ".").concat(mo, ".").concat(ye);
}

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

  console.log(matches);
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
                        lineNumber: 126,
                        columnNumber: 25
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 23
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
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
                        lineNumber: 173,
                        columnNumber: 25
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 167,
                      columnNumber: 23
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9TcGVjaWZpY0RheU1hdGNoZXNCb2FyZC9TcGVjaWZpY0RheU1hdGNoZXNCb2FyZC5qc3giXSwibmFtZXMiOlsiZ2V0RGF5V2l0aFNwZWNpZmljRm9ybWF0IiwiZGF5IiwiZCIsIkRhdGUiLCJ5ZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInllYXIiLCJmb3JtYXQiLCJtbyIsIm1vbnRoIiwiZGEiLCJTcGVjaWZpY0RheU1hdGNoZXNCb2FyZCIsInVzZVN0YXRlIiwiZmlyc3RQYWdlIiwic2V0Rmlyc3RQYWdlIiwic2Vjb25kUGFnZSIsInNldFNlY29uZFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmaXJzdFBhZ2VJdGVtcyIsInVwRGF0ZUZpcnN0UGFnZUl0ZW1zIiwic2Vjb25kUGFnZUl0ZW1zIiwidXBEYXRlU2Vjb25kUGFnZUl0ZW1zIiwibWF0Y2hlcyIsInNldE1hdGNoZXMiLCJ1c2VFZmZlY3QiLCJmaWx0ZXIiLCJlbCIsImkiLCJyZXF1ZXN0IiwiR0VUX01BVENIRVNfT0ZfU1BFQ0lGSUNfREFZIiwiYXV0aCIsInRoZW4iLCJub3ciLCJkYXRhIiwibWFwIiwibWF0Y2giLCJtYXRjaFRpbWUiLCJkYXRlIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsInRpbWUiLCJnZXRUaW1lIiwiZ2FtZVN0YXRlIiwiTWF0aCIsImFicyIsImlkIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW0xX2ltZ19wYXRoIiwidGVhbVR3b05hbWUiLCJ0ZWFtVHdvSWNvbiIsInRlYW0yX2ltZ19wYXRoIiwic2NvcmUiLCJidXlCdXR0b25OYW1lIiwiY29lZmZpY2VudCIsInRpdGxlTmFtZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2UiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJyZW9yZGVyZWRJdGVtIiwiaGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZSIsIkFycm93IiwiUGFnaW5hdGlvbiIsInN0eWxlcyIsIndpZHRoIiwicHJvdmlkZWQiLCJkcm9wcGFibGVQcm9wcyIsImlubmVyUmVmIiwiZHJhZ2dhYmxlUHJvcHMiLCJkcmFnSGFuZGxlUHJvcHMiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImdhbWUiLCJyYW5kb20iLCJwbGFjZWhvbGRlciIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esd0JBQVQsQ0FBa0NDLEdBQWxDLEVBQXVDO0FBRXJDLE1BQUlDLENBQUMsR0FBRyxJQUFJQyxJQUFKLENBQVNGLEdBQVQsQ0FBUjtBQUNBLE1BQUlHLEVBQUUsR0FBRyxJQUFJQyxJQUFJLENBQUNDLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEI7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBOUIsRUFBbURDLE1BQW5ELENBQTBETixDQUExRCxDQUFUO0FBQ0EsTUFBSU8sRUFBRSxHQUFHLElBQUlKLElBQUksQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixFQUE4QjtBQUFFSSxTQUFLLEVBQUU7QUFBVCxHQUE5QixFQUFvREYsTUFBcEQsQ0FBMkROLENBQTNELENBQVQ7QUFDQSxNQUFJUyxFQUFFLEdBQUcsSUFBSU4sSUFBSSxDQUFDQyxjQUFULENBQXdCLElBQXhCLEVBQThCO0FBQUVMLE9BQUcsRUFBRTtBQUFQLEdBQTlCLEVBQWtETyxNQUFsRCxDQUF5RE4sQ0FBekQsQ0FBVDtBQUVBLG1CQUFVUyxFQUFWLGNBQWdCRixFQUFoQixjQUFzQkwsRUFBdEI7QUFFRDs7QUFFTSxTQUFTUSx1QkFBVCxP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QUFBQTtBQUFBLGNBREYsZUE2Q0UsOERBQUMsbUVBQUQ7QUFBVSxpQkFBUyxFQUFFO0FBQUVDLG1CQUFTLEVBQUU7QUFBYjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBHRDs7R0FoTGU1RSx1QjtVQUdITyw4RDs7O0tBSEdQLHVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE4ZDFkMzY2OTI1NTYwMzE2YjgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQubW9kdWxlLnNjc3NcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIjtcclxuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uL2NvbW1vbi9Sb3cvUm93XCI7XHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSBcIi4uL2NvbW1vbi9Sb3cvUm93VGl0bGUvUm93VGl0bGVcIjtcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tIFwiLi4vVERNYXRjaGVzQm9hcmQvQXJyb3dzL0Fycm93XCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwiLi4vVERNYXRjaGVzQm9hcmQvUGFnaW5hdGlvbi9QYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliXCI7XHJcbmltcG9ydCB7IEdFVF9NQVRDSEVTX09GX1NQRUNJRklDX0RBWSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldERheVdpdGhTcGVjaWZpY0Zvcm1hdChkYXkpIHtcclxuXHJcbiAgbGV0IGQgPSBuZXcgRGF0ZShkYXkpO1xyXG4gIGxldCB5ZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW5cIiwgeyB5ZWFyOiBcIm51bWVyaWNcIiB9KS5mb3JtYXQoZCk7XHJcbiAgbGV0IG1vID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlblwiLCB7IG1vbnRoOiBcIjItZGlnaXRcIiB9KS5mb3JtYXQoZCk7XHJcbiAgbGV0IGRhID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlblwiLCB7IGRheTogXCIyLWRpZ2l0XCIgfSkuZm9ybWF0KGQpO1xyXG4gIFxyXG4gIHJldHVybiBgJHtkYX0uJHttb30uJHt5ZX1gO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNwZWNpZmljRGF5TWF0Y2hlc0JvYXJkKHsgZGF5IH0pIHtcclxuICBjb25zdCBbZmlyc3RQYWdlLCBzZXRGaXJzdFBhZ2VdID0gdXNlU3RhdGUoW10pLFxyXG4gICAgW3NlY29uZFBhZ2UsIHNldFNlY29uZFBhZ2VdID0gdXNlU3RhdGUoW10pLFxyXG4gICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICBbZmlyc3RQYWdlSXRlbXMsIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zXSA9IHVzZVN0YXRlKGZpcnN0UGFnZSksXHJcbiAgICBbc2Vjb25kUGFnZUl0ZW1zLCB1cERhdGVTZWNvbmRQYWdlSXRlbXNdID0gdXNlU3RhdGUoc2Vjb25kUGFnZSksXHJcbiAgICBbbWF0Y2hlcywgc2V0TWF0Y2hlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyhtYXRjaGVzLmZpbHRlcigoZWwsIGkpID0+IGkgPCA0KSk7XHJcbiAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMobWF0Y2hlcy5maWx0ZXIoKGVsLCBpKSA9PiBpID49IDQpKTtcclxuICB9LCBbbWF0Y2hlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVxdWVzdChHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkgKyBkYXksIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKG1hdGNoZXMpID0+IHtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldE1hdGNoZXMoXHJcbiAgICAgICAgICBtYXRjaGVzLmRhdGEuZGF0YS5tYXAoKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoVGltZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgIGAke21hdGNoLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke21hdGNoLnRpbWV9YFxyXG4gICAgICAgICAgICApLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXRlID1cclxuICAgICAgICAgICAgICBub3cgPCBtYXRjaFRpbWVcclxuICAgICAgICAgICAgICAgID8gYGRvbnRTdGFydGVkYFxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLmFicyhub3cgLSBtYXRjaFRpbWUpIDwgOTAwMDAwMFxyXG4gICAgICAgICAgICAgICAgPyBcInN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAgICAgOiBcImZpbmlzaGVkXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IG1hdGNoLmlkLFxyXG4gICAgICAgICAgICAgIGRhdGU6IG1hdGNoLmRhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogbWF0Y2gudGltZSxcclxuICAgICAgICAgICAgICBnYW1lU3RhdGU6IGAucm93T25lLmdhbWVTdGF0ZS4ke2dhbWVTdGF0ZX1gLFxyXG4gICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBgYCxcclxuICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b0ljb246IG1hdGNoLnRlYW0yX2ltZ19wYXRoLFxyXG4gICAgICAgICAgICAgIHNjb3JlOiBtYXRjaC5zY29yZSxcclxuICAgICAgICAgICAgICBidXlCdXR0b25OYW1lOiBcIi5yb3dPbmUuYnV5QnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgY29lZmZpY2VudDogXCJcIixcclxuICAgICAgICAgICAgICB0aXRsZU5hbWU6IFwiLnJvd09uZS50aXRsZVwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlKHJlc3VsdCkge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShmaXJzdFBhZ2VJdGVtcyksXHJcbiAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcclxuICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pO1xyXG5cclxuICAgIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zKGl0ZW1zKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UocmVzdWx0KSB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHNlY29uZFBhZ2VJdGVtcyksXHJcbiAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcclxuICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pO1xyXG5cclxuICAgIHVwRGF0ZVNlY29uZFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhtYXRjaGVzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIGVuYWJsZVN3aXBlPXtmYWxzZX1cclxuICAgICAgLy8gdmVydGljYWxNb2RlXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2V9PlxyXG4gICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNGaXJzdFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtmaXJzdFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgaW5kZXg9e2l9IGtleT17TWF0aC5yYW5kb20oKX0gZHJhZ2dhYmxlSWQ9e2VsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lPXtlbC50aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9wcmVkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogXCIzNHB4XCIgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZX0+XHJcbiAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc1NlY29uZFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNvbmRQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGluZGV4PXtpfSBrZXk9e01hdGgucmFuZG9tKCl9IGRyYWdnYWJsZUlkPXtlbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiBcIjM0cHhcIiB9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9