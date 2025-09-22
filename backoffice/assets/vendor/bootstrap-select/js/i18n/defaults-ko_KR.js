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
    noneSelectedText: 'í­ëª©ì ì íí´ì£¼ì¸ì',
    noneResultsText: '{0} ê²ì ê²°ê³¼ê° ììµëë¤',
    countSelectedText: function (numSelected, numTotal) {
      return '{0}ê°ë¥¼ ì ííììµëë¤';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        '{n}ê°ê¹ì§ ì í ê°ë¥í©ëë¤',
        'í´ë¹ ê·¸ë£¹ì {n}ê°ê¹ì§ ì í ê°ë¥í©ëë¤'
      ];
    },
    selectAllText: 'ì ì²´ì í',
    deselectAllText: 'ì ì²´í´ì ',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-ko_KR.js.map