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
        console.log(60, rsp.data.data);
        setCurrentMatchId(rsp.data.data[0].id);
      }
    })["catch"](function (error) {});
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log(currentMatchId);

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
          expiryTimestamp: new Date("".concat(el.date.split(".").reverse().join("."), " ").concat(el.time)),
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
          lineNumber: 99,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZS5qc3giXSwibmFtZXMiOlsiUHJkZWljdGlvblNsaWRlIiwidXNlU3RhdGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwiY3VycmVudE1hdGNoSWQiLCJzZXRDdXJyZW50TWF0Y2hJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0IiwiR0VUX1BSRURJQ1RJT05TIiwiYXV0aCIsInRoZW4iLCJyc3AiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJwcmVkaWN0aW9uIiwidGhlcmVJcyIsInRvdGFsQmV0IiwiY29lZmZpY2VudCIsInR5cGUiLCJkYXRlIiwidGltZSIsImZhY3RvciIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiYnV5QnV0dG9uTmFtZSIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJwcmljZSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInVuZGVmaW5lZCIsInNldE1hdGNoSWQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInByZWRpY3Rpb25CYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJEYXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYnJlYWtwb2ludHMiLCJ3aWR0aCIsIml0ZW1QYWRkaW5nIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJzbGlkZUNoYW5nZSIsInAiLCJzdHlsZXMiLCJBcnJvdyIsImVsIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RSxDQUFDM0Isb0JBTjdCO0FBT0ksdUJBQWEsRUFBRTJCLEVBQUUsQ0FBQzFCLGFBUHRCO0FBUUksNEJBQWtCLEVBQUUsWUFSeEI7QUFTSSx5QkFBZSxFQUFFLElBQUljLElBQUosV0FBY1ksRUFBRSxDQUFDOUIsSUFBSCxDQUFRK0IsS0FBUixNQUFtQkMsT0FBbkIsR0FBNkJDLElBQTdCLEtBQWQsY0FBeURILEVBQUUsQ0FBQzdCLElBQTVELEVBVHJCO0FBVUksb0JBQVUsRUFBRTZCLEVBQUUsQ0FBQ3pCLGNBVm5CO0FBV0ksaUJBQU8sRUFBRXlCLEVBQUUsQ0FBQ3hCLFdBWGhCO0FBYUksa0JBQVEsRUFBRTtBQUFBLG1CQUFNYSxNQUFNLENBQUNlLElBQVAsQ0FBWTtBQUN4QkMsc0JBQVEsRUFBRSxhQURjO0FBRXhCQyxtQkFBSyxFQUFFO0FBQUVDLG9CQUFJLEVBQUVQLEVBQUUsQ0FBQ3hDO0FBQVg7QUFGaUIsYUFBWixDQUFOO0FBQUE7QUFiZCxXQVlTZ0QsSUFBSSxDQUFDQyxNQUFMLEVBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWpCO0FBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9DSDs7R0F4R2VsRSxlO1VBSUtPLG9ELEVBbURKd0MsOEQ7OztLQXZERC9DLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDk5MGMxZmU4NTdiOWUzNWZiNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vSXRlbS9JdGVtJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ByZGVpY3Rpb25TbGlkZS5tb2R1bGUuc2NzcydcclxuLy8gaW1hZ2VzLCBpY29uc1xyXG5pbXBvcnQgcHJlZGljdGlvbkJhY2tncm91bmQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3ByZWRCYWNrLnBuZydcclxuaW1wb3J0IHsgc2xpZGVfZGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3NsaWRlJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX1BSRURJQ1RJT05TIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyBzZXRNYXRjaElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvbWF0Y2hTbGljZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcmRlaWN0aW9uU2xpZGUoKSB7XHJcblxyXG4gICAgY29uc3QgWyBzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFsgY3VycmVudE1hdGNoSWQsIHNldEN1cnJlbnRNYXRjaElkIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpPT4ge1xyXG4gICAgICAgIHJlcXVlc3QoIEdFVF9QUkVESUNUSU9OUywge30sIHsgYXV0aDogdHJ1ZSB9IClcclxuICAgICAgICAgICAgLnRoZW4oIHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0b2FzdChgU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRgKVxyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGVEYXRhKCByc3AuZGF0YS5kYXRhLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb246IGl0ZW1bYHRlYW0xX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb246IGl0ZW1bYHRlYW0yX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogaXRlbS50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiBpdGVtLmZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXJUZXh0OiBgJHtpdGVtLnR5cGV9IC8gJHtpdGVtLnByaWNlfdGA0YPQsS5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSArICcg0YDRg9CxLidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHJzcC5kYXRhPy5kYXRhLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIDYwLCByc3AuZGF0YS5kYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudE1hdGNoSWQocnNwLmRhdGEuZGF0YVswXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge30pXHJcbiAgICB9LCBbXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyggY3VycmVudE1hdGNoSWQgKTtcclxuICAgICAgICBpZiAoIGN1cnJlbnRNYXRjaElkICE9PSBudWxsICYmIGN1cnJlbnRNYXRjaElkICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldE1hdGNoSWQoY3VycmVudE1hdGNoSWQpKTtcclxuICAgICAgICB9IFxyXG4gICAgfSwgW2N1cnJlbnRNYXRjaElkIF0pXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBzdHlsZSA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHByZWRpY3Rpb25CYWNrZ3JvdW5kLnNyYyArIFwiKVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aW1lID0gbmV3IERhdGUoKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICBicmVha3BvaW50cyA9IFtcclxuICAgICAgICAgICAgeyB3aWR0aDogMzc1LCBpdGVtUGFkZGluZzogWzIxLCAwLCAyNSwgMF0gfSxcclxuICAgICAgICAgICAgeyB3aWR0aDogNjE2LCBpdGVtUGFkZGluZzogWzc5LCAwLCA3OSwgMF0gfSxcclxuICAgICAgICAgICAgeyB3aWR0aDogMTkyMCwgaXRlbVBhZGRpbmc6IFsxMTUsIDAsIDQzLCAwXSB9LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICB0aW1lLnNldFNlY29uZHModGltZS5nZXRTZWNvbmRzKCkgKyAxMDYwMCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2xpZGVDaGFuZ2UocCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRNYXRjaElkKCBwPy5pdGVtPy5pZCApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJBcnJvdz17QXJyb3d9XHJcbiAgICAgICAgICAgICAgICBicmVha1BvaW50cz17YnJlYWtwb2ludHN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2xpZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZV9kYXRhLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lTmFtZT17ZWwudGVhbU9uZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvTmFtZT17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lSWNvbj17ZWwudGVhbU9uZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvSWNvbj17ZWwudGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZT17ZWwucHJlZGljdGlvbkJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lPXtlbC5idXlCdXR0b25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25Jbk1haW5QYWdlPXsncHJlZGljdGlvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcnlUaW1lc3RhbXA9e25ldyBEYXRlKCBgJHsgZWwuZGF0ZS5zcGxpdChgLmApLnJldmVyc2UoKS5qb2luKGAuYCkgfSAke2VsLnRpbWV9YCApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbj17ZWwucHJlZGljdGlvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFyPXtlbC5vcmRpbmFyVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnV5PXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZ2FtZTogZWwuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9