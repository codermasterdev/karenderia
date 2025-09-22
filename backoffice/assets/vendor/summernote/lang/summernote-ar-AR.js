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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'ar-AR': {
      font: {
        bold: 'Ø¹Ø±ÙØ¶',
        italic: 'ÙØ§Ø¦Ù',
        underline: 'ØªØ­ØªÙ Ø®Ø·',
        clear: 'ÙØ³Ø­ Ø§ÙØªÙØ³ÙÙ',
        height: 'Ø¥Ø±ØªÙØ§Ø¹ Ø§ÙØ³Ø·Ø±',
        name: 'Ø§ÙØ®Ø·',
        strikethrough: 'ÙÙ ÙØ³Ø·Ù Ø®Ø·',
        subscript: 'ÙØ®Ø·ÙØ·Ø©',
        superscript: 'Ø­Ø±Ù ÙÙÙÙ',
        size: 'Ø§ÙØ­Ø¬Ù'
      },
      image: {
        image: 'ØµÙØ±Ø©',
        insert: 'Ø¥Ø¶Ø§ÙØ© ØµÙØ±Ø©',
        resizeFull: 'Ø§ÙØ­Ø¬Ù Ø¨Ø§ÙÙØ§ÙÙ',
        resizeHalf: 'ØªØµØºÙØ± ÙÙÙØµÙ',
        resizeQuarter: 'ØªØµØºÙØ± ÙÙØ±Ø¨Ø¹',
        floatLeft: 'ØªØ·ÙÙØ± ÙÙÙØ³Ø§Ø±',
        floatRight: 'ØªØ·ÙÙØ± ÙÙÙÙÙÙ',
        floatNone: 'Ø«Ø§Ø¨ØªÙ',
        shapeRounded: 'Ø§ÙØ´ÙÙ: ØªÙØ±ÙØ¨',
        shapeCircle: 'Ø§ÙØ´ÙÙ: Ø¯Ø§Ø¦Ø±Ø©',
        shapeThumbnail: 'Ø§ÙØ´ÙÙ: ØµÙØ±Ø© ÙØµØºØ±Ø©',
        shapeNone: 'Ø§ÙØ´ÙÙ: ÙØ§ Ø´ÙØ¡',
        dragImageHere: 'Ø¥Ø¯Ø±Ø¬ Ø§ÙØµÙØ±Ø© ÙÙØ§',
        dropImage: 'Ø¥Ø³ÙØ§Ø· ØµÙØ±Ø© Ø£Ù ÙØµ',
        selectFromFiles: 'Ø­Ø¯Ø¯ ÙÙÙ',
        maximumFileSize: 'Ø§ÙØ­Ø¯ Ø§ÙØ£ÙØµÙ ÙØ­Ø¬Ù Ø§ÙÙÙÙ',
        maximumFileSizeError: 'ØªÙ ØªØ¬Ø§ÙØ² Ø§ÙØ­Ø¯ Ø§ÙØ£ÙØµÙ ÙØ­Ø¬Ù Ø§ÙÙÙÙ',
        url: 'Ø±Ø§Ø¨Ø· Ø§ÙØµÙØ±Ø©',
        remove: 'Ø­Ø°Ù Ø§ÙØµÙØ±Ø©',
        original: 'Original'
      },
      video: {
        video: 'ÙÙØ¯ÙÙ',
        videoLink: 'Ø±Ø§Ø¨Ø· Ø§ÙÙÙØ¯ÙÙ',
        insert: 'Ø¥Ø¯Ø±Ø§Ø¬ Ø§ÙÙÙØ¯ÙÙ',
        url: 'Ø±Ø§Ø¨Ø· Ø§ÙÙÙØ¯ÙÙ',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion ou Youku)'
      },
      link: {
        link: 'Ø±Ø§Ø¨Ø·',
        insert: 'Ø¥Ø¯Ø±Ø§Ø¬',
        unlink: 'Ø­Ø°Ù Ø§ÙØ±Ø§Ø¨Ø·',
        edit: 'ØªØ¹Ø¯ÙÙ',
        textToDisplay: 'Ø§ÙÙØµ',
        url: 'ÙØ³Ø§Ø± Ø§ÙØ±Ø§Ø¨Ø·',
        openInNewWindow: 'ÙØªØ­ ÙÙ ÙØ§ÙØ°Ø© Ø¬Ø¯ÙØ¯Ø©'
      },
      table: {
        table: 'Ø¬Ø¯ÙÙ',
        addRowAbove: 'Ø¥Ø¶Ø§ÙØ© Ø³Ø·Ø± Ø£Ø¹ÙØ§Ù',
        addRowBelow: 'Ø¥Ø¶Ø§ÙØ© Ø³Ø·Ø± Ø£Ø¯ÙØ§Ù',
        addColLeft: 'Ø¥Ø¶Ø§ÙØ© Ø¹ÙÙØ¯ ÙØ¨ÙÙ',
        addColRight: 'Ø¥Ø¶Ø§ÙØ© Ø¹ÙÙØ¯ Ø¨Ø¹Ø¯Ù',
        delRow: 'Ø­Ø°Ù Ø³Ø·Ø±',
        delCol: 'Ø­Ø°Ù Ø¹ÙÙØ¯',
        delTable: 'Ø­Ø°Ù Ø§ÙØ¬Ø¯ÙÙ'
      },
      hr: {
        insert: 'Ø¥Ø¯Ø±Ø§Ø¬ Ø®Ø· Ø£ÙÙÙ'
      },
      style: {
        style: 'ØªÙØ³ÙÙ',
        p: 'Ø¹Ø§Ø¯Ù',
        blockquote: 'Ø¥ÙØªØ¨Ø§Ø³',
        pre: 'Ø´ÙÙØ±Ø©',
        h1: 'Ø¹ÙÙØ§Ù Ø±Ø¦ÙØ³Ù 1',
        h2: 'Ø¹ÙÙØ§Ù Ø±Ø¦ÙØ³Ù 2',
        h3: 'Ø¹ÙÙØ§Ù Ø±Ø¦ÙØ³Ù 3',
        h4: 'Ø¹ÙÙØ§Ù Ø±Ø¦ÙØ³Ù 4',
        h5: 'Ø¹ÙÙØ§Ù Ø±Ø¦ÙØ³Ù 5',
        h6: 'Ø¹ÙÙØ§Ù Ø±Ø¦ÙØ³Ù 6'
      },
      lists: {
        unordered: 'ÙØ§Ø¦ÙØ© ÙÙÙÙØ·Ø©',
        ordered: 'ÙØ§Ø¦ÙØ© ÙÙØ±ÙÙØ©'
      },
      options: {
        help: 'ÙØ³Ø§Ø¹Ø¯Ø©',
        fullscreen: 'Ø­Ø¬Ù Ø§ÙØ´Ø§Ø´Ø© Ø¨Ø§ÙÙØ§ÙÙ',
        codeview: 'Ø´ÙÙØ±Ø© Ø§ÙÙØµØ¯Ø±'
      },
      paragraph: {
        paragraph: 'ÙÙØ±Ø©',
        outdent: 'ÙØ­Ø§Ø°Ø§Ø© ÙÙØ®Ø§Ø±Ø¬',
        indent: 'ÙØ­Ø§Ø°Ø§Ø© ÙÙØ¯Ø§Ø®Ù',
        left: 'ÙØ­Ø§Ø°Ø§Ø© ÙÙÙØ³Ø§Ø±',
        center: 'ØªÙØ³ÙØ·',
        right: 'ÙØ­Ø§Ø°Ø§Ø© ÙÙÙÙÙÙ',
        justify: 'ÙÙØ¦ Ø§ÙØ³Ø·Ø±'
      },
      color: {
        recent: 'ØªÙ Ø¥Ø³ØªØ®Ø¯Ø§ÙÙ',
        more: 'Ø§ÙÙØ²ÙØ¯',
        background: 'ÙÙÙ Ø§ÙØ®ÙÙÙØ©',
        foreground: 'ÙÙÙ Ø§ÙÙØµ',
        transparent: 'Ø´ÙØ§Ù',
        setTransparent: 'Ø¨Ø¯ÙÙ Ø®ÙÙÙØ©',
        reset: 'Ø¥Ø¹Ø§Ø¯Ø© Ø§ÙØ¶Ø¨Ø·',
        resetToDefault: 'Ø¥Ø¹Ø§Ø¯Ø© Ø§ÙØ¶Ø¨Ø·',
        cpSelect: 'Ø§Ø®ØªØ§Ø±'
      },
      shortcut: {
        shortcuts: 'Ø¥Ø®ØªØµØ§Ø±Ø§Øª',
        close: 'ØºÙÙ',
        textFormatting: 'ØªÙØ³ÙÙ Ø§ÙÙØµ',
        action: 'Action',
        paragraphFormatting: 'ØªÙØ³ÙÙ Ø§ÙÙÙØ±Ø©',
        documentStyle: 'ØªÙØ³ÙÙ Ø§ÙÙØ³ØªÙØ¯',
        extraKeys: 'Ø£Ø²Ø±Ø§Ø± Ø¥Ø¶Ø§ÙÙØ©'
      },
      help: {
        'insertParagraph': 'Ø¥Ø¯Ø±Ø§Ø¬ ÙÙØ±Ø©',
        'undo': 'ØªØ±Ø§Ø¬Ø¹ Ø¹Ù Ø¢Ø®Ø± Ø£ÙØ±',
        'redo': 'Ø¥Ø¹Ø§Ø¯Ø© ØªÙÙÙØ° Ø¢Ø®Ø± Ø£ÙØ±',
        'tab': 'Ø¥Ø²Ø§Ø­Ø© (ØªØ§Ø¨)',
        'untab': 'Ø³Ø­Ø¨ Ø§ÙÙØµ Ø¨Ø§ØªØ¬Ø§Ù Ø§ÙØ¨Ø¯Ø§ÙØ©',
        'bold': 'ØªÙØ³ÙÙ Ø¹Ø±ÙØ¶',
        'italic': 'ØªÙØ³ÙÙ ÙØ§Ø¦Ù',
        'underline': 'ØªÙØ³ÙÙ Ø®Ø· Ø³ÙÙÙ',
        'strikethrough': 'ØªÙØ³ÙÙ Ø®Ø· ÙØªÙØ³Ø· ÙÙÙØµ',
        'removeFormat': 'Ø¥Ø²Ø§ÙØ© Ø§ÙØªÙØ³ÙÙØ§Øª',
        'justifyLeft': 'ÙØ­Ø§Ø°Ø§Ø© ÙÙÙØ³Ø§Ø±',
        'justifyCenter': 'ÙØ­Ø§Ø°Ø§Ø© ØªÙØ³ÙØ·',
        'justifyRight': 'ÙØ­Ø§Ø°Ø§Ø© ÙÙÙÙÙÙ',
        'justifyFull': 'ÙØ­Ø§Ø°Ø§Ø© ÙØ§ÙÙØ©',
        'insertUnorderedList': 'ÙØ§Ø¦ÙØ© ÙÙÙÙØ·Ø©',
        'insertOrderedList': 'ÙØ§Ø¦ÙØ© ÙØ±ÙÙÙØ©',
        'outdent': 'Ø¥Ø²Ø§Ø­Ø© ÙÙØ£ÙØ§Ù Ø¹ÙÙ Ø§ÙÙÙØ±Ø© Ø§ÙØ­Ø§ÙÙØ©',
        'indent': 'Ø¥Ø²Ø§Ø­Ø© ÙÙØ®ÙÙ Ø¹ÙÙ Ø§ÙÙÙØ±Ø© Ø§ÙØ­Ø§ÙÙØ©',
        'formatPara': 'ØªØºÙÙØ± Ø§ÙØªÙØ³ÙÙ ÙÙÙØªÙØ© Ø§ÙØ­Ø§ÙÙØ© Ø¥ÙÙ ÙÙØ±Ø©',
        'formatH1': 'ØªØºÙÙØ± Ø§ÙØªÙØ³ÙÙ ÙÙÙØªÙØ© Ø§ÙØ­Ø§ÙÙØ© Ø¥ÙÙ ØªØ±ÙÙØ³Ø© 1',
        'formatH2': 'ØªØºÙÙØ± Ø§ÙØªÙØ³ÙÙ ÙÙÙØªÙØ© Ø§ÙØ­Ø§ÙÙØ© Ø¥ÙÙ ØªØ±ÙÙØ³Ø© 2',
        'formatH3': 'ØªØºÙÙØ± Ø§ÙØªÙØ³ÙÙ ÙÙÙØªÙØ© Ø§ÙØ­Ø§ÙÙØ© Ø¥ÙÙ ØªØ±ÙÙØ³Ø© 3',
        'formatH4': 'ØªØºÙÙØ± Ø§ÙØªÙØ³ÙÙ ÙÙÙØªÙØ© Ø§ÙØ­Ø§ÙÙØ© Ø¥ÙÙ ØªØ±ÙÙØ³Ø© 4',
        'formatH5': 'ØªØºÙÙØ± Ø§ÙØªÙØ³ÙÙ ÙÙÙØªÙØ© Ø§ÙØ­Ø§ÙÙØ© Ø¥ÙÙ ØªØ±ÙÙØ³Ø© 5',
        'formatH6': 'ØªØºÙÙØ± Ø§ÙØªÙØ³ÙÙ ÙÙÙØªÙØ© Ø§ÙØ­Ø§ÙÙØ© Ø¥ÙÙ ØªØ±ÙÙØ³Ø© 6',
        'insertHorizontalRule': 'Ø¥Ø¯Ø±Ø§Ø¬ Ø®Ø· Ø£ÙÙÙ',
        'linkDialog.show': 'Ø¥Ø¸ÙØ§Ø± Ø®ØµØ§Ø¦Øµ Ø§ÙØ±Ø§Ø¨Ø·'
      },
      history: {
        undo: 'ØªØ±Ø§Ø¬Ø¹',
        redo: 'Ø¥Ø¹Ø§Ø¯Ø©'
      },
      specialChar: {
        specialChar: 'ÙØ­Ø§Ø±Ù Ø®Ø§ØµØ©',
        select: 'Ø§Ø®ØªØ± Ø§ÙÙØ­Ø±Ù Ø§ÙØ®Ø§Øµ'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});