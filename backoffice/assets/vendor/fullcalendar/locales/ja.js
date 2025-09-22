FullCalendar.globalLocales.push(function () {
  'use strict';

  var ja = {
    code: 'ja',
    buttonText: {
      prev: 'å',
      next: 'æ¬¡',
      today: 'ä»æ¥',
      month: 'æ',
      week: 'é±',
      day: 'æ¥',
      list: 'äºå®ãªã¹ã',
    },
    weekText: 'é±',
    allDayText: 'çµæ¥',
    moreLinkText: function(n) {
      return 'ä» ' + n + ' ä»¶'
    },
    noEventsText: 'è¡¨ç¤ºããäºå®ã¯ããã¾ãã',
  };

  return ja;

}());
