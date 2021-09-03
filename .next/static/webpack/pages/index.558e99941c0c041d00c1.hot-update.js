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
          teamOneName: '',
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
          expiryTimestamp: new Date("".concat(el.date.split(".").reverse().join("."), " ").concat(el.time)).setSeconds(new Date(el.date.split(".").reverse().join(".")).getSeconds()),
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
          lineNumber: 94,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZS5qc3giXSwibmFtZXMiOlsiUHJkZWljdGlvblNsaWRlIiwidXNlU3RhdGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwiY3VycmVudE1hdGNoSWQiLCJzZXRDdXJyZW50TWF0Y2hJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0IiwiR0VUX1BSRURJQ1RJT05TIiwiYXV0aCIsInRoZW4iLCJyc3AiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJwcmVkaWN0aW9uIiwidGhlcmVJcyIsInRvdGFsQmV0IiwiY29lZmZpY2VudCIsInR5cGUiLCJkYXRlIiwidGltZSIsImZhY3RvciIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiYnV5QnV0dG9uTmFtZSIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJwcmljZSIsImxlbmd0aCIsImVycm9yIiwidW5kZWZpbmVkIiwic2V0TWF0Y2hJZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicHJlZGljdGlvbkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsIkRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJicmVha3BvaW50cyIsIndpZHRoIiwiaXRlbVBhZGRpbmciLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInNsaWRlQ2hhbmdlIiwicCIsInN0eWxlcyIsIkFycm93IiwiZWwiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJnYW1lIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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SCxDQUFRNkIsS0FBUixNQUFtQkMsT0FBbkIsR0FBNkJDLElBQTdCLEtBQVosY0FBc0RILEVBQUUsQ0FBQzNCLElBQXpELEdBQWlFcUIsVUFBakUsQ0FBNEUsSUFBSU4sSUFBSixDQUFTWSxFQUFFLENBQUM1QixJQUFILENBQVE2QixLQUFSLE1BQW1CQyxPQUFuQixHQUE2QkMsSUFBN0IsS0FBVCxFQUFpRFIsVUFBakQsRUFBNUUsQ0FWSjtBQVlFLG9CQUFVLEVBQUVLLEVBQUUsQ0FBQ3ZCLGNBWmpCO0FBYUUsaUJBQU8sRUFBRXVCLEVBQUUsQ0FBQ3RCLFdBYmQ7QUFlRSxrQkFBUSxFQUFFO0FBQUEsbUJBQ1JXLE1BQU0sQ0FBQ2UsSUFBUCxDQUFZO0FBQ1ZDLHNCQUFRLEVBQUUsYUFEQTtBQUVWQyxtQkFBSyxFQUFFO0FBQUVDLG9CQUFJLEVBQUVQLEVBQUUsQ0FBQ3RDO0FBQVg7QUFGRyxhQUFaLENBRFE7QUFBQTtBQWZaLFdBY084QyxJQUFJLENBQUNDLE1BQUwsRUFkUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZjtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7O0dBdEdlaEUsZTtVQUdHTyxvRCxFQW1ETnNDLDhEOzs7S0F0REc3QyxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU1OGU5OTk0MWMwYzA0MWQwMGMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCI7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSBcIi4vQXJyb3dzL0Fycm93XCI7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9JdGVtL0l0ZW1cIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJkZWljdGlvblNsaWRlLm1vZHVsZS5zY3NzXCI7XHJcbi8vIGltYWdlcywgaWNvbnNcclxuaW1wb3J0IHByZWRpY3Rpb25CYWNrZ3JvdW5kIGZyb20gXCIvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHJlZEJhY2sucG5nXCI7XHJcbmltcG9ydCB7IHNsaWRlX2RhdGEgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGVcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliXCI7XHJcbmltcG9ydCB7IEdFVF9QUkVESUNUSU9OUyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnNcIjtcclxuaW1wb3J0IHsgc2V0TWF0Y2hJZCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJkZWljdGlvblNsaWRlKCkge1xyXG4gIGNvbnN0IFtzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50TWF0Y2hJZCwgc2V0Q3VycmVudE1hdGNoSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVxdWVzdChHRVRfUFJFRElDVElPTlMsIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKHJzcCkgPT4ge1xyXG4gICAgICAgIC8vIHRvYXN0KGBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZGApXHJcbiAgICAgICAgc2V0U2xpZGVEYXRhKFxyXG4gICAgICAgICAgcnNwLmRhdGEuZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0ZWFtT25lTmFtZTogJycsXHJcbiAgICAgICAgICAgICAgdGVhbU9uZUljb246IGl0ZW1bYHRlYW0xX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgdGVhbVR3b05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b0ljb246IGl0ZW1bYHRlYW0yX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEJldDogXCLRgtCxIDEsNSAvIFwiLFxyXG4gICAgICAgICAgICAgICAgY29lZmZpY2VudDogXCLQutC+0LXRhCAzLDVcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcclxuICAgICAgICAgICAgICBkYXRlOiBpdGVtLmRhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogaXRlbS50aW1lLFxyXG4gICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IGl0ZW0uZmFjdG9yLFxyXG4gICAgICAgICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiBcIi5zbGlkZS5wcmVkX2J1dHRvblwiLFxyXG4gICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6IFwiLnNsaWRlLmJ1eV9idXR0b25cIixcclxuICAgICAgICAgICAgICBwcmVkaWN0aW9uVGV4dDogXCLQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDVcIixcclxuICAgICAgICAgICAgICBvcmRpbmFyVGV4dDogYCR7aXRlbS50eXBlfSAvICR7aXRlbS5wcmljZX3RgNGD0LEuYCxcclxuICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSArIFwiINGA0YPQsS5cIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHJzcC5kYXRhPy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHNldEN1cnJlbnRNYXRjaElkKHJzcC5kYXRhLmRhdGFbMF0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50TWF0Y2hJZCAhPT0gbnVsbCAmJiBjdXJyZW50TWF0Y2hJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldE1hdGNoSWQoY3VycmVudE1hdGNoSWQpKTtcclxuICAgIH1cclxuICB9LCBbY3VycmVudE1hdGNoSWRdKTtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBwcmVkaWN0aW9uQmFja2dyb3VuZC5zcmMgKyBcIilcIixcclxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgIH0sXHJcblxyXG4gICAgdGltZSA9IG5ldyBEYXRlKCksXHJcbiAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgIGJyZWFrcG9pbnRzID0gW1xyXG4gICAgICB7IHdpZHRoOiAzNzUsIGl0ZW1QYWRkaW5nOiBbMjEsIDAsIDI1LCAwXSB9LFxyXG4gICAgICB7IHdpZHRoOiA2MTYsIGl0ZW1QYWRkaW5nOiBbNzksIDAsIDc5LCAwXSB9LFxyXG4gICAgICB7IHdpZHRoOiAxOTIwLCBpdGVtUGFkZGluZzogWzExNSwgMCwgNDMsIDBdIH0sXHJcbiAgICBdO1xyXG5cclxuICB0aW1lLnNldFNlY29uZHModGltZS5nZXRTZWNvbmRzKCkgKyAxMDYwMCk7XHJcblxyXG4gIGZ1bmN0aW9uIHNsaWRlQ2hhbmdlKHApIHtcclxuICAgIHNldEN1cnJlbnRNYXRjaElkKHA/Lml0ZW0/LmlkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgIGJyZWFrUG9pbnRzPXticmVha3BvaW50c31cclxuICAgICAgICBvbkNoYW5nZT17c2xpZGVDaGFuZ2V9XHJcbiAgICAgID5cclxuICAgICAgICB7c2xpZGVfZGF0YS5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICBpZD17ZWwuaWR9XHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgdGVhbVR3b05hbWU9e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU9e2VsLnByZWRpY3Rpb25CdXR0b25OYW1lfVxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9e1wicHJlZGljdGlvblwifVxyXG4gICAgICAgICAgICBleHBpcnlUaW1lc3RhbXA9e1xyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGAke2VsLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke2VsLnRpbWV9YCkuc2V0U2Vjb25kcyhuZXcgRGF0ZShlbC5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKSkuZ2V0U2Vjb25kcygpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZWRpY3Rpb249e2VsLnByZWRpY3Rpb25UZXh0fVxyXG4gICAgICAgICAgICBvcmRpbmFyPXtlbC5vcmRpbmFyVGV4dH1cclxuICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICBjbGlja0J1eT17KCkgPT5cclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvcHJlZGljdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9