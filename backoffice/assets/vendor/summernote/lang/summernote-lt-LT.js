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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ 28:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'lt-LT': {
      font: {
        bold: 'ParyÅ¡kintas',
        italic: 'Kursyvas',
        underline: 'PabrÄÅ¾tas',
        clear: 'Be formatavimo',
        height: 'EilutÄs aukÅ¡tis',
        name: 'Å rifto pavadinimas',
        strikethrough: 'Perbrauktas',
        superscript: 'VirÅ¡utinis',
        subscript: 'Indeksas',
        size: 'Å rifto dydis'
      },
      image: {
        image: 'PaveikslÄlis',
        insert: 'Ä®terpti paveikslÄlÄ¯',
        resizeFull: 'Pilnas dydis',
        resizeHalf: 'SumaÅ¾inti dydÄ¯ 50%',
        resizeQuarter: 'SumaÅ¾inti dydÄ¯ 25%',
        floatLeft: 'Kairinis lygiavimas',
        floatRight: 'DeÅ¡ininis lygiavimas',
        floatNone: 'Jokio lygiavimo',
        shapeRounded: 'Forma: apvalÅ«s kraÅ¡tai',
        shapeCircle: 'Forma: apskritimas',
        shapeThumbnail: 'Forma: miniatiÅ«ra',
        shapeNone: 'Forma: jokia',
        dragImageHere: 'Vilkite paveikslÄlÄ¯ Äia',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Pasirinkite failÄ',
        maximumFileSize: 'Maskimalus failo dydis',
        maximumFileSizeError: 'Maskimalus failo dydis virÅ¡ytas!',
        url: 'PaveikslÄlio URL adresas',
        remove: 'IÅ¡trinti paveikslÄlÄ¯',
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
        link: 'Nuoroda',
        insert: 'Ä®terpti nuorodÄ',
        unlink: 'PaÅ¡alinti nuorodÄ',
        edit: 'Redaguoti',
        textToDisplay: 'Rodomas tekstas',
        url: 'Koks URL adresas yra susietas?',
        openInNewWindow: 'Atidaryti naujame lange'
      },
      table: {
        table: 'LentelÄ',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Ä®terpti horizontaliÄ linijÄ'
      },
      style: {
        style: 'Stilius',
        p: 'pus',
        blockquote: 'Citata',
        pre: 'Kodas',
        h1: 'AntraÅ¡tÄ 1',
        h2: 'AntraÅ¡tÄ 2',
        h3: 'AntraÅ¡tÄ 3',
        h4: 'AntraÅ¡tÄ 4',
        h5: 'AntraÅ¡tÄ 5',
        h6: 'AntraÅ¡tÄ 6'
      },
      lists: {
        unordered: 'SuÅ¾enklintasis sÄraÅ¡as',
        ordered: 'Sunumeruotas sÄraÅ¡as'
      },
      options: {
        help: 'Pagalba',
        fullscreen: 'Viso ekrano reÅ¾imas',
        codeview: 'HTML kodo perÅ¾iÅ«ra'
      },
      paragraph: {
        paragraph: 'Pastraipa',
        outdent: 'SumaÅ¾inti Ä¯traukÄ',
        indent: 'Padidinti Ä¯traukÄ',
        left: 'KairinÄ lygiuotÄ',
        center: 'CentrinÄ lygiuotÄ',
        right: 'DeÅ¡ininÄ lygiuotÄ',
        justify: 'Abipusis iÅ¡lyginimas'
      },
      color: {
        recent: 'PaskutinÄ naudota spalva',
        more: 'Daugiau spalvÅ³',
        background: 'Fono spalva',
        foreground: 'Å rifto spalva',
        transparent: 'Permatoma',
        setTransparent: 'Nustatyti skaidrumo intensyvumÄ',
        reset: 'Atkurti',
        resetToDefault: 'Atstatyti numatytÄjÄ spalvÄ'
      },
      shortcut: {
        shortcuts: 'Spartieji klaviÅ¡ai',
        close: 'UÅ¾daryti',
        textFormatting: 'Teksto formatavimas',
        action: 'Veiksmas',
        paragraphFormatting: 'Pastraipos formatavimas',
        documentStyle: 'Dokumento stilius',
        extraKeys: 'Papildomi klaviÅ¡Å³ deriniai'
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
        undo: 'Anuliuoti veiksmÄ',
        redo: 'Perdaryti veiksmÄ'
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