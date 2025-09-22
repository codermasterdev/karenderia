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
    noneSelectedText: 'áá·ááá¶áá¢ááá¸áá¶ááááá¾ááá¾á',
    noneResultsText: 'áá·ááá¶ááááááá {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? '{0} áá¶áá»ááááá¶ááááá¾á' : '{0} áá¶áá»ááááá¶ááááá¾á';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'áá¶áááááááááááá ( {n} áá¶áá»á¢áá·áááá¶)' : 'á¢áá·áááá¶áá¶áááááááááááá ( {n} áá¶áá»)',
        (numGroup == 1) ? 'áááááááááááá»ááá¶áááá ( {n} á¢áá·áááá¶áá¶áá»)' : 'á¢áá·áááá¶áááá»ááá¶áááááááááááá ( {n} áá¶áá»)'
      ];
    },
    selectAllText: 'áááá¾áâááâáá¶ááá¢áá',
    deselectAllText: 'áá·ááááá¾áâááâáá¶ááá¢á',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-kh_KM.js.map