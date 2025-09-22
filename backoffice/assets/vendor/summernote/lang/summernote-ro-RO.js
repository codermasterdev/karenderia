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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 36:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'ro-RO': {
      font: {
        bold: 'ÃngroÈat',
        italic: 'Ãnclinat',
        underline: 'Subliniat',
        clear: 'ÃnlÄturÄ formatare font',
        height: 'ÃnÄlÈime rÃ¢nd',
        name: 'Familie de fonturi',
        strikethrough: 'TÄiat',
        subscript: 'Indice',
        superscript: 'Exponent',
        size: 'Dimensiune font'
      },
      image: {
        image: 'Imagine',
        insert: 'InsereazÄ imagine',
        resizeFull: 'RedimensioneazÄ complet',
        resizeHalf: 'RedimensioneazÄ 1/2',
        resizeQuarter: 'RedimensioneazÄ 1/4',
        floatLeft: 'Aliniere la stÃ¢nga',
        floatRight: 'Aliniere la dreapta',
        floatNone: 'FarÄ aliniere',
        shapeRounded: 'FormÄ: Rotund',
        shapeCircle: 'FormÄ: Cerc',
        shapeThumbnail: 'FormÄ: PictogramÄ',
        shapeNone: 'FormÄ: Nici una',
        dragImageHere: 'Trage o imagine sau un text aici',
        dropImage: 'ElibereazÄ imaginea sau textul',
        selectFromFiles: 'Alege din fiÅiere',
        maximumFileSize: 'Dimensiune maximÄ fiÈier',
        maximumFileSizeError: 'Dimensiune maximÄ fiÈier depÄÈitÄ.',
        url: 'URL imagine',
        remove: 'Èterge imagine',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Link video',
        insert: 'InsereazÄ video',
        url: 'URL video?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion sau Youku)'
      },
      link: {
        link: 'Link',
        insert: 'InsereazÄ link',
        unlink: 'ÃnlÄturÄ link',
        edit: 'EditeazÄ',
        textToDisplay: 'Text ce va fi afiÅat',
        url: 'La ce adresÄ URL trebuie sÄ conducÄ acest link?',
        openInNewWindow: 'Deschidere Ã®n fereastrÄ nouÄ'
      },
      table: {
        table: 'Tabel',
        addRowAbove: 'AdaugÄ rÃ¢nd deasupra',
        addRowBelow: 'AdaugÄ rÃ¢nd dedesubt',
        addColLeft: 'AdaugÄ coloanÄ stÃ¢nga',
        addColRight: 'AdaugÄ coloanÄ dreapta',
        delRow: 'Èterge rÃ¢nd',
        delCol: 'Èterge coloanÄ',
        delTable: 'Èterge tabel'
      },
      hr: {
        insert: 'InsereazÄ o linie orizontalÄ'
      },
      style: {
        style: 'Stil',
        p: 'p',
        blockquote: 'Citat',
        pre: 'Preformatat',
        h1: 'Titlu 1',
        h2: 'Titlu 2',
        h3: 'Titlu 3',
        h4: 'Titlu 4',
        h5: 'Titlu 5',
        h6: 'Titlu 6'
      },
      lists: {
        unordered: 'ListÄ neordonatÄ',
        ordered: 'ListÄ ordonatÄ'
      },
      options: {
        help: 'Ajutor',
        fullscreen: 'MÄreÅte',
        codeview: 'SursÄ'
      },
      paragraph: {
        paragraph: 'Paragraf',
        outdent: 'CreÅte identarea',
        indent: 'Scade identarea',
        left: 'Aliniere la stÃ¢nga',
        center: 'Aliniere centralÄ',
        right: 'Aliniere la dreapta',
        justify: 'Aliniere Ã®n bloc'
      },
      color: {
        recent: 'Culoare recentÄ',
        more: 'Mai multe  culori',
        background: 'Culoarea fundalului',
        foreground: 'Culoarea textului',
        transparent: 'Transparent',
        setTransparent: 'SeteazÄ transparent',
        reset: 'ReseteazÄ',
        resetToDefault: 'Revino la iniÅ£ial'
      },
      shortcut: {
        shortcuts: 'ScurtÄturi tastaturÄ',
        close: 'Ãnchide',
        textFormatting: 'Formatare text',
        action: 'AcÅ£iuni',
        paragraphFormatting: 'Formatare paragraf',
        documentStyle: 'Stil paragraf',
        extraKeys: 'Taste extra'
      },
      help: {
        'insertParagraph': 'InsereazÄ paragraf',
        'undo': 'Revine la starea anterioarÄ',
        'redo': 'Revine la starea ulterioarÄ',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'SeteazÄ stil Ã®ngroÈat',
        'italic': 'SeteazÄ stil Ã®nclinat',
        'underline': 'SeteazÄ stil subliniat',
        'strikethrough': 'SeteazÄ stil tÄiat',
        'removeFormat': 'ÃnlÄturÄ formatare',
        'justifyLeft': 'SeteazÄ aliniere stÃ¢nga',
        'justifyCenter': 'SeteazÄ aliniere centru',
        'justifyRight': 'SeteazÄ aliniere dreapta',
        'justifyFull': 'SeteazÄ aliniere bloc',
        'insertUnorderedList': 'Comutare listÄ neordinatÄ',
        'insertOrderedList': 'Comutare listÄ ordonatÄ',
        'outdent': 'ÃnlÄturÄ indentare paragraf curent',
        'indent': 'AdaugÄ indentare paragraf curent',
        'formatPara': 'SchimbÄ formatarea selecÈiei Ã®n paragraf',
        'formatH1': 'SchimbÄ formatarea selecÈiei Ã®n H1',
        'formatH2': 'SchimbÄ formatarea selecÈiei Ã®n H2',
        'formatH3': 'SchimbÄ formatarea selecÈiei Ã®n H3',
        'formatH4': 'SchimbÄ formatarea selecÈiei Ã®n H4',
        'formatH5': 'SchimbÄ formatarea selecÈiei Ã®n H5',
        'formatH6': 'SchimbÄ formatarea selecÈiei Ã®n H6',
        'insertHorizontalRule': 'AdaugÄ linie orizontalÄ',
        'linkDialog.show': 'InsereazÄ link'
      },
      history: {
        undo: 'Starea anterioarÄ',
        redo: 'Starea ulterioarÄ'
      },
      specialChar: {
        specialChar: 'CARACTERE SPECIALE',
        select: 'Alege caractere speciale'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});