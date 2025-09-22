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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'cs-CZ': {
      font: {
        bold: 'TuÄnÃ©',
        italic: 'KurzÃ­va',
        underline: 'PodtrÅ¾enÃ©',
        clear: 'Odstranit styl pÃ­sma',
        height: 'VÃ½Å¡ka ÅÃ¡dku',
        strikethrough: 'PÅeÅ¡krtnutÃ©',
        size: 'Velikost pÃ­sma'
      },
      image: {
        image: 'ObrÃ¡zek',
        insert: 'VloÅ¾it obrÃ¡zek',
        resizeFull: 'PÅ¯vodnÃ­ velikost',
        resizeHalf: 'PoloviÄnÃ­ velikost',
        resizeQuarter: 'ÄtvrteÄnÃ­ velikost',
        floatLeft: 'UmÃ­stit doleva',
        floatRight: 'UmÃ­stit doprava',
        floatNone: 'NeobtÃ©kat textem',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'PÅetÃ¡hnout sem obrÃ¡zek',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Vybrat soubor',
        url: 'URL obrÃ¡zku',
        remove: 'Remove Image',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Odkaz videa',
        insert: 'VloÅ¾it video',
        url: 'URL videa?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion nebo Youku)'
      },
      link: {
        link: 'Odkaz',
        insert: 'VytvoÅit odkaz',
        unlink: 'ZruÅ¡it odkaz',
        edit: 'Upravit',
        textToDisplay: 'ZobrazovanÃ½ text',
        url: 'Na jakÃ© URL mÃ¡ tento odkaz vÃ©st?',
        openInNewWindow: 'OtevÅÃ­t v novÃ©m oknÄ'
      },
      table: {
        table: 'Tabulka',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'VloÅ¾it vodorovnou ÄÃ¡ru'
      },
      style: {
        style: 'Styl',
        p: 'NormÃ¡lnÃ­',
        blockquote: 'Citace',
        pre: 'KÃ³d',
        h1: 'Nadpis 1',
        h2: 'Nadpis 2',
        h3: 'Nadpis 3',
        h4: 'Nadpis 4',
        h5: 'Nadpis 5',
        h6: 'Nadpis 6'
      },
      lists: {
        unordered: 'OdrÃ¡Å¾kovÃ½ seznam',
        ordered: 'ÄÃ­selnÃ½ seznam'
      },
      options: {
        help: 'NÃ¡povÄda',
        fullscreen: 'CelÃ¡ obrazovka',
        codeview: 'HTML kÃ³d'
      },
      paragraph: {
        paragraph: 'Odstavec',
        outdent: 'ZvÄtÅ¡it odsazenÃ­',
        indent: 'ZmenÅ¡it odsazenÃ­',
        left: 'Zarovnat doleva',
        center: 'Zarovnat na stÅed',
        right: 'Zarovnat doprava',
        justify: 'Zarovnat oboustrannÄ'
      },
      color: {
        recent: 'AktuÃ¡lnÃ­ barva',
        more: 'DalÅ¡Ã­ barvy',
        background: 'Barva pozadÃ­',
        foreground: 'Barva pÃ­sma',
        transparent: 'PrÅ¯hlednost',
        setTransparent: 'Nastavit prÅ¯hlednost',
        reset: 'Obnovit',
        resetToDefault: 'Obnovit vÃ½chozÃ­',
        cpSelect: 'Vybrat'
      },
      shortcut: {
        shortcuts: 'KlÃ¡vesovÃ© zkratky',
        close: 'ZavÅÃ­t',
        textFormatting: 'FormÃ¡tovÃ¡nÃ­ textu',
        action: 'Akce',
        paragraphFormatting: 'FormÃ¡tovÃ¡nÃ­ odstavce',
        documentStyle: 'Styl dokumentu'
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
        undo: 'Krok vzad',
        redo: 'Krok vpÅed'
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