(() => {
var exports = {};
exports.id = 8451;
exports.ids = [8451];
exports.modules = {

/***/ 8393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ games),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(608);
// EXTERNAL MODULE: external "next-translate/loadNamespaces"
var loadNamespaces_ = __webpack_require__(8404);
var loadNamespaces_default = /*#__PURE__*/__webpack_require__.n(loadNamespaces_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/Pages/Games/Games.module.scss
var Games_module = __webpack_require__(4950);
var Games_module_default = /*#__PURE__*/__webpack_require__.n(Games_module);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(8841);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: ./components/Pages/common/Title/Title.jsx
var Title = __webpack_require__(4587);
// EXTERNAL MODULE: ./components/Pages/common/Button/Button.jsx
var Button = __webpack_require__(8857);
// EXTERNAL MODULE: ./components/Pages/Games/Header/Bar/Bar.module.scss
var Bar_module = __webpack_require__(1325);
var Bar_module_default = /*#__PURE__*/__webpack_require__.n(Bar_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Pages/Games/Header/Bar/Bar.jsx
// componetns
 // styles




function Bar({
  expClick,
  ordClick,
  bsStClick,
  expActive,
  ordActive,
  bsStActive
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Bar_module_default()).container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Bar_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
        page: "games",
        textPathName: "header.barButtons.express",
        aditionalStyles: (Bar_module_default()).button,
        click: expClick,
        active: expActive && expActive
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
        page: "games",
        textPathName: "header.barButtons.ordinar",
        aditionalStyles: (Bar_module_default()).button,
        click: ordClick,
        active: ordActive && ordActive
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
        page: "games",
        textPathName: "header.barButtons.bestStrategy",
        aditionalStyles: (Bar_module_default()).button // bsSt => bestStrategy 
        ,
        click: bsStClick,
        active: bsStActive && bsStActive
      })]
    })
  });
}
;// CONCATENATED MODULE: external "react-select"
const external_react_select_namespaceObject = require("react-select");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_namespaceObject);
// EXTERNAL MODULE: ./components/Pages/Games/Header/Header.module.scss
var Header_module = __webpack_require__(2117);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./public/images/games/selectvector.png
/* harmony default export */ const selectvector = ({"src":"/_next/static/image/public/images/games/selectvector.3a55c009daf25944341fe4f031bf1eeb.png","height":7,"width":11,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAASklEQVR42mP4J/tv/79r/879uwCEl/6ZMzAw/Cv99x8I/wLxQgYI+LfiH1AIKM8N5PxjBGLhf/f+ff9nxcDwj5kBQvyL+lcOkQQA134tfkxfUkYAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Pages/Games/Header/Header.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks and helpers
 // components



 // styles

 // icons 




function Header({
  expClick,
  ordClick,
  bsStClick,
  expActive,
  ordActive,
  bsStActive,
  changeBySelect
}) {
  const // translation consfigs
  {
    t
  } = useTranslation_default()('games'),
        translationPath = `${'header.barButtons.'}`,
        translate = key => t(`${translationPath}${key}`);

  const options = [{
    value: 'express_games',
    label: translate('express'),
    id: 'express'
  }, {
    value: 'ordinar',
    label: translate('ordinar'),
    id: 'ordinar'
  }, {
    value: 'bestStrategy',
    label: translate('bestStrategy'),
    id: 'bestStrategy'
  }];
  const customStyles = {
    option: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      borderBottom: '1px solid rgba(135, 12, 64, 0.34);',
      backgroundColor: "#12112c",
      color: state.isSelected ? '#9f0b45' : 'white',
      width: 'auto',
      height: '100%',
      padding: 7,
      whiteSpapcing: "nowrap",
      fontSize: '12px',
      lineHeight: '16px'
    }),
    control: () => ({
      display: 'flex',
      width: "100%",
      border: '1px solid rgba(135, 12, 64, 0.34)',
      backgroundColor: 'none',
      fontSize: '12px',
      lineHeight: '16px'
    }),
    menuList: () => ({
      padding: 0,
      border: '1px solid #9f0b45'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return _objectSpread(_objectSpread({}, provided), {}, {
        opacity,
        transition
      });
    }
  };

  const IndicatorSeparator = ({
    innerProps
  }) => /*#__PURE__*/jsx_runtime_.jsx("span", _objectSpread({
    style: {
      display: 'none'
    }
  }, innerProps)),
        IndicatorsContainer = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: selectvector.src,
      alt: "vector",
      style: {
        minWidth: '11px',
        marginRight: '5px'
      }
    })
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Header_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
      page: "games",
      textPathName: "header.title"
    }), /*#__PURE__*/jsx_runtime_.jsx(Bar, {
      expClick: expClick,
      ordClick: ordClick,
      bsStClick: bsStClick,
      expActive: expActive,
      ordActive: ordActive,
      bsStActive: bsStActive
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Header_module_default()).select,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_select_default()), {
        instanceId: "select-game-type",
        options: options,
        className: (Header_module_default()).select_container,
        styles: customStyles,
        isSearchable: false,
        placeholder: options[0].label,
        components: {
          IndicatorSeparator,
          IndicatorsContainer
        },
        onChange: changeBySelect
      })
    })]
  });
}
// EXTERNAL MODULE: ./components/Pages/Games/Tabs/Row/Row.module.scss
var Row_module = __webpack_require__(4293);
var Row_module_default = /*#__PURE__*/__webpack_require__.n(Row_module);
;// CONCATENATED MODULE: ./components/Pages/Games/Tabs/Row/Row.jsx
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
  time,
  coefficent,
  price,
  clickBuy
}) {
  const // translation consfigs
  {
    t
  } = useTranslation_default()('games'),
        translationPath = 'tabs.header.',
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
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Row_module_default()).date,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: date
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Row_module_default()).time,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: time
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Row_module_default()).coefficent,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: coefficent
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Row_module_default()).price,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Row_module_default()).price_title,
            children: translate('price')
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: price
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Row_module_default()).buyButton_container,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Row_module_default()).button_content,
            onClick: clickBuy,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: t('common:commons.buy')
            })
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Games/Tabs/TabHeader/TabHeader.module.scss
var TabHeader_module = __webpack_require__(6767);
var TabHeader_module_default = /*#__PURE__*/__webpack_require__.n(TabHeader_module);
;// CONCATENATED MODULE: ./components/Pages/Games/Tabs/TabHeader/TabHeader.jsx
// styles
 // translations




function TabHeader() {
  const // translation consfigs
  {
    t
  } = useTranslation_default()('games'),
        translationPath = 'tabs.header.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (TabHeader_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (TabHeader_module_default()).for_tablets,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: translate('gamesHistory')
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (TabHeader_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: translate('prediction').toUpperCase()
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: translate('date').toUpperCase()
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: translate('time').toUpperCase()
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: translate('coeficent').toUpperCase()
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: translate('price').toUpperCase()
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(7890);
// EXTERNAL MODULE: ./components/Pages/Games/Tabs/boardsStyle.module.scss
var boardsStyle_module = __webpack_require__(4132);
var boardsStyle_module_default = /*#__PURE__*/__webpack_require__.n(boardsStyle_module);
// EXTERNAL MODULE: ./lib/er.lib.js
var er_lib = __webpack_require__(1863);
// EXTERNAL MODULE: ./lib/request-destinations.js + 1 modules
var request_destinations = __webpack_require__(8955);
;// CONCATENATED MODULE: ./components/Pages/Games/Tabs/BsStGames/BsStGames.jsx


 // styles 







function BsStGames() {
  const router = (0,client_router.useRouter)();
  const {
    0: invinsible_strategy,
    1: setInvinsible_strategy
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    (0,er_lib/* request */.WY)((0,request_destinations/* GET_MATCHES_BY_TYPE */.SH)(3), {}, {
      auth: true
    }).then(rsp => {
      setInvinsible_strategy(rsp.data.data.map(item => {
        return {
          id: item.id,
          teamOneName: '',
          teamOneIcon: item[`team1_img_path`],
          teamTwoName: '',
          teamTwoIcon: item[`team2_img_path`],
          prediction: {
            thereIs: false,
            totalBet: 'тб 1,5 / ',
            coefficent: 'коеф 3,5'
          },
          date: item.date,
          time: item.time,
          coefficent: item.factor,
          price: item.price + ' руб.'
        };
      }));
    }).catch(error => {});
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (boardsStyle_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(TabHeader, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (boardsStyle_module_default()).board,
      children: invinsible_strategy.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(Row, {
        order: i + 1,
        teamOneName: el.teamOneName,
        teamOneIcon: el.teamOneIcon,
        teamTwoName: el.teamTwoName,
        teamTwoIcon: el.teamTwoIcon,
        date: el.date,
        time: el.time,
        prediction: el.prediction,
        coefficent: el.coefficent,
        price: el.price,
        clickBuy: () => router.push({
          pathname: '/prediction',
          query: {
            game: el.id
          }
        })
      }, Math.random()))
    })]
  });
}
;// CONCATENATED MODULE: ./components/Pages/Games/Tabs/ExpressGames/ExpressGames.jsx


 // styles 







function ExpressGames() {
  const router = (0,client_router.useRouter)();
  const {
    0: express,
    1: setExpess
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    (0,er_lib/* request */.WY)((0,request_destinations/* GET_MATCHES_BY_TYPE */.SH)(1), {}, {
      auth: true
    }).then(rsp => {
      setExpess(rsp.data.data.map(item => {
        return {
          id: item.id,
          teamOneName: '',
          teamOneIcon: item[`team1_img_path`],
          teamTwoName: '',
          teamTwoIcon: item[`team2_img_path`],
          prediction: {
            thereIs: false,
            totalBet: 'тб 1,5 / ',
            coefficent: 'коеф 3,5'
          },
          date: item.date,
          time: item.time,
          coefficent: item.factor,
          price: item.price + ' руб.'
        };
      }));
    }).catch(error => {});
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (boardsStyle_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(TabHeader, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (boardsStyle_module_default()).board,
      children: express.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(Row, {
        order: i + 1,
        teamOneName: el.teamOneName,
        teamOneIcon: el.teamOneIcon,
        teamTwoName: el.teamTwoName,
        teamTwoIcon: el.teamTwoIcon,
        date: el.date,
        time: el.time,
        prediction: el.prediction,
        coefficent: el.coefficent,
        price: el.price,
        clickBuy: () => router.push({
          pathname: '/prediction',
          query: {
            game: el.id
          }
        })
      }, Math.random()))
    })]
  });
}
;// CONCATENATED MODULE: ./components/Pages/Games/Tabs/OrdinarGames/OrdinarGames.jsx

 // styles 








function OrdinarGames() {
  const router = (0,client_router.useRouter)();
  const {
    0: ordinar,
    1: setOrdinar
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    (0,er_lib/* request */.WY)((0,request_destinations/* GET_MATCHES_BY_TYPE */.SH)(2), {}, {
      auth: true
    }).then(rsp => {
      setOrdinar(rsp.data.data.map(item => {
        return {
          id: item.id,
          teamOneName: '',
          teamOneIcon: item[`team1_img_path`],
          teamTwoName: '',
          teamTwoIcon: item[`team2_img_path`],
          prediction: {
            thereIs: false,
            totalBet: 'тб 1,5 / ',
            coefficent: 'коеф 3,5'
          },
          date: item.date,
          time: item.time,
          coefficent: item.factor,
          price: item.price + ' руб.'
        };
      }));
    }).catch(error => {});
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (boardsStyle_module_default()).container,
      children: [/*#__PURE__*/jsx_runtime_.jsx(TabHeader, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (boardsStyle_module_default()).board,
        children: ordinar.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(Row, {
          order: i + 1,
          teamOneName: el.teamOneName,
          teamOneIcon: el.teamOneIcon,
          teamTwoName: el.teamTwoName,
          teamTwoIcon: el.teamTwoIcon,
          date: el.date,
          time: el.time,
          prediction: el.prediction,
          coefficent: el.coefficent,
          price: el.price,
          clickBuy: () => router.push({
            pathname: '/prediction',
            query: {
              game: el.id
            }
          })
        }, Math.random()))
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Games/Tabs/Tabs.module.scss
var Tabs_module = __webpack_require__(2333);
var Tabs_module_default = /*#__PURE__*/__webpack_require__.n(Tabs_module);
;// CONCATENATED MODULE: ./components/Pages/Games/Tabs/Tabs.jsx
// styles






function Tabs({
  expTab,
  ordTab,
  bsStTab
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Tabs_module_default()).container,
    children: [expTab && /*#__PURE__*/jsx_runtime_.jsx(ExpressGames, {}), ordTab && /*#__PURE__*/jsx_runtime_.jsx(OrdinarGames, {}), bsStTab && /*#__PURE__*/jsx_runtime_.jsx(BsStGames, {})]
  });
}
;// CONCATENATED MODULE: ./components/Pages/Games/Games.jsx
// styles

 // components





function Games() {
  const // states
  {
    0: showExpressGames,
    1: setShowExpressGames
  } = (0,external_react_.useState)(true),
        {
    0: showOrdinarGames,
    1: setShowOrdinarGames
  } = (0,external_react_.useState)(false),
        {
    0: showBsStGames,
    1: setShowBsStGames
  } = (0,external_react_.useState)(false),
        // functions
  handleChangingBySelect = data => {
    switch (data.id) {
      // can be express, ordinar, bestStrategy
      case 'express':
        setShowExpressGames(true);
        setShowOrdinarGames(false);
        setShowBsStGames(false);
        break;

      case 'ordinar':
        setShowExpressGames(false);
        setShowOrdinarGames(true);
        setShowBsStGames(false);
        break;

      case 'bestStrategy':
        setShowExpressGames(false);
        setShowOrdinarGames(false);
        setShowBsStGames(true);
        break;

      default:
        setShowExpressGames(true);
        setShowOrdinarGames(false);
        setShowBsStGames(false);
        break;
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Games_module_default()).container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Games_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
        expClick: () => {
          setShowExpressGames(true);
          setShowOrdinarGames(false);
          setShowBsStGames(false);
        },
        expActive: showExpressGames,
        ordClick: () => {
          setShowExpressGames(false);
          setShowOrdinarGames(true);
          setShowBsStGames(false);
        },
        ordActive: showOrdinarGames,
        bsStClick: () => {
          setShowExpressGames(false);
          setShowOrdinarGames(false);
          setShowBsStGames(true);
        },
        bsStActive: showBsStGames,
        changeBySelect: e => handleChangingBySelect(e)
      }), /*#__PURE__*/jsx_runtime_.jsx(Tabs, {
        expTab: showExpressGames,
        ordTab: showOrdinarGames,
        bsStTab: showBsStGames
      })]
    })
  });
}
;// CONCATENATED MODULE: ./pages/games.js
function games_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function games_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { games_ownKeys(Object(source), true).forEach(function (key) { games_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { games_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function games_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const GamesPage = () => /*#__PURE__*/jsx_runtime_.jsx(Games, {});

GamesPage.layout = "withoutPhoto";
/* harmony default export */ const games = (GamesPage);
async function getStaticProps(ctx) {
  return {
    props: games_objectSpread({}, await loadNamespaces_default()(games_objectSpread(games_objectSpread(games_objectSpread({}, ctx), {}, {
      pathname: '/games',
      loaderName: 'getStaticProps'
    }, i18n), {}, {
      loadLocaleFrom: (l, n) => __webpack_require__(7655)(`./${l}/${n}`).then(m => m.default)
    })))
  };
}

/***/ }),

/***/ 4950:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Games_container__16AAG",
	"content": "Games_content__1UDkH"
};


/***/ }),

/***/ 1325:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Bar_container__3uXHZ",
	"content": "Bar_content__2AH-d",
	"button": "Bar_button__3Vjlt"
};


/***/ }),

/***/ 2117:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__7VWyg",
	"select": "Header_select__3QHTv"
};


/***/ }),

/***/ 4293:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Row_container__3frzC",
	"content": "Row_content__1E_-U",
	"left": "Row_left__2DZyh",
	"order": "Row_order__1YO-j",
	"vs": "Row_vs__WxNEp",
	"teamOne": "Row_teamOne__1dfHo",
	"teamTwo": "Row_teamTwo__1n5lP",
	"right": "Row_right__1Xkk7",
	"prediction": "Row_prediction__3Dx3d",
	"prediction_content": "Row_prediction_content__2ik6k",
	"prediction_title": "Row_prediction_title__2ArTx",
	"prediction_body": "Row_prediction_body__zQJxW",
	"simulator": "Row_simulator__2orwn",
	"date_time": "Row_date_time__2bLFy",
	"date": "Row_date__3oOoE",
	"time": "Row_time__2_Y9Q",
	"coefficent": "Row_coefficent__1CCL4",
	"price": "Row_price__A0j0B",
	"price_title": "Row_price_title__2yOkA",
	"buyButton_container": "Row_buyButton_container__2ylan",
	"button_content": "Row_button_content__1LSvo"
};


/***/ }),

/***/ 6767:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "TabHeader_container__1AgQg",
	"content": "TabHeader_content__qzCxO",
	"for_tablets": "TabHeader_for_tablets__27qH-"
};


/***/ }),

/***/ 2333:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 4132:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "boardsStyle_container__3dKRX",
	"transition": "boardsStyle_transition__3LA8t",
	"board": "boardsStyle_board__1ojr8"
};


/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8404:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ 8841:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1694,543,8402,7023,4587,8857], () => (__webpack_exec__(8393)));
module.exports = __webpack_exports__;

})();