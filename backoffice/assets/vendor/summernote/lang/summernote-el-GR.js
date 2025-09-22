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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'el-GR': {
      font: {
        bold: 'ÎÎ½ÏÎ¿Î½Î±',
        italic: 'Î Î»Î¬Î³Î¹Î±',
        underline: 'Î¥ÏÎ¿Î³ÏÎ±Î¼Î¼Î¹ÏÎ¼Î­Î½Î±',
        clear: 'ÎÎ±Î¸Î±ÏÎ¹ÏÎ¼ÏÏ',
        height: 'ÎÏÎ¿Ï',
        name: 'ÎÏÎ±Î¼Î¼Î±ÏÎ¿ÏÎµÎ¹ÏÎ¬',
        strikethrough: 'ÎÎ¹ÎµÎ³ÏÎ±Î¼Î¼Î­Î½Î±',
        subscript: 'ÎÎµÎ¯ÎºÏÎ·Ï',
        superscript: 'ÎÎºÎ¸Î­ÏÎ·Ï',
        size: 'ÎÎ­Î³ÎµÎ¸Î¿Ï',
        sizeunit: 'ÎÎ¿Î½Î¬Î´Î± Î¼ÎµÎ³Î­Î¸Î¿ÏÏ'
      },
      image: {
        image: 'ÎÎ¹ÎºÏÎ½Î±',
        insert: 'ÎÎ¹ÏÎ±Î³ÏÎ³Î®',
        resizeFull: 'Î Î»Î®ÏÎµÏ Î¼Î­Î³ÎµÎ¸Î¿Ï',
        resizeHalf: 'ÎÎ¹ÏÏ Î¼Î­Î³ÎµÎ¸Î¿Ï',
        resizeQuarter: '1/4 Î¼Î­Î³ÎµÎ¸Î¿Ï',
        resizeNone: 'ÎÏÏÎ¹ÎºÏ Î¼Î­Î³ÎµÎ¸Î¿Ï',
        floatLeft: 'ÎÎµÏÎ±ÏÏÏÎ¹ÏÎ· Î±ÏÎ¹ÏÏÎµÏÎ¬',
        floatRight: 'ÎÎµÏÎ±ÏÏÏÎ¹ÏÎ· Î´ÎµÎ¾Î¹Î¬',
        floatNone: 'Î§ÏÏÎ¯Ï Î¼ÎµÏÎ±ÏÏÏÎ¹ÏÎ·',
        shapeRounded: 'Î£ÏÎ®Î¼Î±: Î£ÏÏÎ¿Î³Î³ÏÎ»ÎµÎ¼Î­Î½Î¿',
        shapeCircle: 'Î£ÏÎ®Î¼Î±: ÎÏÎºÎ»Î¿Ï',
        shapeThumbnail: 'Î£ÏÎ®Î¼Î±: ÎÎ¹ÎºÏÎ¿Î³ÏÎ±ÏÎ¯Î±',
        shapeNone: 'Î£ÏÎ®Î¼Î±: ÎÎ±Î½Î­Î½Î±',
        dragImageHere: 'Î£ÏÏÏÎµ ÏÎ·Î½ ÎµÎ¹ÎºÏÎ½Î± ÎµÎ´Ï',
        dropImage: 'ÎÏÎ®ÏÏÎµ ÏÎ·Î½ ÎµÎ¹ÎºÏÎ½Î±',
        selectFromFiles: 'ÎÏÎ¹Î»Î¿Î³Î® Î±ÏÏ Î±ÏÏÎµÎ¯Î±',
        maximumFileSize: 'ÎÎ­Î³Î¹ÏÏÎ¿ Î¼Î­Î³ÎµÎ¸Î¿Ï Î±ÏÏÎµÎ¯Î¿Ï',
        maximumFileSizeError: 'Î¤Î¿ Î¼Î­Î³ÎµÎ¸Î¿Ï ÎµÎ¯Î½Î±Î¹ Î¼ÎµÎ³Î±Î»ÏÏÎµÏÎ¿ Î±ÏÏ ÏÎ¿ Î¼Î­Î³Î¹ÏÏÎ¿ ÎµÏÎ¹ÏÏÎµÏÏÏ.',
        url: 'URL',
        remove: 'ÎÏÎ±Î¯ÏÎµÏÎ·',
        original: 'ÎÏÏÎ¹ÎºÏ'
      },
      link: {
        link: 'Î£ÏÎ½Î´ÎµÏÎ¼Î¿Ï',
        insert: 'ÎÎ¹ÏÎ±Î³ÏÎ³Î® ÏÏÎ½Î´Î­ÏÎ¼Î¿Ï',
        unlink: 'ÎÏÎ±Î¯ÏÎµÏÎ· ÏÏÎ½Î´Î­ÏÎ¼Î¿Ï',
        edit: 'ÎÏÎµÎ¾ÎµÏÎ³Î±ÏÎ¯Î± ÏÏÎ½Î´Î­ÏÎ¼Î¿Ï',
        textToDisplay: 'ÎÎµÎ¯Î¼ÎµÎ½Î¿ ÏÏÎ½Î´Î­ÏÎ¼Î¿Ï',
        url: 'Î£Îµ ÏÎ¿Î¹o URL ÏÏÎ­ÏÎµÎ¹ Î½Î± ÏÎ·Î³Î±Î¯Î½ÎµÎ¹ Î±ÏÏÏÏ Î¿ ÏÏÎ½Î´ÎµÏÎ¼Î¿Ï;',
        openInNewWindow: 'ÎÎ½Î¿Î¹Î³Î¼Î± ÏÎµ Î½Î­Î¿ ÏÎ±ÏÎ¬Î¸ÏÏÎ¿',
        useProtocol: 'Î§ÏÎ®ÏÎ· ÏÏÎ¿ÎµÏÎ¹Î»ÎµÎ³Î¼Î­Î½Î¿Ï ÏÏÏÏÎ¿ÎºÏÎ»Î»Î¿Ï'
      },
      video: {
        video: 'ÎÎ¯Î½ÏÎµÎ¿',
        videoLink: 'Î£ÏÎ½Î´ÎµÏÎ¼Î¿Ï ÎÎ¯Î½ÏÎµÎ¿',
        insert: 'ÎÎ¹ÏÎ±Î³ÏÎ³Î®',
        url: 'URL',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion Î® Youku)'
      },
      table: {
        table: 'Î Î¯Î½Î±ÎºÎ±Ï',
        addRowAbove: 'Î ÏÎ¿ÏÎ¸Î®ÎºÎ· Î³ÏÎ±Î¼Î¼Î®Ï ÏÎ¬Î½Ï',
        addRowBelow: 'Î ÏÎ¿ÏÎ¸Î®ÎºÎ· Î³ÏÎ±Î¼Î¼Î®Ï ÎºÎ¬ÏÏ',
        addColLeft: 'Î ÏÎ¿ÏÎ¸Î®ÎºÎ· ÏÏÎ®Î»Î·Ï Î±ÏÎ¹ÏÏÎµÏÎ¬',
        addColRight: 'Î ÏÎ¿ÏÎ¸Î®ÎºÎ· ÏÏÎ®Î»Î·Ï Î´ÎµÎ¾Î¯Î±',
        delRow: 'ÎÎ¹Î±Î³ÏÎ±ÏÎ® Î³ÏÎ±Î¼Î¼Î®Ï',
        delCol: 'ÎÎ¹Î±Î³ÏÎ±ÏÎ® ÏÏÎ®Î»Î·Ï',
        delTable: 'ÎÎ¹Î±Î³ÏÎ±ÏÎ® ÏÎ¯Î½Î±ÎºÎ±'
      },
      hr: {
        insert: 'ÎÎ¹ÏÎ±Î³ÏÎ³Î® Î¿ÏÎ¹Î¶ÏÎ½ÏÎ¹Î±Ï Î³ÏÎ±Î¼Î¼Î®Ï'
      },
      style: {
        style: 'Î£ÏÏÎ»',
        normal: 'ÎÎ±Î½Î¿Î½Î¹ÎºÏ',
        blockquote: 'Î Î±ÏÎ¬Î¸ÎµÏÎ·',
        pre: 'Î©Ï Î­ÏÎµÎ¹',
        h1: 'ÎÎµÏÎ±Î»Î¯Î´Î± 1',
        h2: 'ÎÎµÏÎ±Î»Î¯Î´Î± 2',
        h3: 'ÎÎµÏÎ±Î»Î¯Î´Î± 3',
        h4: 'ÎÎµÏÎ±Î»Î¯Î´Î± 4',
        h5: 'ÎÎµÏÎ±Î»Î¯Î´Î± 5',
        h6: 'ÎÎµÏÎ±Î»Î¯Î´Î± 6'
      },
      lists: {
        unordered: 'ÎÏÎ±Î¾Î¹Î½ÏÎ¼Î·ÏÎ· Î»Î¯ÏÏÎ±',
        ordered: 'Î¤Î±Î¾Î¹Î½Î¿Î¼Î·Î¼Î­Î½Î· Î»Î¯ÏÏÎ±'
      },
      options: {
        help: 'ÎÎ¿Î®Î¸ÎµÎ¹Î±',
        fullscreen: 'Î Î»Î®ÏÎ·Ï Î¿Î¸ÏÎ½Î·',
        codeview: 'Î ÏÎ¿Î²Î¿Î»Î® HTML'
      },
      paragraph: {
        paragraph: 'Î Î±ÏÎ¬Î³ÏÎ±ÏÎ¿Ï',
        outdent: 'ÎÎµÎ¯ÏÏÎ· ÎµÏÎ¿ÏÎ®Ï',
        indent: 'ÎÏÎ¾Î·ÏÎ· ÎµÏÎ¿ÏÎ®Ï',
        left: 'ÎÏÎ¹ÏÏÎµÏÎ® ÏÏÎ¿Î¯ÏÎ¹ÏÎ·',
        center: 'Î£ÏÎ¿Î¯ÏÎ¹ÏÎ· ÏÏÎ¿ ÎºÎ­Î½ÏÏÎ¿',
        right: 'ÎÎµÎ¾Î¹Î¬ ÏÏÎ¿Î¯ÏÎ¹ÏÎ·',
        justify: 'Î Î»Î®ÏÎ·Ï ÏÏÎ¿Î¯ÏÎ¹ÏÎ·'
      },
      color: {
        recent: 'Î ÏÏÏÏÎ±ÏÎ· ÎµÏÎ¹Î»Î¿Î³Î®',
        more: 'Î ÎµÏÎ¹ÏÏÏÏÎµÏÎ±',
        background: 'Î¥ÏÏÎ²Î±Î¸ÏÎ¿',
        foreground: 'ÎÏÏÎ¿ÏÏÎ¬',
        transparent: 'ÎÎ¹Î±ÏÎ±Î½Î­Ï',
        setTransparent: 'ÎÏÎ¹Î»Î¿Î³Î® Î´Î¹Î±ÏÎ¬Î½ÎµÎ¹Î±Ï',
        reset: 'ÎÏÎ±Î½Î±ÏÎ¿ÏÎ¬',
        resetToDefault: 'ÎÏÎ±Î½Î±ÏÎ¿ÏÎ¬ ÏÏÎ¹Ï ÏÏÎ¿ÎºÎ±Î¸Î¿ÏÎ¹ÏÎ¼Î­Î½ÎµÏ ÏÎ¹Î¼Î­Ï',
        cpSelect: 'ÎÏÎ¹Î»Î¿Î³Î®'
      },
      shortcut: {
        shortcuts: 'Î£ÏÎ½ÏÎ¿Î¼ÎµÏÏÎµÎ¹Ï',
        close: 'ÎÎ»ÎµÎ¯ÏÎ¹Î¼Î¿',
        textFormatting: 'ÎÎ¹Î±Î¼ÏÏÏÏÏÎ· ÎºÎµÎ¹Î¼Î­Î½Î¿Ï',
        action: 'ÎÎ½Î­ÏÎ³ÎµÎ¹Î±',
        paragraphFormatting: 'ÎÎ¹Î±Î¼ÏÏÏÏÏÎ· ÏÎ±ÏÎ±Î³ÏÎ¬ÏÎ¿Ï',
        documentStyle: 'Î£ÏÏÎ» ÎºÎµÎ¹Î¼Î­Î½Î¿Ï',
        extraKeys: 'ÎÏÎ¹ÏÎ»Î­Î¿Î½ ÏÏÎ½ÏÎ¿Î¼ÎµÏÏÎµÎ¹Ï'
      },
      help: {
        'escape': 'ÎÎ¾Î¿Î´Î¿Ï',
        'insertParagraph': 'ÎÎ¹ÏÎ±Î³ÏÎ³Î® ÏÎ±ÏÎ±Î³ÏÎ¬ÏÎ¿Ï',
        'undo': 'ÎÎ½Î±Î¹ÏÎµÎ¯ ÏÎ·Î½ ÏÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î· ÎµÎ½ÏÎ¿Î»Î®',
        'redo': 'ÎÏÎ±Î½Î±Î»Î±Î¼Î²Î¬Î½ÎµÎ¹ ÏÎ·Î½ ÏÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î· ÎµÎ½ÏÎ¿Î»Î®',
        'tab': 'ÎÏÎ¿ÏÎ®',
        'untab': 'ÎÎ½Î±Î¯ÏÎµÏÎ· ÎµÏÎ¿ÏÎ®Ï',
        'bold': 'ÎÏÎ¹ÏÎ¼ÏÏ Î­Î½ÏÎ¿Î½Î¿Ï ÏÏÏÎ»',
        'italic': 'ÎÏÎ¹ÏÎ¼ÏÏ ÏÎ»Î¬Î³Î¹Î¿Ï ÏÏÏÎ»',
        'underline': 'ÎÏÎ¹ÏÎ¼ÏÏ ÏÏÎ¿Î³ÎµÎ³ÏÎ±Î¼Î¼Î­Î½Î¿Ï ÏÏÏÎ»',
        'strikethrough': 'ÎÏÎ¹ÏÎ¼ÏÏ Î´Î¹ÎµÎ³ÏÎ±Î¼Î¼Î­Î½Î¿Ï ÏÏÏÎ»',
        'removeFormat': 'ÎÏÎ±Î¯ÏÎµÏÎ· ÏÏÏÎ»',
        'justifyLeft': 'ÎÏÎ¹ÏÎ¼ÏÏ Î±ÏÎ¹ÏÏÎµÏÎ®Ï ÏÏÎ¿Î¯ÏÎ¹ÏÎ·Ï',
        'justifyCenter': 'ÎÏÎ¹ÏÎ¼ÏÏ ÎºÎµÎ½ÏÏÎ¹ÎºÎ®Ï ÏÏÎ¿Î¯ÏÎ¹ÏÎ·Ï',
        'justifyRight': 'ÎÏÎ¹ÏÎ¼ÏÏ Î´ÎµÎ¾Î¹Î¬Ï ÏÏÎ¿Î¯ÏÎ¹ÏÎ·Ï',
        'justifyFull': 'ÎÏÎ¹ÏÎ¼ÏÏ ÏÎ»Î®ÏÎ¿ÏÏ ÏÏÎ¿Î¯ÏÎ¹ÏÎ·Ï',
        'insertUnorderedList': 'ÎÏÎ¹ÏÎ¼ÏÏ Î¼Î·-ÏÎ±Î¾Î¹Î½Î¿Î¼Î·Î¼Î­Î½Î·Ï Î»Î¯ÏÏÎ±Ï',
        'insertOrderedList': 'ÎÏÎ¹ÏÎ¼ÏÏ ÏÎ±Î¾Î¹Î½Î¿Î¼Î·Î¼Î­Î½Î·Ï Î»Î¯ÏÏÎ±Ï',
        'outdent': 'Î ÏÎ¿ÎµÎ¾Î¿ÏÎ® ÏÎ±ÏÎ±Î³ÏÎ¬ÏÎ¿Ï',
        'indent': 'ÎÏÎ¿ÏÎ® ÏÎ±ÏÎ±Î³ÏÎ¬ÏÎ¿Ï',
        'formatPara': 'ÎÎ»Î»Î±Î³Î® ÏÎ·Ï Î¼Î¿ÏÏÎ®Ï ÏÎ¿Ï ÏÏÎ­ÏÎ¿Î½ÏÎ¿Ï Î¼ÏÎ»Î¿Îº ÏÎµ ÏÎ±ÏÎ¬Î³ÏÎ±ÏÎ¿ (P tag)',
        'formatH1': 'ÎÎ»Î»Î±Î³Î® ÏÎ·Ï Î¼Î¿ÏÏÎ®Ï ÏÎ¿Ï ÏÏÎ­ÏÎ¿Î½ÏÎ¿Ï Î¼ÏÎ»Î¿Îº ÏÎµ H1',
        'formatH2': 'ÎÎ»Î»Î±Î³Î® ÏÎ·Ï Î¼Î¿ÏÏÎ®Ï ÏÎ¿Ï ÏÏÎ­ÏÎ¿Î½ÏÎ¿Ï Î¼ÏÎ»Î¿Îº ÏÎµ H2',
        'formatH3': 'ÎÎ»Î»Î±Î³Î® ÏÎ·Ï Î¼Î¿ÏÏÎ®Ï ÏÎ¿Ï ÏÏÎ­ÏÎ¿Î½ÏÎ¿Ï Î¼ÏÎ»Î¿Îº ÏÎµ H3',
        'formatH4': 'ÎÎ»Î»Î±Î³Î® ÏÎ·Ï Î¼Î¿ÏÏÎ®Ï ÏÎ¿Ï ÏÏÎ­ÏÎ¿Î½ÏÎ¿Ï Î¼ÏÎ»Î¿Îº ÏÎµ H4',
        'formatH5': 'ÎÎ»Î»Î±Î³Î® ÏÎ·Ï Î¼Î¿ÏÏÎ®Ï ÏÎ¿Ï ÏÏÎ­ÏÎ¿Î½ÏÎ¿Ï Î¼ÏÎ»Î¿Îº ÏÎµ H5',
        'formatH6': 'ÎÎ»Î»Î±Î³Î® ÏÎ·Ï Î¼Î¿ÏÏÎ®Ï ÏÎ¿Ï ÏÏÎ­ÏÎ¿Î½ÏÎ¿Ï Î¼ÏÎ»Î¿Îº ÏÎµ H6',
        'insertHorizontalRule': 'ÎÎ¹ÏÎ±Î³ÏÎ³Î® Î¿ÏÎ¹Î¶ÏÎ½ÏÎ¹Î±Ï Î³ÏÎ±Î¼Î¼Î®Ï',
        'linkDialog.show': 'ÎÎ¼ÏÎ¬Î½Î¹ÏÎ· Î´Î¹Î±Î»ÏÎ³Î¿Ï ÏÏÎ½Î´Î­ÏÎ¼Î¿Ï'
      },
      history: {
        undo: 'ÎÎ½Î±Î¯ÏÎµÏÎ·',
        redo: 'ÎÏÎ±Î½Î±Î»Î·ÏÎ·'
      },
      specialChar: {
        specialChar: 'ÎÎÎÎÎÎÎ Î§ÎÎ¡ÎÎÎ¤ÎÎ¡ÎÎ£',
        select: 'ÎÏÎ¹Î»Î­Î¾ÏÎµ ÎµÎ¹Î´Î¹ÎºÎ¿ÏÏ ÏÎ±ÏÎ±ÎºÏÎ®ÏÎµÏ'
      },
      output: {
        noSelection: 'ÎÎµÎ½ Î­Î³Î¹Î½Îµ ÎµÏÎ¹Î»Î¿Î³Î®!'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});