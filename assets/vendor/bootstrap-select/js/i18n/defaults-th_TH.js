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
    noneSelectedText: 'à¹à¸¡à¹à¹à¸à¹à¹à¸¥à¸·à¸­à¸à¸­à¸°à¹à¸£à¹à¸¥à¸¢',
    noneResultsText: 'à¹à¸¡à¹à¸¡à¸µà¸à¸¥à¸¥à¸±à¸à¸à¹à¸à¸µà¹à¸à¸£à¸à¸à¸±à¸ {0}',
    countSelectedText: '{0} à¸£à¸²à¸¢à¸à¸²à¸£à¸à¸µà¹à¹à¸¥à¸·à¸­à¸',
    maxOptionsText: ['à¹à¸à¸´à¸à¸à¸³à¸à¸§à¸à¸à¸µà¹à¸à¸³à¸«à¸à¸ (à¸ªà¸¹à¸à¸ªà¸¸à¸ {n} à¸£à¸²à¸¢à¸à¸²à¸£)', 'à¹à¸à¸´à¸à¸à¸³à¸à¸§à¸à¸à¸µà¹à¸à¸³à¸«à¸à¸ (à¸ªà¸¹à¸à¸ªà¸¸à¸ {n} à¸à¸¥à¸¸à¹à¸¡)'],
    selectAllText: 'à¹à¸¥à¸·à¸­à¸à¸à¸±à¹à¸à¸«à¸¡à¸',
    deselectAllText: 'à¹à¸¡à¹à¹à¸¥à¸·à¸­à¸à¸à¸±à¹à¸à¸«à¸¡à¸',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-th_TH.js.map