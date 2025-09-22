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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 38:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'sk-SK': {
      font: {
        bold: 'TuÄnÃ©',
        italic: 'KurzÃ­va',
        underline: 'PodÄiarknutie',
        clear: 'OdstrÃ¡niÅ¥ Å¡tÃ½l pÃ­sma',
        height: 'VÃ½Å¡ka riadku',
        strikethrough: 'PreÄiarknutÃ©',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'VeÄ¾kosÅ¥ pÃ­sma'
      },
      image: {
        image: 'ObrÃ¡zok',
        insert: 'VloÅ¾iÅ¥ obrÃ¡zok',
        resizeFull: 'PÃ´vodnÃ¡ veÄ¾kosÅ¥',
        resizeHalf: 'PoloviÄnÃ¡ veÄ¾kosÅ¥',
        resizeQuarter: 'Å tvrtinovÃ¡ veÄ¾kosÅ¥',
        floatLeft: 'UmiestniÅ¥ doÄ¾ava',
        floatRight: 'UmiestniÅ¥ doprava',
        floatNone: 'Bez zarovnania',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'PretiahnuÅ¥ sem obrÃ¡zok',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'VybraÅ¥ sÃºbor',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'URL obrÃ¡zku',
        remove: 'Remove Image',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Odkaz videa',
        insert: 'VloÅ¾iÅ¥ video',
        url: 'URL videa?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion alebo Youku)'
      },
      link: {
        link: 'Odkaz',
        insert: 'VytvoriÅ¥ odkaz',
        unlink: 'ZruÅ¡iÅ¥ odkaz',
        edit: 'UpraviÅ¥',
        textToDisplay: 'ZobrazovanÃ½ text',
        url: 'Na akÃº URL adresu mÃ¡ tento odkaz viesÅ¥?',
        openInNewWindow: 'OtvoriÅ¥ v novom okne'
      },
      table: {
        table: 'TabuÄ¾ka',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'VloÅ¾it vodorovnÃº Äiaru'
      },
      style: {
        style: 'Å tÃ½l',
        p: 'NormÃ¡lny',
        blockquote: 'CitÃ¡cia',
        pre: 'KÃ³d',
        h1: 'Nadpis 1',
        h2: 'Nadpis 2',
        h3: 'Nadpis 3',
        h4: 'Nadpis 4',
        h5: 'Nadpis 5',
        h6: 'Nadpis 6'
      },
      lists: {
        unordered: 'OdrÃ¡Å¾kovÃ½ zoznam',
        ordered: 'ÄÃ­selnÃ½ zoznam'
      },
      options: {
        help: 'Pomoc',
        fullscreen: 'CelÃ¡ obrazovka',
        codeview: 'HTML kÃ³d'
      },
      paragraph: {
        paragraph: 'Odsek',
        outdent: 'ZvÃ¤ÄÅ¡iÅ¥ odsadenie',
        indent: 'ZmenÅ¡iÅ¥ odsadenie',
        left: 'ZarovnaÅ¥ doÄ¾ava',
        center: 'ZarovnaÅ¥ na stred',
        right: 'ZarovnaÅ¥ doprava',
        justify: 'ZarovnaÅ¥ obojstranne'
      },
      color: {
        recent: 'AktuÃ¡lna farba',
        more: 'DalÅ¡ie farby',
        background: 'Farba pozadia',
        foreground: 'Farba pÃ­sma',
        transparent: 'PriehÄ¾adnosÅ¥',
        setTransparent: 'NastaviÅ¥ priehÄ¾adnosÅ¥',
        reset: 'ObnoviÅ¥',
        resetToDefault: 'ObnoviÅ¥ prednastavenÃ©'
      },
      shortcut: {
        shortcuts: 'KlÃ¡vesovÃ© skratky',
        close: 'ZavrieÅ¥',
        textFormatting: 'FormÃ¡tovanie textu',
        action: 'Akcia',
        paragraphFormatting: 'FormÃ¡tovanie odseku',
        documentStyle: 'Å tÃ½l dokumentu'
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
        redo: 'Krok dopredu'
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