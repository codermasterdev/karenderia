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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 35:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'pt-PT': {
      font: {
        bold: 'Negrito',
        italic: 'ItÃ¡lico',
        underline: 'Sublinhado',
        clear: 'Remover estilo da fonte',
        height: 'Altura da linha',
        name: 'Fonte',
        strikethrough: 'Riscado',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Tamanho da fonte'
      },
      image: {
        image: 'Imagem',
        insert: 'Inserir imagem',
        resizeFull: 'Redimensionar Completo',
        resizeHalf: 'Redimensionar Metade',
        resizeQuarter: 'Redimensionar Um Quarto',
        floatLeft: 'Float Esquerda',
        floatRight: 'Float Direita',
        floatNone: 'Sem Float',
        shapeRounded: 'Forma: Arredondado',
        shapeCircle: 'Forma: CÃ­rculo',
        shapeThumbnail: 'Forma: Minhatura',
        shapeNone: 'Forma: Nenhum',
        dragImageHere: 'Arraste uma imagem para aqui',
        dropImage: 'Arraste uma imagem ou texto',
        selectFromFiles: 'Selecione a partir dos arquivos',
        maximumFileSize: 'Tamanho mÃ¡ximo do fixeiro',
        maximumFileSizeError: 'Tamanho mÃ¡ximo do fixeiro Ã© maior que o permitido.',
        url: 'EndereÃ§o da imagem',
        remove: 'Remover Imagem',
        original: 'Original'
      },
      video: {
        video: 'VÃ­deo',
        videoLink: 'Link para vÃ­deo',
        insert: 'Inserir vÃ­deo',
        url: 'URL do vÃ­deo?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion ou Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Inserir ligaÃ§Ã£o',
        unlink: 'Remover ligaÃ§Ã£o',
        edit: 'Editar',
        textToDisplay: 'Texto para exibir',
        url: 'Que endereÃ§o esta licaÃ§Ã£o leva?',
        openInNewWindow: 'Abrir numa nova janela'
      },
      table: {
        table: 'Tabela',
        addRowAbove: 'Adicionar linha acima',
        addRowBelow: 'Adicionar linha abaixo',
        addColLeft: 'Adicionar coluna Ã  Esquerda',
        addColRight: 'Adicionar coluna Ã  Esquerda',
        delRow: 'Excluir linha',
        delCol: 'Excluir coluna',
        delTable: 'Excluir tabela'
      },
      hr: {
        insert: 'Inserir linha horizontal'
      },
      style: {
        style: 'Estilo',
        p: 'ParÃ¡grafo',
        blockquote: 'CitaÃ§Ã£o',
        pre: 'CÃ³digo',
        h1: 'TÃ­tulo 1',
        h2: 'TÃ­tulo 2',
        h3: 'TÃ­tulo 3',
        h4: 'TÃ­tulo 4',
        h5: 'TÃ­tulo 5',
        h6: 'TÃ­tulo 6'
      },
      lists: {
        unordered: 'Lista com marcadores',
        ordered: 'Lista numerada'
      },
      options: {
        help: 'Ajuda',
        fullscreen: 'Janela Completa',
        codeview: 'Ver cÃ³digo-fonte'
      },
      paragraph: {
        paragraph: 'ParÃ¡grafo',
        outdent: 'Menor tabulaÃ§Ã£o',
        indent: 'Maior tabulaÃ§Ã£o',
        left: 'Alinhar Ã  esquerda',
        center: 'Alinhar ao centro',
        right: 'Alinha Ã  direita',
        justify: 'Justificado'
      },
      color: {
        recent: 'Cor recente',
        more: 'Mais cores',
        background: 'Fundo',
        foreground: 'Fonte',
        transparent: 'Transparente',
        setTransparent: 'Fundo transparente',
        reset: 'Restaurar',
        resetToDefault: 'Restaurar padrÃ£o',
        cpSelect: 'Selecionar'
      },
      shortcut: {
        shortcuts: 'Atalhos do teclado',
        close: 'Fechar',
        textFormatting: 'FormataÃ§Ã£o de texto',
        action: 'AÃ§Ã£o',
        paragraphFormatting: 'FormataÃ§Ã£o de parÃ¡grafo',
        documentStyle: 'Estilo de documento'
      },
      help: {
        'insertParagraph': 'Inserir ParÃ¡grafo',
        'undo': 'Desfazer o Ãºltimo comando',
        'redo': 'Refazer o Ãºltimo comando',
        'tab': 'Maior tabulaÃ§Ã£o',
        'untab': 'Menor tabulaÃ§Ã£o',
        'bold': 'Colocar em negrito',
        'italic': 'Colocar em itÃ¡lico',
        'underline': 'Colocar em sublinhado',
        'strikethrough': 'Colocar em riscado',
        'removeFormat': 'Limpar o estilo',
        'justifyLeft': 'Definir alinhado Ã  esquerda',
        'justifyCenter': 'Definir alinhado ao centro',
        'justifyRight': 'Definir alinhado Ã  direita',
        'justifyFull': 'Definir justificado',
        'insertUnorderedList': 'Alternar lista nÃ£o ordenada',
        'insertOrderedList': 'Alternar lista ordenada',
        'outdent': 'Recuar parÃ¡grafo atual',
        'indent': 'AvanÃ§ar parÃ¡grafo atual',
        'formatPara': 'Alterar formato do bloco para parÃ¡grafo',
        'formatH1': 'Alterar formato do bloco para TÃ­tulo 1',
        'formatH2': 'Alterar formato do bloco para TÃ­tulo 2',
        'formatH3': 'Alterar formato do bloco para TÃ­tulo 3',
        'formatH4': 'Alterar formato do bloco para TÃ­tulo 4',
        'formatH5': 'Alterar formato do bloco para TÃ­tulo 5',
        'formatH6': 'Alterar formato do bloco para TÃ­tulo 6',
        'insertHorizontalRule': 'Inserir linha horizontal',
        'linkDialog.show': 'Inserir uma ligraÃ§Ã£o'
      },
      history: {
        undo: 'Desfazer',
        redo: 'Refazer'
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