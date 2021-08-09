exports.id = 7674;
exports.ids = [7674];
exports.modules = {

/***/ 7674:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": function() { return /* binding */ Testimonials; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(8841);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "react-elastic-carousel"
var external_react_elastic_carousel_ = __webpack_require__(3983);
var external_react_elastic_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_elastic_carousel_);
// EXTERNAL MODULE: ./components/Pages/common/Title/Title.jsx
var Title = __webpack_require__(7061);
// EXTERNAL MODULE: ./public/images/main/news/arrowRight.png
var arrowRight = __webpack_require__(7715);
// EXTERNAL MODULE: ./public/images/main/news/arrowLeft.png
var arrowLeft = __webpack_require__(8318);
// EXTERNAL MODULE: ./components/Pages/common/Testimonials/Arrows/Arrow.module.scss
var Arrow_module = __webpack_require__(3715);
var Arrow_module_default = /*#__PURE__*/__webpack_require__.n(Arrow_module);
;// CONCATENATED MODULE: ./components/Pages/common/Testimonials/Arrows/Arrow.jsx

 // icons




function Arrow({
  type,
  onClick,
  isEdge
}) {
  const pointer = type === external_react_elastic_carousel_.consts.PREV ? /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: arrowLeft/* default.src */.Z.src,
    className: (Arrow_module_default()).arrowLeft,
    alt: "arrow-left"
  }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: arrowRight/* default.src */.Z.src,
    className: (Arrow_module_default()).arrowRight,
    alt: "arrow-right"
  }),
        styles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '35px' // padding: '10%'

  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    onClick: onClick,
    disabled: isEdge,
    style: styles,
    children: pointer
  });
}
// EXTERNAL MODULE: ./components/Pages/common/Testimonials/FeedBack/LikeDislikeDrop/LikeDislikeDrop.module.scss
var LikeDislikeDrop_module = __webpack_require__(1443);
var LikeDislikeDrop_module_default = /*#__PURE__*/__webpack_require__.n(LikeDislikeDrop_module);
;// CONCATENATED MODULE: ./public/images/main/feedbacks/like.png
/* harmony default export */ var like = ({"src":"/_next/static/image/public/images/main/feedbacks/like.1432d8d4c07437b9467c5259eb94b1dc.png","height":31,"width":29,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAXElEQVR42jXLrQrCAABG0U+H1SA2w6JWsYk/yWYQBJVhWdjCGOz9y2Fh7OR7MzG4JYpYJtae7pk5uKoclfHw0Vs5OWvibaucKq/Mj0Wijktio0js/KLz1av8tfYj64EumOLFM3wAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/main/feedbacks/dislike.png
/* harmony default export */ var dislike = ({"src":"/_next/static/image/public/images/main/feedbacks/dislike.83cc76247dd473ab2bb375fce25b931f.png","height":32,"width":30,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42j3LsQsBAQCF8ae4FLOwmGQQmUyXQclww4nhJkphtPvnf5HhXm/4vuGLQuXirHZ3dYtSbWBsap6o4mWUdvbxaGWm0MTT2kbfwsfJMSZWGjuVXltaOigTXZ38HkNv2/z5C9U+N2z0rGAnAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/main/feedbacks/avatar.png
/* harmony default export */ var avatar = ({"src":"/_next/static/image/public/images/main/feedbacks/avatar.be06bdc05430f5cdcfb84f7a9e542113.png","height":75,"width":76,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAcElEQVR42h2GvQnCABQGv0n8I06g8+gYOo222lgIWoqkExEbcYZokeS+AfLyCAd3J4vCJZHcmVnyxH+CFet0xUicHTwsxDPvJFpHzs77obWA4MKGLVeCRpR8LJL0l5uY8uPAgqWPVIyFmPOmS14UqAdtymH3TfFz0QAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/Pages/common/Testimonials/FeedBack/LikeDislikeDrop/LikeDislikeDrop.jsx


 // icons 




function LikeDislikeDrop({
  data = []
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (LikeDislikeDrop_module_default()).container,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (LikeDislikeDrop_module_default()).content,
      children: data.map(el => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (LikeDislikeDrop_module_default()).row,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: avatar.src,
          alt: "avatar",
          className: (LikeDislikeDrop_module_default()).avatar
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (LikeDislikeDrop_module_default()).user_part,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: el.username
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: el.reaction ? like.src : dislike.src,
            alt: "reaction"
          })]
        })]
      }))
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/common/Testimonials/FeedBack/FeedBack.module.scss
var FeedBack_module = __webpack_require__(6682);
var FeedBack_module_default = /*#__PURE__*/__webpack_require__.n(FeedBack_module);
;// CONCATENATED MODULE: ./public/images/main/feedbacks/filledStar.png
/* harmony default export */ var filledStar = ({"src":"/_next/static/image/public/images/main/feedbacks/filledStar.b44aa812dcbf9eb14e64af6c8e7279b3.png","height":26,"width":28,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAhUlEQVR42mP4d9qIEYhZGYDg3xljPSA2ZwACoBgbEDMxIAOgQCsQz0EXNADiTCAOAuLb/84YvQHSoUCcAcQWIAVCQDwbiP//O238H2jFHxAbiFcCsRSySX1ASaACsOQyVGtO6DMBBW8A8QogngnEz4AKeeEKgBxtoGAukmmpQGzJwMDAAAAUDl1k5bO5eAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/main/feedbacks/unfilledStar.png
/* harmony default export */ var unfilledStar = ({"src":"/_next/static/image/public/images/main/feedbacks/unfilledStar.26105c5d4e7834de797ed734505ee2bf.png","height":26,"width":28,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAfklEQVR42l2NsQqDQBBENyF6TVIGUqZNFxCLEwWxUBHB3kYL8Tc9f2zx2S0uPGZnuJsVDe6mIX4IoyH6s3thlAzuYodggPESuoSw1s3l7AVkusUlWoE/f31gwZSmyeNX9Gvre3jqHjm0u95+wQQtNDDT8LYPfgSz8SM+FRE5AIwvR0qDJC/mAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/Pages/common/Testimonials/FeedBack/FeedBack.jsx


//hooks 
 // components

 // styles

 // icons





function FeedBack({
  avatar,
  nikName,
  rateing,
  description,
  date,
  likes,
  disLikes,
  reactionsForTesting
}) {
  const stars = [0, 1, 2, 3, 4],
        {
    0: showReactions,
    1: setShowReactions
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (FeedBack_module_default()).container,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (FeedBack_module_default()).top,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (FeedBack_module_default()).avatar,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: avatar,
          alt: nikName
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: nikName
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (FeedBack_module_default()).rateing,
        children: stars.map((el, i) => el < rateing ? /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: filledStar.src,
          alt: "star"
        }, Math.random()) : /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: unfilledStar.src,
          alt: "star"
        }, Math.random()))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (FeedBack_module_default()).bottom,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (FeedBack_module_default()).bottom_content,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (FeedBack_module_default()).description,
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: description
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (FeedBack_module_default()).date_likes_container,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (FeedBack_module_default()).date,
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: date
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (FeedBack_module_default()).likes_dislikes,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (FeedBack_module_default()).like,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: like.src,
                alt: "like"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: likes
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (FeedBack_module_default()).vertical_border,
              onClick: () => setShowReactions(!showReactions)
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (FeedBack_module_default()).disLike,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: dislike.src,
                alt: "dislike"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: disLikes
              })]
            }), showReactions && /*#__PURE__*/jsx_runtime_.jsx(LikeDislikeDrop, {
              data: reactionsForTesting
            })]
          })]
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/Pages/common/Testimonials/feed_back_data.js
//icons

const feedback_data = [// each array are new page
[{
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 5
}, {
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 2,
  description: "Lorem ipsum dolor sit amet, consectete et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "15.07.2021",
    sortFormat: new Date("2021-07-15")
  },
  likes: 1,
  disLikes: 3
}, {
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 3,
  description: "Lorem ipsum dolor sit amet, consectete et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "01.06.2021",
    sortFormat: new Date("2021-06-01")
  },
  likes: 1,
  disLikes: 5
}], [{
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 5
}, {
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 5,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 0
}, {
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 1,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "02.04.2021",
    sortFormat: new Date("2021-04-02")
  },
  likes: 0,
  disLikes: 5
}], [{
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 5
}, {
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 5,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 0
}, {
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 1,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "02.04.2021",
    sortFormat: new Date("2021-04-02")
  },
  likes: 0,
  disLikes: 5
}], [{
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 5
}, {
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 5,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "13.07.2021",
    sortFormat: new Date("2021-07-13")
  },
  likes: 0,
  disLikes: 0
}, {
  avatar: avatar.src,
  nikName: "Lorem ipsum",
  rateing: 1,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
  date: {
    renderFormat: "02.04.2021",
    sortFormat: new Date("2021-04-02")
  },
  likes: 0,
  disLikes: 5
}]];
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2166);
// EXTERNAL MODULE: ./components/Pages/common/Testimonials/LeaveComment/LeaveComment.module.scss
var LeaveComment_module = __webpack_require__(3164);
var LeaveComment_module_default = /*#__PURE__*/__webpack_require__.n(LeaveComment_module);
;// CONCATENATED MODULE: ./components/Pages/common/Testimonials/LeaveComment/LeaveComment.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks and helpers




 // styles

 // icons



function LeaveComment() {
  const // states consts
  stars = [0, 1, 2, 3, 4],
        {
    0: simulator,
    1: setSimulator
  } = (0,external_react_.useState)(0),
        // translation consfigs
  {
    t
  } = useTranslation_default()('common'),
        translationPath = 'commons.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
  schema = external_yup_.object().shape({
    comment: external_yup_.string()
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
        submit = data => console.log(data, {
    rate: simulator
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (LeaveComment_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (LeaveComment_module_default()).stars_container,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (LeaveComment_module_default()).stars_content,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (LeaveComment_module_default()).stars_area,
          children: stars.map(el => simulator > el ? /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: filledStar.src,
            alt: "",
            onClick: () => setSimulator(el)
          }, (el + 1) * Math.random()) : /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: unfilledStar.src,
            alt: "",
            onClick: () => setSimulator(el + 1)
          }, (el + 1) * Math.random()))
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handleSubmit(submit),
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (LeaveComment_module_default()).textarea_container,
        children: /*#__PURE__*/jsx_runtime_.jsx("textarea", _objectSpread(_objectSpread({}, register('comment')), {}, {
          id: "comment",
          cols: "30",
          rows: "7",
          placeholder: translate('placeHolder')
        }))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (LeaveComment_module_default()).button_container,
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          children: translate('send')
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/Pages/common/Testimonials/Pagination/Pagination.module.scss
var Pagination_module = __webpack_require__(5773);
var Pagination_module_default = /*#__PURE__*/__webpack_require__.n(Pagination_module);
;// CONCATENATED MODULE: ./components/Pages/common/Testimonials/Pagination/Pagination.jsx



function Pagination({
  pages,
  activePage,
  onClick
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Pagination_module_default()).container,
      children: pages.map(el => {
        const isActivePage = activePage === el;
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: () => onClick(el),
          active: isActivePage ? 'true' : 'false',
          className: `${(Pagination_module_default()).round} ${isActivePage && (Pagination_module_default()).active}`
        }, el);
      })
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/common/Testimonials/Sorting/Sorting.module.scss
var Sorting_module = __webpack_require__(8406);
var Sorting_module_default = /*#__PURE__*/__webpack_require__.n(Sorting_module);
;// CONCATENATED MODULE: ./components/Pages/common/Testimonials/Sorting/Sorting.jsx


// styles


function Sorting({
  sortingText,
  dateSortingText,
  rateSorting,
  sortByDate,
  sortByRate,
  dateActive
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Sorting_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Sorting_module_default()).name,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: sortingText
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Sorting_module_default()).bar,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: `${(Sorting_module_default()).byDate} ${dateActive ? (Sorting_module_default()).active : null}`,
        onClick: sortByDate,
        children: dateSortingText
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        onClick: sortByRate,
        className: !dateActive ? (Sorting_module_default()).active : null,
        children: rateSorting
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/Pages/common/Testimonials/Testimonials.module.scss
var Testimonials_module = __webpack_require__(1242);
var Testimonials_module_default = /*#__PURE__*/__webpack_require__.n(Testimonials_module);
// EXTERNAL MODULE: ./lib/er.lib.js
var er_lib = __webpack_require__(955);
// EXTERNAL MODULE: ./lib/request-destinations.js + 1 modules
var request_destinations = __webpack_require__(9541);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/features/matchSlice.js
var matchSlice = __webpack_require__(7249);
;// CONCATENATED MODULE: ./components/Pages/common/Testimonials/Testimonials.jsx



// hooks and helpers

 // components








 // styles







function Testimonials({
  page,
  locationInPage,
  textPathName
}) {
  const matchId = (0,external_react_redux_.useSelector)(matchSlice/* getMatchId */.zG);
  const // states
  {
    0: feedBacks,
    1: setFeedBacks
  } = (0,external_react_.useState)([]),
        {
    0: dateActive,
    1: setDateActive
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    if (matchId !== null) {
      (0,er_lib/* request */.WY)((0,request_destinations/* GET_FEEDBACK */.mZ)(matchId)).then(predictions => {
        setFeedBacks(predictions.data.data.map(feedBack => ({
          avatar: avatar.src,
          nikName: "Lorem ipsum",
          rateing: feedBack.stars,
          description: feedBack.comment,
          date: {
            renderFormat: "13.07.2021",
            sortFormat: new Date("2021-07-13")
          },
          likes: +feedBack.likeCount,
          disLikes: +feedBack.dislikeCount
        })));
      }).catch(err => {
        console.log(err);
      });
    }
  }, [matchId]);

  const {
    t
  } = useTranslation_default()(`home`),
        translationPath = 'testimonials.sorting.',
        translate = key => t(`${translationPath}${key}`); // function for sorting


  const sorting = (toSort, sortingBy, dateActive) => {
    let dataForSorting = toSort.reduce((ac, el) => ac.concat(el)),
        sortedData = [],
        sorted = [];
    if (sortingBy === "date") sorted = dataForSorting.sort((a, b) => b.date.sortFormat - a.date.sortFormat);else if (sortingBy === "rate") sorted = dataForSorting.sort((a, b) => b.rateing - a.rateing);

    for (let i = 1; i <= Math.ceil(dataForSorting.length / 3); i++) {
      let sortedItems = [];
      sorted.forEach((el, x) => {
        x < i * 3 && x >= i * 3 - 3 && sortedItems.push(el);
      });
      sortedData.push(sortedItems);
    }

    setFeedBacks(sortedData);
    setDateActive(dateActive);
  }; // Artificial reactions data 


  const reactions = [{
    username: "Lorem Ipsum",
    reaction: true
  }, {
    username: "Lorem Ipsum",
    reaction: false
  }, {
    username: "Lorem Ipsum",
    reaction: true
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: feedBacks && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Testimonials_module_default()).container,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
        page: page,
        textPathName: textPathName,
        locationInPage: locationInPage
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Testimonials_module_default()).feed_backs_container,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Sorting, {
          sortingText: translate("sort"),
          dateSortingText: translate("byDate"),
          rateSorting: translate("byRate"),
          sortByDate: () => {
            sorting(feedBacks, "date", true);
          },
          sortByRate: () => {
            sorting(feedBacks, "rate", false);
          },
          dateActive: dateActive
        }), /*#__PURE__*/jsx_runtime_.jsx((external_react_elastic_carousel_default()), {
          renderArrow: Arrow,
          renderPagination: Pagination,
          itemsToShow: 1,
          itemsToScroll: 1,
          className: (Testimonials_module_default()).carousel,
          children: feedBacks.map(el => /*#__PURE__*/jsx_runtime_.jsx("div", {
            style: {
              width: '100%'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(FeedBack, {
              avatar: el.avatar,
              nikName: el.nikName,
              rateing: el.rateing,
              description: el.description,
              date: el.date.renderFormat,
              likes: el.likes,
              disLikes: el.disLikes,
              reactionsForTesting: reactions
            }, Math.random())
          }, Math.random()))
        }), /*#__PURE__*/jsx_runtime_.jsx(LeaveComment, {})]
      })]
    })
  });
}

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

/***/ 3715:
/***/ (function(module) {

// Exports
module.exports = {
	"arrowLeft": "Arrow_arrowLeft__1XzbJ",
	"arrowRight": "Arrow_arrowRight__20aI5"
};


/***/ }),

/***/ 6682:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "FeedBack_container__2cCLW",
	"top": "FeedBack_top__2Ihqj",
	"avatar": "FeedBack_avatar__3C00c",
	"rateing": "FeedBack_rateing__1viHO",
	"bottom": "FeedBack_bottom__3Lkrj",
	"bottom_content": "FeedBack_bottom_content__3uJoo",
	"description": "FeedBack_description__13_Hn",
	"date_likes_container": "FeedBack_date_likes_container__PXkdx",
	"date": "FeedBack_date__28cgU",
	"vertical_border": "FeedBack_vertical_border__4JLbW",
	"likes_dislikes": "FeedBack_likes_dislikes__3TA_D",
	"like": "FeedBack_like___TiIr",
	"disLike": "FeedBack_disLike__dTh0f"
};


/***/ }),

/***/ 1443:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LikeDislikeDrop_container__1CW76",
	"transition": "LikeDislikeDrop_transition__lxZtS",
	"content": "LikeDislikeDrop_content__9Y_1e",
	"row": "LikeDislikeDrop_row__1IL4A",
	"avatar": "LikeDislikeDrop_avatar__8Iz4z",
	"user_part": "LikeDislikeDrop_user_part__2cy98"
};


/***/ }),

/***/ 3164:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LeaveComment_container__2is6f",
	"stars_container": "LeaveComment_stars_container__3oukj",
	"stars_content": "LeaveComment_stars_content__25vFA",
	"stars_area": "LeaveComment_stars_area__XNaIN",
	"textarea_container": "LeaveComment_textarea_container__38wG3",
	"button_container": "LeaveComment_button_container__2mOnf"
};


/***/ }),

/***/ 5773:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Pagination_container__OU_ZR",
	"round": "Pagination_round__3bheV",
	"active": "Pagination_active__2Cfbv"
};


/***/ }),

/***/ 8406:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Sorting_container__2Lhv8",
	"name": "Sorting_name__3soQ8",
	"bar": "Sorting_bar__1mbHD",
	"byDate": "Sorting_byDate__3_Bz-",
	"active": "Sorting_active__3a1aL"
};


/***/ }),

/***/ 1242:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Testimonials_container__3LArP",
	"feed_backs_container": "Testimonials_feed_backs_container__395hk",
	"carousel": "Testimonials_carousel__2rrVV"
};


/***/ })

};
;