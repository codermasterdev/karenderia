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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'bg-BG': {
      font: {
        bold: 'Ð£Ð´ÐµÐ±ÐµÐ»ÐµÐ½',
        italic: 'ÐÐ°ÐºÐ»Ð¾Ð½ÐµÐ½',
        underline: 'ÐÐ¾Ð´ÑÐµÑÑÐ°Ð½',
        clear: 'ÐÐ·ÑÐ¸ÑÑÐ¸ ÑÑÐ¸Ð»Ð¾Ð²ÐµÑÐµ',
        height: 'ÐÐ¸ÑÐ¾ÑÐ¸Ð½Ð°',
        name: 'Ð¨ÑÐ¸ÑÑ',
        strikethrough: 'ÐÐ°Ð´ÑÐ°ÑÐºÐ°Ð½Ð¾',
        subscript: 'ÐÐ¾Ð»ÐµÐ½ Ð¸Ð½Ð´ÐµÐºÑ',
        superscript: 'ÐÐ¾ÑÐµÐ½ Ð¸Ð½Ð´ÐµÐºÑ',
        size: 'Ð Ð°Ð·Ð¼ÐµÑ Ð½Ð° ÑÑÐ¸ÑÑÐ°'
      },
      image: {
        image: 'ÐÐ·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ðµ',
        insert: 'ÐÐ¾ÑÑÐ°Ð²Ð¸ ÐºÐ°ÑÑÐ¸Ð½ÐºÐ°',
        resizeFull: 'Ð¦ÑÐ» ÑÐ°Ð·Ð¼ÐµÑ',
        resizeHalf: 'Ð Ð°Ð·Ð¼ÐµÑ Ð½Ð° 50%',
        resizeQuarter: 'Ð Ð°Ð·Ð¼ÐµÑ Ð½Ð° 25%',
        floatLeft: 'ÐÐ¾Ð´ÑÐ°Ð²Ð½Ð¸ Ð² Ð»ÑÐ²Ð¾',
        floatRight: 'ÐÐ¾Ð´ÑÐ°Ð²Ð½Ð¸ Ð² Ð´ÑÑÐ½Ð¾',
        floatNone: 'ÐÐµÐ· Ð¿Ð¾Ð´ÑÐ°Ð²Ð½ÑÐ²Ð°Ð½Ðµ',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'ÐÑÑÐ½ÐµÑÐµ Ð¸Ð·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸ÐµÑÐ¾ ÑÑÐº',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'ÐÐ·Ð±ÐµÑÐµÑÐµ ÑÐ°Ð¹Ð»',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'URL Ð°Ð´ÑÐµÑ Ð½Ð° Ð¸Ð·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ðµ',
        remove: 'ÐÑÐµÐ¼Ð°ÑÐ½Ð¸ Ð¸Ð·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ðµ',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Video Link',
        insert: 'Insert Video',
        url: 'Video URL?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
      },
      link: {
        link: 'ÐÑÑÐ·ÐºÐ°',
        insert: 'ÐÐ¾Ð±Ð°Ð²Ð¸ Ð²ÑÑÐ·ÐºÐ°',
        unlink: 'ÐÑÐµÐ¼Ð°ÑÐ½Ð¸ Ð²ÑÑÐ·ÐºÐ°',
        edit: 'ÐÑÐ¾Ð¼ÐµÐ½Ð¸',
        textToDisplay: 'Ð¢ÐµÐºÑÑ Ð·Ð° Ð¿Ð¾ÐºÐ°Ð·Ð²Ð°Ð½Ðµ',
        url: 'URL Ð°Ð´ÑÐµÑ',
        openInNewWindow: 'ÐÑÐ²Ð¾ÑÐ¸ Ð² Ð½Ð¾Ð² Ð¿ÑÐ¾Ð·Ð¾ÑÐµÑ'
      },
      table: {
        table: 'Ð¢Ð°Ð±Ð»Ð¸ÑÐ°',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'ÐÐ¾Ð±Ð°Ð²Ð¸ ÑÐ¾ÑÐ¸Ð·Ð¾Ð½ÑÐ°Ð»Ð½Ð° Ð»Ð¸Ð½Ð¸Ñ'
      },
      style: {
        style: 'Ð¡ÑÐ¸Ð»',
        p: 'ÐÐ¾ÑÐ¼Ð°Ð»ÐµÐ½',
        blockquote: 'Ð¦Ð¸ÑÐ°Ñ',
        pre: 'ÐÐ¾Ð´',
        h1: 'ÐÐ°Ð³Ð»Ð°Ð²Ð¸Ðµ 1',
        h2: 'ÐÐ°Ð³Ð»Ð°Ð²Ð¸Ðµ 2',
        h3: 'ÐÐ°Ð³Ð»Ð°Ð²Ð¸Ðµ 3',
        h4: 'ÐÐ°Ð³Ð»Ð°Ð²Ð¸Ðµ 4',
        h5: 'ÐÐ°Ð³Ð»Ð°Ð²Ð¸Ðµ 5',
        h6: 'ÐÐ°Ð³Ð»Ð°Ð²Ð¸Ðµ 6'
      },
      lists: {
        unordered: 'Ð¡Ð¸Ð¼Ð²Ð¾Ð»ÐµÐ½ ÑÐ¿Ð¸ÑÑÐº',
        ordered: 'Ð¦Ð¸ÑÑÐ¾Ð² ÑÐ¿Ð¸ÑÑÐº'
      },
      options: {
        help: 'ÐÐ¾Ð¼Ð¾Ñ',
        fullscreen: 'ÐÐ° ÑÑÐ» ÐµÐºÑÐ°Ð½',
        codeview: 'ÐÑÐµÐ³Ð»ÐµÐ´ Ð½Ð° ÐºÐ¾Ð´'
      },
      paragraph: {
        paragraph: 'ÐÐ°ÑÐ°Ð³ÑÐ°Ñ',
        outdent: 'ÐÐ°Ð¼Ð°Ð»ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð¾ÑÑÑÑÐ¿Ð°',
        indent: 'ÐÐ±Ð·Ð°Ñ',
        left: 'ÐÐ¾Ð´ÑÐ°Ð²Ð½ÑÐ²Ð°Ð½Ðµ Ð² Ð»ÑÐ²Ð¾',
        center: 'Ð¦ÐµÐ½ÑÑÑ',
        right: 'ÐÐ¾Ð´ÑÐ°Ð²Ð½ÑÐ²Ð°Ð½Ðµ Ð² Ð´ÑÑÐ½Ð¾',
        justify: 'Ð Ð°Ð·ÑÑÐ³Ð°Ð½Ðµ Ð¿Ð¾ ÑÐ¸ÑÐ¸Ð½Ð°'
      },
      color: {
        recent: 'ÐÐ¾ÑÐ»ÐµÐ´Ð½Ð¸Ñ Ð¸Ð·Ð±ÑÐ°Ð½ ÑÐ²ÑÑ',
        more: 'ÐÑÐµ ÑÐ²ÐµÑÐ¾Ð²Ðµ',
        background: 'Ð¦Ð²ÑÑ Ð½Ð° ÑÐ¾Ð½Ð°',
        foreground: 'Ð¦Ð²ÑÑ Ð½Ð° ÑÑÐ¸ÑÑÐ°',
        transparent: 'ÐÑÐ¾Ð·ÑÐ°ÑÐµÐ½',
        setTransparent: 'ÐÐ°Ð¿ÑÐ°Ð²ÐµÑÐµ Ð¿ÑÐ¾Ð·ÑÐ°ÑÐµÐ½',
        reset: 'ÐÑÐ·ÑÑÐ°Ð½Ð¾Ð²Ð¸',
        resetToDefault: 'ÐÑÐ·ÑÑÐ°Ð½Ð¾Ð²Ð¸ Ð¾ÑÐ¸Ð³Ð¸Ð½Ð°Ð»Ð½Ð¸ÑÐµ',
        cpSelect: 'ÐÐ·Ð±ÐµÑÐµÑÐµ'
      },
      shortcut: {
        shortcuts: 'ÐÐ»Ð°Ð²Ð¸ÑÐ½Ð¸ ÐºÐ¾Ð¼Ð±Ð¸Ð½Ð°ÑÐ¸Ð¸',
        close: 'ÐÐ°ÑÐ²Ð¾ÑÐ¸',
        textFormatting: 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ°Ð½Ðµ Ð½Ð° ÑÐµÐºÑÑÐ°',
        action: 'ÐÐµÐ¹ÑÑÐ²Ð¸Ðµ',
        paragraphFormatting: 'Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÐ°Ð½Ðµ Ð½Ð° Ð¿Ð°ÑÐ°Ð³ÑÐ°Ñ',
        documentStyle: 'Ð¡ÑÐ¸Ð» Ð½Ð° Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ°',
        extraKeys: 'Extra keys'
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
        undo: 'ÐÐ°Ð·Ð°Ð´',
        redo: 'ÐÐ°Ð¿ÑÐµÐ´'
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