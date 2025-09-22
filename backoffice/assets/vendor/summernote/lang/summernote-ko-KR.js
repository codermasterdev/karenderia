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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'ko-KR': {
      font: {
        bold: 'êµµê²',
        italic: 'ê¸°ì¸ìê¼´',
        underline: 'ë°ì¤',
        clear: 'ìì ì§ì°ê¸°',
        height: 'ì¤ ê°ê²©',
        name: 'ê¸ê¼´',
        superscript: 'ì ì²¨ì',
        subscript: 'ìë ì²¨ì',
        strikethrough: 'ì·¨ìì ',
        size: 'ê¸ì í¬ê¸°'
      },
      image: {
        image: 'ê·¸ë¦¼',
        insert: 'ê·¸ë¦¼ ì½ì',
        resizeFull: '100% í¬ê¸°ë¡ ë³ê²½',
        resizeHalf: '50% í¬ê¸°ë¡ ë³ê²½',
        resizeQuarter: '25% í¬ê¸°ë¡ ë³ê²½',
        resizeNone: 'ìë³¸ í¬ê¸°',
        floatLeft: 'ì¼ìª½ ì ë ¬',
        floatRight: 'ì¤ë¥¸ìª½ ì ë ¬',
        floatNone: 'ì ë ¬íì§ ìì',
        shapeRounded: 'ì¤íì¼: ë¥ê·¼ ëª¨ìë¦¬',
        shapeCircle: 'ì¤íì¼: ìí',
        shapeThumbnail: 'ì¤íì¼: ì¡ì',
        shapeNone: 'ì¤íì¼: ìì',
        dragImageHere: 'íì¤í¸ í¹ì ì¬ì§ì ì´ê³³ì¼ë¡ ëì´ì¤ì¸ì',
        dropImage: 'íì¤í¸ í¹ì ì¬ì§ì ë´ë ¤ëì¼ì¸ì',
        selectFromFiles: 'íì¼ ì í',
        maximumFileSize: 'ìµë íì¼ í¬ê¸°',
        maximumFileSizeError: 'ìµë íì¼ í¬ê¸°ë¥¼ ì´ê³¼íìµëë¤.',
        url: 'ì¬ì§ URL',
        remove: 'ì¬ì§ ì­ì ',
        original: 'ìë³¸'
      },
      video: {
        video: 'ëìì',
        videoLink: 'ëìì ë§í¬',
        insert: 'ëìì ì½ì',
        url: 'ëìì URL',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion, Youku ì¬ì© ê°ë¥)'
      },
      link: {
        link: 'ë§í¬',
        insert: 'ë§í¬ ì½ì',
        unlink: 'ë§í¬ ì­ì ',
        edit: 'ìì ',
        textToDisplay: 'ë§í¬ì íìí  ë´ì©',
        url: 'ì´ëí  URL',
        openInNewWindow: 'ìì°½ì¼ë¡ ì´ê¸°'
      },
      table: {
        table: 'í',
        addRowAbove: 'ìì í ì½ì',
        addRowBelow: 'ìëì í ì½ì',
        addColLeft: 'ì¼ìª½ì ì´ ì½ì',
        addColRight: 'ì¤ë¥¸ìª½ì ì´ ì½ì',
        delRow: 'í ì§ì°ê¸°',
        delCol: 'ì´ ì§ì°ê¸°',
        delTable: 'í ì­ì '
      },
      hr: {
        insert: 'êµ¬ë¶ì  ì½ì'
      },
      style: {
        style: 'ì¤íì¼',
        p: 'ë³¸ë¬¸',
        blockquote: 'ì¸ì©êµ¬',
        pre: 'ì½ë',
        h1: 'ì ëª© 1',
        h2: 'ì ëª© 2',
        h3: 'ì ëª© 3',
        h4: 'ì ëª© 4',
        h5: 'ì ëª© 5',
        h6: 'ì ëª© 6'
      },
      lists: {
        unordered: 'ê¸ë¨¸ë¦¬ ê¸°í¸',
        ordered: 'ë²í¸ ë§¤ê¸°ê¸°'
      },
      options: {
        help: 'ëìë§',
        fullscreen: 'ì ì²´ íë©´',
        codeview: 'ì½ë ë³´ê¸°'
      },
      paragraph: {
        paragraph: 'ë¬¸ë¨ ì ë ¬',
        outdent: 'ë´ì´ì°ê¸°',
        indent: 'ë¤ì¬ì°ê¸°',
        left: 'ì¼ìª½ ì ë ¬',
        center: 'ê°ì´ë° ì ë ¬',
        right: 'ì¤ë¥¸ìª½ ì ë ¬',
        justify: 'ììª½ ì ë ¬'
      },
      color: {
        recent: 'ë§ì§ë§ì¼ë¡ ì¬ì©í ì',
        more: 'ë¤ë¥¸ ì ì í',
        background: 'ë°°ê²½ì',
        foreground: 'ê¸ìì',
        transparent: 'í¬ëª',
        setTransparent: 'í¬ëªì¼ë¡ ì¤ì ',
        reset: 'ì·¨ì',
        resetToDefault: 'ê¸°ë³¸ê°ì¼ë¡ ì¤ì ',
        cpSelect: 'ê³ ë¥´ë¤'
      },
      shortcut: {
        shortcuts: 'í¤ë³´ë ë¨ì¶í¤',
        close: 'ë«ê¸°',
        textFormatting: 'ê¸ì ì¤íì¼ ì ì©',
        action: 'ê¸°ë¥',
        paragraphFormatting: 'ë¬¸ë¨ ì¤íì¼ ì ì©',
        documentStyle: 'ë¬¸ì ì¤íì¼ ì ì©',
        extraKeys: 'ì¶ê° í¤'
      },
      help: {
        'insertParagraph': 'ë¬¸ë¨ ì½ì',
        'undo': 'ë§ì§ë§ ëªë ¹ ì·¨ì',
        'redo': 'ë§ì§ë§ ëªë ¹ ì¬ì¤í',
        'tab': 'í­',
        'untab': 'í­ ì ê±°',
        'bold': 'êµµì ê¸ìë¡ ì¤ì ',
        'italic': 'ê¸°ì¸ìê¼´ ê¸ìë¡ ì¤ì ',
        'underline': 'ë°ì¤ ê¸ìë¡ ì¤ì ',
        'strikethrough': 'ì·¨ìì  ê¸ìë¡ ì¤ì ',
        'removeFormat': 'ìì ì­ì ',
        'justifyLeft': 'ì¼ìª½ ì ë ¬íê¸°',
        'justifyCenter': 'ê°ì´ë° ì ë ¬íê¸°',
        'justifyRight': 'ì¤ë¥¸ìª½ ì ë ¬íê¸°',
        'justifyFull': 'ì¢ì°ì±ì ì ë ¬íê¸°',
        'insertUnorderedList': 'ê¸ë¨¸ë¦¬ ê¸°í¸ ì¼ê³  ëê¸°',
        'insertOrderedList': 'ë²í¸ ë§¤ê¸°ê¸° ì¼ê³  ëê¸°',
        'outdent': 'íì¬ ë¬¸ë¨ ë´ì´ì°ê¸°',
        'indent': 'íì¬ ë¬¸ë¨ ë¤ì¬ì°ê¸°',
        'formatPara': 'íì¬ ë¸ë¡ì í¬ë§·ì ë¬¸ë¨(P)ì¼ë¡ ë³ê²½',
        'formatH1': 'íì¬ ë¸ë¡ì í¬ë§·ì ì ëª©1(H1)ë¡ ë³ê²½',
        'formatH2': 'íì¬ ë¸ë¡ì í¬ë§·ì ì ëª©2(H2)ë¡ ë³ê²½',
        'formatH3': 'íì¬ ë¸ë¡ì í¬ë§·ì ì ëª©3(H3)ë¡ ë³ê²½',
        'formatH4': 'íì¬ ë¸ë¡ì í¬ë§·ì ì ëª©4(H4)ë¡ ë³ê²½',
        'formatH5': 'íì¬ ë¸ë¡ì í¬ë§·ì ì ëª©5(H5)ë¡ ë³ê²½',
        'formatH6': 'íì¬ ë¸ë¡ì í¬ë§·ì ì ëª©6(H6)ë¡ ë³ê²½',
        'insertHorizontalRule': 'êµ¬ë¶ì  ì½ì',
        'linkDialog.show': 'ë§í¬ ëíìì ì´ê¸°'
      },
      history: {
        undo: 'ì¤í ì·¨ì',
        redo: 'ì¬ì¤í'
      },
      specialChar: {
        specialChar: 'í¹ìë¬¸ì',
        select: 'í¹ìë¬¸ìë¥¼ ì ííì¸ì'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});