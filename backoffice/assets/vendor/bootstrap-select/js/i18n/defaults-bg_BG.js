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
    noneSelectedText: 'ÐÐ¸ÑÐ¾ Ð¸Ð·Ð±ÑÐ°Ð½Ð¾',
    noneResultsText: 'ÐÑÐ¼Ð° ÑÐµÐ·ÑÐ»ÑÐ°Ñ Ð·Ð° {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? '{0} Ð¸Ð·Ð±ÑÐ°Ð½ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ' : '{0} Ð¸Ð·Ð±ÑÐ°Ð½Ð¸ ÐµÐ»ÐµÐ¼ÐµÐ½ÑÐ°';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'ÐÐ¸Ð¼Ð¸ÑÐ° Ðµ Ð´Ð¾ÑÑÐ¸Ð³Ð½Ð°Ñ ({n} ÐµÐ»ÐµÐ¼ÐµÐ½Ñ Ð¼Ð°ÐºÑÐ¸Ð¼ÑÐ¼)' : 'ÐÐ¸Ð¼Ð¸ÑÐ° Ðµ Ð´Ð¾ÑÑÐ¸Ð³Ð½Ð°Ñ ({n} ÐµÐ»ÐµÐ¼ÐµÐ½ÑÐ° Ð¼Ð°ÐºÑÐ¸Ð¼ÑÐ¼)',
        (numGroup == 1) ? 'ÐÑÑÐ¿Ð¾Ð²Ð¸Ñ Ð»Ð¸Ð¼Ð¸Ñ Ðµ Ð´Ð¾ÑÑÐ¸Ð³Ð½Ð°Ñ ({n} ÐµÐ»ÐµÐ¼ÐµÐ½Ñ Ð¼Ð°ÐºÑÐ¸Ð¼ÑÐ¼)' : 'ÐÑÑÐ¿Ð¾Ð²Ð¸Ñ Ð»Ð¸Ð¼Ð¸Ñ Ðµ Ð´Ð¾ÑÑÐ¸Ð³Ð½Ð°Ñ ({n} ÐµÐ»ÐµÐ¼ÐµÐ½ÑÐ° Ð¼Ð°ÐºÑÐ¸Ð¼ÑÐ¼)'
      ];
    },
    selectAllText: 'ÐÐ·Ð±ÐµÑÐ¸ Ð²ÑÐ¸ÑÐºÐ¸',
    deselectAllText: 'Ð Ð°Ð·Ð¼Ð°ÑÐºÐ¸ÑÐ°Ð¹ Ð²ÑÐ¸ÑÐºÐ¸',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-bg_BG.js.map