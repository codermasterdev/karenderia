FullCalendar.globalLocales.push(function () {
  'use strict';

  var kk = {
    code: 'kk',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7, // The week that contains Jan 1st is the first week of the year.
    },
    buttonText: {
      prev: 'ÐÐ»Ð´ÑÒ£ÒÑ',
      next: 'ÐÐµÐ»ÐµÑÑ',
      today: 'ÐÒ¯Ð³ÑÐ½',
      month: 'ÐÐ¹',
      week: 'ÐÐ¿ÑÐ°',
      day: 'ÐÒ¯Ð½',
      list: 'ÐÒ¯Ð½ ÑÓÑÑÑÐ±Ñ',
    },
    weekText: 'ÐÐµ',
    allDayText: 'ÐÒ¯Ð½Ñ Ð±Ð¾Ð¹Ñ',
    moreLinkText: function(n) {
      return '+ ÑÐ°ÒÑ ' + n
    },
    noEventsText: 'ÐÓ©ÑÑÐµÑÑ Ò¯ÑÑÐ½ Ð¾ÒÐ¸ÒÐ°Ð»Ð°Ñ Ð¶Ð¾Ò',
  };

  return kk;

}());
