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
    noneSelectedText: 'ChÆ°a chá»n',
    noneResultsText: 'KhÃ´ng cÃ³ káº¿t quáº£ cho {0}',
    countSelectedText: function (numSelected, numTotal) {
      return '{0} má»¥c ÄÃ£ chá»n';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        'KhÃ´ng thá» chá»n (giá»i háº¡n {n} má»¥c)',
        'KhÃ´ng thá» chá»n (giá»i háº¡n {n} má»¥c)'
      ];
    },
    selectAllText: 'Chá»n táº¥t cáº£',
    deselectAllText: 'Bá» chá»n',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-vi_VN.js.map