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

/*!
 * Translated default messages for bootstrap-select.
 * Locale: AR (Arabic)
 * Author: Yasser Lotfy <y_l@alive.com>
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'ÙÙ ÙØªÙ Ø¥Ø®ØªÙØ§Ø± Ø´Ø¦',
    noneResultsText: 'ÙØ§ ØªÙØ¬Ø¯ ÙØªØ§Ø¦Ø¬ ÙØ·Ø§Ø¨ÙØ© ÙÙ {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? '{0} Ø®ÙØ§Ø± ØªÙ Ø¥Ø®ØªÙØ§Ø±Ù' : '{0} Ø®ÙØ§Ø±Ø§Øª ØªÙØª Ø¥Ø®ØªÙØ§Ø±ÙØ§';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'ØªØ®Ø·Ù Ø§ÙØ­Ø¯ Ø§ÙÙØ³ÙÙØ­ ({n} Ø®ÙØ§Ø± Ø¨Ø­Ø¯ Ø£ÙØµÙ)' : 'ØªØ®Ø·Ù Ø§ÙØ­Ø¯ Ø§ÙÙØ³ÙÙØ­ ({n} Ø®ÙØ§Ø±Ø§Øª Ø¨Ø­Ø¯ Ø£ÙØµÙ)',
        (numGroup == 1) ? 'ØªØ®Ø·Ù Ø§ÙØ­Ø¯ Ø§ÙÙØ³ÙÙØ­ ÙÙÙØ¬ÙÙØ¹Ø© ({n} Ø®ÙØ§Ø± Ø¨Ø­Ø¯ Ø£ÙØµÙ)' : 'ØªØ®Ø·Ù Ø§ÙØ­Ø¯ Ø§ÙÙØ³ÙÙØ­ ÙÙÙØ¬ÙÙØ¹Ø© ({n} Ø®ÙØ§Ø±Ø§Øª Ø¨Ø­Ø¯ Ø£ÙØµÙ)'
      ];
    },
    selectAllText: 'Ø¥Ø®ØªÙØ§Ø± Ø§ÙØ¬ÙÙØ¹',
    deselectAllText: 'Ø¥ÙØºØ§Ø¡ Ø¥Ø®ØªÙØ§Ø± Ø§ÙØ¬ÙÙØ¹',
    multipleSeparator: 'Ø '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-ar_AR.js.map