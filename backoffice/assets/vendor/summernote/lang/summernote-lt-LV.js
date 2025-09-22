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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ 29:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'lv-LV': {
      font: {
        bold: 'Treknraksts',
        italic: 'KursÄ«vs',
        underline: 'PasvÄ«trots',
        clear: 'NoÅemt formatÄjumu',
        height: 'LÄ«nijas augstums',
        name: 'Fonts',
        strikethrough: 'NosvÄ«trots',
        superscript: 'AugÅ¡raksts',
        subscript: 'ApakÅ¡raksts',
        size: 'Fonta lielums'
      },
      image: {
        image: 'AttÄls',
        insert: 'Ievietot attÄlu',
        resizeFull: 'Pilns izmÄrts',
        resizeHalf: 'SamazinÄt 50%',
        resizeQuarter: 'SamazinÄt 25%',
        floatLeft: 'LÄ«dzinÄt pa kreisi',
        floatRight: 'LÄ«dzinÄt pa labi',
        floatNone: 'NelÄ«dzinÄt',
        shapeRounded: 'Forma: apaÄ¼Äm malÄm',
        shapeCircle: 'Forma: aplis',
        shapeThumbnail: 'Forma: rÄmÄ«tis',
        shapeNone: 'Forma: orÄ£inÄla',
        dragImageHere: 'IevÄlciet attÄlu Å¡eit',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'IzvÄlÄties failu',
        maximumFileSize: 'MaksimÄlais faila izmÄrs',
        maximumFileSizeError: 'Faila izmÄrs pÄrÄk liels!',
        url: 'AttÄla URL',
        remove: 'DzÄst attÄlu',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Video Link',
        insert: 'Insert Video',
        url: 'Video URL?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
      },
      link: {
        link: 'Saite',
        insert: 'Ievietot saiti',
        unlink: 'NoÅemt saiti',
        edit: 'RediÄ£Ät',
        textToDisplay: 'Saites saturs',
        url: 'Koks URL adresas yra susietas?',
        openInNewWindow: 'AtvÄrt jaunÄ logÄ'
      },
      table: {
        table: 'Tabula',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Ievietot lÄ«niju'
      },
      style: {
        style: 'Stils',
        p: 'Parasts',
        blockquote: 'CitÄts',
        pre: 'Kods',
        h1: 'Virsraksts h1',
        h2: 'Virsraksts h2',
        h3: 'Virsraksts h3',
        h4: 'Virsraksts h4',
        h5: 'Virsraksts h5',
        h6: 'Virsraksts h6'
      },
      lists: {
        unordered: 'NenumurÄts saraksts',
        ordered: 'NumurÄts saraksts'
      },
      options: {
        help: 'PalÄ«dzÄ«ba',
        fullscreen: 'Pa visu ekrÄnu',
        codeview: 'HTML kods'
      },
      paragraph: {
        paragraph: 'ParagrÄfs',
        outdent: 'SamazinÄt atkÄpi',
        indent: 'PalielinÄt atkÄpi',
        left: 'LÄ«dzinÄt pa kreisi',
        center: 'CentrÄt',
        right: 'LÄ«dzinÄt pa labi',
        justify: 'LÄ«dzinÄt gar abÄm malÄm'
      },
      color: {
        recent: 'Nesen izmantotÄs',
        more: 'Citas krÄsas',
        background: 'Fona krÄsa',
        foreground: 'Fonta krÄsa',
        transparent: 'CaurspÄ«dÄ«gs',
        setTransparent: 'IestatÄ«t caurspÄ«dÄ«gumu',
        reset: 'Atjaunot',
        resetToDefault: 'Atjaunot noklusÄjumu'
      },
      shortcut: {
        shortcuts: 'SaÄ«snes',
        close: 'AizvÄrt',
        textFormatting: 'Teksta formatÄÅ¡ana',
        action: 'DarbÄ«ba',
        paragraphFormatting: 'ParagrÄfa formatÄÅ¡ana',
        documentStyle: 'Dokumenta stils',
        extraKeys: 'Citas taustiÅu kombinÄcijas'
      },
      help: {
        insertParagraph: 'Ievietot ParagrÄfu',
        undo: 'Atcelt iepriekÅ¡Äjo darbÄ«bu',
        redo: 'AtkÄrtot atcelto darbÄ«bu',
        tab: 'AtkÄpe',
        untab: 'SamazinÄt atkÄpi',
        bold: 'PÄrvÄrst tekstu treknrakstÄ',
        italic: 'PÄrvÄrst tekstu slÄ«prakstÄ (kursÄ«vÄ)',
        underline: 'PasvÄ«trot tekstu',
        strikethrough: 'NosvÄ«trot tekstu',
        removeFormat: 'NotÄ«rÄ«t stilu no teksta',
        justifyLeft: 'LÄ«dzÄ«nÄt saturu pa kreisi',
        justifyCenter: 'CentrÄt saturu',
        justifyRight: 'LÄ«dzÄ«nÄt saturu pa labi',
        justifyFull: 'IzlÄ«dzinÄt saturu gar abÄm malÄm',
        insertUnorderedList: 'Ievietot nenumurÄtu sarakstu',
        insertOrderedList: 'Ievietot numurÄtu sarakstu',
        outdent: 'SamazinÄt/noÅemt atkÄpi paragrÄfam',
        indent: 'Uzlikt atkÄpi paragrÄfam',
        formatPara: 'MainÄ«t bloka tipu uz (p) ParagrÄfu',
        formatH1: 'MainÄ«t bloka tipu uz virsrakstu H1',
        formatH2: 'MainÄ«t bloka tipu uz virsrakstu H2',
        formatH3: 'MainÄ«t bloka tipu uz virsrakstu H3',
        formatH4: 'MainÄ«t bloka tipu uz virsrakstu H4',
        formatH5: 'MainÄ«t bloka tipu uz virsrakstu H5',
        formatH6: 'MainÄ«t bloka tipu uz virsrakstu H6',
        insertHorizontalRule: 'Ievietot horizontÄlu lÄ«niju',
        'linkDialog.show': 'ParÄdÄ«t saites logu'
      },
      history: {
        undo: 'Atsauks (undo)',
        redo: 'AtkÄrtot (redo)'
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