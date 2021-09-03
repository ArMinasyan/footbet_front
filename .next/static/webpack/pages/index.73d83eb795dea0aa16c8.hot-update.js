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
          expiryTimestamp: new Date().setSeconds(new Date("".concat(el.date.split(".").reverse().join("."), " ").concat(el.time)) - new Date()),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9NYWluL1ByZWRpY3Rpb24vUHJlZGljdGlvblNsaWRlL1ByZGVpY3Rpb25TbGlkZS5qc3giXSwibmFtZXMiOlsiUHJkZWljdGlvblNsaWRlIiwidXNlU3RhdGUiLCJzbGlkZV9kYXRhIiwic2V0U2xpZGVEYXRhIiwiY3VycmVudE1hdGNoSWQiLCJzZXRDdXJyZW50TWF0Y2hJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0IiwiR0VUX1BSRURJQ1RJT05TIiwiYXV0aCIsInRoZW4iLCJyc3AiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwidGVhbU9uZU5hbWUiLCJ0ZWFtT25lSWNvbiIsInRlYW1Ud29OYW1lIiwidGVhbVR3b0ljb24iLCJwcmVkaWN0aW9uIiwidGhlcmVJcyIsInRvdGFsQmV0IiwiY29lZmZpY2VudCIsInR5cGUiLCJkYXRlIiwidGltZSIsImZhY3RvciIsInByZWRpY3Rpb25CdXR0b25OYW1lIiwiYnV5QnV0dG9uTmFtZSIsInByZWRpY3Rpb25UZXh0Iiwib3JkaW5hclRleHQiLCJwcmljZSIsImxlbmd0aCIsImVycm9yIiwidW5kZWZpbmVkIiwic2V0TWF0Y2hJZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicHJlZGljdGlvbkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsIkRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJicmVha3BvaW50cyIsIndpZHRoIiwiaXRlbVBhZGRpbmciLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInNsaWRlQ2hhbmdlIiwicCIsInN0eWxlcyIsIkFycm93IiwiZWwiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJnYW1lIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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LElBQUosV0FBWVksRUFBRSxDQUFDNUIsSUFBSCxDQUFRNkIsS0FBUixNQUFtQkMsT0FBbkIsR0FBNkJDLElBQTdCLEtBQVosY0FBc0RILEVBQUUsQ0FBQzNCLElBQXpELEtBQ0UsSUFBSWUsSUFBSixFQUZhLENBVG5CO0FBYUUsb0JBQVUsRUFBRVksRUFBRSxDQUFDdkIsY0FiakI7QUFjRSxpQkFBTyxFQUFFdUIsRUFBRSxDQUFDdEIsV0FkZDtBQWdCRSxrQkFBUSxFQUFFO0FBQUEsbUJBQ1JXLE1BQU0sQ0FBQ2UsSUFBUCxDQUFZO0FBQ1ZDLHNCQUFRLEVBQUUsYUFEQTtBQUVWQyxtQkFBSyxFQUFFO0FBQUVDLG9CQUFJLEVBQUVQLEVBQUUsQ0FBQ3RDO0FBQVg7QUFGRyxhQUFaLENBRFE7QUFBQTtBQWhCWixXQWVPOEMsSUFBSSxDQUFDQyxNQUFMLEVBZlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWY7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0NEOztHQXRHZWhFLGU7VUFHR08sb0QsRUFrRE5zQyw4RDs7O0tBckRHN0MsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43M2Q4M2ViNzk1ZGVhMGFhMTZjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gXCIuL0Fycm93cy9BcnJvd1wiO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vSXRlbS9JdGVtXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1ByZGVpY3Rpb25TbGlkZS5tb2R1bGUuc2Nzc1wiO1xyXG4vLyBpbWFnZXMsIGljb25zXHJcbmltcG9ydCBwcmVkaWN0aW9uQmFja2dyb3VuZCBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvbWFpbi9wcmVkaWN0aW9uL3ByZWRCYWNrLnBuZ1wiO1xyXG5pbXBvcnQgeyBzbGlkZV9kYXRhIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NyYy9nYW1lc19kYXRhL3ByZWRpY3Rpb25zL3NsaWRlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYlwiO1xyXG5pbXBvcnQgeyBHRVRfUFJFRElDVElPTlMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zXCI7XHJcbmltcG9ydCB7IHNldE1hdGNoSWQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvbWF0Y2hTbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZGVpY3Rpb25TbGlkZSgpIHtcclxuICBjb25zdCBbc2xpZGVfZGF0YSwgc2V0U2xpZGVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VycmVudE1hdGNoSWQsIHNldEN1cnJlbnRNYXRjaElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlcXVlc3QoR0VUX1BSRURJQ1RJT05TLCB7fSwgeyBhdXRoOiB0cnVlIH0pXHJcbiAgICAgIC50aGVuKChyc3ApID0+IHtcclxuICAgICAgICAvLyB0b2FzdChgU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRgKVxyXG4gICAgICAgIHNldFNsaWRlRGF0YShcclxuICAgICAgICAgIHJzcC5kYXRhLmRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGVhbU9uZU5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgdGVhbU9uZUljb246IGl0ZW1bYHRlYW0xX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgdGVhbVR3b05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgdGVhbVR3b0ljb246IGl0ZW1bYHRlYW0yX2ltZ19wYXRoYF0sXHJcbiAgICAgICAgICAgICAgcHJlZGljdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgdGhlcmVJczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEJldDogXCLRgtCxIDEsNSAvIFwiLFxyXG4gICAgICAgICAgICAgICAgY29lZmZpY2VudDogXCLQutC+0LXRhCAzLDVcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcclxuICAgICAgICAgICAgICBkYXRlOiBpdGVtLmRhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogaXRlbS50aW1lLFxyXG4gICAgICAgICAgICAgIGNvZWZmaWNlbnQ6IGl0ZW0uZmFjdG9yLFxyXG4gICAgICAgICAgICAgIHByZWRpY3Rpb25CdXR0b25OYW1lOiBcIi5zbGlkZS5wcmVkX2J1dHRvblwiLFxyXG4gICAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6IFwiLnNsaWRlLmJ1eV9idXR0b25cIixcclxuICAgICAgICAgICAgICBwcmVkaWN0aW9uVGV4dDogXCLQpNGD0LvRhdC10Lwg0YLQsSAxLDUgLyDQutC+0Y3RhCAzLDVcIixcclxuICAgICAgICAgICAgICBvcmRpbmFyVGV4dDogYCR7aXRlbS50eXBlfSAvICR7aXRlbS5wcmljZX3RgNGD0LEuYCxcclxuICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSArIFwiINGA0YPQsS5cIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHJzcC5kYXRhPy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHNldEN1cnJlbnRNYXRjaElkKHJzcC5kYXRhLmRhdGFbMF0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50TWF0Y2hJZCAhPT0gbnVsbCAmJiBjdXJyZW50TWF0Y2hJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldE1hdGNoSWQoY3VycmVudE1hdGNoSWQpKTtcclxuICAgIH1cclxuICB9LCBbY3VycmVudE1hdGNoSWRdKTtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBwcmVkaWN0aW9uQmFja2dyb3VuZC5zcmMgKyBcIilcIixcclxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgIH0sXHJcbiAgICB0aW1lID0gbmV3IERhdGUoKSxcclxuICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgYnJlYWtwb2ludHMgPSBbXHJcbiAgICAgIHsgd2lkdGg6IDM3NSwgaXRlbVBhZGRpbmc6IFsyMSwgMCwgMjUsIDBdIH0sXHJcbiAgICAgIHsgd2lkdGg6IDYxNiwgaXRlbVBhZGRpbmc6IFs3OSwgMCwgNzksIDBdIH0sXHJcbiAgICAgIHsgd2lkdGg6IDE5MjAsIGl0ZW1QYWRkaW5nOiBbMTE1LCAwLCA0MywgMF0gfSxcclxuICAgIF07XHJcblxyXG4gIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDEwNjAwKTtcclxuXHJcbiAgZnVuY3Rpb24gc2xpZGVDaGFuZ2UocCkge1xyXG4gICAgc2V0Q3VycmVudE1hdGNoSWQocD8uaXRlbT8uaWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgICAgICByZW5kZXJBcnJvdz17QXJyb3d9XHJcbiAgICAgICAgYnJlYWtQb2ludHM9e2JyZWFrcG9pbnRzfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtzbGlkZUNoYW5nZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzbGlkZV9kYXRhLm1hcCgoZWwpID0+IChcclxuICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgIGlkPXtlbC5pZH1cclxuICAgICAgICAgICAgdGVhbU9uZU5hbWU9e2VsLnRlYW1PbmVOYW1lfVxyXG4gICAgICAgICAgICB0ZWFtVHdvTmFtZT17ZWwudGVhbVR3b05hbWV9XHJcbiAgICAgICAgICAgIHRlYW1PbmVJY29uPXtlbC50ZWFtT25lSWNvbn1cclxuICAgICAgICAgICAgdGVhbVR3b0ljb249e2VsLnRlYW1Ud29JY29ufVxyXG4gICAgICAgICAgICBwcmVkaWN0aW9uQnV0dG9uTmFtZT17ZWwucHJlZGljdGlvbkJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU9e2VsLmJ1eUJ1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgIGxvY2F0aW9uSW5NYWluUGFnZT17XCJwcmVkaWN0aW9uXCJ9XHJcbiAgICAgICAgICAgIGV4cGlyeVRpbWVzdGFtcD17bmV3IERhdGUoKS5zZXRTZWNvbmRzKFxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGAke2VsLmRhdGUuc3BsaXQoYC5gKS5yZXZlcnNlKCkuam9pbihgLmApfSAke2VsLnRpbWV9YCkgLVxyXG4gICAgICAgICAgICAgICAgbmV3IERhdGUoKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBwcmVkaWN0aW9uPXtlbC5wcmVkaWN0aW9uVGV4dH1cclxuICAgICAgICAgICAgb3JkaW5hcj17ZWwub3JkaW5hclRleHR9XHJcbiAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgY2xpY2tCdXk9eygpID0+XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ByZWRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGdhbWU6IGVsLmlkIH0sXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==