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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'pl-PL': {
      font: {
        bold: 'Pogrubienie',
        italic: 'Pochylenie',
        underline: 'PodkreÅlenie',
        clear: 'UsuÅ formatowanie',
        height: 'Interlinia',
        name: 'Czcionka',
        strikethrough: 'PrzekreÅlenie',
        subscript: 'Indeks dolny',
        superscript: 'Indeks gÃ³rny',
        size: 'Rozmiar'
      },
      image: {
        image: 'Grafika',
        insert: 'Wstaw grafikÄ',
        resizeFull: 'ZmieÅ rozmiar na 100%',
        resizeHalf: 'ZmieÅ rozmiar na 50%',
        resizeQuarter: 'ZmieÅ rozmiar na 25%',
        floatLeft: 'Po lewej',
        floatRight: 'Po prawej',
        floatNone: 'RÃ³wno z tekstem',
        shapeRounded: 'KsztaÅt: zaokrÄglone',
        shapeCircle: 'KsztaÅt: okrÄg',
        shapeThumbnail: 'KsztaÅt: miniatura',
        shapeNone: 'KsztaÅt: brak',
        dragImageHere: 'PrzeciÄgnij grafikÄ lub tekst tutaj',
        dropImage: 'PrzeciÄgnij grafikÄ lub tekst',
        selectFromFiles: 'Wybierz z dysku',
        maximumFileSize: 'Limit wielkoÅci pliku',
        maximumFileSizeError: 'Przekroczono limit wielkoÅci pliku.',
        url: 'Adres URL grafiki',
        remove: 'UsuÅ grafikÄ',
        original: 'OryginaÅ'
      },
      video: {
        video: 'Wideo',
        videoLink: 'Adres wideo',
        insert: 'Wstaw wideo',
        url: 'Adres wideo',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion lub Youku)'
      },
      link: {
        link: 'OdnoÅnik',
        insert: 'Wstaw odnoÅnik',
        unlink: 'UsuÅ odnoÅnik',
        edit: 'Edytuj',
        textToDisplay: 'Tekst do wyÅwietlenia',
        url: 'Na jaki adres URL powinien przenosiÄ ten odnoÅnik?',
        openInNewWindow: 'OtwÃ³rz w nowym oknie'
      },
      table: {
        table: 'Tabela',
        addRowAbove: 'Dodaj wiersz powyÅ¼ej',
        addRowBelow: 'Dodaj wiersz poniÅ¼ej',
        addColLeft: 'Dodaj kolumnÄ po lewej',
        addColRight: 'Dodaj kolumnÄ po prawej',
        delRow: 'UsuÅ wiersz',
        delCol: 'UsuÅ kolumnÄ',
        delTable: 'UsuÅ tabelÄ'
      },
      hr: {
        insert: 'Wstaw poziomÄ liniÄ'
      },
      style: {
        style: 'Styl',
        p: 'pny',
        blockquote: 'Cytat',
        pre: 'Kod',
        h1: 'NagÅÃ³wek 1',
        h2: 'NagÅÃ³wek 2',
        h3: 'NagÅÃ³wek 3',
        h4: 'NagÅÃ³wek 4',
        h5: 'NagÅÃ³wek 5',
        h6: 'NagÅÃ³wek 6'
      },
      lists: {
        unordered: 'Lista wypunktowana',
        ordered: 'Lista numerowana'
      },
      options: {
        help: 'Pomoc',
        fullscreen: 'PeÅny ekran',
        codeview: 'Å¹rÃ³dÅo'
      },
      paragraph: {
        paragraph: 'Akapit',
        outdent: 'Zmniejsz wciÄcie',
        indent: 'ZwiÄksz wciÄcie',
        left: 'WyrÃ³wnaj do lewej',
        center: 'WyrÃ³wnaj do Årodka',
        right: 'WyrÃ³wnaj do prawej',
        justify: 'WyrÃ³wnaj do lewej i prawej'
      },
      color: {
        recent: 'Ostani kolor',
        more: 'WiÄcej kolorÃ³w',
        background: 'TÅo',
        foreground: 'Czcionka',
        transparent: 'PrzeÅºroczysty',
        setTransparent: 'PrzeÅºroczyste',
        reset: 'Zresetuj',
        resetToDefault: 'DomyÅlne'
      },
      shortcut: {
        shortcuts: 'SkrÃ³ty klawiaturowe',
        close: 'Zamknij',
        textFormatting: 'Formatowanie tekstu',
        action: 'Akcja',
        paragraphFormatting: 'Formatowanie akapitu',
        documentStyle: 'Styl dokumentu',
        extraKeys: 'Dodatkowe klawisze'
      },
      help: {
        'insertParagraph': 'Wstaw paragraf',
        'undo': 'Cofnij poprzedniÄ operacjÄ',
        'redo': 'PrzywrÃ³Ä poprzedniÄ operacjÄ',
        'tab': 'Tabulacja',
        'untab': 'UsuÅ tabulacjÄ',
        'bold': 'Pogrubienie',
        'italic': 'Kursywa',
        'underline': 'PodkreÅlenie',
        'strikethrough': 'PrzekreÅlenie',
        'removeFormat': 'UsuÅ formatowanie',
        'justifyLeft': 'WyrÃ³wnaj do lewej',
        'justifyCenter': 'WyrÃ³wnaj do Årodka',
        'justifyRight': 'WyrÃ³wnaj do prawej',
        'justifyFull': 'Justyfikacja',
        'insertUnorderedList': 'Nienumerowana lista',
        'insertOrderedList': 'Wypunktowana lista',
        'outdent': 'Zmniejsz wciÄcie paragrafu',
        'indent': 'ZwiÄksz wciÄcie paragrafu',
        'formatPara': 'ZamieÅ format bloku na paragraf (tag P)',
        'formatH1': 'ZamieÅ format bloku na H1',
        'formatH2': 'ZamieÅ format bloku na H2',
        'formatH3': 'ZamieÅ format bloku na H3',
        'formatH4': 'ZamieÅ format bloku na H4',
        'formatH5': 'ZamieÅ format bloku na H5',
        'formatH6': 'ZamieÅ format bloku na H6',
        'insertHorizontalRule': 'Wstaw poziomÄ liniÄ',
        'linkDialog.show': 'PokaÅ¼ dialog linkowania'
      },
      history: {
        undo: 'Cofnij',
        redo: 'PonÃ³w'
      },
      specialChar: {
        specialChar: 'ZNAKI SPECJALNE',
        select: 'Wybierz Znak specjalny'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});