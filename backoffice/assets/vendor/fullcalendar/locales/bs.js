FullCalendar.globalLocales.push(function () {
  'use strict';

  var bs = {
    code: 'bs',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7, // The week that contains Jan 1st is the first week of the year.
    },
    buttonText: {
      prev: 'ProÅ¡li',
      next: 'SljedeÄi',
      today: 'Danas',
      month: 'Mjesec',
      week: 'Sedmica',
      day: 'Dan',
      list: 'Raspored',
    },
    weekText: 'Sed',
    allDayText: 'Cijeli dan',
    moreLinkText: function(n) {
      return '+ joÅ¡ ' + n
    },
    noEventsText: 'Nema dogaÄaja za prikazivanje',
  };

  return bs;

}());
