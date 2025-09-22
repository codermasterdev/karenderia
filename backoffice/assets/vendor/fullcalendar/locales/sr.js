FullCalendar.globalLocales.push(function () {
  'use strict';

  var sr = {
    code: 'sr',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7, // The week that contains Jan 1st is the first week of the year.
    },
    buttonText: {
      prev: 'Prethodna',
      next: 'SledecÌi',
      today: 'Danas',
      month: 'MÐµsÐµc',
      week: 'NÐµdÐµlja',
      day: 'Dan',
      list: 'PlanÐµr',
    },
    weekText: 'Sed',
    allDayText: 'CÐµo dan',
    moreLinkText: function(n) {
      return '+ joÅ¡ ' + n
    },
    noEventsText: 'NÐµma dogaÄaja za prikaz',
  };

  return sr;

}());
