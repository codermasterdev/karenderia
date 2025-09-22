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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'he-IL': {
      font: {
        bold: '×××××©',
        italic: '× ×××',
        underline: '×§× ×ª××ª××',
        clear: '× ×§× ×¢××¦××',
        height: '××××',
        name: '×××¤×',
        strikethrough: '×§× ×××¦×',
        subscript: '××ª× ×ª××ª×',
        superscript: '××ª× ×¢×××',
        size: '×××× ×××¤×'
      },
      image: {
        image: '×ª××× ×',
        insert: '×××¡×£ ×ª××× ×',
        resizeFull: '×××× ×××',
        resizeHalf: '×××§××× ×××¦×',
        resizeQuarter: '×××§××× ××¨××¢',
        floatLeft: '×××©××¨ ××©×××',
        floatRight: '×××©××¨ ×××××',
        floatNone: '××©×¨',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: '××¨××¨ ×ª××× × ××××',
        dropImage: 'Drop image or Text',
        selectFromFiles: '×××¨ ××ª×× ×§××¦××',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: '× ×ª×× ××ª××× ×',
        remove: '××¡×¨ ×ª××× ×',
        original: 'Original'
      },
      video: {
        video: '×¡×¨×××',
        videoLink: '×§××©××¨ ××¡×¨×××',
        insert: '×××¡×£ ×¡×¨×××',
        url: '×§××©××¨ ××¡×¨×××',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion ×× Youku)'
      },
      link: {
        link: '×§××©××¨',
        insert: '×××¡×£ ×§××©××¨',
        unlink: '××¡×¨ ×§××©××¨',
        edit: '×¢×¨××',
        textToDisplay: '××§×¡× ×××¦××',
        url: '×§××©××¨',
        openInNewWindow: '×¤×ª× ××××× ×××©'
      },
      table: {
        table: '××××',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: '×××¡×£ ×§×'
      },
      style: {
        style: '×¢××¦××',
        p: '××§×¡× ×¨×××',
        blockquote: '×¦××××',
        pre: '×§××',
        h1: '×××ª×¨×ª 1',
        h2: '×××ª×¨×ª 2',
        h3: '×××ª×¨×ª 3',
        h4: '×××ª×¨×ª 4',
        h5: '×××ª×¨×ª 5',
        h6: '×××ª×¨×ª 6'
      },
      lists: {
        unordered: '×¨×©×××ª ×ª××××××',
        ordered: '×¨×©××× ××××¡×¤×¨×ª'
      },
      options: {
        help: '×¢××¨×',
        fullscreen: '××¡× ×××',
        codeview: '×ª×¦×××ª ×§××'
      },
      paragraph: {
        paragraph: '×¤×¡×§×',
        outdent: '××§×× ×× ××¡×',
        indent: '×××× ×× ××¡×',
        left: '×××©××¨ ××©×××',
        center: '×××©××¨ ×××¨××',
        right: '×××©××¨ ×××××',
        justify: '××××©×¨'
      },
      color: {
        recent: '×¦××¢ ××§×¡× ×××¨××',
        more: '×¢×× ×¦××¢××',
        background: '×¦××¢ ×¨×§×¢',
        foreground: '×¦××¢ ××§×¡×',
        transparent: '×©×§××£',
        setTransparent: '×§××¢ ××©×§××£',
        reset: '×××¤××¡',
        resetToDefault: '××¤×¡ ×××¨××¨×ª ××××'
      },
      shortcut: {
        shortcuts: '×§××¦××¨× ××§×××ª',
        close: '×¡×××¨',
        textFormatting: '×¢××¦×× ×××§×¡×',
        action: '×¤×¢×××',
        paragraphFormatting: '×¡×× ×× ××ª ×¤×¡×§×',
        documentStyle: '×¢××¦×× ×××¡××',
        extraKeys: '×§××¦××¨×× × ××¡×¤××'
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
        undo: '××× ×¤×¢×××',
        redo: '××¦×¢ ×©××'
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