(function() {
var exports = {};
exports.id = 3446;
exports.ids = [3446];
exports.modules = {

/***/ 46:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ testimonials; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(1900);
// EXTERNAL MODULE: external "next-translate/loadNamespaces"
var loadNamespaces_ = __webpack_require__(8404);
var loadNamespaces_default = /*#__PURE__*/__webpack_require__.n(loadNamespaces_);
// EXTERNAL MODULE: ./components/Pages/common/Testimonials/Testimonials.jsx + 12 modules
var Testimonials = __webpack_require__(7674);
;// CONCATENATED MODULE: ./components/Pages/FeedBacks/FeedBacks.jsx



function FeedBacks() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Testimonials/* Testimonials */.H, {
      page: 'testimonials',
      textPathName: 'title'
    })
  });
}
;// CONCATENATED MODULE: ./pages/testimonials.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const TestimonialsPage = () => /*#__PURE__*/jsx_runtime_.jsx(FeedBacks, {});

TestimonialsPage.layout = "withoutPhoto";
/* harmony default export */ var testimonials = (TestimonialsPage);
async function getStaticProps(ctx) {
  return {
    props: _objectSpread({}, await loadNamespaces_default()(_objectSpread(_objectSpread(_objectSpread({}, ctx), {}, {
      pathname: '/testimonials',
      loaderName: 'getStaticProps'
    }, i18n), {}, {
      loadLocaleFrom: (l, n) => __webpack_require__(7655)(`./${l}/${n}`).then(m => m.default)
    })))
  };
}

/***/ }),

/***/ 2166:
/***/ (function(module) {

"use strict";
module.exports = require("@hookform/resolvers/yup");;

/***/ }),

/***/ 6139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8404:
/***/ (function(module) {

"use strict";
module.exports = require("next-translate/loadNamespaces");;

/***/ }),

/***/ 8841:
/***/ (function(module) {

"use strict";
module.exports = require("next-translate/useTranslation");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 3983:
/***/ (function(module) {

"use strict";
module.exports = require("react-elastic-carousel");;

/***/ }),

/***/ 2662:
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9440:
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1276,123,9452,7061,8552,7674], function() { return __webpack_exec__(46); });
module.exports = __webpack_exports__;

})();