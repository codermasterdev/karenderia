FullCalendar.globalLocales.push(function () {
  'use strict';

  var hr = {
    code: 'hr',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7, // The week that contains Jan 1st is the first week of the year.
    },
    buttonText: {
      prev: 'PrijaÅ¡nji',
      next: 'SljedeÄi',
      today: 'Danas',
      month: 'Mjesec',
      week: 'Tjedan',
      day: 'Dan',
      list: 'Raspored',
    },
    weekText: 'Tje',
    allDayText: 'Cijeli dan',
    moreLinkText: function(n) {
      return '+ joÅ¡ ' + n
    },
    noEventsText: 'Nema dogaÄaja za prikaz',
  };

  return hr;

}());
