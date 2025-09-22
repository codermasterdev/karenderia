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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports) {

//Summernote WYSIWYG  editor ucun Azerbaycan dili fayli
//Tercume etdi: RAMIL ALIYEV
//Tarix: 20.07.2019
//Baki Azerbaycan
//Website: https://ramilaliyev.com
//Azerbaijan language for Summernote WYSIWYG 
//Translated by: RAMIL ALIYEV
//Date: 20.07.2019
//Baku Azerbaijan
//Website: https://ramilaliyev.com
(function ($) {
  $.extend($.summernote.lang, {
    'az-AZ': {
      font: {
        bold: 'QalÄ±n',
        italic: 'Æyri',
        underline: 'AltÄ± xÉtli',
        clear: 'TÉmizlÉ',
        height: 'SÉtir hÃ¼ndÃ¼rlÃ¼yÃ¼',
        name: 'YazÄ± Tipi',
        strikethrough: 'ÃstÃ¼ xÉtli',
        subscript: 'Alt simvol',
        superscript: 'Ãst simvol',
        size: 'YazÄ± Ã¶lÃ§Ã¼sÃ¼'
      },
      image: {
        image: 'ÅÉkil',
        insert: 'ÅÉkil ÉlavÉ et',
        resizeFull: 'Original Ã¶lÃ§Ã¼',
        resizeHalf: '1/2 Ã¶lÃ§Ã¼',
        resizeQuarter: '1/4 Ã¶lÃ§Ã¼',
        floatLeft: 'Sola Ã§Ék',
        floatRight: 'SaÄa Ã§Ék',
        floatNone: 'Sola-saÄa Ã§ÉkilmÉni lÉÄv et',
        shapeRounded: 'ÅÉkil: yuvarlaq kÃ¼nÃ§',
        shapeCircle: 'ÅÉkil: DairÉ',
        shapeThumbnail: 'ÅÉkil: Thumbnail',
        shapeNone: 'ÅÉkil: Yox',
        dragImageHere: 'Bura sÃ¼rÃ¼ÅdÃ¼r',
        dropImage: 'ÅÉkil vÉ ya mÉtni buraxÄ±n',
        selectFromFiles: 'SÉnÉd seÃ§in',
        maximumFileSize: 'Maksimum sÉnÉd Ã¶lÃ§Ã¼sÃ¼',
        maximumFileSizeError: 'Maksimum sÉnÉd Ã¶lÃ§Ã¼sÃ¼nÃ¼ keÃ§diniz.',
        url: 'ÅÉkil linki',
        remove: 'ÅÉkli sil',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Video linki',
        insert: 'Video ÉlavÉ et',
        url: 'Video linki?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion vÉ ya Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Link ÉlavÉ et',
        unlink: 'Linki sil',
        edit: 'LinkÉ dÃ¼zÉliÅ et',
        textToDisplay: 'Ekranda gÃ¶stÉrilÉcÉk link adÄ±',
        url: 'Link Ã¼nvanÄ±?',
        openInNewWindow: 'Yeni pÉncÉrÉdÉ aÃ§'
      },
      table: {
        table: 'CÉdvÉl',
        addRowAbove: 'YuxarÄ± sÉtir ÉlavÉ et',
        addRowBelow: 'AÅaÄÄ± sÉtir ÉlavÉ et',
        addColLeft: 'Sola sÃ¼tun ÉlavÉ et',
        addColRight: 'SaÄa sÃ¼tun ÉlavÉ et',
        delRow: 'SÉtiri sil',
        delCol: 'SÃ¼tunu sil',
        delTable: 'CÉdvÉli sil'
      },
      hr: {
        insert: 'Ãfuqi xÉtt ÉlavÉ et'
      },
      style: {
        style: 'Stil',
        p: 'p',
        blockquote: 'Ä°stinad',
        pre: 'Ãn baxÄ±Å',
        h1: 'BaÅlÄ±q 1',
        h2: 'BaÅlÄ±q 2',
        h3: 'BaÅlÄ±q 3',
        h4: 'BaÅlÄ±q 4',
        h5: 'BaÅlÄ±q 5',
        h6: 'BaÅlÄ±q 6'
      },
      lists: {
        unordered: 'NizamsÄ±z sÄ±ra',
        ordered: 'NizamlÄ± sÄ±ra'
      },
      options: {
        help: 'KÃ¶mÉk',
        fullscreen: 'Tam ekran',
        codeview: 'HTML Kodu'
      },
      paragraph: {
        paragraph: 'Paraqraf',
        outdent: 'Girintini artÄ±r',
        indent: 'Girintini azalt',
        left: 'Sola Ã§Ék',
        center: 'Ortaya Ã§Ék',
        right: 'SaÄa Ã§Ék',
        justify: 'Sola vÉ saÄa Ã§Ék'
      },
      color: {
        recent: 'Son rÉnk',
        more: 'Daha Ã§ox rÉnk',
        background: 'Arxa fon rÉngi',
        foreground: 'YazÄ± rÄ±ngi',
        transparent: 'ÅÉffaflÄ±q',
        setTransparent: 'ÅÉffaflÄ±ÄÄ± nizamla',
        reset: 'SÄ±fÄ±rla',
        resetToDefault: 'Susyama gÃ¶rÉ sÄ±fÄ±rla'
      },
      shortcut: {
        shortcuts: 'QÄ±sayollar',
        close: 'BaÄla',
        textFormatting: 'YazÄ± formatlandÄ±rmaq',
        action: 'HadisÉ',
        paragraphFormatting: 'Paraqraf formatlandÄ±rmaq',
        documentStyle: 'SÉnÉd stili',
        extraKeys: 'ÆlavÉ'
      },
      help: {
        'insertParagraph': 'Paraqraf ÉlavÉ etmÉk',
        'undo': 'Son Émri geri alÄ±r',
        'redo': 'Son Émri irÉli alÄ±r',
        'tab': 'Girintini artÄ±rÄ±r',
        'untab': 'Girintini azaltÄ±r',
        'bold': 'QalÄ±n yazma stilini nizamlayÄ±r',
        'italic': 'Ä°talik yazma stilini nizamlayÄ±r',
        'underline': 'AltÄ± xÉtli yazma stilini nizamlayÄ±r',
        'strikethrough': 'ÃstÃ¼ xÉtli yazma stilini nizamlayÄ±r',
        'removeFormat': 'FormatlandÄ±rmanÄ± lÉÄv edir',
        'justifyLeft': 'YazÄ±nÄ± sola Ã§Ékir',
        'justifyCenter': 'YazÄ±nÄ± ortaya Ã§Ékir',
        'justifyRight': 'YazÄ±nÄ± saÄa Ã§Ékir',
        'justifyFull': 'YazÄ±nÄ± hÉr iki tÉrÉfÉ yazÄ±r',
        'insertUnorderedList': 'NizamsÄ±z sÄ±ra ÉlavÉ edir',
        'insertOrderedList': 'NizamlÄ± sÄ±ra ÉlavÉ edir',
        'outdent': 'Aktiv paraqrafÄ±n girintisini azaltÄ±r',
        'indent': 'Aktiv paragrafÄ±n girintisini artÄ±rÄ±r',
        'formatPara': 'Aktiv bloqun formatÄ±nÄ± paraqraf (p) olaraq dÉyiÅdirir',
        'formatH1': 'Aktiv bloqun formatÄ±nÄ± baÅlÄ±q 1 (h1) olaraq dÉyiÅdirir',
        'formatH2': 'Aktiv bloqun formatÄ±nÄ± baÅlÄ±q 2 (h2) olaraq dÉyiÅdirir',
        'formatH3': 'Aktiv bloqun formatÄ±nÄ± baÅlÄ±q 3 (h3) olaraq dÉyiÅdirir',
        'formatH4': 'Aktiv bloqun formatÄ±nÄ± baÅlÄ±q 4 (h4) olaraq dÉyiÅdirir',
        'formatH5': 'Aktiv bloqun formatÄ±nÄ± baÅlÄ±q 5 (h5) olaraq dÉyiÅdirir',
        'formatH6': 'Aktiv bloqun formatÄ±nÄ± baÅlÄ±q 6 (h6) olaraq dÉyiÅdirir',
        'insertHorizontalRule': 'Ãfuqi xÉtt ÉlavÉ edir',
        'linkDialog.show': 'Link parametrlÉri qutusunu gÃ¶stÉrir'
      },
      history: {
        undo: 'ÆvvÉlki vÉziyyÉt',
        redo: 'SonrakÄ± vÉziyyÉt'
      },
      specialChar: {
        specialChar: 'XÃ¼susi simvollar',
        select: 'XÃ¼susi simvollarÄ± seÃ§in'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});