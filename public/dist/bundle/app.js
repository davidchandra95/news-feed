/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([59,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample constants for typical actions.
	You may want to extends these to the other data
	types for your project (e.g. BLOG_POST_CREATED, BLOG_POST_UPDATED, etc)
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {
   FEEDS_RECEIVED: 'FEEDS_RECEIVED',
   FEED_CREATED: 'FEED_CREATED'
   // USERS_RECEIVED: 'USERS_RECEIVED',
   // USER_CREATED: 'USER_CREATED',
   // USER_LOGGED_IN: 'USER_LOGGED_IN',
   // CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED'

};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _constants = __webpack_require__(12);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove 
	and use your own reducers, remember to update the store 
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
   all: null
};

exports.default = function () {
   var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
   var action = arguments[1];

   var newState = Object.assign({}, state);

   switch (action.type) {

      case _constants2.default.FEEDS_RECEIVED:
         newState['all'] = action.data;
         return newState;

      case _constants2.default.FEED_CREATED:
         var all = newState.all ? Object.assign([], newState.all) : [];
         all.unshift(action.data);
         newState['all'] = all;
         return newState;

      default:
         return state;
   }
};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feedReducer = undefined;

var _feedReducer = __webpack_require__(22);

var _feedReducer2 = _interopRequireDefault(_feedReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.feedReducer = _feedReducer2.default; /* * * * * * * * * * * * * * * * * * * * * * * * * * *
                                             	Export your reducers here
                                             * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                             */

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a store with one reducer: userReducer. When 
	adding more reducers, make sure to include them in 
	line 3 (above) and line 18 (below):
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var store;
exports.default = {

   configure: function configure(initialState) {
      // initialState can be null

      var reducers = (0, _redux.combineReducers)({ // insert reducers here
         feed: _reducers.feedReducer
      });

      if (initialState) {
         store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

         return store;
      }

      store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

      return store;
   },

   currentStore: function currentStore() {
      return store;
   }
};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _turbo = __webpack_require__(7);

var _turbo2 = _interopRequireDefault(_turbo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_ID = '5b782b9794fc4b0014aeab94';

var postRequest = function postRequest(resource, params, actionType) {
   return function (dispatch) {
      return (0, _turbo2.default)({ site_id: APP_ID }).create(resource, params).then(function (data) {
         if (actionType != null) {
            dispatch({
               type: actionType,
               data: data
            });
         }

         return data;
      }).catch(function (err) {
         throw err;
      });
   };
};

var getRequest = function getRequest(resource, params, actionType) {
   return function (dispatch) {
      return (0, _turbo2.default)({ site_id: APP_ID }).fetch(resource, params).then(function (data) {
         if (actionType != null) {
            dispatch({
               type: actionType,
               params: params, // can be null
               data: data
            });
         }

         return data;
      }).catch(function (err) {
         throw err;
      });
   };
};

exports.default = {

   postRequest: postRequest,
   getRequest: getRequest

};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _constants = __webpack_require__(12);

var _constants2 = _interopRequireDefault(_constants);

var _turbo = __webpack_require__(7);

var _turbo2 = _interopRequireDefault(_turbo);

var _myUtils = __webpack_require__(26);

var _myUtils2 = _interopRequireDefault(_myUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/
exports.default = {

   fetchFeeds: function fetchFeeds(params) {
      return function (dispatch) {
         return dispatch(_myUtils2.default.getRequest('feed', params, _constants2.default.FEEDS_RECEIVED));
      };
   },

   createFeed: function createFeed(params) {
      return function (dispatch) {
         return dispatch(_myUtils2.default.postRequest('feed', params, _constants2.default.FEED_CREATED));
      };
   }

   // // Unlike addUser, register() also maintains a session for login state. After calling 
   // // TurboClient.createUser(), the new user is logged in as well:
   // register: (params) => {
   //    return dispatch => {
   //       return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
   //    }
   // },

   // loginUser: (credentials) => {
   //    return dispatch => {
   //       return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
   //    }
   // },

   // currentUser: () => {
   //    return dispatch => {
   //       return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
   //    }
   // }

};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _turbo = __webpack_require__(7);

var _turbo2 = _interopRequireDefault(_turbo);

var _reactRedux = __webpack_require__(11);

var _actions = __webpack_require__(27);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
   _inherits(Sidebar, _Component);

   function Sidebar() {
      _classCallCheck(this, Sidebar);

      var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this));

      _this.state = {
         feed: {
            name: '',
            url: ''
         },
         feeds: []
      };
      return _this;
   }

   _createClass(Sidebar, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
         var _this2 = this;

         this.props.fetchFeeds(null).then(function (data) {
            _this2.setState({
               feeds: data
            });
         }).catch(function (err) {
            alert('Error: ' + err.message);
         });
         // var turboClient = turbo({site_id: '5b782b9794fc4b0014aeab94'});
         // turboClient.fetch('feed', null)
         // .then(data => {
         //    this.setState({
         //       feeds: data
         //    })
         // })
         // .catch(err => {
         //    alert('Error: ' + err.message);
         // })
      }
   }, {
      key: 'updateFeed',
      value: function updateFeed(field, event) {
         var feed = Object.assign({}, this.state.feed);
         feed[field] = event.target.value;
         this.setState({ feed: feed });
      }
   }, {
      key: 'addFeed',
      value: function addFeed(event) {
         var _this3 = this;

         event.preventDefault();

         this.props.createFeed(this.state.feed).then(function (data) {
            _this3.setState({
               feed: {
                  name: '',
                  url: ''
               }
            });
         }).catch(function (err) {
            alert('Error: ' + err.message);
         });
      }
   }, {
      key: 'render',
      value: function render() {
         var feeds = this.props.feed.all || [];

         return _react2.default.createElement(
            'div',
            { id: 'sidebar' },
            _react2.default.createElement(
               'div',
               { className: 'inner' },
               _react2.default.createElement(
                  'section',
                  { id: 'search', className: 'alt' },
                  _react2.default.createElement(
                     'form',
                     { method: 'post', action: '#' },
                     _react2.default.createElement('input', { type: 'text', name: 'query', value: this.state.feed.name, onChange: this.updateFeed.bind(this, 'name'), id: 'query', placeholder: 'Feed Name' }),
                     _react2.default.createElement('br', null),
                     _react2.default.createElement('input', { type: 'text', name: 'query', value: this.state.feed.url, onChange: this.updateFeed.bind(this, 'url'), id: 'query', placeholder: 'Feed Url' }),
                     _react2.default.createElement('br', null),
                     _react2.default.createElement(
                        'button',
                        { onClick: this.addFeed.bind(this) },
                        'Add Feed'
                     )
                  )
               ),
               _react2.default.createElement(
                  'nav',
                  { id: 'menu' },
                  _react2.default.createElement(
                     'header',
                     { className: 'major' },
                     _react2.default.createElement(
                        'h2',
                        null,
                        'My Feeds'
                     )
                  ),
                  _react2.default.createElement(
                     'ul',
                     null,
                     feeds.map(function (feed, i) {
                        return _react2.default.createElement(
                           'li',
                           { key: feed._id },
                           _react2.default.createElement(
                              'a',
                              { href: '#' },
                              feed.name
                           )
                        );
                     })
                  )
               )
            )
         );
      }
   }]);

   return Sidebar;
}(_react.Component);

var stateToProps = function stateToProps(state) {
   return {
      feed: state.feed
   };
};

var dispatchToProps = function dispatchToProps(dispatch) {
   return {
      fetchFeeds: function fetchFeeds(params) {
         return dispatch(_actions2.default.fetchFeeds(params));
      },
      createFeed: function createFeed(params) {
         return dispatch(_actions2.default.createFeed(params));
      }
   };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Sidebar);

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.Sidebar = undefined;

var _Sidebar = __webpack_require__(46);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Sidebar = _Sidebar2.default;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _presentations = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
   _inherits(Home, _Component);

   function Home() {
      _classCallCheck(this, Home);

      return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
   }

   _createClass(Home, [{
      key: 'render',
      value: function render() {
         return _react2.default.createElement(
            'div',
            { id: 'wrapper' },
            _react2.default.createElement(
               'div',
               { id: 'main' },
               _react2.default.createElement(
                  'div',
                  { className: 'inner' },
                  _react2.default.createElement(
                     'section',
                     { id: 'banner' },
                     _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement(
                           'header',
                           null,
                           _react2.default.createElement(
                              'h1',
                              null,
                              'Welcome to NewsFeed'
                           ),
                           _react2.default.createElement('hr', null),
                           _react2.default.createElement(
                              'p',
                              null,
                              'A free and fully responsive site template'
                           )
                        ),
                        _react2.default.createElement(
                           'p',
                           null,
                           'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.'
                        ),
                        _react2.default.createElement(
                           'ul',
                           { className: 'actions' },
                           _react2.default.createElement(
                              'li',
                              null,
                              _react2.default.createElement(
                                 'a',
                                 { href: '#', className: 'button big' },
                                 'Learn More'
                              )
                           )
                        )
                     )
                  )
               )
            ),
            _react2.default.createElement(_presentations.Sidebar, null)
         );
      }
   }]);

   return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.Home = undefined;

var _Home = __webpack_require__(48);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _Home2.default;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _pages = __webpack_require__(49);

var _reactRedux = __webpack_require__(11);

var _stores = __webpack_require__(25);

var _stores2 = _interopRequireDefault(_stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createElement(
   _reactRedux.Provider,
   { store: _stores2.default.configure(null) },
   _react2.default.createElement(_pages.Home, null)
);

_reactDom2.default.render(App, document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=app.map