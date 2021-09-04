(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{99239:function(e,t,n){var i;"undefined"!=typeof self&&self,e.exports=(i=n(73882),function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Validate=t.Time=void 0;var i=o(n(5)),r=o(n(6));function o(e){return e&&e.__esModule?e:{default:e}}t.Time=i.default,t.Validate=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useInterval=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n(7));t.useInterval=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTime=t.useStopwatch=t.useTimer=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e){if((0,r.useEffect)((function(){console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead")}),[]),e.expiryTimestamp){var t=(0,o.default)(e);return i({},t,{startTimer:t.start,stopTimer:t.pause,resetTimer:function(){}})}var n=(0,a.default)(e);return i({},n,{startTimer:n.start,stopTimer:n.pause,resetTimer:n.reset})};var r=n(0),o=s(n(4)),a=s(n(8)),c=s(n(9));function s(e){return e&&e.__esModule?e:{default:e}}t.useTimer=o.default,t.useStopwatch=a.default,t.useTime=c.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{!i&&c.return&&c.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.expiryTimestamp,n=e.onExpire,d=e.autoStart,l=void 0===d||d,m=(0,o.useState)(t),f=r(m,2),p=f[0],_=f[1],v=(0,o.useState)(a.Time.getSecondsFromExpiry(p)),g=r(v,2),h=g[0],b=g[1],x=(0,o.useState)(l),A=r(x,2),w=A[0],y=A[1],T=(0,o.useState)(l),j=r(T,2),N=j[0],I=j[1],P=(0,o.useState)(u(p)),O=r(P,2),S=O[0],B=O[1];function M(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];B(u(e)),I(t),y(t),_(e),b(a.Time.getSecondsFromExpiry(e))}function E(){var e=new Date;e.setMilliseconds(e.getMilliseconds()+1e3*h),M(e)}return(0,c.useInterval)((function(){S!==s&&B(s);var e=a.Time.getSecondsFromExpiry(p);b(e),e<=0&&(a.Validate.onExpire(n)&&n(),y(!1),B(null))}),w?S:null),i({},a.Time.getTimeFromSeconds(h),{start:function(){N?(b(a.Time.getSecondsFromExpiry(p)),y(!0)):E()},pause:function(){y(!1)},resume:E,restart:M,isRunning:w})};var o=n(0),a=n(1),c=n(2),s=1e3;function u(e){if(!a.Validate.expiryTimestamp(e))return null;var t=a.Time.getSecondsFromExpiry(e),n=Math.floor(1e3*(t-Math.floor(t)));return n>0?n:s}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"getTimeFromSeconds",value:function(e){var t=Math.ceil(e),n=Math.floor(t/86400),i=Math.floor(t%86400/3600),r=Math.floor(t%3600/60);return{seconds:Math.floor(t%60),minutes:r,hours:i,days:n}}},{key:"getSecondsFromExpiry",value:function(e,t){var n=e-(new Date).getTime();if(n>0){var i=n/1e3;return t?Math.round(i):i}return 0}},{key:"getSecondsFromPrevTime",value:function(e,t){var n=(new Date).getTime()-e;if(n>0){var i=n/1e3;return t?Math.round(i):i}return 0}},{key:"getSecondsFromTimeNow",value:function(){var e=new Date;return e.getTime()/1e3-60*e.getTimezoneOffset()}},{key:"getFormattedTimeFromSeconds",value:function(t,n){var i=e.getTimeFromSeconds(t),r=i.seconds,o=i.minutes,a=i.hours,c="",s=a;return"12-hour"===n&&(c=a>=12?"pm":"am",s=a%12),{seconds:r,minutes:o,hours:s,ampm:c}}}]),e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"expiryTimestamp",value:function(e){var t=new Date(e).getTime()>0;return t||console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings",e),t}},{key:"onExpire",value:function(e){var t=e&&"function"==typeof e;return e&&!t&&console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function",e),t}}]),e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,i.useRef)();(0,i.useEffect)((function(){n.current=e})),(0,i.useEffect)((function(){if(!t)return function(){};var e=setInterval((function(){n.current&&n.current()}),t);return function(){return clearInterval(e)}}),[t])};var i=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{!i&&c.return&&c.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.autoStart,n=e.offsetTimestamp,s=(0,o.useState)(a.Time.getSecondsFromExpiry(n,!0)||0),u=r(s,2),d=u[0],l=u[1],m=(0,o.useState)(new Date),f=r(m,2),p=f[0],_=f[1],v=(0,o.useState)(d+a.Time.getSecondsFromPrevTime(p||0,!0)),g=r(v,2),h=g[0],b=g[1],x=(0,o.useState)(t),A=r(x,2),w=A[0],y=A[1];return(0,c.useInterval)((function(){b(d+a.Time.getSecondsFromPrevTime(p,!0))}),w?1e3:null),i({},a.Time.getTimeFromSeconds(h),{start:function(){var e=new Date;_(e),y(!0),b(d+a.Time.getSecondsFromPrevTime(e,!0))},pause:function(){l(h),y(!1)},reset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=a.Time.getSecondsFromExpiry(e,!0)||0,i=new Date;_(i),l(n),y(t),b(n+a.Time.getSecondsFromPrevTime(i,!0))},isRunning:w})};var o=n(0),a=n(1),c=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{!i&&c.return&&c.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.format,n=(0,o.useState)(a.Time.getSecondsFromTimeNow()),s=r(n,2),u=s[0],d=s[1];return(0,c.useInterval)((function(){d(a.Time.getSecondsFromTimeNow())}),1e3),i({},a.Time.getFormattedTimeFromSeconds(u,t))};var o=n(0),a=n(1),c=n(2)}]))},62733:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return ae},default:function(){return ce}});var i=n(63173),r=n(71433),o=n(74297),a=n.n(o),c=n(44587),s=n(24481),u=n(73882),d=n(71395),l=n(52361),m=n(61849),f=n.n(m),p=n(42087);function _(e){var t=e.onModalClose,n=e.img,i=e.title,r=e.description;return(0,p.jsx)(l.u,{onClose:t,containerStyles:f().Mcontainer,contentStyles:f().Mcontent,children:(0,p.jsxs)("div",{className:f().container,children:[(0,p.jsx)("div",{className:f().img_content,children:(0,p.jsx)("img",{src:n,alt:""})}),(0,p.jsxs)("div",{className:f().description_content,children:[(0,p.jsx)("p",{className:f().title,children:i}),(0,p.jsx)("p",{className:f().description,children:r})]})]})})}var v=n(66052),g=n.n(v);function h(e){var t=e.img_src,n=e.title,i=e.description,r={backgroundImage:"url("+t+")",backgroundSize:"cover"},o=(0,u.useState)(!1),a=o[0],c=o[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:g().container,children:[(0,p.jsxs)("div",{className:g().topLines,children:[(0,p.jsx)("div",{className:g().lineOne}),(0,p.jsx)("div",{className:g().lineTwo})]}),(0,p.jsx)("div",{className:g().content,style:r,onClick:function(){return c(!0)},children:(0,p.jsx)("p",{children:n})}),(0,p.jsxs)("div",{className:g().bottomLines,children:[(0,p.jsx)("div",{className:g().lineOne}),(0,p.jsx)("div",{className:g().lineTwo})]})]}),a&&(0,p.jsx)(_,{onModalClose:function(){return c(!1)},img:t,title:n,description:i})]})}var b=n(10366),x=n(54782),A=n(42156),w=n.n(A);function y(e){var t=e.type,n=e.onClick,i=e.isEdge,r=t===d.v.PREV?(0,p.jsx)("img",{src:x.Z.src,className:w().arrowLeft,alt:"arrow-left"}):(0,p.jsx)("img",{src:b.Z.src,className:w().arrowRight,alt:"arrow-right"});return(0,p.jsx)("div",{onClick:n,disabled:i,style:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:r})}var T=n(51431),j=n.n(T);function N(e){var t=e.pages,n=e.activePage,i=e.onClick;return(0,p.jsx)("div",{className:j().container,children:t.map((function(e){var t=n===e;return(0,p.jsx)("div",{onClick:function(){return i(e)},active:t?"true":"false",className:"".concat(j().round," ").concat(t&&j().active)},e)}))})}var I=n(27714),P=n.n(I),O=n(41863),S=n(88955);function B(){var e=(0,u.useState)([]),t=e[0],n=e[1];(0,u.useEffect)((function(){(0,O.WY)(S.uA,{},{auth:!0}).then((function(e){n(e.data.data)})).catch((function(e){console.log(e)}))}),[]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:P().container,children:(0,p.jsx)(d.Z,{itemPadding:[35,12],renderArrow:y,renderPagination:N,className:P().carousel,breakPoints:[{width:375,itemsToShow:2,itemsToScroll:2},{width:740,itemsToShow:3,itemsToScroll:3},{width:1700,itemsToShow:4,itemsToScroll:4}],children:t.map((function(e){return(0,p.jsx)(h,{img_src:e.img_path,title:e.title,description:e.text},Math.random())}))})})})}function M(){return(0,p.jsxs)("div",{className:a().container,children:[(0,p.jsx)(c.D,{page:"home",locationInPage:"news",textPathName:".title"}),(0,p.jsx)(B,{})]})}var E=n(26671),F=n.n(E),R=n(57890),k="/_next/static/image/public/images/main/prediction/arrowRight.e9dba785747491acb7998cbbb746f4c6.png",Z="/_next/static/image/public/images/main/prediction/arrowLeft.ad78976e6333778a207c8b4640c029eb.png",C="/_next/static/image/public/images/main/prediction/arrowLeftVector.d8458dada367d8155e70f31f33e7f51f.png",V="/_next/static/image/public/images/main/prediction/arrowRightVector.06d8a51874c183ecd9157b1e40cc000b.png",D=n(86813),U=n.n(D);function Y(e){var t=e.type,n=e.onClick,i=e.isEdge,r=t===d.v.PREV?(0,p.jsx)("img",{src:Z,className:U().arrowLeft,alt:"arrow-left"}):(0,p.jsx)("img",{src:k,className:U().arrowRight,alt:"arrow-right"}),o=t===d.v.PREV?(0,p.jsx)("img",{src:V,className:U().arrowRightVector,alt:"arrow-left"}):(0,p.jsx)("img",{src:C,className:U().arrowLeftVector,alt:"arrow-right"});return(0,p.jsxs)("div",{onClick:n,disabled:i,style:{position:"relative",height:"100%",bottom:0},children:[r,o]})}var L=n(60950),G=n.n(L),Q=n(99239);function K(e){var t=e.expiryTimestamp,n=e.timeClass,i=e.timeOut,r=(0,Q.useTimer)({expiryTimestamp:t,onExpire:function(){return i()}}),o=r.seconds,a=r.minutes,c=r.hours,s=r.days;return(0,p.jsx)("div",{className:n,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{children:c<10?"0"+c:s?24*s+c:c}),":",(0,p.jsx)("span",{children:a<10?"0"+a:a}),":",(0,p.jsx)("span",{children:o<10?"0"+o:o})]})})}var W=n(70346),q=n.n(W);function z(e){var t=e.teamOneName,n=e.teamTwoName,i=e.teamOneIcon,r=e.teamTwoIcon,o=e.prediction,a=e.ordinar;return(0,p.jsx)("div",{className:q().container,children:(0,p.jsxs)("div",{className:q().content,children:[(0,p.jsxs)("div",{className:q().top,children:[(0,p.jsxs)("div",{className:q().team,children:[(0,p.jsx)("img",{src:i,alt:"".concat(t,"-icon")}),(0,p.jsx)("p",{children:t})]}),(0,p.jsx)("div",{className:q().vs,children:(0,p.jsx)("p",{children:"VS."})}),(0,p.jsxs)("div",{className:q().team,children:[(0,p.jsx)("img",{src:r,alt:"".concat(r,"-icon")}),(0,p.jsx)("p",{children:n})]})]}),(0,p.jsxs)("div",{className:q().bottom,children:[(0,p.jsx)("p",{className:q().prediction,children:o}),(0,p.jsx)("p",{className:q().ordinar,children:a})]})]})})}function H(e){var t=e.teamOneName,n=e.teamTwoName,i=e.teamOneIcon,r=e.teamTwoIcon,o=e.predictionButtonName,a=e.buyButtonName,c=e.locationInMainPage,d=e.expiryTimestamp,l=e.prediction,m=e.ordinar,f=e.clickBuy,_=(0,R.useRouter)(),v=(0,s.Z)("home").t,g="".concat(c),h=function(e){return v("".concat(g).concat(e))},b=(0,u.useState)(!1),x=b[0],A=(b[1],(0,u.useState)(!1)),w=A[0],y=A[1];console.log(d);var T=(new Date).getTime(),j=new Date(d).getTime(),N=new Date;return N.setSeconds(N.getSeconds()+(j-T)/1e3),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:G().container,children:(0,p.jsxs)("div",{className:G().content,children:[(0,p.jsxs)("div",{className:G().top,children:[(0,p.jsxs)("div",{className:G().team,children:[(0,p.jsx)("img",{src:i,alt:""}),(0,p.jsx)("p",{children:t})]}),(0,p.jsxs)("div",{className:G().timer_container,children:[(0,p.jsx)("p",{children:w?"\u0418\u0433\u0440\u0430 \u043d\u0430\u0447\u0430\u043b\u0441\u044f ":"\u0418\u0433\u0440\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437"}),(0,p.jsx)(K,{expiryTimestamp:N,timeClass:G().timer,timeOut:function(){return y(!0)}})]}),(0,p.jsxs)("div",{className:G().team,children:[(0,p.jsx)("img",{src:r,alt:""}),(0,p.jsx)("p",{children:n})]}),x&&(0,p.jsx)(z,{teamOneName:t,teamTwoName:n,teamOneIcon:i,teamTwoIcon:r,prediction:l,ordinar:m})]}),(0,p.jsx)("div",{className:G().bottom,children:(0,p.jsxs)("div",{className:G().buttons,children:[(0,p.jsx)("div",{className:G().prediction_button_container,children:(0,p.jsx)("div",{className:G().prediction_button_content,onClick:function(){_.push("/prediction")},children:(0,p.jsx)("p",{children:h(o)})})}),(0,p.jsx)("div",{className:G().buy_button_container,children:(0,p.jsx)("div",{className:G().buy_button_content,onClick:f,children:(0,p.jsx)("p",{children:h(a)})})})]})})]})})})}var X=n(58566),J=n.n(X),$="/_next/static/image/public/images/main/prediction/predBack.32a89693e564b68ca4a7ab1d7e21d24a.png",ee=(n(35589),n(62499)),te=n(26834);function ne(){var e=(0,u.useState)([]),t=e[0],n=e[1],i=(0,u.useState)(null),r=i[0],o=i[1],a=(0,ee.I0)();(0,u.useEffect)((function(){(0,O.WY)(S.s2,{},{auth:!0}).then((function(e){var t;n(e.data.data.map((function(e){return{id:e.id,teamOneName:"",teamOneIcon:e.team1_img_path,teamTwoName:"",teamTwoIcon:e.team2_img_path,prediction:{thereIs:!1,totalBet:"\u0442\u0431 1,5 / ",coefficent:"\u043a\u043e\u0435\u0444 3,5"},type:e.type,date:e.date,time:e.time,coefficent:e.factor,predictionButtonName:".slide.pred_button",buyButtonName:".slide.buy_button",predictionText:"\u0424\u0443\u043b\u0445\u0435\u043c \u0442\u0431 1,5 / \u043a\u043e\u044d\u0444 3,5",ordinarText:"".concat(e.type," / ").concat(e.price,"\u0440\u0443\u0431."),price:e.price+" \u0440\u0443\u0431."}}))),(null===(t=e.data)||void 0===t?void 0:t.data.length)>0&&o(e.data.data[0].id)})).catch((function(e){}))}),[]),(0,u.useEffect)((function(){null!==r&&void 0!==r&&a((0,te.vs)(r))}),[r]);var c={backgroundImage:"url("+$+")",backgroundSize:"cover"},s=(0,R.useRouter)();return(0,p.jsx)("div",{className:J().container,style:c,children:(0,p.jsx)(d.Z,{pagination:!1,renderArrow:Y,breakPoints:[{width:375,itemPadding:[21,0,25,0]},{width:616,itemPadding:[79,0,79,0]},{width:1920,itemPadding:[115,0,43,0]}],onChange:function(e){var t;o(null===e||void 0===e||null===(t=e.item)||void 0===t?void 0:t.id)},children:t.map((function(e){return(0,p.jsx)(H,{id:e.id,teamOneName:e.teamOneName,teamTwoName:e.teamTwoName,teamOneIcon:e.teamOneIcon,teamTwoIcon:e.teamTwoIcon,predictionButtonName:e.predictionButtonName,buyButtonName:e.buyButtonName,locationInMainPage:"prediction",expiryTimestamp:"".concat(e.date.split(".").reverse().join(".")," ").concat(e.time),prediction:e.predictionText,ordinar:e.ordinarText,clickBuy:function(){return s.push({pathname:"/prediction",query:{game:e.id}})}},Math.random())}))})})}function ie(){return(0,p.jsxs)("div",{className:F().container,children:[(0,p.jsx)(c.D,{page:"home",locationInPage:"prediction",textPathName:".title"}),(0,p.jsx)(ne,{})]})}function re(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(M,{}),(0,p.jsx)(r.R,{gameRulesState:!0}),(0,p.jsx)(ie,{}),(0,p.jsx)(i.H,{page:"home",locationInPage:"testimonials",textPathName:".title"})]})}var oe=function(){return(0,p.jsx)(re,{})};oe.layout="main";var ae=!0,ce=oe},35589:function(e,t,n){"use strict";n.d(t,{j:function(){return m}});var i,r,o,a=n(5532),c=n(87220),s="/_next/static/image/public/images/main/prediction/barca.75f9e230beb79e282d7a0f369a6e666e.png",u="/_next/static/image/public/images/main/prediction/psj.ce4ac3196b901280cddb9b7e17c485fe.png",d=n(99124),l=(n(52974),n(40113)),m=[{id:"predictionslideGame1",teamOneName:"\u0410\u0442\u043b\u0435\u0442\u0438\u043a\u043e",teamOneIcon:u,teamTwoName:"\u0410\u0442\u043b\u0435\u0442\u0438\u043a",teamTwoIcon:s,prediction:{thereIs:!1,totalBet:"\u0442\u0431 1,5 / ",coefficent:"\u043a\u043e\u0435\u0444 3,5"},type:"\u041e\u0440\u0434\u0438\u043d\u0430\u0440",date:"14.01",time:"22:30",coefficent:"1.67",predictionButtonName:".slide.pred_button",buyButtonName:".slide.buy_button",predictionText:"\u0424\u0443\u043b\u0445\u0435\u043c \u0442\u0431 1,5 / \u043a\u043e\u044d\u0444 3,5",ordinarText:"\u041e\u0440\u0434\u0438\u043d\u0430\u0440 / 1500\u0440\u0443\u0431.",price:"1500 \u0440\u0443\u0431."},{id:"predictionslideGame2",teamOneName:"\u0411\u0430\u0440\u0441\u0435\u043b\u043e\u043d\u0430",teamOneIcon:d.Z.src,teamTwoName:"\u041f\u0421\u0416",teamTwoIcon:u,prediction:{thereIs:!1,totalBet:"",coefficent:""},type:"\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441",date:"14.01",time:"22:30",coefficent:"2.07",predictionButtonName:".slide.pred_button",buyButtonName:".slide.buy_button",predictionText:"\u0424\u0443\u043b\u0445\u0435\u043c \u0442\u0431 1,5 / \u043a\u043e\u044d\u0444 3,5",ordinarText:"\u041e\u0440\u0434\u0438\u043d\u0430\u0440 / 1500\u0440\u0443\u0431.",price:"2500 \u0440\u0443\u0431."},{id:"predictionslideGame3",teamOneName:"\u041c\u0430\u0440\u0441\u0435\u043b\u044c",teamOneIcon:s,teamTwoName:"\u0410\u0442\u043b\u0435\u0442\u0438\u043a",teamTwoIcon:l.Z.src,prediction:{thereIs:!1,totalBet:"",coefficent:""},type:"\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441",date:"14.01",time:"22:30",coefficent:"2.07",predictionButtonName:".slide.pred_button",buyButtonName:".slide.buy_button",predictionText:"\u0424\u0443\u043b\u0445\u0435\u043c \u0442\u0431 1,5 / \u043a\u043e\u044d\u0444 3,5",ordinarText:"\u041e\u0440\u0434\u0438\u043d\u0430\u0440 / 1500\u0440\u0443\u0431.",price:"1800 \u0440\u0443\u0431. "},(i={id:"predictionslideGame4",teamOneName:"\u0410\u0442\u043b\u0435\u0442\u0438\u043a\u043e",teamOneIcon:c.Z.src,teamTwoName:"\u0410\u0442\u043b\u0435\u0442\u0438\u043a",teamTwoIcon:d.Z.src,prediction:{thereIs:!1,totalBet:"",coefficent:""},type:"\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441",date:"14.01",time:"22:30",coefficent:"1.67",predictionButtonName:".slide.pred_button",buyButtonName:".slide.buy_button",predictionText:"\u0424\u0443\u043b\u0445\u0435\u043c \u0442\u0431 1,5 / \u043a\u043e\u044d\u0444 3,5",ordinarText:"\u041e\u0440\u0434\u0438\u043d\u0430\u0440 / 1500\u0440\u0443\u0431.",price:"1500 \u0440\u0443\u0431."},(0,a.Z)(i,"buyButtonName",".slide.buy_button"),(0,a.Z)(i,"buyButtonName",".slide.buy_button"),(0,a.Z)(i,"predictionText","\u0424\u0443\u043b\u0445\u0435\u043c \u0442\u0431 1,5 / \u043a\u043e\u044d\u0444 3,5"),(0,a.Z)(i,"ordinarText","\u041e\u0440\u0434\u0438\u043d\u0430\u0440 / 1500\u0440\u0443\u0431."),i),(r={id:"predictionslideGame5",teamOneName:"\u0410\u0442\u043b\u0435\u0442\u0438\u043a\u043e",teamOneIcon:c.Z.src,teamTwoName:"\u0410\u0442\u043b\u0435\u0442\u0438\u043a",teamTwoIcon:d.Z.src,prediction:{thereIs:!1,totalBet:"\u0442\u0431 1,5 / ",coefficent:"\u043a\u043e\u0435\u0444 3,5"},type:"\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441",date:"14.01",time:"22:30",coefficent:"1.67",predictionButtonName:".slide.pred_button",buyButtonName:".slide.buy_button",predictionText:"\u0424\u0443\u043b\u0445\u0435\u043c \u0442\u0431 1,5 / \u043a\u043e\u044d\u0444 3,5",ordinarText:"\u041e\u0440\u0434\u0438\u043d\u0430\u0440 / 1500\u0440\u0443\u0431.",price:"1500 \u0440\u0443\u0431."},(0,a.Z)(r,"predictionText","\u0424\u0443\u043b\u0445\u0435\u043c \u0442\u0431 1,5 / \u043a\u043e\u044d\u0444 3,5"),(0,a.Z)(r,"buyButtonName",".slide.buy_button"),(0,a.Z)(r,"predictionText","\u0424\u0443\u043b\u0445\u0435\u043c \u0442\u0431 1,5 / \u043a\u043e\u044d\u0444 3,5"),(0,a.Z)(r,"ordinarText","\u041e\u0440\u0434\u0438\u043d\u0430\u0440 / 1500\u0440\u0443\u0431."),r),(o={id:"predictionslideGame6",teamOneName:"\u0410\u0442\u043b\u0435\u0442\u0438\u043a\u043e",teamOneIcon:c.Z.src,teamTwoName:"\u0410\u0442\u043b\u0435\u0442\u0438\u043a",teamTwoIcon:d.Z.src,prediction:{thereIs:!1,totalBet:"",coefficent:""},type:"\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441",date:"14.01",time:"22:30",coefficent:"1.67",predictionButtonName:".slide.pred_button",buyButtonName:".slide.buy_button",predictionText:"\u0424\u0443\u043b\u0445\u0435\u043c \u0442\u0431 1,5 / \u043a\u043e\u044d\u0444 3,5",ordinarText:"\u041e\u0440\u0434\u0438\u043d\u0430\u0440 / 1500\u0440\u0443\u0431.",price:"1500 \u0440\u0443\u0431."},(0,a.Z)(o,"ordinarText","\u041e\u0440\u0434\u0438\u043d\u0430\u0440 / 1500\u0440\u0443\u0431."),(0,a.Z)(o,"buyButtonName",".slide.buy_button"),(0,a.Z)(o,"predictionText","\u0424\u0443\u043b\u0445\u0435\u043c \u0442\u0431 1,5 / \u043a\u043e\u044d\u0444 3,5"),(0,a.Z)(o,"ordinarText","\u041e\u0440\u0434\u0438\u043d\u0430\u0440 / 1500\u0440\u0443\u0431."),o)]},78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(62733)}])},99124:function(e,t){"use strict";t.Z={src:"/_next/static/image/public/images/games/atletic.283820fd26ae308542c4998747f6f150.png",height:63,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6UlEQVR42jXKv2rCUBgF8Dv4MoW+R4fOhT5L7RgXN6FLC5EUHBpq0g4XGkWw4o25XNAhEC5JMLmKUfDPoKAI0e/TDP6WwzkcEsdx7vs+cs5BCAFBEIAYjfC6AVFK7ZIkwSgMwfU8kFKCaxio0nRPGGOxruv4qmlnq9GA9Y99nlCKTqeTkMV8bl4P+FWtnjbNbzja9imLIhwrZRFPiKfZdIqrj/cce/+4rNfzRZbhgPNnUhinqZD9Pm4/jUPQ7aIMwyG50SqVO6fdPjDLwl9Kjy/l8j0pMNctFdk0zQfaauVvtdpj0f8cp3QBWfybj50+cosAAAAASUVORK5CYII="}},87220:function(e,t){"use strict";t.Z={src:"/_next/static/image/public/images/games/atletico.2ce75e21162e2e6dc48b99e6018107e0.png",height:62,width:47,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/AWxthsTe3+cx8vP6CgwKBAAGBwX2BhAOzwGDhJb/NzYuANzc4f8EBwcAyMfSARDi4QABj5Cg/BEQDQL7//8BvKq+AHt8Xv/jr6v/AWhpgv319vkCMDEl/y/87AAyS0gBw6Wq/wFeaIP/JwH2/VlWRAP++voACBMT/dCwswMBnoWO9U5QRQrt4N/8/v7/ABEdHQTFsLb3AY2ToTAoBv6mJSAYKQAAAADc4ejYyv4KWwFqI0YAlt26BrmssrsAAAABR1RORVUoUfl+lVtrSTCy4QAAAABJRU5ErkJggg=="}},52974:function(e,t){"use strict";t.Z={src:"/_next/static/image/public/images/main/matches/marcel.eb4604864ce2401aa24fb4ed271f6e83.png",height:53,width:41,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAtUlEQVR42mOon7OFlQEI7i5n0H24gkEdxG6cswkoBgLTbrjazLgQazH9YgKQbQ8RnH6dn3n6tf1AgU6GadenANnbgTQXUPW1biBeDxRYwTTt+lqgwjVAiVYGoOB2IF4ExBeBAucZpl9bAmRvZhCafm2D4PRri/mmX5sBZPcKTL+2DogXAHXcaWGYdruXYeqdUIapdwOB7MlAXMewYn5f9t5FmR4rF3Q7r13Q5rV3UZbTovlTYgAFZVfAeuZWPQAAAABJRU5ErkJggg=="}},40113:function(e,t){"use strict";t.Z={src:"/_next/static/image/public/images/main/matches/rennais.d7f597304947400fb20f05e2dae6b5fb.png",height:51,width:47,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6klEQVR42mPY3cGjkeHPeTfEguHcVgOG/c+DxK+9SFY9+22DgADDujY9c3UGhv9Hq6v/H1+65P/apLT/T2wYPv7Y4CzB0Faq5p/IwPD/18H9vx9du/pn9apV/27rMfz8M9NNl6E6XqqXgYHh/62+rt+7erv/L6uu/vNQmuH/6wqDVIZcf4Etysbm/91MDH5v8PP8/zjY89fTYO//zzNU+hgaE3gmOJkZ/WewdPi/I8jn99uo8P+Pw93/vy6TzWD4f46BozWGoV/agOHLRh2B/6/9ZF8/y2aoZEAGu6aIq52ukOn5f0BfGCYGANZKZsFc21vHAAAAAElFTkSuQmCC"}},74297:function(e){e.exports={container:"News_container__slPK_"}},27714:function(e){e.exports={container:"Slide_container__QzZBw"}},42156:function(e){e.exports={arrowLeft:"Arrow_arrowLeft__22MRj",arrowRight:"Arrow_arrowRight__fpLpC"}},61849:function(e){e.exports={Mcontainer:"ItemModal_Mcontainer__1YkMg",Mcontent:"ItemModal_Mcontent__2rvBx",container:"ItemModal_container__1jEla",img_content:"ItemModal_img_content__KIhdn",description_content:"ItemModal_description_content__16VVv",title:"ItemModal_title__2-Wp4",description:"ItemModal_description__hRGqG"}},66052:function(e){e.exports={container:"Item_container__3tq2J",topLines:"Item_topLines__1oNkW",lineOne:"Item_lineOne__5aXM9",lineTwo:"Item_lineTwo__1UUAt",content:"Item_content__2Ygd2",bottomLines:"Item_bottomLines__3UCcb"}},51431:function(e){e.exports={container:"Pagination_container__1rY2H",round:"Pagination_round__1LZTE",active:"Pagination_active__3IFgh"}},26671:function(e){e.exports={container:"Prediction_container__32bUl"}},86813:function(e){e.exports={arrowLeft:"Arrow_arrowLeft__1n2Gl",arrowRight:"Arrow_arrowRight__NZN7W",arrowRightVector:"Arrow_arrowRightVector__3zxLl",arrowLeftVector:"Arrow_arrowLeftVector__U6FSq"}},60950:function(e){e.exports={container:"Item_container__Tao5E",content:"Item_content__2tYHF",top:"Item_top__W2rB0",team:"Item_team__3GZ84",timer_container:"Item_timer_container__2g5pb",timer:"Item_timer__Ch658",bottom:"Item_bottom__gCFrh",buttons:"Item_buttons__1Bqwt",prediction_button_container:"Item_prediction_button_container__3xbjO",prediction_button_content:"Item_prediction_button_content__1W8vH",buy_button_container:"Item_buy_button_container__nPpo_",buy_button_content:"Item_buy_button_content__5PEzg"}},70346:function(e){e.exports={container:"PredictionModal_container__2Yi-d",transition:"PredictionModal_transition__w-Cvf",content:"PredictionModal_content__1Y6ZF",top:"PredictionModal_top__1-n3z",team:"PredictionModal_team__1VYDE",vs:"PredictionModal_vs__31ibN",bottom:"PredictionModal_bottom__GVkwB",prediction:"PredictionModal_prediction__3VtPj",ordinar:"PredictionModal_ordinar__2KiLF"}},58566:function(e){e.exports={container:"PrdeictionSlide_container__12MSC"}}},function(e){e.O(0,[630,1395,9509,4770,1433,3173,9774,2888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);