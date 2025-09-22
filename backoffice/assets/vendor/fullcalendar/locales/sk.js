FullCalendar.globalLocales.push(function () {
  'use strict';

  var sk = {
    code: 'sk',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'PredchÃ¡dzajÃºci',
      next: 'NasledujÃºci',
      today: 'Dnes',
      month: 'Mesiac',
      week: 'TÃ½Å¾deÅ',
      day: 'DeÅ',
      list: 'Rozvrh',
    },
    weekText: 'Ty',
    allDayText: 'CelÃ½ deÅ',
    moreLinkText: function(n) {
      return '+ÄalÅ¡ie: ' + n
    },
    noEventsText: 'Å½iadne akcie na zobrazenie',
  };

  return sk;

}());
