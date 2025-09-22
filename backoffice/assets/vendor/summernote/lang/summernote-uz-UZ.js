/*!
 * 
 * Super simple wysiwyg editor v0.8.18
 * https://summernote.org
 * 
 * 
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license.
 * 
 * Date: 2020-05-20T18:09Z
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ 47:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'uz-UZ': {
      font: {
        bold: 'ÒÐ°Ð»Ð¸Ð½',
        italic: 'ÐÑÑÑÐ¸Ð²',
        underline: 'ÐÐµÐ»Ð³Ð¸Ð»Ð°Ð½Ð³Ð°Ð½',
        clear: 'Ò²Ð°ÑÑ ÑÑÑÐ»Ð°ÑÐ¸Ð½Ð¸ Ð¾Ð»Ð¸Ð± ÑÐ°ÑÐ»Ð°Ñ',
        height: 'Ð§Ð¸Ð·Ð¸Ò Ð±Ð°Ð»Ð°Ð½Ð´Ð»Ð¸Ð³Ð¸',
        name: 'Ò²Ð°ÑÑ',
        strikethrough: 'ÐÑÐ¸ÑÐ¸Ð»Ð³Ð°Ð½',
        subscript: 'ÐÐ°ÑÑÐºÐ¸ Ð¸Ð½Ð´ÐµÐºÑ',
        superscript: 'Ð®ÒÐ¾ÑÐ¸ Ð¸Ð½Ð´ÐµÐºÑ',
        size: 'Ò³Ð°ÑÑ Ò³Ð°Ð¶Ð¼Ð¸'
      },
      image: {
        image: 'Ð Ð°ÑÐ¼',
        insert: 'ÑÐ°ÑÐ¼Ð½Ð¸ ÒÑÐ¹Ð¸Ñ',
        resizeFull: 'Ò²Ð°Ð¶Ð¼Ð½Ð¸ ÑÐ¸ÐºÐ»Ð°Ñ',
        resizeHalf: '50% Ð³Ð°ÑÐ° ÐºÐ¸ÑÑÐ°Ð¹ÑÐ¸ÑÐ¸Ñ',
        resizeQuarter: '25% Ð³Ð°ÑÐ° ÐºÐ¸ÑÑÐ°Ð¹ÑÐ¸ÑÐ¸Ñ',
        floatLeft: 'Ð§Ð°Ð¿Ð´Ð° Ð¶Ð¾Ð¹Ð»Ð°ÑÑÐ¸ÑÐ¸Ñ',
        floatRight: 'ÐÐ½Ð³Ð´Ð° Ð¶Ð¾Ð¹Ð»Ð°ÑÑÐ¸ÑÐ¸Ñ',
        floatNone: 'Ð¡ÑÐ°Ð½Ð´Ð°ÑÑ Ð±ÑÐ¹Ð¸ÑÐ° Ð¶Ð¾Ð¹Ð»Ð°ÑÑÐ²',
        shapeRounded: 'Ð¨Ð°ÐºÐ»Ð¸: Ð®Ð¼Ð°Ð»Ð¾Ò',
        shapeCircle: 'Ð¨Ð°ÐºÐ»Ð¸: ÐÐ¾Ð¸ÑÐ°',
        shapeThumbnail: 'Ð¨Ð°ÐºÐ»Ð¸: ÐÐ¸Ð½Ð¸Ð°ÑÑÑÐ°',
        shapeNone: 'Ð¨Ð°ÐºÐ»Ð¸: ÐÑÒ',
        dragImageHere: 'Ð¡ÑÑÐ°ÑÐ½Ð¸ ÐºÑÑÐ¸ÑÐ¸Ð± ÑÑÐ¸Ð½Ð³',
        dropImage: 'Ð¡ÑÑÐ°ÑÐ½Ð¸ ÐºÑÑÐ¸ÑÐ¸Ð± ÑÑÐ¸Ð½Ð³',
        selectFromFiles: 'Ð¤Ð°Ð¹Ð»Ð»Ð°ÑÐ´Ð°Ð½ Ð±Ð¸ÑÐ¸Ð½Ð¸ ÑÐ°Ð½Ð»Ð°Ñ',
        url: 'ÑÑÑÐ°ÑÐ»Ð°Ñ URL Ð¸',
        remove: 'Ð¡ÑÑÐ°ÑÐ½Ð¸ ÑÑÐ¸ÑÐ¸Ñ'
      },
      video: {
        video: 'ÐÐ¸Ð´ÐµÐ¾',
        videoLink: 'ÐÐ¸Ð´ÐµÐ¾Ð³Ð° Ò³Ð°Ð²Ð¾Ð»Ð°',
        insert: 'ÐÐ¸Ð´ÐµÐ¾',
        url: 'URL Ð²Ð¸Ð´ÐµÐ¾',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion Ð¸Ð»Ð¸ Youku)'
      },
      link: {
        link: 'Ò²Ð°Ð²Ð¾Ð»Ð°',
        insert: 'Ò²Ð°Ð²Ð¾Ð»Ð°Ð½Ð¸ ÒÑÐ¹Ð¸Ñ',
        unlink: 'Ò²Ð°Ð²Ð¾Ð»Ð°Ð½Ð¸ Ð¾Ð»Ð¸Ð± ÑÐ°ÑÐ»Ð°Ñ',
        edit: 'Ð¢Ð°Ò³ÑÐ¸Ñ ÒÐ¸Ð»Ð¸Ñ',
        textToDisplay: 'ÐÑÑÐ¸Ð½Ð°Ð´Ð¸Ð³Ð°Ð½ Ð¼Ð°ÑÐ½',
        url: 'URL ÑÑÐ¸Ñ ÑÑÑÐ½',
        openInNewWindow: 'Ð¯Ð½Ð³Ð¸ Ð´Ð°ÑÑÐ°Ð´Ð° Ð¾ÑÐ¸Ñ'
      },
      table: {
        table: 'ÐÐ°Ð´Ð²Ð°Ð»'
      },
      hr: {
        insert: 'ÐÐ¾ÑÐ¸Ð·Ð¾Ð½ÑÐ°Ð» ÑÐ¸Ð·Ð¸ÒÐ½Ð¸ ÒÑÐ¹Ð¸Ñ'
      },
      style: {
        style: 'Ð£ÑÐ»ÑÐ±',
        p: 'Ð¯ÑÑÐ¸',
        blockquote: 'ÐÑÐ¼Ð»Ð°',
        pre: 'ÐÐ¾Ð´',
        h1: 'Ð¡Ð°ÑÐ»Ð°Ð²Ò³Ð° 1',
        h2: 'Ð¡Ð°ÑÐ»Ð°Ð²Ò³Ð°  2',
        h3: 'Ð¡Ð°ÑÐ»Ð°Ð²Ò³Ð°  3',
        h4: 'Ð¡Ð°ÑÐ»Ð°Ð²Ò³Ð°  4',
        h5: 'Ð¡Ð°ÑÐ»Ð°Ð²Ò³Ð°  5',
        h6: 'Ð¡Ð°ÑÐ»Ð°Ð²Ò³Ð°  6'
      },
      lists: {
        unordered: 'ÐÐµÐ»Ð³Ð¸Ð»Ð°Ð½Ð³Ð°Ð½ ÑÑÐ¹Ò³Ð°Ñ',
        ordered: 'Ð Ð°ÒÐ°Ð¼Ð»Ð°Ð½Ð³Ð°Ð½ ÑÑÐ¹Ò³Ð°Ñ'
      },
      options: {
        help: 'ÐÑÐ´Ð°Ð¼',
        fullscreen: 'ÐÑÑÑÐ½ ÑÐºÑÐ°Ð½ Ð±ÑÐ¹Ð¸ÑÐ°',
        codeview: 'ÐÐ¾ÑÐ»Ð°Ð½ÒÐ¸Ñ ÐºÐ¾Ð´'
      },
      paragraph: {
        paragraph: 'ÐÐ°ÑÐ°Ð³ÑÐ°Ñ',
        outdent: 'ÐÑÒÐ°Ð³Ð° ÒÐ°Ð¹ÑÐ¸ÑÐ½Ð¸ ÐºÐ°Ð¼Ð°Ð¹ÑÐ¸ÑÐ¸Ñ',
        indent: 'ÐÑÒÐ°Ð³Ð° ÒÐ°Ð¹ÑÐ¸ÑÐ½Ð¸ ÐºÑÐ¿Ð°Ð¹ÑÐ¸ÑÐ¸Ñ',
        left: 'Ð§Ð°Ð¿ ÒÐ¸ÑÒÐ¾ÒÒÐ° ÑÑÒÑÐ¸Ð»Ð°Ñ',
        center: 'ÐÐ°ÑÐºÐ°Ð·Ð³Ð° ÑÑÒÑÐ¸Ð»Ð°Ñ',
        right: 'ÐÐ½Ð³ ÒÐ¸ÑÒÐ¾ÒÒÐ° ÑÑÒÑÐ¸Ð»Ð°Ñ',
        justify: 'Ð­Ð½Ð¸ Ð±ÑÐ¹Ð»Ð°Ð± ÑÑÐ·Ð¸Ñ'
      },
      color: {
        recent: 'ÐÑÐ¸ÑÐ³Ð¸ ÑÐ°Ð½Ð³',
        more: 'Ð¯Ð½Ð° ÑÐ°Ð½Ð³Ð»Ð°Ñ',
        background: 'Ð¤Ð¾Ð½  ÑÐ°Ð½Ð³Ð¸',
        foreground: 'Ò²Ð°ÑÑ ÑÐ°Ð½Ð³Ð¸',
        transparent: 'Ð¨Ð°ÑÑÐ¾Ñ',
        setTransparent: 'Ð¨Ð°ÑÑÐ¾ÑÐ´Ð°Ð¹ ÒÐ¸Ð»Ð¸Ñ',
        reset: 'ÐÐµÐºÐ¾Ñ ÒÐ¸Ð»Ð¸Ñ',
        resetToDefault: 'Ð¡ÑÐ°Ð½Ð´Ð°ÑÑÐ³Ð° Ð¾Ð¸Ð´ ÑÐ¸ÐºÐ»Ð°Ñ'
      },
      shortcut: {
        shortcuts: 'ÐÐ»Ð°Ð²Ð¸ÑÐ»Ð°ÑÐ½Ð¸Ð½Ð³ Ò³Ð°Ð¼Ð¾ÑÒ³Ð°Ð½Ð³Ð»Ð¸Ð³Ð¸',
        close: 'ÐÐ¿Ð¸Ò',
        textFormatting: 'ÐÐ°ÑÐ½Ð½Ð¸ ',
        action: 'Ò²Ð°ÑÐºÐ°Ñ',
        paragraphFormatting: 'ÐÐ°ÑÐ°Ð³ÑÐ°ÑÐ½Ð¸ ÑÐ¾ÑÐ¼Ð°ÑÐ»Ð°Ñ',
        documentStyle: 'Ò²ÑÐ¶Ð¶Ð°ÑÐ½Ð¸Ð½Ð³ ÑÑÑÐ¸',
        extraKeys: 'ÒÑÑÐ¸Ð¼ÑÐ° Ð¸Ð¼ÐºÐ¾Ð½Ð¸ÑÑÐ»Ð°Ñ'
      },
      history: {
        undo: 'ÐÐµÐºÐ¾Ñ ÒÐ¸Ð»Ð¸Ñ',
        redo: 'ÒÐ°Ð¹ÑÐ°ÑÐ¸Ñ'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});