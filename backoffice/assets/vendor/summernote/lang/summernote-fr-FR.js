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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports) {

(function ($) {
  $.extend($.summernote.lang, {
    'fr-FR': {
      font: {
        bold: 'Gras',
        italic: 'Italique',
        underline: 'SoulignÃ©',
        clear: 'Effacer la mise en forme',
        height: 'Interligne',
        name: 'Famille de police',
        strikethrough: 'BarrÃ©',
        superscript: 'Exposant',
        subscript: 'Indice',
        size: 'Taille de police'
      },
      image: {
        image: 'Image',
        insert: 'InsÃ©rer une image',
        resizeFull: 'Taille originale',
        resizeHalf: 'Redimensionner Ã  50 %',
        resizeQuarter: 'Redimensionner Ã  25 %',
        floatLeft: 'AlignÃ© Ã  gauche',
        floatRight: 'AlignÃ© Ã  droite',
        floatNone: 'Pas d\'alignement',
        shapeRounded: 'Forme: Rectangle arrondi',
        shapeCircle: 'Forme: Cercle',
        shapeThumbnail: 'Forme: Vignette',
        shapeNone: 'Forme: Aucune',
        dragImageHere: 'Faites glisser une image ou un texte dans ce cadre',
        dropImage: 'Lachez l\'image ou le texte',
        selectFromFiles: 'Choisir un fichier',
        maximumFileSize: 'Taille de fichier maximale',
        maximumFileSizeError: 'Taille maximale du fichier dÃ©passÃ©e',
        url: 'URL de l\'image',
        remove: 'Supprimer l\'image',
        original: 'Original'
      },
      video: {
        video: 'VidÃ©o',
        videoLink: 'Lien vidÃ©o',
        insert: 'InsÃ©rer une vidÃ©o',
        url: 'URL de la vidÃ©o',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion ou Youku)'
      },
      link: {
        link: 'Lien',
        insert: 'InsÃ©rer un lien',
        unlink: 'Supprimer un lien',
        edit: 'Modifier',
        textToDisplay: 'Texte Ã  afficher',
        url: 'URL du lien',
        openInNewWindow: 'Ouvrir dans une nouvelle fenÃªtre'
      },
      table: {
        table: 'Tableau',
        addRowAbove: 'Ajouter une ligne au-dessus',
        addRowBelow: 'Ajouter une ligne en dessous',
        addColLeft: 'Ajouter une colonne Ã  gauche',
        addColRight: 'Ajouter une colonne Ã  droite',
        delRow: 'Supprimer la ligne',
        delCol: 'Supprimer la colonne',
        delTable: 'Supprimer le tableau'
      },
      hr: {
        insert: 'InsÃ©rer une ligne horizontale'
      },
      style: {
        style: 'Style',
        p: 'Normal',
        blockquote: 'Citation',
        pre: 'Code source',
        h1: 'Titre 1',
        h2: 'Titre 2',
        h3: 'Titre 3',
        h4: 'Titre 4',
        h5: 'Titre 5',
        h6: 'Titre 6'
      },
      lists: {
        unordered: 'Liste Ã  puces',
        ordered: 'Liste numÃ©rotÃ©e'
      },
      options: {
        help: 'Aide',
        fullscreen: 'Plein Ã©cran',
        codeview: 'Afficher le code HTML'
      },
      paragraph: {
        paragraph: 'Paragraphe',
        outdent: 'Diminuer le retrait',
        indent: 'Augmenter le retrait',
        left: 'Aligner Ã  gauche',
        center: 'Centrer',
        right: 'Aligner Ã  droite',
        justify: 'Justifier'
      },
      color: {
        recent: 'DerniÃ¨re couleur sÃ©lectionnÃ©e',
        more: 'Plus de couleurs',
        background: 'Couleur de fond',
        foreground: 'Couleur de police',
        transparent: 'Transparent',
        setTransparent: 'DÃ©finir la transparence',
        reset: 'Restaurer',
        resetToDefault: 'Restaurer la couleur par dÃ©faut'
      },
      shortcut: {
        shortcuts: 'Raccourcis',
        close: 'Fermer',
        textFormatting: 'Mise en forme du texte',
        action: 'Action',
        paragraphFormatting: 'Mise en forme des paragraphes',
        documentStyle: 'Style du document',
        extraKeys: 'Touches supplÃ©mentaires'
      },
      help: {
        'insertParagraph': 'InsÃ©rer paragraphe',
        'undo': 'DÃ©faire la derniÃ¨re commande',
        'redo': 'Refaire la derniÃ¨re commande',
        'tab': 'Tabulation',
        'untab': 'Tabulation arriÃ¨re',
        'bold': 'Mettre en caractÃ¨re gras',
        'italic': 'Mettre en italique',
        'underline': 'Mettre en soulignÃ©',
        'strikethrough': 'Mettre en texte barrÃ©',
        'removeFormat': 'Nettoyer les styles',
        'justifyLeft': 'Aligner Ã  gauche',
        'justifyCenter': 'Centrer',
        'justifyRight': 'Aligner Ã  droite',
        'justifyFull': 'Justifier Ã  gauche et Ã  droite',
        'insertUnorderedList': 'Basculer liste Ã  puces',
        'insertOrderedList': 'Basculer liste ordonnÃ©e',
        'outdent': 'Diminuer le retrait du paragraphe',
        'indent': 'Augmenter le retrait du paragraphe',
        'formatPara': 'Changer le paragraphe en cours en normal (P)',
        'formatH1': 'Changer le paragraphe en cours en entÃªte H1',
        'formatH2': 'Changer le paragraphe en cours en entÃªte H2',
        'formatH3': 'Changer le paragraphe en cours en entÃªte H3',
        'formatH4': 'Changer le paragraphe en cours en entÃªte H4',
        'formatH5': 'Changer le paragraphe en cours en entÃªte H5',
        'formatH6': 'Changer le paragraphe en cours en entÃªte H6',
        'insertHorizontalRule': 'InsÃ©rer sÃ©paration horizontale',
        'linkDialog.show': 'Afficher fenÃªtre d\'hyperlien'
      },
      history: {
        undo: 'Annuler la derniÃ¨re action',
        redo: 'Restaurer la derniÃ¨re action annulÃ©e'
      },
      specialChar: {
        specialChar: 'CaractÃ¨res spÃ©ciaux',
        select: 'Choisir des caractÃ¨res spÃ©ciaux'
      }
    }
  });
})(jQuery);

/***/ })

/******/ });
});