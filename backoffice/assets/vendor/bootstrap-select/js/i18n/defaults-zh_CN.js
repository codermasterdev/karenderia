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
    noneSelectedText: 'æ²¡æéä¸­ä»»ä½é¡¹',
    noneResultsText: 'æ²¡ææ¾å°å¹éé¡¹',
    countSelectedText: 'éä¸­{1}ä¸­ç{0}é¡¹',
    maxOptionsText: ['è¶åºéå¶ (æå¤éæ©{n}é¡¹)', 'ç»éæ©è¶åºéå¶(æå¤éæ©{n}ç»)'],
    multipleSeparator: ', ',
    selectAllText: 'å¨é',
    deselectAllText: 'åæ¶å¨é'
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-zh_CN.js.map