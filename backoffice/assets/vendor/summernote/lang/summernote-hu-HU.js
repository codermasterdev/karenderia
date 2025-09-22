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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'hu-HU': {
      font: {
        bold: 'FÃ©lkÃ¶vÃ©r',
        italic: 'DÅlt',
        underline: 'AlÃ¡hÃºzott',
        clear: 'FormÃ¡zÃ¡s tÃ¶rlÃ©se',
        height: 'SorkÃ¶z',
        name: 'BetÅ±tÃ­pus',
        strikethrough: 'ÃthÃºzott',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'BetÅ±mÃ©ret'
      },
      image: {
        image: 'KÃ©p',
        insert: 'KÃ©p beszÃºrÃ¡sa',
        resizeFull: 'ÃtmÃ©retezÃ©s teljes mÃ©retre',
        resizeHalf: 'ÃtmÃ©retezÃ©s felÃ©re',
        resizeQuarter: 'ÃtmÃ©retezÃ©s negyedÃ©re',
        floatLeft: 'IgazÃ­tÃ¡s balra',
        floatRight: 'IgazÃ­tÃ¡s jobbra',
        floatNone: 'IgazÃ­tÃ¡s tÃ¶rlÃ©se',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Ide hÃºzhat kÃ©pet vagy szÃ¶veget',
        dropImage: 'Engedje el a kÃ©pet vagy szÃ¶veget',
        selectFromFiles: 'FÃ¡jlok kivÃ¡lasztÃ¡sa',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'KÃ©p URL cÃ­me',
        remove: 'KÃ©p tÃ¶rlÃ©se',
        original: 'Original'
      },
      video: {
        video: 'VideÃ³',
        videoLink: 'VideÃ³ hivatkozÃ¡s',
        insert: 'VideÃ³ beszÃºrÃ¡sa',
        url: 'VideÃ³ URL cÃ­me',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion vagy Youku)'
      },
      link: {
        link: 'HivatkozÃ¡s',
        insert: 'HivatkozÃ¡s beszÃºrÃ¡sa',
        unlink: 'HivatkozÃ¡s megszÃ¼ntetÃ©se',
        edit: 'SzerkesztÃ©s',
        textToDisplay: 'MegjelenÃ­tendÅ szÃ¶veg',
        url: 'Milyen URL cÃ­mre hivatkozzon?',
        openInNewWindow: 'MegnyitÃ¡s Ãºj ablakban'
      },
      table: {
        table: 'TÃ¡blÃ¡zat',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'ElvÃ¡lasztÃ³ vonal beszÃºrÃ¡sa'
      },
      style: {
        style: 'StÃ­lus',
        p: 'NormÃ¡l',
        blockquote: 'IdÃ©zet',
        pre: 'KÃ³d',
        h1: 'FejlÃ©c 1',
        h2: 'FejlÃ©c 2',
        h3: 'FejlÃ©c 3',
        h4: 'FejlÃ©c 4',
        h5: 'FejlÃ©c 5',
        h6: 'FejlÃ©c 6'
      },
      lists: {
        unordered: 'Listajeles lista',
        ordered: 'SzÃ¡mozott lista'
      },
      options: {
        help: 'SÃºgÃ³',
        fullscreen: 'Teljes kÃ©pernyÅ',
        codeview: 'KÃ³d nÃ©zet'
      },
      paragraph: {
        paragraph: 'BekezdÃ©s',
        outdent: 'BehÃºzÃ¡s csÃ¶kkentÃ©se',
        indent: 'BehÃºzÃ¡s nÃ¶velÃ©se',
        left: 'IgazÃ­tÃ¡s balra',
        center: 'IgazÃ­tÃ¡s kÃ¶zÃ©pre',
        right: 'IgazÃ­tÃ¡s jobbra',
        justify: 'SorkizÃ¡rt'
      },
      color: {
        recent: 'Jelenlegi szÃ­n',
        more: 'TovÃ¡bbi szÃ­nek',
        background: 'HÃ¡ttÃ©rszÃ­n',
        foreground: 'BetÅ±szÃ­n',
        transparent: 'ÃtlÃ¡tszÃ³',
        setTransparent: 'ÃtlÃ¡szÃ³sÃ¡g beÃ¡llÃ­tÃ¡sa',
        reset: 'VisszaÃ¡llÃ­tÃ¡s',
        resetToDefault: 'Alaphelyzetbe Ã¡llÃ­tÃ¡s'
      },
      shortcut: {
        shortcuts: 'GyorsbillentyÅ±',
        close: 'BezÃ¡rÃ¡s',
        textFormatting: 'SzÃ¶veg formÃ¡zÃ¡sa',
        action: 'MÅ±velet',
        paragraphFormatting: 'BekezdÃ©s formÃ¡zÃ¡sa',
        documentStyle: 'DokumentumstÃ­lus',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Ãj bekezdÃ©s',
        'undo': 'VisszavonÃ¡s',
        'redo': 'Ãjra',
        'tab': 'BehÃºzÃ¡s nÃ¶velÃ©se',
        'untab': 'BehÃºzÃ¡s csÃ¶kkentÃ©se',
        'bold': 'FÃ©lkÃ¶vÃ©rre Ã¡llÃ­tÃ¡s',
        'italic': 'DÅltre Ã¡llÃ­tÃ¡s',
        'underline': 'AlÃ¡hÃºzÃ¡s',
        'strikethrough': 'ÃthÃºzÃ¡s',
        'removeFormat': 'FormÃ¡zÃ¡s tÃ¶rlÃ©se',
        'justifyLeft': 'Balra igazÃ­tÃ¡s',
        'justifyCenter': 'KÃ¶zÃ©pre igazÃ­tÃ¡s',
        'justifyRight': 'Jobbra igazÃ­tÃ¡s',
        'justifyFull': 'SorkizÃ¡rt',
        'insertUnorderedList': 'SzÃ¡mozatlan lista be/ki',
        'insertOrderedList': 'SzÃ¡mozott lista be/ki',
        'outdent': 'Jelenlegi bekezdÃ©s behÃºzÃ¡sÃ¡nak megszÃ¼ntetÃ©se',
        'indent': 'Jelenlegi bekezdÃ©s behÃºzÃ¡sa',
        'formatPara': 'Blokk formÃ¡zÃ¡sa bekezdÃ©skÃ©nt (P tag)',
        'formatH1': 'Blokk formÃ¡zÃ¡sa, mint FejlÃ©c 1',
        'formatH2': 'Blokk formÃ¡zÃ¡sa, mint FejlÃ©c 2',
        'formatH3': 'Blokk formÃ¡zÃ¡sa, mint FejlÃ©c 3',
        'formatH4': 'Blokk formÃ¡zÃ¡sa, mint FejlÃ©c 4',
        'formatH5': 'Blokk formÃ¡zÃ¡sa, mint FejlÃ©c 5',
        'formatH6': 'Blokk formÃ¡zÃ¡sa, mint FejlÃ©c 6',
        'insertHorizontalRule': 'VÃ­zszintes vonal beszÃºrÃ¡sa',
        'linkDialog.show': 'Link pÃ¡rbeszÃ©dablak megjelenÃ­tÃ©se'
      },
      history: {
        undo: 'VisszavonÃ¡s',
        redo: 'Ãjra'
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