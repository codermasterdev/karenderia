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
    noneSelectedText: 'ÐÑÑÐ¾Ð³Ð¾ Ð½Ðµ Ð²Ð¸Ð±ÑÐ°Ð½Ð¾',
    noneResultsText: 'ÐÐ±ÑÐ³ÑÐ² Ð½Ðµ Ð·Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾ {0}',
    countSelectedText: 'ÐÐ¸Ð±ÑÐ°Ð½Ð¾ {0} ÑÐ· {1}',
    maxOptionsText: ['ÐÐ¾ÑÑÐ³Ð½ÑÑÐ° Ð¼ÐµÐ¶Ð° ({n} {var} Ð¼Ð°ÐºÑÐ¸Ð¼ÑÐ¼)', 'ÐÐ¾ÑÑÐ³Ð½ÑÑÐ° Ð¼ÐµÐ¶Ð° Ð² Ð³ÑÑÐ¿Ñ ({n} {var} Ð¼Ð°ÐºÑÐ¸Ð¼ÑÐ¼)', ['items', 'item']],
    multipleSeparator: ', ',
    selectAllText: 'ÐÐ¸Ð±ÑÐ°ÑÐ¸ Ð²ÑÐµ',
    deselectAllText: 'Ð¡ÐºÐ°ÑÑÐ²Ð°ÑÐ¸ Ð²Ð¸Ð±ÑÑ ÑÑÑ'
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-ua_UA.js.map