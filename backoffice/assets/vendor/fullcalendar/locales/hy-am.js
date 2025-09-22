FullCalendar.globalLocales.push(function () {
  'use strict';

  var hyAm = {
    code: 'hy-am',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'ÕÕ¡Õ­Õ¸ÖÕ¤',
      next: 'ÕÕ¡Õ»Õ¸ÖÕ¤',
      today: 'Ô±ÕµÕ½ÖÖ',
      month: 'Ô±Õ´Õ«Õ½',
      week: 'ÕÕ¡Õ¢Õ¡Õ©',
      day: 'ÕÖ',
      list: 'ÕÖÕ¾Õ¡ ÖÕ¸ÖÖÕ¡Õ¯',
    },
    weekText: 'ÕÕ¡Õ¢',
    allDayText: 'Ô±Õ´Õ¢Õ¸Õ²Õ» ÖÖ',
    moreLinkText: function(n) {
      return '+ ÖÕ½ ' + n
    },
    noEventsText: 'Ô²Õ¡ÖÕ¡Õ¯Õ¡ÕµÕ¸ÖÕ´ Õ§ Õ«ÖÕ¡Õ¤Õ¡ÖÕ±Õ¸ÖÕ©ÕµÕ¸ÖÕ¶Õ¨ ÖÕ¸ÖÖÕ¡Õ¤ÖÕ¥Õ¬Õ¸Ö',
  };

  return hyAm;

}());
