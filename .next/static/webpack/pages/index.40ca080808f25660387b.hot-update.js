self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.jsx":
/*!*********************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.jsx ***!
  \*********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TMMatchesBoard": function() { return /* binding */ TMMatchesBoard; }
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TMMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TMMatchesBoard.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.module.scss");
/* harmony import */ var _TMMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_TMMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");
/* harmony import */ var _common_Row_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Row/Row */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.jsx");
/* harmony import */ var _common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Row/RowTitle/RowTitle */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.jsx");
/* harmony import */ var _TDMatchesBoard_Arrows_Arrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../TDMatchesBoard/Arrows/Arrow */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.jsx");
/* harmony import */ var _TDMatchesBoard_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../TDMatchesBoard/Pagination/Pagination */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.jsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\TMMatchesBoard\\TMMatchesBoard.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// hooks
 // styles

 // components











function TMMatchesBoard() {
  _s();

  var _this = this;

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
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_10__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_11__.GET_MATCHES_OF_NEXT_DAY, {}, {
      auth: true
    }).then(function (matches) {
      var now = Date.now();
      setMatches(matches.data.data.map(function (match) {
        var matchTime = new Date("".concat(match.date.split(".").reverse().join("."), " ").concat(match.time)).getTime();
        var gameState = now < matchTime ? "dontStarted" : Math.abs(now - matchTime) < 9000000 ? 'started' : 'finished';
        return {
          id: match.id,
          date: match.date,
          time: match.time,
          gameState: ".rowOne.gameState.".concat(gameState),
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
    className: (_TMMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),
    enableSwipe: false // verticalMode
    ,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.DragDropContext, {
        onDragEnd: handleOnDragEndFirstPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.Droppable, {
          droppableId: "matchestodayMatchesFirst",
          children: function children(provided) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
              ref: provided.innerRef,
              style: {
                width: '100%'
              },
              children: [firstPageItems.map(function (el, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.Draggable, {
                  index: i,
                  draggableId: el.id,
                  children: function children(provided) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                      style: {
                        width: '100%'
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
                            pathname: '/prediction',
                            query: {
                              game: el.id
                            }
                          });
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 53
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 49
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 37
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.DragDropContext, {
        onDragEnd: handleOnDragEndSecondPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.Droppable, {
          droppableId: "matchestodayMatchesSecond",
          children: function children(provided) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
              ref: provided.innerRef,
              style: {
                width: '100%'
              },
              children: [secondPageItems.map(function (el, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__.Draggable, {
                  index: i,
                  draggableId: el.id,
                  children: function children(provided) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
                      style: {
                        width: '100%'
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
                            pathname: '/prediction',
                            query: {
                              game: el.id
                            }
                          });
                        }
                      }, Math.random(), false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 49
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 45
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 29
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
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

_s(TMMatchesBoard, "Ze3y7I3CeItngGi+5E9AouU8mPM=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = TMMatchesBoard;

var _c;

$RefreshReg$(_c, "TMMatchesBoard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9UTU1hdGNoZXNCb2FyZC9UTU1hdGNoZXNCb2FyZC5qc3giXSwibmFtZXMiOlsiVE1NYXRjaGVzQm9hcmQiLCJ1c2VTdGF0ZSIsImZpcnN0UGFnZSIsInNldEZpcnN0UGFnZSIsInNlY29uZFBhZ2UiLCJzZXRTZWNvbmRQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlyc3RQYWdlSXRlbXMiLCJ1cERhdGVGaXJzdFBhZ2VJdGVtcyIsInNlY29uZFBhZ2VJdGVtcyIsInVwRGF0ZVNlY29uZFBhZ2VJdGVtcyIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZWwiLCJpIiwicmVxdWVzdCIsIkdFVF9NQVRDSEVTX09GX05FWFRfREFZIiwiYXV0aCIsInRoZW4iLCJub3ciLCJEYXRlIiwiZGF0YSIsIm1hcCIsIm1hdGNoIiwibWF0Y2hUaW1lIiwiZGF0ZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJ0aW1lIiwiZ2V0VGltZSIsImdhbWVTdGF0ZSIsIk1hdGgiLCJhYnMiLCJpZCIsInRlYW1PbmVOYW1lIiwidGVhbU9uZUljb24iLCJ0ZWFtMV9pbWdfcGF0aCIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJ0ZWFtMl9pbWdfcGF0aCIsInNjb3JlIiwiYnV5QnV0dG9uTmFtZSIsImNvZWZmaWNlbnQiLCJ0aXRsZU5hbWUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJpdGVtcyIsIkFycmF5IiwiZnJvbSIsInNwbGljZSIsInNvdXJjZSIsImluZGV4IiwicmVvcmRlcmVkSXRlbSIsImhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UiLCJBcnJvdyIsIlBhZ2luYXRpb24iLCJzdHlsZXMiLCJ3aWR0aCIsInByb3ZpZGVkIiwiZHJvcHBhYmxlUHJvcHMiLCJpbm5lclJlZiIsImRyYWdnYWJsZVByb3BzIiwiZHJhZ0hhbmRsZVByb3BzIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJnYW1lIiwicmFuZG9tIiwicGxhY2Vob2xkZXIiLCJtaW5IZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUFBOztBQUFBLGtCQUdLQywrQ0FBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBLE1BR3ZCQyxTQUh1QjtBQUFBLE1BR1pDLFlBSFk7QUFBQSxtQkFJTUYsK0NBQVEsQ0FBQyxFQUFELENBSmQ7QUFBQSxNQUl2QkcsVUFKdUI7QUFBQSxNQUlYQyxhQUpXO0FBQUEsTUFLekJDLE1BTHlCLEdBS2hCQyxrRUFBUyxFQUxPO0FBQUEsbUJBTWdCTiwrQ0FBUSxDQUFDQyxTQUFELENBTnhCO0FBQUEsTUFNeEJNLGNBTndCO0FBQUEsTUFNUkMsb0JBTlE7QUFBQSxtQkFPa0JSLCtDQUFRLENBQUNHLFVBQUQsQ0FQMUI7QUFBQSxNQU94Qk0sZUFQd0I7QUFBQSxNQU9QQyxxQkFQTztBQUFBLG1CQVFDViwrQ0FBUSxDQUFFLEVBQUYsQ0FSVDtBQUFBLE1BUXZCVyxPQVJ1QjtBQUFBLE1BUWRDLFVBUmM7O0FBVTdCQyxrREFBUyxDQUFFLFlBQU07QUFDYkwsd0JBQW9CLENBQUVHLE9BQU8sQ0FBQ0csTUFBUixDQUFlLFVBQUNDLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLGFBQVdBLENBQUMsR0FBRyxDQUFmO0FBQUEsS0FBZixDQUFGLENBQXBCO0FBQ0FOLHlCQUFxQixDQUFFQyxPQUFPLENBQUNHLE1BQVIsQ0FBZSxVQUFDQyxFQUFELEVBQUtDLENBQUw7QUFBQSxhQUFXQSxDQUFDLElBQUksQ0FBaEI7QUFBQSxL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U0YsSUFBSSxDQUFDd0MsTUFBTCxFQVZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURIO0FBQUE7QUFMTCxtQkFFU3hDLElBQUksQ0FBQ3dDLE1BQUwsRUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURpQjtBQUFBLGVBQXBCLENBREwsRUFtQ0tULFFBQVEsQ0FBQ1UsV0FuQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURIO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBNENJLDhEQUFDLG1FQUFEO0FBQVUsaUJBQVMsRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0R0g7O0dBMUtlN0UsYztVQUtDTyw4RDs7O0tBTERQLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDBjYTA4MDgwOGYyNTY2MDM4N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RNTWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1wiXHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSAnLi4vY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZSdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuLy4uL1RETWF0Y2hlc0JvYXJkL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vLi4vVERNYXRjaGVzQm9hcmQvUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVE1NYXRjaGVzQm9hcmQoKSB7ICBcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIFsgZmlyc3RQYWdlLCBzZXRGaXJzdFBhZ2UgXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICBbIHNlY29uZFBhZ2UsIHNldFNlY29uZFBhZ2VdID0gdXNlU3RhdGUoW10pLFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIFtmaXJzdFBhZ2VJdGVtcywgdXBEYXRlRmlyc3RQYWdlSXRlbXNdID0gdXNlU3RhdGUoZmlyc3RQYWdlKSxcclxuICAgICAgICBbc2Vjb25kUGFnZUl0ZW1zLCB1cERhdGVTZWNvbmRQYWdlSXRlbXNdID0gdXNlU3RhdGUoc2Vjb25kUGFnZSksXHJcbiAgICAgICAgWyBtYXRjaGVzLCBzZXRNYXRjaGVzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyggbWF0Y2hlcy5maWx0ZXIoKGVsLCBpKSA9PiBpIDwgNCkgKTtcclxuICAgICAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMoIG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA+PSA0KSApO1xyXG4gICAgfSwgW21hdGNoZXNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHsgICAgICAgIFxyXG4gICAgICAgIHJlcXVlc3QoIEdFVF9NQVRDSEVTX09GX05FWFRfREFZLCB7fSwgeyBhdXRoOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCBtYXRjaGVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBzZXRNYXRjaGVzKCBtYXRjaGVzLmRhdGEuZGF0YS5tYXAoIG1hdGNoID0+IHsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hUaW1lID0gKG5ldyBEYXRlKGAke21hdGNoLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke21hdGNoLnRpbWV9YCkpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXRlID0gbm93IDwgbWF0Y2hUaW1lICA/IGBkb250U3RhcnRlZGAgOiBNYXRoLmFicyhub3ctbWF0Y2hUaW1lKSA8IDkwMDAwMDAgPyAnc3RhcnRlZCcgOiAnZmluaXNoZWQnO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBtYXRjaC5pZCxcclxuICAgICAgICAgICAgICBkYXRlOiBtYXRjaC5kYXRlLFxyXG4gICAgICAgICAgICAgIHRpbWU6IG1hdGNoLnRpbWUsXHJcbiAgICAgICAgICAgICAgZ2FtZVN0YXRlOiBgLnJvd09uZS5nYW1lU3RhdGUuJHtnYW1lU3RhdGV9YCxcclxuICAgICAgICAgICAgICB0ZWFtT25lTmFtZTogbWF0Y2gudGVhbU9uZU5hbWUsXHJcbiAgICAgICAgICAgICAgdGVhbU9uZUljb246IG1hdGNoLnRlYW0xX2ltZ19wYXRoLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiBtYXRjaC50ZWFtVHdvTmFtZSxcclxuICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogbWF0Y2gudGVhbTJfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgc2NvcmU6IG1hdGNoLnNjb3JlLFxyXG4gICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6IFwiLnJvd09uZS5idXlCdXR0b25cIixcclxuICAgICAgICAgICAgICBjb2VmZmljZW50OiBtYXRjaC5jb2VmZmljZW50LFxyXG4gICAgICAgICAgICAgIHRpdGxlTmFtZTogXCIucm93T25lLnRpdGxlXCIsXHJcbiAgICAgICAgICAgICAgICB9fSkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggZXJyICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlKHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKGZpcnN0UGFnZUl0ZW1zKSxcclxuICAgICAgICAgICAgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpXHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSlcclxuXHJcbiAgICAgICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgICAgICBjb25zdFxyXG4gICAgICAgICAgICBpdGVtcyA9IEFycmF5LmZyb20oc2Vjb25kUGFnZUl0ZW1zKSxcclxuICAgICAgICAgICAgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpXHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSlcclxuXHJcbiAgICAgICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGVuYWJsZVN3aXBlPXtmYWxzZX1cclxuICAgICAgICAvLyB2ZXJ0aWNhbE1vZGVcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJtYXRjaGVzdG9kYXlNYXRjaGVzRmlyc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0UGFnZUl0ZW1zLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVJZD17ZWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiAnMzRweCcgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNTZWNvbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlPXtlbC5nYW1lU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlPXtlbC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+IHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogJzM0cHgnIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=