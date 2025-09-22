FullCalendar.globalLocales.push(function () {
  'use strict';

  var ro = {
    code: 'ro',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7, // The week that contains Jan 1st is the first week of the year.
    },
    buttonText: {
      prev: 'precedentÄ',
      next: 'urmÄtoare',
      today: 'Azi',
      month: 'LunÄ',
      week: 'SÄptÄmÃ¢nÄ',
      day: 'Zi',
      list: 'AgendÄ',
    },
    weekText: 'SÄpt',
    allDayText: 'ToatÄ ziua',
    moreLinkText: function(n) {
      return '+alte ' + n
    },
    noEventsText: 'Nu existÄ evenimente de afiÈat',
  };

  return ro;

}());
