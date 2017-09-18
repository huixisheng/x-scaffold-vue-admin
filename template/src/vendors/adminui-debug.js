(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("AdminUi", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["AdminUi"] = factory(require("vue"));
	else
		root["AdminUi"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_111__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 112);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(17);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(110)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(43);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(13);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(13);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clipboard = __webpack_require__(52);

var _clipboard2 = _interopRequireDefault(_clipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    copyText: function copyText(target) {
      var that = this;
      var clipboardInstance = new _clipboard2.default(target, {});
      clipboardInstance.on('success', function (e) {
        that.$message('复制【' + e.text + '】成功');
      });
      clipboardInstance.on('error', function (e) {
        this.$message.error('请，复制出错了');
      });
    },
    copyInit: function copyInit() {
      var that = this;
      var nodeCopy = this.$el.querySelectorAll('[node-type="copy"]');
      nodeCopy.forEach(function (value, key) {
        that.copyText(value);
      });
    },
    handleCommand: function handleCommand(command, instance) {
      var that = this;

      return false;
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(35);
var buildURL = __webpack_require__(38);
var parseHeaders = __webpack_require__(44);
var isURLSameOrigin = __webpack_require__(42);
var createError = __webpack_require__(16);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(37);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(40);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(34);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(9)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(59)
  , hide      = __webpack_require__(63)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(58);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(68)
  , enumBugKeys = __webpack_require__(61);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(20)
  , defined = __webpack_require__(18);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardUser = exports.CardThread = exports.CardProduct = undefined;

var _product = __webpack_require__(94);

var _product2 = _interopRequireDefault(_product);

var _thread = __webpack_require__(95);

var _thread2 = _interopRequireDefault(_thread);

var _user = __webpack_require__(96);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CardProduct = _product2.default;
exports.CardThread = _thread2.default;
exports.CardUser = _user2.default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _qiniuUpload = __webpack_require__(97);

var _qiniuUpload2 = _interopRequireDefault(_qiniuUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _qiniuUpload2.default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaCheck = __webpack_require__(98);

var _schemaCheck2 = _interopRequireDefault(_schemaCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _schemaCheck2.default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(17);
var Axios = __webpack_require__(31);
var defaults = __webpack_require__(6);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(14);
axios.CancelToken = __webpack_require__(30);
axios.isCancel = __webpack_require__(15);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(45);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(14);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(6);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(32);
var dispatchRequest = __webpack_require__(33);
var isAbsoluteURL = __webpack_require__(41);
var combineURLs = __webpack_require__(39);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(36);
var isCancel = __webpack_require__(15);
var defaults = __webpack_require__(6);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(16);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixins = __webpack_require__(7);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_mixins2.default],
  props: ['product'],
  mounted: function mounted() {
    var that = this;
    that.copyInit();
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixins = __webpack_require__(7);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_mixins2.default],
  props: ['thread'],
  mounted: function mounted() {
    var that = this;
    that.copyInit();
  },

  methods: {
    threadDetailUrl: function threadDetailUrl(id) {
      return MAP_URL['threadDetail'] + id;
    }
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixins = __webpack_require__(7);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function skinMapToImage(skin) {
  var skinMap = {
    '1': 'http://img0.cosmeapp.com/Fv0eovFITXogdlmyg_uBID_h9YGA?imageView2/2/w/30/h/30',

    '2': 'http://img0.cosmeapp.com/FgtPyGycbmTHIfPDOlMC-eDKaWUs?imageView2/2/w/30/h/30',

    '3': 'http://img0.cosmeapp.com/FvlKn8QeYtjNEM3feWYFOk_FSnru?imageView2/2/w/30/h/30',

    '4': 'http://img0.cosmeapp.com/FnmMJwLj1TnCPpcmb1aE-ca1xZpD?imageView2/2/w/30/h/30',

    '5': 'http://img0.cosmeapp.com/FpPgVO1mj645tharF2qtWs8oAV8l?imageView2/2/w/30/h/30'
  };
  return skinMap[skin] || '';
}
exports.default = {
  mixins: [_mixins2.default],
  props: ['user'],
  methods: {
    fmtRegisterDay: function fmtRegisterDay(value) {
      return value.replace('在美妆心得的第', '注册');
    },
    fmtSkinImage: function fmtSkinImage(skin) {
      return skinMapToImage(skin);
    },
    userHomeUrl: function userHomeUrl(userid) {
      return MAP_URL['userHome'] + userid;
    },
    identityText: function identityText(v) {
      var vMap = {
        '1': '达人',
        '5': '萌主',
        '10': '灰色萌主',
        '9': '管理'
      };
      return vMap[v] || '普通用户';
    },
    handleCommand: function handleCommand(command, instance) {
      var that = this;

      return false;
    }
  },
  mounted: function mounted() {
    var that = this;
    that.copyInit();
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'qiniu-upload',
  data: function data() {
    return {
      bucketHost: '',
      form: {},
      img: '',
      inputValue: []
    };
  },

  computed: {},
  watch: {
    fileList: {
      immediate: true,
      handler: function handler(val, oldVal) {}
    }
  },
  props: {
    rw: {
      type: Number,
      default: 0
    },
    rh: {
      type: Number,
      default: 0
    },
    inputName: {
      type: String,
      default: 'fileImage'
    },
    fileList: Array,
    multiple: Boolean
  },
  mounted: function mounted() {
    console.log('qiniu-upload');
    this.inputValue = this.$refs.upload.uploadFiles;
  },

  methods: {
    beforeUpload: function beforeUpload(file) {
      var that = this;
      return _axios2.default.get('/ajax/upload-token/').then(function (response) {
        var token = response.data.uptoken;
        that.bucketHost = response.data.domain;
        that.form = {
          token: token
        };
      });
    },
    handleSuccess: function handleSuccess(response, file, fileList) {
      var key = response.key;
      var prefix = this.supportWebp ? 'webp/' : '';
      var img = '' + this.bucketHost + prefix + encodeURI(key);
      if (response.width * this.rh !== response.height * this.rw) {
        this.$message.error('亲，图片比例不对。请上传比例为' + this.rw + ':' + this.rh);
        this.$refs.upload.handleRemove(file);
      } else {
        var index = 0;
        var deleteCount = this.$refs.upload.uploadFiles.length;
        if (this.multiple) {
          deleteCount = 1;
          index = this.$refs.upload.uploadFiles.indexOf(file);
        }
        var item = this.$refs.upload.uploadFiles[index];
        var itemUploadFile = (0, _assign2.default)(item, response);
        itemUploadFile.url = img;
        delete itemUploadFile.response;
        this.$refs.upload.uploadFiles.splice(index, deleteCount, itemUploadFile);
      }
    },
    handleRemove: function handleRemove(file) {}
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(111);

var _vue2 = _interopRequireDefault(_vue);

var _vQrcode = __webpack_require__(93);

var _vQrcode2 = _interopRequireDefault(_vQrcode);

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      qrCls: 'qrcode',
      options: [{
        'type': 'bbsthread',
        'value': '帖子',
        'schema': 'cosmeapp://thread/details/?tid=$data$',
        'reg': /^\d+$/,
        'placeholder': '请输入帖子id。例如:95271'
      }, {
        'type': 'activity',
        'value': '专题/网页/试用活动',
        'schema': 'cosmeapp://web/view/?url=$data$',
        'reg': /^http/,
        'placeholder': '请输入输入http开头的网址'
      }, {
        'type': 'bbsthreadlist',
        'value': '标签详情',
        'schema': 'cosmeapp://thread/list/?tag_id=$data$',
        'reg': /^\d+$/,
        'placeholder': '请输入聚合id。例如:20'
      }, {
        'type': 'product',
        'value': '产品详情',
        'schema': 'cosmeapp://product/specifics/?product_id=$data$',
        'reg': /^\d+$/,
        'placeholder': '请输入产品id。例如:8866'
      }],

      hasError: false,
      size: 100,
      level: 'M',
      bgColor: '#FFFFFF',
      fgColor: '#000000'
    };
  },

  props: {
    schema: {
      type: Object,
      default: function _default() {
        return {
          type: 'bbsthread',
          value: '',
          uri: ''
        };
      }
    }
  },
  computed: {
    placeholder: function placeholder() {
      var that = this;
      var res = that.options.find(function (element) {
        return element.type === that.schema.type;
      });
      return res && res['placeholder'] || '';
    },
    schemaQrUrl: function schemaQrUrl() {
      var that = this;
      var inputValue = that.schema.value;
      inputValue = inputValue.trim();
      if (that.hasError || inputValue === '') {
        return '';
      }
      var res = that.options.find(function (element) {
        return element.type === that.schema.type;
      });
      function replaceSchema(msg, data) {
        return msg.replace(/\$\w+\$/g, function (s) {
          return encodeURIComponent(data);
        });
      }
      var uri = replaceSchema(res && res['schema'] || '', inputValue);
      this.schema.uri = uri;
      return uri;
    }
  },
  watch: {},
  methods: {
    getOptionsItem: function getOptionsItem() {
      var that = this;
      var res = that.options.find(function (element) {
        return element.type === that.schema.type;
      });
      return res || {};
    },
    validate: function validate() {
      var that = this;
      var item = that.getOptionsItem();
      var inputValue = that.schema.value.trim();
      var type = that.schema.type;
      if (inputValue !== '' && !item.reg.test(inputValue)) {
        that.hasError = true;
        return false;
      }
      var params = {
        type: type,
        data: inputValue
      };
      console.log('inputValue:%s', inputValue);
      _axios2.default.get('/index/verify-params', {
        params: params
      }).then(function (result) {
        var response = result.data;
        if (response.code === 200) {
          that.hasError = false;
        } else {
          that.hasError = false;
        }
      });
      return that.hasError;
    }
  },
  components: { Qrcode: _vQrcode2.default },
  name: 'schema-check'
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(91)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                document.body.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    document.body.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    document.body.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.target) {
                    this.target.blur();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(51), __webpack_require__(92), __webpack_require__(89)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
module.exports = __webpack_require__(4).Object.assign;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
module.exports = __webpack_require__(4).Object.keys;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(23)
  , toLength  = __webpack_require__(75)
  , toIndex   = __webpack_require__(74);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(55);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10)
  , document = __webpack_require__(9).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 62 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(66)
  , createDesc = __webpack_require__(71);
module.exports = __webpack_require__(8) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(5)(function(){
  return Object.defineProperty(__webpack_require__(60)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(21)
  , gOPS     = __webpack_require__(67)
  , pIE      = __webpack_require__(69)
  , toObject = __webpack_require__(24)
  , IObject  = __webpack_require__(20)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(5)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(56)
  , IE8_DOM_DEFINE = __webpack_require__(64)
  , toPrimitive    = __webpack_require__(76)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(62)
  , toIObject    = __webpack_require__(23)
  , arrayIndexOf = __webpack_require__(57)(false)
  , IE_PROTO     = __webpack_require__(72)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(19)
  , core    = __webpack_require__(4)
  , fails   = __webpack_require__(5);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(73)('keys')
  , uid    = __webpack_require__(77);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(19);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(65)});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(24)
  , $keys    = __webpack_require__(21);

__webpack_require__(70)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.thread[data-v-341d8692]{ max-width: 500px; position: relative; display: block; text-decoration: none;\n}\n.thread-banner[data-v-341d8692]{ width: 100%; padding-top: 60%; position: relative; margin-bottom: 10px;\n}\n.thread-img[data-v-341d8692]{ width: 100%; height: 100%; position: absolute; left: 0; top: 0;\n}\n.thread-product[data-v-341d8692]{ position: absolute; bottom: 10px; right: 4px; background-color: rgba(102, 102, 102, 0.2); color: #fff; padding: 4px 6px; font-size: 12px; border-radius: 10px;\n}\n.thread-title[data-v-341d8692]{ font-size: 14px; margin: 0; position: absolute; bottom: 10px; left: 4px; color: #fff;\n}\n.thread-flex[data-v-341d8692]{ display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between;\n}\n.tag[data-v-341d8692]{ background: rgba(255,74,131,0.10); border-radius: 2px; padding: 2px 4px; font-family: PingFangSC-Regular; font-size: 12px; color: #FF4A83; margin-right: 5px;\n}\n.thread-data[data-v-341d8692] { font-size: 14px; color: #B3B4C4;\n}\n.thread-data > span[data-v-341d8692]{ margin-right: 5px;\n}\n.copy-handler[data-v-341d8692]{ position: absolute; top: 0; right: 0; z-index: 10; color: #fff; background-color: rgba(0, 0, 0, 0.4);\n}\n", ""]);

// exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.user[data-v-3df697d3]{ display: -webkit-box; display: -ms-flexbox; display: flex; color: #b2b2b2; text-decoration: none;\n}\n.user-avatar[data-v-3df697d3]{ width: 50px; margin-right: 10px; position: relative;\n}\n.user-avatar > img[data-v-3df697d3]{ width: 50px; height: 50px; border-radius: 50%;\n}\n.user-v[data-v-3df697d3]{ position: absolute; top: 35px; right: 0; width: 15px; height: 15px; background-size: cover;\n}\n.user-skin[data-v-3df697d3]{ width: 20px; height: 20px; margin-left: 5px;\n}\n.user-verified[data-v-3df697d3]{ height: 18px;\n}\n.user-text-group[data-v-3df697d3]{ margin-right: 8px;\n}\n.space-between[data-v-3df697d3]{ display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between;\n}\n.user-row[data-v-3df697d3]{ display: -webkit-box; display: -ms-flexbox; display: flex; -ms-flex-item-align: center; align-self: center; margin-bottom: 5px;\n}\n.user-name[data-v-3df697d3]{ color: #333;\n}\n.user-main[data-v-3df697d3]{ position: relative;\n}\n.copy-handler[data-v-3df697d3]{ position: absolute; top: -5px; right: 0;\n}\n", ""]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.el-upload--picture-card { height: auto; line-height: initial; width: auto;\n}\n", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.has-error .el-input__inner{ border-color: #ff4949;\n}\n", ""]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.box[data-v-72e15718]{ position: relative; box-shadow: none; border: 0;\n}\n.qrbox[data-v-72e15718]{ width: 200px; height: 200px; position: absolute; right: 0; top: 36px; z-index: 100;\n}\n", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.product[data-v-f39c19d2]{ display: -webkit-box; display: -ms-flexbox; display: flex; border: 1px solid #e0e0e0; padding: 10px; max-width: 400px;\n}\n.product-img[data-v-f39c19d2]{ width: 60px; margin-right: 10px;\n}\n.product-img > img[data-v-f39c19d2]{ width: 60px; height: 60px;\n}\n.product-main[data-v-f39c19d2]{ -webkit-box-flex: 1; -ms-flex: 1; flex: 1; position: relative;\n}\n.product-sart[data-v-f39c19d2], .product-sart-percent[data-v-f39c19d2]{ background: url(http://img0.cosmeapp.com/fis/src/star_3f1030e.png) repeat-x 0 0; background-size: 12px 26px; height: 12px; display: inline-block; vertical-align: top; line-height: 1;\n}\n.product-sart[data-v-f39c19d2]{ background-position: 0 -13px; width: 60px;\n}\n.product-sart-percent[data-v-f39c19d2]{ background-position: 0 0;\n}\n.product-tag[data-v-f39c19d2]{ color: #ff4a83; background: #f7f7f7; padding: 4px; margin-right: 10px;\n}\n.product-text-primary[data-v-f39c19d2]{ color: #2d2d34;\n}\n.product-text-light[data-v-f39c19d2] { color: #7b7a87;\n}\n.product-text-mostlight[data-v-f39c19d2] { color: #b3b4c4;\n}\n.copy-handler[data-v-f39c19d2]{ position: absolute; top: 0; right: 0; z-index: 10; color: #fff; background-color: rgba(0, 0, 0, 0.4);\n}\n", ""]);

// exports


/***/ }),
/* 86 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (element.matches(selector)) return element;
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(86);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(88);
var delegate = __webpack_require__(87);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 91 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

/*! (c) 2017 wxp. All Rights Reserved */
!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VQrcode=e():t.VQrcode=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.qrcode=void 0;var i=n(3),s=r(i);e.default=s.default,e.qrcode=s.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=r(i);e.default={props:{value:{type:String,required:!0,default:""},cls:{type:String,default:""},size:{type:Number,default:100},level:{type:String,default:"L",validator:function(t){return["L","Q","M","H"].indexOf(t)>-1}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},mime:{type:String,default:"image/png"},padding:{type:Number,default:0},type:{type:String,default:"canvas",validator:function(t){return["canvas","image"].indexOf(t)>-1}}},methods:{render:function(){var t=new s.default({background:this.background,foreground:this.foreground,level:this.level,mime:this.mime,padding:this.padding,size:this.size,value:this.value});this.$el.innerHTML="",this.$el.appendChild(t[this.type])}},mounted:function(){var t=this;this.render(),this.$options._propKeys.forEach(function(e){return t.$watch(e,t.render)})}}},function(t,e,n){!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t){return t&&t.__esModule?t.default:t}function e(t,e){return e={exports:{}},t(e,e.exports),e.exports}var n=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},r=n,i=function(t){return Object(r(t))},s={}.hasOwnProperty,o=function(t,e){return s.call(t,e)},u=e(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),a=u,f="__core-js_shared__",c=a[f]||(a[f]={}),h=function(t){return c[t]||(c[t]={})},l=0,d=Math.random(),_=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++l+d).toString(36))},v=h("keys"),p=_,y=function(t){return v[t]||(v[t]=p(t))},g=o,b=i,k=y("IE_PROTO"),m=Object.prototype,w=Object.getPrototypeOf||function(t){return t=b(t),g(t,k)?t[k]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?m:null},O=e(function(t){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)}),B=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},M=B,S=function(t,e,n){if(M(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},E=function(t){return"object"==typeof t?null!==t:"function"==typeof t},j=E,A=function(t){if(!j(t))throw TypeError(t+" is not an object!");return t},L=function(t){try{return!!t()}catch(t){return!0}},x=!L(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),N=E,P=u.document,T=N(P)&&N(P.createElement),F=function(t){return T?P.createElement(t):{}},C=!x&&!L(function(){return 7!=Object.defineProperty(F("div"),"a",{get:function(){return 7}}).a}),z=E,U=function(t,e){if(!z(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!z(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!z(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!z(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},I=A,D=C,R=U,q=Object.defineProperty,K=x?Object.defineProperty:function(t,e,n){if(I(t),e=R(e,!0),I(n),D)try{return q(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t},G={f:K},V=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},W=G,H=V,Q=x?function(t,e,n){return W.f(t,e,H(1,n))}:function(t,e,n){return t[e]=n,t},X=u,$=O,J=S,Y=Q,Z="prototype",tt=function(t,e,n){var r,i,s,o=t&tt.F,u=t&tt.G,a=t&tt.S,f=t&tt.P,c=t&tt.B,h=t&tt.W,l=u?$:$[e]||($[e]={}),d=l[Z],_=u?X:a?X[e]:(X[e]||{})[Z];u&&(n=e);for(r in n)i=!o&&_&&void 0!==_[r],i&&r in l||(s=i?_[r]:n[r],l[r]=u&&"function"!=typeof _[r]?n[r]:c&&i?J(s,X):h&&_[r]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[Z]=t[Z],e}(s):f&&"function"==typeof s?J(Function.call,s):s,f&&((l.virtual||(l.virtual={}))[r]=s,t&tt.R&&d&&!d[r]&&Y(d,r,s)))};tt.F=1,tt.G=2,tt.S=4,tt.P=8,tt.B=16,tt.W=32,tt.U=64,tt.R=128;var et=tt,nt=et,rt=O,it=L,st=function(t,e){var n=(rt.Object||{})[t]||Object[t],r={};r[t]=e(n),nt(nt.S+nt.F*it(function(){n(1)}),"Object",r)},ot=i,ut=w;st("getPrototypeOf",function(){return function(t){return ut(ot(t))}});var at=O.Object.getPrototypeOf,ft=e(function(t){t.exports={default:at,__esModule:!0}}),ct=t(ft),ht=e(function(t,e){e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}}),lt=t(ht),dt=et;dt(dt.S+dt.F*!x,"Object",{defineProperty:G.f});var _t=O.Object,vt=function(t,e,n){return _t.defineProperty(t,e,n)},pt=e(function(t){t.exports={default:vt,__esModule:!0}}),yt=e(function(t,e){function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=pt,i=n(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()}),gt=t(yt),bt=Math.ceil,kt=Math.floor,mt=function(t){return isNaN(t=+t)?0:(t>0?kt:bt)(t)},wt=mt,Ot=n,Bt=function(t){return function(e,n){var r,i,s=String(Ot(e)),o=wt(n),u=s.length;return o<0||o>=u?t?"":void 0:(r=s.charCodeAt(o),r<55296||r>56319||o+1===u||(i=s.charCodeAt(o+1))<56320||i>57343?t?s.charAt(o):r:t?s.slice(o,o+2):(r-55296<<10)+(i-56320)+65536)}},Mt=!0,St=Q,Et={},jt={}.toString,At=function(t){return jt.call(t).slice(8,-1)},Lt=At,xt=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==Lt(t)?t.split(""):Object(t)},Nt=xt,Pt=n,Tt=function(t){return Nt(Pt(t))},Ft=mt,Ct=Math.min,zt=function(t){return t>0?Ct(Ft(t),9007199254740991):0},Ut=mt,It=Math.max,Dt=Math.min,Rt=function(t,e){return t=Ut(t),t<0?It(t+e,0):Dt(t,e)},qt=Tt,Kt=zt,Gt=Rt,Vt=function(t){return function(e,n,r){var i,s=qt(e),o=Kt(s.length),u=Gt(r,o);if(t&&n!=n){for(;o>u;)if(i=s[u++],i!=i)return!0}else for(;o>u;u++)if((t||u in s)&&s[u]===n)return t||u||0;return!t&&-1}},Wt=o,Ht=Tt,Qt=Vt(!1),Xt=y("IE_PROTO"),$t=function(t,e){var n,r=Ht(t),i=0,s=[];for(n in r)n!=Xt&&Wt(r,n)&&s.push(n);for(;e.length>i;)Wt(r,n=e[i++])&&(~Qt(s,n)||s.push(n));return s},Jt="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Yt=$t,Zt=Jt,te=Object.keys||function(t){return Yt(t,Zt)},ee=G,ne=A,re=te,ie=x?Object.defineProperties:function(t,e){ne(t);for(var n,r=re(e),i=r.length,s=0;i>s;)ee.f(t,n=r[s++],e[n]);return t},se=u.document&&document.documentElement,oe=A,ue=ie,ae=Jt,fe=y("IE_PROTO"),ce=function(){},he="prototype",le=function(){var t,e=F("iframe"),n=ae.length,r="<",i=">";for(e.style.display="none",se.appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(r+"script"+i+"document.F=Object"+r+"/script"+i),t.close(),le=t.F;n--;)delete le[he][ae[n]];return le()},de=Object.create||function(t,e){var n;return null!==t?(ce[he]=oe(t),n=new ce,ce[he]=null,n[fe]=t):n=le(),void 0===e?n:ue(n,e)},_e=e(function(t){var e=h("wks"),n=_,r=u.Symbol,i="function"==typeof r,s=t.exports=function(t){return e[t]||(e[t]=i&&r[t]||(i?r:n)("Symbol."+t))};s.store=e}),ve=G.f,pe=o,ye=_e("toStringTag"),ge=function(t,e,n){t&&!pe(t=n?t:t.prototype,ye)&&ve(t,ye,{configurable:!0,value:e})},be=de,ke=V,me=ge,we={};Q(we,_e("iterator"),function(){return this});var Oe=function(t,e,n){t.prototype=be(we,{next:ke(1,n)}),me(t,e+" Iterator")},Be=Mt,Me=et,Se=St,Ee=Q,je=o,Ae=Et,Le=Oe,xe=ge,Ne=w,Pe=_e("iterator"),Te=!([].keys&&"next"in[].keys()),Fe="@@iterator",Ce="keys",ze="values",Ue=function(){return this},Ie=function(t,e,n,r,i,s,o){Le(n,e,r);var u,a,f,c=function(t){if(!Te&&t in _)return _[t];switch(t){case Ce:return function(){return new n(this,t)};case ze:return function(){return new n(this,t)}}return function(){return new n(this,t)}},h=e+" Iterator",l=i==ze,d=!1,_=t.prototype,v=_[Pe]||_[Fe]||i&&_[i],p=v||c(i),y=i?l?c("entries"):p:void 0,g="Array"==e?_.entries||v:v;if(g&&(f=Ne(g.call(new t)),f!==Object.prototype&&(xe(f,h,!0),Be||je(f,Pe)||Ee(f,Pe,Ue))),l&&v&&v.name!==ze&&(d=!0,p=function(){return v.call(this)}),Be&&!o||!Te&&!d&&_[Pe]||Ee(_,Pe,p),Ae[e]=p,Ae[h]=Ue,i)if(u={values:l?p:c(ze),keys:s?p:c(Ce),entries:y},o)for(a in u)a in _||Se(_,a,u[a]);else Me(Me.P+Me.F*(Te||d),e,u);return u},De=Bt(!0);Ie(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=De(e,n),this._i+=t.length,{value:t,done:!1})});var Re=function(){},qe=function(t,e){return{value:e,done:!!t}},Ke=Re,Ge=qe,Ve=Et,We=Tt;Ie(Array,"Array",function(t,e){this._t=We(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,Ge(1)):"keys"==e?Ge(0,n):"values"==e?Ge(0,t[n]):Ge(0,[n,t[n]])},"values");Ve.Arguments=Ve.Array,Ke("keys"),Ke("values"),Ke("entries");for(var He=u,Qe=Q,Xe=Et,$e=_e("toStringTag"),Je=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],Ye=0;Ye<5;Ye++){var Ze=Je[Ye],tn=He[Ze],en=tn&&tn.prototype;en&&!en[$e]&&Qe(en,$e,Ze),Xe[Ze]=Xe.Array}var nn=_e,rn={f:nn},sn=rn.f("iterator"),on=e(function(t){t.exports={default:sn,__esModule:!0}}),un=e(function(t){var e=_("meta"),n=E,r=o,i=G.f,s=0,u=Object.isExtensible||function(){return!0},a=!L(function(){return u(Object.preventExtensions({}))}),f=function(t){i(t,e,{value:{i:"O"+ ++s,w:{}}})},c=function(t,i){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,e)){if(!u(t))return"F";if(!i)return"E";f(t)}return t[e].i},h=function(t,n){if(!r(t,e)){if(!u(t))return!0;if(!n)return!1;f(t)}return t[e].w},l=function(t){return a&&d.NEED&&u(t)&&!r(t,e)&&f(t),t},d=t.exports={KEY:e,NEED:!1,fastKey:c,getWeak:h,onFreeze:l}}),an=u,fn=O,cn=Mt,hn=rn,ln=G.f,dn=function(t){var e=fn.Symbol||(fn.Symbol=cn?{}:an.Symbol||{});"_"==t.charAt(0)||t in e||ln(e,t,{value:hn.f(t)})},_n=te,vn=Tt,pn=function(t,e){for(var n,r=vn(t),i=_n(r),s=i.length,o=0;s>o;)if(r[n=i[o++]]===e)return n},yn=Object.getOwnPropertySymbols,gn={f:yn},bn={}.propertyIsEnumerable,kn={f:bn},mn=te,wn=gn,On=kn,Bn=function(t){var e=mn(t),n=wn.f;if(n)for(var r,i=n(t),s=On.f,o=0;i.length>o;)s.call(t,r=i[o++])&&e.push(r);return e},Mn=At,Sn=Array.isArray||function(t){return"Array"==Mn(t)},En=$t,jn=Jt.concat("length","prototype"),An=Object.getOwnPropertyNames||function(t){return En(t,jn)},Ln={f:An},xn=Tt,Nn=Ln.f,Pn={}.toString,Tn="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Fn=function(t){try{return Nn(t)}catch(t){return Tn.slice()}},Cn=function(t){return Tn&&"[object Window]"==Pn.call(t)?Fn(t):Nn(xn(t))},zn={f:Cn},Un=kn,In=V,Dn=Tt,Rn=U,qn=o,Kn=C,Gn=Object.getOwnPropertyDescriptor,Vn=x?Gn:function(t,e){if(t=Dn(t),e=Rn(e,!0),Kn)try{return Gn(t,e)}catch(t){}if(qn(t,e))return In(!Un.f.call(t,e),t[e])},Wn={f:Vn},Hn=u,Qn=o,Xn=x,$n=et,Jn=St,Yn=un.KEY,Zn=L,tr=h,er=ge,nr=_,rr=_e,ir=rn,sr=dn,or=pn,ur=Bn,ar=Sn,fr=A,cr=Tt,hr=U,lr=V,dr=de,_r=zn,vr=Wn,pr=G,yr=te,gr=vr.f,br=pr.f,kr=_r.f,mr=Hn.Symbol,wr=Hn.JSON,Or=wr&&wr.stringify,Br="prototype",Mr=rr("_hidden"),Sr=rr("toPrimitive"),Er={}.propertyIsEnumerable,jr=tr("symbol-registry"),Ar=tr("symbols"),Lr=tr("op-symbols"),xr=Object[Br],Nr="function"==typeof mr,Pr=Hn.QObject,Tr=!Pr||!Pr[Br]||!Pr[Br].findChild,Fr=Xn&&Zn(function(){return 7!=dr(br({},"a",{get:function(){return br(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=gr(xr,e);r&&delete xr[e],br(t,e,n),r&&t!==xr&&br(xr,e,r)}:br,Cr=function(t){var e=Ar[t]=dr(mr[Br]);return e._k=t,e},zr=Nr&&"symbol"==typeof mr.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof mr},Ur=function(t,e,n){return t===xr&&Ur(Lr,e,n),fr(t),e=hr(e,!0),fr(n),Qn(Ar,e)?(n.enumerable?(Qn(t,Mr)&&t[Mr][e]&&(t[Mr][e]=!1),n=dr(n,{enumerable:lr(0,!1)})):(Qn(t,Mr)||br(t,Mr,lr(1,{})),t[Mr][e]=!0),Fr(t,e,n)):br(t,e,n)},Ir=function(t,e){fr(t);for(var n,r=ur(e=cr(e)),i=0,s=r.length;s>i;)Ur(t,n=r[i++],e[n]);return t},Dr=function(t,e){return void 0===e?dr(t):Ir(dr(t),e)},Rr=function(t){var e=Er.call(this,t=hr(t,!0));return!(this===xr&&Qn(Ar,t)&&!Qn(Lr,t))&&(!(e||!Qn(this,t)||!Qn(Ar,t)||Qn(this,Mr)&&this[Mr][t])||e)},qr=function(t,e){if(t=cr(t),e=hr(e,!0),t!==xr||!Qn(Ar,e)||Qn(Lr,e)){var n=gr(t,e);return!n||!Qn(Ar,e)||Qn(t,Mr)&&t[Mr][e]||(n.enumerable=!0),n}},Kr=function(t){for(var e,n=kr(cr(t)),r=[],i=0;n.length>i;)Qn(Ar,e=n[i++])||e==Mr||e==Yn||r.push(e);return r},Gr=function(t){for(var e,n=t===xr,r=kr(n?Lr:cr(t)),i=[],s=0;r.length>s;)!Qn(Ar,e=r[s++])||n&&!Qn(xr,e)||i.push(Ar[e]);return i};Nr||(mr=function(){if(this instanceof mr)throw TypeError("Symbol is not a constructor!");var t=nr(arguments.length>0?arguments[0]:void 0),e=function(n){this===xr&&e.call(Lr,n),Qn(this,Mr)&&Qn(this[Mr],t)&&(this[Mr][t]=!1),Fr(this,t,lr(1,n))};return Xn&&Tr&&Fr(xr,t,{configurable:!0,set:e}),Cr(t)},Jn(mr[Br],"toString",function(){return this._k}),vr.f=qr,pr.f=Ur,Ln.f=_r.f=Kr,kn.f=Rr,gn.f=Gr,Xn&&!Mt&&Jn(xr,"propertyIsEnumerable",Rr,!0),ir.f=function(t){return Cr(rr(t))}),$n($n.G+$n.W+$n.F*!Nr,{Symbol:mr});for(var Vr="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),Wr=0;Vr.length>Wr;)rr(Vr[Wr++]);for(var Vr=yr(rr.store),Wr=0;Vr.length>Wr;)sr(Vr[Wr++]);$n($n.S+$n.F*!Nr,"Symbol",{for:function(t){return Qn(jr,t+="")?jr[t]:jr[t]=mr(t)},keyFor:function(t){if(zr(t))return or(jr,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){Tr=!0},useSimple:function(){Tr=!1}}),$n($n.S+$n.F*!Nr,"Object",{create:Dr,defineProperty:Ur,defineProperties:Ir,getOwnPropertyDescriptor:qr,getOwnPropertyNames:Kr,getOwnPropertySymbols:Gr}),wr&&$n($n.S+$n.F*(!Nr||Zn(function(){var t=mr();return"[null]"!=Or([t])||"{}"!=Or({a:t})||"{}"!=Or(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!zr(t)){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);return e=r[1],"function"==typeof e&&(n=e),!n&&ar(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!zr(e))return e}),r[1]=e,Or.apply(wr,r)}}}),mr[Br][Sr]||Q(mr[Br],Sr,mr[Br].valueOf),er(mr,"Symbol"),er(Math,"Math",!0),er(Hn.JSON,"JSON",!0),dn("asyncIterator"),dn("observable");var Hr=O.Symbol,Qr=e(function(t){t.exports={default:Hr,__esModule:!0}}),Xr=e(function(t,e){function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=on,i=n(r),s=Qr,o=n(s),u="function"==typeof o.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};e.default="function"==typeof o.default&&"symbol"===u(i.default)?function(t){return"undefined"==typeof t?"undefined":u(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":"undefined"==typeof t?"undefined":u(t)}}),$r=e(function(t,e){function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=Xr,i=n(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}}),Jr=t($r),Yr=E,Zr=A,ti=function(t,e){if(Zr(t),!Yr(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},ei={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=S(Function.call,Wn.f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return ti(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:ti},ni=et;ni(ni.S,"Object",{setPrototypeOf:ei.set});var ri=O.Object.setPrototypeOf,ii=e(function(t){t.exports={default:ri,__esModule:!0}}),si=et;si(si.S,"Object",{create:de});var oi=O.Object,ui=function(t,e){return oi.create(t,e)},ai=e(function(t){t.exports={default:ui,__esModule:!0}}),fi=e(function(t,e){function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=ii,i=n(r),s=ai,o=n(s),u=Xr,a=n(u);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,a.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}}),ci=t(fi),hi=function(){function t(){lt(this,t)}return gt(t,null,[{key:"abs",value:function(t){return null!=t?Math.abs(t):null}},{key:"privatize",value:function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t["_"+n]=e[n]);return t}},{key:"setter",value:function(t,e,n,r,i){var s=t[e],o=null!=n?n:r;return"function"==typeof i&&(o=i(o)),t[e]=o,o!==s}},{key:"throwUnimplemented",value:function(t,e){throw new Error('"'+e+'" method must be implemented on the '+t+" class")}},{key:"toUpperCase",value:function(t){return null!=t&&t.toUpperCase()}}]),t}(),li=function(){function t(){lt(this,t)}return gt(t,[{key:"getName",value:function(){hi.throwUnimplemented("Service","getName")}}]),t}(),di=function(t){function e(){return lt(this,e),Jr(this,(e.__proto__||ct(e)).apply(this,arguments))}return ci(e,t),gt(e,[{key:"createCanvas",value:function(){hi.throwUnimplemented("ElementService","createCanvas")}},{key:"createImage",value:function(){hi.throwUnimplemented("ElementService","createImage")}},{key:"getName",value:function(){return"element"}},{key:"isCanvas",value:function(t){hi.throwUnimplemented("ElementService","isCanvas")}},{key:"isImage",value:function(t){hi.throwUnimplemented("ElementService","isImage")}}]),e}(li),_i=function(t){function e(){return lt(this,e),Jr(this,(e.__proto__||ct(e)).apply(this,arguments))}return ci(e,t),gt(e,[{key:"createCanvas",value:function(){return document.createElement("canvas")}},{key:"createImage",value:function(){return document.createElement("img")}},{key:"isCanvas",value:function(t){return t instanceof HTMLCanvasElement}},{key:"isImage",value:function(t){return t instanceof HTMLImageElement}}]),e}(di),vi=te,pi=gn,yi=kn,gi=i,bi=xt,ki=Object.assign,mi=!ki||L(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=ki({},t)[n]||Object.keys(ki({},e)).join("")!=r})?function(t,e){for(var n=gi(t),r=arguments.length,i=1,s=pi.f,o=yi.f;r>i;)for(var u,a=bi(arguments[i++]),f=s?vi(a).concat(s(a)):vi(a),c=f.length,h=0;c>h;)o.call(a,u=f[h++])&&(n[u]=a[u]);return n}:ki,wi=et;wi(wi.S+wi.F,"Object",{assign:mi});var Oi=O.Object.assign,Bi=e(function(t){t.exports={default:Oi,__esModule:!0}}),Mi=t(Bi),Si=function(){function t(e){lt(this,t),this.qrious=e}return gt(t,[{key:"draw",value:function(t){hi.throwUnimplemented("Renderer","draw")}},{key:"getModuleSize",value:function(t){var e=this.qrious.padding||0,n=Math.floor((this.qrious.size-2*e)/t.width);return Math.max(1,n)}},{key:"getOffset",value:function(t){if(null!=this.qrious.padding)return this.qrious.padding;var e=this.getModuleSize(t),n=Math.floor((this.qrious.size-e*t.width)/2);return Math.max(0,n)}},{key:"render",value:function(t){this.resize(),this.reset(),this.draw(t)}},{key:"reset",value:function(){hi.throwUnimplemented("Renderer","reset")}},{key:"resize",value:function(){hi.throwUnimplemented("Renderer","resize")}}]),t}(),Ei=function(t){function e(){return lt(this,e),Jr(this,(e.__proto__||ct(e)).apply(this,arguments))}return ci(e,t),gt(e,[{key:"draw",value:function(t){var e=this.qrious,n=this.getModuleSize(t),r=this.getOffset(t),i=e.canvas.getContext("2d");i.fillStyle=e.foreground,i.globalAlpha=e.foregroundAlpha;for(var s=0;s<t.width;s++)for(var o=0;o<t.width;o++)t.buffer[o*t.width+s]&&i.fillRect(n*s+r,n*o+r,n,n)}},{key:"reset",value:function(){var t=this.qrious,e=t.canvas.getContext("2d");e.lineWidth=1,e.clearRect(0,0,t.size,t.size),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,t.size,t.size)}},{key:"resize",value:function(){var t=this.qrious,e=t.canvas;e.width=t.size,e.height=t.size}}]),e}(Si),ji=function(){function t(){lt(this,t)}return gt(t,null,[{key:"BLOCK",get:function(){return[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}}]),t}(),Ai=function(){function t(){lt(this,t)}return gt(t,null,[{key:"BLOCKS",get:function(){return[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30]}},{key:"FINAL_FORMAT",get:function(){return[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107]}},{key:"LEVELS",get:function(){return{L:1,M:2,Q:3,H:4}}}]),t}(),Li=function(){function t(){lt(this,t)}return gt(t,null,[{key:"EXPONENT",get:function(){return[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0]}},{key:"LOG",get:function(){return[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}}]),t}(),xi=function(){function t(){lt(this,t)}return gt(t,null,[{key:"BLOCK",get:function(){return[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}}]),t}(),Ni=function(){function t(e){lt(this,t),this._badness=[],this._level=Ai.LEVELS[e.level],this._polynomial=[],this._value=e.value,this._valueLength=this._value.length,this._version=0,this._stringBuffer=[];for(var n=void 0,r=void 0,i=void 0,s=void 0;this._version<40;){this._version++;var o=4*(this._level-1)+16*(this._version-1);if(i=Ai.BLOCKS[o++],s=Ai.BLOCKS[o++],n=Ai.BLOCKS[o++],r=Ai.BLOCKS[o],o=n*(i+s)+s-3+(this._version<=9),this._valueLength<=o)break}this._dataBlock=n,this._eccBlock=r,this._neccBlock1=i,this._neccBlock2=s,this.width=17+4*this._version,this.buffer=t._createArray(this.width*this.width),this._ecc=t._createArray(this._dataBlock+(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2),this._mask=t._createArray((this.width*(this.width+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+this.width*(this.width-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(this._value.length),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()}return gt(t,null,[{key:"_createArray",value:function(t){for(var e=[],n=0;n<t;n++)e[n]=0;return e}},{key:"_getMaskBit",value:function(t,e){var n=void 0;return t>e&&(n=t,t=e,e=n),n=e,n+=e*e,n>>=1,n+=t}},{key:"_modN",value:function(t){for(;t>=255;)t-=255,t=(t>>8)+(255&t);return t}},{key:"N1",get:function(){return 3}},{key:"N2",get:function(){return 3}},{key:"N3",get:function(){return 40}},{key:"N4",get:function(){return 10}}]),gt(t,[{key:"_addAlignment",value:function(t,e){this.buffer[t+this.width*e]=1;for(var n=-2;n<2;n++)this.buffer[t+n+this.width*(e-2)]=1,this.buffer[t-2+this.width*(e+n+1)]=1,this.buffer[t+2+this.width*(e+n)]=1,this.buffer[t+n+1+this.width*(e+2)]=1;for(var r=0;r<2;r++)this._setMask(t-1,e+r),this._setMask(t+1,e-r),this._setMask(t-r,e-1),this._setMask(t+r,e+1)}},{key:"_appendData",value:function(e,n,r,i){for(var s=0;s<i;s++)this._stringBuffer[r+s]=0;for(var o=0;o<n;o++){var u=Li.LOG[this._stringBuffer[e+o]^this._stringBuffer[r]];if(255!==u)for(var a=1;a<i;a++)this._stringBuffer[r+a-1]=this._stringBuffer[r+a]^Li.EXPONENT[t._modN(u+this._polynomial[i-a])];else for(var f=r;f<r+i;f++)this._stringBuffer[f]=this._stringBuffer[f+1];this._stringBuffer[r+i-1]=255===u?0:Li.EXPONENT[t._modN(u+this._polynomial[0])]}}},{key:"_appendEccToData",value:function(){for(var t=0,e=this._calculateMaxLength(),n=0;n<this._neccBlock1;n++)this._appendData(t,this._dataBlock,e,this._eccBlock),t+=this._dataBlock,e+=this._eccBlock;for(var r=0;r<this._neccBlock2;r++)this._appendData(t,this._dataBlock+1,e,this._eccBlock),t+=this._dataBlock+1,e+=this._eccBlock}},{key:"_applyMask",value:function(t){var e=this.width;switch(t){case 0:for(var n=0;n<e;n++)for(var r=0;r<e;r++)r+n&1||this._isMasked(r,n)||(this.buffer[r+n*e]^=1);break;case 1:for(var i=0;i<e;i++)for(var s=0;s<e;s++)1&i||this._isMasked(s,i)||(this.buffer[s+i*e]^=1);break;case 2:for(var o=0;o<e;o++)for(var u=0,a=0;a<e;a++,u++)3===u&&(u=0),u||this._isMasked(a,o)||(this.buffer[a+o*e]^=1);break;case 3:for(var f=0,c=0;c<e;c++,f++){3===f&&(f=0);for(var h=f,l=0;l<e;l++,h++)3===h&&(h=0),h||this._isMasked(l,c)||(this.buffer[l+c*e]^=1)}break;case 4:for(var d=0;d<e;d++)for(var _=0,v=d>>1&1,p=0;p<e;p++,_++)3===_&&(_=0,v=!v),v||this._isMasked(p,d)||(this.buffer[p+d*e]^=1);break;case 5:for(var y=0,g=0;g<e;g++,y++){3===y&&(y=0);for(var b=0,k=0;k<e;k++,b++)3===b&&(b=0),(k&g&1)+!(!b|!y)||this._isMasked(k,g)||(this.buffer[k+g*e]^=1)}break;case 6:for(var m=0,w=0;w<e;w++,m++){3===m&&(m=0);for(var O=0,B=0;B<e;B++,O++)3===O&&(O=0),(B&w&1)+(O&&O===m)&1||this._isMasked(B,w)||(this.buffer[B+w*e]^=1)}break;case 7:for(var M=0,S=0;S<e;S++,M++){3===M&&(M=0);for(var E=0,j=0;j<e;j++,E++)3===E&&(E=0),(E&&E===M)+(j+S&1)&1||this._isMasked(j,S)||(this.buffer[j+S*e]^=1)}}}},{key:"_calculateMaxLength",value:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2}},{key:"_calculatePolynomial",value:function(){this._polynomial[0]=1;for(var e=0;e<this._eccBlock;e++){this._polynomial[e+1]=1;for(var n=e;n>0;n--)this._polynomial[n]=this._polynomial[n]?this._polynomial[n-1]^Li.EXPONENT[t._modN(Li.LOG[this._polynomial[n]]+e)]:this._polynomial[n-1];this._polynomial[0]=Li.EXPONENT[t._modN(Li.LOG[this._polynomial[0]]+e)]}for(var r=0;r<=this._eccBlock;r++)this._polynomial[r]=Li.LOG[this._polynomial[r]]}},{key:"_checkBadness",value:function(){for(var e=0,n=this.width,r=0;r<n-1;r++)for(var i=0;i<n-1;i++)(this.buffer[i+n*r]&&this.buffer[i+1+n*r]&&this.buffer[i+n*(r+1)]&&this.buffer[i+1+n*(r+1)]||!(this.buffer[i+n*r]||this.buffer[i+1+n*r]||this.buffer[i+n*(r+1)]||this.buffer[i+1+n*(r+1)]))&&(e+=t.N2);for(var s=0,o=0;o<n;o++){var u=0;this._badness[0]=0;for(var a=0,f=0;f<n;f++){var c=this.buffer[f+n*o];a===c?this._badness[u]++:this._badness[++u]=1,a=c,s+=a?1:-1}e+=this._getBadness(u)}s<0&&(s=-s);var h=0,l=s;for(l+=l<<2,l<<=1;l>n*n;)l-=n*n,h++;e+=h*t.N4;for(var d=0;d<n;d++){var _=0;this._badness[0]=0;for(var v=0,p=0;p<n;p++){var y=this.buffer[d+n*p];v===y?this._badness[_]++:this._badness[++_]=1,v=y}e+=this._getBadness(_)}return e}},{key:"_convertBitStream",value:function(t){for(var e=0;e<t;e++)this._ecc[e]=this._value.charCodeAt(e);this._stringBuffer=this._ecc.slice(0);var n=this._calculateMaxLength();t>=n-2&&(t=n-2,this._version>9&&t--);var r=t;if(this._version>9){for(this._stringBuffer[r+2]=0,this._stringBuffer[r+3]=0;r--;){var i=this._stringBuffer[r];this._stringBuffer[r+3]|=255&i<<4,this._stringBuffer[r+2]=i>>4}this._stringBuffer[2]|=255&t<<4,this._stringBuffer[1]=t>>4,this._stringBuffer[0]=64|t>>12}else{for(this._stringBuffer[r+1]=0,this._stringBuffer[r+2]=0;r--;){var s=this._stringBuffer[r];this._stringBuffer[r+2]|=255&s<<4,this._stringBuffer[r+1]=s>>4}this._stringBuffer[1]|=255&t<<4,this._stringBuffer[0]=64|t>>4}for(r=t+3-(this._version<10);r<n;)this._stringBuffer[r++]=236,this._stringBuffer[r++]=17}},{key:"_getBadness",value:function(e){for(var n=0,r=0;r<=e;r++)this._badness[r]>=5&&(n+=t.N1+this._badness[r]-5);for(var i=3;i<e-1;i+=2)this._badness[i-2]===this._badness[i+2]&&this._badness[i+2]===this._badness[i-1]&&this._badness[i-1]===this._badness[i+1]&&3*this._badness[i-1]===this._badness[i]&&(0===this._badness[i-3]||i+3>e||3*this._badness[i-3]>=4*this._badness[i]||3*this._badness[i+3]>=4*this._badness[i])&&(n+=t.N3);return n}},{key:"_finish",value:function(){this._stringBuffer=this.buffer.slice(0);var t=0,e=void 0,n=3e4;for(e=0;e<8;e++){this._applyMask(e);var r=this._checkBadness();if(r<n&&(n=r,t=e),7===t)break;this.buffer=this._stringBuffer.slice(0)}for(t!==e&&this._applyMask(t),n=Ai.FINAL_FORMAT[t+(this._level-1<<3)],
e=0;e<8;e++,n>>=1)1&n&&(this.buffer[this.width-1-e+8*this.width]=1,e<6?this.buffer[8+this.width*e]=1:this.buffer[8+this.width*(e+1)]=1);for(e=0;e<7;e++,n>>=1)1&n&&(this.buffer[8+this.width*(this.width-7+e)]=1,e?this.buffer[6-e+8*this.width]=1:this.buffer[7+8*this.width]=1)}},{key:"_interleaveBlocks",value:function(){var t=this._calculateMaxLength(),e=void 0,n=0;for(e=0;e<this._dataBlock;e++){for(var r=0;r<this._neccBlock1;r++)this._ecc[n++]=this._stringBuffer[e+r*this._dataBlock];for(var i=0;i<this._neccBlock2;i++)this._ecc[n++]=this._stringBuffer[this._neccBlock1*this._dataBlock+e+i*(this._dataBlock+1)]}for(var s=0;s<this._neccBlock2;s++)this._ecc[n++]=this._stringBuffer[this._neccBlock1*this._dataBlock+e+s*(this._dataBlock+1)];for(e=0;e<this._eccBlock;e++)for(var o=0;o<this._neccBlock1+this._neccBlock2;o++)this._ecc[n++]=this._stringBuffer[t+e+o*this._eccBlock];this._stringBuffer=this._ecc}},{key:"_insertAlignments",value:function(){var t=this.width;if(this._version>1)for(var e=ji.BLOCK[this._version],n=t-7;;){for(var r=t-7;r>e-3&&(this._addAlignment(r,n),!(r<e));)r-=e;if(n<=e+9)break;n-=e,this._addAlignment(6,n),this._addAlignment(n,6)}}},{key:"_insertFinders",value:function(){for(var t=this.width,e=0;e<3;e++){var n=0,r=0;1===e&&(n=t-7),2===e&&(r=t-7),this.buffer[r+3+t*(n+3)]=1;for(var i=0;i<6;i++)this.buffer[r+i+t*n]=1,this.buffer[r+t*(n+i+1)]=1,this.buffer[r+6+t*(n+i)]=1,this.buffer[r+i+1+t*(n+6)]=1;for(var s=1;s<5;s++)this._setMask(r+s,n+1),this._setMask(r+1,n+s+1),this._setMask(r+5,n+s),this._setMask(r+s+1,n+5);for(var o=2;o<4;o++)this.buffer[r+o+t*(n+2)]=1,this.buffer[r+2+t*(n+o+1)]=1,this.buffer[r+4+t*(n+o)]=1,this.buffer[r+o+1+t*(n+4)]=1}}},{key:"_insertTimingGap",value:function(){for(var t=this.width,e=0;e<7;e++)this._setMask(7,e),this._setMask(t-8,e),this._setMask(7,e+t-7);for(var n=0;n<8;n++)this._setMask(n,7),this._setMask(n+t-8,7),this._setMask(n,t-8)}},{key:"_insertTimingRowAndColumn",value:function(){for(var t=this.width,e=0;e<t-14;e++)1&e?(this._setMask(8+e,6),this._setMask(6,8+e)):(this.buffer[8+e+6*t]=1,this.buffer[6+t*(8+e)]=1)}},{key:"_insertVersion",value:function(){var t=this.width;if(this._version>6)for(var e=xi.BLOCK[this._version-7],n=17,r=0;r<6;r++)for(var i=0;i<3;i++,n--)1&(n>11?this._version>>n-12:e>>n)?(this.buffer[5-r+t*(2-i+t-11)]=1,this.buffer[2-i+t-11+t*(5-r)]=1):(this._setMask(5-r,2-i+t-11),this._setMask(2-i+t-11,5-r))}},{key:"_isMasked",value:function(e,n){var r=t._getMaskBit(e,n);return 1===this._mask[r]}},{key:"_pack",value:function(){for(var t=this.width-1,e=this.width-1,n=1,r=1,i=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2,s=0;s<i;s++)for(var o=this._stringBuffer[s],u=0;u<8;u++,o<<=1){128&o&&(this.buffer[t+this.width*e]=1);do r?t--:(t++,n?0!==e?e--:(t-=2,n=!n,6===t&&(t--,e=9)):e!==this.width-1?e++:(t-=2,n=!n,6===t&&(t--,e-=8))),r=!r;while(this._isMasked(t,e))}}},{key:"_reverseMask",value:function(){for(var t=this.width,e=0;e<9;e++)this._setMask(e,8);for(var n=0;n<8;n++)this._setMask(n+t-8,8),this._setMask(8,n);for(var r=0;r<7;r++)this._setMask(8,r+t-7)}},{key:"_setMask",value:function(e,n){var r=t._getMaskBit(e,n);this._mask[r]=1}},{key:"_syncMask",value:function(){for(var t=this.width,e=0;e<t;e++)for(var n=0;n<=e;n++)this.buffer[n+t*e]&&this._setMask(n,e)}}]),t}(),Pi=function(t){function e(){return lt(this,e),Jr(this,(e.__proto__||ct(e)).apply(this,arguments))}return ci(e,t),gt(e,[{key:"draw",value:function(){var t=this.qrious;t.image.src=t.toDataURL()}},{key:"reset",value:function(){var t=this.qrious;t.image.src=""}},{key:"resize",value:function(){var t=this.qrious,e=t.image;e.width=t.size,e.height=t.size}}]),e}(Si),Ti=function(){function t(){lt(this,t),this._services={}}return gt(t,[{key:"getService",value:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e}},{key:"setService",value:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}]),t}(),Fi=function(){function t(e){lt(this,t),e=t._parseOptions(e),hi.privatize(this,e);var n=this._element,r=t._serviceManager.getService("element");this.canvas=n&&r.isCanvas(n)?n:r.createCanvas(),this.canvas.qrious=this,this.image=n&&r.isImage(n)?n:r.createImage(),this.image.qrious=this,this._renderers=[new Ei(this),new Pi(this)],this.update()}return gt(t,null,[{key:"use",value:function(e){t._serviceManager.setService(e.getName(),e)}},{key:"_parseOptions",value:function(e){return e=Mi({},t.DEFAULTS,e),e.backgroundAlpha=hi.abs(e.backgroundAlpha),e.foregroundAlpha=hi.abs(e.foregroundAlpha),e.level=hi.toUpperCase(e.level),e.padding=hi.abs(e.padding),e.size=hi.abs(e.size),e}},{key:"DEFAULTS",get:function(){return{background:"white",backgroundAlpha:1,foreground:"black",foregroundAlpha:1,level:"L",mime:"image/png",padding:null,size:100,value:""}}},{key:"VERSION",get:function(){return"2.2.0"}}]),gt(t,[{key:"toDataURL",value:function(t){return this.canvas.toDataURL(t||this.mime)}},{key:"update",value:function(){var t=new Ni({level:this.level,value:this.value});this._renderers.forEach(function(e){return e.render(t)})}},{key:"background",get:function(){return this._background},set:function(e){var n=hi.setter(this,"_background",e,t.DEFAULTS.background);n&&this.update()}},{key:"backgroundAlpha",get:function(){return this._backgroundAlpha},set:function(e){var n=hi.setter(this,"_backgroundAlpha",e,t.DEFAULTS.backgroundAlpha);n&&this.update()}},{key:"foreground",get:function(){return this._foreground},set:function(e){var n=hi.setter(this,"_foreground",e,t.DEFAULTS.foreground);n&&this.update()}},{key:"foregroundAlpha",get:function(){return this._foregroundAlpha},set:function(e){var n=hi.setter(this,"_foregroundAlpha",e,t.DEFAULTS.foregroundAlpha);n&&this.update()}},{key:"level",get:function(){return this._level},set:function(e){var n=hi.setter(this,"_level",e,t.DEFAULTS.level,hi.toUpperCase);n&&this.update()}},{key:"mime",get:function(){return this._mime},set:function(e){var n=hi.setter(this,"_mime",e,t.DEFAULTS.mime);n&&this.update()}},{key:"padding",get:function(){return this._padding},set:function(e){var n=hi.setter(this,"_padding",e,t.DEFAULTS.padding,hi.abs);n&&this.update()}},{key:"size",get:function(){return this._size},set:function(e){var n=hi.setter(this,"_size",e,t.DEFAULTS.size,hi.abs);n&&this.update()}},{key:"value",get:function(){return this._value},set:function(e){var n=hi.setter(this,"_value",e,t.DEFAULTS.value);n&&this.update()}}]),t}();return Fi._serviceManager=new Ti,Fi.use(new _i),Fi})},function(t,e,n){var r=n(4)(n(1),n(5),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var i,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,s=t.default);var u="function"==typeof s?s.options:s;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var a=u.computed||(u.computed={});Object.keys(r).forEach(function(t){var e=r[t];a[t]=function(){return e}})}return{esModule:i,exports:s,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.cls})},staticRenderFns:[]}}])});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(109)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  "data-v-f39c19d2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(104)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  "data-v-341d8692",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(105)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(100),
  /* scopeId */
  "data-v-3df697d3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(106)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(108)
__webpack_require__(107)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  "data-v-72e15718",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('a', {
    staticClass: "thread",
    attrs: {
      "href": _vm.threadDetailUrl(_vm.thread.tid)
    }
  }, [_c('div', {
    staticClass: "copy-handler",
    attrs: {
      "title": "用户相关操作"
    }
  }, [_c('el-dropdown', {
    on: {
      "command": _vm.handleCommand
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link"
  }, [_vm._v("\n          相关操作"), _c('i', {
    staticClass: "el-icon-caret-bottom el-icon--right"
  })]), _vm._v(" "), _c('el-dropdown-menu', {
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    attrs: {
      "command": "copy",
      "node-type": "copy",
      "data-clipboard-text": _vm.thread.tid
    }
  }, [_vm._v("复制用户id")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "thread-banner"
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.thread.cover),
      expression: "thread.cover"
    }],
    staticClass: "thread-img"
  }), _vm._v(" "), _c('h2', {
    staticClass: "thread-title",
    domProps: {
      "textContent": _vm._s(_vm.thread.title)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "thread-flex"
  }, [(_vm.thread.tag_ids.length) ? _c('div', {
    staticClass: "thread-tags"
  }, _vm._l((_vm.thread.tag_ids), function(item) {
    return _c('a', {
      staticClass: "tag",
      attrs: {
        "href": "#"
      },
      domProps: {
        "textContent": _vm._s(item.tag_name)
      }
    })
  })) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "thread-data"
  }, [_vm._v("浏览:"), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.thread.view_count)
    }
  }), _vm._v(" "), _vm._v("回复:"), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.thread.post_count)
    }
  }), _vm._v(" "), _vm._v("收藏:"), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.thread.fav_count)
    }
  })])])])])
},staticRenderFns: []}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('a', {
    staticClass: "user",
    attrs: {
      "href": _vm.userHomeUrl(_vm.user.user_id),
      "target": "_blank"
    }
  }, [_c('div', {
    staticClass: "user-avatar"
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.user.avatar),
      expression: "user.avatar"
    }]
  }), _vm._v(" "), _c('span', {
    staticClass: "user-v",
    style: ({
      backgroundImage: 'url(' + _vm.user.v_img + ')'
    }),
    attrs: {
      "title": _vm.identityText(_vm.user.v)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "user-main"
  }, [_c('div', {
    staticClass: "copy-handler",
    attrs: {
      "title": "用户相关操作"
    }
  }, [_c('el-dropdown', {
    on: {
      "command": _vm.handleCommand
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link"
  }, [_c('i', {
    staticClass: "el-icon-caret-bottom el-icon--right"
  })]), _vm._v(" "), _c('el-dropdown-menu', {
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    attrs: {
      "command": "copy",
      "node-type": "copy",
      "data-clipboard-text": _vm.user.user_id
    }
  }, [_vm._v("复制用户id")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "user-row",
    staticStyle: {
      "padding-right": "20px"
    }
  }, [_c('strong', {
    staticClass: "user-name",
    domProps: {
      "textContent": _vm._s(_vm.user.user_name)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "user-skin",
    attrs: {
      "src": _vm.fmtSkinImage(_vm.user.skin)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "user-row"
  }, [(_vm.user.phone_verified == '1') ? _c('img', {
    staticClass: "user-verified",
    staticStyle: {
      "margin-right": "6px"
    },
    attrs: {
      "src": "//img0.cosmeapp.com/FliUr5r39UzuPYY3A_90iIc-IKg5?imageView2/2/w/180/h/44"
    }
  }) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "user-text-group",
    domProps: {
      "textContent": _vm._s(_vm.user.age + '岁')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "user-row"
  }, [_c('span', {
    staticClass: "user-text-group",
    domProps: {
      "textContent": _vm._s(_vm.user.credit + '积分')
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "user-text-group",
    domProps: {
      "textContent": _vm._s(_vm.fmtRegisterDay(_vm.user.achieve_title))
    }
  })])])])])
},staticRenderFns: []}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-upload', {
    ref: "upload",
    attrs: {
      "multiple": _vm.multiple,
      "action": "//up.qbox.me/",
      "drag": "",
      "type": "drag",
      "on-remove": _vm.handleRemove,
      "on-success": _vm.handleSuccess,
      "before-upload": _vm.beforeUpload,
      "file-list": _vm.fileList,
      "list-type": "picture-card",
      "accept": "image/*",
      "data": _vm.form
    }
  }, [_c('i', {
    staticClass: "el-icon-upload",
    attrs: {
      "title": "将文件拖到此处，或点击上传"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "el-upload__text"
  }, [_vm._v("将文件拖到此处，或"), _c('em', [_vm._v("点击上传")])])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputValue),
      expression: "inputValue"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "hidden",
      "name": _vm.inputName
    },
    domProps: {
      "value": (_vm.inputValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputValue = $event.target.value
      }
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "box"
  }, [_c('el-input', {
    class: {
      'has-error': _vm.hasError
    },
    attrs: {
      "placeholder": _vm.placeholder
    },
    on: {
      "change": _vm.validate
    },
    model: {
      value: (_vm.schema.value),
      callback: function($$v) {
        _vm.schema.value = $$v
      },
      expression: "schema.value"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "请选择"
    },
    on: {
      "change": _vm.validate
    },
    slot: "prepend",
    model: {
      value: (_vm.schema.type),
      callback: function($$v) {
        _vm.schema.type = $$v
      },
      expression: "schema.type"
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('el-option', {
      key: item.type,
      attrs: {
        "label": item.value,
        "value": item.type
      }
    })
  }))], 1), _vm._v(" "), (_vm.schemaQrUrl != '') ? _c('div', {
    staticClass: "qrbox"
  }, [_c('qrcode', {
    attrs: {
      "size": 200,
      "level": "H",
      "cls": _vm.qrCls,
      "value": _vm.schemaQrUrl
    }
  })], 1) : _vm._e()], 1)])
},staticRenderFns: []}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "product"
  }, [_c('div', {
    staticClass: "product-img"
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.product.image_url),
      expression: "product.image_url"
    }]
  })]), _vm._v(" "), _c('div', {
    staticClass: "product-main"
  }, [_c('div', {
    staticClass: "copy-handler",
    attrs: {
      "title": "用户相关操作"
    }
  }, [_c('el-dropdown', {
    on: {
      "command": _vm.handleCommand
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link"
  }, [_vm._v("\n            相关操作"), _c('i', {
    staticClass: "el-icon-caret-bottom el-icon--right"
  })]), _vm._v(" "), _c('el-dropdown-menu', {
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    attrs: {
      "command": "copy",
      "node-type": "copy",
      "data-clipboard-text": _vm.product.product_id
    }
  }, [_vm._v("复制产品id")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "product-block"
  }, [_c('span', {
    staticClass: "product-name product-text-primary",
    domProps: {
      "textContent": _vm._s(_vm.product.product_name)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "product-block product-text-light",
    domProps: {
      "textContent": _vm._s('¥' + _vm.product.price + '/' + _vm.product.capacity)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "product-block"
  }, [_c('div', {
    staticClass: "product-sart"
  }, [_c('div', {
    staticClass: "product-sart-percent",
    style: ({
      width: _vm.product.starslevel * 10 + '%'
    })
  })])]), _vm._v(" "), _c('div', {
    staticClass: "product-block product-text-mostlight",
    domProps: {
      "textContent": _vm._s(_vm.product.wantuses + '人想买·' + _vm.product.threads + '人评价')
    }
  }), _vm._v(" "), (_vm.product.tags.length) ? _c('div', {
    staticClass: "product-block"
  }, _vm._l((_vm.product.tags), function(item) {
    return _c('span', {
      staticClass: "product-tag",
      domProps: {
        "textContent": _vm._s(item.tag_name)
      }
    })
  })) : _vm._e()])])])
},staticRenderFns: []}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("538c4070", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-341d8692\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./thread.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-341d8692\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./thread.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3e2c12aa", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-3df697d3\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-3df697d3\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("b119e02e", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-50f73918\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./qiniu-upload.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-50f73918\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./qiniu-upload.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1c58a303", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-72e15718\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./schema-check.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-72e15718\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./schema-check.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2dd3748a", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-72e15718\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./schema-check.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-72e15718\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./schema-check.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7d1bc6b1", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-f39c19d2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-f39c19d2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_111__;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(28);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _index = __webpack_require__(27);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(26);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(25);

var Card = _interopRequireWildcard(_index5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = {
  SchemaCheck: _index2.default,
  QiniuUpload: _index4.default
};

components = (0, _assign2.default)(components, Card);

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  (0, _keys2.default)(components).forEach(function (key) {
    Vue.component(key, components[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = (0, _assign2.default)(components, { install: install });

/***/ })
/******/ ]);
});