(function() {
var exports = {};
exports.id = 4122;
exports.ids = [4122];
exports.modules = {

/***/ 7363:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ personal; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(1900);
// EXTERNAL MODULE: external "next-translate/loadNamespaces"
var loadNamespaces_ = __webpack_require__(8404);
var loadNamespaces_default = /*#__PURE__*/__webpack_require__.n(loadNamespaces_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/features/userSlice.js
var userSlice = __webpack_require__(246);
// EXTERNAL MODULE: ./components/Pages/common/Title/Title.jsx
var Title = __webpack_require__(7061);
// EXTERNAL MODULE: ./components/Pages/Personal/Content/Content.module.scss
var Content_module = __webpack_require__(6814);
var Content_module_default = /*#__PURE__*/__webpack_require__.n(Content_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(8841);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: ./components/Pages/Personal/Content/PurchasedGames/PGSButton/PGSButton.module.scss
var PGSButton_module = __webpack_require__(1053);
var PGSButton_module_default = /*#__PURE__*/__webpack_require__.n(PGSButton_module);
;// CONCATENATED MODULE: ./components/Pages/Personal/Content/PurchasedGames/PGSButton/PGSButton.jsx

// hooks and helpers
 // styles


function PGSButton({
  active,
  click
}) {
  const // translations
  {
    t
  } = useTranslation_default()('personal'),
        translationPath = 'board.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (PGSButton_module_default()).container,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (PGSButton_module_default()).content,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: active ? (PGSButton_module_default()).active : undefined,
        onClick: click,
        children: translate('PGButton')
      })
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Personal/Content/PurchasedGames/Board/Row/Row.module.scss
var Row_module = __webpack_require__(8968);
var Row_module_default = /*#__PURE__*/__webpack_require__.n(Row_module);
;// CONCATENATED MODULE: ./components/Pages/Personal/Content/PurchasedGames/Board/Row/Row.jsx


// translation 
 // styles 


function Row({
  order,
  teamOneName,
  teamOneIcon,
  teamTwoName,
  teamTwoIcon,
  prediction,
  date,
  score,
  price
}) {
  const // translation consfigs
  {
    t
  } = useTranslation_default()('personal'),
        translationPath = `board.headers.`,
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Row_module_default()).container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Row_module_default()).content,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Row_module_default()).left,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Row_module_default()).leftItems,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: (Row_module_default()).order,
            children: [order, "."]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Row_module_default()).teamOne,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Row_module_default()).leftItems,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: teamOneName
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Row_module_default()).leftItems,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: teamOneIcon,
              alt: ""
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Row_module_default()).leftItems,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Row_module_default()).vs,
            children: "VS."
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Row_module_default()).teamTwo,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Row_module_default()).leftItems,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: teamTwoName
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Row_module_default()).leftItems,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: teamTwoIcon,
              alt: ""
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Row_module_default()).right,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Row_module_default()).prediction,
          children: prediction.thereIs ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Row_module_default()).prediction_content,
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (Row_module_default()).prediction_title,
              children: translate('prediction')
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: (Row_module_default()).prediction_body,
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: prediction.totalBet
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: prediction.coefficent
              })]
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Row_module_default()).simulator
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Row_module_default()).date_time,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Row_module_default()).tablet_score,
            children: score
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Row_module_default()).date,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: date
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Row_module_default()).score,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: score
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Row_module_default()).price,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Row_module_default()).price_title,
            children: translate('price')
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: price
          })]
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Personal/Content/PurchasedGames/Board/BoardHeader/BoardHeader.module.scss
var BoardHeader_module = __webpack_require__(3368);
var BoardHeader_module_default = /*#__PURE__*/__webpack_require__.n(BoardHeader_module);
;// CONCATENATED MODULE: ./components/Pages/Personal/Content/PurchasedGames/Board/BoardHeader/BoardHeader.jsx


// styles
 // translations


function BoardHeader() {
  const // translation consfigs
  {
    t
  } = useTranslation_default()('personal'),
        translationPath = 'board.headers.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (BoardHeader_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (BoardHeader_module_default()).for_tablets,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: translate('gamesHistory')
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (BoardHeader_module_default()).right,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: translate('prediction')
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: translate('date')
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: translate('score')
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: translate('price')
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./public/images/games/atletico.png
var atletico = __webpack_require__(6271);
// EXTERNAL MODULE: ./public/images/games/atletic.png
var atletic = __webpack_require__(7711);
// EXTERNAL MODULE: ./public/images/main/matches/barca.png
var barca = __webpack_require__(7115);
// EXTERNAL MODULE: ./public/images/main/matches/marcel.png
var marcel = __webpack_require__(5589);
// EXTERNAL MODULE: ./public/images/main/matches/psj.png
var psj = __webpack_require__(9570);
// EXTERNAL MODULE: ./public/images/main/matches/rennais.png
var rennais = __webpack_require__(7199);
;// CONCATENATED MODULE: ./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PG_board.js
// icons






const PG_board = [{
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Барселона',
  teamOneIcon: barca/* default.src */.Z.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: psj/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Марсель',
  teamOneIcon: marcel/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: rennais/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: true,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  score: '1:0',
  price: '1500 руб.'
}];
// EXTERNAL MODULE: ./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PGBoard.module.scss
var PGBoard_module = __webpack_require__(7248);
var PGBoard_module_default = /*#__PURE__*/__webpack_require__.n(PGBoard_module);
;// CONCATENATED MODULE: ./components/Pages/Personal/Content/PurchasedGames/Board/PGBoard/PGBoard.jsx





 // styles 


function PGBoard({
  show
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: show && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (PGBoard_module_default()).container,
      children: [/*#__PURE__*/jsx_runtime_.jsx(BoardHeader, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (PGBoard_module_default()).board,
        children: PG_board.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(Row, {
          order: i + 1,
          teamOneName: el.teamOneName,
          teamOneIcon: el.teamOneIcon,
          teamTwoName: el.teamTwoName,
          teamTwoIcon: el.teamTwoIcon,
          prediction: el.prediction,
          date: el.date,
          score: el.score,
          price: el.price
        }, Math.random()))
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Pages/Personal/Content/PurchasedGames/PurchasedGames.jsx





function PurchasedGames() {
  const // states
  {
    0: showboardState,
    1: setShowBoardState
  } = (0,external_react_.useState)(false);
  return (
    /*#__PURE__*/
    // container for grid right working
    (0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(PGSButton, {
        active: showboardState,
        click: () => setShowBoardState(!showboardState)
      }), /*#__PURE__*/jsx_runtime_.jsx(PGBoard, {
        show: showboardState
      })]
    })
  );
}
// EXTERNAL MODULE: ./src/user/user.js + 1 modules
var user = __webpack_require__(2483);
// EXTERNAL MODULE: ./components/Pages/Personal/Content/UserInfo/UserInfo.module.scss
var UserInfo_module = __webpack_require__(5347);
var UserInfo_module_default = /*#__PURE__*/__webpack_require__.n(UserInfo_module);
;// CONCATENATED MODULE: ./public/images/personal/user-input.svg
/* harmony default export */ var user_input = ({"src":"/_next/static/image/public/images/personal/user-input.9b699033c74d21ed0f90599aa152d6c2.svg","height":35,"width":35});
;// CONCATENATED MODULE: ./public/images/personal/unknown.svg
/* harmony default export */ var unknown = ({"src":"/_next/static/image/public/images/personal/unknown.4899a9c93341e88f18d51aca60dbdac6.svg","height":426,"width":445});
;// CONCATENATED MODULE: ./public/images/personal/calendar.svg
/* harmony default export */ var calendar = ({"src":"/_next/static/image/public/images/personal/calendar.92390daa8d9361efe10e85d7274103a9.svg","height":35,"width":35});
;// CONCATENATED MODULE: ./public/images/personal/mail.svg
/* harmony default export */ var mail = ({"src":"/_next/static/image/public/images/personal/mail.ca8d4b73aa518e4f4279d93e1f0f4c54.svg","height":35,"width":35});
;// CONCATENATED MODULE: ./public/images/personal/phone.svg
/* harmony default export */ var phone = ({"src":"/_next/static/image/public/images/personal/phone.2992b0c1f9b3241a195eaeff4c0bbfbe.svg","height":35,"width":35});
;// CONCATENATED MODULE: ./public/images/personal/key.svg
/* harmony default export */ var key = ({"src":"/_next/static/image/public/images/personal/key.35e68c9e4a7b59981796ce2b7ea8101b.svg","height":17,"width":17});
;// CONCATENATED MODULE: ./public/images/personal/change.png
/* harmony default export */ var change = ({"src":"/_next/static/image/public/images/personal/change.36d328d1215223956a73f4e6d3961939.png","height":35,"width":35,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42mMAgY+v3rB8//xZ5O+fPxKf376T+f//PxcDDHwCSgIFRIBY6N///5JAmuPojMWOZ5atN2QAAaAA390TZzXXBOaVbM9vDdpe1hG+SCVk55HpixyBcpwgBTx72if77KjqDgZKhs1lcP2/raw9HGQSyDqQAt69nVO9TyxYabmnc4ovUDJsG9AkoLgEyE0MIJVHpi90WROWX3liwSrLHdXdwSDrQG76/vmLCEgB84/PXyQPT1vosrdzmjfQOt87R09pgxz+8dVrFphDmUEmgdwDxXwwSQDbTpYoqRWuLQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/personal/camera.svg
/* harmony default export */ var camera = ({"src":"/_next/static/image/public/images/personal/camera.6c53ccfa415583cd5cb7ac5bba72efdf.svg","height":75,"width":75});
;// CONCATENATED MODULE: ./components/Pages/Personal/Content/UserInfo/UserInfo.jsx




 // styles 

 // icons 









function UserInfo() {
  const // states
  {
    0: changeName,
    1: setChangeName
  } = (0,external_react_.useState)(false),
        {
    0: changeDate,
    1: setChangeDate
  } = (0,external_react_.useState)(false),
        {
    0: changePhone,
    1: setChangePhone
  } = (0,external_react_.useState)(false),
        {
    0: changeEmail,
    1: setChangeEmail
  } = (0,external_react_.useState)(false),
        {
    0: userPhoto,
    1: setUserPhoto
  } = (0,external_react_.useState)(user/* user_data.photo */.g.photo),
        {
    t
  } = useTranslation_default()('personal');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (UserInfo_module_default()).container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (UserInfo_module_default()).content,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (UserInfo_module_default()).user_photo_content,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          htmlFor: "user_photo",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: userPhoto ? userPhoto : unknown.src,
              className: (UserInfo_module_default()).user_photo,
              alt: "icon"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: camera.src,
            alt: "icon",
            className: (UserInfo_module_default()).cameraIcon
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "file",
          id: "user_photo",
          style: {
            display: 'none'
          },
          onChange: e => {
            e.target.files.length !== 0 && setUserPhoto(URL.createObjectURL(e.target.files[0]));
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (UserInfo_module_default()).inputs_content,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (UserInfo_module_default()).info_input,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: user_input.src,
              alt: "icon"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              style: !changeName ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: user/* user_data.fullName */.g.fullName
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              placeholder: user/* user_data.fullName */.g.fullName,
              type: "text",
              style: changeName ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: e => user/* user_data.fullName */.g.fullName = e.target.value
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: change.src,
              alt: "",
              onClick: () => setChangeName(!changeName)
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (UserInfo_module_default()).info_input,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: calendar.src,
              alt: ""
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              style: !changeDate ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: user/* user_data.birthDate */.g.birthDate
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              placeholder: user/* user_data.birthDate */.g.birthDate,
              type: "date",
              style: changeDate ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: e => user/* user_data.birthDate */.g.birthDate = e.target.value
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: change.src,
              alt: "",
              onClick: () => setChangeDate(!changeDate)
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (UserInfo_module_default()).info_input,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: phone.src,
              alt: ""
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              style: !changePhone ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: user/* user_data.telephone */.g.telephone
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              placeholder: user/* user_data.telephone */.g.telephone,
              type: "text",
              style: changePhone ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: e => user/* user_data.telephone */.g.telephone = e.target.value
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: change.src,
              alt: "",
              onClick: () => setChangePhone(!changePhone)
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (UserInfo_module_default()).info_input,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: mail.src,
              alt: ""
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              style: !changeEmail ? {
                display: 'block'
              } : {
                display: 'none'
              },
              children: user/* user_data.email */.g.email
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              placeholder: user/* user_data.email */.g.email,
              type: "text",
              style: changeEmail ? {
                display: 'block'
              } : {
                display: 'none'
              },
              onChange: e => user/* user_data.email */.g.email = e.target.value
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: change.src,
              alt: "icon",
              onClick: () => setChangeEmail(!changeEmail)
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (UserInfo_module_default()).changePassword,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: key.src,
              alt: ""
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              placeholder: t('board.headers.changePassword'),
              type: "password" // onChange={(e) => user_data.email = e.target.value}

            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: change.src,
              alt: "icon",
              onClick: () => setChangeEmail(!changeEmail)
            })
          })]
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Pages/Personal/Content/Content.jsx


// styles
 // components



function Content() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Content_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(UserInfo, {}), /*#__PURE__*/jsx_runtime_.jsx(PurchasedGames, {})]
  });
}
// EXTERNAL MODULE: ./components/Pages/Personal/Personal.module.scss
var Personal_module = __webpack_require__(6218);
var Personal_module_default = /*#__PURE__*/__webpack_require__.n(Personal_module);
;// CONCATENATED MODULE: ./components/Pages/Personal/Personal.jsx


// components



 // styles 


function Personal() {
  const user_info = (0,external_react_redux_.useSelector)(userSlice/* selectUser */.dy);
  console.log(user_info);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Personal_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
      page: "personal",
      textPathName: "title"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Personal_module_default()).content,
      children: /*#__PURE__*/jsx_runtime_.jsx(Content, {})
    })]
  });
}
;// CONCATENATED MODULE: ./pages/personal.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const PersonalPage = () => /*#__PURE__*/jsx_runtime_.jsx(Personal, {});

PersonalPage.layout = "withoutPhoto";
/* harmony default export */ var personal = (PersonalPage);
async function getStaticProps(ctx) {
  return {
    props: _objectSpread({}, await loadNamespaces_default()(_objectSpread(_objectSpread(_objectSpread({}, ctx), {}, {
      pathname: '/personal',
      loaderName: 'getStaticProps'
    }, i18n), {}, {
      loadLocaleFrom: (l, n) => __webpack_require__(7655)(`./${l}/${n}`).then(m => m.default)
    })))
  };
}

/***/ }),

/***/ 6814:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Content_container__2wKLJ"
};


/***/ }),

/***/ 3368:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "BoardHeader_container__38CLl",
	"left": "BoardHeader_left__2GFtD",
	"right": "BoardHeader_right__1HLFJ",
	"for_tablets": "BoardHeader_for_tablets__3pVwD"
};


/***/ }),

/***/ 7248:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PGBoard_container__3YeZA",
	"transition": "PGBoard_transition__G7iq7",
	"board": "PGBoard_board__XRbr8"
};


/***/ }),

/***/ 8968:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Row_container__1AtqE",
	"content": "Row_content__eG5MH",
	"left": "Row_left__7K_20",
	"vs": "Row_vs__2qNyd",
	"teamOne": "Row_teamOne__fvdbm",
	"teamTwo": "Row_teamTwo__2h9VA",
	"order": "Row_order__3Y_fK",
	"right": "Row_right__35164",
	"prediction": "Row_prediction__1P8lA",
	"prediction_content": "Row_prediction_content__Ff0BN",
	"prediction_title": "Row_prediction_title__2GMXM",
	"prediction_body": "Row_prediction_body__1yZV9",
	"simulator": "Row_simulator__3cN7h",
	"date_time": "Row_date_time__2kxgr",
	"date": "Row_date__3W5zE",
	"time": "Row_time__3xDD6",
	"tablet_score": "Row_tablet_score__YswVs",
	"score": "Row_score__3B5u6",
	"price": "Row_price__2dVjw",
	"price_title": "Row_price_title__2PFEt"
};


/***/ }),

/***/ 1053:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PGSButton_container__IjuZQ",
	"content": "PGSButton_content__1VtHa",
	"active": "PGSButton_active__2Dz-1"
};


/***/ }),

/***/ 5347:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "UserInfo_container__3q8jC",
	"content": "UserInfo_content__2ztqc",
	"user_photo_content": "UserInfo_user_photo_content__3tQFX",
	"user_photo": "UserInfo_user_photo__1GbUS",
	"cameraIcon": "UserInfo_cameraIcon__LHnyr",
	"inputs_content": "UserInfo_inputs_content__21Sj7",
	"info_input": "UserInfo_info_input__2D72L",
	"changePassword": "UserInfo_changePassword__10R88"
};


/***/ }),

/***/ 6218:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Personal_container__1gg9T",
	"content": "Personal_content__1iVNz"
};


/***/ }),

/***/ 6139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

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

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1276,123,3310,7164,4208,7879], function() { return __webpack_exec__(7363); });
module.exports = __webpack_exports__;

})();