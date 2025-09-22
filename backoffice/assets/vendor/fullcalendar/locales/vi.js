FullCalendar.globalLocales.push(function () {
  'use strict';

  var vi = {
    code: 'vi',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'TrÆ°á»c',
      next: 'Tiáº¿p',
      today: 'HÃ´m nay',
      month: 'ThÃ¡ng',
      week: 'TuÃ¢Ìn',
      day: 'NgÃ y',
      list: 'Lá»ch biá»u',
    },
    weekText: 'Tu',
    allDayText: 'Cáº£ ngÃ y',
    moreLinkText: function(n) {
      return '+ thÃªm ' + n
    },
    noEventsText: 'KhÃ´ng cÃ³ sá»± kiá»n Äá» hiá»n thá»',
  };

  return vi;

}());
