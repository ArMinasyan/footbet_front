self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/Main/Prediction/PredictionSlide/PrdeictionSlide.jsx":
/*!******************************************************************************!*\
  !*** ./components/Pages/Main/Prediction/PredictionSlide/PrdeictionSlide.jsx ***!
  \******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrdeictionSlide": function() { return /* binding */ PrdeictionSlide; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");
/* harmony import */ var _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Arrows/Arrow */ "./components/Pages/Main/Prediction/PredictionSlide/Arrows/Arrow.jsx");
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item/Item */ "./components/Pages/Main/Prediction/PredictionSlide/Item/Item.jsx");
/* harmony import */ var _PrdeictionSlide_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PrdeictionSlide.module.scss */ "./components/Pages/Main/Prediction/PredictionSlide/PrdeictionSlide.module.scss");
/* harmony import */ var _PrdeictionSlide_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_PrdeictionSlide_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_images_main_prediction_predBack_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/main/prediction/predBack.png */ "./public/images/main/prediction/predBack.png");
/* harmony import */ var _src_games_data_predictions_slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../src/games_data/predictions/slide */ "./src/games_data/predictions/slide.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var _redux_features_matchSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../redux/features/matchSlice */ "./redux/features/matchSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Main\\Prediction\\PredictionSlide\\PrdeictionSlide.jsx",
    _s = $RefreshSig$();

// hooks and helpers

 //components



 // styles

 // images, icons







function PrdeictionSlide() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      slide_data = _useState[0],
      setSlideData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      currentMatchId = _useState2[0],
      setCurrentMatchId = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_9__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_10__.GET_PREDICTIONS, {}, {
      auth: true
    }).then(function (rsp) {
      var _rsp$data;

      // toast(`Successfully registered`)
      setSlideData(rsp.data.data.map(function (item) {
        return {
          id: item.id,
          teamOneName: "",
          teamOneIcon: item["team1_img_path"],
          teamTwoName: "",
          teamTwoIcon: item["team2_img_path"],
          prediction: {
            thereIs: false,
            totalBet: "тб 1,5 / ",
            coefficent: "коеф 3,5"
          },
          type: item.type,
          date: item.date,
          time: item.time,
          coefficent: item.factor,
          predictionButtonName: ".slide.pred_button",
          buyButtonName: ".slide.buy_button",
          predictionText: "Фулхем тб 1,5 / коэф 3,5",
          ordinarText: "".concat(item.type, " / ").concat(item.price, "\u0440\u0443\u0431."),
          price: item.price + " руб."
        };
      }));

      if (((_rsp$data = rsp.data) === null || _rsp$data === void 0 ? void 0 : _rsp$data.data.length) > 0) {
        setCurrentMatchId(rsp.data.data[0].id);
      }
    })["catch"](function (error) {});
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (currentMatchId !== null && currentMatchId !== undefined) {
      dispatch((0,_redux_features_matchSlice__WEBPACK_IMPORTED_MODULE_11__.setMatchId)(currentMatchId));
    }
  }, [currentMatchId]);
  var style = {
    backgroundImage: "url(" + _public_images_main_prediction_predBack_png__WEBPACK_IMPORTED_MODULE_6__.default.src + ")",
    backgroundSize: "cover"
  },
      time = new Date(),
      router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
      breakpoints = [{
    width: 375,
    itemPadding: [21, 0, 25, 0]
  }, {
    width: 616,
    itemPadding: [79, 0, 79, 0]
  }, {
    width: 1920,
    itemPadding: [115, 0, 43, 0]
  }];
  time.setSeconds(time.getSeconds() + 10600);

  function slideChange(p) {
    var _p$item;

    setCurrentMatchId(p === null || p === void 0 ? void 0 : (_p$item = p.item) === null || _p$item === void 0 ? void 0 : _p$item.id);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_PrdeictionSlide_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),
    style: style,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__.default, {
      pagination: false,
      renderArrow: _Arrows_Arrow__WEBPACK_IMPORTED_MODULE_4__.Arrow,
      breakPoints: breakpoints,
      onChange: slideChange,
      children: slide_data.map(function (el) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Item_Item__WEBPACK_IMPORTED_MODULE_5__.Item, {
          id: el.id,
          teamOneName: el.teamOneName,
          teamTwoName: el.teamTwoName,
          teamOneIcon: el.teamOneIcon,
          teamTwoIcon: el.teamTwoIcon,
          predictionButtonName: el.predictionButtonName,
          buyButtonName: el.buyButtonName,
          locationInMainPage: "prediction",
          expiryTimestamp: new Date().setSeconds(new Date("".concat(el.date.split(".").reverse().join("."), " ").concat(el.time))),
          prediction: el.predictionText,
          ordinar: el.ordinarText,
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
          lineNumber: 93,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

_s(PrdeictionSlide, "fEL7mkJtNKsusl9fQ6LoGjH2eSQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch, next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = PrdeictionSlide;

var _c;

$RefreshReg$(_c, "PrdeictionSlide");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZS5qc3giXSwibmFtZXMiOlsiUHJkZWljdGlvblNsaWRlIiwidXNlU3RhdGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwiY3VycmVudE1hdGNoSWQiLCJzZXRDdXJyZW50TWF0Y2hJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0IiwiR0VUX1BSRURJQ1RJT05TIiwiYXV0aCIsInRoZW4iLCJyc3AiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJwcmVkaWN0aW9uIiwidGhlcmVJcyIsInRvdGFsQmV0IiwiY29lZmZpY2VudCIsInR5cGUiLCJkYXRlIiwidGltZSIsImZhY3RvciIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiYnV5QnV0dG9uTmFtZSIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJwcmljZSIsImxlbmd0aCIsImVycm9yIiwidW5kZWZpbmVkIiwic2V0TWF0Y2hJZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicHJlZGljdGlvbkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsIkRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJicmVha3BvaW50cyIsIndpZHRoIiwiaXRlbVBhZGRpbmciLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInNsaWRlQ2hhbmdlIiwicCIsInN0eWxlcyIsIkFycm93IiwiZWwiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJnYW1lIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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LElBQUosV0FBWVksRUFBRSxDQUFDNUIsSUFBSCxDQUFRNkIsS0FBUixNQUFtQkMsT0FBbkIsR0FBNkJDLElBQTdCLEtBQVosY0FBc0RILEVBQUUsQ0FBQzNCLElBQXpELEVBRGUsQ0FUbkI7QUFZRSxvQkFBVSxFQUFFMkIsRUFBRSxDQUFDdkIsY0FaakI7QUFhRSxpQkFBTyxFQUFFdUIsRUFBRSxDQUFDdEIsV0FiZDtBQWVFLGtCQUFRLEVBQUU7QUFBQSxtQkFDUlcsTUFBTSxDQUFDZSxJQUFQLENBQVk7QUFDVkMsc0JBQVEsRUFBRSxhQURBO0FBRVZDLG1CQUFLLEVBQUU7QUFBRUMsb0JBQUksRUFBRVAsRUFBRSxDQUFDdEM7QUFBWDtBQUZHLGFBQVosQ0FEUTtBQUFBO0FBZlosV0FjTzhDLElBQUksQ0FBQ0MsTUFBTCxFQWRQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFmO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1DRDs7R0FyR2VoRSxlO1VBR0dPLG9ELEVBa0ROc0MsOEQ7OztLQXJERzdDLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzdmNjM1ZjE0MGVmMmQ3M2FkNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIjtcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tIFwiLi9BcnJvd3MvQXJyb3dcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL0l0ZW0vSXRlbVwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9QcmRlaWN0aW9uU2xpZGUubW9kdWxlLnNjc3NcIjtcclxuLy8gaW1hZ2VzLCBpY29uc1xyXG5pbXBvcnQgcHJlZGljdGlvbkJhY2tncm91bmQgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL21haW4vcHJlZGljdGlvbi9wcmVkQmFjay5wbmdcIjtcclxuaW1wb3J0IHsgc2xpZGVfZGF0YSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zcmMvZ2FtZXNfZGF0YS9wcmVkaWN0aW9ucy9zbGlkZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2xpYi9lci5saWJcIjtcclxuaW1wb3J0IHsgR0VUX1BSRURJQ1RJT05TIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9uc1wiO1xyXG5pbXBvcnQgeyBzZXRNYXRjaElkIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHV4L2ZlYXR1cmVzL21hdGNoU2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcmRlaWN0aW9uU2xpZGUoKSB7XHJcbiAgY29uc3QgW3NsaWRlX2RhdGEsIHNldFNsaWRlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2N1cnJlbnRNYXRjaElkLCBzZXRDdXJyZW50TWF0Y2hJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXF1ZXN0KEdFVF9QUkVESUNUSU9OUywge30sIHsgYXV0aDogdHJ1ZSB9KVxyXG4gICAgICAudGhlbigocnNwKSA9PiB7XHJcbiAgICAgICAgLy8gdG9hc3QoYFN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkYClcclxuICAgICAgICBzZXRTbGlkZURhdGEoXHJcbiAgICAgICAgICByc3AuZGF0YS5kYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgIHRlYW1PbmVJY29uOiBpdGVtW2B0ZWFtMV9pbWdfcGF0aGBdLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgIHRlYW1Ud29JY29uOiBpdGVtW2B0ZWFtMl9pbWdfcGF0aGBdLFxyXG4gICAgICAgICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdG90YWxCZXQ6IFwi0YLQsSAxLDUgLyBcIixcclxuICAgICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IFwi0LrQvtC10YQgMyw1XCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgICAgZGF0ZTogaXRlbS5kYXRlLFxyXG4gICAgICAgICAgICAgIHRpbWU6IGl0ZW0udGltZSxcclxuICAgICAgICAgICAgICBjb2VmZmljZW50OiBpdGVtLmZhY3RvcixcclxuICAgICAgICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogXCIuc2xpZGUucHJlZF9idXR0b25cIixcclxuICAgICAgICAgICAgICBidXlCdXR0b25OYW1lOiBcIi5zbGlkZS5idXlfYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgcHJlZGljdGlvblRleHQ6IFwi0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1XCIsXHJcbiAgICAgICAgICAgICAgb3JkaW5hclRleHQ6IGAke2l0ZW0udHlwZX0gLyAke2l0ZW0ucHJpY2V90YDRg9CxLmAsXHJcbiAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UgKyBcIiDRgNGD0LEuXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChyc3AuZGF0YT8uZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50TWF0Y2hJZChyc3AuZGF0YS5kYXRhWzBdLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudE1hdGNoSWQgIT09IG51bGwgJiYgY3VycmVudE1hdGNoSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkaXNwYXRjaChzZXRNYXRjaElkKGN1cnJlbnRNYXRjaElkKSk7XHJcbiAgICB9XHJcbiAgfSwgW2N1cnJlbnRNYXRjaElkXSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgcHJlZGljdGlvbkJhY2tncm91bmQuc3JjICsgXCIpXCIsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICB9LFxyXG4gICAgdGltZSA9IG5ldyBEYXRlKCksXHJcbiAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgIGJyZWFrcG9pbnRzID0gW1xyXG4gICAgICB7IHdpZHRoOiAzNzUsIGl0ZW1QYWRkaW5nOiBbMjEsIDAsIDI1LCAwXSB9LFxyXG4gICAgICB7IHdpZHRoOiA2MTYsIGl0ZW1QYWRkaW5nOiBbNzksIDAsIDc5LCAwXSB9LFxyXG4gICAgICB7IHdpZHRoOiAxOTIwLCBpdGVtUGFkZGluZzogWzExNSwgMCwgNDMsIDBdIH0sXHJcbiAgICBdO1xyXG5cclxuICB0aW1lLnNldFNlY29uZHModGltZS5nZXRTZWNvbmRzKCkgKyAxMDYwMCk7XHJcblxyXG4gIGZ1bmN0aW9uIHNsaWRlQ2hhbmdlKHApIHtcclxuICAgIHNldEN1cnJlbnRNYXRjaElkKHA/Lml0ZW0/LmlkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgIGJyZWFrUG9pbnRzPXticmVha3BvaW50c31cclxuICAgICAgICBvbkNoYW5nZT17c2xpZGVDaGFuZ2V9XHJcbiAgICAgID5cclxuICAgICAgICB7c2xpZGVfZGF0YS5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICBpZD17ZWwuaWR9XHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgdGVhbVR3b05hbWU9e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU9e2VsLnByZWRpY3Rpb25CdXR0b25OYW1lfVxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9e1wicHJlZGljdGlvblwifVxyXG4gICAgICAgICAgICBleHBpcnlUaW1lc3RhbXA9e25ldyBEYXRlKCkuc2V0U2Vjb25kcyhcclxuICAgICAgICAgICAgICBuZXcgRGF0ZShgJHtlbC5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKX0gJHtlbC50aW1lfWApXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHByZWRpY3Rpb249e2VsLnByZWRpY3Rpb25UZXh0fVxyXG4gICAgICAgICAgICBvcmRpbmFyPXtlbC5vcmRpbmFyVGV4dH1cclxuICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICBjbGlja0J1eT17KCkgPT5cclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvcHJlZGljdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9