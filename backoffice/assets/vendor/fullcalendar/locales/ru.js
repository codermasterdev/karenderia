FullCalendar.globalLocales.push(function () {
  'use strict';

  var ru = {
    code: 'ru',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'ÐÑÐµÐ´',
      next: 'Ð¡Ð»ÐµÐ´',
      today: 'Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ',
      month: 'ÐÐµÑÑÑ',
      week: 'ÐÐµÐ´ÐµÐ»Ñ',
      day: 'ÐÐµÐ½Ñ',
      list: 'ÐÐ¾Ð²ÐµÑÑÐºÐ° Ð´Ð½Ñ',
    },
    weekText: 'ÐÐµÐ´',
    allDayText: 'ÐÐµÑÑ Ð´ÐµÐ½Ñ',
    moreLinkText: function(n) {
      return '+ ÐµÑÑ ' + n
    },
    noEventsText: 'ÐÐµÑ ÑÐ¾Ð±ÑÑÐ¸Ð¹ Ð´Ð»Ñ Ð¾ÑÐ¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ñ',
  };

  return ru;

}());
