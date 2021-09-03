self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.jsx":
/*!*********************************************************************************************!*\
  !*** ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.jsx ***!
  \*********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TDMatchesBoard": function() { return /* binding */ TDMatchesBoard; }
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TDMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TDMatchesBoard.module.scss */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.module.scss");
/* harmony import */ var _TDMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_TDMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");
/* harmony import */ var _common_Row_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Row/Row */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.jsx");
/* harmony import */ var _common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Row/RowTitle/RowTitle */ "./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.jsx");
/* harmony import */ var _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Arrows/Arrow */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.jsx");
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pagination/Pagination */ "./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.jsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Matches\\TodayMatches\\TMBody\\TDMatchesBoard\\TDMatchesBoard.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// hooks
 // styles

 // components











function TDMatchesBoard() {
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
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_10__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_11__.GET_MATCHES, {}, {
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
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    console.log(firstPageItems);
  }, [firstPageItems]);

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
    renderArrow: _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_7__.Arrow,
    renderPagination: _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_8__.Pagination,
    className: (_TDMatchesBoard_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),
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
                        lineNumber: 115,
                        columnNumber: 53
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 49
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 37
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
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
                        lineNumber: 164,
                        columnNumber: 49
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 45
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 37
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 29
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
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

_s(TDMatchesBoard, "O8Ila6t55kJmUCuPUcCWdAWstWM=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = TDMatchesBoard;

var _c;

$RefreshReg$(_c, "TDMatchesBoard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9URE1hdGNoZXNCb2FyZC9URE1hdGNoZXNCb2FyZC5qc3giXSwibmFtZXMiOlsiVERNYXRjaGVzQm9hcmQiLCJ1c2VTdGF0ZSIsImZpcnN0UGFnZSIsInNldEZpcnN0UGFnZSIsInNlY29uZFBhZ2UiLCJzZXRTZWNvbmRQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlyc3RQYWdlSXRlbXMiLCJ1cERhdGVGaXJzdFBhZ2VJdGVtcyIsInNlY29uZFBhZ2VJdGVtcyIsInVwRGF0ZVNlY29uZFBhZ2VJdGVtcyIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZWwiLCJpIiwicmVxdWVzdCIsIkdFVF9NQVRDSEVTIiwiYXV0aCIsInRoZW4iLCJub3ciLCJEYXRlIiwiZGF0YSIsIm1hcCIsIm1hdGNoIiwibWF0Y2hUaW1lIiwiZGF0ZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJ0aW1lIiwiZ2V0VGltZSIsImdhbWVTdGF0ZSIsIk1hdGgiLCJhYnMiLCJpZCIsInRlYW1PbmVOYW1lIiwidGVhbU9uZUljb24iLCJ0ZWFtMV9pbWdfcGF0aCIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJ0ZWFtMl9pbWdfcGF0aCIsInNjb3JlIiwiYnV5QnV0dG9uTmFtZSIsImNvZWZmaWNlbnQiLCJ0aXRsZU5hbWUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJpdGVtcyIsIkFycmF5IiwiZnJvbSIsInNwbGljZSIsInNvdXJjZSIsImluZGV4IiwicmVvcmRlcmVkSXRlbSIsImhhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2UiLCJBcnJvdyIsIlBhZ2luYXRpb24iLCJzdHlsZXMiLCJ3aWR0aCIsInByb3ZpZGVkIiwiZHJvcHBhYmxlUHJvcHMiLCJpbm5lclJlZiIsImRyYWdnYWJsZVByb3BzIiwiZHJhZ0hhbmRsZVByb3BzIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJnYW1lIiwicmFuZG9tIiwicGxhY2Vob2xkZXIiLCJtaW5IZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUFBOztBQUFBLGtCQUdLQywrQ0FBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBLE1BR3ZCQyxTQUh1QjtBQUFBLE1BR1pDLFlBSFk7QUFBQSxtQkFJTUYsK0NBQVEsQ0FBQyxFQUFELENBSmQ7QUFBQSxNQUl2QkcsVUFKdUI7QUFBQSxNQUlYQyxhQUpXO0FBQUEsTUFLekJDLE1BTHlCLEdBS2hCQyxrRUFBUyxFQUxPO0FBQUEsbUJBTWdCTiwrQ0FBUSxDQUFDQyxTQUFELENBTnhCO0FBQUEsTUFNeEJNLGNBTndCO0FBQUEsTUFNUkMsb0JBTlE7QUFBQSxtQkFPa0JSLCtDQUFRLENBQUNHLFVBQUQsQ0FQMUI7QUFBQSxNQU94Qk0sZUFQd0I7QUFBQSxNQU9QQyxxQkFQTztBQUFBLG1CQVFDViwrQ0FBUSxDQUFFLEVBQUYsQ0FSVDtBQUFBLE1BUXZCVyxPQVJ1QjtBQUFBLE1BUWRDLFVBUmM7O0FBVTdCQyxrREFBUyxDQUFFLFlBQU07QUFDYkwsd0JBQW9CLENBQUVHLE9BQU8sQ0FBQ0csTUFBUixDQUFlLFVBQUNDLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLGFBQVdBLENBQUMsR0FBRyxDQUFmO0FBQUEsS0FBZixDQUFGLENBQXBCO0FBQ0FOLHlCQUFxQixDQUFFQyxPQUFPLENBQUNHLE1BQVIsQ0FBZSxVQUFDQyxFQUFELEVBQUtDLENBQUw7QUFBQSxhQUFXQSxDQUFDLElBQUksQ0FBaEI7QUFBQSxLQUFmLENBQUYsQ0FB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QkMsaUNBQUssRUFBRTtBQUFFQyxrQ0FBSSxFQUFFMUQsRUFBRSxDQUFDcUI7QUFBWDtBQUZpQiwyQkFBWixDQUFOO0FBQUE7QUFYZCx5QkFVU0YsSUFBSSxDQUFDd0MsTUFBTCxFQVZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURIO0FBQUE7QUFMTCxtQkFFU3hDLElBQUksQ0FBQ3dDLE1BQUwsRUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURpQjtBQUFBLGVBQXBCLENBREwsRUFtQ0tULFFBQVEsQ0FBQ1UsV0FuQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURIO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBNENJLDhEQUFDLG1FQUFEO0FBQVUsaUJBQVMsRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0R0g7O0dBL0tlN0UsYztVQUtDTyw4RDs7O0tBTERQLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjU4ZTI5NDNkZGI5ZGY1OGI3NTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RETWF0Y2hlc0JvYXJkLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi9jb21tb24vUm93L1Jvd1wiXHJcbmltcG9ydCB7IFJvd1RpdGxlIH0gZnJvbSAnLi4vY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZSdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vUGFnaW5hdGlvbi9QYWdpbmF0aW9uJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfTUFUQ0hFUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVERNYXRjaGVzQm9hcmQoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbIGZpcnN0UGFnZSwgc2V0Rmlyc3RQYWdlIF0gPSB1c2VTdGF0ZShbXSksXHJcbiAgICAgICAgWyBzZWNvbmRQYWdlLCBzZXRTZWNvbmRQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICBbZmlyc3RQYWdlSXRlbXMsIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zXSA9IHVzZVN0YXRlKGZpcnN0UGFnZSksXHJcbiAgICAgICAgW3NlY29uZFBhZ2VJdGVtcywgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zXSA9IHVzZVN0YXRlKHNlY29uZFBhZ2UpLFxyXG4gICAgICAgIFsgbWF0Y2hlcywgc2V0TWF0Y2hlcyBdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMoIG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA8IDQpICk7XHJcbiAgICAgICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKCBtYXRjaGVzLmZpbHRlcigoZWwsIGkpID0+IGkgPj0gNCkgKTtcclxuICAgIH0sIFttYXRjaGVzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICByZXF1ZXN0KCBHRVRfTUFUQ0hFUywge30sIHsgYXV0aDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAudGhlbiggbWF0Y2hlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgc2V0TWF0Y2hlcyggbWF0Y2hlcy5kYXRhLmRhdGEubWFwKCBtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoVGltZSA9IChuZXcgRGF0ZShgJHttYXRjaC5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKX0gJHttYXRjaC50aW1lfWApKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVTdGF0ZSA9IG5vdyA8IG1hdGNoVGltZSAgPyBgZG9udFN0YXJ0ZWRgIDogTWF0aC5hYnMobm93LW1hdGNoVGltZSkgPCA5MDAwMDAwID8gJ3N0YXJ0ZWQnIDogJ2ZpbmlzaGVkJztcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG1hdGNoLmlkLFxyXG4gICAgICAgICAgICAgIGRhdGU6IG1hdGNoLmRhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogbWF0Y2gudGltZSxcclxuICAgICAgICAgICAgICBnYW1lU3RhdGU6IGAucm93T25lLmdhbWVTdGF0ZS4ke2dhbWVTdGF0ZX1gLFxyXG4gICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBtYXRjaC50ZWFtT25lTmFtZSxcclxuICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b05hbWU6IG1hdGNoLnRlYW1Ud29OYW1lLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBtYXRjaC50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgICAgICBzY29yZTogbWF0Y2guc2NvcmUsXHJcbiAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogXCIucm93T25lLmJ1eUJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IG1hdGNoLmNvZWZmaWNlbnQsXHJcbiAgICAgICAgICAgICAgdGl0bGVOYW1lOiBcIi5yb3dPbmUudGl0bGVcIixcclxuICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBlcnIgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyggZmlyc3RQYWdlSXRlbXMgKTtcclxuICAgIH0sIFtmaXJzdFBhZ2VJdGVtc10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZShyZXN1bHQpIHtcclxuICAgICAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0XHJcbiAgICAgICAgICAgIGl0ZW1zID0gQXJyYXkuZnJvbShmaXJzdFBhZ2VJdGVtcyksXHJcbiAgICAgICAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKVxyXG4gICAgICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pXHJcblxyXG4gICAgICAgIHVwRGF0ZUZpcnN0UGFnZUl0ZW1zKGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlKHJlc3VsdCkge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKHNlY29uZFBhZ2VJdGVtcyksXHJcbiAgICAgICAgICAgIFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKVxyXG4gICAgICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pXHJcblxyXG4gICAgICAgIHVwRGF0ZVNlY29uZFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgaXRlbXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgIGl0ZW1zVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgcmVuZGVyUGFnaW5hdGlvbj17UGFnaW5hdGlvbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBlbmFibGVTd2lwZT17ZmFsc2V9XHJcbiAgICAgICAgLy8gdmVydGljYWxNb2RlXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kRmlyc3RQYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc0ZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlPXtlbC5nYW1lU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlPXtlbC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU9e2VsLnRpdGxlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT4gcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogJzM0cHgnIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZFNlY29uZFBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJtYXRjaGVzdG9kYXlNYXRjaGVzU2Vjb25kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNvbmRQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU5hbWU9e2VsLnRpdGxlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgPFJvd1RpdGxlIHJvd1N0eWxlcz17eyBtaW5IZWlnaHQ6ICczNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9