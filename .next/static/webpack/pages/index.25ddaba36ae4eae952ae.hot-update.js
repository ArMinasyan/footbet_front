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

  console.log(new Date(slide_data[0].date.split(".").reverse().join(".") + slide_data[0].time));
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
          expiryTimestamp: new Date("".concat(el.date.split(".").reverse().join("."), " ").concat(el.time)),
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
          lineNumber: 99,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZS5qc3giXSwibmFtZXMiOlsiUHJkZWljdGlvblNsaWRlIiwidXNlU3RhdGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwiY3VycmVudE1hdGNoSWQiLCJzZXRDdXJyZW50TWF0Y2hJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0IiwiR0VUX1BSRURJQ1RJT05TIiwiYXV0aCIsInRoZW4iLCJyc3AiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJwcmVkaWN0aW9uIiwidGhlcmVJcyIsInRvdGFsQmV0IiwiY29lZmZpY2VudCIsInR5cGUiLCJkYXRlIiwidGltZSIsImZhY3RvciIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiYnV5QnV0dG9uTmFtZSIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJwcmljZSIsImxlbmd0aCIsImVycm9yIiwidW5kZWZpbmVkIiwic2V0TWF0Y2hJZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicHJlZGljdGlvbkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsIkRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJicmVha3BvaW50cyIsIndpZHRoIiwiaXRlbVBhZGRpbmciLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInNsaWRlQ2hhbmdlIiwicCIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwic3R5bGVzIiwiQXJyb3ciLCJlbCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBS0UscUJBQVcsRUFBRXlDLEVBQUUsQ0FBQ3ZDLFdBTGxCO0FBTUUsOEJBQW9CLEVBQUV1QyxFQUFFLENBQUM5QixvQkFOM0I7QUFPRSx1QkFBYSxFQUFFOEIsRUFBRSxDQUFDN0IsYUFQcEI7QUFRRSw0QkFBa0IsRUFBRSxZQVJ0QjtBQVNFLHlCQUFlLEVBQ2IsSUFBSVksSUFBSixXQUFZaUIsRUFBRSxDQUFDakMsSUFBSCxDQUFRNEIsS0FBUixNQUFtQkMsT0FBbkIsR0FBNkJDLElBQTdCLEtBQVosY0FBc0RHLEVBQUUsQ0FBQ2hDLElBQXpELEVBVko7QUFZRSxvQkFBVSxFQUFFZ0MsRUFBRSxDQUFDNUIsY0FaakI7QUFhRSxpQkFBTyxFQUFFNEIsRUFBRSxDQUFDM0IsV0FiZDtBQWVFLGtCQUFRLEVBQUU7QUFBQSxtQkFDUlcsTUFBTSxDQUFDaUIsSUFBUCxDQUFZO0FBQ1ZDLHNCQUFRLEVBQUUsYUFEQTtBQUVWQyxtQkFBSyxFQUFFO0FBQUVDLG9CQUFJLEVBQUVKLEVBQUUsQ0FBQzNDO0FBQVg7QUFGRyxhQUFaLENBRFE7QUFBQTtBQWZaLFdBY09nRCxJQUFJLENBQUNDLE1BQUwsRUFkUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZjtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7O0dBM0dlbEUsZTtVQUdHTyxvRCxFQWtETnNDLDhEOzs7S0FyREc3QyxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI1ZGRhYmEzNmFlNGVhZTk1MmFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCI7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSBcIi4vQXJyb3dzL0Fycm93XCI7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9JdGVtL0l0ZW1cIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJkZWljdGlvblNsaWRlLm1vZHVsZS5zY3NzXCI7XHJcbi8vIGltYWdlcywgaWNvbnNcclxuaW1wb3J0IHByZWRpY3Rpb25CYWNrZ3JvdW5kIGZyb20gXCIvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHJlZEJhY2sucG5nXCI7XHJcbmltcG9ydCB7IHNsaWRlX2RhdGEgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGVcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliXCI7XHJcbmltcG9ydCB7IEdFVF9QUkVESUNUSU9OUyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnNcIjtcclxuaW1wb3J0IHsgc2V0TWF0Y2hJZCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJkZWljdGlvblNsaWRlKCkge1xyXG4gIGNvbnN0IFtzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50TWF0Y2hJZCwgc2V0Q3VycmVudE1hdGNoSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVxdWVzdChHRVRfUFJFRElDVElPTlMsIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKHJzcCkgPT4ge1xyXG4gICAgICAgIC8vIHRvYXN0KGBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZGApXHJcbiAgICAgICAgc2V0U2xpZGVEYXRhKFxyXG4gICAgICAgICAgcnNwLmRhdGEuZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0ZWFtT25lTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogaXRlbVtgdGVhbTFfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICB0ZWFtVHdvTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogaXRlbVtgdGVhbTJfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsQmV0OiBcItGC0LEgMSw1IC8gXCIsXHJcbiAgICAgICAgICAgICAgICBjb2VmZmljZW50OiBcItC60L7QtdGEIDMsNVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZSxcclxuICAgICAgICAgICAgICB0aW1lOiBpdGVtLnRpbWUsXHJcbiAgICAgICAgICAgICAgY29lZmZpY2VudDogaXRlbS5mYWN0b3IsXHJcbiAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6IFwiLnNsaWRlLnByZWRfYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogXCIuc2xpZGUuYnV5X2J1dHRvblwiLFxyXG4gICAgICAgICAgICAgIHByZWRpY3Rpb25UZXh0OiBcItCk0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNVwiLFxyXG4gICAgICAgICAgICAgIG9yZGluYXJUZXh0OiBgJHtpdGVtLnR5cGV9IC8gJHtpdGVtLnByaWNlfdGA0YPQsS5gLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlICsgXCIg0YDRg9CxLlwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAocnNwLmRhdGE/LmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc2V0Q3VycmVudE1hdGNoSWQocnNwLmRhdGEuZGF0YVswXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRNYXRjaElkICE9PSBudWxsICYmIGN1cnJlbnRNYXRjaElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TWF0Y2hJZChjdXJyZW50TWF0Y2hJZCkpO1xyXG4gICAgfVxyXG4gIH0sIFtjdXJyZW50TWF0Y2hJZF0pO1xyXG5cclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHByZWRpY3Rpb25CYWNrZ3JvdW5kLnNyYyArIFwiKVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgfSxcclxuICAgIHRpbWUgPSBuZXcgRGF0ZSgpLFxyXG4gICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICBicmVha3BvaW50cyA9IFtcclxuICAgICAgeyB3aWR0aDogMzc1LCBpdGVtUGFkZGluZzogWzIxLCAwLCAyNSwgMF0gfSxcclxuICAgICAgeyB3aWR0aDogNjE2LCBpdGVtUGFkZGluZzogWzc5LCAwLCA3OSwgMF0gfSxcclxuICAgICAgeyB3aWR0aDogMTkyMCwgaXRlbVBhZGRpbmc6IFsxMTUsIDAsIDQzLCAwXSB9LFxyXG4gICAgXTtcclxuXHJcbiAgdGltZS5zZXRTZWNvbmRzKHRpbWUuZ2V0U2Vjb25kcygpICsgMTA2MDApO1xyXG5cclxuICBmdW5jdGlvbiBzbGlkZUNoYW5nZShwKSB7XHJcbiAgICBzZXRDdXJyZW50TWF0Y2hJZChwPy5pdGVtPy5pZCk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhcclxuICAgIG5ldyBEYXRlKFxyXG4gICAgICBzbGlkZV9kYXRhWzBdLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApICsgc2xpZGVfZGF0YVswXS50aW1lXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgICAgICByZW5kZXJBcnJvdz17QXJyb3d9XHJcbiAgICAgICAgYnJlYWtQb2ludHM9e2JyZWFrcG9pbnRzfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtzbGlkZUNoYW5nZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzbGlkZV9kYXRhLm1hcCgoZWwpID0+IChcclxuICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgIGlkPXtlbC5pZH1cclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZT17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZT17ZWwucHJlZGljdGlvbkJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgIGxvY2F0aW9uSW5NYWluUGFnZT17XCJwcmVkaWN0aW9uXCJ9XHJcbiAgICAgICAgICAgIGV4cGlyeVRpbWVzdGFtcD17XHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoYCR7ZWwuZGF0ZS5zcGxpdChgLmApLnJldmVyc2UoKS5qb2luKGAuYCl9ICR7ZWwudGltZX1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZWRpY3Rpb249e2VsLnByZWRpY3Rpb25UZXh0fVxyXG4gICAgICAgICAgICBvcmRpbmFyPXtlbC5vcmRpbmFyVGV4dH1cclxuICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICBjbGlja0J1eT17KCkgPT5cclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvcHJlZGljdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9