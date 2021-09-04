(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 9853:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(1900);
;// CONCATENATED MODULE: external "next-translate/appWithI18n"
var appWithI18n_namespaceObject = require("next-translate/appWithI18n");;
var appWithI18n_default = /*#__PURE__*/__webpack_require__.n(appWithI18n_namespaceObject);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(8294);
;// CONCATENATED MODULE: ./public/images/footer/leftBall.png
/* harmony default export */ var leftBall = ({"src":"/_next/static/image/public/images/footer/leftBall.9d913458e610693dcce7d9b191755ef2.png","height":358,"width":452,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAY0lEQVR42mMgCNavW6f64f1HKZwKvnz5Ev/////4+/ceuAO57BgKfv38GQ5UEPby5avElNQ0OwwFgX5eEWtWr474+/df5OXL10N9w7MwTIloaW6KePf2fdSp0xeC6lomoSgAAAh6Lj9+IpgnAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./components/Footer/Ball/Ball.module.scss
var Ball_module = __webpack_require__(9194);
var Ball_module_default = /*#__PURE__*/__webpack_require__.n(Ball_module);
;// CONCATENATED MODULE: ./components/Footer/Ball/Ball.jsx




function Ball() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Ball_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: leftBall.src,
      className: (Ball_module_default()).ball,
      alt: "ball-png"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Ball_module_default()).text_with_ball,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (Ball_module_default()).top,
        children: "FOOT"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (Ball_module_default()).bottom,
        children: "BET"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(8578);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(8841);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(123);
// EXTERNAL MODULE: ./components/Footer/Navigation/List/List.module.scss
var List_module = __webpack_require__(3872);
var List_module_default = /*#__PURE__*/__webpack_require__.n(List_module);
;// CONCATENATED MODULE: ./components/Footer/Navigation/List/List.jsx




function List({
  list_items = [],
  bordersActive
}) {
  const {
    t
  } = useTranslation_default()("common"),
        translationPath = "footer.navigation.",
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${(List_module_default()).container} ${bordersActive && (List_module_default()).borders}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: list_items.map(el => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: el.link,
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: translate(el.name)
        })
      }, Math.random()))
    })
  });
}
// EXTERNAL MODULE: ./components/Footer/Navigation/Navigation.module.scss
var Navigation_module = __webpack_require__(8953);
var Navigation_module_default = /*#__PURE__*/__webpack_require__.n(Navigation_module);
;// CONCATENATED MODULE: ./components/Footer/Navigation/nav_data.js
const nav_data = [[{
  link: '/prediction',
  name: 'prediction'
}, {
  link: '/games',
  name: 'games'
}, {
  link: '/',
  name: 'news'
}], [{
  link: '/aboutUs',
  name: 'aboutUs'
}, {
  link: '/prediction',
  name: 'payment'
}, {
  link: '/statistics',
  name: 'matchStatistics'
}], [{
  link: '/registration',
  name: 'register'
}, {
  link: '/testimonials',
  name: 'feedbacks'
}, {
  link: '/terms-of-use',
  name: 'terms-of-use'
}, {
  link: '/privacy-policy',
  name: 'privacy-policy'
}]];
;// CONCATENATED MODULE: ./components/Footer/Navigation/Navigation.jsx

// styles

 // datas


function Navigation() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Navigation_module_default()).container,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Navigation_module_default()).content,
      children: nav_data.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(List, {
        list_items: el,
        bordersActive: i === 1 ? true : false
      }, Math.random()))
    })
  });
}
// EXTERNAL MODULE: ./components/Footer/SocialMedia/SMIcons/SM.module.scss
var SM_module = __webpack_require__(2051);
var SM_module_default = /*#__PURE__*/__webpack_require__.n(SM_module);
;// CONCATENATED MODULE: ./public/images/header/SocialMedia/phone.svg
/* harmony default export */ var phone = ({"src":"/_next/static/image/public/images/header/SocialMedia/phone.55ee8819e254093aa33fdb4782b35cd4.svg","height":25,"width":24});
;// CONCATENATED MODULE: ./public/images/header/SocialMedia/facebook.svg
/* harmony default export */ var facebook = ({"src":"/_next/static/image/public/images/header/SocialMedia/facebook.85f524e32ad377e7424a5d8712a6664a.svg","height":34,"width":28});
;// CONCATENATED MODULE: ./public/images/header/SocialMedia/telegram.svg
/* harmony default export */ var telegram = ({"src":"/_next/static/image/public/images/header/SocialMedia/telegram.aff9e3d95d74ff6112927acf1640e6a3.svg","height":37,"width":29});
;// CONCATENATED MODULE: ./public/images/header/SocialMedia/watsup.svg
/* harmony default export */ var watsup = ({"src":"/_next/static/image/public/images/header/SocialMedia/watsup.e5c1d0468ecb4c80731a67e461e19253.svg","height":37,"width":29});
;// CONCATENATED MODULE: ./public/images/header/SocialMedia/instagram.svg
/* harmony default export */ var instagram = ({"src":"/_next/static/image/public/images/header/SocialMedia/instagram.f5ffd20055aeb8be2e2a6a66e757274e.svg","height":30,"width":31});
;// CONCATENATED MODULE: ./public/images/header/SocialMedia/viber.svg
/* harmony default export */ var viber = ({"src":"/_next/static/image/public/images/header/SocialMedia/viber.92d118c26760f796dc3278147251dffe.svg","height":39,"width":30});
// EXTERNAL MODULE: ./components/Footer/SocialMedia/common/Icon/Icon.module.scss
var Icon_module = __webpack_require__(3471);
var Icon_module_default = /*#__PURE__*/__webpack_require__.n(Icon_module);
;// CONCATENATED MODULE: ./components/Footer/SocialMedia/common/Icon/Icon.jsx



function Icon({
  src,
  click = null,
  lastElement = false,
  elements,
  otherStyles = null,
  classes,
  url = ""
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: elements ? {
      width: `${100 / elements}%`
    } : {
      padding: '0 15px'
    },
    className: `${(Icon_module_default()).container} ${lastElement ? (Icon_module_default()).last_element : ""} ${classes}`,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: url,
      target: "_blank",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: src,
          alt: `icons-${src}`,
          onClick: click,
          style: otherStyles
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Footer/SocialMedia/SMIcons/SM.jsx


// styles
 // icons






 // components


function SM() {
  const // config
  icons = [{
    key: Math.random(),
    src: phone.src,
    url: "tel:+34672314808"
  }, {
    key: Math.random(),
    src: facebook.src,
    url: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/"
  }, {
    key: Math.random(),
    src: watsup.src,
    url: "https://api.whatsapp.com/send?phone=+34672314808"
  }, {
    key: Math.random(),
    src: instagram.src,
    url: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link"
  }, {
    key: Math.random(),
    src: viber.src,
    url: "viber://chat?number=+34672314808"
  }, {
    key: Math.random(),
    src: telegram.src,
    url: "https://telegram.me/footbet24com",
    lastElement: true
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (SM_module_default()).container,
      children: icons.map(el => /*#__PURE__*/jsx_runtime_.jsx(Icon, {
        src: el.src,
        url: el.url,
        elements: icons.length,
        lastElement: el.lastElement && el.lastElement
      }, el.key))
    })
  });
}
// EXTERNAL MODULE: ./components/Footer/SocialMedia/PSIcons/PS.module.scss
var PS_module = __webpack_require__(1493);
var PS_module_default = /*#__PURE__*/__webpack_require__.n(PS_module);
;// CONCATENATED MODULE: ./public/images/footer/visa.png
/* harmony default export */ var visa = ({"src":"/_next/static/image/public/images/footer/visa.56e9f851457af83605186a394484e11d.png","height":31,"width":104,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR4nGM82J0d/uCTiH38RdW/Mly/fz35xyDOwMCwH4jVgFiVkYHhCRtD6J69Ysz/V7z6xyjCwPD/L1BCH4j/ADEPADD6FU4jYQWmAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/footer/masterCard.png
/* harmony default export */ var masterCard = ({"src":"/_next/static/image/public/images/footer/masterCard.29493d522d0e854efc9f102ad8f0a87f.png","height":42,"width":69,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoElEQVR4nBWOPQrCQBgF50uMqKRRjCKYwlrsxJ9GuyAeQOy9mI2BeACPIIhgEdQT6AFMICAbdl2L96aYZkTDEEigZ1meiAtw1RqCB+q9FT1bpGT5iGeqWbUcoiYMfC3fm2O88V10nBiCjiL/VKi7CnKkrzzT6JaSvTzRy+hMvTanWoO29ZMMQh/RLsYU139DaBv2wNTuyMG+w8aKiynY/QDkXDVqE0ykJwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/Footer/SocialMedia/PSIcons/PS.jsx


// styles
 // icons


 // components


function PS() {
  const // config
  icons = [{
    key: Math.random(),
    src: visa.src
  }, {
    key: Math.random(),
    src: masterCard.src,
    lastElement: true
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (PS_module_default()).container,
      children: icons.map(el => /*#__PURE__*/jsx_runtime_.jsx(Icon, {
        src: el.src,
        classes: (PS_module_default()).icons,
        lastElement: el.lastElement && el.lastElement
      }, el.key))
    })
  });
}
// EXTERNAL MODULE: ./components/Footer/SocialMedia/SocialMedia.module.scss
var SocialMedia_module = __webpack_require__(3020);
var SocialMedia_module_default = /*#__PURE__*/__webpack_require__.n(SocialMedia_module);
;// CONCATENATED MODULE: ./components/Footer/SocialMedia/SocialMedia.jsx


// components

 // styles

 // translation 


function SocialMedia() {
  const // translation
  {
    t
  } = useTranslation_default()('common'),
        translationPath = 'footer.social_media_paymants',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (SocialMedia_module_default()).container,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (SocialMedia_module_default()).content,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (SocialMedia_module_default()).controler,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (SocialMedia_module_default()).social_medias,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: translate('.SM.title')
          }), /*#__PURE__*/jsx_runtime_.jsx(SM, {})]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (SocialMedia_module_default()).payment_systems,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: translate('.PS.title')
          }), /*#__PURE__*/jsx_runtime_.jsx(PS, {})]
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./public/images/personal/ball.png
/* harmony default export */ var ball = ({"src":"/_next/static/image/public/images/personal/ball.7a4217860e3b0be644a2c0534df6e64d.png","height":882,"width":950,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAkElEQVR42mPABlavWMYEpFiSEpOYMSTfvX7K9vnzJ66bN29yPX/+ggtFsjg3j/XD68fc////54RhFAWzZ0zl+PT2JdfxY4c4U1OTuBYsmI+q4OC+XRwvnj7kWr1yOUiCq7ysFFXB5In9LFs3reM6e+o4597duzjPnz3Hhe5GxgB/P/aJ/b1ca1ev5Fy2dBknAFcnP3eusvtcAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/Footer/Footer.jsx


//

 // styles



 // icon

 // TODO click events on icons

function Footer() {
  const router = (0,client_router.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Footer_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Ball, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Navigation, {}), /*#__PURE__*/jsx_runtime_.jsx(SocialMedia, {})]
    }), router.pathname === '/personal' && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Footer_module_default()).ball,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: ball.src,
        alt: "ball-icon"
      })
    })]
  });
}
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__(4884);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/Header/Bar/Bar.module.scss
var Bar_module = __webpack_require__(3489);
var Bar_module_default = /*#__PURE__*/__webpack_require__.n(Bar_module);
// EXTERNAL MODULE: ./components/common/auth/Modal/Modal.jsx
var Modal = __webpack_require__(9452);
;// CONCATENATED MODULE: ./public/images/header/login/facebook.svg
/* harmony default export */ var login_facebook = ({"src":"/_next/static/image/public/images/header/login/facebook.50193220c705167c0e8524982908a4ee.svg","height":76,"width":76});
;// CONCATENATED MODULE: ./public/images/header/login/gmail.svg
/* harmony default export */ var gmail = ({"src":"/_next/static/image/public/images/header/login/gmail.b78b335d7b71ec5b3b9033065412a0f8.svg","height":76,"width":76});
;// CONCATENATED MODULE: ./public/images/header/login/vk.svg
/* harmony default export */ var vk = ({"src":"/_next/static/image/public/images/header/login/vk.f9a321d3db5de3a706483d7309582330.svg","height":76,"width":76});
;// CONCATENATED MODULE: ./public/images/header/login/twitter.svg
/* harmony default export */ var twitter = ({"src":"/_next/static/image/public/images/header/login/twitter.372f6f68ac46a0b5a2cbf106f608e4c2.svg","height":76,"width":76});
// EXTERNAL MODULE: ./components/Header/Bar/Login/SocialMediaIcons/SocialMediaIcons.module.scss
var SocialMediaIcons_module = __webpack_require__(9263);
var SocialMediaIcons_module_default = /*#__PURE__*/__webpack_require__.n(SocialMediaIcons_module);
;// CONCATENATED MODULE: external "react-facebook-login"
var external_react_facebook_login_namespaceObject = require("react-facebook-login");;
var external_react_facebook_login_default = /*#__PURE__*/__webpack_require__.n(external_react_facebook_login_namespaceObject);
;// CONCATENATED MODULE: external "react-google-login"
var external_react_google_login_namespaceObject = require("react-google-login");;
var external_react_google_login_default = /*#__PURE__*/__webpack_require__.n(external_react_google_login_namespaceObject);
;// CONCATENATED MODULE: external "react-twitter-login"
var external_react_twitter_login_namespaceObject = require("react-twitter-login");;
var external_react_twitter_login_default = /*#__PURE__*/__webpack_require__.n(external_react_twitter_login_namespaceObject);
;// CONCATENATED MODULE: ./components/Header/Bar/Login/SocialMediaIcons/SocialMediaIcons.jsx


// Icons



 // scss

 // components





const icons = [{
  iconUrl: login_facebook.src
}, {
  iconUrl: gmail.src
}, {
  iconUrl: vk.src
}, {
  iconUrl: twitter.src
}];

const responseFacebook = response => {
  console.log(response);
};

const responseGoogle = response => {
  console.log(response);
};

const TWITTER_CONSUMER_KEY = "";
const TWITTER_CONSUMER_SECRET = "";
function SocialMediaIcons() {
  (0,external_react_.useEffect)(() => {
    VK.init({
      apiId: '7911294'
    });
  }, []);

  function onSocialMediaBtnClick(i) {
    if (i === 0) {
      const facebookLoginBtn = document.querySelector(`.facebook-login-btn`);
      console.log(facebookLoginBtn);
      if (facebookLoginBtn) facebookLoginBtn.click();
    } else if (i === 1) {
      const googleLoginBtn = document.querySelector(`.google-login-btn`);
      if (googleLoginBtn) googleLoginBtn.click();
    } else if (i === 2) {
      VK.Auth.login(function (response) {
        if (response.session) {
          /*User authorization succeeded*/
          console.log(response);

          if (response.status == 'connected') {
            /*Selected user access settings, if they are requested*/
          }
        } else {
            /*User clicks the cancel button in the authorization window*/
          }
      });
    } else if (i === 3) {}
  }

  const twitterAuthHandler = (err, data) => {
    console.log(err, data);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (SocialMediaIcons_module_default()).conteiner,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (SocialMediaIcons_module_default()).content,
      children: icons.map((el, i) => {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (SocialMediaIcons_module_default()).iconContent,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            target: "_blank",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (SocialMediaIcons_module_default()).iconBody,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: el.iconUrl,
                alt: "",
                onClick: () => onSocialMediaBtnClick(i),
                className: (SocialMediaIcons_module_default()).icon,
                style: {
                  cursor: 'pointer'
                }
              }), i === 0 && /*#__PURE__*/jsx_runtime_.jsx((external_react_facebook_login_default()), {
                containerStyle: {
                  display: `none`
                },
                cssClass: "facebook-login-btn",
                appId: "118863770361683",
                fields: "name,email,picture",
                callback: responseFacebook
              }), i === 1 && /*#__PURE__*/jsx_runtime_.jsx((external_react_google_login_default()), {
                clientId: "1089618047943-r91su9qkc0c9npo1tfoff3sp8421bt5g.apps.googleusercontent.com",
                render: renderProps => /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: renderProps.onClick,
                  disabled: renderProps.disabled,
                  style: {
                    display: 'none'
                  },
                  className: "google-login-btn"
                }),
                cookiePolicy: 'single_host_origin',
                onSuccess: responseGoogle,
                onFailure: responseGoogle
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_twitter_login_default()), {
                authCallback: twitterAuthHandler,
                consumerKey: TWITTER_CONSUMER_KEY,
                consumerSecret: TWITTER_CONSUMER_SECRET
              })]
            })
          })
        }, Math.random() * 10);
      })
    })
  });
} // TODO
// add foot footbet domain in google develpors account
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2166);
;// CONCATENATED MODULE: ./components/Header/Bar/Login/common/Title.jsx

function Title({
  styles,
  content
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: styles,
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: content
    })
  });
}
// EXTERNAL MODULE: ./components/common/auth/InputContainer/InputContainer.jsx
var InputContainer = __webpack_require__(7152);
;// CONCATENATED MODULE: ./components/Header/Bar/Login/common/Submit.jsx

function Submit({
  styles,
  content,
  click
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: styles,
    children: /*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "submit",
      children: content
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/Bar/Login/ResetPassword/GetEmailCode/input_configs.js
const // input configs
inputs = [{
  id: 'first',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: "1"
}, {
  id: 'second',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: '1'
}, {
  id: 'third',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: '1'
}, {
  id: 'fourth',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: '1'
}, {
  id: 'fifth',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: '1'
}, {
  id: 'sixth',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: '1'
}];
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./components/Header/Bar/Login/ResetPassword/NewPassword/NewPassword.module.scss
var NewPassword_module = __webpack_require__(3354);
var NewPassword_module_default = /*#__PURE__*/__webpack_require__.n(NewPassword_module);
// EXTERNAL MODULE: ./components/Header/Bar/Login/ResetPassword/Success/Success.module.scss
var Success_module = __webpack_require__(1320);
var Success_module_default = /*#__PURE__*/__webpack_require__.n(Success_module);
;// CONCATENATED MODULE: ./public/images/header/login/success.png
/* harmony default export */ var success = ({"src":"/_next/static/image/public/images/header/login/success.b2f639f6971931b9d4939c59119e7859.png","height":132,"width":141,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/ARm+LgAJAQY+7v/2jgUAAi/r/tT+Ygtq1X0YdeHkIdxYARa+LUrq/uS1BgEUABoBDf/g/c4BqRitAPfj9QBg8F5TAQC9HuFHCDUe1fvf++T6zgVpEHH/XQBX/WXhcATVFt7gAQC6AP+iD6b9BAgEA1rqVv+6Gb0A1NvUAXILb/4fBDECAQC/GuA37ygfiReA+/IV9AQH5wQAR+xk/A4TCwUA/QDgATK/P0fO/8G2WvJhAnIUawCk6KgAkBGMABsBL/7t//hJASnCNwAE/wQ60/vNjTLnNzDTE+cACQoD0Pf8/XMCAQHGNDBlOPg+WCUAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Header/Bar/Login/ResetPassword/Success/Success.jsx


// hooks helpers
 // components


 // styles

 // icons


function Success({
  onModalClose
}) {
  const // translation    
  {
    t
  } = useTranslation_default()('common'),
        translationPath = 'header.successModal.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
    onClose: onModalClose,
    contentStyles: (Success_module_default()).m_content,
    containerStyles: (Success_module_default()).m_container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Success_module_default()).container,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
        styles: (Success_module_default()).title,
        content: translate('title')
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Success_module_default()).icon_container,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: success.src,
          alt: "Success img"
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./lib/er.lib.js
var er_lib = __webpack_require__(955);
// EXTERNAL MODULE: ./lib/request-destinations.js + 1 modules
var request_destinations = __webpack_require__(9541);
;// CONCATENATED MODULE: ./components/Header/Bar/Login/ResetPassword/NewPassword/NewPassword.jsx



// hooks and helpers




 //components





 // styles





function NewPassword({
  onModalClose
}) {
  const // modal states pass => password Ml => Modal
  {
    0: showNewPassMl,
    1: setShowNewPassMl
  } = (0,external_react_.useState)(true),
        {
    0: showSuccessMl,
    1: setShowSuccessMl
  } = (0,external_react_.useState)(false),
        // translation consfigs
  {
    t
  } = useTranslation_default()('common'),
        translationPath = 'header.newPasswordModal.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
  schema = external_yup_.object().shape({
    password: external_yup_.string().required().min(6)
  }),
        // form configs
  {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    mode: 'onChange',
    resolver: (0,yup_.yupResolver)(schema)
  }),
        // on form submit
  submit = async data => {
    try {
      await (0,er_lib/* request */.WY)(request_destinations/* SET_NEW_PASSWORD */.MC, {
        password: data.password
      }, {
        headers: {
          'Authorization': `Bearer ${(0,er_lib/* getCookie */.ej)(`reset-token`)}`
        }
      });
      setShowNewPassMl(false);
      setShowSuccessMl(true);
    } catch (err) {
      var _err$response$data;

      (0,external_react_toastify_.toast)(((_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || `Не удалось востановить пароль`, {
        type: `error`
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showNewPassMl && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Modal/* Modal */.u, {
      onClose: onModalClose,
      contentStyles: (NewPassword_module_default()).m_content,
      containerStyles: (NewPassword_module_default()).m_container,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (NewPassword_module_default()).container,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
          styles: (NewPassword_module_default()).title,
          content: translate('title')
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          onSubmit: handleSubmit(submit),
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (NewPassword_module_default()).inputs,
            children: /*#__PURE__*/jsx_runtime_.jsx(InputContainer/* InputContainer */.f, {
              id: "password",
              type: "password",
              placeholder: t('registration.inputPlaceHolders.password'),
              errors: !!errors.password,
              other: register('password')
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Submit, {
            styles: (NewPassword_module_default()).submit,
            content: translate('success')
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {})]
    }), showSuccessMl && /*#__PURE__*/jsx_runtime_.jsx(Success, {
      onModalClose: onModalClose
    })]
  });
}
// EXTERNAL MODULE: ./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.module.scss
var GetEmailCode_module = __webpack_require__(1766);
var GetEmailCode_module_default = /*#__PURE__*/__webpack_require__.n(GetEmailCode_module);
;// CONCATENATED MODULE: ./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.jsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks and helpers





 //components




 // styles





function GetEmailCode({
  onModalClose
}) {
  const // modal states pass => password Ml => Modal
  {
    0: showGetEmailCodeMl,
    1: setShowEmailCodeMl
  } = (0,external_react_.useState)(true),
        {
    0: showNewPasswordMl,
    1: setShowNewPasswordMl
  } = (0,external_react_.useState)(false),
        // translation consfigs
  {
    t
  } = useTranslation_default()('common'),
        translationPath = 'header.getEmailCodeModal.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
  schema = external_yup_.object().shape({
    num1: external_yup_.string().required().matches(/[0-9]/mg),
    num2: external_yup_.string().required().matches(/[0-9]/mg),
    num3: external_yup_.string().required().matches(/[0-9]/mg),
    num4: external_yup_.string().required().matches(/[0-9]/mg),
    num5: external_yup_.string().required().matches(/[0-9]/mg),
    num6: external_yup_.string().required().matches(/[0-9]/mg)
  }),
        // form configs
  {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    mode: 'onChange',
    resolver: (0,yup_.yupResolver)(schema)
  }),
        // input jumps 
  jump = x => {
    if (x.value.length) {
      x = x.nextSibling;

      if (x && /text/.test(x.type)) {
        x.focus();
      }
    }
  },
        jumpBack = x => {
    if (x.target.value.length == 0) {
      if (x.code === 'Backspace') {
        if (document.querySelector(".move:focus").previousSibling) {
          document.querySelector(".move:focus").previousSibling.focus();
        }
      }
    }
  },
        // on form submit
  submit = async data => {
    try {
      data = Object.values(data).reduce((ac, el) => ac + el);
      await (0,er_lib/* request */.WY)(request_destinations/* VERIFY_PASSWORD_RESET */.cq, {
        code: data
      }, {
        headers: {
          'Authorization': `Bearer ${(0,er_lib/* getCookie */.ej)(`reset-token`)}`
        }
      });
      setShowEmailCodeMl(false);
      setShowNewPasswordMl(true);
    } catch (err) {
      var _err$response$data;

      (0,external_react_toastify_.toast)(((_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || `Не удалось востановить пароль`, {
        type: `error`
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showGetEmailCodeMl && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Modal/* Modal */.u, {
      onClose: onModalClose,
      contentStyles: (GetEmailCode_module_default()).m_content,
      containerStyles: (GetEmailCode_module_default()).m_container,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (GetEmailCode_module_default()).container,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
          styles: (GetEmailCode_module_default()).title,
          content: translate('title')
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          onSubmit: handleSubmit(submit),
          children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
            styles: (GetEmailCode_module_default()).description,
            content: translate('description')
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (GetEmailCode_module_default()).inputs,
            children: inputs.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
              id: el.id,
              className: `${el.class} 
                                                ${errors.num1 || errors.num2 || errors.num3 || errors.num4 || errors.num5 || errors.num6 ? (GetEmailCode_module_default()).error_input : (GetEmailCode_module_default()).success_input}`.trim(),
              type: el.type,
              maxLength: el.maxLength,
              onInput: e => jump(e.target),
              onKeyDown: e => jumpBack(e)
            }, register('num' + (i + 1))), el.key))
          }), /*#__PURE__*/jsx_runtime_.jsx(Submit, {
            styles: (GetEmailCode_module_default()).submit,
            content: translate('send')
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {})]
    }), showNewPasswordMl && /*#__PURE__*/jsx_runtime_.jsx(NewPassword, {
      onModalClose: onModalClose
    })]
  });
}
// EXTERNAL MODULE: ./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.module.scss
var ForgotPassword_module = __webpack_require__(1300);
var ForgotPassword_module_default = /*#__PURE__*/__webpack_require__.n(ForgotPassword_module);
;// CONCATENATED MODULE: ./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.jsx



// hooks and helpers




 //components





 // styles





function ForgotPassword({
  onModalClose
}) {
  const // modal states pass => password Ml => Modal
  {
    0: showForgotPassMl,
    1: setShowForgotPassMl
  } = (0,external_react_.useState)(true),
        {
    0: showGetEmailCodeMl,
    1: setShowEmailCodeMl
  } = (0,external_react_.useState)(false),
        // translation consfigs
  {
    t
  } = useTranslation_default()('common'),
        translationPath = 'header.resetPasswordModal.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
  schema = external_yup_.object().shape({
    email: external_yup_.string().required().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  }),
        // form configs
  {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    mode: 'onChange',
    resolver: (0,yup_.yupResolver)(schema)
  }),
        // on form submit
  submit = async data => {
    try {
      const {
        data: response
      } = await (0,er_lib/* request */.WY)((0,request_destinations/* START_RESET_PASSWORD */.Cl)(data.email));
      const token = response.data.token;
      (0,er_lib/* setCookie */.d8)(`reset-token`, token, 1 / 24 * 1);
      setShowForgotPassMl(false);
      setShowEmailCodeMl(true);
    } catch (err) {
      var _err$response$data;

      (0,external_react_toastify_.toast)(((_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || `Не удалось востановить пароль`, {
        type: `error`
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showForgotPassMl && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Modal/* Modal */.u, {
      onClose: onModalClose,
      contentStyles: (ForgotPassword_module_default()).m_content,
      containerStyles: (ForgotPassword_module_default()).m_container,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (ForgotPassword_module_default()).container,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
          styles: (ForgotPassword_module_default()).title,
          content: translate('title')
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          onSubmit: handleSubmit(submit),
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (ForgotPassword_module_default()).inputs,
            children: /*#__PURE__*/jsx_runtime_.jsx(InputContainer/* InputContainer */.f, {
              id: "name",
              type: "text",
              placeholder: t('registration.inputPlaceHolders.email'),
              errors: !!errors.email,
              other: register('email')
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Submit, {
            styles: (ForgotPassword_module_default()).submit,
            content: translate('send')
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {})]
    }), showGetEmailCodeMl && /*#__PURE__*/jsx_runtime_.jsx(GetEmailCode, {
      onModalClose: onModalClose
    })]
  });
}
;// CONCATENATED MODULE: ./components/Header/Bar/Login/common/ResetPasswordLink.jsx

function ResetPasswordLink({
  styles,
  content,
  click
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: styles,
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      onClick: click,
      children: content
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/Bar/Login/common/ToRegister.jsx



function ToRegister({
  container_styles,
  content_styles,
  or,
  register_text_styles,
  content,
  href,
  click
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: container_styles,
    onClick: click,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: content_styles,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: or + " "
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: href,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: register_text_styles,
          children: content
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/Header/Bar/Login/LoginForm/LoginForm.module.scss
var LoginForm_module = __webpack_require__(8808);
var LoginForm_module_default = /*#__PURE__*/__webpack_require__.n(LoginForm_module);
// EXTERNAL MODULE: ./redux/features/userSlice.js
var userSlice = __webpack_require__(246);
;// CONCATENATED MODULE: ./components/Header/Bar/Login/LoginForm/LoginForm.jsx


// hooks and helpers




 //components





 // styles 







function LoginForm({
  onModalClose,
  handleResetPassModal
}) {
  const router = (0,client_router.useRouter)();

  const dispatch = (0,external_react_redux_.useDispatch)(),
        // translation consfigs
  {
    t
  } = useTranslation_default()('common'),
        translationPath = 'registration.inputPlaceHolders.',
        translate = key => t(`${translationPath}${key}`),
        handle_to_register_click = () => {
    document.querySelector('body').style.overflow = 'visible';
    onModalClose();
  },
        // yup configs
  schema = external_yup_.object().shape({
    email: external_yup_.string().required().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    password: external_yup_.string().required().min(6)
  }),
        // form configs
  {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    mode: 'onChange',
    resolver: (0,yup_.yupResolver)(schema)
  }),
        // on form submit
  submit = async data => {
    try {
      var _await$request$data, _await$request$data2;

      const {
        token
      } = (_await$request$data = (await (0,er_lib/* request */.WY)(request_destinations/* LOGIN */.ym, data)).data) === null || _await$request$data === void 0 ? void 0 : _await$request$data.data;
      (0,er_lib/* setCookie */.d8)(`access-token`, token, 1);
      const user = (_await$request$data2 = (await (0,er_lib/* request */.WY)(request_destinations/* GET_ACCOUNT_INFO */.uy, {}, {
        auth: true
      })).data) === null || _await$request$data2 === void 0 ? void 0 : _await$request$data2.data;
      dispatch((0,userSlice/* login */.x4)(user));
      router.push(`/`);
    } catch (error) {
      var _error$response$data;

      (0,external_react_toastify_.toast)(((_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || `Проблемы с сетью`, {
        type: `error`
      });
    }

    handle_to_register_click();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (LoginForm_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
      styles: (LoginForm_module_default()).title,
      content: t('header.loginModal.title')
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handleSubmit(submit),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (LoginForm_module_default()).inputs,
        children: [/*#__PURE__*/jsx_runtime_.jsx(InputContainer/* InputContainer */.f, {
          id: "name",
          type: "text",
          placeholder: translate('email'),
          errors: !!errors.email,
          other: register('email')
        }), /*#__PURE__*/jsx_runtime_.jsx(InputContainer/* InputContainer */.f, {
          id: "password",
          type: "password",
          placeholder: translate('password'),
          errors: !!errors.password,
          other: register('password')
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ResetPasswordLink, {
        click: handleResetPassModal,
        styles: (LoginForm_module_default()).reset_password,
        content: t('header.loginModal.resPassword')
      }), /*#__PURE__*/jsx_runtime_.jsx(Submit, {
        styles: (LoginForm_module_default()).submit,
        content: t('header.loginModal.submit')
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(ToRegister, {
      href: "/registration",
      click: handle_to_register_click,
      container_styles: (LoginForm_module_default()).to_register_container,
      content_styles: (LoginForm_module_default()).to_register_content,
      or: t('header.loginModal.or'),
      register_text_styles: (LoginForm_module_default()).to_register_text,
      content: t('header.loginModal.register')
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {})]
  });
}
// EXTERNAL MODULE: ./components/Header/Bar/Login/Login.module.scss
var Login_module = __webpack_require__(5289);
var Login_module_default = /*#__PURE__*/__webpack_require__.n(Login_module);
;// CONCATENATED MODULE: ./components/Header/Bar/Login/Login.jsx



// components



 // styles



function Login({
  onModalClose
}) {
  const {
    0: showLoginModal,
    1: setShowLoginModal
  } = (0,external_react_.useState)(true),
        {
    0: showResetPasswordModal,
    1: setShowResetPasswordModal
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showLoginModal && /*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
      onClose: onModalClose,
      contentStyles: (Login_module_default()).m_content,
      containerStyles: (Login_module_default()).m_container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Login_module_default()).login_container,
        children: [/*#__PURE__*/jsx_runtime_.jsx(SocialMediaIcons, {}), /*#__PURE__*/jsx_runtime_.jsx(LoginForm, {
          onModalClose: onModalClose,
          handleResetPassModal: () => {
            setShowResetPasswordModal(true);
            setShowLoginModal(false);
          }
        })]
      })
    }), showResetPasswordModal && /*#__PURE__*/jsx_runtime_.jsx(ForgotPassword, {
      onModalClose: onModalClose
    })]
  });
}
;// CONCATENATED MODULE: ./public/images/header/flags/rus.png
/* harmony default export */ var rus = ({"src":"/_next/static/image/public/images/header/flags/rus.6eb4cb14c6727094ffbdc706f51360a0.png","height":22,"width":21,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuUlEQVR42k3JTwqCUBgE8LlMZekq1xXUnSLCAo9RgfuwjUEUKG48gJD0xxtoO5HQh/Je3wcuGvjBMANOWVZG07RR27YVEdT9ovhq4CilDJITjuxwMqLB9e7hxX8p7/oQ59tTMu680RcAcASwk8BBAXtJuBPenBqYHmssThJz95/ijT6BpWkH9nitLHMjtmNLMu68rUw7xKePYTpE9h5BpSNI1vU878MAJ9ZnWqIP/ETvCVJTj2Jjwid+tCCScAJCN9gAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/header/flags/arm.svg
/* harmony default export */ var arm = ({"src":"/_next/static/image/public/images/header/flags/arm.94fdfa9a621438c57153ac07b079c412.svg","height":21,"width":21});
;// CONCATENATED MODULE: ./public/images/header/flags/en.svg
/* harmony default export */ var en = ({"src":"/_next/static/image/public/images/header/flags/en.1c85630df414717081ea8657eeca7e2c.svg","height":21,"width":21});
;// CONCATENATED MODULE: ./public/images/header/flags/esp.svg
/* harmony default export */ var esp = ({"src":"/_next/static/image/public/images/header/flags/esp.43788d57514706de9ea42c424cb8792f.svg","height":21,"width":21});
;// CONCATENATED MODULE: ./public/images/header/flags/frc.svg
/* harmony default export */ var frc = ({"src":"/_next/static/image/public/images/header/flags/frc.c32b391317fb03718355dd8a684f5541.svg","height":21,"width":21});
;// CONCATENATED MODULE: ./public/images/header/flags/deu.svg
/* harmony default export */ var deu = ({"src":"/_next/static/image/public/images/header/flags/deu.db91936c209d8e0d41810eac31428b8d.svg","height":21,"width":21});
;// CONCATENATED MODULE: ./components/Header/Bar/BarItems/LanguageDropConfigs/lang-configs.js
// flag icons






const languages = [{
  lang: "am",
  contentOnTitle: 'am.onTitle',
  contentOnDrop: 'am.onDrop',
  icon: arm.src
}, {
  lang: "rs",
  contentOnTitle: 'rs.onTitle',
  contentOnDrop: 'rs.onDrop',
  icon: rus.src
}, {
  lang: "en",
  contentOnTitle: 'en.onTitle',
  contentOnDrop: 'en.onDrop',
  icon: en.src
}, {
  lang: "esp",
  contentOnTitle: 'esp.onTitle',
  contentOnDrop: 'esp.onDrop',
  icon: esp.src
}, {
  lang: "fr",
  contentOnTitle: 'frc.onTitle',
  contentOnDrop: 'frc.onDrop',
  icon: frc.src
}, {
  lang: "deu",
  contentOnTitle: 'deu.onTitle',
  contentOnDrop: 'deu.onDrop',
  icon: deu.src
}];
// EXTERNAL MODULE: ./components/Header/Bar/BarItems/BarItems.module.scss
var BarItems_module = __webpack_require__(1369);
var BarItems_module_default = /*#__PURE__*/__webpack_require__.n(BarItems_module);
// EXTERNAL MODULE: ./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.module.scss
var LanguageDrop_module = __webpack_require__(6178);
var LanguageDrop_module_default = /*#__PURE__*/__webpack_require__.n(LanguageDrop_module);
;// CONCATENATED MODULE: ./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.jsx


// hooks and helpers

 // translation 

 // componetns

 // styles 


function LanguageDrop({
  onClose,
  click,
  data
}) {
  (0,external_react_.useEffect)(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  const node = (0,external_react_.useRef)(),
        router = (0,client_router.useRouter)(),
        handleClose = e => {
    if (node.current.contains(e.target)) {
      if (e.target.parentNode) return;
    }

    onClose();
  },
        {
    t
  } = useTranslation_default()('common'),
        translationPath = 'header.lang.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (LanguageDrop_module_default()).container,
    ref: node,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (LanguageDrop_module_default()).content,
      children: data.map(el => {
        return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `${router.pathname}`,
          locale: el.lang,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (LanguageDrop_module_default()).row,
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              onClick: click,
              className: `${el.lang}`,
              children: translate(el.contentOnDrop)
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              onClick: click,
              src: el.icon,
              className: `${el.lang}`
            })]
          })
        }, `change-lang-${el.lang}`);
      })
    })
  });
}
// EXTERNAL MODULE: ./components/Header/Bar/BarItems/Logged/Logged.module.scss
var Logged_module = __webpack_require__(2792);
var Logged_module_default = /*#__PURE__*/__webpack_require__.n(Logged_module);
// EXTERNAL MODULE: ./public/images/common/userDefault.png
var userDefault = __webpack_require__(6596);
// EXTERNAL MODULE: ./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.module.scss
var LoggedDrop_module = __webpack_require__(1267);
var LoggedDrop_module_default = /*#__PURE__*/__webpack_require__.n(LoggedDrop_module);
;// CONCATENATED MODULE: ./public/images/common/phone.png
/* harmony default export */ var common_phone = ({"src":"/_next/static/image/public/images/common/phone.302160191980cf3febb1ea4ef445194b.png","height":16,"width":16,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42mP4//8/w9f3H1g+v3sv/Of3b3EgX/Dvnz8C3z9/YQHJMXx5+x7EEAJibiAWubxupxaQFgViYZAiBiCD9+7+k6pLNKKm7m2e7LRCM756Q1BxHFBc7N/fv4IgBfzHJy0xnsvg8n9XZY/HkbbZ5quMkwuvb92nDjKZ4cfXrxIg45eYRM9bahY7d0/DJNd9zVMcQVb8/vVLnOHnt++CIDvf33sivdQ0Zt5cBtf/S7SipgLFeD6/fy8MsoL51/cfYiBFIMGTU5YaPT51SQnsyI+fwY4EKwKZBLWOH4j5vn34CPYmAGzlq1wESHWGAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.jsx


// hooks and helpers



 // translation 

 // componetns

 // styles 

 // icons



function LoggedDrop({
  onClose,
  user
}) {
  var _user$photo;

  (0,external_react_.useEffect)(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  const node = (0,external_react_.useRef)(),
        router = (0,client_router.useRouter)(),
        handleClose = e => {
    if (node.current.contains(e.target)) {
      if (e.target.parentNode) return;
    }

    onClose();
  },
        {
    t
  } = useTranslation_default()('common'),
        translationPath = 'commons.',
        translate = key => t(`${translationPath}${key}`),
        dispatch = (0,external_react_redux_.useDispatch)();

  function _logout() {
    dispatch((0,userSlice/* logout */.kS)());
    router.push(`/`);
  }

  function goToPersonal() {
    router.push(`/personal`);
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (LoggedDrop_module_default()).container,
    ref: node,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (LoggedDrop_module_default()).content,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (LoggedDrop_module_default()).user_photo_name,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          onClick: goToPersonal,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (_user$photo = user.photo) !== null && _user$photo !== void 0 ? _user$photo : userDefault/* default.src */.Z.src,
            alt: ""
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          onClick: goToPersonal,
          children: user.username
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (LoggedDrop_module_default()).user_tel,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: common_phone.src,
            alt: ""
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: user.telephone
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (LoggedDrop_module_default()).logOut,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          onClick: () => _logout(),
          children: translate('logOut')
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.module.scss
var LoggedWallper_module = __webpack_require__(7860);
var LoggedWallper_module_default = /*#__PURE__*/__webpack_require__.n(LoggedWallper_module);
;// CONCATENATED MODULE: ./public/images/common/triangle.png
/* harmony default export */ var triangle = ({"src":"/_next/static/image/public/images/common/triangle.54ba395b147d6d1d132a896a0fcf5807.png","height":7,"width":10,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAhElEQVR42k3LsY0CQAxE0dFefAGiAUQhhFRATBGAhEQL9EAn9EBKSg0k2GMvP2Slp7HsHVXV2vYl7QN5MpiP5JnbStG9zO6Hu2fiJ+/V/a+oErZZFSyTnHhH5kbizTkHC+FmjqaNK3thiPbobmHB4cXH5ydiGRHCUNrCn0nsmPdFAUOSvsPqmwLEyLqSAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.jsx


// components



 // styles

 // icons



function LoggedWallper({
  img,
  fullName,
  click
}) {
  const data = (0,external_react_redux_.useSelector)(userSlice/* selectUser */.dy);
  const {
    0: photo,
    1: setPhoto
  } = (0,external_react_.useState)(data.photo);
  const {
    0: fullname,
    1: setFullname
  } = (0,external_react_.useState)(data.username);
  (0,external_react_.useEffect)(() => {
    setPhoto(data.photo);
    setFullname(data.username);
  }, [data]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (LoggedWallper_module_default()).container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (LoggedWallper_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (LoggedWallper_module_default()).user_photo,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/personal",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: photo || userDefault/* default.src */.Z.src,
            alt: `${fullname} icon`
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (LoggedWallper_module_default()).user_fullName,
        onClick: click,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (LoggedWallper_module_default()).fullname,
          children: fullname
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            color: 'white'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: triangle.src,
            alt: "triangle"
          })
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/Bar/BarItems/Logged/Logged.jsx

// styles






function Logged() {
  const // states
  //change user dropdown
  {
    0: showUserDrop,
    1: setShowUserDrop
  } = (0,external_react_.useState)(false);
  const data = (0,external_react_redux_.useSelector)(userSlice/* selectUser */.dy);
  const {
    0: photo,
    1: setPhoto
  } = (0,external_react_.useState)(data.photo);
  (0,external_react_.useEffect)(() => {
    setPhoto(data.photo);
  }, [data]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Logged_module_default()).container,
    style: showUserDrop ? {
      padding: '17.5px 0'
    } : null,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Logged_module_default()).content,
      children: !showUserDrop ? /*#__PURE__*/jsx_runtime_.jsx(LoggedWallper, {
        img: photo,
        fullName: data.username,
        click: () => setShowUserDrop(true)
      }) : /*#__PURE__*/jsx_runtime_.jsx(LoggedDrop, {
        onClose: () => setShowUserDrop(false),
        user: data
      })
    })
  });
}
;// CONCATENATED MODULE: ./public/images/header/register.png
/* harmony default export */ var register = ({"src":"/_next/static/image/public/images/header/register.47403b998ce2c53617bfb46dbf914bda.png","height":23,"width":23,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42g3EQQvBABiA4U8iJ2eXHbSTbIoaKQdprSwns6w4OPgBDu7++ZP19L4hpF4qE6EXOj+Ft6+lMAhnGw83mVIYhtpBayd1lIhw6TUWfbnaNpyMjZQyH7k2PO0VGmuVlXuYSsz6X1U68z9hvUzPNC77RgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/header/login.png
/* harmony default export */ var header_login = ({"src":"/_next/static/image/public/images/header/login.2b90f4f21c830dc3851cb3fc3f1618b3.png","height":21,"width":19,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAZ0lEQVR42jXNKwoCARhF4esDETfgDmwGmzYXYLEpGhTGZDUJFpPZBZjNLsJlfQx/GG463AMneuLm7ufvE7WFgavYFWytjFzEuXDoa+koToUbB2NN9040ZkreR1+svT1NvSIqVbGHeQtEukRdrLnb8QAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/Header/Bar/BarItems/BarItems.jsx



// hooks and helpers

 // import { user_data } from '/src/user/user'

 // translation 

 // styles 

 // components



 // icons





function BarItems({
  registration,
  login,
  registration_path,
  loginModalHandle,
  bar_items,
  userLogged
}) {
  const {
    t,
    lang
  } = useTranslation_default()('common');
  const {
    0: languagesTitle,
    1: setLanguagesTitle
  } = (0,external_react_.useState)(languages[1]);
  (0,external_react_.useEffect)(() => {
    const newLang = languages.find(el => el.lang === lang);

    if (newLang) {
      setLanguagesTitle(newLang);
    }
  }, [lang]);

  const router = (0,client_router.useRouter)(),
        languages_data = languages,
        {
    0: showDrop,
    1: setShowDrop
  } = (0,external_react_.useState)(false),
        changeLangTitle = event => {
    let lang_title_data = languages_data.filter(el => el.lang === event.target.className);
    setLanguagesTitle(lang_title_data[0]);
    setShowDrop(false);
  },
        translationPath = 'header.lang.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(BarItems_module_default()).bar_item_container} ${bar_items} ${router.pathname !== '/' ? (BarItems_module_default()).for_mobile : null}`,
      children: [userLogged ? /*#__PURE__*/jsx_runtime_.jsx(Logged, {}) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (BarItems_module_default()).auth_container,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (BarItems_module_default()).auth_buttons,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (BarItems_module_default()).sign_up_button,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: registration_path,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: register.src,
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: registration_path,
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: registration
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (BarItems_module_default()).sign_in_button,
            onClick: loginModalHandle,
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: header_login.src,
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: login
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (BarItems_module_default()).lang_button,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (BarItems_module_default()).lang_button_content,
          style: showDrop ? {
            display: 'none'
          } : null,
          onClick: () => setShowDrop(true),
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: translate(`${languagesTitle.contentOnTitle}`)
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: languagesTitle.icon,
            alt: "lang-flag"
          })]
        }), showDrop && /*#__PURE__*/jsx_runtime_.jsx(LanguageDrop, {
          click: changeLangTitle,
          onClose: () => setShowDrop(false),
          data: languages_data
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/Header/Bar/Logo/Logo.module.scss
var Logo_module = __webpack_require__(5363);
var Logo_module_default = /*#__PURE__*/__webpack_require__.n(Logo_module);
// EXTERNAL MODULE: ./public/images/header/logo.svg
var logo = __webpack_require__(2090);
;// CONCATENATED MODULE: ./components/Header/Bar/Logo/Logo.jsx

// styles
 // components

 // images and icons


function Logo() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Logo_module_default()).logo_conatiner,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: logo/* default.src */.Z.src,
        alt: "FootBet Logo"
      })
    })
  });
}
// EXTERNAL MODULE: ./components/Header/Bar/DropdownMenu/Dropdown.module.scss
var Dropdown_module = __webpack_require__(681);
var Dropdown_module_default = /*#__PURE__*/__webpack_require__.n(Dropdown_module);
;// CONCATENATED MODULE: ./public/images/header/dropdown_lines.png
/* harmony default export */ var dropdown_lines = ({"src":"/_next/static/image/public/images/header/dropdown_lines.3026094b1449e1420839b89cea855e19.png","height":17,"width":27,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAO0lEQVR42l3GsQmAMBAAwC9sdCBB5xPUwmBio8sewpfhmguXpqbbawmdUDxaqj5rGE1Sbgib05F2xfwDyUs0V/V0c6UAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./components/Pages/Contacts/Contacts.module.scss
var Contacts_module = __webpack_require__(6048);
var Contacts_module_default = /*#__PURE__*/__webpack_require__.n(Contacts_module);
;// CONCATENATED MODULE: ./public/images/header/SocialMedia/email.svg
/* harmony default export */ var email = ({"src":"/_next/static/image/public/images/header/SocialMedia/email.2986d0c4bb65fe3a1f58b6c9bbe1597a.svg","height":20,"width":25});
;// CONCATENATED MODULE: ./components/Pages/Contacts/contacts_data.js







const contacts_data = [{
  icon: phone.src,
  url: "tel:+34672314808",
  text: "+34 672 314 808"
}, {
  icon: facebook.src,
  url: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/",
  text: "Facebook"
}, {
  icon: telegram.src,
  url: "https://telegram.me/footbet24com",
  text: "@footbet24com"
}, {
  icon: watsup.src,
  url: "https://api.whatsapp.com/send?phone=+34672314808",
  text: "+34 672 314 808"
}, {
  icon: instagram.src,
  url: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link",
  text: "Instagram"
}, {
  icon: viber.src,
  url: "viber://chat?number=+34672314808",
  text: "+34 672 314 808"
}, {
  icon: email.src,
  url: "mailto:n.xach1987@mail.ru",
  text: "n.xach1987@mail.ru"
}];
;// CONCATENATED MODULE: ./public/images/header/SocialMedia/closeVector.png
/* harmony default export */ var closeVector = ({"src":"/_next/static/image/public/images/header/SocialMedia/closeVector.d1faada7c5dce7c8f1fbd1ffde6c99d9.png","height":13,"width":13,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAQUlEQVR42mWNwQ0AIQzD0v0HOYkBykqwhI/kiVA+rqs2YtEUcsq0xORnEDFMMz7wOVmUcDJEhl/xnvT1tMW+avcBZRFfWZXKot0AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Pages/Contacts/ContactsModal.jsx


 // styles 


 // icons


function ContactsModal({
  onModalClose,
  opened = false
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
    onClose: onModalClose,
    containerStyles: `${(Contacts_module_default()).container} `,
    contentStyles: `${(Contacts_module_default()).content} ${opened ? (Contacts_module_default()).open : (Contacts_module_default()).close}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Contacts_module_default()).modal_content,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Contacts_module_default()).content_container,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Contacts_module_default()).top,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: closeVector.src,
            alt: "",
            onClick: () => {
              onModalClose();
              document.querySelector('body').style.overflow = 'visible';
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Contacts_module_default()).rows,
          children: contacts_data.map(el => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Contacts_module_default()).row,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (Contacts_module_default()).img,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: el.icon,
                alt: "contact-icon"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (Contacts_module_default()).text,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: el.url,
                target: "_blank",
                children: el.text
              })
            })]
          }, Math.random()))
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/Bar/DropdownMenu/Dropdown.jsx


// hooks and helpers

 // styles

 // translation 

 //imgs

 //components



function Dropdown() {
  (0,external_react_.useEffect)(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  const {
    0: showDropdown,
    1: setShowDropdown
  } = (0,external_react_.useState)(false),
        {
    0: showContactsModal,
    1: setShowContactsModal
  } = (0,external_react_.useState)(false),
        {
    t
  } = useTranslation_default()('common'),
        translationPath = 'header.navBar.',
        translate = key => t(`${translationPath}${key}`),
        router = (0,client_router.useRouter)(),
        node = (0,external_react_.useRef)(),
        handleClose = e => {
    var _node$current;

    if (node !== null && node !== void 0 && (_node$current = node.current) !== null && _node$current !== void 0 && _node$current.contains(e.target)) {
      if (e.target.parentNode) return;
    }

    setShowDropdown(false);
  },
        buttonsInHomePage = [{
    id: 'main',
    key: Math.random(),
    frstContent: translate('main'),
    href: '/'
  }, {
    id: 'games',
    key: Math.random(),
    frstContent: translate('games'),
    href: '/games'
  }, {
    id: 'statistics',
    key: Math.random(),
    frstContent: translate('statistics.frs'),
    secContent: translate('statistics.sec'),
    href: '/statistics'
  }, {
    id: 'prediction',
    key: Math.random(),
    frstContent: translate('prediction.frs'),
    secContent: translate('prediction.sec'),
    href: '/prediction'
  }, {
    id: 'testimonials',
    key: Math.random(),
    frstContent: translate('testimonials'),
    href: '/testimonials'
  }, {
    id: 'aboutUs',
    key: Math.random(),
    frstContent: translate('aboutUs'),
    href: '/aboutUs'
  }, {
    id: 'contacts',
    key: Math.random(),
    frstContent: translate('contacts'),
    href: null,
    click: () => {
      setShowDropdown(false);
      setShowContactsModal(true);
    }
  }],
        buttons = buttonsInHomePage.filter(el => el.id !== "statistics");

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Dropdown_module_default()).dropdown,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Dropdown_module_default()).dropdown_check,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: dropdown_lines.src,
        alt: "drop-check-icon",
        onClick: () => setShowDropdown(!showDropdown)
      })
    }), showDropdown && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Dropdown_module_default()).dropdown_menu,
      ref: node,
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: (Dropdown_module_default()).dropdown_list,
        children: (router.pathname === '/' ? buttonsInHomePage : buttons).map(el => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: el.href ? el.href : "",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            onClick: el.click && el.click,
            className: (Dropdown_module_default()).dropdown_list_items,
            children: [el.frstContent, " ", el.secContent]
          })
        }, el.key))
      })
    }), showContactsModal && /*#__PURE__*/jsx_runtime_.jsx(ContactsModal, {
      opened: showContactsModal ? true : false,
      onModalClose: () => setShowContactsModal(false)
    })]
  });
}
;// CONCATENATED MODULE: ./components/Header/Bar/Bar.jsx


// hooks and helpers
 // styles

 // translation 

 //components






function Bar({
  bar_items,
  bar_items_cont
}) {
  const {
    t
  } = useTranslation_default()('common'),
        translationPath = 'header.',
        translate = key => t(`${translationPath}${key}`),
        // login modal configs
  {
    0: showLoginModal,
    1: setShowLoginModal
  } = (0,external_react_.useState)(false),
        user_info = (0,external_react_redux_.useSelector)(state => state.user.user);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${(Bar_module_default()).bar_container} ${bar_items_cont}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {}), /*#__PURE__*/jsx_runtime_.jsx(Dropdown, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(BarItems, {
      userLogged: user_info !== null ? true : false,
      registration: translate('register'),
      login: translate('login'),
      registration_path: "/registration",
      loginModalHandle: () => setShowLoginModal(true),
      bar_items: bar_items
    }), showLoginModal && /*#__PURE__*/jsx_runtime_.jsx(Login, {
      onModalClose: () => setShowLoginModal(false)
    })]
  });
}
// EXTERNAL MODULE: ./components/Header/NavBar/NavBar.module.scss
var NavBar_module = __webpack_require__(8278);
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);
// EXTERNAL MODULE: ./components/Header/NavBar/Button/Button.module.scss
var Button_module = __webpack_require__(4877);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./components/Header/NavBar/Button/Button.jsx



 // styles


function Button({
  href,
  contentFrstP,
  contentSecP = null,
  active,
  click = null
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: href !== null ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: href,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(Button_module_default()).container} ${active && (Button_module_default()).active}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Button_module_default()).content,
          onClick: click,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("pre", {
            children: [contentFrstP, /*#__PURE__*/jsx_runtime_.jsx("br", {}), contentSecP]
          })
        })
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(Button_module_default()).container} ${active && (Button_module_default()).active}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Button_module_default()).content,
        onClick: click,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("pre", {
          children: [contentFrstP, /*#__PURE__*/jsx_runtime_.jsx("br", {}), contentSecP]
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/NavBar/NavBar.jsx



// hooks and helpers

 // styles

 // translation

 // componetns



function NavBar() {
  const //states
  {
    0: showContactsModal,
    1: setShowContactsModal
  } = (0,external_react_.useState)(false),
        {
    t
  } = useTranslation_default()("common"),
        translationPath = "header.navBar.",
        translate = key => t(`${translationPath}${key}`),
        // router
  router = (0,client_router.useRouter)(),
        // nav bar buttons configs
  buttonsInHomePage = [{
    id: "main",
    key: Math.random(),
    frstContent: translate("main"),
    href: "/"
  }, {
    id: "games",
    key: Math.random(),
    frstContent: translate("games.frs"),
    secContent: translate("games.sec"),
    href: "/games"
  }, {
    id: "statistics",
    key: Math.random(),
    frstContent: translate("statistics.frs"),
    secContent: translate("statistics.sec"),
    href: "/statistics"
  }, {
    id: "prediction",
    key: Math.random(),
    frstContent: translate("prediction.frs"),
    secContent: translate("prediction.sec"),
    href: "/prediction"
  }, {
    id: "testimonials",
    key: Math.random(),
    frstContent: translate("testimonials"),
    href: "/testimonials"
  }, {
    id: "aboutUs",
    key: Math.random(),
    frstContent: translate("aboutUs"),
    href: "/aboutUs"
  }, {
    id: "contacts",
    key: Math.random(),
    frstContent: translate("contacts"),
    href: null,
    click: () => setShowContactsModal(true)
  }],
        buttons = buttonsInHomePage.filter(el => el.id !== "statistics");

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(NavBar_module_default()).container} ${router.pathname !== "/" ? (NavBar_module_default()).tablet : null}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (NavBar_module_default()).content,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (NavBar_module_default()).top_on_tablet,
          children: (router.pathname === "/" ? buttonsInHomePage : buttons).map((el, i) => i < 3 && /*#__PURE__*/jsx_runtime_.jsx(Button, {
            contentFrstP: el.frstContent,
            contentSecP: el.secContent,
            href: el.href,
            active: router.pathname === el.href ? "true" : null,
            click: el.click && el.click
          }, el.key))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (NavBar_module_default()).bottom_on_tablet,
          children: (router.pathname === "/" ? buttonsInHomePage : buttons).map((el, i) => i >= 3 && /*#__PURE__*/jsx_runtime_.jsx(Button, {
            contentFrstP: el.frstContent,
            contentSecP: el.secContent,
            href: el.href,
            active: router.pathname === el.href ? "true" : null,
            click: el.click && el.click
          }, el.key))
        })]
      })
    }), showContactsModal && /*#__PURE__*/jsx_runtime_.jsx(ContactsModal, {
      opened: showContactsModal ? true : false,
      onModalClose: () => setShowContactsModal(false)
    })]
  });
}
// EXTERNAL MODULE: ./components/Header/SocialMedia/SocialMedia.module.scss
var SocialMedia_SocialMedia_module = __webpack_require__(8713);
var SocialMedia_SocialMedia_module_default = /*#__PURE__*/__webpack_require__.n(SocialMedia_SocialMedia_module);
// EXTERNAL MODULE: ./components/Header/SocialMedia/Icon/Icon.module.scss
var Icon_Icon_module = __webpack_require__(2476);
var Icon_Icon_module_default = /*#__PURE__*/__webpack_require__.n(Icon_Icon_module);
;// CONCATENATED MODULE: ./components/Header/SocialMedia/Icon/Icon.jsx


function Icon_Icon({
  src,
  click,
  id
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Icon_Icon_module_default()).container,
    id: id,
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: src,
      alt: `icons-${src}`,
      onClick: click
    })
  });
}
// EXTERNAL MODULE: ./components/Header/SocialMedia/Modals/SocialMediaModal.module.scss
var SocialMediaModal_module = __webpack_require__(8776);
var SocialMediaModal_module_default = /*#__PURE__*/__webpack_require__.n(SocialMediaModal_module);
;// CONCATENATED MODULE: ./components/Header/SocialMedia/Modals/Phone/Phone.jsx




function Phone({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.phone.offsetTop;
  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
    onClose: onModalClose,
    containerStyles: (SocialMediaModal_module_default()).container,
    contentStyles: (SocialMediaModal_module_default()).content,
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: data.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: data.text
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/SocialMedia/Modals/Facebook/Facebook.jsx




function Facebook({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.facebook.offsetTop;
  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
    onClose: onModalClose,
    containerStyles: (SocialMediaModal_module_default()).container,
    contentStyles: (SocialMediaModal_module_default()).content,
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: data.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: data.text
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/SocialMedia/Modals/Telegram/Telegram.jsx




function Telegram({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.telegram.offsetTop;
  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
    onClose: onModalClose,
    containerStyles: (SocialMediaModal_module_default()).container,
    contentStyles: (SocialMediaModal_module_default()).content,
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: data.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: data.text
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/SocialMedia/Modals/WatsUp/WatsUp.jsx




function WatsUp({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.watsup.offsetTop;
  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
    onClose: onModalClose,
    containerStyles: (SocialMediaModal_module_default()).container,
    contentStyles: (SocialMediaModal_module_default()).content,
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: data.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: data.text
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/SocialMedia/Modals/Instagram/Instagram.jsx




function Instagram({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.instagram.offsetTop;
  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
    onClose: onModalClose,
    containerStyles: (SocialMediaModal_module_default()).container,
    contentStyles: (SocialMediaModal_module_default()).content,
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: data.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: data.text
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/SocialMedia/Modals/Viber/Viber.jsx




function Viber({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.viber.offsetTop;
  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
    onClose: onModalClose,
    containerStyles: (SocialMediaModal_module_default()).container,
    contentStyles: (SocialMediaModal_module_default()).content,
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: data.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: data.text
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/SocialMedia/SocialMedia.jsx



 // styles

 // components








 // icons







function SocialMedia_SocialMedia() {
  const // states
  {
    0: showPhoneModal,
    1: setShowPhoneModal
  } = (0,external_react_.useState)(false),
        {
    0: showFacbookModal,
    1: setShowFacbookModal
  } = (0,external_react_.useState)(false),
        {
    0: showTelegramModal,
    1: setShowTelegramModal
  } = (0,external_react_.useState)(false),
        {
    0: showWatsUpModal,
    1: setShowWatsUpModal
  } = (0,external_react_.useState)(false),
        {
    0: showInstagramModal,
    1: setShowInstagramModal
  } = (0,external_react_.useState)(false),
        {
    0: showViberModal,
    1: setShowViberModal
  } = (0,external_react_.useState)(false),
        socialMediasRef = (0,external_react_.useRef)(),
        // config
  icons = [{
    id: "phone",
    key: Math.random(),
    src: phone.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowPhoneModal(true);
    }
  }, {
    id: "facebook",
    key: Math.random(),
    src: facebook.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowFacbookModal(true);
    }
  }, {
    id: "telegram",
    key: Math.random(),
    src: telegram.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowTelegramModal(true);
    }
  }, {
    id: "watsup",
    key: Math.random(),
    src: watsup.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowWatsUpModal(true);
    }
  }, {
    id: "instagram",
    key: Math.random(),
    src: instagram.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowInstagramModal(true);
    }
  }, {
    id: "viber",
    key: Math.random(),
    src: viber.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowViberModal(true);
    }
  }],
        modal_contents = {
    phone: {
      text: "+34 672 314 808",
      url: "tel:+34672314808"
    },
    facebook: {
      text: "Facebook",
      url: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/"
    },
    telegram: {
      text: "+34 672 314 808",
      url: "https://telegram.me/footbet24com"
    },
    watsup: {
      text: "+34 672 314 808",
      url: "https://api.whatsapp.com/send?phone=+34672314808"
    },
    instagram: {
      text: "Instagram",
      url: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link"
    },
    viber: {
      text: "+34 672 314 808",
      url: "viber://chat?number=+34672314808"
    }
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (SocialMedia_SocialMedia_module_default()).container,
      ref: socialMediasRef,
      children: icons.map(el => /*#__PURE__*/jsx_runtime_.jsx(Icon_Icon, {
        id: el.id,
        src: el.src,
        click: el.click
      }, el.key))
    }), showPhoneModal && /*#__PURE__*/jsx_runtime_.jsx(Phone, {
      onModalClose: () => setShowPhoneModal(false),
      data: modal_contents.phone,
      parent: socialMediasRef
    }), showFacbookModal && /*#__PURE__*/jsx_runtime_.jsx(Facebook, {
      onModalClose: () => setShowFacbookModal(false),
      data: modal_contents.facebook,
      parent: socialMediasRef
    }), showTelegramModal && /*#__PURE__*/jsx_runtime_.jsx(Telegram, {
      onModalClose: () => setShowTelegramModal(false),
      data: modal_contents.telegram,
      parent: socialMediasRef
    }), showWatsUpModal && /*#__PURE__*/jsx_runtime_.jsx(WatsUp, {
      onModalClose: () => setShowWatsUpModal(false),
      data: modal_contents.watsup,
      parent: socialMediasRef
    }), showInstagramModal && /*#__PURE__*/jsx_runtime_.jsx(Instagram, {
      onModalClose: () => setShowInstagramModal(false),
      data: modal_contents.instagram,
      parent: socialMediasRef
    }), showViberModal && /*#__PURE__*/jsx_runtime_.jsx(Viber, {
      onModalClose: () => setShowViberModal(false),
      data: modal_contents.viber,
      parent: socialMediasRef
    })]
  });
}
;// CONCATENATED MODULE: ./public/images/header/footballer.svg
/* harmony default export */ var footballer = ({"src":"/_next/static/image/public/images/header/footballer.7505db6ff2334082e65f57b15504691c.svg","height":600,"width":662});
;// CONCATENATED MODULE: ./components/Header/Header.jsx



// hooks
 //styles

 // components



 // imges


function Header({
  mainsPages
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: mainsPages ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Header_module_default()).header_container_big,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).bar,
        children: [/*#__PURE__*/jsx_runtime_.jsx(SocialMedia_SocialMedia, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Header_module_default()).bar_controler,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Header_module_default()).bar_conteiner,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (Header_module_default()).bar_content,
              children: /*#__PURE__*/jsx_runtime_.jsx(Bar, {
                bar_items_cont: (Header_module_default()).bar_items_cont,
                bar_items: (Header_module_default()).bar_items
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Header_module_default()).footballer,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: footballer.src,
              alt: ""
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(NavBar, {})]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Header_module_default()).header_container_small,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Bar, {}), /*#__PURE__*/jsx_runtime_.jsx(NavBar, {})]
    })
  });
}
;// CONCATENATED MODULE: ./layouts/Main.jsx





function Main({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
      mainsPages: true
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}
;// CONCATENATED MODULE: ./layouts/WithoutPhoto.jsx





function WithoutPhoto_Main({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
      mainsPages: false
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}
;// CONCATENATED MODULE: ./layouts/Register.jsx




function RegisterLayout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
      mainsPages: false
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    })]
  });
}
;// CONCATENATED MODULE: ./layouts/Error.jsx


function Error({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    })
  });
}
;// CONCATENATED MODULE: ./layouts/layout-wrapper.jsx


function layout_wrapper_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function layout_wrapper_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layout_wrapper_ownKeys(Object(source), true).forEach(function (key) { layout_wrapper_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layout_wrapper_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layout_wrapper_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const layouts = {
  main: Main,
  withoutPhoto: WithoutPhoto_Main,
  register: RegisterLayout
};

const LayoutWrapper = props => {
  // to get the text value of the assigned layout of each component
  const Layout = layouts[props.children.type.layout]; // if we have a registered layout render children with said layout

  if (Layout != null) {
    return /*#__PURE__*/jsx_runtime_.jsx(Layout, layout_wrapper_objectSpread(layout_wrapper_objectSpread({}, props), {}, {
      children: props.children
    }));
  } // if not render children with fragment


  return /*#__PURE__*/jsx_runtime_.jsx(Error, layout_wrapper_objectSpread(layout_wrapper_objectSpread({}, props), {}, {
    children: props.children
  }));
};

/* harmony default export */ var layout_wrapper = (LayoutWrapper);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./redux/features/matchSlice.js
var matchSlice = __webpack_require__(7249);
;// CONCATENATED MODULE: external "redux-persist"
var external_redux_persist_namespaceObject = require("redux-persist");;
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
var storage_namespaceObject = require("redux-persist/lib/storage");;
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: ./redux/store.js
// import { createStore } from 'redux'
// export const store = createStore(/*reducer function*/(state, action) => {
//     if (action.type === "login") {
//         return {
//             ...state,
//             currentUser: {
//                 name: action.payload.name
//             }
//         }
//     }
//     return state
// }, {
//     currentUser: {
//         name: 'Erik Muradyan'
//     }
// })





const persistConfig = {
  key: 'root',
  version: 1,
  storage: (storage_default())
};
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, (0,toolkit_.combineReducers)({
  user: userSlice/* default */.ZP,
  match: matchSlice/* default */.ZP
}));
const store = (0,toolkit_.configureStore)({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [external_redux_persist_namespaceObject.FLUSH, external_redux_persist_namespaceObject.REHYDRATE, external_redux_persist_namespaceObject.PAUSE, external_redux_persist_namespaceObject.PERSIST, external_redux_persist_namespaceObject.PURGE, external_redux_persist_namespaceObject.REGISTER]
    }
  })
});
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
var react_namespaceObject = require("redux-persist/integration/react");;
// EXTERNAL MODULE: external "react-beautiful-dnd"
var external_react_beautiful_dnd_ = __webpack_require__(2640);
;// CONCATENATED MODULE: ./pages/_app.js



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const __Page_Next_Translate__ = function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.PersistGate, {
      loading: null,
      persistor: persistor,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "FootBet"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width"
        }), /*#__PURE__*/jsx_runtime_.jsx("script", {
          type: "text/javascript",
          src: "//vk.com/js/api/openapi.js?152"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_wrapper, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      }))]
    })
  });
};

async function getServerSideProps(context) {
  (0,external_react_beautiful_dnd_.resetServerContext)();
  return {
    props: {} // will be passed to the page component as props

  };
}
/* harmony default export */ var _app = (appWithI18n_default()(__Page_Next_Translate__, _app_objectSpread(_app_objectSpread({}, i18n), {}, {
  isLoader: true,
  skipInitialProps: true,
  loadLocaleFrom: (l, n) => __webpack_require__(7655)(`./${l}/${n}`).then(m => m.default)
})));

/***/ }),

/***/ 7249:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vs": function() { return /* binding */ setMatchId; },
/* harmony export */   "zG": function() { return /* binding */ getMatchId; }
/* harmony export */ });
/* unused harmony export matchSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const matchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "user",
  initialState: {
    matchId: null
  },
  reducers: {
    setMatchId: (state, action) => {
      state.matchId = action.payload;
    }
  }
});
const {
  setMatchId
} = matchSlice.actions;
const getMatchId = state => state.match.matchId;
/* harmony default export */ __webpack_exports__["ZP"] = (matchSlice.reducer);

/***/ }),

/***/ 2090:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/images/header/logo.6cdf91faf3ca12a076c5f9628145fc04.svg","height":221,"width":221});

/***/ }),

/***/ 9194:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Ball_container__2Wl1d",
	"ball": "Ball_ball__1SKlM",
	"text_with_ball": "Ball_text_with_ball__7lpHU",
	"top": "Ball_top__QN56G",
	"bottom": "Ball_bottom__2k4q4"
};


/***/ }),

/***/ 8578:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Footer_container__l2D4g",
	"content": "Footer_content__1bpu6",
	"ball": "Footer_ball__2Sl3n"
};


/***/ }),

/***/ 3872:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "List_container__1TpnV",
	"borders": "List_borders__1Rmzb"
};


/***/ }),

/***/ 8953:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Navigation_container__1s3nG",
	"content": "Navigation_content__3NM4A"
};


/***/ }),

/***/ 1493:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PS_container__s4l13",
	"icons": "PS_icons___xHba"
};


/***/ }),

/***/ 2051:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SM_container__2LvDs"
};


/***/ }),

/***/ 3020:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SocialMedia_container__1Tidh",
	"content": "SocialMedia_content__1K6tl",
	"controler": "SocialMedia_controler__khSUQ",
	"social_medias": "SocialMedia_social_medias__UEuCs",
	"payment_systems": "SocialMedia_payment_systems__1WSF5"
};


/***/ }),

/***/ 3471:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Icon_container__2XLct",
	"last_element": "Icon_last_element__1Lh8S"
};


/***/ }),

/***/ 3489:
/***/ (function(module) {

// Exports
module.exports = {
	"bar_container": "Bar_bar_container__37nD9"
};


/***/ }),

/***/ 1369:
/***/ (function(module) {

// Exports
module.exports = {
	"bar_item_container": "BarItems_bar_item_container__1bnOe",
	"auth_container": "BarItems_auth_container__2_5S5",
	"auth_buttons": "BarItems_auth_buttons__2ShpU",
	"sign_up_button": "BarItems_sign_up_button__3_2M5",
	"sign_in_button": "BarItems_sign_in_button__3X-6_",
	"lang_button": "BarItems_lang_button__8jm_g",
	"lang_button_content": "BarItems_lang_button_content__3uy6n",
	"for_mobile": "BarItems_for_mobile__1vOCi"
};


/***/ }),

/***/ 6178:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LanguageDrop_container__26YUM",
	"transition": "LanguageDrop_transition__30cP-",
	"content": "LanguageDrop_content__2V6nF",
	"row": "LanguageDrop_row__16F6_"
};


/***/ }),

/***/ 2792:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Logged_container__xlePM",
	"content": "Logged_content__3cE3O"
};


/***/ }),

/***/ 1267:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LoggedDrop_container__2Q6LP",
	"transition": "LoggedDrop_transition__Qg48i",
	"content": "LoggedDrop_content__EDtbq",
	"user_photo_name": "LoggedDrop_user_photo_name__19gia",
	"user_tel": "LoggedDrop_user_tel__13CAF",
	"logOut": "LoggedDrop_logOut__3eD-y"
};


/***/ }),

/***/ 7860:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LoggedWallper_container__2oRMV",
	"content": "LoggedWallper_content__2M1qT",
	"user_photo": "LoggedWallper_user_photo__1mszp",
	"user_fullName": "LoggedWallper_user_fullName__2WvpF",
	"fullname": "LoggedWallper_fullname__1Gj25"
};


/***/ }),

/***/ 681:
/***/ (function(module) {

// Exports
module.exports = {
	"dropdown": "Dropdown_dropdown__3ABcq",
	"transition": "Dropdown_transition__1fzbO",
	"dropdown_menu": "Dropdown_dropdown_menu__1UmY7",
	"dropdown_list": "Dropdown_dropdown_list__2bG2Y",
	"dropdown_list_items": "Dropdown_dropdown_list_items__2v_vW",
	"dropdown_check": "Dropdown_dropdown_check__30wOn"
};


/***/ }),

/***/ 5289:
/***/ (function(module) {

// Exports
module.exports = {
	"m_container": "Login_m_container__2NKPV",
	"m_content": "Login_m_content__1k8c6",
	"login_container": "Login_login_container__j_L-T"
};


/***/ }),

/***/ 8808:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LoginForm_container__GaiFv",
	"title": "LoginForm_title__3fmjT",
	"inputs": "LoginForm_inputs__3C14x",
	"reset_password": "LoginForm_reset_password__Dp2_F",
	"submit": "LoginForm_submit__3fH8I",
	"to_register_container": "LoginForm_to_register_container__3zZqp",
	"to_register_content": "LoginForm_to_register_content__1CFxa",
	"to_register_text": "LoginForm_to_register_text__1p097"
};


/***/ }),

/***/ 1300:
/***/ (function(module) {

// Exports
module.exports = {
	"m_container": "ForgotPassword_m_container__2BDSe",
	"m_content": "ForgotPassword_m_content__2kH-4",
	"container": "ForgotPassword_container__2jNtG",
	"title": "ForgotPassword_title__1Ih8W",
	"inputs": "ForgotPassword_inputs__19lVt",
	"submit": "ForgotPassword_submit__qzpyr"
};


/***/ }),

/***/ 1766:
/***/ (function(module) {

// Exports
module.exports = {
	"m_container": "GetEmailCode_m_container___qFF-",
	"m_content": "GetEmailCode_m_content__rdAd9",
	"container": "GetEmailCode_container__3tsHd",
	"title": "GetEmailCode_title__2ZWF_",
	"description": "GetEmailCode_description__3ye8R",
	"inputs": "GetEmailCode_inputs__2s369",
	"error_input": "GetEmailCode_error_input__Rt_1d",
	"success_input": "GetEmailCode_success_input__2ppTq",
	"submit": "GetEmailCode_submit__2GRQI"
};


/***/ }),

/***/ 3354:
/***/ (function(module) {

// Exports
module.exports = {
	"m_container": "NewPassword_m_container__1IWHT",
	"m_content": "NewPassword_m_content__2MBjy",
	"container": "NewPassword_container__3syQj",
	"title": "NewPassword_title__1qVZn",
	"inputs": "NewPassword_inputs__3Vz0k",
	"submit": "NewPassword_submit__3kX0O"
};


/***/ }),

/***/ 1320:
/***/ (function(module) {

// Exports
module.exports = {
	"m_container": "Success_m_container__3RLSl",
	"m_content": "Success_m_content__znakk",
	"container": "Success_container__kgppk",
	"title": "Success_title__3PGVP",
	"icon_container": "Success_icon_container__3wPBV"
};


/***/ }),

/***/ 9263:
/***/ (function(module) {

// Exports
module.exports = {
	"conteiner": "SocialMediaIcons_conteiner__22yL_",
	"content": "SocialMediaIcons_content__P_-6G",
	"iconContent": "SocialMediaIcons_iconContent__2f0KL",
	"iconBody": "SocialMediaIcons_iconBody__LWlLD",
	"icon": "SocialMediaIcons_icon__1LUni"
};


/***/ }),

/***/ 5363:
/***/ (function(module) {

// Exports
module.exports = {
	"logo_conatiner": "Logo_logo_conatiner__1buMu"
};


/***/ }),

/***/ 4884:
/***/ (function(module) {

// Exports
module.exports = {
	"header_container_big": "Header_header_container_big__1BhyV",
	"transition": "Header_transition__2hRYo",
	"bar": "Header_bar__C_gX3",
	"bar_controler": "Header_bar_controler__3Rg_i",
	"bar_conteiner": "Header_bar_conteiner__jg900",
	"bar_content": "Header_bar_content__1N0yC",
	"bar_items_cont": "Header_bar_items_cont__1Scwz",
	"bar_items": "Header_bar_items__GvsVw",
	"footballer": "Header_footballer__3SIN6",
	"header_container_small": "Header_header_container_small__379Vk"
};


/***/ }),

/***/ 4877:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Button_container__11zsX",
	"content": "Button_content__viCSW",
	"active": "Button_active__2qGMW"
};


/***/ }),

/***/ 8278:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "NavBar_container__1qJ7Y",
	"content": "NavBar_content__1GQJd",
	"top_on_tablet": "NavBar_top_on_tablet__3EH39",
	"bottom_on_tablet": "NavBar_bottom_on_tablet__eyz9I",
	"tablet": "NavBar_tablet__3LPMm"
};


/***/ }),

/***/ 2476:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Icon_container__34Nf9"
};


/***/ }),

/***/ 8776:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SocialMediaModal_container__3fsXk",
	"content": "SocialMediaModal_content__17FKE"
};


/***/ }),

/***/ 8713:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SocialMedia_container__1-yYo"
};


/***/ }),

/***/ 6048:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Contacts_container__2it0V",
	"content": "Contacts_content__2fdrk",
	"modal_content": "Contacts_modal_content__2Ve_v",
	"content_container": "Contacts_content_container__20coA",
	"top": "Contacts_top__2gTzS",
	"rows": "Contacts_rows__3ZhET",
	"row": "Contacts_row__AiZKj",
	"img": "Contacts_img__dvX-a",
	"text": "Contacts_text__2D9qc",
	"open": "Contacts_open__3CHJ_",
	"rightLeft": "Contacts_rightLeft__2rlb8",
	"close": "Contacts_close__Vi7g7"
};


/***/ }),

/***/ 8819:
/***/ (function() {



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

/***/ 2640:
/***/ (function(module) {

"use strict";
module.exports = require("react-beautiful-dnd");;

/***/ }),

/***/ 2268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1276,123,9452,9122,7152,8617], function() { return __webpack_exec__(9853); });
module.exports = __webpack_exports__;

})();