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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 50:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'zh-TW': {
      font: {
        bold: 'ç²é«',
        italic: 'æé«',
        underline: 'åºç·',
        clear: 'æ¸é¤æ ¼å¼',
        height: 'è¡é«',
        name: 'å­é«',
        strikethrough: 'åªé¤ç·',
        subscript: 'ä¸æ¨',
        superscript: 'ä¸æ¨',
        size: 'å­è'
      },
      image: {
        image: 'åç',
        insert: 'æå¥åç',
        resizeFull: 'ç¸®æ¾è³100%',
        resizeHalf: 'ç¸®æ¾è³ 50%',
        resizeQuarter: 'ç¸®æ¾è³ 25%',
        floatLeft: 'é å·¦æµ®å',
        floatRight: 'é å³æµ®å',
        floatNone: 'åæ¶æµ®å',
        shapeRounded: 'å½¢ç: åè§',
        shapeCircle: 'å½¢ç: å',
        shapeThumbnail: 'å½¢ç: ç¸®ç¥å',
        shapeNone: 'å½¢ç: ç¡',
        dragImageHere: 'å°åçææ³è³æ­¤è',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'å¾æ¬æ©ä¸å³',
        maximumFileSize: 'æä»¶å¤§å°æå¤§å¼',
        maximumFileSizeError: 'æä»¶å¤§å°è¶åºæå¤§å¼ã',
        url: 'åçç¶²å',
        remove: 'ç§»é¤åç',
        original: 'Original'
      },
      video: {
        video: 'å½±ç',
        videoLink: 'å½±çé£çµ',
        insert: 'æå¥å½±ç',
        url: 'å½±çç¶²å',
        providers: '(åªé·, Instagram, DailyMotion, Youtubeç­)'
      },
      link: {
        link: 'é£çµ',
        insert: 'æå¥é£çµ',
        unlink: 'åæ¶é£çµ',
        edit: 'ç·¨è¼¯é£çµ',
        textToDisplay: 'é¡¯ç¤ºæå­',
        url: 'é£çµç¶²å',
        openInNewWindow: 'å¨æ°è¦çªéå'
      },
      table: {
        table: 'è¡¨æ ¼',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'æ°´å¹³ç·'
      },
      style: {
        style: 'æ¨£å¼',
        p: 'ä¸è¬',
        blockquote: 'å¼ç¨åå¡',
        pre: 'ç¨å¼ç¢¼åå¡',
        h1: 'æ¨é¡ 1',
        h2: 'æ¨é¡ 2',
        h3: 'æ¨é¡ 3',
        h4: 'æ¨é¡ 4',
        h5: 'æ¨é¡ 5',
        h6: 'æ¨é¡ 6'
      },
      lists: {
        unordered: 'é ç®æ¸å®',
        ordered: 'ç·¨èæ¸å®'
      },
      options: {
        help: 'å¹«å©',
        fullscreen: 'å¨è¢å¹',
        codeview: 'åå§ç¢¼'
      },
      paragraph: {
        paragraph: 'æ®µè½',
        outdent: 'åæ¶ç¸®æ',
        indent: 'å¢å ç¸®æ',
        left: 'é å³å°é½',
        center: 'é ä¸­å°é½',
        right: 'é å³å°é½',
        justify: 'å·¦å³å°é½'
      },
      color: {
        recent: 'å­åé¡è²',
        more: 'æ´å¤',
        background: 'èæ¯',
        foreground: 'åæ¯',
        transparent: 'éæ',
        setTransparent: 'éæ',
        reset: 'éè¨­',
        resetToDefault: 'é»èª'
      },
      shortcut: {
        shortcuts: 'å¿«æ·éµ',
        close: 'éé',
        textFormatting: 'æå­æ ¼å¼',
        action: 'åä½',
        paragraphFormatting: 'æ®µè½æ ¼å¼',
        documentStyle: 'æä»¶æ ¼å¼',
        extraKeys: 'é¡å¤æéµ'
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
        undo: 'å¾©å',
        redo: 'åæ¶å¾©å'
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