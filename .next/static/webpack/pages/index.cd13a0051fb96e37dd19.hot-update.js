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
          expiryTimestamp: new Date().setSeconds(3600),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZS5qc3giXSwibmFtZXMiOlsiUHJkZWljdGlvblNsaWRlIiwidXNlU3RhdGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwiY3VycmVudE1hdGNoSWQiLCJzZXRDdXJyZW50TWF0Y2hJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0IiwiR0VUX1BSRURJQ1RJT05TIiwiYXV0aCIsInRoZW4iLCJyc3AiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJwcmVkaWN0aW9uIiwidGhlcmVJcyIsInRvdGFsQmV0IiwiY29lZmZpY2VudCIsInR5cGUiLCJkYXRlIiwidGltZSIsImZhY3RvciIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiYnV5QnV0dG9uTmFtZSIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJwcmljZSIsImxlbmd0aCIsImVycm9yIiwidW5kZWZpbmVkIiwic2V0TWF0Y2hJZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicHJlZGljdGlvbkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsIkRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJicmVha3BvaW50cyIsIndpZHRoIiwiaXRlbVBhZGRpbmciLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInNsaWRlQ2hhbmdlIiwicCIsInN0eWxlcyIsIkFycm93IiwiZWwiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImdhbWUiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtD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QUUsQ0FBQ3ZCLGNBWmpCO0FBYUUsaUJBQU8sRUFBRXVCLEVBQUUsQ0FBQ3RCLFdBYmQ7QUFlRSxrQkFBUSxFQUFFO0FBQUEsbUJBQ1JXLE1BQU0sQ0FBQ1ksSUFBUCxDQUFZO0FBQ1ZDLHNCQUFRLEVBQUUsYUFEQTtBQUVWQyxtQkFBSyxFQUFFO0FBQUVDLG9CQUFJLEVBQUVKLEVBQUUsQ0FBQ3RDO0FBQVg7QUFGRyxhQUFaLENBRFE7QUFBQTtBQWZaLFdBY08yQyxJQUFJLENBQUNDLE1BQUwsRUFkUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZjtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7O0dBckdlN0QsZTtVQUdHTyxvRCxFQWtETnNDLDhEOzs7S0FyREc3QyxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkMTNhMDA1MWZiOTZlMzdkZDE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCI7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSBcIi4vQXJyb3dzL0Fycm93XCI7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9JdGVtL0l0ZW1cIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJkZWljdGlvblNsaWRlLm1vZHVsZS5zY3NzXCI7XHJcbi8vIGltYWdlcywgaWNvbnNcclxuaW1wb3J0IHByZWRpY3Rpb25CYWNrZ3JvdW5kIGZyb20gXCIvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHJlZEJhY2sucG5nXCI7XHJcbmltcG9ydCB7IHNsaWRlX2RhdGEgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGVcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliXCI7XHJcbmltcG9ydCB7IEdFVF9QUkVESUNUSU9OUyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnNcIjtcclxuaW1wb3J0IHsgc2V0TWF0Y2hJZCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJkZWljdGlvblNsaWRlKCkge1xyXG4gIGNvbnN0IFtzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50TWF0Y2hJZCwgc2V0Q3VycmVudE1hdGNoSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVxdWVzdChHRVRfUFJFRElDVElPTlMsIHt9LCB7IGF1dGg6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKHJzcCkgPT4ge1xyXG4gICAgICAgIC8vIHRvYXN0KGBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZGApXHJcbiAgICAgICAgc2V0U2xpZGVEYXRhKFxyXG4gICAgICAgICAgcnNwLmRhdGEuZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0ZWFtT25lTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogaXRlbVtgdGVhbTFfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICB0ZWFtVHdvTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogaXRlbVtgdGVhbTJfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICBwcmVkaWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0aGVyZUlzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsQmV0OiBcItGC0LEgMSw1IC8gXCIsXHJcbiAgICAgICAgICAgICAgICBjb2VmZmljZW50OiBcItC60L7QtdGEIDMsNVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZSxcclxuICAgICAgICAgICAgICB0aW1lOiBpdGVtLnRpbWUsXHJcbiAgICAgICAgICAgICAgY29lZmZpY2VudDogaXRlbS5mYWN0b3IsXHJcbiAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6IFwiLnNsaWRlLnByZWRfYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogXCIuc2xpZGUuYnV5X2J1dHRvblwiLFxyXG4gICAgICAgICAgICAgIHByZWRpY3Rpb25UZXh0OiBcItCk0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNVwiLFxyXG4gICAgICAgICAgICAgIG9yZGluYXJUZXh0OiBgJHtpdGVtLnR5cGV9IC8gJHtpdGVtLnByaWNlfdGA0YPQsS5gLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlICsgXCIg0YDRg9CxLlwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAocnNwLmRhdGE/LmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc2V0Q3VycmVudE1hdGNoSWQocnNwLmRhdGEuZGF0YVswXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRNYXRjaElkICE9PSBudWxsICYmIGN1cnJlbnRNYXRjaElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TWF0Y2hJZChjdXJyZW50TWF0Y2hJZCkpO1xyXG4gICAgfVxyXG4gIH0sIFtjdXJyZW50TWF0Y2hJZF0pO1xyXG5cclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHByZWRpY3Rpb25CYWNrZ3JvdW5kLnNyYyArIFwiKVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgfSxcclxuICAgIHRpbWUgPSBuZXcgRGF0ZSgpLFxyXG4gICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICBicmVha3BvaW50cyA9IFtcclxuICAgICAgeyB3aWR0aDogMzc1LCBpdGVtUGFkZGluZzogWzIxLCAwLCAyNSwgMF0gfSxcclxuICAgICAgeyB3aWR0aDogNjE2LCBpdGVtUGFkZGluZzogWzc5LCAwLCA3OSwgMF0gfSxcclxuICAgICAgeyB3aWR0aDogMTkyMCwgaXRlbVBhZGRpbmc6IFsxMTUsIDAsIDQzLCAwXSB9LFxyXG4gICAgXTtcclxuXHJcbiAgdGltZS5zZXRTZWNvbmRzKHRpbWUuZ2V0U2Vjb25kcygpICsgMTA2MDApO1xyXG5cclxuICBmdW5jdGlvbiBzbGlkZUNoYW5nZShwKSB7XHJcbiAgICBzZXRDdXJyZW50TWF0Y2hJZChwPy5pdGVtPy5pZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxyXG4gICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICBicmVha1BvaW50cz17YnJlYWtwb2ludHN9XHJcbiAgICAgICAgb25DaGFuZ2U9e3NsaWRlQ2hhbmdlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3NsaWRlX2RhdGEubWFwKChlbCkgPT4gKFxyXG4gICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgaWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICB0ZWFtT25lTmFtZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgIHRlYW1Ud29OYW1lPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lPXtlbC5wcmVkaWN0aW9uQnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXtcInByZWRpY3Rpb25cIn1cclxuICAgICAgICAgICAgZXhwaXJ5VGltZXN0YW1wPXtuZXcgRGF0ZSgpLnNldFNlY29uZHMoXHJcbiAgICAgICAgICAgICAgMzYwMFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9uVGV4dH1cclxuICAgICAgICAgICAgb3JkaW5hcj17ZWwub3JkaW5hclRleHR9XHJcbiAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==