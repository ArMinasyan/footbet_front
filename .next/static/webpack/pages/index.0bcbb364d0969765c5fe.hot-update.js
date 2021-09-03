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
          teamTwoName: '',
          teamTwoIcon: item["team2_img_path"],
          prediction: {
            thereIs: false,
            totalBet: 'тб 1,5 / ',
            coefficent: 'коеф 3,5'
          },
          type: item.type,
          date: item.date,
          time: item.time,
          coefficent: item.factor,
          predictionButtonName: '.slide.pred_button',
          buyButtonName: '.slide.buy_button',
          predictionText: 'Фулхем тб 1,5 / коэф 3,5',
          ordinarText: "".concat(item.type, " / ").concat(item.price, "\u0440\u0443\u0431."),
          price: item.price + ' руб.'
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
          locationInMainPage: 'prediction',
          expiryTimestamp: time,
          prediction: el.predictionText,
          ordinar: el.ordinarText,
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
          lineNumber: 97,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }, this);
}

_s(PrdeictionSlide, "JywjFOmBZgJ+KMJXRW+f4ehflEk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZS5qc3giXSwibmFtZXMiOlsiUHJkZWljdGlvblNsaWRlIiwidXNlU3RhdGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwiY3VycmVudE1hdGNoSWQiLCJzZXRDdXJyZW50TWF0Y2hJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0IiwiR0VUX1BSRURJQ1RJT05TIiwiYXV0aCIsInRoZW4iLCJyc3AiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJwcmVkaWN0aW9uIiwidGhlcmVJcyIsInRvdGFsQmV0IiwiY29lZmZpY2VudCIsInR5cGUiLCJkYXRlIiwidGltZSIsImZhY3RvciIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiYnV5QnV0dG9uTmFtZSIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJwcmljZSIsImxlbmd0aCIsImVycm9yIiwidW5kZWZpbmVkIiwic2V0TWF0Y2hJZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicHJlZGljdGlvbkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsIkRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJicmVha3BvaW50cyIsIndpZHRoIiwiaXRlbVBhZGRpbmciLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInNsaWRlQ2hhbmdlIiwicCIsInN0eWxlcyIsIkFycm93IiwiZWwiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImdhbWUiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtD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QUFFdUIsRUFBRSxDQUFDdEIsV0FYaEI7QUFhSSxrQkFBUSxFQUFFO0FBQUEsbUJBQU1XLE1BQU0sQ0FBQ1ksSUFBUCxDQUFZO0FBQ3hCQyxzQkFBUSxFQUFFLGFBRGM7QUFFeEJDLG1CQUFLLEVBQUU7QUFBRUMsb0JBQUksRUFBRUosRUFBRSxDQUFDdEM7QUFBWDtBQUZpQixhQUFaLENBQU47QUFBQTtBQWJkLFdBWVMyQyxJQUFJLENBQUNDLE1BQUwsRUFaVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBakI7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0NIOztHQXRHZTdELGU7VUFJS08sb0QsRUFpREpzQyw4RDs7O0tBckREN0MsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYmNiYjM2NGQwOTY5NzY1YzVmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4vQXJyb3dzL0Fycm93J1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9JdGVtL0l0ZW0nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJkZWljdGlvblNsaWRlLm1vZHVsZS5zY3NzJ1xyXG4vLyBpbWFnZXMsIGljb25zXHJcbmltcG9ydCBwcmVkaWN0aW9uQmFja2dyb3VuZCBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL3ByZWRpY3Rpb24vcHJlZEJhY2sucG5nJ1xyXG5pbXBvcnQgeyBzbGlkZV9kYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3JjL2dhbWVzX2RhdGEvcHJlZGljdGlvbnMvc2xpZGUnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBHRVRfUFJFRElDVElPTlMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcbmltcG9ydCB7IHNldE1hdGNoSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZGVpY3Rpb25TbGlkZSgpIHtcclxuXHJcbiAgICBjb25zdCBbIHNsaWRlX2RhdGEsIHNldFNsaWRlRGF0YSBdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgWyBjdXJyZW50TWF0Y2hJZCwgc2V0Q3VycmVudE1hdGNoSWQgXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCk9PiB7XHJcbiAgICAgICAgcmVxdWVzdCggR0VUX1BSRURJQ1RJT05TLCB7fSwgeyBhdXRoOiB0cnVlIH0gKVxyXG4gICAgICAgICAgICAudGhlbiggcnNwID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRvYXN0KGBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZGApXHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZURhdGEoIHJzcC5kYXRhLmRhdGEubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbjogaXRlbVtgdGVhbTFfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbjogaXRlbVtgdGVhbTJfaW1nX3BhdGhgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEJldDogJ9GC0LEgMSw1IC8gJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZWZmaWNlbnQ6ICfQutC+0LXRhCAzLDUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogaXRlbS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBpdGVtLnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IGl0ZW0uZmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZTogJy5zbGlkZS5wcmVkX2J1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6ICcuc2xpZGUuYnV5X2J1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25UZXh0OiAn0KTRg9C70YXQtdC8INGC0LEgMSw1IC8g0LrQvtGN0YQgMyw1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkaW5hclRleHQ6IGAke2l0ZW0udHlwZX0gLyAke2l0ZW0ucHJpY2V90YDRg9CxLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlICsgJyDRgNGD0LEuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggcnNwLmRhdGE/LmRhdGEubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50TWF0Y2hJZChyc3AuZGF0YS5kYXRhWzBdLmlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7fSlcclxuICAgIH0sIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBjdXJyZW50TWF0Y2hJZCAhPT0gbnVsbCAmJiBjdXJyZW50TWF0Y2hJZCAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRNYXRjaElkKGN1cnJlbnRNYXRjaElkKSk7XHJcbiAgICAgICAgfSBcclxuICAgIH0sIFtjdXJyZW50TWF0Y2hJZCBdKVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBwcmVkaWN0aW9uQmFja2dyb3VuZC5zcmMgKyBcIilcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGltZSA9IG5ldyBEYXRlKCksXHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICAgICAgYnJlYWtwb2ludHMgPSBbXHJcbiAgICAgICAgICAgIHsgd2lkdGg6IDM3NSwgaXRlbVBhZGRpbmc6IFsyMSwgMCwgMjUsIDBdIH0sXHJcbiAgICAgICAgICAgIHsgd2lkdGg6IDYxNiwgaXRlbVBhZGRpbmc6IFs3OSwgMCwgNzksIDBdIH0sXHJcbiAgICAgICAgICAgIHsgd2lkdGg6IDE5MjAsIGl0ZW1QYWRkaW5nOiBbMTE1LCAwLCA0MywgMF0gfSxcclxuICAgICAgICBdXHJcblxyXG4gICAgdGltZS5zZXRTZWNvbmRzKHRpbWUuZ2V0U2Vjb25kcygpICsgMTA2MDApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNsaWRlQ2hhbmdlKHApIHtcclxuICAgICAgICBzZXRDdXJyZW50TWF0Y2hJZCggcD8uaXRlbT8uaWQgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyQXJyb3c9e0Fycm93fVxyXG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludHM9e2JyZWFrcG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NsaWRlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVfZGF0YS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZU5hbWU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b05hbWU9e2VsLnRlYW1Ud29OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb249e2VsLnRlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU9e2VsLnByZWRpY3Rpb25CdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uTmFtZT17ZWwuYnV5QnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSW5NYWluUGFnZT17J3ByZWRpY3Rpb24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJ5VGltZXN0YW1wPXt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbj17ZWwucHJlZGljdGlvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFyPXtlbC5vcmRpbmFyVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9