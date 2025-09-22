/*!
 * Bootstrap-select v1.13.14 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function (jQuery) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'æ²æé¸åä»»ä½é ç®',
    noneResultsText: 'æ²ææ¾å°ç¬¦åççµæ',
    countSelectedText: 'å·²ç¶é¸å{0}åé ç®',
    maxOptionsText: ['è¶ééå¶ (æå¤é¸æ{n}é )', 'è¶ééå¶(æå¤é¸æ{n}çµ)'],
    selectAllText: 'é¸åå¨é¨',
    deselectAllText: 'å¨é¨åæ¶',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-zh_TW.js.map