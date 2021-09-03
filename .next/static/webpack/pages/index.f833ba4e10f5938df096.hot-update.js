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
        var gameState = now < matchTime ? "dontStarted" : Math.abs(now - matchTime) < 9000000 ? "started" : "finished";
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
                        lineNumber: 113,
                        columnNumber: 25
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 23
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
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
                        lineNumber: 160,
                        columnNumber: 25
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 23
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

_s(TMMatchesBoard, "7mEDzIsPwcvzb4vbhA+bj6YYvGc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9UTU1hdGNoZXNCb2FyZC9UTU1hdGNoZXNCb2FyZC5qc3giXSwibmFtZXMiOlsiVE1NYXRjaGVzQm9hcmQiLCJ1c2VTdGF0ZSIsImZpcnN0UGFnZSIsInNldEZpcnN0UGFnZSIsInNlY29uZFBhZ2UiLCJzZXRTZWNvbmRQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlyc3RQYWdlSXRlbXMiLCJ1cERhdGVGaXJzdFBhZ2VJdGVtcyIsInNlY29uZFBhZ2VJdGVtcyIsInVwRGF0ZVNlY29uZFBhZ2VJdGVtcyIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZWwiLCJpIiwicmVxdWVzdCIsIkdFVF9NQVRDSEVTX09GX05FWFRfREFZIiwiYXV0aCIsInRoZW4iLCJub3ciLCJEYXRlIiwiZGF0YSIsIm1hcCIsIm1hdGNoIiwibWF0Y2hUaW1lIiwiZGF0ZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJ0aW1lIiwiZ2V0VGltZSIsImdhbWVTdGF0ZSIsIk1hdGgiLCJhYnMiLCJpZCIsInRlYW1PbmVOYW1lIiwidGVhbU9uZUljb24iLCJ0ZWFtMV9pbWdfcGF0aCIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJ0ZWFtMl9pbWdfcGF0aCIsInNjb3JlIiwiYnV5QnV0dG9uTmFtZSIsImNvZWZmaWNlbnQiLCJ0aXRsZU5hbWUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJpdGVtcyIsIkFycmF5IiwiZnJvbSIsInNwbGljZSIsInNvdXJjZSIsImluZGV4IiwicmVvcmRlcmVkSXRlbSIsImhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UiLCJBcnJvdyIsIlBhZ2luYXRpb24iLCJzdHlsZXMiLCJ3aWR0aCIsInByb3ZpZGVkIiwiZHJvcHBhYmxlUHJvcHMiLCJpbm5lclJlZiIsImRyYWdnYWJsZVByb3BzIiwiZHJhZ0hhbmRsZVByb3BzIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJnYW1lIiwicmFuZG9tIiwicGxhY2Vob2xkZXIiLCJtaW5IZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUFBOztBQUFBLGtCQUNHQywrQ0FBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ3hCQyxTQUR3QjtBQUFBLE1BQ2JDLFlBRGE7QUFBQSxtQkFFQ0YsK0NBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUU1QkcsVUFGNEI7QUFBQSxNQUVoQkMsYUFGZ0I7QUFBQSxNQUc3QkMsTUFINkIsR0FHcEJDLGtFQUFTLEVBSFc7QUFBQSxtQkFJWU4sK0NBQVEsQ0FBQ0MsU0FBRCxDQUpwQjtBQUFBLE1BSTVCTSxjQUo0QjtBQUFBLE1BSVpDLG9CQUpZO0FBQUEsbUJBS2NSLCtDQUFRLENBQUNHLFVBQUQsQ0FMdEI7QUFBQSxNQUs1Qk0sZUFMNEI7QUFBQSxNQUtYQyxxQkFMVztBQUFBLG1CQU1MViwrQ0FBUSxDQUFDLEVBQUQsQ0FOSDtBQUFBLE1BTTVCVyxPQU40QjtBQUFBLE1BTW5CQyxVQU5tQjs7QUFRL0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkTCx3QkFBb0IsQ0FBQ0csT0FBTyxDQUFDRyxNQUFSLENBQWUsVUFBQ0MsRUFBRCxFQUFLQyxDQUFMO0FBQUEsYUFBV0EsQ0FBQyxHQUFHLENBQWY7QUFBQSxLQUFmLENBQUQsQ0FBcEI7QUFDQU4seUJBQXFCLENBQUNDLE9BQU8sQ0FBQ0csTUFBUixDQUFlLFVBQUNDLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLGFBQVdBLENBQUMsSUFBSSxDQUFoQjtBQUFB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QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUREO0FBQUE7QUFESCxtQkFBMEJ4QyxJQUFJLENBQUN3QyxNQUFMLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRG1CO0FBQUEsZUFBcEIsQ0FMSCxFQW9DR1QsUUFBUSxDQUFDVSxXQXBDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUE2Q0UsOERBQUMsbUVBQUQ7QUFBVSxpQkFBUyxFQUFFO0FBQUVDLG1CQUFTLEVBQUU7QUFBYjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBHRDs7R0E5S2U3RSxjO1VBR0hPLDhEOzs7S0FIR1AsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mODMzYmE0ZTEwZjU5MzhkZjA5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RNTWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzXCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCI7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1wiO1xyXG5pbXBvcnQgeyBSb3dUaXRsZSB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1RpdGxlL1Jvd1RpdGxlXCI7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSBcIi4vLi4vVERNYXRjaGVzQm9hcmQvQXJyb3dzL0Fycm93XCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwiLi8uLi9URE1hdGNoZXNCb2FyZC9QYWdpbmF0aW9uL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9lci5saWJcIjtcclxuaW1wb3J0IHsgR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVE1NYXRjaGVzQm9hcmQoKSB7XHJcbiAgY29uc3QgW2ZpcnN0UGFnZSwgc2V0Rmlyc3RQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgIFtzZWNvbmRQYWdlLCBzZXRTZWNvbmRQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgW2ZpcnN0UGFnZUl0ZW1zLCB1cERhdGVGaXJzdFBhZ2VJdGVtc10gPSB1c2VTdGF0ZShmaXJzdFBhZ2UpLFxyXG4gICAgW3NlY29uZFBhZ2VJdGVtcywgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zXSA9IHVzZVN0YXRlKHNlY29uZFBhZ2UpLFxyXG4gICAgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMobWF0Y2hlcy5maWx0ZXIoKGVsLCBpKSA9PiBpIDwgNCkpO1xyXG4gICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA+PSA0KSk7XHJcbiAgfSwgW21hdGNoZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlcXVlc3QoR0VUX01BVENIRVNfT0ZfTkVYVF9EQVksIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKG1hdGNoZXMpID0+IHtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldE1hdGNoZXMoXHJcbiAgICAgICAgICBtYXRjaGVzLmRhdGEuZGF0YS5tYXAoKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoVGltZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgIGAke21hdGNoLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke21hdGNoLnRpbWV9YFxyXG4gICAgICAgICAgICApLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXRlID1cclxuICAgICAgICAgICAgICBub3cgPCBtYXRjaFRpbWVcclxuICAgICAgICAgICAgICAgID8gYGRvbnRTdGFydGVkYFxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLmFicyhub3cgLSBtYXRjaFRpbWUpIDwgOTAwMDAwMFxyXG4gICAgICAgICAgICAgICAgPyBcInN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAgICAgOiBcImZpbmlzaGVkXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IG1hdGNoLmlkLFxyXG4gICAgICAgICAgICAgIGRhdGU6IG1hdGNoLmRhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogbWF0Y2gudGltZSxcclxuICAgICAgICAgICAgICBnYW1lU3RhdGU6IGAucm93T25lLmdhbWVTdGF0ZS4ke2dhbWVTdGF0ZX1gLFxyXG4gICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBtYXRjaC50ZWFtT25lTmFtZSxcclxuICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b05hbWU6IG1hdGNoLnRlYW1Ud29OYW1lLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBtYXRjaC50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgICAgICBzY29yZTogbWF0Y2guc2NvcmUsXHJcbiAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogXCIucm93T25lLmJ1eUJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IG1hdGNoLmNvZWZmaWNlbnQsXHJcbiAgICAgICAgICAgICAgdGl0bGVOYW1lOiBcIi5yb3dPbmUudGl0bGVcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZShyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oZmlyc3RQYWdlSXRlbXMpLFxyXG4gICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlKHJlc3VsdCkge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShzZWNvbmRQYWdlSXRlbXMpLFxyXG4gICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMoaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIGVuYWJsZVN3aXBlPXtmYWxzZX1cclxuICAgICAgLy8gdmVydGljYWxNb2RlXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2V9PlxyXG4gICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNGaXJzdFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtmaXJzdFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgaW5kZXg9e2l9IGtleT17TWF0aC5yYW5kb20oKX0gZHJhZ2dhYmxlSWQ9e2VsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lPXtlbC50aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9wcmVkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogXCIzNHB4XCIgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZX0+XHJcbiAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc1NlY29uZFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNvbmRQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGluZGV4PXtpfSBrZXk9e01hdGgucmFuZG9tKCl9IGRyYWdnYWJsZUlkPXtlbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiBcIjM0cHhcIiB9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9