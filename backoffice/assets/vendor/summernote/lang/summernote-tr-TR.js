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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 45:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'tr-TR': {
      font: {
        bold: 'KalÄ±n',
        italic: 'Ä°talik',
        underline: 'AltÄ± Ã§izili',
        clear: 'Temizle',
        height: 'SatÄ±r yÃ¼ksekliÄi',
        name: 'YazÄ± Tipi',
        strikethrough: 'ÃstÃ¼ Ã§izili',
        subscript: 'Alt Simge',
        superscript: 'Ãst Simge',
        size: 'YazÄ± tipi boyutu'
      },
      image: {
        image: 'Resim',
        insert: 'Resim ekle',
        resizeFull: 'Orjinal boyut',
        resizeHalf: '1/2 boyut',
        resizeQuarter: '1/4 boyut',
        floatLeft: 'Sola hizala',
        floatRight: 'SaÄa hizala',
        floatNone: 'HizalamayÄ± kaldÄ±r',
        shapeRounded: 'Åekil: YuvarlatÄ±lmÄ±Å KÃ¶Åe',
        shapeCircle: 'Åekil: Daire',
        shapeThumbnail: 'Åekil: K.Resim',
        shapeNone: 'Åekil: Yok',
        dragImageHere: 'Buraya sÃ¼rÃ¼kleyin',
        dropImage: 'Resim veya metni bÄ±rakÄ±n',
        selectFromFiles: 'Dosya seÃ§in',
        maximumFileSize: 'Maksimum dosya boyutu',
        maximumFileSizeError: 'Maksimum dosya boyutu aÅÄ±ldÄ±.',
        url: 'Resim baÄlantÄ±sÄ±',
        remove: 'Resimi KaldÄ±r',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Video baÄlantÄ±sÄ±',
        insert: 'Video ekle',
        url: 'Video baÄlantÄ±sÄ±?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion veya Youku)'
      },
      link: {
        link: 'BaÄlantÄ±',
        insert: 'BaÄlantÄ± ekle',
        unlink: 'BaÄlantÄ±yÄ± kaldÄ±r',
        edit: 'BaÄlantÄ±yÄ± dÃ¼zenle',
        textToDisplay: 'GÃ¶rÃ¼ntÃ¼lemek iÃ§in',
        url: 'BaÄlantÄ± adresi?',
        openInNewWindow: 'Yeni pencerede aÃ§'
      },
      table: {
        table: 'Tablo',
        addRowAbove: 'YukarÄ± satÄ±r ekle',
        addRowBelow: 'AÅaÄÄ± satÄ±r ekle',
        addColLeft: 'Sola sÃ¼tun ekle',
        addColRight: 'SaÄa sÃ¼tun ekle',
        delRow: 'SatÄ±rÄ± sil',
        delCol: 'SÃ¼tunu sil',
        delTable: 'Tabloyu sil'
      },
      hr: {
        insert: 'Yatay Ã§izgi ekle'
      },
      style: {
        style: 'BiÃ§im',
        p: 'p',
        blockquote: 'AlÄ±ntÄ±',
        pre: 'ÃnbiÃ§imli',
        h1: 'BaÅlÄ±k 1',
        h2: 'BaÅlÄ±k 2',
        h3: 'BaÅlÄ±k 3',
        h4: 'BaÅlÄ±k 4',
        h5: 'BaÅlÄ±k 5',
        h6: 'BaÅlÄ±k 6'
      },
      lists: {
        unordered: 'Madde iÅaretli liste',
        ordered: 'NumaralÄ± liste'
      },
      options: {
        help: 'YardÄ±m',
        fullscreen: 'Tam ekran',
        codeview: 'HTML Kodu'
      },
      paragraph: {
        paragraph: 'Paragraf',
        outdent: 'Girintiyi artÄ±r',
        indent: 'Girintiyi azalt',
        left: 'Sola hizala',
        center: 'Ortaya hizala',
        right: 'SaÄa hizala',
        justify: 'Yasla'
      },
      color: {
        recent: 'Son renk',
        more: 'Daha fazla renk',
        background: 'Arka plan rengi',
        foreground: 'YazÄ± rengi',
        transparent: 'SeffaflÄ±k',
        setTransparent: 'ÅeffaflÄ±ÄÄ± ayarla',
        reset: 'SÄ±fÄ±rla',
        resetToDefault: 'VarsayÄ±lanlara sÄ±fÄ±rla'
      },
      shortcut: {
        shortcuts: 'KÄ±sayollar',
        close: 'Kapat',
        textFormatting: 'YazÄ± biÃ§imlendirme',
        action: 'Eylem',
        paragraphFormatting: 'Paragraf biÃ§imlendirme',
        documentStyle: 'BiÃ§im',
        extraKeys: 'Ä°lave anahtarlar'
      },
      help: {
        'insertParagraph': 'Paragraf ekler',
        'undo': 'Son komudu geri alÄ±r',
        'redo': 'Son komudu yineler',
        'tab': 'Girintiyi artÄ±rÄ±r',
        'untab': 'Girintiyi azaltÄ±r',
        'bold': 'KalÄ±n yazma stilini ayarlar',
        'italic': 'Ä°talik yazma stilini ayarlar',
        'underline': 'AltÄ± Ã§izgili yazma stilini ayarlar',
        'strikethrough': 'ÃstÃ¼ Ã§izgili yazma stilini ayarlar',
        'removeFormat': 'BiÃ§imlendirmeyi temizler',
        'justifyLeft': 'YazÄ±yÄ± sola hizalar',
        'justifyCenter': 'YazÄ±yÄ± ortalar',
        'justifyRight': 'YazÄ±yÄ± saÄa hizalar',
        'justifyFull': 'YazÄ±yÄ± her iki tarafa yazlar',
        'insertUnorderedList': 'Madde iÅaretli liste ekler',
        'insertOrderedList': 'NumaralÄ± liste ekler',
        'outdent': 'Aktif paragrafÄ±n girintisini azaltÄ±r',
        'indent': 'Aktif paragrafÄ±n girintisini artÄ±rÄ±r',
        'formatPara': 'Aktif bloÄun biÃ§imini paragraf (p) olarak deÄiÅtirir',
        'formatH1': 'Aktif bloÄun biÃ§imini baÅlÄ±k 1 (h1) olarak deÄiÅtirir',
        'formatH2': 'Aktif bloÄun biÃ§imini baÅlÄ±k 2 (h2) olarak deÄiÅtirir',
        'formatH3': 'Aktif bloÄun biÃ§imini baÅlÄ±k 3 (h3) olarak deÄiÅtirir',
        'formatH4': 'Aktif bloÄun biÃ§imini baÅlÄ±k 4 (h4) olarak deÄiÅtirir',
        'formatH5': 'Aktif bloÄun biÃ§imini baÅlÄ±k 5 (h5) olarak deÄiÅtirir',
        'formatH6': 'Aktif bloÄun biÃ§imini baÅlÄ±k 6 (h6) olarak deÄiÅtirir',
        'insertHorizontalRule': 'Yatay Ã§izgi ekler',
        'linkDialog.show': 'BaÄlantÄ± ayar kutusunu gÃ¶sterir'
      },
      history: {
        undo: 'Geri al',
        redo: 'Yinele'
      },
      specialChar: {
        specialChar: 'ÃZEL KARAKTERLER',
        select: 'Ãzel Karakterleri seÃ§in'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});