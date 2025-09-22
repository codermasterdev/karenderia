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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'vi-VN': {
      font: {
        bold: 'In Äáº­m',
        italic: 'In NghiÃªng',
        underline: 'Gáº¡ch dÆ°á»i',
        clear: 'Bá» Äá»nh dáº¡ng',
        height: 'Chiá»u cao dÃ²ng',
        name: 'PhÃ´ng chá»¯',
        strikethrough: 'Gáº¡ch ngang',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Cá»¡ chá»¯'
      },
      image: {
        image: 'HÃ¬nh áº£nh',
        insert: 'ChÃ¨n',
        resizeFull: '100%',
        resizeHalf: '50%',
        resizeQuarter: '25%',
        floatLeft: 'TrÃ´i vá» trÃ¡i',
        floatRight: 'TrÃ´i vá» pháº£i',
        floatNone: 'KhÃ´ng trÃ´i',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Tháº£ áº¢nh á» vÃ¹ng nÃ y',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Chá»n tá»« File',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'URL',
        remove: 'XÃ³a',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Link Äáº¿n Video',
        insert: 'ChÃ¨n Video',
        url: 'URL',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion vÃ  Youku)'
      },
      link: {
        link: 'Link',
        insert: 'ChÃ¨n Link',
        unlink: 'Gá»¡ Link',
        edit: 'Sá»­a',
        textToDisplay: 'VÄn báº£n hiá»n thá»',
        url: 'URL',
        openInNewWindow: 'Má» á» Cá»­a sá» má»i'
      },
      table: {
        table: 'Báº£ng',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'ChÃ¨n'
      },
      style: {
        style: 'Kiá»u chá»¯',
        p: 'Chá»¯ thÆ°á»ng',
        blockquote: 'Äoáº¡n trÃ­ch',
        pre: 'MÃ£ Code',
        h1: 'H1',
        h2: 'H2',
        h3: 'H3',
        h4: 'H4',
        h5: 'H5',
        h6: 'H6'
      },
      lists: {
        unordered: 'Liá»t kÃª danh sÃ¡ch',
        ordered: 'Liá»t kÃª theo thá»© tá»±'
      },
      options: {
        help: 'Trá»£ giÃºp',
        fullscreen: 'ToÃ n MÃ n hÃ¬nh',
        codeview: 'Xem Code'
      },
      paragraph: {
        paragraph: 'Canh lá»',
        outdent: 'Dá»ch sang trÃ¡i',
        indent: 'Dá»ch sang pháº£i',
        left: 'Canh trÃ¡i',
        center: 'Canh giá»¯a',
        right: 'Canh pháº£i',
        justify: 'Canh Äá»u'
      },
      color: {
        recent: 'MÃ u chá»¯',
        more: 'Má» rá»ng',
        background: 'MÃ u ná»n',
        foreground: 'MÃ u chá»¯',
        transparent: 'trong suá»t',
        setTransparent: 'Ná»n trong suá»t',
        reset: 'Thiáº¿t láº­p láº¡i',
        resetToDefault: 'Trá» láº¡i ban Äáº§u'
      },
      shortcut: {
        shortcuts: 'PhÃ­m táº¯t',
        close: 'ÄÃ³ng',
        textFormatting: 'Äá»nh dáº¡ng VÄn báº£n',
        action: 'HÃ nh Äá»ng',
        paragraphFormatting: 'Äá»nh dáº¡ng',
        documentStyle: 'Kiá»u vÄn báº£n',
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
        undo: 'LÃ¹i láº¡i',
        redo: 'LÃ m láº¡i'
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