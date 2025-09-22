FullCalendar.globalLocales.push(function () {
  'use strict';

  var fa = {
    code: 'fa',
    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12, // The week that contains Jan 1st is the first week of the year.
    },
    direction: 'rtl',
    buttonText: {
      prev: 'ÙØ¨ÙÛ',
      next: 'Ø¨Ø¹Ø¯Û',
      today: 'Ø§ÙØ±ÙØ²',
      month: 'ÙØ§Ù',
      week: 'ÙÙØªÙ',
      day: 'Ø±ÙØ²',
      list: 'Ø¨Ø±ÙØ§ÙÙ',
    },
    weekText: 'ÙÙ',
    allDayText: 'ØªÙØ§Ù Ø±ÙØ²',
    moreLinkText: function(n) {
      return 'Ø¨ÛØ´ Ø§Ø² ' + n
    },
    noEventsText: 'ÙÛÚ Ø±ÙÛØ¯Ø§Ø¯Û Ø¨Ù ÙÙØ§ÛØ´',
  };

  return fa;

}());
