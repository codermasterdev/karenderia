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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'gl-ES': {
      font: {
        bold: 'Negrita',
        italic: 'Cursiva',
        underline: 'SubliÃ±ado',
        clear: 'Quitar estilo de fonte',
        height: 'Altura de liÃ±a',
        name: 'Fonte',
        strikethrough: 'Riscado',
        superscript: 'SuperÃ­ndice',
        subscript: 'SubÃ­ndice',
        size: 'TamaÃ±o da fonte'
      },
      image: {
        image: 'Imaxe',
        insert: 'Inserir imaxe',
        resizeFull: 'Redimensionar a tamaÃ±o completo',
        resizeHalf: 'Redimensionar Ã¡ metade',
        resizeQuarter: 'Redimensionar a un cuarto',
        floatLeft: 'Flotar Ã¡ esquerda',
        floatRight: 'Flotar Ã¡ dereita',
        floatNone: 'Non flotar',
        shapeRounded: 'Forma: Redondeado',
        shapeCircle: 'Forma: CÃ­rculo',
        shapeThumbnail: 'Forma: Marco',
        shapeNone: 'Forma: Ningunha',
        dragImageHere: 'Arrastrar unha imaxe ou texto aquÃ­',
        dropImage: 'Solta a imaxe ou texto',
        selectFromFiles: 'Seleccionar desde os arquivos',
        maximumFileSize: 'TamaÃ±o mÃ¡ximo do arquivo',
        maximumFileSizeError: 'Superaches o tamaÃ±o mÃ¡ximo do arquivo.',
        url: 'URL da imaxe',
        remove: 'Eliminar imaxe',
        original: 'Original'
      },
      video: {
        video: 'VÃ­deo',
        videoLink: 'LigazÃ³n do vÃ­deo',
        insert: 'Insertar vÃ­deo',
        url: 'URL do vÃ­deo?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion, o Youku)'
      },
      link: {
        link: 'LigazÃ³n',
        insert: 'Inserir LigazÃ³n',
        unlink: 'Quitar LigazÃ³n',
        edit: 'Editar',
        textToDisplay: 'Texto para amosar',
        url: 'Cara a que URL leva a ligazÃ³n?',
        openInNewWindow: 'Abrir nunha nova xanela'
      },
      table: {
        table: 'TÃ¡boa',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Inserir liÃ±a horizontal'
      },
      style: {
        style: 'Estilo',
        p: 'Normal',
        blockquote: 'Cita',
        pre: 'CÃ³digo',
        h1: 'TÃ­tulo 1',
        h2: 'TÃ­tulo 2',
        h3: 'TÃ­tulo 3',
        h4: 'TÃ­tulo 4',
        h5: 'TÃ­tulo 5',
        h6: 'TÃ­tulo 6'
      },
      lists: {
        unordered: 'Lista desordenada',
        ordered: 'Lista ordenada'
      },
      options: {
        help: 'Axuda',
        fullscreen: 'Pantalla completa',
        codeview: 'Ver cÃ³digo fonte'
      },
      paragraph: {
        paragraph: 'ParÃ¡grafo',
        outdent: 'Menos tabulaciÃ³n',
        indent: 'MÃ¡is tabulaciÃ³n',
        left: 'AliÃ±ar Ã¡ esquerda',
        center: 'AliÃ±ar ao centro',
        right: 'AliÃ±ar Ã¡ dereita',
        justify: 'Xustificar'
      },
      color: {
        recent: 'Ãltima cor',
        more: 'MÃ¡is cores',
        background: 'Cor de fondo',
        foreground: 'Cor de fuente',
        transparent: 'Transparente',
        setTransparent: 'Establecer transparente',
        reset: 'Restaurar',
        resetToDefault: 'Restaurar por defecto'
      },
      shortcut: {
        shortcuts: 'Atallos de teclado',
        close: 'Pechar',
        textFormatting: 'Formato de texto',
        action: 'AcciÃ³n',
        paragraphFormatting: 'Formato de parÃ¡grafo',
        documentStyle: 'Estilo de documento',
        extraKeys: 'Teclas adicionais'
      },
      help: {
        'insertParagraph': 'Inserir parÃ¡grafo',
        'undo': 'Desfacer Ãºltima acciÃ³n',
        'redo': 'Refacer Ãºltima acciÃ³n',
        'tab': 'Tabular',
        'untab': 'Eliminar tabulaciÃ³n',
        'bold': 'Establecer estilo negrita',
        'italic': 'Establecer estilo cursiva',
        'underline': 'Establecer estilo subliÃ±ado',
        'strikethrough': 'Establecer estilo riscado',
        'removeFormat': 'Limpar estilo',
        'justifyLeft': 'AliÃ±ar Ã¡ esquerda',
        'justifyCenter': 'AliÃ±ar ao centro',
        'justifyRight': 'AliÃ±ar Ã¡ dereita',
        'justifyFull': 'Xustificar',
        'insertUnorderedList': 'Inserir lista desordenada',
        'insertOrderedList': 'Inserir lista ordenada',
        'outdent': 'Reducir tabulaciÃ³n do parÃ¡grafo',
        'indent': 'Aumentar tabulaciÃ³n do parÃ¡grafo',
        'formatPara': 'Mudar estilo do bloque a parÃ¡grafo (etiqueta P)',
        'formatH1': 'Mudar estilo do bloque a H1',
        'formatH2': 'Mudar estilo do bloque a H2',
        'formatH3': 'Mudar estilo do bloque a H3',
        'formatH4': 'Mudar estilo do bloque a H4',
        'formatH5': 'Mudar estilo do bloque a H5',
        'formatH6': 'Mudar estilo do bloque a H6',
        'insertHorizontalRule': 'Inserir liÃ±a horizontal',
        'linkDialog.show': 'Amosar panel ligazÃ³ns'
      },
      history: {
        undo: 'Desfacer',
        redo: 'Refacer'
      },
      specialChar: {
        specialChar: 'CARACTERES ESPECIAIS',
        select: 'Selecciona Caracteres especiais'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});