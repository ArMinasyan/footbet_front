(function() {
var exports = {};
exports.id = 5907;
exports.ids = [5907];
exports.modules = {

/***/ 727:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ registration; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(1900);
// EXTERNAL MODULE: external "next-translate/loadNamespaces"
var loadNamespaces_ = __webpack_require__(8404);
var loadNamespaces_default = /*#__PURE__*/__webpack_require__.n(loadNamespaces_);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(8841);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2166);
// EXTERNAL MODULE: ./components/common/auth/InputContainer/InputContainer.jsx
var InputContainer = __webpack_require__(7152);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/Registration/Form/FileInput/FileInput.module.scss
var FileInput_module = __webpack_require__(8543);
var FileInput_module_default = /*#__PURE__*/__webpack_require__.n(FileInput_module);
;// CONCATENATED MODULE: ./public/images/register/plus.svg
/* harmony default export */ var plus = ({"src":"/_next/static/image/public/images/register/plus.8ac9397ebd63d0e0257990f9621fbad9.svg","height":56,"width":54});
;// CONCATENATED MODULE: ./components/Registration/Form/FileInput/FileInput.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks
 // styles

 // icons 


function FileInput({
  id,
  type,
  other
}) {
  const // for img input
  {
    0: imgInput,
    1: setImgInput
  } = (0,external_react_.useState)('');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (FileInput_module_default()).uploadImageConteiner,
    children: /*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: id,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (FileInput_module_default()).uploadImageContent,
        children: [imgInput ? /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: imgInput.name
        }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: plus.src
        }), /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
          type: type,
          id: id,
          style: {
            display: 'none'
          },
          onChange: e => setImgInput(e.target.files[0])
        }, other))]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/Registration/Form/Button/Button.module.scss
var Button_module = __webpack_require__(510);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./components/Registration/Form/Button/Button.jsx


function Button({
  content,
  type = null,
  onClick = null
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Button_module_default()).conteiner,
    children: /*#__PURE__*/jsx_runtime_.jsx("button", {
      type: type,
      onClick: onClick,
      children: content
    })
  });
}
// EXTERNAL MODULE: ./components/Registration/Form/Form.module.scss
var Form_module = __webpack_require__(4218);
var Form_module_default = /*#__PURE__*/__webpack_require__.n(Form_module);
;// CONCATENATED MODULE: ./public/images/register/user-input.svg
/* harmony default export */ var user_input = ({"src":"/_next/static/image/public/images/register/user-input.78cd19986bdf768c5e6b2a72a25861d4.svg","height":21,"width":21});
;// CONCATENATED MODULE: ./public/images/register/calendar.svg
/* harmony default export */ var calendar = ({"src":"/_next/static/image/public/images/register/calendar.76d310249474f3f1532a00dee4810e89.svg","height":21,"width":21});
;// CONCATENATED MODULE: ./public/images/register/mail.svg
/* harmony default export */ var mail = ({"src":"/_next/static/image/public/images/register/mail.95674d359da6f55de23aa98bb5034693.svg","height":21,"width":21});
;// CONCATENATED MODULE: ./public/images/register/phone.svg
/* harmony default export */ var phone = ({"src":"/_next/static/image/public/images/register/phone.21e8ac669fcc3f0aa6b9729926cd7795.svg","height":21,"width":21});
;// CONCATENATED MODULE: ./public/images/register/key.svg
/* harmony default export */ var key = ({"src":"/_next/static/image/public/images/register/key.d04e7cec61dc5a55afd8b940b2b6a8c0.svg","height":21,"width":21});
// EXTERNAL MODULE: ./lib/er.lib.js
var er_lib = __webpack_require__(955);
// EXTERNAL MODULE: ./lib/request-destinations.js + 1 modules
var request_destinations = __webpack_require__(9541);
// EXTERNAL MODULE: ./components/common/auth/BallRightCorner/Ball.module.scss
var Ball_module = __webpack_require__(3887);
var Ball_module_default = /*#__PURE__*/__webpack_require__.n(Ball_module);
;// CONCATENATED MODULE: ./public/images/footer/ball.png
/* harmony default export */ var ball = ({"src":"/_next/static/image/public/images/footer/ball.a66c304ca74089ab0e5ee9d5783878a8.png","height":452,"width":643,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAfUlEQVR42mPABl6/eCpy+OB+herqKjkMyfNnT0r+/PpJ8/+/32q/f/9WR5fn3r9np+b///9U//35rfrt6xdVFNn4mGixm1cvarx99Vy1r6dLLT0lAVXBquWLxe7cuKJx//YNkAQMI0BtVQXftk3rNG5du6y6YN4c1dqaGlUAsu85qa2EjbsAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/common/auth/BallRightCorner/Ball.jsx



function Ball() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Ball_module_default()).container,
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: ball.src,
      alt: ""
    })
  });
}
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(8294);
;// CONCATENATED MODULE: ./components/Registration/Form/Form.jsx




function Form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Form_ownKeys(Object(source), true).forEach(function (key) { Form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks and helpers



 // components



 // styles

 // icons 












function Form({
  title
}) {
  const formRef = (0,external_react_.useRef)();
  const router = (0,client_router.useRouter)();

  const // translation consfigs
  {
    t
  } = useTranslation_default()('common'),
        translationPath = 'registration.inputPlaceHolders.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
  schema = external_yup_.object().shape({
    username: external_yup_.string().required().matches(/(^[A-Za-z]{1,8})([ ]{0,1})([A-Za-z]{1,10})/mg),
    dateOfBirth: external_yup_.string().required(),
    email: external_yup_.string().required().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    mobile: external_yup_.string().required().matches(/^[+]{1}[0-9]+$/mg),
    password: external_yup_.string().required().min(6)
  }),
        // form configs
  {
    register,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    mode: 'onChange',
    resolver: (0,yup_.yupResolver)(schema)
  }),
        submit = async e => {
    e.preventDefault();
    const registerFormData = new FormData(formRef.current);
    const dateOfBirth = registerFormData.get(`dateOfBirth`) || "";
    const [year, month, date] = dateOfBirth.split(`-`);

    if (year && month && date) {
      registerFormData.delete(`dateOfBirth`);
      registerFormData.append(`dateOfBirth`, [month, date, year].join(`.`));
    }

    try {
      await (0,er_lib/* request */.WY)(request_destinations/* REGISTER */.Nz, registerFormData);
      (0,external_react_toastify_.toast)(`Successfully registered`);
      router.push(`/`);
    } catch (error) {
      var _error$response$data;

      (0,external_react_toastify_.toast)(((_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || `unknown error`, {
        type: `error`
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Form_module_default()).container,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Form_module_default()).title_container,
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: title
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        ref: formRef,
        children: [/*#__PURE__*/jsx_runtime_.jsx(FileInput, {
          id: "upload_file_input",
          type: "file",
          other: register('profile_img')
        }), /*#__PURE__*/jsx_runtime_.jsx(InputContainer/* InputContainer */.f, {
          label: user_input,
          id: "name",
          type: "text",
          placeholder: translate('fullName'),
          errors: !!errors.username,
          other: register('username')
        }), /*#__PURE__*/jsx_runtime_.jsx(InputContainer/* InputContainer */.f, {
          label: calendar,
          id: "birth_date",
          type: "text",
          placeholder: translate('birthDate'),
          errors: !!errors.dateOfBirth,
          other: Form_objectSpread(Form_objectSpread({}, register('dateOfBirth')), {}, {
            onFocus: e => e.target.type = 'date',
            onBlur: e => e.target.type = 'text'
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(InputContainer/* InputContainer */.f, {
          label: mail,
          id: "email",
          type: "text",
          placeholder: translate('email'),
          errors: !!errors.email,
          other: register('email')
        }), /*#__PURE__*/jsx_runtime_.jsx(InputContainer/* InputContainer */.f, {
          label: phone,
          id: "phone_number",
          type: "text",
          placeholder: translate('phone'),
          errors: !!errors.mobile,
          other: register('mobile')
        }), /*#__PURE__*/jsx_runtime_.jsx(InputContainer/* InputContainer */.f, {
          label: key,
          id: "password",
          type: "password",
          placeholder: translate('password'),
          errors: !!errors.password,
          other: register('password')
        }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
          content: translate('buttonTitle'),
          onClick: submit
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Form_module_default()).ball,
      children: /*#__PURE__*/jsx_runtime_.jsx(Ball, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {})]
  });
}
;// CONCATENATED MODULE: ./components/Registration/Index.jsx


// hooks and helpers
 // components


function Index() {
  // translation consfigs
  const {
    t
  } = useTranslation_default()('common'),
        translationPath = 'registration.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Form, {
      title: translate('title')
    })
  });
}
;// CONCATENATED MODULE: ./pages/registration.js


function registration_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function registration_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { registration_ownKeys(Object(source), true).forEach(function (key) { registration_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { registration_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function registration_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const RegistrationPage = () => /*#__PURE__*/jsx_runtime_.jsx(Index, {});

RegistrationPage.layout = "register";
/* harmony default export */ var registration = (RegistrationPage);
async function getStaticProps(ctx) {
  return {
    props: registration_objectSpread({}, await loadNamespaces_default()(registration_objectSpread(registration_objectSpread(registration_objectSpread({}, ctx), {}, {
      pathname: '/registration',
      loaderName: 'getStaticProps'
    }, i18n), {}, {
      loadLocaleFrom: (l, n) => __webpack_require__(7655)(`./${l}/${n}`).then(m => m.default)
    })))
  };
}

/***/ }),

/***/ 510:
/***/ (function(module) {

// Exports
module.exports = {
	"conteiner": "Button_conteiner__1nIg_"
};


/***/ }),

/***/ 8543:
/***/ (function(module) {

// Exports
module.exports = {
	"uploadImageConteiner": "FileInput_uploadImageConteiner__1X6TP",
	"uploadImageContent": "FileInput_uploadImageContent__zvpZ6"
};


/***/ }),

/***/ 4218:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Form_container__2_Pdo",
	"transition": "Form_transition__2TQvk",
	"title_container": "Form_title_container__2EMjk",
	"ball": "Form_ball__28TOF"
};


/***/ }),

/***/ 3887:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Ball_container__1TBDm"
};


/***/ }),

/***/ 2166:
/***/ (function(module) {

"use strict";
module.exports = require("@hookform/resolvers/yup");;

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

/***/ 2662:
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1276,4751,5196], function() { return __webpack_exec__(727); });
module.exports = __webpack_exports__;

})();