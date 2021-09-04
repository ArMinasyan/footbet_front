exports.id = 9009;
exports.ids = [9009];
exports.modules = {

/***/ 9009:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": function() { return /* binding */ Matches; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Pages/Main/Matches/Header/Header.module.scss
var Header_module = __webpack_require__(7332);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./components/Pages/common/Title/Title.jsx
var Title = __webpack_require__(7061);
// EXTERNAL MODULE: ./components/Pages/common/Button/Button.jsx
var Button = __webpack_require__(730);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(8294);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/Header/Header.jsx


 // componetns 




function Header({
  buttonsActivity,
  on_TM_click,
  on_GM_click,
  gameRulesState
}) {
  const router = (0,client_router.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Header_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
      page: 'home',
      locationInPage: 'matches',
      textPathName: '.title',
      href: "/matches",
      classes: (Header_module_default()).title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Header_module_default()).buttons,
      style: router.pathname === '/matches' ? {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      } : null,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
        page: "home",
        locationInPage: 'matches',
        textPathName: '.buttons.TodayMatches',
        active: buttonsActivity,
        click: on_TM_click
      }), gameRulesState && /*#__PURE__*/jsx_runtime_.jsx(Button/* Button */.z, {
        page: "home",
        locationInPage: 'matches',
        textPathName: '.buttons.GameRules',
        active: !buttonsActivity,
        click: on_GM_click
      })]
    })]
  });
}
// EXTERNAL MODULE: external "react-elastic-carousel"
var external_react_elastic_carousel_ = __webpack_require__(3983);
var external_react_elastic_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_elastic_carousel_);
// EXTERNAL MODULE: ./public/images/main/news/arrowRight.png
var arrowRight = __webpack_require__(7715);
// EXTERNAL MODULE: ./public/images/main/news/arrowLeft.png
var arrowLeft = __webpack_require__(8318);
// EXTERNAL MODULE: ./components/Pages/Main/Matches/GameRules/Arrows/Arrow.module.scss
var Arrow_module = __webpack_require__(8916);
var Arrow_module_default = /*#__PURE__*/__webpack_require__.n(Arrow_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/GameRules/Arrows/Arrow.jsx

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
// EXTERNAL MODULE: ./components/Pages/Main/Matches/GameRules/Pagination/Pagination.module.scss
var Pagination_module = __webpack_require__(4291);
var Pagination_module_default = /*#__PURE__*/__webpack_require__.n(Pagination_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/GameRules/Pagination/Pagination.jsx



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
// EXTERNAL MODULE: ./components/Pages/Main/Matches/GameRules/GameRules.module.scss
var GameRules_module = __webpack_require__(1199);
var GameRules_module_default = /*#__PURE__*/__webpack_require__.n(GameRules_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/GameRules/game_rules.js
const game_rules = [// each array are page data
[{
  title: 'Футбол: команда и запасные игроки.',
  body: `
                Здравствуйте! Что нужно делать чтобы всегда выходить с плюсом ☝️
                1. На каждый матч ставим по 10% из банка ( если у вас на счету есть 10000 рублей, то на каждый матч нужно ставить по 1000 рублей, не важно насколько банк поднимается или снижается, нужно ставить по 1000 рублей в любом случаи ) 
                2. Самое важное играть по правилам ( во основном игроки 99% проигрывают, почему? Потому что они не соблюдают правила игры , начинают сами делать свои прогнозы, что и разрушает всю систему прогнозов! Соблюдайте за правилами и поднимайте Ваш банк! Удачных вам ставок🤝
            `
}, {
  title: ' Футбол: «Положение вне игры».',
  body: 'Правило «вне игры» запрещает игрокам атакующей команды находиться к линии ворот соперника ближе, чем защитники соперника.Если в момент передачи мяча между игроком и линией ворот соперника находится менее двух игроков команды соперника, включая вратаря, то такой игрок будет в положении «вне игры». При положении «вне игры» назначается свободный удар.Положение «вне игры» не фиксируется при аналогичной ситуации на своей половине поля, при выполнении ударов от ворот, угловых ударов, при вбрасывании из - за боковой линии и при спорном вбрасывании.'
}]];
// EXTERNAL MODULE: ./components/Pages/Main/Matches/GameRules/SlidePage/PagePareticles/PageParticales.module.scss
var PageParticales_module = __webpack_require__(6476);
var PageParticales_module_default = /*#__PURE__*/__webpack_require__.n(PageParticales_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/GameRules/SlidePage/PagePareticles/PagePareticles.jsx


// styles 

function PageParticles({
  title,
  body
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (PageParticales_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (PageParticales_module_default()).title,
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (PageParticales_module_default()).body,
      children: body
    })]
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Matches/GameRules/SlidePage/SlidePages.module.scss
var SlidePages_module = __webpack_require__(1962);
var SlidePages_module_default = /*#__PURE__*/__webpack_require__.n(SlidePages_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/GameRules/SlidePage/SlidePages.jsx

 // styles 


function SlidePages({
  pageData
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (SlidePages_module_default()).container,
    children: pageData.map(el => /*#__PURE__*/jsx_runtime_.jsx(PageParticles, {
      title: el.title,
      body: el.body
    }, Math.random()))
  });
}
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/GameRules/GameRules.jsx

// components


 // styles




function GameRules() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (GameRules_module_default()).container,
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_elastic_carousel_default()), {
      renderArrow: Arrow,
      renderPagination: Pagination,
      children: game_rules.map(el => /*#__PURE__*/jsx_runtime_.jsx(SlidePages, {
        pageData: el
      }, Math.random()))
    })
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.module.scss
var SpecificDayMatchesBoard_module = __webpack_require__(9429);
var SpecificDayMatchesBoard_module_default = /*#__PURE__*/__webpack_require__.n(SpecificDayMatchesBoard_module);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(8841);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.module.scss
var RowTitle_module = __webpack_require__(9560);
var RowTitle_module_default = /*#__PURE__*/__webpack_require__.n(RowTitle_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowTitle/RowTitle.jsx

// translations
 // styles 


function RowTitle({
  content,
  locationInMainPage
}) {
  const // translation consfigs
  {
    t
  } = useTranslation_default()('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (RowTitle_module_default()).container,
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: content ? translate(content) : ""
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.module.scss
var RowDescription_module = __webpack_require__(3609);
var RowDescription_module_default = /*#__PURE__*/__webpack_require__.n(RowDescription_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/RowDescription/RowDescription.jsx


// translations
 // styles


function RowDescription({
  clickBuy,
  date,
  gameState,
  teamOne,
  teamOneIcon,
  score,
  teamTwo,
  teamTwoIcon,
  buyButtonName,
  locationInMainPage
}) {
  const // translation consfigs
  {
    t
  } = useTranslation_default()("home"),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`),
        gameStarted = gameState.slice(gameState.lastIndexOf(".") + 1) === "started";

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (RowDescription_module_default()).container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (RowDescription_module_default()).content,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `
                        ${(RowDescription_module_default()).date_gameNStarted_content} 
                        ${gameStarted ? (RowDescription_module_default()).date_gameStarted_content : null}
                    `,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: date
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: ["\xA0", translate(gameState)]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (RowDescription_module_default()).teams,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (RowDescription_module_default()).teamOne,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: teamOne
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: teamOneIcon,
            alt: teamOne
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (RowDescription_module_default()).score,
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: score
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (RowDescription_module_default()).teamTwo,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: teamTwoIcon,
            alt: teamTwo
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: teamTwo
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (RowDescription_module_default()).buyButton_container,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (RowDescription_module_default()).button_content,
          onClick: clickBuy,
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: translate(buyButtonName)
          })
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.module.scss
var Row_module = __webpack_require__(5852);
var Row_module_default = /*#__PURE__*/__webpack_require__.n(Row_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/common/Row/Row.jsx


// components

 // styles


function Row({
  date,
  gameState,
  teamOne,
  teamOneIcon,
  score,
  teamTwo,
  teamTwoIcon,
  buyButtonName,
  titleName,
  clickBuy
}) {
  const trasnlationLocation = 'matches.TM.today';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Row_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(RowTitle, {
      content: titleName,
      locationInMainPage: trasnlationLocation
    }), /*#__PURE__*/jsx_runtime_.jsx(RowDescription, {
      date: date,
      gameState: gameState,
      teamOne: teamOne,
      teamOneIcon: teamOneIcon,
      score: score,
      teamTwo: teamTwo,
      teamTwoIcon: teamTwoIcon,
      buyButtonName: buyButtonName,
      locationInMainPage: trasnlationLocation,
      clickBuy: clickBuy
    })]
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.module.scss
var Arrows_Arrow_module = __webpack_require__(4578);
var Arrows_Arrow_module_default = /*#__PURE__*/__webpack_require__.n(Arrows_Arrow_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Arrows/Arrow.jsx

 // icons




function Arrow_Arrow({
  type,
  onClick,
  isEdge
}) {
  const pointer = type === external_react_elastic_carousel_.consts.PREV ? /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: arrowLeft/* default.src */.Z.src,
    className: (Arrows_Arrow_module_default()).arrowLeft,
    alt: "arrow-left"
  }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: arrowRight/* default.src */.Z.src,
    className: (Arrows_Arrow_module_default()).arrowRight,
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
// EXTERNAL MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.module.scss
var Pagination_Pagination_module = __webpack_require__(9218);
var Pagination_Pagination_module_default = /*#__PURE__*/__webpack_require__.n(Pagination_Pagination_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/Pagination/Pagination.jsx



function Pagination_Pagination({
  pages,
  activePage,
  onClick
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Pagination_Pagination_module_default()).container,
      children: pages.map(el => {
        const isActivePage = activePage === el;
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: () => onClick(el),
          active: isActivePage ? 'true' : 'false',
          className: `${(Pagination_Pagination_module_default()).round} ${isActivePage && (Pagination_Pagination_module_default()).active}`
        }, el);
      })
    })
  });
}
// EXTERNAL MODULE: external "react-beautiful-dnd"
var external_react_beautiful_dnd_ = __webpack_require__(2640);
// EXTERNAL MODULE: ./lib/er.lib.js
var er_lib = __webpack_require__(955);
// EXTERNAL MODULE: ./lib/request-destinations.js + 1 modules
var request_destinations = __webpack_require__(9541);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/SpecificDayMatchesBoard/SpecificDayMatchesBoard.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks
 // styles

 // components












function createDayWithSpecificFormat(day) {
  let d = new Date(day);
  let ye = new Intl.DateTimeFormat("en", {
    year: "numeric"
  }).format(d);
  let mo = new Intl.DateTimeFormat("en", {
    month: "2-digit"
  }).format(d);
  let da = new Intl.DateTimeFormat("en", {
    day: "2-digit"
  }).format(d);
  return `${da}.${mo}.${ye}`;
}

function SpecificDayMatchesBoard({
  day
}) {
  const {
    0: firstPage,
    1: setFirstPage
  } = (0,external_react_.useState)([]),
        {
    0: secondPage,
    1: setSecondPage
  } = (0,external_react_.useState)([]),
        router = (0,client_router.useRouter)(),
        {
    0: firstPageItems,
    1: upDateFirstPageItems
  } = (0,external_react_.useState)(firstPage),
        {
    0: secondPageItems,
    1: upDateSecondPageItems
  } = (0,external_react_.useState)(secondPage),
        {
    0: matches,
    1: setMatches
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    upDateFirstPageItems(matches.filter((el, i) => i < 4));
    upDateSecondPageItems(matches.filter((el, i) => i >= 4));
  }, [matches]);
  (0,external_react_.useEffect)(() => {
    (0,er_lib/* request */.WY)((0,request_destinations/* GET_MATCHES_OF_SPECIFIC_DAY */.Fs)(createDayWithSpecificFormat(day)), {}, {
      auth: true
    }).then(matches => {
      const now = Date.now();
      setMatches(matches.data.data.map(match => {
        const matchTime = new Date(`${match.date.split(`.`).reverse().join(`.`)} ${match.time}`).getTime();
        const gameState = now < matchTime ? `dontStarted` : Math.abs(now - matchTime) < 9000000 ? "started" : "finished";
        return {
          id: match.id,
          date: match.date,
          time: match.time,
          gameState: `.rowOne.gameState.${gameState}`,
          teamOneName: match.teamOneName,
          teamOneIcon: match.team1_img_path,
          teamTwoName: match.teamTwoName,
          teamTwoIcon: match.team2_img_path,
          score: match.score,
          buyButtonName: ".rowOne.buyButton",
          coefficent: match.coefficent,
          titleName: ".rowOne.title"
        };
      }));
    }).catch(err => {
      console.log(err);
    });
  }, [day]);

  function handleOnDragEndFirstPage(result) {
    if (!result.destination) return;
    const items = Array.from(firstPageItems),
          [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    upDateFirstPageItems(items);
  }

  function handleOnDragEndSecondPage(result) {
    if (!result.destination) return;
    const items = Array.from(secondPageItems),
          [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    upDateSecondPageItems(items);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_elastic_carousel_default()), {
    itemsToShow: 1,
    itemsToScroll: 1,
    renderArrow: Arrow_Arrow,
    renderPagination: Pagination_Pagination,
    className: (SpecificDayMatchesBoard_module_default()).container,
    enableSwipe: false // verticalMode
    ,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.DragDropContext, {
        onDragEnd: handleOnDragEndFirstPage,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Droppable, {
          droppableId: "matchestodayMatchesFirst",
          children: provided => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [firstPageItems.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: "100%"
                }
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                ref: provided.innerRef,
                children: /*#__PURE__*/jsx_runtime_.jsx(Row, {
                  date: el.date,
                  gameState: el.gameState,
                  teamOne: el.teamOneName,
                  teamOneIcon: el.teamOneIcon,
                  score: el.score,
                  teamTwo: el.teamTwoName,
                  teamTwoIcon: el.teamTwoIcon,
                  buyButtonName: el.buyButtonName,
                  titleName: el.titleName,
                  clickBuy: () => router.push({
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                })
              }))
            }, Math.random())), provided.placeholder]
          }))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.DragDropContext, {
        onDragEnd: handleOnDragEndSecondPage,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Droppable, {
          droppableId: "matchestodayMatchesSecond",
          children: provided => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [secondPageItems.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread(_objectSpread({
                style: {
                  width: "100%"
                }
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                ref: provided.innerRef,
                children: /*#__PURE__*/jsx_runtime_.jsx(Row, {
                  date: el.date,
                  gameState: el.gameState,
                  teamOne: el.teamOneName,
                  teamOneIcon: el.teamOneIcon,
                  score: el.score,
                  teamTwo: el.teamTwoName,
                  teamTwoIcon: el.teamTwoIcon,
                  buyButtonName: el.buyButtonName,
                  titleName: el.titleName,
                  clickBuy: () => router.push({
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                }, Math.random())
              }))
            }, Math.random())), provided.placeholder]
          }))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.module.scss
var TDMatchesBoard_module = __webpack_require__(514);
var TDMatchesBoard_module_default = /*#__PURE__*/__webpack_require__.n(TDMatchesBoard_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/TDMatchesBoard/TDMatchesBoard.jsx



function TDMatchesBoard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TDMatchesBoard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TDMatchesBoard_ownKeys(Object(source), true).forEach(function (key) { TDMatchesBoard_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TDMatchesBoard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TDMatchesBoard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks
 // styles

 // components











function TDMatchesBoard() {
  const {
    0: firstPage,
    1: setFirstPage
  } = (0,external_react_.useState)([]),
        {
    0: secondPage,
    1: setSecondPage
  } = (0,external_react_.useState)([]),
        router = (0,client_router.useRouter)(),
        {
    0: firstPageItems,
    1: upDateFirstPageItems
  } = (0,external_react_.useState)(firstPage),
        {
    0: secondPageItems,
    1: upDateSecondPageItems
  } = (0,external_react_.useState)(secondPage),
        {
    0: matches,
    1: setMatches
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    upDateFirstPageItems(matches.filter((el, i) => i < 4));
    upDateSecondPageItems(matches.filter((el, i) => i >= 4));
  }, [matches]);
  (0,external_react_.useEffect)(() => {
    const d = new Date();
    const date = `${(d.getDate() + '').padStart(2, '0')}.${(d.getMonth() + 1 + '').padStart(2, '0')}.${d.getFullYear()}`;
    (0,er_lib/* request */.WY)((0,request_destinations/* GET_MATCHES_OF_SPECIFIC_DAY */.Fs)(date), {}, {
      auth: true
    }).then(matches => {
      const now = Date.now();
      setMatches(matches.data.data.map(match => {
        const matchTime = new Date(`${match.date.split(`.`).reverse().join(`.`)} ${match.time}`).getTime();
        const gameState = now < matchTime ? `dontStarted` : Math.abs(now - matchTime) < 9000000 ? "started" : "finished";
        return {
          id: match.id,
          date: match.date,
          time: match.time,
          gameState: `.rowOne.gameState.${gameState}`,
          teamOneName: match.teamOneName,
          teamOneIcon: match.team1_img_path,
          teamTwoName: match.teamTwoName,
          teamTwoIcon: match.team2_img_path,
          score: match.score,
          buyButtonName: ".rowOne.buyButton",
          coefficent: match.coefficent,
          titleName: ".rowOne.title"
        };
      }));
    }).catch(err => {
      console.log(err);
    });
  }, []);

  function handleOnDragEndFirstPage(result) {
    if (!result.destination) return;
    const items = Array.from(firstPageItems),
          [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    upDateFirstPageItems(items);
  }

  function handleOnDragEndSecondPage(result) {
    if (!result.destination) return;
    const items = Array.from(secondPageItems),
          [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    upDateSecondPageItems(items);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_elastic_carousel_default()), {
    itemsToShow: 1,
    itemsToScroll: 1,
    renderArrow: Arrow_Arrow,
    renderPagination: Pagination_Pagination,
    className: (TDMatchesBoard_module_default()).container,
    enableSwipe: false // verticalMode
    ,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.DragDropContext, {
        onDragEnd: handleOnDragEndFirstPage,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Droppable, {
          droppableId: "matchestodayMatchesFirst",
          children: provided => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", TDMatchesBoard_objectSpread(TDMatchesBoard_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [firstPageItems.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/jsx_runtime_.jsx("div", TDMatchesBoard_objectSpread(TDMatchesBoard_objectSpread(TDMatchesBoard_objectSpread({
                style: {
                  width: "100%"
                }
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                ref: provided.innerRef,
                children: /*#__PURE__*/jsx_runtime_.jsx(Row, {
                  date: el.date,
                  gameState: el.gameState,
                  teamOne: el.teamOneName,
                  teamOneIcon: el.teamOneIcon,
                  score: el.score,
                  teamTwo: el.teamTwoName,
                  teamTwoIcon: el.teamTwoIcon,
                  buyButtonName: el.buyButtonName,
                  titleName: el.titleName,
                  clickBuy: () => router.push({
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                })
              }))
            }, Math.random())), provided.placeholder]
          }))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.DragDropContext, {
        onDragEnd: handleOnDragEndSecondPage,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Droppable, {
          droppableId: "matchestodayMatchesSecond",
          children: provided => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", TDMatchesBoard_objectSpread(TDMatchesBoard_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [secondPageItems.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/jsx_runtime_.jsx("div", TDMatchesBoard_objectSpread(TDMatchesBoard_objectSpread(TDMatchesBoard_objectSpread({
                style: {
                  width: "100%"
                }
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                ref: provided.innerRef,
                children: /*#__PURE__*/jsx_runtime_.jsx(Row, {
                  date: el.date,
                  gameState: el.gameState,
                  teamOne: el.teamOneName,
                  teamOneIcon: el.teamOneIcon,
                  score: el.score,
                  teamTwo: el.teamTwoName,
                  teamTwoIcon: el.teamTwoIcon,
                  buyButtonName: el.buyButtonName,
                  titleName: el.titleName,
                  clickBuy: () => router.push({
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                }, Math.random())
              }))
            }, Math.random())), provided.placeholder]
          }))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.module.scss
var TMMatchesBoard_module = __webpack_require__(3583);
var TMMatchesBoard_module_default = /*#__PURE__*/__webpack_require__.n(TMMatchesBoard_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/TodayMatches/TMBody/TMMatchesBoard/TMMatchesBoard.jsx



function TMMatchesBoard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TMMatchesBoard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TMMatchesBoard_ownKeys(Object(source), true).forEach(function (key) { TMMatchesBoard_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TMMatchesBoard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TMMatchesBoard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks
 // styles

 // components











function TMMatchesBoard() {
  const {
    0: firstPage,
    1: setFirstPage
  } = (0,external_react_.useState)([]),
        {
    0: secondPage,
    1: setSecondPage
  } = (0,external_react_.useState)([]),
        router = (0,client_router.useRouter)(),
        {
    0: firstPageItems,
    1: upDateFirstPageItems
  } = (0,external_react_.useState)(firstPage),
        {
    0: secondPageItems,
    1: upDateSecondPageItems
  } = (0,external_react_.useState)(secondPage),
        {
    0: matches,
    1: setMatches
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    upDateFirstPageItems(matches.filter((el, i) => i < 4));
    upDateSecondPageItems(matches.filter((el, i) => i >= 4));
  }, [matches]);
  (0,external_react_.useEffect)(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    const date = `${(d.getDate() + '').padStart(2, '0')}.${(d.getMonth() + 1 + '').padStart(2, '0')}.${d.getFullYear()}`;
    (0,er_lib/* request */.WY)((0,request_destinations/* GET_MATCHES_OF_SPECIFIC_DAY */.Fs)(date), {}, {
      auth: true
    }).then(matches => {
      const now = Date.now();
      setMatches(matches.data.data.map(match => {
        const matchTime = new Date(`${match.date.split(`.`).reverse().join(`.`)} ${match.time}`).getTime();
        const gameState = now < matchTime ? `dontStarted` : Math.abs(now - matchTime) < 9000000 ? "started" : "finished";
        return {
          id: match.id,
          date: match.date,
          time: match.time,
          gameState: `.rowOne.gameState.${gameState}`,
          teamOneName: match.teamOneName,
          teamOneIcon: match.team1_img_path,
          teamTwoName: match.teamTwoName,
          teamTwoIcon: match.team2_img_path,
          score: match.score,
          buyButtonName: ".rowOne.buyButton",
          coefficent: match.coefficent,
          titleName: ".rowOne.title"
        };
      }));
    }).catch(err => {
      console.log(err);
    });
  }, []);

  function handleOnDragEndFirstPage(result) {
    if (!result.destination) return;
    const items = Array.from(firstPageItems),
          [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    upDateFirstPageItems(items);
  }

  function handleOnDragEndSecondPage(result) {
    if (!result.destination) return;
    const items = Array.from(secondPageItems),
          [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    upDateSecondPageItems(items);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_elastic_carousel_default()), {
    itemsToShow: 1,
    itemsToScroll: 1,
    renderArrow: Arrow_Arrow,
    renderPagination: Pagination_Pagination,
    className: (TMMatchesBoard_module_default()).container,
    enableSwipe: false // verticalMode
    ,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.DragDropContext, {
        onDragEnd: handleOnDragEndFirstPage,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Droppable, {
          droppableId: "matchestodayMatchesFirst",
          children: provided => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", TMMatchesBoard_objectSpread(TMMatchesBoard_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [firstPageItems.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/jsx_runtime_.jsx("div", TMMatchesBoard_objectSpread(TMMatchesBoard_objectSpread(TMMatchesBoard_objectSpread({
                style: {
                  width: "100%"
                }
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                ref: provided.innerRef,
                children: /*#__PURE__*/jsx_runtime_.jsx(Row, {
                  date: el.date,
                  gameState: el.gameState,
                  teamOne: el.teamOneName,
                  teamOneIcon: el.teamOneIcon,
                  score: el.score,
                  teamTwo: el.teamTwoName,
                  teamTwoIcon: el.teamTwoIcon,
                  buyButtonName: el.buyButtonName,
                  titleName: el.titleName,
                  clickBuy: () => router.push({
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                })
              }))
            }, Math.random())), provided.placeholder]
          }))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.DragDropContext, {
        onDragEnd: handleOnDragEndSecondPage,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Droppable, {
          droppableId: "matchestodayMatchesSecond",
          children: provided => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", TMMatchesBoard_objectSpread(TMMatchesBoard_objectSpread({}, provided.droppableProps), {}, {
            ref: provided.innerRef,
            style: {
              width: "100%"
            },
            children: [secondPageItems.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_.Draggable, {
              index: i,
              draggableId: el.id,
              children: provided => /*#__PURE__*/jsx_runtime_.jsx("div", TMMatchesBoard_objectSpread(TMMatchesBoard_objectSpread(TMMatchesBoard_objectSpread({
                style: {
                  width: "100%"
                }
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                ref: provided.innerRef,
                children: /*#__PURE__*/jsx_runtime_.jsx(Row, {
                  date: el.date,
                  gameState: el.gameState,
                  teamOne: el.teamOneName,
                  teamOneIcon: el.teamOneIcon,
                  score: el.score,
                  teamTwo: el.teamTwoName,
                  teamTwoIcon: el.teamTwoIcon,
                  buyButtonName: el.buyButtonName,
                  titleName: el.titleName,
                  clickBuy: () => router.push({
                    pathname: "/prediction",
                    query: {
                      game: el.id
                    }
                  })
                }, Math.random())
              }))
            }, Math.random())), provided.placeholder]
          }))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(RowTitle, {
        rowStyles: {
          minHeight: "34px"
        }
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Matches/TodayMatches/TMHeader/DayChangeButton/DayChangeButton.module.scss
var DayChangeButton_module = __webpack_require__(9547);
var DayChangeButton_module_default = /*#__PURE__*/__webpack_require__.n(DayChangeButton_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/TodayMatches/TMHeader/DayChangeButton/DayChangeButton.jsx


 // hooks and helpers


function DayChangeButton({
  name,
  locationInMainPage,
  date,
  active = null,
  click
}) {
  const // translation consfigs
  {
    t
  } = useTranslation_default()('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (DayChangeButton_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: active ? (DayChangeButton_module_default()).active_name : (DayChangeButton_module_default()).name,
      onClick: click,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: translate(name)
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: active ? (DayChangeButton_module_default()).active_date : (DayChangeButton_module_default()).date,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: date
      })
    })]
  });
}
// EXTERNAL MODULE: external "react-calendar"
var external_react_calendar_ = __webpack_require__(2668);
var external_react_calendar_default = /*#__PURE__*/__webpack_require__.n(external_react_calendar_);
// EXTERNAL MODULE: ./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.module.scss
var TMHeader_module = __webpack_require__(2094);
var TMHeader_module_default = /*#__PURE__*/__webpack_require__.n(TMHeader_module);
;// CONCATENATED MODULE: ./public/images/main/matches/Calendar.png
/* harmony default export */ var Calendar = ({"src":"/_next/static/image/public/images/main/matches/Calendar.e618df3387ed123b651d4ef2af917fe2.png","height":34,"width":34,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAa0lEQVR42g3LuwqCABQA0PsL/UFLc1MQFYRiIj0sehA1mYoNEfb/wyE58wkTvavWy93PJJTOMkcHuYsyNNJBZiOx1oVc56FRe/pKQurtplZp7dVhrVfp7IyNfEIhMWxzJzN5yCwsrUwVtuZ/Ti5S0Ko2P9EAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/main/matches/arrowRight.png
/* harmony default export */ var matches_arrowRight = ({"src":"/_next/static/image/public/images/main/matches/arrowRight.c6d6d9e1222c418f60fbb8194d08a823.png","height":35,"width":31,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA4ElEQVR42hWOvUoDQRSFz70zs+vKJqYRwVgKQsTCh7AzhbXVoq9g4ZNYaLGNIPZWAatUadOFQAKBFEmKhM0Pm2TuzaT44HD4io/yPD8HUA/QEfXekDElgAEDuFIRp9udUy9Mtco6CAmASw6HoSQubfY00L/Og3z/N/n2enqULdXSjbS7DflqZSh9rO1Z5qNfNa+PPwxRwLFHNV4gYqGUC5yGXW4No1id8P1N336+f+Ci2sNz4828NFs6nqQUau9UJMFuz3RW2cCy6LxIybmZBTAkorpGzuhyDQBE1k5JMToAcRNcEex0l0gAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/main/matches/arrowLeft.png
/* harmony default export */ var matches_arrowLeft = ({"src":"/_next/static/image/public/images/main/matches/arrowLeft.e2372a0c78d8c6b246bdee3ffab40f7b.png","height":35,"width":31,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA40lEQVR42mNYsGCB2IL5843mz51nsmDhQqP58+cbA8X0gJiXASQBZBgvWLVCd/60GRbzZ88xmT9vvhlQTJ0BpHLhnu2q8+xjZ8xLL4td/Pq+BNAE4/nz5mkxLNi6SX2uZdSyeVzeH+Y5xE2fZxW1aH5Du9eCNatUGBZsWKs1Lzijai6vz6N5AZll8+IK0uf3TnRYsGypGsP8OXNNF54+ojAvLLt4Xk5l5KKb52Ugxs7XZgC5DOgIiwUb12kDVRvOnzXbfP78+eZAcWWQJC/IZUAFOvPnztUCsrUWzJ+vsmDBAjYAjTVxRM3en78AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/TodayMatches/TMHeader/TMHeader.jsx


// hooks
 // components



 // styles

 // icons




function TMHeader({
  clickTD,
  clickTM,
  TDBoardState,
  TMBoardState,
  getSpecificDateMatches
}) {
  const // functions
  // get_date value changes y_d => yesterday, t_d => today, t_w =>tomorrow
  get_date = value => {
    let date = new Date(),
        day = null,
        month = date.getMonth() + 1,
        year = date.getFullYear();

    switch (value) {
      case "t_d":
        day = date.getDate();
        break;

      case "t_m":
        day = date.getDate() + 1;
        break;

      default:
        day = "";
        break;
    }

    return `${day}.${month < 10 ? "0" + month : month}.${year}`;
  },
        // states
  {
    0: showCalendar,
    1: setShowCalendar
  } = (0,external_react_.useState)(false);

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (TMHeader_module_default()).container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (TMHeader_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
        page: "home",
        locationInPage: "matches",
        textPathName: ".TM.headerTitle",
        classes: (TMHeader_module_default()).title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (TMHeader_module_default()).day_change_buttons,
        children: [/*#__PURE__*/jsx_runtime_.jsx(DayChangeButton, {
          name: ".TM.headerButtons.today",
          locationInMainPage: "matches",
          date: get_date("t_d"),
          active: TDBoardState ? "show" : null,
          click: clickTD
        }), /*#__PURE__*/jsx_runtime_.jsx(DayChangeButton, {
          name: ".TM.headerButtons.tomorrow",
          locationInMainPage: "matches",
          date: get_date("t_m"),
          active: TMBoardState ? "show" : null,
          click: clickTM
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (TMHeader_module_default()).calendar,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: Calendar.src,
          alt: "calendar-icon",
          onClick: () => setShowCalendar(!showCalendar)
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (TMHeader_module_default()).calendar_body,
        children: showCalendar && /*#__PURE__*/jsx_runtime_.jsx((external_react_calendar_default()), {
          showNeighboringMonth: false,
          showWeekNumbers: false,
          nextLabel: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: matches_arrowRight.src
          }),
          prevLabel: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: matches_arrowLeft.src
          }),
          onChange: value => {
            getSpecificDateMatches(value);
            setShowCalendar(false);
          }
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Matches/TodayMatches/TodayMatches.module.scss
var TodayMatches_module = __webpack_require__(6226);
var TodayMatches_module_default = /*#__PURE__*/__webpack_require__.n(TodayMatches_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/TodayMatches/TodayMatches.jsx


// hooks and helpers

 // components



 // styles


function TodayMatches({
  getSpecificDateMatches
}) {
  const // states
  {
    0: showTodayGames,
    1: setShowTodayGames
  } = (0,external_react_.useState)(true),
        {
    0: showTomorrowGames,
    1: setShowTomorrowGames
  } = (0,external_react_.useState)(false),
        {
    0: showSpecificDayMatches,
    1: setShowSpecificDayMatches
  } = (0,external_react_.useState)(false);
  const {
    0: specificMatchDay,
    1: setSpecificMatchDay
  } = (0,external_react_.useState)("");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (TodayMatches_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(TMHeader // TD => today games board shopw configs
    , {
      clickTD: () => {
        setShowTomorrowGames(false);
        setShowSpecificDayMatches(false);
        setShowTodayGames(true);
      },
      TDBoardState: showTodayGames // TM => tommorow games board shopw configs
      ,
      clickTM: () => {
        setShowTodayGames(false);
        setShowSpecificDayMatches(false);
        setShowTomorrowGames(true);
      },
      TMBoardState: showTomorrowGames,
      getSpecificDateMatches: value => {
        setShowTodayGames(false);
        setShowTomorrowGames(false);
        setSpecificMatchDay(value);
        setShowSpecificDayMatches(true);
      }
    }), showSpecificDayMatches && /*#__PURE__*/jsx_runtime_.jsx(SpecificDayMatchesBoard, {
      day: specificMatchDay
    }), showTodayGames && /*#__PURE__*/jsx_runtime_.jsx(TDMatchesBoard, {}), showTomorrowGames && /*#__PURE__*/jsx_runtime_.jsx(TMMatchesBoard, {})]
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Matches/Matches.module.scss
var Matches_module = __webpack_require__(8981);
var Matches_module_default = /*#__PURE__*/__webpack_require__.n(Matches_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Matches/Matches.jsx


// components



 // styles 


function Matches({
  gameRulesState
}) {
  const // states
  {
    0: showTodayMatches,
    1: setShowTodayMatches
  } = (0,external_react_.useState)(true),
        {
    0: showGameRules,
    1: setShowGameRules
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${gameRulesState ? (Matches_module_default()).container : (Matches_module_default()).in_seperete_page}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Matches_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
        buttonsActivity: showTodayMatches,
        on_TM_click: () => {
          setShowTodayMatches(true);
          setShowGameRules(false);
        },
        on_GM_click: () => {
          setShowGameRules(true);
          setShowTodayMatches(false);
        },
        gameRulesState: gameRulesState
      }), showTodayMatches && /*#__PURE__*/jsx_runtime_.jsx(TodayMatches, {}), showGameRules && /*#__PURE__*/jsx_runtime_.jsx(GameRules, {})]
    })
  });
}

/***/ }),

/***/ 8916:
/***/ (function(module) {

// Exports
module.exports = {
	"arrowLeft": "Arrow_arrowLeft__1Hvij",
	"arrowRight": "Arrow_arrowRight__10rNu"
};


/***/ }),

/***/ 1199:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "GameRules_container__38ele",
	"transition": "GameRules_transition__3RLZS"
};


/***/ }),

/***/ 4291:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Pagination_container__3icXg",
	"round": "Pagination_round__36yfy",
	"active": "Pagination_active__2MiRN"
};


/***/ }),

/***/ 6476:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PageParticales_container__3epss",
	"title": "PageParticales_title__UpEyN",
	"body": "PageParticales_body__1hNAF"
};


/***/ }),

/***/ 1962:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SlidePages_container__3Zi1E"
};


/***/ }),

/***/ 7332:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Header_container__3Zdmc",
	"title": "Header_title__ZRJ89",
	"buttons": "Header_buttons__17vfb"
};


/***/ }),

/***/ 8981:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Matches_container__2Ka2z",
	"content": "Matches_content__1PQ_E",
	"in_seperete_page": "Matches_in_seperete_page__2-_Fp"
};


/***/ }),

/***/ 9429:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SpecificDayMatchesBoard_container__1dAaS"
};


/***/ }),

/***/ 4578:
/***/ (function(module) {

// Exports
module.exports = {
	"arrowLeft": "Arrow_arrowLeft__3GtA4",
	"arrowRight": "Arrow_arrowRight__3329l"
};


/***/ }),

/***/ 9218:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Pagination_container__2sxLx",
	"round": "Pagination_round__1dIlR",
	"active": "Pagination_active__3XISs"
};


/***/ }),

/***/ 514:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "TDMatchesBoard_container__2PJra"
};


/***/ }),

/***/ 3583:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "TMMatchesBoard_container__2dsHH"
};


/***/ }),

/***/ 5852:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Row_container__1WBOh"
};


/***/ }),

/***/ 3609:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "RowDescription_container__219t-",
	"content": "RowDescription_content__2SeXU",
	"date_gameNStarted_content": "RowDescription_date_gameNStarted_content__1MqEJ",
	"date_gameStarted_content": "RowDescription_date_gameStarted_content__3G_Z2",
	"teams": "RowDescription_teams__27VPO",
	"teamOne": "RowDescription_teamOne__TPIka",
	"score": "RowDescription_score__38SVF",
	"teamTwo": "RowDescription_teamTwo__3mad2",
	"buyButton_container": "RowDescription_buyButton_container__3rCNk",
	"button_content": "RowDescription_button_content__12wUP"
};


/***/ }),

/***/ 9560:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "RowTitle_container__DWZ5L"
};


/***/ }),

/***/ 9547:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "DayChangeButton_container__2dAqe",
	"name": "DayChangeButton_name__2nSnI",
	"date": "DayChangeButton_date__3-MW8",
	"active_name": "DayChangeButton_active_name__315sP",
	"transition": "DayChangeButton_transition__1TFg3",
	"active_date": "DayChangeButton_active_date__OBeaD"
};


/***/ }),

/***/ 2094:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "TMHeader_container__2sf8K",
	"content": "TMHeader_content__23QuY",
	"title": "TMHeader_title__3u9zG",
	"day_change_buttons": "TMHeader_day_change_buttons__3qoYp",
	"calendar": "TMHeader_calendar__2WAh_"
};


/***/ }),

/***/ 6226:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "TodayMatches_container__3xcfT",
	"transition": "TodayMatches_transition__1divr"
};


/***/ })

};
;