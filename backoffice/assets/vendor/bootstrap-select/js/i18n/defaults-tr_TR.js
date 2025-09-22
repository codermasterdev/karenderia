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
    noneSelectedText: 'HiÃ§biri seÃ§ilmedi',
    noneResultsText: 'HiÃ§bir sonuÃ§ bulunamadÄ± {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? '{0} Ã¶Äe seÃ§ildi' : '{0} Ã¶Äe seÃ§ildi';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit aÅÄ±ldÄ± (maksimum {n} sayÄ±da Ã¶Äe )' : 'Limit aÅÄ±ldÄ± (maksimum {n} sayÄ±da Ã¶Äe)',
        (numGroup == 1) ? 'Grup limiti aÅÄ±ldÄ± (maksimum {n} sayÄ±da Ã¶Äe)' : 'Grup limiti aÅÄ±ldÄ± (maksimum {n} sayÄ±da Ã¶Äe)'
      ];
    },
    selectAllText: 'TÃ¼mÃ¼nÃ¼ SeÃ§',
    deselectAllText: 'SeÃ§iniz',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-tr_TR.js.map