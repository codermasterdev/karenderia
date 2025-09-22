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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 49:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'zh-CN': {
      font: {
        bold: 'ç²ä½',
        italic: 'æä½',
        underline: 'ä¸åçº¿',
        clear: 'æ¸é¤æ ¼å¼',
        height: 'è¡é«',
        name: 'å­ä½',
        strikethrough: 'å é¤çº¿',
        subscript: 'ä¸æ ',
        superscript: 'ä¸æ ',
        size: 'å­å·'
      },
      image: {
        image: 'å¾ç',
        insert: 'æå¥å¾ç',
        resizeFull: 'ç¼©æ¾è³ 100%',
        resizeHalf: 'ç¼©æ¾è³ 50%',
        resizeQuarter: 'ç¼©æ¾è³ 25%',
        floatLeft: 'é å·¦æµ®å¨',
        floatRight: 'é å³æµ®å¨',
        floatNone: 'åæ¶æµ®å¨',
        shapeRounded: 'å½¢ç¶: åè§',
        shapeCircle: 'å½¢ç¶: å',
        shapeThumbnail: 'å½¢ç¶: ç¼©ç¥å¾',
        shapeNone: 'å½¢ç¶: æ ',
        dragImageHere: 'å°å¾çææ½è³æ­¤å¤',
        dropImage: 'ææ½å¾çæææ¬',
        selectFromFiles: 'ä»æ¬å°ä¸ä¼ ',
        maximumFileSize: 'æä»¶å¤§å°æå¤§å¼',
        maximumFileSizeError: 'æä»¶å¤§å°è¶åºæå¤§å¼ã',
        url: 'å¾çå°å',
        remove: 'ç§»é¤å¾ç',
        original: 'åå§å¾ç'
      },
      video: {
        video: 'è§é¢',
        videoLink: 'è§é¢é¾æ¥',
        insert: 'æå¥è§é¢',
        url: 'è§é¢å°å',
        providers: '(ä¼é·, è¾è®¯, Instagram, DailyMotion, Youtubeç­)'
      },
      link: {
        link: 'é¾æ¥',
        insert: 'æå¥é¾æ¥',
        unlink: 'å»é¤é¾æ¥',
        edit: 'ç¼è¾é¾æ¥',
        textToDisplay: 'æ¾ç¤ºææ¬',
        url: 'é¾æ¥å°å',
        openInNewWindow: 'å¨æ°çªå£æå¼'
      },
      table: {
        table: 'è¡¨æ ¼',
        addRowAbove: 'å¨ä¸æ¹æå¥è¡',
        addRowBelow: 'å¨ä¸æ¹æå¥è¡',
        addColLeft: 'å¨å·¦ä¾§æå¥å',
        addColRight: 'å¨å³ä¾§æå¥å',
        delRow: 'å é¤è¡',
        delCol: 'å é¤å',
        delTable: 'å é¤è¡¨æ ¼'
      },
      hr: {
        insert: 'æ°´å¹³çº¿'
      },
      style: {
        style: 'æ ·å¼',
        p: 'æ®é',
        blockquote: 'å¼ç¨',
        pre: 'ä»£ç ',
        h1: 'æ é¢ 1',
        h2: 'æ é¢ 2',
        h3: 'æ é¢ 3',
        h4: 'æ é¢ 4',
        h5: 'æ é¢ 5',
        h6: 'æ é¢ 6'
      },
      lists: {
        unordered: 'æ åºåè¡¨',
        ordered: 'æåºåè¡¨'
      },
      options: {
        help: 'å¸®å©',
        fullscreen: 'å¨å±',
        codeview: 'æºä»£ç '
      },
      paragraph: {
        paragraph: 'æ®µè½',
        outdent: 'åå°ç¼©è¿',
        indent: 'å¢å ç¼©è¿',
        left: 'å·¦å¯¹é½',
        center: 'å±ä¸­å¯¹é½',
        right: 'å³å¯¹é½',
        justify: 'ä¸¤ç«¯å¯¹é½'
      },
      color: {
        recent: 'æè¿ä½¿ç¨',
        more: 'æ´å¤',
        background: 'èæ¯',
        foreground: 'åæ¯',
        transparent: 'éæ',
        setTransparent: 'éæ',
        reset: 'éç½®',
        resetToDefault: 'é»è®¤'
      },
      shortcut: {
        shortcuts: 'å¿«æ·é®',
        close: 'å³é­',
        textFormatting: 'ææ¬æ ¼å¼',
        action: 'å¨ä½',
        paragraphFormatting: 'æ®µè½æ ¼å¼',
        documentStyle: 'ææ¡£æ ·å¼',
        extraKeys: 'é¢å¤æé®'
      },
      help: {
        insertParagraph: 'æå¥æ®µè½',
        undo: 'æ¤é',
        redo: 'éå',
        tab: 'å¢å ç¼©è¿',
        untab: 'åå°ç¼©è¿',
        bold: 'ç²ä½',
        italic: 'æä½',
        underline: 'ä¸åçº¿',
        strikethrough: 'å é¤çº¿',
        removeFormat: 'æ¸é¤æ ¼å¼',
        justifyLeft: 'å·¦å¯¹é½',
        justifyCenter: 'å±ä¸­å¯¹é½',
        justifyRight: 'å³å¯¹é½',
        justifyFull: 'ä¸¤ç«¯å¯¹é½',
        insertUnorderedList: 'æ åºåè¡¨',
        insertOrderedList: 'æåºåè¡¨',
        outdent: 'åå°ç¼©è¿',
        indent: 'å¢å ç¼©è¿',
        formatPara: 'è®¾ç½®éä¸­åå®¹æ ·å¼ä¸º æ®é',
        formatH1: 'è®¾ç½®éä¸­åå®¹æ ·å¼ä¸º æ é¢1',
        formatH2: 'è®¾ç½®éä¸­åå®¹æ ·å¼ä¸º æ é¢2',
        formatH3: 'è®¾ç½®éä¸­åå®¹æ ·å¼ä¸º æ é¢3',
        formatH4: 'è®¾ç½®éä¸­åå®¹æ ·å¼ä¸º æ é¢4',
        formatH5: 'è®¾ç½®éä¸­åå®¹æ ·å¼ä¸º æ é¢5',
        formatH6: 'è®¾ç½®éä¸­åå®¹æ ·å¼ä¸º æ é¢6',
        insertHorizontalRule: 'æå¥æ°´å¹³çº¿',
        'linkDialog.show': 'æ¾ç¤ºé¾æ¥å¯¹è¯æ¡'
      },
      history: {
        undo: 'æ¤é',
        redo: 'éå'
      },
      specialChar: {
        specialChar: 'ç¹æ®å­ç¬¦',
        select: 'éåç¹æ®å­ç¬¦'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});