FullCalendar.globalLocales.push(function () {
  'use strict';

  var et = {
    code: 'et',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'Eelnev',
      next: 'JÃ¤rgnev',
      today: 'TÃ¤na',
      month: 'Kuu',
      week: 'NÃ¤dal',
      day: 'PÃ¤ev',
      list: 'PÃ¤evakord',
    },
    weekText: 'nÃ¤d',
    allDayText: 'Kogu pÃ¤ev',
    moreLinkText: function(n) {
      return '+ veel ' + n
    },
    noEventsText: 'Kuvamiseks puuduvad sÃ¼ndmused',
  };

  return et;

}());
