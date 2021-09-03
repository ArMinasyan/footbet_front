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
    var d = new Date();
    d.setDate(d.getDate() + 1);
    var date = "".concat((d.getDate() + '').padStart(2, '0'), ".").concat((d.getMonth() + 1 + '').padStart(2, '0'), ".").concat(d.getFullYear());
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_10__.request)((0,_lib_request_destinations__WEBPACK_IMPORTED_MODULE_11__.GET_MATCHES_OF_SPECIFIC_DAY)(date), {}, {
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
                        lineNumber: 116,
                        columnNumber: 25
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 23
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
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
                        lineNumber: 163,
                        columnNumber: 25
                      }, _this)
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 23
                    }, _this);
                  }
                }, Math.random(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 19
                }, _this);
              }), provided.placeholder]
            }), void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Row_RowTitle_RowTitle__WEBPACK_IMPORTED_MODULE_6__.RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL01hdGNoZXMvVG9kYXlNYXRjaGVzL1RNQm9keS9UTU1hdGNoZXNCb2FyZC9UTU1hdGNoZXNCb2FyZC5qc3giXSwibmFtZXMiOlsiVE1NYXRjaGVzQm9hcmQiLCJ1c2VTdGF0ZSIsImZpcnN0UGFnZSIsInNldEZpcnN0UGFnZSIsInNlY29uZFBhZ2UiLCJzZXRTZWNvbmRQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlyc3RQYWdlSXRlbXMiLCJ1cERhdGVGaXJzdFBhZ2VJdGVtcyIsInNlY29uZFBhZ2VJdGVtcyIsInVwRGF0ZVNlY29uZFBhZ2VJdGVtcyIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZWwiLCJpIiwiZCIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRhdGUiLCJwYWRTdGFydCIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJyZXF1ZXN0IiwiR0VUX01BVENIRVNfT0ZfU1BFQ0lGSUNfREFZIiwiYXV0aCIsInRoZW4iLCJub3ciLCJkYXRhIiwibWFwIiwibWF0Y2giLCJtYXRjaFRpbWUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwidGltZSIsImdldFRpbWUiLCJnYW1lU3RhdGUiLCJNYXRoIiwiYWJzIiwiaWQiLCJ0ZWFtT25lTmFtZSIsInRlYW1PbmVJY29uIiwidGVhbTFfaW1nX3BhdGgiLCJ0ZWFtVHdvTmFtZSIsInRlYW1Ud29JY29uIiwidGVhbTJfaW1nX3BhdGgiLCJzY29yZSIsImJ1eUJ1dHRvbk5hbWUiLCJjb2VmZmljZW50IiwidGl0bGVOYW1lIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZSIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwiaXRlbXMiLCJBcnJheSIsImZyb20iLCJzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsInJlb3JkZXJlZEl0ZW0iLCJoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlIiwiQXJyb3ciLCJQYWdpbmF0aW9uIiwic3R5bGVzIiwid2lkdGgiLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZ2FtZSIsInJhbmRvbSIsInBsYWNlaG9sZGVyIiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDR0MsK0NBQVEsQ0FBQyxFQUFELENBRFg7QUFBQSxNQUN4QkMsU0FEd0I7QUFBQSxNQUNiQyxZQURhO0FBQUEsbUJBRUNGLCtDQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFNUJHLFVBRjRCO0FBQUEsTUFFaEJDLGFBRmdCO0FBQUEsTUFHN0JDLE1BSDZCLEdBR3BCQyxrRUFBUyxFQUhXO0FBQUEsbUJBSVlOLCtDQUFRLENBQUNDLFNBQUQsQ0FKcEI7QUFBQSxNQUk1Qk0sY0FKNEI7QUFBQSxNQUlaQyxvQkFKWTtBQUFBLG1CQUtjUiwrQ0FBUSxDQUFDRyxVQUFELENBTHRCO0FBQUEsTUFLNUJNLGVBTDRCO0FBQUEsTUFLWEMscUJBTFc7QUFBQSxtQkFNTFYsK0NBQVEsQ0FBQyxFQUFELENBTkg7QUFBQSxNQU01QlcsT0FONEI7QUFBQSxNQU1uQkMsVUFObUI7O0FBUS9CQyxrREFBUyxDQUFDLFlBQU07QUFDZEwsd0JBQW9CLENBQUNHLE9BQU8sQ0FBQ0csTUFBUixDQUFlLFVBQUNDLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLGFBQVdBLENBQUMsR0FBRyxDQUFmO0FBQUEsS0FBZixDQUFELENBQXBCO0FBQ0FOLHlCQUFxQixDQUFDQyxPQUFPLENBQUNH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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UTU1hdGNoZXNCb2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vY29tbW9uL1Jvdy9Sb3dcIjtcclxuaW1wb3J0IHsgUm93VGl0bGUgfSBmcm9tIFwiLi4vY29tbW9uL1Jvdy9Sb3dUaXRsZS9Sb3dUaXRsZVwiO1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gXCIuLy4uL1RETWF0Y2hlc0JvYXJkL0Fycm93cy9BcnJvd1wiO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSBcIi4vLi4vVERNYXRjaGVzQm9hcmQvUGFnaW5hdGlvbi9QYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWIvZXIubGliXCI7XHJcbmltcG9ydCB7IEdFVF9NQVRDSEVTX09GX05FWFRfREFZLCBHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVE1NYXRjaGVzQm9hcmQoKSB7XHJcbiAgY29uc3QgW2ZpcnN0UGFnZSwgc2V0Rmlyc3RQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgIFtzZWNvbmRQYWdlLCBzZXRTZWNvbmRQYWdlXSA9IHVzZVN0YXRlKFtdKSxcclxuICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgW2ZpcnN0UGFnZUl0ZW1zLCB1cERhdGVGaXJzdFBhZ2VJdGVtc10gPSB1c2VTdGF0ZShmaXJzdFBhZ2UpLFxyXG4gICAgW3NlY29uZFBhZ2VJdGVtcywgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zXSA9IHVzZVN0YXRlKHNlY29uZFBhZ2UpLFxyXG4gICAgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBEYXRlRmlyc3RQYWdlSXRlbXMobWF0Y2hlcy5maWx0ZXIoKGVsLCBpKSA9PiBpIDwgNCkpO1xyXG4gICAgdXBEYXRlU2Vjb25kUGFnZUl0ZW1zKG1hdGNoZXMuZmlsdGVyKChlbCwgaSkgPT4gaSA+PSA0KSk7XHJcbiAgfSwgW21hdGNoZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZC5zZXREYXRlKCBkLmdldERhdGUoKSArIDEgKTtcclxuICAgIGNvbnN0IGRhdGUgPSBgJHsoZC5nZXREYXRlKCkrJycpLnBhZFN0YXJ0KDIsICcwJyl9LiR7KGQuZ2V0TW9udGgoKSsxKycnKS5wYWRTdGFydCgyLCAnMCcpfS4ke2QuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgcmVxdWVzdChHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkoZGF0ZSksIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKG1hdGNoZXMpID0+IHtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldE1hdGNoZXMoXHJcbiAgICAgICAgICBtYXRjaGVzLmRhdGEuZGF0YS5tYXAoKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoVGltZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgIGAke21hdGNoLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke21hdGNoLnRpbWV9YFxyXG4gICAgICAgICAgICApLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZVN0YXRlID1cclxuICAgICAgICAgICAgICBub3cgPCBtYXRjaFRpbWVcclxuICAgICAgICAgICAgICAgID8gYGRvbnRTdGFydGVkYFxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLmFicyhub3cgLSBtYXRjaFRpbWUpIDwgOTAwMDAwMFxyXG4gICAgICAgICAgICAgICAgPyBcInN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAgICAgOiBcImZpbmlzaGVkXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IG1hdGNoLmlkLFxyXG4gICAgICAgICAgICAgIGRhdGU6IG1hdGNoLmRhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogbWF0Y2gudGltZSxcclxuICAgICAgICAgICAgICBnYW1lU3RhdGU6IGAucm93T25lLmdhbWVTdGF0ZS4ke2dhbWVTdGF0ZX1gLFxyXG4gICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBtYXRjaC50ZWFtT25lTmFtZSxcclxuICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogbWF0Y2gudGVhbTFfaW1nX3BhdGgsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b05hbWU6IG1hdGNoLnRlYW1Ud29OYW1lLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBtYXRjaC50ZWFtMl9pbWdfcGF0aCxcclxuICAgICAgICAgICAgICBzY29yZTogbWF0Y2guc2NvcmUsXHJcbiAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogXCIucm93T25lLmJ1eUJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IG1hdGNoLmNvZWZmaWNlbnQsXHJcbiAgICAgICAgICAgICAgdGl0bGVOYW1lOiBcIi5yb3dPbmUudGl0bGVcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU9uRHJhZ0VuZEZpcnN0UGFnZShyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oZmlyc3RQYWdlSXRlbXMpLFxyXG4gICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICB1cERhdGVGaXJzdFBhZ2VJdGVtcyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPbkRyYWdFbmRTZWNvbmRQYWdlKHJlc3VsdCkge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShzZWNvbmRQYWdlSXRlbXMpLFxyXG4gICAgICBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICB1cERhdGVTZWNvbmRQYWdlSXRlbXMoaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgICBpdGVtc1RvU2hvdz17MX1cclxuICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICByZW5kZXJQYWdpbmF0aW9uPXtQYWdpbmF0aW9ufVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIGVuYWJsZVN3aXBlPXtmYWxzZX1cclxuICAgICAgLy8gdmVydGljYWxNb2RlXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmRGaXJzdFBhZ2V9PlxyXG4gICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cIm1hdGNoZXN0b2RheU1hdGNoZXNGaXJzdFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtmaXJzdFBhZ2VJdGVtcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgaW5kZXg9e2l9IGtleT17TWF0aC5yYW5kb20oKX0gZHJhZ2dhYmxlSWQ9e2VsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZT17ZWwuZ2FtZVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17ZWwuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVOYW1lPXtlbC50aXRsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9wcmVkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICA8Um93VGl0bGUgcm93U3R5bGVzPXt7IG1pbkhlaWdodDogXCIzNHB4XCIgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kU2Vjb25kUGFnZX0+XHJcbiAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwibWF0Y2hlc3RvZGF5TWF0Y2hlc1NlY29uZFwiPlxyXG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNvbmRQYWdlSXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGluZGV4PXtpfSBrZXk9e01hdGgucmFuZG9tKCl9IGRyYWdnYWJsZUlkPXtlbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZWwuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdGU9e2VsLmdhbWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2VsLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud289e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTmFtZT17ZWwudGl0bGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J1eT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgIDxSb3dUaXRsZSByb3dTdHlsZXM9e3sgbWluSGVpZ2h0OiBcIjM0cHhcIiB9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9