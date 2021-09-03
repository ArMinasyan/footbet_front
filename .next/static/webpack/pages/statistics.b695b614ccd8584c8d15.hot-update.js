self["webpackHotUpdate_N_E"]("pages/statistics",{

/***/ "./components/Pages/Statistics/Tab/Row/Row.jsx":
/*!*****************************************************!*\
  !*** ./components/Pages/Statistics/Tab/Row/Row.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Row": function() { return /* binding */ Row; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var _Row_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Row.module.scss */ "./components/Pages/Statistics/Tab/Row/Row.module.scss");
/* harmony import */ var _Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Row_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Statistics\\Tab\\Row\\Row.jsx",
    _s = $RefreshSig$();

// translation
 // styles


function Row(_ref) {
  _s();

  var order = _ref.order,
      teamOneName = _ref.teamOneName,
      teamOneIcon = _ref.teamOneIcon,
      teamTwoName = _ref.teamTwoName,
      teamTwoIcon = _ref.teamTwoIcon,
      prediction = _ref.prediction,
      date = _ref.date,
      time = _ref.time,
      score = _ref.score,
      gameResult = _ref.gameResult;

  var getResult = function getResult(res) {
    switch (res) {
      case "победа":
        return {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().win),
          translationText: "Победа"
        };

      case "Возврат":
        return {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().return),
          translationText: "return"
        };

      case "поражение":
        return {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lose),
          translationText: "lose"
        };
    }

    return {
      className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lose),
      translationText: "lose"
    };
  };

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__.default)("statistics"),
      t = _useTranslation.t,
      translationPath = "tab.wallpers.",
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().order),
            children: [order, "."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamOne),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: teamOneName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              style: {
                width: "50px",
                height: "50px"
              },
              src: teamOneIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().vs),
            children: "VS."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamTwo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: teamTwoName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              style: {
                width: "50px",
                height: "50px"
              },
              src: teamTwoIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction),
          children: prediction ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_content),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_title),
              children: translate("prediction")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_body),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: prediction
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().simulator)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date_time),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tablet_score),
            children: score
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().time),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: time
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().score),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: score
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().statistic_wallper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: getResult(gameResult).className,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: translate(getResult(gameResult).translationText)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(Row, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__.default];
});

_c = Row;

var _c;

$RefreshReg$(_c, "Row");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9TdGF0aXN0aWNzL1RhYi9Sb3cvUm93LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJvcmRlciIsInRlYW1PbmVOYW1lIiwidGVhbU9uZUljb24iLCJ0ZWFtVHdvTmFtZSIsInRlYW1Ud29JY29uIiwicHJlZGljdGlvbiIsImRhdGUiLCJ0aW1lIiwic2NvcmUiLCJnYW1lUmVzdWx0IiwiZ2V0UmVzdWx0IiwicmVzIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwidHJhbnNsYXRpb25UZXh0IiwidXNlVHJhbnNsYXRpb24iLCJ0IiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5Iiwid2lkdGgiLCJoZWlnaHQiLCJzaW11bGF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFFTyxTQUFTQSxHQUFULE9BV0o7QUFBQTs7QUFBQSxNQVZEQyxLQVVDLFFBVkRBLEtBVUM7QUFBQSxNQVREQyxXQVNDLFFBVERBLFdBU0M7QUFBQSxNQVJEQyxXQVFDLFFBUkRBLFdBUUM7QUFBQSxNQVBEQyxXQU9DLFFBUERBLFdBT0M7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxVQUtDLFFBTERBLFVBS0M7QUFBQSxNQUpEQyxJQUlDLFFBSkRBLElBSUM7QUFBQSxNQUhEQyxJQUdDLFFBSERBLElBR0M7QUFBQSxNQUZEQyxLQUVDLFFBRkRBLEtBRUM7QUFBQSxNQUREQyxVQUNDLFFBRERBLFVBQ0M7O0FBQ0QsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFTO0FBQ3pCLFlBQVFBLEdBQVI7QUFDRSxXQUFLLFFBQUw7QUFDRSxlQUFPO0FBQ0xDLG1CQUFTLEVBQUVDLDZEQUROO0FBRUxDLHlCQUFlLEVBQUU7QUFGWixTQUFQOztBQUlGLFdBQUssU0FBTDtBQUNFLGVBQU87QUFDTEYsbUJBQVMsRUFBRUMsZ0VBRE47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akNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVFRDs7R0FoSGVmLEc7VUFxQ0pnQixrRTs7O0tBckNJaEIsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGF0aXN0aWNzLmI2OTViNjE0Y2NkODU4NGM4ZDE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0cmFuc2xhdGlvblxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Jvdy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7XHJcbiAgb3JkZXIsXHJcbiAgdGVhbU9uZU5hbWUsXHJcbiAgdGVhbU9uZUljb24sXHJcbiAgdGVhbVR3b05hbWUsXHJcbiAgdGVhbVR3b0ljb24sXHJcbiAgcHJlZGljdGlvbixcclxuICBkYXRlLFxyXG4gIHRpbWUsXHJcbiAgc2NvcmUsXHJcbiAgZ2FtZVJlc3VsdCAvKiogaXQgY2FuIGJlOiBcIndpblwiLCBcImxvc2VcIiwgXCJyZXR1cm5cIiAgKi8sXHJcbn0pIHtcclxuICBjb25zdCBnZXRSZXN1bHQgPSAocmVzKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHJlcykge1xyXG4gICAgICBjYXNlIFwi0L/QvtCx0LXQtNCwXCI6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLndpbixcclxuICAgICAgICAgIHRyYW5zbGF0aW9uVGV4dDogXCLQn9C+0LHQtdC00LBcIixcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlIFwi0JLQvtC30LLRgNCw0YJcIjpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMucmV0dXJuLFxyXG4gICAgICAgICAgdHJhbnNsYXRpb25UZXh0OiBcInJldHVyblwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgXCLQv9C+0YDQsNC20LXQvdC40LVcIjpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMubG9zZSxcclxuICAgICAgICAgIHRyYW5zbGF0aW9uVGV4dDogXCJsb3NlXCIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNsYXNzTmFtZTogc3R5bGVzLmxvc2UsXHJcbiAgICAgIHRyYW5zbGF0aW9uVGV4dDogXCJsb3NlXCIsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwic3RhdGlzdGljc1wiKSxcclxuICAgIHRyYW5zbGF0aW9uUGF0aCA9IGB0YWIud2FsbHBlcnMuYCxcclxuICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyfT57b3JkZXJ9Ljwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFtT25lfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SXRlbXN9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt0ZWFtT25lTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e3RlYW1PbmVJY29ufVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SXRlbXN9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy52c30+VlMuPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1Ud299PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3RlYW1Ud29OYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEl0ZW1zfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17dGVhbVR3b0ljb259XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb259PlxyXG4gICAgICAgICAgICB7cHJlZGljdGlvbiA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZWRpY3Rpb25fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX3RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZShcInByZWRpY3Rpb25cIil9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57cHJlZGljdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW11bGF0b3J9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV90aW1lfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGFibGV0X3Njb3JlfT57c2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPntkYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3RpbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY29yZX0+XHJcbiAgICAgICAgICAgIDxzcGFuPntzY29yZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdGlzdGljX3dhbGxwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0UmVzdWx0KGdhbWVSZXN1bHQpLmNsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3RyYW5zbGF0ZShnZXRSZXN1bHQoZ2FtZVJlc3VsdCkudHJhbnNsYXRpb25UZXh0KX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9