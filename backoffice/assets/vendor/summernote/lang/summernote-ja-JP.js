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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'ja-JP': {
      font: {
        bold: 'å¤ªå­',
        italic: 'æä½',
        underline: 'ä¸ç·',
        clear: 'ã¯ãªã¢',
        height: 'æå­é«',
        name: 'ãã©ã³ã',
        strikethrough: 'åãæ¶ãç·',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'å¤§ãã'
      },
      image: {
        image: 'ç»å',
        insert: 'ç»åæ¿å¥',
        resizeFull: 'æå¤§å',
        resizeHalf: '1/2',
        resizeQuarter: '1/4',
        floatLeft: 'å·¦å¯ã',
        floatRight: 'å³å¯ã',
        floatNone: 'å¯ãè§£é¤',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'ããã«ç»åããã©ãã°ãã¦ãã ãã',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'ç»åãã¡ã¤ã«ãé¸ã¶',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'URLããç»åãæ¿å¥ãã',
        remove: 'ç»åãåé¤ãã',
        original: 'Original'
      },
      video: {
        video: 'åç»',
        videoLink: 'åç»ãªã³ã¯',
        insert: 'åç»æ¿å¥',
        url: 'åç»ã®URL',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion, Youku)'
      },
      link: {
        link: 'ãªã³ã¯',
        insert: 'ãªã³ã¯æ¿å¥',
        unlink: 'ãªã³ã¯è§£é¤',
        edit: 'ç·¨é',
        textToDisplay: 'ãªã³ã¯æå­å',
        url: 'URLãå¥åãã¦ãã ãã',
        openInNewWindow: 'æ°ããã¦ã£ã³ãã¦ã§éã'
      },
      table: {
        table: 'ãã¼ãã«',
        addRowAbove: 'è¡ãä¸ã«è¿½å ',
        addRowBelow: 'è¡ãä¸ã«è¿½å ',
        addColLeft: 'åãå·¦ã«è¿½å ',
        addColRight: 'åãå³ã«è¿½å ',
        delRow: 'è¡ãåé¤',
        delCol: 'åãåé¤',
        delTable: 'ãã¼ãã«ãåé¤'
      },
      hr: {
        insert: 'æ°´å¹³ç·ã®æ¿å¥'
      },
      style: {
        style: 'ã¹ã¿ã¤ã«',
        p: 'æ¨æº',
        blockquote: 'å¼ç¨',
        pre: 'ã³ã¼ã',
        h1: 'è¦åºã1',
        h2: 'è¦åºã2',
        h3: 'è¦åºã3',
        h4: 'è¦åºã4',
        h5: 'è¦åºã5',
        h6: 'è¦åºã6'
      },
      lists: {
        unordered: 'éå¸¸ãªã¹ã',
        ordered: 'çªå·ãªã¹ã'
      },
      options: {
        help: 'ãã«ã',
        fullscreen: 'ãã«ã¹ã¯ãªã¼ã³',
        codeview: 'ã³ã¼ãè¡¨ç¤º'
      },
      paragraph: {
        paragraph: 'æç« ',
        outdent: 'å­ä¸ã',
        indent: 'å­ä¸ã',
        left: 'å·¦å¯ã',
        center: 'ä¸­å¤®å¯ã',
        right: 'å³å¯ã',
        justify: 'åç­å²ä»'
      },
      color: {
        recent: 'ç¾å¨ã®è²',
        more: 'ãã£ã¨è¦ã',
        background: 'èæ¯è²',
        foreground: 'æå­è²',
        transparent: 'éæ',
        setTransparent: 'éæã«ãã',
        reset: 'æ¨æº',
        resetToDefault: 'æ¨æºã«æ»ã'
      },
      shortcut: {
        shortcuts: 'ã·ã§ã¼ãã«ãã',
        close: 'éãã',
        textFormatting: 'æå­ãã©ã¼ããã',
        action: 'ã¢ã¯ã·ã§ã³',
        paragraphFormatting: 'æç« ãã©ã¼ããã',
        documentStyle: 'ãã­ã¥ã¡ã³ãå½¢å¼',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'æ¹è¡æ¿å¥',
        'undo': 'ä¸æ¦ãè¡ã£ãæä½ãæ»ã',
        'redo': 'æå¾ã®ã³ãã³ããããç´ã',
        'tab': 'Tab',
        'untab': 'ã¿ãæ»ã',
        'bold': 'å¤ªæå­',
        'italic': 'æä½',
        'underline': 'ä¸ç·',
        'strikethrough': 'åãæ¶ãç·',
        'removeFormat': 'è£é£¾ãæ»ã',
        'justifyLeft': 'å·¦å¯ã',
        'justifyCenter': 'çãä¸­å¯ã',
        'justifyRight': 'å³å¯ã',
        'justifyFull': 'ãã¹ã¦ãæ´å',
        'insertUnorderedList': 'è¡é ­ã«âãæ¿å¥',
        'insertOrderedList': 'è¡é ­ã«çªå·ãæ¿å¥',
        'outdent': 'å­ä¸ããæ»ãï¼ã¢ã¦ããã³ãï¼',
        'indent': 'å­ä¸ãããï¼ã¤ã³ãã³ãï¼',
        'formatPara': 'æ®µè½(P tag)æå®',
        'formatH1': 'H1æå®',
        'formatH2': 'H2æå®',
        'formatH3': 'H3æå®',
        'formatH4': 'H4æå®',
        'formatH5': 'H5æå®',
        'formatH6': 'H6æå®',
        'insertHorizontalRule': '&lt;hr /&gt;ãæ¿å¥',
        'linkDialog.show': 'ãªã³ã¯æ¿å¥'
      },
      history: {
        undo: 'åã«æ»ã',
        redo: 'ããç´ã'
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