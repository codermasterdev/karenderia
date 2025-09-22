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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 37:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'ru-RU': {
      font: {
        bold: 'ÐÐ¾Ð»ÑÐ¶Ð¸ÑÐ½ÑÐ¹',
        italic: 'ÐÑÑÑÐ¸Ð²',
        underline: 'ÐÐ¾Ð´ÑÑÑÐºÐ½ÑÑÑÐ¹',
        clear: 'Ð£Ð±ÑÐ°ÑÑ ÑÑÐ¸Ð»Ð¸ ÑÑÐ¸ÑÑÐ°',
        height: 'ÐÑÑÐ¾ÑÐ° Ð»Ð¸Ð½Ð¸Ð¸',
        name: 'Ð¨ÑÐ¸ÑÑ',
        strikethrough: 'ÐÐ°ÑÑÑÐºÐ½ÑÑÑÐ¹',
        subscript: 'ÐÐ¸Ð¶Ð½Ð¸Ð¹ Ð¸Ð½Ð´ÐµÐºÑ',
        superscript: 'ÐÐµÑÑÐ½Ð¸Ð¹ Ð¸Ð½Ð´ÐµÐºÑ',
        size: 'Ð Ð°Ð·Ð¼ÐµÑ ÑÑÐ¸ÑÑÐ°'
      },
      image: {
        image: 'ÐÐ°ÑÑÐ¸Ð½ÐºÐ°',
        insert: 'ÐÑÑÐ°Ð²Ð¸ÑÑ ÐºÐ°ÑÑÐ¸Ð½ÐºÑ',
        resizeFull: 'ÐÐ¾ÑÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ ÑÐ°Ð·Ð¼ÐµÑ',
        resizeHalf: 'Ð£Ð¼ÐµÐ½ÑÑÐ¸ÑÑ Ð´Ð¾ 50%',
        resizeQuarter: 'Ð£Ð¼ÐµÐ½ÑÑÐ¸ÑÑ Ð´Ð¾ 25%',
        floatLeft: 'Ð Ð°ÑÐ¿Ð¾Ð»Ð¾Ð¶Ð¸ÑÑ ÑÐ»ÐµÐ²Ð°',
        floatRight: 'Ð Ð°ÑÐ¿Ð¾Ð»Ð¾Ð¶Ð¸ÑÑ ÑÐ¿ÑÐ°Ð²Ð°',
        floatNone: 'Ð Ð°ÑÐ¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ Ð¿Ð¾-ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ',
        shapeRounded: 'Ð¤Ð¾ÑÐ¼Ð°: ÐÐ°ÐºÑÑÐ³Ð»ÐµÐ½Ð½Ð°Ñ',
        shapeCircle: 'Ð¤Ð¾ÑÐ¼Ð°: ÐÑÑÐ³',
        shapeThumbnail: 'Ð¤Ð¾ÑÐ¼Ð°: ÐÐ¸Ð½Ð¸Ð°ÑÑÑÐ°',
        shapeNone: 'Ð¤Ð¾ÑÐ¼Ð°: ÐÐµÑ',
        dragImageHere: 'ÐÐµÑÐµÑÐ°ÑÐ¸ÑÐµ ÑÑÐ´Ð° ÐºÐ°ÑÑÐ¸Ð½ÐºÑ',
        dropImage: 'ÐÐµÑÐµÑÐ°ÑÐ¸ÑÐµ ÐºÐ°ÑÑÐ¸Ð½ÐºÑ',
        selectFromFiles: 'ÐÑÐ±ÑÐ°ÑÑ Ð¸Ð· ÑÐ°Ð¹Ð»Ð¾Ð²',
        maximumFileSize: 'ÐÐ°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½ÑÐ¹ ÑÐ°Ð·Ð¼ÐµÑ ÑÐ°Ð¹Ð»Ð°',
        maximumFileSizeError: 'ÐÑÐµÐ²ÑÑÐµÐ½ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½ÑÐ¹ ÑÐ°Ð·Ð¼ÐµÑ ÑÐ°Ð¹Ð»Ð°',
        url: 'URL ÐºÐ°ÑÑÐ¸Ð½ÐºÐ¸',
        remove: 'Ð£Ð´Ð°Ð»Ð¸ÑÑ ÐºÐ°ÑÑÐ¸Ð½ÐºÑ',
        original: 'ÐÑÐ¸Ð³Ð¸Ð½Ð°Ð»'
      },
      video: {
        video: 'ÐÐ¸Ð´ÐµÐ¾',
        videoLink: 'Ð¡ÑÑÐ»ÐºÐ° Ð½Ð° Ð²Ð¸Ð´ÐµÐ¾',
        insert: 'ÐÑÑÐ°Ð²Ð¸ÑÑ Ð²Ð¸Ð´ÐµÐ¾',
        url: 'URL Ð²Ð¸Ð´ÐµÐ¾',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion Ð¸Ð»Ð¸ Youku)'
      },
      link: {
        link: 'Ð¡ÑÑÐ»ÐºÐ°',
        insert: 'ÐÑÑÐ°Ð²Ð¸ÑÑ ÑÑÑÐ»ÐºÑ',
        unlink: 'Ð£Ð±ÑÐ°ÑÑ ÑÑÑÐ»ÐºÑ',
        edit: 'Ð ÐµÐ´Ð°ÐºÑÐ¸ÑÐ¾Ð²Ð°ÑÑ',
        textToDisplay: 'ÐÑÐ¾Ð±ÑÐ°Ð¶Ð°ÐµÐ¼ÑÐ¹ ÑÐµÐºÑÑ',
        url: 'URL Ð´Ð»Ñ Ð¿ÐµÑÐµÑÐ¾Ð´Ð°',
        openInNewWindow: 'ÐÑÐºÑÑÐ²Ð°ÑÑ Ð² Ð½Ð¾Ð²Ð¾Ð¼ Ð¾ÐºÐ½Ðµ'
      },
      table: {
        table: 'Ð¢Ð°Ð±Ð»Ð¸ÑÐ°',
        addRowAbove: 'ÐÐ¾Ð±Ð°Ð²Ð¸ÑÑ ÑÑÑÐ¾ÐºÑ Ð²ÑÑÐµ',
        addRowBelow: 'ÐÐ¾Ð±Ð°Ð²Ð¸ÑÑ ÑÑÑÐ¾ÐºÑ Ð½Ð¸Ð¶Ðµ',
        addColLeft: 'ÐÐ¾Ð±Ð°Ð²Ð¸ÑÑ ÑÑÐ¾Ð»Ð±ÐµÑ ÑÐ»ÐµÐ²Ð°',
        addColRight: 'ÐÐ¾Ð±Ð°Ð²Ð¸ÑÑ ÑÑÐ¾Ð»Ð±ÐµÑ ÑÐ¿ÑÐ°Ð²Ð°',
        delRow: 'Ð£Ð´Ð°Ð»Ð¸ÑÑ ÑÑÑÐ¾ÐºÑ',
        delCol: 'Ð£Ð´Ð°Ð»Ð¸ÑÑ ÑÑÐ¾Ð»Ð±ÐµÑ',
        delTable: 'Ð£Ð´Ð°Ð»Ð¸ÑÑ ÑÐ°Ð±Ð»Ð¸ÑÑ'
      },
      hr: {
        insert: 'ÐÑÑÐ°Ð²Ð¸ÑÑ Ð³Ð¾ÑÐ¸Ð·Ð¾Ð½ÑÐ°Ð»ÑÐ½ÑÑ Ð»Ð¸Ð½Ð¸Ñ'
      },
      style: {
        style: 'Ð¡ÑÐ¸Ð»Ñ',
        p: 'ÐÐ¾ÑÐ¼Ð°Ð»ÑÐ½ÑÐ¹',
        blockquote: 'Ð¦Ð¸ÑÐ°ÑÐ°',
        pre: 'ÐÐ¾Ð´',
        h1: 'ÐÐ°Ð³Ð¾Ð»Ð¾Ð²Ð¾Ðº 1',
        h2: 'ÐÐ°Ð³Ð¾Ð»Ð¾Ð²Ð¾Ðº 2',
        h3: 'ÐÐ°Ð³Ð¾Ð»Ð¾Ð²Ð¾Ðº 3',
        h4: 'ÐÐ°Ð³Ð¾Ð»Ð¾Ð²Ð¾Ðº 4',
        h5: 'ÐÐ°Ð³Ð¾Ð»Ð¾Ð²Ð¾Ðº 5',
        h6: 'ÐÐ°Ð³Ð¾Ð»Ð¾Ð²Ð¾Ðº 6'
      },
      lists: {
        unordered: 'ÐÐ°ÑÐºÐ¸ÑÐ¾Ð²Ð°Ð½Ð½ÑÐ¹ ÑÐ¿Ð¸ÑÐ¾Ðº',
        ordered: 'ÐÑÐ¼ÐµÑÐ¾Ð²Ð°Ð½Ð½ÑÐ¹ ÑÐ¿Ð¸ÑÐ¾Ðº'
      },
      options: {
        help: 'ÐÐ¾Ð¼Ð¾ÑÑ',
        fullscreen: 'ÐÐ° Ð²ÐµÑÑ ÑÐºÑÐ°Ð½',
        codeview: 'ÐÑÑÐ¾Ð´Ð½ÑÐ¹ ÐºÐ¾Ð´'
      },
      paragraph: {
        paragraph: 'ÐÐ°ÑÐ°Ð³ÑÐ°Ñ',
        outdent: 'Ð£Ð¼ÐµÐ½ÑÑÐ¸ÑÑ Ð¾ÑÑÑÑÐ¿',
        indent: 'Ð£Ð²ÐµÐ»Ð¸ÑÐ¸ÑÑ Ð¾ÑÑÑÑÐ¿',
        left: 'ÐÑÑÐ¾Ð²Ð½ÑÑÑ Ð¿Ð¾ Ð»ÐµÐ²Ð¾Ð¼Ñ ÐºÑÐ°Ñ',
        center: 'ÐÑÑÐ¾Ð²Ð½ÑÑÑ Ð¿Ð¾ ÑÐµÐ½ÑÑÑ',
        right: 'ÐÑÑÐ¾Ð²Ð½ÑÑÑ Ð¿Ð¾ Ð¿ÑÐ°Ð²Ð¾Ð¼Ñ ÐºÑÐ°Ñ',
        justify: 'Ð Ð°ÑÑÑÐ½ÑÑÑ Ð¿Ð¾ ÑÐ¸ÑÐ¸Ð½Ðµ'
      },
      color: {
        recent: 'ÐÐ¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹ ÑÐ²ÐµÑ',
        more: 'ÐÑÐµ ÑÐ²ÐµÑÐ°',
        background: 'Ð¦Ð²ÐµÑ ÑÐ¾Ð½Ð°',
        foreground: 'Ð¦Ð²ÐµÑ ÑÑÐ¸ÑÑÐ°',
        transparent: 'ÐÑÐ¾Ð·ÑÐ°ÑÐ½ÑÐ¹',
        setTransparent: 'Ð¡Ð´ÐµÐ»Ð°ÑÑ Ð¿ÑÐ¾Ð·ÑÐ°ÑÐ½ÑÐ¼',
        reset: 'Ð¡Ð±ÑÐ¾Ñ',
        resetToDefault: 'ÐÐ¾ÑÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ'
      },
      shortcut: {
        shortcuts: 'Ð¡Ð¾ÑÐµÑÐ°Ð½Ð¸Ñ ÐºÐ»Ð°Ð²Ð¸Ñ',
        close: 'ÐÐ°ÐºÑÑÑÑ',
        textFormatting: 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ ÑÐµÐºÑÑÐ°',
        action: 'ÐÐµÐ¹ÑÑÐ²Ð¸Ðµ',
        paragraphFormatting: 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ Ð¿Ð°ÑÐ°Ð³ÑÐ°ÑÐ°',
        documentStyle: 'Ð¡ÑÐ¸Ð»Ñ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ°',
        extraKeys: 'ÐÐ¾Ð¿Ð¾Ð»Ð½Ð¸ÑÐµÐ»ÑÐ½ÑÐµ ÐºÐ¾Ð¼Ð±Ð¸Ð½Ð°ÑÐ¸Ð¸'
      },
      help: {
        'insertParagraph': 'ÐÐ¾Ð²ÑÐ¹ Ð¿Ð°ÑÐ°Ð³ÑÐ°Ñ',
        'undo': 'ÐÑÐ¼ÐµÐ½Ð¸ÑÑ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½ÑÑ ÐºÐ¾Ð¼Ð°Ð½Ð´Ñ',
        'redo': 'ÐÐ¾Ð²ÑÐ¾ÑÐ¸ÑÑ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½ÑÑ ÐºÐ¾Ð¼Ð°Ð½Ð´Ñ',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Ð£ÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ ÑÑÐ¸Ð»Ñ "ÐÐ¸ÑÐ½ÑÐ¹"',
        'italic': 'Ð£ÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ ÑÑÐ¸Ð»Ñ "ÐÐ°ÐºÐ»Ð¾Ð½Ð½ÑÐ¹"',
        'underline': 'Ð£ÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ ÑÑÐ¸Ð»Ñ "ÐÐ¾Ð´ÑÐµÑÐºÐ½ÑÑÑÐ¹"',
        'strikethrough': 'Ð£ÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ ÑÑÐ¸Ð»Ñ "ÐÐ°ÑÐµÑÐºÐ½ÑÑÑÐ¹"',
        'removeFormat': 'Ð¡Ð±Ð¾ÑÑÐ¸ÑÑ ÑÑÐ¸Ð»Ð¸',
        'justifyLeft': 'ÐÑÑÐ¾Ð²Ð½ÑÑÑ Ð¿Ð¾ Ð»ÐµÐ²Ð¾Ð¼Ñ ÐºÑÐ°Ñ',
        'justifyCenter': 'ÐÑÑÐ¾Ð²Ð½ÑÑÑ Ð¿Ð¾ ÑÐµÐ½ÑÑÑ',
        'justifyRight': 'ÐÑÑÐ¾Ð²Ð½ÑÑÑ Ð¿Ð¾ Ð¿ÑÐ°Ð²Ð¾Ð¼Ñ ÐºÑÐ°Ñ',
        'justifyFull': 'Ð Ð°ÑÑÑÐ½ÑÑÑ Ð½Ð° Ð²ÑÑ ÑÐ¸ÑÐ¸Ð½Ñ',
        'insertUnorderedList': 'ÐÐºÐ»ÑÑÐ¸ÑÑ/Ð¾ÑÐºÐ»ÑÑÐ¸ÑÑ Ð¼Ð°ÑÐºÐ¸ÑÐ¾Ð²Ð°Ð½Ð½ÑÐ¹ ÑÐ¿Ð¸ÑÐ¾Ðº',
        'insertOrderedList': 'ÐÐºÐ»ÑÑÐ¸ÑÑ/Ð¾ÑÐºÐ»ÑÑÐ¸ÑÑ Ð½ÑÐ¼ÐµÑÐ¾Ð²Ð°Ð½Ð½ÑÐ¹ ÑÐ¿Ð¸ÑÐ¾Ðº',
        'outdent': 'Ð£Ð±ÑÐ°ÑÑ Ð¾ÑÑÑÑÐ¿ Ð² ÑÐµÐºÑÑÐµÐ¼ Ð¿Ð°ÑÐ°Ð³ÑÐ°ÑÐµ',
        'indent': 'ÐÑÑÐ°Ð²Ð¸ÑÑ Ð¾ÑÑÑÑÐ¿ Ð² ÑÐµÐºÑÑÐµÐ¼ Ð¿Ð°ÑÐ°Ð³ÑÐ°ÑÐµ',
        'formatPara': 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ¾Ð²Ð°ÑÑ ÑÐµÐºÑÑÐ¸Ð¹ Ð±Ð»Ð¾Ðº ÐºÐ°Ðº Ð¿Ð°ÑÐ°Ð³ÑÐ°Ñ (ÑÐµÐ³ P)',
        'formatH1': 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ¾Ð²Ð°ÑÑ ÑÐµÐºÑÑÐ¸Ð¹ Ð±Ð»Ð¾Ðº ÐºÐ°Ðº H1',
        'formatH2': 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ¾Ð²Ð°ÑÑ ÑÐµÐºÑÑÐ¸Ð¹ Ð±Ð»Ð¾Ðº ÐºÐ°Ðº H2',
        'formatH3': 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ¾Ð²Ð°ÑÑ ÑÐµÐºÑÑÐ¸Ð¹ Ð±Ð»Ð¾Ðº ÐºÐ°Ðº H3',
        'formatH4': 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ¾Ð²Ð°ÑÑ ÑÐµÐºÑÑÐ¸Ð¹ Ð±Ð»Ð¾Ðº ÐºÐ°Ðº H4',
        'formatH5': 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ¾Ð²Ð°ÑÑ ÑÐµÐºÑÑÐ¸Ð¹ Ð±Ð»Ð¾Ðº ÐºÐ°Ðº H5',
        'formatH6': 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ¾Ð²Ð°ÑÑ ÑÐµÐºÑÑÐ¸Ð¹ Ð±Ð»Ð¾Ðº ÐºÐ°Ðº H6',
        'insertHorizontalRule': 'ÐÑÑÐ°Ð²Ð¸ÑÑ Ð³Ð¾ÑÐ¸Ð·Ð¾Ð½ÑÐ°Ð»ÑÐ½ÑÑ ÑÐµÑÑÑ',
        'linkDialog.show': 'ÐÐ¾ÐºÐ°Ð·Ð°ÑÑ Ð´Ð¸Ð°Ð»Ð¾Ð³ "Ð¡ÑÑÐ»ÐºÐ°"'
      },
      history: {
        undo: 'ÐÑÐ¼ÐµÐ½Ð¸ÑÑ',
        redo: 'ÐÐ¾Ð²ÑÐ¾Ñ'
      },
      specialChar: {
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Select Special characters'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});