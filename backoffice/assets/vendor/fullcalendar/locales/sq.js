FullCalendar.globalLocales.push(function () {
  'use strict';

  var sq = {
    code: 'sq',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'mbrapa',
      next: 'PÃ«rpara',
      today: 'sot',
      month: 'Muaj',
      week: 'JavÃ«',
      day: 'DitÃ«',
      list: 'ListÃ«',
    },
    weekText: 'Ja',
    allDayText: 'GjithÃ« ditÃ«n',
    moreLinkText: function(n) {
      return '+mÃ« tepÃ«r ' + n
    },
    noEventsText: 'Nuk ka evente pÃ«r tÃ« shfaqur',
  };

  return sq;

}());
