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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 43:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'ta-IN': {
      font: {
        bold: 'à®¤à®à®¿à®¤à¯à®¤',
        italic: 'à®à®¾à®¯à¯à®µà¯',
        underline: 'à®à®à®¿à®à¯à®à¯à®¾à®à¯',
        clear: 'à®¨à¯à®à¯à®à¯',
        height: 'à®µà®°à®¿  à®à®¯à®°à®®à¯',
        name: 'à®à®´à¯à®¤à¯à®¤à¯à®°à¯ à®ªà¯à®¯à®°à¯',
        strikethrough: 'à®à¯à®±à¯à®à¯à®à¯à®à¯ à®à¯à®¾à®à¯',
        size: 'à®à®´à¯à®¤à¯à®¤à¯à®°à¯ à®à®³à®µà¯',
        superscript: 'à®®à¯à®²à¯ à®à®à¯à®à¯',
        subscript: 'à®à¯à®´à¯ à®à®à¯à®à¯'
      },
      image: {
        image: 'à®ªà®à®®à¯',
        insert: 'à®ªà®à®¤à¯à®¤à¯ à®à¯à®°à¯à®à¯',
        resizeFull: 'à®®à¯à®´à¯ à®à®³à®µà¯',
        resizeHalf: 'à®à®°à¯ à®à®³à®µà¯',
        resizeQuarter: 'à®à®¾à®²à¯ à®à®³à®µà¯',
        floatLeft: 'à®à®à®ªà¯à®ªà®à¯à®à®®à®¾à® à®µà¯',
        floatRight: 'à®µà®²à®ªà¯à®ªà®à¯à®à®®à®¾à® à®µà¯',
        floatNone: 'à®à®¯à®²à¯à®ªà¯à®¨à®¿à®²à¯à®¯à®¿à®²à¯ à®µà¯',
        shapeRounded: 'à®µà®à¯à®à®®à®¾à®© à®µà®à®¿à®µà®®à¯',
        shapeCircle: 'à®µà®à¯à® à®µà®à®¿à®µà®®à¯',
        shapeThumbnail: 'à®à®¿à®±à¯ à®µà®à®¿à®µà®®à¯',
        shapeNone: 'à®µà®à®¿à®µà®¤à¯à®¤à¯ à®¨à¯à®à¯à®à¯',
        dragImageHere: 'à®ªà®à®¤à¯à®¤à¯ à®à®à¯à®à¯ à®à®´à¯à®¤à¯à®¤à¯à®µà¯',
        dropImage: 'à®ªà®à®¤à¯à®¤à¯ à®µà®¿à®à¯',
        selectFromFiles: 'à®à¯à®¾à®ªà¯à®ªà¯à®à®³à¯ à®¤à¯à®°à¯à®µà¯ à®à¯à®¯à¯',
        maximumFileSize: 'à®à®¤à®¿à®à®ªà®à¯à® à®à¯à®¾à®ªà¯à®ªà¯ à®à®³à®µà¯',
        maximumFileSizeError: 'à®à¯à®¾à®ªà¯à®ªà¯ à®à®¤à®¿à®à®ªà®à¯à® à®à®³à®µà¯ à®®à¯à®±à®¿à®µà®¿à®à¯à®à®¤à¯',
        url: 'à®à®£à¯à®¯à®¤à®³ à®®à¯à®à®µà®°à®¿',
        remove: 'à®ªà®à®¤à¯à®¤à¯ à®¨à¯à®à¯à®à¯',
        original: 'Original'
      },
      video: {
        video: 'à®à®¾à®£à¯à®¾à®³à®¿',
        videoLink: 'à®à®¾à®£à¯à®¾à®³à®¿ à®à®£à¯à®ªà¯à®ªà¯',
        insert: 'à®à®¾à®£à¯à®³à®¿à®¯à¯ à®à¯à®°à¯à®à¯',
        url: 'à®à®£à¯à®¯à®¤à®³ à®®à¯à®à®µà®°à®¿',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
      },
      link: {
        link: 'à®à®£à¯à®ªà¯à®ªà¯',
        insert: 'à®à®£à¯à®ªà¯à®ªà¯ à®à¯à®°à¯à®à¯',
        unlink: 'à®à®£à¯à®ªà¯à®ªà¯ à®¨à¯à®à¯à®à¯',
        edit: 'à®à®£à¯à®ªà¯à®ªà¯ à®¤à¯à®¾à®à¯',
        textToDisplay: 'à®à®¾à®à¯à®à®¿ à®µà®¾à®à®à®®à¯',
        url: 'à®à®£à¯à®¯à®¤à®³ à®®à¯à®à®µà®°à®¿',
        openInNewWindow: 'à®ªà¯à®¤à®¿à®¯ à®à®¾à®³à®°à®¤à¯à®¤à®¿à®²à¯ à®¤à®¿à®±à®à¯à®'
      },
      table: {
        table: 'à®à®à¯à®à®µà®£à¯',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'à®à®¿à®à¯à®®à®à¯à® à®à¯à®¾à®à¯'
      },
      style: {
        style: 'à®¤à¯à®à¯à®ªà¯à®ªà¯',
        p: 'à®ªà®¤à¯à®¤à®¿',
        blockquote: 'à®®à¯à®±à¯à®à¯à®¾à®³à¯',
        pre: 'à®à¯à®±à®¿à®¯à¯à®à¯',
        h1: 'à®¤à®²à¯à®ªà¯à®ªà¯ 1',
        h2: 'à®¤à®²à¯à®ªà¯à®ªà¯ 2',
        h3: 'à®¤à®²à¯à®ªà¯à®ªà¯ 3',
        h4: 'à®¤à®²à¯à®ªà¯à®ªà¯ 4',
        h5: 'à®¤à®²à¯à®ªà¯à®ªà¯ 5',
        h6: 'à®¤à®²à¯à®ªà¯à®ªà¯ 6'
      },
      lists: {
        unordered: 'à®µà®°à®¿à®à¯à®¯à®¿à®à®¾à®¤',
        ordered: 'à®µà®°à®¿à®à¯à®¯à®¿à®à¯à®'
      },
      options: {
        help: 'à®à®¤à®µà®¿',
        fullscreen: 'à®®à¯à®´à¯à®¤à¯à®¤à®¿à®°à¯',
        codeview: 'à®¨à®¿à®°à®²à®¾à®à¯à® à®à®¾à®à¯à®à®¿'
      },
      paragraph: {
        paragraph: 'à®ªà®¤à¯à®¤à®¿',
        outdent: 'à®µà¯à®³à®¿à®¤à¯à®¤à®³à¯à®³à¯',
        indent: 'à®à®³à¯à®³à¯ à®¤à®³à¯à®³à¯',
        left: 'à®à®à®¤à¯ à®à¯à®°à®®à¯à®ªà¯à®ªà¯',
        center: 'à®¨à®à¯ à®à¯à®°à®®à¯à®ªà¯à®ªà¯',
        right: 'à®µà®²à®¤à¯ à®à¯à®°à®®à¯à®ªà¯à®ªà¯',
        justify: 'à®à®°à¯à®ªà¯à®± à®à¯à®°à®®à¯à®ªà¯à®ªà¯'
      },
      color: {
        recent: 'à®à®£à¯à®®à¯ à®¨à®¿à®±à®®à¯',
        more: 'à®®à¯à®²à¯à®®à¯',
        background: 'à®ªà®¿à®©à¯à®ªà¯à®² à®¨à®¿à®±à®®à¯',
        foreground: 'à®®à¯à®©à¯à®ªà¯à®± à®¨à®¿à®±à®®à¯',
        transparent: 'à®¤à¯à®³à®¿à®®à¯à®¯à®¾à®©',
        setTransparent: 'à®¤à¯à®³à®¿à®®à¯à®¯à®¾à®à¯à®à¯',
        reset: 'à®®à¯à®à¯à®à®®à¯à®à¯à®',
        resetToDefault: 'à®à®¯à®²à¯à®ªà¯à®¨à®¿à®²à¯à®à¯à®à¯ à®®à¯à®à¯à®à®®à¯'
      },
      shortcut: {
        shortcuts: 'à®à¯à®±à¯à®à¯à®à¯à®µà®´à®¿',
        close: 'à®®à¯à®à¯',
        textFormatting: 'à®à®´à¯à®¤à¯à®¤à¯ à®µà®à®¿à®µà®®à¯à®ªà¯à®ªà¯',
        action: 'à®à¯à®¯à®²à¯à®ªà®à¯à®¤à¯à®¤à¯',
        paragraphFormatting: 'à®ªà®¤à¯à®¤à®¿ à®µà®à®¿à®µà®®à¯à®ªà¯à®ªà¯',
        documentStyle: 'à®à®µà®£ à®ªà®¾à®£à®¿',
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
        undo: 'à®®à¯à®³à®®à¯',
        redo: 'à®®à¯à®£à¯à®à¯à®®à¯'
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