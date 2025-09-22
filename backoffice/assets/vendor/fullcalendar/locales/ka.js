FullCalendar.globalLocales.push(function () {
  'use strict';

  var ka = {
    code: 'ka',
    week: {
      dow: 1,
      doy: 7,
    },
    buttonText: {
      prev: 'á¬ááá',
      next: 'á¨áááááá',
      today: 'áá¦áá¡',
      month: 'ááá',
      week: 'áááá á',
      day: 'áá¦á',
      list: 'áá¦áá¡ á¬áá¡á ááá',
    },
    weekText: 'áá',
    allDayText: 'ááááá áá¦á',
    moreLinkText: function(n) {
      return '+ ááááá ' + n
    },
    noEventsText: 'á¦áááá¡á«áááááá áá  áá áá¡',
  };

  return ka;

}());
