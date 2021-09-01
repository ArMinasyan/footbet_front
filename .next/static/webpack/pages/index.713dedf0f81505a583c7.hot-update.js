self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/common/Testimonials/LeaveComment/LeaveComment.jsx":
/*!****************************************************************************!*\
  !*** ./components/Pages/common/Testimonials/LeaveComment/LeaveComment.jsx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveComment": function() { return /* binding */ LeaveComment; }
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var _LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LeaveComment.module.scss */ "./components/Pages/common/Testimonials/LeaveComment/LeaveComment.module.scss");
/* harmony import */ var _LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/filledStar.png */ "./public/images/main/feedbacks/filledStar.png");
/* harmony import */ var _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/unfilledStar.png */ "./public/images/main/feedbacks/unfilledStar.png");
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\LeaveComment\\LeaveComment.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// hooks and helpers




 // styles

 // icons







function LeaveComment(_ref) {
  _s();

  var _this = this;

  var matchId = _ref.matchId;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();

  // states consts
  var stars = [0, 1, 2, 3, 4],
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      simulator = _useState[0],
      setSimulator = _useState[1],
      _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__.default)('common'),
      t = _useTranslation.t,
      translationPath = 'commons.',
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      schema = yup__WEBPACK_IMPORTED_MODULE_7__.object().shape({
    comment: yup__WEBPACK_IMPORTED_MODULE_7__.string()
  }),
      _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__.yupResolver)(schema)
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var submit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(data) {
      var _err$response$data;

      return C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!matchId) {
                _context.next = 9;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_11__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_12__.ADD_FEEDBACK, {
                comment: data.comment,
                stars: simulator,
                matchId: matchId
              }, {
                auth: true
              });

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast)(((_err$response$data = _context.t0.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432", {
                type: "error"
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 6]]);
    }));

    return function submit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().stars_container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().stars_content),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().stars_area),
          children: stars.map(function (el) {
            return simulator > el ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_9__.default.src,
              alt: "",
              onClick: function onClick() {
                return setSimulator(el);
              }
            }, (el + 1) * Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 38
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "",
              onClick: function onClick() {
                return setSimulator(el + 1);
              }
            }, (el + 1) * Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 38
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      onSubmit: handleSubmit(submit),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().textarea_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", _objectSpread(_objectSpread({}, register('comment')), {}, {
          id: "comment",
          cols: "30",
          rows: "7",
          placeholder: translate('placeHolder')
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().button_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          children: translate('send')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_14__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, this);
}

_s(LeaveComment, "3486Ll/stTmu5ZcOnNPlJ1MAaxg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch, next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__.default, react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm];
});

_c = LeaveComment;

var _c;

$RefreshReg$(_c, "LeaveComment");

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


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ "./node_modules/react-toastify/dist/react-toastify.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/react-toastify.esm.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bounce": function() { return /* binding */ Bounce; },
/* harmony export */   "Flip": function() { return /* binding */ Flip; },
/* harmony export */   "Slide": function() { return /* binding */ Slide; },
/* harmony export */   "ToastContainer": function() { return /* binding */ ToastContainer; },
/* harmony export */   "Zoom": function() { return /* binding */ Zoom; },
/* harmony export */   "collapseToast": function() { return /* binding */ collapseToast; },
/* harmony export */   "cssTransition": function() { return /* binding */ cssTransition; },
/* harmony export */   "toast": function() { return /* binding */ toast; },
/* harmony export */   "useToast": function() { return /* binding */ useToast; },
/* harmony export */   "useToastContainer": function() { return /* binding */ useToastContainer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);




function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function isNum(v) {
  return typeof v === 'number' && !isNaN(v);
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isStr(v) {
  return typeof v === 'string';
}
function isFn(v) {
  return typeof v === 'function';
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function isToastIdValid(toastId) {
  return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function canBeRendered(content) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(content) || isStr(content) || isFn(content) || isNum(content);
}

var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default',
  DARK: 'dark'
};

/**
 * Used to collapse toast after exit animation
 */
function collapseToast(node, done, duration
/* COLLAPSE_DURATION */
) {
  if (duration === void 0) {
    duration = 300;
  }

  var height = node.scrollHeight;
  var style = node.style;
  requestAnimationFrame(function () {
    style.minHeight = 'initial';
    style.height = height + 'px';
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(function () {
      style.height = '0';
      style.padding = '0';
      style.margin = '0';
      setTimeout(done, duration);
    });
  });
}

/**
 * Css animation that just work.
 * You could use animate.css for instance
 *
 *
 * ```
 * cssTransition({
 *   enter: "animate__animated animate__bounceIn",
 *   exit: "animate__animated animate__bounceOut"
 * })
 * ```
 *
 */

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? true : _ref$collapse,
      _ref$collapseDuration = _ref.collapseDuration,
      collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
  return function ToastTransition(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        done = _ref2.done,
        nodeRef = _ref2.nodeRef,
        isIn = _ref2.isIn;
    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var baseClassName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var animationStep = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0
    /* Enter */
    );
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
      onEnter();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      if (!isIn) preventExitTransition ? onExited() : onExit();
    }, [isIn]);

    function onEnter() {
      var node = nodeRef.current;
      baseClassName.current = node.className;
      node.className += " " + enterClassName;
      node.addEventListener('animationend', onEntered);
    }

    function onEntered() {
      var node = nodeRef.current;
      node.removeEventListener('animationend', onEntered);

      if (animationStep.current === 0
      /* Enter */
      ) {
          node.className = baseClassName.current;
        }
    }

    function onExit() {
      animationStep.current = 1
      /* Exit */
      ;
      var node = nodeRef.current;
      node.className += " " + exitClassName;
      node.addEventListener('animationend', onExited);
    }

    function onExited() {
      var node = nodeRef.current;
      node.removeEventListener('animationend', onExited);
      collapse ? collapseToast(node, done, collapseDuration) : done();
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children);
  };
}

var eventManager = {
  list: /*#__PURE__*/new Map(),
  emitQueue: /*#__PURE__*/new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event, callback) {
    if (callback) {
      var cb = this.list.get(event).filter(function (cb) {
        return cb !== callback;
      });
      this.list.set(event, cb);
      return this;
    }

    this.list["delete"](event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);

    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue["delete"](event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      var timer = setTimeout(function () {
        // @ts-ignore
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

      _this.emitQueue.get(event).push(timer);
    });
  }
};

/**
 * `useKeeper` is a helper around `useRef`.
 *
 * You don't need to access the `.current`property to get the value
 * If refresh is set to true. The ref will be updated every render
 */

function useKeeper(arg, refresh) {
  if (refresh === void 0) {
    refresh = false;
  }

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(arg);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (refresh) ref.current = arg;
  });
  return ref.current;
}

function reducer(state, action) {
  switch (action.type) {
    case 0
    /* ADD */
    :
      return [].concat(state, [action.toastId]).filter(function (id) {
        return id !== action.staleId;
      });

    case 1
    /* REMOVE */
    :
      return isToastIdValid(action.toastId) ? state.filter(function (id) {
        return id !== action.toastId;
      }) : [];
  }
}

function useToastContainer(props) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (x) {
    return x + 1;
  }, 0),
      forceUpdate = _useReducer[1];

  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, []),
      toast = _useReducer2[0],
      dispatch = _useReducer2[1];

  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var toastCount = useKeeper(0);
  var queue = useKeeper([]);
  var collection = useKeeper({});
  var instance = useKeeper({
    toastKey: 1,
    displayedToast: 0,
    props: props,
    containerId: null,
    isToastActive: isToastActive,
    getToast: function getToast(id) {
      return collection[id] || null;
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(3
    /* WillUnmount */
    ).on(0
    /* Show */
    , buildToast).on(1
    /* Clear */
    , function (toastId) {
      return containerRef.current && removeToast(toastId);
    }).on(5
    /* ClearWaitingQueue */
    , clearWaitingQueue).emit(2
    /* DidMount */
    , instance);
    return function () {
      return eventManager.emit(3
      /* WillUnmount */
      , instance);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast.length;
    eventManager.emit(4
    /* Change */
    , toast.length, props.containerId);
  }, [toast]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    instance.props = props;
  });

  function isToastActive(id) {
    return toast.indexOf(id) !== -1;
  }

  function clearWaitingQueue(_ref) {
    var containerId = _ref.containerId;
    var limit = instance.props.limit;

    if (limit && (!containerId || instance.containerId === containerId)) {
      toastCount -= queue.length;
      queue = [];
    }
  }

  function removeToast(toastId) {
    dispatch({
      type: 1
      /* REMOVE */
      ,
      toastId: toastId
    });
  }

  function dequeueToast() {
    var _queue$shift = queue.shift(),
        toastContent = _queue$shift.toastContent,
        toastProps = _queue$shift.toastProps,
        staleId = _queue$shift.staleId;

    appendToast(toastContent, toastProps, staleId);
  }
  /**
   * check if a container is attached to the dom
   * check for multi-container, build only if associated
   * check for duplicate toastId if no update
   */


  function isNotValid(_ref2) {
    var containerId = _ref2.containerId,
        toastId = _ref2.toastId,
        updateId = _ref2.updateId;
    return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || collection[toastId] && updateId == null ? true : false;
  } // this function and all the function called inside needs to rely on ref(`useKeeper`)


  function buildToast(content, _ref3) {
    var delay = _ref3.delay,
        staleId = _ref3.staleId,
        options = _objectWithoutPropertiesLoose(_ref3, ["delay", "staleId"]);

    if (!canBeRendered(content) || isNotValid(options)) return;
    var toastId = options.toastId,
        updateId = options.updateId;
    var props = instance.props;

    var closeToast = function closeToast() {
      return removeToast(toastId);
    };

    var isNotAnUpdate = options.updateId == null;
    if (isNotAnUpdate) toastCount++;
    var toastProps = {
      toastId: toastId,
      updateId: updateId,
      isIn: false,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast: closeToast,
      closeButton: options.closeButton,
      rtl: props.rtl,
      position: options.position || props.position,
      transition: options.transition || props.transition,
      className: parseClassName(options.className || props.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props.bodyClassName),
      style: options.style || props.toastStyle,
      bodyStyle: options.bodyStyle || props.bodyStyle,
      onClick: options.onClick || props.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props.draggable,
      draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props.draggablePercent,
      draggableDirection: options.draggableDirection || props.draggableDirection,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props.progressClassName),
      progressStyle: options.progressStyle || props.progressStyle,
      autoClose: getAutoCloseDelay(options.autoClose, props.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props.role,
      deleteToast: function deleteToast() {
        removeFromCollection(toastId);
      }
    };
    if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose)) toastProps.onClose = options.onClose; //  tweak for vertical dragging

    if (toastProps.draggableDirection === "y"
    /* Y */
    && toastProps.draggablePercent === 80
    /* DRAGGABLE_PERCENT */
    ) {
        toastProps.draggablePercent *= 1.5;
      }

    var closeButton = props.closeButton;

    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
    }

    toastProps.closeButton = closeButton;
    var toastContent = content;

    if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(content) && !isStr(content.type)) {
      toastContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(content, {
        closeToast: closeToast,
        toastProps: toastProps
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast: closeToast,
        toastProps: toastProps
      });
    } // not handling limit + delay by design. Waiting for user feedback first


    if (props.limit && props.limit > 0 && toastCount > props.limit && isNotAnUpdate) {
      queue.push({
        toastContent: toastContent,
        toastProps: toastProps,
        staleId: staleId
      });
    } else if (isNum(delay) && delay > 0) {
      setTimeout(function () {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }

  function appendToast(content, toastProps, staleId) {
    var toastId = toastProps.toastId;
    if (staleId) delete collection[staleId];
    collection[toastId] = {
      content: content,
      props: toastProps
    };
    dispatch({
      type: 0
      /* ADD */
      ,
      toastId: toastId,
      staleId: staleId
    });
  }

  function removeFromCollection(toastId) {
    delete collection[toastId];
    var queueLen = queue.length;
    toastCount = isToastIdValid(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
    if (toastCount < 0) toastCount = 0;

    if (queueLen > 0) {
      var freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit;

      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;

        for (var i = 0; i < toDequeue; i++) {
          dequeueToast();
        }
      }
    } else {
      forceUpdate();
    }
  }

  function getToastToRender(cb) {
    var toastToRender = {};
    var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);

    for (var i = 0; i < toastList.length; i++) {
      var _toast = collection[toastList[i]];
      var position = _toast.props.position;
      toastToRender[position] || (toastToRender[position] = []);
      toastToRender[position].push(_toast);
    }

    return Object.keys(toastToRender).map(function (p) {
      return cb(p, toastToRender[p]);
    });
  }

  return {
    getToastToRender: getToastToRender,
    collection: collection,
    containerRef: containerRef,
    isToastActive: isToastActive
  };
}

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

function useToast(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      isRunning = _useState[0],
      setIsRunning = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      preventExitTransition = _useState2[0],
      setPreventExitTransition = _useState2[1];

  var toastRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var drag = useKeeper({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null
  });
  var syncProps = useKeeper(props, true);
  var autoClose = props.autoClose,
      pauseOnHover = props.pauseOnHover,
      closeToast = props.closeToast,
      onClick = props.onClick,
      closeOnClick = props.closeOnClick;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isFn(props.onOpen)) props.onOpen((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(props.children) && props.children.props);
    return function () {
      if (isFn(syncProps.onClose)) syncProps.onClose((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(syncProps.children) && syncProps.children.props);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    props.draggable && bindDragEvents();
    return function () {
      props.draggable && unbindDragEvents();
    };
  }, [props.draggable]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    props.pauseOnFocusLoss && bindFocusEvents();
    return function () {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);

  function onDragStart(e) {
    if (props.draggable) {
      var toast = toastRef.current;
      drag.canCloseOnClick = true;
      drag.canDrag = true;
      drag.boundingRect = toast.getBoundingClientRect();
      toast.style.transition = '';
      drag.x = getX(e.nativeEvent);
      drag.y = getY(e.nativeEvent);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.start = drag.x;
          drag.removalDistance = toast.offsetWidth * (props.draggablePercent / 100);
        } else {
        drag.start = drag.y;
        drag.removalDistance = toast.offsetHeight * (props.draggablePercent / 100);
      }
    }
  }

  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      var _drag$boundingRect = drag.boundingRect,
          top = _drag$boundingRect.top,
          bottom = _drag$boundingRect.bottom,
          left = _drag$boundingRect.left,
          right = _drag$boundingRect.right;

      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }

  function playToast() {
    setIsRunning(true);
  }

  function pauseToast() {
    setIsRunning(false);
  }

  function bindFocusEvents() {
    if (!document.hasFocus()) pauseToast();
    window.addEventListener('focus', playToast);
    window.addEventListener('blur', pauseToast);
  }

  function unbindFocusEvents() {
    window.removeEventListener('focus', playToast);
    window.removeEventListener('blur', pauseToast);
  }

  function bindDragEvents() {
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
  }

  function unbindDragEvents() {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
  }

  function onDragMove(e) {
    if (drag.canDrag) {
      e.preventDefault();
      var toast = toastRef.current;
      if (isRunning) pauseToast();
      drag.x = getX(e);
      drag.y = getY(e);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.delta = drag.x - drag.start;
        } else {
        drag.delta = drag.y - drag.start;
      } // prevent false positif during a toast click


      if (drag.start !== drag.x) drag.canCloseOnClick = false;
      toast.style.transform = "translate" + props.draggableDirection + "(" + drag.delta + "px)";
      toast.style.opacity = "" + (1 - Math.abs(drag.delta / drag.removalDistance));
    }
  }

  function onDragEnd() {
    var toast = toastRef.current;

    if (drag.canDrag) {
      drag.canDrag = false;

      if (Math.abs(drag.delta) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }

      toast.style.transition = 'transform 0.2s, opacity 0.2s';
      toast.style.transform = "translate" + props.draggableDirection + "(0)";
      toast.style.opacity = '1';
    }
  }

  var eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };

  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  } // prevent toast from closing when user drags the toast


  if (closeOnClick) {
    eventHandlers.onClick = function (e) {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }

  return {
    playToast: playToast,
    pauseToast: pauseToast,
    isRunning: isRunning,
    preventExitTransition: preventExitTransition,
    toastRef: toastRef,
    eventHandlers: eventHandlers
  };
}

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      type = _ref.type,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? 'close' : _ref$ariaLabel;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button " + "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button--" + type,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}

function ProgressBar(_ref) {
  var _cx, _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl,
      isIn = _ref.isIn;

  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1
  });

  if (controlledProgress) style.transform = "scaleX(" + progress + ")";
  var defaultClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar", controlledProgress ? "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--controlled" : "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--animated", "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--rtl"] = rtl, _cx));
  var classNames = isFn(className) ? className({
    rtl: rtl,
    type: type,
    defaultClassName: defaultClassName
  }) : (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(defaultClassName, className); // 🧐 controlledProgress is derived from progress
  // so if controlledProgress is set
  // it means that this is also the case for progress

  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : function () {
    isIn && closeToast();
  }, _animationEvent); // TODO: add aria-valuenow, aria-valuemax, aria-valuemin

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({
    role: "progressbar",
    "aria-hidden": hide ? 'true' : 'false',
    "aria-label": "notification timer",
    className: classNames,
    style: style
  }, animationEvent));
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

var Toast = function Toast(props) {
  var _cx;

  var _useToast = useToast(props),
      isRunning = _useToast.isRunning,
      preventExitTransition = _useToast.preventExitTransition,
      toastRef = _useToast.toastRef,
      eventHandlers = _useToast.eventHandlers;

  var closeButton = props.closeButton,
      children = props.children,
      autoClose = props.autoClose,
      onClick = props.onClick,
      type = props.type,
      hideProgressBar = props.hideProgressBar,
      closeToast = props.closeToast,
      Transition = props.transition,
      position = props.position,
      className = props.className,
      style = props.style,
      bodyClassName = props.bodyClassName,
      bodyStyle = props.bodyStyle,
      progressClassName = props.progressClassName,
      progressStyle = props.progressStyle,
      updateId = props.updateId,
      role = props.role,
      progress = props.progress,
      rtl = props.rtl,
      toastId = props.toastId,
      deleteToast = props.deleteToast,
      isIn = props.isIn;
  var defaultClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
  /* CSS_NAMESPACE */
  + "__toast", "Toastify"
  /* CSS_NAMESPACE */
  + "__toast--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__toast--rtl"] = rtl, _cx));
  var cssClasses = isFn(className) ? className({
    rtl: rtl,
    position: position,
    type: type,
    defaultClassName: defaultClassName
  }) : (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(defaultClassName, className);
  var isProgressControlled = !!progress;

  function renderCloseButton(closeButton) {
    if (!closeButton) return;
    var props = {
      closeToast: closeToast,
      type: type
    };
    if (isFn(closeButton)) return closeButton(props);
    if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(closeButton)) return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(closeButton, props);
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Transition, {
    isIn: isIn,
    done: deleteToast,
    position: position,
    preventExitTransition: preventExitTransition,
    nodeRef: toastRef
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({
    id: toastId,
    onClick: onClick,
    className: cssClasses
  }, eventHandlers, {
    style: style,
    ref: toastRef
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({}, isIn && {
    role: role
  }, {
    className: isFn(bodyClassName) ? bodyClassName({
      type: type
    }) : (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-body", bodyClassName),
    style: bodyStyle
  }), children), renderCloseButton(closeButton), (autoClose || isProgressControlled) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProgressBar, Object.assign({}, updateId && !isProgressControlled ? {
    key: "pb-" + updateId
  } : {}, {
    rtl: rtl,
    delay: autoClose,
    isRunning: isRunning,
    isIn: isIn,
    closeToast: closeToast,
    hide: hideProgressBar,
    type: type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: isProgressControlled,
    progress: progress
  }))));
};

var Bounce = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-exit",
  appendPosition: true
});
var Slide = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-exit",
  appendPosition: true
});
var Zoom = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-exit"
});
var Flip = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-exit"
});

var ToastContainer = function ToastContainer(props) {
  var _useToastContainer = useToastContainer(props),
      getToastToRender = _useToastContainer.getToastToRender,
      containerRef = _useToastContainer.containerRef,
      isToastActive = _useToastContainer.isToastActive;

  var className = props.className,
      style = props.style,
      rtl = props.rtl,
      containerId = props.containerId;

  function getClassName(position) {
    var _cx;

    var defaultClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container", "Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--" + position, (_cx = {}, _cx["Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--rtl"] = rtl, _cx));
    return isFn(className) ? className({
      position: position,
      rtl: rtl,
      defaultClassName: defaultClassName
    }) : (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(defaultClassName, parseClassName(className));
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: containerRef,
    className: "Toastify"
    /* CSS_NAMESPACE */
    ,
    id: containerId
  }, getToastToRender(function (position, toastList) {
    var containerStyle = toastList.length === 0 ? _extends({}, style, {
      pointerEvents: 'none'
    }) : _extends({}, style);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: getClassName(position),
      style: containerStyle,
      key: "container-" + position
    }, toastList.map(function (_ref) {
      var content = _ref.content,
          toastProps = _ref.props;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toast, Object.assign({}, toastProps, {
        isIn: isToastActive(toastProps.toastId),
        key: "toast-" + toastProps.key,
        closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
      }), content);
    }));
  }));
};
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80
  /* DRAGGABLE_PERCENT */
  ,
  draggableDirection: "x"
  /* X */
  ,
  role: 'alert'
};

var containers = /*#__PURE__*/new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = containers.get(containerId || latestInstance);
  if (!container) return null;
  return container.getToast(toastId);
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return Math.random().toString(36).substr(2, 9);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(0
    /* Show */
    , content, options);
  } else {
    queue.push({
      content: content,
      options: options
    });

    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
    }
  }

  return options.toastId;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(type, options) {
  return _extends({}, options, {
    type: options && options.type || type,
    toastId: getToastId(options)
  });
}

var createToastByType = function createToastByType(type) {
  return function (content, options) {
    return dispatchToast(content, mergeOptions(type, options));
  };
};

var toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};

toast.success = /*#__PURE__*/createToastByType(TYPE.SUCCESS);
toast.info = /*#__PURE__*/createToastByType(TYPE.INFO);
toast.error = /*#__PURE__*/createToastByType(TYPE.ERROR);
toast.warning = /*#__PURE__*/createToastByType(TYPE.WARNING);
toast.dark = /*#__PURE__*/createToastByType(TYPE.DARK);
toast.warn = toast.warning;
/**
 * Remove toast programmaticaly
 */

toast.dismiss = function (id) {
  return eventManager.emit(1
  /* Clear */
  , id);
};
/**
 * Clear waiting queue when limit is used
 */


toast.clearWaitingQueue = function (params) {
  if (params === void 0) {
    params = {};
  }

  return eventManager.emit(5
  /* ClearWaitingQueue */
  , params);
};
/**
 * return true if one container is displaying the toast
 */


toast.isActive = function (id) {
  var isToastActive = false;
  containers.forEach(function (container) {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};

toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  }

  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.props,
          oldContent = toast.content;

      var nextOptions = _extends({}, oldOptions, options, {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });

      if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
      var content = nextOptions.render || oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


toast.done = function (id) {
  toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 *
 */


toast.onChange = function (callback) {
  if (isFn(callback)) {
    eventManager.on(4
    /* Change */
    , callback);
  }

  return function () {
    isFn(callback) && eventManager.off(4
    /* Change */
    , callback);
  };
};
/**
 * Configure the ToastContainer when lazy mounted
 */


toast.configure = function (config) {
  if (config === void 0) {
    config = {};
  }

  lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(2
/* DidMount */
, function (containerInstance) {
  latestInstance = containerInstance.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach(function (item) {
    eventManager.emit(0
    /* Show */
    , item.content, item.options);
  });
  queue = [];
}).on(3
/* WillUnmount */
, function (containerInstance) {
  containers["delete"](containerInstance.containerId || containerInstance);

  if (containers.size === 0) {
    eventManager.off(0
    /* Show */
    ).off(1
    /* Clear */
    ).off(5
    /* ClearWaitingQueue */
    );
  }

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});


//# sourceMappingURL=react-toastify.esm.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0xlYXZlQ29tbWVudC9MZWF2ZUNvbW1lbnQuanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9kaXN0L3JlYWN0LXRvYXN0aWZ5LmVzbS5qcyJdLCJuYW1lcyI6WyJMZWF2ZUNvbW1lbnQiLCJtYXRjaElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInN0YXJzIiwidXNlU3RhdGUiLCJzaW11bGF0b3IiLCJzZXRTaW11bGF0b3IiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ0cmFuc2xhdGlvblBhdGgiLCJ0cmFuc2xhdGUiLCJrZXkiLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImNvbW1lbnQiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsInN1Ym1pdCIsImRhdGEiLCJyZXF1ZXN0IiwiQUREX0ZFRURCQUNLIiwiYXV0aCIsInRvYXN0IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwidHlwZSIsInN0eWxlcyIsIm1hcCIsImVsIiwiZmlsbGVkU3RhciIsIk1hdGgiLCJyYW5kb20iLCJ1bmZpbGxlZFN0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sU0FBU0EsWUFBVCxPQUFxQztBQUFBOztBQUFBOztBQUFBLE1BQVpDLE9BQVksUUFBWkEsT0FBWTtBQUUxQyxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLEVBQTVCOztBQUVNO0FBQ0EsTUFBQUMsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBUjtBQUFBLGtCQUM0QkMsK0NBQVEsQ0FBQyxDQUFELENBRHBDO0FBQUEsTUFDQ0MsU0FERDtBQUFBLE1BQ1lDLFlBRFo7QUFBQSx3QkFHUUMsc0VBQWMsQ0FBQyxRQUFELENBSHRCO0FBQUEsTUFHRUMsQ0FIRixtQkFHRUEsQ0FIRjtBQUFBLE1BSUFDLGVBSkEsR0FJa0IsVUFKbEI7QUFBQSxNQUtBQyxTQUxBLEdBS1ksU0FBWkEsU0FBWSxDQUFBQyxHQUFHO0FBQUEsV0FBSUgsQ0FBQyxXQUFJQyxlQUFKLFNBQXNCRSxHQUF0QixFQUFMO0FBQUEsR0FMZjtBQUFBLE1BT0FDLE1BUEEsR0FPU0MsdUNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUN4QkMsV0FBTyxFQUFFRix1Q0FBQTtBQURlLEdBQW5CLENBUFQ7QUFBQSxpQkFZb0RHLHdEQUFPLENBQUM7QUFDeERDLFFBQUksRUFBRSxVQURrRDtBQUV4REMsWUFBUSxFQUFFQyxvRUFBVyxDQUFDUCxNQUFEO0FBRm1DLEdBQUQsQ0FaM0Q7QUFBQSxNQVlFUSxRQVpGLFlBWUVBLFFBWkY7QUFBQSxNQVlZQyxZQVpaLFlBWVlBLFlBWlo7QUFBQSxNQVl1Q0MsTUFadkMsWUFZMEJDLFNBWjFCLENBWXVDRCxNQVp2Qzs7QUFpQkosTUFBTUUsTUFBTTtBQUFBLGtTQUFHLGlCQUFPQyxJQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUnpCLE9BRFE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQUdIMEIscURBQU8sQ0FBQ0Msb0VBQUQsRUFBZTtBQUFFWix1QkFBTyxFQUFFVSxJQUFJLENBQUNWLE9BQWhCO0FBQXlCWixxQkFBSyxFQUFFRSxTQUFoQztBQUEyQ0wsdUJBQU8sRUFBUEE7QUFBM0MsZUFBZixFQUFxRTtBQUFDNEIsb0JBQUksRUFBRTtBQUFQLGVBQXJFLENBSEo7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1UQyxvRUFBSyxDQUFFLG1DQUFJQyxRQUFKLENBQWFMLElBQWIsMEVBQW1CTSxPQUFuQixtSkFBRixFQUE2RDtBQUM5REMsb0JBQUk7QUFEMEQsZUFBN0QsQ0FBTDs7QUFOUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFOUixNQUFNO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBY0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUVTLDZFQUFoQjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFQSxtRkFBaEI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVBLGlGQUFoQjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBRUEsOEVBQWhCO0FBQUEsb0JBRVE5QixLQUFLLENBQUMrQixHQUFOLENBQVUsVUFBQUMsRUFBRTtBQUFBLG1CQUNSOUIsU0FBUyxHQUFHOEIsRUFBWixnQkFDSztBQUVHLGlCQUFHLEVBQUVDLHFGQUZSO0FBR0csaUJBQUcsRUFBQyxFQUhQO0FBSUcscUJBQU8sRUFBRTtBQUFBLHVCQUFNOUIsWUFBWSxDQUFDNkIsRUFBRCxDQUFsQjtBQUFBO0FBSlosZUFDUSxDQUFDQSxFQUFFLEdBQUcsQ0FBTixJQUFXRSxJQUFJLENBQUNDLE1BQUwsRUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFETCxnQkFRSztBQUVHLGlCQUFHLEVBQUVDLHdGQUZSO0FBR0csaUJBQUcsRUFBQyxFQUhQO0FBSUcscUJBQU8sRUFBRTtBQUFBLHVCQUFNakMsWUFBWSxDQUFDNkIsRUFBRSxHQUFHLENBQU4sQ0FBbEI7QUFBQTtBQUpaLGVBQ1EsQ0FBQ0EsRUFBRSxHQUFHLENBQU4sSUFBV0UsSUFBSSxDQUFDQyxNQUFMLEVBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEc7QUFBQSxXQUFaO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUF3Qkk7QUFBTSxjQUFRLEVBQUVqQixZQUFZLENBQUNHLE1BQUQsQ0FBNUI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVTLHNGQUFoQjtBQUFBLCtCQUNJLDBHQUNRYixRQUFRLENBQUMsU0FBRCxDQURoQjtBQUVJLFlBQUUsRUFBQyxTQUZQO0FBR0ksY0FBSSxFQUFDLElBSFQ7QUFJSSxjQUFJLEVBQUMsR0FKVDtBQUtJLHFCQUFXLEVBQUVWLFNBQVMsQ0FBQyxhQUFEO0FBTDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFVSTtBQUFLLGlCQUFTLEVBQUV1QixvRkFBaEI7QUFBQSwrQkFDSTtBQUFBLG9CQUVRdkIsU0FBUyxDQUFDLE1BQUQ7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkosZUEwQ0ksOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThDSDs7R0FsRmVYLFk7VUFFR0cscUQsRUFNSEssa0UsRUFTNENTLG9EOzs7S0FqQjVDakIsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUFlLHNDQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDOEk7QUFDeEg7QUFDYTs7QUFFbkM7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscURBQWM7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZDQUFNO0FBQzlCLHdCQUF3Qiw2Q0FBTTtBQUM5QjtBQUNBO0FBQ0EsSUFBSSxzREFBZTtBQUNuQjtBQUNBLEtBQUs7QUFDTCxJQUFJLGdEQUFTO0FBQ2I7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLDBEQUE0QixDQUFDLHVEQUF1QjtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSw2Q0FBTTtBQUNsQixFQUFFLGdEQUFTO0FBQ1g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlEQUFVO0FBQzlCO0FBQ0EsR0FBRztBQUNIOztBQUVBLHFCQUFxQixpREFBVTtBQUMvQjtBQUNBOztBQUVBLHFCQUFxQiw2Q0FBTTtBQUMzQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1g7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLHFEQUFjO0FBQ3RCLHFCQUFxQixtREFBWTtBQUNqQztBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSx1QkFBdUIsZUFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLCtDQUFRO0FBQzFCO0FBQ0E7O0FBRUEsbUJBQW1CLCtDQUFRO0FBQzNCO0FBQ0E7O0FBRUEsaUJBQWlCLDZDQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFTO0FBQ1gseUNBQXlDLHFEQUFjO0FBQ3ZEO0FBQ0EscURBQXFELHFEQUFjO0FBQ25FO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvREFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHLEVBQUUsb0RBQWE7QUFDbEI7QUFDQTtBQUNBLEdBQUcsRUFBRSxvREFBYTtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHlCQUF5Qiw2Q0FBRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUksNkNBQUUsOEJBQThCO0FBQ3ZDO0FBQ0E7O0FBRUEsNENBQTRDO0FBQzVDO0FBQ0EsR0FBRyxtQkFBbUI7O0FBRXRCLFNBQVMsb0RBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUksNkNBQUU7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWMsc0JBQXNCLG1EQUFZO0FBQ3hEOztBQUVBLFNBQVMsb0RBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRSxvREFBYTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUcsR0FBRyxvREFBYSx3QkFBd0I7QUFDM0M7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUssSUFBSSw2Q0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBLEdBQUcscUZBQXFGLG9EQUFhLDhCQUE4QjtBQUNuSTtBQUNBLEdBQUcsS0FBSztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkIsNkNBQUU7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSSw2Q0FBRTtBQUNYOztBQUVBLFNBQVMsb0RBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw2REFBNkQ7QUFDN0Q7QUFDQSxLQUFLLGVBQWU7QUFDcEIsV0FBVyxvREFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsb0RBQWEsd0JBQXdCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFNLENBQUMsb0RBQWEsaUNBQWlDO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFc0g7QUFDdkgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzEzZGVkZjBmODE1MDVhNTgzYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MZWF2ZUNvbW1lbnQubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCBmaWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2ZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgdW5maWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci5wbmcnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBBRERfRkVFREJBQ0sgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGVhdmVDb21tZW50KCB7IG1hdGNoSWQgfSApIHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXMgY29uc3RzXHJcbiAgICAgICAgc3RhcnMgPSBbMCwgMSwgMiwgMywgNF0sXHJcbiAgICAgICAgW3NpbXVsYXRvciwgc2V0U2ltdWxhdG9yXSA9IHVzZVN0YXRlKDApLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2NvbW1vbnMuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBjb21tZW50OiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGlmICggbWF0Y2hJZCApIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgcmVxdWVzdChBRERfRkVFREJBQ0ssIHsgY29tbWVudDogZGF0YS5jb21tZW50LCBzdGFyczogc2ltdWxhdG9yLCBtYXRjaElkIH0sIHthdXRoOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZXJyICkge1xyXG4gICAgICAgICAgdG9hc3QoIGVyci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IGDQndC10LLQvtC30LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINC+0YLQt9GL0LJgLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfYXJlYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzLm1hcChlbCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbXVsYXRvciA+IGVsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17KGVsICsgMSkgKiBNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmaWxsZWRTdGFyLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW11bGF0b3IoZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsoZWwgKyAxKSAqIE1hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VuZmlsbGVkU3Rhci5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2ltdWxhdG9yKGVsICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0YXJlYV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2NvbW1lbnQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2NvbW1lbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgncGxhY2VIb2xkZXInKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoJ3NlbmQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiIsImltcG9ydCBSZWFjdF9fZGVmYXVsdCwgeyBpc1ZhbGlkRWxlbWVudCwgdXNlUmVmLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgY2xvbmVFbGVtZW50LCB1c2VTdGF0ZSwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBpc051bSh2KSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHYpO1xufVxuZnVuY3Rpb24gaXNCb29sKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnYm9vbGVhbic7XG59XG5mdW5jdGlvbiBpc1N0cih2KSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ3N0cmluZyc7XG59XG5mdW5jdGlvbiBpc0ZuKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gcGFyc2VDbGFzc05hbWUodikge1xuICByZXR1cm4gaXNTdHIodikgfHwgaXNGbih2KSA/IHYgOiBudWxsO1xufVxuZnVuY3Rpb24gaXNUb2FzdElkVmFsaWQodG9hc3RJZCkge1xuICByZXR1cm4gdG9hc3RJZCA9PT0gMCB8fCB0b2FzdElkO1xufVxuZnVuY3Rpb24gZ2V0QXV0b0Nsb3NlRGVsYXkodG9hc3RBdXRvQ2xvc2UsIGNvbnRhaW5lckF1dG9DbG9zZSkge1xuICByZXR1cm4gdG9hc3RBdXRvQ2xvc2UgPT09IGZhbHNlIHx8IGlzTnVtKHRvYXN0QXV0b0Nsb3NlKSAmJiB0b2FzdEF1dG9DbG9zZSA+IDAgPyB0b2FzdEF1dG9DbG9zZSA6IGNvbnRhaW5lckF1dG9DbG9zZTtcbn1cbnZhciBjYW5Vc2VEb20gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuZnVuY3Rpb24gY2FuQmVSZW5kZXJlZChjb250ZW50KSB7XG4gIHJldHVybiBpc1ZhbGlkRWxlbWVudChjb250ZW50KSB8fCBpc1N0cihjb250ZW50KSB8fCBpc0ZuKGNvbnRlbnQpIHx8IGlzTnVtKGNvbnRlbnQpO1xufVxuXG52YXIgUE9TSVRJT04gPSB7XG4gIFRPUF9MRUZUOiAndG9wLWxlZnQnLFxuICBUT1BfUklHSFQ6ICd0b3AtcmlnaHQnLFxuICBUT1BfQ0VOVEVSOiAndG9wLWNlbnRlcicsXG4gIEJPVFRPTV9MRUZUOiAnYm90dG9tLWxlZnQnLFxuICBCT1RUT01fUklHSFQ6ICdib3R0b20tcmlnaHQnLFxuICBCT1RUT01fQ0VOVEVSOiAnYm90dG9tLWNlbnRlcidcbn07XG52YXIgVFlQRSA9IHtcbiAgSU5GTzogJ2luZm8nLFxuICBTVUNDRVNTOiAnc3VjY2VzcycsXG4gIFdBUk5JTkc6ICd3YXJuaW5nJyxcbiAgRVJST1I6ICdlcnJvcicsXG4gIERFRkFVTFQ6ICdkZWZhdWx0JyxcbiAgREFSSzogJ2RhcmsnXG59O1xuXG4vKipcclxuICogVXNlZCB0byBjb2xsYXBzZSB0b2FzdCBhZnRlciBleGl0IGFuaW1hdGlvblxyXG4gKi9cbmZ1bmN0aW9uIGNvbGxhcHNlVG9hc3Qobm9kZSwgZG9uZSwgZHVyYXRpb25cbi8qIENPTExBUFNFX0RVUkFUSU9OICovXG4pIHtcbiAgaWYgKGR1cmF0aW9uID09PSB2b2lkIDApIHtcbiAgICBkdXJhdGlvbiA9IDMwMDtcbiAgfVxuXG4gIHZhciBoZWlnaHQgPSBub2RlLnNjcm9sbEhlaWdodDtcbiAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICBzdHlsZS5taW5IZWlnaHQgPSAnaW5pdGlhbCc7XG4gICAgc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICBzdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgXCIgKyBkdXJhdGlvbiArIFwibXNcIjtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgIHN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgIHNldFRpbWVvdXQoZG9uZSwgZHVyYXRpb24pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXHJcbiAqIENzcyBhbmltYXRpb24gdGhhdCBqdXN0IHdvcmsuXHJcbiAqIFlvdSBjb3VsZCB1c2UgYW5pbWF0ZS5jc3MgZm9yIGluc3RhbmNlXHJcbiAqXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjc3NUcmFuc2l0aW9uKHtcclxuICogICBlbnRlcjogXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19ib3VuY2VJblwiLFxyXG4gKiAgIGV4aXQ6IFwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlT3V0XCJcclxuICogfSlcclxuICogYGBgXHJcbiAqXHJcbiAqL1xuXG5mdW5jdGlvbiBjc3NUcmFuc2l0aW9uKF9yZWYpIHtcbiAgdmFyIGVudGVyID0gX3JlZi5lbnRlcixcbiAgICAgIGV4aXQgPSBfcmVmLmV4aXQsXG4gICAgICBfcmVmJGFwcGVuZFBvc2l0aW9uID0gX3JlZi5hcHBlbmRQb3NpdGlvbixcbiAgICAgIGFwcGVuZFBvc2l0aW9uID0gX3JlZiRhcHBlbmRQb3NpdGlvbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGFwcGVuZFBvc2l0aW9uLFxuICAgICAgX3JlZiRjb2xsYXBzZSA9IF9yZWYuY29sbGFwc2UsXG4gICAgICBjb2xsYXBzZSA9IF9yZWYkY29sbGFwc2UgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGNvbGxhcHNlLFxuICAgICAgX3JlZiRjb2xsYXBzZUR1cmF0aW9uID0gX3JlZi5jb2xsYXBzZUR1cmF0aW9uLFxuICAgICAgY29sbGFwc2VEdXJhdGlvbiA9IF9yZWYkY29sbGFwc2VEdXJhdGlvbiA9PT0gdm9pZCAwID8gMzAwIDogX3JlZiRjb2xsYXBzZUR1cmF0aW9uO1xuICByZXR1cm4gZnVuY3Rpb24gVG9hc3RUcmFuc2l0aW9uKF9yZWYyKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICAgIHByZXZlbnRFeGl0VHJhbnNpdGlvbiA9IF9yZWYyLnByZXZlbnRFeGl0VHJhbnNpdGlvbixcbiAgICAgICAgZG9uZSA9IF9yZWYyLmRvbmUsXG4gICAgICAgIG5vZGVSZWYgPSBfcmVmMi5ub2RlUmVmLFxuICAgICAgICBpc0luID0gX3JlZjIuaXNJbjtcbiAgICB2YXIgZW50ZXJDbGFzc05hbWUgPSBhcHBlbmRQb3NpdGlvbiA/IGVudGVyICsgXCItLVwiICsgcG9zaXRpb24gOiBlbnRlcjtcbiAgICB2YXIgZXhpdENsYXNzTmFtZSA9IGFwcGVuZFBvc2l0aW9uID8gZXhpdCArIFwiLS1cIiArIHBvc2l0aW9uIDogZXhpdDtcbiAgICB2YXIgYmFzZUNsYXNzTmFtZSA9IHVzZVJlZigpO1xuICAgIHZhciBhbmltYXRpb25TdGVwID0gdXNlUmVmKDBcbiAgICAvKiBFbnRlciAqL1xuICAgICk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uRW50ZXIoKTtcbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghaXNJbikgcHJldmVudEV4aXRUcmFuc2l0aW9uID8gb25FeGl0ZWQoKSA6IG9uRXhpdCgpO1xuICAgIH0sIFtpc0luXSk7XG5cbiAgICBmdW5jdGlvbiBvbkVudGVyKCkge1xuICAgICAgdmFyIG5vZGUgPSBub2RlUmVmLmN1cnJlbnQ7XG4gICAgICBiYXNlQ2xhc3NOYW1lLmN1cnJlbnQgPSBub2RlLmNsYXNzTmFtZTtcbiAgICAgIG5vZGUuY2xhc3NOYW1lICs9IFwiIFwiICsgZW50ZXJDbGFzc05hbWU7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG9uRW50ZXJlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FbnRlcmVkKCkge1xuICAgICAgdmFyIG5vZGUgPSBub2RlUmVmLmN1cnJlbnQ7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG9uRW50ZXJlZCk7XG5cbiAgICAgIGlmIChhbmltYXRpb25TdGVwLmN1cnJlbnQgPT09IDBcbiAgICAgIC8qIEVudGVyICovXG4gICAgICApIHtcbiAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGJhc2VDbGFzc05hbWUuY3VycmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRXhpdCgpIHtcbiAgICAgIGFuaW1hdGlvblN0ZXAuY3VycmVudCA9IDFcbiAgICAgIC8qIEV4aXQgKi9cbiAgICAgIDtcbiAgICAgIHZhciBub2RlID0gbm9kZVJlZi5jdXJyZW50O1xuICAgICAgbm9kZS5jbGFzc05hbWUgKz0gXCIgXCIgKyBleGl0Q2xhc3NOYW1lO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvbkV4aXRlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FeGl0ZWQoKSB7XG4gICAgICB2YXIgbm9kZSA9IG5vZGVSZWYuY3VycmVudDtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgb25FeGl0ZWQpO1xuICAgICAgY29sbGFwc2UgPyBjb2xsYXBzZVRvYXN0KG5vZGUsIGRvbmUsIGNvbGxhcHNlRHVyYXRpb24pIDogZG9uZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0X19kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbik7XG4gIH07XG59XG5cbnZhciBldmVudE1hbmFnZXIgPSB7XG4gIGxpc3Q6IC8qI19fUFVSRV9fKi9uZXcgTWFwKCksXG4gIGVtaXRRdWV1ZTogLyojX19QVVJFX18qL25ldyBNYXAoKSxcbiAgb246IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdC5oYXMoZXZlbnQpIHx8IHRoaXMubGlzdC5zZXQoZXZlbnQsIFtdKTtcbiAgICB0aGlzLmxpc3QuZ2V0KGV2ZW50KS5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgb2ZmOiBmdW5jdGlvbiBvZmYoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY2IgPSB0aGlzLmxpc3QuZ2V0KGV2ZW50KS5maWx0ZXIoZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHJldHVybiBjYiAhPT0gY2FsbGJhY2s7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdC5zZXQoZXZlbnQsIGNiKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMubGlzdFtcImRlbGV0ZVwiXShldmVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNhbmNlbEVtaXQ6IGZ1bmN0aW9uIGNhbmNlbEVtaXQoZXZlbnQpIHtcbiAgICB2YXIgdGltZXJzID0gdGhpcy5lbWl0UXVldWUuZ2V0KGV2ZW50KTtcblxuICAgIGlmICh0aW1lcnMpIHtcbiAgICAgIHRpbWVycy5mb3JFYWNoKGNsZWFyVGltZW91dCk7XG4gICAgICB0aGlzLmVtaXRRdWV1ZVtcImRlbGV0ZVwiXShldmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogRW5xdWV1ZSB0aGUgZXZlbnQgYXQgdGhlIGVuZCBvZiB0aGUgY2FsbCBzdGFja1xyXG4gICAqIERvaW5nIHNvIGxldCB0aGUgdXNlciBjYWxsIHRvYXN0IGFzIGZvbGxvdzpcclxuICAgKiB0b2FzdCgnMScpXHJcbiAgICogdG9hc3QoJzInKVxyXG4gICAqIHRvYXN0KCczJylcclxuICAgKiBXaXRob3V0IHNldFRpbWVtb3V0IHRoZSBjb2RlIGFib3ZlIHdpbGwgbm90IHdvcmtcclxuICAgKi9cbiAgZW1pdDogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB0aGlzLmxpc3QuaGFzKGV2ZW50KSAmJiB0aGlzLmxpc3QuZ2V0KGV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2FsbGJhY2suYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgIH0sIDApO1xuICAgICAgX3RoaXMuZW1pdFF1ZXVlLmhhcyhldmVudCkgfHwgX3RoaXMuZW1pdFF1ZXVlLnNldChldmVudCwgW10pO1xuXG4gICAgICBfdGhpcy5lbWl0UXVldWUuZ2V0KGV2ZW50KS5wdXNoKHRpbWVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXHJcbiAqIGB1c2VLZWVwZXJgIGlzIGEgaGVscGVyIGFyb3VuZCBgdXNlUmVmYC5cclxuICpcclxuICogWW91IGRvbid0IG5lZWQgdG8gYWNjZXNzIHRoZSBgLmN1cnJlbnRgcHJvcGVydHkgdG8gZ2V0IHRoZSB2YWx1ZVxyXG4gKiBJZiByZWZyZXNoIGlzIHNldCB0byB0cnVlLiBUaGUgcmVmIHdpbGwgYmUgdXBkYXRlZCBldmVyeSByZW5kZXJcclxuICovXG5cbmZ1bmN0aW9uIHVzZUtlZXBlcihhcmcsIHJlZnJlc2gpIHtcbiAgaWYgKHJlZnJlc2ggPT09IHZvaWQgMCkge1xuICAgIHJlZnJlc2ggPSBmYWxzZTtcbiAgfVxuXG4gIHZhciByZWYgPSB1c2VSZWYoYXJnKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmVmcmVzaCkgcmVmLmN1cnJlbnQgPSBhcmc7XG4gIH0pO1xuICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAwXG4gICAgLyogQUREICovXG4gICAgOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChzdGF0ZSwgW2FjdGlvbi50b2FzdElkXSkuZmlsdGVyKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gaWQgIT09IGFjdGlvbi5zdGFsZUlkO1xuICAgICAgfSk7XG5cbiAgICBjYXNlIDFcbiAgICAvKiBSRU1PVkUgKi9cbiAgICA6XG4gICAgICByZXR1cm4gaXNUb2FzdElkVmFsaWQoYWN0aW9uLnRvYXN0SWQpID8gc3RhdGUuZmlsdGVyKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gaWQgIT09IGFjdGlvbi50b2FzdElkO1xuICAgICAgfSkgOiBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VUb2FzdENvbnRhaW5lcihwcm9wcykge1xuICB2YXIgX3VzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHggKyAxO1xuICB9LCAwKSxcbiAgICAgIGZvcmNlVXBkYXRlID0gX3VzZVJlZHVjZXJbMV07XG5cbiAgdmFyIF91c2VSZWR1Y2VyMiA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10pLFxuICAgICAgdG9hc3QgPSBfdXNlUmVkdWNlcjJbMF0sXG4gICAgICBkaXNwYXRjaCA9IF91c2VSZWR1Y2VyMlsxXTtcblxuICB2YXIgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgdG9hc3RDb3VudCA9IHVzZUtlZXBlcigwKTtcbiAgdmFyIHF1ZXVlID0gdXNlS2VlcGVyKFtdKTtcbiAgdmFyIGNvbGxlY3Rpb24gPSB1c2VLZWVwZXIoe30pO1xuICB2YXIgaW5zdGFuY2UgPSB1c2VLZWVwZXIoe1xuICAgIHRvYXN0S2V5OiAxLFxuICAgIGRpc3BsYXllZFRvYXN0OiAwLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICBjb250YWluZXJJZDogbnVsbCxcbiAgICBpc1RvYXN0QWN0aXZlOiBpc1RvYXN0QWN0aXZlLFxuICAgIGdldFRvYXN0OiBmdW5jdGlvbiBnZXRUb2FzdChpZCkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25baWRdIHx8IG51bGw7XG4gICAgfVxuICB9KTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0YW5jZS5jb250YWluZXJJZCA9IHByb3BzLmNvbnRhaW5lcklkO1xuICAgIGV2ZW50TWFuYWdlci5jYW5jZWxFbWl0KDNcbiAgICAvKiBXaWxsVW5tb3VudCAqL1xuICAgICkub24oMFxuICAgIC8qIFNob3cgKi9cbiAgICAsIGJ1aWxkVG9hc3QpLm9uKDFcbiAgICAvKiBDbGVhciAqL1xuICAgICwgZnVuY3Rpb24gKHRvYXN0SWQpIHtcbiAgICAgIHJldHVybiBjb250YWluZXJSZWYuY3VycmVudCAmJiByZW1vdmVUb2FzdCh0b2FzdElkKTtcbiAgICB9KS5vbig1XG4gICAgLyogQ2xlYXJXYWl0aW5nUXVldWUgKi9cbiAgICAsIGNsZWFyV2FpdGluZ1F1ZXVlKS5lbWl0KDJcbiAgICAvKiBEaWRNb3VudCAqL1xuICAgICwgaW5zdGFuY2UpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZXZlbnRNYW5hZ2VyLmVtaXQoM1xuICAgICAgLyogV2lsbFVubW91bnQgKi9cbiAgICAgICwgaW5zdGFuY2UpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0YW5jZS5pc1RvYXN0QWN0aXZlID0gaXNUb2FzdEFjdGl2ZTtcbiAgICBpbnN0YW5jZS5kaXNwbGF5ZWRUb2FzdCA9IHRvYXN0Lmxlbmd0aDtcbiAgICBldmVudE1hbmFnZXIuZW1pdCg0XG4gICAgLyogQ2hhbmdlICovXG4gICAgLCB0b2FzdC5sZW5ndGgsIHByb3BzLmNvbnRhaW5lcklkKTtcbiAgfSwgW3RvYXN0XSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdGFuY2UucHJvcHMgPSBwcm9wcztcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaXNUb2FzdEFjdGl2ZShpZCkge1xuICAgIHJldHVybiB0b2FzdC5pbmRleE9mKGlkKSAhPT0gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcldhaXRpbmdRdWV1ZShfcmVmKSB7XG4gICAgdmFyIGNvbnRhaW5lcklkID0gX3JlZi5jb250YWluZXJJZDtcbiAgICB2YXIgbGltaXQgPSBpbnN0YW5jZS5wcm9wcy5saW1pdDtcblxuICAgIGlmIChsaW1pdCAmJiAoIWNvbnRhaW5lcklkIHx8IGluc3RhbmNlLmNvbnRhaW5lcklkID09PSBjb250YWluZXJJZCkpIHtcbiAgICAgIHRvYXN0Q291bnQgLT0gcXVldWUubGVuZ3RoO1xuICAgICAgcXVldWUgPSBbXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVUb2FzdCh0b2FzdElkKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogMVxuICAgICAgLyogUkVNT1ZFICovXG4gICAgICAsXG4gICAgICB0b2FzdElkOiB0b2FzdElkXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXF1ZXVlVG9hc3QoKSB7XG4gICAgdmFyIF9xdWV1ZSRzaGlmdCA9IHF1ZXVlLnNoaWZ0KCksXG4gICAgICAgIHRvYXN0Q29udGVudCA9IF9xdWV1ZSRzaGlmdC50b2FzdENvbnRlbnQsXG4gICAgICAgIHRvYXN0UHJvcHMgPSBfcXVldWUkc2hpZnQudG9hc3RQcm9wcyxcbiAgICAgICAgc3RhbGVJZCA9IF9xdWV1ZSRzaGlmdC5zdGFsZUlkO1xuXG4gICAgYXBwZW5kVG9hc3QodG9hc3RDb250ZW50LCB0b2FzdFByb3BzLCBzdGFsZUlkKTtcbiAgfVxuICAvKipcclxuICAgKiBjaGVjayBpZiBhIGNvbnRhaW5lciBpcyBhdHRhY2hlZCB0byB0aGUgZG9tXHJcbiAgICogY2hlY2sgZm9yIG11bHRpLWNvbnRhaW5lciwgYnVpbGQgb25seSBpZiBhc3NvY2lhdGVkXHJcbiAgICogY2hlY2sgZm9yIGR1cGxpY2F0ZSB0b2FzdElkIGlmIG5vIHVwZGF0ZVxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaXNOb3RWYWxpZChfcmVmMikge1xuICAgIHZhciBjb250YWluZXJJZCA9IF9yZWYyLmNvbnRhaW5lcklkLFxuICAgICAgICB0b2FzdElkID0gX3JlZjIudG9hc3RJZCxcbiAgICAgICAgdXBkYXRlSWQgPSBfcmVmMi51cGRhdGVJZDtcbiAgICByZXR1cm4gIWNvbnRhaW5lclJlZi5jdXJyZW50IHx8IGluc3RhbmNlLnByb3BzLmVuYWJsZU11bHRpQ29udGFpbmVyICYmIGNvbnRhaW5lcklkICE9PSBpbnN0YW5jZS5wcm9wcy5jb250YWluZXJJZCB8fCBjb2xsZWN0aW9uW3RvYXN0SWRdICYmIHVwZGF0ZUlkID09IG51bGwgPyB0cnVlIDogZmFsc2U7XG4gIH0gLy8gdGhpcyBmdW5jdGlvbiBhbmQgYWxsIHRoZSBmdW5jdGlvbiBjYWxsZWQgaW5zaWRlIG5lZWRzIHRvIHJlbHkgb24gcmVmKGB1c2VLZWVwZXJgKVxuXG5cbiAgZnVuY3Rpb24gYnVpbGRUb2FzdChjb250ZW50LCBfcmVmMykge1xuICAgIHZhciBkZWxheSA9IF9yZWYzLmRlbGF5LFxuICAgICAgICBzdGFsZUlkID0gX3JlZjMuc3RhbGVJZCxcbiAgICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYzLCBbXCJkZWxheVwiLCBcInN0YWxlSWRcIl0pO1xuXG4gICAgaWYgKCFjYW5CZVJlbmRlcmVkKGNvbnRlbnQpIHx8IGlzTm90VmFsaWQob3B0aW9ucykpIHJldHVybjtcbiAgICB2YXIgdG9hc3RJZCA9IG9wdGlvbnMudG9hc3RJZCxcbiAgICAgICAgdXBkYXRlSWQgPSBvcHRpb25zLnVwZGF0ZUlkO1xuICAgIHZhciBwcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgdmFyIGNsb3NlVG9hc3QgPSBmdW5jdGlvbiBjbG9zZVRvYXN0KCkge1xuICAgICAgcmV0dXJuIHJlbW92ZVRvYXN0KHRvYXN0SWQpO1xuICAgIH07XG5cbiAgICB2YXIgaXNOb3RBblVwZGF0ZSA9IG9wdGlvbnMudXBkYXRlSWQgPT0gbnVsbDtcbiAgICBpZiAoaXNOb3RBblVwZGF0ZSkgdG9hc3RDb3VudCsrO1xuICAgIHZhciB0b2FzdFByb3BzID0ge1xuICAgICAgdG9hc3RJZDogdG9hc3RJZCxcbiAgICAgIHVwZGF0ZUlkOiB1cGRhdGVJZCxcbiAgICAgIGlzSW46IGZhbHNlLFxuICAgICAga2V5OiBvcHRpb25zLmtleSB8fCBpbnN0YW5jZS50b2FzdEtleSsrLFxuICAgICAgdHlwZTogb3B0aW9ucy50eXBlLFxuICAgICAgY2xvc2VUb2FzdDogY2xvc2VUb2FzdCxcbiAgICAgIGNsb3NlQnV0dG9uOiBvcHRpb25zLmNsb3NlQnV0dG9uLFxuICAgICAgcnRsOiBwcm9wcy5ydGwsXG4gICAgICBwb3NpdGlvbjogb3B0aW9ucy5wb3NpdGlvbiB8fCBwcm9wcy5wb3NpdGlvbixcbiAgICAgIHRyYW5zaXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiB8fCBwcm9wcy50cmFuc2l0aW9uLFxuICAgICAgY2xhc3NOYW1lOiBwYXJzZUNsYXNzTmFtZShvcHRpb25zLmNsYXNzTmFtZSB8fCBwcm9wcy50b2FzdENsYXNzTmFtZSksXG4gICAgICBib2R5Q2xhc3NOYW1lOiBwYXJzZUNsYXNzTmFtZShvcHRpb25zLmJvZHlDbGFzc05hbWUgfHwgcHJvcHMuYm9keUNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogb3B0aW9ucy5zdHlsZSB8fCBwcm9wcy50b2FzdFN0eWxlLFxuICAgICAgYm9keVN0eWxlOiBvcHRpb25zLmJvZHlTdHlsZSB8fCBwcm9wcy5ib2R5U3R5bGUsXG4gICAgICBvbkNsaWNrOiBvcHRpb25zLm9uQ2xpY2sgfHwgcHJvcHMub25DbGljayxcbiAgICAgIHBhdXNlT25Ib3ZlcjogaXNCb29sKG9wdGlvbnMucGF1c2VPbkhvdmVyKSA/IG9wdGlvbnMucGF1c2VPbkhvdmVyIDogcHJvcHMucGF1c2VPbkhvdmVyLFxuICAgICAgcGF1c2VPbkZvY3VzTG9zczogaXNCb29sKG9wdGlvbnMucGF1c2VPbkZvY3VzTG9zcykgPyBvcHRpb25zLnBhdXNlT25Gb2N1c0xvc3MgOiBwcm9wcy5wYXVzZU9uRm9jdXNMb3NzLFxuICAgICAgZHJhZ2dhYmxlOiBpc0Jvb2wob3B0aW9ucy5kcmFnZ2FibGUpID8gb3B0aW9ucy5kcmFnZ2FibGUgOiBwcm9wcy5kcmFnZ2FibGUsXG4gICAgICBkcmFnZ2FibGVQZXJjZW50OiBpc051bShvcHRpb25zLmRyYWdnYWJsZVBlcmNlbnQpID8gb3B0aW9ucy5kcmFnZ2FibGVQZXJjZW50IDogcHJvcHMuZHJhZ2dhYmxlUGVyY2VudCxcbiAgICAgIGRyYWdnYWJsZURpcmVjdGlvbjogb3B0aW9ucy5kcmFnZ2FibGVEaXJlY3Rpb24gfHwgcHJvcHMuZHJhZ2dhYmxlRGlyZWN0aW9uLFxuICAgICAgY2xvc2VPbkNsaWNrOiBpc0Jvb2wob3B0aW9ucy5jbG9zZU9uQ2xpY2spID8gb3B0aW9ucy5jbG9zZU9uQ2xpY2sgOiBwcm9wcy5jbG9zZU9uQ2xpY2ssXG4gICAgICBwcm9ncmVzc0NsYXNzTmFtZTogcGFyc2VDbGFzc05hbWUob3B0aW9ucy5wcm9ncmVzc0NsYXNzTmFtZSB8fCBwcm9wcy5wcm9ncmVzc0NsYXNzTmFtZSksXG4gICAgICBwcm9ncmVzc1N0eWxlOiBvcHRpb25zLnByb2dyZXNzU3R5bGUgfHwgcHJvcHMucHJvZ3Jlc3NTdHlsZSxcbiAgICAgIGF1dG9DbG9zZTogZ2V0QXV0b0Nsb3NlRGVsYXkob3B0aW9ucy5hdXRvQ2xvc2UsIHByb3BzLmF1dG9DbG9zZSksXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGlzQm9vbChvcHRpb25zLmhpZGVQcm9ncmVzc0JhcikgPyBvcHRpb25zLmhpZGVQcm9ncmVzc0JhciA6IHByb3BzLmhpZGVQcm9ncmVzc0JhcixcbiAgICAgIHByb2dyZXNzOiBvcHRpb25zLnByb2dyZXNzLFxuICAgICAgcm9sZTogaXNTdHIob3B0aW9ucy5yb2xlKSA/IG9wdGlvbnMucm9sZSA6IHByb3BzLnJvbGUsXG4gICAgICBkZWxldGVUb2FzdDogZnVuY3Rpb24gZGVsZXRlVG9hc3QoKSB7XG4gICAgICAgIHJlbW92ZUZyb21Db2xsZWN0aW9uKHRvYXN0SWQpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGlzRm4ob3B0aW9ucy5vbk9wZW4pKSB0b2FzdFByb3BzLm9uT3BlbiA9IG9wdGlvbnMub25PcGVuO1xuICAgIGlmIChpc0ZuKG9wdGlvbnMub25DbG9zZSkpIHRvYXN0UHJvcHMub25DbG9zZSA9IG9wdGlvbnMub25DbG9zZTsgLy8gIHR3ZWFrIGZvciB2ZXJ0aWNhbCBkcmFnZ2luZ1xuXG4gICAgaWYgKHRvYXN0UHJvcHMuZHJhZ2dhYmxlRGlyZWN0aW9uID09PSBcInlcIlxuICAgIC8qIFkgKi9cbiAgICAmJiB0b2FzdFByb3BzLmRyYWdnYWJsZVBlcmNlbnQgPT09IDgwXG4gICAgLyogRFJBR0dBQkxFX1BFUkNFTlQgKi9cbiAgICApIHtcbiAgICAgICAgdG9hc3RQcm9wcy5kcmFnZ2FibGVQZXJjZW50ICo9IDEuNTtcbiAgICAgIH1cblxuICAgIHZhciBjbG9zZUJ1dHRvbiA9IHByb3BzLmNsb3NlQnV0dG9uO1xuXG4gICAgaWYgKG9wdGlvbnMuY2xvc2VCdXR0b24gPT09IGZhbHNlIHx8IGNhbkJlUmVuZGVyZWQob3B0aW9ucy5jbG9zZUJ1dHRvbikpIHtcbiAgICAgIGNsb3NlQnV0dG9uID0gb3B0aW9ucy5jbG9zZUJ1dHRvbjtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuY2xvc2VCdXR0b24gPT09IHRydWUpIHtcbiAgICAgIGNsb3NlQnV0dG9uID0gY2FuQmVSZW5kZXJlZChwcm9wcy5jbG9zZUJ1dHRvbikgPyBwcm9wcy5jbG9zZUJ1dHRvbiA6IHRydWU7XG4gICAgfVxuXG4gICAgdG9hc3RQcm9wcy5jbG9zZUJ1dHRvbiA9IGNsb3NlQnV0dG9uO1xuICAgIHZhciB0b2FzdENvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KGNvbnRlbnQpICYmICFpc1N0cihjb250ZW50LnR5cGUpKSB7XG4gICAgICB0b2FzdENvbnRlbnQgPSBjbG9uZUVsZW1lbnQoY29udGVudCwge1xuICAgICAgICBjbG9zZVRvYXN0OiBjbG9zZVRvYXN0LFxuICAgICAgICB0b2FzdFByb3BzOiB0b2FzdFByb3BzXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzRm4oY29udGVudCkpIHtcbiAgICAgIHRvYXN0Q29udGVudCA9IGNvbnRlbnQoe1xuICAgICAgICBjbG9zZVRvYXN0OiBjbG9zZVRvYXN0LFxuICAgICAgICB0b2FzdFByb3BzOiB0b2FzdFByb3BzXG4gICAgICB9KTtcbiAgICB9IC8vIG5vdCBoYW5kbGluZyBsaW1pdCArIGRlbGF5IGJ5IGRlc2lnbi4gV2FpdGluZyBmb3IgdXNlciBmZWVkYmFjayBmaXJzdFxuXG5cbiAgICBpZiAocHJvcHMubGltaXQgJiYgcHJvcHMubGltaXQgPiAwICYmIHRvYXN0Q291bnQgPiBwcm9wcy5saW1pdCAmJiBpc05vdEFuVXBkYXRlKSB7XG4gICAgICBxdWV1ZS5wdXNoKHtcbiAgICAgICAgdG9hc3RDb250ZW50OiB0b2FzdENvbnRlbnQsXG4gICAgICAgIHRvYXN0UHJvcHM6IHRvYXN0UHJvcHMsXG4gICAgICAgIHN0YWxlSWQ6IHN0YWxlSWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNOdW0oZGVsYXkpICYmIGRlbGF5ID4gMCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFwcGVuZFRvYXN0KHRvYXN0Q29udGVudCwgdG9hc3RQcm9wcywgc3RhbGVJZCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGVuZFRvYXN0KHRvYXN0Q29udGVudCwgdG9hc3RQcm9wcywgc3RhbGVJZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kVG9hc3QoY29udGVudCwgdG9hc3RQcm9wcywgc3RhbGVJZCkge1xuICAgIHZhciB0b2FzdElkID0gdG9hc3RQcm9wcy50b2FzdElkO1xuICAgIGlmIChzdGFsZUlkKSBkZWxldGUgY29sbGVjdGlvbltzdGFsZUlkXTtcbiAgICBjb2xsZWN0aW9uW3RvYXN0SWRdID0ge1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIHByb3BzOiB0b2FzdFByb3BzXG4gICAgfTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAwXG4gICAgICAvKiBBREQgKi9cbiAgICAgICxcbiAgICAgIHRvYXN0SWQ6IHRvYXN0SWQsXG4gICAgICBzdGFsZUlkOiBzdGFsZUlkXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVGcm9tQ29sbGVjdGlvbih0b2FzdElkKSB7XG4gICAgZGVsZXRlIGNvbGxlY3Rpb25bdG9hc3RJZF07XG4gICAgdmFyIHF1ZXVlTGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHRvYXN0Q291bnQgPSBpc1RvYXN0SWRWYWxpZCh0b2FzdElkKSA/IHRvYXN0Q291bnQgLSAxIDogdG9hc3RDb3VudCAtIGluc3RhbmNlLmRpc3BsYXllZFRvYXN0O1xuICAgIGlmICh0b2FzdENvdW50IDwgMCkgdG9hc3RDb3VudCA9IDA7XG5cbiAgICBpZiAocXVldWVMZW4gPiAwKSB7XG4gICAgICB2YXIgZnJlZVNsb3QgPSBpc1RvYXN0SWRWYWxpZCh0b2FzdElkKSA/IDEgOiBpbnN0YW5jZS5wcm9wcy5saW1pdDtcblxuICAgICAgaWYgKHF1ZXVlTGVuID09PSAxIHx8IGZyZWVTbG90ID09PSAxKSB7XG4gICAgICAgIGluc3RhbmNlLmRpc3BsYXllZFRvYXN0Kys7XG4gICAgICAgIGRlcXVldWVUb2FzdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRvRGVxdWV1ZSA9IGZyZWVTbG90ID4gcXVldWVMZW4gPyBxdWV1ZUxlbiA6IGZyZWVTbG90O1xuICAgICAgICBpbnN0YW5jZS5kaXNwbGF5ZWRUb2FzdCA9IHRvRGVxdWV1ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvRGVxdWV1ZTsgaSsrKSB7XG4gICAgICAgICAgZGVxdWV1ZVRvYXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUb2FzdFRvUmVuZGVyKGNiKSB7XG4gICAgdmFyIHRvYXN0VG9SZW5kZXIgPSB7fTtcbiAgICB2YXIgdG9hc3RMaXN0ID0gcHJvcHMubmV3ZXN0T25Ub3AgPyBPYmplY3Qua2V5cyhjb2xsZWN0aW9uKS5yZXZlcnNlKCkgOiBPYmplY3Qua2V5cyhjb2xsZWN0aW9uKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9hc3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgX3RvYXN0ID0gY29sbGVjdGlvblt0b2FzdExpc3RbaV1dO1xuICAgICAgdmFyIHBvc2l0aW9uID0gX3RvYXN0LnByb3BzLnBvc2l0aW9uO1xuICAgICAgdG9hc3RUb1JlbmRlcltwb3NpdGlvbl0gfHwgKHRvYXN0VG9SZW5kZXJbcG9zaXRpb25dID0gW10pO1xuICAgICAgdG9hc3RUb1JlbmRlcltwb3NpdGlvbl0ucHVzaChfdG9hc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0b2FzdFRvUmVuZGVyKS5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBjYihwLCB0b2FzdFRvUmVuZGVyW3BdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0VG9hc3RUb1JlbmRlcjogZ2V0VG9hc3RUb1JlbmRlcixcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgIGNvbnRhaW5lclJlZjogY29udGFpbmVyUmVmLFxuICAgIGlzVG9hc3RBY3RpdmU6IGlzVG9hc3RBY3RpdmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0WChlKSB7XG4gIHJldHVybiBlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+PSAxID8gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFg7XG59XG5cbmZ1bmN0aW9uIGdldFkoZSkge1xuICByZXR1cm4gZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPj0gMSA/IGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIDogZS5jbGllbnRZO1xufVxuXG5mdW5jdGlvbiB1c2VUb2FzdChwcm9wcykge1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUodHJ1ZSksXG4gICAgICBpc1J1bm5pbmcgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRJc1J1bm5pbmcgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTIgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBwcmV2ZW50RXhpdFRyYW5zaXRpb24gPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0UHJldmVudEV4aXRUcmFuc2l0aW9uID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgdG9hc3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBkcmFnID0gdXNlS2VlcGVyKHtcbiAgICBzdGFydDogMCxcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgZGVsdGE6IDAsXG4gICAgcmVtb3ZhbERpc3RhbmNlOiAwLFxuICAgIGNhbkNsb3NlT25DbGljazogdHJ1ZSxcbiAgICBjYW5EcmFnOiBmYWxzZSxcbiAgICBib3VuZGluZ1JlY3Q6IG51bGxcbiAgfSk7XG4gIHZhciBzeW5jUHJvcHMgPSB1c2VLZWVwZXIocHJvcHMsIHRydWUpO1xuICB2YXIgYXV0b0Nsb3NlID0gcHJvcHMuYXV0b0Nsb3NlLFxuICAgICAgcGF1c2VPbkhvdmVyID0gcHJvcHMucGF1c2VPbkhvdmVyLFxuICAgICAgY2xvc2VUb2FzdCA9IHByb3BzLmNsb3NlVG9hc3QsXG4gICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgIGNsb3NlT25DbGljayA9IHByb3BzLmNsb3NlT25DbGljaztcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNGbihwcm9wcy5vbk9wZW4pKSBwcm9wcy5vbk9wZW4oaXNWYWxpZEVsZW1lbnQocHJvcHMuY2hpbGRyZW4pICYmIHByb3BzLmNoaWxkcmVuLnByb3BzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzRm4oc3luY1Byb3BzLm9uQ2xvc2UpKSBzeW5jUHJvcHMub25DbG9zZShpc1ZhbGlkRWxlbWVudChzeW5jUHJvcHMuY2hpbGRyZW4pICYmIHN5bmNQcm9wcy5jaGlsZHJlbi5wcm9wcyk7XG4gICAgfTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHByb3BzLmRyYWdnYWJsZSAmJiBiaW5kRHJhZ0V2ZW50cygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9wcy5kcmFnZ2FibGUgJiYgdW5iaW5kRHJhZ0V2ZW50cygpO1xuICAgIH07XG4gIH0sIFtwcm9wcy5kcmFnZ2FibGVdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBwcm9wcy5wYXVzZU9uRm9jdXNMb3NzICYmIGJpbmRGb2N1c0V2ZW50cygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9wcy5wYXVzZU9uRm9jdXNMb3NzICYmIHVuYmluZEZvY3VzRXZlbnRzKCk7XG4gICAgfTtcbiAgfSwgW3Byb3BzLnBhdXNlT25Gb2N1c0xvc3NdKTtcblxuICBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XG4gICAgaWYgKHByb3BzLmRyYWdnYWJsZSkge1xuICAgICAgdmFyIHRvYXN0ID0gdG9hc3RSZWYuY3VycmVudDtcbiAgICAgIGRyYWcuY2FuQ2xvc2VPbkNsaWNrID0gdHJ1ZTtcbiAgICAgIGRyYWcuY2FuRHJhZyA9IHRydWU7XG4gICAgICBkcmFnLmJvdW5kaW5nUmVjdCA9IHRvYXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdG9hc3Quc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgZHJhZy54ID0gZ2V0WChlLm5hdGl2ZUV2ZW50KTtcbiAgICAgIGRyYWcueSA9IGdldFkoZS5uYXRpdmVFdmVudCk7XG5cbiAgICAgIGlmIChwcm9wcy5kcmFnZ2FibGVEaXJlY3Rpb24gPT09IFwieFwiXG4gICAgICAvKiBYICovXG4gICAgICApIHtcbiAgICAgICAgICBkcmFnLnN0YXJ0ID0gZHJhZy54O1xuICAgICAgICAgIGRyYWcucmVtb3ZhbERpc3RhbmNlID0gdG9hc3Qub2Zmc2V0V2lkdGggKiAocHJvcHMuZHJhZ2dhYmxlUGVyY2VudCAvIDEwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWcuc3RhcnQgPSBkcmFnLnk7XG4gICAgICAgIGRyYWcucmVtb3ZhbERpc3RhbmNlID0gdG9hc3Qub2Zmc2V0SGVpZ2h0ICogKHByb3BzLmRyYWdnYWJsZVBlcmNlbnQgLyAxMDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ1RyYW5zaXRpb25FbmQoKSB7XG4gICAgaWYgKGRyYWcuYm91bmRpbmdSZWN0KSB7XG4gICAgICB2YXIgX2RyYWckYm91bmRpbmdSZWN0ID0gZHJhZy5ib3VuZGluZ1JlY3QsXG4gICAgICAgICAgdG9wID0gX2RyYWckYm91bmRpbmdSZWN0LnRvcCxcbiAgICAgICAgICBib3R0b20gPSBfZHJhZyRib3VuZGluZ1JlY3QuYm90dG9tLFxuICAgICAgICAgIGxlZnQgPSBfZHJhZyRib3VuZGluZ1JlY3QubGVmdCxcbiAgICAgICAgICByaWdodCA9IF9kcmFnJGJvdW5kaW5nUmVjdC5yaWdodDtcblxuICAgICAgaWYgKHByb3BzLnBhdXNlT25Ib3ZlciAmJiBkcmFnLnggPj0gbGVmdCAmJiBkcmFnLnggPD0gcmlnaHQgJiYgZHJhZy55ID49IHRvcCAmJiBkcmFnLnkgPD0gYm90dG9tKSB7XG4gICAgICAgIHBhdXNlVG9hc3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXlUb2FzdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlUb2FzdCgpIHtcbiAgICBzZXRJc1J1bm5pbmcodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZVRvYXN0KCkge1xuICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kRm9jdXNFdmVudHMoKSB7XG4gICAgaWYgKCFkb2N1bWVudC5oYXNGb2N1cygpKSBwYXVzZVRvYXN0KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgcGxheVRvYXN0KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHBhdXNlVG9hc3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5iaW5kRm9jdXNFdmVudHMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgcGxheVRvYXN0KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHBhdXNlVG9hc3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZERyYWdFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25EcmFnTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRHJhZ0VuZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25EcmFnTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRyYWdFbmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5iaW5kRHJhZ0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRyYWdNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EcmFnRW5kKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvbkRyYWdNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uRHJhZ0VuZCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdNb3ZlKGUpIHtcbiAgICBpZiAoZHJhZy5jYW5EcmFnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgdG9hc3QgPSB0b2FzdFJlZi5jdXJyZW50O1xuICAgICAgaWYgKGlzUnVubmluZykgcGF1c2VUb2FzdCgpO1xuICAgICAgZHJhZy54ID0gZ2V0WChlKTtcbiAgICAgIGRyYWcueSA9IGdldFkoZSk7XG5cbiAgICAgIGlmIChwcm9wcy5kcmFnZ2FibGVEaXJlY3Rpb24gPT09IFwieFwiXG4gICAgICAvKiBYICovXG4gICAgICApIHtcbiAgICAgICAgICBkcmFnLmRlbHRhID0gZHJhZy54IC0gZHJhZy5zdGFydDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZy5kZWx0YSA9IGRyYWcueSAtIGRyYWcuc3RhcnQ7XG4gICAgICB9IC8vIHByZXZlbnQgZmFsc2UgcG9zaXRpZiBkdXJpbmcgYSB0b2FzdCBjbGlja1xuXG5cbiAgICAgIGlmIChkcmFnLnN0YXJ0ICE9PSBkcmFnLngpIGRyYWcuY2FuQ2xvc2VPbkNsaWNrID0gZmFsc2U7XG4gICAgICB0b2FzdC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVwiICsgcHJvcHMuZHJhZ2dhYmxlRGlyZWN0aW9uICsgXCIoXCIgKyBkcmFnLmRlbHRhICsgXCJweClcIjtcbiAgICAgIHRvYXN0LnN0eWxlLm9wYWNpdHkgPSBcIlwiICsgKDEgLSBNYXRoLmFicyhkcmFnLmRlbHRhIC8gZHJhZy5yZW1vdmFsRGlzdGFuY2UpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdFbmQoKSB7XG4gICAgdmFyIHRvYXN0ID0gdG9hc3RSZWYuY3VycmVudDtcblxuICAgIGlmIChkcmFnLmNhbkRyYWcpIHtcbiAgICAgIGRyYWcuY2FuRHJhZyA9IGZhbHNlO1xuXG4gICAgICBpZiAoTWF0aC5hYnMoZHJhZy5kZWx0YSkgPiBkcmFnLnJlbW92YWxEaXN0YW5jZSkge1xuICAgICAgICBzZXRQcmV2ZW50RXhpdFRyYW5zaXRpb24odHJ1ZSk7XG4gICAgICAgIHByb3BzLmNsb3NlVG9hc3QoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0b2FzdC5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwLjJzLCBvcGFjaXR5IDAuMnMnO1xuICAgICAgdG9hc3Quc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVcIiArIHByb3BzLmRyYWdnYWJsZURpcmVjdGlvbiArIFwiKDApXCI7XG4gICAgICB0b2FzdC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH1cbiAgfVxuXG4gIHZhciBldmVudEhhbmRsZXJzID0ge1xuICAgIG9uTW91c2VEb3duOiBvbkRyYWdTdGFydCxcbiAgICBvblRvdWNoU3RhcnQ6IG9uRHJhZ1N0YXJ0LFxuICAgIG9uTW91c2VVcDogb25EcmFnVHJhbnNpdGlvbkVuZCxcbiAgICBvblRvdWNoRW5kOiBvbkRyYWdUcmFuc2l0aW9uRW5kXG4gIH07XG5cbiAgaWYgKGF1dG9DbG9zZSAmJiBwYXVzZU9uSG92ZXIpIHtcbiAgICBldmVudEhhbmRsZXJzLm9uTW91c2VFbnRlciA9IHBhdXNlVG9hc3Q7XG4gICAgZXZlbnRIYW5kbGVycy5vbk1vdXNlTGVhdmUgPSBwbGF5VG9hc3Q7XG4gIH0gLy8gcHJldmVudCB0b2FzdCBmcm9tIGNsb3Npbmcgd2hlbiB1c2VyIGRyYWdzIHRoZSB0b2FzdFxuXG5cbiAgaWYgKGNsb3NlT25DbGljaykge1xuICAgIGV2ZW50SGFuZGxlcnMub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBvbkNsaWNrICYmIG9uQ2xpY2soZSk7XG4gICAgICBkcmFnLmNhbkNsb3NlT25DbGljayAmJiBjbG9zZVRvYXN0KCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGxheVRvYXN0OiBwbGF5VG9hc3QsXG4gICAgcGF1c2VUb2FzdDogcGF1c2VUb2FzdCxcbiAgICBpc1J1bm5pbmc6IGlzUnVubmluZyxcbiAgICBwcmV2ZW50RXhpdFRyYW5zaXRpb246IHByZXZlbnRFeGl0VHJhbnNpdGlvbixcbiAgICB0b2FzdFJlZjogdG9hc3RSZWYsXG4gICAgZXZlbnRIYW5kbGVyczogZXZlbnRIYW5kbGVyc1xuICB9O1xufVxuXG5mdW5jdGlvbiBDbG9zZUJ1dHRvbihfcmVmKSB7XG4gIHZhciBjbG9zZVRvYXN0ID0gX3JlZi5jbG9zZVRvYXN0LFxuICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIF9yZWYkYXJpYUxhYmVsID0gX3JlZi5hcmlhTGFiZWwsXG4gICAgICBhcmlhTGFiZWwgPSBfcmVmJGFyaWFMYWJlbCA9PT0gdm9pZCAwID8gJ2Nsb3NlJyA6IF9yZWYkYXJpYUxhYmVsO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fY2xvc2UtYnV0dG9uIFwiICsgXCJUb2FzdGlmeVwiXG4gICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICsgXCJfX2Nsb3NlLWJ1dHRvbi0tXCIgKyB0eXBlLFxuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY2xvc2VUb2FzdChlKTtcbiAgICB9LFxuICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWxcbiAgfSwgY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICB2aWV3Qm94OiBcIjAgMCAxNCAxNlwiXG4gIH0sIGNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gICAgZDogXCJNNy43MSA4LjIzbDMuNzUgMy43NS0xLjQ4IDEuNDgtMy43NS0zLjc1LTMuNzUgMy43NUwxIDExLjk4bDMuNzUtMy43NUwxIDQuNDggMi40OCAzbDMuNzUgMy43NUw5Ljk4IDNsMS40OCAxLjQ4LTMuNzUgMy43NXpcIlxuICB9KSkpO1xufVxuXG5mdW5jdGlvbiBQcm9ncmVzc0JhcihfcmVmKSB7XG4gIHZhciBfY3gsIF9hbmltYXRpb25FdmVudDtcblxuICB2YXIgZGVsYXkgPSBfcmVmLmRlbGF5LFxuICAgICAgaXNSdW5uaW5nID0gX3JlZi5pc1J1bm5pbmcsXG4gICAgICBjbG9zZVRvYXN0ID0gX3JlZi5jbG9zZVRvYXN0LFxuICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIGhpZGUgPSBfcmVmLmhpZGUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHVzZXJTdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBjb250cm9sbGVkUHJvZ3Jlc3MgPSBfcmVmLmNvbnRyb2xsZWRQcm9ncmVzcyxcbiAgICAgIHByb2dyZXNzID0gX3JlZi5wcm9ncmVzcyxcbiAgICAgIHJ0bCA9IF9yZWYucnRsLFxuICAgICAgaXNJbiA9IF9yZWYuaXNJbjtcblxuICB2YXIgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgdXNlclN0eWxlLCB7XG4gICAgYW5pbWF0aW9uRHVyYXRpb246IGRlbGF5ICsgXCJtc1wiLFxuICAgIGFuaW1hdGlvblBsYXlTdGF0ZTogaXNSdW5uaW5nID8gJ3J1bm5pbmcnIDogJ3BhdXNlZCcsXG4gICAgb3BhY2l0eTogaGlkZSA/IDAgOiAxXG4gIH0pO1xuXG4gIGlmIChjb250cm9sbGVkUHJvZ3Jlc3MpIHN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGVYKFwiICsgcHJvZ3Jlc3MgKyBcIilcIjtcbiAgdmFyIGRlZmF1bHRDbGFzc05hbWUgPSBjeChcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19wcm9ncmVzcy1iYXJcIiwgY29udHJvbGxlZFByb2dyZXNzID8gXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fcHJvZ3Jlc3MtYmFyLS1jb250cm9sbGVkXCIgOiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19wcm9ncmVzcy1iYXItLWFuaW1hdGVkXCIsIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3Byb2dyZXNzLWJhci0tXCIgKyB0eXBlLCAoX2N4ID0ge30sIF9jeFtcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19wcm9ncmVzcy1iYXItLXJ0bFwiXSA9IHJ0bCwgX2N4KSk7XG4gIHZhciBjbGFzc05hbWVzID0gaXNGbihjbGFzc05hbWUpID8gY2xhc3NOYW1lKHtcbiAgICBydGw6IHJ0bCxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGRlZmF1bHRDbGFzc05hbWU6IGRlZmF1bHRDbGFzc05hbWVcbiAgfSkgOiBjeChkZWZhdWx0Q2xhc3NOYW1lLCBjbGFzc05hbWUpOyAvLyDwn6eQIGNvbnRyb2xsZWRQcm9ncmVzcyBpcyBkZXJpdmVkIGZyb20gcHJvZ3Jlc3NcbiAgLy8gc28gaWYgY29udHJvbGxlZFByb2dyZXNzIGlzIHNldFxuICAvLyBpdCBtZWFucyB0aGF0IHRoaXMgaXMgYWxzbyB0aGUgY2FzZSBmb3IgcHJvZ3Jlc3NcblxuICB2YXIgYW5pbWF0aW9uRXZlbnQgPSAoX2FuaW1hdGlvbkV2ZW50ID0ge30sIF9hbmltYXRpb25FdmVudFtjb250cm9sbGVkUHJvZ3Jlc3MgJiYgcHJvZ3Jlc3MgPj0gMSA/ICdvblRyYW5zaXRpb25FbmQnIDogJ29uQW5pbWF0aW9uRW5kJ10gPSBjb250cm9sbGVkUHJvZ3Jlc3MgJiYgcHJvZ3Jlc3MgPCAxID8gbnVsbCA6IGZ1bmN0aW9uICgpIHtcbiAgICBpc0luICYmIGNsb3NlVG9hc3QoKTtcbiAgfSwgX2FuaW1hdGlvbkV2ZW50KTsgLy8gVE9ETzogYWRkIGFyaWEtdmFsdWVub3csIGFyaWEtdmFsdWVtYXgsIGFyaWEtdmFsdWVtaW5cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICByb2xlOiBcInByb2dyZXNzYmFyXCIsXG4gICAgXCJhcmlhLWhpZGRlblwiOiBoaWRlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICBcImFyaWEtbGFiZWxcIjogXCJub3RpZmljYXRpb24gdGltZXJcIixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGFuaW1hdGlvbkV2ZW50KSk7XG59XG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6IFRZUEUuREVGQVVMVCxcbiAgaGlkZTogZmFsc2Vcbn07XG5cbnZhciBUb2FzdCA9IGZ1bmN0aW9uIFRvYXN0KHByb3BzKSB7XG4gIHZhciBfY3g7XG5cbiAgdmFyIF91c2VUb2FzdCA9IHVzZVRvYXN0KHByb3BzKSxcbiAgICAgIGlzUnVubmluZyA9IF91c2VUb2FzdC5pc1J1bm5pbmcsXG4gICAgICBwcmV2ZW50RXhpdFRyYW5zaXRpb24gPSBfdXNlVG9hc3QucHJldmVudEV4aXRUcmFuc2l0aW9uLFxuICAgICAgdG9hc3RSZWYgPSBfdXNlVG9hc3QudG9hc3RSZWYsXG4gICAgICBldmVudEhhbmRsZXJzID0gX3VzZVRvYXN0LmV2ZW50SGFuZGxlcnM7XG5cbiAgdmFyIGNsb3NlQnV0dG9uID0gcHJvcHMuY2xvc2VCdXR0b24sXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgYXV0b0Nsb3NlID0gcHJvcHMuYXV0b0Nsb3NlLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIGhpZGVQcm9ncmVzc0JhciA9IHByb3BzLmhpZGVQcm9ncmVzc0JhcixcbiAgICAgIGNsb3NlVG9hc3QgPSBwcm9wcy5jbG9zZVRvYXN0LFxuICAgICAgVHJhbnNpdGlvbiA9IHByb3BzLnRyYW5zaXRpb24sXG4gICAgICBwb3NpdGlvbiA9IHByb3BzLnBvc2l0aW9uLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGJvZHlDbGFzc05hbWUgPSBwcm9wcy5ib2R5Q2xhc3NOYW1lLFxuICAgICAgYm9keVN0eWxlID0gcHJvcHMuYm9keVN0eWxlLFxuICAgICAgcHJvZ3Jlc3NDbGFzc05hbWUgPSBwcm9wcy5wcm9ncmVzc0NsYXNzTmFtZSxcbiAgICAgIHByb2dyZXNzU3R5bGUgPSBwcm9wcy5wcm9ncmVzc1N0eWxlLFxuICAgICAgdXBkYXRlSWQgPSBwcm9wcy51cGRhdGVJZCxcbiAgICAgIHJvbGUgPSBwcm9wcy5yb2xlLFxuICAgICAgcHJvZ3Jlc3MgPSBwcm9wcy5wcm9ncmVzcyxcbiAgICAgIHJ0bCA9IHByb3BzLnJ0bCxcbiAgICAgIHRvYXN0SWQgPSBwcm9wcy50b2FzdElkLFxuICAgICAgZGVsZXRlVG9hc3QgPSBwcm9wcy5kZWxldGVUb2FzdCxcbiAgICAgIGlzSW4gPSBwcm9wcy5pc0luO1xuICB2YXIgZGVmYXVsdENsYXNzTmFtZSA9IGN4KFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3RvYXN0XCIsIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3RvYXN0LS1cIiArIHR5cGUsIChfY3ggPSB7fSwgX2N4W1wiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3RvYXN0LS1ydGxcIl0gPSBydGwsIF9jeCkpO1xuICB2YXIgY3NzQ2xhc3NlcyA9IGlzRm4oY2xhc3NOYW1lKSA/IGNsYXNzTmFtZSh7XG4gICAgcnRsOiBydGwsXG4gICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgZGVmYXVsdENsYXNzTmFtZTogZGVmYXVsdENsYXNzTmFtZVxuICB9KSA6IGN4KGRlZmF1bHRDbGFzc05hbWUsIGNsYXNzTmFtZSk7XG4gIHZhciBpc1Byb2dyZXNzQ29udHJvbGxlZCA9ICEhcHJvZ3Jlc3M7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ2xvc2VCdXR0b24oY2xvc2VCdXR0b24pIHtcbiAgICBpZiAoIWNsb3NlQnV0dG9uKSByZXR1cm47XG4gICAgdmFyIHByb3BzID0ge1xuICAgICAgY2xvc2VUb2FzdDogY2xvc2VUb2FzdCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9O1xuICAgIGlmIChpc0ZuKGNsb3NlQnV0dG9uKSkgcmV0dXJuIGNsb3NlQnV0dG9uKHByb3BzKTtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2xvc2VCdXR0b24pKSByZXR1cm4gY2xvbmVFbGVtZW50KGNsb3NlQnV0dG9uLCBwcm9wcyk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uLCB7XG4gICAgaXNJbjogaXNJbixcbiAgICBkb25lOiBkZWxldGVUb2FzdCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgcHJldmVudEV4aXRUcmFuc2l0aW9uOiBwcmV2ZW50RXhpdFRyYW5zaXRpb24sXG4gICAgbm9kZVJlZjogdG9hc3RSZWZcbiAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICBpZDogdG9hc3RJZCxcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIGNsYXNzTmFtZTogY3NzQ2xhc3Nlc1xuICB9LCBldmVudEhhbmRsZXJzLCB7XG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHJlZjogdG9hc3RSZWZcbiAgfSksIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7fSwgaXNJbiAmJiB7XG4gICAgcm9sZTogcm9sZVxuICB9LCB7XG4gICAgY2xhc3NOYW1lOiBpc0ZuKGJvZHlDbGFzc05hbWUpID8gYm9keUNsYXNzTmFtZSh7XG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSkgOiBjeChcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fdG9hc3QtYm9keVwiLCBib2R5Q2xhc3NOYW1lKSxcbiAgICBzdHlsZTogYm9keVN0eWxlXG4gIH0pLCBjaGlsZHJlbiksIHJlbmRlckNsb3NlQnV0dG9uKGNsb3NlQnV0dG9uKSwgKGF1dG9DbG9zZSB8fCBpc1Byb2dyZXNzQ29udHJvbGxlZCkgJiYgY3JlYXRlRWxlbWVudChQcm9ncmVzc0JhciwgT2JqZWN0LmFzc2lnbih7fSwgdXBkYXRlSWQgJiYgIWlzUHJvZ3Jlc3NDb250cm9sbGVkID8ge1xuICAgIGtleTogXCJwYi1cIiArIHVwZGF0ZUlkXG4gIH0gOiB7fSwge1xuICAgIHJ0bDogcnRsLFxuICAgIGRlbGF5OiBhdXRvQ2xvc2UsXG4gICAgaXNSdW5uaW5nOiBpc1J1bm5pbmcsXG4gICAgaXNJbjogaXNJbixcbiAgICBjbG9zZVRvYXN0OiBjbG9zZVRvYXN0LFxuICAgIGhpZGU6IGhpZGVQcm9ncmVzc0JhcixcbiAgICB0eXBlOiB0eXBlLFxuICAgIHN0eWxlOiBwcm9ncmVzc1N0eWxlLFxuICAgIGNsYXNzTmFtZTogcHJvZ3Jlc3NDbGFzc05hbWUsXG4gICAgY29udHJvbGxlZFByb2dyZXNzOiBpc1Byb2dyZXNzQ29udHJvbGxlZCxcbiAgICBwcm9ncmVzczogcHJvZ3Jlc3NcbiAgfSkpKSk7XG59O1xuXG52YXIgQm91bmNlID0gLyojX19QVVJFX18qL2Nzc1RyYW5zaXRpb24oe1xuICBlbnRlcjogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX2JvdW5jZS1lbnRlclwiLFxuICBleGl0OiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fYm91bmNlLWV4aXRcIixcbiAgYXBwZW5kUG9zaXRpb246IHRydWVcbn0pO1xudmFyIFNsaWRlID0gLyojX19QVVJFX18qL2Nzc1RyYW5zaXRpb24oe1xuICBlbnRlcjogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3NsaWRlLWVudGVyXCIsXG4gIGV4aXQ6IFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCItLWFuaW1hdGUgXCIgKyBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19zbGlkZS1leGl0XCIsXG4gIGFwcGVuZFBvc2l0aW9uOiB0cnVlXG59KTtcbnZhciBab29tID0gLyojX19QVVJFX18qL2Nzc1RyYW5zaXRpb24oe1xuICBlbnRlcjogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3pvb20tZW50ZXJcIixcbiAgZXhpdDogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3pvb20tZXhpdFwiXG59KTtcbnZhciBGbGlwID0gLyojX19QVVJFX18qL2Nzc1RyYW5zaXRpb24oe1xuICBlbnRlcjogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX2ZsaXAtZW50ZXJcIixcbiAgZXhpdDogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX2ZsaXAtZXhpdFwiXG59KTtcblxudmFyIFRvYXN0Q29udGFpbmVyID0gZnVuY3Rpb24gVG9hc3RDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIF91c2VUb2FzdENvbnRhaW5lciA9IHVzZVRvYXN0Q29udGFpbmVyKHByb3BzKSxcbiAgICAgIGdldFRvYXN0VG9SZW5kZXIgPSBfdXNlVG9hc3RDb250YWluZXIuZ2V0VG9hc3RUb1JlbmRlcixcbiAgICAgIGNvbnRhaW5lclJlZiA9IF91c2VUb2FzdENvbnRhaW5lci5jb250YWluZXJSZWYsXG4gICAgICBpc1RvYXN0QWN0aXZlID0gX3VzZVRvYXN0Q29udGFpbmVyLmlzVG9hc3RBY3RpdmU7XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBydGwgPSBwcm9wcy5ydGwsXG4gICAgICBjb250YWluZXJJZCA9IHByb3BzLmNvbnRhaW5lcklkO1xuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwb3NpdGlvbikge1xuICAgIHZhciBfY3g7XG5cbiAgICB2YXIgZGVmYXVsdENsYXNzTmFtZSA9IGN4KFwiVG9hc3RpZnlcIlxuICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICArIFwiX190b2FzdC1jb250YWluZXJcIiwgXCJUb2FzdGlmeVwiXG4gICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICsgXCJfX3RvYXN0LWNvbnRhaW5lci0tXCIgKyBwb3NpdGlvbiwgKF9jeCA9IHt9LCBfY3hbXCJUb2FzdGlmeVwiXG4gICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICsgXCJfX3RvYXN0LWNvbnRhaW5lci0tcnRsXCJdID0gcnRsLCBfY3gpKTtcbiAgICByZXR1cm4gaXNGbihjbGFzc05hbWUpID8gY2xhc3NOYW1lKHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIHJ0bDogcnRsLFxuICAgICAgZGVmYXVsdENsYXNzTmFtZTogZGVmYXVsdENsYXNzTmFtZVxuICAgIH0pIDogY3goZGVmYXVsdENsYXNzTmFtZSwgcGFyc2VDbGFzc05hbWUoY2xhc3NOYW1lKSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiBjb250YWluZXJSZWYsXG4gICAgY2xhc3NOYW1lOiBcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgLFxuICAgIGlkOiBjb250YWluZXJJZFxuICB9LCBnZXRUb2FzdFRvUmVuZGVyKGZ1bmN0aW9uIChwb3NpdGlvbiwgdG9hc3RMaXN0KSB7XG4gICAgdmFyIGNvbnRhaW5lclN0eWxlID0gdG9hc3RMaXN0Lmxlbmd0aCA9PT0gMCA/IF9leHRlbmRzKHt9LCBzdHlsZSwge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSkgOiBfZXh0ZW5kcyh7fSwgc3R5bGUpO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHBvc2l0aW9uKSxcbiAgICAgIHN0eWxlOiBjb250YWluZXJTdHlsZSxcbiAgICAgIGtleTogXCJjb250YWluZXItXCIgKyBwb3NpdGlvblxuICAgIH0sIHRvYXN0TGlzdC5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBjb250ZW50ID0gX3JlZi5jb250ZW50LFxuICAgICAgICAgIHRvYXN0UHJvcHMgPSBfcmVmLnByb3BzO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVG9hc3QsIE9iamVjdC5hc3NpZ24oe30sIHRvYXN0UHJvcHMsIHtcbiAgICAgICAgaXNJbjogaXNUb2FzdEFjdGl2ZSh0b2FzdFByb3BzLnRvYXN0SWQpLFxuICAgICAgICBrZXk6IFwidG9hc3QtXCIgKyB0b2FzdFByb3BzLmtleSxcbiAgICAgICAgY2xvc2VCdXR0b246IHRvYXN0UHJvcHMuY2xvc2VCdXR0b24gPT09IHRydWUgPyBDbG9zZUJ1dHRvbiA6IHRvYXN0UHJvcHMuY2xvc2VCdXR0b25cbiAgICAgIH0pLCBjb250ZW50KTtcbiAgICB9KSk7XG4gIH0pKTtcbn07XG5Ub2FzdENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHBvc2l0aW9uOiBQT1NJVElPTi5UT1BfUklHSFQsXG4gIHRyYW5zaXRpb246IEJvdW5jZSxcbiAgcnRsOiBmYWxzZSxcbiAgYXV0b0Nsb3NlOiA1MDAwLFxuICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICBjbG9zZUJ1dHRvbjogQ2xvc2VCdXR0b24sXG4gIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgcGF1c2VPbkZvY3VzTG9zczogdHJ1ZSxcbiAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICBuZXdlc3RPblRvcDogZmFsc2UsXG4gIGRyYWdnYWJsZTogdHJ1ZSxcbiAgZHJhZ2dhYmxlUGVyY2VudDogODBcbiAgLyogRFJBR0dBQkxFX1BFUkNFTlQgKi9cbiAgLFxuICBkcmFnZ2FibGVEaXJlY3Rpb246IFwieFwiXG4gIC8qIFggKi9cbiAgLFxuICByb2xlOiAnYWxlcnQnXG59O1xuXG52YXIgY29udGFpbmVycyA9IC8qI19fUFVSRV9fKi9uZXcgTWFwKCk7XG52YXIgbGF0ZXN0SW5zdGFuY2U7XG52YXIgY29udGFpbmVyRG9tTm9kZTtcbnZhciBjb250YWluZXJDb25maWc7XG52YXIgcXVldWUgPSBbXTtcbnZhciBsYXp5ID0gZmFsc2U7XG4vKipcclxuICogQ2hlY2sgd2hldGhlciBhbnkgY29udGFpbmVyIGlzIGN1cnJlbnRseSBtb3VudGVkIGluIHRoZSBET01cclxuICovXG5cbmZ1bmN0aW9uIGlzQW55Q29udGFpbmVyTW91bnRlZCgpIHtcbiAgcmV0dXJuIGNvbnRhaW5lcnMuc2l6ZSA+IDA7XG59XG4vKipcclxuICogR2V0IHRoZSB0b2FzdCBieSBpZCwgZ2l2ZW4gaXQncyBpbiB0aGUgRE9NLCBvdGhlcndpc2UgcmV0dXJucyBudWxsXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFRvYXN0KHRvYXN0SWQsIF9yZWYpIHtcbiAgdmFyIGNvbnRhaW5lcklkID0gX3JlZi5jb250YWluZXJJZDtcbiAgdmFyIGNvbnRhaW5lciA9IGNvbnRhaW5lcnMuZ2V0KGNvbnRhaW5lcklkIHx8IGxhdGVzdEluc3RhbmNlKTtcbiAgaWYgKCFjb250YWluZXIpIHJldHVybiBudWxsO1xuICByZXR1cm4gY29udGFpbmVyLmdldFRvYXN0KHRvYXN0SWQpO1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIHRvYXN0SWRcclxuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2FzdElkKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgdG9hc3RJZCBvciB1c2UgdGhlIG9uZSBwcm92aWRlZFxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUb2FzdElkKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgJiYgKGlzU3RyKG9wdGlvbnMudG9hc3RJZCkgfHwgaXNOdW0ob3B0aW9ucy50b2FzdElkKSkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy50b2FzdElkO1xuICB9XG5cbiAgcmV0dXJuIGdlbmVyYXRlVG9hc3RJZCgpO1xufVxuLyoqXHJcbiAqIElmIHRoZSBjb250YWluZXIgaXMgbm90IG1vdW50ZWQsIHRoZSB0b2FzdCBpcyBlbnF1ZXVlZCBhbmRcclxuICogdGhlIGNvbnRhaW5lciBsYXp5IG1vdW50ZWRcclxuICovXG5cblxuZnVuY3Rpb24gZGlzcGF0Y2hUb2FzdChjb250ZW50LCBvcHRpb25zKSB7XG4gIGlmIChpc0FueUNvbnRhaW5lck1vdW50ZWQoKSkge1xuICAgIGV2ZW50TWFuYWdlci5lbWl0KDBcbiAgICAvKiBTaG93ICovXG4gICAgLCBjb250ZW50LCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG5cbiAgICBpZiAobGF6eSAmJiBjYW5Vc2VEb20pIHtcbiAgICAgIGxhenkgPSBmYWxzZTtcbiAgICAgIGNvbnRhaW5lckRvbU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyRG9tTm9kZSk7XG4gICAgICByZW5kZXIoY3JlYXRlRWxlbWVudChUb2FzdENvbnRhaW5lciwgT2JqZWN0LmFzc2lnbih7fSwgY29udGFpbmVyQ29uZmlnKSksIGNvbnRhaW5lckRvbU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLnRvYXN0SWQ7XG59XG4vKipcclxuICogTWVyZ2UgcHJvdmlkZWQgb3B0aW9ucyB3aXRoIHRoZSBkZWZhdWx0cyBzZXR0aW5ncyBhbmQgZ2VuZXJhdGUgdGhlIHRvYXN0SWRcclxuICovXG5cblxuZnVuY3Rpb24gbWVyZ2VPcHRpb25zKHR5cGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgdHlwZTogb3B0aW9ucyAmJiBvcHRpb25zLnR5cGUgfHwgdHlwZSxcbiAgICB0b2FzdElkOiBnZXRUb2FzdElkKG9wdGlvbnMpXG4gIH0pO1xufVxuXG52YXIgY3JlYXRlVG9hc3RCeVR5cGUgPSBmdW5jdGlvbiBjcmVhdGVUb2FzdEJ5VHlwZSh0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucykge1xuICAgIHJldHVybiBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG1lcmdlT3B0aW9ucyh0eXBlLCBvcHRpb25zKSk7XG4gIH07XG59O1xuXG52YXIgdG9hc3QgPSBmdW5jdGlvbiB0b2FzdChjb250ZW50LCBvcHRpb25zKSB7XG4gIHJldHVybiBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG1lcmdlT3B0aW9ucyhUWVBFLkRFRkFVTFQsIG9wdGlvbnMpKTtcbn07XG5cbnRvYXN0LnN1Y2Nlc3MgPSAvKiNfX1BVUkVfXyovY3JlYXRlVG9hc3RCeVR5cGUoVFlQRS5TVUNDRVNTKTtcbnRvYXN0LmluZm8gPSAvKiNfX1BVUkVfXyovY3JlYXRlVG9hc3RCeVR5cGUoVFlQRS5JTkZPKTtcbnRvYXN0LmVycm9yID0gLyojX19QVVJFX18qL2NyZWF0ZVRvYXN0QnlUeXBlKFRZUEUuRVJST1IpO1xudG9hc3Qud2FybmluZyA9IC8qI19fUFVSRV9fKi9jcmVhdGVUb2FzdEJ5VHlwZShUWVBFLldBUk5JTkcpO1xudG9hc3QuZGFyayA9IC8qI19fUFVSRV9fKi9jcmVhdGVUb2FzdEJ5VHlwZShUWVBFLkRBUkspO1xudG9hc3Qud2FybiA9IHRvYXN0Lndhcm5pbmc7XG4vKipcclxuICogUmVtb3ZlIHRvYXN0IHByb2dyYW1tYXRpY2FseVxyXG4gKi9cblxudG9hc3QuZGlzbWlzcyA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gZXZlbnRNYW5hZ2VyLmVtaXQoMVxuICAvKiBDbGVhciAqL1xuICAsIGlkKTtcbn07XG4vKipcclxuICogQ2xlYXIgd2FpdGluZyBxdWV1ZSB3aGVuIGxpbWl0IGlzIHVzZWRcclxuICovXG5cblxudG9hc3QuY2xlYXJXYWl0aW5nUXVldWUgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIGlmIChwYXJhbXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmFtcyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TWFuYWdlci5lbWl0KDVcbiAgLyogQ2xlYXJXYWl0aW5nUXVldWUgKi9cbiAgLCBwYXJhbXMpO1xufTtcbi8qKlxyXG4gKiByZXR1cm4gdHJ1ZSBpZiBvbmUgY29udGFpbmVyIGlzIGRpc3BsYXlpbmcgdGhlIHRvYXN0XHJcbiAqL1xuXG5cbnRvYXN0LmlzQWN0aXZlID0gZnVuY3Rpb24gKGlkKSB7XG4gIHZhciBpc1RvYXN0QWN0aXZlID0gZmFsc2U7XG4gIGNvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgaWYgKGNvbnRhaW5lci5pc1RvYXN0QWN0aXZlICYmIGNvbnRhaW5lci5pc1RvYXN0QWN0aXZlKGlkKSkge1xuICAgICAgaXNUb2FzdEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGlzVG9hc3RBY3RpdmU7XG59O1xuXG50b2FzdC51cGRhdGUgPSBmdW5jdGlvbiAodG9hc3RJZCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgLy8gaWYgeW91IGNhbGwgdG9hc3QgYW5kIHRvYXN0LnVwZGF0ZSBkaXJlY3RseSBub3RoaW5nIHdpbGwgYmUgZGlzcGxheWVkXG4gIC8vIHRoaXMgaXMgd2h5IEkgZGVmZXJlZCB0aGUgdXBkYXRlXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2FzdCA9IGdldFRvYXN0KHRvYXN0SWQsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRvYXN0KSB7XG4gICAgICB2YXIgb2xkT3B0aW9ucyA9IHRvYXN0LnByb3BzLFxuICAgICAgICAgIG9sZENvbnRlbnQgPSB0b2FzdC5jb250ZW50O1xuXG4gICAgICB2YXIgbmV4dE9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb2xkT3B0aW9ucywgb3B0aW9ucywge1xuICAgICAgICB0b2FzdElkOiBvcHRpb25zLnRvYXN0SWQgfHwgdG9hc3RJZCxcbiAgICAgICAgdXBkYXRlSWQ6IGdlbmVyYXRlVG9hc3RJZCgpXG4gICAgICB9KTtcblxuICAgICAgaWYgKG5leHRPcHRpb25zLnRvYXN0SWQgIT09IHRvYXN0SWQpIG5leHRPcHRpb25zLnN0YWxlSWQgPSB0b2FzdElkO1xuICAgICAgdmFyIGNvbnRlbnQgPSBuZXh0T3B0aW9ucy5yZW5kZXIgfHwgb2xkQ29udGVudDtcbiAgICAgIGRlbGV0ZSBuZXh0T3B0aW9ucy5yZW5kZXI7XG4gICAgICBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG5leHRPcHRpb25zKTtcbiAgICB9XG4gIH0sIDApO1xufTtcbi8qKlxyXG4gKiBVc2VkIGZvciBjb250cm9sbGVkIHByb2dyZXNzIGJhci5cclxuICovXG5cblxudG9hc3QuZG9uZSA9IGZ1bmN0aW9uIChpZCkge1xuICB0b2FzdC51cGRhdGUoaWQsIHtcbiAgICBwcm9ncmVzczogMVxuICB9KTtcbn07XG4vKipcclxuICogVHJhY2sgY2hhbmdlcy4gVGhlIGNhbGxiYWNrIGdldCB0aGUgbnVtYmVyIG9mIHRvYXN0IGRpc3BsYXllZFxyXG4gKlxyXG4gKi9cblxuXG50b2FzdC5vbkNoYW5nZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBpZiAoaXNGbihjYWxsYmFjaykpIHtcbiAgICBldmVudE1hbmFnZXIub24oNFxuICAgIC8qIENoYW5nZSAqL1xuICAgICwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpc0ZuKGNhbGxiYWNrKSAmJiBldmVudE1hbmFnZXIub2ZmKDRcbiAgICAvKiBDaGFuZ2UgKi9cbiAgICAsIGNhbGxiYWNrKTtcbiAgfTtcbn07XG4vKipcclxuICogQ29uZmlndXJlIHRoZSBUb2FzdENvbnRhaW5lciB3aGVuIGxhenkgbW91bnRlZFxyXG4gKi9cblxuXG50b2FzdC5jb25maWd1cmUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgIGNvbmZpZyA9IHt9O1xuICB9XG5cbiAgbGF6eSA9IHRydWU7XG4gIGNvbnRhaW5lckNvbmZpZyA9IGNvbmZpZztcbn07XG5cbnRvYXN0LlBPU0lUSU9OID0gUE9TSVRJT047XG50b2FzdC5UWVBFID0gVFlQRTtcbi8qKlxyXG4gKiBXYWl0IHVudGlsIHRoZSBUb2FzdENvbnRhaW5lciBpcyBtb3VudGVkIHRvIGRpc3BhdGNoIHRoZSB0b2FzdFxyXG4gKiBhbmQgYXR0YWNoIGlzQWN0aXZlIG1ldGhvZFxyXG4gKi9cblxuZXZlbnRNYW5hZ2VyLm9uKDJcbi8qIERpZE1vdW50ICovXG4sIGZ1bmN0aW9uIChjb250YWluZXJJbnN0YW5jZSkge1xuICBsYXRlc3RJbnN0YW5jZSA9IGNvbnRhaW5lckluc3RhbmNlLmNvbnRhaW5lcklkIHx8IGNvbnRhaW5lckluc3RhbmNlO1xuICBjb250YWluZXJzLnNldChsYXRlc3RJbnN0YW5jZSwgY29udGFpbmVySW5zdGFuY2UpO1xuICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgZXZlbnRNYW5hZ2VyLmVtaXQoMFxuICAgIC8qIFNob3cgKi9cbiAgICAsIGl0ZW0uY29udGVudCwgaXRlbS5vcHRpb25zKTtcbiAgfSk7XG4gIHF1ZXVlID0gW107XG59KS5vbigzXG4vKiBXaWxsVW5tb3VudCAqL1xuLCBmdW5jdGlvbiAoY29udGFpbmVySW5zdGFuY2UpIHtcbiAgY29udGFpbmVyc1tcImRlbGV0ZVwiXShjb250YWluZXJJbnN0YW5jZS5jb250YWluZXJJZCB8fCBjb250YWluZXJJbnN0YW5jZSk7XG5cbiAgaWYgKGNvbnRhaW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgIGV2ZW50TWFuYWdlci5vZmYoMFxuICAgIC8qIFNob3cgKi9cbiAgICApLm9mZigxXG4gICAgLyogQ2xlYXIgKi9cbiAgICApLm9mZig1XG4gICAgLyogQ2xlYXJXYWl0aW5nUXVldWUgKi9cbiAgICApO1xuICB9XG5cbiAgaWYgKGNhblVzZURvbSAmJiBjb250YWluZXJEb21Ob2RlKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250YWluZXJEb21Ob2RlKTtcbiAgfVxufSk7XG5cbmV4cG9ydCB7IEJvdW5jZSwgRmxpcCwgU2xpZGUsIFRvYXN0Q29udGFpbmVyLCBab29tLCBjb2xsYXBzZVRvYXN0LCBjc3NUcmFuc2l0aW9uLCB0b2FzdCwgdXNlVG9hc3QsIHVzZVRvYXN0Q29udGFpbmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC10b2FzdGlmeS5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9