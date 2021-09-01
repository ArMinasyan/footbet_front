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
    console.log(captureEvents);

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
          lineNumber: 98,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZS5qc3giXSwibmFtZXMiOlsiUHJkZWljdGlvblNsaWRlIiwidXNlU3RhdGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwiY3VycmVudE1hdGNoSWQiLCJzZXRDdXJyZW50TWF0Y2hJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0IiwiR0VUX1BSRURJQ1RJT05TIiwiYXV0aCIsInRoZW4iLCJyc3AiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJwcmVkaWN0aW9uIiwidGhlcmVJcyIsInRvdGFsQmV0IiwiY29lZmZpY2VudCIsInR5cGUiLCJkYXRlIiwidGltZSIsImZhY3RvciIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiYnV5QnV0dG9uTmFtZSIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJwcmljZSIsImxlbmd0aCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNhcHR1cmVFdmVudHMiLCJ1bmRlZmluZWQiLCJzZXRNYXRjaElkIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcmVkaWN0aW9uQmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiRGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImJyZWFrcG9pbnRzIiwid2lkdGgiLCJpdGVtUGFkZGluZyIsInNldFNlY29uZHMiLCJnZXRTZWNvbmRzIiwic2xpZGVDaGFuZ2UiLCJwIiwic3R5bGVzIiwiQXJyb3ciLCJlbCIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImdhbWUiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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O0FBUUksNEJBQWtCLEVBQUUsWUFSeEI7QUFTSSx5QkFBZSxFQUFFLElBQUllLElBQUosV0FBY1ksRUFBRSxDQUFDL0IsSUFBSCxDQUFRZ0MsS0FBUixNQUFtQkMsT0FBbkIsR0FBNkJDLElBQTdCLEtBQWQsY0FBeURILEVBQUUsQ0FBQzlCLElBQTVELEVBVHJCO0FBVUksb0JBQVUsRUFBRThCLEVBQUUsQ0FBQzFCLGNBVm5CO0FBV0ksaUJBQU8sRUFBRTBCLEVBQUUsQ0FBQ3pCLFdBWGhCO0FBYUksa0JBQVEsRUFBRTtBQUFBLG1CQUFNYyxNQUFNLENBQUNlLElBQVAsQ0FBWTtBQUN4QkMsc0JBQVEsRUFBRSxhQURjO0FBRXhCQyxtQkFBSyxFQUFFO0FBQUVDLG9CQUFJLEVBQUVQLEVBQUUsQ0FBQ3pDO0FBQVg7QUFGaUIsYUFBWixDQUFOO0FBQUE7QUFiZCxXQVlTaUQsSUFBSSxDQUFDQyxNQUFMLEVBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWpCO0FBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9DSDs7R0F2R2VuRSxlO1VBSUtPLG9ELEVBa0RKeUMsOEQ7OztLQXRERGhELGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjRkMTI4ZDRmMWM5NGE0YjU3NTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCdcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93cy9BcnJvdydcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vSXRlbS9JdGVtJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ByZGVpY3Rpb25TbGlkZS5tb2R1bGUuc2NzcydcclxuLy8gaW1hZ2VzLCBpY29uc1xyXG5pbXBvcnQgcHJlZGljdGlvbkJhY2tncm91bmQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3ByZWRCYWNrLnBuZydcclxuaW1wb3J0IHsgc2xpZGVfZGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3NsaWRlJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgR0VUX1BSRURJQ1RJT05TIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyBzZXRNYXRjaElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvbWF0Y2hTbGljZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcmRlaWN0aW9uU2xpZGUoKSB7XHJcblxyXG4gICAgY29uc3QgWyBzbGlkZV9kYXRhLCBzZXRTbGlkZURhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFsgY3VycmVudE1hdGNoSWQsIHNldEN1cnJlbnRNYXRjaElkIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpPT4ge1xyXG4gICAgICAgIHJlcXVlc3QoIEdFVF9QUkVESUNUSU9OUywge30sIHsgYXV0aDogdHJ1ZSB9IClcclxuICAgICAgICAgICAgLnRoZW4oIHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0b2FzdChgU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRgKVxyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGVEYXRhKCByc3AuZGF0YS5kYXRhLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZUljb246IGl0ZW1bYHRlYW0xX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b0ljb246IGl0ZW1bYHRlYW0yX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZXJlSXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxCZXQ6ICfRgtCxIDEsNSAvICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiAn0LrQvtC10YQgMyw1J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogaXRlbS50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljZW50OiBpdGVtLmZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbkJ1dHRvbk5hbWU6ICcuc2xpZGUucHJlZF9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXlCdXR0b25OYW1lOiAnLnNsaWRlLmJ1eV9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uVGV4dDogJ9Ck0YPQu9GF0LXQvCDRgtCxIDEsNSAvINC60L7RjdGEIDMsNScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXJUZXh0OiBgJHtpdGVtLnR5cGV9IC8gJHtpdGVtLnByaWNlfdGA0YPQsS5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSArICcg0YDRg9CxLidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHJzcC5kYXRhPy5kYXRhLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudE1hdGNoSWQocnNwLmRhdGEuZGF0YVswXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge30pXHJcbiAgICB9LCBbXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyggY2FwdHVyZUV2ZW50cyApO1xyXG4gICAgICAgIGlmICggY3VycmVudE1hdGNoSWQgIT09IG51bGwgJiYgY3VycmVudE1hdGNoSWQgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TWF0Y2hJZChjdXJyZW50TWF0Y2hJZCkpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LCBbY3VycmVudE1hdGNoSWQgXSlcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIHN0eWxlID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgcHJlZGljdGlvbkJhY2tncm91bmQuc3JjICsgXCIpXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWUgPSBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIGJyZWFrcG9pbnRzID0gW1xyXG4gICAgICAgICAgICB7IHdpZHRoOiAzNzUsIGl0ZW1QYWRkaW5nOiBbMjEsIDAsIDI1LCAwXSB9LFxyXG4gICAgICAgICAgICB7IHdpZHRoOiA2MTYsIGl0ZW1QYWRkaW5nOiBbNzksIDAsIDc5LCAwXSB9LFxyXG4gICAgICAgICAgICB7IHdpZHRoOiAxOTIwLCBpdGVtUGFkZGluZzogWzExNSwgMCwgNDMsIDBdIH0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDEwNjAwKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzbGlkZUNoYW5nZShwKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudE1hdGNoSWQoIHA/Lml0ZW0/LmlkICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckFycm93PXtBcnJvd31cclxuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnRzPXticmVha3BvaW50c31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzbGlkZUNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlX2RhdGEubWFwKGVsID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVOYW1lPXtlbC50ZWFtT25lTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29OYW1lPXtlbC50ZWFtVHdvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Ud29JY29uPXtlbC50ZWFtVHdvSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lPXtlbC5wcmVkaWN0aW9uQnV0dG9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkluTWFpblBhZ2U9eydwcmVkaWN0aW9uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyeVRpbWVzdGFtcD17bmV3IERhdGUoIGAkeyBlbC5kYXRlLnNwbGl0KGAuYCkucmV2ZXJzZSgpLmpvaW4oYC5gKSB9ICR7ZWwudGltZX1gICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYXI9e2VsLm9yZGluYXJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+IHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBnYW1lOiBlbC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=