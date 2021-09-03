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
      case "win":
        return {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().win),
          translationText: 'Победа'
        };

      case "Возврат":
        return {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().return),
          translationText: 'return'
        };

      case "lose":
        return {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lose),
          translationText: 'lose'
        };
    }

    return {
      className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lose),
      translationText: 'lose'
    };
  };

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__.default)('statistics'),
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
            lineNumber: 54,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamOne),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: teamOneName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              style: {
                width: '50px',
                height: '50px'
              },
              src: teamOneIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().vs),
            children: "VS."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().teamTwo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: teamTwoName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftItems),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              style: {
                width: '50px',
                height: '50px'
              },
              src: teamTwoIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction),
          children: prediction ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_content),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_title),
              children: translate('prediction')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prediction_body),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: prediction
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 33
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().simulator)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date_time),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tablet_score),
            children: score
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().time),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: time
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().score),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: score
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Row_module_scss__WEBPACK_IMPORTED_MODULE_2___default().statistic_wallper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: getResult(gameResult).className,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: translate(getResult(gameResult).translationText)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9TdGF0aXN0aWNzL1RhYi9Sb3cvUm93LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJvcmRlciIsInRlYW1PbmVOYW1lIiwidGVhbU9uZUljb24iLCJ0ZWFtVHdvTmFtZSIsInRlYW1Ud29JY29uIiwicHJlZGljdGlvbiIsImRhdGUiLCJ0aW1lIiwic2NvcmUiLCJnYW1lUmVzdWx0IiwiZ2V0UmVzdWx0IiwicmVzIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwidHJhbnNsYXRpb25UZXh0IiwidXNlVHJhbnNsYXRpb24iLCJ0IiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5Iiwid2lkdGgiLCJoZWlnaHQiLCJzaW11bGF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFFTyxTQUFTQSxHQUFULE9BV0o7QUFBQTs7QUFBQSxNQVZDQyxLQVVELFFBVkNBLEtBVUQ7QUFBQSxNQVRDQyxXQVNELFFBVENBLFdBU0Q7QUFBQSxNQVJDQyxXQVFELFFBUkNBLFdBUUQ7QUFBQSxNQVBDQyxXQU9ELFFBUENBLFdBT0Q7QUFBQSxNQU5DQyxXQU1ELFFBTkNBLFdBTUQ7QUFBQSxNQUxDQyxVQUtELFFBTENBLFVBS0Q7QUFBQSxNQUpDQyxJQUlELFFBSkNBLElBSUQ7QUFBQSxNQUhDQyxJQUdELFFBSENBLElBR0Q7QUFBQSxNQUZDQyxLQUVELFFBRkNBLEtBRUQ7QUFBQSxNQURDQyxVQUNELFFBRENBLFVBQ0Q7O0FBRUMsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFTO0FBQ3ZCLFlBQVFBLEdBQVI7QUFDSSxXQUFLLEtBQUw7QUFDSSxlQUFPO0FBQ0hDLG1CQUFTLEVBQUVDLDZEQURSO0FBRUhDLHlCQUFlLEVBQUU7QUFGZCxTQUFQOztBQUlKLFdBQUssU0FBTDtBQUNFLGVBQU87QUFDSEYsbUJBQVMsRUFBRUMsZ0VBRFI7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QUFBQSxjQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErREg7O0dBMUdlZixHO1VBdUNBZ0Isa0U7OztLQXZDQWhCLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhdGlzdGljcy4zNzhlYjgyNmY3NzQ2OTczNzcxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm93Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7XHJcbiAgICBvcmRlcixcclxuICAgIHRlYW1PbmVOYW1lLFxyXG4gICAgdGVhbU9uZUljb24sXHJcbiAgICB0ZWFtVHdvTmFtZSxcclxuICAgIHRlYW1Ud29JY29uLFxyXG4gICAgcHJlZGljdGlvbixcclxuICAgIGRhdGUsXHJcbiAgICB0aW1lLFxyXG4gICAgc2NvcmUsXHJcbiAgICBnYW1lUmVzdWx0IC8qKiBpdCBjYW4gYmU6IFwid2luXCIsIFwibG9zZVwiLCBcInJldHVyblwiICAqL1xyXG59KSB7XHJcblxyXG4gICAgY29uc3QgZ2V0UmVzdWx0ID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocmVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMud2luLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uVGV4dDogJ9Cf0L7QsdC10LTQsCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcItCS0L7Qt9Cy0YDQsNGCXCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMucmV0dXJuLFxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblRleHQ6ICdyZXR1cm4nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5sb3NlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uVGV4dDogJ2xvc2UnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLmxvc2UsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uVGV4dDogJ2xvc2UnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdzdGF0aXN0aWNzJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gYHRhYi53YWxscGVycy5gLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyfT57b3JkZXJ9Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1PbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGVhbU9uZU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDonNTBweCcsIGhlaWdodDonNTBweCcgfX0gc3JjPXt0ZWFtT25lSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy52c30+VlMuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbVR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0ZWFtVHdvTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOic1MHB4JywgaGVpZ2h0Oic1MHB4JyB9fSBzcmM9e3RlYW1Ud29JY29ufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX3RpdGxlfT57dHJhbnNsYXRlKCdwcmVkaWN0aW9uJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmVkaWN0aW9uX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ByZWRpY3Rpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbXVsYXRvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV90aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGFibGV0X3Njb3JlfT57c2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY29yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzY29yZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0aXN0aWNfd2FsbHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRSZXN1bHQoZ2FtZVJlc3VsdCkuY2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoZ2V0UmVzdWx0KGdhbWVSZXN1bHQpLnRyYW5zbGF0aW9uVGV4dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=