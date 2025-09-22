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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'ca-ES': {
      font: {
        bold: 'Negreta',
        italic: 'Cursiva',
        underline: 'Subratllat',
        clear: 'Treure estil de lletra',
        height: 'AlÃ§ada de lÃ­nia',
        name: 'Font',
        strikethrough: 'Ratllat',
        subscript: 'SubÃ­ndex',
        superscript: 'SuperÃ­ndex',
        size: 'Mida de lletra'
      },
      image: {
        image: 'Imatge',
        insert: 'Inserir imatge',
        resizeFull: 'Redimensionar a mida completa',
        resizeHalf: 'Redimensionar a la meitat',
        resizeQuarter: 'Redimensionar a un quart',
        floatLeft: 'Alinear a l\'esquerra',
        floatRight: 'Alinear a la dreta',
        floatNone: 'No alinear',
        shapeRounded: 'Forma: Arrodonit',
        shapeCircle: 'Forma: Cercle',
        shapeThumbnail: 'Forma: Marc',
        shapeNone: 'Forma: Cap',
        dragImageHere: 'Arrossegueu una imatge o text aquÃ­',
        dropImage: 'Deixa anar aquÃ­ una imatge o un text',
        selectFromFiles: 'Seleccioneu des dels arxius',
        maximumFileSize: 'Mida mÃ xima de l\'arxiu',
        maximumFileSizeError: 'La mida mÃ xima de l\'arxiu s\'ha superat.',
        url: 'URL de la imatge',
        remove: 'Eliminar imatge',
        original: 'Original'
      },
      video: {
        video: 'VÃ­deo',
        videoLink: 'EnllaÃ§ del vÃ­deo',
        insert: 'Inserir vÃ­deo',
        url: 'URL del vÃ­deo?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion o Youku)'
      },
      link: {
        link: 'EnllaÃ§',
        insert: 'Inserir enllaÃ§',
        unlink: 'Treure enllaÃ§',
        edit: 'Editar',
        textToDisplay: 'Text per mostrar',
        url: 'Cap a quina URL porta l\'enllaÃ§?',
        openInNewWindow: 'Obrir en una finestra nova'
      },
      table: {
        table: 'Taula',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Inserir lÃ­nia horitzontal'
      },
      style: {
        style: 'Estil',
        p: 'p',
        blockquote: 'Cita',
        pre: 'Codi',
        h1: 'TÃ­tol 1',
        h2: 'TÃ­tol 2',
        h3: 'TÃ­tol 3',
        h4: 'TÃ­tol 4',
        h5: 'TÃ­tol 5',
        h6: 'TÃ­tol 6'
      },
      lists: {
        unordered: 'Llista desendreÃ§ada',
        ordered: 'Llista endreÃ§ada'
      },
      options: {
        help: 'Ajut',
        fullscreen: 'Pantalla sencera',
        codeview: 'Veure codi font'
      },
      paragraph: {
        paragraph: 'ParÃ graf',
        outdent: 'Menys tabulaciÃ³',
        indent: 'MÃ©s tabulaciÃ³',
        left: 'Alinear a l\'esquerra',
        center: 'Alinear al mig',
        right: 'Alinear a la dreta',
        justify: 'Justificar'
      },
      color: {
        recent: 'Ãltim color',
        more: 'MÃ©s colors',
        background: 'Color de fons',
        foreground: 'Color de lletra',
        transparent: 'Transparent',
        setTransparent: 'Establir transparent',
        reset: 'Restablir',
        resetToDefault: 'Restablir per defecte'
      },
      shortcut: {
        shortcuts: 'Dreceres de teclat',
        close: 'Tancar',
        textFormatting: 'Format de text',
        action: 'AcciÃ³',
        paragraphFormatting: 'Format de parÃ graf',
        documentStyle: 'Estil del document',
        extraKeys: 'Tecles adicionals'
      },
      help: {
        'insertParagraph': 'Inserir parÃ graf',
        'undo': 'Desfer l\'Ãºltima acciÃ³',
        'redo': 'Refer l\'Ãºltima acciÃ³',
        'tab': 'Tabular',
        'untab': 'Eliminar tabulaciÃ³',
        'bold': 'Establir estil negreta',
        'italic': 'Establir estil cursiva',
        'underline': 'Establir estil subratllat',
        'strikethrough': 'Establir estil ratllat',
        'removeFormat': 'Netejar estil',
        'justifyLeft': 'Alinear a l\'esquerra',
        'justifyCenter': 'Alinear al centre',
        'justifyRight': 'Alinear a la dreta',
        'justifyFull': 'Justificar',
        'insertUnorderedList': 'Inserir llista desendreÃ§ada',
        'insertOrderedList': 'Inserir llista endreÃ§ada',
        'outdent': 'ReduÃ¯r tabulaciÃ³ del parÃ graf',
        'indent': 'Augmentar tabulaciÃ³ del parÃ graf',
        'formatPara': 'Canviar l\'estil del bloc com a un parÃ graf (etiqueta P)',
        'formatH1': 'Canviar l\'estil del bloc com a un H1',
        'formatH2': 'Canviar l\'estil del bloc com a un H2',
        'formatH3': 'Canviar l\'estil del bloc com a un H3',
        'formatH4': 'Canviar l\'estil del bloc com a un H4',
        'formatH5': 'Canviar l\'estil del bloc com a un H5',
        'formatH6': 'Canviar l\'estil del bloc com a un H6',
        'insertHorizontalRule': 'Inserir una lÃ­nia horitzontal',
        'linkDialog.show': 'Mostrar panel d\'enllaÃ§os'
      },
      history: {
        undo: 'Desfer',
        redo: 'Refer'
      },
      specialChar: {
        specialChar: 'CARÃCTERS ESPECIALS',
        select: 'Selecciona carÃ cters especials'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});