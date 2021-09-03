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

  console.log(new Date(slide_data[0].date.split(".").reverse().join(".") + " " + slide_data[0].time).getTime() / 1000 / 60 / 60);
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
          lineNumber: 104,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZS5qc3giXSwibmFtZXMiOlsiUHJkZWljdGlvblNsaWRlIiwidXNlU3RhdGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwiY3VycmVudE1hdGNoSWQiLCJzZXRDdXJyZW50TWF0Y2hJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0IiwiR0VUX1BSRURJQ1RJT05TIiwiYXV0aCIsInRoZW4iLCJyc3AiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJwcmVkaWN0aW9uIiwidGhlcmVJcyIsInRvdGFsQmV0IiwiY29lZmZpY2VudCIsInR5cGUiLCJkYXRlIiwidGltZSIsImZhY3RvciIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiYnV5QnV0dG9uTmFtZSIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJwcmljZSIsImxlbmd0aCIsImVycm9yIiwidW5kZWZpbmVkIiwic2V0TWF0Y2hJZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicHJlZGljdGlvbkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsIkRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJicmVha3BvaW50cyIsIndpZHRoIiwiaXRlbVBhZGRpbmciLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInNsaWRlQ2hhbmdlIiwicCIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwiZ2V0VGltZSIsInN0eWxlcyIsIkFycm93IiwiZWwiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImdhbWUiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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QyxFQUFFLENBQUN6QyxXQUhsQjtBQUlFLHFCQUFXLEVBQUV5QyxFQUFFLENBQUMxQyxXQUpsQjtBQUtFLHFCQUFXLEVBQUUwQyxFQUFFLENBQUN4QyxXQUxsQjtBQU1FLDhCQUFvQixFQUFFd0MsRUFBRSxDQUFDL0Isb0JBTjNCO0FBT0UsdUJBQWEsRUFBRStCLEVBQUUsQ0FBQzlCLGFBUHBCO0FBUUUsNEJBQWtCLEVBQUUsWUFSdEI7QUFTRSx5QkFBZSxFQUNiLElBQUlZLElBQUosV0FBWWtCLEVBQUUsQ0FBQ2xDLElBQUgsQ0FBUTRCLEtBQVIsTUFBbUJDLE9BQW5CLEdBQTZCQyxJQUE3QixLQUFaLGNBQXNESSxFQUFFLENBQUNqQyxJQUF6RCxFQVZKO0FBWUUsb0JBQVUsRUFBRWlDLEVBQUUsQ0FBQzdCLGNBWmpCO0FBYUUsaUJBQU8sRUFBRTZCLEVBQUUsQ0FBQzVCLFdBYmQ7QUFlRSxrQkFBUSxFQUFFO0FBQUEsbUJBQ1JXLE1BQU0sQ0FBQ2tCLElBQVAsQ0FBWTtBQUNWQyxzQkFBUSxFQUFFLGFBREE7QUFFVkMsbUJBQUssRUFBRTtBQUFFQyxvQkFBSSxFQUFFSixFQUFFLENBQUM1QztBQUFYO0FBRkcsYUFBWixDQURRO0FBQUE7QUFmWixXQWNPaUQsSUFBSSxDQUFDQyxNQUFMLEVBZFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWY7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNEOztHQWhIZW5FLGU7VUFHR08sb0QsRUFrRE5zQyw4RDs7O0tBckRHN0MsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xM2Q5MWFjODAzMTQzNWU2ZTVmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gXCIuL0Fycm93cy9BcnJvd1wiO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vSXRlbS9JdGVtXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1ByZGVpY3Rpb25TbGlkZS5tb2R1bGUuc2Nzc1wiO1xyXG4vLyBpbWFnZXMsIGljb25zXHJcbmltcG9ydCBwcmVkaWN0aW9uQmFja2dyb3VuZCBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3ByZWRCYWNrLnBuZ1wiO1xyXG5pbXBvcnQgeyBzbGlkZV9kYXRhIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3NsaWRlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYlwiO1xyXG5pbXBvcnQgeyBHRVRfUFJFRElDVElPTlMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zXCI7XHJcbmltcG9ydCB7IHNldE1hdGNoSWQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvbWF0Y2hTbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZGVpY3Rpb25TbGlkZSgpIHtcclxuICBjb25zdCBbc2xpZGVfZGF0YSwgc2V0U2xpZGVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VycmVudE1hdGNoSWQsIHNldEN1cnJlbnRNYXRjaElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlcXVlc3QoR0VUX1BSRURJQ1RJT05TLCB7fSwgeyBhdXRoOiB0cnVlIH0pXHJcbiAgICAgIC50aGVuKChyc3ApID0+IHtcclxuICAgICAgICAvLyB0b2FzdChgU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRgKVxyXG4gICAgICAgIHNldFNsaWRlRGF0YShcclxuICAgICAgICAgIHJzcC5kYXRhLmRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGVhbU9uZU5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgdGVhbU9uZUljb246IGl0ZW1bYHRlYW0xX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgdGVhbVR3b05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b0ljb246IGl0ZW1bYHRlYW0yX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEJldDogXCLRgtCxIDEsNSAvIFwiLFxyXG4gICAgICAgICAgICAgICAgY29lZmZpY2VudDogXCLQutC+0LXRhCAzLDVcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcclxuICAgICAgICAgICAgICBkYXRlOiBpdGVtLmRhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogaXRlbS50aW1lLFxyXG4gICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IGl0ZW0uZmFjdG9yLFxyXG4gICAgICAgICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiBcIi5zbGlkZS5wcmVkX2J1dHRvblwiLFxyXG4gICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6IFwiLnNsaWRlLmJ1eV9idXR0b25cIixcclxuICAgICAgICAgICAgICBwcmVkaWN0aW9uVGV4dDogXCLQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDVcIixcclxuICAgICAgICAgICAgICBvcmRpbmFyVGV4dDogYCR7aXRlbS50eXBlfSAvICR7aXRlbS5wcmljZX3RgNGD0LEuYCxcclxuICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSArIFwiINGA0YPQsS5cIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHJzcC5kYXRhPy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHNldEN1cnJlbnRNYXRjaElkKHJzcC5kYXRhLmRhdGFbMF0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50TWF0Y2hJZCAhPT0gbnVsbCAmJiBjdXJyZW50TWF0Y2hJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldE1hdGNoSWQoY3VycmVudE1hdGNoSWQpKTtcclxuICAgIH1cclxuICB9LCBbY3VycmVudE1hdGNoSWRdKTtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBwcmVkaWN0aW9uQmFja2dyb3VuZC5zcmMgKyBcIilcIixcclxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgIH0sXHJcbiAgICB0aW1lID0gbmV3IERhdGUoKSxcclxuICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgYnJlYWtwb2ludHMgPSBbXHJcbiAgICAgIHsgd2lkdGg6IDM3NSwgaXRlbVBhZGRpbmc6IFsyMSwgMCwgMjUsIDBdIH0sXHJcbiAgICAgIHsgd2lkdGg6IDYxNiwgaXRlbVBhZGRpbmc6IFs3OSwgMCwgNzksIDBdIH0sXHJcbiAgICAgIHsgd2lkdGg6IDE5MjAsIGl0ZW1QYWRkaW5nOiBbMTE1LCAwLCA0MywgMF0gfSxcclxuICAgIF07XHJcblxyXG4gIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDEwNjAwKTtcclxuXHJcbiAgZnVuY3Rpb24gc2xpZGVDaGFuZ2UocCkge1xyXG4gICAgc2V0Q3VycmVudE1hdGNoSWQocD8uaXRlbT8uaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBuZXcgRGF0ZShcclxuICAgICAgc2xpZGVfZGF0YVswXS5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKSArXHJcbiAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgIHNsaWRlX2RhdGFbMF0udGltZVxyXG4gICAgKS5nZXRUaW1lKCkgL1xyXG4gICAgICAxMDAwIC9cclxuICAgICAgNjAgL1xyXG4gICAgICA2MFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgIGJyZWFrUG9pbnRzPXticmVha3BvaW50c31cclxuICAgICAgICBvbkNoYW5nZT17c2xpZGVDaGFuZ2V9XHJcbiAgICAgID5cclxuICAgICAgICB7c2xpZGVfZGF0YS5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICBpZD17ZWwuaWR9XHJcbiAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgdGVhbVR3b05hbWU9e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU9e2VsLnByZWRpY3Rpb25CdXR0b25OYW1lfVxyXG4gICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9e1wicHJlZGljdGlvblwifVxyXG4gICAgICAgICAgICBleHBpcnlUaW1lc3RhbXA9e1xyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGAke2VsLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke2VsLnRpbWV9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9uVGV4dH1cclxuICAgICAgICAgICAgb3JkaW5hcj17ZWwub3JkaW5hclRleHR9XHJcbiAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==