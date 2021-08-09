self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; },
/* harmony export */   "persistor": function() { return /* binding */ persistor; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/userSlice */ "./redux/features/userSlice.js");
/* harmony import */ var _features_matchSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/matchSlice */ "./redux/features/matchSlice.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
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





var persistConfig = {
  key: 'root',
  version: 1,
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__.default
};
var persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistReducer)(persistConfig, (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({
  user: _features_userSlice__WEBPACK_IMPORTED_MODULE_0__.default,
  match: _features_matchSlice__WEBPACK_IMPORTED_MODULE_1__.default
}));
var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
  reducer: persistedReducer,
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [redux_persist__WEBPACK_IMPORTED_MODULE_2__.FLUSH, redux_persist__WEBPACK_IMPORTED_MODULE_2__.REHYDRATE, redux_persist__WEBPACK_IMPORTED_MODULE_2__.PAUSE, redux_persist__WEBPACK_IMPORTED_MODULE_2__.PERSIST, redux_persist__WEBPACK_IMPORTED_MODULE_2__.PURGE, redux_persist__WEBPACK_IMPORTED_MODULE_2__.REGISTER]
      }
    });
  }
});
var persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistStore)(store);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/redux-persist/es/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/redux-persist/es/constants.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEY_PREFIX": function() { return /* binding */ KEY_PREFIX; },
/* harmony export */   "FLUSH": function() { return /* binding */ FLUSH; },
/* harmony export */   "REHYDRATE": function() { return /* binding */ REHYDRATE; },
/* harmony export */   "PAUSE": function() { return /* binding */ PAUSE; },
/* harmony export */   "PERSIST": function() { return /* binding */ PERSIST; },
/* harmony export */   "PURGE": function() { return /* binding */ PURGE; },
/* harmony export */   "REGISTER": function() { return /* binding */ REGISTER; },
/* harmony export */   "DEFAULT_VERSION": function() { return /* binding */ DEFAULT_VERSION; }
/* harmony export */ });
var KEY_PREFIX = 'persist:';
var FLUSH = 'persist/FLUSH';
var REHYDRATE = 'persist/REHYDRATE';
var PAUSE = 'persist/PAUSE';
var PERSIST = 'persist/PERSIST';
var PURGE = 'persist/PURGE';
var REGISTER = 'persist/REGISTER';
var DEFAULT_VERSION = -1;

/***/ }),

/***/ "./node_modules/redux-persist/es/createMigrate.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-persist/es/createMigrate.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMigrate; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

function createMigrate(migrations, config) {
  var _ref = config || {},
      debug = _ref.debug;

  return function (state, currentVersion) {
    if (!state) {
      if ( true && debug) console.log('redux-persist: no inbound state, skipping migration');
      return Promise.resolve(undefined);
    }

    var inboundVersion = state._persist && state._persist.version !== undefined ? state._persist.version : _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_VERSION;

    if (inboundVersion === currentVersion) {
      if ( true && debug) console.log('redux-persist: versions match, noop migration');
      return Promise.resolve(state);
    }

    if (inboundVersion > currentVersion) {
      if (true) console.error('redux-persist: downgrading version is not supported');
      return Promise.resolve(state);
    }

    var migrationKeys = Object.keys(migrations).map(function (ver) {
      return parseInt(ver);
    }).filter(function (key) {
      return currentVersion >= key && key > inboundVersion;
    }).sort(function (a, b) {
      return a - b;
    });
    if ( true && debug) console.log('redux-persist: migrationKeys', migrationKeys);

    try {
      var migratedState = migrationKeys.reduce(function (state, versionKey) {
        if ( true && debug) console.log('redux-persist: running migration for versionKey', versionKey);
        return migrations[versionKey](state);
      }, state);
      return Promise.resolve(migratedState);
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/es/createPersistoid.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-persist/es/createPersistoid.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createPersistoid; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

// @TODO remove once flow < 0.63 support is no longer required.
function createPersistoid(config) {
  // defaults
  var blacklist = config.blacklist || null;
  var whitelist = config.whitelist || null;
  var transforms = config.transforms || [];
  var throttle = config.throttle || 0;
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__.KEY_PREFIX).concat(config.key);
  var storage = config.storage;
  var serialize;

  if (config.serialize === false) {
    serialize = function serialize(x) {
      return x;
    };
  } else if (typeof config.serialize === 'function') {
    serialize = config.serialize;
  } else {
    serialize = defaultSerialize;
  }

  var writeFailHandler = config.writeFailHandler || null; // initialize stateful values

  var lastState = {};
  var stagedState = {};
  var keysToProcess = [];
  var timeIterator = null;
  var writePromise = null;

  var update = function update(state) {
    // add any changed keys to the queue
    Object.keys(state).forEach(function (key) {
      if (!passWhitelistBlacklist(key)) return; // is keyspace ignored? noop

      if (lastState[key] === state[key]) return; // value unchanged? noop

      if (keysToProcess.indexOf(key) !== -1) return; // is key already queued? noop

      keysToProcess.push(key); // add key to queue
    }); //if any key is missing in the new state which was present in the lastState,
    //add it for processing too

    Object.keys(lastState).forEach(function (key) {
      if (state[key] === undefined && passWhitelistBlacklist(key) && keysToProcess.indexOf(key) === -1 && lastState[key] !== undefined) {
        keysToProcess.push(key);
      }
    }); // start the time iterator if not running (read: throttle)

    if (timeIterator === null) {
      timeIterator = setInterval(processNextKey, throttle);
    }

    lastState = state;
  };

  function processNextKey() {
    if (keysToProcess.length === 0) {
      if (timeIterator) clearInterval(timeIterator);
      timeIterator = null;
      return;
    }

    var key = keysToProcess.shift();
    var endState = transforms.reduce(function (subState, transformer) {
      return transformer.in(subState, key, lastState);
    }, lastState[key]);

    if (endState !== undefined) {
      try {
        stagedState[key] = serialize(endState);
      } catch (err) {
        console.error('redux-persist/createPersistoid: error serializing state', err);
      }
    } else {
      //if the endState is undefined, no need to persist the existing serialized content
      delete stagedState[key];
    }

    if (keysToProcess.length === 0) {
      writeStagedState();
    }
  }

  function writeStagedState() {
    // cleanup any removed keys just before write.
    Object.keys(stagedState).forEach(function (key) {
      if (lastState[key] === undefined) {
        delete stagedState[key];
      }
    });
    writePromise = storage.setItem(storageKey, serialize(stagedState)).catch(onWriteFail);
  }

  function passWhitelistBlacklist(key) {
    if (whitelist && whitelist.indexOf(key) === -1 && key !== '_persist') return false;
    if (blacklist && blacklist.indexOf(key) !== -1) return false;
    return true;
  }

  function onWriteFail(err) {
    // @TODO add fail handlers (typically storage full)
    if (writeFailHandler) writeFailHandler(err);

    if (err && "development" !== 'production') {
      console.error('Error storing data', err);
    }
  }

  var flush = function flush() {
    while (keysToProcess.length !== 0) {
      processNextKey();
    }

    return writePromise || Promise.resolve();
  }; // return `persistoid`


  return {
    update: update,
    flush: flush
  };
} // @NOTE in the future this may be exposed via config

function defaultSerialize(data) {
  return JSON.stringify(data);
}

/***/ }),

/***/ "./node_modules/redux-persist/es/createTransform.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-persist/es/createTransform.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createTransform; }
/* harmony export */ });
function createTransform( // @NOTE inbound: transform state coming from redux on its way to being serialized and stored
inbound, // @NOTE outbound: transform state coming from storage, on its way to be rehydrated into redux
outbound) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var whitelist = config.whitelist || null;
  var blacklist = config.blacklist || null;

  function whitelistBlacklistCheck(key) {
    if (whitelist && whitelist.indexOf(key) === -1) return true;
    if (blacklist && blacklist.indexOf(key) !== -1) return true;
    return false;
  }

  return {
    in: function _in(state, key, fullState) {
      return !whitelistBlacklistCheck(key) && inbound ? inbound(state, key, fullState) : state;
    },
    out: function out(state, key, fullState) {
      return !whitelistBlacklistCheck(key) && outbound ? outbound(state, key, fullState) : state;
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/es/getStoredState.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-persist/es/getStoredState.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getStoredState; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

function getStoredState(config) {
  var transforms = config.transforms || [];
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__.KEY_PREFIX).concat(config.key);
  var storage = config.storage;
  var debug = config.debug;
  var deserialize;

  if (config.deserialize === false) {
    deserialize = function deserialize(x) {
      return x;
    };
  } else if (typeof config.deserialize === 'function') {
    deserialize = config.deserialize;
  } else {
    deserialize = defaultDeserialize;
  }

  return storage.getItem(storageKey).then(function (serialized) {
    if (!serialized) return undefined;else {
      try {
        var state = {};
        var rawState = deserialize(serialized);
        Object.keys(rawState).forEach(function (key) {
          state[key] = transforms.reduceRight(function (subState, transformer) {
            return transformer.out(subState, key, rawState);
          }, deserialize(rawState[key]));
        });
        return state;
      } catch (err) {
        if ( true && debug) console.log("redux-persist/getStoredState: Error restoring data ".concat(serialized), err);
        throw err;
      }
    }
  });
}

function defaultDeserialize(serial) {
  return JSON.parse(serial);
}

/***/ }),

/***/ "./node_modules/redux-persist/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/redux-persist/es/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "persistReducer": function() { return /* reexport safe */ _persistReducer__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "persistCombineReducers": function() { return /* reexport safe */ _persistCombineReducers__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "persistStore": function() { return /* reexport safe */ _persistStore__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "createMigrate": function() { return /* reexport safe */ _createMigrate__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "createTransform": function() { return /* reexport safe */ _createTransform__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "getStoredState": function() { return /* reexport safe */ _getStoredState__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "createPersistoid": function() { return /* reexport safe */ _createPersistoid__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "purgeStoredState": function() { return /* reexport safe */ _purgeStoredState__WEBPACK_IMPORTED_MODULE_7__.default; }
/* harmony export */ });
/* harmony import */ var _persistReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persistReducer */ "./node_modules/redux-persist/es/persistReducer.js");
/* harmony import */ var _persistCombineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persistCombineReducers */ "./node_modules/redux-persist/es/persistCombineReducers.js");
/* harmony import */ var _persistStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persistStore */ "./node_modules/redux-persist/es/persistStore.js");
/* harmony import */ var _createMigrate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createMigrate */ "./node_modules/redux-persist/es/createMigrate.js");
/* harmony import */ var _createTransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransform */ "./node_modules/redux-persist/es/createTransform.js");
/* harmony import */ var _getStoredState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getStoredState */ "./node_modules/redux-persist/es/getStoredState.js");
/* harmony import */ var _createPersistoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createPersistoid */ "./node_modules/redux-persist/es/createPersistoid.js");
/* harmony import */ var _purgeStoredState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purgeStoredState */ "./node_modules/redux-persist/es/purgeStoredState.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _constants__WEBPACK_IMPORTED_MODULE_8__) if(["default","persistReducer","persistCombineReducers","persistStore","createMigrate","createTransform","getStoredState","createPersistoid","purgeStoredState"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _constants__WEBPACK_IMPORTED_MODULE_8__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);










/***/ }),

/***/ "./node_modules/redux-persist/es/persistCombineReducers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/redux-persist/es/persistCombineReducers.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ persistCombineReducers; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _persistReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persistReducer */ "./node_modules/redux-persist/es/persistReducer.js");
/* harmony import */ var _stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateReconciler/autoMergeLevel2 */ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js");



// combineReducers + persistReducer with stateReconciler defaulted to autoMergeLevel2
function persistCombineReducers(config, reducers) {
  config.stateReconciler = config.stateReconciler === undefined ? _stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_1__.default : config.stateReconciler;
  return (0,_persistReducer__WEBPACK_IMPORTED_MODULE_0__.default)(config, (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)(reducers));
}

/***/ }),

/***/ "./node_modules/redux-persist/es/persistReducer.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-persist/es/persistReducer.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ persistReducer; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");
/* harmony import */ var _stateReconciler_autoMergeLevel1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateReconciler/autoMergeLevel1 */ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js");
/* harmony import */ var _createPersistoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPersistoid */ "./node_modules/redux-persist/es/createPersistoid.js");
/* harmony import */ var _getStoredState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getStoredState */ "./node_modules/redux-persist/es/getStoredState.js");
/* harmony import */ var _purgeStoredState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purgeStoredState */ "./node_modules/redux-persist/es/purgeStoredState.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var DEFAULT_TIMEOUT = 5000;
/*
  @TODO add validation / handling for:
  - persisting a reducer which has nested _persist
  - handling actions that fire before reydrate is called
*/

function persistReducer(config, baseReducer) {
  if (true) {
    if (!config) throw new Error('config is required for persistReducer');
    if (!config.key) throw new Error('key is required in persistor config');
    if (!config.storage) throw new Error("redux-persist: config.storage is required. Try using one of the provided storage engines `import storage from 'redux-persist/lib/storage'`");
  }

  var version = config.version !== undefined ? config.version : _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_VERSION;
  var debug = config.debug || false;
  var stateReconciler = config.stateReconciler === undefined ? _stateReconciler_autoMergeLevel1__WEBPACK_IMPORTED_MODULE_1__.default : config.stateReconciler;
  var getStoredState = config.getStoredState || _getStoredState__WEBPACK_IMPORTED_MODULE_3__.default;
  var timeout = config.timeout !== undefined ? config.timeout : DEFAULT_TIMEOUT;
  var _persistoid = null;
  var _purge = false;
  var _paused = true;

  var conditionalUpdate = function conditionalUpdate(state) {
    // update the persistoid only if we are rehydrated and not paused
    state._persist.rehydrated && _persistoid && !_paused && _persistoid.update(state);
    return state;
  };

  return function (state, action) {
    var _ref = state || {},
        _persist = _ref._persist,
        rest = _objectWithoutProperties(_ref, ["_persist"]); // $FlowIgnore need to update State type


    var restState = rest;

    if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.PERSIST) {
      var _sealed = false;

      var _rehydrate = function _rehydrate(payload, err) {
        // dev warning if we are already sealed
        if ( true && _sealed) console.error("redux-persist: rehydrate for \"".concat(config.key, "\" called after timeout."), payload, err); // only rehydrate if we are not already sealed

        if (!_sealed) {
          action.rehydrate(config.key, payload, err);
          _sealed = true;
        }
      };

      timeout && setTimeout(function () {
        !_sealed && _rehydrate(undefined, new Error("redux-persist: persist timed out for persist key \"".concat(config.key, "\"")));
      }, timeout); // @NOTE PERSIST resumes if paused.

      _paused = false; // @NOTE only ever create persistoid once, ensure we call it at least once, even if _persist has already been set

      if (!_persistoid) _persistoid = (0,_createPersistoid__WEBPACK_IMPORTED_MODULE_2__.default)(config); // @NOTE PERSIST can be called multiple times, noop after the first

      if (_persist) {
        // We still need to call the base reducer because there might be nested
        // uses of persistReducer which need to be aware of the PERSIST action
        return _objectSpread({}, baseReducer(restState, action), {
          _persist: _persist
        });
      }

      if (typeof action.rehydrate !== 'function' || typeof action.register !== 'function') throw new Error('redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.');
      action.register(config.key);
      getStoredState(config).then(function (restoredState) {
        var migrate = config.migrate || function (s, v) {
          return Promise.resolve(s);
        };

        migrate(restoredState, version).then(function (migratedState) {
          _rehydrate(migratedState);
        }, function (migrateErr) {
          if ( true && migrateErr) console.error('redux-persist: migration error', migrateErr);

          _rehydrate(undefined, migrateErr);
        });
      }, function (err) {
        _rehydrate(undefined, err);
      });
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: {
          version: version,
          rehydrated: false
        }
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.PURGE) {
      _purge = true;
      action.result((0,_purgeStoredState__WEBPACK_IMPORTED_MODULE_4__.default)(config));
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.FLUSH) {
      action.result(_persistoid && _persistoid.flush());
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.PAUSE) {
      _paused = true;
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.REHYDRATE) {
      // noop on restState if purging
      if (_purge) return _objectSpread({}, restState, {
        _persist: _objectSpread({}, _persist, {
          rehydrated: true
        }) // @NOTE if key does not match, will continue to default else below

      });

      if (action.key === config.key) {
        var reducedState = baseReducer(restState, action);
        var inboundState = action.payload; // only reconcile state if stateReconciler and inboundState are both defined

        var reconciledRest = stateReconciler !== false && inboundState !== undefined ? stateReconciler(inboundState, state, reducedState, config) : reducedState;

        var _newState = _objectSpread({}, reconciledRest, {
          _persist: _objectSpread({}, _persist, {
            rehydrated: true
          })
        });

        return conditionalUpdate(_newState);
      }
    } // if we have not already handled PERSIST, straight passthrough


    if (!_persist) return baseReducer(state, action); // run base reducer:
    // is state modified ? return original : return updated

    var newState = baseReducer(restState, action);
    if (newState === restState) return state;
    return conditionalUpdate(_objectSpread({}, newState, {
      _persist: _persist
    }));
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/es/persistStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-persist/es/persistStore.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ persistStore; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  registry: [],
  bootstrapped: false
};

var persistorReducer = function persistorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER:
      return _objectSpread({}, state, {
        registry: [].concat(_toConsumableArray(state.registry), [action.key])
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.REHYDRATE:
      var firstIndex = state.registry.indexOf(action.key);

      var registry = _toConsumableArray(state.registry);

      registry.splice(firstIndex, 1);
      return _objectSpread({}, state, {
        registry: registry,
        bootstrapped: registry.length === 0
      });

    default:
      return state;
  }
};

function persistStore(store, options, cb) {
  // help catch incorrect usage of passing PersistConfig in as PersistorOptions
  if (true) {
    var optionsToTest = options || {};
    var bannedKeys = ['blacklist', 'whitelist', 'transforms', 'storage', 'keyPrefix', 'migrate'];
    bannedKeys.forEach(function (k) {
      if (!!optionsToTest[k]) console.error("redux-persist: invalid option passed to persistStore: \"".concat(k, "\". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer."));
    });
  }

  var boostrappedCb = cb || false;

  var _pStore = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(persistorReducer, initialState, options && options.enhancer ? options.enhancer : undefined);

  var register = function register(key) {
    _pStore.dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER,
      key: key
    });
  };

  var rehydrate = function rehydrate(key, payload, err) {
    var rehydrateAction = {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.REHYDRATE,
      payload: payload,
      err: err,
      key: key // dispatch to `store` to rehydrate and `persistor` to track result

    };
    store.dispatch(rehydrateAction);

    _pStore.dispatch(rehydrateAction);

    if (boostrappedCb && persistor.getState().bootstrapped) {
      boostrappedCb();
      boostrappedCb = false;
    }
  };

  var persistor = _objectSpread({}, _pStore, {
    purge: function purge() {
      var results = [];
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.PURGE,
        result: function result(purgeResult) {
          results.push(purgeResult);
        }
      });
      return Promise.all(results);
    },
    flush: function flush() {
      var results = [];
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.FLUSH,
        result: function result(flushResult) {
          results.push(flushResult);
        }
      });
      return Promise.all(results);
    },
    pause: function pause() {
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.PAUSE
      });
    },
    persist: function persist() {
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.PERSIST,
        register: register,
        rehydrate: rehydrate
      });
    }
  });

  if (!(options && options.manualPersist)) {
    persistor.persist();
  }

  return persistor;
}

/***/ }),

/***/ "./node_modules/redux-persist/es/purgeStoredState.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-persist/es/purgeStoredState.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ purgeStoredState; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

function purgeStoredState(config) {
  var storage = config.storage;
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__.KEY_PREFIX).concat(config.key);
  return storage.removeItem(storageKey, warnIfRemoveError);
}

function warnIfRemoveError(err) {
  if (err && "development" !== 'production') {
    console.error('redux-persist/purgeStoredState: Error purging data stored state', err);
  }
}

/***/ }),

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ autoMergeLevel1; }
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  autoMergeLevel1: 
    - merges 1 level of substate
    - skips substate if already modified
*/
function autoMergeLevel1(inboundState, originalState, reducedState, _ref) {
  var debug = _ref.debug;

  var newState = _objectSpread({}, reducedState); // only rehydrate if inboundState exists and is an object


  if (inboundState && _typeof(inboundState) === 'object') {
    Object.keys(inboundState).forEach(function (key) {
      // ignore _persist data
      if (key === '_persist') return; // if reducer modifies substate, skip auto rehydration

      if (originalState[key] !== reducedState[key]) {
        if ( true && debug) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
        return;
      } // otherwise hard set the new value


      newState[key] = inboundState[key];
    });
  }

  if ( true && debug && inboundState && _typeof(inboundState) === 'object') console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(inboundState).join(', '), "'"));
  return newState;
}

/***/ }),

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ autoMergeLevel2; }
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  autoMergeLevel2: 
    - merges 2 level of substate
    - skips substate if already modified
    - this is essentially redux-perist v4 behavior
*/
function autoMergeLevel2(inboundState, originalState, reducedState, _ref) {
  var debug = _ref.debug;

  var newState = _objectSpread({}, reducedState); // only rehydrate if inboundState exists and is an object


  if (inboundState && _typeof(inboundState) === 'object') {
    Object.keys(inboundState).forEach(function (key) {
      // ignore _persist data
      if (key === '_persist') return; // if reducer modifies substate, skip auto rehydration

      if (originalState[key] !== reducedState[key]) {
        if ( true && debug) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
        return;
      }

      if (isPlainEnoughObject(reducedState[key])) {
        // if object is plain enough shallow merge the new values (hence "Level2")
        newState[key] = _objectSpread({}, newState[key], {}, inboundState[key]);
        return;
      } // otherwise hard set


      newState[key] = inboundState[key];
    });
  }

  if ( true && debug && inboundState && _typeof(inboundState) === 'object') console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(inboundState).join(', '), "'"));
  return newState;
}

function isPlainEnoughObject(o) {
  return o !== null && !Array.isArray(o) && _typeof(o) === 'object';
}

/***/ }),

/***/ "./node_modules/redux-persist/lib/storage/createWebStorage.js":
/*!********************************************************************!*\
  !*** ./node_modules/redux-persist/lib/storage/createWebStorage.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createWebStorage;

var _getStorage = _interopRequireDefault(__webpack_require__(/*! ./getStorage */ "./node_modules/redux-persist/lib/storage/getStorage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWebStorage(type) {
  var storage = (0, _getStorage.default)(type);
  return {
    getItem: function getItem(key) {
      return new Promise(function (resolve, reject) {
        resolve(storage.getItem(key));
      });
    },
    setItem: function setItem(key, item) {
      return new Promise(function (resolve, reject) {
        resolve(storage.setItem(key, item));
      });
    },
    removeItem: function removeItem(key) {
      return new Promise(function (resolve, reject) {
        resolve(storage.removeItem(key));
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/lib/storage/getStorage.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-persist/lib/storage/getStorage.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = getStorage;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function noop() {}

var noopStorage = {
  getItem: noop,
  setItem: noop,
  removeItem: noop
};

function hasStorage(storageType) {
  if ((typeof self === "undefined" ? "undefined" : _typeof(self)) !== 'object' || !(storageType in self)) {
    return false;
  }

  try {
    var storage = self[storageType];
    var testKey = "redux-persist ".concat(storageType, " test");
    storage.setItem(testKey, 'test');
    storage.getItem(testKey);
    storage.removeItem(testKey);
  } catch (e) {
    if (true) console.warn("redux-persist ".concat(storageType, " test failed, persistence will be disabled."));
    return false;
  }

  return true;
}

function getStorage(type) {
  var storageType = "".concat(type, "Storage");
  if (hasStorage(storageType)) return self[storageType];else {
    if (true) {
      console.error("redux-persist failed to create sync storage. falling back to noop storage.");
    }

    return noopStorage;
  }
}

/***/ }),

/***/ "./node_modules/redux-persist/lib/storage/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-persist/lib/storage/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _createWebStorage = _interopRequireDefault(__webpack_require__(/*! ./createWebStorage */ "./node_modules/redux-persist/lib/storage/createWebStorage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createWebStorage.default)('local');

exports.default = _default;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvY3JlYXRlTWlncmF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvY3JlYXRlUGVyc2lzdG9pZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvY3JlYXRlVHJhbnNmb3JtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtcGVyc2lzdC9lcy9nZXRTdG9yZWRTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3BlcnNpc3RDb21iaW5lUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3BlcnNpc3RSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtcGVyc2lzdC9lcy9wZXJzaXN0U3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3B1cmdlU3RvcmVkU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2NyZWF0ZVdlYlN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2dldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2luZGV4LmpzIl0sIm5hbWVzIjpbInBlcnNpc3RDb25maWciLCJrZXkiLCJ2ZXJzaW9uIiwic3RvcmFnZSIsInBlcnNpc3RlZFJlZHVjZXIiLCJwZXJzaXN0UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJ1c2VyUmVkdWNlciIsIm1hdGNoIiwibWF0Y2hSZWR1Y2VyIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJzZXJpYWxpemFibGVDaGVjayIsImlnbm9yZWRBY3Rpb25zIiwiRkxVU0giLCJSRUhZRFJBVEUiLCJQQVVTRSIsIlBFUlNJU1QiLCJQVVJHRSIsIlJFR0lTVEVSIiwicGVyc2lzdG9yIiwicGVyc2lzdFN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNsQkMsS0FBRyxFQUFFLE1BRGE7QUFFbEJDLFNBQU8sRUFBRSxDQUZTO0FBR2xCQyxTQUFPLEVBQVBBLDhEQUFPQTtBQUhXLENBQXRCO0FBTUEsSUFBTUMsZ0JBQWdCLEdBQUdDLDZEQUFjLENBQUNMLGFBQUQsRUFBZ0JNLGlFQUFlLENBQUU7QUFDcEVDLE1BQUksRUFBRUMsd0RBRDhEO0FBRXBFQyxPQUFLLEVBQUVDLHlEQUFZQTtB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QUFxQjs7QUFFN1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsUUFBUSxJQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDM0NhOztBQUViLGtCQUFrQjtBQUNsQixlQUFlOztBQUVmLCtDQUErQyxtQkFBTyxDQUFDLHdGQUFvQjs7QUFFM0Usc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBLGVBQWUsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc0NDhjYWQ1Y2QxMWRhYjFmMGY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoLypyZWR1Y2VyIGZ1bmN0aW9uKi8oc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgICAgaWYgKGFjdGlvbi50eXBlID09PSBcImxvZ2luXCIpIHtcclxuLy8gICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICAgICAgY3VycmVudFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkLm5hbWVcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBzdGF0ZVxyXG4vLyB9LCB7XHJcbi8vICAgICBjdXJyZW50VXNlcjoge1xyXG4vLyAgICAgICAgIG5hbWU6ICdFcmlrIE11cmFkeWFuJ1xyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tIFwiLi9mZWF0dXJlcy91c2VyU2xpY2VcIjtcclxuaW1wb3J0IG1hdGNoUmVkdWNlciBmcm9tIFwiLi9mZWF0dXJlcy9tYXRjaFNsaWNlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgcGVyc2lzdFN0b3JlLFxyXG4gICAgcGVyc2lzdFJlZHVjZXIsXHJcbiAgICBGTFVTSCxcclxuICAgIFJFSFlEUkFURSxcclxuICAgIFBBVVNFLFxyXG4gICAgUEVSU0lTVCxcclxuICAgIFBVUkdFLFxyXG4gICAgUkVHSVNURVIsXHJcbiAgfSBmcm9tICdyZWR1eC1wZXJzaXN0J1xyXG4gIFxyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJ1xyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleTogJ3Jvb3QnLFxyXG4gICAgdmVyc2lvbjogMSxcclxuICAgIHN0b3JhZ2UsXHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCBjb21iaW5lUmVkdWNlcnMoIHtcclxuICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxyXG4gICAgbWF0Y2g6IG1hdGNoUmVkdWNlclxyXG59ICkgKVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjogcGVyc2lzdGVkUmVkdWNlcixcclxuICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cclxuICAgICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xyXG4gICAgICAgIHNlcmlhbGl6YWJsZUNoZWNrOiB7XHJcbiAgICAgICAgICBpZ25vcmVkQWN0aW9uczogW0ZMVVNILCBSRUhZRFJBVEUsIFBBVVNFLCBQRVJTSVNULCBQVVJHRSwgUkVHSVNURVJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG59KVxyXG4gIFxyXG5leHBvcnQgY29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKVxyXG5cclxuXHJcbiIsImV4cG9ydCB2YXIgS0VZX1BSRUZJWCA9ICdwZXJzaXN0Oic7XG5leHBvcnQgdmFyIEZMVVNIID0gJ3BlcnNpc3QvRkxVU0gnO1xuZXhwb3J0IHZhciBSRUhZRFJBVEUgPSAncGVyc2lzdC9SRUhZRFJBVEUnO1xuZXhwb3J0IHZhciBQQVVTRSA9ICdwZXJzaXN0L1BBVVNFJztcbmV4cG9ydCB2YXIgUEVSU0lTVCA9ICdwZXJzaXN0L1BFUlNJU1QnO1xuZXhwb3J0IHZhciBQVVJHRSA9ICdwZXJzaXN0L1BVUkdFJztcbmV4cG9ydCB2YXIgUkVHSVNURVIgPSAncGVyc2lzdC9SRUdJU1RFUic7XG5leHBvcnQgdmFyIERFRkFVTFRfVkVSU0lPTiA9IC0xOyIsImltcG9ydCB7IERFRkFVTFRfVkVSU0lPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1pZ3JhdGUobWlncmF0aW9ucywgY29uZmlnKSB7XG4gIHZhciBfcmVmID0gY29uZmlnIHx8IHt9LFxuICAgICAgZGVidWcgPSBfcmVmLmRlYnVnO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGN1cnJlbnRWZXJzaW9uKSB7XG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGVidWcpIGNvbnNvbGUubG9nKCdyZWR1eC1wZXJzaXN0OiBubyBpbmJvdW5kIHN0YXRlLCBza2lwcGluZyBtaWdyYXRpb24nKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICB2YXIgaW5ib3VuZFZlcnNpb24gPSBzdGF0ZS5fcGVyc2lzdCAmJiBzdGF0ZS5fcGVyc2lzdC52ZXJzaW9uICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5fcGVyc2lzdC52ZXJzaW9uIDogREVGQVVMVF9WRVJTSU9OO1xuXG4gICAgaWYgKGluYm91bmRWZXJzaW9uID09PSBjdXJyZW50VmVyc2lvbikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGVidWcpIGNvbnNvbGUubG9nKCdyZWR1eC1wZXJzaXN0OiB2ZXJzaW9ucyBtYXRjaCwgbm9vcCBtaWdyYXRpb24nKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChpbmJvdW5kVmVyc2lvbiA+IGN1cnJlbnRWZXJzaW9uKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgY29uc29sZS5lcnJvcigncmVkdXgtcGVyc2lzdDogZG93bmdyYWRpbmcgdmVyc2lvbiBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0YXRlKTtcbiAgICB9XG5cbiAgICB2YXIgbWlncmF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKG1pZ3JhdGlvbnMpLm1hcChmdW5jdGlvbiAodmVyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmVyKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRWZXJzaW9uID49IGtleSAmJiBrZXkgPiBpbmJvdW5kVmVyc2lvbjtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGVidWcpIGNvbnNvbGUubG9nKCdyZWR1eC1wZXJzaXN0OiBtaWdyYXRpb25LZXlzJywgbWlncmF0aW9uS2V5cyk7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIG1pZ3JhdGVkU3RhdGUgPSBtaWdyYXRpb25LZXlzLnJlZHVjZShmdW5jdGlvbiAoc3RhdGUsIHZlcnNpb25LZXkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGVidWcpIGNvbnNvbGUubG9nKCdyZWR1eC1wZXJzaXN0OiBydW5uaW5nIG1pZ3JhdGlvbiBmb3IgdmVyc2lvbktleScsIHZlcnNpb25LZXkpO1xuICAgICAgICByZXR1cm4gbWlncmF0aW9uc1t2ZXJzaW9uS2V5XShzdGF0ZSk7XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1pZ3JhdGVkU3RhdGUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxuICB9O1xufSIsImltcG9ydCB7IEtFWV9QUkVGSVgsIFJFSFlEUkFURSB9IGZyb20gJy4vY29uc3RhbnRzJztcbi8vIEBUT0RPIHJlbW92ZSBvbmNlIGZsb3cgPCAwLjYzIHN1cHBvcnQgaXMgbm8gbG9uZ2VyIHJlcXVpcmVkLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGVyc2lzdG9pZChjb25maWcpIHtcbiAgLy8gZGVmYXVsdHNcbiAgdmFyIGJsYWNrbGlzdCA9IGNvbmZpZy5ibGFja2xpc3QgfHwgbnVsbDtcbiAgdmFyIHdoaXRlbGlzdCA9IGNvbmZpZy53aGl0ZWxpc3QgfHwgbnVsbDtcbiAgdmFyIHRyYW5zZm9ybXMgPSBjb25maWcudHJhbnNmb3JtcyB8fCBbXTtcbiAgdmFyIHRocm90dGxlID0gY29uZmlnLnRocm90dGxlIHx8IDA7XG4gIHZhciBzdG9yYWdlS2V5ID0gXCJcIi5jb25jYXQoY29uZmlnLmtleVByZWZpeCAhPT0gdW5kZWZpbmVkID8gY29uZmlnLmtleVByZWZpeCA6IEtFWV9QUkVGSVgpLmNvbmNhdChjb25maWcua2V5KTtcbiAgdmFyIHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcbiAgdmFyIHNlcmlhbGl6ZTtcblxuICBpZiAoY29uZmlnLnNlcmlhbGl6ZSA9PT0gZmFsc2UpIHtcbiAgICBzZXJpYWxpemUgPSBmdW5jdGlvbiBzZXJpYWxpemUoeCkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnLnNlcmlhbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNlcmlhbGl6ZSA9IGNvbmZpZy5zZXJpYWxpemU7XG4gIH0gZWxzZSB7XG4gICAgc2VyaWFsaXplID0gZGVmYXVsdFNlcmlhbGl6ZTtcbiAgfVxuXG4gIHZhciB3cml0ZUZhaWxIYW5kbGVyID0gY29uZmlnLndyaXRlRmFpbEhhbmRsZXIgfHwgbnVsbDsgLy8gaW5pdGlhbGl6ZSBzdGF0ZWZ1bCB2YWx1ZXNcblxuICB2YXIgbGFzdFN0YXRlID0ge307XG4gIHZhciBzdGFnZWRTdGF0ZSA9IHt9O1xuICB2YXIga2V5c1RvUHJvY2VzcyA9IFtdO1xuICB2YXIgdGltZUl0ZXJhdG9yID0gbnVsbDtcbiAgdmFyIHdyaXRlUHJvbWlzZSA9IG51bGw7XG5cbiAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xuICAgIC8vIGFkZCBhbnkgY2hhbmdlZCBrZXlzIHRvIHRoZSBxdWV1ZVxuICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmICghcGFzc1doaXRlbGlzdEJsYWNrbGlzdChrZXkpKSByZXR1cm47IC8vIGlzIGtleXNwYWNlIGlnbm9yZWQ/IG5vb3BcblxuICAgICAgaWYgKGxhc3RTdGF0ZVtrZXldID09PSBzdGF0ZVtrZXldKSByZXR1cm47IC8vIHZhbHVlIHVuY2hhbmdlZD8gbm9vcFxuXG4gICAgICBpZiAoa2V5c1RvUHJvY2Vzcy5pbmRleE9mKGtleSkgIT09IC0xKSByZXR1cm47IC8vIGlzIGtleSBhbHJlYWR5IHF1ZXVlZD8gbm9vcFxuXG4gICAgICBrZXlzVG9Qcm9jZXNzLnB1c2goa2V5KTsgLy8gYWRkIGtleSB0byBxdWV1ZVxuICAgIH0pOyAvL2lmIGFueSBrZXkgaXMgbWlzc2luZyBpbiB0aGUgbmV3IHN0YXRlIHdoaWNoIHdhcyBwcmVzZW50IGluIHRoZSBsYXN0U3RhdGUsXG4gICAgLy9hZGQgaXQgZm9yIHByb2Nlc3NpbmcgdG9vXG5cbiAgICBPYmplY3Qua2V5cyhsYXN0U3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKHN0YXRlW2tleV0gPT09IHVuZGVmaW5lZCAmJiBwYXNzV2hpdGVsaXN0QmxhY2tsaXN0KGtleSkgJiYga2V5c1RvUHJvY2Vzcy5pbmRleE9mKGtleSkgPT09IC0xICYmIGxhc3RTdGF0ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5c1RvUHJvY2Vzcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7IC8vIHN0YXJ0IHRoZSB0aW1lIGl0ZXJhdG9yIGlmIG5vdCBydW5uaW5nIChyZWFkOiB0aHJvdHRsZSlcblxuICAgIGlmICh0aW1lSXRlcmF0b3IgPT09IG51bGwpIHtcbiAgICAgIHRpbWVJdGVyYXRvciA9IHNldEludGVydmFsKHByb2Nlc3NOZXh0S2V5LCB0aHJvdHRsZSk7XG4gICAgfVxuXG4gICAgbGFzdFN0YXRlID0gc3RhdGU7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc05leHRLZXkoKSB7XG4gICAgaWYgKGtleXNUb1Byb2Nlc3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGltZUl0ZXJhdG9yKSBjbGVhckludGVydmFsKHRpbWVJdGVyYXRvcik7XG4gICAgICB0aW1lSXRlcmF0b3IgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBrZXkgPSBrZXlzVG9Qcm9jZXNzLnNoaWZ0KCk7XG4gICAgdmFyIGVuZFN0YXRlID0gdHJhbnNmb3Jtcy5yZWR1Y2UoZnVuY3Rpb24gKHN1YlN0YXRlLCB0cmFuc2Zvcm1lcikge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybWVyLmluKHN1YlN0YXRlLCBrZXksIGxhc3RTdGF0ZSk7XG4gICAgfSwgbGFzdFN0YXRlW2tleV0pO1xuXG4gICAgaWYgKGVuZFN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YWdlZFN0YXRlW2tleV0gPSBzZXJpYWxpemUoZW5kU3RhdGUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3JlZHV4LXBlcnNpc3QvY3JlYXRlUGVyc2lzdG9pZDogZXJyb3Igc2VyaWFsaXppbmcgc3RhdGUnLCBlcnIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL2lmIHRoZSBlbmRTdGF0ZSBpcyB1bmRlZmluZWQsIG5vIG5lZWQgdG8gcGVyc2lzdCB0aGUgZXhpc3Rpbmcgc2VyaWFsaXplZCBjb250ZW50XG4gICAgICBkZWxldGUgc3RhZ2VkU3RhdGVba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoa2V5c1RvUHJvY2Vzcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdyaXRlU3RhZ2VkU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3cml0ZVN0YWdlZFN0YXRlKCkge1xuICAgIC8vIGNsZWFudXAgYW55IHJlbW92ZWQga2V5cyBqdXN0IGJlZm9yZSB3cml0ZS5cbiAgICBPYmplY3Qua2V5cyhzdGFnZWRTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAobGFzdFN0YXRlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgc3RhZ2VkU3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3cml0ZVByb21pc2UgPSBzdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgc2VyaWFsaXplKHN0YWdlZFN0YXRlKSkuY2F0Y2gob25Xcml0ZUZhaWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFzc1doaXRlbGlzdEJsYWNrbGlzdChrZXkpIHtcbiAgICBpZiAod2hpdGVsaXN0ICYmIHdoaXRlbGlzdC5pbmRleE9mKGtleSkgPT09IC0xICYmIGtleSAhPT0gJ19wZXJzaXN0JykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChibGFja2xpc3QgJiYgYmxhY2tsaXN0LmluZGV4T2Yoa2V5KSAhPT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uV3JpdGVGYWlsKGVycikge1xuICAgIC8vIEBUT0RPIGFkZCBmYWlsIGhhbmRsZXJzICh0eXBpY2FsbHkgc3RvcmFnZSBmdWxsKVxuICAgIGlmICh3cml0ZUZhaWxIYW5kbGVyKSB3cml0ZUZhaWxIYW5kbGVyKGVycik7XG5cbiAgICBpZiAoZXJyICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN0b3JpbmcgZGF0YScsIGVycik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgd2hpbGUgKGtleXNUb1Byb2Nlc3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICBwcm9jZXNzTmV4dEtleSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZVByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07IC8vIHJldHVybiBgcGVyc2lzdG9pZGBcblxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgZmx1c2g6IGZsdXNoXG4gIH07XG59IC8vIEBOT1RFIGluIHRoZSBmdXR1cmUgdGhpcyBtYXkgYmUgZXhwb3NlZCB2aWEgY29uZmlnXG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXJpYWxpemUoZGF0YSkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVHJhbnNmb3JtKCAvLyBATk9URSBpbmJvdW5kOiB0cmFuc2Zvcm0gc3RhdGUgY29taW5nIGZyb20gcmVkdXggb24gaXRzIHdheSB0byBiZWluZyBzZXJpYWxpemVkIGFuZCBzdG9yZWRcbmluYm91bmQsIC8vIEBOT1RFIG91dGJvdW5kOiB0cmFuc2Zvcm0gc3RhdGUgY29taW5nIGZyb20gc3RvcmFnZSwgb24gaXRzIHdheSB0byBiZSByZWh5ZHJhdGVkIGludG8gcmVkdXhcbm91dGJvdW5kKSB7XG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICB2YXIgd2hpdGVsaXN0ID0gY29uZmlnLndoaXRlbGlzdCB8fCBudWxsO1xuICB2YXIgYmxhY2tsaXN0ID0gY29uZmlnLmJsYWNrbGlzdCB8fCBudWxsO1xuXG4gIGZ1bmN0aW9uIHdoaXRlbGlzdEJsYWNrbGlzdENoZWNrKGtleSkge1xuICAgIGlmICh3aGl0ZWxpc3QgJiYgd2hpdGVsaXN0LmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybiB0cnVlO1xuICAgIGlmIChibGFja2xpc3QgJiYgYmxhY2tsaXN0LmluZGV4T2Yoa2V5KSAhPT0gLTEpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW46IGZ1bmN0aW9uIF9pbihzdGF0ZSwga2V5LCBmdWxsU3RhdGUpIHtcbiAgICAgIHJldHVybiAhd2hpdGVsaXN0QmxhY2tsaXN0Q2hlY2soa2V5KSAmJiBpbmJvdW5kID8gaW5ib3VuZChzdGF0ZSwga2V5LCBmdWxsU3RhdGUpIDogc3RhdGU7XG4gICAgfSxcbiAgICBvdXQ6IGZ1bmN0aW9uIG91dChzdGF0ZSwga2V5LCBmdWxsU3RhdGUpIHtcbiAgICAgIHJldHVybiAhd2hpdGVsaXN0QmxhY2tsaXN0Q2hlY2soa2V5KSAmJiBvdXRib3VuZCA/IG91dGJvdW5kKHN0YXRlLCBrZXksIGZ1bGxTdGF0ZSkgOiBzdGF0ZTtcbiAgICB9XG4gIH07XG59IiwiaW1wb3J0IHsgS0VZX1BSRUZJWCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN0b3JlZFN0YXRlKGNvbmZpZykge1xuICB2YXIgdHJhbnNmb3JtcyA9IGNvbmZpZy50cmFuc2Zvcm1zIHx8IFtdO1xuICB2YXIgc3RvcmFnZUtleSA9IFwiXCIuY29uY2F0KGNvbmZpZy5rZXlQcmVmaXggIT09IHVuZGVmaW5lZCA/IGNvbmZpZy5rZXlQcmVmaXggOiBLRVlfUFJFRklYKS5jb25jYXQoY29uZmlnLmtleSk7XG4gIHZhciBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XG4gIHZhciBkZWJ1ZyA9IGNvbmZpZy5kZWJ1ZztcbiAgdmFyIGRlc2VyaWFsaXplO1xuXG4gIGlmIChjb25maWcuZGVzZXJpYWxpemUgPT09IGZhbHNlKSB7XG4gICAgZGVzZXJpYWxpemUgPSBmdW5jdGlvbiBkZXNlcmlhbGl6ZSh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcuZGVzZXJpYWxpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBkZXNlcmlhbGl6ZSA9IGNvbmZpZy5kZXNlcmlhbGl6ZTtcbiAgfSBlbHNlIHtcbiAgICBkZXNlcmlhbGl6ZSA9IGRlZmF1bHREZXNlcmlhbGl6ZTtcbiAgfVxuXG4gIHJldHVybiBzdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkudGhlbihmdW5jdGlvbiAoc2VyaWFsaXplZCkge1xuICAgIGlmICghc2VyaWFsaXplZCkgcmV0dXJuIHVuZGVmaW5lZDtlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHt9O1xuICAgICAgICB2YXIgcmF3U3RhdGUgPSBkZXNlcmlhbGl6ZShzZXJpYWxpemVkKTtcbiAgICAgICAgT2JqZWN0LmtleXMocmF3U3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHN0YXRlW2tleV0gPSB0cmFuc2Zvcm1zLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uIChzdWJTdGF0ZSwgdHJhbnNmb3JtZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1lci5vdXQoc3ViU3RhdGUsIGtleSwgcmF3U3RhdGUpO1xuICAgICAgICAgIH0sIGRlc2VyaWFsaXplKHJhd1N0YXRlW2tleV0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZykgY29uc29sZS5sb2coXCJyZWR1eC1wZXJzaXN0L2dldFN0b3JlZFN0YXRlOiBFcnJvciByZXN0b3JpbmcgZGF0YSBcIi5jb25jYXQoc2VyaWFsaXplZCksIGVycik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0RGVzZXJpYWxpemUoc2VyaWFsKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbCk7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBwZXJzaXN0UmVkdWNlciB9IGZyb20gJy4vcGVyc2lzdFJlZHVjZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwZXJzaXN0Q29tYmluZVJlZHVjZXJzIH0gZnJvbSAnLi9wZXJzaXN0Q29tYmluZVJlZHVjZXJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGVyc2lzdFN0b3JlIH0gZnJvbSAnLi9wZXJzaXN0U3RvcmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVNaWdyYXRlIH0gZnJvbSAnLi9jcmVhdGVNaWdyYXRlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlVHJhbnNmb3JtIH0gZnJvbSAnLi9jcmVhdGVUcmFuc2Zvcm0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRTdG9yZWRTdGF0ZSB9IGZyb20gJy4vZ2V0U3RvcmVkU3RhdGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVQZXJzaXN0b2lkIH0gZnJvbSAnLi9jcmVhdGVQZXJzaXN0b2lkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHVyZ2VTdG9yZWRTdGF0ZSB9IGZyb20gJy4vcHVyZ2VTdG9yZWRTdGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHBlcnNpc3RSZWR1Y2VyIGZyb20gJy4vcGVyc2lzdFJlZHVjZXInO1xuaW1wb3J0IGF1dG9NZXJnZUxldmVsMiBmcm9tICcuL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDInO1xuLy8gY29tYmluZVJlZHVjZXJzICsgcGVyc2lzdFJlZHVjZXIgd2l0aCBzdGF0ZVJlY29uY2lsZXIgZGVmYXVsdGVkIHRvIGF1dG9NZXJnZUxldmVsMlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGVyc2lzdENvbWJpbmVSZWR1Y2Vycyhjb25maWcsIHJlZHVjZXJzKSB7XG4gIGNvbmZpZy5zdGF0ZVJlY29uY2lsZXIgPSBjb25maWcuc3RhdGVSZWNvbmNpbGVyID09PSB1bmRlZmluZWQgPyBhdXRvTWVyZ2VMZXZlbDIgOiBjb25maWcuc3RhdGVSZWNvbmNpbGVyO1xuICByZXR1cm4gcGVyc2lzdFJlZHVjZXIoY29uZmlnLCBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpKTtcbn0iLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBGTFVTSCwgUEFVU0UsIFBFUlNJU1QsIFBVUkdFLCBSRUhZRFJBVEUsIERFRkFVTFRfVkVSU0lPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBhdXRvTWVyZ2VMZXZlbDEgZnJvbSAnLi9zdGF0ZVJlY29uY2lsZXIvYXV0b01lcmdlTGV2ZWwxJztcbmltcG9ydCBjcmVhdGVQZXJzaXN0b2lkIGZyb20gJy4vY3JlYXRlUGVyc2lzdG9pZCc7XG5pbXBvcnQgZGVmYXVsdEdldFN0b3JlZFN0YXRlIGZyb20gJy4vZ2V0U3RvcmVkU3RhdGUnO1xuaW1wb3J0IHB1cmdlU3RvcmVkU3RhdGUgZnJvbSAnLi9wdXJnZVN0b3JlZFN0YXRlJztcbnZhciBERUZBVUxUX1RJTUVPVVQgPSA1MDAwO1xuLypcbiAgQFRPRE8gYWRkIHZhbGlkYXRpb24gLyBoYW5kbGluZyBmb3I6XG4gIC0gcGVyc2lzdGluZyBhIHJlZHVjZXIgd2hpY2ggaGFzIG5lc3RlZCBfcGVyc2lzdFxuICAtIGhhbmRsaW5nIGFjdGlvbnMgdGhhdCBmaXJlIGJlZm9yZSByZXlkcmF0ZSBpcyBjYWxsZWRcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBlcnNpc3RSZWR1Y2VyKGNvbmZpZywgYmFzZVJlZHVjZXIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIWNvbmZpZykgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgcmVxdWlyZWQgZm9yIHBlcnNpc3RSZWR1Y2VyJyk7XG4gICAgaWYgKCFjb25maWcua2V5KSB0aHJvdyBuZXcgRXJyb3IoJ2tleSBpcyByZXF1aXJlZCBpbiBwZXJzaXN0b3IgY29uZmlnJyk7XG4gICAgaWYgKCFjb25maWcuc3RvcmFnZSkgdGhyb3cgbmV3IEVycm9yKFwicmVkdXgtcGVyc2lzdDogY29uZmlnLnN0b3JhZ2UgaXMgcmVxdWlyZWQuIFRyeSB1c2luZyBvbmUgb2YgdGhlIHByb3ZpZGVkIHN0b3JhZ2UgZW5naW5lcyBgaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSdgXCIpO1xuICB9XG5cbiAgdmFyIHZlcnNpb24gPSBjb25maWcudmVyc2lvbiAhPT0gdW5kZWZpbmVkID8gY29uZmlnLnZlcnNpb24gOiBERUZBVUxUX1ZFUlNJT047XG4gIHZhciBkZWJ1ZyA9IGNvbmZpZy5kZWJ1ZyB8fCBmYWxzZTtcbiAgdmFyIHN0YXRlUmVjb25jaWxlciA9IGNvbmZpZy5zdGF0ZVJlY29uY2lsZXIgPT09IHVuZGVmaW5lZCA/IGF1dG9NZXJnZUxldmVsMSA6IGNvbmZpZy5zdGF0ZVJlY29uY2lsZXI7XG4gIHZhciBnZXRTdG9yZWRTdGF0ZSA9IGNvbmZpZy5nZXRTdG9yZWRTdGF0ZSB8fCBkZWZhdWx0R2V0U3RvcmVkU3RhdGU7XG4gIHZhciB0aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQgIT09IHVuZGVmaW5lZCA/IGNvbmZpZy50aW1lb3V0IDogREVGQVVMVF9USU1FT1VUO1xuICB2YXIgX3BlcnNpc3RvaWQgPSBudWxsO1xuICB2YXIgX3B1cmdlID0gZmFsc2U7XG4gIHZhciBfcGF1c2VkID0gdHJ1ZTtcblxuICB2YXIgY29uZGl0aW9uYWxVcGRhdGUgPSBmdW5jdGlvbiBjb25kaXRpb25hbFVwZGF0ZShzdGF0ZSkge1xuICAgIC8vIHVwZGF0ZSB0aGUgcGVyc2lzdG9pZCBvbmx5IGlmIHdlIGFyZSByZWh5ZHJhdGVkIGFuZCBub3QgcGF1c2VkXG4gICAgc3RhdGUuX3BlcnNpc3QucmVoeWRyYXRlZCAmJiBfcGVyc2lzdG9pZCAmJiAhX3BhdXNlZCAmJiBfcGVyc2lzdG9pZC51cGRhdGUoc3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICB2YXIgX3JlZiA9IHN0YXRlIHx8IHt9LFxuICAgICAgICBfcGVyc2lzdCA9IF9yZWYuX3BlcnNpc3QsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiX3BlcnNpc3RcIl0pOyAvLyAkRmxvd0lnbm9yZSBuZWVkIHRvIHVwZGF0ZSBTdGF0ZSB0eXBlXG5cblxuICAgIHZhciByZXN0U3RhdGUgPSByZXN0O1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBQRVJTSVNUKSB7XG4gICAgICB2YXIgX3NlYWxlZCA9IGZhbHNlO1xuXG4gICAgICB2YXIgX3JlaHlkcmF0ZSA9IGZ1bmN0aW9uIF9yZWh5ZHJhdGUocGF5bG9hZCwgZXJyKSB7XG4gICAgICAgIC8vIGRldiB3YXJuaW5nIGlmIHdlIGFyZSBhbHJlYWR5IHNlYWxlZFxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfc2VhbGVkKSBjb25zb2xlLmVycm9yKFwicmVkdXgtcGVyc2lzdDogcmVoeWRyYXRlIGZvciBcXFwiXCIuY29uY2F0KGNvbmZpZy5rZXksIFwiXFxcIiBjYWxsZWQgYWZ0ZXIgdGltZW91dC5cIiksIHBheWxvYWQsIGVycik7IC8vIG9ubHkgcmVoeWRyYXRlIGlmIHdlIGFyZSBub3QgYWxyZWFkeSBzZWFsZWRcblxuICAgICAgICBpZiAoIV9zZWFsZWQpIHtcbiAgICAgICAgICBhY3Rpb24ucmVoeWRyYXRlKGNvbmZpZy5rZXksIHBheWxvYWQsIGVycik7XG4gICAgICAgICAgX3NlYWxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRpbWVvdXQgJiYgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICFfc2VhbGVkICYmIF9yZWh5ZHJhdGUodW5kZWZpbmVkLCBuZXcgRXJyb3IoXCJyZWR1eC1wZXJzaXN0OiBwZXJzaXN0IHRpbWVkIG91dCBmb3IgcGVyc2lzdCBrZXkgXFxcIlwiLmNvbmNhdChjb25maWcua2V5LCBcIlxcXCJcIikpKTtcbiAgICAgIH0sIHRpbWVvdXQpOyAvLyBATk9URSBQRVJTSVNUIHJlc3VtZXMgaWYgcGF1c2VkLlxuXG4gICAgICBfcGF1c2VkID0gZmFsc2U7IC8vIEBOT1RFIG9ubHkgZXZlciBjcmVhdGUgcGVyc2lzdG9pZCBvbmNlLCBlbnN1cmUgd2UgY2FsbCBpdCBhdCBsZWFzdCBvbmNlLCBldmVuIGlmIF9wZXJzaXN0IGhhcyBhbHJlYWR5IGJlZW4gc2V0XG5cbiAgICAgIGlmICghX3BlcnNpc3RvaWQpIF9wZXJzaXN0b2lkID0gY3JlYXRlUGVyc2lzdG9pZChjb25maWcpOyAvLyBATk9URSBQRVJTSVNUIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMsIG5vb3AgYWZ0ZXIgdGhlIGZpcnN0XG5cbiAgICAgIGlmIChfcGVyc2lzdCkge1xuICAgICAgICAvLyBXZSBzdGlsbCBuZWVkIHRvIGNhbGwgdGhlIGJhc2UgcmVkdWNlciBiZWNhdXNlIHRoZXJlIG1pZ2h0IGJlIG5lc3RlZFxuICAgICAgICAvLyB1c2VzIG9mIHBlcnNpc3RSZWR1Y2VyIHdoaWNoIG5lZWQgdG8gYmUgYXdhcmUgb2YgdGhlIFBFUlNJU1QgYWN0aW9uXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBiYXNlUmVkdWNlcihyZXN0U3RhdGUsIGFjdGlvbiksIHtcbiAgICAgICAgICBfcGVyc2lzdDogX3BlcnNpc3RcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgYWN0aW9uLnJlaHlkcmF0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgYWN0aW9uLnJlZ2lzdGVyICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgRXJyb3IoJ3JlZHV4LXBlcnNpc3Q6IGVpdGhlciByZWh5ZHJhdGUgb3IgcmVnaXN0ZXIgaXMgbm90IGEgZnVuY3Rpb24gb24gdGhlIFBFUlNJU1QgYWN0aW9uLiBUaGlzIGNhbiBoYXBwZW4gaWYgdGhlIGFjdGlvbiBpcyBiZWluZyByZXBsYXllZC4gVGhpcyBpcyBhbiB1bmV4cGxvcmVkIHVzZSBjYXNlLCBwbGVhc2Ugb3BlbiBhbiBpc3N1ZSBhbmQgd2Ugd2lsbCBmaWd1cmUgb3V0IGEgcmVzb2x1dGlvbi4nKTtcbiAgICAgIGFjdGlvbi5yZWdpc3Rlcihjb25maWcua2V5KTtcbiAgICAgIGdldFN0b3JlZFN0YXRlKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzdG9yZWRTdGF0ZSkge1xuICAgICAgICB2YXIgbWlncmF0ZSA9IGNvbmZpZy5taWdyYXRlIHx8IGZ1bmN0aW9uIChzLCB2KSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBtaWdyYXRlKHJlc3RvcmVkU3RhdGUsIHZlcnNpb24pLnRoZW4oZnVuY3Rpb24gKG1pZ3JhdGVkU3RhdGUpIHtcbiAgICAgICAgICBfcmVoeWRyYXRlKG1pZ3JhdGVkU3RhdGUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAobWlncmF0ZUVycikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG1pZ3JhdGVFcnIpIGNvbnNvbGUuZXJyb3IoJ3JlZHV4LXBlcnNpc3Q6IG1pZ3JhdGlvbiBlcnJvcicsIG1pZ3JhdGVFcnIpO1xuXG4gICAgICAgICAgX3JlaHlkcmF0ZSh1bmRlZmluZWQsIG1pZ3JhdGVFcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgX3JlaHlkcmF0ZSh1bmRlZmluZWQsIGVycik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBiYXNlUmVkdWNlcihyZXN0U3RhdGUsIGFjdGlvbiksIHtcbiAgICAgICAgX3BlcnNpc3Q6IHtcbiAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgICAgIHJlaHlkcmF0ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFBVUkdFKSB7XG4gICAgICBfcHVyZ2UgPSB0cnVlO1xuICAgICAgYWN0aW9uLnJlc3VsdChwdXJnZVN0b3JlZFN0YXRlKGNvbmZpZykpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGJhc2VSZWR1Y2VyKHJlc3RTdGF0ZSwgYWN0aW9uKSwge1xuICAgICAgICBfcGVyc2lzdDogX3BlcnNpc3RcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IEZMVVNIKSB7XG4gICAgICBhY3Rpb24ucmVzdWx0KF9wZXJzaXN0b2lkICYmIF9wZXJzaXN0b2lkLmZsdXNoKCkpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGJhc2VSZWR1Y2VyKHJlc3RTdGF0ZSwgYWN0aW9uKSwge1xuICAgICAgICBfcGVyc2lzdDogX3BlcnNpc3RcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFBBVVNFKSB7XG4gICAgICBfcGF1c2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBSRUhZRFJBVEUpIHtcbiAgICAgIC8vIG5vb3Agb24gcmVzdFN0YXRlIGlmIHB1cmdpbmdcbiAgICAgIGlmIChfcHVyZ2UpIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCByZXN0U3RhdGUsIHtcbiAgICAgICAgX3BlcnNpc3Q6IF9vYmplY3RTcHJlYWQoe30sIF9wZXJzaXN0LCB7XG4gICAgICAgICAgcmVoeWRyYXRlZDogdHJ1ZVxuICAgICAgICB9KSAvLyBATk9URSBpZiBrZXkgZG9lcyBub3QgbWF0Y2gsIHdpbGwgY29udGludWUgdG8gZGVmYXVsdCBlbHNlIGJlbG93XG5cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYWN0aW9uLmtleSA9PT0gY29uZmlnLmtleSkge1xuICAgICAgICB2YXIgcmVkdWNlZFN0YXRlID0gYmFzZVJlZHVjZXIocmVzdFN0YXRlLCBhY3Rpb24pO1xuICAgICAgICB2YXIgaW5ib3VuZFN0YXRlID0gYWN0aW9uLnBheWxvYWQ7IC8vIG9ubHkgcmVjb25jaWxlIHN0YXRlIGlmIHN0YXRlUmVjb25jaWxlciBhbmQgaW5ib3VuZFN0YXRlIGFyZSBib3RoIGRlZmluZWRcblxuICAgICAgICB2YXIgcmVjb25jaWxlZFJlc3QgPSBzdGF0ZVJlY29uY2lsZXIgIT09IGZhbHNlICYmIGluYm91bmRTdGF0ZSAhPT0gdW5kZWZpbmVkID8gc3RhdGVSZWNvbmNpbGVyKGluYm91bmRTdGF0ZSwgc3RhdGUsIHJlZHVjZWRTdGF0ZSwgY29uZmlnKSA6IHJlZHVjZWRTdGF0ZTtcblxuICAgICAgICB2YXIgX25ld1N0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgcmVjb25jaWxlZFJlc3QsIHtcbiAgICAgICAgICBfcGVyc2lzdDogX29iamVjdFNwcmVhZCh7fSwgX3BlcnNpc3QsIHtcbiAgICAgICAgICAgIHJlaHlkcmF0ZWQ6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY29uZGl0aW9uYWxVcGRhdGUoX25ld1N0YXRlKTtcbiAgICAgIH1cbiAgICB9IC8vIGlmIHdlIGhhdmUgbm90IGFscmVhZHkgaGFuZGxlZCBQRVJTSVNULCBzdHJhaWdodCBwYXNzdGhyb3VnaFxuXG5cbiAgICBpZiAoIV9wZXJzaXN0KSByZXR1cm4gYmFzZVJlZHVjZXIoc3RhdGUsIGFjdGlvbik7IC8vIHJ1biBiYXNlIHJlZHVjZXI6XG4gICAgLy8gaXMgc3RhdGUgbW9kaWZpZWQgPyByZXR1cm4gb3JpZ2luYWwgOiByZXR1cm4gdXBkYXRlZFxuXG4gICAgdmFyIG5ld1N0YXRlID0gYmFzZVJlZHVjZXIocmVzdFN0YXRlLCBhY3Rpb24pO1xuICAgIGlmIChuZXdTdGF0ZSA9PT0gcmVzdFN0YXRlKSByZXR1cm4gc3RhdGU7XG4gICAgcmV0dXJuIGNvbmRpdGlvbmFsVXBkYXRlKF9vYmplY3RTcHJlYWQoe30sIG5ld1N0YXRlLCB7XG4gICAgICBfcGVyc2lzdDogX3BlcnNpc3RcbiAgICB9KSk7XG4gIH07XG59IiwiZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBGTFVTSCwgUEFVU0UsIFBFUlNJU1QsIFBVUkdFLCBSRUdJU1RFUiwgUkVIWURSQVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgcmVnaXN0cnk6IFtdLFxuICBib290c3RyYXBwZWQ6IGZhbHNlXG59O1xuXG52YXIgcGVyc2lzdG9yUmVkdWNlciA9IGZ1bmN0aW9uIHBlcnNpc3RvclJlZHVjZXIoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogaW5pdGlhbFN0YXRlO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVHSVNURVI6XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgcmVnaXN0cnk6IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUucmVnaXN0cnkpLCBbYWN0aW9uLmtleV0pXG4gICAgICB9KTtcblxuICAgIGNhc2UgUkVIWURSQVRFOlxuICAgICAgdmFyIGZpcnN0SW5kZXggPSBzdGF0ZS5yZWdpc3RyeS5pbmRleE9mKGFjdGlvbi5rZXkpO1xuXG4gICAgICB2YXIgcmVnaXN0cnkgPSBfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUucmVnaXN0cnkpO1xuXG4gICAgICByZWdpc3RyeS5zcGxpY2UoZmlyc3RJbmRleCwgMSk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgcmVnaXN0cnk6IHJlZ2lzdHJ5LFxuICAgICAgICBib290c3RyYXBwZWQ6IHJlZ2lzdHJ5Lmxlbmd0aCA9PT0gMFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwZXJzaXN0U3RvcmUoc3RvcmUsIG9wdGlvbnMsIGNiKSB7XG4gIC8vIGhlbHAgY2F0Y2ggaW5jb3JyZWN0IHVzYWdlIG9mIHBhc3NpbmcgUGVyc2lzdENvbmZpZyBpbiBhcyBQZXJzaXN0b3JPcHRpb25zXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIG9wdGlvbnNUb1Rlc3QgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBiYW5uZWRLZXlzID0gWydibGFja2xpc3QnLCAnd2hpdGVsaXN0JywgJ3RyYW5zZm9ybXMnLCAnc3RvcmFnZScsICdrZXlQcmVmaXgnLCAnbWlncmF0ZSddO1xuICAgIGJhbm5lZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgaWYgKCEhb3B0aW9uc1RvVGVzdFtrXSkgY29uc29sZS5lcnJvcihcInJlZHV4LXBlcnNpc3Q6IGludmFsaWQgb3B0aW9uIHBhc3NlZCB0byBwZXJzaXN0U3RvcmU6IFxcXCJcIi5jb25jYXQoaywgXCJcXFwiLiBZb3UgbWF5IGJlIGluY29ycmVjdGx5IHBhc3NpbmcgcGVyc2lzdENvbmZpZyBpbnRvIHBlcnNpc3RTdG9yZSwgd2hlcmVhcyBpdCBzaG91bGQgYmUgcGFzc2VkIGludG8gcGVyc2lzdFJlZHVjZXIuXCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBib29zdHJhcHBlZENiID0gY2IgfHwgZmFsc2U7XG5cbiAgdmFyIF9wU3RvcmUgPSBjcmVhdGVTdG9yZShwZXJzaXN0b3JSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIG9wdGlvbnMgJiYgb3B0aW9ucy5lbmhhbmNlciA/IG9wdGlvbnMuZW5oYW5jZXIgOiB1bmRlZmluZWQpO1xuXG4gIHZhciByZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyKGtleSkge1xuICAgIF9wU3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVHSVNURVIsXG4gICAgICBrZXk6IGtleVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZWh5ZHJhdGUgPSBmdW5jdGlvbiByZWh5ZHJhdGUoa2V5LCBwYXlsb2FkLCBlcnIpIHtcbiAgICB2YXIgcmVoeWRyYXRlQWN0aW9uID0ge1xuICAgICAgdHlwZTogUkVIWURSQVRFLFxuICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgIGVycjogZXJyLFxuICAgICAga2V5OiBrZXkgLy8gZGlzcGF0Y2ggdG8gYHN0b3JlYCB0byByZWh5ZHJhdGUgYW5kIGBwZXJzaXN0b3JgIHRvIHRyYWNrIHJlc3VsdFxuXG4gICAgfTtcbiAgICBzdG9yZS5kaXNwYXRjaChyZWh5ZHJhdGVBY3Rpb24pO1xuXG4gICAgX3BTdG9yZS5kaXNwYXRjaChyZWh5ZHJhdGVBY3Rpb24pO1xuXG4gICAgaWYgKGJvb3N0cmFwcGVkQ2IgJiYgcGVyc2lzdG9yLmdldFN0YXRlKCkuYm9vdHN0cmFwcGVkKSB7XG4gICAgICBib29zdHJhcHBlZENiKCk7XG4gICAgICBib29zdHJhcHBlZENiID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHZhciBwZXJzaXN0b3IgPSBfb2JqZWN0U3ByZWFkKHt9LCBfcFN0b3JlLCB7XG4gICAgcHVyZ2U6IGZ1bmN0aW9uIHB1cmdlKCkge1xuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUFVSR0UsXG4gICAgICAgIHJlc3VsdDogZnVuY3Rpb24gcmVzdWx0KHB1cmdlUmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHB1cmdlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cyk7XG4gICAgfSxcbiAgICBmbHVzaDogZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBGTFVTSCxcbiAgICAgICAgcmVzdWx0OiBmdW5jdGlvbiByZXN1bHQoZmx1c2hSZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZmx1c2hSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcbiAgICB9LFxuICAgIHBhdXNlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUEFVU0VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcGVyc2lzdDogZnVuY3Rpb24gcGVyc2lzdCgpIHtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUEVSU0lTVCxcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyLFxuICAgICAgICByZWh5ZHJhdGU6IHJlaHlkcmF0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoIShvcHRpb25zICYmIG9wdGlvbnMubWFudWFsUGVyc2lzdCkpIHtcbiAgICBwZXJzaXN0b3IucGVyc2lzdCgpO1xuICB9XG5cbiAgcmV0dXJuIHBlcnNpc3Rvcjtcbn0iLCJpbXBvcnQgeyBLRVlfUFJFRklYIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHVyZ2VTdG9yZWRTdGF0ZShjb25maWcpIHtcbiAgdmFyIHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcbiAgdmFyIHN0b3JhZ2VLZXkgPSBcIlwiLmNvbmNhdChjb25maWcua2V5UHJlZml4ICE9PSB1bmRlZmluZWQgPyBjb25maWcua2V5UHJlZml4IDogS0VZX1BSRUZJWCkuY29uY2F0KGNvbmZpZy5rZXkpO1xuICByZXR1cm4gc3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JhZ2VLZXksIHdhcm5JZlJlbW92ZUVycm9yKTtcbn1cblxuZnVuY3Rpb24gd2FybklmUmVtb3ZlRXJyb3IoZXJyKSB7XG4gIGlmIChlcnIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3JlZHV4LXBlcnNpc3QvcHVyZ2VTdG9yZWRTdGF0ZTogRXJyb3IgcHVyZ2luZyBkYXRhIHN0b3JlZCBzdGF0ZScsIGVycik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vKlxuICBhdXRvTWVyZ2VMZXZlbDE6IFxuICAgIC0gbWVyZ2VzIDEgbGV2ZWwgb2Ygc3Vic3RhdGVcbiAgICAtIHNraXBzIHN1YnN0YXRlIGlmIGFscmVhZHkgbW9kaWZpZWRcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRvTWVyZ2VMZXZlbDEoaW5ib3VuZFN0YXRlLCBvcmlnaW5hbFN0YXRlLCByZWR1Y2VkU3RhdGUsIF9yZWYpIHtcbiAgdmFyIGRlYnVnID0gX3JlZi5kZWJ1ZztcblxuICB2YXIgbmV3U3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCByZWR1Y2VkU3RhdGUpOyAvLyBvbmx5IHJlaHlkcmF0ZSBpZiBpbmJvdW5kU3RhdGUgZXhpc3RzIGFuZCBpcyBhbiBvYmplY3RcblxuXG4gIGlmIChpbmJvdW5kU3RhdGUgJiYgX3R5cGVvZihpbmJvdW5kU3RhdGUpID09PSAnb2JqZWN0Jykge1xuICAgIE9iamVjdC5rZXlzKGluYm91bmRTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvLyBpZ25vcmUgX3BlcnNpc3QgZGF0YVxuICAgICAgaWYgKGtleSA9PT0gJ19wZXJzaXN0JykgcmV0dXJuOyAvLyBpZiByZWR1Y2VyIG1vZGlmaWVzIHN1YnN0YXRlLCBza2lwIGF1dG8gcmVoeWRyYXRpb25cblxuICAgICAgaWYgKG9yaWdpbmFsU3RhdGVba2V5XSAhPT0gcmVkdWNlZFN0YXRlW2tleV0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGVidWcpIGNvbnNvbGUubG9nKCdyZWR1eC1wZXJzaXN0L3N0YXRlUmVjb25jaWxlcjogc3ViIHN0YXRlIGZvciBrZXkgYCVzYCBtb2RpZmllZCwgc2tpcHBpbmcuJywga2V5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBvdGhlcndpc2UgaGFyZCBzZXQgdGhlIG5ldyB2YWx1ZVxuXG5cbiAgICAgIG5ld1N0YXRlW2tleV0gPSBpbmJvdW5kU3RhdGVba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnICYmIGluYm91bmRTdGF0ZSAmJiBfdHlwZW9mKGluYm91bmRTdGF0ZSkgPT09ICdvYmplY3QnKSBjb25zb2xlLmxvZyhcInJlZHV4LXBlcnNpc3Qvc3RhdGVSZWNvbmNpbGVyOiByZWh5ZHJhdGVkIGtleXMgJ1wiLmNvbmNhdChPYmplY3Qua2V5cyhpbmJvdW5kU3RhdGUpLmpvaW4oJywgJyksIFwiJ1wiKSk7XG4gIHJldHVybiBuZXdTdGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vKlxuICBhdXRvTWVyZ2VMZXZlbDI6IFxuICAgIC0gbWVyZ2VzIDIgbGV2ZWwgb2Ygc3Vic3RhdGVcbiAgICAtIHNraXBzIHN1YnN0YXRlIGlmIGFscmVhZHkgbW9kaWZpZWRcbiAgICAtIHRoaXMgaXMgZXNzZW50aWFsbHkgcmVkdXgtcGVyaXN0IHY0IGJlaGF2aW9yXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0b01lcmdlTGV2ZWwyKGluYm91bmRTdGF0ZSwgb3JpZ2luYWxTdGF0ZSwgcmVkdWNlZFN0YXRlLCBfcmVmKSB7XG4gIHZhciBkZWJ1ZyA9IF9yZWYuZGVidWc7XG5cbiAgdmFyIG5ld1N0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgcmVkdWNlZFN0YXRlKTsgLy8gb25seSByZWh5ZHJhdGUgaWYgaW5ib3VuZFN0YXRlIGV4aXN0cyBhbmQgaXMgYW4gb2JqZWN0XG5cblxuICBpZiAoaW5ib3VuZFN0YXRlICYmIF90eXBlb2YoaW5ib3VuZFN0YXRlKSA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3Qua2V5cyhpbmJvdW5kU3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgLy8gaWdub3JlIF9wZXJzaXN0IGRhdGFcbiAgICAgIGlmIChrZXkgPT09ICdfcGVyc2lzdCcpIHJldHVybjsgLy8gaWYgcmVkdWNlciBtb2RpZmllcyBzdWJzdGF0ZSwgc2tpcCBhdXRvIHJlaHlkcmF0aW9uXG5cbiAgICAgIGlmIChvcmlnaW5hbFN0YXRlW2tleV0gIT09IHJlZHVjZWRTdGF0ZVtrZXldKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnKSBjb25zb2xlLmxvZygncmVkdXgtcGVyc2lzdC9zdGF0ZVJlY29uY2lsZXI6IHN1YiBzdGF0ZSBmb3Iga2V5IGAlc2AgbW9kaWZpZWQsIHNraXBwaW5nLicsIGtleSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUGxhaW5Fbm91Z2hPYmplY3QocmVkdWNlZFN0YXRlW2tleV0pKSB7XG4gICAgICAgIC8vIGlmIG9iamVjdCBpcyBwbGFpbiBlbm91Z2ggc2hhbGxvdyBtZXJnZSB0aGUgbmV3IHZhbHVlcyAoaGVuY2UgXCJMZXZlbDJcIilcbiAgICAgICAgbmV3U3RhdGVba2V5XSA9IF9vYmplY3RTcHJlYWQoe30sIG5ld1N0YXRlW2tleV0sIHt9LCBpbmJvdW5kU3RhdGVba2V5XSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gb3RoZXJ3aXNlIGhhcmQgc2V0XG5cblxuICAgICAgbmV3U3RhdGVba2V5XSA9IGluYm91bmRTdGF0ZVtrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGVidWcgJiYgaW5ib3VuZFN0YXRlICYmIF90eXBlb2YoaW5ib3VuZFN0YXRlKSA9PT0gJ29iamVjdCcpIGNvbnNvbGUubG9nKFwicmVkdXgtcGVyc2lzdC9zdGF0ZVJlY29uY2lsZXI6IHJlaHlkcmF0ZWQga2V5cyAnXCIuY29uY2F0KE9iamVjdC5rZXlzKGluYm91bmRTdGF0ZSkuam9pbignLCAnKSwgXCInXCIpKTtcbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiBpc1BsYWluRW5vdWdoT2JqZWN0KG8pIHtcbiAgcmV0dXJuIG8gIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkobykgJiYgX3R5cGVvZihvKSA9PT0gJ29iamVjdCc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVXZWJTdG9yYWdlO1xuXG52YXIgX2dldFN0b3JhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2dldFN0b3JhZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjcmVhdGVXZWJTdG9yYWdlKHR5cGUpIHtcbiAgdmFyIHN0b3JhZ2UgPSAoMCwgX2dldFN0b3JhZ2UuZGVmYXVsdCkodHlwZSk7XG4gIHJldHVybiB7XG4gICAgZ2V0SXRlbTogZnVuY3Rpb24gZ2V0SXRlbShrZXkpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlc29sdmUoc3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXRJdGVtOiBmdW5jdGlvbiBzZXRJdGVtKGtleSwgaXRlbSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVzb2x2ZShzdG9yYWdlLnNldEl0ZW0oa2V5LCBpdGVtKSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZXNvbHZlKHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldFN0b3JhZ2U7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgbm9vcFN0b3JhZ2UgPSB7XG4gIGdldEl0ZW06IG5vb3AsXG4gIHNldEl0ZW06IG5vb3AsXG4gIHJlbW92ZUl0ZW06IG5vb3Bcbn07XG5cbmZ1bmN0aW9uIGhhc1N0b3JhZ2Uoc3RvcmFnZVR5cGUpIHtcbiAgaWYgKCh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHNlbGYpKSAhPT0gJ29iamVjdCcgfHwgIShzdG9yYWdlVHlwZSBpbiBzZWxmKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgdmFyIHN0b3JhZ2UgPSBzZWxmW3N0b3JhZ2VUeXBlXTtcbiAgICB2YXIgdGVzdEtleSA9IFwicmVkdXgtcGVyc2lzdCBcIi5jb25jYXQoc3RvcmFnZVR5cGUsIFwiIHRlc3RcIik7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHRlc3RLZXksICd0ZXN0Jyk7XG4gICAgc3RvcmFnZS5nZXRJdGVtKHRlc3RLZXkpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0S2V5KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBjb25zb2xlLndhcm4oXCJyZWR1eC1wZXJzaXN0IFwiLmNvbmNhdChzdG9yYWdlVHlwZSwgXCIgdGVzdCBmYWlsZWQsIHBlcnNpc3RlbmNlIHdpbGwgYmUgZGlzYWJsZWQuXCIpKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RvcmFnZSh0eXBlKSB7XG4gIHZhciBzdG9yYWdlVHlwZSA9IFwiXCIuY29uY2F0KHR5cGUsIFwiU3RvcmFnZVwiKTtcbiAgaWYgKGhhc1N0b3JhZ2Uoc3RvcmFnZVR5cGUpKSByZXR1cm4gc2VsZltzdG9yYWdlVHlwZV07ZWxzZSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZWR1eC1wZXJzaXN0IGZhaWxlZCB0byBjcmVhdGUgc3luYyBzdG9yYWdlLiBmYWxsaW5nIGJhY2sgdG8gbm9vcCBzdG9yYWdlLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9vcFN0b3JhZ2U7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jcmVhdGVXZWJTdG9yYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVXZWJTdG9yYWdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVXZWJTdG9yYWdlLmRlZmF1bHQpKCdsb2NhbCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9