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
    noneSelectedText: 'ÚÛØ²Û Ø§ÙØªØ®Ø§Ø¨ ÙØ´Ø¯Ù Ø§Ø³Øª',
    noneResultsText: 'ÙÛØ¬ ÙØ´Ø§Ø¨ÙÛ Ø¨Ø±Ø§Û {0} Ù¾ÛØ¯Ø§ ÙØ´Ø¯',
    countSelectedText: '{0} Ø§Ø² {1} ÙÙØ±Ø¯ Ø§ÙØªØ®Ø§Ø¨ Ø´Ø¯Ù',
    maxOptionsText: ['Ø¨ÛØ´ØªØ± ÙÙÚ©Ù ÙÛØ³Øª {Ø­Ø¯Ø§Ú©Ø«Ø± {n} Ø¹Ø¯Ø¯}', 'Ø¨ÛØ´ØªØ± ÙÙÚ©Ù ÙÛØ³Øª {Ø­Ø¯Ø§Ú©Ø«Ø± {n} Ø¹Ø¯Ø¯}'],
    selectAllText: 'Ø§ÙØªØ®Ø§Ø¨ ÙÙÙ',
    deselectAllText: 'Ø§ÙØªØ®Ø§Ø¨ ÙÛÚ Ú©Ø¯Ø§Ù',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-fa_IR.js.map