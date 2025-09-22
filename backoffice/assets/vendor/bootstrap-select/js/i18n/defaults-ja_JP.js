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
    noneSelectedText: 'é¸æããã¦ãã¾ãã',
    noneResultsText: '\'{0}\'ã¯è¦ã¤ããã¾ãã',
    countSelectedText: '{0}/{1} é¸æä¸­',
    maxOptionsText: ['é¸æä¸éæ°ãè¶ãã¦ãã¾ã(æå¤§{n}{var})', 'ã°ã«ã¼ãã®é¸æä¸éæ°ãè¶ãã¦ãã¾ã(æå¤§{n}{var})', ['ã¢ã¤ãã ', 'ã¢ã¤ãã ']],
    selectAllText: 'å¨ã¦é¸æ',
    deselectAllText: 'é¸æãã¯ãªã¢',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-ja_JP.js.map