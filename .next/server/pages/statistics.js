(() => {
var exports = {};
exports.id = 6080;
exports.ids = [6080];
exports.modules = {

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ statistics),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(608);
// EXTERNAL MODULE: external "next-translate/loadNamespaces"
var loadNamespaces_ = __webpack_require__(8404);
var loadNamespaces_default = /*#__PURE__*/__webpack_require__.n(loadNamespaces_);
// EXTERNAL MODULE: ./components/Pages/Statistics/Statistics.module.scss
var Statistics_module = __webpack_require__(3868);
var Statistics_module_default = /*#__PURE__*/__webpack_require__.n(Statistics_module);
// EXTERNAL MODULE: ./components/Pages/common/Title/Title.jsx
var Title = __webpack_require__(4587);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(8841);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: ./components/Pages/Statistics/Tab/Row/Row.module.scss
var Row_module = __webpack_require__(9172);
var Row_module_default = /*#__PURE__*/__webpack_require__.n(Row_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Pages/Statistics/Tab/Row/Row.jsx
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
  score,
  gameResult
  /** it can be: "win", "lose", "return"  */

}) {
  const getResult = res => {
    switch (res) {
      case "win":
        return {
          className: (Row_module_default()).win,
          translationText: 'Победа'
        };

      case "Возврат":
        return {
          className: (Row_module_default()).return,
          translationText: 'return'
        };

      case "lose":
        return {
          className: (Row_module_default()).lose,
          translationText: 'lose'
        };
    }

    return {
      className: (Row_module_default()).lose,
      translationText: 'lose'
    };
  };

  const // translation consfigs
  {
    t
  } = useTranslation_default()('statistics'),
        translationPath = `tab.wallpers.`,
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
              style: {
                width: '50px',
                height: '50px'
              },
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
              style: {
                width: '50px',
                height: '50px'
              },
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
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Row_module_default()).time,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: time
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Row_module_default()).score,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: score
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Row_module_default()).statistic_wallper,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: getResult(gameResult).className,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: translate(getResult(gameResult).translationText)
            })
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Statistics/Tab/TabHeader/TabHeader.module.scss
var TabHeader_module = __webpack_require__(4124);
var TabHeader_module_default = /*#__PURE__*/__webpack_require__.n(TabHeader_module);
;// CONCATENATED MODULE: ./components/Pages/Statistics/Tab/TabHeader/TabHeader.jsx
// styles
 // translations




function TabHeader() {
  const // translation consfigs
  {
    t
  } = useTranslation_default()('statistics'),
        translationPath = 'tab.header.',
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
          children: translate('score').toUpperCase()
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./public/images/games/atletico.png
var atletico = __webpack_require__(7220);
// EXTERNAL MODULE: ./public/images/games/atletic.png
var atletic = __webpack_require__(9124);
// EXTERNAL MODULE: ./public/images/main/matches/barca.png
var barca = __webpack_require__(843);
// EXTERNAL MODULE: ./public/images/main/matches/marcel.png
var marcel = __webpack_require__(2974);
// EXTERNAL MODULE: ./public/images/main/matches/psj.png
var psj = __webpack_require__(7875);
// EXTERNAL MODULE: ./public/images/main/matches/rennais.png
var rennais = __webpack_require__(113);
;// CONCATENATED MODULE: ./components/Pages/Statistics/Tab/StatisticsTab/statistics_tab.js
// icons






const statistics_tab = [{
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Барселона',
  teamOneIcon: barca/* default.src */.Z.src,
  teamTwoName: 'ПСЖ',
  teamTwoIcon: psj/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Марсель',
  teamOneIcon: marcel/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: rennais/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'return'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'return'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'win'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'lose'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'return'
}, {
  teamOneName: 'Атлетико',
  teamOneIcon: atletico/* default.src */.Z.src,
  teamTwoName: 'Атлетик',
  teamTwoIcon: atletic/* default.src */.Z.src,
  prediction: {
    thereIs: false,
    totalBet: 'тб 1,5 / ',
    coefficent: 'коеф 3,5'
  },
  date: '14.01',
  time: '22:30',
  score: '1:0',
  gameResult: 'return'
}];
// EXTERNAL MODULE: ./components/Pages/Statistics/Tab/StatisticsTab/StatisticsTab.module.scss
var StatisticsTab_module = __webpack_require__(8081);
var StatisticsTab_module_default = /*#__PURE__*/__webpack_require__.n(StatisticsTab_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./lib/er.lib.js
var er_lib = __webpack_require__(1863);
// EXTERNAL MODULE: ./lib/request-destinations.js + 1 modules
var request_destinations = __webpack_require__(8955);
;// CONCATENATED MODULE: ./components/Pages/Statistics/Tab/StatisticsTab/StatisticsTab.jsx


 // styles 








function StatisticsTab() {
  const {
    0: statistics,
    1: setStatistics
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    getHeapStatistics();
  }, []);

  async function getHeapStatistics() {
    try {
      var _statisticsRsp$data;

      const statisticsRsp = await (0,er_lib/* request */.WY)(request_destinations/* GET_STATISTICS */.Gn, {}, {
        auth: true
      });
      setStatistics(((statisticsRsp === null || statisticsRsp === void 0 ? void 0 : (_statisticsRsp$data = statisticsRsp.data) === null || _statisticsRsp$data === void 0 ? void 0 : _statisticsRsp$data.data) || []).map(row => {
        return {
          teamOneName: ``,
          teamOneIcon: row.team1_img_path,
          teamTwoName: ``,
          teamTwoIcon: row.team2_img_path,
          date: row.date,
          time: row.time,
          prediction: row.prediction,
          score: row.score,
          gameResult: row.total
        };
      }));
    } catch (err) {}
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (StatisticsTab_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(TabHeader, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (StatisticsTab_module_default()).board,
      children: statistics.map((el, i) => /*#__PURE__*/jsx_runtime_.jsx(Row, {
        order: i + 1,
        teamOneName: el.teamOneName,
        teamOneIcon: el.teamOneIcon,
        teamTwoName: el.teamTwoName,
        teamTwoIcon: el.teamTwoIcon,
        date: el.date,
        time: el.time,
        prediction: el.prediction,
        score: el.score,
        gameResult: el.gameResult
      }, Math.random()))
    })]
  });
}
;// CONCATENATED MODULE: ./components/Pages/Statistics/Statistics.jsx
// styles
 // components





function Statistics() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Statistics_module_default()).container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Statistics_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
        page: "statistics",
        textPathName: "header.title"
      }), /*#__PURE__*/jsx_runtime_.jsx(StatisticsTab, {})]
    })
  });
}
;// CONCATENATED MODULE: ./pages/statistics.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const StatisticsPage = () => /*#__PURE__*/jsx_runtime_.jsx(Statistics, {});

StatisticsPage.layout = "withoutPhoto";
/* harmony default export */ const statistics = (StatisticsPage);
async function getStaticProps(ctx) {
  return {
    props: _objectSpread({}, await loadNamespaces_default()(_objectSpread(_objectSpread(_objectSpread({}, ctx), {}, {
      pathname: '/statistics',
      loaderName: 'getStaticProps'
    }, i18n), {}, {
      loadLocaleFrom: (l, n) => __webpack_require__(7655)(`./${l}/${n}`).then(m => m.default)
    })))
  };
}

/***/ }),

/***/ 3868:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Statistics_container__1S80R",
	"content": "Statistics_content__1M8bK"
};


/***/ }),

/***/ 9172:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Row_container__OhLJk",
	"content": "Row_content__14k-f",
	"left": "Row_left__3YJzY",
	"order": "Row_order__2Cq-5",
	"vs": "Row_vs__29UI3",
	"teamOne": "Row_teamOne__2-S8G",
	"teamTwo": "Row_teamTwo__ccX6M",
	"right": "Row_right__-bTi0",
	"prediction": "Row_prediction__2ADiU",
	"prediction_content": "Row_prediction_content__1-_Cq",
	"prediction_title": "Row_prediction_title__1URXm",
	"prediction_body": "Row_prediction_body__NVL3Z",
	"simulator": "Row_simulator__2K4VM",
	"date_time": "Row_date_time__1jlpp",
	"date": "Row_date__oLaD5",
	"time": "Row_time__bEEfz",
	"tablet_score": "Row_tablet_score__5R2jk",
	"score": "Row_score__3AoSr",
	"statistic_wallper": "Row_statistic_wallper__2dHyN",
	"win": "Row_win__qYMid",
	"lose": "Row_lose__30-bL",
	"return": "Row_return__3bUPO"
};


/***/ }),

/***/ 8081:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "StatisticsTab_container__PYv8L",
	"transition": "StatisticsTab_transition__3VxGj",
	"board": "StatisticsTab_board__1pj40"
};


/***/ }),

/***/ 4124:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "TabHeader_container__2qctP",
	"content": "TabHeader_content__3ZYcF",
	"for_tablets": "TabHeader_for_tablets__1bV8q"
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
var __webpack_exports__ = __webpack_require__.X(0, [1694,543,8402,7023,4587,3404,844], () => (__webpack_exec__(31)));
module.exports = __webpack_exports__;

})();