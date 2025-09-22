FullCalendar.globalLocales.push(function () {
  'use strict';

  var cs = {
    code: 'cs',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'DÅÃ­ve',
      next: 'PozdÄji',
      today: 'NynÃ­',
      month: 'MÄsÃ­c',
      week: 'TÃ½den',
      day: 'Den',
      list: 'Agenda',
    },
    weekText: 'TÃ½d',
    allDayText: 'CelÃ½ den',
    moreLinkText: function(n) {
      return '+dalÅ¡Ã­: ' + n
    },
    noEventsText: 'Å½Ã¡dnÃ© akce k zobrazenÃ­',
  };

  return cs;

}());
