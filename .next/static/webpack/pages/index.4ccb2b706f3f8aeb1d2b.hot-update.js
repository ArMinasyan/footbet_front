self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/common/Testimonials/Testimonials.jsx":
/*!***************************************************************!*\
  !*** ./components/Pages/common/Testimonials/Testimonials.jsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Testimonials": function() { return /* binding */ Testimonials; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");
/* harmony import */ var _Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Title/Title */ "./components/Pages/common/Title/Title.jsx");
/* harmony import */ var _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Arrows/Arrow */ "./components/Pages/common/Testimonials/Arrows/Arrow.jsx");
/* harmony import */ var _FeedBack_FeedBack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeedBack/FeedBack */ "./components/Pages/common/Testimonials/FeedBack/FeedBack.jsx");
/* harmony import */ var _feed_back_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed_back_data */ "./components/Pages/common/Testimonials/feed_back_data.js");
/* harmony import */ var _LeaveComment_LeaveComment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LeaveComment/LeaveComment */ "./components/Pages/common/Testimonials/LeaveComment/LeaveComment.jsx");
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pagination/Pagination */ "./components/Pages/common/Testimonials/Pagination/Pagination.jsx");
/* harmony import */ var _Sorting_Sorting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Sorting/Sorting */ "./components/Pages/common/Testimonials/Sorting/Sorting.jsx");
/* harmony import */ var _Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Testimonials.module.scss */ "./components/Pages/common/Testimonials/Testimonials.module.scss");
/* harmony import */ var _Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_features_matchSlice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../redux/features/matchSlice */ "./redux/features/matchSlice.js");
/* harmony import */ var _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/avatar.png */ "./public/images/main/feedbacks/avatar.png");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\Testimonials.jsx",
    _s = $RefreshSig$();

// hooks and helpers

 // components








 // styles







function Testimonials(_ref) {
  _s();

  var _this = this;

  var page = _ref.page,
      locationInPage = _ref.locationInPage,
      textPathName = _ref.textPathName;
  var matchId = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(_redux_features_matchSlice__WEBPACK_IMPORTED_MODULE_14__.getMatchId);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      feedBacks = _useState[0],
      setFeedBacks = _useState[1],
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      dateActive = _useState2[0],
      setDateActive = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (matchId !== null && matchId !== undefined) {
      (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_11__.request)((0,_lib_request_destinations__WEBPACK_IMPORTED_MODULE_12__.GET_FEEDBACK)(matchId)).then(function (predictions) {
        setFeedBacks(predictions.data.data.map(function (feedBack) {
          return {
            avatar: _public_images_main_feedbacks_avatar_png__WEBPACK_IMPORTED_MODULE_15__.default.src,
            nikName: "Lorem ipsum",
            rateing: feedBack.stars,
            description: feedBack.comment,
            date: {
              renderFormat: "13.07.2021",
              sortFormat: new Date("2021-07-13")
            },
            likes: +feedBack.likeCount,
            disLikes: +feedBack.dislikeCount
          };
        }));
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [matchId]); // function for sorting

  var sorting = function sorting(toSort, sortingBy, dateActive) {
    if (toSort.length > 0) {
      var dataForSorting = toSort.reduce(function (ac, el) {
        return ac.concat(el);
      }),
          sortedData = [],
          sorted = [];
      if (sortingBy === "date") sorted = dataForSorting.sort(function (a, b) {
        return b.date.sortFormat - a.date.sortFormat;
      });else if (sortingBy === "rate") sorted = dataForSorting.sort(function (a, b) {
        return b.rateing - a.rateing;
      });

      var _loop = function _loop(i) {
        var sortedItems = [];
        sorted.forEach(function (el, x) {
          x < i * 3 && x >= i * 3 - 3 && sortedItems.push(el);
        });
        sortedData.push(sortedItems);
      };

      for (var i = 1; i <= Math.ceil(dataForSorting.length / 3); i++) {
        _loop(i);
      }

      setFeedBacks(sortedData);
      setDateActive(dateActive);
    }
  }; // Artificial reactions data 


  var reactions = [{
    username: "Lorem Ipsum",
    reaction: true
  }, {
    username: "Lorem Ipsum",
    reaction: false
  }, {
    username: "Lorem Ipsum",
    reaction: true
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: feedBacks && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Title_Title__WEBPACK_IMPORTED_MODULE_4__.Title, {
        page: page,
        textPathName: textPathName,
        locationInPage: locationInPage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16___default().feed_backs_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sorting_Sorting__WEBPACK_IMPORTED_MODULE_10__.Sorting, {
          sortingText: "sort",
          dateSortingText: "byDate",
          rateSorting: "byRate",
          sortByDate: function sortByDate() {
            sorting(feedBacks, "date", true);
          },
          sortByRate: function sortByRate() {
            sorting(feedBacks, "rate", false);
          },
          dateActive: dateActive
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__.default, {
          renderArrow: _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_5__.Arrow,
          renderPagination: _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__.Pagination,
          itemsToShow: 1,
          itemsToScroll: 1,
          className: (_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_16___default().carousel),
          children: feedBacks.map(function (el) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                width: '100%'
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FeedBack_FeedBack__WEBPACK_IMPORTED_MODULE_6__.FeedBack, {
                avatar: el.avatar,
                nikName: el.nikName,
                rateing: el.rateing,
                description: el.description,
                date: el.date.renderFormat,
                likes: el.likes,
                disLikes: el.disLikes,
                reactionsForTesting: reactions
              }, Math.random(), false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 45
              }, _this)
            }, Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 37
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LeaveComment_LeaveComment__WEBPACK_IMPORTED_MODULE_8__.LeaveComment, {
          matchId: matchId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

_s(Testimonials, "GO0RkLB68CVooyrZqSQqm4rDG0o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector];
});

_c = Testimonials;

var _c;

$RefreshReg$(_c, "Testimonials");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5qc3giXSwibmFtZXMiOlsiVGVzdGltb25pYWxzIiwicGFnZSIsImxvY2F0aW9uSW5QYWdlIiwidGV4dFBhdGhOYW1lIiwibWF0Y2hJZCIsInVzZVNlbGVjdG9yIiwiZ2V0TWF0Y2hJZCIsInVzZVN0YXRlIiwiZmVlZEJhY2tzIiwic2V0RmVlZEJhY2tzIiwiZGF0ZUFjdGl2ZSIsInNldERhdGVBY3RpdmUiLCJ1c2VFZmZlY3QiLCJ1bmRlZmluZWQiLCJyZXF1ZXN0IiwiR0VUX0ZFRURCQUNLIiwidGhlbiIsInByZWRpY3Rpb25zIiwiZGF0YSIsIm1hcCIsImZlZWRCYWNrIiwiYXZhdGFyIiwibmlrTmFtZSIsInJhdGVpbmciLCJzdGFycyIsImRlc2NyaXB0aW9uIiwiY29tbWVudCIsImRhdGUiLCJyZW5kZXJGb3JtYXQiLCJzb3J0Rm9ybWF0IiwiRGF0ZSIsImxpa2VzIiwibGlrZUNvdW50IiwiZGlzTGlrZXMiLCJkaXNsaWtlQ291bnQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic29ydGluZyIsInRvU29ydCIsInNvcnRpbmdCeSIsImxlbmd0aCIsImRhdGFGb3JTb3J0aW5nIiwicmVkdWNlIiwiYWMiLCJlbCIsImNvbmNhdCIsInNvcnRlZERhdGEiLCJzb3J0ZWQiLCJzb3J0IiwiYSIsImIiLCJpIiwic29ydGVkSXRlbXMiLCJmb3JFYWNoIiwieCIsInB1c2giLCJNYXRoIiwiY2VpbCIsInJlYWN0aW9ucyIsInVzZXJuYW1lIiwicmVhY3Rpb24iLCJzdHlsZXMiLCJBcnJvdyIsIlBhZ2luYXRpb24iLCJ3aWR0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNB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QUFPLEVBQUU5RDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUixtQkFESjtBQW1ESDs7R0E1SGVKLFk7VUFLSUsscUQ7OztLQUxKTCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRjY2IyYjcwNmYzZjhhZWIxZDJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi9UaXRsZS9UaXRsZSdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgRmVlZEJhY2sgfSBmcm9tICcuL0ZlZWRCYWNrL0ZlZWRCYWNrJ1xyXG5pbXBvcnQgeyBmZWVkYmFja19kYXRhIH0gZnJvbSAnLi9mZWVkX2JhY2tfZGF0YSdcclxuaW1wb3J0IHsgTGVhdmVDb21tZW50IH0gZnJvbSAnLi9MZWF2ZUNvbW1lbnQvTGVhdmVDb21tZW50J1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi9QYWdpbmF0aW9uL1BhZ2luYXRpb24nXHJcbmltcG9ydCB7IFNvcnRpbmcgfSBmcm9tICcuL1NvcnRpbmcvU29ydGluZydcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXN0aW1vbmlhbHMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfRkVFREJBQ0sgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGdldE1hdGNoSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlJ1xyXG5cclxuaW1wb3J0IGF2YXRhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9hdmF0YXIucG5nJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RpbW9uaWFscyh7XHJcbiAgICBwYWdlLFxyXG4gICAgbG9jYXRpb25JblBhZ2UsXHJcbiAgICB0ZXh0UGF0aE5hbWVcclxufSkge1xyXG4gICAgY29uc3QgbWF0Y2hJZCA9IHVzZVNlbGVjdG9yKGdldE1hdGNoSWQpO1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICBbZmVlZEJhY2tzLCBzZXRGZWVkQmFja3NdID0gdXNlU3RhdGUoW10pLFxyXG4gICAgICAgIFtkYXRlQWN0aXZlLCBzZXREYXRlQWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobWF0Y2hJZCAhPT0gbnVsbCAgJiYgbWF0Y2hJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QoR0VUX0ZFRURCQUNLKG1hdGNoSWQpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocHJlZGljdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZlZWRCYWNrcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbnMuZGF0YS5kYXRhLm1hcChmZWVkQmFjayA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIuc3JjLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlrTmFtZTogXCJMb3JlbSBpcHN1bVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZWluZzogZmVlZEJhY2suc3RhcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZmVlZEJhY2suY29tbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJGb3JtYXQ6IFwiMTMuMDcuMjAyMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGb3JtYXQ6IG5ldyBEYXRlKFwiMjAyMS0wNy0xM1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VzOiArZmVlZEJhY2subGlrZUNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzTGlrZXM6ICtmZWVkQmFjay5kaXNsaWtlQ291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7IGNvbnNvbGUubG9nKGVycikgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWF0Y2hJZF0pXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gZm9yIHNvcnRpbmdcclxuICAgIGNvbnN0IHNvcnRpbmcgPSAodG9Tb3J0LCBzb3J0aW5nQnksIGRhdGVBY3RpdmUpID0+IHtcclxuICAgICAgICBpZiAodG9Tb3J0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0XHJcbiAgICAgICAgICAgICAgICBkYXRhRm9yU29ydGluZyA9IHRvU29ydC5yZWR1Y2UoKGFjLCBlbCkgPT4gYWMuY29uY2F0KGVsKSksXHJcbiAgICAgICAgICAgICAgICBzb3J0ZWREYXRhID0gW10sXHJcbiAgICAgICAgICAgICAgICBzb3J0ZWQgPSBbXVxyXG5cclxuICAgICAgICAgICAgaWYgKHNvcnRpbmdCeSA9PT0gXCJkYXRlXCIpIHNvcnRlZCA9IGRhdGFGb3JTb3J0aW5nLnNvcnQoKGEsIGIpID0+IChiLmRhdGUuc29ydEZvcm1hdCAtIGEuZGF0ZS5zb3J0Rm9ybWF0KSlcclxuICAgICAgICAgICAgZWxzZSBpZiAoc29ydGluZ0J5ID09PSBcInJhdGVcIikgc29ydGVkID0gZGF0YUZvclNvcnRpbmcuc29ydCgoYSwgYikgPT4gKGIucmF0ZWluZyAtIGEucmF0ZWluZykpXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwoZGF0YUZvclNvcnRpbmcubGVuZ3RoIC8gMyk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvcnRlZEl0ZW1zID0gW11cclxuICAgICAgICAgICAgICAgIHNvcnRlZC5mb3JFYWNoKChlbCwgeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICh4IDwgaSAqIDMpICYmICh4ID49ICgoaSAqIDMpIC0gMykpICYmIHNvcnRlZEl0ZW1zLnB1c2goZWwpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc29ydGVkRGF0YS5wdXNoKHNvcnRlZEl0ZW1zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEZlZWRCYWNrcyhzb3J0ZWREYXRhKVxyXG4gICAgICAgICAgICBzZXREYXRlQWN0aXZlKGRhdGVBY3RpdmUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQXJ0aWZpY2lhbCByZWFjdGlvbnMgZGF0YSBcclxuICAgIGNvbnN0IHJlYWN0aW9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIkxvcmVtIElwc3VtXCIsXHJcbiAgICAgICAgICAgIHJlYWN0aW9uOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIkxvcmVtIElwc3VtXCIsXHJcbiAgICAgICAgICAgIHJlYWN0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJMb3JlbSBJcHN1bVwiLFxyXG4gICAgICAgICAgICByZWFjdGlvbjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtmZWVkQmFja3MgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhOYW1lPXt0ZXh0UGF0aE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5QYWdlPXtsb2NhdGlvbkluUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVlZF9iYWNrc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29ydGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGluZ1RleHQ9e1wic29ydFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVNvcnRpbmdUZXh0PXtcImJ5RGF0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZVNvcnRpbmc9e1wiYnlSYXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0QnlEYXRlPXsoKSA9PiB7IHNvcnRpbmcoZmVlZEJhY2tzLCBcImRhdGVcIiwgdHJ1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeVJhdGU9eygpID0+IHsgc29ydGluZyhmZWVkQmFja3MsIFwicmF0ZVwiLCBmYWxzZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVBY3RpdmU9e2RhdGVBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGFnaW5hdGlvbj17UGFnaW5hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zVG9TaG93PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZEJhY2tzLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBrZXk9e01hdGgucmFuZG9tKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVkQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e2VsLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlrTmFtZT17ZWwubmlrTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZWluZz17ZWwucmF0ZWluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VsLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtlbC5kYXRlLnJlbmRlckZvcm1hdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZXM9e2VsLmxpa2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNMaWtlcz17ZWwuZGlzTGlrZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3Rpb25zRm9yVGVzdGluZz17cmVhY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWF2ZUNvbW1lbnQgbWF0Y2hJZD17bWF0Y2hJZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==