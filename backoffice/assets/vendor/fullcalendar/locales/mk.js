FullCalendar.globalLocales.push(function () {
  'use strict';

  var mk = {
    code: 'mk',
    buttonText: {
      prev: 'Ð¿ÑÐµÑÑÐ¾Ð´Ð½Ð¾',
      next: 'ÑÐ»ÐµÐ´Ð½Ð¾',
      today: 'ÐÐµÐ½ÐµÑ',
      month: 'ÐÐµÑÐµÑ',
      week: 'ÐÐµÐ´ÐµÐ»Ð°',
      day: 'ÐÐµÐ½',
      list: 'ÐÑÐ°ÑÐ¸Ðº',
    },
    weekText: 'Ð¡ÐµÐ´',
    allDayText: 'Ð¦ÐµÐ» Ð´ÐµÐ½',
    moreLinkText: function(n) {
      return '+Ð¿Ð¾Ð²ÐµÑÐµ ' + n
    },
    noEventsText: 'ÐÐµÐ¼Ð° Ð½Ð°ÑÑÐ°Ð½Ð¸ Ð·Ð° Ð¿ÑÐ¸ÐºÐ°Ð¶ÑÐ²Ð°ÑÐµ',
  };

  return mk;

}());
