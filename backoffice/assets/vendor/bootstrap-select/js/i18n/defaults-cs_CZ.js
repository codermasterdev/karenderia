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
    noneSelectedText: 'Vyberte ze seznamu',
    noneResultsText: 'Pro hledÃ¡nÃ­ {0} nebyly nalezeny Å¾Ã¡dnÃ© vÃ½sledky',
    countSelectedText: 'VybranÃ© {0} z {1}',
    maxOptionsText: ['Limit pÅekroÄen ({n} {var} max)', 'Limit skupiny pÅekroÄen ({n} {var} max)', ['poloÅ¾ek', 'poloÅ¾ka']],
    multipleSeparator: ', ',
    selectAllText: 'Vybrat vÅ¡e',
    deselectAllText: 'ZruÅ¡it vÃ½bÄr'
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-cs_CZ.js.map