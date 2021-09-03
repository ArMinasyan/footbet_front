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
  var d = new Date(2010, 7, 5);
  var ye = new Intl.DateTimeFormat("en", {
    year: "numeric"
  }).format(d);
  var mo = new Intl.DateTimeFormat("en", {
    month: "numeric"
  }).format(d);
  var da = new Intl.DateTimeFormat("en", {
    day: "2-digit"
  }).format(d);
  console.log("".concat(da, "-").concat(mo, "-").concat(ye));

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

  console.log(day);
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
                        lineNumber: 123,
                        columnNumber: 25
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 23
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
                        lineNumber: 170,
                        columnNumber: 25
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 23
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 19
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9TcGVjaWZpY0RheU1hdGNoZXNCb2FyZC9TcGVjaWZpY0RheU1hdGNoZXNCb2FyZC5qc3giXSwibmFtZXMiOlsiU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQiLCJkYXkiLCJkIiwiRGF0ZSIsInllIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwieWVhciIsImZvcm1hdCIsIm1vIiwibW9udGgiLCJkYSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImZpcnN0UGFnZSIsInNldEZpcnN0UGFnZSIsInNlY29uZFBhZ2UiLCJzZXRTZWNvbmRQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlyc3RQYWdlSXRlbXMiLCJ1cERhdGVGaXJzdFBhZ2VJdGVtcyIsInNlY29uZFBhZ2VJdGVtcyIsInVwRGF0ZVNlY29uZFBhZ2VJdGVtcyIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZWwiLCJpIiwicmVxdWVzdCIsIkdFVF9NQVRDSEVTX09GX1NQRUNJRklDX0RBWSIsImF1dGgiLCJ0aGVuIiwibm93IiwiZGF0YSIsIm1hcCIsIm1hdGNoIiwibWF0Y2hUaW1lIiwiZGF0ZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJ0aW1lIiwiZ2V0VGltZSIsImdhbWVTdGF0ZSIsIk1hdGgiLCJhYnMiLCJpZCIsInRlYW1PbmVOYW1lIiwidGVhbU9uZUljb24iLCJ0ZWFtMV9pbWdfcGF0aCIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJ0ZWFtMl9pbWdfcGF0aCIsInNjb3JlIiwiYnV5QnV0dG9uTmFtZSIsImNvZWZmaWNlbnQiLCJ0aXRsZU5hbWUiLCJlcnIiLCJoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2UiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJyZW9yZGVyZWRJdGVtIiwiaGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZSIsIkFycm93IiwiUGFnaW5hdGlvbiIsInN0eWxlcyIsIndpZHRoIiwicHJvdmlkZWQiLCJkcm9wcGFibGVQcm9wcyIsImlubmVyUmVmIiwiZHJhZ2dhYmxlUHJvcHMiLCJkcmFnSGFuZGxlUHJvcHMiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImdhbWUiLCJyYW5kb20iLCJwbGFjZWhvbGRlciIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSx1QkFBVCxPQUEwQztBQUFBOztBQUFBOztBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTztBQUUvQyxNQUFJQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBQVI7QUFDQSxNQUFJQyxFQUFFLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxjQUFULENBQXdCLElBQXhCLEVBQThCO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQTlCLEVBQW1EQyxNQUFuRCxDQUEwRE4sQ0FBMUQsQ0FBVDtBQUNBLE1BQUlPLEVBQUUsR0FBRyxJQUFJSixJQUFJLENBQUNDLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEI7QUFBRUksU0FBSyxFQUFFO0FBQVQsR0FBOUIsRUFBb0RGLE1BQXBELENBQTJETixDQUEzRCxDQUFUO0FBQ0EsTUFBSVMsRUFBRSxHQUFHLElBQUlOLElBQUksQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixFQUE4QjtBQUFFTCxPQUFHLEVBQUU7QUFBUCxHQUE5QixFQUFrRE8sTUFBbEQsQ0FBeUROLENBQXpELENBQVQ7QUFDQVUsU0FBTyxDQUFDQyxHQUFSLFdBQWVGLEVBQWYsY0FBcUJGLEVBQXJCLGNB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QUFBO0FBQUE7QUFBQSxjQURGLGVBNkNFLDhEQUFDLG1FQUFEO0FBQVUsaUJBQVMsRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwR0Q7O0dBeExldkYsdUI7VUFVSG9CLDhEOzs7S0FWR3BCLHVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3MmI5MjliZDAyMjY4ZmYyMjdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3BlY2lmaWNEYXlNYXRjaGVzQm9hcmQubW9kdWxlLnNjc3NcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIjtcclxuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uL2NvbW1vbi9Sb3cvUm93XCI7XHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSBcIi4uL2NvbW1vbi9Sb3cvUm93VGl0bGUvUm93VGl0bGVcIjtcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tIFwiLi4vVERNYXRjaGVzQm9hcmQvQXJyb3dzL0Fycm93XCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwiLi4vVERNYXRjaGVzQm9hcmQvUGFnaW5hdGlvbi9QYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliXCI7XHJcbmltcG9ydCB7IEdFVF9NQVRDSEVTX09GX1NQRUNJRklDX0RBWSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTcGVjaWZpY0RheU1hdGNoZXNCb2FyZCh7IGRheSB9KSB7XHJcbiAgXHJcbiAgbGV0IGQgPSBuZXcgRGF0ZSgyMDEwLCA3LCA1KTtcclxuICBsZXQgeWUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuXCIsIHsgeWVhcjogXCJudW1lcmljXCIgfSkuZm9ybWF0KGQpO1xyXG4gIGxldCBtbyA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW5cIiwgeyBtb250aDogXCJudW1lcmljXCIgfSkuZm9ybWF0KGQpO1xyXG4gIGxldCBkYSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW5cIiwgeyBkYXk6IFwiMi1kaWdpdFwiIH0pLmZvcm1hdChkKTtcclxuICBjb25zb2xlLmxvZyhgJHtkYX0tJHttb30tJHt5ZX1gKTtcclxuXHJcbiAgY29uc3QgW2ZpcnN0UGFnZSwgc2V0Rmlyc3RQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgIFtzZWNvbmRQYWdlLCBzZXRTZWNvbmRQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgW2ZpcnN0UGFnZUl0ZW1zLCB1cERhdGVGaXJzdFBhZ2VJdGVtc10gPSB1c2VTdGF0ZShmaXJzdFBhZ2UpLFxyXG4gICAgW3NlY29uZFBhZ2VJdGVtcywgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zXSA9IHVzZVN0YXRlKHNlY29uZFBhZ2UpLFxyXG4gICAgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyhtYXRjaGVzLmZpbHRlcigoZWwsIGkpID0+IGkgPCA0KSk7XHJcbiAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMobWF0Y2hlcy5maWx0ZXIoKGVsLCBpKSA9PiBpID49IDQpKTtcclxuICB9LCBbbWF0Y2hlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVxdWVzdChHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkgKyBkYXksIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKG1hdGNoZXMpID0+IHtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldE1hdGNoZXMoXHJcbiAgICAgICAgICBtYXRjaGVzLmRhdGEuZGF0YS5tYXAoKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoVGltZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgIGAke21hdGNoLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke21hdGNoLnRpbWV9YFxyXG4gICAgICAgICAgICApLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXRlID1cclxuICAgICAgICAgICAgICBub3cgPCBtYXRjaFRpbWVcclxuICAgICAgICAgICAgICAgID8gYGRvbnRTdGFydGVkYFxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLmFicyhub3cgLSBtYXRjaFRpbWUpIDwgOTAwMDAwMFxyXG4gICAgICAgICAgICAgICAgPyBcInN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAgICAgOiBcImZpbmlzaGVkXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IG1hdGNoLmlkLFxyXG4gICAgICAgICAgICAgIGRhdGU6IG1hdGNoLmRhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogbWF0Y2gudGltZSxcclxuICAgICAgICAgICAgICBnYW1lU3RhdGU6IGAucm93T25lLmdhbWVTdGF0ZS4ke2dhbWVTdGF0ZX1gLFxyXG4gICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBgYCxcclxuICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b0ljb246IG1hdGNoLnRlYW0yX2ltZ19wYXRoLFxyXG4gICAgICAgICAgICAgIHNjb3JlOiBtYXRjaC5zY29yZSxcclxuICAgICAgICAgICAgICBidXlCdXR0b25OYW1lOiBcIi5yb3dPbmUuYnV5QnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgY29lZmZpY2VudDogXCJcIixcclxuICAgICAgICAgICAgICB0aXRsZU5hbWU6IFwiLnJvd09uZS50aXRsZVwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlKHJlc3VsdCkge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShmaXJzdFBhZ2VJdGVtcyksXHJcbiAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcclxuICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pO1xyXG5cclxuICAgIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zKGl0ZW1zKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UocmVzdWx0KSB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHNlY29uZFBhZ2VJdGVtcyksXHJcbiAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcclxuICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pO1xyXG5cclxuICAgIHVwRGF0ZVNlY29uZFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhtYXRjaGVzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIGVuYWJsZVN3aXBlPXtmYWxzZX1cclxuICAgICAgLy8gdmVydGljYWxNb2RlXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2V9PlxyXG4gICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNGaXJzdFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtmaXJzdFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgaW5kZXg9e2l9IGtleT17TWF0aC5yYW5kb20oKX0gZHJhZ2dhYmxlSWQ9e2VsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lPXtlbC50aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9wcmVkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogXCIzNHB4XCIgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZX0+XHJcbiAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc1NlY29uZFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNvbmRQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGluZGV4PXtpfSBrZXk9e01hdGgucmFuZG9tKCl9IGRyYWdnYWJsZUlkPXtlbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiBcIjM0cHhcIiB9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9