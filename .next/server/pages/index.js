(function() {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 9206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
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
// EXTERNAL MODULE: ./components/Pages/Main/Matches/Matches.jsx + 20 modules
var Matches = __webpack_require__(3673);
// EXTERNAL MODULE: ./components/Pages/Main/News/News.module.scss
var News_module = __webpack_require__(7672);
var News_module_default = /*#__PURE__*/__webpack_require__.n(News_module);
// EXTERNAL MODULE: ./components/Pages/common/Title/Title.jsx
var Title = __webpack_require__(7061);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(8841);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
;// CONCATENATED MODULE: ./public/images/main/news/secBack.png
/* harmony default export */ var news_secBack = ({"src":"/_next/static/image/public/images/main/news/secBack.0ced895860560a903a1c6bc33f835af3.png","height":324,"width":372,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA40lEQVR4nA3MvUrDUBiA4fezTdLBdmhNQEonBRcdxKUEBxcn8S5c3d1EvAHdvQGvoYir2KC4dLKjBBKtpCXNz0nOafaHR06fXt4vT1xpbcFvZQhLw1+pSXIhns2Q2+fXwD/0SPMKRU3WwJ8a5iX8N1AeJx/Tz3nCV5gz3OlyPLLxd5tBwySykPHVzfSt6HA33sc/6FHVCq1KFmGHTK+Ri7O9wDiuGQw93G4CSshLRRxp7PYKuX4YBZZdmKWOxGR9WnXPFGst/fzILGJH5Py+FRSqbXS5jV46pKlF/J0wwGNVZGwALRBr5bNZ+TkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/main/news/trdBack.png
/* harmony default export */ var news_trdBack = ({"src":"/_next/static/image/public/images/main/news/trdBack.163bd395eaaf0c9d5d253ead99babcfd.png","height":324,"width":372,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA2UlEQVR42g3NsU6DUBQG4P/AgVvopRAWa0y0wUQHu5uYODr4wDUOOjp1NUbHJqYxpNBSxNJeLsd+L/DR0+x5bruOhlEsLnuwvUAPfDAzrao/4bfXGa2rRkIG1ZtasskYVlzqKBBWTE6+XMjDeUWeaWV8cYNM97ikL/n+/KBs+yLO7b1CEORyfXeCq2mG1nPRpArTx1gWvwZOUTaYHzSC5BRpYlB075DREFEq8Cdn4AP5pJMBymKJrVPCMqNXLvZVDx2H4Lze2HVLx2YFpUYIowR1s8PeGMjPDv819lzNSMO9gAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/main/news/fortBack.png
/* harmony default export */ var news_fortBack = ({"src":"/_next/static/image/public/images/main/news/fortBack.2fac4a53f06e0d7b508d03958d6c11af.png","height":324,"width":372,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/AWmNVcqXBMgBaQo8APXT8gALFAgABQgHANDO4QAuKywAAWOCUMz0DA4A3N3dAM3i1gBELDYAFP39AO7m9gA1MUQAAXyNZ8slGgwA3qaNACRCZADe3tcA8xQqACAmNQDy8+4AAVZvOsvP5tgAnGKbAD4dAQDSpKAAnOsWAOsN8ADr89QAAVxvWcsjFx8AUTxGAOy8pAC+p7sAIygDAIgABgAS/QcAAVxkW8zn9u8AgT8nANu+xwCjqcgAHyoTAJ/8CQAa/PoAAUpZMMkB/foADv/zABH2BgCWzeoAAPcAAAsAAAD5BQIAW7FWDmq1I3sAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/main/slideBack.png
/* harmony default export */ var slideBack = ({"src":"/_next/static/image/public/images/main/slideBack.b09b5b243f277d8fa71421f7f1324528.png","height":324,"width":372,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA1klEQVR42g3Fv07CQBzA8e/vvBZszsSgRUUT4p/BycTdJ3D3gXwXFxNNjIvPoKMDCwMhJCKIAdrScoXewWf5yP3j09fpvpG7aI4O4fqiSes4ZrXMKJ3ySkSrn2JbPZDvzw+ZJLnYlZMs+Rcd7irdGaS+hyOaDrhq3/L89g6qonl4QjJ5RfdmKZiQdDikP/ojarTYqdUY2QobHKHbnRd+x5a9hxvOLs+phxECeIQiD9DxwVhi47Fhl+68jzgQBeuyxOYl2jRMZbMK5YT1wuO348EWwnLh2QDFKldZn6yA1gAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/Pages/Main/News/Slide/slide_show_data.js
// hooks and helpers
 // img





const slide_show_data = () => {
  const // translation consfigs
  {
    t
  } = useTranslation('home'),
        translationPath = 'news.',
        translate = key => t(`${translationPath}${key}`);

  return [{
    url: backIcon.src,
    title: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: secBack.src,
    title: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: trdBack.src,
    title: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: fortBack.src,
    title: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: backIcon.src,
    title: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: secBack.src,
    title: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: trdBack.src,
    title: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: fortBack.src,
    title: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: backIcon.src,
    title: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: secBack.src,
    title: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: trdBack.src,
    title: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: fortBack.src,
    title: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: backIcon.src,
    title: "«Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в большинстве.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: secBack.src,
    title: "Мы не поверили в пенальти «Барсы» – а зря. Он был из-за мимолетного касания в штрафной",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: trdBack.src,
    title: "«Атлетико» контролировал первый тайм дерби благодаря смелому плану Симеоне.",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }, {
    url: fortBack.src,
    title: "Гол Зидана «Байеру» – неповторимая классика ЛЧ. Как это вообще получилось?",
    description: 'Из-за гибкости нынешнего «Атлетико» сюрпризы касались внутренностей схемы. В таком составе футболисты могли расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в 6-3-1. На практике схема «Атлетико» определялась стадией игры (в среднем блоке – одна, при прессинге – другая, а в глубокой обороне – третья). Ниже разберем эти перестроения. В остальн ом состав угадывался, за исключением одной фланговой позиции. Зидан недавно назвал Асенсио железным игроком старта, поэтому речь шла об игроке на другой край. Им мог стать и Родриго, и Винисиус (тогда поменялся бы фланг Асенсио), и даже Иско (выходил слева против «Сосьедада»). Зидан выбрал Родриго. '
  }];
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-elastic-carousel"
var external_react_elastic_carousel_ = __webpack_require__(3983);
var external_react_elastic_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_elastic_carousel_);
// EXTERNAL MODULE: ./components/common/auth/Modal/Modal.jsx
var Modal = __webpack_require__(9452);
// EXTERNAL MODULE: ./components/Pages/Main/News/Slide/SlideItems/ItemModal/ItemModal.module.scss
var ItemModal_module = __webpack_require__(3938);
var ItemModal_module_default = /*#__PURE__*/__webpack_require__.n(ItemModal_module);
;// CONCATENATED MODULE: ./components/Pages/Main/News/Slide/SlideItems/ItemModal/ItemModal.jsx




function ItemModal({
  onModalClose,
  img,
  title,
  description
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
    onClose: onModalClose,
    containerStyles: (ItemModal_module_default()).Mcontainer,
    contentStyles: (ItemModal_module_default()).Mcontent,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (ItemModal_module_default()).container,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (ItemModal_module_default()).img_content,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: img,
          alt: ""
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (ItemModal_module_default()).description_content,
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (ItemModal_module_default()).title,
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (ItemModal_module_default()).description,
          children: description
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/News/Slide/SlideItems/Item/Item.module.scss
var Item_module = __webpack_require__(149);
var Item_module_default = /*#__PURE__*/__webpack_require__.n(Item_module);
;// CONCATENATED MODULE: ./components/Pages/Main/News/Slide/SlideItems/Item/Item.jsx






function Item({
  img_src,
  title,
  description
}) {
  const style = {
    backgroundImage: "url(" + img_src + ")",
    backgroundSize: "cover"
  },
        {
    0: showItemModal,
    1: setShowItemModal
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Item_module_default()).container,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Item_module_default()).topLines,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Item_module_default()).lineOne
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Item_module_default()).lineTwo
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Item_module_default()).content,
        style: style,
        onClick: () => setShowItemModal(true),
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: title
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Item_module_default()).bottomLines,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Item_module_default()).lineOne
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Item_module_default()).lineTwo
        })]
      })]
    }), showItemModal && /*#__PURE__*/jsx_runtime_.jsx(ItemModal, {
      onModalClose: () => setShowItemModal(false),
      img: img_src,
      title: title,
      description: description
    })]
  });
}
// EXTERNAL MODULE: ./public/images/main/news/arrowRight.png
var arrowRight = __webpack_require__(7715);
// EXTERNAL MODULE: ./public/images/main/news/arrowLeft.png
var arrowLeft = __webpack_require__(8318);
// EXTERNAL MODULE: ./components/Pages/Main/News/Slide/SlideItems/Arrows/Arrow.module.scss
var Arrow_module = __webpack_require__(8867);
var Arrow_module_default = /*#__PURE__*/__webpack_require__.n(Arrow_module);
;// CONCATENATED MODULE: ./components/Pages/Main/News/Slide/SlideItems/Arrows/Arrow.jsx

 // icons


 // styles 


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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    onClick: onClick,
    disabled: isEdge,
    style: styles,
    children: pointer
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/News/Slide/SlideItems/Pagination/Pagination.module.scss
var Pagination_module = __webpack_require__(3534);
var Pagination_module_default = /*#__PURE__*/__webpack_require__.n(Pagination_module);
;// CONCATENATED MODULE: ./components/Pages/Main/News/Slide/SlideItems/Pagination/Pagination.jsx


function Pagination({
  pages,
  activePage,
  onClick
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Pagination_module_default()).container,
    children: pages.map(el => {
      const isActivePage = activePage === el;
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: () => onClick(el),
        active: isActivePage ? 'true' : 'false',
        className: `${(Pagination_module_default()).round} ${isActivePage && (Pagination_module_default()).active}`
      }, el);
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/News/Slide/Slide.module.scss
var Slide_module = __webpack_require__(1123);
var Slide_module_default = /*#__PURE__*/__webpack_require__.n(Slide_module);
// EXTERNAL MODULE: ./lib/er.lib.js
var er_lib = __webpack_require__(955);
// EXTERNAL MODULE: ./lib/request-destinations.js + 1 modules
var request_destinations = __webpack_require__(9541);
;// CONCATENATED MODULE: ./components/Pages/Main/News/Slide/Slide.jsx



 // components





 // styles 





function Slide() {
  const {
    0: slide_data,
    1: setSlideData
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    (0,er_lib/* request */.WY)(request_destinations/* GET_NEWS */.uA, {}, {
      auth: true
    }).then(news => {
      setSlideData(news.data.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  const // consts and states 
  // breakpoints for slide 
  breakpoints = [{
    width: 375,
    itemsToShow: 2,
    itemsToScroll: 2
  }, {
    width: 740,
    itemsToShow: 3,
    itemsToScroll: 3
  }, {
    width: 1700,
    itemsToShow: 4,
    itemsToScroll: 4
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Slide_module_default()).container,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_elastic_carousel_default()), {
        itemPadding: [35, 12],
        renderArrow: Arrow,
        renderPagination: Pagination,
        className: (Slide_module_default()).carousel,
        breakPoints: breakpoints,
        children: slide_data.map(el => /*#__PURE__*/jsx_runtime_.jsx(Item, {
          img_src: el.img_path,
          title: el.title,
          description: el.text
        }, Math.random()))
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Pages/Main/News/News.jsx


// styles 
 // components 



function News() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (News_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
      page: "home",
      locationInPage: 'news',
      textPathName: '.title'
    }), /*#__PURE__*/jsx_runtime_.jsx(Slide, {})]
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Prediction/Prediction.module.scss
var Prediction_module = __webpack_require__(1280);
var Prediction_module_default = /*#__PURE__*/__webpack_require__.n(Prediction_module);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(8294);
;// CONCATENATED MODULE: ./public/images/main/prediction/arrowRight.png
/* harmony default export */ var prediction_arrowRight = ({"src":"/_next/static/image/public/images/main/prediction/arrowRight.e9dba785747491acb7998cbbb746f4c6.png","height":704,"width":130,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAYAAAA4GpVBAAAAF0lEQVR4nGP89++fIIgQAhEIFphAcAUB8zEYZYJ8YIEAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/main/prediction/arrowLeft.png
/* harmony default export */ var prediction_arrowLeft = ({"src":"/_next/static/image/public/images/main/prediction/arrowLeft.ad78976e6333778a207c8b4640c029eb.png","height":704,"width":129,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAYAAAA4GpVBAAAAF0lEQVR4nGP89++fIIgQAhFgFhoBkQAA8wwYY8hVOxAAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/main/prediction/arrowLeftVector.png
/* harmony default export */ var arrowLeftVector = ({"src":"/_next/static/image/public/images/main/prediction/arrowLeftVector.d8458dada367d8155e70f31f33e7f51f.png","height":38,"width":42,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAj0lEQVR42mPYyOnOvInTnZ0BCDZyeiwA4q9ALM8ABJs4PVgZkMFGLvcQIP4PVPAMiJUggpzubkCViUAcD2T7AvHmTQhFZgxAgT9ASaAAUBBIQ9nfwIq4PG4zAI1UB3JsgbQ1kNYF4k2buDxAiq8CxWQZYADqqHyo5CUgFoQ5jAnoCzaoe1qB+DxQkh/qKxYAhDFDlixaijoAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/main/prediction/arrowRightVector.png
/* harmony default export */ var arrowRightVector = ({"src":"/_next/static/image/public/images/main/prediction/arrowRightVector.06d8a51874c183ecd9157b1e40cc000b.png","height":38,"width":42,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAmElEQVR42k2OPQoCQQyFg78wKcQDiGBjZW0h1kljaS2ewFt4Di+QKfQkCnbWewPtZPxkd2EfPCa874WJRLKhoFCbM7/xRVBOPs7J+tLABaAK9RLJ99IVYE2hYqPw3rLaLqsf2D6SmRC+augfYPkb2PorgBmlZxNcKa/INny1JV+2N0zxA0jJTtIVYFC/PmG+47Mg7hiFWu8HwXBDICPPO3kAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./components/Pages/Main/Prediction/PredictionSlide/Arrows/Arrow.module.scss
var Arrows_Arrow_module = __webpack_require__(203);
var Arrows_Arrow_module_default = /*#__PURE__*/__webpack_require__.n(Arrows_Arrow_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Prediction/PredictionSlide/Arrows/Arrow.jsx


 // icons






function Arrow_Arrow({
  type,
  onClick,
  isEdge
}) {
  const pointer = type === external_react_elastic_carousel_.consts.PREV ? /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: prediction_arrowLeft.src,
    className: (Arrows_Arrow_module_default()).arrowLeft,
    alt: "arrow-left"
  }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: prediction_arrowRight.src,
    className: (Arrows_Arrow_module_default()).arrowRight,
    alt: "arrow-right"
  }),
        arrows = type === external_react_elastic_carousel_.consts.PREV ? /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: arrowRightVector.src,
    className: (Arrows_Arrow_module_default()).arrowRightVector,
    alt: "arrow-left"
  }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: arrowLeftVector.src,
    className: (Arrows_Arrow_module_default()).arrowLeftVector,
    alt: "arrow-right"
  }),
        styles = {
    position: 'relative',
    height: '100%',
    bottom: 0
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onClick: onClick,
    disabled: isEdge,
    style: styles,
    children: [pointer, arrows]
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Prediction/PredictionSlide/Item/Item.module.scss
var Item_Item_module = __webpack_require__(9255);
var Item_Item_module_default = /*#__PURE__*/__webpack_require__.n(Item_Item_module);
;// CONCATENATED MODULE: external "react-timer-hook"
var external_react_timer_hook_namespaceObject = require("react-timer-hook");;
;// CONCATENATED MODULE: ./components/Pages/Main/Prediction/PredictionSlide/Item/Timer/Timer.jsx




function Timer({
  expiryTimestamp,
  timeClass
}) {
  const {
    seconds,
    minutes,
    hours
  } = (0,external_react_timer_hook_namespaceObject.useTimer)({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called')
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: timeClass,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: hours < 10 ? "0" + hours : hours
      }), ":", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: minutes < 10 ? "0" + minutes : minutes
      }), ":", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: seconds < 10 ? "0" + seconds : seconds
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Prediction/PredictionSlide/Item/PredictionModal/PredictionModal.module.scss
var PredictionModal_module = __webpack_require__(1696);
var PredictionModal_module_default = /*#__PURE__*/__webpack_require__.n(PredictionModal_module);
;// CONCATENATED MODULE: ./components/Pages/Main/Prediction/PredictionSlide/Item/PredictionModal/PredictionModal.jsx



function PredictionModal({
  teamOneName,
  teamTwoName,
  teamOneIcon,
  teamTwoIcon,
  prediction,
  ordinar
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (PredictionModal_module_default()).container,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (PredictionModal_module_default()).content,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (PredictionModal_module_default()).top,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (PredictionModal_module_default()).team,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: teamOneIcon,
            alt: `${teamOneName}-icon`
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: teamOneName
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (PredictionModal_module_default()).vs,
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "VS."
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (PredictionModal_module_default()).team,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: teamTwoIcon,
            alt: `${teamTwoIcon}-icon`
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: teamTwoName
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (PredictionModal_module_default()).bottom,
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (PredictionModal_module_default()).prediction,
          children: prediction
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (PredictionModal_module_default()).ordinar,
          children: ordinar
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Pages/Main/Prediction/PredictionSlide/Item/Item.jsx



// hooks
 // translations

 // styles

 //components




function Item_Item({
  teamOneName,
  teamTwoName,
  teamOneIcon,
  teamTwoIcon,
  predictionButtonName,
  buyButtonName,
  locationInMainPage,
  expiryTimestamp,
  prediction,
  ordinar,
  clickBuy
}) {
  const router = (0,client_router.useRouter)();

  const // translation consfigs
  {
    t
  } = useTranslation_default()('home'),
        translationPath = `${locationInMainPage}`,
        translate = key => t(`${translationPath}${key}`),
        {
    0: showPrediction,
    1: setShowPrediction
  } = (0,external_react_.useState)(false);

  function goToPredictions() {
    // setShowPrediction(!showPrediction);
    router.push(`/prediction`);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Item_Item_module_default()).container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Item_Item_module_default()).content,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Item_Item_module_default()).top,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Item_Item_module_default()).team,
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: teamOneIcon,
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: teamOneName
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Item_Item_module_default()).timer_container,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "\u0418\u0433\u0440\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
            }), /*#__PURE__*/jsx_runtime_.jsx(Timer, {
              expiryTimestamp: expiryTimestamp,
              timeClass: (Item_Item_module_default()).timer
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Item_Item_module_default()).team,
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: teamTwoIcon,
              alt: ""
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: teamTwoName
            })]
          }), showPrediction && /*#__PURE__*/jsx_runtime_.jsx(PredictionModal, {
            teamOneName: teamOneName,
            teamTwoName: teamTwoName,
            teamOneIcon: teamOneIcon,
            teamTwoIcon: teamTwoIcon,
            prediction: prediction,
            ordinar: ordinar
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Item_Item_module_default()).bottom,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Item_Item_module_default()).buttons,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (Item_Item_module_default()).prediction_button_container,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (Item_Item_module_default()).prediction_button_content,
                onClick: () => goToPredictions(),
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: translate(predictionButtonName)
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (Item_Item_module_default()).buy_button_container,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (Item_Item_module_default()).buy_button_content,
                onClick: clickBuy,
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: translate(buyButtonName)
                })
              })
            })]
          })
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/Pages/Main/Prediction/PredictionSlide/PrdeictionSlide.module.scss
var PrdeictionSlide_module = __webpack_require__(603);
var PrdeictionSlide_module_default = /*#__PURE__*/__webpack_require__.n(PrdeictionSlide_module);
;// CONCATENATED MODULE: ./public/images/main/prediction/predBack.png
/* harmony default export */ var predBack = ({"src":"/_next/static/image/public/images/main/prediction/predBack.32a89693e564b68ca4a7ab1d7e21d24a.png","height":704,"width":1919,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/ATk+Vv4UGQsA9/jtAPv6+wADA/4AFxkiAPHu9wC6raYAATM8VP8nMS4A/Pr9AO/q5wD18O8AHSklAOTa1wDMvMMAATczPv4pNh0AGzAQAB4ZCgDs7e4AxLPvANfQ6ADx8/EAQA8rdSvvJKoAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./src/games_data/predictions/slide.js + 2 modules
var slide = __webpack_require__(789);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/features/matchSlice.js
var matchSlice = __webpack_require__(7249);
;// CONCATENATED MODULE: ./components/Pages/Main/Prediction/PredictionSlide/PrdeictionSlide.jsx

// hooks and helpers

 //components



 // styles

 // images, icons







function PrdeictionSlide() {
  const {
    0: slide_data,
    1: setSlideData
  } = (0,external_react_.useState)([]);
  const {
    0: currentMatchId,
    1: setCurrentMatchId
  } = (0,external_react_.useState)(null);
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => {
    (0,er_lib/* request */.WY)(request_destinations/* GET_PREDICTIONS */.s2, {}, {
      auth: true
    }).then(rsp => {
      var _rsp$data;

      // toast(`Successfully registered`)
      setSlideData(rsp.data.data.map(item => {
        return {
          id: item.id,
          teamOneName: '',
          teamOneIcon: item[`team1_img_path`],
          teamTwoName: '',
          teamTwoIcon: item[`team2_img_path`],
          prediction: {
            thereIs: true,
            totalBet: 'тб 1,5 / ',
            coefficent: 'коеф 3,5'
          },
          type: item.type,
          date: item.date,
          time: item.time,
          coefficent: item.factor,
          predictionButtonName: '.slide.pred_button',
          buyButtonName: '.slide.buy_button',
          predictionText: 'Фулхем тб 1,5 / коэф 3,5',
          ordinarText: `${item.type} / ${item.price}руб.`,
          price: item.price + ' руб.'
        };
      }));

      if (((_rsp$data = rsp.data) === null || _rsp$data === void 0 ? void 0 : _rsp$data.data.length) > 0) {
        setCurrentMatchId(rsp.data.data[0].id);
      }
    }).catch(error => {});
  }, []);
  (0,external_react_.useEffect)(() => {
    if (currentMatchId !== null) {
      dispatch((0,matchSlice/* setMatchId */.vs)(currentMatchId));
    }
  }, [currentMatchId]);
  const style = {
    backgroundImage: "url(" + predBack.src + ")",
    backgroundSize: "cover"
  },
        time = new Date(),
        router = (0,client_router.useRouter)(),
        breakpoints = [{
    width: 375,
    itemPadding: [21, 0, 25, 0]
  }, {
    width: 616,
    itemPadding: [79, 0, 79, 0]
  }, {
    width: 1920,
    itemPadding: [115, 0, 43, 0]
  }];
  time.setSeconds(time.getSeconds() + 10600);

  function slideChange(p) {
    var _p$item;

    setCurrentMatchId(p === null || p === void 0 ? void 0 : (_p$item = p.item) === null || _p$item === void 0 ? void 0 : _p$item.id);
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (PrdeictionSlide_module_default()).container,
    style: style,
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_elastic_carousel_default()), {
      pagination: false,
      renderArrow: Arrow_Arrow,
      breakPoints: breakpoints,
      onChange: slideChange,
      children: slide_data.map(el => /*#__PURE__*/jsx_runtime_.jsx(Item_Item, {
        id: el.id,
        teamOneName: el.teamOneName,
        teamTwoName: el.teamTwoName,
        teamOneIcon: el.teamOneIcon,
        teamTwoIcon: el.teamTwoIcon,
        predictionButtonName: el.predictionButtonName,
        buyButtonName: el.buyButtonName,
        locationInMainPage: 'prediction',
        expiryTimestamp: time,
        prediction: el.predictionText,
        ordinar: el.ordinarText,
        clickBuy: () => router.push({
          pathname: '/prediction',
          query: {
            game: el.id
          }
        })
      }, Math.random()))
    })
  });
}
;// CONCATENATED MODULE: ./components/Pages/Main/Prediction/Prediction.jsx


// styles
 // components



function Prediction() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Prediction_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
      page: "home",
      locationInPage: "prediction",
      textPathName: ".title"
    }), /*#__PURE__*/jsx_runtime_.jsx(PrdeictionSlide, {})]
  });
}
;// CONCATENATED MODULE: ./components/Pages/Main/Main.jsx



// components




function Main() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(News, {}), /*#__PURE__*/jsx_runtime_.jsx(Matches/* Matches */.R, {
      gameRulesState: true
    }), /*#__PURE__*/jsx_runtime_.jsx(Prediction, {}), /*#__PURE__*/jsx_runtime_.jsx(Testimonials/* Testimonials */.H, {
      page: 'home',
      locationInPage: 'testimonials',
      textPathName: '.title'
    })]
  });
}
;// CONCATENATED MODULE: ./pages/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const IndexPage = () => /*#__PURE__*/jsx_runtime_.jsx(Main, {});

IndexPage.layout = "main";
/* harmony default export */ var pages = (IndexPage);
async function getStaticProps(ctx) {
  return {
    props: _objectSpread({}, await loadNamespaces_default()(_objectSpread(_objectSpread(_objectSpread({}, ctx), {}, {
      pathname: '/index',
      loaderName: 'getStaticProps'
    }, i18n), {}, {
      loadLocaleFrom: (l, n) => __webpack_require__(7655)(`./${l}/${n}`).then(m => m.default)
    })))
  };
}

/***/ }),

/***/ 7672:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "News_container__slPK_"
};


/***/ }),

/***/ 1123:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Slide_container__QzZBw"
};


/***/ }),

/***/ 8867:
/***/ (function(module) {

// Exports
module.exports = {
	"arrowLeft": "Arrow_arrowLeft__22MRj",
	"arrowRight": "Arrow_arrowRight__fpLpC"
};


/***/ }),

/***/ 3938:
/***/ (function(module) {

// Exports
module.exports = {
	"Mcontainer": "ItemModal_Mcontainer__1YkMg",
	"Mcontent": "ItemModal_Mcontent__2rvBx",
	"container": "ItemModal_container__1jEla",
	"img_content": "ItemModal_img_content__KIhdn",
	"description_content": "ItemModal_description_content__16VVv",
	"title": "ItemModal_title__2-Wp4",
	"description": "ItemModal_description__hRGqG"
};


/***/ }),

/***/ 149:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Item_container__3tq2J",
	"topLines": "Item_topLines__1oNkW",
	"lineOne": "Item_lineOne__5aXM9",
	"lineTwo": "Item_lineTwo__1UUAt",
	"content": "Item_content__2Ygd2",
	"bottomLines": "Item_bottomLines__3UCcb"
};


/***/ }),

/***/ 3534:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Pagination_container__1rY2H",
	"round": "Pagination_round__1LZTE",
	"active": "Pagination_active__3IFgh"
};


/***/ }),

/***/ 1280:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Prediction_container__32bUl"
};


/***/ }),

/***/ 203:
/***/ (function(module) {

// Exports
module.exports = {
	"arrowLeft": "Arrow_arrowLeft__1n2Gl",
	"arrowRight": "Arrow_arrowRight__NZN7W",
	"arrowRightVector": "Arrow_arrowRightVector__3zxLl",
	"arrowLeftVector": "Arrow_arrowLeftVector__U6FSq"
};


/***/ }),

/***/ 9255:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Item_container__Tao5E",
	"content": "Item_content__2tYHF",
	"top": "Item_top__W2rB0",
	"team": "Item_team__3GZ84",
	"timer_container": "Item_timer_container__2g5pb",
	"timer": "Item_timer__Ch658",
	"bottom": "Item_bottom__gCFrh",
	"buttons": "Item_buttons__1Bqwt",
	"prediction_button_container": "Item_prediction_button_container__3xbjO",
	"prediction_button_content": "Item_prediction_button_content__1W8vH",
	"buy_button_container": "Item_buy_button_container__nPpo_",
	"buy_button_content": "Item_buy_button_content__5PEzg"
};


/***/ }),

/***/ 1696:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PredictionModal_container__2Yi-d",
	"transition": "PredictionModal_transition__w-Cvf",
	"content": "PredictionModal_content__1Y6ZF",
	"top": "PredictionModal_top__1-n3z",
	"team": "PredictionModal_team__1VYDE",
	"vs": "PredictionModal_vs__31ibN",
	"bottom": "PredictionModal_bottom__GVkwB",
	"prediction": "PredictionModal_prediction__3VtPj",
	"ordinar": "PredictionModal_ordinar__2KiLF"
};


/***/ }),

/***/ 603:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PrdeictionSlide_container__12MSC"
};


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

/***/ 2640:
/***/ (function(module) {

"use strict";
module.exports = require("react-beautiful-dnd");;

/***/ }),

/***/ 2668:
/***/ (function(module) {

"use strict";
module.exports = require("react-calendar");;

/***/ }),

/***/ 2268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1276,123,9452,7061,7164,730,9122,8552,3673,7674,789], function() { return __webpack_exec__(9206); });
module.exports = __webpack_exports__;

})();