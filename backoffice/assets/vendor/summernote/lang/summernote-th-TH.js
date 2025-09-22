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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'th-TH': {
      font: {
        bold: 'à¸à¸±à¸§à¸«à¸à¸²',
        italic: 'à¸à¸±à¸§à¹à¸­à¸µà¸¢à¸',
        underline: 'à¸à¸µà¸à¹à¸ªà¹à¸à¹à¸à¹',
        clear: 'à¸¥à¹à¸²à¸à¸£à¸¹à¸à¹à¸à¸à¸à¸±à¸§à¸­à¸±à¸à¸©à¸£',
        height: 'à¸à¸§à¸²à¸¡à¸ªà¸¹à¸à¸à¸£à¸£à¸à¸±à¸',
        name: 'à¹à¸à¸à¸à¸±à¸§à¸­à¸±à¸à¸©à¸£',
        strikethrough: 'à¸à¸µà¸à¸à¹à¸²',
        subscript: 'à¸à¸±à¸§à¸«à¹à¸­à¸¢',
        superscript: 'à¸à¸±à¸§à¸¢à¸',
        size: 'à¸à¸à¸²à¸à¸à¸±à¸§à¸­à¸±à¸à¸©à¸£'
      },
      image: {
        image: 'à¸£à¸¹à¸à¸ à¸²à¸',
        insert: 'à¹à¸à¸£à¸à¸£à¸¹à¸à¸ à¸²à¸',
        resizeFull: 'à¸à¸£à¸±à¸à¸à¸à¸²à¸à¹à¸à¹à¸²à¸à¸£à¸´à¸',
        resizeHalf: 'à¸à¸£à¸±à¸à¸à¸à¸²à¸à¸¥à¸ 50%',
        resizeQuarter: 'à¸à¸£à¸±à¸à¸à¸à¸²à¸à¸¥à¸ 25%',
        floatLeft: 'à¸à¸´à¸à¸à¹à¸²à¸¢',
        floatRight: 'à¸à¸´à¸à¸à¸§à¸²',
        floatNone: 'à¹à¸¡à¹à¸à¸±à¸à¸à¸³à¹à¸«à¸à¹à¸',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'à¸¥à¸²à¸à¸£à¸¹à¸à¸ à¸²à¸à¸à¸µà¹à¸à¹à¸­à¸à¸à¸²à¸£à¹à¸§à¹à¸à¸µà¹à¸à¸µà¹',
        dropImage: 'à¸§à¸²à¸à¸£à¸¹à¸à¸ à¸²à¸à¸«à¸£à¸·à¸­à¸à¹à¸­à¸à¸§à¸²à¸¡',
        selectFromFiles: 'à¹à¸¥à¸·à¸­à¸à¹à¸à¸¥à¹à¸£à¸¹à¸à¸ à¸²à¸',
        maximumFileSize: 'à¸à¸à¸²à¸à¹à¸à¸¥à¹à¹à¸«à¸à¹à¸ªà¸¸à¸',
        maximumFileSizeError: 'à¹à¸à¸¥à¹à¹à¸à¸´à¸à¸à¸à¸²à¸à¸à¸µà¹à¸à¸³à¸«à¸à¸',
        url: 'à¸à¸µà¹à¸­à¸¢à¸¹à¹ URL à¸à¸­à¸à¸£à¸¹à¸à¸ à¸²à¸',
        remove: 'à¸¥à¸à¸£à¸¹à¸à¸ à¸²à¸',
        original: 'Original'
      },
      video: {
        video: 'à¸§à¸µà¸à¸µà¹à¸­',
        videoLink: 'à¸¥à¸´à¸à¸à¹à¸à¸­à¸à¸§à¸µà¸à¸µà¹à¸­',
        insert: 'à¹à¸à¸£à¸à¸§à¸µà¸à¸µà¹à¸­',
        url: 'à¸à¸µà¹à¸­à¸¢à¸¹à¹ URL à¸à¸­à¸à¸§à¸µà¸à¸µà¹à¸­',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion à¸«à¸£à¸·à¸­ Youku)'
      },
      link: {
        link: 'à¸à¸±à¸§à¹à¸à¸·à¹à¸­à¸¡à¹à¸¢à¸',
        insert: 'à¹à¸à¸£à¸à¸à¸±à¸§à¹à¸à¸·à¹à¸­à¸¡à¹à¸¢à¸',
        unlink: 'à¸¢à¸à¹à¸¥à¸´à¸à¸à¸±à¸§à¹à¸à¸·à¹à¸­à¸¡à¹à¸¢à¸',
        edit: 'à¹à¸à¹à¹à¸',
        textToDisplay: 'à¸à¹à¸­à¸à¸§à¸²à¸¡à¸à¸µà¹à¹à¸«à¹à¹à¸ªà¸à¸',
        url: 'à¸à¸µà¹à¸­à¸¢à¸¹à¹à¹à¸§à¹à¸à¹à¸à¸à¹à¸à¸µà¹à¸à¹à¸­à¸à¸à¸²à¸£à¹à¸«à¹à¹à¸à¸·à¹à¸­à¸¡à¹à¸¢à¸à¹à¸à¸à¸¶à¸?',
        openInNewWindow: 'à¹à¸à¸´à¸à¹à¸à¸«à¸à¹à¸²à¸à¹à¸²à¸à¹à¸«à¸¡à¹'
      },
      table: {
        table: 'à¸à¸²à¸£à¸²à¸',
        addRowAbove: 'à¹à¸à¸´à¹à¸¡à¹à¸à¸§à¸à¹à¸²à¸à¸à¸',
        addRowBelow: 'à¹à¸à¸´à¹à¸¡à¹à¸à¸§à¸à¹à¸²à¸à¸¥à¹à¸²à¸',
        addColLeft: 'à¹à¸à¸´à¹à¸¡à¸à¸­à¸¥à¸±à¸¡à¸à¹à¸à¹à¸²à¸à¸à¹à¸²à¸¢',
        addColRight: 'à¹à¸à¸´à¹à¸¡à¸à¸­à¸¥à¸±à¸¡à¸à¹à¸à¹à¸²à¸à¸à¸§à¸²',
        delRow: 'à¸¥à¸à¹à¸à¸§',
        delCol: 'à¸¥à¸à¸à¸­à¸¥à¸±à¸¡à¸à¹',
        delTable: 'à¸¥à¸à¸à¸²à¸£à¸²à¸'
      },
      hr: {
        insert: 'à¹à¸à¸£à¸à¹à¸ªà¹à¸à¸à¸±à¹à¸'
      },
      style: {
        style: 'à¸£à¸¹à¸à¹à¸à¸',
        p: 'à¸à¸à¸à¸´',
        blockquote: 'à¸à¹à¸­à¸à¸§à¸²à¸¡',
        pre: 'à¹à¸à¹à¸',
        h1: 'à¸«à¸±à¸§à¸à¹à¸­ 1',
        h2: 'à¸«à¸±à¸§à¸à¹à¸­ 2',
        h3: 'à¸«à¸±à¸§à¸à¹à¸­ 3',
        h4: 'à¸«à¸±à¸§à¸à¹à¸­ 4',
        h5: 'à¸«à¸±à¸§à¸à¹à¸­ 5',
        h6: 'à¸«à¸±à¸§à¸à¹à¸­ 6'
      },
      lists: {
        unordered: 'à¸£à¸²à¸¢à¸à¸²à¸£à¹à¸à¸à¹à¸¡à¹à¸¡à¸µà¸¥à¸³à¸à¸±à¸',
        ordered: 'à¸£à¸²à¸¢à¸à¸²à¸£à¹à¸à¸à¸¡à¸µà¸¥à¸³à¸à¸±à¸'
      },
      options: {
        help: 'à¸à¹à¸§à¸¢à¹à¸«à¸¥à¸·à¸­',
        fullscreen: 'à¸à¸¢à¸²à¸¢à¹à¸à¹à¸¡à¸«à¸à¹à¸²à¸à¸­',
        codeview: 'à¸à¸­à¸£à¹à¸ªà¹à¸à¹à¸'
      },
      paragraph: {
        paragraph: 'à¸¢à¹à¸­à¸«à¸à¹à¸²',
        outdent: 'à¹à¸¢à¸·à¹à¸­à¸à¸à¹à¸²à¸¢',
        indent: 'à¹à¸¢à¸·à¹à¸­à¸à¸à¸§à¸²',
        left: 'à¸à¸±à¸à¸«à¸à¹à¸²à¸à¸´à¸à¸à¹à¸²à¸¢',
        center: 'à¸à¸±à¸à¸«à¸à¹à¸²à¸à¸¶à¹à¸à¸à¸¥à¸²à¸',
        right: 'à¸à¸±à¸à¸«à¸à¹à¸²à¸à¸´à¸à¸à¸§à¸²',
        justify: 'à¸à¸±à¸à¸à¸£à¸£à¸à¸±à¸à¹à¸ªà¸¡à¸­à¸à¸±à¸'
      },
      color: {
        recent: 'à¸ªà¸µà¸à¸µà¹à¹à¸à¹à¸¥à¹à¸²à¸ªà¸¸à¸',
        more: 'à¸ªà¸µà¸­à¸·à¹à¸à¹',
        background: 'à¸ªà¸µà¸à¸·à¹à¸à¸«à¸¥à¸±à¸',
        foreground: 'à¸ªà¸µà¸à¸·à¹à¸à¸«à¸à¹à¸²',
        transparent: 'à¹à¸à¸£à¹à¸à¹à¸ªà¸',
        setTransparent: 'à¸à¸±à¹à¸à¸à¹à¸²à¸à¸§à¸²à¸¡à¹à¸à¸£à¹à¸à¹à¸ªà¸',
        reset: 'à¸à¸·à¸à¸à¹à¸²',
        resetToDefault: 'à¸à¸·à¸à¸à¹à¸²à¸¡à¸²à¸à¸£à¸à¸²à¸'
      },
      shortcut: {
        shortcuts: 'à¹à¸à¹à¸à¸¥à¸±à¸',
        close: 'à¸à¸´à¸',
        textFormatting: 'à¸à¸²à¸£à¸à¸±à¸à¸£à¸¹à¸à¹à¸à¸à¸à¹à¸­à¸à¸§à¸²à¸¡',
        action: 'à¸à¸²à¸£à¸à¸£à¸°à¸à¸³',
        paragraphFormatting: 'à¸à¸²à¸£à¸à¸±à¸à¸£à¸¹à¸à¹à¸à¸à¸¢à¹à¸­à¸«à¸à¹à¸²',
        documentStyle: 'à¸£à¸¹à¸à¹à¸à¸à¸à¸­à¸à¹à¸­à¸à¸ªà¸²à¸£',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Insert Paragraph',
        'undo': 'Undoes the last command',
        'redo': 'Redoes the last command',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'à¸à¸³à¸à¸±à¸§à¸«à¸à¸²',
        'italic': 'à¸à¸³à¸à¸±à¸§à¹à¸­à¸µà¸¢à¸',
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
        'formatH1': 'à¹à¸à¸¥à¸µà¹à¸¢à¸à¸£à¸¹à¸à¹à¸à¸à¸à¸¥à¹à¸­à¸à¸à¸±à¸à¸à¸¸à¸à¸±à¸à¹à¸à¹à¸ H1',
        'formatH2': 'à¹à¸à¸¥à¸µà¹à¸¢à¸à¸£à¸¹à¸à¹à¸à¸à¸à¸¥à¹à¸­à¸à¸à¸±à¸à¸à¸¸à¸à¸±à¸à¹à¸à¹à¸ H2',
        'formatH3': 'à¹à¸à¸¥à¸µà¹à¸¢à¸à¸£à¸¹à¸à¹à¸à¸à¸à¸¥à¹à¸­à¸à¸à¸±à¸à¸à¸¸à¸à¸±à¸à¹à¸à¹à¸ H3',
        'formatH4': 'à¹à¸à¸¥à¸µà¹à¸¢à¸à¸£à¸¹à¸à¹à¸à¸à¸à¸¥à¹à¸­à¸à¸à¸±à¸à¸à¸¸à¸à¸±à¸à¹à¸à¹à¸ H4',
        'formatH5': 'à¹à¸à¸¥à¸µà¹à¸¢à¸à¸£à¸¹à¸à¹à¸à¸à¸à¸¥à¹à¸­à¸à¸à¸±à¸à¸à¸¸à¸à¸±à¸à¹à¸à¹à¸ H5',
        'formatH6': 'à¹à¸à¸¥à¸µà¹à¸¢à¸à¸£à¸¹à¸à¹à¸à¸à¸à¸¥à¹à¸­à¸à¸à¸±à¸à¸à¸¸à¸à¸±à¸à¹à¸à¹à¸ H6',
        'insertHorizontalRule': 'Insert horizontal rule',
        'linkDialog.show': 'à¹à¸à¸´à¸à¸«à¸à¹à¸²à¹à¸à¹à¹à¸ Link'
      },
      history: {
        undo: 'à¸¢à¸à¹à¸¥à¸´à¸à¸à¸²à¸£à¸à¸£à¸°à¸à¸³',
        redo: 'à¸à¸³à¸à¹à¸³à¸à¸²à¸£à¸à¸£à¸°à¸à¸³'
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