FullCalendar.globalLocales.push(function () {
  'use strict';

  var bg = {
    code: 'bg',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7, // The week that contains Jan 1st is the first week of the year.
    },
    buttonText: {
      prev: 'Ð½Ð°Ð·Ð°Ð´',
      next: 'Ð½Ð°Ð¿ÑÐµÐ´',
      today: 'Ð´Ð½ÐµÑ',
      month: 'ÐÐµÑÐµÑ',
      week: 'Ð¡ÐµÐ´Ð¼Ð¸ÑÐ°',
      day: 'ÐÐµÐ½',
      list: 'ÐÑÐ°ÑÐ¸Ðº',
    },
    allDayText: 'Ð¦ÑÐ» Ð´ÐµÐ½',
    moreLinkText: function(n) {
      return '+Ð¾ÑÐµ ' + n
    },
    noEventsText: 'ÐÑÐ¼Ð° ÑÑÐ±Ð¸ÑÐ¸Ñ Ð·Ð° Ð¿Ð¾ÐºÐ°Ð·Ð²Ð°Ð½Ðµ',
  };

  return bg;

}());
