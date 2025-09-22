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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 41:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'sr-RS': {
      font: {
        bold: 'ÐÐ¾Ð´ÐµÐ±ÑÐ°Ð½Ð¾',
        italic: 'ÐÑÑÐ·Ð¸Ð²',
        underline: 'ÐÐ¾Ð´Ð²ÑÑÐµÐ½Ð¾',
        clear: 'Ð£ÐºÐ»Ð¾Ð½Ð¸ ÑÑÐ¸Ð»Ð¾Ð²Ðµ ÑÐ¾Ð½ÑÐ°',
        height: 'ÐÐ¸ÑÐ¸Ð½Ð° Ð»Ð¸Ð½Ð¸ÑÐµ',
        name: 'Font Family',
        strikethrough: 'ÐÑÐµÑÑÑÐ°Ð½Ð¾',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'ÐÐµÐ»Ð¸ÑÐ¸Ð½Ð° ÑÐ¾Ð½ÑÐ°'
      },
      image: {
        image: 'Ð¡Ð»Ð¸ÐºÐ°',
        insert: 'Ð£Ð¼ÐµÑÐ½Ð¸ ÑÐ»Ð¸ÐºÑ',
        resizeFull: 'ÐÑÐ½Ð° Ð²ÐµÐ»Ð¸ÑÐ¸Ð½Ð°',
        resizeHalf: 'Ð£Ð¼Ð°ÑÐ¸ Ð½Ð° 50%',
        resizeQuarter: 'Ð£Ð¼Ð°ÑÐ¸ Ð½Ð° 25%',
        floatLeft: 'Ð£Ð· Ð»ÐµÐ²Ñ Ð¸Ð²Ð¸ÑÑ',
        floatRight: 'Ð£Ð· Ð´ÐµÑÐ½Ñ Ð¸Ð²Ð¸ÑÑ',
        floatNone: 'ÐÐµÐ· ÑÐ°Ð²Ð½Ð°ÑÐ°',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'ÐÑÐµÐ²ÑÑÐ¸ ÑÐ»Ð¸ÐºÑ Ð¾Ð²Ð´Ðµ',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'ÐÐ·Ð°Ð±ÐµÑÐ¸ Ð¸Ð· Ð´Ð°ÑÐ¾ÑÐµÐºÐµ',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'ÐÐ´ÑÐµÑÐ° ÑÐ»Ð¸ÐºÐµ',
        remove: 'Ð£ÐºÐ»Ð¾Ð½Ð¸ ÑÐ»Ð¸ÐºÑ',
        original: 'Original'
      },
      video: {
        video: 'ÐÐ¸Ð´ÐµÐ¾',
        videoLink: 'ÐÐµÐ·Ð° ÐºÐ° Ð²Ð¸Ð´ÐµÑ',
        insert: 'Ð£Ð¼ÐµÑÐ½Ð¸ Ð²Ð¸Ð´ÐµÐ¾',
        url: 'URL Ð²Ð¸Ð´ÐµÐ¾',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion Ð¸Ð»Ð¸ Youku)'
      },
      link: {
        link: 'ÐÐµÐ·Ð°',
        insert: 'Ð£Ð¼ÐµÑÐ½Ð¸ Ð²ÐµÐ·Ñ',
        unlink: 'Ð£ÐºÐ»Ð¾Ð½Ð¸ Ð²ÐµÐ·Ñ',
        edit: 'Ð£ÑÐµÐ´Ð¸',
        textToDisplay: 'Ð¢ÐµÐºÑÑ Ð·Ð° Ð¿ÑÐ¸ÐºÐ°Ð·',
        url: 'ÐÐ½ÑÐµÑÐ½ÐµÑ Ð°Ð´ÑÐµÑÐ°',
        openInNewWindow: 'ÐÑÐ²Ð¾ÑÐ¸ Ñ Ð½Ð¾Ð²Ð¾Ð¼ Ð¿ÑÐ¾Ð·Ð¾ÑÑ'
      },
      table: {
        table: 'Ð¢Ð°Ð±ÐµÐ»Ð°',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Ð£Ð¼ÐµÑÐ½Ð¸ ÑÐ¾ÑÐ¸Ð·Ð¾Ð½ÑÐ°Ð»Ð½Ñ Ð»Ð¸Ð½Ð¸ÑÑ'
      },
      style: {
        style: 'Ð¡ÑÐ¸Ð»',
        p: 'ÐÐ¾ÑÐ¼Ð°Ð»Ð½Ð¸',
        blockquote: 'Ð¦Ð¸ÑÐ°Ñ',
        pre: 'ÐÐ¾Ð´',
        h1: 'ÐÐ°Ð³Ð»Ð°Ð²ÑÐµ 1',
        h2: 'ÐÐ°Ð³Ð»Ð°Ð²ÑÐµ 2',
        h3: 'ÐÐ°Ð³Ð»Ð°Ð²ÑÐµ 3',
        h4: 'ÐÐ°Ð³Ð»Ð°Ð²ÑÐµ 4',
        h5: 'ÐÐ°Ð³Ð»Ð°Ð²ÑÐµ 5',
        h6: 'ÐÐ°Ð³Ð»Ð°Ð²ÑÐµ 6'
      },
      lists: {
        unordered: 'ÐÐ±Ð¸ÑÐ½Ð° Ð»Ð¸ÑÑÐ°',
        ordered: 'ÐÑÐ¼ÐµÑÐ¸ÑÐ°Ð½Ð° Ð»Ð¸ÑÑÐ°'
      },
      options: {
        help: 'ÐÐ¾Ð¼Ð¾Ñ',
        fullscreen: 'ÐÑÐµÐºÐ¾ ÑÐµÐ»Ð¾Ð³ ÐµÐºÑÐ°Ð½Ð°',
        codeview: 'ÐÐ·Ð²Ð¾ÑÐ½Ð¸ ÐºÐ¾Ð´'
      },
      paragraph: {
        paragraph: 'ÐÐ°ÑÐ°Ð³ÑÐ°Ñ',
        outdent: 'Ð¡Ð¼Ð°ÑÐ¸ ÑÐ²Ð»Ð°ÑÐµÑÐµ',
        indent: 'ÐÐ¾Ð²ÐµÑÐ°Ñ ÑÐ²Ð»Ð°ÑÐµÑÐµ',
        left: 'ÐÐ¾ÑÐ°Ð²Ð½Ð°Ñ Ñ Ð»ÐµÐ²Ð¾',
        center: 'Ð¦ÐµÐ½ÑÑÐ¸ÑÐ°Ð½Ð¾',
        right: 'ÐÐ¾ÑÐ°Ð²Ð½Ð°Ñ Ñ Ð´ÐµÑÐ½Ð¾',
        justify: 'ÐÐ¾ÑÐ°Ð²Ð½Ð°Ñ Ð¾Ð±Ð¾ÑÑÑÐ°Ð½Ð¾'
      },
      color: {
        recent: 'ÐÐ¾ÑÐ»ÐµÐ´ÑÐ° Ð±Ð¾ÑÐ°',
        more: 'ÐÐ¸ÑÐµ Ð±Ð¾ÑÐ°',
        background: 'ÐÐ¾ÑÐ° Ð¿Ð¾Ð·Ð°Ð´Ð¸Ð½Ðµ',
        foreground: 'ÐÐ¾ÑÐ° ÑÐµÐºÑÑÐ°',
        transparent: 'ÐÑÐ¾Ð²Ð¸Ð´Ð½Ð°',
        setTransparent: 'ÐÑÐ¾Ð²Ð¸Ð´Ð½Ð°',
        reset: 'ÐÐ¿Ð¾Ð·Ð¸Ð²',
        resetToDefault: 'ÐÐ¾Ð´ÑÐ°Ð·ÑÐ¼ÐµÐ²Ð°Ð½Ð°'
      },
      shortcut: {
        shortcuts: 'ÐÑÐµÑÐ¸ÑÐµ ÑÐ° ÑÐ°ÑÑÐ°ÑÑÑÐµ',
        close: 'ÐÐ°ÑÐ²Ð¾ÑÐ¸',
        textFormatting: 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ°ÑÐµ ÑÐµÐºÑÑÐ°',
        action: 'ÐÐºÑÐ¸ÑÐ°',
        paragraphFormatting: 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ°ÑÐµ Ð¿Ð°ÑÐ°Ð³ÑÐ°ÑÐ°',
        documentStyle: 'Ð¡ÑÐ¸Ð» Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ°',
        extraKeys: 'ÐÐ¾Ð´Ð°ÑÐ½Ðµ ÐºÐ¾Ð¼Ð±Ð¸Ð½Ð°ÑÐ¸ÑÐµ'
      },
      help: {
        'insertParagraph': 'Insert Paragraph',
        'undo': 'Undoes the last command',
        'redo': 'Redoes the last command',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Set a bold style',
        'italic': 'Set a italic style',
        'underline': 'Set a underline style',
        'strikethrough': 'Set a strikethrough style',
        'removeFormat': 'Clean a style',
        'justifyLeft': 'Set left align',
        'justifyCenter': 'Set center align',
        'justifyRight': 'Set right align',
        'justifyFull': 'Set full align',
        'insertUnorderedList': 'Toggle unordered list',
        'insertOrderedList': 'Toggle ordered list',
        'outdent': 'Outdent on current paragraph',
        'indent': 'Indent on current paragraph',
        'formatPara': 'Change current block\'s format as a paragraph(P tag)',
        'formatH1': 'Change current block\'s format as H1',
        'formatH2': 'Change current block\'s format as H2',
        'formatH3': 'Change current block\'s format as H3',
        'formatH4': 'Change current block\'s format as H4',
        'formatH5': 'Change current block\'s format as H5',
        'formatH6': 'Change current block\'s format as H6',
        'insertHorizontalRule': 'Insert horizontal rule',
        'linkDialog.show': 'Show Link Dialog'
      },
      history: {
        undo: 'ÐÐ¾Ð½Ð¸ÑÑÐ¸',
        redo: 'ÐÐ¾Ð½Ð¾Ð²Ð¸'
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