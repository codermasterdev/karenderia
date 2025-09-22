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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'fa-IR': {
      font: {
        bold: 'Ø¯Ø±Ø´Øª',
        italic: 'Ø®ÙÛØ¯Ù',
        underline: 'ÙÛØ§Ù Ø®Ø·',
        clear: 'Ù¾Ø§Ú© Ú©Ø±Ø¯Ù ÙØ±ÙØª ÙÙÙØª',
        height: 'ÙØ§ØµÙÙ Û Ø®Ø·Û',
        name: 'Ø§Ø³Ù ÙÙÙØª',
        strikethrough: 'Strike',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Ø§ÙØ¯Ø§Ø²Ù Û ÙÙÙØª'
      },
      image: {
        image: 'ØªØµÙÛØ±',
        insert: 'ÙØ§Ø±Ø¯ Ú©Ø±Ø¯Ù ØªØµÙÛØ±',
        resizeFull: 'ØªØºÛÛØ± Ø¨Ù Ø§ÙØ¯Ø§Ø²Ù Û Ú©Ø§ÙÙ',
        resizeHalf: 'ØªØºÛÛØ± Ø¨Ù Ø§ÙØ¯Ø§Ø²Ù ÙØµÙ',
        resizeQuarter: 'ØªØºÛÛØ± Ø¨Ù Ø§ÙØ¯Ø§Ø²Ù ÛÚ© ÚÙØ§Ø±Ù',
        floatLeft: 'ÚØ³Ø¨Ø§ÙØ¯Ù Ø¨Ù ÚÙ¾',
        floatRight: 'ÚØ³Ø¨Ø§ÙØ¯Ù Ø¨Ù Ø±Ø§Ø³Øª',
        floatNone: 'Ø¨Ø¯ÙÙ ÚØ³Ø¨ÙØ¯Ú¯Û',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'ÛÚ© ØªØµÙÛØ± Ø±Ø§ Ø§ÛÙØ¬Ø§ Ø¨Ú©Ø´ÛØ¯',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'ÙØ§ÛÙ ÙØ§ Ø±Ø§ Ø§ÙØªØ®Ø§Ø¨ Ú©ÙÛØ¯',
        maximumFileSize: 'Ø­Ø¯Ø§Ú©Ø«Ø± Ø§ÙØ¯Ø§Ø²Ù Ù¾Ø±ÙÙØ¯Ù',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'Ø¢Ø¯Ø±Ø³ ØªØµÙÛØ±',
        remove: 'Ø­Ø°Ù ØªØµÙÛØ±',
        original: 'Original'
      },
      video: {
        video: 'ÙÛØ¯ÛÙ',
        videoLink: 'ÙÛÙÚ© ÙÛØ¯ÛÙ',
        insert: 'Ø§ÙØ²ÙØ¯Ù ÙÛØ¯ÛÙ',
        url: 'Ø¢Ø¯Ø±Ø³ ÙÛØ¯ÛÙ Ø',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion ÛØ§ Youku)'
      },
      link: {
        link: 'ÙÛÙÚ©',
        insert: 'Ø§Ø¶Ø§ÙÙ Ú©Ø±Ø¯Ù ÙÛÙÚ©',
        unlink: 'Ø­Ø°Ù ÙÛÙÚ©',
        edit: 'ÙÛØ±Ø§ÛØ´',
        textToDisplay: 'ÙØªÙ Ø¬ÙØª ÙÙØ§ÛØ´',
        url: 'Ø§ÛÙ ÙÛÙÚ© Ø¨Ù ÚÙ Ø¢Ø¯Ø±Ø³Û Ø¨Ø§ÛØ¯ Ø¨Ø±ÙØ¯ Ø',
        openInNewWindow: 'Ø¯Ø± ÛÚ© Ù¾ÙØ¬Ø±Ù Û Ø¬Ø¯ÛØ¯ Ø¨Ø§Ø² Ø´ÙØ¯'
      },
      table: {
        table: 'Ø¬Ø¯ÙÙ',
        addRowAbove: 'Ø§ÙØ²ÙØ¯Ù Ø±Ø¯ÛÙ Ø¨Ø§ÙØ§',
        addRowBelow: 'Ø§ÙØ²ÙØ¯Ù Ø±Ø¯ÛÙ Ù¾Ø§ÛÛÙ',
        addColLeft: 'Ø§ÙØ²ÙØ¯Ù Ø³ØªÙÙ ÚÙ¾',
        addColRight: 'Ø§ÙØ²ÙØ¯Ù Ø³ØªÙÙ Ø±Ø§Ø³Øª',
        delRow: 'Ø­Ø°Ù Ø±Ø¯ÛÙ',
        delCol: 'Ø­Ø°Ù Ø³ØªÙÙ',
        delTable: 'Ø­Ø°Ù Ø¬Ø¯ÙÙ'
      },
      hr: {
        insert: 'Ø§ÙØ²ÙØ¯Ù Ø®Ø· Ø§ÙÙÛ'
      },
      style: {
        style: 'Ø§Ø³ØªÛÙ',
        p: 'ÙØ±ÙØ§Ù',
        blockquote: 'ÙÙÙ ÙÙÙ',
        pre: 'Ú©Ø¯',
        h1: 'Ø³Ø±ØªÛØªØ± 1',
        h2: 'Ø³Ø±ØªÛØªØ± 2',
        h3: 'Ø³Ø±ØªÛØªØ± 3',
        h4: 'Ø³Ø±ØªÛØªØ± 4',
        h5: 'Ø³Ø±ØªÛØªØ± 5',
        h6: 'Ø³Ø±ØªÛØªØ± 6'
      },
      lists: {
        unordered: 'ÙÛØ³Øª ØºÛØ± ØªØ±ØªÛØ¨Û',
        ordered: 'ÙÛØ³Øª ØªØ±ØªÛØ¨Û'
      },
      options: {
        help: 'Ø±Ø§ÙÙÙØ§',
        fullscreen: 'ÙÙØ§ÛØ´ ØªÙØ§Ù ØµÙØ­Ù',
        codeview: 'ÙØ´Ø§ÙØ¯Ù Û Ú©Ø¯'
      },
      paragraph: {
        paragraph: 'Ù¾Ø§Ø±Ø§Ú¯Ø±Ø§Ù',
        outdent: 'Ú©Ø§ÙØ´ ØªÙ Ø±ÙØªÚ¯Û',
        indent: 'Ø§ÙØ²Ø§ÛØ´ ØªÙ Ø±ÙØªÚ¯Û',
        left: 'ÚÙ¾ ÚÛÙ',
        center: 'ÙÛØ§Ù ÚÛÙ',
        right: 'Ø±Ø§Ø³Øª ÚÛÙ',
        justify: 'Ø¨ÙÙÚ© ÚÛÙ'
      },
      color: {
        recent: 'Ø±ÙÚ¯ Ø§Ø®ÛØ±Ø§ Ø§Ø³ØªÙØ§Ø¯Ù Ø´Ø¯Ù',
        more: 'Ø±ÙÚ¯ Ø¨ÛØ´ØªØ±',
        background: 'Ø±ÙÚ¯ Ù¾Ø³ Ø²ÙÛÙÙ',
        foreground: 'Ø±ÙÚ¯ ÙØªÙ',
        transparent: 'Ø¨Û Ø±ÙÚ¯',
        setTransparent: 'ØªÙØ¸ÛÙ Ø­Ø§ÙØª Ø¨Û Ø±ÙÚ¯',
        reset: 'Ø¨Ø§Ø²ÙØ´Ø§ÙØ¯Ù',
        resetToDefault: 'Ø­Ø§ÙØª Ù¾ÛØ´ ÙØ±Ø¶'
      },
      shortcut: {
        shortcuts: 'Ø¯Ú©ÙÙ ÙØ§Û ÙÛØ§Ù Ø¨Ø±',
        close: 'Ø¨Ø³ØªÙ',
        textFormatting: 'ÙØ±ÙØª ÙØªÙ',
        action: 'Ø¹ÙÙÛØ§Øª',
        paragraphFormatting: 'ÙØ±ÙØª Ù¾Ø§Ø±Ø§Ú¯Ø±Ø§Ù',
        documentStyle: 'Ø§Ø³ØªÛÙ Ø³ÙØ¯',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Ø§ÙØ²ÙØ¯Ù Ù¾Ø§Ø±Ø§Ú¯Ø±Ø§Ù',
        'undo': 'Undoes the last command',
        'redo': 'Redoes the last command',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Set a bold style',
        'italic': 'Set a italic style',
        'underline': 'Set a underline style',
        'strikethrough': 'Set a strikethrough style',
        'removeFormat': 'Clean a style',
        'justifyLeft': 'ÚÙ¾ ÚÛÙ',
        'justifyCenter': 'ÙØ³Ø· ÚÛÙ',
        'justifyRight': 'Ø±Ø§Ø³Øª ÚÛÙ',
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
        undo: 'ÙØ§ÚÛØ¯Ù',
        redo: 'Ø¨Ø§Ø²ÚÛØ¯Ù'
      },
      specialChar: {
        specialChar: 'Ú©Ø§Ø±Ø§Ú©ØªØ± Ø®Ø§Øµ',
        select: 'Ø§ÙØªØ®Ø§Ø¨ Ú©Ø§Ø±Ø§Ú©ØªØ± Ø®Ø§Øµ'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});